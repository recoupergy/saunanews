import Link from 'next/link';
import {
  getFeaturedArticles,
  getTrendingArticles,
  getLatestArticles,
  getArticlesByCategory,
  getEditorsPicks,
  getTopStories,
  getPolicyStories,
} from '@/data/articles';
import { categories } from '@/data/categories';
import ArticleCard from '@/components/ArticleCard';
import SectionHeader from '@/components/SectionHeader';
import NewsletterSignup from '@/components/NewsletterSignup';
import ContentTypeBadge from '@/components/ContentTypeBadge';
import MarketDataBar from '@/components/MarketDataBar';
import SponsorSlot from '@/components/SponsorSlot';
import ArticleImage from '@/components/ArticleImage';
import LaunchCalendar from '@/components/LaunchCalendar';
import EventsCalendar from '@/components/EventsCalendar';
import MobileRailTabs from '@/components/MobileRailTabs';
import { formatDateShort } from '@/lib/utils';
import { stringifyJsonLd } from '@/lib/structured-data';
import type { Article } from '@/data/types';

function curateMobileRailStories(
  primary: Article[],
  fallbacks: Article[][],
  excludedIds: Set<string>,
  count = 6,
  maxPerCategory = 2
): Article[] {
  const picked: Article[] = [];
  const seenIds = new Set<string>(excludedIds);
  const categoryCount = new Map<string, number>();

  const pools = [primary, ...fallbacks];
  for (const pool of pools) {
    for (const article of pool) {
      if (picked.length >= count) {
        return picked;
      }
      if (seenIds.has(article.id)) {
        continue;
      }

      const currentCategoryCount = categoryCount.get(article.category) ?? 0;
      if (currentCategoryCount >= maxPerCategory) {
        continue;
      }

      picked.push(article);
      seenIds.add(article.id);
      categoryCount.set(article.category, currentCategoryCount + 1);
    }
  }

  return picked;
}

