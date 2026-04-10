import { notFound } from 'next/navigation';
import Link from 'next/link';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getArticlesByCategory } from '@/data/articles';
import FeaturedStory from '@/components/FeaturedStory';
import ArticleCard from '@/components/ArticleCard';
import NewsletterSignup from '@/components/NewsletterSignup';

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const cat = getCategoryBySlug(slug);
    if (!cat) return { title: 'Category Not Found' };
    const canonicalUrl = `https://saunanews.com/category/${cat.slug}`;
    return {
      title: cat.name,
      description: cat.description,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: `${cat.name} | SaunaNews`,
        description: cat.description,
        type: 'website',
        url: canonicalUrl,
        siteName: 'SaunaNews',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${cat.name} | SaunaNews`,
        description: cat.description,
      },
    };
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const allArticles = getArticlesByCategory(category.name);
  const featured = allArticles[0];
  const rest = allArticles.slice(1);

  const categoryUrl = `https://saunanews.com/category/${category.slug}`;
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saunanews.com' },
      { '@type': 'ListItem', position: 2, name: category.name, item: categoryUrl },
    ],
  };
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} — SaunaNews`,
    description: category.description,
    url: categoryUrl,
    publisher: { '@type': 'Organization', name: 'SaunaNews', url: 'https://saunanews.com' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      {/* Header */}
      <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-2 text-sm text-stone-dark dark:text-dark-muted mb-4">
            <Link href="/" className="hover:text-green dark:hover:text-brass transition-colors">Home</Link>
            <span>/</span>
            <span>{category.name}</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal dark:text-cream mb-3">
            {category.name}
          </h1>
          <p className="text-lg text-warm-gray dark:text-dark-muted max-w-2xl">
            {category.description}
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <FeaturedStory article={featured} />
          </div>
        </section>
      )}

      {/* Article Grid */}
      {rest.length > 0 && (
        <section className="bg-cream dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mb-8 border-b border-border dark:border-dark-border pb-4">
              More in {category.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {rest.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {allArticles.length === 0 && (
        <section className="bg-cream dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <p className="text-lg text-warm-gray dark:text-dark-muted">
              No articles in this category yet. Check back soon.
            </p>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <NewsletterSignup />
      </div>
    </>
  );
}
