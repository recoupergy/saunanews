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
      <section className="bg-charcoal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brass mb-4">Our Services</p>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            End-to-end commercial sauna procurement.
          </h1>
          <p className="text-lg sm:text-xl text-white/75 max-w-3xl leading-relaxed mb-8">
            We bridge the gap between European manufacturing excellence and US construction realities. From initial architectural integration to final on-site assembly, we manage the entire lifecycle of your commercial sauna asset.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="space-y-16">
            
            {/* Service 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="font-editorial text-2xl font-bold text-green">01</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-charcoal">Design & Engineering Integration</h2>
              </div>
              <div className="md:col-span-8 space-y-4 text-base text-charcoal/80 leading-relaxed">
                <p>
                  We work directly with your architects and MEP engineers during the schematic design phase. Instead of guessing at spatial requirements, we provide full AutoCAD/DWG files of the modular sauna units.
                </p>
                <p>
                  This ensures that the surrounding architecture — including concrete slabs, electrical rough-ins, and HVAC exhaust pathways — is perfectly aligned with the sauna&rsquo;s requirements before construction begins. We also manage the specification of surface materials, from thermo-treated aspen to custom High-Pressure Laminate (HPL) exteriors for outdoor units.
                </p>
              </div>
            </div>

            <hr className="border-stone/40" />

            {/* Service 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="font-editorial text-2xl font-bold text-green">02</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-charcoal">European Procurement & Manufacturing</h2>
              </div>
              <div className="md:col-span-8 space-y-4 text-base text-charcoal/80 leading-relaxed">
                <p>
                  We leverage our deep relationships with the world&rsquo;s leading modular sauna manufacturers in Estonia and Germany. We handle all factory communications, ensuring your specific commercial requirements — such as 160 lbs/sq ft snow loads, ADA compliance, or specialized aluminum bench substructures for high-humidity environments — are engineered into the final product.
                </p>
                <p>
                  Every unit is fully test-assembled in the European factory before shipping, guaranteeing that all CNC-machined panels, glass curves, and integrated vapor barriers perform flawlessly.
                </p>
              </div>
            </div>

            <hr className="border-stone/40" />

            {/* Service 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="font-editorial text-2xl font-bold text-green">03</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-charcoal">Logistics & Import Management</h2>
              </div>
              <div className="md:col-span-8 space-y-4 text-base text-charcoal/80 leading-relaxed">
                <p>
                  Importing large-scale architectural components requires specialized knowledge. We manage the entire logistics chain, from the factory floor in Europe to your US job site.
                </p>
                <p>
                  Depending on your project timeline and budget, we coordinate either cost-effective ocean freight or expedited air freight (delivering in approximately one week). We handle all customs clearance, tariffs, and final-mile delivery logistics, ensuring the flat-packed crates arrive safely at your loading dock.
                </p>
              </div>
            </div>

            <hr className="border-stone/40" />

            {/* Service 4 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="font-editorial text-2xl font-bold text-green">04</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-charcoal">Installation Support & GC Coordination</h2>
              </div>
              <div className="md:col-span-8 space-y-4 text-base text-charcoal/80 leading-relaxed">
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

      <section className="bg-slate text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <h2 className="font-editorial text-3xl font-bold mb-6">
            From idea to installation.
          </h2>
          <p className="text-lg text-white/75 mb-8 max-w-2xl mx-auto">
            Every detail matters — layout, materials, performance, and long-term durability. Share your project details and our commercial team will review your goals, timeline, and budget to map the right path forward.
          </p>
          <Link
            href="/commercial/start-project"
            className="inline-flex items-center justify-center px-8 py-4 bg-green text-white text-base font-semibold rounded-lg hover:bg-green-light transition-colors"
          >
            Start Project Intake
          </Link>
        </div>
      </section>
    </>
  );
}
