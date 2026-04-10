import Link from 'next/link';
import { Article } from '@/data/types';
import { formatDateShort } from '@/lib/utils';
import ContentTypeBadge from './ContentTypeBadge';
import ArticleImage from './ArticleImage';

interface FeaturedStoryProps {
  article: Article;
}

export default function FeaturedStory({ article }: FeaturedStoryProps) {
  return (
    <Link href={`/article/${article.slug}`} className="group block">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image */}
        <div className="rounded-xl overflow-hidden">
          <ArticleImage
            src={article.featuredImage}
            alt={article.title}
            category={article.category}
            seed={article.id}
            aspectRatio="4/3"
            className="group-hover:scale-[1.03] transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <ContentTypeBadge type={article.contentType} />
            <span className="text-sm text-stone-dark">
              {article.category}
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-charcoal leading-tight group-hover:text-green transition-colors mb-4">
            {article.title}
          </h2>

          <p className="text-lg text-warm-gray leading-relaxed mb-4 font-editorial italic">
            {article.dek}
          </p>

          <p className="text-base text-stone-dark leading-relaxed mb-6 line-clamp-3">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-dark">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-stone/30" />
              <span className="font-medium text-charcoal">{article.author.name}</span>
            </div>
            <span className="text-border">&middot;</span>
            <span>{formatDateShort(article.publishDate)}</span>
            <span className="text-border">&middot;</span>
            <span>{article.readingTime} min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
