import { NextRequest, NextResponse } from 'next/server';

import { InputValidationError, normalizeSubscribeInput, parseJsonWithLimit } from '@/lib/api-input';
import { enqueueFallback } from '@/lib/fallback-queue';

const MAX_SUBSCRIBE_BODY_BYTES = 4 * 1024;
const RATE_LIMIT_WINDOW_SECONDS = 60 * 60;
const IP_ATTEMPT_LIMIT = 5;
const EMAIL_ATTEMPT_LIMIT = 3;

// Disposable email domains to reject
const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com', 'guerrillamail.com', 'tempmail.com', 'throwaway.email',
  'yopmail.com', 'sharklasers.com', 'guerrillamailblock.com', 'grr.la',
  'dispostable.com', 'trashmail.com', 'maildrop.cc', '10minutemail.com',
  'temp-mail.org', 'fakeinbox.com', 'mailnesia.com',
]);

async function getRedis() {
  // Dynamic import so the build doesn't fail without env vars
  const { Redis } = await import('@upstash/redis');
  return new Redis({
    url: process.env.KV_REST_API_URL!,
    token: process.env.KV_REST_API_TOKEN!,
  });
}

function getRequestId(request: NextRequest) {
  return request.headers.get('x-request-id') ?? crypto.randomUUID();
}

function getClientIp(request: NextRequest) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || 'unknown';
}

function logEvent(level: 'info' | 'warn' | 'error', event: string, details: Record<string, unknown>) {
  const payload = {
    route: '/api/subscribe',
    event,
    ...details,
  };

  if (level === 'error') {
    console.error(payload);
  } else if (level === 'warn') {
    console.warn(payload);
  } else {
    console.info(payload);
  }
}

export async function POST(request: NextRequest) {
  const requestId = getRequestId(request);

  try {
    const payload = await parseJsonWithLimit<Record<string, unknown>>(request, MAX_SUBSCRIBE_BODY_BYTES);
    const { email, source, website } = normalizeSubscribeInput(payload);

    // Honeypot check: if the hidden 'website' field is filled, it's a bot
    if (website) {
      logEvent('warn', 'subscribe_honeypot_triggered', { requestId });
      // Return success to not tip off the bot, but don't store anything
      return NextResponse.json({ success: true, message: "You're in!", requestId });
    }

    // Check for disposable email domains
    const domain = email.split('@')[1];
    if (DISPOSABLE_DOMAINS.has(domain)) {
      logEvent('warn', 'subscribe_disposable_email_rejected', { requestId, domain });
      return NextResponse.json(
        { success: false, message: 'Please use a permanent email address.', requestId },
        { status: 400 }
      );
    }

    const ip = getClientIp(request);

    // Check if Redis is configured
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      await enqueueFallback({
        type: 'subscribe',
        queuedAt: new Date().toISOString(),
        reason: 'redis_not_configured',
        payload: { email, source, ip, requestId },
      });

      return NextResponse.json({
        success: true,
        message: "You're in! Watch for our next issue.",
        requestId,
      });
    }

    try {
      const redis = await getRedis();

      // Rate limiting by IP + by email
      const ipRateLimitKey = `ratelimit:subscribe:ip:${ip}`;
      const emailRateLimitKey = `ratelimit:subscribe:email:${email}`;

      const ipAttempts = await redis.incr(ipRateLimitKey);
      if (ipAttempts === 1) {
        await redis.expire(ipRateLimitKey, RATE_LIMIT_WINDOW_SECONDS);
      }

      const emailAttempts = await redis.incr(emailRateLimitKey);
      if (emailAttempts === 1) {
        await redis.expire(emailRateLimitKey, RATE_LIMIT_WINDOW_SECONDS);
      }

      if (ipAttempts > IP_ATTEMPT_LIMIT || emailAttempts > EMAIL_ATTEMPT_LIMIT) {
        const overLimitBy = Math.max(
          ipAttempts - IP_ATTEMPT_LIMIT,
          emailAttempts - EMAIL_ATTEMPT_LIMIT,
          0,
        );
        const backoffSeconds = Math.min(3600, 30 * (2 ** overLimitBy));

        logEvent('warn', 'subscribe_rate_limit_blocked', {
          requestId,
          ipAttempts,
          emailAttempts,
          backoffSeconds,
        });

        return NextResponse.json(
          {
            success: false,
            message: 'Too many attempts. Please try again later.',
            requestId,
            retryAfterSeconds: backoffSeconds,
          },
          {
            status: 429,
            headers: {
              'Retry-After': String(backoffSeconds),
              'x-request-id': requestId,
            },
          }
        );
      }

      // Check if already subscribed
      const exists = await redis.sismember('subscribers', email);
      if (exists) {
        return NextResponse.json({
          success: true,
          message: "You're already subscribed. We'll keep the good stuff coming.",
          requestId,
        });
      }

      const subscribedAt = new Date().toISOString();

      // Store the subscription
      await redis.sadd('subscribers', email);
      await redis.hset(`subscriber:${email}`, {
        email,
        subscribedAt,
        source,
        ip,
      });
      await redis.zadd('subscribers:byDate', { score: Date.parse(subscribedAt), member: email });
    } catch (redisError) {
      await enqueueFallback({
        type: 'subscribe',
        queuedAt: new Date().toISOString(),
        reason: 'redis_unavailable',
        payload: {
          email,
          source,
          ip,
          requestId,
          deliveryError: redisError instanceof Error ? redisError.message : String(redisError),
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: "You're in! Watch for our next issue.",
      requestId,
    });
  } catch (error) {
    if (error instanceof InputValidationError) {
      return NextResponse.json(
        { success: false, message: error.message, requestId },
        { status: error.status, headers: { 'x-request-id': requestId } }
      );
    }

    try {
      await enqueueFallback({
        type: 'subscribe',
        queuedAt: new Date().toISOString(),
        reason: 'subscribe_processing_error',
        payload: { requestId, error: error instanceof Error ? error.message : String(error) },
      });
    } catch (queueError) {
      logEvent('error', 'subscribe_queue_error', {
        requestId,
        error: queueError instanceof Error ? queueError.message : String(queueError),
      });
    }

    logEvent('error', 'subscribe_error', {
      requestId,
      error: error instanceof Error ? error.message : String(error),
    });

    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.', requestId },
      { status: 500, headers: { 'x-request-id': requestId } }
    );
  }
}
