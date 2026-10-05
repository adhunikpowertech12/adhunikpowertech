import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      '@id':
        'https://www.adhunikpowertech.com/blog/form-1-form-2-form-3-form-4a-form-4b-panel-separation-guide/#article',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.adhunikpowertech.com/#website',
        name: 'Adhunik Powertech Private Limited',
        url: 'https://www.adhunikpowertech.com/',
      },
      headline:
        'Form 1, Form 2, Form 3, Form 4a, and Form 4b Internal Panel Separation Guide (IEC 61439-2)',
      description:
        'A comprehensive engineering guide on internal panel segregation forms under IEC 61439-2 for low-voltage switchgear, MCCs, and PCCs.',
      url: 'https://www.adhunikpowertech.com/blog/form-1-form-2-form-3-form-4a-form-4b-panel-separation-guide',
      inLanguage: 'en-IN',
      mainEntityOfPage:
        'https://www.adhunikpowertech.com/blog/form-1-form-2-form-3-form-4a-form-4b-panel-separation-guide',
      image: 'https://www.adhunikpowertech.com/Internal Panel Separation Guide.webp',
      publisher: {
        '@type': 'Organization',
        name: 'Adhunik Powertech Private Limited',
        url: 'https://www.adhunikpowertech.com/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.adhunikpowertech.com/logo.png',
        },
      },
      author: {
        '@type': 'Organization',
        name: 'Adhunik Powertech Engineering Team',
      },
    },
    {
      '@type': 'FAQPage',
      '@id':
        'https://www.adhunikpowertech.com/blog/form-1-form-2-form-3-form-4a-form-4b-panel-separation-guide/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the primary difference between Form 3b and Form 4b panel segregation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In Form 3b, outgoing cable terminals are separated from the busbars, but all terminals share a common cable alley. In Form 4b, the outgoing terminals for every functional unit are completely segregated into individual, dedicated cable chambers, allowing maintenance without accidental contact with neighboring energized circuits.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the ventilation and heat dissipation implications of Form 4b panels?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Form 4b enclosures compartmentalize each circuit with metallic or insulating barriers, restricting internal natural air circulation. In high ambient areas like Delhi NCR (45°C+ summers), switchgear must be engineered with appropriate thermal derating, forced ventilation, or heat exchangers to prevent nuisance tripping.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should Form 4b be specified over Form 2 or Form 3?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Form 4b is mandatory in mission-critical facilities requiring continuous operation without complete plant shutdowns, such as Tier-3/4 data centers, continuous automotive assembly lines, NABH-accredited hospitals, and continuous chemical or pharmaceutical cleanroom manufacturing.',
          },
        },
      ],
    },
  ],
};

