"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  ShieldCheck, Thermometer, Wind, CheckCircle2,
  PhoneCall, PackageCheck, Zap, Settings,
  ChevronRight, Mail, Factory, AlertTriangle, 
  HelpCircle, Snowflake, Cpu, Activity, Info, Layout, Globe,
  Scaling, Calculator, Box, Gauge
} from "lucide-react";

export default function PanelACSelectionGuide() {
 {/*const [openIndex, setOpenIndex] = useState(null);

  // Calculator State
  const [activeTab, setActiveTab] = useState('calculator');
  const [material, setMaterial] = useState(''); 
  const [mounting, setMounting] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [depth, setDepth] = useState('');
  const [unit, setUnit] = useState('mm');
  const [heightUnit, setHeightUnit] = useState('mm');
  const [depthUnit, setDepthUnit] = useState('mm');
  const [equipmentPower, setEquipmentPower] = useState('');
  const [outsideTemp, setOutsideTemp] = useState('');
  const [insideTemp, setInsideTemp] = useState('');
  const [tempUnit, setTempUnit] = useState('C');
  const [altitude, setAltitude] = useState('0');
  const [altitudeUnit, setAltitudeUnit] = useState('m');
  const [safetyFactor, setSafetyFactor] = useState('1.2');
  const [result, setResult] = useState(null);

  const calculateLoad = () => {
    // Dimension conversion helper
    const toMeters = (val, u) => {
      let v = parseFloat(val) || 0;
      if (u === 'mm') return v / 1000;
      if (u === 'cm') return v / 100;
      if (u === 'in') return v * 0.0254;
      return v;
    };

    let w = toMeters(width, unit);
    let h = toMeters(height, heightUnit);
    let d = toMeters(depth, depthUnit);

    let surfaceArea = 0;
    if (mounting === 'standalone') {
      surfaceArea = 2 * (w * h) + 2 * (h * d) + (w * d);
    } else if (mounting === 'wall') {
      surfaceArea = (w * h) + 2 * (h * d) + (w * d);
    } else if (mounting === 'top') {
      surfaceArea = 2 * (w * h) + 2 * (h * d);
    }

    let tOut = parseFloat(outsideTemp) || 0;
    let tIn = parseFloat(insideTemp) || 0;
    if (tempUnit === 'F') {
      tOut = (tOut - 32) * 5/9;
      tIn = (tIn - 32) * 5/9;
    }
    const deltaT = tOut - tIn;

    const surfaceHeatTransfer = (parseFloat(material) || 0.44) * surfaceArea * deltaT;
    
    // Altitude conversion to meters for calculation
    let altVal = parseFloat(altitude) || 0;
    if (altitudeUnit === 'ft') altVal *= 0.3048;
    const altCorr = altVal > 1000 ? 1 + ((altVal - 1000) / 100 * 0.01) : 1;
    
    const totalLoad = (surfaceHeatTransfer + (parseFloat(equipmentPower) || 0)) * altCorr * (parseFloat(safetyFactor) || 1.2);
    setResult(totalLoad > 0 ? Math.ceil(totalLoad).toString() : "0");
  };*/}
  const faqs = [
    {
      q: "What size Panel AC do I need for my electrical enclosure?",
      a: "The right Panel AC size depends on your enclosure’s heat load, component power dissipation, and ambient temperature. Our Panel Air Conditioners range from 250W to 7000W, and the correct capacity is selected through a technical heat load calculation to ensure efficient cooling and reliable panel protection."
    },
    {
      q: "Why is Panel AC selection critical?",
      a: "Incorrect selection can lead to overheating of PLCs, frequent system tripping, reduced equipment lifespan, energy inefficiency, and moisture condensation issues inside panels."
    }
  ];

  return (
    <div className="bg-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header/Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-6/12">
              <Image
                src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1778587790/How_to_Choose_the_Right_Panel_Air_Conditioner_udm2kc.webp"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl shadow-xl border-2 border-cyan-100"
                priority
              />
            </div>
            <div className="w-full md:w-6/12">
              <h1 className="text-2xl md:text-4xl font-bold text-cyan-800 mb-6 leading-tight">
                How to Choose the Right Panel Air Conditioner (Industrial HVAC Guide)
              </h1>
              <div className="text-gray-700 text-sm font-normal space-y-4">
                <p>
                  Proper selection of a Panel Air Conditioner (Panel Cooler) is critical for maintaining thermal stability inside electrical control panels used in industrial automation, manufacturing plants, and process industries.
                </p>
                <p>
                  Incorrect selection can lead to equipment failure, overheating, production downtime, and reduced lifespan of electrical components. Therefore, Panel AC selection must be based on technical heat load calculation, environmental conditions, and application-specific requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Panel AC Section */}
        <section className="mb-16 bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <h2 className="text-2xl font-bold text-cyan-800 mb-4">What is a Panel Air Conditioner?</h2>
          <p className="text-gray-700 text-sm font-normal mb-6">
            A Panel Air Conditioner is a closed-loop cooling system designed specifically for electrical panels. Unlike ventilation or fan-based systems, it maintains a controlled internal temperature while preventing dust, moisture, and contaminants from entering the panel.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Industrial automation panels", "PLC and control systems", 
              "CNC machines", "Power distribution boards", 
              "Telecom and IT enclosures", "Process control industries"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" /> {item}
              </div>
            ))}
          </div>
        </section>

        {/* Why Selection is Critical Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-slate-50 border-b border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <AlertTriangle className="text-red-500 w-6 h-6" />
                Why Proper Panel AC Selection is Critical
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2">
              <div className="p-8 border-r border-slate-100">
                <p className="text-gray-700 text-sm font-bold mb-6">
                  Incorrect selection of a panel cooling system can result in:
                </p>
                <ul className="space-y-4">
                  {[
                    "Overheating of PLCs, drives, and control components",
                    "Frequent system tripping and downtime",
                    "Reduced equipment lifespan",
                    "Energy inefficiency",
                    "Moisture condensation issues inside panels"
                  ].map((risk, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm font-normal">
                      <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400" />
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-cyan-50/30 flex flex-col justify-center">
                <div className="bg-white p-6 rounded-xl border border-cyan-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Settings className="w-5 h-5 text-cyan-600" />
                    <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider">
                      Engineering Mandate
                    </span>
                  </div>
                  <p className="text-cyan-900 text-sm font-bold leading-relaxed">
                    Therefore, selection must always be based on engineering heat load calculation, not assumption.
                  </p>
                  <div className="mt-4 pt-4 border-t border-cyan-50">
                    <p className="text-[11px] text-cyan-700 font-medium italic">
                      * Adhunik Powertech follows technical standards to ensure 100% thermal stability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Parameters Grid */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Settings className="text-cyan-600" /> Key Technical Parameters for Panel AC Selection
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-cyan-100 rounded-xl hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
                <Activity className="w-5 h-5" /> 1. Heat Load Calculation
              </h3>
              <p className="text-sm text-gray-600 mb-3">The first and most critical step. Heat load depends on:</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc ml-5">
                <li>Total power dissipation (Watt loss)</li>
                <li>Internal panel size and enclosure type</li>
                <li>Ambient temperature of installation area</li>
                <li>Heat from VFDs, PLCs, transformers</li>
              </ul>
              <p className="mt-3 text-xs font-bold text-cyan-700">👉 A proper heat load calculation prevents under-sizing or over-sizing.</p>
            </div>

            <div className="p-6 border border-cyan-100 rounded-xl hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
                <Thermometer className="w-5 h-5" /> 2. Ambient Environmental Conditions
              </h3>
              <p className="text-sm text-gray-600 mb-3">Conditions impact cooling efficiency and durability. Consider:</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc ml-5">
                <li>High ambient temperature (Steel plants, foundries)</li>
                <li>Dust-prone environments (Cement, woodworking)</li>
                <li>Humidity levels (FMCG, Food, Pharma)</li>
                <li>Outdoor or semi-outdoor installations</li>
              </ul>
            </div>

            <div className="p-6 border border-cyan-100 rounded-xl hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
                <Layout className="w-5 h-5" /> 3. Panel Size and Internal Layout
              </h3>
              <p className="text-sm text-gray-600">Panel volume and component arrangement influence heat distribution. Poor layout may create hot spots even if cooling capacity is sufficient. Key considerations include height, width, depth, and component density.</p>
            </div>

            <div className="p-6 border border-cyan-100 rounded-xl hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
                <Scaling className="w-5 h-5" /> 4. Cooling Capacity Selection
              </h3>
              <p className="text-sm text-gray-600 mb-2 font-bold">Available Cooling Range: 250 Watts to 7000 Watts</p>
              <p className="text-sm text-gray-600">Proper matching ensures optimal performance for everything from small junction boxes to large heavy-duty industrial systems.</p>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="my-16 bg-cyan-900 text-white p-10 rounded-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Features of Industrial Panel Air Conditioners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Snowflake className="w-10 h-10 mb-4 text-cyan-400" />
              <h4 className="font-bold mb-2">Closed-Loop System</h4>
              <p className="text-xs text-cyan-100">No external air contamination. Dustproof and moisture-resistant design.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Activity className="w-10 h-10 mb-4 text-cyan-400" />
              <h4 className="font-bold mb-2">24x7 Operation</h4>
              <p className="text-xs text-cyan-100">Designed for continuous industrial duty with high-efficiency compressors.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Settings className="w-10 h-10 mb-4 text-cyan-400" />
              <h4 className="font-bold mb-2">Low Maintenance</h4>
              <p className="text-xs text-cyan-100">Compact, panel-mounted structure stable under harsh conditions.</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Panel AC vs Ventilation System</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left">
              <thead className="bg-slate-100 text-slate-800 uppercase text-xs">
                <tr>
                  <th className="p-4 border-b">Parameter</th>
                  <th className="p-4 border-b">Panel AC</th>
                  <th className="p-4 border-b">Ventilation Fan</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600">
                <tr className="border-b">
                  <td className="p-4 font-bold">Cooling Type</td>
                  <td className="p-4">Active refrigeration</td>
                  <td className="p-4">Air circulation</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-bold">Dust Protection</td>
                  <td className="p-4">Fully sealed</td>
                  <td className="p-4">Not sealed</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-bold">Temperature Control</td>
                  <td className="p-4">Precise</td>
                  <td className="p-4">Limited</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Industrial Use</td>
                  <td className="p-4">Heavy-duty</td>
                  <td className="p-4">Light-duty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* UPDATED ADVANCED HEAT LOAD CALCULATOR TOOL */}
       /* <section id="calculator" className="my-20 bg-white rounded-[2rem] shadow-2xl border border-cyan-100 overflow-hidden max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-50 to-white p-8 text-center border-b border-cyan-100">
            <div className="inline-flex items-center gap-2 bg-cyan-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              <Calculator className="w-4 h-4" /> Engineering Tool
            </div>
            <h2 className="text-3xl font-bold text-cyan-900">Panel Heat Load Calculator</h2>
            <p className="text-gray-600 mt-2 text-sm">Calculate required cooling capacity based on physical and environmental factors</p>
          </div>

          <div className="flex bg-slate-50 p-2 gap-2">
            <button 
              onClick={() => setActiveTab('calculator')}
              className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === 'calculator' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-100'}`}
            >
              <Activity className="w-4 h-4" /> Calculator
            </button>
            <button 
              onClick={() => setActiveTab('info')}
              className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === 'info' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-100'}`}
            >
              <Info className="w-4 h-4" /> Formulas & Information
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'calculator' ? (
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column 
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase mb-2 block tracking-wider">Enclosure Material</label>
                    <select 
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:border-cyan-500 transition-all"
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                    >
                      <option value="0.44">Mild Steel (MS) (k=0.44)</option>
                      <option value="3.7">Stainless Steel (k=3.7)</option>
                      <option value="12.0">Aluminium (k=12.0)</option>
                      <option value="3.5">Fibreglass / Polycarbonate (k=3.5)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase mb-2 block tracking-wider">Mounting Type</label>
                    <select 
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:border-cyan-500 transition-all"
                      value={mounting}
                      onChange={(e) => setMounting(e.target.value)}
                    >
                      <option value="wall">Wall-Mounted </option>
                      <option value="standalone">Stand-Alone</option>
                      <option value="top">Top-Mounted</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Width</label>
                      <div className="relative">
                        <input type="number" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm" value={width} onChange={(e)=>setWidth(e.target.value)} />
                        <select className="absolute right-1 top-1 bottom-1 bg-transparent text-[10px] font-bold border-none outline-none" value={unit} onChange={(e)=>setUnit(e.target.value)}>
                          <option>mm</option><option>cm</option><option>m</option><option>in</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Height</label>
                      <input type="number" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm" value={height} onChange={(e)=>setHeight(e.target.value)} />
                    <select className="absolute right-1 top-1 bottom-1 bg-transparent text-[10px] font-bold border-none outline-none" value={unit} onChange={(e)=>setUnit(e.target.value)}>
                        <option>mm</option><option>cm</option><option>m</option><option>in</option>
                        </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Depth</label>
                      <input type="number" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm" value={depth} onChange={(e)=>setDepth(e.target.value)} />
                    <select className="absolute right-1 top-1 bottom-1 bg-transparent text-[10px] font-bold border-none outline-none" value={unit} onChange={(e)=>setUnit(e.target.value)}>
                          <option>mm</option><option>cm</option><option>m</option><option>in</option>
                        </select>
                    </div>
                  </div>
                </div>

                {/* Right Column 
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase mb-2 block tracking-wider">Total Max Equipment Power</label>
                    <div className="relative">
                      <input type="number" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="e.g. 1000" value={equipmentPower} onChange={(e)=>setEquipmentPower(e.target.value)} />
                      <span className="absolute right-3 top-3 text-xs text-slate-400 font-bold">Watts</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Max Outside Temp</label>
                      <div className="relative">
                        <input type="number" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm" value={outsideTemp} onChange={(e)=>setOutsideTemp(e.target.value)} />
                        <select className="absolute right-1 top-1 bottom-1 bg-transparent text-[10px] font-bold border-none outline-none" value={tempUnit} onChange={(e)=>setTempUnit(e.target.value)}>
                          <option>°C</option><option>°F</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Desired Internal Temp</label>
                      <input type="number" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm" value={insideTemp} onChange={(e)=>setInsideTemp(e.target.value)} />
                      <select className="absolute right-1 top-1 bottom-1 bg-transparent text-[10px] font-bold border-none outline-none" value={tempUnit} onChange={(e)=>setTempUnit(e.target.value)}>
                     
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Site Altitude (m)</label>
                      <input type="number" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm" value={altitude} onChange={(e)=>setAltitude(e.target.value)} />
                      <select className="absolute right-1 top-1 bottom-1 bg-transparent text-[10px] font-bold border-none outline-none" value={altitudeUnit} onChange={(e)=>setAltitudeUnit(e.target.value)}>
                        <option>mm</option><option>ft</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Safety Factor</label>
                      <input type="number" step="0.1" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm" value={safetyFactor} onChange={(e)=>setSafetyFactor(e.target.value)} />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 flex flex-col items-center pt-8 border-t border-slate-100">
                  <button 
                    onClick={calculateLoad}
                    className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-4 px-12 rounded-2xl transition-all shadow-xl hover:shadow-cyan-200 active:scale-95 flex items-center gap-3"
                  >
                    <Activity className="w-5 h-5" /> Calculate Required Capacity
                  </button>

                  {result && (
                    <div className="mt-8 p-8 bg-cyan-900 text-white rounded-3xl text-center w-full max-w-md animate-in fade-in zoom-in duration-300">
                      <span className="text-[10px] text-cyan-400 uppercase font-bold tracking-[0.2em]">Required Cooling Capacity</span>
                      <div className="text-5xl font-black mt-2">{result} <span className="text-xl font-medium">Watts</span></div>
                      <p className="text-xs text-cyan-200 mt-4 leading-relaxed">
                         Adhunik Powertech recommends a unit in the <strong className="text-white">{(Math.ceil(parseFloat(result) / 100) * 100)}W</strong> range for optimal safety.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-8 text-gray-700 animate-in slide-in-from-bottom-2">
                <div>
                  <h3 className="text-lg font-bold text-cyan-900 mb-4 flex items-center gap-2 border-l-4 border-cyan-500 pl-3">
                    Heat Load Calculation Methodology
                  </h3>
                  <p className="text-sm leading-relaxed mb-4">Heat transfer through the enclosure surface is calculated based on:</p>
                  <ul className="grid md:grid-cols-2 gap-3 text-xs font-medium">
                    <li className="bg-slate-50 p-3 rounded-lg flex items-center gap-2">• Enclosure material thermal conductivity (k-factor)</li>
                    <li className="bg-slate-50 p-3 rounded-lg flex items-center gap-2">• Total surface area exposed to heat transfer</li>
                    <li className="bg-slate-50 p-3 rounded-lg flex items-center gap-2">• Temperature difference between inside and outside</li>
                    <li className="bg-slate-50 p-3 rounded-lg flex items-center gap-2">• Mounting type (affects exposed surface area)</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">K-Factor by Material</h4>
                    <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 text-xs">
                      <table className="w-full text-left">
                        <thead className="bg-slate-200">
                          <tr><th className="p-3">Material</th><th className="p-3">k (W/m²·°C)</th></tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-100"><td className="p-3">  Mild Steel (MS)</td><td className="p-3 font-bold">0.44</td></tr>
                          <tr className="border-b border-slate-100"><td className="p-3">Stainless Steel</td><td className="p-3 font-bold">3.7</td></tr>
                          <tr className="border-b border-slate-100"><td className="p-3">Aluminium</td><td className="p-3 font-bold">12.0</td></tr>
                          <tr><td className="p-3">Fibreglass/Polycarbonate</td><td className="p-3 font-bold">3.5</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Internal Heat Load</h4>
                      <p className="text-xs leading-relaxed mt-1">All electrical equipment power is assumed to convert to heat (100% conversion).</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Altitude Correction</h4>
                      <p className="text-xs leading-relaxed mt-1">Air density decreases with altitude, reducing cooling efficiency. The correction factor increases required capacity based on altitude.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100">
                  <h4 className="text-sm font-bold text-cyan-900 mb-2 uppercase tracking-wider underline underline-offset-4">Formula</h4>
                  <div className="bg-white p-4 rounded-xl font-mono text-[11px] text-cyan-800 overflow-x-auto shadow-inner leading-loose">
                    Total Heat Load = (Surface Heat Transfer + Internal Heat Load) × Altitude Correction × Safety Factor
                    <br />
                    Where Surface Heat Transfer = k-factor × Surface Area × Temperature Difference
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>*/}

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
                    Recognizing this critical need, Adhunik Powertech proudly provides cutting-edge{' '}
                    <a 
                      href="https://www.adhunikpowertech.com/panel-air-conditioners" 
                      className="text-cyan-700 font-bold hover:underline"
                    >
                      panel air conditioner solutions
                    </a>{' '}
                    and support to industries in major cities and regions across the nation.
                  </p>
                  <p>
                    We address the crucial thermal management needs of businesses in <strong>Ahmedabad, Pune, Hyderabad, Chennai, Mumbai, Goa, Vishakhapatnam, Bhopal, Kolkata, Jaipur, Faridabad, Bangalore, Noida and Delhi NCR</strong>, as well as in thriving industrial zones throughout <strong>Gujarat, Rajasthan, Chhattisgarh, and Odisha</strong>.
                  </p>
                  <p className="font-bold text-cyan-800">
                    Wherever your operations are based, trust Adhunik Powertech for reliable electrical panel cooling.
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-7/12">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-cyan-600" /> Trusted By Industry Giants (19+ Years)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                    {[
                      "Uflex Limited",
                      "Steel Authority of India Ltd. (SAIL)",
                      "East India Petroleum Pvt. Ltd. (EIPL)",
                      "BAAZ Bikes (Elec Torq Technologies)",
                      "Nippon Steel Pipe India Pvt. Ltd.",
                      "TAK Technologies Pvt. Ltd.",
                      "Hero MotoCorp",
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
                    With over 19+ years of experience as a manufacturer, we proudly serve various government and private sector clients, showcasing our commitment across diverse industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Need Expert Assistance? */}
        <section className="bg-[#0f172a] rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl mx-auto max-w-6xl my-8">
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Need Expert Assistance?
            </h2>
            
            <p className="text-slate-300 text-sm md:text-base font-normal mb-6 leading-relaxed max-w-2xl">
              For accurate selection, heat load calculation, or project-based HVAC consultation, connect with our technical team.
            </p>
            
            <p className="text-cyan-400 font-semibold text-sm md:text-base mb-10 flex items-center justify-center gap-2">
               Adhunik Powertech provides engineering-based Panel Air Conditioner solutions for industrial applications across India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a 
                href="tel:8287885885" 
                className="w-full sm:w-auto bg-[#0891b2] hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <PhoneCall className="w-4 h-4" /> +91 82878 85885
              </a>
              
              <Link 
                href="/request-quote" 
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
                          className="w-full text-left p-5 font-bold text-slate-800 bg-slate-50 flex justify-between items-center"
                          onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      >
                          {faq.q}
                          <ChevronRight className={`transition-transform ${openIndex === i ? 'rotate-90' : ''}`} />
                      </button>
                      {openIndex === i && (
                          <div className="p-5 text-gray-600 bg-white border-t border-slate-200 text-sm">
                              {faq.a}
                          </div>
                      )}
                  </div>
              ))}
          </div>
        </section>

      </div>
    </div>
  )
}
