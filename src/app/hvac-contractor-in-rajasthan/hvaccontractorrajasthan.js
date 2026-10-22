"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import {
  ShieldCheck, Thermometer, Wind, CheckCircle2,
  PhoneCall, Zap, Settings, ChevronRight, Mail, Factory,
  AlertTriangle, HelpCircle, Snowflake, Cpu, Activity, Info,
  Layout, Globe, Box, Gauge, Award, ArrowRight, ExternalLink,
  MapPin, Check, Building2, Wrench, FileSpreadsheet, Fan, Trophy, Star,
  Calculator, RotateCcw, FileText, CheckCircle, Sliders
} from "lucide-react";

export default function HVACContractorRajasthan() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedHub, setSelectedHub] = useState("jaipur");
  const [activeProjectSector, setActiveProjectSector] = useState("all");

  // Interactive Plant Heat-Load & CFM Estimator State
  const [plantArea, setPlantArea] = useState(15000); // Sq Ft
  const [industryType, setIndustryType] = useState("auto");
  const [ceilingHeight, setCeilingHeight] = useState(18); // Feet
  const [calcResult, setCalcResult] = useState(null);

  const MAIN_PRODUCT_URL = "https://www.adhunikpowertech.com/panel-air-conditioners";
  const SUPPORT_URL = "/support-form";

  // Calculator Logic tailored for Rajasthan's arid/high-heat psychrometrics
  const calculatePlantHVAC = () => {
    const area = Number(plantArea) || 1000;
    const height = Number(ceilingHeight) || 12;
    const volume = area * height;

    let airChangesPerHour = 20; // default industrial
    let sqftPerTR = 350;
    let primarySystem = "Double-Skin AHU + Air Washer";

    if (industryType === "pharma") {
      airChangesPerHour = 30;
      sqftPerTR = 200;
      primarySystem = "ISO Class Cleanroom Double-Skin AHU with Terminal HEPA & DX Chiller";
    } else if (industryType === "auto") {
      airChangesPerHour = 25;
      sqftPerTR = 300;
      primarySystem = "Industrial Evaporative Air Washers + 55°C Panel ACs for CNC/VFDs";
    } else if (industryType === "solar") {
      airChangesPerHour = 22;
      sqftPerTR = 250;
      primarySystem = "Central Process Chiller Plant (Saatvik Solar Class) + High-Static AHUs";
    } else if (industryType === "warehouse") {
      airChangesPerHour = 15;
      sqftPerTR = 450;
      primarySystem = "Sensible Cooling Units (SCU) + Basement Jet Fan Ventilation";
    }

    const cfm = Math.round((volume * airChangesPerHour) / 60);
    const estimatedTR = Math.round(area / sqftPerTR);
    const ductStaticPressure = industryType === "pharma" ? "65 to 80 mm WG" : "35 to 50 mm WG";

    setCalcResult({
      cfm: cfm.toLocaleString('en-IN'),
      tr: estimatedTR.toLocaleString('en-IN'),
      system: primarySystem,
      staticPressure: ductStaticPressure,
      airChanges: airChangesPerHour
    });
  };

  const projectCaseStudies = [
    {
      id: "bkt",
      client: "BKT Tires (Balkrishna Industries Ltd.)",
      location: "Bhuj Plant / Industrial Corridor",
      sector: "auto",
      orderValue: "₹32.00 Crore",
      scope: "Central Chiller Plant + AHU System + BMS Automation",
      specs: "Mega-scale central chilling system with primary-secondary pumping, low-vibration double-skin AHUs, and automated SCADA integration.",
      badge: "Turnkey Order: 32 Cr",
      standard: "ASHRAE / NBC 2016"
    },
    {
      id: "ais",
      client: "Asahi India Glass Limited (AIS)",
      location: "Bawal / Rajasthan Border Corridor",
      sector: "auto",
      orderValue: "₹8.00 Crore",
      scope: "Chiller Plant + Clean Rooms + Air Cooling with Air Washers",
      specs: "20+ Repeat Projects Delivered. Massive evaporative industrial air cooling with heavy-gauge sumps, air distribution ducting, and positive pressure cleanrooms.",
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
      specs: "2+ Projects Delivered. Precision chilled water loops and process cooling modules designed for high-temperature solar PV cell and module fabrication rooms.",
      badge: "Mega Chiller: 630 TR",
      standard: "ASHRAE Standard 90.1"
    },
    {
      id: "mk-hosp",
      client: "MK Super Speciality Hospital",
      location: "NCR / Haryana Region",
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
      location: "Panchkula / Tri-City Corridor",
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
      location: "Haridwar / Healthcare Manufacturing Belt",
      sector: "pharma",
      orderValue: "18+ Projects",
      scope: "Plant Renovation + Central Chiller Plant Systems",
      specs: "18+ Projects Delivered. High-integrity sanitary cleanrooms, chilled water piping, and precision humidity control for consumer health production suites.",
      badge: "18+ Repeat Projects",
      standard: "cGMP / USFDA Class"
    },
    {
      id: "positron",
      client: "Positron Multi Speciality & Cancer Hospital",
      location: "Rohtak Medical Hub",
      sector: "pharma",
      orderValue: "325 TR Plant",
      scope: "Central Hospital Chiller Plant (325 TR) + Dedicated AHUs",
      specs: "5+ Hospital Projects Delivered. Turnkey oncology wing climate control, laminar airflow surgical suites, and dedicated medical air treatment units.",
      badge: "325 TR / 5+ Wings",
      standard: "NABH / cGMP"
    },
    {
      id: "jay-ushin",
      client: "Jay Ushin Limited",
      location: "Gurugram / NCR Automotive Belt",
      sector: "auto",
      orderValue: "₹3.00 Crore",
      scope: "VRF Air Conditioning System + Industrial Plant Ventilation",
      specs: "6+ Automotive Plants Delivered. High-efficiency variable refrigerant flow systems and plant shop floor air changes for automated auto component stamping lines.",
      badge: "6+ Auto Plants",
      standard: "Auto OEM Standards"
    },
    {
      id: "somany",
      client: "Somany Ceramics Limited",
      location: "Ceramic Tile Industrial Cluster",
      sector: "auto",
      orderValue: "125 TR Chiller",
      scope: "HVAC with DX System",
      specs: "2+ Projects Delivered. Process chilling infrastructure and heavy-duty ventilation for press and glazing bays subject to high radiant kiln temperatures.",
      badge: "125 TR Chiller Plant",
      standard: "Heavy Industrial Duty"
    },
    {
      id: "abdos",
      client: "Abdos Labtech Pvt. Ltd.",
      location: "Roorkee Industrial Area",
      sector: "pharma",
      orderValue: "₹2.20 Crore",
      scope: "Cleanroom with DX System, VRV Heat Recovery & Precision AHUs",
      specs: "2+ Projects Delivered. Turnkey diagnostic laboratory cleanroom with terminal HEPA filter plenums, interlocking air showers, and pressure cascading differential gauges.",
      badge: "ISO Class 7 Cleanroom",
      standard: "ISO 14644 / Schedule M"
    },
    {
      id: "brookfield",
      client: "Brookfield",
      location: "Commercial Office Campuses",
      sector: "commercial",
      orderValue: "15+ Projects",
      scope: "Comfort Heating & Cooling + Chilled Water Loops",
      specs: "15+ Projects Delivered. High-efficiency centralized chiller distribution, variable air volume (VAV) controls, and fresh air ventilation for Grade-A office parks.",
      badge: "15+ Office Campuses",
      standard: "NBC / ASHRAE 62.1"
    },
    {
      id: "bigbasket",
      client: "BigBasket (A TATA Enterprise)",
      location: "Cold Chain & Fulfillment Centers",
      sector: "commercial",
      orderValue: "7+ Projects",
      scope: "Industrial Air Cooling & Temperature-Controlled Storage",
      specs: "7+ Projects Delivered. Evaporative cooling systems, high-volume air distribution, and humidity management for large-scale grocery distribution hubs.",
      badge: "7+ Hubs Completed",
      standard: "FMCG Cold Chain Norms"
    }
  ];

  const riicoHubs = {
    jaipur: {
      city: "Jaipur",
      title: "Top & Best HVAC Contractor in Jaipur (Sitapura, VKI & MWC)",
      scope: "Turnkey Cleanroom HVAC, Double Skin AHUs & Chilled Water Piping",
      sectors: "Pharma Formulations, IT Campuses, Jewelry & Diamond SEZ, Healthcare",
      deployedEquipment: "Custom Double-Skin AHUs (10,000–35,000 CFM), Terminal HEPA Boxes, VRF Central Loops",
      leadTime: "24 to 48 Hours Site Mobilization",
      zones: ["Sitapura Industrial Area", "Vishwakarma (VKI) Area", "Mahindra World City (MWC)", "Mansarovar RIICO Area"]
    },
    bhiwadi: {
      city: "Bhiwadi",
      title: "Top & Best HVAC Contractor in Bhiwadi & Khushkhera",
      scope: "Industrial Air Washers, Panel ACs up to 55°C, Process Exhaust Systems",
      sectors: "Automotive Stamping, Electrical Panel Fabrication, Glass, Ancillaries & Plastics",
      deployedEquipment: "Two-stage Cellulose Pad Air Washers (20,000+ CFM), Heavy Duty GI Ducting, Panel ACs (250W–7000W)",
      leadTime: "Immediate Dispatch from NCR Hub",
      zones: ["RIICO Industrial Area Bhiwadi", "Khushkhera Industrial Area", "Chopanaki Hub", "Salarpur Mega Zone"]
    },
    neemrana: {
      city: "Neemrana",
      title: "Top & Best HVAC Contractor in Neemrana & Japanese Zone",
      scope: "Precision Japanese OEM Cleanrooms, BMS Integration, Chiller Automation",
      sectors: "Precision Electronics, Japanese Industrial Zone (JETRO), Automotive Assembly",
      deployedEquipment: "Low-Dewpoint Dehumidification AHUs, Chiller Plant Managers (CPM), High-Static Plenum Units",
      leadTime: "Same-Day Engineering Coordination",
      zones: ["Japanese Industrial Zone Neemrana", "RIICO Phase I & II", "Shahjahanpur", "Behror Corridor"]
    },
    jodhpur: {
      city: "Jodhpur",
      title: "Top & Best HVAC Contractor in Jodhpur & Western Rajasthan",
      scope: "Evaporative Cooling Air Washers, Substation Switchgear Enclosure ACs",
      sectors: "Textile Processing, Heavy Handicrafts, Chemical Plants & Solar Sub-stations",
      deployedEquipment: "Sensible Cooling Units (SCU), Axial Exhaust Blowers, Stand-Alone Enclosure Coolers",
      leadTime: "Direct Field Team Dispatch",
      zones: ["Basni Industrial Area", "Boronada SEZ", "Mandore Industrial Area", "Pali Textile Cluster"]
    },
    udaipur: {
      city: "Udaipur",
      title: "Top & Best HVAC Contractor in Udaipur & Bhilwara",
      scope: "Heavy Industrial Ventilation, Dust Extraction & Process Heat Removal",
      sectors: "Mineral Processing, Synthetic Textiles, Cement Kilns & Heavy Fabrication",
      deployedEquipment: "Heavy Gauge Spiral Ducts, Axial Flow Fans, Industrial Cooling Towers, Chilled Water AHUs",
      leadTime: "Dedicated Rajasthan Service Team",
      zones: ["MIA Madri Udaipur", "Sukher Industrial Area", "Bhilwara Textile Hub", "Chittorgarh Belt"]
    },
    kota: {
      city: "Kota",
      title: "Top & Best HVAC Contractor in Kota & Hadoti Region",
      scope: "Corrosion-Resistant SS304/SS316 Systems, Chemical Fume Scrubber Ventilation",
      sectors: "Chemical Processing, Thermal Power Auxiliaries, Fertilizers & Polymer Molding",
      deployedEquipment: "SS 304 Casing Air Handling Units, Chemical Gas Phase Filtration, Heavy Duty Industrial Blowers",
      leadTime: "Turnkey Project Execution",
      zones: ["Kota Industrial Area", "Ranpur Industrial Area", "Indraprastha Industrial Area"]
    }
  };

  const filteredProjects = activeProjectSector === "all" 
    ? projectCaseStudies 
    : projectCaseStudies.filter(p => p.sector === activeProjectSector);

  const faqs = [
    {
      q: "Why is Adhunik Powertech considered the best HVAC contractor in Rajasthan?",
      a: "With over 600+ projects delivered nationwide since 2005, Adhunik Powertech is recognized as the best and top HVAC company in Rajasthan. We have completed documented milestone contracts including BKT Tires (₹32 Cr), AIS Glass (₹8 Cr, 20+ projects), MK Super Speciality Hospital (₹5.8 Cr), Suncity Projects (₹4 Cr), and Saatvik Solar (630 TR chiller plant), engineered strictly under NBC, CPWD, NABH, ISHRAE, and ASHRAE guidelines."
    },
    {
      q: "What makes Adhunik a top HVAC company in Rajasthan compared to local unorganized contractors?",
      a: "Unlike local unorganized fabricators, Adhunik is an ISO 9001:2015, CE-certified OEM with full in-house capabilities: double-skin AHU manufacturing, industrial air washer fabrication, automated CNC duct manufacturing, and turnkey testing, adjusting & balancing (TAB). We provide formal project handover documents with certified air changes, pressure cascade logs, and warranty execution."
    },
    {
      q: "Who is the best HVAC contractor in Jaipur for pharma cleanrooms and hospitals?",
      a: "Adhunik Powertech is rated among the top HVAC contractors in Jaipur for cleanroom applications across Sitapura, VKI, and Mahindra World City. Having delivered 100+ cleanroom and OT projects for clients like Abdos Labtech, Johnson & Johnson, and Positron Hospital, we guarantee strict ISO 14644 and Schedule M pressure cascade compliance."
    },
    {
      q: "How do your HVAC designs handle extreme dry summer heat (45°C–50°C) across Rajasthan?",
      a: "We engineer systems based on Rajasthan's dry-bulb and wet-bulb psychrometrics. For high-sensible heat loads with large fresh-air demands, we deploy two-stage industrial evaporative air washers and Sensible Cooling Units (SCU) that reduce power consumption by up to 40% compared to conventional DX systems."
    },
    {
      q: "Can government entities and PSUs in Rajasthan procure your HVAC systems via GeM?",
      a: "Yes. Adhunik Powertech is an authorized OEM on the Government e-Marketplace (GeM) with active catalog listings (Variant ID: 5116877-574145587), allowing PSUs, defense units, and state agencies in Rajasthan to procure directly under GFR Rule 149."
    }
  ];

  return (
    <div className="bg-white text-slate-800 pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. ADHUNIK THEME HERO SECTION */}
        <section className="mb-16">
          <div className="border border-cyan-100 rounded-3xl p-8 lg:p-12 bg-gradient-to-br from-white via-cyan-50/20 to-slate-50 shadow-sm relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100/70 border border-cyan-300 text-cyan-900 text-xs font-bold tracking-wide uppercase">
                  <Trophy className="w-4 h-4 text-cyan-700" /> Top & Best HVAC Company in Rajasthan
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cyan-900 leading-tight tracking-tight">
                  Top & Best HVAC Contractor in <span className="text-cyan-700">Rajasthan</span>
                </h1>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  With over <strong>600+ projects delivered</strong> since 2005, Adhunik Powertech is recognized as the leading industrial turnkey HVAC company in Rajasthan. We engineer, fabricate, and install heavy-duty Double-Skin AHUs, Chiller Plants, Cleanrooms, and 2-Stage Evaporative Air Washers built to handle desert ambient heat exceeding 48°C.
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
                    <Calculator className="w-4 h-4" /> Plant CFM & Tonnage Calculator
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

        {/* 2. INTERACTIVE RAJASTHAN PLANT CFM & TONNAGE ESTIMATOR */}
        <section id="calculator" className="mb-20 bg-slate-900 text-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <Calculator className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Rajasthan Industrial Plant HVAC Sizing Calculator
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
              Estimate airflow requirements (CFM), required chiller/cooling tonnage, and recommended psychrometric systems customized for Rajasthan&apos;s high dry-bulb temperatures:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8 text-slate-800">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Industry / Process Sector</label>
                <select
                  value={industryType}
                  onChange={(e) => setIndustryType(e.target.value)}
                  className="w-full bg-white p-3 rounded-xl text-xs font-bold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="auto">Automotive / Metal Stamping / CNC Machine Bay</option>
                  <option value="pharma">Pharma Cleanroom / Diagnostic Lab (ISO 7/8)</option>
                  <option value="solar">Solar PV Module / Electronics Fab Clean Zone</option>
                  <option value="warehouse">Industrial Warehousing / FMCG Packaging</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Floor Surface Area (Sq. Ft.)</label>
                <input
                  type="number"
                  value={plantArea}
                  onChange={(e) => setPlantArea(Number(e.target.value))}
                  className="w-full bg-white p-3 rounded-xl text-xs font-bold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Plant Bay Clear Ceiling Height (Ft.)</label>
                <input
                  type="number"
                  value={ceilingHeight}
                  onChange={(e) => setCeilingHeight(Number(e.target.value))}
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
                  <div className="text-[10px] text-slate-400 mt-0.5">High-Ambient Sizing Base</div>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Duct Static Head</div>
                  <div className="text-lg font-bold text-white mt-1">{calcResult.staticPressure}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Static External Pressure</div>
                </div>

                <div className="bg-cyan-950/80 p-4 rounded-xl border border-cyan-800">
                  <div className="text-[11px] text-cyan-300 uppercase font-bold">Recommended Architecture</div>
                  <div className="text-xs font-bold text-white mt-1 leading-snug">{calcResult.system}</div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 3. VERIFIED PROJECT COMPLETION SHOWCASE (Adhunik Project Dossier) */}
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
                { id: "solar", label: "Solar / Megawatt Plants" },
                { id: "commercial", label: "Real Estate & Offices" }
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

        {/* 4. RAJASTHAN RIICO INDUSTRIAL HUBS WORK-ORDER INSPECTOR */}
        <section className="bg-slate-50 rounded-3xl border border-slate-200 p-8 lg:p-12 mb-20 shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Territorial Industrial Hubs</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-cyan-900 mt-1">
              Top and Best HVAC Contractor Across Rajasthan Hubs
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Select an industrial district to view tailored HVAC solutions, cleanroom setups, and active RIICO clusters:
            </p>
          </div>

          {/* City Selection Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.keys(riicoHubs).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedHub(key)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedHub === key
                    ? "bg-cyan-700 text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {riicoHubs[key].city}
              </button>
            ))}
          </div>

          {/* Selected City Content Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 pb-4 mb-6">
              <div>
                <span className="text-[10px] text-cyan-700 uppercase tracking-widest font-bold">Active District Deliverable</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">{riicoHubs[selectedHub].title}</h3>
              </div>
              <span className="px-3 py-1 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold">
                {riicoHubs[selectedHub].leadTime}
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-xs">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-slate-500 uppercase text-[10px] font-bold block mb-1">Turnkey Scope</span>
                <p className="text-slate-700 leading-relaxed font-semibold">{riicoHubs[selectedHub].scope}</p>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-cyan-800 font-medium">
                  Sectors: {riicoHubs[selectedHub].sectors}
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-slate-500 uppercase text-[10px] font-bold block mb-1">Deployed Plant Equipment</span>
                <p className="text-slate-700 leading-relaxed font-semibold">{riicoHubs[selectedHub].deployedEquipment}</p>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-emerald-700 font-medium">
                  Ambient Rating: Continuous +48°C to +55°C
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-slate-500 uppercase text-[10px] font-bold block mb-1">Key RIICO Industrial Clusters</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {riicoHubs[selectedHub].zones.map((zone, idx) => (
                      <span key={idx} className="bg-white text-slate-700 px-2 py-1 rounded border border-slate-200 text-[10px] font-medium">
                        {zone}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-slate-500 text-[10px] font-medium">Site Visit In {riicoHubs[selectedHub].city}?</span>
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

        {/* 5. TURNKEY INDUSTRIAL EQUIPMENT PORTFOLIO */}
        <section className="mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">In-House Manufacturing & Deployment</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-cyan-900 mt-1">
              Industrial HVAC Equipment & Products We Deploy
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Engineered and fabricated for continuous 24/7/365 heavy industrial service across extreme climates:
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 text-xs">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center flex flex-col items-center shadow-xs">
              <Fan className="w-8 h-8 text-cyan-700 mb-2" />
              <div className="font-bold text-slate-900 mb-1">Double Skin AHUs</div>
              <div className="text-[10px] text-slate-500">1,000 to 50,000 CFM Thermal Break</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center flex flex-col items-center shadow-xs">
              <Snowflake className="w-8 h-8 text-cyan-700 mb-2" />
              <div className="font-bold text-slate-900 mb-1">Industrial Chillers</div>
              <div className="text-[10px] text-slate-500">Air / Water Cooled up to 630 TR</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center flex flex-col items-center shadow-xs">
              <Wind className="w-8 h-8 text-cyan-700 mb-2" />
              <div className="font-bold text-slate-900 mb-1">Industrial Air Washers</div>
              <div className="text-[10px] text-slate-500">Cellulose Pad Evaporative Loops</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center flex flex-col items-center shadow-xs">
              <ShieldCheck className="w-8 h-8 text-cyan-700 mb-2" />
              <div className="font-bold text-slate-900 mb-1">Air Showers & HEPA</div>
              <div className="text-[10px] text-slate-500">ISO 14644 Cleanroom Pass-throughs</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center flex flex-col items-center shadow-xs">
              <Activity className="w-8 h-8 text-cyan-700 mb-2" />
              <div className="font-bold text-slate-900 mb-1">Impulse Jet Fans</div>
              <div className="text-[10px] text-slate-500">Basement Smoke Extraction</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center flex flex-col items-center shadow-xs">
              <Cpu className="w-8 h-8 text-cyan-700 mb-2" />
              <div className="font-bold text-slate-900 mb-1">Electrical Control Panel</div>
              <div className="text-[10px] text-slate-500">Customized Electrical Panel as per the site requirement</div>
            </div>
          </div>
        </section>

        {/* 6. VERIFIED INDUSTRIAL CLIENT MATRIX (Catalogue Grouping) */}
        <section className="bg-slate-50 rounded-3xl border border-slate-200 p-8 lg:p-12 mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Demonstrated Portfolio</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-cyan-900 mt-1">
              Sector-By-Sector Delivered Project Engagements
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Proven HVAC contracting track record across Fortune 500 enterprises, PSUs, and public institutions:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="text-cyan-800 font-bold uppercase text-[11px] border-b border-slate-100 pb-2">
                Automotive & Tires
              </div>
              <ul className="space-y-1.5 text-slate-600 font-medium">
                <li>• Maruti Suzuki (Manesar)</li>
                <li>• Hero MotoCorp</li>
                <li>• BKT Tires (₹32 Cr Plant)</li>
                <li>• Jay Ushin Ltd (6+ Projects)</li>
                <li>• Jamna Auto Industries (JAI)</li>
                <li>• Lear Corporation</li>
                <li>• Diamond Electric</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="text-cyan-800 font-bold uppercase text-[11px] border-b border-slate-100 pb-2">
                Glass, Solar & Process
              </div>
              <ul className="space-y-1.5 text-slate-600 font-medium">
                <li>• Asahi India Glass (20+ Jobs)</li>
                <li>• Saatvik Solar (630 TR Chiller)</li>
                <li>• ACME Solar & Su-Kam</li>
                <li>• Somany Ceramics</li>
                <li>• Kajaria (Sikandrabad)</li>
                <li>• ALP Aeroflex India</li>
                <li>• Borosil Glass</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="text-cyan-800 font-bold uppercase text-[11px] border-b border-slate-100 pb-2">
                Pharma & Healthcare
              </div>
              <ul className="space-y-1.5 text-slate-600 font-medium">
                <li>• Johnson & Johnson (18+ Jobs)</li>
                <li>• Positron Cancer Hosp (325 TR)</li>
                <li>• Abdos Labtech Cleanroom</li>
                <li>• Sitaram Bhartia Institute</li>
                <li>• SRHU Medical College</li>
                <li>• Aarvy Hospital (Manesar)</li>
                <li>• Akums & Orikam Healthcare</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="text-cyan-800 font-bold uppercase text-[11px] border-b border-slate-100 pb-2">
                FMCG, Food & Real Estate
              </div>
              <ul className="space-y-1.5 text-slate-600 font-medium">
                <li>• Whirlpool of India (DX HVAC)</li>
                <li>• BigBasket (7+ Air Cooling Jobs)</li>
                <li>• Zomato (Cloud Kitchen HVAC)</li>
                <li>• Suncity Parikrama (6+ Jobs)</li>
                <li>• Brookfield Office Towers</li>
                <li>• Godrej Commercial Spaces</li>
                <li>• Havmor, Amul & Patanjali</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. HIGH-CONVERSION CTA */}
        <section className="bg-cyan-900 rounded-3xl p-8 lg:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Turnkey Project Proposals</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Request a Plant Site Inspection & Heat Load Assessment
            </h2>
            <p className="text-xs text-cyan-100 leading-relaxed">
              Connect with our senior HVAC application engineers for plant CFM heat load assessments, cleanroom duct layout designs, and turnkey BOQ proposals.
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

        {/* 8. FAQ ACCORDION */}
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