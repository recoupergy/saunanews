'use client';

import { useState } from 'react';
import Link from 'next/link';
import ContentTypeBadge from '@/components/ContentTypeBadge';
import { formatDateShort } from '@/lib/utils';
import { Article } from '@/data/types';

type MobileTab = 'top' | 'latest' | 'trending';

interface MobileRailTabsProps {
  topStories: Article[];
  latestStories: Article[];
  trendingStories: Article[];
}

export default function MobileRailTabs({ topStories, latestStories, trendingStories }: MobileRailTabsProps) {
  const [activeTab, setActiveTab] = useState<MobileTab>('top');

  const tabs: { key: MobileTab; label: string }[] = [
    { key: 'top', label: 'Top' },
    { key: 'latest', label: 'Latest' },
    { key: 'trending', label: 'Trending' },
  ];

  return (
    <div className="lg:hidden mt-8 border-t border-border dark:border-dark-border pt-6">
      <div className="inline-flex w-full rounded-lg border border-border dark:border-dark-border overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 px-4 py-2.5 text-sm font-semibold transition-colors ${
              activeTab === tab.key
                ? 'bg-charcoal dark:bg-cream text-cream dark:text-charcoal'
                : 'bg-cream dark:bg-dark-bg text-stone-dark dark:text-dark-muted'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === 'top' && (
          <div className="space-y-0">
            {topStories.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                className="group block py-4 border-b border-border dark:border-dark-border last:border-0"
              >
                <div className="flex items-center gap-2 mb-2">
                  <ContentTypeBadge type={article.contentType} size="sm" />
                  <span className="text-xs text-stone-dark dark:text-dark-muted">{article.category}</span>
                </div>
                <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream leading-snug group-hover:text-green dark:group-hover:text-brass transition-colors mb-1">
                  {article.title}
                </h3>
                <span className="text-xs text-stone-dark dark:text-dark-muted">
                  {article.author.name} &middot; {formatDateShort(article.publishDate)}
                </span>
              </Link>
            ))}
          </div>
        )}

        {activeTab === 'latest' && (
          <div className="space-y-0">
            {latestStories.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                className="group flex items-start gap-3 py-3 border-b border-border dark:border-dark-border last:border-0"
              >
                <span className="w-1 h-1 rounded-full bg-brass mt-2 shrink-0" />
                <span className="text-sm font-medium text-charcoal dark:text-dark-text leading-snug group-hover:text-green dark:group-hover:text-brass transition-colors">
                  {article.title}
                </span>
              </Link>
            ))}
          </div>
        )}

        {activeTab === 'trending' && (
          <div className="space-y-0">
            {trendingStories.map((article, i) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                className="group flex gap-4 py-4 border-b border-border dark:border-dark-border last:border-0"
              >
                <span className="text-2xl font-editorial font-bold text-stone/50 dark:text-dark-border leading-none mt-0.5 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-charcoal dark:text-dark-text leading-snug group-hover:text-green dark:group-hover:text-brass transition-colors mb-1">
                    {article.title}
                  </h3>
                  <span className="text-xs text-stone-dark dark:text-dark-muted">
                    {article.category} &middot; {article.readingTime} min
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
