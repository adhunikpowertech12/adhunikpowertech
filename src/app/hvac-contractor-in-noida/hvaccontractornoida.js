'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HVACContractorNoida() {
  const comparisonData = [
    {
      feature: 'Ideal Project Scope',
      chiller: 'Cleanrooms, pharmaceutical plants, large industrial complexes',
      vrf: 'Corporate IT towers, multi-floor commercial complexes, institutional hubs',
    },
    {
      feature: 'Air Distribution / IAQ',
      chiller: 'Double-Skin AHUs with HEPA/EU filtration & duct integration',
      vrf: 'Concealed ductable indoor units, cassettes, floor-mounted units',
    },
    {
      feature: 'Thermal Medium',
      chiller: 'Closed-loop chilled water distribution (pumps & cooling towers)',
      vrf: 'Multi-circuit refrigerant loops (R-410A / R-32)',
    },
    {
      feature: 'Fresh Air / Ventilation Coupling',
      chiller: 'Direct pairing with Industrial Air Washers, TFA, and treated fresh air AHUs',
      vrf: 'Paired via separate Heat Recovery Ventilators (HRV) or dedicated DOAS',
    },
    {
      feature: 'Primary Industrial Belts',
      chiller: 'Greater Noida Ecotech, Phase-2 Industrial Area, Kasna Industrial Corridor',
      vrf: 'Sector 62, Sector 132/135 IT Expressway, Sector 142 Corporate Hubs',
    },
  ];

  const turnkeyCapabilities = [
    {
      title: 'Turnkey HVAC Contracting & System Design',
      desc: 'Complete psychrometric load analysis, heat gain calculations, CFM static pressure balancing, and turnkey MEP execution adhering strictly to ISHRAE and ASHRAE standards.',
      tag: 'Turnkey Projects',
    },
    {
      title: 'Central Air Conditioning (Central AC)',
      desc: 'High-tonnage water-cooled and air-cooled screw/scroll chiller plants, central chilled water piping networks, pumps, and primary central air conditioning plants.',
      tag: 'Central Plants',
    },
    {
      title: 'Double-Skin Air Handling Units (AHU)',
      desc: 'Modular double-skin AHUs with high-efficiency direct/belt-driven plug fans, aluminum thermal break profiles, and multi-stage filtration for controlled airflow.',
      tag: 'Air Handling Systems',
    },
    {
      title: 'Industrial Cleanroom HVAC Systems',
      desc: 'ISO Class 5 to Class 8 certified cleanroom ventilation, positive/negative pressure cascades, terminal HEPA filtration, and laminar airflow units for pharma and electronics.',
      tag: 'Cleanroom HVAC',
    },
    {
      title: 'Industrial Air Washers & Ducted Coolers',
      desc: 'Single-stage and two-stage industrial air washers, cellulose pad ducted evaporative cooling systems, and large-scale plant ventilation plants for production floors.',
      tag: 'Evaporative Cooling',
    },
    {
      title: 'Air Conditioning System Service & Turnkey AMC',
      desc: 'Comprehensive annual maintenance contracts (CAMC) for central chillers, AHU motor alignment, duct smoke testing, air balancing (TAB), and seasonal plant audits.',
      tag: 'Project AMC & Service',
    },
  ];

  const faqs = [
    {
      q: 'What types of industrial HVAC projects does Adhunik Powertech execute in Noida?',
      a: 'We execute turnkey commercial and industrial HVAC projects including central air conditioning chiller plants, cleanroom ventilation systems, double-skin Air Handling Units (AHUs), commercial VRF systems, and large-capacity industrial air washers and ducted coolers across Noida and Greater Noida.',
    },
    {
      q: 'Do you design and execute ISO-certified cleanroom HVAC systems?',
      a: 'Yes. We deliver complete cleanroom HVAC systems for pharmaceutical, electronics, and automotive facilities. This covers pressure cascade balancing, terminal HEPA filtration, dehumidification, and double-skin AHUs aligned with ISO 14644 and cGMP standards.',
    },
    {
      q: 'How do industrial air washers and ducted coolers fit into large factory projects?',
      a: 'For manufacturing shop floors and high-bay industrial sheds where full refrigerated air conditioning is cost-prohibitive, we engineer single and two-stage industrial air washers and ducted evaporative cooling systems that deliver high-volume treated air at a fraction of central AC operating costs.',
    },
    {
      q: 'What does your commercial air conditioning system service and turnkey AMC cover?',
      a: 'Our project-level hvac service covers chilled water loop chemical flushing, AHU dynamic fan balancing, compressor overhaul, refrigerant leak testing, pressure calibration, and complete airflow/CFM rebalancing.',
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Declarative Hero Section */}
      <section className="relative bg-slate-950 text-white py-40 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Top HVAC Contractor in Noida Adhunik Powertech
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed font-normal">
              Adhunik Powertech Private Limited is a specialized industrial <strong>hvac contractor in Noida</strong> delivering complete turnkey projects. We engineer, supply, and commission high-capacity <strong>central air conditioning</strong> plants, cleanrooms, double-skin <strong>Air Handling Units (AHU)</strong>, industrial <strong>air washers</strong>, and <strong>ducted coolers</strong> for manufacturing plants, data hubs, and enterprise facilities.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/support-form"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-transparent text-base font-semibold rounded-md text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-950"
              >
                Contact Us for Project BOQ
              </Link>
              <a
                href="/hvac"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-slate-700 text-base font-semibold rounded-md text-slate-200 bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                Explore Project Scope
              </a>
            </div>

            {/* Direct Project Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400">
              <div>
                <span className="block font-bold text-slate-200 text-base">Turnkey EPC</span>
                Design, Supply, Duct & TAB
              </div>
              <div>
                <span className="block font-bold text-slate-200 text-base">Cleanroom HVAC</span>
                ISO Class 5 to Class 8
              </div>
              <div>
                <span className="block font-bold text-slate-200 text-base">AHU & Air Washers</span>
                High-Volume CFM Handling
              </div>
              <div>
                <span className="block font-bold text-slate-200 text-base">Central AC Plants</span>
                Water & Air-Cooled Chillers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Authority Overview with Real Project Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 mb-2 block">
              Verified Industrial Execution
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
              Turnkey HVAC Systems for Large Industrial & Commercial Facilities
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Executing as a premier <strong>hvac contractor in Noida</strong>, Adhunik Powertech specializes in high-capacity turnkey engineering contracts. We deliver custom climate and air systems for manufacturing facilities in Noida Phase-2, cleanroom plants in Greater Noida Ecotech, and high-density enterprise buildings along the Expressway.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our engineering scope integrates heavy-duty <strong>central air conditioning</strong> (chiller plants and VRF) with customized air management solutions—such as double-skin <strong>AHUs</strong>, <strong>ducted coolers</strong>, and <strong>air washers</strong>—to maintain precise indoor air quality (IAQ), positive room pressurization, and thermal stability.
            </p>
            
            <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-6">
              <div>
                <p className="text-2xl font-bold text-cyan-700">ISO / ISHRAE</p>
                <p className="text-sm text-slate-500">Standards-Compliant Project Delivery</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-700">100% Turnkey</p>
                <p className="text-sm text-slate-500">Ducting, Piping, Automation & Commissioning</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
              <Image
                src="/Noida HVAC Project.webp"
                alt="Turnkey industrial HVAC ducting and ventilation system installed by Adhunik Powertech in Noida facility"
                width={800}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-700/80 rounded-md mb-2">
                  Live Project Site Execution
                </span>
                <p className="text-base font-bold text-white">
                  Industrial High-Bay Ducting & Clean Air Distribution
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Engineered and commissioned by Adhunik Powertech Private Limited
                </p>
              </div>
            </div>

            <div className="mt-6 bg-slate-100 p-5 rounded-xl border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Key Noida Project Corridors
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="flex items-center">
                  <span className="text-cyan-600 font-bold mr-1.5">✔</span>
                  <span>Noida Phase-2 Industrial Area</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-600 font-bold mr-1.5">✔</span>
                  <span>Greater Noida Ecotech & Kasna</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-600 font-bold mr-1.5">✔</span>
                  <span>Sector 62 & 132/135 IT Parks</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-600 font-bold mr-1.5">✔</span>
                  <span>Pharma & Precision Cleanrooms</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Capabilities & Scope Grid */}
      <section id="capabilities" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Turnkey HVAC Systems & Engineering Capabilities
            </h2>
            <p className="text-slate-600 mt-4 text-base">
              From heavy central chillers to cleanrooms and evaporative cooling plants, explore our core project competencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {turnkeyCapabilities.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-cyan-600 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-xs font-semibold uppercase text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded mb-3 border border-cyan-100">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-xs font-medium text-slate-500">Turnkey EPC Execution</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Comparison: Central Chilled Water Plants vs Commercial VRF */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Central Air Conditioning (Central AC) vs. Commercial VRF Systems
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Selecting the optimal central cooling architecture for large-scale facilities in Noida.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-lg shadow-sm border border-slate-200">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-xs font-semibold uppercase text-slate-700 tracking-wider">
                <th className="p-4">Feature / Metric</th>
                <th className="p-4">Central Air Conditioning (Chiller + AHU)</th>
                <th className="p-4">Variable Refrigerant Flow (VRF / Central AC)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="p-4 font-semibold text-slate-900">{row.feature}</td>
                  <td className="p-4">{row.chiller}</td>
                  <td className="p-4">{row.vrf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Project AMC & Direct Contact Us Redirection CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Turnkey Air Conditioning System Service & Plant AMC
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Large commercial plants and industrial setups require dedicated engineering maintenance to prevent cooling degradation. Our certified technicians provide plant-level <strong>hvac service</strong> and turnkey preventive AMCs across Noida and Greater Noida.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              We manage comprehensive planned maintenance (PPM) for complete installations: central chillers, Air Handling Units (AHUs), industrial air washer pump banks, ducted evaporative cooling systems, and cleanroom pressure systems.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-slate-200">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></span>
                Descaling and tube cleaning of water-cooled and air-cooled condenser coils
              </div>
              <div className="flex items-center text-sm text-slate-200">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></span>
                Static pressure testing, HEPA filter integrity checks, and cleanroom air balancing
              </div>
              <div className="flex items-center text-sm text-slate-200">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></span>
                Dynamic balancing of AHU plug fan impellers and air washer blowers
              </div>
              <div className="flex items-center text-sm text-slate-200">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></span>
                Refrigerant circuit diagnostics, oil acid testing, and motor winding thermography
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 sm:p-10 rounded-2xl border border-slate-700 shadow-xl text-center flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 mb-5">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Discuss Your HVAC Project Tender & BOQ</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-8 max-w-md">
              Connect directly with our engineering estimation and design office to submit project blueprints, request technical site surveys, or receive custom turnkey BOQ quotes.
            </p>
            <Link
              href="/support-form"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg text-sm transition-all shadow-lg shadow-cyan-950"
            >
              Go to Contact Us Page
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Technical answers regarding our turnkey HVAC contracting, cleanrooms, AHUs, and central AC projects in Noida.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Silo Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        <h3 className="text-base font-semibold text-slate-800 mb-4">Related Turnkey Project Solutions:</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/central-air-conditioning-systems-in-delhi-ncr"
            className="text-xs bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded hover:border-cyan-600 hover:text-cyan-700 transition-colors"
          >
            Central Air Conditioning Systems Delhi NCR
          </Link>
          <Link
            href="/air-handling-unit"
            className="text-xs bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded hover:border-cyan-600 hover:text-cyan-700 transition-colors"
          >
            Double-Skin Air Handling Units (AHU)
          </Link>
          <Link
            href="/air-washer"
            className="text-xs bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded hover:border-cyan-600 hover:text-cyan-700 transition-colors"
          >
            Industrial Air Washers & Evaporative Systems
          </Link>
          <Link
            href="/turnkey-cleanroom-solutions"
            className="text-xs bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded hover:border-cyan-600 hover:text-cyan-700 transition-colors"
          >
            Cleanroom HVAC & IAQ Engineering
          </Link>
          <Link
            href="/ventilation-fans"
            className="text-xs bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded hover:border-cyan-600 hover:text-cyan-700 transition-colors"
          >
            Industrial Blowers & Ventilation
          </Link>
        </div>
      </section>
    </div>
  );
}