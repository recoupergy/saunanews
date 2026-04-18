import { cache } from 'react';
import articleIndexJson from '@/content/article-index.json';
import type { Article } from './types';

export type ArticleSummary = Omit<Article, 'body'>;

const articleIndex = articleIndexJson as ArticleSummary[];

function ensureArticleSummary(article: ArticleSummary): ArticleSummary {
  if (!article.id || !article.slug || !article.title || !article.publishDate) {
    throw new Error(`Invalid article summary payload for slug: ${article.slug ?? 'unknown'}`);
  }
  return article;
}

function ensureArticle(article: Article): Article {
  ensureArticleSummary(article);
  if (typeof article.body !== 'string') {
    throw new Error(`Invalid article body payload for slug: ${article.slug}`);
  }
  return article;
}

const loadArticles = cache(async (): Promise<Article[]> => {
  const [{ readFile }, { default: path }] = await Promise.all([
    import('node:fs/promises'),
    import('node:path'),
  ]);
  const filePath = path.join(process.cwd(), 'src/content/articles.json');
  const raw = await readFile(filePath, 'utf8');
  const parsed = JSON.parse(raw) as Article[];
  return parsed.map(ensureArticle);
});

export function getArticleIndex(): ArticleSummary[] {
  return articleIndex.map(ensureArticleSummary);
}

export async function getArticles(): Promise<Article[]> {
  return loadArticles();
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const articles = await loadArticles();
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): ArticleSummary[] {
  return getArticleIndex().filter((a) => a.category === category);
}

export function getFeaturedArticles(): ArticleSummary[] {
  return getArticleIndex()
    .filter((a) => a.featured)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getTrendingArticles(): ArticleSummary[] {
  return getArticleIndex().filter((a) => a.trending);
}

export function getLatestArticles(count?: number): ArticleSummary[] {
  const sorted = [...getArticleIndex()].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  return count ? sorted.slice(0, count) : sorted;
}

export function getArticlesByAuthorSlug(slug: string): ArticleSummary[] {
  return getArticleIndex()
    .filter((a) => a.author.slug === slug)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}
