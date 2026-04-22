import { NextRequest, NextResponse } from 'next/server';

const DEFAULT_PAGE_SIZE = 100;
const MAX_PAGE_SIZE = 500;

async function getRedis() {
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

function parsePageSize(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get('limit');
  const value = Number(raw ?? DEFAULT_PAGE_SIZE);

  if (!Number.isFinite(value) || value < 1) {
    return DEFAULT_PAGE_SIZE;
  }

  return Math.min(MAX_PAGE_SIZE, Math.trunc(value));
}

function isAuthorized(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const keys = [process.env.ADMIN_API_KEY, process.env.ADMIN_API_KEY_PREVIOUS]
    .filter((value): value is string => Boolean(value));

  if (keys.length === 0 || !authHeader?.startsWith('Bearer ')) {
    return false;
  }

  const token = authHeader.slice('Bearer '.length);
  return keys.includes(token);
}

function isIpAllowed(request: NextRequest) {
  const allowList = process.env.ADMIN_ALLOWLIST_IPS;
  if (!allowList) {
    return true;
  }

  const allowedIps = allowList
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);

  if (allowedIps.length === 0) {
    return true;
  }

  return allowedIps.includes(getClientIp(request));
}

async function readSubscriberDetails(redis: Awaited<ReturnType<typeof getRedis>>, emails: string[]) {
  const batchSize = 100;
  const subscribers: Array<Record<string, string>> = [];

  for (let idx = 0; idx < emails.length; idx += batchSize) {
    const batch = emails.slice(idx, idx + batchSize);
    const batchDetails = await Promise.all(
      batch.map(async (email) => {
        const details = await redis.hgetall<Record<string, string>>(`subscriber:${email}`);
        return details || { email };
      })
    );

    subscribers.push(...batchDetails);
  }

  subscribers.sort((a, b) => {
    const dateA = a.subscribedAt || '';
    const dateB = b.subscribedAt || '';
    return dateB.localeCompare(dateA);
  });

  return subscribers;
}

export async function GET(request: NextRequest) {
  const requestId = getRequestId(request);

  if (!isAuthorized(request) || !isIpAllowed(request)) {
    return NextResponse.json(
      { error: 'Unauthorized', requestId },
      { status: 401, headers: { 'x-request-id': requestId } }
    );
  }

  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return NextResponse.json({ error: 'Redis not configured', requestId }, { status: 503 });
  }

  const cursor = request.nextUrl.searchParams.get('cursor') ?? '0';
  const pageSize = parsePageSize(request);

  try {
    const redis = await getRedis();

    const [nextCursor, entries] = await redis.sscan('subscribers', cursor, {
      count: pageSize,
    });

    const emails = entries.map((value) => String(value));
    const subscribers = await readSubscriberDetails(redis, emails);

    const count = await redis.scard('subscribers');

    const response = {
      count,
      pageSize,
      cursor,
      nextCursor,
      hasMore: nextCursor !== '0',
      subscribers,
      requestId,
    };

    console.info({
      route: '/api/subscribers',
      event: 'admin_subscribers_list_access',
      requestId,
      ip: getClientIp(request),
      pageSize,
      cursor,
      returned: subscribers.length,
    });

    return NextResponse.json(response, { headers: { 'x-request-id': requestId } });
  } catch (error) {
    console.error('[Subscribers List Error]', { requestId, error });
    return NextResponse.json(
      { error: 'Failed to fetch subscribers', requestId },
      { status: 500, headers: { 'x-request-id': requestId } }
    );
  }
}
