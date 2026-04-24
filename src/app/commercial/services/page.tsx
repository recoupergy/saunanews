import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Sauna Services & Consulting',
  description:
    'End-to-end procurement, design integration, and logistics for commercial sauna projects. We connect developers with European modular manufacturers.',
  alternates: { canonical: 'https://www.saunanews.com/commercial/services' },
};

export default function CommercialServicesPage() {
  return (
    <>
      <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-green dark:text-brass mb-4">Our Services</p>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal dark:text-cream tracking-tight mb-6">
            End-to-end commercial sauna procurement.
          </h1>
          <p className="text-lg sm:text-xl text-warm-gray dark:text-dark-muted max-w-3xl leading-relaxed mb-8">
            We bridge the gap between European manufacturing excellence and US construction realities. From initial architectural integration to final on-site assembly, we manage the entire lifecycle of your commercial sauna asset.
          </p>
        </div>
      </section>

      <section className="bg-surface dark:bg-dark-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="space-y-16">
            
            {/* Service 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="w-12 h-12 bg-green/10 dark:bg-green/20 rounded-lg flex items-center justify-center mb-6 text-green dark:text-green-light">
                  <span className="font-editorial text-2xl font-bold">01</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream">Design & Engineering Integration</h2>
              </div>
              <div className="md:col-span-8 space-y-4 text-base text-stone-dark dark:text-dark-muted leading-relaxed">
                <p>
                  We work directly with your architects and MEP engineers during the schematic design phase. Instead of guessing at spatial requirements, we provide full AutoCAD/DWG files of the modular sauna units.
                </p>
                <p>
                  This ensures that the surrounding architecture—including concrete slabs, electrical rough-ins, and HVAC exhaust pathways—is perfectly aligned with the sauna's requirements before construction begins. We also manage the specification of surface materials, from thermo-treated aspen to custom High-Pressure Laminate (HPL) exteriors for outdoor units.
                </p>
              </div>
            </div>

            <hr className="border-border dark:border-dark-border" />

            {/* Service 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="w-12 h-12 bg-green/10 dark:bg-green/20 rounded-lg flex items-center justify-center mb-6 text-green dark:text-green-light">
                  <span className="font-editorial text-2xl font-bold">02</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream">European Procurement & Manufacturing</h2>
              </div>
              <div className="md:col-span-8 space-y-4 text-base text-stone-dark dark:text-dark-muted leading-relaxed">
                <p>
                  We leverage our deep relationships with the world's leading modular sauna manufacturers in Estonia and Germany. We handle all factory communications, ensuring your specific commercial requirements—such as 160 lbs/sq ft snow loads, ADA compliance, or specialized aluminum bench substructures for high-humidity environments—are engineered into the final product.
                </p>
                <p>
                  Every unit is fully test-assembled in the European factory before shipping, guaranteeing that all CNC-machined panels, glass curves, and integrated vapor barriers perform flawlessly.
                </p>
              </div>
            </div>

            <hr className="border-border dark:border-dark-border" />

            {/* Service 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="w-12 h-12 bg-green/10 dark:bg-green/20 rounded-lg flex items-center justify-center mb-6 text-green dark:text-green-light">
                  <span className="font-editorial text-2xl font-bold">03</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream">Logistics & Import Management</h2>
              </div>
              <div className="md:col-span-8 space-y-4 text-base text-stone-dark dark:text-dark-muted leading-relaxed">
                <p>
                  Importing large-scale architectural components requires specialized knowledge. We manage the entire logistics chain, from the factory floor in Europe to your US job site.
                </p>
                <p>
                  Depending on your project timeline and budget, we coordinate either cost-effective ocean freight or expedited air freight (delivering in approximately one week). We handle all customs clearance, tariffs, and final-mile delivery logistics, ensuring the flat-packed crates arrive safely at your loading dock.
                </p>
              </div>
            </div>

            <hr className="border-border dark:border-dark-border" />

            {/* Service 4 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="w-12 h-12 bg-green/10 dark:bg-green/20 rounded-lg flex items-center justify-center mb-6 text-green dark:text-green-light">
                  <span className="font-editorial text-2xl font-bold">04</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream">Installation Support & GC Coordination</h2>
              </div>
              <div className="md:col-span-8 space-y-4 text-base text-stone-dark dark:text-dark-muted leading-relaxed">
                <p>
                  The primary advantage of modular construction is that it does not require specialized sauna builders. We provide your existing General Contractor with comprehensive, step-by-step assembly instructions.
                </p>
                <p>
                  Because every panel is numbered and pre-drilled, assembly is rapid and predictable. For complex installations or first-time GC partners, we provide remote technical support or can deploy an on-site supervisor to guide the assembly process, ensuring the integrity of the thermal envelope is maintained.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-ivory dark:bg-dark-bg border-t border-border dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <h2 className="font-editorial text-3xl font-bold text-charcoal dark:text-cream mb-6">
            Ready to discuss your project?
          </h2>
          <p className="text-lg text-warm-gray dark:text-dark-muted mb-8 max-w-2xl mx-auto">
            Submit your project details, timeline, and budget through our intake form. Our commercial team will review your requirements and schedule a consultation.
          </p>
          <Link
            href="/commercial/start-project"
            className="inline-flex items-center justify-center px-8 py-4 bg-charcoal dark:bg-cream text-cream dark:text-charcoal text-base font-semibold rounded-lg hover:bg-slate dark:hover:bg-ivory transition-colors"
          >
            Start Project Intake
          </Link>
        </div>
      </section>
    </>
  );
}
