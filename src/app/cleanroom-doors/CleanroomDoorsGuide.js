"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  ShieldCheck,
  GaugeCircle,
  DoorOpen,
  Layers,
  Settings,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  PhoneCall,
  PackageCheck,
  CheckCircle2,
  Thermometer,
  XCircle
} from "lucide-react";

export default function CleanroomDoorsGuide() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const parametersControlled = [
    {
      title: 'Controlled Air Pressure',
      desc: <>Maintains strict positive or negative pressure barriers to ensure zero unregulated cross-draft contamination.</>,
      icon: GaugeCircle
    },
    {
      title: 'Air Cleanliness Classifications',
      desc: <>Directly supports ISO 14644 levels by drastically minimizing airborne microparticle infiltration points.</>,
      icon: ShieldCheck
    },
    {
      title: 'Temperature & Humidity Control',
      desc: <>Locks down thermal boundary integrity, preventing environmental bleeding between controlled zones.</>,
      icon: Thermometer
    }
  ];

  const doorTypes = [
    {
      title: "1. Single Leaf Swing Doors",
      bestFor: "Personnel access, labs, hospitals, small cleanrooms.",
      advantages: ["Cost-effective pricing", "Extremely easy installation", "Reliable flush hermetic sealing", "Minimal maintenance requirement"]
    },
    {
      title: "2. Double Leaf Swing Doors",
      bestFor: "Material transfer points, bulk machinery pathways.",
      advantages: ["Wider structural clearance", "Heavy-duty transit support", "Equipment integration pathways", "Airlock zone optimization"]
    },
    {
      title: "3. Sliding Cleanroom Doors",
      bestFor: "Narrow corridors, automated production spaces.",
      advantages: ["Maximum floor space-saving", "Smooth, linear non-obstructive movement", "Ideal for touchless automation systems", "Excellent performance on large openings"]
    },
    {
      title: "4. Automatic Cleanroom Doors",
      bestFor: "Operation theatres, sterile processing zones.",
      advantages: ["Zero-contact physical interaction", "Drastically reduced contamination vectors", "High accessibility layout configurations", "Advanced responsive safety sensors"]
    },
    {
      title: "5. Interlocking Cleanroom Doors",
      bestFor: "High-tier airlocks, biosafety facilities.",
      advantages: ["Prevents simultaneous door openings", "Maintains absolute differential pressures", "Eliminates contamination bleed risks", "Fail-safe automated sequencing"]
    }
  ];

  const materialsList = [
    { title: "Stainless Steel", description: "The premier standard for pharmaceutical spaces. Provides ultimate rust resistance and chemical tolerance." },
    { title: "Galvanized Steel", description: "Offers excellent structural structural strength, long service lifespans, and great overall cost-efficiency." },
    { title: "Powder-Coated Steel", description: "Combines raw metal durability with scratch-resistant premium coatings for clean aesthetic appeal." },
    { title: "Aluminum Layouts", description: "Lightweight configurations built primarily for moderate-duty clean environments and easy mounting." },
    { title: "High Pressure Laminate (HPL)", description: "Non-porous moisture-resistant surfaces highly preferred across modular bio-labs and clinic floors." }
  ];

  const coreFeatures = [
    { title: "Flush Surface Engineering", description: "Eliminates all dust-trapping protruding ledges, streamlining easy wipe-downs.", icon: Layers },
    { title: "Airtight Hermetic Gaskets", description: "Creates tight perimeter seals to prevent any localized static air pressure loss.", icon: GaugeCircle },
    { title: "Double-Glazed Vision Panels", description: "Improves operational workflow tracking without breaching isolated structural containment.", icon: DoorOpen },
    { title: "Chemical Resistant Cores", description: "Withstands highly rigorous, daily surface chemical washdowns and sanitizers.", icon: ShieldCheck },
    { title: "Heavy-Duty Hinge Assemblies", description: "Engineered specifically to survive high-cycle multi-shift continuous operations.", icon: Settings },
    { title: "Fire-Rated Safety Thresholds", description: "Provides necessary safety compliance protection without reducing structural performance.", icon: AlertTriangle }
  ];

  const comparisonTable = [
    { feature: "Space Requirement", swing: "Requires swing clearance radius", sliding: "Saves high valuable floor space" },
    { feature: "Installation Cost", swing: "Lower upfront cost", sliding: "Higher initial setup asset" },
    { feature: "Automation Add-ons", swing: "Optional manual adjustments", sliding: "Commonly integrated natively" },
    { feature: "Material Handling", swing: "Moderate clearance flexibility", sliding: "Excellent transport profile" },
    { feature: "High Traffic Response", swing: "Good performance utility", sliding: "Excellent wear-and-tear endurance" }
  ];

  const commonMistakes = [
    { title: "Choosing systems based purely on lowest price margins.", icon: XCircle },
    { title: "Ignoring precise target ISO cleanroom classification rules.", icon: XCircle },
    { title: "Selecting improper base materials that corrode from sanitizers.", icon: XCircle },
    { title: "Overlooking high-grade air leakages or faulty sealing gaskets.", icon: XCircle },
    { title: "Forgetting expansion layout scale requirements for workflows.", icon: XCircle },
    { title: "Procuring units from suppliers lacking dedicated cleanroom expertise.", icon: XCircle }
  ];

  const faqItems = [
    {
      question: "What is the primary purpose of a specialized cleanroom door?",
      answer: "A cleanroom door functions as an active micro-contamination barrier. Unlike regular doors, it handles high air pressure differentials, emits zero microparticles, and withstands harsh sanitizing chemical washdowns while maintaining terminal structural integrity."
    },
    {
      question: "Which specific door material is best recommended for pharmaceutical spaces?",
      answer: "High-grade Stainless Steel (typically Grade 304 or 316) is highly recommended. It offers outstanding anti-corrosive characteristics, does not oxidize under aggressive chemical sanitization regimes, and maintains a perfectly smooth, non-porous structure."
    },
    {
      question: "Are fully automatic touchless cleanroom doors absolutely necessary?",
      answer: "While manual doors work, automatic variants are highly recommended for ultra-sterile zones (like operating theatres and injectables production). Eliminating physical touchpoints cuts human contamination risks by massive margins."
    }
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-slate-50 to-white mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className="w-full md:w-6/12">
              <Image
                src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1784194948/cleanroom-doors_k1nro5.webp"
                alt="Blue double-leaf cleanroom doors with vision panels in an ISO 14644-compliant cleanroom corridor."
                width={700}
                height={500}
                loading="eager"
                className="w-full h-auto rounded-xl shadow-xl border-2 border-cyan-100"
              />
            </div>

            <div className="w-full md:w-6/12">
              <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                Complete Engineering Manual (2026)
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-cyan-900 mb-6 leading-tight text-left">
                Cleanroom Doors: Types, Features, Materials & Complete Selection Guide
              </h1>
              <p className="w-full md:w-11/12 text-sm text-gray-700 mb-4 text-justify leading-relaxed">
                Cleanroom doors play a crucial role in maintaining controlled environments where contamination control, air pressure differentials, and absolute operational hygiene are essential.
              </p>
              <p className="w-full md:w-11/12 text-sm text-gray-700 mb-4 text-justify leading-relaxed">
                Whether it&apos;s a pharmaceutical manufacturing facility, biotechnology laboratory, hospital operation theatre, electronics manufacturing plant, or food processing unit, selecting the right cleanroom door is just as vital as configuring the cleanroom shell itself.
              </p>
            </div>
          </section>

          {/* Intro Section */}
          <section className="mb-16 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 text-sm text-gray-700 space-y-4">
            <h2 className="text-xl font-bold text-cyan-800">What Are Cleanroom Doors?</h2>
            <p className="leading-relaxed text-justify">
              A cleanroom door is a specially engineered architectural barrier optimized for controlled environments where airborne particulates, airborne micro-organisms, static dust, and ambient pollutants must be suppressed within precise statutory thresholds. 
            </p>
            <p className="leading-relaxed text-justify">
              Unlike common commercial industrial doors, these assemblies feature perfectly smooth flush configurations, non-porous surfaces, and durable structural matrices capable of sustaining daily rigorous chemical disinfection protocols to avert batch validation failures and keep installations aligned with <strong>ISO 14644</strong> and <strong>GMP</strong> standards.
            </p>
          </section>

          {/* Controlled Parameters Grid */}
          <section className="mb-16 bg-white p-5 md:p-8 rounded-xl shadow-md border border-cyan-100">
            <h3 className="text-xl font-bold text-cyan-800 mb-6 pb-2 border-b border-cyan-100">
              Critical Environmental Integrity Parameters Maintained
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {parametersControlled.map((param, index) => {
                const Icon = param.icon;
                return (
                  <div key={index} className="bg-slate-50 p-5 rounded-lg border border-gray-100 flex flex-col items-start">
                    <div className="bg-cyan-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <h4 className="font-bold text-cyan-800 mb-1 text-sm">{param.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{param.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Comprehensive Door Types Accordion Style Grid */}
          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-cyan-800 mb-6">
              Primary Mechanical Types of Cleanroom Doors
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doorTypes.map((door, index) => (
                <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-cyan-800 text-md mb-2">{door.title}</h3>
                    <p className="text-xs text-gray-500 mb-4"><strong>Best Used In:</strong> {door.bestFor}</p>
                    <div className="space-y-1.5">
                      {door.advantages.map((adv, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 mr-2 flex-shrink-0" />
                          <span>{adv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Material Construction Breakdown & Features */}
          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-5 md:p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-cyan-800 mb-4">Material Grade Classifications</h3>
              <p className="text-xs text-gray-600 mb-4">
                The core structural compound chosen directly governs long-term anti-corrosion profiles, cleanroom lifecycle metrics, and operational sanitization safety:
              </p>
              <div className="space-y-3">
                {materialsList.map((mat, idx) => (
                  <div key={idx} className="text-xs bg-slate-50 p-3 rounded border-l-4 border-cyan-600">
                    <span className="font-bold text-cyan-900 block mb-0.5">{mat.title}</span>
                    <p className="text-gray-600 leading-normal">{mat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Essential Features Grid */}
            <div className="bg-white p-5 md:p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-cyan-800 mb-4">Essential Structural Cleanroom Features</h3>
              <div className="grid grid-cols-2 gap-4">
                {coreFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="p-3 border border-slate-100 rounded-lg bg-slate-50/50">
                      <Icon className="w-4 h-4 text-cyan-600 mb-1" />
                      <h4 className="font-bold text-gray-800 text-xs mb-0.5">{feat.title}</h4>
                      <p className="text-[11px] text-gray-500 leading-tight">{feat.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Data Comparison Matrix Table */}
          <section className="mb-16 bg-white p-4 md:p-8 rounded-xl shadow-md border border-cyan-100 overflow-x-auto">
            <h3 className="text-xl font-bold text-cyan-800 mb-4">Technical Matrix: Swing vs Sliding Assemblies</h3>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-cyan-800 text-white">
                  <th className="p-3 rounded-l">Engineering Feature</th>
                  <th className="p-3">Swing Door Profiles</th>
                  <th className="p-3 rounded-r">Sliding Door Profiles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-3 font-semibold text-gray-800">{row.feature}</td>
                    <td className="p-3 text-gray-600">{row.swing}</td>
                    <td className="p-3 text-gray-600">{row.sliding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Risk Mitigation Section */}
          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-cyan-800 mb-4 text-center md:text-left">
              Critical Mistakes to Evade During Selection
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonMistakes.map((mistake, index) => {
                const Icon = mistake.icon;
                return (
                  <div key={index} className="bg-white p-4 rounded-lg border border-red-100 shadow-sm flex gap-3 items-center">
                    <div className="bg-red-50 p-2 rounded-md flex-shrink-0">
                      <Icon className="text-red-500 w-5 h-5" />
                    </div>
                    <p className="text-gray-700 text-xs font-medium leading-normal">{mistake.title}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Strategic Turnkey Value Section */}
          <section className="bg-slate-900 text-white p-6 md:p-10 rounded-2xl mb-16 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-8/12">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-cyan-400">Why Partner with Adhunik Powertech?</h3>
              <p className="text-xs md:text-sm text-slate-300 text-justify leading-relaxed">
                A cleanroom door is never just a simple entry mechanism—it is an inseparable pillar of your plant&apos;s dynamic containment profile. At Adhunik Powertech, we architect and deliver full turnkey cleanroom envelopes and high-precision HVAC containment systems configured precisely to satisfy regulatory guidelines across global pharmaceutical markets, biotechnology zones, electronics hubs, and sterile medical manufacturing suites.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full md:w-4/12 text-[11px] text-center font-semibold">
              <div className="bg-slate-800 p-3 rounded border border-slate-700 text-cyan-300">ISO 14644 Compliant</div>
              <div className="bg-slate-800 p-3 rounded border border-slate-700 text-cyan-300">GMP Engineered</div>
              <div className="bg-slate-800 p-3 rounded border border-slate-700 text-cyan-300">Turnkey Commissioning</div>
              <div className="bg-slate-800 p-3 rounded border border-slate-700 text-cyan-300">Total System Integration</div>
            </div>
          </section>

          {/* Interactive FAQ Section Accordion */}
          <section className="mb-16 bg-white p-5 md:p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-cyan-800 mb-2">Frequently Asked Engineering Queries</h3>
            <p className="text-xs text-gray-500 mb-6">Explore expert architectural answers regarding industrial facility access design:</p>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-slate-100 pb-4">
                  <button
                    className="w-full flex justify-between items-center text-left font-semibold text-sm text-cyan-900 focus:outline-none"
                    onClick={() => toggle(index)}
                  >
                    <span>{item.question}</span>
                    {openIndex === index ? <ChevronUp className="w-4 h-4 text-cyan-600" /> : <ChevronDown className="w-4 h-4 text-cyan-600" />}
                  </button>
                  {openIndex === index && (
                    <p className="mt-2 text-xs text-gray-600 bg-cyan-50/30 p-3 rounded-md leading-relaxed transition-all">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Technical Conclusion Statement */}
          <div className="px-6 lg:px-16 py-10 bg-white rounded-2xl shadow-sm border border-gray-100 space-y-4 mb-16">
            <h3 className="text-xl font-bold text-cyan-800 text-left">
              Conclusion: Absolute Compliance Starts at the Boundary
            </h3>
            <p className="text-gray-700 text-xs md:text-sm text-justify leading-relaxed">
              Industrial cleanrooms are only as secure as their weakest physical point. Investing in premium high-cycle flush door systems engineered for smooth cleanability prevents localized pressure drops, safeguards cross-contamination barriers, and avoids unexpected batch rejection penalties.
            </p>
            <p className="text-[11px] text-cyan-800 italic font-medium pt-3 border-t border-slate-100">
              *Planning an upcoming critical modular build or facility audit turnaround? Secure baseline containment parameters early with optimized structural infrastructure.
            </p>
          </div>

          {/* CTA Engineering Action Block */}
          <section className="bg-gradient-to-r from-cyan-700 to-cyan-900 rounded-xl p-8 text-white shadow-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Integrate High-Performance Cleanroom Doors into Your Facility</h2>
              <p className="text-cyan-100 mb-6 text-xs md:text-sm">
                Connect with our cleanroom validation engineers to review structural designs, material certifications, and receive a customized cleanroom solution with transparent pricing. Get expert guidance to ensure your project!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:8287885885"
                  className="bg-white text-xs font-bold text-cyan-900 hover:bg-cyan-50 py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center shadow-md"
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  Speak to an Expert
                </a>
                <Link
                  href="/support-form"
                  className="bg-cyan-800 text-xs hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center border border-cyan-600 shadow-md"
                >
                  <PackageCheck className="w-4 h-4 mr-2" />
                  Request Specification Sheet
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}