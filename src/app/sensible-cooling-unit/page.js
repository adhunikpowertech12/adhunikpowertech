import Link from 'next/link'
import Image from 'next/image' // SEO: Uses Next.js Image optimization
import React from 'react'
import { Zap, Wind, Droplets, TrendingDown, Factory, Download, ChevronRight, CheckCircle2, ArrowRight, Phone, Thermometer, ShieldCheck, Cpu, LayoutGrid, HelpCircle } from "lucide-react";

// SEO: Metadata for Next.js App Router
export const metadata = {
  title: 'Sensible Cooling Unit (SCU) | Industrial Indirect Evaporative Cooling | Techmark',
  description: 'Reduce HVAC energy costs by 90% with Techmark Sensible Cooling Units (SCU). Advanced Indirect Evaporative Cooling (IDEC) for data centers, textile mills, and industrial plants. Adhunik Powertech.',
  keywords: ['Sensible Cooling Unit', 'Indirect Evaporative Cooling India', 'IDEC Technology', 'Industrial Air Cooling', 'Data Center HVAC', 'Textile Mill Cooling', 'Adhunik Powertech'],
  openGraph: {
    title: 'Techmark SCU - Revolutionary Industrial Cooling',
    description: 'Achieve 13°C temperature drop without adding humidity. The future of sustainable industrial cooling.',
    images: ['/Sensible Cooling Unit Image.webp'],
  },
};

