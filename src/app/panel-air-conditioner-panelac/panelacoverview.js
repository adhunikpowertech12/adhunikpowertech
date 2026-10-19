"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  ShieldCheck, Thermometer, Wind, CheckCircle2,
  PhoneCall, Zap, Settings, ChevronRight, Mail, Factory,
  AlertTriangle, HelpCircle, Snowflake, Cpu, Activity, Info,
  Layout, Globe, Box, Gauge, Award, ArrowRight, ExternalLink,
  Layers, Calculator, RotateCcw
} from "lucide-react";

export default function PanelACOverview() {
  const [openIndex, setOpenIndex] = useState(null);

  // Heat Load Calculator State
  const [material, setMaterial] = useState("steel");
  const [height, setHeight] = useState(2000); // mm
  const [width, setWidth] = useState(1000);   // mm
  const [depth, setDepth] = useState(600);    // mm
  const [internalHeat, setInternalHeat] = useState(800); // Watts
  const [ambientTemp, setAmbientTemp] = useState(45);    // °C
  const [targetTemp, setTargetTemp] = useState(35);      // °C
  const [calcResult, setCalcResult] = useState(null);

  const MAIN_PRODUCT_URL = "https://www.adhunikpowertech.com/panel-air-conditioners";
  const CNC_BLOG_URL = "/panel-ac-for-cnc-machines";
  const GEM_BLOG_URL = "/panel-air-conditioners-in-gem";
  const GEM_CATALOG_URL = "https://mkp.gem.gov.in/panel-air-conditioner/panel-air-conditioner/p-5116877-574145587-cat.html#variant_id=5116877-574145587";

  // Calculator Logic
  const calculateHeatLoad = () => {
    const kFactors = { steel: 5.5, stainless: 3.7, aluminum: 12.0 };
    const k = kFactors[material] || 5.5;

    // Surface area in m²: A = 1.8 * H * (W + D) + 1.4 * (W * D)
    const hM = height / 1000;
    const wM = width / 1000;
    const dM = depth / 1000;
    const area = 1.8 * hM * (wM + dM) + 1.4 * (wM * dM);

    const deltaT = Math.max(0, ambientTemp - targetTemp);
    const qTransmission = k * area * deltaT;
    const qTotal = (parseFloat(internalHeat) || 0) + qTransmission;
    const qRequired = qTotal * 1.15; // 15% safety factor
    const btuRequired = qRequired * 3.412;

    // Recommended Adhunik Model
    let recommendedModel = "WMS-025 (250W)";
    if (qRequired > 5000) recommendedModel = "WMS-0070 / SA-0070 (7000W)";
    else if (qRequired > 3000) recommendedModel = "WMS-0050 / SA-0050 (5000W)";
    else if (qRequired > 2500) recommendedModel = "WMS-0030 (3000W)";
    else if (qRequired > 2000) recommendedModel = "WMS-0025 (2500W)";
    else if (qRequired > 1500) recommendedModel = "WMS-0020 (2000W)";
    else if (qRequired > 1000) recommendedModel = "WMS-0015 (1500W)";
    else if (qRequired > 500) recommendedModel = "WMS-0010 (1000W)";
    else if (qRequired > 250) recommendedModel = "WMS-005 (500W)";

    setCalcResult({
      area: area.toFixed(2),
      qTransmission: Math.round(qTransmission),
      qTotal: Math.round(qTotal),
      qRequired: Math.round(qRequired),
      btuRequired: Math.round(btuRequired),
      model: recommendedModel
    });
  };

  const faqs = [
    {
      q: "What is a Panel Air Conditioner and how does it protect electrical panels?",
      a: "A Panel Air Conditioner (also known as an enclosure cooler or cabinet AC) is an industrial closed-loop refrigeration unit designed to regulate the internal temperature of electrical control panels, VFD cabinets, PLC racks, and CNC consoles. Unlike ambient ventilation fans, it maintains two isolated air circuits, preventing dust, cutting fluid mist, humidity, and chemical contaminants from penetrating sensitive electronics while holding temperatures between 28°C and 35°C."
    },
    {
      q: "Why are panel air conditioners essential for control panels with VFDs and PLCs?",
      a: "Modern variable frequency drives (VFDs) and power supplies generate significant heat (typically 2.5% to 3% of drive kW rating). Overheating causes drives to trip on thermal faults (OH1/OH2), accelerates electrolytic capacitor drying, and leads to expensive line shutdowns. A dedicated panel air conditioner for control panels maintains optimal thermal balance even during peak 50°C–55°C Indian summers."
    },
    {
      q: "What capacity range does Adhunik Powertech manufacture for Panel ACs?",
      a: "Adhunik Powertech manufactures industrial panel air conditioners ranging from 250 Watts (853 BTU/hr) up to 7,000 Watts (23,890 BTU/hr). Our portfolio spans Wall/Side Mount (WMS series), Top/Roof Mount (TMT series), and Stand-Alone Floor Mount (SA series)."
    },
    {
      q: "Why is eco-friendly R-134a refrigerant used instead of residential gases?",
      a: "R-134a is an energy-efficient, zero-ozone depletion potential (ODP) refrigerant optimized for medium-to-high evaporating temperatures. It allows compressors to operate reliably in severe factory ambient temperatures up to +55°C without triggering high-pressure discharge cutouts."
    },
    {
      q: "Can Adhunik Panel Air Conditioners operate in harsh, corrosive environments?",
      a: "Yes. In addition to our standard RAL 7035 epoxy powder-coated CRCA steel construction, units are available in Stainless Steel Grade 304 or Grade 316 casings for chemical plants, pharmaceutical cleanrooms, food processing plants, and coastal facilities."
    },
    {
      q: "Can PSUs and government enterprises procure Adhunik Panel ACs via GeM?",
      a: "Yes. Adhunik Powertech is an authorized OEM on the Government e-Marketplace (GeM) with active registered product listings (Variant ID: 5116877-574145587), enabling full GFR Rule 149 compliance for direct purchase, L1 comparison, and tender bids."
    }
  ];

  return (
    <div className="bg-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-6/12">
              <Image
                src="/Panel air conditioner panel ac.webp"
                alt="Adhunik Powertech Panel Air Conditioner for electrical panel and control panel cooling"
                width={500}
                height={300}
                className="w-auto h-auto rounded-xl shadow-xl border-2 border-cyan-100"
                priority
              />
            </div>
            <div className="w-full md:w-6/12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold uppercase tracking-wider">
                  <Snowflake className="w-3.5 h-3.5 text-cyan-600" /> Industrial Enclosure Cooling
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Up to 55°C Ambient
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold text-cyan-800 mb-6 leading-tight">
                Industrial Panel Air Conditioner (Panel AC) for Electrical & Control Panels
              </h1>
              <div className="text-gray-700 text-sm font-normal space-y-4 leading-relaxed">
                <p>
                  Industrial electrical panels, motor control centers (MCC), and automation enclosures house sensitive electronics—including Variable Frequency Drives (VFDs), Programmable Logic Controllers (PLCs), and switchgear—that generate intense heat during continuous multi-shift production.
                </p>
                <p>
                  <strong>Adhunik Powertech Private Limited</strong> is a premier manufacturer of high-performance closed-loop <strong>panel air conditioners (Panel AC)</strong> ranging from <strong>250 Watts to 7,000 Watts</strong>. Designed specifically for Indian industrial environments, our systems deliver IP54/IP55 isolation, zero ambient dust ingress, and continuous cooling in ambient temperatures up to +55°C.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={MAIN_PRODUCT_URL}
                    className="inline-flex items-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all"
                  >
                    View Official Product Page <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={GEM_CATALOG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all"
                  >
                    GeM Portal Listing (PSU Orders) <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Badges: Why Adhunik Leads */}
        <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col items-center text-center">
            <Thermometer className="w-6 h-6 text-cyan-600 mb-2" />
            <h4 className="font-bold text-xs text-slate-800 mb-1">+55°C Ambient Rating</h4>
            <p className="text-[11px] text-slate-500">Continuous cooling in high-heat Indian summers without tripping.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col items-center text-center">
            <ShieldCheck className="w-6 h-6 text-cyan-600 mb-2" />
            <h4 className="font-bold text-xs text-slate-800 mb-1">IP54 / IP55 Closed-Loop</h4>
            <p className="text-[11px] text-slate-500">Dual hermetic circuits completely block dust, humidity, and oil mist.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col items-center text-center">
            <Activity className="w-6 h-6 text-cyan-600 mb-2" />
            <h4 className="font-bold text-xs text-slate-800 mb-1">Tier-1 Compressors</h4>
            <p className="text-[11px] text-slate-500">Danfoss & Emerson reciprocating compressors running eco R-134a.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col items-center text-center">
            <Award className="w-6 h-6 text-cyan-600 mb-2" />
            <h4 className="font-bold text-xs text-slate-800 mb-1">GeM OEM Registered</h4>
            <p className="text-[11px] text-slate-500">Certified ISO 9001, CE, and ZED Bronze manufacturer for PSUs.</p>
          </div>
        </section>

        {/* Interactive Heat Load Calculator Section */}
        <section className="mb-16 bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <Calculator className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Interactive Panel AC Heat Load Calculator
              </h2>
            </div>
            <p className="text-xs text-slate-300 mb-8 leading-relaxed">
              Accurately size the required cooling capacity for your electrical enclosure based on surface thermal transmission ($k \cdot A \cdot \Delta T$) and internal drive heat loss.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8 text-slate-800">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Enclosure Material</label>
                <select 
                  value={material} 
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full bg-white p-2.5 rounded-lg text-xs font-semibold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="steel">Mild Steel / Powder Coated (k=5.5)</option>
                  <option value="stainless">Stainless Steel 304/316 (k=3.7)</option>
                  <option value="aluminum">Aluminium (k=12.0)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Enclosure Height (mm)</label>
                <input 
                  type="number" 
                  value={height} 
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full bg-white p-2.5 rounded-lg text-xs font-semibold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Width × Depth (mm)</label>
                <div className="grid grid-cols-2 gap-2">
                  <input 
                    type="number" 
                    value={width} 
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full bg-white p-2.5 rounded-lg text-xs font-semibold border border-slate-300 focus:outline-none"
                    placeholder="Width"
                  />
                  <input 
                    type="number" 
                    value={depth} 
                    onChange={(e) => setDepth(Number(e.target.value))}
                    className="w-full bg-white p-2.5 rounded-lg text-xs font-semibold border border-slate-300 focus:outline-none"
                    placeholder="Depth"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Internal Drive Heat Loss (Watts)</label>
                <input 
                  type="number" 
                  value={internalHeat} 
                  onChange={(e) => setInternalHeat(Number(e.target.value))}
                  className="w-full bg-white p-2.5 rounded-lg text-xs font-semibold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <span className="text-[10px] text-slate-400">Sum of VFDs (3% of kW), PLCs, SMPS</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Max Ambient Temp (°C)</label>
                <input 
                  type="number" 
                  value={ambientTemp} 
                  onChange={(e) => setAmbientTemp(Number(e.target.value))}
                  className="w-full bg-white p-2.5 rounded-lg text-xs font-semibold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Target Enclosure Temp (°C)</label>
                <input 
                  type="number" 
                  value={targetTemp} 
                  onChange={(e) => setTargetTemp(Number(e.target.value))}
                  className="w-full bg-white p-2.5 rounded-lg text-xs font-semibold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <span className="text-[10px] text-slate-400">Recommended: 32°C to 35°C</span>
              </div>
            </div>

            <button 
              onClick={calculateHeatLoad}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Calculator className="w-4 h-4" /> Calculate Required Cooling Capacity
            </button>

            {calcResult && (
              <div className="mt-8 pt-8 border-t border-slate-800 grid md:grid-cols-4 gap-6">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Exposed Area</div>
                  <div className="text-xl font-bold text-white mt-1">{calcResult.area} m²</div>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Surface Gain</div>
                  <div className="text-xl font-bold text-white mt-1">{calcResult.qTransmission} W</div>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Required Capacity</div>
                  <div className="text-xl font-bold text-cyan-400 mt-1">{calcResult.qRequired} W <span className="text-xs text-slate-300">({calcResult.btuRequired} BTU)</span></div>
                </div>
                <div className="bg-cyan-950/80 p-4 rounded-xl border border-cyan-800">
                  <div className="text-[11px] text-cyan-300 uppercase font-bold">Recommended Model</div>
                  <div className="text-sm font-bold text-emerald-400 mt-1">{calcResult.model}</div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Closed-Loop Principle vs Conventional Cooling */}
        <section className="mb-16 bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <h2 className="text-2xl font-bold text-cyan-800 mb-4 flex items-center gap-3">
            <ShieldCheck className="text-cyan-600 w-6 h-6" />
            Closed-Loop Panel AC vs Conventional Exhaust Fans
          </h2>
          <p className="text-gray-700 text-sm font-normal mb-6 leading-relaxed">
            Standard ventilation fans draw unconditioned ambient shop-floor air into the cabinet. In industrial manufacturing, this ambient air carries conductive metallic dust, cutting oil aerosols, and high humidity directly across active printed circuit boards. Adhunik Panel Air Conditioners prevent this failure mode through completely isolated closed loops:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-cyan-900 font-bold text-base mb-3">
                <Snowflake className="w-5 h-5 text-cyan-600" />
                Internal Enclosure Loop (Airtight Sealed)
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Warm air is continuously drawn from the top of the cabinet across an evaporator coil, chilled, dehumidified, and directed back into the enclosure. The internal atmosphere remains 100% dust-free and dry, preserving the cabinet’s IP54/IP55 ingress rating.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-base mb-3">
                <Wind className="w-5 h-5 text-cyan-600" />
                External Ambient Loop (Heat Rejection)
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Plant floor air enters the condenser chamber to remove heat absorbed by the refrigerant before being exhausted outside. At no point does factory dust, coolant vapor, or moisture mix with the internal cabinet air.
              </p>
            </div>
          </div>
        </section>

        {/* 3 Core Mounting Configurations */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Layers className="text-cyan-600" /> Three Engineered Mounting Configurations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-cyan-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700 font-black text-sm mb-4">
                WMS
              </div>
              <h3 className="font-bold text-lg text-cyan-900 mb-2">Wall / Side Mount Series</h3>
              <p className="text-xs text-gray-500 font-bold mb-3">Capacity: 250W to 7,000W</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Engineered for direct mounting on enclosure doors or side panels. Delivers bottom-to-top air circulation straight across vertical VFD heatsinks and drive racks.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc ml-4">
                <li>Ideal for freestanding control panels & MCCs</li>
                <li>Eye-level digital controller & filter access</li>
                <li>Standard cutout templates for rapid integration</li>
              </ul>
            </div>

            <div className="p-6 border border-cyan-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700 font-black text-sm mb-4">
                TMT
              </div>
              <h3 className="font-bold text-lg text-cyan-900 mb-2">Top / Roof Mount Series</h3>
              <p className="text-xs text-gray-500 font-bold mb-3">Capacity: 250W to 1,500W</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Designed for compact installations where narrow factory walkways or machine tool aisles restrict door swing or side clearance.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc ml-4">
                <li>Zero aisle footprint encroachment</li>
                <li>Chilled downward airflow across top busbars</li>
                <li>Eliminates door-sag on thin-gauge enclosures</li>
              </ul>
            </div>

            <div className="p-6 border border-cyan-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700 font-black text-sm mb-4">
                SA
              </div>
              <h3 className="font-bold text-lg text-cyan-900 mb-2">Stand-Alone Floor Series</h3>
              <p className="text-xs text-gray-500 font-bold mb-3">Capacity: 1,000W to 7,000W</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Heavy-duty floor-standing units built for multi-bay enclosure suites, substation control shelters, and large automation suites.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc ml-4">
                <li>High airflow capacity up to 1,326 CMH</li>
                <li>Flexible ducted supply and return integration</li>
                <li>Heavy-gauge industrial casing with caster options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Parametric Technical Specifications Table */}
        <section className="my-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <Gauge className="text-cyan-600" /> Complete Parametric Specifications: Wall Mount (WMS)
            </h2>
            <a 
              href={MAIN_PRODUCT_URL}
              className="text-cyan-700 text-xs font-bold hover:underline flex items-center gap-1.5"
            >
              See Top-Mount & Stand-Alone Specs on Product Page <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-slate-100 text-slate-800 uppercase text-xs">
                <tr>
                  <th className="p-3.5 border-b">Model</th>
                  <th className="p-3.5 border-b">Capacity (Watts)</th>
                  <th className="p-3.5 border-b">Output (BTU/hr)</th>
                  <th className="p-3.5 border-b">Dimensions (D×W×H mm)</th>
                  <th className="p-3.5 border-b">Power Input (W / A)</th>
                  <th className="p-3.5 border-b">Airflow (CMH)</th>
                  <th className="p-3.5 border-b">Weight (KG)</th>
                </tr>
              </thead>
              <tbody className="text-xs text-slate-600 divide-y divide-slate-200">
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">WMS-025</td>
                  <td className="p-3.5 font-semibold text-cyan-800">250 W</td>
                  <td className="p-3.5">853 BTU</td>
                  <td className="p-3.5 font-mono">285 × 285 × 570</td>
                  <td className="p-3.5">484 W / 2.2 A</td>
                  <td className="p-3.5">68 CMH</td>
                  <td className="p-3.5">24 KG</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">WMS-005</td>
                  <td className="p-3.5 font-semibold text-cyan-800">500 W</td>
                  <td className="p-3.5">1706 BTU</td>
                  <td className="p-3.5 font-mono">285 × 295 × 570</td>
                  <td className="p-3.5">704 W / 3.2 A</td>
                  <td className="p-3.5">102 CMH</td>
                  <td className="p-3.5">27 KG</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">WMS-0010</td>
                  <td className="p-3.5 font-semibold text-cyan-800">1000 W</td>
                  <td className="p-3.5">3412 BTU</td>
                  <td className="p-3.5 font-mono">285 × 300 × 785</td>
                  <td className="p-3.5">770 W / 3.5 A</td>
                  <td className="p-3.5">221 CMH</td>
                  <td className="p-3.5">38 KG</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">WMS-0015</td>
                  <td className="p-3.5 font-semibold text-cyan-800">1500 W</td>
                  <td className="p-3.5">5119 BTU</td>
                  <td className="p-3.5 font-mono">285 × 310 × 785</td>
                  <td className="p-3.5">924 W / 4.2 A</td>
                  <td className="p-3.5">238 CMH</td>
                  <td className="p-3.5">42 KG</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">WMS-0020</td>
                  <td className="p-3.5 font-semibold text-cyan-800">2000 W</td>
                  <td className="p-3.5">6825 BTU</td>
                  <td className="p-3.5 font-mono">275 × 400 × 800</td>
                  <td className="p-3.5">990 W / 4.5 A</td>
                  <td className="p-3.5">320 CMH</td>
                  <td className="p-3.5">52 KG</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">WMS-0025</td>
                  <td className="p-3.5 font-semibold text-cyan-800">2500 W</td>
                  <td className="p-3.5">8532 BTU</td>
                  <td className="p-3.5 font-mono">275 × 400 × 1000</td>
                  <td className="p-3.5">1364 W / 6.2 A</td>
                  <td className="p-3.5">485 CMH</td>
                  <td className="p-3.5">55 KG</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">WMS-0030</td>
                  <td className="p-3.5 font-semibold text-cyan-800">3000 W</td>
                  <td className="p-3.5">10238 BTU</td>
                  <td className="p-3.5 font-mono">270 × 400 × 1400</td>
                  <td className="p-3.5">1430 W / 6.5 A</td>
                  <td className="p-3.5">544 CMH</td>
                  <td className="p-3.5">70 KG</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">WMS-0050</td>
                  <td className="p-3.5 font-semibold text-cyan-800">5000 W</td>
                  <td className="p-3.5">17064 BTU</td>
                  <td className="p-3.5 font-mono">425 × 550 × 1570</td>
                  <td className="p-3.5">2024 W / 9.2 A</td>
                  <td className="p-3.5">1076 CMH</td>
                  <td className="p-3.5">100 KG</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">WMS-0070</td>
                  <td className="p-3.5 font-semibold text-cyan-800">7000 W</td>
                  <td className="p-3.5">23890 BTU</td>
                  <td className="p-3.5 font-mono">425 × 550 × 1570</td>
                  <td className="p-3.5">2640 W / 12.0 A</td>
                  <td className="p-3.5">1326 CMH</td>
                  <td className="p-3.5">105 KG</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Specialized Spoke Articles */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Cpu className="text-cyan-600" /> Specialized Application & Procurement Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-cyan-100 rounded-xl bg-gradient-to-br from-white to-cyan-50/40 shadow-sm">
              <h3 className="font-bold text-lg text-cyan-900 mb-2">CNC Machine Tool & VFD Cooling</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Protect spindle inverters and optical encoders from cutting fluid mist and conductive metallic swarf with dedicated closed-loop cooling.
              </p>
              <Link 
                href={CNC_BLOG_URL}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-900 hover:underline"
              >
                Read CNC Panel AC Sizing Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 border border-cyan-100 rounded-xl bg-gradient-to-br from-white to-cyan-50/40 shadow-sm">
              <h3 className="font-bold text-lg text-cyan-900 mb-2">PSU & Government e-Marketplace (GeM) Tenders</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Complete GFR Rule 149 procurement guide, model BOQ tender clauses, and direct purchase instructions for public sector undertakings.
              </p>
              <Link 
                href={GEM_BLOG_URL}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-900 hover:underline"
              >
                Read GeM Procurement Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Certified Quality & Compliance */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Award className="text-cyan-600" /> Certified Quality & Manufacturing Standards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "ISO 9001:2015 Certified", desc: "Standardized quality management systems" },
              { title: "CE Compliant (CE/060219033)", desc: "European electrical and operational safety" },
              { title: "ZED Bronze Certified", desc: "Zero Defect Zero Effect MSME recognition" },
              { title: "GeM OEM Authorized", desc: "Government e-Marketplace registered supplier" },
              { title: "Tier-1 Compressor Duty", desc: "Hermetic Danfoss / Emerson reciprocating" },
              { title: "Eco-Friendly Refrigerant", desc: "Pure R-134a with zero ozone depletion" }
            ].map((cert, idx) => (
              <div key={idx} className="p-4 border border-slate-200 rounded-xl bg-slate-50">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-900 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  {cert.title}
                </div>
                <p className="text-[11px] text-slate-500 ml-6">{cert.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Serving Industry Leaders Across India */}
        <section className="mb-20">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-5/12">
                <h2 className="text-3xl font-bold text-slate-800 leading-tight mb-6">
                  Serving Industry Leaders <br />
                  <span className="text-cyan-600 font-black">Across India</span>
                </h2>
                <div className="text-gray-700 text-sm font-normal space-y-4 leading-relaxed text-justify">
                  <p>
                    With over 21+ years of demonstrated manufacturing excellence, Adhunik Powertech provides reliable thermal management systems to leading private manufacturing enterprises and government utilities.
                  </p>
                  <p>
                    We actively support facilities across <strong>Ahmedabad, Pune, Hyderabad, Chennai, Mumbai, Goa, Vishakhapatnam, Bhopal, Kolkata, Jaipur, Faridabad, Bangalore, Noida and Delhi NCR</strong>, as well as core industrial zones across <strong>Gujarat, Rajasthan, Chhattisgarh, and Odisha</strong>.
                  </p>
                  <p className="font-bold text-cyan-800">
                    Trusted across automobile, steel, packaging, power generation, and precision manufacturing sectors.
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-7/12">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-cyan-600" /> Trusted By Prominent Enterprises (21+ Years)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                    {[
                      "Hero MotoCorp",
                      "Steel Authority of India Ltd. (SAIL)",
                      "Uflex Limited",
                      "East India Petroleum Pvt. Ltd. (EIPL)",
                      "BAAZ Bikes (Elec Torq Technologies)",
                      "Nippon Steel Pipe India Pvt. Ltd.",
                      "TAK Technologies Pvt. Ltd.",
                      "Rise Automation",
                      "Triveni Renewables Pvt. Ltd.",
                      "Zixom Plast"
                    ].map((client, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3 h-3 text-cyan-500 shrink-0" /> {client}
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-[11px] text-gray-500 italic leading-relaxed border-t pt-4">
                    Authorized OEM on the Government e-Marketplace. Complete technical BOQs, 2D/3D CAD drawings, and on-site engineering sizing support available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0f172a] rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl mx-auto max-w-6xl my-8">
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Need Engineering Sizing for Your Electrical Panels?
            </h2>
            
            <p className="text-slate-300 text-sm md:text-base font-normal mb-6 leading-relaxed max-w-2xl">
              Connect with our thermal management experts for custom enclosure heat audits, 2D/3D CAD cutout drawings, and prompt technical quotations.
            </p>
            
            <p className="text-cyan-400 font-semibold text-sm md:text-base mb-10 flex items-center justify-center gap-2">
              Adhunik Powertech designs and manufactures high-performance panel coolers from 250W to 7000W across India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a 
                href={MAIN_PRODUCT_URL}
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 px-8 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                View Product Specifications <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href="tel:8287885885" 
                className="w-full sm:w-auto bg-[#0891b2] hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <PhoneCall className="w-4 h-4" /> +91 82878 85885
              </a>
              
              <Link 
                href="/support-form" 
                className="w-full sm:w-auto bg-transparent border border-slate-700 hover:border-cyan-400 text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4" /> Request a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-cyan-800 mb-8 text-center flex items-center justify-center gap-2">
            <HelpCircle className="text-cyan-600" /> Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <button 
                  className="w-full text-left p-5 font-bold text-slate-800 bg-slate-50 flex justify-between items-center transition-colors hover:bg-slate-100"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`transition-transform duration-200 shrink-0 ${openIndex === i ? 'rotate-90' : ''}`} />
                </button>
                {openIndex === i && (
                  <div className="p-5 text-gray-600 bg-white border-t border-slate-200 text-sm leading-relaxed">
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