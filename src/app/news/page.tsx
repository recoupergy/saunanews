'use client';

import { useState, useMemo } from 'react';
import { articleSummaries as articles } from '@/data/article-summaries';
import { categories } from '@/data/categories';
import { Category } from '@/data/types';
import ArticleCard from '@/components/ArticleCard';
import NewsletterSignup from '@/components/NewsletterSignup';

type SortOption = 'latest' | 'trending';

export default function AllNewsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [sort, setSort] = useState<SortOption>('latest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showCount, setShowCount] = useState(12);

  const filtered = useMemo(() => {
    let results = [...articles];

    if (search) {
      const q = search.toLowerCase();
      results = results.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (activeCategory !== 'all') {
      results = results.filter((a) => a.category === activeCategory);
    }

    if (sort === 'latest') {
      results.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    } else {
      results.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
    }

    return results;
  }, [search, activeCategory, sort]);

  const displayed = filtered.slice(0, showCount);
  const hasMore = showCount < filtered.length;

  return (
    <>
      {/* Page header */}
      <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal dark:text-cream mb-3">
            All News
          </h1>
          <p className="text-lg text-warm-gray dark:text-dark-muted max-w-2xl">
            Everything we&apos;ve published. Search, filter, and explore our complete archive of sauna industry coverage.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border sticky top-[105px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-dark dark:text-dark-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-cream dark:bg-dark-bg border border-border dark:border-dark-border rounded-lg text-sm focus:outline-none focus:border-green dark:focus:border-brass focus:ring-1 focus:ring-green dark:focus:ring-brass"
              />
            </div>

            {/* Sort + View */}
            <div className="flex items-center gap-3 ml-auto">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="px-3 py-2.5 bg-cream dark:bg-dark-bg border border-border dark:border-dark-border rounded-lg text-sm focus:outline-none focus:border-green dark:focus:border-brass"
              >
                <option value="latest">Latest</option>
                <option value="trending">Trending</option>
              </select>

              <div className="hidden sm:flex items-center border border-border dark:border-dark-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 ${viewMode === 'grid' ? 'bg-charcoal dark:bg-cream text-cream dark:text-charcoal' : 'text-stone-dark dark:text-dark-muted hover:bg-ivory dark:hover:bg-dark-border'}`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 ${viewMode === 'list' ? 'bg-charcoal dark:bg-cream text-cream dark:text-charcoal' : 'text-stone-dark dark:text-dark-muted hover:bg-ivory dark:hover:bg-dark-border'}`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 -mx-1 px-1">
            <button
              onClick={() => setActiveCategory('all')}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-charcoal dark:bg-cream text-cream dark:text-charcoal'
                  : 'bg-ivory dark:bg-dark-border text-stone-dark dark:text-dark-muted hover:bg-stone dark:hover:bg-dark-border'
              }`}
            >
              All
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
        </div>
      </section>

      {/* Results */}
      <section className="bg-cream dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Count */}
          <p className="text-sm text-stone-dark dark:text-dark-muted mb-8">
            {filtered.length} {filtered.length === 1 ? 'article' : 'articles'} found
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-warm-gray dark:text-dark-muted">No articles match your search.</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('all'); }}
                className="mt-4 text-sm text-green dark:text-brass hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {displayed.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="space-y-0">
              {displayed.map((article) => (
                <ArticleCard key={article.id} article={article} variant="horizontal" />
              ))}
            </div>
          )}

          {/* Load more */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowCount((c) => c + 12)}
                className="px-8 py-3 border border-charcoal/20 dark:border-cream/20 text-charcoal dark:text-cream text-sm font-medium rounded-lg hover:border-charcoal/40 dark:hover:border-cream/40 transition-colors"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <NewsletterSignup />
      </div>
    </>
  );
}
