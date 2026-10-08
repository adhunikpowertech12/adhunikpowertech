'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  FileText, 
  ChevronDown, 
  ShieldCheck, 
  Award
} from 'lucide-react';
import { hover } from 'framer-motion';

export default function TopHvacCompaniesClient() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const trackRecordStats = [
    { label: "Turnkey HVAC Projects", value: "600+" },
    { label: "Air Conditioning Projects", value: "250+" },
    { label: "Industrial Air Cooling", value: "200+" },
    { label: "Cleanroom & OT Projects", value: "100+" },
    { label: "Basement & Pressurization", value: "50+" }
  ];

  const companies = [
    {
      rank: "01",
      name: "Adhunik Powertech Private Limited",
      hq: "DCG1-0102, Tower-1, DLF Corporate Greens, Sector-74A, Gurugram, Haryana (122004)",
      specialization: "Turnkey HVAC EPC Contracting, Central Chiller Plants (Water/Air-Cooled), Cleanrooms & Hospital OTs, Industrial Air Washers, Ventilation, and In-House BMS Control Panels",
      bestFor: "Complete end-to-end Turnkey HVAC projects (Engineering, Procurement, Fabrication, Installation, and Commissioning) across Automotive, Pharmaceutical, Multi-Specialty Healthcare, Real Estate, and Industrial sectors nationwide",
      description: "Established in 2005 and backed by 21 years of engineering excellence, Adhunik Powertech Private Limited is India's premier turnkey HVAC contractor and project company. With a track record of delivering 600+ turnkey projects across India, Adhunik Powertech provides single-source accountability covering complete design, equipment selection, on-site ducting, piping, and testing. Executing every site strictly under NBC 2016, CPWD, NABH, ISHRAE, ASHRAE, and ISO guidelines, Adhunik pairs deep contracting expertise with in-house manufacturing of heavy-duty double-skin air washers, cleanroom AHUs, and CPRI-verified electrical automation panels.",
      highlights: [
        "21 years of industry leadership (Est. 2005) with 600+ turnkey HVAC projects completed nationwide",
        "Proven execution of high-value turnkey industrial orders: BKT Tires (₹32 Cr), AIS Glass (₹8 Cr), MK Hospital (₹5.8 Cr), and Suncity (₹4 Cr)",
        "Turnkey delivery across 250+ Air Conditioning plants, 200+ Air Cooling setups, 100+ Cleanrooms/OTs, and 50+ Basement Ventilation systems",
        "Strict compliance with NBC, CPWD, NABH hospital guidelines, ISHRAE, ASHRAE, and ISO standards with full FAT validation",
      ],
      isAdhunik: true,
      marqueeClients: "Maruti Suzuki, BKT Tires, Asahi India Glass (AIS), Johnson & Johnson, Whirlpool, Zomato, BigBasket, Suncity Projects, Brookfield, Abdos Labtech, Kajaria, Somany Ceramics, Saatvik Solar, Hero, Positron Hospital, SRHU Medical College"
    },
    {
      rank: "02",
      name: "Voltas Limited (A Tata Enterprise)",
      hq: "Mumbai, Maharashtra",
      specialization: "Central Air Conditioning, Turnkey MEP Contracting, Commercial Chillers, Variable Refrigerant Flow (VRF)",
      bestFor: "Large public infrastructure, international airports, commercial malls, and government MEP projects",
      description: "A stalwart in the Indian air conditioning industry, Voltas holds massive market share across commercial contracting and consumer split cooling. Their engineering arm executes major central cooling plants, water-cooled screw chillers, and turnkey HVAC infrastructure for commercial complexes.",
      highlights: [
        "Vast national distributor and after-sales maintenance presence",
        "Turnkey MEP capabilities for transit and government complexes",
        "High-efficiency centrifugal and vapor absorption chiller solutions"
      ],
      isAdhunik: false
    },
    {
      rank: "03",
      name: "Blue Star Limited",
      hq: "Mumbai, Maharashtra",
      specialization: "Centrifugal & Screw Chillers, Commercial VRF Systems, Cold Chain Logistics & Refrigeration",
      bestFor: "IT software parks, healthcare institutions, pharmaceutical cold chains, and hospitality",
      description: "Blue Star is recognized for extensive engineering research, commercial chiller plants, and specialized cold room facilities. Their HVAC range covers ductable splits, commercial VRF systems, and modular chiller setups tailored to corporate office campuses and hospital facilities.",
      highlights: [
        "Strong cold chain storage and deep refrigeration portfolio",
        "Wide array of inverter-driven VRF and screw chiller designs",
        "Extensive service network across Tier-1 and Tier-2 Indian cities"
      ],
      isAdhunik: false
    },
    {
      rank: "04",
      name: "Daikin Airconditioning India Private Limited",
      hq: "Gurugram, Haryana",
      specialization: "Variable Refrigerant Volume (VRV/VRF), Magnetic Bearing Chillers, Inverter Room ACs",
      bestFor: "Premium corporate headquarters, high-end residential villas, commercial retail chains, and hotels",
      description: "A pioneer of VRV cooling technology, Daikin operates major manufacturing plants in Neemrana (Rajasthan) and Sri City (Andhra Pradesh). Their systems deliver high Seasonal Energy Efficiency Ratio (ISEER) ratings, advanced Japanese inverter compressors, and low-noise air distribution.",
      highlights: [
        "Pioneering Variable Refrigerant Volume (VRV) engineering",
        "High energy efficiency with proprietary swing compressors",
        "Substantial domestic manufacturing footprint in Northern and Southern India"
      ],
      isAdhunik: false
    },
    {
      rank: "05",
      name: "Carrier Airconditioning & Refrigeration",
      hq: "Gurugram, Haryana",
      specialization: "Water-Cooled Centrifugal Chillers, Air-Cooled Screw Chillers, Air Handling Units",
      bestFor: "Data centers, educational campuses, industrial cleanrooms, and LEED/GRIHA green buildings",
      description: "Carrier provides high-tonnage chiller plants, energy recovery ventilation (ERV), and smart building analytics. Their products emphasize low global warming potential (GWP) refrigerants and tight thermal regulation for critical commercial infrastructure.",
      highlights: [
        "Advanced AquaEdge centrifugal chillers with low-GWP refrigerants",
        "Specialized solutions tailored for green building sustainability targets",
        "Dedicated air-handling and heat recovery ventilation units"
      ],
      isAdhunik: false
    },
    {
      rank: "06",
      name: "Johnson Controls - Hitachi Air Conditioning India",
      hq: "Ahmedabad, Gujarat",
      specialization: "Set-Free Commercial VRF, Ductable Air Conditioners, Building Management Systems",
      bestFor: "Commercial office towers, premium retail showrooms, and hospital complexes",
      description: "Formed through the joint venture between Johnson Controls and Hitachi, the company manufactures commercial ductable systems, VRF lineups, and chiller modules supported by Japanese engineering and intelligent building automation.",
      highlights: [
        "Set-Free modular commercial VRF systems",
        "Microprocessor-controlled central zone air distribution",
        "Extensive manufacturing facility in Kadi, Gujarat"
      ],
      isAdhunik: false
    },
    {
      rank: "07",
      name: "Trane Technologies India",
      hq: "Bengaluru, Karnataka",
      specialization: "High-Tonnage CenTraVac Chillers, Industrial Process Cooling, Thermal Energy Storage",
      bestFor: "Mission-critical data centers, process chemical manufacturing, and expansive tech parks",
      description: "Trane is known for robust, continuous-duty centrifugal chillers and precision industrial climate systems. Their equipment is engineered for continuous 24/7 uptime in demanding environments like data centers and process facilities.",
      highlights: [
        "Direct-drive low-pressure CenTraVac chillers with high reliability",
        "Advanced EcoWise portfolio for lower environmental footprint",
        "Precision cooling architectures for modern enterprise data halls"
      ],
      isAdhunik: false
    },
    {
      rank: "08",
      name: "Mitsubishi Electric India",
      hq: "Gurugram, Haryana",
      specialization: "City Multi VRF, Precision Air Conditioners (PAC), High-Static Ductable Systems",
      bestFor: "Server rooms, financial institutions, telecom hubs, and commercial offices",
      description: "Mitsubishi Electric produces durable commercial air systems featuring variable refrigerant flow and precision climate units. Their systems are widely deployed in server rooms and IT centers that require exact temperature and humidity control.",
      highlights: [
        "City Multi VRF systems equipped with independent zoning",
        "High reliability and low audible operational ratings",
        "Dedicated precision cooling solutions for computer rooms"
      ],
      isAdhunik: false
    },
    {
      rank: "09",
      name: "LG Electronics India",
      hq: "Greater Noida, Uttar Pradesh",
      specialization: "Multi V VRF Systems, Air-Cooled Inverter Scroll Chillers, Hydro Kits",
      bestFor: "Commercial complexes, higher education campuses, and institutional facilities",
      description: "LG combines consumer smart IoT ecosystems with commercial HVAC platforms through its Multi V line. Their inverter scroll chillers and heat recovery VRF units feature app-based energy telemetry and intelligent multi-zone scheduling.",
      highlights: [
        "Multi V VRF systems with smart sensor feedback",
        "Dual sensing control tracking temperature and relative humidity",
        "Strong domestic assembly and parts distribution footprint"
      ],
      isAdhunik: false
    },
    {
      rank: "10",
      name: "Zamil Air Conditioners India",
      hq: "Greater Noida, Uttar Pradesh",
      specialization: "Heavy-Duty Packaged Rooftop Units, Ducted Splits, Industrial Air Handlers",
      bestFor: "Industrial warehouses, logistics parks, telecom shelters, and manufacturing bays",
      description: "Zamil specializes in packaged rooftop air conditioners and ducted split equipment engineered for high external ambient temperatures. Their heavy-gauge steel enclosures are suited for rugged factory settings and logistics hubs.",
      highlights: [
        "Packaged rooftop units designed for external rooftop mounting",
        "Corrosion-resistant casing treatments for harsh factory atmospheres",
        "Customized telecom shelter and auxiliary room cooling cubicles"
      ],
      isAdhunik: false
    }
  ];

  const comparisonData = [
    { name: "Adhunik Powertech", strength: "Turnkey HVAC EPC & Contracting", focus: "Chiller Plants, Cleanrooms, Air Washers, BMS Panels", target: "Automotive, Pharma, Hospitals, Industrial Plants" },
    { name: "Voltas", strength: "Large Infrastructure MEP", focus: "Central Chillers, VRF, Consumer AC", target: "Airports, Malls, Government Infrastructure" },
    { name: "Blue Star", strength: "Chillers & Cold Chain", focus: "Screw/Centrifugal Chillers, Cold Rooms", target: "IT Parks, Hospitals, Food Cold Storage" },
    { name: "Daikin India", strength: "VRV & Inverter Tech", focus: "VRV/VRF Systems, High-Efficiency Splits", target: "Commercial Offices, Corporate HQs" },
    { name: "Carrier India", strength: "Green Building Chillers", focus: "Air/Water-Cooled Chillers, Airside Units", target: "Data Centers, LEED-Certified Campuses" },
    { name: "Hitachi", strength: "VRF & Smart Controls", focus: "Ductable ACs, Set-Free VRF Systems", target: "Retail Outlets, Hospitality, Commercial" },
    { name: "Trane India", strength: "High-Tonnage Plants", focus: "Industrial Process Chillers", target: "Heavy Industries, Tech Parks, Data Centers" },
    { name: "Mitsubishi Electric", strength: "Precision Server Cooling", focus: "PAC Server Units, City Multi VRF", target: "Server Rooms, High-Density IT Hubs" },
    { name: "LG Electronics", strength: "Smart Inverter VRF", focus: "Multi V VRF, Commercial Packaged", target: "Educational Campuses, Retail Chains" },
    { name: "Zamil India", strength: "Rooftop Packaged Units", focus: "Ducted & Packaged Air Conditioners", target: "Warehouses, Industrial Sheds, Shelters" }
  ];

  const faqs = [
    {
      q: "Why is Adhunik Powertech considered the #1 turnkey HVAC contractor in India?",
      a: "With 21 years of experience (established in 2005) and over 600+ delivered projects nationwide, Adhunik Powertech provides complete single-source turnkey HVAC accountability. Instead of acting merely as a trader or box-pusher, Adhunik manages end-to-end engineering, procurement, ducting, piping, commissioning, and in-house CPRI-tested electrical panel automation under NBC, CPWD, and NABH guidelines."
    },
    {
      q: "What marquee clients and major project values has Adhunik Powertech handled?",
      a: "Adhunik Powertech has completed mission-critical turnkey HVAC contracts for top industrial leaders, including BKT Tires (₹32 Cr order value), Asahi India Glass (₹8 Cr), MK Super Speciality Hospital (₹5.8 Cr), Suncity Parikrama (₹4 Cr), Jay Ushin (₹3 Cr), and Abdos Labtech (₹2.2 Cr), along with corporate deployments for Maruti Suzuki, Whirlpool, Johnson & Johnson, and Zomato."
    },
    {
      q: "What is the key difference between an HVAC manufacturer and a turnkey HVAC contractor?",
      a: "An equipment manufacturer only supplies isolated machines (like chillers or split VRF outdoor units), leaving thermal balancing, ductwork, piping, safety cutoffs, and electrical panels to uncoordinated third-party subcontractors. A turnkey contractor like Adhunik Powertech takes comprehensive EPC responsibility—from psychrometric load calculations and equipment installation to testing, commissioning (T&C), and regulatory handover."
    },
    {
      q: "Which company is recommended for hospital OTs and pharmaceutical cleanroom HVAC?",
      a: "Adhunik Powertech is a recognized specialist in cleanrooms and healthcare HVAC, having executed 100+ cleanroom and OT projects (including Positron Cancer Hospital, SRHU Medical College, Aarvy Hospital, and Sitaram Bhartia). They design precision air systems with laminar flow, pressure cascades, and HEPA filter banks strictly compliant with NABH standards."
    }
  ];

  return (
    <div className="bg-[#fcfdfd] text-gray-800 font-sans min-h-screen pt-12 selection:bg-cyan-600 selection:text-white">
      

      {/* 2. BLOG HEADER / HERO */}
      <header className="relative bg-gradient-to-b from-cyan-900/10 via-white to-white border-b border-gray-200 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-900 text-xs font-bold tracking-wide uppercase">
            <Award className="w-4 h-4 text-cyan-700" />
            2026 HVAC Industry Leaderboard
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.18]">
            Top 10 HVAC Companies in India (2026 Guide) <br />
            <span className="text-cyan-700">Turnkey EPC Contractors &amp; Industry Leaders</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            An in-depth engineering review of India&apos;s leading turnkey HVAC contractors and equipment manufacturers across central chillers, cleanrooms, industrial air washers, and automated BMS systems.
          </p>
        </div>
      </header>

      {/* 3. INTRODUCTION SECTION */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4 text-justify">
          <p>
            India&apos;s commercial infrastructure and industrial manufacturing ecosystem demand robust, highly coordinated climate control systems. From pharmaceutical cleanrooms and automotive assembly plants to multi-specialty hospitals and commercial office parks, project stakeholders require HVAC partners capable of delivering both specialized equipment and complete <strong>turnkey EPC contracting (Engineering, Procurement, and Construction)</strong>.
          </p>
          <p>
            While consumer brands prioritize standard residential split units, commercial developers and industrial plant heads look for single-source accountability: partners who execute comprehensive chilled water piping, ducting networks, fire-smoke pressurization blowers, cleanroom validation, and CPRI-verified electrical switchgear.
          </p>
          <p>
            Here is the definitive evaluation of the top 10 HVAC companies operating in India, ranking their turnkey contracting capabilities, technical specializations, manufacturing infrastructure, and proven project track records.
          </p>
        </div>


        {/* 4. COMPANY PROFILES LISTING */}
        <div className="space-y-10">
          {companies.map((co, index) => (
            <div 
              key={index}
              className={`rounded-2xl border transition-all duration-300 p-6 sm:p-8 ${
                co.isAdhunik 
                  ? 'bg-gradient-to-br from-cyan-50/40 via-white to-white border-cyan-500 shadow-xl ring-2 ring-cyan-500/30' 
                  : 'bg-white border-gray-200 shadow-sm hover:border-gray-300'
              }`}
            >
              {/* Header with Logo for Adhunik */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                <div className="flex items-start sm:items-center gap-4">
                  <span className={`text-xl sm:text-2xl font-black font-mono px-3.5 py-1.5 rounded-xl ${
                    co.isAdhunik ? 'bg-cyan-800 text-white shadow' : 'bg-gray-100 text-gray-700'
                  }`}>
                    #{co.rank}
                  </span>
                  
                  <div>
                    {co.isAdhunik ? (
                      <div className="flex flex-col gap-1.5">
                        {/* Official Adhunik Powertech Logo Display */}
                        <div className="relative w-56 h-12">
                          <Image
                            src="/we.svg"
                            alt="Adhunik Powertech - Top HVAC Project Company in India"
                            fill
                            priority
                            className="object-contain object-left"
                          />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                          {co.name}
                        </h2>
                      </div>
                    ) : (
                      <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                        {co.name}
                      </h2>
                    )}
                    <span className="text-xs text-gray-500 font-medium flex items-center gap-1.5 mt-1">
                      <Building2 className="w-3.5 h-3.5 text-cyan-700" />
                      Headquarters: {co.hq}
                    </span>
                  </div>
                </div>

                {co.isAdhunik && (
                  <span className="self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-bold uppercase tracking-wider">
                    #1 Turnkey HVAC Contractor in India
                  </span>
                )}
              </div>

              {/* Description Body */}
              <div className="mt-5 space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <div>
                  <strong className="text-gray-900">Core Specialization:</strong> {co.specialization}
                </div>
                <div>
                  <strong className="text-gray-900">Best Suited For:</strong> {co.bestFor}
                </div>
                <p className="text-justify pt-1 text-gray-600">
                  {co.description}
                </p>
              </div>

              {/* Highlights Bullet Grid */}
              <div className="mt-5 pt-4 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  Key Technical &amp; Operational Highlights:
                </span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-gray-700">
                  {co.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Marquee Clients Box for Adhunik */}
              {co.isAdhunik && (
                <div className="mt-5 p-4 rounded-xl bg-cyan-50/70 border border-cyan-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-900 block mb-1">
                    Major Turnkey Client Deployments (Authority &amp; Trust):
                  </span>
                  <p className="text-xs text-gray-800 font-medium leading-relaxed">
                    {co.marqueeClients}
                  </p>
                </div>
              )}

              {/* Action Buttons for Adhunik */}
              {co.isAdhunik && (
                <div className="mt-6 pt-4 border-t border-cyan-100 flex flex-wrap items-center gap-3">
                  <Link
                    href="/hvac"
                    className="px-5 py-2.5 rounded-lg bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs transition flex items-center gap-1.5 shadow"
                  >
                    View HVAC Portfolio <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/turnkey-cleanroom-solutions"
                    className="px-5 py-2.5 rounded-lg border border-cyan-300 hover:bg-cyan-50 text-cyan-900 font-bold text-xs transition"
                  >
                    Cleanroom Solutions
                  </Link>
                  <Link
                    href="/our-client"
                    className="px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold text-xs transition"
                  >
                    View Client List
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 5. COMPARISON MATRIX TABLE */}
        <section className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-1">
              Quick Reference Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Top 10 HVAC Companies in India: Technical Comparison
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Evaluating core strengths, focus products, and ideal project scale across all 10 manufacturers and turnkey contractors.
            </p>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white">
            <table className="w-full text-xs text-left text-gray-700 border-collapse">
              <thead className="text-[11px] text-white uppercase bg-cyan-800">
                <tr>
                  <th className="py-3.5 px-4 font-bold">Company</th>
                  <th className="py-3.5 px-4 font-bold">Core Specialization</th>
                  <th className="py-3.5 px-4 font-bold">Primary Product Focus</th>
                  <th className="py-3.5 px-4 font-bold">Best-Fit Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx === 0 ? "bg-cyan-50/70 font-semibold text-cyan-950" : "hover:bg-gray-50/70"}>
                    <td className="py-3.5 px-4 font-bold text-gray-900 whitespace-nowrap">
                      {row.name}
                    </td>
                    <td className="py-3.5 px-4">{row.strength}</td>
                    <td className="py-3.5 px-4">{row.focus}</td>
                    <td className="py-3.5 px-4">{row.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. EXTENDED AUTHORITY SECTION: ADHUNIK POWERTECH TURNKEY PORTFOLIO OVERVIEW */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-cyan-700" />
              21 Years of Engineering Excellence (Established 2005)
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Adhunik Powertech: A Complete Turnkey HVAC Contracting Overview
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify sm:text-center">
              With over two decades of technical rigor based in DLF Corporate Greens, Gurugram, Adhunik Powertech Private Limited has built a stellar reputation as a reliable, multi-disciplinary HVAC contracting company. Below is an overview of the core specialized verticals that form their 600+ project delivery portfolio:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:border-cyan-400 transition">
              <div className="text-2xl font-black text-cyan-800 font-mono mb-1">250+</div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">Air Conditioning Projects</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Turnkey chilled water systems, VRV/VRF setups, primary-secondary pumping loops, and central cooling plants up to 630+ TR for corporate towers and manufacturing complexes.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:border-cyan-400 transition">
              <div className="text-2xl font-black text-cyan-800 font-mono mb-1">200+</div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">Air Cooling Projects</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                High-CFM double-skin and single-skin evaporative air washers, industrial ventilation duct networks, and moisture-controlled plant cooling for automobile and glass plants.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:border-cyan-400 transition">
              <div className="text-2xl font-black text-cyan-800 font-mono mb-1">100+</div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">Clean Room &amp; OT Projects</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Precision cleanrooms, hospital Operation Theatres (OTs), and sterile labs with HEPA filtration and pressure cascading under strict NABH and ISO guidelines.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:border-cyan-400 transition">
              <div className="text-2xl font-black text-cyan-800 font-mono mb-1">50+</div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">Basement &amp; Lift Pressurization</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                CO-sensor automated basement jet fan ventilation, smoke extract systems, and staircase/lift-well pressurization blowers conforming strictly to NBC 2016 Part 4.
              </p>
            </div>
          </div>

          {/* Verified Completion Certificates Callout */}
          <div className="mt-8 bg-cyan-50/70 border border-cyan-200/80 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-bold text-cyan-950 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-700" />
              Verified Industry Trust: Project Completion Certificates
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify mb-4">
              Adhunik Powertech&apos;s credentials are substantiated by formal completion certificates from industry leaders. Notable completed contracts include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <strong className="text-gray-900 block">BKT Tires (Bhuj, Gujarat)</strong>
                <span className="text-gray-600">Chiller, AHU &amp; BMS (₹32 Cr)</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <strong className="text-gray-900 block">AIS Glass (Bawal, Haryana)</strong>
                <span className="text-gray-600">Air Cooling with Air Washers (₹8 Cr)</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <strong className="text-gray-900 block">MK Super Speciality Hospital</strong>
                <span className="text-gray-600">Central Chiller &amp; AHU (₹5.8 Cr)</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <strong className="text-gray-900 block">Suncity Parikrama (Panchkula)</strong>
                <span className="text-gray-600">Basement Jet Fan Ventilation (₹4 Cr)</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <strong className="text-gray-900 block">Jay Ushin (Gurugram)</strong>
                <span className="text-gray-600">VRF &amp; Ventilation Plant (₹3 Cr)</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <strong className="text-gray-900 block">Abdos Labtech (Roorkee)</strong>
                <span className="text-gray-600">Cleanroom with VRV &amp; AHU (₹2.2 Cr)</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CONSULTANT / RFQ ACTION BANNER */}
        <section className="mt-16 bg-gradient-to-r from-gray-900 via-cyan-950 to-gray-900 rounded-2xl p-5 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              Turnkey Contracting Desk
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Planning a Turnkey HVAC, Cleanroom, or Chiller Project?
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100 leading-relaxed">
              Submit your architectural drawings, heat load schedules, or tender BOQ directly to Adhunik Powertech. Our engineering team prepares complete psychrometric designs, duct layouts, and transparent commercial offers.
            </p>
          </div>

          <div className="flex-row sm:flex-row items-center gap-3 w-full sm:auto flex flex-wrap justify-center md:justify-end">
            <a
              href="tel:8287885885"
              className="w-full sm:auto px-6 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow"
            >
              <PhoneCall className="w-4 h-8 " />
              8287-885-885
            </a>
            <Link
              href="/support-form"
              className="w-full sm:auto px-6 py-3.5 rounded-xl border border-gray-600 hover:border-gray-400 text-gray-200 hover:text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow"
            >
              <FileText className="w-4 h-4" />
              Request EPC Quote
            </Link>
          </div>
        </section>

        {/* 8. FREQUENTLY ASKED QUESTIONS */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Frequently Asked Questions About HVAC Selection &amp; Turnkey Contracting
            </h2>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center text-xs sm:text-sm font-bold text-gray-800 hover:text-cyan-800 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180 text-cyan-700' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 text-justify">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </article>

    </div>
  );
}