import { NextRequest, NextResponse } from 'next/server';

import { getLatestArticles } from '@/data/articles';
import { enqueueFallback } from '@/lib/fallback-queue';
import { postTweet } from '@/lib/twitter';

const POSTED_SLUGS_KEY = 'social:twitter:posted-slugs';
const POSTED_META_KEY = 'social:twitter:posts';

async function getRedis() {
  const { Redis } = await import('@upstash/redis');
  return new Redis({
    url: process.env.KV_REST_API_URL!,
    token: process.env.KV_REST_API_TOKEN!,
  });
}

function createTweetText(title: string, articleUrl: string) {
  const suffix = `\n\n${articleUrl}\n\n#Sauna #SaunaNews`;
  const maxTitleLength = 280 - suffix.length;
  const safeTitle = title.length > maxTitleLength
    ? `${title.slice(0, Math.max(0, maxTitleLength - 1)).trimEnd()}…`
    : title;

  return `${safeTitle}${suffix}`;
}

function isAuthorized(request: NextRequest) {
  const expectedToken = process.env.SOCIAL_AUTOMATION_KEY;
  if (!expectedToken) {
    return false;
  }

  const authorization = request.headers.get('authorization');
  return authorization === `Bearer ${expectedToken}`;
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }

  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return NextResponse.json(
      { success: false, message: 'Redis is required for idempotent social posting.' },
      { status: 500 }
    );
  }

  const apiKey = process.env.TWITTER_API_KEY;
  const apiSecret = process.env.TWITTER_API_SECRET;
  const accessToken = process.env.TWITTER_ACCESS_TOKEN;
  const accessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

  if (!apiKey || !apiSecret || !accessToken || !accessTokenSecret) {
    return NextResponse.json(
      { success: false, message: 'Twitter API credentials are not configured.' },
      { status: 500 }
    );
  }

  try {
    const redis = await getRedis();
    const now = new Date();
    const latestArticles = getLatestArticles().filter((article) => {
      const publishedAt = new Date(article.publishDate);
      return !Number.isNaN(publishedAt.getTime()) && publishedAt <= now;
    });

    let articleToPost = latestArticles[0];

    for (const article of latestArticles) {
      const alreadyPosted = await redis.sismember(POSTED_SLUGS_KEY, article.slug);
      if (!alreadyPosted) {
        articleToPost = article;
        break;
      }
    }

    if (!articleToPost) {
      return NextResponse.json({ success: true, message: 'No eligible articles found.' });
    }

    const alreadyPosted = await redis.sismember(POSTED_SLUGS_KEY, articleToPost.slug);
    if (alreadyPosted) {
      return NextResponse.json({
        success: true,
        message: 'Latest article has already been posted.',
        slug: articleToPost.slug,
      });
    }

    const siteUrl = process.env.SITE_URL ?? 'https://www.saunanews.com';
    const articleUrl = `${siteUrl.replace(/\/$/, '')}/article/${articleToPost.slug}`;
    const tweetText = createTweetText(articleToPost.title, articleUrl);

    const tweet = await postTweet({
      text: tweetText,
      apiKey,
      apiSecret,
      accessToken,
      accessTokenSecret,
    });

    const postedAt = new Date().toISOString();
    await redis.sadd(POSTED_SLUGS_KEY, articleToPost.slug);
    await redis.hset(POSTED_META_KEY, {
      [articleToPost.slug]: JSON.stringify({
        tweetId: tweet.id,
        postedAt,
        articleUrl,
      }),
    });

    return NextResponse.json({
      success: true,
      message: 'Tweet posted successfully.',
      articleSlug: articleToPost.slug,
      tweetId: tweet.id,
      articleUrl,
    });
  } catch (error) {
    await enqueueFallback({
      type: 'social',
      queuedAt: new Date().toISOString(),
      reason: 'twitter_post_failed',
      payload: {
        error: error instanceof Error ? error.message : String(error),
      },
    });

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to post latest article to X.',
      },
      { status: 500 }
    );
  }
}