export default function TechmarkSCUPage() {

  // SEO: Combined Product & FAQ Schema
  const schemaData = {
    "@context": "https://schema.org/",
    "@graph": [
      {
        "@type": "Product",
        "name": "Techmark Sensible Cooling Unit (SCU)",
        "image": "https://www.adhunikpowertech.com/Sensible-Cooling-Unit-Image.webp",
        "description": "Industrial Indirect Evaporative Cooling unit that reduces air temperature by up to 13°C without adding moisture.",
        "brand": { "@type": "Brand", "name": "Techmark by Adhunik Powertech" },
        "manufacturer": { "@type": "Organization", "name": "Adhunik Powertech Pvt. Ltd." },
        "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0" } 
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between SCU and a normal Air Washer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A normal air washer adds moisture to the air (direct evaporative cooling). The Techmark SCU uses Indirect Evaporative Cooling (IDEC), which cools the air without adding any humidity, making it safe for servers and machinery."
            }
          },
          {
            "@type": "Question",
            "name": "How much energy does the Sensible Cooling Unit save?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By pre-cooling fresh air, the SCU typically reduces the load on main AC compressors by 40-60%, leading to an overall HVAC energy saving of up to 90% for the fresh air intake component."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="font-sans text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900">
        
        {/* SECTION 1: HERO - High Impact & Keyword Rich */}
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-3/5">
                <header>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                    IDEC Technology
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                    Cool Air. Zero Moisture. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                        Max Energy Savings.
                    </span>
                    </h1>
                </header>
                
                <article className="prose prose-lg text-slate-600 mb-8 max-w-2xl text-justify">
                  <p>
                    The <strong>Techmark Sensible Cooling Unit (SCU)</strong> represents a paradigm shift in industrial thermal management. Unlike traditional evaporative coolers that saturate air with humidity, our SCU utilizes cutting-edge <strong>Indirect Evaporative Cooling (IDEC)</strong> technology.
                  </p>
                  <p className="mt-4">
                    Designed for high-heat environments like <strong>Data Centers, Pharmaceutical Labs, and Textile Mills</strong>, the SCU achieves a dry bulb depression of up to <strong>13°C</strong> while maintaining constant specific humidity. This effectively decouples the sensible heat load from your primary AHU, slashing operational expenses (OpEx) while extending the lifespan of your mechanical chillers.
                  </p>
                </article>

                <div className="flex flex-wrap gap-4">
                  <Link href="/support-form" className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
                    Request Pricing
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="/Techmark SCU (Sensible Cooling Unit) Catalogue 2025.pdf" download className="group bg-white border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                    <Download className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
                    Download Catalogue
                  </a>
                </div>
              </div>
              
              <div className="w-full lg:w-1/4 relative">
                <figure className="relative rounded-2xl bg-gradient-to-b from-slate-100 to-white border border-slate-200 shadow-2xl p-2">
                    {/* SEO: Image with descriptive Alt text */}
                    <Image 
                      src="/Sensible Cooling Unit Image.webp" 
                      alt="Techmark Sensible Cooling Unit (SCU) for Industrial HVAC Applications" 
                      width={600}
                      height={800}
                      className="rounded-xl w-full h-auto object-cover"
                      priority
                    />
                    <figcaption className="sr-only">Techmark SCU Unit Front View</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: TECHNOLOGY DEEP DIVE - (Content Expansion) */}
        <section id="technology" className="py-15 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-10 lg:px-15">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Science of Sensible Cooling</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                In industrial HVAC, "Sensible Heat" refers to the heat you can feel (temperature), while "Latent Heat" refers to moisture energy. Conventional air conditioning systems are notoriously inefficient because they waste massive amounts of energy dehumidifying air (Latent cooling) even when only temperature reduction (Sensible cooling) is required.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Techmark solves this inefficiency with our <strong>polymer Cross-Flow Heat Exchanger</strong>. By separating the working air stream from the supply air stream, we harness the cooling power of water evaporation in a secondary channel to cool the primary air through a conducting surface. The result? <strong>Cold air that remains dry.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6"><Droplets className="w-6 h-6" /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Constant Specific Humidity</h3>
                <p className="text-slate-600 leading-relaxed">
                  Crucial for data centers and electronics manufacturing. Since the supply air never touches water directly, there is zero moisture addition, preventing corrosion and condensation issues associated with swamp coolers.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-green-200 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6"><TrendingDown className="w-6 h-6" /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ultra-Low Power PUE</h3>
                <p className="text-slate-600 leading-relaxed">
                  The SCU operates using only a fan and a small circulation pump (55 Watts). This minimal energy footprint drastically lowers your Power Usage Effectiveness (PUE) ratio, helping you meet Green Building standards.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6"><Factory className="w-6 h-6" /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Modular Scalability</h3>
                <p className="text-slate-600 leading-relaxed">
                  Whether you need 500 CFM for a small server room or 200,000 CFM for a massive textile weaving floor, our modular design allows for easy stacking and integration into existing Air Handling Units (AHU).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SYSTEM WORKFLOW - VISUAL EXPLANATION */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col xl:flex-row gap-16 items-start">
                
                {/* Left Side: The Diagram */}
                <div className="w-full xl:w-3/5 sticky top-24">
                   <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 shadow-inner">
                      <figure className="bg-white rounded-xl overflow-hidden border border-slate-100">
                        <Image 
                          src="/SCU-Working.webp" 
                          alt="Diagram showing Techmark SCU integration with Air Handling Unit (AHU) for fresh air pre-cooling" 
                          width={1000}
                          height={600}
                          className="w-full h-auto object-contain"
                        />
                      </figure>
                   </div>
                   <p className="text-center text-xs text-slate-400 mt-4 italic">
                      Figure 1: Schematic integration of Sensible Cooling Unit (Left) reducing load on standard AHU (Right).
                   </p>
                </div>

                {/* Right Side: The Narrative */}
                <div className="w-full xl:w-2/5">
                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Workflow: How It Optimizes Airflow</h2>
                   <p className="text-slate-600 mb-8 leading-relaxed">
                      The diagram illustrates the SCU acting as a thermal shield. By pre-treating the fresh air intake, we remove the "Sensible Heat Load" before it ever reaches your expensive mechanical chillers.
                   </p>

                   <div className="space-y-10 relative">
                      <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-200 -z-10 hidden md:block"></div>

                      <div className="flex gap-6 group">
                         <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-red-600 flex items-center justify-center font-bold border-2 border-red-100 shadow-sm ring-2 ring-red-50 group-hover:bg-red-600 group-hover:text-white transition-colors">1</div>
                         <div>
                            <h4 className="text-lg font-bold text-slate-900">High-Temp Ambient Intake</h4>
                            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                               The process begins with outdoor air entering the unit (e.g., at <span className="text-red-500 font-bold">42°C</span>). In a standard system, this high-temperature air would force your compressor to work at 100% capacity immediately.
                            </p>
                         </div>
                      </div>

                      <div className="flex gap-6 group">
                         <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold border-2 border-blue-100 shadow-sm ring-2 ring-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors">2</div>
                         <div>
                            <h4 className="text-lg font-bold text-slate-900">Indirect Heat Exchange</h4>
                            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                               Inside the SCU, water is evaporated in a <em>secondary</em> channel. This cools the conducting plates. The primary air passes over these cold plates and drops in temperature purely through conduction, ensuring <strong>no moisture pickup</strong>.
                            </p>
                         </div>
                      </div>

                      <div className="flex gap-6 group">
                         <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-cyan-600 flex items-center justify-center font-bold border-2 border-cyan-100 shadow-sm ring-2 ring-cyan-50 group-hover:bg-cyan-600 group-hover:text-white transition-colors">3</div>
                         <div>
                            <h4 className="text-lg font-bold text-slate-900">Pre-Cooled Supply to AHU</h4>
                            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                               The air entering your AHU Mixing Chamber is now at approx <span className="text-blue-500 font-bold">29°C</span> instead of 42°C. This is chemically identical to fresh air but thermally optimized.
                            </p>
                         </div>
                      </div>

                      <div className="flex gap-6 group">
                         <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-green-600 flex items-center justify-center font-bold border-2 border-green-100 shadow-sm ring-2 ring-green-50 group-hover:bg-green-600 group-hover:text-white transition-colors">4</div>
                         <div>
                            <h4 className="text-lg font-bold text-slate-900">Massive Energy Savings</h4>
                            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                               Because the Delta-T (Temperature Difference) your cooling coil needs to bridge is now significantly lower, your main compressor amps down, resulting in <strong>90% savings on the fresh air load</strong>.
                            </p>
                         </div>
                      </div>

                   </div>
                </div>

             </div>
          </div>
        </section>

        {/* SECTION 4: PSYCHROMETRIC PROOF */}
        <section id="performance" className="py-20 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="w-full lg:w-1/2">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-500 uppercase bg-indigo-50 rounded-full">
                  Verified Performance
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Psychrometric Validation</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  The chart below is the definitive proof of the SCU's efficacy. It plots the "Sensible Cooling Process" (the green arrow), moving strictly horizontally to the left.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                  This horizontal movement confirms that while the <strong>Dry Bulb Temperature</strong> drops dramatically (from 42°C to 29°C), the <strong>Specific Humidity</strong> (Y-Axis) remains perfectly flat. This is the "Holy Grail" of industrial evaporative cooling—getting the cooling effect without the humidity penalty.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-white rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                       <p className="text-xs font-bold text-red-400 uppercase tracking-wide">Input (Ambient)</p>
                       <Thermometer className="w-4 h-4 text-red-400" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-slate-900">42.0°C</span>
                      <span className="text-sm text-slate-500 font-medium">Dry Bulb</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">23.5°C Wet Bulb</p>
                  </div>

                  <div className="flex items-center justify-center text-slate-300 md:hidden">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>

                  <div className="p-5 bg-white rounded-xl border border-green-100 shadow-sm relative overflow-hidden hover:shadow-md transition-shadow">
                     <div className="absolute right-0 top-0 w-20 h-20 bg-green-50 rounded-bl-full opacity-60"></div>
                     <div className="flex justify-between items-start mb-2 relative z-10">
                        <p className="text-xs font-bold text-green-600 uppercase tracking-wide">Output (Supply)</p>
                        <Wind className="w-4 h-4 text-green-600" />
                     </div>
                    <div className="flex items-baseline gap-2 relative z-10">
                      <span className="text-3xl font-bold text-slate-900">29.0°C</span>
                      <span className="text-sm text-slate-500 font-medium">Dry Bulb</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-2 relative z-10">19.5°C Wet Bulb</p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-3 relative group">
                   <div className="overflow-hidden rounded-xl bg-slate-50">
                     <Image 
                        src="/psychrometric-chart.jpeg" 
                        alt="Psychrometric Chart showing 42C to 29C cooling process with constant humidity" 
                        width={800}
                        height={600}
                        className="w-full h-auto hover:scale-105 transition-transform duration-500"
                     />
                   </div>
                   <div className="absolute top-6 left-6 bg-slate-900/90 text-white text-xs px-4 py-2 rounded-md backdrop-blur-sm shadow-lg border border-slate-700">
                      Data: 13°C Delta-T Achieved
                   </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* SECTION 5: INDUSTRY APPLICATIONS - (SEO Content Booster) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Engineered for Critical Industries</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Sensible Cooling Unit (SCU) is a precision instrument designed for sectors where humidity control and energy efficiency are non-negotiable.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               
               <div className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-slate-50">
                  <Cpu className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Data Centers</h3>
                  <p className="text-sm text-slate-600">Reduces PUE by pre-cooling server intake air. Allows for higher rack density by removing heat efficiently at the source.</p>
               </div>
               <div className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-slate-50">
                  <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Pharma & Clean Rooms</h3>
                  <p className="text-sm text-slate-600">Supports "Once-Through" air systems where 100% fresh air is required by regulation, making compliance energy-efficient.</p>
               </div>
               <div className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-slate-50">
                  <LayoutGrid className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Food Processing</h3>
                  <p className="text-sm text-slate-600">Prevents mold growth associated with direct evaporative coolers by keeping the supplied cold air dry and hygienic.</p>
               </div>
               <div className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-slate-50">
                  <Factory className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Textile Mills</h3>
                  <p className="text-sm text-slate-600">Essential for weaving and spinning sections. Maintains the ideal temperature to prevent yarn breakage without over-saturating the air.</p>
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: FINANCIAL BREAKDOWN */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-1/2">
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-green-400 uppercase bg-green-900/30 rounded-full border border-green-800">
                    ROI Analysis
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Return on Investment in 3 Months</h2>
                  <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                    The financial argument for the SCU is undeniable. A conventional compressor requires approx 5.5KW to cool the same volume of air that our SCU handles with just 0.5KW (Fan + Pump).
                  </p>
                  <p className="text-slate-300 mb-8 text-lg">
                    This results in an annual saving of approximately <strong>₹ 6.5 Lakhs</strong> per unit. For a facility running 24/7, the SCU pays for itself in less than a quarter.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                       <span className="block text-2xl font-bold text-green-400 mb-1">0.5 KW</span>
                       <span className="text-xs text-slate-400 uppercase">SCU Power Consumption</span>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                       <span className="block text-2xl font-bold text-red-400 mb-1">5.5 KW</span>
                       <span className="text-xs text-slate-400 uppercase">Conventional AC Power</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                   <h3 className="text-sm font-bold uppercase text-slate-400 mb-8 tracking-wide border-b border-slate-700 pb-4">Annual Energy Cost Comparison</h3>
                   <div className="space-y-8">
                      {/* Bar 1 */}
                      <div>
                        <div className="flex justify-between mb-2 text-sm">
                          <span className="text-white font-medium">Conventional AC</span>
                          <span className="text-red-400 font-bold">₹ 7,22,700</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
                          <div className="bg-gradient-to-r from-red-500 to-red-600 h-4 rounded-full w-full"></div>
                        </div>
                      </div>
                      {/* Bar 2 */}
                      <div>
                        <div className="flex justify-between mb-2 text-sm">
                          <span className="text-white font-medium">Techmark SCU</span>
                          <span className="text-green-400 font-bold">₹ 65,700</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden relative">
                          <div className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full w-[9%] shadow-[0_0_20px_rgba(34,197,94,0.6)] relative z-10"></div>
                        </div>
                        <p className="text-xs text-green-400 mt-2 text-right font-mono">90.91% Cost Reduction</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* SECTION 7: TECHNICAL SPECS TABLE */}
        <section id="specs" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Technical Specifications (2500 CFM Model)</h2>
            <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-100 text-slate-700 text-sm uppercase tracking-wider">
                    <tr>
                      <th className="p-5 font-bold border-b border-slate-200">Parameter</th>
                      <th className="p-5 font-bold border-b border-slate-200">Specification</th>
                      <th className="p-5 font-bold border-b border-slate-200 hidden md:table-cell">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600 text-sm">
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-5 font-semibold text-slate-800">Airflow Capacity</td>
                      <td className="p-5">2500 CFM (Standard)</td>
                      <td className="p-5 text-slate-500 hidden md:table-cell">Customizable 500-2500 CFM</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-5 font-semibold text-slate-800">Fan Configuration</td>
                      <td className="p-5">Large Axial Fan (4D-450)</td>
                      <td className="p-5 text-slate-500 hidden md:table-cell">Includes Compact Secondary Fan</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-5 font-semibold text-slate-800">Dimensions</td>
                      <td className="p-5 font-mono">800(L) x 750(W) x 1670(H) mm</td>
                      <td className="p-5 text-slate-500 hidden md:table-cell">Compact Footprint</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-5 font-semibold text-slate-800">Tank Material</td>
                      <td className="p-5">18G SS-304 Stainless Steel</td>
                      <td className="p-5 text-slate-500 hidden md:table-cell">Corrosion Resistant</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-5 font-semibold text-slate-800">Insulation</td>
                      <td className="p-5">25mm PUF Injected</td>
                      <td className="p-5 text-slate-500 hidden md:table-cell">Density: 40kg/cu.m</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-green-50/50">
                      <td className="p-5 font-bold text-green-800">Pump Power</td>
                      <td className="p-5 font-bold text-green-700">55 Watts</td>
                      <td className="p-5 text-green-700 hidden md:table-cell">Single Phase, Ultra-Low Energy</td>
                    </tr>
                  </tbody>
                </table>
               </div>
               <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500">
                  * Specifications based on Techmark DAMA 2500 CFM model. Custom configurations available upon request.
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ (SEO Snippet Target) */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-blue-600"/> Does the SCU add moisture to the air?</h3>
                        <p className="text-slate-600">No. Unlike standard swamp coolers, the Techmark SCU uses Indirect Evaporative Cooling. The water evaporation happens in a secondary channel, so the supply air remains dry.</p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-blue-600"/> Can this replace my existing Central AC?</h3>
                        <p className="text-slate-600">It is best used as a hybrid system. The SCU handles the "fresh air" load (often 30-40% of the total heat), significantly reducing the work your Central AC needs to do.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-blue-900 py-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your HVAC Efficiency?</h2>
            <p className="text-blue-200 mb-10 max-w-2xl mx-auto text-lg">
              Stop overpaying for cooling. Integrate the Techmark SCU today and experience the power of Indirect Evaporative Cooling.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/support-form" className="bg-white text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                 Get Technical Consultation
               </Link>
               <Link href="tel:8287885885" className="bg-blue-800 border border-blue-700 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                 <Phone className="w-5 h-5" /> Call: 8287-885-885
               </Link>
            </div>
            {/* Footer / Dual Branding */}
            <div className="mt-20 pt-8 border-t border-blue-800/50 text-blue-300 text-sm">
                <p className="mb-2">Techmark is a registered brand of <span className="text-white font-semibold">Adhunik Powertech Pvt. Ltd.</span> </p>
                <p>DLF Corporate Greens, Sector 74A, Gurugram, Haryana.</p>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}