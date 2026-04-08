'use client';

import Link from 'next/link';
import { getLatestArticles } from '@/data/articles';

export default function HeadlineTicker() {
  const articles = getLatestArticles(8);
  const tickerItems = [...articles, ...articles]; // duplicate for seamless loop

  return (
    <div className="bg-charcoal dark:bg-slate text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-9">
          <span className="shrink-0 flex items-center text-xs font-semibold uppercase tracking-wider text-brass mr-4 hidden sm:block">
            <span className="relative mr-1.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-light opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            Live
          </span>
          <div className="overflow-hidden relative flex-1">
            <div className="animate-ticker flex items-center whitespace-nowrap">
              {tickerItems.map((article, i) => (
                <Link
                  key={`${article.id}-${i}`}
                  href={`/article/${article.slug}`}
                  className="inline-flex items-center text-xs text-cream/80 hover:text-brass transition-colors mx-6"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-brass/60 mr-2 shrink-0" />
                  <span className="font-medium">{article.contentType}</span>
                  <span className="mx-2 text-cream/30">|</span>
                  <span>{article.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
