import { NextRequest, NextResponse } from 'next/server';

// Disposable email domains to reject
const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com', 'guerrillamail.com', 'tempmail.com', 'throwaway.email',
  'yopmail.com', 'sharklasers.com', 'guerrillamailblock.com', 'grr.la',
  'dispostable.com', 'trashmail.com', 'maildrop.cc', '10minutemail.com',
  'temp-mail.org', 'fakeinbox.com', 'mailnesia.com',
]);

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

async function getRedis() {
  // Dynamic import so the build doesn't fail without env vars
  const { Redis } = await import('@upstash/redis');
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, website } = body; // 'website' is the honeypot field

    // Honeypot check: if the hidden 'website' field is filled, it's a bot
    if (website) {
      // Return success to not tip off the bot, but don't store anything
      return NextResponse.json({ success: true, message: "You're in!" });
    }

    // Validate email presence
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Please enter your email address.' },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();

    // Validate email format
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Check for disposable email domains
    const domain = trimmedEmail.split('@')[1];
    if (DISPOSABLE_DOMAINS.has(domain)) {
      return NextResponse.json(
        { success: false, message: 'Please use a permanent email address.' },
        { status: 400 }
      );
    }

    // Check if Redis is configured
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      // Graceful fallback: log the signup attempt if Redis isn't configured yet
      console.log(`[Newsletter Signup] ${trimmedEmail} at ${new Date().toISOString()}`);
      return NextResponse.json({
        success: true,
        message: "You're in! Watch for our next issue.",
      });
    }

    const redis = await getRedis();

    // Rate limiting by IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || 'unknown';
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
    const exists = await redis.sismember('subscribers', trimmedEmail);
    if (exists) {
      return NextResponse.json({
        success: true,
        message: "You're already subscribed. We'll keep the good stuff coming.",
      });
    }

    // Store the subscription
    await redis.sadd('subscribers', trimmedEmail);
    await redis.hset(`subscriber:${trimmedEmail}`, {
      email: trimmedEmail,
      subscribedAt: new Date().toISOString(),
      source: body.source || 'website',
      ip: ip,
    });

    return NextResponse.json({
      success: true,
      message: "You're in! Watch for our next issue.",
    });
  } catch (error) {
    console.error('[Newsletter Subscribe Error]', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
