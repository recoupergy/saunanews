import { NextRequest, NextResponse } from 'next/server';

import { InputValidationError, normalizeSubscribeInput, parseJsonWithLimit } from '@/lib/api-input';
import { enqueueFallback } from '@/lib/fallback-queue';

const MAX_SUBSCRIBE_BODY_BYTES = 4 * 1024;

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

export async function POST(request: NextRequest) {
  try {
    const payload = await parseJsonWithLimit<Record<string, unknown>>(request, MAX_SUBSCRIBE_BODY_BYTES);
    const { email, source, website } = normalizeSubscribeInput(payload);

    // Honeypot check: if the hidden 'website' field is filled, it's a bot
    if (website) {
      // Return success to not tip off the bot, but don't store anything
      return NextResponse.json({ success: true, message: "You're in!" });
    }

    // Check for disposable email domains
    const domain = email.split('@')[1];
    if (DISPOSABLE_DOMAINS.has(domain)) {
      return NextResponse.json(
        { success: false, message: 'Please use a permanent email address.' },
        { status: 400 }
      );
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || 'unknown';

    // Check if Redis is configured
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      await enqueueFallback({
        type: 'subscribe',
        queuedAt: new Date().toISOString(),
        reason: 'redis_not_configured',
        payload: { email, source, ip },
      });

      return NextResponse.json({
        success: true,
        message: "You're in! Watch for our next issue.",
      });
    }

    try {
      const redis = await getRedis();

      // Rate limiting by IP
      const rateLimitKey = `ratelimit:subscribe:${ip}`;
      const attempts = await redis.incr(rateLimitKey);

      if (attempts === 1) {
        // Set expiry on first attempt (1 hour window)
        await redis.expire(rateLimitKey, 3600);
      }

      if (attempts > 5) {
        return NextResponse.json(
          { success: false, message: 'Too many attempts. Please try again later.' },
          { status: 429 }
        );
      }

      // Check if already subscribed
      const exists = await redis.sismember('subscribers', email);
      if (exists) {
        return NextResponse.json({
          success: true,
          message: "You're already subscribed. We'll keep the good stuff coming.",
        });
      }

      // Store the subscription
      await redis.sadd('subscribers', email);
      await redis.hset(`subscriber:${email}`, {
        email,
        subscribedAt: new Date().toISOString(),
        source,
        ip,
      });
    } catch (redisError) {
      await enqueueFallback({
        type: 'subscribe',
        queuedAt: new Date().toISOString(),
        reason: 'redis_unavailable',
        payload: {
          email,
          source,
          ip,
          deliveryError: redisError instanceof Error ? redisError.message : String(redisError),
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: "You're in! Watch for our next issue.",
    });
  } catch (error) {
    if (error instanceof InputValidationError) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: error.status }
      );
    }

    try {
      await enqueueFallback({
        type: 'subscribe',
        queuedAt: new Date().toISOString(),
        reason: 'subscribe_processing_error',
        payload: { error: error instanceof Error ? error.message : String(error) },
      });
    } catch (queueError) {
      console.error('[Newsletter Subscribe Queue Error]', queueError);
    }

    console.error('[Newsletter Subscribe Error]', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
