'use client';

import Link from 'next/link';
import { Article } from '@/data/types';
import { formatDateShort } from '@/lib/utils';
import ContentTypeBadge from './ContentTypeBadge';
import ArticleImage from './ArticleImage';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'compact' | 'horizontal';
}

export default function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  if (variant === 'horizontal') {
    return (
      <Link href={`/article/${article.slug}`} className="group flex gap-5 py-5 border-b border-border last:border-0">
        <div className="w-28 h-20 sm:w-36 sm:h-24 shrink-0 rounded-md overflow-hidden">
          <ArticleImage
            src={article.featuredImage}
            alt={article.title}
            category={article.category}
            seed={article.id}
            aspectRatio="auto"
            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
            sizes="144px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <ContentTypeBadge type={article.contentType} size="sm" />
            <span className="text-xs text-stone-dark">{formatDateShort(article.publishDate)}</span>
          </div>
          <h3 className="font-editorial text-base font-semibold text-charcoal leading-snug group-hover:text-green transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-sm text-stone-dark mt-1 line-clamp-1 hidden sm:block">
            {article.excerpt}
          </p>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link href={`/article/${article.slug}`} className="group block py-4 border-b border-border last:border-0">
        <div className="flex items-center gap-2 mb-1">
          <ContentTypeBadge type={article.contentType} size="sm" />
          <span className="text-xs text-stone-dark">{formatDateShort(article.publishDate)}</span>
        </div>
        <h3 className="font-editorial text-sm font-semibold text-charcoal leading-snug group-hover:text-green transition-colors">
          {article.title}
        </h3>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.slug}`} className="group block">
      <div className="mb-4 rounded-lg overflow-hidden">
        <ArticleImage
          src={article.featuredImage}
          alt={article.title}
          category={article.category}
          seed={article.id}
          aspectRatio="16/10"
          className="group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <ContentTypeBadge type={article.contentType} />
        <span className="text-xs text-stone-dark">
          {article.category}
        </span>
      </div>
      <h3 className="font-editorial text-lg font-bold text-charcoal leading-snug group-hover:text-green transition-colors mb-2">
        {article.title}
      </h3>
      <p className="text-sm text-stone-dark leading-relaxed line-clamp-2 mb-3">
        {article.excerpt}
      </p>
      <div className="flex items-center gap-3 text-xs text-stone-dark">
        <span>{article.author.name}</span>
        <span className="text-border">&middot;</span>
        <span>{formatDateShort(article.publishDate)}</span>
        <span className="text-border">&middot;</span>
        <span>{article.readingTime} min read</span>
      </div>
    </Link>
  );
}
