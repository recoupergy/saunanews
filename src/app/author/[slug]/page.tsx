import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAuthorBySlug, getAllAuthorSlugs } from '@/data/authors';
import { getArticlesByAuthorSlug } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import NewsletterSignup from '@/components/NewsletterSignup';

export function generateStaticParams() {
  return getAllAuthorSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const author = getAuthorBySlug(slug);
    if (!author) return { title: 'Author Not Found' };
    const canonicalUrl = `https://www.saunanews.com/author/${author.slug}`;
    return {
      title: `${author.name} — ${author.role}`,
      description: author.bio,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: `${author.name} — ${author.role} | SaunaNews`,
        description: author.bio,
        type: 'profile',
        url: canonicalUrl,
        siteName: 'SaunaNews',
        ...(author.image ? { images: [{ url: author.image }] } : {}),
      },
      twitter: {
        card: 'summary',
        site: '@sauna_news',
        title: `${author.name} — ${author.role} | SaunaNews`,
        description: author.bio,
      },
    };
  });
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const authorArticles = getArticlesByAuthorSlug(slug);

  const authorUrl = `https://www.saunanews.com/author/${author.slug}`;
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.role,
    worksFor: { '@type': 'Organization', name: 'SaunaNews', url: 'https://www.saunanews.com' },
    url: authorUrl,
    description: author.bio,
    ...(author.sameAs ? { sameAs: author.sameAs } : {}),
    ...(author.image ? { image: author.image } : {}),
    ...(author.alumniOf ? { alumniOf: author.alumniOf } : {}),
    ...(author.knowsAbout ? { knowsAbout: author.knowsAbout } : {}),
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.saunanews.com' },
      { '@type': 'ListItem', position: 2, name: 'Authors', item: 'https://www.saunanews.com/authors' },
      { '@type': 'ListItem', position: 3, name: author.name, item: authorUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center gap-2 text-sm text-stone-dark dark:text-dark-muted mb-8">
            <Link href="/" className="hover:text-green dark:hover:text-brass transition-colors">Home</Link>
            <span>/</span>
            <span>Authors</span>
            <span>/</span>
            <span>{author.name}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border border-border dark:border-dark-border">
              <Image src={author.avatar} alt={`${author.name} portrait`} fill sizes="112px" className="object-cover" priority />
            </div>

            <div className="flex-1">
              <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal dark:text-cream mb-1">
                {author.name}
              </h1>
              <p className="text-base text-green dark:text-brass font-medium mb-4">{author.role}</p>
              <p className="text-warm-gray dark:text-dark-muted leading-relaxed max-w-2xl">{author.shortBio ?? author.bio}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                {author.website && (
                  <a href={author.website} target="_blank" rel="noopener noreferrer" className="font-medium text-green dark:text-brass hover:underline">
                    Professional site
                  </a>
                )}
                {author.linkedin && (
                  <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-green dark:text-brass hover:underline">
                    LinkedIn
                  </a>
                )}
              </div>
              {author.extendedBio && author.extendedBio.length > 0 && (
                <details className="mt-5 rounded-lg border border-border dark:border-dark-border p-4 bg-ivory dark:bg-dark-surface">
                  <summary className="cursor-pointer font-medium text-charcoal dark:text-cream">Full byline</summary>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-stone-dark dark:text-dark-muted">
                    {author.extendedBio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </details>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mb-8 border-b border-border dark:border-dark-border pb-4">
            Articles by {author.name}
            <span className="text-base font-normal text-stone-dark dark:text-dark-muted ml-3">
              ({authorArticles.length})
            </span>
          </h2>

          {authorArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {authorArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-lg text-warm-gray dark:text-dark-muted py-12 text-center">
              No articles published yet. Check back soon.
            </p>
          )}
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <NewsletterSignup />
      </div>
    </>
  );
}
