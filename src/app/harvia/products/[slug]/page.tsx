import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  harviaProducts,
  getProduct,
  getAllProductSlugs,
} from '@/data/harvia-products';
import NewsletterSignup from '@/components/NewsletterSignup';
import { formatDate } from '@/lib/utils';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: 'Product not found' };
  const url = `https://www.saunanews.com/harvia/products/${product.slug}`;
  const description = `${product.tagline} Specs, investor-call quotes, insider install notes, and every mention across Harvia investor calls, press releases, and product pages.`;
  return {
    title: `${product.name} — Specs, Quotes, and Insider Notes`,
    description,
    keywords: [
      product.name,
      `${product.name} review`,
      `${product.name} specs`,
      `${product.name} price`,
      'Harvia heater',
      'Harvia sauna',
      product.series,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} — SaunaNews`,
      description,
      url,
      type: 'article',
      siteName: 'SaunaNews',
      images: [{ url: product.heroImage, width: 1200, height: 675, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@sauna_news',
      title: product.name,
      description,
      images: [product.heroImage],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = product.relatedProductSlugs
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => !!p);

  const url = `https://www.saunanews.com/harvia/products/${product.slug}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.tagline,
      image: product.gallery,
      url,
      brand: {
        '@type': 'Brand',
        name: 'Harvia',
      },
      manufacturer: {
        '@type': 'Organization',
        name: 'Harvia Plc',
        url: 'https://www.harvia.com',
      },
      category: product.category,
      additionalProperty: product.specsSummary.map((s) => ({
        '@type': 'PropertyValue',
        name: s.label,
        value: s.value,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.saunanews.com' },
        { '@type': 'ListItem', position: 2, name: 'Harvia', item: 'https://www.saunanews.com/harvia' },
        { '@type': 'ListItem', position: 3, name: product.name, item: url },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header / hero */}
      <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex items-center gap-2 text-sm text-stone-dark dark:text-dark-muted mb-4">
            <Link href="/" className="hover:text-green dark:hover:text-brass transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/harvia" className="hover:text-green dark:hover:text-brass transition-colors">
              Harvia
            </Link>
            <span>/</span>
            <span>Products</span>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brass mb-3">
                {product.series} &middot; {product.category.replace('-', ' ')}
              </span>
              <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal dark:text-cream leading-[1.1] mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-warm-gray dark:text-dark-muted italic font-editorial leading-snug mb-5">
                {product.subtitle}
              </p>
              <p className="text-base text-stone-dark dark:text-dark-muted leading-relaxed mb-5">
                {product.tagline}
              </p>
              <p className="text-base text-stone-dark dark:text-dark-muted leading-relaxed mb-6">
                {product.intro}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={product.harviaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal dark:bg-cream text-cream dark:text-charcoal text-sm font-medium rounded-md hover:bg-slate dark:hover:bg-stone transition-colors"
                >
                  Harvia.com product page
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <Link
                  href="/harvia"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border dark:border-dark-border text-charcoal dark:text-cream text-sm font-medium rounded-md hover:border-green dark:hover:border-brass transition-colors"
                >
                  Back to Harvia hub
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-ivory dark:bg-dark-surface border border-border dark:border-dark-border">
                <Image
                  src={product.heroImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs summary bar */}
      <section className="bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {product.specsSummary.map((s) => (
              <div key={s.label}>
                <p className="text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-1">
                  {s.label}
                </p>
                <p className="text-sm font-semibold text-charcoal dark:text-cream">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size / model table */}
      {product.sizes.length > 0 && (
        <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream mb-6">
              Models & sizing
            </h2>
            <div className="overflow-x-auto border border-border dark:border-dark-border rounded-xl bg-ivory dark:bg-dark-surface">
              <table className="w-full text-sm">
                <thead className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
                  <tr className="text-left text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted">
                    <th className="px-5 py-3 font-semibold">Model</th>
                    <th className="px-5 py-3 font-semibold">Power</th>
                    <th className="px-5 py-3 font-semibold">Room size</th>
                    <th className="px-5 py-3 font-semibold">Stones</th>
                    <th className="px-5 py-3 font-semibold">Voltage</th>
                    <th className="px-5 py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border dark:divide-dark-border">
                  {product.sizes.map((s) => (
                    <tr key={s.model} className="hover:bg-cream/70 dark:hover:bg-dark-bg/50 transition-colors">
                      <td className="px-5 py-3 font-semibold text-charcoal dark:text-cream tabular-nums">{s.model}</td>
                      <td className="px-5 py-3 text-charcoal dark:text-cream tabular-nums">{s.kw}</td>
                      <td className="px-5 py-3 text-stone-dark dark:text-dark-muted tabular-nums">{s.roomSize}</td>
                      <td className="px-5 py-3 text-stone-dark dark:text-dark-muted tabular-nums">{s.stones || '—'}</td>
                      <td className="px-5 py-3 text-stone-dark dark:text-dark-muted tabular-nums">{s.voltage || '—'}</td>
                      <td className="px-5 py-3 text-stone-dark dark:text-dark-muted">{s.note || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Key features */}
      <section className="bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream mb-6">
            Key features
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.keyFeatures.map((f, i) => (
              <li
                key={i}
                className="flex gap-3 items-start p-4 bg-ivory dark:bg-dark-bg border border-border dark:border-dark-border rounded-lg"
              >
                <span className="w-2 h-2 rounded-full bg-brass mt-2 shrink-0" />
                <span className="text-sm text-charcoal dark:text-cream leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quotes from investor calls and Harvia sources */}
      {product.quotes.length > 0 && (
        <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brass mb-2">
                Quotes & mentions
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                What Harvia has said about {product.name}
              </h2>
              <p className="text-sm text-stone-dark dark:text-dark-muted mt-2">
                From earnings calls, investor presentations, annual reports, and the Harvia product catalog.
              </p>
            </div>
            <div className="space-y-6">
              {product.quotes.map((q, i) => (
                <figure
                  key={i}
                  className="p-6 bg-ivory dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl"
                >
                  <blockquote className="text-base sm:text-lg text-charcoal dark:text-cream italic font-editorial leading-relaxed mb-4">
                    &ldquo;{q.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex flex-wrap items-center gap-3 text-xs text-stone-dark dark:text-dark-muted">
                    <span className="font-semibold text-charcoal dark:text-cream">{q.source}</span>
                    <span>&middot;</span>
                    <span>{q.context}</span>
                    <span>&middot;</span>
                    <span className="tabular-nums">{formatDate(q.date)}</span>
                    {q.url && (
                      <>
                        <span>&middot;</span>
                        <a
                          href={q.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green dark:text-brass hover:underline"
                        >
                          Source
                        </a>
                      </>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Insider notes */}
      {product.insiderNotes.length > 0 && (
        <section className="bg-charcoal dark:bg-dark-surface border-b border-border dark:border-dark-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brass mb-2">
                Insider notes
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-cream">
                What pros know about {product.name}
              </h2>
              <p className="text-sm text-cream/60 mt-2">
                Field knowledge from specialty dealers, commercial installers, and long-term Harvia operators. Stuff that isn&apos;t on the spec sheet.
              </p>
            </div>
            <div className="space-y-5">
              {product.insiderNotes.map((n, i) => (
                <div key={i} className="p-6 bg-slate/60 border border-cream/10 rounded-xl">
                  <h3 className="font-editorial text-lg font-bold text-cream mb-2">{n.title}</h3>
                  <p
                    className="text-sm text-cream/80 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: n.body }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Best for */}
      <section className="bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="p-6 bg-green/5 dark:bg-green/15 border border-green/20 rounded-xl">
            <h3 className="text-xs uppercase tracking-widest font-bold text-green mb-3">Best for</h3>
            <p className="text-base text-charcoal dark:text-cream leading-relaxed">{product.bestFor}</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {product.gallery.length > 1 && (
        <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream mb-6">
              Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {product.gallery.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-ivory dark:bg-dark-surface">
                  <Image
                    src={img}
                    alt={`${product.name} image ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Meta / context */}
      <section className="bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-1">
                Warranty
              </p>
              <p className="text-charcoal dark:text-cream">{product.warranty}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-1">
                Made in
              </p>
              <p className="text-charcoal dark:text-cream">{product.madeIn}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-1">
                Launched
              </p>
              <p className="text-charcoal dark:text-cream">{product.launched}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-1">
                Last Harvia mention
              </p>
              <p className="text-charcoal dark:text-cream">
                {formatDate(product.lastMentioned)}
              </p>
              <p className="text-xs text-stone-dark dark:text-dark-muted mt-1">
                {product.lastMentionContext}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream mb-6">
              Related Harvia products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/harvia/products/${r.slug}`}
                  className="group border border-border dark:border-dark-border rounded-xl overflow-hidden bg-ivory dark:bg-dark-surface hover:border-green dark:hover:border-brass transition-colors"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={r.heroImage}
                      alt={r.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream mb-1 group-hover:text-green dark:group-hover:text-brass transition-colors">
                      {r.name}
                    </h3>
                    <p className="text-xs text-stone-dark dark:text-dark-muted mb-2">
                      {r.series} &middot; {r.position}
                    </p>
                    <p className="text-sm text-stone-dark dark:text-dark-muted leading-relaxed line-clamp-2">
                      {r.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Harvia hub */}
      <section className="bg-charcoal dark:bg-dark-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h2 className="font-editorial text-2xl font-bold text-cream mb-3">
            All Harvia coverage in one place
          </h2>
          <p className="text-sm text-cream/70 mb-5 max-w-2xl mx-auto">
            Earnings, investor calendar, stock chart, acquisitions timeline, and the rest of the Harvia product catalog live on our main hub.
          </p>
          <Link
            href="/harvia"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-cream text-charcoal text-sm font-medium rounded-md hover:bg-stone transition-colors"
          >
            Go to Harvia News hub
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <NewsletterSignup />
      </div>

      {/* Footer note */}
      <section className="bg-cream dark:bg-dark-bg border-t border-border dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-xs text-stone-dark dark:text-dark-muted leading-relaxed">
            Product data sourced from Harvia Plc investor materials, earnings call transcripts, harvia.com, and harviagroup.com. Quotes attributed to specific sources. Insider notes reflect field knowledge from specialty dealers and commercial installers. SaunaNews is independent and not affiliated with Harvia Plc.
          </p>
        </div>
      </section>
    </>
  );
}
