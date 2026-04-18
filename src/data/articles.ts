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
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getTrendingArticles(): Article[] {
  return articles.filter((a) => a.trending);
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
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  return count ? picks.slice(0, count) : picks;
}

export function getArticlesByAuthorSlug(slug: string): Article[] {
  return articles
    .filter((a) => a.author.slug === slug)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getArticleBody(article: Article): string {
  return article.body ?? readArticleBody(article.bodyPath);
}
