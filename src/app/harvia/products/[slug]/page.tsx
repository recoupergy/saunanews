import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
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
  const description = `${product.tagline} Specs, source-linked quotes, installer notes, and recent mentions across Harvia investor calls, press releases, and product pages.`;
  return {
    title: `${product.name} — Specs, Quotes, and Field Notes`,
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
      images: [{
        url: product.heroImage.startsWith('http') ? product.heroImage : `https://www.saunanews.com${product.heroImage}`,
        width: 1200,
        height: 675,
        alt: `${product.name} — ${product.subtitle}`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@sauna_news',
      title: product.name,
      description,
      images: [product.heroImage.startsWith('http') ? product.heroImage : `https://www.saunanews.com${product.heroImage}`],
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

  const linkedQuotes = product.quotes.filter((q) => !!q.url).length;

  const related = product.relatedProductSlugs
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => !!p);

  const url = `https://www.saunanews.com/harvia/products/${product.slug}`;
  const absUrl = (p: string) => (p.startsWith('http') ? p : `https://www.saunanews.com${p}`);
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.tagline,
      image: [
        absUrl(product.heroImage),
        ...product.gallery.map(absUrl),
        ...(product.mediaBank?.images.slice(0, 10).map((i) => absUrl(i.src)) || []),
      ],
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
              <div className="mb-4 rounded-lg border border-border dark:border-dark-border bg-surface dark:bg-dark-surface p-4">
                <p className="text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-2">
                  On this page
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-charcoal dark:text-cream">
                  <li>• Model-level sizing and electrical specs</li>
                  <li>• Source-linked Harvia and earnings-call quotes</li>
                  <li>• Installer field notes and setup pitfalls</li>
                  <li>• Official Harvia media bank images</li>
                </ul>
              </div>
              <div className="mb-6 rounded-lg border border-green/20 dark:border-brass/30 bg-green/5 dark:bg-dark-surface p-4">
                <p className="text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-2">
                  Editorial status
                </p>
                <p className="text-sm text-charcoal dark:text-cream leading-relaxed">
                  SaunaNews is independent and not affiliated with Harvia. This page is maintained as a product record for news coverage and timeline context, not a sales page.
                </p>
                <p className="text-xs text-stone-dark dark:text-dark-muted mt-2">
                  Last timeline mention: <span className="tabular-nums">{formatDate(product.lastMentioned)}</span> &middot; {product.lastMentionContext}
                </p>
              </div>
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
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-border dark:border-dark-border">
                <Image
                  src={product.heroImage}
                  alt={`${product.name} — ${product.subtitle}. ${product.series}.`}
                  fill
                  className="object-contain p-4"
                  priority
                  fetchPriority="high"
                  quality={85}
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
                Source-backed mentions
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                What Harvia has said about {product.name}
              </h2>
              <p className="text-sm text-stone-dark dark:text-dark-muted mt-2">
                From earnings calls, investor presentations, annual reports, and the Harvia product catalog.
              </p>
              <p className="text-xs text-stone-dark dark:text-dark-muted mt-2">
                {linkedQuotes} of {product.quotes.length} quote{product.quotes.length === 1 ? '' : 's'} include a direct source link.
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
            {linkedQuotes !== product.quotes.length && (
              <p className="text-xs text-stone-dark dark:text-dark-muted mt-6">
                Some older quotes do not have a direct public URL in this record yet. We keep them for timeline completeness and update links as primary sources are located.
              </p>
            )}
          </div>
        </section>
      )}

      {/* Field notes */}
      {product.insiderNotes.length > 0 && (
        <section className="bg-charcoal dark:bg-dark-surface border-b border-border dark:border-dark-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brass mb-2">
                Field notes
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-cream">
                Installer notes for {product.name}
              </h2>
              <p className="text-sm text-cream/60 mt-2">
                Practical guidance from specialty dealers, commercial installers, and long-term Harvia operators. Use these notes alongside the official manual.
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
            <h3 className="text-xs uppercase tracking-widest font-bold text-green mb-3">Editorial fit</h3>
            <p className="text-base text-charcoal dark:text-cream leading-relaxed">{product.bestFor}</p>
            <p className="text-xs text-stone-dark dark:text-dark-muted mt-2">
              This is editorial analysis for context, not a purchase recommendation.
            </p>
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
                <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white">
                  <Image
                    src={img}
                    alt={`${product.name} ${product.series} — view ${i + 1} of ${product.gallery.length}. Harvia sauna equipment.`}
                    fill
                    loading="lazy"
                    quality={80}
                    className="object-contain p-3 hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Harvia Media Bank gallery */}
      {product.mediaBank && product.mediaBank.images.length > 0 && (
        <section className="bg-ivory dark:bg-dark-surface border-b border-border dark:border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-6 flex items-start justify-between gap-4 flex-wrap">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-brass mb-2">
                  Harvia Media Bank
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                  Official Harvia product photography
                </h2>
                <p className="text-sm text-stone-dark dark:text-dark-muted mt-2 max-w-3xl">
                  Images sourced from the <a href="https://mediabank.harvia.com" target="_blank" rel="noopener noreferrer" className="text-green dark:text-brass underline">Harvia Media Bank</a>. Product photography, variant shots, technical diagrams, and installation references straight from Harvia Plc.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted">
                {product.mediaBank.images.length} image{product.mediaBank.images.length === 1 ? '' : 's'}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {product.mediaBank.images.map((img) => (
                <figure key={img.id} className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-white border border-border dark:border-dark-border">
                    <Image
                      src={img.src}
                      alt={(img.title.toLowerCase().includes('harvia') ? img.title : `Harvia ${img.title}`) + (img.type === 'technical-image' ? ' (technical diagram)' : '')}
                      fill
                      loading="lazy"
                      quality={80}
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    />
                    {img.type === 'technical-image' && (
                      <span className="absolute top-2 left-2 text-[10px] uppercase tracking-wider bg-charcoal/80 text-cream px-2 py-0.5 rounded">
                        Diagram
                      </span>
                    )}
                  </div>
                  <figcaption className="mt-1.5 text-xs text-stone-dark dark:text-dark-muted leading-tight line-clamp-2">
                    {img.title}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="text-[11px] text-stone-dark dark:text-dark-muted mt-5 italic">
              Media Bank of Harvia. Courtesy of Harvia Plc.
            </p>
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
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <Image
                      src={r.heroImage}
                      alt={`${r.name} — ${r.subtitle}`}
                      fill
                      loading="lazy"
                      quality={80}
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-700"
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
            Product data is sourced from Harvia Plc investor materials, earnings call transcripts, harvia.com, and harviagroup.com. Quotes are attributed to specific sources when available. Field notes reflect installer and dealer experience and should be validated against local code and the latest Harvia manuals. SaunaNews is independent and not affiliated with Harvia Plc.
          </p>
          <p className="text-[11px] text-stone-dark dark:text-dark-muted leading-relaxed mt-2">
            If you spot an error or outdated spec, contact the SaunaNews editorial team so the record can be corrected.
          </p>
        </div>
      </section>
    </>
  );
}
