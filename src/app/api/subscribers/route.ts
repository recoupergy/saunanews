import { NextRequest, NextResponse } from 'next/server';

async function getRedis() {
  const { Redis } = await import('@upstash/redis');
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });
}

export async function GET(request: NextRequest) {
  // Simple token auth
  const authHeader = request.headers.get('authorization');
  const expectedKey = process.env.ADMIN_API_KEY;

  if (!expectedKey || authHeader !== `Bearer ${expectedKey}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return NextResponse.json({ error: 'Redis not configured' }, { status: 503 });
  }

  try {
    const redis = await getRedis();
    const emails = await redis.smembers('subscribers');
    const count = emails.length;

    // Get details for each subscriber
    const subscribers = await Promise.all(
      emails.map(async (email) => {
        const details = await redis.hgetall(`subscriber:${email}`);
        return details || { email };
      })
    );

    // Sort by subscription date, newest first
    subscribers.sort((a, b) => {
      const dateA = (a as Record<string, string>).subscribedAt || '';
      const dateB = (b as Record<string, string>).subscribedAt || '';
      return dateB.localeCompare(dateA);
    });

    return NextResponse.json({ count, subscribers });
  } catch (error) {
    console.error('[Subscribers List Error]', error);
    return NextResponse.json({ error: 'Failed to fetch subscribers' }, { status: 500 });
  }
}
