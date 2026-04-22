import { readFileSync } from 'node:fs';
import path from 'node:path';
import articleIndexJson from '@/content/articles/index.json';
import type { Article } from './types';
import { validateArticleIndex } from './content-validation';

validateArticleIndex(articleIndexJson);

export const articles: Article[] = articleIndexJson;

function readArticleBody(bodyPath?: string): string {
  if (!bodyPath) return '';
  const fullPath = path.join(process.cwd(), 'src/content/articles', bodyPath);
  return readFileSync(fullPath, 'utf8');
}

function hoursSincePublished(article: Article): number {
  return Math.max(1, (Date.now() - new Date(article.publishDate).getTime()) / (1000 * 60 * 60));
}

function dailySpotlightBoost(article: Article): number {
  const daySeed = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const hashBase = `${article.id}:${daySeed}`;
  let hash = 0;
  for (let i = 0; i < hashBase.length; i += 1) {
    hash = ((hash << 5) - hash) + hashBase.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash % 100) / 100;
}

function scoreArticle(article: Article): number {
  const ageHours = hoursSincePublished(article);
  const recency = 1 / Math.pow(ageHours / 36 + 1, 0.65);
  const quality =
    (article.featured ? 1.2 : 0) +
    (article.trending ? 1.4 : 0) +
    (article.isEditorsPick ? 1.5 : 0) +
    (article.contentType === 'Breaking' ? 0.6 : 0) +
    (article.contentType === 'Analysis' ? 0.5 : 0) +
    (article.contentType === 'Interview' ? 0.3 : 0);

  const readability = article.readingTime >= 5 && article.readingTime <= 12 ? 0.3 : 0;
  const spotlight = dailySpotlightBoost(article) * 0.7;

  return quality + (recency * 4.5) + readability + spotlight;
}

function getScoredArticles(): Article[] {
  return [...articles].sort((a, b) => scoreArticle(b) - scoreArticle(a));
}

export function getArticleBySlug(slug: string): Article | undefined {
  const article = articles.find((a) => a.slug === slug);
  if (!article) return undefined;
  return article.body
    ? article
    : {
        ...article,
        body: readArticleBody(article.bodyPath),
      };
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles
    .filter((a) => a.featured)
    .sort((a, b) => scoreArticle(b) - scoreArticle(a));
}

export function getTopStories(count = 6): Article[] {
  return getScoredArticles().slice(0, count);
}

export function getTrendingArticles(count?: number): Article[] {
  const ranked = getScoredArticles().filter((article) => article.trending || article.featured || article.isEditorsPick);
  return count ? ranked.slice(0, count) : ranked;
}

export function getLatestArticles(count?: number): Article[] {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  return count ? sorted.slice(0, count) : sorted;
}

export function getEditorsPicks(count?: number): Article[] {
  const picks = articles
    .filter((a) => a.isEditorsPick)
    .sort((a, b) => scoreArticle(b) - scoreArticle(a));
  return count ? picks.slice(0, count) : picks;
}

const POLICY_PRIORITY_SLUGS = [
  'ul-60335-2-53-sauna-heater-standard-transition',
  'en-18164-europe-first-sauna-standard-nordic-pushback',
];

const POLICY_SIGNAL_TAGS = new Set([
  'regulation',
  'compliance',
  'safety standards',
  'building code',
  'trade policy',
  'european standards',
]);

function isPolicyArticle(article: Article): boolean {
  if (article.category === 'Tariffs & Logistics') return true;

  return article.tags.some((tag) => POLICY_SIGNAL_TAGS.has(tag.toLowerCase()));
}

export function getPolicyStories(count = 4): Article[] {
  const safeCount = Math.min(Math.max(count, 2), 4);
  const minimumCount = 2;
  const byRecency = [...articles].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  const selected: Article[] = [];

  for (const slug of POLICY_PRIORITY_SLUGS) {
    const match = byRecency.find((article) => article.slug === slug);
    if (match) selected.push(match);
  }

  for (const article of byRecency) {
    if (selected.some((item) => item.id === article.id)) continue;
    if (!isPolicyArticle(article)) continue;
    selected.push(article);
    if (selected.length >= safeCount) break;
  }

  if (selected.length < minimumCount) {
    for (const article of byRecency) {
      if (selected.some((item) => item.id === article.id)) continue;
      if (!['Tariffs & Logistics', 'Market Intelligence'].includes(article.category)) continue;
      selected.push(article);
      if (selected.length >= minimumCount) break;
    }
  }

  return selected.slice(0, safeCount);
}

export function getArticlesByAuthorSlug(slug: string): Article[] {
  return articles
    .filter((a) => a.author.slug === slug)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getArticleBody(article: Article): string {
  return article.body ?? readArticleBody(article.bodyPath);
}
