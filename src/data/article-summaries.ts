import articleIndexJson from '@/content/articles/index.json';
import type { Article } from './types';
import { validateArticleIndex } from './content-validation';

validateArticleIndex(articleIndexJson);

export const articleSummaries: Article[] = articleIndexJson;

export function getLatestArticleSummaries(count?: number): Article[] {
  const sorted = [...articleSummaries].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  return count ? sorted.slice(0, count) : sorted;
}
