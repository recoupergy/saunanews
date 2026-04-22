import { execSync } from 'node:child_process';
import type { Article } from './types';

const modifiedDateCache = new Map<string, string>();

function getGitCommitHistoryForFile(filePath?: string): string[] {
  if (!filePath) return [];

  try {
    const output = execSync(`git log --follow --format=%cI -- "${filePath}"`, {
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString('utf8')
      .trim();

    if (!output) return [];
    return output.split('\n').filter(Boolean);
  } catch {
    return [];
  }
}

export function getArticleDateModified(article: Pick<Article, 'id' | 'publishDate' | 'bodyPath'>): string {
  const cached = modifiedDateCache.get(article.id);
  if (cached) return cached;

  const history = getGitCommitHistoryForFile(
    article.bodyPath ? `src/content/articles/${article.bodyPath}` : undefined
  );

  if (history.length <= 1) {
    modifiedDateCache.set(article.id, article.publishDate);
    return article.publishDate;
  }

  const latestCommitDate = history[0];
  modifiedDateCache.set(article.id, latestCommitDate);
  return latestCommitDate;
}
