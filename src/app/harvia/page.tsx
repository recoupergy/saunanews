import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { articles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import ContentTypeBadge from '@/components/ContentTypeBadge';
import NewsletterSignup from '@/components/NewsletterSignup';
import ArticleImage from '@/components/ArticleImage';
import HarviaStockChart from '@/components/HarviaStockChart';
import { formatDate, formatDateShort } from '@/lib/utils';

const PAGE_URL = 'https://www.saunanews.com/harvia';
const PAGE_TITLE = 'Harvia News: Earnings, Stock, Acquisitions, and Investor Calendar';
const PAGE_DESCRIPTION =
  'The complete Harvia news hub. Quarterly earnings, stock price, investor calendar, acquisitions timeline, brand portfolio, and every major Harvia story from SaunaNews.';

export const metadata: Metadata = {
  title: 'Harvia News',
  description: PAGE_DESCRIPTION,
  keywords: [
    'Harvia news',
    'Harvia Oyj',
    'Harvia Plc',
    'HARVIA stock',
    'Harvia Nasdaq Helsinki',
    'Harvia earnings',
    'Harvia investor relations',
    'Harvia quarterly results',
    'Harvia dividend',
    'Harvia acquisitions',
    'ThermaSol',
    'Almost Heaven Saunas',
    'EOS sauna',
    'Kirami',
    'Finnish sauna company',
    'sauna heater manufacturer',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: 'website',
    url: PAGE_URL,
    siteName: 'SaunaNews',
    images: [
      {
        url: 'https://harviagroup.com/wp-content/uploads/2025/05/Kiuas_Kuva1-780x439.jpg',
        width: 1200,
        height: 675,
        alt: 'Harvia sauna heaters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sauna_news',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

type InvestorEvent = {
  date: string;
  label: string;
  detail?: string;
  status: 'upcoming' | 'past';
  href?: string;
};

const TODAY = new Date('2026-04-17');

const investorEvents: InvestorEvent[] = [
  { date: '2026-04-15', label: 'Annual General Meeting 2026', detail: 'Helsinki, 10:00 EET', status: 'past', href: '/article/harvia-agm-2026-resolutions-dividend' },
  { date: '2026-04-17', label: 'Dividend Record Date (1st installment)', detail: 'EUR 0.39 per share', status: 'upcoming' },
  { date: '2026-04-24', label: 'Dividend Payment (1st installment)', detail: 'EUR 0.39 per share', status: 'upcoming' },
  { date: '2026-05-07', label: 'Q1 2026 Interim Report', detail: 'Jan–Mar 2026, ~09:00 EET', status: 'upcoming' },
  { date: '2026-08-06', label: 'H1 2026 Half-Year Report', detail: 'Jan–Jun 2026, ~09:00 EET', status: 'upcoming' },
  { date: '2026-10-19', label: 'Dividend Record Date (2nd installment)', detail: 'EUR 0.38 per share', status: 'upcoming' },
  { date: '2026-10-26', label: 'Dividend Payment (2nd installment)', detail: 'EUR 0.38 per share', status: 'upcoming' },
  { date: '2026-10-29', label: 'Q3 2026 Interim Report', detail: 'Jan–Sep 2026, ~09:00 EET', status: 'upcoming' },
  { date: '2026-02-12', label: 'Financial Statements Bulletin 2025', detail: 'FY revenue EUR 198.9M', status: 'past', href: '/article/harvia-q4-2025-fy-2025-results' },
  { date: '2025-11-06', label: 'Q3 2025 Interim Report', detail: 'Revenue EUR 46.0M (+18.8%)', status: 'past', href: '/article/harvia-q3-2025-interim-results' },
  { date: '2025-10-28', label: 'Dividend Payment (2nd installment 2024)', detail: 'EUR 0.37 per share', status: 'past' },
  { date: '2025-08-07', label: 'H1 2025 Half-Year Report', detail: 'Revenue EUR 99.3M (+16.0% FX-adj)', status: 'past', href: '/article/harvia-h1-2025-half-year-results' },
  { date: '2025-05-07', label: 'Q1 2025 Interim Report', detail: 'Revenue EUR 52.0M (+22.7%)', status: 'past', href: '/article/harvia-record-q1-revenue-thermasol-integration' },
  { date: '2025-04-17', label: 'Dividend Payment (1st installment 2024)', detail: 'EUR 0.36 per share', status: 'past' },
  { date: '2025-02-13', label: 'Financial Statements Bulletin 2024', detail: 'FY revenue EUR 175.2M', status: 'past', href: '/article/harvia-q4-2024-fy-2024-results' },
  { date: '2024-11-07', label: 'Q3 2024 Interim Report', detail: 'First ThermaSol consolidation, EUR 38.7M (+14.0%)', status: 'past', href: '/article/harvia-q3-2024-interim-results' },
  { date: '2024-08-02', label: 'H1 2024 Half-Year Review', detail: 'Q2 revenue EUR 43.2M (+20.7%)', status: 'past', href: '/article/harvia-h1-2024-half-year-results' },
  { date: '2024-07-31', label: 'ThermaSol Acquisition Closed', detail: 'USD 30.4M US steam platform', status: 'past', href: '/article/harvia-thermasol-acquisition-announcement' },
  { date: '2024-05-03', label: 'Q1 2024 Interim Report', detail: 'Revenue EUR 42.4M (+2.3%)', status: 'past', href: '/article/harvia-q1-2024-interim-results' },
  { date: '2024-02-08', label: 'Financial Statements Bulletin 2023', detail: 'Q4 return to growth, FY EUR 150.5M', status: 'past', href: '/article/harvia-q4-2023-fy-2023-results' },
  { date: '2023-02-09', label: 'Financial Statements Bulletin 2022', detail: 'FY EUR 172.4M, post-pandemic reset', status: 'past', href: '/article/harvia-fy-2022-full-year-results' },
];

const acquisitions = [
  {
    year: '2016',
    title: 'Sentiotec',
    location: 'Wolfurt, Austria',
    note: 'Infrared and wellness technology',
  },
  {
    year: '2018',
    title: 'Almost Heaven Saunas',
    location: 'Renick, West Virginia',
    note: 'Approx. EUR 4M. Largest US barrel sauna manufacturer.',
    href: '/article/harvia-almost-heaven-saunas-acquisition',
  },
  {
    year: '2020',
    title: 'EOS Group (majority)',
    location: 'Driedorf, Germany',
    note: 'Premium commercial heaters, infrared, spa controls',
    href: '/article/harvia-eos-group-acquisition-germany',
  },
  {
    year: '2021',
    title: 'Kirami',
    location: 'Forssa, Finland',
    note: 'EUR 7M + up to EUR 4M earnout. Wood-fired hot tubs.',
    href: '/article/harvia-kirami-acquisition-hot-tub',
  },
  {
    year: '2022',
    title: 'EOS remaining 21.4% minority',
    location: 'Germany',
    note: 'Full ownership completed',
  },
  {
    year: '2023',
    title: 'Phoenix El-Mec',
    location: 'Italy',
    note: 'Electromechanical timers for Harvia heaters',
  },
  {
    year: '2024',
    title: 'ThermaSol',
    location: 'Round Rock, Texas',
    note: 'USD 30.4M. Steam generators, controls, smart-shower platform.',
    href: '/article/harvia-thermasol-acquisition-announcement',
  },
];

const brands = [
  {
    name: 'Harvia',
    note: 'Core Finnish heater and sauna room brand',
    image: 'https://harviagroup.com/wp-content/uploads/2025/06/Harvia_Sauna-Spa_1232marg.jpg',
    href: 'https://harvia.com',
  },
  {
    name: 'EOS',
    note: 'German premium commercial and spa controls',
    image: 'https://harviagroup.com/wp-content/uploads/2025/06/EOS_1232marg.jpg',
    href: 'https://eos-sauna.com',
  },
  {
    name: 'Almost Heaven Saunas',
    note: 'US barrel and kit saunas (West Virginia)',
    image: 'https://harviagroup.com/wp-content/uploads/2025/06/Almost-Heaven_1232marg.jpg',
    href: 'https://almostheaven.com',
  },
  {
    name: 'Kirami',
    note: 'Finnish wood-fired and electric hot tubs',
    image: 'https://harviagroup.com/wp-content/uploads/2025/06/Kirami_Harvia_1232marg.jpg',
    href: 'https://kirami.fi',
  },
  {
    name: 'ThermaSol',
    note: 'US residential steam and smart-shower controls',
    image: 'https://harviagroup.com/wp-content/uploads/2025/06/Harvia_healingwithheat_257-1280x1707-1.jpg',
    href: 'https://thermasol.com',
  },
  {
    name: 'Sentiotec',
    note: 'Austrian infrared and wellness technology',
    image: 'https://harviagroup.com/wp-content/uploads/2025/05/Kiuas_Kuva1-780x439.jpg',
    href: 'https://harvia.com',
  },
];

const photography = [
  {
    src: 'https://harviagroup.com/wp-content/uploads/2025/06/092624_HA_LM_BK0221-3_WEB-1280x854-1.jpg',
    alt: 'Harvia sauna interior with stone heater',
  },
  {
    src: 'https://harviagroup.com/wp-content/uploads/2025/06/2024_06_19_jr_harvia_0271-1280x853.jpg',
    alt: 'Harvia factory production detail',
  },
  {
    src: 'https://harviagroup.com/wp-content/uploads/2025/06/2024_06_25_oh_harvia_details_0169-1280x854.jpg',
    alt: 'Harvia heater close-up',
  },
  {
    src: 'https://harviagroup.com/wp-content/uploads/2025/05/Harvia_ranta_03-1024x684-1.jpg',
    alt: 'Harvia lakeside sauna in Finland',
  },
];

const annualRevenue = [
  { year: '2017', revenue: '64.2', growth: null, margin: null, note: 'Final private year' },
  { year: '2018', revenue: '68.5', growth: '+6.7%', margin: '21.1%', note: 'IPO year (March 2018)' },
  { year: '2019', revenue: '73.8', growth: '+7.7%', margin: '20.2%', note: 'Almost Heaven full year' },
  { year: '2020', revenue: '101.4', growth: '+37.4%', margin: '22.7%', note: 'EOS majority acquired' },
  { year: '2021', revenue: '165.0', growth: '+62.7%', margin: '22.4%', note: 'Kirami acquired; pandemic surge' },
  { year: '2022', revenue: '150.5', growth: '-8.8%', margin: '18.3%', note: 'Post-peak normalization' },
  { year: '2023', revenue: '150.5', growth: '~0%', margin: '19.1%', note: 'Europe soft, US resilient' },
  { year: '2024', revenue: '175.2', growth: '+16.4%', margin: '19.3%', note: 'ThermaSol H2 contribution' },
  { year: '2025', revenue: '198.9', growth: '+13.5%', margin: '19.6%', note: 'Q4 record EUR 53.7M' },
];

function isUpcoming(dateStr: string): boolean {
  return new Date(dateStr).getTime() >= TODAY.getTime();
}

export default function HarviaHubPage() {
  const isCoreHarvia = (slug: string, title: string) =>
    slug.toLowerCase().includes('harvia') || title.toLowerCase().includes('harvia');

  const harviaArticles = articles
    .filter(
      (a) =>
        a.tags.some((t) => t.toLowerCase() === 'harvia') ||
        a.title.toLowerCase().includes('harvia') ||
        a.slug.toLowerCase().includes('harvia')
    )
    .sort((a, b) => {
      const aCore = isCoreHarvia(a.slug, a.title);
      const bCore = isCoreHarvia(b.slug, b.title);
      if (aCore && !bCore) return -1;
      if (!aCore && bCore) return 1;
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    });

  const featured = harviaArticles[0];
  const secondary = harviaArticles.slice(1, 4);
  const rest = harviaArticles.slice(4);

  const upcoming = investorEvents
    .filter((e) => isUpcoming(e.date))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const past = investorEvents
    .filter((e) => !isUpcoming(e.date))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Harvia News',
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      inLanguage: 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        name: 'SaunaNews',
        url: 'https://www.saunanews.com',
      },
      about: {
        '@type': 'Organization',
        name: 'Harvia Plc',
        alternateName: ['Harvia Oyj', 'Harvia'],
        url: 'https://harviagroup.com',
        sameAs: [
          'https://en.wikipedia.org/wiki/Harvia',
          'https://harviagroup.com/investor-relations/',
          'https://www.nasdaq.com/market-activity/stocks/harvia',
        ],
        tickerSymbol: 'HARVIA',
        foundingDate: '1950',
        foundingLocation: {
          '@type': 'Place',
          name: 'Muurame, Finland',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.saunanews.com' },
        { '@type': 'ListItem', position: 2, name: 'Harvia News', item: PAGE_URL },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Latest Harvia news from SaunaNews',
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: harviaArticles.length,
      itemListElement: harviaArticles.slice(0, 20).map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://www.saunanews.com/article/${a.slug}`,
        name: a.title,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Harvia Plc',
      alternateName: ['Harvia Oyj', 'Harvia'],
      url: 'https://harviagroup.com',
      logo: 'https://harviagroup.com/wp-content/uploads/2025/05/Kiuas_Kuva1-780x439.jpg',
      description:
        'Harvia Plc is a Finnish sauna and spa company headquartered in Muurame, Finland. It is the only publicly traded pure-play sauna manufacturer in the world, listed on Nasdaq Helsinki under the ticker HARVIA. Brands include Harvia, EOS, Almost Heaven Saunas, Kirami, ThermaSol, and Sentiotec.',
      foundingDate: '1950',
      numberOfEmployees: '735',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero / Intro */}
      <section className="relative bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border overflow-hidden">
        {/* Hero backdrop image */}
        <div className="absolute inset-0 z-0 opacity-[0.12] dark:opacity-[0.18] pointer-events-none">
          <Image
            src="https://harviagroup.com/wp-content/uploads/2025/06/092624_HA_LM_BK0221-3_WEB-1280x854-1.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex items-center gap-2 text-sm text-stone-dark dark:text-dark-muted mb-4">
            <Link href="/" className="hover:text-green dark:hover:text-brass transition-colors">Home</Link>
            <span>/</span>
            <span>Harvia News</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brass mb-3">
                Company Hub &middot; Nasdaq Helsinki: HARVIA
              </span>
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal dark:text-cream leading-[1.05] mb-4">
                Harvia News
              </h1>
              <p className="text-lg text-warm-gray dark:text-dark-muted leading-relaxed mb-4 font-editorial italic">
                Complete SaunaNews coverage of Harvia Plc, the only publicly traded pure-play sauna company in the world. Earnings, stock, investor calendar, acquisitions, and every major story since the 2018 IPO.
              </p>
              <p className="text-base text-stone-dark dark:text-dark-muted leading-relaxed mb-6">
                Harvia Plc (Nasdaq Helsinki: HARVIA) is a Finnish sauna and spa company based in Muurame, Finland. Founded in 1950, IPO&apos;d in March 2018, Harvia now owns six brands across Finland, Germany, Austria, Italy, and the United States, with approximately 735 employees. FY 2025 revenue of EUR 198.9 million. Primary listing: Nasdaq Helsinki under ticker HARVIA. ISIN: FI4000306873.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#news" className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal dark:bg-cream text-cream dark:text-charcoal text-sm font-medium rounded-md hover:bg-slate dark:hover:bg-stone transition-colors">
                  Latest Harvia news
                </Link>
                <Link href="#stock" className="inline-flex items-center gap-2 px-4 py-2 border border-border dark:border-dark-border text-charcoal dark:text-cream text-sm font-medium rounded-md hover:border-green dark:hover:border-brass transition-colors">
                  Stock chart
                </Link>
                <Link href="#calendar" className="inline-flex items-center gap-2 px-4 py-2 border border-border dark:border-dark-border text-charcoal dark:text-cream text-sm font-medium rounded-md hover:border-green dark:hover:border-brass transition-colors">
                  Investor calendar
                </Link>
                <Link href="#financials" className="inline-flex items-center gap-2 px-4 py-2 border border-border dark:border-dark-border text-charcoal dark:text-cream text-sm font-medium rounded-md hover:border-green dark:hover:border-brass transition-colors">
                  Financials
                </Link>
                <Link href="#acquisitions" className="inline-flex items-center gap-2 px-4 py-2 border border-border dark:border-dark-border text-charcoal dark:text-cream text-sm font-medium rounded-md hover:border-green dark:hover:border-brass transition-colors">
                  M&amp;A
                </Link>
              </div>
            </div>

            {/* Stock / snapshot panel */}
            <aside className="lg:col-span-5">
              <div className="bg-ivory dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-border dark:border-dark-border flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-bold text-charcoal dark:text-cream">HARVIA</h2>
                    <p className="text-[11px] text-stone-dark dark:text-dark-muted">Nasdaq Helsinki &middot; ISIN FI4000306873</p>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded bg-green/15 text-green dark:bg-brass/15 dark:text-brass">Live context</span>
                </div>
                <div className="px-5 py-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-1">Share price</p>
                    <p className="font-editorial text-2xl font-bold text-charcoal dark:text-cream tabular-nums">EUR 33.65</p>
                    <p className="text-[11px] text-stone-dark dark:text-dark-muted">As of April 2026</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-1">Market cap</p>
                    <p className="font-editorial text-2xl font-bold text-charcoal dark:text-cream tabular-nums">EUR 629M</p>
                    <p className="text-[11px] text-stone-dark dark:text-dark-muted">Approx. 18.7M shares</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-1">52-week range</p>
                    <p className="text-sm font-semibold text-charcoal dark:text-cream tabular-nums">EUR 31.05 – 52.40</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-1">Dividend yield</p>
                    <p className="text-sm font-semibold text-charcoal dark:text-cream tabular-nums">~2.3%</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-1">FY 2025 revenue</p>
                    <p className="text-sm font-semibold text-charcoal dark:text-cream tabular-nums">EUR 198.9M</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-1">Adj. EBIT margin</p>
                    <p className="text-sm font-semibold text-charcoal dark:text-cream tabular-nums">19.6%</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-1">Employees</p>
                    <p className="text-sm font-semibold text-charcoal dark:text-cream tabular-nums">~735</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-1">Analyst consensus</p>
                    <p className="text-sm font-semibold text-charcoal dark:text-cream">Buy (4 analysts)</p>
                  </div>
                </div>
                <div className="px-5 py-3 bg-cream dark:bg-dark-bg border-t border-border dark:border-dark-border">
                  <p className="text-[11px] text-stone-dark dark:text-dark-muted leading-relaxed">
                    Static figures for at-a-glance context. For the live price, see the{' '}
                    <Link href="#stock" className="underline hover:text-green dark:hover:text-brass">interactive chart below</Link>.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Featured story */}
      {featured && (
        <section id="news" className="bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <h2 className="font-editorial text-xs uppercase tracking-widest text-stone-dark dark:text-dark-muted mb-6">
              Latest Harvia story
            </h2>
            <Link href={`/article/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 rounded-xl overflow-hidden">
                <ArticleImage
                  src={featured.featuredImage}
                  alt={featured.title}
                  category={featured.category}
                  seed={featured.id}
                  aspectRatio="16/10"
                  className="group-hover:scale-[1.02] transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-3">
                  <ContentTypeBadge type={featured.contentType} />
                  <span className="text-xs text-stone-dark dark:text-dark-muted">{featured.category}</span>
                  <span className="text-xs text-stone-dark dark:text-dark-muted">&middot; {formatDateShort(featured.publishDate)}</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal dark:text-cream leading-[1.15] group-hover:text-green dark:group-hover:text-brass transition-colors mb-4">
                  {featured.title}
                </h3>
                <p className="text-base text-warm-gray dark:text-dark-muted leading-relaxed mb-4 font-editorial italic">
                  {featured.dek}
                </p>
                <span className="text-xs text-stone-dark dark:text-dark-muted">
                  {featured.author.name} &middot; {featured.readingTime} min read
                </span>
              </div>
            </Link>

            {secondary.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-14">
                {secondary.map((a) => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Live stock chart */}
      <section id="stock" className="bg-ivory dark:bg-dark-surface border-b border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brass mb-2">
                Live quote &middot; OMXHEX: HARVIA
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal dark:text-cream">
                Harvia Stock Price
              </h2>
              <p className="text-sm text-stone-dark dark:text-dark-muted mt-2 max-w-2xl">
                Real-time price, volume, and historical performance for Harvia Plc on Nasdaq Helsinki. Chart and data provided by TradingView.
              </p>
            </div>
            <a
              href="https://www.tradingview.com/symbols/OMXHEX-HARVIA/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-green dark:text-brass hover:underline"
            >
              Full chart on TradingView
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="rounded-xl overflow-hidden border border-border dark:border-dark-border bg-cream dark:bg-dark-bg p-2">
            <HarviaStockChart height={420} />
          </div>
        </div>
      </section>

      {/* Photography strip */}
      <section className="bg-charcoal dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-cream">Harvia, in Pictures</h2>
              <p className="text-sm text-cream/60 mt-1">Product and factory photography courtesy of Harvia Plc investor materials.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
            {photography.map((p, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor calendar */}
      <section id="calendar" className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal dark:text-cream mb-4">
                Harvia Investor Calendar
              </h2>
              <p className="text-base text-stone-dark dark:text-dark-muted leading-relaxed mb-4">
                Every Harvia financial report and capital-return event. Upcoming dates reflect the company&apos;s published 2026 calendar. Past dates link to the SaunaNews story covering that release.
              </p>
              <p className="text-sm text-stone-dark dark:text-dark-muted leading-relaxed">
                Harvia reports in euros and publishes interim reports quarterly, an H1 half-year report in August, and a financial statements bulletin in February. Dividends are paid in two installments, one after the AGM in April and one in October.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brass mb-4">Upcoming</h3>
                <div className="border border-border dark:border-dark-border rounded-xl overflow-hidden bg-ivory dark:bg-dark-surface divide-y divide-border dark:divide-dark-border">
                  {upcoming.map((e, i) => (
                    <div key={i} className="flex items-start gap-4 px-5 py-4">
                      <span className="text-xs font-semibold text-charcoal dark:text-cream w-24 shrink-0 tabular-nums">
                        {formatDateShort(e.date)}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-charcoal dark:text-cream">{e.label}</p>
                        {e.detail && <p className="text-xs text-stone-dark dark:text-dark-muted mt-0.5">{e.detail}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-dark dark:text-dark-muted mb-4">Past events</h3>
                <div className="border border-border dark:border-dark-border rounded-xl overflow-hidden bg-ivory dark:bg-dark-surface divide-y divide-border dark:divide-dark-border">
                  {past.map((e, i) => (
                    <div key={i} className="flex items-start gap-4 px-5 py-4">
                      <span className="text-xs font-semibold text-stone-dark dark:text-dark-muted w-24 shrink-0 tabular-nums">
                        {formatDateShort(e.date)}
                      </span>
                      <div className="flex-1 min-w-0">
                        {e.href ? (
                          <Link href={e.href} className="text-sm font-medium text-charcoal dark:text-cream hover:text-green dark:hover:text-brass transition-colors">
                            {e.label}
                          </Link>
                        ) : (
                          <p className="text-sm font-medium text-charcoal dark:text-cream">{e.label}</p>
                        )}
                        {e.detail && <p className="text-xs text-stone-dark dark:text-dark-muted mt-0.5">{e.detail}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financials table */}
      <section id="financials" className="bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-3xl mb-8">
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal dark:text-cream mb-4">
              Harvia at a Glance: Annual Revenue, Growth, and Margin
            </h2>
            <p className="text-base text-stone-dark dark:text-dark-muted leading-relaxed">
              Historical annual revenue and adjusted operating margin since Harvia&apos;s 2018 IPO. The EOS (2020), Kirami (2021), and ThermaSol (2024) acquisitions are reflected in the year-over-year jumps. FY 2025 brought the business to the edge of EUR 200 million in annual revenue.
            </p>
          </div>
          <div className="overflow-x-auto border border-border dark:border-dark-border rounded-xl bg-ivory dark:bg-dark-bg">
            <table className="w-full text-sm">
              <thead className="bg-cream dark:bg-dark-surface border-b border-border dark:border-dark-border">
                <tr className="text-left text-[11px] uppercase tracking-wider text-stone-dark dark:text-dark-muted">
                  <th className="px-5 py-3 font-semibold">Year</th>
                  <th className="px-5 py-3 font-semibold">Revenue (EUR M)</th>
                  <th className="px-5 py-3 font-semibold">YoY Growth</th>
                  <th className="px-5 py-3 font-semibold">Adj. EBIT margin</th>
                  <th className="px-5 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border dark:divide-dark-border">
                {annualRevenue.map((row) => (
                  <tr key={row.year} className="hover:bg-cream/70 dark:hover:bg-dark-surface/50 transition-colors">
                    <td className="px-5 py-3 font-semibold text-charcoal dark:text-cream tabular-nums">{row.year}</td>
                    <td className="px-5 py-3 text-charcoal dark:text-cream tabular-nums">{row.revenue}</td>
                    <td className="px-5 py-3 text-stone-dark dark:text-dark-muted tabular-nums">{row.growth ?? '—'}</td>
                    <td className="px-5 py-3 text-stone-dark dark:text-dark-muted tabular-nums">{row.margin ?? '—'}</td>
                    <td className="px-5 py-3 text-stone-dark dark:text-dark-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-dark dark:text-dark-muted mt-4">
            Sources: Harvia IPO prospectus, annual reports 2018-2024, financial statements bulletins 2025. 2017 figure reflects the final year before listing.
          </p>
        </div>
      </section>

      {/* Acquisitions timeline */}
      <section id="acquisitions" className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-3xl mb-8">
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal dark:text-cream mb-4">
              Harvia Acquisitions Timeline
            </h2>
            <p className="text-base text-stone-dark dark:text-dark-muted leading-relaxed">
              Harvia has executed a disciplined M&amp;A program since its 2018 IPO, rolling up assets across sauna heaters, barrel saunas, commercial controls, steam, wood-fired hot tubs, and components. Brands acquired operate independently under their own names where useful.
            </p>
          </div>
          <ol className="relative border-l border-border dark:border-dark-border pl-6 space-y-8">
            {acquisitions.map((a, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-brass border-4 border-cream dark:border-dark-bg" />
                <div className="flex flex-wrap items-baseline gap-3 mb-1">
                  <span className="font-editorial text-xl font-bold text-charcoal dark:text-cream tabular-nums">{a.year}</span>
                  {a.href ? (
                    <Link href={a.href} className="text-lg font-semibold text-charcoal dark:text-cream hover:text-green dark:hover:text-brass transition-colors">
                      {a.title}
                    </Link>
                  ) : (
                    <span className="text-lg font-semibold text-charcoal dark:text-cream">{a.title}</span>
                  )}
                  <span className="text-xs text-stone-dark dark:text-dark-muted">{a.location}</span>
                </div>
                <p className="text-sm text-stone-dark dark:text-dark-muted leading-relaxed">{a.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Brand portfolio */}
      <section className="bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-3xl mb-8">
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal dark:text-cream mb-4">
              Harvia Group Brands
            </h2>
            <p className="text-base text-stone-dark dark:text-dark-muted leading-relaxed">
              Harvia operates two global master brands, Harvia and EOS, complemented by regional and tactical brands. The portfolio spans entry-level consumer, premium residential, and commercial wellness installations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((b) => (
              <a
                key={b.name}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border dark:border-dark-border rounded-xl overflow-hidden bg-ivory dark:bg-dark-bg hover:border-green dark:hover:border-brass transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone/10 dark:bg-dark-border">
                  <Image
                    src={b.image}
                    alt={`${b.name} brand imagery`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream mb-1 group-hover:text-green dark:group-hover:text-brass transition-colors">{b.name}</h3>
                  <p className="text-sm text-stone-dark dark:text-dark-muted leading-relaxed">{b.note}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Full news archive */}
      {rest.length > 0 && (
        <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-end justify-between mb-8 pb-4 border-b border-border dark:border-dark-border">
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal dark:text-cream">
                More Harvia coverage
              </h2>
              <span className="text-xs text-stone-dark dark:text-dark-muted">{harviaArticles.length} stories</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {rest.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ / About */}
      <section className="bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal dark:text-cream mb-8">
            Harvia Quick Answers
          </h2>
          <div className="space-y-6">
            <div className="border-b border-border dark:border-dark-border pb-6">
              <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream mb-2">Where is Harvia listed?</h3>
              <p className="text-sm text-stone-dark dark:text-dark-muted leading-relaxed">
                Harvia Plc is listed on the main market of Nasdaq Helsinki under the ticker HARVIA. ISIN: FI4000306873. Its IPO priced at EUR 5.00 per share on 22 March 2018, valuing the company at approximately EUR 93.5 million. The company is the only publicly traded pure-play sauna manufacturer in the world.
              </p>
            </div>
            <div className="border-b border-border dark:border-dark-border pb-6">
              <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream mb-2">How big is Harvia?</h3>
              <p className="text-sm text-stone-dark dark:text-dark-muted leading-relaxed">
                FY 2025 revenue was EUR 198.9 million with adjusted operating margin of 19.6%. The company employs approximately 735 people across Finland, Germany, Austria, Italy, the United States, Romania, China, Hong Kong, Estonia, and Sweden. Market capitalization is approximately EUR 629 million at current share prices.
              </p>
            </div>
            <div className="border-b border-border dark:border-dark-border pb-6">
              <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream mb-2">When is Harvia&apos;s next earnings report?</h3>
              <p className="text-sm text-stone-dark dark:text-dark-muted leading-relaxed">
                The Q1 2026 interim report (January-March 2026) is scheduled for 7 May 2026 at approximately 09:00 Finnish time. The H1 2026 half-year report follows on 6 August 2026, and the Q3 2026 interim report on 29 October 2026. The FY 2026 financial statements bulletin is expected in February 2027.
              </p>
            </div>
            <div className="border-b border-border dark:border-dark-border pb-6">
              <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream mb-2">What brands does Harvia own?</h3>
              <p className="text-sm text-stone-dark dark:text-dark-muted leading-relaxed">
                Harvia operates six brands: Harvia (core Finnish heaters and rooms), EOS (German premium commercial and controls), Almost Heaven Saunas (US barrel and kit saunas), Kirami (Finnish wood-fired and electric hot tubs), ThermaSol (US steam generators and smart-shower controls), and Sentiotec (Austrian infrared).
              </p>
            </div>
            <div className="border-b border-border dark:border-dark-border pb-6">
              <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream mb-2">What is Harvia&apos;s dividend?</h3>
              <p className="text-sm text-stone-dark dark:text-dark-muted leading-relaxed">
                Harvia&apos;s 2026 AGM approved a total dividend of EUR 0.77 per share for FY 2025, up from EUR 0.73 for FY 2024. The dividend is paid in two installments: EUR 0.39 on 24 April 2026 (record date 17 April) and EUR 0.38 on 26 October 2026 (record date 19 October). Dividend yield is approximately 2.3% at current share prices.
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream mb-2">Who covers Harvia as an analyst?</h3>
              <p className="text-sm text-stone-dark dark:text-dark-muted leading-relaxed">
                Inderes is the primary Finnish equity research house covering Harvia. Additional coverage is published by Danske Bank Markets and OP Financial Group. The current analyst consensus is Buy, with four analysts covering the stock. Consensus 12-month price target is approximately EUR 41-45 per share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <NewsletterSignup />
      </div>

      {/* Footer note */}
      <section className="bg-cream dark:bg-dark-bg border-t border-border dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <p className="text-xs text-stone-dark dark:text-dark-muted leading-relaxed">
            SaunaNews is an independent publication. This page summarizes public information about Harvia Plc for editorial purposes and is not investment advice, a solicitation, or an offer to buy or sell securities. Last updated {formatDate('2026-04-17')}.
          </p>
        </div>
      </section>
    </>
  );
}
