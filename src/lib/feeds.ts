import { articles, getArticleBody } from '@/data/articles';
import type { Article } from '@/data/types';
import { getArticleCanonicalUrl, getArticleHeadline } from '@/data/article-seo';
import { getArticleDateModified } from '@/data/article-history.server';

export const BASE_URL = 'https://www.saunanews.com';
export const FEED_TITLE = 'SaunaNews';
export const FEED_DESCRIPTION =
  'Daily reporting, launches, market shifts, and analysis for the people building, selling, designing, and following the sauna world.';

export function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export type FeedArticle = {
  article: Article;
  url: string;
  headline: string;
  modifiedDate: string;
  contentHtml: string;
  contentText: string;
};

export function getFeedArticles(limit?: number): FeedArticle[] {
  const sorted = [...articles]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .map((article) => {
      const contentHtml = getArticleBody(article);
      return {
        article,
        url: getArticleCanonicalUrl(article),
        headline: getArticleHeadline(article),
        modifiedDate: getArticleDateModified(article),
        contentHtml,
        contentText: stripHtml(contentHtml),
      };
    });

  return typeof limit === 'number' ? sorted.slice(0, limit) : sorted;
}

export function getFeedLastBuildDate(feedArticles: FeedArticle[]): string {
  if (feedArticles.length === 0) return new Date().toUTCString();
  return new Date(feedArticles[0].modifiedDate).toUTCString();
}

export function toCdata(value: string): string {
  return `<![CDATA[${value.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;
}
