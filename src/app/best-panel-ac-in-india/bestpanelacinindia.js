"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  ShieldCheck, Thermometer, Wind, CheckCircle2,
  PhoneCall, Zap, Settings, ChevronRight, Mail, Factory,
  AlertTriangle, HelpCircle, Snowflake, Cpu, Activity, Info,
  Layout, Globe, Box, Gauge, Award, ArrowRight, ExternalLink,
  Check, X, Star, Trophy, Sliders, DollarSign, Wrench, ShieldAlert,
  Clock, Calculator
} from "lucide-react";

export default function BestPanelACInIndia() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("mounting");

  // TCO Savings Calculator
  const [vfdCost, setVfdCost] = useState(150000); // INR
  const [downtimePerHour, setDowntimePerHour] = useState(50000); // INR/hr
  const [calculatedSavings, setCalculatedSavings] = useState(null);

  const MAIN_PRODUCT_URL = "https://www.adhunikpowertech.com/panel-air-conditioners";
  const CNC_BLOG_URL = "/panel-ac-for-cnc-machines";
  const GEM_BLOG_URL = "/panel-air-conditioners-in-gem";
  const GEM_CATALOG_URL = "https://mkp.gem.gov.in/panel-air-conditioner/panel-air-conditioner/p-5116877-574145587-cat.html#variant_id=5116877-574145587";

  const calculateTCO = () => {
    // 1 failure prevented = 1 VFD replacement + average 4 hours production downtime
    const preventedOutageLoss = Number(vfdCost) + (Number(downtimePerHour) * 4);
    const avgAcUnitCost = 48000;
    const netReturn = preventedOutageLoss - avgAcUnitCost;
    const roiMonths = ((avgAcUnitCost / preventedOutageLoss) * 12).toFixed(1);

    setCalculatedSavings({
      lossPrevented: preventedOutageLoss.toLocaleString('en-IN'),
      netSavings: netReturn.toLocaleString('en-IN'),
      paybackPeriod: roiMonths
    });
  };

  const faqs = [
    {
      q: "Which is the best panel AC in India for harsh industrial environments?",
      a: "Adhunik Powertech is widely rated among the best industrial panel AC manufacturers in India due to its dedicated tropical design. While standard commercial units de-rate above 40°C, Adhunik systems operate continuously up to 55°C ambient with hermetic Emerson/Danfoss reciprocating compressors and IP54/IP55 dual-circuit sealed airflow."
    },
    {
      q: "How does Adhunik compare with international brands like Rittal or Schneider?",
      a: "Imported systems offer solid performance but come with steep CAPEX, 6 to 12-week lead times for proprietary parts, and expensive AMC contracts. Adhunik provides identical Tier-1 compressors, heavy-gauge CRCA/SS304 construction, and 24-48 hour service/spare availability across major industrial belts."
    },
    {
      q: "What capacity range should I look for in an enclosure air conditioner?",
      a: "Industrial panels require capacities matched to active electronics dissipation and solar/ambient wall gain. Adhunik covers small HMI consoles up to large substation suites from 250W (853 BTU/hr) to 7000W (23,890 BTU/hr) in Wall Mount, Roof Mount, and Stand-Alone configurations."
    },
    {
      q: "Can government bodies and PSUs procure Adhunik panel coolers directly?",
      a: "Yes. Adhunik Powertech is an authorized OEM on the Government e-Marketplace (GeM) under active catalog listing (Variant ID: 5116877-574145587), enabling GFR Rule 149 compliant direct purchase and custom BOQ tendering."
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. NEW EDITORIAL HERO: Split-Screen Scorecard Banner */}
        <section className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200 mb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold tracking-wide uppercase">
                <Trophy className="w-4 h-4 text-amber-600" /> 2026 Industrial Benchmark Report
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                Best Panel AC in India: <span className="text-cyan-700">Engineering Sizing & OEM Review</span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A technical assessment of industrial enclosure cooling for maintenance engineers, automation OEMs, and plant heads. Discover how Indian climate conditions impact compressor derating, IP integrity, and total cost of ownership.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={MAIN_PRODUCT_URL}
                  className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  View Adhunik Technical Specs <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={GEM_CATALOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-6 py-3.5 rounded-xl border border-slate-300 transition-all flex items-center gap-2"
                >
                  GeM Portal Catalog Listing <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Scorecard Quick Metric Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-700">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">Benchmark Rank #1</span>
                  <div className="text-lg font-black tracking-tight">Adhunik Powertech Industrial PAC</div>
                </div>
                <div className="flex items-center gap-1 bg-amber-400/20 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-black">
                  <Star className="w-3.5 h-3.5 fill-current" /> 9.8 / 10
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5"><Thermometer className="w-3.5 h-3.5 text-cyan-400" /> High Ambient Tolerance</span>
                  <span className="font-bold text-emerald-400">Up to 55°C Continuous</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Ingress Isolation</span>
                  <span className="font-bold text-white">Dual Circuit IP54 / IP55</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-cyan-400" /> Compressor Class</span>
                  <span className="font-bold text-white">Danfoss / Emerson Reciprocating</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5"><Gauge className="w-3.5 h-3.5 text-cyan-400" /> Cooling Span</span>
                  <span className="font-bold text-white">250W to 7000W</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-400 flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-cyan-400" /> Quality & Compliance</span>
                  <span className="font-bold text-white">ISO 9001 • CE • ZED • GeM OEM</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. THE 4 CRITICAL FAILURE PITFALLS (Diagnostic Grid) */}
        <section className="mb-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-black text-slate-900">
              Why Generic Cooling Systems Fail in Indian Manufacturing
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Before comparing manufacturers, understanding why ordinary panel cooling fails prevents repeating expensive maintenance mistakes:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                <Thermometer className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Summer Ambient Derating</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Many commercial-grade compressors de-rate at 40°C. When plant bays in Gujarat or NCR cross 46°C, high discharge pressure triggers compressor cutouts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Conductive Dust Infiltration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Exhaust fans pull in carbon particles and metallic swarf. This settles across VFD power cards, causing flashover shorts and board destruction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
                <Wind className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Oil Mist Insulation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                In machining workshops, aerosolized cutting fluids coat heatsink fins. The sticky layer blocks convective cooling, doubling thermal stress on IGBTs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Imported Spare Lead Times</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-national imported brands can require 8 to 14 weeks for replacement controllers or proprietary fans, holding production lines hostage.
              </p>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE TABBED SPECIFICATION EXPLORER */}
        <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 pb-6 mb-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Adhunik Architectural Configurations
              </h2>
              <p className="text-xs text-slate-500 mt-1">Select an architecture to inspect mechanical attributes and typical plant installations</p>
            </div>

            <div className="flex bg-slate-100 p-1.5 rounded-xl gap-1">
              {[
                { id: "mounting", label: "Mounting Layout" },
                { id: "compressor", label: "Refrigeration Duty" },
                { id: "protection", label: "Ingress & Casing" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeTab === tab.id
                      ? "bg-white text-cyan-800 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "mounting" && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-black text-cyan-700 uppercase">WMS Series</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Wall / Side Mount</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Mounts directly to enclosure doors or side cutouts. Air enters bottom and discharges cold air vertically upward across drive heat sinks.
                </p>
                <div className="text-[11px] font-mono text-slate-500 space-y-1">
                  <div>• Capacity: 250W to 7000W</div>
                  <div>• Airflow: 68 to 1,326 CMH</div>
                  <div>• Best for: Standalone VFD panels & CNCs</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-black text-cyan-700 uppercase">TMT Series</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Top / Roof Mount</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Preserves corridor walkway clearance in compact facilities. Chilled air is driven downward into busbars and distribution banks.
                </p>
                <div className="text-[11px] font-mono text-slate-500 space-y-1">
                  <div>• Capacity: 250W to 1500W</div>
                  <div>• Airflow: 68 to 238 CMH</div>
                  <div>• Best for: Narrow machine tool rows</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-black text-cyan-700 uppercase">SA Series</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Stand-Alone Floor Mount</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Heavy-duty external refrigeration center with flexible ducting for extensive modular control rooms and electrical shelters.
                </p>
                <div className="text-[11px] font-mono text-slate-500 space-y-1">
                  <div>• Capacity: 1000W to 7000W</div>
                  <div>• Airflow: 221 to 1,326 CMH</div>
                  <div>• Best for: Substation switchgear suites</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "compressor" && (
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4 text-xs text-slate-600">
                <h3 className="text-base font-bold text-slate-900">Why Emerson & Danfoss Reciprocating Compressors?</h3>
                <p className="leading-relaxed">
                  Unlike rotary compressors commonly adapted from domestic air conditioning, hermetically sealed reciprocating compressors are designed for the high-head pressure environments inherent in sealed electrical enclosures.
                </p>
                <ul className="space-y-2 list-disc ml-4 text-slate-700">
                  <li><strong>Zero ODP Refrigerant:</strong> Charged with pure R-134a, which maintains thermodynamic stability at elevated ambient temps without chemical breakdown.</li>
                  <li><strong>High-Pressure Safety Switch:</strong> Automatic reset safety cutouts prevent mechanical failure if condenser air intake is inadvertently obstructed.</li>
                  <li><strong>Microprocessor Cycling:</strong> Smart setpoint logic maintains ±1°C hysteresis, preventing unnecessary start-stop compressor cycling.</li>
                </ul>
              </div>
              <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-3 font-mono text-xs">
                <div className="text-cyan-400 font-bold">// Compressor Operating Parameters</div>
                <div className="text-slate-300">Refrigerant: R-134a (Eco-Friendly HFC)</div>
                <div className="text-slate-300">Evaporating Temp: +5°C to +12°C</div>
                <div className="text-slate-300">Condensing Temp: Up to +65°C</div>
                <div className="text-slate-300">Continuous Duty Cycle: 24 × 7 × 365</div>
                <div className="text-emerald-400">Status: 100% Factory Leak & Run Tested</div>
              </div>
            </div>
          )}

          {activeTab === "protection" && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 border border-slate-200 rounded-xl bg-white">
                <h4 className="font-bold text-sm text-slate-900 mb-1">CRCA Powder-Coated Steel</h4>
                <p className="text-xs text-slate-500 mb-3">RAL 7035 Textured Finish</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Standard 1.6mm heavy-gauge mild steel treated with a multi-stage phosphating and epoxy-polyester powder process for automotive and assembly lines.
                </p>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl bg-white">
                <h4 className="font-bold text-sm text-slate-900 mb-1">Stainless Steel Grade 304</h4>
                <p className="text-xs text-slate-500 mb-3">Food & Pharma Cleanrooms</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Corrosion-resistant sanitary grade brushed stainless steel built for washdown environments in food processing, packaging, and FMCG lines.
                </p>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl bg-white">
                <h4 className="font-bold text-sm text-slate-900 mb-1">Stainless Steel Grade 316</h4>
                <p className="text-xs text-slate-500 mb-3">Chemical & Coastal Belts</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Marine-grade molybdenum-alloyed casing designed for aggressive chemical environments, fertilizer plants, and coastal refineries.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* 4. TOTAL COST OF OWNERSHIP (TCO) & ROI CALCULATOR */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 shadow-xl mb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                <DollarSign className="w-4 h-4" /> Financial Decision Model
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Calculate the True Payback Period of a Dedicated Panel AC
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A single heat-related line shutdown typically exceeds the price of an entire cooling unit. Enter your facility metrics to estimate financial risk prevention:
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">Average Drive Replacement Cost (₹)</label>
                  <input
                    type="number"
                    value={vfdCost}
                    onChange={(e) => setVfdCost(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">Line Outage Loss per Hour (₹)</label>
                  <input
                    type="number"
                    value={downtimePerHour}
                    onChange={(e) => setDowntimePerHour(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <button
                onClick={calculateTCO}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl transition-all flex items-center gap-2"
              >
                <Calculator className="w-4 h-4" /> Compute Capital Payback
              </button>
            </div>

            <div className="lg:col-span-6 bg-slate-800/90 border border-slate-700 p-6 rounded-2xl">
              {calculatedSavings ? (
                <div className="space-y-4">
                  <div className="text-xs uppercase font-bold text-cyan-400 tracking-wider">Financial Risk Exposure Prevented</div>
                  <div className="text-3xl font-black text-white">₹{calculatedSavings.lossPrevented}</div>
                  <div className="text-xs text-slate-400">Estimated value saved by preventing 1 drive blowout and a 4-hour unscheduled production outage.</div>
                  
                  <div className="pt-4 border-t border-slate-700 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-bold">Estimated Payback</div>
                      <div className="text-lg font-black text-emerald-400">{calculatedSavings.paybackPeriod} Months</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-bold">Net Operational Return</div>
                      <div className="text-lg font-black text-white">₹{calculatedSavings.netSavings}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-slate-400 text-xs space-y-2">
                  <Clock className="w-8 h-8 mx-auto text-slate-500 mb-2" />
                  <p>Click &quot;Compute Capital Payback&quot; to view real-world savings against line stoppages.</p>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* 5. SECTOR-BY-SECTOR INDUSTRIAL APPLICATION SHOWCASE */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            Engineered Across Critical Industrial Verticals
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="text-xs font-black text-cyan-700 uppercase mb-2">Automotive & Machine Tool</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">CNC Centers & Robotic Cells</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Guards high-frequency spindle VFDs and servo drives against cutting coolant mist, synthetic lubricants, and metallic swarf.
              </p>
              <Link href={CNC_BLOG_URL} className="text-xs font-bold text-cyan-700 hover:underline flex items-center gap-1">
                Read CNC Panel AC Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="text-xs font-black text-cyan-700 uppercase mb-2">Government & Public Sector</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">PSUs, Defense & Railways</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Verified compliance with General Financial Rules (GFR 149) for automated e-bids, direct procurement, and customized technical BOQs.
              </p>
              <Link href={GEM_BLOG_URL} className="text-xs font-bold text-cyan-700 hover:underline flex items-center gap-1">
                Read GeM Procurement Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="text-xs font-black text-cyan-700 uppercase mb-2">Continuous Process Industry</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Steel, Cement & Chemical Plants</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Built to resist extreme radiant boiler temperatures, airborne limestone dust, and corrosive sulfur vapors with SS304/SS316 casing options.
              </p>
              <a href={MAIN_PRODUCT_URL} className="text-xs font-bold text-cyan-700 hover:underline flex items-center gap-1">
                Explore Heavy-Duty SA Series <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* 6. VERIFIED CLIENT LOGO MATRIX & REGIONAL COVERAGE */}
        <section className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-200 mb-16 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">21+ Years Industry Legacy</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Trusted in India&apos;s Dominant Manufacturing Hubs
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                From the automotive corridors of Manesar, Pune, and Sanand to steel and heavy engineering facilities in Odisha, Chhattisgarh, and Bengal, Adhunik delivers rapid field engineering and dispatch.
              </p>
              <div className="text-xs font-bold text-slate-700">
                Active in: Ahmedabad, Pune, Hyderabad, Chennai, Mumbai, Visakhapatnam, Kolkata, Jaipur, Faridabad, Bengaluru, Noida & Delhi NCR.
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Hero MotoCorp",
                  "Steel Authority of India (SAIL)",
                  "Uflex Limited",
                  "East India Petroleum (EIPL)",
                  "Nippon Steel Pipe India",
                  "BAAZ Bikes (Elec Torq)",
                  "TAK Technologies",
                  "Rise Automation",
                  "Triveni Renewables"
                ].map((name, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-slate-200 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    <span className="truncate">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. CONVERSION BANNER */}
        <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 text-white rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Request a Thermal Sizing Evaluation for Your Enclosures
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Eliminate guess-work. Share your cabinet dimensions, installed drive ratings, and plant ambient conditions for a free engineering heat load calculation and GA drawing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href="tel:8287885885"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Call +91 82878 85885
            </a>
            <Link
              href="/support-form"
              className="bg-transparent border border-slate-600 hover:border-cyan-400 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" /> Request Technical Quotation
            </Link>
          </div>
        </section>

        {/* 8. FAQ ACCORDION */}
        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-black text-slate-900 mb-8 text-center flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-700" /> Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left p-5 font-bold text-xs sm:text-sm text-slate-800 flex justify-between items-center transition-colors hover:bg-slate-50"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-4 h-4 text-cyan-700 transition-transform duration-200 shrink-0 ${openIndex === i ? 'rotate-90' : ''}`} />
                </button>
                {openIndex === i && (
                  <div className="p-5 text-xs text-slate-600 bg-slate-50/50 border-t border-slate-100 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}