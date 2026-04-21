import { articles, getArticleBody } from '@/data/articles';
import { Category } from '@/data/types';
import { SearchResultArticle, SearchSortOption } from '@/lib/search-types';

interface SearchIndexEntry {
  article: SearchResultArticle;
  searchableText: {
    title: string;
    dek: string;
    excerpt: string;
    tags: string;
    body: string;
    author: string;
    category: string;
  };
}

const stripHtml = (value: string) => value.replace(/<[^>]+>/g, ' ');

const CORE_EDITORIAL_INTENT_TERMS = [
  'commercial sauna',
  'public sauna',
  'hospitality wellness',
  'bathhouse',
  'social sauna',
  'sauna retrofit',
  'sauna operations',
  'sauna ventilation',
  'thermal circuit',
  'contrast therapy',
  'recovery programming',
  'operator',
  'builder',
  'developer',
  'architect',
  'permitting',
  'throughput',
  'utilization',
  'capex',
  'specification',
] as const;

const INTENT_EXPANSION_MAP: Record<string, string[]> = {
  operator: ['operations', 'throughput', 'utilization', 'business model'],
  operations: ['operator', 'throughput', 'utilization'],
  builder: ['build-out', 'retrofit', 'specification'],
  installer: ['builder', 'build-out', 'retrofit'],
  developer: ['project', 'rollout', 'capex'],
  architect: ['design', 'specification', 'systems'],
  design: ['architect', 'specification', 'systems'],
  permitting: ['code', 'compliance', 'public-health'],
  ventilation: ['airflow', 'systems', 'specification'],
  project: ['opening', 'rollout', 'retrofit'],
  commercial: ['operator', 'project', 'capex'],
  public: ['municipal', 'infrastructure', 'project'],
  bathhouse: ['social sauna', 'operator', 'throughput'],
  sauna: ['commercial sauna', 'public sauna', 'thermal wellness'],
};

function expandTerms(query: string): string[] {
  const baseTerms = query
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);

  const expanded = new Set<string>(baseTerms);

  for (const term of baseTerms) {
    const mapped = INTENT_EXPANSION_MAP[term];
    if (mapped) {
      for (const extra of mapped) expanded.add(extra);
    }
  }

  return [...expanded];
}

const searchIndex: SearchIndexEntry[] = articles.map((article) => ({
  article: {
    id: article.id,
    title: article.title,
    slug: article.slug,
    dek: article.dek,
    excerpt: article.excerpt,
    contentType: article.contentType,
    category: article.category,
    tags: article.tags,
    author: article.author,
    publishDate: article.publishDate,
    readingTime: article.readingTime,
    featuredImage: article.featuredImage,
    imageCaption: article.imageCaption,
    featured: article.featured,
    trending: article.trending,
  },
  searchableText: {
    title: article.title.toLowerCase(),
    dek: article.dek.toLowerCase(),
    excerpt: article.excerpt.toLowerCase(),
    tags: article.tags.join(' ').toLowerCase(),
    body: stripHtml(getArticleBody(article)).toLowerCase(),
    author: article.author.name.toLowerCase(),
    category: article.category.toLowerCase(),
  },
}));

function scoreEntry(entry: SearchIndexEntry, query: string): number {
  if (!query) return 0;

  const terms = expandTerms(query);
  let score = 0;

  for (const term of terms) {
    if (entry.searchableText.title.includes(term)) score += 10;
    if (entry.searchableText.dek.includes(term)) score += 5;
    if (entry.searchableText.excerpt.includes(term)) score += 3;
    if (entry.searchableText.tags.includes(term)) score += 4;
    if (entry.searchableText.body.includes(term)) score += 1;
    if (entry.searchableText.author.includes(term)) score += 2;
    if (entry.searchableText.category.includes(term)) score += 2;
  }

  const editorialIntentMatches = CORE_EDITORIAL_INTENT_TERMS.reduce((count, term) => {
    if (query.toLowerCase().includes(term)) return count + 1;
    return count;
  }, 0);

  if (editorialIntentMatches > 0) {
    const topicalCoverageMatches = CORE_EDITORIAL_INTENT_TERMS.reduce((count, term) => {
      if (
        entry.searchableText.title.includes(term)
        || entry.searchableText.dek.includes(term)
        || entry.searchableText.excerpt.includes(term)
        || entry.searchableText.tags.includes(term)
        || entry.searchableText.body.includes(term)
      ) {
        return count + 1;
      }
      return count;
    }, 0);

    score += Math.min(topicalCoverageMatches, 6) * 2;
  }

  return score;
}

interface SearchArticlesOptions {
  query?: string;
  category?: Category | 'all';
  sort?: SearchSortOption;
  limit?: number;
}

export function searchArticles({
  query = '',
  category = 'all',
  sort = 'relevance',
  limit = 60,
}: SearchArticlesOptions): SearchResultArticle[] {
  const trimmed = query.trim();

  let scored = searchIndex.map((entry) => ({
    article: entry.article,
    score: scoreEntry(entry, trimmed),
  }));

  if (trimmed) {
    scored = scored.filter((entry) => entry.score > 0);
  }

  if (category !== 'all') {
    scored = scored.filter((entry) => entry.article.category === category);
  }

  if (sort === 'relevance' && trimmed) {
    scored.sort((a, b) => b.score - a.score);
  } else {
    scored.sort(
      (a, b) =>
        new Date(b.article.publishDate).getTime() -
        new Date(a.article.publishDate).getTime()
    );
  }

  return scored.slice(0, limit).map((entry) => entry.article);
}

export const totalSearchableArticles = searchIndex.length;
