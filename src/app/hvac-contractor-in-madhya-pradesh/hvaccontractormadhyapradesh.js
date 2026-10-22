"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import {
  ShieldCheck, Thermometer, Wind, CheckCircle2,
  PhoneCall, Zap, Settings, ChevronRight, Mail, Factory,
  AlertTriangle, HelpCircle, Snowflake, Cpu, Activity, Info,
  Layout, Globe, Box, Gauge, Award, ArrowRight, ExternalLink,
  MapPin, Check, Building2, Wrench, FileSpreadsheet, Fan, Trophy, Star,
  Calculator, RotateCcw, FileText, CheckCircle, Sliders, Layers, HardHat
} from "lucide-react";

export default function HVACContractorMadhyaPradesh() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedHub, setSelectedHub] = useState("pithampur");
  const [activeProjectSector, setActiveProjectSector] = useState("all");

  // Interactive Plant Sizing & Tonnage Estimator
  const [plantArea, setPlantArea] = useState(25000); // Sq Ft
  const [industryType, setIndustryType] = useState("auto");
  const [ceilingHeight, setCeilingHeight] = useState(20); // Feet
  const [ambientTemp, setAmbientTemp] = useState(46); // Celsius summer peak
  const [calcResult, setCalcResult] = useState(null);

  const SUPPORT_URL = "/support-form";

  const calculatePlantHVAC = () => {
    const area = Number(plantArea) || 1000;
    const height = Number(ceilingHeight) || 12;
    const ambient = Number(ambientTemp) || 44;
    const volume = area * height;

    let airChangesPerHour = 22;
    let sqftPerTR = 320;
    let primarySystem = "Double-Skin Industrial AHU + Cellulose Pad Air Washer System";
    let scopeDeliverables = "Factory Floor Duct Distribution, Motorized Dampers & Integrated Automation";

    if (industryType === "pharma") {
      airChangesPerHour = 32;
      sqftPerTR = 180;
      primarySystem = "ISO Class 5-8 Cleanroom Double-Skin Antibacterial AHU + Chilled Water Loop";
      scopeDeliverables = "Terminal HEPA Housings, Laminar Flow Stations, Pressure Cascade Balancing";
    } else if (industryType === "auto") {
      airChangesPerHour = 26;
      sqftPerTR = 280;
      primarySystem = "Two-Stage Industrial Evaporative Air Washers + Heavy GI Process Exhaust";
      scopeDeliverables = "High-Static DIDW Blowers, Heavy Spiral Ducting, Automatic Sump Circulation";
    } else if (industryType === "solar") {
      airChangesPerHour = 24;
      sqftPerTR = 220;
      primarySystem = "Process Chiller Plant (up to 630 TR) + Primary-Secondary Variable Chilled Pumping";
      scopeDeliverables = "Insulated Chilled Water Header Piping, Cooling Towers & CPM Plant Control";
    } else if (industryType === "warehouse") {
      airChangesPerHour = 16;
      sqftPerTR = 420;
      primarySystem = "Sensible Cooling Units (SCU) + High-Static Basework Jet Fan Ventilation";
      scopeDeliverables = "Impulse Jet Fans, Smoke Evacuation Louvers, CO Sensor Network Integration";
    }

    const ambientMultiplier = ambient > 44 ? 1 + ((ambient - 44) * 0.035) : 1.0;
    const cfm = Math.round((volume * airChangesPerHour) / 60);
    const estimatedTR = Math.round((area / sqftPerTR) * ambientMultiplier);
    const ductStaticPressure = industryType === "pharma" ? "65 to 85 mm WG" : "40 to 55 mm WG";

    setCalcResult({
      cfm: cfm.toLocaleString('en-IN'),
      tr: estimatedTR.toLocaleString('en-IN'),
      system: primarySystem,
      deliverables: scopeDeliverables,
      staticPressure: ductStaticPressure,
      airChanges: airChangesPerHour
    });
  };

  // MPIDC & AKVN Industrial Corridors in Madhya Pradesh
  const mpidcHubs = {
    pithampur: {
      city: "Pithampur & Dhar",
      badge: "Detroit of India Corridor",
      title: "Top & Best HVAC Contractor in Pithampur (Sector 1, 2, 3, 4, 5 & SIP)",
      scope: "Automotive Stamping Ventilation, Heavy AHUs, Process Chilling & Shop-Floor Air Washers",
      sectors: "Automobile OEMs, Commercial Vehicles, Precision Forging, Tyre Ancillaries, EV Powertrains",
      deployedEquipment: "Industrial Air Washers (20,000–50,000 CFM), Central DX Chillers, Double-Skin AHUs",
      leadTime: "Direct Technical Mobilization from Regional Engineering Team",
      zones: ["Pithampur Industrial Area Sector 1, 2 & 3", "Pithampur Sector 4 & 5", "Smart Industrial Park (SIP)", "Dhar-Betma Industrial Belt"]
    },
    indore: {
      city: "Indore",
      badge: "Commercial & Pharma SEZ",
      title: "Top & Best HVAC Contractor in Indore (Sanwer Road & Pharma Clusters)",
      scope: "Turnkey Cleanroom HVAC, Double Skin Antibacterial AHUs, Hospital OTs & Chilled Water VRF",
      sectors: "Pharmaceutical Formulations, IT Parks, Electronic Systems, Apparel & Textile Parks",
      deployedEquipment: "Double-Skin Antibacterial AHUs, Terminal HEPA Plenums, Laminar Air Flow Stations, Chilled Water VRF",
      leadTime: "24 to 48 Hours Site Mobilization",
      zones: ["Sanwer Road Industrial Area", "Crystal IT Park", "Pithampur SEZ Node", "Apparel & Electronics Cluster"]
    },
    bhopal: {
      city: "Bhopal",
      badge: "Heavy Electricals & Process Zone",
      title: "Top & Best HVAC Contractor in Bhopal (Govindpura & Acharpura)",
      scope: "Heavy Electrical Bay HVAC, Transformer Room Ventilation, Cleanrooms & Impulse Jet Fans",
      sectors: "Heavy Electricals (BHEL Ancillaries), Chemical Processing, Transformer Bays, Textile Parks",
      deployedEquipment: "Thermal-Break AHUs, Flame-Proof Blowers, Basework Ventilation & Impulse Jet Fans",
      leadTime: "Direct Engineering Mobilization Across Bhopal Hub",
      zones: ["Govindpura Industrial Area", "Acharpura Industrial Park", "Bagroda Industrial Area", "Berasia Corridor"]
    },
    mandideep: {
      city: "Mandideep & Raisen",
      badge: "Heavy Process & Pharma Cluster",
      title: "Top & Best HVAC Contractor in Mandideep Industrial Area",
      scope: "Large-Scale Process Chiller Plants, Cellulose Air Washers & Pharma Cleanrooms",
      sectors: "Pharmaceuticals, Optical Fiber, Heavy Engineering, Food Processing & Polymers",
      deployedEquipment: "Central Chillers up to 630 TR, Primary-Secondary Pumping, Cellulose Air Washers, Double-Skin AHUs",
      leadTime: "Dedicated Turnkey Engineering Team",
      zones: ["Mandideep Phase I, II & III", "Tamot Plastic Park", "Pillukhedi Industrial Hub", "Bhojpur Corridor"]
    },
    dewas: {
      city: "Dewas & Ujjain",
      badge: "Chemical & Medical Device Belt",
      title: "Top & Best HVAC Contractor in Dewas & Vikram Udyogpuri Ujjain",
      scope: "Chemical Gas Phase Filtration, Cleanroom Suites & Process Air Conditioning",
      sectors: "Chemical Processing, Leather, Bulk Drugs, Medical Devices Park Ujjain",
      deployedEquipment: "SS 304/316 Cleanroom AHUs, Positive Pressure Cascades, Chemical Gas Scrubber Ducting, Air Washers",
      leadTime: "Turnkey Project Execution & Commissioning",
      zones: ["Dewas Industrial Area 1, 2 & 3", "Vikram Udyogpuri (VUL) Ujjain", "Medical Device Park", "Nagda Industrial Corridor"]
    },
    malanpur: {
      city: "Malanpur & Gwalior",
      badge: "Chambal Heavy Industrial Hub",
      title: "Top & Best HVAC Contractor in Malanpur & Banmore",
      scope: "Heavy Industrial GI Ducting, Process Dust Extraction, Central Chiller Automation",
      sectors: "Heavy Manufacturing, Food Processing, Synthetic Fibers, Automotive Testing Labs",
      deployedEquipment: "High-Static DIDW Fans, Heavy Spiral Ductwork, Industrial Water-Cooled Chillers, Cooling Towers",
      leadTime: "Turnkey Contracting & Maintenance Support",
      zones: ["Malanpur-Ghirongi Industrial Area", "Banmore Industrial Area", "Chainpura", "Gwalior Garment Park"]
    }
  };

  const projectCaseStudies = [
    {
      id: "bkt",
      client: "BKT Tires (Balkrishna Industries Ltd.)",
      location: "Industrial Corridor / Mega Manufacturing Plant",
      sector: "auto",
      orderValue: "₹32.00 Crore",
      scope: "Central Chiller Plant + AHU System + BMS Automation",
      specs: "Mega-scale central chilling system with primary-secondary pumping, low-vibration double-skin AHUs, and automated SCADA integration across industrial plant bays.",
      badge: "Turnkey Order: 32 Cr",
      standard: "ASHRAE / NBC 2016"
    },
    {
      id: "ais",
      client: "Asahi India Glass Limited (AIS)",
      location: "Central Manufacturing Belt",
      sector: "auto",
      orderValue: "₹8.00 Crore",
      scope: "Chiller Plant + Clean Rooms + Air Cooling with 2-Stage Air Washers",
      specs: "20+ Repeat Projects Delivered. Massive evaporative industrial air cooling with heavy-gauge sumps, overhead air distribution ducting, and positive pressure cleanrooms.",
      badge: "20+ Projects Completed",
      standard: "ISO 9001 / ISHRAE"
    },
    {
      id: "saatvik",
      client: "Saatvik Solar Industries Pvt. Ltd.",
      location: "Industrial Green Energy Belt",
      sector: "solar",
      orderValue: "630 TR Plant",
      scope: "Heavy-Duty Industrial Chiller Plant (630 TR Capacity)",
      specs: "2+ Projects Delivered. Precision chilled water loops, variable pumping automation, and process cooling modules for high-temperature solar PV cell fabrication rooms.",
      badge: "Mega Chiller: 630 TR",
      standard: "ASHRAE Standard 90.1"
    },
    {
      id: "mk-hosp",
      client: "MK Super Speciality Hospital",
      location: "Central Healthcare Zone",
      sector: "pharma",
      orderValue: "₹5.80 Crore",
      scope: "Central Chiller Plant + Cleanroom Hospital AHU Systems",
      specs: "Complete HVAC execution for operation theatres, isolation wards, and critical ICUs complying with strict NABH and Schedule M air changes.",
      badge: "NABH / Hospital Class",
      standard: "NABH / ISO 14644"
    },
    {
      id: "suncity",
      client: "Suncity Projects (Suncity Parikrama)",
      location: "High-Rise Commercial Corridor",
      sector: "commercial",
      orderValue: "₹4.00 Crore",
      scope: "Chiller Plant + Basement Mechanical Jet Fan Ventilation",
      specs: "6+ High-Rise Projects. CO sensor-integrated impulse jet fan ventilation, smoke extraction louvers, and dual-speed axial exhaust stations.",
      badge: "6+ High-Rise Towers",
      standard: "NBC / CPWD Norms"
    },
    {
      id: "johnson",
      client: "Johnson & Johnson",
      location: "Consumer Healthcare Facility",
      sector: "pharma",
      orderValue: "18+ Projects",
      scope: "Plant Renovation + Central Chiller & Cleanroom Systems",
      specs: "18+ Projects Delivered. High-integrity sanitary cleanrooms, chilled water piping, and automated environmental controls for consumer health production suites.",
      badge: "18+ Repeat Projects",
      standard: "cGMP / USFDA Class"
    },
    {
      id: "somany",
      client: "Somany Ceramics Limited",
      location: "Ceramic Industrial Cluster",
      sector: "auto",
      orderValue: "125 TR Chiller",
      scope: "Chiller Plant (125 TR) + Air Handling Units (AHU) & Ventilation",
      specs: "2+ Projects Delivered. Process chilling infrastructure and heavy-duty ventilation for press and glazing bays subject to high radiant temperatures.",
      badge: "125 TR Chiller Plant",
      standard: "Heavy Industrial Duty"
    },
    {
      id: "jay-ushin",
      client: "Jay Ushin Limited",
      location: "Automotive Ancillary Belt",
      sector: "auto",
      orderValue: "₹3.00 Crore",
      scope: "VRF Air Conditioning System + Industrial Plant Ventilation",
      specs: "6+ Automotive Plants Delivered. High-efficiency VRF systems and plant shop floor air changes for automated auto component stamping lines.",
      badge: "6+ Auto Plants",
      standard: "Auto OEM Standards"
    },
    {
      id: "abdos",
      client: "Abdos Labtech Pvt. Ltd.",
      location: "Industrial Laboratory Facility",
      sector: "pharma",
      orderValue: "₹2.20 Crore",
      scope: "Cleanroom Suite + VRV Heat Recovery & Precision AHUs",
      specs: "2+ Projects Delivered. Turnkey diagnostic laboratory cleanroom with interlocking air showers, precision AHUs, and automated pressure cascading differential controls.",
      badge: "ISO Class 7 Cleanroom",
      standard: "ISO 14644 / Schedule M"
    }
  ];

  const filteredProjects = activeProjectSector === "all" 
    ? projectCaseStudies 
    : projectCaseStudies.filter(p => p.sector === activeProjectSector);

  const faqs = [
    {
      q: "Why is Adhunik Powertech considered the best HVAC contractor in Madhya Pradesh?",
      a: "With over 600+ projects delivered nationwide since 2005, Adhunik Powertech is recognized as a premier turnkey HVAC company serving Madhya Pradesh's key industrial hubs. We design, execute, and commission complete turnkey mechanical HVAC projects—including double-skin AHUs, central chillers up to 630 TR, evaporative air washers, and integrated control panels—strictly adhering to NBC, CPWD, NABH, ISHRAE, and ASHRAE guidelines."
    },
    {
      q: "What scale of industrial HVAC projects does Adhunik Powertech handle?",
      a: "We execute industrial and commercial HVAC contracts of all sizes, from mid-tier cleanroom suites to mega projects like BKT Tires (₹32 Cr), AIS Glass (₹8 Cr, 20+ projects), Saatvik Solar (630 TR chiller plant), and Johnson & Johnson (18+ plant projects). Our in-house engineering team manages heat load audits, equipment fabrication, duct erection, and final TAB validation."
    },
    {
      q: "Which industrial corridors in Madhya Pradesh do you serve directly?",
      a: "As a leading industrial HVAC contractor in Madhya Pradesh, we provide turnkey engineering across Pithampur (Detroit of India), Indore, Bhopal (Govindpura, Acharpura), Mandideep, Dewas, Malanpur-Gwalior, Ujjain (Vikram Udyogpuri), and Jabalpur."
    },
    {
      q: "Do you execute certified cleanroom HVAC projects for Pharma plants in MP?",
      a: "Yes. For pharmaceutical facilities in Indore, Dewas, and Mandideep, Adhunik Powertech provides complete cleanroom HVAC contracting complying with ISO 14644, Schedule M, and USFDA standards. Our scope covers double-skin antibacterial AHUs, terminal HEPA boxes, laminar flow stations, and automated pressure cascade differential controls."
    },
    {
      q: "Can PSUs, defense units, and government departments in Madhya Pradesh procure via GeM?",
      a: "Yes. Adhunik Powertech is an authorized OEM on the Government e-Marketplace (GeM), allowing PSUs like BHEL Bhopal, defense establishments in Jabalpur, and state bodies across Madhya Pradesh to procure turnkey HVAC equipment and contracting services directly under GFR Rule 149."
    }
  ];

  return (
    <div className="bg-white text-slate-800 pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. HERO SECTION */}
        <section className="mb-16">
          <div className="border border-cyan-100 rounded-3xl p-8 lg:p-12 bg-gradient-to-br from-white via-cyan-50/20 to-slate-50 shadow-sm relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100/70 border border-cyan-300 text-cyan-900 text-xs font-bold tracking-wide uppercase">
                  <Trophy className="w-4 h-4 text-cyan-700" /> Best & Top HVAC Company in Madhya Pradesh
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cyan-900 leading-tight tracking-tight">
                  Top & Best HVAC Contractor in <span className="text-cyan-700">Madhya Pradesh</span>
                </h1>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Looking for the <strong>best HVAC contractor in Madhya Pradesh</strong>? With over <strong>600+ turnkey projects delivered</strong> since 2005, Adhunik Powertech executes large-scale industrial HVAC projects: Double-Skin Air Handling Units (AHU), Cleanrooms, Central Process Chillers (up to 630 TR), Industrial Air Washers, and Basement Ventilation across Pithampur, Indore, Bhopal, Mandideep, and Malanpur.
                </p>

                {/* Standards Grid */}
                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  {["NBC 2016 Compliant", "CPWD Guidelines", "NABH Hospital Standards", "ISHRAE / ASHRAE Standards"].map((std, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-semibold shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> {std}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-3">
                  <a
                    href="#calculator"
                    className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2"
                  >
                    <Calculator className="w-4 h-4" /> Plant HVAC Capacity & Tonnage Calculator
                  </a>
                  <a
                    href="tel:8287885885"
                    className="bg-white hover:bg-slate-50 text-cyan-900 font-bold text-xs px-6 py-3.5 rounded-xl border border-cyan-200 shadow-xs transition-all flex items-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-cyan-700" /> Toll Free: 8287-885-885
                  </a>
                </div>
              </div>

              {/* Verified Catalogue Summary Card */}
              <div className="lg:col-span-5 bg-white rounded-2xl border border-cyan-200 p-6 sm:p-7 shadow-lg">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-cyan-700 tracking-wider">Documented Catalogue Record</span>
                    <div className="text-base font-extrabold text-slate-900">Adhunik Delivered Projects</div>
                  </div>
                  <span className="bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs font-bold px-2.5 py-1 rounded-md">
                    2005 - 2026
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-cyan-50/50 border border-cyan-100">
                    <div className="text-2xl font-black text-cyan-800">600+</div>
                    <div className="text-[11px] text-slate-600 font-medium">Turnkey Projects</div>
                  </div>
                  <div className="p-3 rounded-xl bg-cyan-50/50 border border-cyan-100">
                    <div className="text-2xl font-black text-cyan-800">250+</div>
                    <div className="text-[11px] text-slate-600 font-medium">Air Conditioning (DX/Chiller)</div>
                  </div>
                  <div className="p-3 rounded-xl bg-cyan-50/50 border border-cyan-100">
                    <div className="text-2xl font-black text-cyan-800">200+</div>
                    <div className="text-[11px] text-slate-600 font-medium">Air Cooling & Washers</div>
                  </div>
                  <div className="p-3 rounded-xl bg-cyan-50/50 border border-cyan-100">
                    <div className="text-2xl font-black text-cyan-800">100+</div>
                    <div className="text-[11px] text-slate-600 font-medium">Cleanroom & Hospital OTs</div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Head Office: DLF Corporate Greens, Gurugram</span>
                  <span className="text-cyan-700 font-bold">Turnkey OEM</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. INTERACTIVE PLANT CAPACITY ESTIMATOR */}
        <section id="calculator" className="mb-20 bg-slate-900 text-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <Calculator className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Madhya Pradesh Plant HVAC Sizing Calculator
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
              Estimate required airflow (CFM), cooling tonnage, and system configurations based on plant type and peak summer ambient temperatures:
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8 text-slate-800">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Industry / Process Sector</label>
                <select
                  value={industryType}
                  onChange={(e) => setIndustryType(e.target.value)}
                  className="w-full bg-white p-3 rounded-xl text-xs font-bold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="auto">Automotive / Stamping (Pithampur / Malanpur)</option>
                  <option value="pharma">Pharma Cleanroom / Bulk Drug (Indore / Dewas / Mandideep)</option>
                  <option value="solar">Solar PV Module / Electronics (Ujjain / Sagar)</option>
                  <option value="warehouse">Food Processing / Warehouse (Bhopal / Dewas)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Floor Area (Sq. Ft.)</label>
                <input
                  type="number"
                  value={plantArea}
                  onChange={(e) => setPlantArea(Number(e.target.value))}
                  className="w-full bg-white p-3 rounded-xl text-xs font-bold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Ceiling Height (Ft.)</label>
                <input
                  type="number"
                  value={ceilingHeight}
                  onChange={(e) => setCeilingHeight(Number(e.target.value))}
                  className="w-full bg-white p-3 rounded-xl text-xs font-bold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Summer Ambient Peak (°C)</label>
                <input
                  type="number"
                  value={ambientTemp}
                  onChange={(e) => setAmbientTemp(Number(e.target.value))}
                  className="w-full bg-white p-3 rounded-xl text-xs font-bold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <button
              onClick={calculatePlantHVAC}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Calculator className="w-4 h-4" /> Compute Airflow (CFM) & Required Capacity
            </button>

            {calcResult && (
              <div className="mt-8 pt-8 border-t border-slate-800 grid md:grid-cols-4 gap-6">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Total Airflow Required</div>
                  <div className="text-xl font-bold text-cyan-400 mt-1">{calcResult.cfm} CFM</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{calcResult.airChanges} Air Changes / Hr</div>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Estimated Capacity</div>
                  <div className="text-xl font-bold text-emerald-400 mt-1">{calcResult.tr} TR</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">High-Ambient Peak Sizing</div>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Duct Static Head</div>
                  <div className="text-lg font-bold text-white mt-1">{calcResult.staticPressure}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">External Static Pressure</div>
                </div>

                <div className="bg-cyan-950/80 p-4 rounded-xl border border-cyan-800">
                  <div className="text-[11px] text-cyan-300 uppercase font-bold">Recommended Architecture</div>
                  <div className="text-xs font-bold text-white mt-1 leading-snug">{calcResult.system}</div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 3. VERIFIED PROJECT COMPLETION SHOWCASE */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-cyan-700 font-bold text-xs uppercase tracking-wide">
                <Award className="w-4 h-4" /> Major Industrial Work Orders
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-cyan-900 mt-1">
                Documented Landmark Projects (Up to ₹32 Crore Value)
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs font-bold">
              {[
                { id: "all", label: "All Contracts" },
                { id: "auto", label: "Auto & Heavy Mfg" },
                { id: "pharma", label: "Cleanroom / Hospitals" },
                { id: "solar", label: "Solar / Megawatt Plants" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveProjectSector(tab.id)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeProjectSector === tab.id
                      ? "bg-cyan-700 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-cyan-400 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200">
                      {project.badge}
                    </span>
                    <span className="text-sm font-black text-cyan-700">
                      {project.orderValue}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-800 transition-colors">
                    {project.client}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{project.location}</span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 mb-3 space-y-1">
                    <div className="text-cyan-800 font-bold text-[11px]">System Scope:</div>
                    <div className="font-semibold text-slate-800">{project.scope}</div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {project.specs}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Standard: <strong className="text-slate-700">{project.standard}</strong></span>
                  <span className="text-cyan-700 font-bold flex items-center gap-1">
                    Verified Execution <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TURNKEY PROJECT EXECUTION METHODOLOGY */}
        <section className="mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">End-to-End Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-cyan-900 mt-1">
              5-Stage Turnkey HVAC Project Delivery Model
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              We execute complete HVAC projects in-house without multi-tier subcontractors, ensuring strict quality control and predictable delivery timelines:
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-xs mb-3">
                01
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1">Heat-Load Audit</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Site CFM assessment, psychrometric analysis for local MP ambient peaks, and sensible vs. latent load calculations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-xs mb-3">
                02
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1">Equipment Selection</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Double-skin AHU sizing, industrial chiller tonnage selection, cooling tower matching, and custom electrical panel design.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-xs mb-3">
                03
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1">In-House Fab</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Manufacturing of double-skin AHUs, CNC automated GI duct fabrication, and electrical control panel wiring and testing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-xs mb-3">
                04
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1">Site Erection</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                On-site duct installation, chilled water piping, thermal insulation, motorized damper integration, and cable scheduling.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-xs mb-3">
                05
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1">TAB & Handover</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Testing, Adjusting & Balancing (TAB) of airflow CFM, pressure cascades, temperature mapping, and formal validation documentation.
              </p>
            </div>
          </div>
        </section>

        {/* 5. MPIDC REGIONAL INDUSTRIAL HUBS WORK-ORDER INSPECTOR */}
        <section className="bg-slate-50 rounded-3xl border border-slate-200 p-8 lg:p-12 mb-20 shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Territorial Industrial Hubs</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-cyan-900 mt-1">
              Top and Best HVAC Contractor Across MP Industrial Corridors
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Select an MPIDC / AKVN industrial cluster to view tailored HVAC solutions, cleanroom setups, and active industrial areas:
            </p>
          </div>

          {/* City Selection Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.keys(mpidcHubs).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedHub(key)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedHub === key
                    ? "bg-cyan-700 text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {mpidcHubs[key].city}
              </button>
            ))}
          </div>

          {/* Selected City Content Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 pb-4 mb-6">
              <div>
                <span className="text-[10px] text-cyan-700 uppercase tracking-widest font-bold">{mpidcHubs[selectedHub].badge}</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">{mpidcHubs[selectedHub].title}</h3>
              </div>
              <span className="px-3 py-1 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold">
                {mpidcHubs[selectedHub].leadTime}
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-xs">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-slate-500 uppercase text-[10px] font-bold block mb-1">Turnkey Scope</span>
                <p className="text-slate-700 leading-relaxed font-semibold">{mpidcHubs[selectedHub].scope}</p>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-cyan-800 font-medium">
                  Sectors: {mpidcHubs[selectedHub].sectors}
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-slate-500 uppercase text-[10px] font-bold block mb-1">Deployed Plant Equipment</span>
                <p className="text-slate-700 leading-relaxed font-semibold">{mpidcHubs[selectedHub].deployedEquipment}</p>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-emerald-700 font-medium">
                  Ambient Rating: Continuous +45°C to +55°C
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-slate-500 uppercase text-[10px] font-bold block mb-1">Key MPIDC Industrial Areas Covered</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {mpidcHubs[selectedHub].zones.map((zone, idx) => (
                      <span key={idx} className="bg-white text-slate-700 px-2 py-1 rounded border border-slate-200 text-[10px] font-medium">
                        {zone}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-slate-500 text-[10px] font-medium">Site Visit In {mpidcHubs[selectedHub].city}?</span>
                  <Link
                    href={SUPPORT_URL}
                    className="text-cyan-700 hover:text-cyan-900 font-bold flex items-center gap-1 hover:underline text-[11px]"
                  >
                    Deploy Engineer <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. HIGH-CONVERSION CTA */}
        <section className="bg-cyan-900 rounded-3xl p-8 lg:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Turnkey Project Proposals</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Request an MP Plant Site Inspection & Heat Load Assessment
            </h2>
            <p className="text-xs text-cyan-100 leading-relaxed">
              Connect with our senior HVAC application engineers for complete plant CFM calculations, cleanroom duct layouts, and turnkey BOQ proposals across Madhya Pradesh.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href="tel:8287885885"
              className="bg-white hover:bg-slate-100 text-cyan-950 font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-cyan-700" /> Call 8287-885-885
            </a>
            <Link
              href={SUPPORT_URL}
              className="bg-cyan-800 border border-cyan-700 hover:bg-cyan-700 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" /> Submit Tender BOQ
            </Link>
          </div>
        </section>

        {/* 7. FAQ ACCORDION */}
        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-extrabold text-cyan-900 mb-8 text-center flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-700" /> Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-xs">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left p-5 font-bold text-xs sm:text-sm text-slate-800 flex justify-between items-center transition-colors hover:bg-slate-50"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-4 h-4 text-cyan-700 transition-transform duration-200 shrink-0 ${openIndex === i ? 'rotate-90' : ''}`} />
                </button>
                {openIndex === i && (
                  <div className="p-5 text-xs text-slate-600 bg-slate-50 border-t border-slate-100 leading-relaxed font-sans">
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