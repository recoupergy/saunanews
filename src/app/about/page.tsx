import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'About SaunaNews',
  description:
    'SaunaNews is the modern publication for the sauna industry — covering manufacturers, market trends, products, and wellness culture with editorial independence.',
  alternates: { canonical: 'https://saunanews.com/about' },
  openGraph: {
    title: 'About SaunaNews',
    description:
      'SaunaNews is the modern publication for the sauna industry — covering manufacturers, market trends, products, and wellness culture with editorial independence.',
    type: 'website',
    url: 'https://saunanews.com/about',
    siteName: 'SaunaNews',
  },
  twitter: {
    card: 'summary',
    title: 'About SaunaNews',
    description:
      'SaunaNews is the modern publication for the sauna industry — covering manufacturers, market trends, products, and wellness culture with editorial independence.',
  },
};

export default function AboutPage() {
  const values = [
    {
      title: 'Editorial Independence',
      description: 'Our coverage is not influenced by advertisers, manufacturers, or any commercial interest. We report what matters, accurately and fairly.',
    },
    {
      title: 'Industry Depth',
      description: 'We go beyond surface-level coverage. Our reporting draws on primary sources, data analysis, and deep industry relationships to deliver genuine insight.',
    },
    {
      title: 'Design Quality',
      description: 'We believe the sauna industry deserves a publication that matches the aesthetic standards of the products and spaces it covers.',
    },
    {
      title: 'Long-Term Thinking',
      description: 'We cover trends and shifts that will matter in five years, not just what happened today. Our analysis aims to help readers make better decisions.',
    },
  ];

  const audiences = [
    { label: 'Manufacturers', desc: 'Track competitive moves, product launches, and market trends' },
    { label: 'Dealers & Distributors', desc: 'Stay ahead of supply chain shifts and consumer demand patterns' },
    { label: 'Architects & Designers', desc: 'Discover trends, materials, and projects shaping thermal wellness spaces' },
    { label: 'Hospitality Operators', desc: 'Understand ROI, guest demand, and competitive benchmarks for sauna investments' },
    { label: 'Investors', desc: 'Access market intelligence and category analysis for the wellness economy' },
    { label: 'Enthusiasts', desc: 'Go deeper into the industry behind the products and experiences you love' },
  ];

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: 'SaunaNews',
    url: 'https://saunanews.com',
    description:
      'SaunaNews is the modern publication for the sauna industry, covering manufacturers, market trends, products, and wellness culture.',
    logo: { '@type': 'ImageObject', url: 'https://saunanews.com/logo.png', width: 600, height: 60 },
    sameAs: ['https://twitter.com/saunanews'],
    foundingDate: '2025',
    knowsAbout: [
      'Sauna industry',
      'Sauna manufacturers',
      'Thermal wellness',
      'Finnish sauna',
      'Cold plunge',
      'Sauna market trends',
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      {/* Hero */}
      <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal dark:text-cream mb-6 tracking-tight">
            About SaunaNews
          </h1>
          <p className="text-xl text-warm-gray dark:text-dark-muted leading-relaxed font-editorial italic">
            A modern publication focused on the companies, products, projects, and trends shaping the sauna industry.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface dark:bg-dark-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mb-6">Our Mission</h2>
          <div className="space-y-5 text-lg text-warm-gray dark:text-dark-muted leading-relaxed">
            <p>
              The global sauna equipment market passed $900 million in 2024 and is growing at roughly 6% annually, according to Grand View Research. Hundreds of manufacturers, thousands of dealers, and millions of consumers participate in an industry whose total addressable market is far larger when services, venues, and materials are included. Yet the industry has lacked a dedicated editorial voice with the depth, credibility, and design quality it deserves.
            </p>
            <p>
              SaunaNews was created to fill that gap. We provide daily reporting, market intelligence, product coverage, and editorial analysis for the professionals and enthusiasts who make up the sauna world.
            </p>
            <p>
              Our coverage spans manufacturer news, product launches, hospitality and spa developments, wellness and longevity trends, tariffs and logistics, and market data. We aim to be the publication of record for an industry that is rapidly professionalizing and attracting serious capital.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream dark:bg-dark-bg border-t border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mb-10 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="p-8 border border-border dark:border-dark-border rounded-xl">
                <h3 className="font-editorial text-lg font-semibold text-charcoal dark:text-cream mb-3">{v.title}</h3>
                <p className="text-sm text-warm-gray dark:text-dark-muted leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Reads */}
      <section className="bg-surface dark:bg-dark-surface border-t border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mb-10 text-center">
            Who Reads SaunaNews
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <div key={a.label} className="p-6 bg-cream dark:bg-dark-bg border border-border dark:border-dark-border rounded-xl">
                <h3 className="font-semibold text-charcoal dark:text-cream mb-2">{a.label}</h3>
                <p className="text-sm text-stone-dark dark:text-dark-muted">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-ivory dark:bg-dark-surface border-t border-border dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mb-4">
            Work With Us
          </h2>
          <p className="text-base text-warm-gray dark:text-dark-muted mb-8">
            Interested in sponsorships, partnerships, or submitting news? We&apos;d love to hear from you.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-charcoal dark:bg-cream text-cream dark:text-charcoal text-sm font-semibold rounded-lg hover:bg-slate dark:hover:bg-ivory transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/newsletter"
              className="px-6 py-3 border border-charcoal/20 dark:border-cream/20 text-charcoal dark:text-cream text-sm font-medium rounded-lg hover:border-charcoal/40 dark:hover:border-cream/40 transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSignup variant="hero" />
    </>
  );
}
