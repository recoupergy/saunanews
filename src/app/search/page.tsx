'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { categories } from '@/data/categories';
import { Category } from '@/data/types';
import ArticleCard from '@/components/ArticleCard';
import { SearchResultArticle, SearchSortOption } from '@/lib/search-types';

function SearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [sort, setSort] = useState<SearchSortOption>('relevance');
  const [results, setResults] = useState<SearchResultArticle[]>([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Keep URL in sync with input (debounced) so shared URLs preserve query
  useEffect(() => {
    const handle = setTimeout(() => {
      const params = new URLSearchParams();
      if (query) params.set('q', query);
      const qs = params.toString();
      router.replace(qs ? `/search?${qs}` : '/search', { scroll: false });
    }, 300);
    return () => clearTimeout(handle);
  }, [query, router]);

  useEffect(() => {
    const controller = new AbortController();

    const runSearch = async () => {
      try {
        setIsLoading(true);
        const params = new URLSearchParams({
          q: query,
          category: activeCategory,
          sort,
          limit: '60',
        });

        const response = await fetch(`/api/search?${params.toString()}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('Search request failed');
        }

        const data = (await response.json()) as {
          results: SearchResultArticle[];
          totalArticles: number;
        };

        setResults(data.results);
        setTotalArticles(data.totalArticles);
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          setResults([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    runSearch();

    return () => {
      controller.abort();
    };
  }, [query, activeCategory, sort]);

  const trimmedQuery = query.trim();

  return (
    <>
      {/* Header */}
      <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal dark:text-cream mb-3">
            Search
          </h1>
          <p className="text-lg text-warm-gray dark:text-dark-muted max-w-2xl mb-8">
            Search across every SaunaNews article. Match on title, tags, author, or full body text.
          </p>

          {/* Search input */}
          <div className="relative max-w-2xl">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-dark dark:text-dark-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              autoFocus
              placeholder="Search articles, brands, topics..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl text-base focus:outline-none focus:border-green dark:focus:border-brass focus:ring-2 focus:ring-green/20 dark:focus:ring-brass/20 text-charcoal dark:text-cream"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-stone-dark dark:text-dark-muted hover:text-charcoal dark:hover:text-cream"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1 flex-1 w-full">
              <button
                onClick={() => setActiveCategory('all')}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-charcoal dark:bg-cream text-cream dark:text-charcoal'
                    : 'bg-ivory dark:bg-dark-border text-stone-dark dark:text-dark-muted hover:bg-stone dark:hover:bg-dark-border'
                }`}
              >
                All categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    activeCategory === cat.name
                      ? 'bg-charcoal dark:bg-cream text-cream dark:text-charcoal'
                      : 'bg-ivory dark:bg-dark-border text-stone-dark dark:text-dark-muted hover:bg-stone dark:hover:bg-dark-border'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SearchSortOption)}
              className="px-3 py-2 bg-cream dark:bg-dark-bg border border-border dark:border-dark-border rounded-lg text-sm focus:outline-none focus:border-green dark:focus:border-brass shrink-0"
            >
              <option value="relevance">Best match</option>
              <option value="latest">Most recent</option>
            </select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-cream dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-sm text-stone-dark dark:text-dark-muted mb-8">
            {trimmedQuery ? (
              <>
                {results.length} {results.length === 1 ? 'result' : 'results'} for{' '}
                <span className="font-semibold text-charcoal dark:text-cream">
                  &ldquo;{trimmedQuery}&rdquo;
                </span>
              </>
            ) : (
              <>Type above to search {totalArticles} articles</>
            )}
          </p>

          {isLoading ? (
            <div className="text-center py-20">
              <p className="text-lg text-warm-gray dark:text-dark-muted">Searching...</p>
            </div>
          ) : trimmedQuery && results.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-warm-gray dark:text-dark-muted mb-2">
                No articles match your search.
              </p>
              <p className="text-sm text-stone-dark dark:text-dark-muted">
                Try a different keyword, or{' '}
                <button
                  onClick={() => {
                    setQuery('');
                    setActiveCategory('all');
                  }}
                  className="text-green dark:text-brass hover:underline"
                >
                  clear your filters
                </button>
                .
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {results.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <section className="bg-cream dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-stone-dark dark:text-dark-muted">Loading search...</p>
          </div>
        </section>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