export default function PanelSeparationGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-slate-50 text-slate-800 antialiased pt-31 sm:pt-40 md:pt-48 pb-16 px-4 sm:px-6 lg:px-12 w-full">
        <div className="max-w-7xl xl:max-w-[1440px] mx-auto">

          {/* Top Hero Section: Left Square Image + Right Headline & Intro */}
          <header className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
              
              {/* Left Top: Square Format Image Container (Non-Cropped) */}
                <div className="w-full md:w-5/12 lg:w-4/12 flex-shrink-0">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white p-2 sm:p-3 flex items-center justify-center">
                <Image
        src="/Panel Separation.webp"
        alt="Form 1 Form 2 Form 3 Form 4a Form 4b Internal Panel Separation Guide IEC 61439-2"
        fill
        priority
        className="object-contain object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 400px"
        />
    </div>
                </div>

              {/* Right Side: Badges, Title & Lead Narrative */}
              <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col justify-center">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3 w-fit">
                  Switchboard Engineering & Standards (IEC 61439-2)
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Form 1, Form 2, Form 3, Form 4a, and Form 4b: Complete LT Panel Internal Separation Guide
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  An engineering deep-dive into internal panel segregation under <strong>IEC 61439-2</strong>. Compare physical compartmentalization, maintenance safety, thermal derating, and practical selection criteria for industrial switchboards across Delhi NCR.
                </p>
              </div>

            </div>
          </header>

          {/* Landscape 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Primary Content (8 Columns) */}
            <main className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-10">
              
              {/* Key Takeaway Banner */}
              <section className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl">
                <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-2">
                  Key Takeaway for MEP Consultants & EPCs
                </h2>
                <p className="text-sm text-blue-950 leading-relaxed">
                  Internal segregation governs operator safety and plant uptime. While <strong>Form 1</strong> offers zero barrier separation, <strong>Form 3b</strong> provides isolated breaker cells with a shared common cable alley. <strong>Form 4b</strong> isolates both the functional units and external cable termination points into distinct compartments, making it the industry standard for 24/7 continuous operations, automotive plants, and data centers.
                </p>
              </section>

              {/* Core Engineering Section */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Why Internal Separation Matters in Low-Voltage Switchgear
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  According to <strong>IEC 61439-2 (Low-voltage switchgear and controlgear assemblies)</strong> and <strong>IS/IEC 60947</strong>, internal separation divides an electrical enclosure into enclosed compartments using metallic barriers (sheet steel) or non-metallic insulating partitions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-1 text-base">1. Arc Fault Containment</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                      Confines ionized gases and arc flashes to a single cell, preventing cascade burnouts across adjacent circuits.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-1 text-base">2. Direct Contact Protection</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                      Shields service engineers from inadvertent contact with energized busbars or outgoing feeder terminals during routine maintenance.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-1 text-base">3. Minimizing Plant Downtime</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                      Permits cabling, racking out, or breaker servicing on one branch without shutting down the entire main intake switchboard.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-1 text-base">4. Foreign Object Protection</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                      Stops dropped tools, loose hardware, or vermin from migrating into main horizontal or vertical copper/aluminum busbar chambers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Master Landscape Comparison Table */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Master Comparison Matrix: Form 1 through Form 4b
                </h2>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                        <th className="p-3 font-semibold">Form of Separation</th>
                        <th className="p-3 font-semibold">Busbars vs Units</th>
                        <th className="p-3 font-semibold">Units vs Units</th>
                        <th className="p-3 font-semibold">Terminals vs Busbars</th>
                        <th className="p-3 font-semibold">Terminals vs Other Feeder Terminals</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">Form 1</td>
                        <td className="p-3 text-red-600">No separation</td>
                        <td className="p-3 text-red-600">No separation</td>
                        <td className="p-3 text-red-600">No separation</td>
                        <td className="p-3 text-red-600">No separation</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">Form 2a</td>
                        <td className="p-3 text-emerald-600">Separated</td>
                        <td className="p-3 text-red-600">No separation</td>
                        <td className="p-3 text-red-600">Same cell as busbars</td>
                        <td className="p-3 text-red-600">No separation</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">Form 2b</td>
                        <td className="p-3 text-emerald-600">Separated</td>
                        <td className="p-3 text-red-600">No separation</td>
                        <td className="p-3 text-emerald-600">Separated from busbars</td>
                        <td className="p-3 text-red-600">No separation</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">Form 3a</td>
                        <td className="p-3 text-emerald-600">Separated</td>
                        <td className="p-3 text-emerald-600">Separated</td>
                        <td className="p-3 text-red-600">Same cell as busbars</td>
                        <td className="p-3 text-red-600">No separation</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">Form 3b</td>
                        <td className="p-3 text-emerald-600">Separated</td>
                        <td className="p-3 text-emerald-600">Separated</td>
                        <td className="p-3 text-emerald-600">Separated from busbars</td>
                        <td className="p-3 text-amber-600">Shared common cable alley</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">Form 4a</td>
                        <td className="p-3 text-emerald-600">Separated</td>
                        <td className="p-3 text-emerald-600">Separated</td>
                        <td className="p-3 text-emerald-600">Separated from busbars</td>
                        <td className="p-3 text-blue-600">Separated (inside unit cell)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-blue-50/60 font-semibold">
                        <td className="p-3 font-bold text-blue-900">Form 4b</td>
                        <td className="p-3 text-emerald-600">Separated</td>
                        <td className="p-3 text-emerald-600">Separated</td>
                        <td className="p-3 text-emerald-600">Separated from busbars</td>
                        <td className="p-3 text-emerald-700">Dedicated individual cable chambers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Form 3b vs Form 4b Cards */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Form 3b vs Form 4b: The Definitive Comparison
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-slate-200 rounded-xl p-5 bg-white">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Form 3b Architecture</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Functional units are compartmentalized from each other, but outgoing cable terminals share a <strong>single common vertical cable alley</strong>.
                    </p>
                    <ul className="text-xs sm:text-sm space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-emerald-500 font-bold mr-2">✓</span> Compact enclosure footprint
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 font-bold mr-2">✓</span> Lower initial fabrication cost
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">✕</span> Terminating new feeders requires group busbar shutdown
                      </li>
                    </ul>
                  </div>

                  <div className="border border-blue-200 rounded-xl p-5 bg-blue-50/40">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Form 4b Architecture</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Functional units are isolated, and outgoing terminals reside in <strong>individual, dedicated cable boxes for every feeder</strong>.
                    </p>
                    <ul className="text-xs sm:text-sm space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-emerald-500 font-bold mr-2">✓</span> Full hot-work operator isolation during feeder maintenance
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 font-bold mr-2">✓</span> Mandated for automotive, steel, and continuous cleanrooms
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 font-bold mr-2">!</span> Demands larger electrical room depth & width (~20% increase)
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Engineering Nuances */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Engineering Nuances: Thermal Derating & Cable Bending Radius
                </h2>
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
                  <h3 className="font-bold text-amber-900 mb-1">Thermal Entrapment in High Ambient Zones</h3>
                  <p className="text-sm text-amber-900/90 leading-relaxed">
                    Form 4b partitions compartmentalize heat. In high summer ambient temperatures across Delhi NCR (45°C–48°C), switchgear inside enclosed Form 4b cells requires temperature rise validation per IEC 61439, busbar derating factors, and IP54/IP55 louvers or forced exhaust systems.
                  </p>
                </div>
                <div className="p-4 bg-slate-100 border-l-4 border-slate-500 rounded-r-xl">
                  <h3 className="font-bold text-slate-900 mb-1">Cable Bending Space Constraints</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    In Form 4b Type 7 configurations with independent gland plates, terminating large 3.5C or single-core 300/400 sq mm XLPE armored cables requires adequate vertical box depth. Always verify switchboard GA drawings against permissible cable bending radii.
                  </p>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="pt-6 border-t border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      What is the difference between Form 4a and Form 4b?
                    </h3>
                    <p className="text-sm text-slate-600">
                      In Form 4a, outgoing cable termination lugs sit in the same physical compartment as the circuit breaker itself. In Form 4b, the cable terminals are isolated in a completely separate, dedicated termination chamber away from the breaker cell.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Can existing Form 3b switchboards be converted to Form 4b on site?
                    </h3>
                    <p className="text-sm text-slate-600">
                      Field modifications to convert Form 3b to Form 4b are rarely practical because Form 4b requires dedicated mechanical partition sheets, individual cable pathways, and pre-engineered clearances verified during factory sheet-metal punching.
                    </p>
                  </div>
                </div>
              </section>

            </main>

            {/* Right Sticky Sidebar (4 Columns) */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-36">
              
              {/* SLD / BOQ Lead Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">Direct Estimation Desk</span>
                <h3 className="text-xl font-bold mt-1 mb-3">Designing an LT Switchboard in Delhi NCR?</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Submit your Single Line Diagram (SLD) or BOQ for a engineering review, GA drawing verification, and CPRI-compliant quotation.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/support-form"
                    className="block w-full py-3 px-4 text-center rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-sm transition-colors shadow-sm"
                  >
                    Upload SLD / BOQ
                  </Link>
                  <a
                    href="tel:8287885885"
                    className="block w-full py-3 px-4 text-center rounded-xl bg-slate-700 hover:bg-slate-600 font-semibold text-sm transition-colors text-slate-100"
                  >
                    Direct Line: 8287-885-885
                  </a>
                </div>
              </div>

              {/* Manufacturing Capabilities Box */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3 text-base">Switchgear Highlights</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Up to <strong>65kA 1-sec</strong> short-circuit tested</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>1.6mm / 2.0mm CRCA CNC fabrication</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>7-tank pre-treatment & powder coating</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Schneider, L&T, Siemens, ABB switchgear</span>
                  </li>
                </ul>

                <hr className="my-4 border-slate-200" />

                <div className="flex flex-col space-y-2 text-xs sm:text-sm font-semibold">
                  <Link href="/lt-panel-manufacturers" className="text-blue-600 hover:underline">
                    • CPRI-Tested LT Panels
                  </Link>
                  <Link href="/mcc-panel-manufacturers" className="text-blue-600 hover:underline">
                    • Intelligent MCC Switchboards
                  </Link>
                  <Link href="/apfc-panel-manufacturers" className="text-blue-600 hover:underline">
                    • Harmonic Detuned APFC Panels
                  </Link>
                  <Link href="/electrical-panels" className="text-blue-600 hover:underline">
                    • All Electrical Panels
                  </Link>
                </div>
              </div>

            </aside>

          </div>

        </div>
      </div>
    </>
  );
}