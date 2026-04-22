import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsored Content Policy',
  description:
    'SaunaNews disclosure policy for sponsors, advertising placements, and commercial relationships.',
  alternates: { canonical: 'https://www.saunanews.com/sponsored-content-policy' },
};

export default function SponsoredContentPolicyPage() {
  return (
    <>
      <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal dark:text-cream mb-5 tracking-tight">
            Sponsored Content Policy
          </h1>
          <p className="text-lg text-warm-gray dark:text-dark-muted leading-relaxed">
            SaunaNews accepts clearly labeled sponsorships and advertising. Editorial decisions remain independent
            from commercial relationships.
          </p>
        </div>
      </section>

      <section className="bg-surface dark:bg-dark-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14 space-y-7 text-sm sm:text-base text-stone-dark dark:text-dark-muted leading-relaxed">
          <article className="p-6 sm:p-7 rounded-xl border border-border dark:border-dark-border bg-cream dark:bg-dark-bg">
            <h2 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-3">How We Label Ads and Sponsors</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Paid placements are labeled as “Sponsor” in the interface.</li>
              <li>Sponsor modules link to this disclosure policy for reader transparency.</li>
              <li>Sponsored messages are designed to be distinguishable from newsroom reporting.</li>
            </ul>
          </article>

          <article className="p-6 sm:p-7 rounded-xl border border-border dark:border-dark-border bg-cream dark:bg-dark-bg">
            <h2 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-3">Editorial Independence</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Advertisers and sponsors do not approve, edit, or influence editorial coverage.</li>
              <li>Editorial staff does not offer favorable coverage in exchange for payment.</li>
              <li>Coverage decisions are based on relevance, evidence, and public interest.</li>
            </ul>
          </article>

          <article className="p-6 sm:p-7 rounded-xl border border-border dark:border-dark-border bg-cream dark:bg-dark-bg">
            <h2 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-3">Affiliate Links</h2>
            <p>
              If SaunaNews introduces affiliate links, each affected article will include a clear in-article disclosure
              explaining that SaunaNews may receive compensation from qualifying purchases.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