export default function HomePage() {
  const featured = getFeaturedArticles();
  const trending = getTrendingArticles(8);
  const topStories = getTopStories(6);
  const latest = getLatestArticles(12);
  const marketIntel = getArticlesByCategory('Market Intelligence').slice(0, 4);
  const policyStories = getPolicyStories(4);
  const productLaunches = getArticlesByCategory('Product Launches').slice(0, 3);
  const hospitalitySpa = getArticlesByCategory('Hospitality & Spa').slice(0, 2);
  const wellnessTrends = getArticlesByCategory('Wellness Trends').slice(0, 2);
  const commentary = getArticlesByCategory('Commentary').slice(0, 2);
  const hero = featured[0];
  const secondaryFeatured = featured.slice(1, 3);
  const heroIds = new Set([hero?.id, ...secondaryFeatured.map((a) => a.id)].filter(Boolean));
  const latestDeduped = latest.filter((a) => !heroIds.has(a.id));
  const editorsPicks = getEditorsPicks(4);
  const mobileTopStories = curateMobileRailStories(
    topStories,
    [editorsPicks, trending, latestDeduped],
    heroIds
  );
  const mobileLatestStories = curateMobileRailStories(
    latestDeduped,
    [topStories],
    heroIds
  );
  const mobileTrendingStories = curateMobileRailStories(
    trending,
    [topStories, editorsPicks],
    heroIds
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.saunanews.com/#organization',
        name: 'SaunaNews',
        url: 'https://www.saunanews.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.saunanews.com/logo.png',
        },
        sameAs: [
          'https://twitter.com/sauna_news',
          'https://www.linkedin.com/company/saunanews',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.saunanews.com/#website',
        url: 'https://www.saunanews.com',
        name: 'SaunaNews',
        description: 'Daily reporting, market intelligence, and editorial analysis for the sauna industry.',
        publisher: {
          '@id': 'https://www.saunanews.com/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.saunanews.com/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      {/* Market Data Bar */}
      <MarketDataBar />

      {/* ===== ABOVE THE FOLD: Newspaper-style editorial hero ===== */}
      <section className="bg-cream dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          {/* Masthead tagline */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b-2 border-charcoal dark:border-cream">
            <div className="flex items-baseline gap-3 min-w-0 flex-1">
              <p className="font-editorial text-sm sm:text-base font-semibold tracking-tight m-0 leading-tight">
                <span className="text-charcoal dark:text-cream">The business and culture of sauna,</span>{' '}
                <em className="text-green dark:text-brass">covered well.</em>
              </p>
            </div>
            <span className="text-xs text-stone-dark dark:text-dark-muted hidden sm:block">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>

          {/* Main editorial grid - newspaper style */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Lead story - large left */}
            {hero && (
              <div className="lg:col-span-7">
                <Link href={`/article/${hero.slug}`} className="group block">
                  <div className="mb-5 rounded-lg overflow-hidden">
                    <ArticleImage
                      src={hero.featuredImage}
                      alt={hero.title}
                      category={hero.category}
                      seed={hero.id}
                      aspectRatio="16/10"
                      className="group-hover:scale-[1.02] transition-transform duration-700"
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <ContentTypeBadge type={hero.contentType} />
                    <span className="text-xs text-stone-dark dark:text-dark-muted">{hero.category}</span>
                    <span className="text-xs text-stone-dark dark:text-dark-muted">&middot; {formatDateShort(hero.publishDate)}</span>
                  </div>
                  <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.625rem] font-bold text-charcoal dark:text-cream leading-[1.15] group-hover:text-green dark:group-hover:text-brass transition-colors mb-3">
                    {hero.title}
                  </h2>
                  <p className="text-lg text-warm-gray dark:text-dark-muted leading-relaxed mb-3 font-editorial italic">
                    {hero.dek}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-stone-dark dark:text-dark-muted">
                    <span className="font-medium text-charcoal dark:text-dark-text">{hero.author.name}</span>
                    <span>&middot;</span>
                    <span>{hero.readingTime} min read</span>
                  </div>
                </Link>
                <div className="mt-5 rounded-lg border border-border dark:border-dark-border bg-surface dark:bg-dark-surface p-4 sm:p-5">
                  <p className="text-sm text-stone-dark dark:text-dark-muted mb-3">
                    Get SaunaNews in your inbox every week.
                  </p>
                  <Link
                    href="#newsletter-signup"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-charcoal dark:bg-brass px-5 py-2.5 text-sm font-semibold text-cream dark:text-charcoal hover:bg-slate dark:hover:bg-copper transition-colors"
                  >
                    Subscribe Free
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}

            {/* Right column: secondary stories + trending */}
            <div className="hidden lg:block lg:col-span-5 lg:border-l lg:border-border lg:dark:border-dark-border lg:pl-8">
              {/* Secondary featured stories */}
              {secondaryFeatured.map((article) => (
                <Link
                  key={article.id}
                  href={`/article/${article.slug}`}
                  className="group block pb-6 mb-6 border-b border-border dark:border-dark-border last:border-0 last:mb-0 last:pb-0"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <ContentTypeBadge type={article.contentType} size="sm" />
                    <span className="text-xs text-stone-dark dark:text-dark-muted">{article.category}</span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream leading-snug group-hover:text-green dark:group-hover:text-brass transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-stone-dark dark:text-dark-muted leading-relaxed line-clamp-2 mb-2">
                    {article.dek}
                  </p>
                  <span className="text-xs text-stone-dark dark:text-dark-muted">
                    {article.author.name} &middot; {formatDateShort(article.publishDate)}
                  </span>
                </Link>
              ))}

              {/* Quick headlines */}
              <div className="mt-6 pt-6 border-t border-border dark:border-dark-border">
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-dark dark:text-dark-muted mb-4">
                  Also Today
                </h4>
                {latestDeduped.slice(0, 3).map((article) => (
                  <Link
                    key={article.id}
                    href={`/article/${article.slug}`}
                    className="group flex items-start gap-3 py-2.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-brass mt-2 shrink-0" />
                    <span className="text-sm font-medium text-charcoal dark:text-dark-text leading-snug group-hover:text-green dark:group-hover:text-brass transition-colors">
                      {article.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          <MobileRailTabs
            topStories={mobileTopStories}
            latestStories={mobileLatestStories}
            trendingStories={mobileTrendingStories}
          />
          </div>
        </div>
      </section>

      {/* ===== LATEST NEWS — Asymmetric Bento Grid ===== */}
      <section className="bg-surface dark:bg-dark-surface border-t border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <SectionHeader title="Latest News" href="/news" accentColor="#2C2C2C" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Large left card */}
            <div className="lg:col-span-5">
              <ArticleCard article={latestDeduped[0]} />
            </div>
            {/* Middle column - 2 stacked */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <ArticleCard article={latestDeduped[1]} />
              <ArticleCard article={latestDeduped[2]} variant="compact" />
            </div>
            {/* Right compact list */}
            <div className="lg:col-span-3">
              {latestDeduped.slice(3, 7).map((article) => (
                <ArticleCard key={article.id} article={article} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARKET INTELLIGENCE + TRENDING SIDEBAR ===== */}
      <section className="bg-cream dark:bg-dark-bg border-t border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Market Intelligence — 8 columns */}
            <div className="lg:col-span-8">
              <SectionHeader title="Market Intelligence" href="/category/market-intelligence" accentColor="#B8935A" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {marketIntel.slice(0, 2).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
              <div className="space-y-0">
                {marketIntel.slice(2).map((article) => (
                  <ArticleCard key={article.id} article={article} variant="horizontal" />
                ))}
              </div>
            </div>

            {/* Trending sidebar — 4 columns */}
            <div className="hidden lg:block lg:col-span-4 lg:border-l lg:border-border lg:dark:border-dark-border lg:pl-8">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border dark:border-dark-border">
                <svg className="w-4 h-4 text-brass" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.51 6.51 0 009 11.5a3 3 0 106 0c0-1.12-.492-2.126-1.27-2.812A6.002 6.002 0 0015.362 5.214z" />
                </svg>
                <h2 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">Trending</h2>
              </div>
              <div className="space-y-0">
                {trending.slice(0, 5).map((article, i) => (
                  <Link
                    key={article.id}
                    href={`/article/${article.slug}`}
                    className="group flex gap-4 py-4 border-b border-border dark:border-dark-border last:border-0"
                  >
                    <span className="text-3xl font-editorial font-bold text-stone/50 dark:text-dark-border leading-none mt-0.5 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-charcoal dark:text-dark-text leading-snug group-hover:text-green dark:group-hover:text-brass transition-colors mb-1">
                        {article.title}
                      </h3>
                      <span className="text-xs text-stone-dark dark:text-dark-muted">
                        {article.category} &middot; {article.readingTime} min
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== CALENDARS ===== */}
      <section className="bg-ivory dark:bg-dark-surface border-t border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="mb-8">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">Calendars</h2>
            <p className="mt-2 text-sm text-stone-dark dark:text-dark-muted max-w-3xl">
              Track upcoming launches and major Aufguss events in a dedicated section designed for desktop scanning and mobile readability.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-start">
            <LaunchCalendar />
            <EventsCalendar
              category="Aufguss"
              upcomingOnly
              title="Aufguss Event Calendar"
              limit={5}
              footerLinkHref="/events/aufguss"
              footerLinkLabel="See the full Aufguss calendar"
            />
          </div>
        </div>
      </section>

      {/* ===== PRODUCT LAUNCHES — Visual cards ===== */}
      <section className="bg-surface dark:bg-dark-surface border-t border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <SectionHeader title="Policy Watch" href="/category/tariffs-logistics" accentColor="#7A5A33" />
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {policyStories.map((article) => (
              <ArticleCard key={article.id} article={article} variant="horizontal" />
            ))}
          </div>

          <SectionHeader title="Product Launches" href="/category/product-launches" accentColor="#C4956A" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productLaunches.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPONSOR SLOT ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SponsorSlot variant="banner" />
      </div>

      {/* ===== EDITOR'S PICKS — Dark premium section ===== */}
      <section className="bg-charcoal dark:bg-slate text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-cream/10">
            <svg className="w-5 h-5 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold">Editor&apos;s Picks</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12">
            {editorsPicks.map((article, i) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                className="group flex gap-5 py-6 border-b border-cream/8 last:border-0"
              >
                <span className="text-5xl font-editorial font-bold text-cream/10 leading-none shrink-0 mt-1 hidden sm:block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <ContentTypeBadge type={article.contentType} size="sm" />
                    <span className="text-xs text-cream/40">{article.category}</span>
                  </div>
                  <h3 className="font-editorial text-lg sm:text-xl font-bold leading-snug group-hover:text-brass transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-cream/50 line-clamp-2 mb-2">{article.dek}</p>
                  <span className="text-xs text-cream/30">
                    {article.author.name} &middot; {formatDateShort(article.publishDate)} &middot; {article.readingTime} min
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TWO-COLUMN: Hospitality + Wellness ===== */}
      <section className="bg-cream dark:bg-dark-bg border-t border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Hospitality & Spa */}
            <div>
              <SectionHeader title="Hospitality & Spa" href="/category/hospitality-spa" accentColor="#4A6741" />
              {hospitalitySpa.map((article) => (
                <ArticleCard key={article.id} article={article} variant="horizontal" />
              ))}
            </div>
            {/* Wellness + Commentary */}
            <div className="lg:border-l lg:border-border lg:dark:border-dark-border lg:pl-8">
              <SectionHeader title="Wellness & Commentary" href="/category/wellness-trends" accentColor="#5A7A51" />
              {[...wellnessTrends, ...commentary].slice(0, 3).map((article) => (
                <ArticleCard key={article.id} article={article} variant="horizontal" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPLORE BY TOPIC ===== */}
      <section className="bg-surface dark:bg-dark-surface border-t border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <SectionHeader title="Explore by Topic" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group text-center p-5 border border-border dark:border-dark-border rounded-xl hover:border-green dark:hover:border-brass hover:bg-green/5 dark:hover:bg-brass/5 transition-all"
              >
                <h3 className="font-editorial text-sm font-semibold text-charcoal dark:text-cream group-hover:text-green dark:group-hover:text-brass transition-colors leading-tight">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="bg-ivory dark:bg-dark-surface border-t border-border dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2 text-center lg:text-left">
              <div className="w-16 h-16 bg-charcoal dark:bg-cream rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <span className="text-cream dark:text-charcoal font-bold text-2xl font-editorial">S</span>
              </div>
              <h2 className="font-editorial text-3xl font-bold text-charcoal dark:text-cream">
                WHY SAUNANEWS EXISTS
              </h2>
            </div>
            <div className="lg:col-span-3">
              <p className="text-base text-warm-gray dark:text-dark-muted leading-relaxed mb-4">
                Sauna has outgrown the way it is usually covered.
              </p>
              <p className="text-base text-warm-gray dark:text-dark-muted leading-relaxed mb-6">
                It is no longer just a product niche or a generic wellness talking point. It now touches hospitality, public bathing, manufacturing, design, standards, real estate, trade, longevity, and culture.
              </p>
              <p className="text-base text-warm-gray dark:text-dark-muted leading-relaxed mb-6">
                SaunaNews exists to cover that category with independence, specificity, and context. For the people building it and the people trying to understand where it goes next.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-green dark:text-brass hover:text-green-light dark:hover:text-copper transition-colors"
                >
                  About us
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-green dark:text-brass hover:text-green-light dark:hover:text-copper transition-colors"
                >
                  Submit news
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER CTA ===== */}
      <div id="newsletter-signup">
        <NewsletterSignup variant="hero" source="homepage-hero-primary-cta" />
      </div>
    </>
  );
}
