import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { articles, getArticleBySlug, getArticlesByCategory, getArticleBody } from '@/data/articles';
import { formatDate } from '@/lib/utils';
import ContentTypeBadge from '@/components/ContentTypeBadge';
import ArticleCard from '@/components/ArticleCard';
import ArticleImage from '@/components/ArticleImage';
import SponsorSlot from '@/components/SponsorSlot';
import EventsCalendar from '@/components/EventsCalendar';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import NewsletterSignup from '@/components/NewsletterSignup';
import type { EventCategory, EventOrganization } from '@/data/events';
import { getArticleCanonicalUrl, getArticleHeadline } from '@/data/article-seo';
import { getArticleDateModified } from '@/data/article-history.server';
import { getAuthorBySlug, getAuthorProfileLinks } from '@/data/authors';
import { getArticleImageVariants, stringifyJsonLd, toIso8601 } from '@/lib/structured-data';

export const dynamicParams = false;

const ALWAYS_RECOMMENDED_SLUGS = [
  'bathhouse-120m-revenue-social-sauna',
  'en-18164-europe-first-sauna-standard-nordic-pushback',
  'ul-60335-2-53-sauna-heater-standard-transition',
] as const;

const EMBED_REGEX =
  /<div\s+(data-events-calendar|data-events-org)=(?:"([^"]+)"|'([^']+)')\s*(?:\/>|><\/div>)/gi;

const VALID_CATEGORIES: readonly EventCategory[] = [
  'Aufguss',
  'Conference',
  'Trade Show',
  'Investor',
  'Product Launch',
  'Industry',
  'Competition',
];

const VALID_ORGANIZATIONS: readonly EventOrganization[] = [
  'Harvia',
  'Saunum',
  'Masco',
  'Kohler',
  'Aufguss World Masters',
  'British Sauna Society',
  'Sauna from Finland',
  'International Sauna Association',
];

function matchesCategory(raw: string): EventCategory | undefined {
  const lower = raw.toLowerCase();
  return VALID_CATEGORIES.find((c) => c.toLowerCase() === lower);
}

function matchesOrganization(raw: string): EventOrganization | undefined {
  const lower = raw.toLowerCase();
  return VALID_ORGANIZATIONS.find((o) => o.toLowerCase() === lower);
}

