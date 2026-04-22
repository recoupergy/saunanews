import type { Metadata } from 'next';
import Link from 'next/link';

const audienceStats = [
  { label: 'Monthly readers', value: '62,000+' },
  { label: 'Newsletter subscribers', value: '14,500+' },
  { label: 'Average newsletter open rate', value: '49%' },
  { label: 'Decision-maker audience', value: '71%' },
];

const placements = [
  {
    title: 'Newsletter Sponsorship',
    details: 'Own a top or mid-issue placement in our weekly executive briefing with clear “Sponsor” labeling.',
    format: 'Native block + CTA button',
    availability: 'Weekly',
  },
  {
    title: 'Homepage Sponsor Slot',
    details: 'High-visibility placement adjacent to top coverage on desktop and mobile.',
    format: 'Responsive display module',
    availability: '2-week and 4-week flights',
  },
  {
    title: 'Category Takeover',
    details: 'Reach a focused audience across specific verticals like products, investments, or hospitality.',
    format: 'Section-level sponsorship package',
    availability: 'Monthly',
  },
];

export const metadata: Metadata = {
  title: 'Advertise with SaunaNews',
  description:
    'Partner with SaunaNews to reach founders, operators, and buyers shaping the sauna industry. Explore placements, audience demographics, and sponsorship options.',
  alternates: { canonical: 'https://www.saunanews.com/advertise' },
};

export default function AdvertisePage() {
  return (
    <>
      <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-green dark:text-brass mb-4">Advertise with us</p>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal dark:text-cream tracking-tight mb-5">
            Reach the people building the sauna industry
          </h1>
          <p className="text-lg text-warm-gray dark:text-dark-muted max-w-3xl leading-relaxed">
            SaunaNews is trusted by manufacturers, distributors, operators, and investors who need timely,
            actionable coverage. We offer sponsorships designed to drive awareness and qualified inbound leads.
          </p>
        </div>
      </section>

      <section className="bg-surface dark:bg-dark-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <h2 className="font-editorial text-3xl font-semibold text-charcoal dark:text-cream mb-6">Audience at a glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {audienceStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-xl border border-border dark:border-dark-border bg-cream dark:bg-dark-bg px-5 py-6"
              >
                <p className="font-editorial text-3xl font-bold text-charcoal dark:text-cream mb-1">{stat.value}</p>
                <p className="text-sm text-warm-gray dark:text-dark-muted">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory dark:bg-dark-bg border-t border-border dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <h2 className="font-editorial text-3xl font-semibold text-charcoal dark:text-cream mb-6">Sponsorship placements</h2>
          <div className="space-y-4">
            {placements.map((placement) => (
              <article
                key={placement.title}
                className="rounded-xl border border-border dark:border-dark-border bg-cream dark:bg-dark-surface p-6"
              >
                <h3 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-3">{placement.title}</h3>
                <p className="text-sm sm:text-base text-stone-dark dark:text-dark-muted mb-4">{placement.details}</p>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                  <span className="px-2.5 py-1 rounded-full bg-charcoal/5 dark:bg-cream/10 text-charcoal dark:text-cream">
                    Format: {placement.format}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-charcoal/5 dark:bg-cream/10 text-charcoal dark:text-cream">
                    Availability: {placement.availability}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface dark:bg-dark-surface border-t border-border dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="rounded-2xl border border-border dark:border-dark-border bg-cream dark:bg-dark-bg p-7 sm:p-10">
            <h2 className="font-editorial text-3xl font-semibold text-charcoal dark:text-cream mb-4">Request media kit & pricing</h2>
            <p className="text-base text-warm-gray dark:text-dark-muted mb-6 max-w-2xl">
              Share your campaign goals and timeline, and we&apos;ll send current pricing, inventory windows, and recommended
              placements. We typically respond within one business day.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-charcoal dark:bg-cream text-cream dark:text-charcoal text-sm font-semibold rounded-lg hover:bg-slate dark:hover:bg-ivory transition-colors"
              >
                Contact sales
              </Link>
              <a
                href="mailto:hello@saunanews.com?subject=Advertising%20Inquiry"
                className="inline-flex items-center justify-center px-6 py-3 border border-charcoal/20 dark:border-cream/20 text-charcoal dark:text-cream text-sm font-medium rounded-lg hover:border-charcoal/40 dark:hover:border-cream/40 transition-colors"
              >
                hello@saunanews.com
              </a>
            </div>
            <p className="text-xs text-warm-gray dark:text-dark-muted mt-4">
              All campaigns are subject to SaunaNews editorial and sponsored content disclosure policies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
