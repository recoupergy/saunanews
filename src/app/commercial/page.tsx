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
      {/* Hero with full-bleed image */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/commercial/commercial-sauna-hero.jpg"
            alt="Large-scale commercial sauna with tiered wooden benches and warm ambient lighting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brass mb-4">Commercial Projects</p>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 max-w-3xl">
            Build the future of thermal wellness.
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed mb-10">
            The US bathhouse boom is here, but domestic construction expertise hasn't caught up. We connect developers, architects, and hospitality operators with Europe's leading modular sauna manufacturers and vetted US installation teams.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/commercial/start-project"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-charcoal text-base font-semibold rounded-lg hover:bg-cream transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/commercial/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white text-base font-medium rounded-lg hover:border-white/70 hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why modular section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-green mb-3">The Modular Advantage</p>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Why modular European manufacturing?
              </h2>
              <div className="space-y-5 text-base text-charcoal/80 leading-relaxed">
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
                  className="text-green font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Read our analysis on modular vs. stick-built construction
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/commercial/aufguss-sauna-interior.jpg"
                alt="Modern commercial sauna interior with wooden benches and atmospheric lighting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-editorial text-3xl sm:text-4xl font-bold text-white">$905M</p>
              <p className="text-sm text-white/60 mt-1">Global sauna equipment market</p>
            </div>
            <div>
              <p className="font-editorial text-3xl sm:text-4xl font-bold text-white">6.3%</p>
              <p className="text-sm text-white/60 mt-1">Annual market growth (CAGR)</p>
            </div>
            <div>
              <p className="font-editorial text-3xl sm:text-4xl font-bold text-white">2-5 days</p>
              <p className="text-sm text-white/60 mt-1">Modular on-site assembly</p>
            </div>
            <div>
              <p className="font-editorial text-3xl sm:text-4xl font-bold text-white">150+</p>
              <p className="text-sm text-white/60 mt-1">Surface material options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-green mb-3">Our Clients</p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Who we work with
            </h2>
            <p className="text-lg text-charcoal/70">
              We provide end-to-end procurement and consulting for the teams building the next generation of thermal wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-stone/40 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green/10 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                </svg>
              </div>
              <h3 className="font-editorial text-2xl font-semibold text-charcoal mb-3">Developers & Owners</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Whether you are building a 30,000 sq ft urban bathhouse or adding a thermal suite to a luxury multifamily project, we ensure your sauna assets are engineered for commercial duty cycles and long-term ROI.
              </p>
            </div>
            <div className="bg-white border border-stone/40 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green/10 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="font-editorial text-2xl font-semibold text-charcoal mb-3">Architects & Designers</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We provide full AutoCAD/DWG integration for our modular systems, allowing you to drop precision-engineered sauna cabins directly into your master plans while maintaining complete control over surface materials and finishes.
              </p>
            </div>
            <div className="bg-white border border-stone/40 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green/10 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.077A1.5 1.5 0 014.5 17.06V6.94a1.5 1.5 0 011.536-1.188l5.384 3.077M11.42 15.17l5.384-3.077a1.5 1.5 0 000-2.614L11.42 6.4m0 8.77v-8.77" />
                </svg>
              </div>
              <h3 className="font-editorial text-2xl font-semibold text-charcoal mb-3">General Contractors</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Stop guessing at Finnish ventilation standards. We deliver a complete, test-assembled system to your loading dock with precise assembly instructions, removing the liability of custom thermal engineering from your scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project types gallery */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-green mb-3">Project Types</p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              From urban bathhouses to alpine resorts
            </h2>
            <p className="text-lg text-charcoal/70">
              We source and manage modular sauna installations across every commercial category.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/images/commercial/sauna-house-interior.jpg"
                alt="Public bathhouse sauna with dramatic dark ceiling and warm lighting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-editorial text-xl font-bold text-white mb-1">Urban Bathhouses</h3>
                <p className="text-sm text-white/75">High-capacity facilities with multiple sauna rooms, aufguss theaters, and contrast therapy circuits.</p>
              </div>
            </div>
            <div className="group relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/images/commercial/hotel-sauna-benches.jpg"
                alt="Luxury hotel sauna with curved wooden benches"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-editorial text-xl font-bold text-white mb-1">Hotels & Resorts</h3>
                <p className="text-sm text-white/75">Premium thermal suites for hospitality operators seeking differentiated guest experiences.</p>
              </div>
            </div>
            <div className="group relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/images/commercial/modular-sauna-exterior.jpg"
                alt="Modern modular outdoor sauna cabin with black exterior and glass window"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-editorial text-xl font-bold text-white mb-1">Multifamily & Fitness</h3>
                <p className="text-sm text-white/75">Turnkey sauna amenities for apartment complexes, gyms, and private wellness clubs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold mb-6">
            Ready to scope your project?
          </h2>
          <p className="text-lg text-white/75 mb-10 max-w-2xl mx-auto">
            Use our project intake tool to share your requirements, timeline, and budget. We'll review your specs and connect you with the right manufacturing partner.
          </p>
          <Link
            href="/commercial/start-project"
            className="inline-flex items-center justify-center px-8 py-4 bg-green text-white text-base font-bold rounded-lg hover:bg-green-light transition-colors"
          >
            Start Project Intake
          </Link>
        </div>
      </section>
    </>
  );
}
