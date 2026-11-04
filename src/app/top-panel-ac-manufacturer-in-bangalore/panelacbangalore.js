"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  PhoneCall, Mail, ShieldCheck, CheckCircle2, ChevronRight,
  ArrowRight, Download, Truck, Wrench, Factory, Star,
  HelpCircle, Snowflake, Cpu, Gauge, Zap, Check, FileText,
  Thermometer, Award
} from 'lucide-react';

export default function PanelACBangalore() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [rfqModel, setRfqModel] = useState("WMS-0015 (1500W)");

  const REAL_PRODUCT_IMAGE = "/panel_ac upper image.webp";
  const MAIN_PRODUCT_URL = "https://www.adhunikpowertech.com/panel-air-conditioners";
  const SUPPORT_URL = "/support-form";

  const products = [
    {
      id: "wms-025",
      model: "WMS-025",
      title: "Compact 250W HMI & Servo Cooler",
      category: "compact",
      capacityWatts: "250 Watts",
      btu: "853 BTU/hr",
      coolingType: "Door / Pendant Mount",
      compressor: "Hermetic Reciprocating",
      idealFor: "Operator HMI Consoles, Compact Servo Drives, Small PLC Cabinets",
      specs: { dimensions: "285 × 285 × 570 mm", current: "2.2 A", airflow: "68 CMH" },
      inStock: true
    },
    {
      id: "wms-0010",
      model: "WMS-0010",
      title: "Standard 1000W CNC Turning Panel Cooler",
      category: "standard",
      capacityWatts: "1000 Watts",
      btu: "3,412 BTU/hr",
      coolingType: "Side / Door Mount",
      compressor: "Danfoss / Emerson Reciprocating",
      idealFor: "CNC Lathes, Turning Centers, Laser Cutting Auxiliary Units",
      specs: { dimensions: "285 × 300 × 785 mm", current: "3.5 A", airflow: "221 CMH" },
      inStock: true
    },
    {
      id: "wms-0015",
      model: "WMS-0015",
      title: "Industrial 1500W VMC & Drive Cooler",
      category: "standard",
      capacityWatts: "1500 Watts",
      btu: "5,119 BTU/hr",
      coolingType: "Side / Door Mount",
      compressor: "Danfoss / Emerson Reciprocating",
      idealFor: "Multi-Axis VMCs, Horizontal Machining Centers, SMT Electronic Line Racks",
      specs: { dimensions: "285 × 310 × 785 mm", current: "4.2 A", airflow: "238 CMH" },
      inStock: true
    },
    {
      id: "wms-0020",
      model: "WMS-0020",
      title: "2000W Robotic Cell & Auto Press AC",
      category: "standard",
      capacityWatts: "2000 Watts",
      btu: "6,825 BTU/hr",
      coolingType: "Side / Door Mount",
      compressor: "High-Ambient Tropicalized",
      idealFor: "Automotive Stamping Presses, Spot Welding Robotics, Inverter Banks",
      specs: { dimensions: "275 × 400 × 800 mm", current: "4.5 A", airflow: "320 CMH" },
      inStock: true
    },
    {
      id: "wms-0030",
      model: "WMS-0030",
      title: "3000W Main MCC & Power Drive Cooler",
      category: "heavy",
      capacityWatts: "3000 Watts",
      btu: "10,238 BTU/hr",
      coolingType: "Side / Door Mount",
      compressor: "Continuous Heavy Industrial",
      idealFor: "Main Motor Control Centers (MCC), Double-Door Drive Suites, Large Power Distribution",
      specs: { dimensions: "270 × 400 × 1400 mm", current: "6.5 A", airflow: "544 CMH" },
      inStock: true
    },
    {
      id: "wms-0070",
      model: "WMS-0070",
      title: "7000W Heavy VFD Suite & Multi-Bay Cooler",
      category: "heavy",
      capacityWatts: "7000 Watts",
      btu: "23,890 BTU/hr",
      coolingType: "Stand-Alone / High-Volume Side Mount",
      compressor: "Heavy Dual Reciprocating",
      idealFor: "Multi-Bay Automation Suites, Heavy Extrusion Lines, Central Plant Drive Bays",
      specs: { dimensions: "425 × 550 × 1570 mm", current: "12.0 A", airflow: "1326 CMH" },
      inStock: true
    }
  ];

  const bangaloreZones = [
    {
      name: "Peenya Industrial Area",
      tagline: "Asia's Largest Machine Tool & Fabrication Hub",
      leadTime: "24-48 Hour Express Delivery",
      commonApps: "Precision CNC Milling, VMC Spindle Drives, Precision Aerospace Machining",
      areas: "Peenya Stages 1–4, Jalahalli, Yeshwanthpur Industrial Belt"
    },
    {
      name: "Bommasandra & Electronic City",
      tagline: "Electronics Hardware, SMT & Automotive Corridor",
      leadTime: "24-48 Hour Direct Transit",
      commonApps: "Surface Mount Technology (SMT), Cleanroom Controls, EV Battery Assembly",
      areas: "Bommasandra Industrial Area Phases 1–4, Jigani, Attibele, Electronic City"
    },
    {
      name: "Bidadi & Harohalli",
      tagline: "Automotive OEMs & Heavy Component Clusters",
      leadTime: "Scheduled Direct Plant Dispatch",
      commonApps: "Automotive Stamping Presses, Spot Welding Controls, Central Motor Panels",
      areas: "Bidadi Industrial Area Phases 1 & 2, Harohalli Industrial Belt"
    },
    {
      name: "Whitefield & Hoskote",
      tagline: "Precision Engineering, Aerospace & Heavy Commercial",
      leadTime: "24-48 Hour Delivery",
      commonApps: "Aerospace Tooling Enclosures, Laser Cutting Power Packs, Clean Tech Racks",
      areas: "EPIP Zone Whitefield, Hoskote Industrial Area, Malur Belt"
    }
  ];

  const faqs = [
    {
      q: "Who is the top panel AC manufacturer supplying Bengaluru factories?",
      a: "Adhunik Powertech Private Limited is recognized as a premier industrial panel air conditioner manufacturer supplying factories across Bengaluru and South India. With over 21 years of manufacturing engineering experience, Adhunik produces heavy-duty enclosure coolers from 250W to 7000W featuring IP55 closed-loop dual-air isolation, Danfoss/Emerson reciprocating compressors, and field-tested reliability up to 55°C ambient temperatures across Peenya, Bommasandra, Bidadi, and Whitefield."
    },
    {
      q: "Why do CNC machine tool builders in Peenya require closed-loop panel ACs?",
      a: "Machine tool shops in Peenya face airborne cutting oil aerosols, fine metallic swarf, and internal heat loads from high-RPM spindle drives. Standard filter fans suck this conductive mist into the cabinet, leading to short circuits and thermal drift on VFD cards. Adhunik closed-loop panel air conditioners ensure 100% airtight IP55 isolation, recirculating clean, dry air internally at 30°C–35°C without drawing in shop-floor air."
    },
    {
      q: "How fast can you supply panel air conditioners to Bengaluru and South India industrial hubs?",
      a: "We maintain ready factory stock for all standard ratings (250W, 1000W, 1500W, 2000W, and 3000W). Orders for Bengaluru (Peenya, Bommasandra), Hosur, and Chennai are dispatched via priority express logistics within 24 to 48 hours, supported by comprehensive warranty and technical guidance."
    },
    {
      q: "Can aerospace, defense PSUs, and R&D labs in Karnataka procure on GeM?",
      a: "Yes. Adhunik Powertech is an authorized OEM on the Government e-Marketplace (GeM) with active registered product listings (Variant ID: 5116877-574145587), allowing defense establishments, aerospace suppliers, and PSU units across Bengaluru to procure directly with GFR Rule 149 compliance."
    },
    {
      q: "Do you supply Top/Roof-mount (TMT series) panel coolers for narrow machine aisles?",
      a: "Yes. For tight machine tool aisles and space-constrained shop floors common in Peenya, we manufacture top-mounting TMT Series panel coolers that preserve lateral walkway clearances while providing top-down chilled airflow through the cabinet."
    }
  ];

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white text-slate-800 font-sans antialiased">

      {/* 1. HERO SECTION WITH REAL PRODUCT PHOTOGRAPH */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Commercial Sales Pitch */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-cyan-600 text-cyan-600" />
                <span>OEM Manufacturer • Bengaluru & South India Supply</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Top Panel AC Manufacturer in <span className="text-cyan-700">Bangalore</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Protect your CNC machines, precision VMCs, SMT lines, and robotic automation panels from thermal drift and electrical breakdowns. Adhunik Powertech manufactures heavy-duty industrial panel air conditioners (<strong>250W to 7000W</strong>) engineered for continuous operation up to <strong>55°C ambient temperatures</strong> across Peenya, Bommasandra, Bidadi, and Whitefield.
              </p>

              {/* Commercial Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="border border-slate-200 rounded-xl p-3 bg-white shadow-xs">
                  <div className="text-lg font-black text-cyan-700">250W–7KW</div>
                  <div className="text-xs text-slate-500 font-medium">Cooling Capacity</div>
                </div>
                <div className="border border-slate-200 rounded-xl p-3 bg-white shadow-xs">
                  <div className="text-lg font-black text-emerald-600">Up to 55°C</div>
                  <div className="text-xs text-slate-500 font-medium">Ambient Duty</div>
                </div>
                <div className="border border-slate-200 rounded-xl p-3 bg-white shadow-xs">
                  <div className="text-lg font-black text-slate-900">IP55 Sealed</div>
                  <div className="text-xs text-slate-500 font-medium">Closed-Loop Dual Air</div>
                </div>
                <div className="border border-slate-200 rounded-xl p-3 bg-white shadow-xs">
                  <div className="text-lg font-black text-slate-900">24–48 Hrs</div>
                  <div className="text-xs text-slate-500 font-medium">Bengaluru Transit</div>
                </div>
              </div>

              {/* Primary Call to Actions */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#catalog"
                  className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  View Product Catalog <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:8287885885"
                  className="bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm px-6 py-3.5 rounded-xl border border-slate-300 shadow-xs transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-cyan-700" /> +91 82878 85885
                </a>
              </div>
            </div>

            {/* Right Column: Real Product Visual Showcase */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700 relative overflow-hidden flex flex-col items-center">
              
              <div className="w-full flex items-center justify-between border-b border-slate-700/80 pb-3 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">Manufactured by Adhunik Powertech</span>
                  <h3 className="text-base font-bold text-white">Wall Mount Panel AC 3000W</h3>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold">
                  CE Certified
                </span>
              </div>

              {/* Product Photo Container */}
              <div className="relative w-full max-w-[280px] h-[380px] flex items-center justify-center bg-black/40 rounded-2xl p-4 border border-slate-700/60 shadow-inner">
                <Image
                  src={REAL_PRODUCT_IMAGE}
                  alt="Adhunik 3000 Watt Industrial Enclosure Panel Air Conditioner"
                  width={240}
                  height={360}
                  className="object-contain h-full w-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                  priority
                />
              </div>

              {/* Feature Badges */}
              <div className="w-full grid grid-cols-2 gap-2 mt-6 text-[11px] font-medium text-slate-300">
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/80 border border-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>RAL 7035 Powder Coat</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/80 border border-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Digital LED Thermostat</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/80 border border-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Washable Filter Screen</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/80 border border-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Danfoss / Emerson Compr.</span>
                </div>
              </div>

              <div className="w-full mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Model: WMS-0030</span>
                <Link href={SUPPORT_URL} className="text-cyan-400 font-bold hover:underline flex items-center gap-1">
                  Request Cutout Drawing <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION: BUILT FOR SOUTH INDIA PRECISION & MACHINE TOOLS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">Zero Line Downtime</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Why Leading Machine Tool Builders & Electronic Plants in Bangalore Trust Adhunik Powertech
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From heavy machine tool cutting in Peenya to high-density SMT lines in Bommasandra, our panel air conditioners eliminate thermal drift and protect sensitive servo drives.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 hover:border-cyan-400 hover:bg-white transition-all shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">55°C Ambient Tested</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tropicalized design with heavy-duty Danfoss/Emerson reciprocating compressors. Runs continuously even during severe factory heat loads without high-pressure tripping.
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 hover:border-cyan-400 hover:bg-white transition-all shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">100% Sealed Dual-Air Loop</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hermetic IP55 isolation ensures shop-floor airborne cutting fluid aerosol, synthetic coolants, and conductive metallic swarf cannot enter the sensitive drive enclosure.
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 hover:border-cyan-400 hover:bg-white transition-all shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Digital Temperature Control</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Microprocessor-based digital LED thermostat with automatic compressor cycling and fault alarm relays. Maintains internal temperatures steadily at 30°C–35°C.
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 hover:border-cyan-400 hover:bg-white transition-all shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Express South India Transit</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ready factory inventory for standard ratings (250W to 3000W). Dedicated logistics servicing Bengaluru, Hosur, Chennai, Coimbatore, and Hyderabad.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PRODUCT CATALOG */}
      <section id="catalog" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">Commercial Catalog</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Standard Industrial Panel Air Conditioners
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Direct OEM supply with complete 2D/3D CAD cutout drawings and technical datasheets:
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-xl border border-slate-200 text-xs font-bold">
              {[
                { id: "all", label: "All Capacities" },
                { id: "compact", label: "HMI & Small (250W)" },
                { id: "standard", label: "CNC Standard (1KW–2KW)" },
                { id: "heavy", label: "Multi-Bay Drive Suites (3KW–7KW)" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-2 rounded-lg transition-all ${
                    activeCategory === tab.id
                      ? "bg-cyan-700 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <div 
                key={p.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-cyan-400 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200">
                      {p.model}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      In Stock
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                  <div className="text-sm font-black text-cyan-700 mt-0.5">{p.capacityWatts} ({p.btu})</div>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    <strong>Recommended Application:</strong> {p.idealFor}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Dimensions (D×W×H):</span>
                      <span className="font-semibold text-slate-800 font-mono">{p.specs.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Current Rating (FLA):</span>
                      <span className="font-semibold text-slate-800">{p.specs.current}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Internal Airflow:</span>
                      <span className="font-semibold text-slate-800">{p.specs.airflow}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Compressor Make:</span>
                      <span className="font-semibold text-slate-800">{p.compressor}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href={SUPPORT_URL}
                    className="flex-1 bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-bold py-2.5 rounded-xl text-center shadow-xs transition-all"
                  >
                    Get Quotation
                  </Link>
                  <a
                    href={MAIN_PRODUCT_URL}
                    className="p-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl transition-all"
                    title="Download Drawings"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BENGALURU & SOUTH INDUSTRIAL DELIVERY HUBS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">South India Supply Footprint</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Direct Supply & Service Across Bengaluru & Neighboring Belts
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Rapid equipment delivery, spare parts availability, and technical service support across key industrial corridors:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bangaloreZones.map((zone, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 hover:bg-white hover:border-cyan-300 transition-all shadow-xs">
                <span className="text-[11px] font-bold text-cyan-700 uppercase tracking-wide">{zone.leadTime}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">{zone.name}</h3>
                <div className="text-xs text-slate-500 font-medium mb-3">{zone.tagline}</div>

                <div className="space-y-2 text-xs text-slate-600 border-t border-slate-200 pt-3">
                  <div>
                    <strong className="text-slate-800 block mb-0.5">Key Applications:</strong>
                    {zone.commonApps}
                  </div>
                  <div>
                    <strong className="text-slate-800 block mb-0.5">Areas Covered:</strong>
                    {zone.areas}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. COMMERCIAL SPECIFICATION COMPARISON */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">Buying Guide</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              How Adhunik Compares to Imported Brands & Local Assemblers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              A transparent comparison to assist factory plant heads and procurement managers in evaluating continuous reliability:
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left">
              <thead className="bg-slate-100 text-slate-800 uppercase text-xs">
                <tr>
                  <th className="p-4 border-b">Performance Criteria</th>
                  <th className="p-4 border-b text-cyan-800 font-extrabold bg-cyan-50/70">Adhunik Powertech OEM</th>
                  <th className="p-4 border-b">Imported European Brands</th>
                  <th className="p-4 border-b">Local Unorganized Assemblers</th>
                </tr>
              </thead>
              <tbody className="text-xs text-slate-700 divide-y divide-slate-200">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Maximum Operating Ambient</td>
                  <td className="p-4 font-bold text-emerald-700 bg-cyan-50/30">
                    Continuous 55°C (Tropicalized Indian Rated)
                  </td>
                  <td className="p-4 text-slate-700">50°C to 55°C</td>
                  <td className="p-4 text-rose-600 font-medium">De-rates / Trips above 40°C</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Compressor Technology</td>
                  <td className="p-4 font-bold text-slate-900 bg-cyan-50/30">
                    Danfoss / Emerson Hermetic Reciprocating
                  </td>
                  <td className="p-4 text-slate-700">Proprietary Reciprocating</td>
                  <td className="p-4 text-rose-600 font-medium">Refurbished / Comfort Rotary AC Compressors</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Delivery Lead Time</td>
                  <td className="p-4 font-bold text-emerald-700 bg-cyan-50/30">
                    24 to 48 Hours Direct Transit
                  </td>
                  <td className="p-4 text-amber-700">6 to 12 Weeks Imported</td>
                  <td className="p-4 text-slate-600">1 to 2 Weeks (Inconsistent)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Enclosure Protection</td>
                  <td className="p-4 font-bold text-slate-900 bg-cyan-50/30">
                    100% Sealed Closed-Loop IP55 Dual-Air Loop
                  </td>
                  <td className="p-4 text-slate-700">IP54 / IP55 Standard</td>
                  <td className="p-4 text-rose-600 font-medium">Poor Gasketing / Air Leaks</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">GeM Portal Availability</td>
                  <td className="p-4 font-bold text-emerald-700 bg-cyan-50/30">
                    Authorized OEM on GeM (GFR Rule 149 Compliant)
                  </td>
                  <td className="p-4 text-slate-700">Through Resellers</td>
                  <td className="p-4 text-rose-600 font-medium">Not Available</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 6. HIGH-CONVERSION CTA */}
      <section className="py-16 bg-cyan-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need Help Selecting the Right Capacity for Your Machine in Bangalore?
            </h2>
            <p className="text-cyan-100 text-sm leading-relaxed">
              Our application engineers provide free heat-load calculations and door cutout drawings for CNC machines, robotics, and SMT panels across South India.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="tel:8287885885"
              className="bg-white hover:bg-slate-100 text-cyan-900 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-cyan-700" /> Call +91 82878 85885
            </a>
            <Link
              href={SUPPORT_URL}
              className="bg-cyan-900 hover:bg-cyan-950 text-white font-bold text-sm px-6 py-3.5 rounded-xl border border-cyan-700 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Request Sizing Visit
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h3 className="text-2xl font-extrabold text-slate-900 mb-8 text-center flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-700" /> Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-2xs">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-5 font-bold text-sm text-slate-900 flex justify-between items-center transition-colors hover:bg-slate-50"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-4 h-4 text-cyan-700 transition-transform duration-200 shrink-0 ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-5 text-xs sm:text-sm text-slate-600 bg-slate-50 border-t border-slate-100 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}