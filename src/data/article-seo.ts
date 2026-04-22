import type { Article } from './types';

const BASE_URL = 'https://www.saunanews.com';
const MAX_HEADLINE_LENGTH = 110;

function normalizeHeadline(value: string): string {
  return value.trim().replace(/\s+/g, ' ');
}

export function getArticleHeadline(article: Pick<Article, 'title'>): string {
  return normalizeHeadline(article.title);
}

export function getArticleCanonicalUrl(article: Pick<Article, 'slug'>): string {
  return `${BASE_URL}/article/${article.slug}`;
}

export function validateCanonicalUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && parsed.pathname.startsWith('/article/');
  } catch {
    return false;
  }
}

export const articleSeoConstraints = {
  MAX_HEADLINE_LENGTH,
};
