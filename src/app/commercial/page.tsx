import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Commercial Sauna Projects & Consulting',
  description:
    'SaunaNews connects developers, architects, and hospitality operators with Europe\'s leading modular sauna manufacturers and vetted US installation teams.',
  alternates: { canonical: 'https://www.saunanews.com/commercial' },
};

export default function CommercialHubPage() {
  return (
    <>
      <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-green dark:text-brass mb-4">Commercial Projects</p>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal dark:text-cream tracking-tight mb-6">
            Build the future of thermal wellness.
          </h1>
          <p className="text-lg sm:text-xl text-warm-gray dark:text-dark-muted max-w-3xl leading-relaxed mb-8">
            The US bathhouse boom is here, but domestic construction expertise hasn't caught up. We connect developers, architects, and hospitality operators with Europe's leading modular sauna manufacturers and vetted US installation teams.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/commercial/start-project"
              className="inline-flex items-center justify-center px-8 py-4 bg-charcoal dark:bg-cream text-cream dark:text-charcoal text-base font-semibold rounded-lg hover:bg-slate dark:hover:bg-ivory transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/commercial/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-charcoal/20 dark:border-cream/20 text-charcoal dark:text-cream text-base font-medium rounded-lg hover:border-charcoal/40 dark:hover:border-cream/40 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal dark:text-cream mb-6">
                Why modular European manufacturing?
              </h2>
              <div className="space-y-6 text-base text-stone-dark dark:text-dark-muted leading-relaxed">
                <p>
                  Building a commercial sauna is fundamentally different from framing a standard room. It is an extreme microclimate that subjects its structural envelope to intense heat, rapid temperature fluctuations, and high humidity for up to 18 hours a day.
                </p>
                <p>
                  When general contractors attempt to build these spaces using traditional stick-built framing techniques, the results are often disastrous: vapor barrier failures, stagnant ventilation, and hidden mold growth.
                </p>
                <p>
                  We bypass the domestic skills shortage by sourcing precision-engineered, factory-built modular systems from Estonia and Germany. These units arrive flat-packed, pre-drilled, and ready for rapid assembly by any competent general contractor.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/article/modular-vs-stick-built-commercial-sauna-future"
                  className="text-green dark:text-brass font-medium hover:underline inline-flex items-center gap-1"
                >
                  Read our analysis on modular vs. stick-built construction
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream border border-border">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1240&auto=format&fit=crop"
                alt="Commercial sauna interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory dark:bg-dark-bg border-t border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal dark:text-cream mb-4">
              Who we work with
            </h2>
            <p className="text-lg text-warm-gray dark:text-dark-muted">
              We provide end-to-end procurement and consulting for the teams building the next generation of thermal wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl p-8">
              <h3 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-4">Developers & Owners</h3>
              <p className="text-stone-dark dark:text-dark-muted mb-6">
                Whether you are building a 30,000 sq ft urban bathhouse or adding a thermal suite to a luxury multifamily project, we ensure your sauna assets are engineered for commercial duty cycles and long-term ROI.
              </p>
            </div>
            <div className="bg-cream dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl p-8">
              <h3 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-4">Architects & Designers</h3>
              <p className="text-stone-dark dark:text-dark-muted mb-6">
                We provide full AutoCAD/DWG integration for our modular systems, allowing you to drop precision-engineered sauna cabins directly into your master plans while maintaining complete control over surface materials and finishes.
              </p>
            </div>
            <div className="bg-cream dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl p-8">
              <h3 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-4">General Contractors</h3>
              <p className="text-stone-dark dark:text-dark-muted mb-6">
                Stop guessing at Finnish ventilation standards. We deliver a complete, test-assembled system to your loading dock with precise assembly instructions, removing the liability of custom thermal engineering from your scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal dark:bg-dark-surface text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold mb-6">
            Ready to scope your project?
          </h2>
          <p className="text-lg text-cream/80 mb-10 max-w-2xl mx-auto">
            Use our project intake tool to share your requirements, timeline, and budget. We'll review your specs and connect you with the right manufacturing partner.
          </p>
          <Link
            href="/commercial/start-project"
            className="inline-flex items-center justify-center px-8 py-4 bg-green text-charcoal text-base font-bold rounded-lg hover:bg-green-light transition-colors"
          >
            Start Project Intake
          </Link>
        </div>
      </section>
    </>
  );
}
