import Link from 'next/link';
import { getLatestArticles } from '@/data/articles';
import { getArticleHeadline } from '@/data/article-seo';

export default function HeadlineTicker() {
  const articles = getLatestArticles(8);

  return (
    <div className="bg-charcoal text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-9 gap-4">
          <span className="shrink-0 hidden sm:flex items-center text-xs font-semibold uppercase tracking-wider text-brass">
            <span className="relative mr-1.5 flex h-2 w-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            Live
          </span>
          <div className="flex-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                className="inline-flex items-center text-xs text-cream/80 hover:text-brass transition-colors mr-6"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brass/60 mr-2 shrink-0" />
                <span className="font-medium">{article.contentType}</span>
                <span className="mx-2 text-cream/30">|</span>
                <span>{getArticleHeadline(article)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
