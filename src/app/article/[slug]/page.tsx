import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles, getArticleBySlug, getArticlesByCategory } from '@/data/articles';
import { formatDate } from '@/lib/utils';
import ContentTypeBadge from '@/components/ContentTypeBadge';
import ArticleCard from '@/components/ArticleCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import ArticleImage from '@/components/ArticleImage';
import SponsorSlot from '@/components/SponsorSlot';

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const article = getArticleBySlug(slug);
    if (!article) return { title: 'Article Not Found' };
    const canonicalUrl = `https://www.saunanews.com/article/${article.slug}`;
    return {
      title: article.title,
      description: article.dek,
      openGraph: {
        title: article.title,
        description: article.dek,
        type: 'article',
        url: canonicalUrl,
        publishedTime: article.publishDate,
        authors: [article.author.name],
        section: article.category,
        tags: article.tags,
        siteName: 'SaunaNews',
        ...(article.featuredImage
          ? { images: [{ url: article.featuredImage, width: 1200, height: 675, alt: article.title }] }
          : {}),
      },
      twitter: {
        card: 'summary_large_image',
        site: '@sauna_news',
        title: article.title,
        description: article.dek,
        ...(article.featuredImage ? { images: [article.featuredImage] } : {}),
      },
      alternates: {
        canonical: canonicalUrl,
      },
    };
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getArticlesByCategory(article.category)
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const categorySlug = article.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
  const articleUrl = `https://www.saunanews.com/article/${article.slug}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: article.title,
      description: article.dek,
      datePublished: article.publishDate,
      dateModified: article.publishDate,
      url: articleUrl,
      ...(article.featuredImage ? { image: article.featuredImage } : {}),
      author: {
        '@type': 'Person',
        name: article.author.name,
        jobTitle: article.author.role,
        url: `https://www.saunanews.com/author/${article.author.slug}`,
      },
      publisher: {
        '@type': 'Organization',
        name: 'SaunaNews',
        url: 'https://www.saunanews.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.saunanews.com/logo.png',
          width: 600,
          height: 60,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': articleUrl,
      },
      articleSection: article.category,
      keywords: article.tags.join(', '),
      isAccessibleForFree: true,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.saunanews.com' },
        { '@type': 'ListItem', position: 2, name: article.category, item: `https://www.saunanews.com/category/${categorySlug}` },
        { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgressBar />

      {/* Article Header */}
      <article>
        <header className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-stone-dark dark:text-dark-muted mb-6">
              <Link href="/" className="hover:text-green dark:hover:text-brass transition-colors">Home</Link>
              <span>/</span>
              <Link href={`/category/${article.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="hover:text-green dark:hover:text-brass transition-colors">
                {article.category}
              </Link>
            </div>

            {/* Content Type + Category */}
            <div className="flex items-center gap-3 mb-5">
              <ContentTypeBadge type={article.contentType} />
              <span className="text-sm text-stone-dark dark:text-dark-muted">{article.category}</span>
            </div>

            {/* Title */}
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal dark:text-cream leading-tight mb-4">
              {article.title}
            </h1>

            {/* Dek */}
            <p className="text-xl text-warm-gray dark:text-dark-muted leading-relaxed font-editorial italic mb-8">
              {article.dek}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-stone-dark dark:text-dark-muted">
              <Link href={`/author/${article.author.slug}`} className="flex items-center gap-2 group/author">
                <div className="w-10 h-10 rounded-full bg-stone/30 dark:bg-dark-border" />
                <div>
                  <span className="font-medium text-charcoal dark:text-dark-text block group-hover/author:text-green dark:group-hover/author:text-brass transition-colors">{article.author.name}</span>
                  <span className="text-xs">{article.author.role}</span>
                </div>
              </Link>
              <span className="text-border dark:text-dark-border hidden sm:block">&middot;</span>
              <span>{formatDate(article.publishDate)}</span>
              <span className="text-border dark:text-dark-border hidden sm:block">&middot;</span>
              <span>{article.readingTime} min read</span>
            </div>

            {/* Share */}
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border dark:border-dark-border">
              <span className="text-xs font-medium uppercase tracking-wider text-stone-dark dark:text-dark-muted">Share</span>
              <a href={`https://x.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(article.title)}&via=sauna_news`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-ivory dark:bg-dark-surface flex items-center justify-center text-stone-dark dark:text-dark-muted hover:text-green dark:hover:text-brass transition-colors" aria-label="Share on X">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <button className="w-8 h-8 rounded-full bg-ivory dark:bg-dark-surface flex items-center justify-center text-stone-dark dark:text-dark-muted hover:text-green dark:hover:text-brass transition-colors" aria-label="Share on LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-ivory dark:bg-dark-surface flex items-center justify-center text-stone-dark dark:text-dark-muted hover:text-green dark:hover:text-brass transition-colors" aria-label="Copy link">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="bg-ivory dark:bg-dark-surface border-b border-border dark:border-dark-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ArticleImage
              src={article.featuredImage}
              alt={article.title}
              category={article.category}
              seed={article.id + article.slug}
              aspectRatio="16/9"
              className="rounded-xl"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
            {article.imageCaption && (
              <p className="text-xs text-stone-dark dark:text-dark-muted mt-3 text-center italic">
                {article.imageCaption}
              </p>
            )}
          </div>
        </div>

        {/* Article Body */}
        <div className="bg-surface dark:bg-dark-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div
              className="prose-editorial"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border dark:border-dark-border">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-3 block">Topics</span>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-ivory dark:bg-dark-surface text-sm text-stone-dark dark:text-dark-muted rounded-full border border-border dark:border-dark-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author bio */}
            <div className="mt-10 p-6 bg-ivory dark:bg-dark-surface rounded-xl border border-border dark:border-dark-border">
              <div className="flex items-start gap-4">
                <Link href={`/author/${article.author.slug}`} className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-stone/30 dark:bg-dark-border" />
                </Link>
                <div>
                  <Link href={`/author/${article.author.slug}`} className="hover:text-green dark:hover:text-brass transition-colors">
                    <h3 className="font-semibold text-charcoal dark:text-cream">{article.author.name}</h3>
                  </Link>
                  <p className="text-sm text-stone-dark dark:text-dark-muted mb-2">{article.author.role}, SaunaNews</p>
                  <p className="text-sm text-stone-dark dark:text-dark-muted leading-relaxed">
                    {article.author.bio}
                  </p>
                  <Link
                    href={`/author/${article.author.slug}`}
                    className="inline-block mt-3 text-sm font-medium text-green dark:text-brass hover:underline transition-colors"
                  >
                    View all articles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Sponsor */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <SponsorSlot variant="inline" />
      </div>

      {/* Newsletter */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NewsletterSignup />
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="bg-cream dark:bg-dark-bg border-t border-border dark:border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mb-8 border-b border-border dark:border-dark-border pb-4">
              More in {article.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {related.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