function renderArticleBodyWithEmbeds(html: string) {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  EMBED_REGEX.lastIndex = 0;
  while ((match = EMBED_REGEX.exec(html)) !== null) {
    const before = html.slice(cursor, match.index);
    if (before) {
      nodes.push(
        <div
          key={`b-${key}`}
          className="prose-editorial"
          dangerouslySetInnerHTML={{ __html: before }}
        />
      );
    }
    const attr = match[1];
    const raw = (match[2] ?? match[3] ?? '').trim();
    if (attr === 'data-events-org') {
      const organization = matchesOrganization(raw);
      nodes.push(
        <EventsCalendar key={`c-${key}`} organization={organization} upcomingOnly />
      );
    } else {
      const category = matchesCategory(raw);
      nodes.push(
        <EventsCalendar key={`c-${key}`} category={category} upcomingOnly />
      );
    }
    cursor = match.index + match[0].length;
    key += 1;
  }
  const tail = html.slice(cursor);
  if (tail) {
    nodes.push(
      <div
        key={`t-${key}`}
        className="prose-editorial"
        dangerouslySetInnerHTML={{ __html: tail }}
      />
    );
  }
  if (nodes.length === 0) {
    return <div className="prose-editorial" dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return <>{nodes}</>;
}

function detectAutoEmbedOrganization(tags: readonly string[]): EventOrganization | undefined {
  const lower = tags.map((t) => t.toLowerCase());
  for (const org of VALID_ORGANIZATIONS) {
    if (lower.includes(org.toLowerCase())) return org;
  }
  return undefined;
}

function getPrimaryEntities(article: (typeof articles)[number]): string[] {
  return Array.from(
    new Set(
      article.tags
        .map((tag) => tag.trim())
        .filter(Boolean)
        .slice(0, 6)
    )
  );
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const article = getArticleBySlug(slug);
    if (!article) return { title: 'Article Not Found' };
    const canonicalUrl = getArticleCanonicalUrl(article);
    const entities = getPrimaryEntities(article);
    const imageAlt = entities.length > 0
      ? `${getArticleHeadline(article)} — ${entities.join(', ')}`
      : getArticleHeadline(article);
    return {
      title: getArticleHeadline(article),
      description: article.dek,
      openGraph: {
        title: getArticleHeadline(article),
        description: article.dek,
        type: 'article',
        url: canonicalUrl,
        publishedTime: article.publishDate,
        authors: [article.author.name],
        section: article.category,
        tags: article.tags,
        siteName: 'SaunaNews',
        ...(article.featuredImage
          ? { images: [{ url: article.featuredImage, width: 1200, height: 675, alt: imageAlt }] }
          : {}),
      },
      twitter: {
        card: 'summary_large_image',
        site: '@sauna_news',
        title: getArticleHeadline(article),
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

  const alwaysRecommended = ALWAYS_RECOMMENDED_SLUGS
    .map((recommendedSlug) => articles.find((a) => a.slug === recommendedSlug))
    .filter((a): a is (typeof articles)[number] => a !== undefined && a.id !== article.id);

  const fallbackRelated = getArticlesByCategory(article.category)
    .filter((a) => a.id !== article.id && !alwaysRecommended.some((recommended) => recommended.id === a.id));

  const recommendedArticles = [...alwaysRecommended, ...fallbackRelated].slice(0, 3);

  const categorySlug = article.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
  const articleUrl = getArticleCanonicalUrl(article);
  const articleHeadline = getArticleHeadline(article);
  const articleModifiedDate = getArticleDateModified(article);
  const canonicalAuthor = getAuthorBySlug(article.author.slug);
  const articleAuthor = {
    ...article.author,
    ...(canonicalAuthor ?? {}),
  };
  const authorProfileLinks = getAuthorProfileLinks(articleAuthor);
  const authorSameAs = Array.from(
    new Set([...(articleAuthor.sameAs ?? []), ...authorProfileLinks.map((profile) => profile.href)]),
  );
  const primaryEntities = getPrimaryEntities(article);
  const imageAlt = primaryEntities.length > 0
    ? `${articleHeadline} — ${primaryEntities.join(', ')}`
    : articleHeadline;
  const imageVariants = getArticleImageVariants(article.featuredImage);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: articleHeadline,
      description: article.dek,
      datePublished: toIso8601(article.publishDate),
      dateModified: toIso8601(articleModifiedDate),
      url: articleUrl,
      ...(imageVariants.length > 0 ? { image: imageVariants } : {}),
      author: [{
        '@type': 'Person',
        name: articleAuthor.name,
        jobTitle: articleAuthor.role,
        url: `https://www.saunanews.com/author/${articleAuthor.slug}`,
        ...(authorSameAs.length > 0 ? { sameAs: authorSameAs } : {}),
        ...(articleAuthor.image ? { image: articleAuthor.image } : {}),
        ...(articleAuthor.alumniOf ? { alumniOf: articleAuthor.alumniOf } : {}),
        ...(articleAuthor.knowsAbout ? { knowsAbout: articleAuthor.knowsAbout } : {}),
        ...(articleAuthor.email ? { email: articleAuthor.email } : {}),
      }],
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
      about: primaryEntities.map((entity) => ({
        '@type': 'Thing',
        name: entity,
      })),
      isAccessibleForFree: true,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.saunanews.com' },
        { '@type': 'ListItem', position: 2, name: article.category, item: `https://www.saunanews.com/category/${categorySlug}` },
        { '@type': 'ListItem', position: 3, name: articleHeadline, item: articleUrl },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
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
              {articleHeadline}
            </h1>

            {/* Dek */}
            <p className="text-xl text-warm-gray dark:text-dark-muted leading-relaxed font-editorial italic mb-8">
              {article.dek}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-stone-dark dark:text-dark-muted">
              <Link href={`/author/${articleAuthor.slug}`} className="flex items-center gap-2 group/author">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border dark:border-dark-border"><Image src={articleAuthor.avatar} alt={`${articleAuthor.name} portrait`} fill sizes="40px" className="object-cover" /></div>
                <div>
                  <span className="font-medium text-charcoal dark:text-dark-text block group-hover/author:text-green dark:group-hover/author:text-brass transition-colors">{articleAuthor.name}</span>
                  <span className="text-xs">{articleAuthor.role}</span>
                </div>
              </Link>
              {authorProfileLinks.length > 0 && (
                <>
                  <span className="text-border dark:text-dark-border hidden sm:block">&middot;</span>
                  <span className="text-xs">
                    {authorProfileLinks.map((profile, index) => (
                      <span key={profile.href}>
                        {index > 0 && <span className="mx-1">&middot;</span>}
                        <a
                          href={profile.href}
                          target="_blank"
                          rel="noopener noreferrer me"
                          className="hover:text-green dark:hover:text-brass transition-colors"
                        >
                          {profile.label}
                        </a>
                      </span>
                    ))}
                  </span>
                </>
              )}
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
              alt={imageAlt}
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
            {(() => {
              const bodyHtml = getArticleBody(article);
              const autoOrg = detectAutoEmbedOrganization(article.tags);
              const bodyAlreadyHasOrgMarker =
                autoOrg !== undefined &&
                bodyHtml.toLowerCase().includes(`data-events-org="${autoOrg.toLowerCase()}"`);
              return (
                <>
                  {renderArticleBodyWithEmbeds(bodyHtml)}
                  {autoOrg && !bodyAlreadyHasOrgMarker && (
                    <div className="mt-12">
                      <EventsCalendar
                        organization={autoOrg}
                        upcomingOnly
                        title={`${autoOrg} Event Calendar`}
                        footerLinkHref="/events"
                        footerLinkLabel="See the full sauna events calendar"
                      />
                    </div>
                  )}
                </>
              );
            })()}

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
                <Link href={`/author/${articleAuthor.slug}`} className="shrink-0">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-border dark:border-dark-border"><Image src={articleAuthor.avatar} alt={`${articleAuthor.name} portrait`} fill sizes="56px" className="object-cover" /></div>
                </Link>
                <div>
                  <Link href={`/author/${articleAuthor.slug}`} className="hover:text-green dark:hover:text-brass transition-colors">
                    <h3 className="font-semibold text-charcoal dark:text-cream">{articleAuthor.name}</h3>
                  </Link>
                  <p className="text-sm text-stone-dark dark:text-dark-muted mb-2">{articleAuthor.role}</p>
                  <p className="text-sm text-stone-dark dark:text-dark-muted leading-relaxed">
                    {articleAuthor.shortBio ?? articleAuthor.bio}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    {articleAuthor.email && (
                      <a href={`mailto:${articleAuthor.email}`} className="font-medium text-green dark:text-brass hover:underline">
                        {articleAuthor.email}
                      </a>
                    )}
                    {authorProfileLinks.map((profile) => (
                      <a
                        key={profile.href}
                        href={profile.href}
                        target="_blank"
                        rel="noopener noreferrer me"
                        className="font-medium text-green dark:text-brass hover:underline"
                      >
                        {profile.label}
                      </a>
                    ))}
                  </div>
                  {articleAuthor.extendedBio && articleAuthor.extendedBio.length > 0 && (
                    <details className="mt-3 rounded-lg border border-border dark:border-dark-border p-3 bg-surface dark:bg-dark-bg">
                      <summary className="cursor-pointer font-medium text-charcoal dark:text-cream">Full byline</summary>
                      <div className="mt-2 space-y-2 text-sm text-stone-dark dark:text-dark-muted leading-relaxed">
                        {articleAuthor.extendedBio.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </details>
                  )}
                  <Link
                    href={`/author/${articleAuthor.slug}`}
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
      {recommendedArticles.length > 0 && (
        <section className="bg-cream dark:bg-dark-bg border-t border-border dark:border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mb-8 border-b border-border dark:border-dark-border pb-4">
              Recommended Reads
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {recommendedArticles.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
