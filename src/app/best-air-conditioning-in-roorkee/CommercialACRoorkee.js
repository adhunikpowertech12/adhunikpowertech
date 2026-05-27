"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  ShieldCheck, Wind, CheckCircle2, PhoneCall, Zap, ArrowRightLeft, Settings, Wrench, ShieldAlert, HeartHandshake,
  ChevronRight, Mail, MapPin, Factory, Microscope, Layers, Calculator, Cpu, Compass, HelpCircle, Activity, LayoutGrid
} from "lucide-react";

// SEO Title: Best Commercial Air Conditioning in Roorkee | Adhunik Powertech
// Meta Description: Looking for the best commercial air conditioning in Roorkee? Adhunik Powertech offers VRV, VRF, AHU & centralized HVAC solutions. Authorized Blue Star dealer.

export default function CommercialACRoorkee() {
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [technicalView, setTechnicalView] = useState('design'); // 'design' or 'execution'
  const [activeHighlightTab, setActiveHighlightTab] = useState(0); // State for transformed trust section
  
  const faqs = [
    { q: "Which is the best commercial air conditioning system for offices in Roorkee?", a: "For most office spaces, VRV and VRF systems are ideal due to their energy efficiency, zoning flexibility, and reliable performance." },
    { q: "What is the difference between VRV and VRF systems?", a: "Both systems use advanced refrigerant control to provide efficient multi-zone cooling and are commonly used in commercial buildings." },
    { q: "What is an AHU in a commercial HVAC system?", a: "An AHU (Air Handling Unit) manages airflow, filtration, humidity, and temperature, making it essential for centralized and precision-controlled HVAC systems." },
    { q: "Why choose Adhunik Powertech for commercial air conditioning in Roorkee?", a: "Adhunik Powertech is an Authorized Blue Star Dealer with expertise in HVAC design, installation, and long-term maintenance for commercial and industrial clients." },
    { q: "Do you provide commercial HVAC support in Haridwar and nearby industrial areas?", a: "Yes, our Roorkee branch supports clients across Haridwar, Bhagwanpur, IIT Roorkee area, and nearby industrial zones with fast consultation and service response." }
  ];

  const cards = [
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Authorized Blue Star Dealer",
      description: "As an authorized dealer of Blue Star, we provide genuine, high-performance commercial air conditioning systems backed by trusted manufacturer support and warranty assurance. Blue Star systems are known for:",
      features: ["Advanced commercial cooling tech", "Energy-efficient HVAC systems", "Reliable long-term performance", "Nationwide service support"]
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Customized, Client-Focused Solutions",
      description: "No two buildings are the same. We design each HVAC solution based on your layout, cooling demand, industry requirements, and budget goals.",
      features: []
    },
    {
      icon: <ShieldAlert className="h-5 w-5" />,
      title: "Professional Installation Standards",
      description: "Correct installation directly impacts HVAC performance. Our experienced technicians follow industry best practices to ensure system efficiency, safety, and reliability.",
      features: []
    },
    {
      icon: <HeartHandshake className="h-5 w-5" />,
      title: "Dedicated After-Sales Support",
      description: "We offer complete post-installation support to ensure your cooling system continues operating at peak performance, including:",
      features: ["Preventive maintenance services", "Comprehensive AMC plans", "System performance checks", "Quick response assistance"],
      footerText: "Our goal is to ensure your cooling system continues operating at peak performance."
    }
  ];

  return (
    <div className="bg-white mt-24 overflow-x-hidden text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-6 lg:gap-12 items-stretch mb-16">
          <div className="w-full md:w-5/12 flex items-center">
            <Image
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1779867467/Commerical-ac-in-roorkee_rgmmkz.webp"
              alt="Commercial air conditioning installation project in Roorkee with HVAC technicians installing rooftop cooling equipment for a commercial building by Adhunik Powertech."
              width={600}
              height={420}
              className="w-full h-auto rounded-xl shadow-lg border border-cyan-100 object-cover"
              priority
            />
          </div>

          <div className="w-full md:w-7/12 flex flex-col justify-between py-1">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-cyan-800 leading-tight mb-2">
                Trusted Commercial AC Solutions in Roorkee
              </h1>
              <h2 className="text-base lg:text-lg font-semibold text-slate-700 leading-snug mb-2">
                Advanced VRV, VRF, AHU & Centralized HVAC Solutions
              </h2>
            </div>
            
            <div className="space-y-3 text-gray-700 text-sm leading-relaxed text-justify md:text-left justify-center">
              <p>
                Trusted by businesses across Roorkee, Haridwar, and Uttarakhand, Adhunik Powertech delivers professionally engineered commercial air conditioning solutions designed for reliable cooling, superior indoor comfort, and long-term energy efficiency.
              </p>
              <p>
                As an <span className="font-semibold text-cyan-700">Authorized Blue Star Dealer</span>, 
                we specialize in the design, supply, installation, and maintenance of advanced commercial 
                cooling systems, including VRV systems, VRF systems, AHU units, ducted air conditioning, 
                and turnkey centralized HVAC projects across Roorkee, Haridwar, and Uttarakhand.
              </p>
              <p className="!mb-0">
                Our HVAC experts help you choose the ideal cooling solution based on your space, cooling load, and future scalability.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="tel:+918287885885"
                className="group inline-flex items-center justify-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <PhoneCall className="h-4 w-4 text-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <span>Get a Free Quote</span>
              </a>
            </div>
          </div>
        </section>
         
{/* Our Commercial Air Conditioning Services in Roorkee with Dedicated System Visuals */}
<section className="mt-8 mb-16 border-t border-slate-100 pt-6">
  <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8">
    
    {/* Image-Style Pill Badge themed in Cyan Blue */}
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50/50 border border-cyan-200/60 mb-3 animate-fade-in shadow-sm">
      {/* Small indicator dot with a soft outer ring layout */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600"></span>
      </span>
      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-800">
        Our Offerings
      </span>
    </div>

    {/* Primary Heading */}
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
      Commercial Air Conditioning Services 
    </h2>
    <div className="w-20 h-1 bg-cyan-600 mt-3 rounded-full"></div>
  </div>
  <div className="space-y-16">
    
    {/* 1. VRV Air Conditioning Systems */}
    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center bg-white p-2 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
      {/* Image Block */}
      <div className="w-full md:w-5/12 shrink-0">
        <Image
          src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1779790095/VRV-system_ekpvnc.webp" 
          alt="VRV outdoor air conditioning units installed on a commercial rooftop HVAC system."
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded-xl border border-cyan-100 shadow-sm"
        />
      </div>
      {/* Content Block */}
      <div className="w-full md:w-7/12 py-2">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-cyan-100 p-2.5 rounded-lg text-cyan-700">
            <Cpu className="w-5 h-5" />
          </div>
           <h3 className="text-xl font-bold text-cyan-900">VRV Air Conditioning Systems</h3>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
       Advanced VRV air conditioning systems designed to provide flexible multi-zone cooling with superior energy efficiency, precise temperature control, and reliable performance for modern commercial spaces.
        </p>
         <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-4">
          <span className="block font-bold text-xs uppercase tracking-wider text-cyan-800 mb-2">Key Features:</span>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-gray-600">
            <div className="flex items-start gap-2">✔ High-efficiency inverter compressors</div>
            <div className="flex items-start gap-2">✔ Energy-saving VRV technology</div>
            <div className="flex items-start gap-2">✔ Flexible and long piping design</div>
            <div className="flex items-start gap-2">✔ Intelligent centralized controllers</div>
            <div className="flex items-start gap-2">✔ Reliable performance in high ambient conditions</div>
          </div>

          </div>
        
      </div>
    </div>

    {/* 2. VRF Air Conditioning Solutions */}
    <div className="flex flex-col md:flex-row-reverse gap-8 lg:gap-12 items-center bg-white p-2 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
      {/* Image Block */}
      <div className="w-full md:w-5/12 shrink-0">
        <Image
          src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1779789799/VRF-air-conditioning-system_ertpev.webp" 
          alt="Commercial VRF air conditioning system installed on a rooftop HVAC setup."
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded-xl border border-cyan-100 shadow-sm"
        />
      </div>
      {/* Content Block */}
      <div className="w-full md:w-7/12 py-2">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-cyan-100 p-2.5 rounded-lg text-cyan-700">
            <ArrowRightLeft className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-cyan-900">VRF Air Conditioning Solutions</h3>
        </div>
        
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
         Designed for performance and flexibility, our VRF systems provide efficient cooling, precise control, and dependable comfort for evolving commercial environments.
        </p>

        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-4">
          <span className="block font-bold text-xs uppercase tracking-wider text-cyan-800 mb-2">Key Features & Technical Advantages:</span>
             <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-gray-600">
            <div className="flex items-start gap-2">✔ Smart, localized refrigerant flow adjustment</div>
            <div className="flex items-start gap-2">✔ Flexible structural installation design options</div>
            <div className="flex items-start gap-2">✔ Independent zone-wise temperature control</div>
            <div className="flex items-start gap-2">✔ Easy integration with BMS and AHU systems</div>
            <div className="flex items-start gap-2">✔ High-efficiency inverter compressor technology</div>
          </div>
        </div>
      </div>
    </div>

    {/* 3. AHU (Air Handling Unit) Installation */}
    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center bg-white p-2 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
      {/* Image Block */}
      <div className="w-full md:w-5/12 shrink-0">
        <Image
          src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1779790423/AHU_Installation_u5iefi.webp" 
          alt="Technician servicing a large industrial HVAC air handling unit inside a commercial facility."
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded-xl border border-cyan-100 shadow-sm"
        />
      </div>
      {/* Content Block */}
      <div className="w-full md:w-7/12 py-2">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-cyan-100 p-2.5 rounded-lg text-cyan-700">
            <Wind className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-cyan-900">AHU (Air Handling Unit) Installation</h3>
        </div>
        
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          For environments that require controlled ventilation, filtration, and humidity management, AHU-based HVAC systems are essential.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
            <span className="block font-bold text-xs uppercase tracking-wider text-cyan-800 mb-1">Common Applications:</span>
            <ul className="text-xs text-gray-600 space-y-0.5 list-disc pl-4">
              <li>Hospitals and healthcare facilities</li>
              <li>Cleanrooms and laboratories</li>
              <li>Pharmaceutical and food units</li>
              <li>Industrial manufacturing plants</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
            <span className="block font-bold text-xs uppercase tracking-wider text-cyan-800 mb-1">Our AHU Expertise:</span>
            <ul className="text-xs text-gray-600 space-y-0.5 list-disc pl-4">
              <li>Wide range of products (Double Skin Comfort & Clean Room AHU) Starts from capacity 500CFM to 50000 CFM</li>
              <li>MS powder coated body and SS-304 also available as per requirement.</li>
              <li>All Spare parts have rust free anti corrosion coating</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* 4. Centralized HVAC Systems */}
   <div className="flex flex-col md:flex-row-reverse gap-8 lg:gap-12 items-center bg-white p-2 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
   {/* Image Block */}
<div className="w-full md:w-5/12 shrink-0">
        <Image
          src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1779791018/centralised-hvac-system_jxtlkn.webp" // Configure your asset path here
          alt="Multiple outdoor HVAC conditioning units installed on a rooftop for commercial air conditioning and ventilation systems."
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded-xl border border-cyan-100 shadow-sm"
        />
      </div>
      {/* Content Block */}
      <div className="w-full md:w-7/12 py-2">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-cyan-100 p-2.5 rounded-lg text-cyan-700">
            <Settings className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-cyan-900">Centralized HVAC Systems</h3>
        </div>
      
        <p className="text-sm text-gray-700 leading-relaxed mb-4">

          For large commercial and industrial buildings, we provide complete centralized HVAC solutions tailored to your operational requirements.

        </p>
         <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-4">

          <span className="block font-bold text-xs uppercase tracking-wider text-cyan-800 mb-2">Our Turnkey HVAC Services Include:</span>

          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-gray-600">

            <div className="flex items-center gap-2">✔ HVAC design and engineering</div>

            <div className="flex items-center gap-2">✔ Cooling load calculation</div>

            <div className="flex items-center gap-2">✔ Equipment selection</div>

            <div className="flex items-center gap-2">✔ Ducting and airflow planning</div>

            <div className="flex items-center gap-2">✔ Installation and commissioning</div>

            <div className="flex items-center gap-2">✔ Preventive maintenance and AMC support</div>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
        {/* Technical Matrix Segment with Matrix View Filter Toggles */}
       <section className="mb-10 bg-white p-3 md:p-8 rounded-2xl shadow-md border border-slate-100">
          <div className="flex flex-col items-center text-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2">
              Our HVAC Expertise & Technical Approach
            </h2>
            <div className="w-16 h-1 bg-cyan-500 rounded-full mt-3"></div>
            <p className="text-sm text-gray-600 mt-4 max-w-3xl">
              At Adhunik Powertech, we believe effective commercial cooling starts with proper engineering—not just equipment supply. Toggle the roadmap focus views below to explore our technical blueprints:
            </p>
            
            {/* View Switching Matrix Controllers */}
            <div className="mt-6 inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button 
                onClick={() => setTechnicalView('design')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${technicalView === 'design' ? 'bg-white text-cyan-800 shadow-sm' : 'text-slate-500'}`}
              >
                1. System Engineering Focus
              </button>
              <button 
                onClick={() => setTechnicalView('execution')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${technicalView === 'execution' ? 'bg-white text-cyan-800 shadow-sm' : 'text-slate-500'}`}
              >
                2. Field Commissioning & Operations
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500">
            {technicalView === 'design' ? (
              <>
                <div className="p-5 bg-cyan-50/60 rounded-2xl border border-cyan-100/80 flex flex-col items-center text-center">
                  <div className="mb-3 p-2.5 rounded-full bg-cyan-100/50 text-cyan-600"><Layers className="h-6 w-6" /></div>
                  <h3 className="text-base font-bold text-slate-800 mb-2">System Design</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Custom engineering blueprints tailored specifically to your building's architecture and layout.</p>
                </div>
                <div className="p-5 bg-cyan-50/60 rounded-2xl border border-cyan-100/80 flex flex-col items-center text-center">
                  <div className="mb-3 p-2.5 rounded-full bg-cyan-100/50 text-cyan-600"><Calculator className="h-6 w-6" /></div>
                  <h3 className="text-base font-bold text-slate-800 mb-2">Capacity Planning</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Accurate thermal heat load assessments to prevent over-sizing or under-sizing your equipment.</p>
                </div>
                <div className="p-5 bg-cyan-50/60 rounded-2xl border border-cyan-100/80 flex flex-col items-center text-center">
                  <div className="mb-3 p-2.5 rounded-full bg-cyan-100/50 text-cyan-600"><Cpu className="h-6 w-6" /></div>
                  <h3 className="text-base font-bold text-slate-800 mb-2">VRV/VRF Selection</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Matching variable refrigerant flow units to your floor plan for advanced zone-by-zone control.</p>
                </div>
                <div className="p-5 bg-cyan-50/60 rounded-2xl border border-cyan-100/80 flex flex-col items-center text-center">
                  <div className="mb-3 p-2.5 rounded-full bg-cyan-100/50 text-cyan-600"><Compass className="h-6 w-6" /></div>
                  <h3 className="text-base font-bold text-slate-800 mb-2">Duct Optimization</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Streamlined pathways built to eliminate static pressure drops and minimize ambient airflow noise.</p>
                </div>
              </>
            ) : (
              <>
                <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-100/80 flex flex-col items-center text-center">
                  <div className="mb-3 p-2.5 rounded-full bg-emerald-100/50 text-emerald-600"><CheckCircle2 className="h-6 w-6" /></div>
                  <h3 className="text-base font-bold text-slate-800 mb-2">Commissioning</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Rigorous field testing to confirm your air conditioning delivers exact design performance parameters right from day one.</p>
                </div>
                <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-100/80 flex flex-col items-center text-center">
                  <div className="mb-3 p-2.5 rounded-full bg-emerald-100/50 text-emerald-600"><Zap className="h-6 w-6" /></div>
                  <h3 className="text-base font-bold text-slate-800 mb-2">Energy Efficiency</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Data-driven adjustments and optimization audits designed to lower your overall monthly factory power bills.</p>
                </div>
                <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-100/80 flex flex-col items-center text-center">
                  <div className="mb-3 p-2.5 rounded-full bg-emerald-100/50 text-emerald-600"><Wrench className="h-6 w-6" /></div>
                  <h3 className="text-base font-bold text-slate-800 mb-2">Maintenance</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Proactive check-ups and technical support to prevent plant breakdowns during extreme peak seasons.</p>
                </div>
                <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-100/80 flex flex-col items-center text-center">
                  <div className="mb-3 p-2.5 rounded-full bg-emerald-100/50 text-emerald-600"><Wind className="h-6 w-6" /></div>
                  <h3 className="text-base font-bold text-slate-800 mb-2">AHU & Ventilation</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Advanced air handling unit placement to keep fresh, filtered air flowing consistently across heavy workspace zones.</p>
                </div>
              </>
            )}
          </div> 
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 font-semibold bg-blue-50/50 p-4 rounded-lg border border-blue-100/50 inline-block">
              Our project-first approach ensures your air conditioning system performs efficiently from day one and continues delivering value over the long term.
            </p>
          </div>
        </section>

        {/* CLEANED: Interactive Trust Section with Images Totally Removed */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-900 tracking-tight">
                Why Businesses Trust Adhunik Powertech
              </h2>
              <div className="w-16 h-1 bg-cyan-500 rounded-full mt-3"></div>
            </div>

            {/* Split Screen Image-Free Console Workspace */}
            <div className="bg-slate-50 rounded-2xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch border border-slate-100">
              
              {/* LEFT SIDE: Clean Selector Tab Row (5 Columns) */}
              <div className="md:col-span-5 flex flex-col gap-2.5 justify-center">
                {cards.map((card, idx) => {
                  const isActive = activeHighlightTab === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveHighlightTab(idx)}
                      className={`w-full text-left p-3.5 rounded-xl flex items-center gap-3.5 transition-all duration-300 ${
                        isActive 
                          ? 'bg-cyan-700 text-white shadow-md shadow-cyan-900/10 scale-[1.01]' 
                          : 'bg-white text-slate-700 hover:bg-slate-100/80 border border-slate-200/50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 transition-colors ${isActive ? 'bg-cyan-600 text-white' : 'bg-cyan-50 text-cyan-700'}`}>
                        {card.icon}
                      </div>
                      <span className="font-semibold text-sm tracking-tight">
                        {card.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* RIGHT SIDE: Text Content Deck (7 Columns) */}
              <div className="md:col-span-7 bg-white rounded-xl p-6 border border-slate-200/60 shadow-sm flex flex-col justify-between min-h-[250px]">
                <div className="space-y-4">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-cyan-50 text-cyan-700">
                    Trust Pillar 0{activeHighlightTab + 1}
                  </span>
                  
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-cyan-600">{cards[activeHighlightTab].icon}</span>
                    {cards[activeHighlightTab].title}
                  </h3>
                  
                  <p className="text-xs leading-relaxed text-slate-600">
                    {cards[activeHighlightTab].description}
                  </p>

                  {/* Operational Bullet Points */}
                  {cards[activeHighlightTab].features.length > 0 && (
                    <div className="pt-1">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-cyan-50/40 rounded-xl p-3 border border-cyan-100/40">
                        {cards[activeHighlightTab].features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Text Footer Status Area */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  {cards[activeHighlightTab].footerText ? (
                    <p className="text-xs font-semibold text-cyan-700 leading-tight">
                      {cards[activeHighlightTab].footerText}
                    </p>
                  ) : (
                    <p className="text-[11px] text-slate-400 italic">
                      Adhunik Powertech certified structural safety compliance workflows.
                    </p>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
        
        {/* Local Roorkee Branch Spotlight */}
        <section className="my-16 bg-cyan-900 p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500 opacity-10 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
            <MapPin className="w-8 h-8 text-cyan-400" />
            Serving Roorkee with Local HVAC Project Support
          </h2>
          <p className="text-cyan-100 text-sm mb-6 max-w-3xl">
            To provide faster consultation, efficient project coordination, and reliable after-sales support, We serves commercial and industrial clients through our dedicated Roorkee branch office.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h4 className="font-bold text-lg text-cyan-400">Adhunik Powertech Pvt. Ltd. – Roorkee Branch</h4>
              <p className="text-sm leading-relaxed">
                Ashoka Marg, Lane No. 13, Ramnagar, Roorkee, Uttarakhand – 247667
              </p>
              <div className="pt-4 border-t border-cyan-800/40 mt-4">
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold block text-xs uppercase text-cyan-300 tracking-wider mb-1">
                      Our Operational Footprint:
                    </span>
                    <p className="text-xs text-cyan-100/70 leading-relaxed max-w-2xl">
                      Serving key industrial and commercial locations across Uttarakhand, Western Uttar Pradesh, and Himachal Pradesh.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs pt-1">
                    {[
                      "Haridwar", 
                      "Roorkee", 
                      "Dehradun", 
                      "Rudrapur", 
                      "Saharanpur", 
                      "Muzaffarnagar", 
                      "Baddi Industrial Area"
                    ].map((location, index) => (
                      <span 
                        key={index} 
                        className="bg-cyan-950/50 px-3 py-1.5 rounded-lg text-cyan-100 font-medium border border-cyan-800/50 hover:bg-cyan-900/60 transition-colors duration-200"
                      >
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold mb-4 flex items-center gap-2 text-lg">
                  Why Choose Our Roorkee HVAC Team?
                </h4>
                <p className="text-sm text-cyan-100 mb-4">
                  Businesses choose Adhunik Powertech for dependable and professionally managed HVAC solutions backed by both local accessibility and technical expertise.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Dedicated project support in Roorkee & Haridwar</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Faster on-site inspections and technical consultations</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Quick response for maintenance and service requirements</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Expertise in commercial and industrial HVAC applications</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Backed by our main engineering and operations team in Gurugram</span>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </section>

{/* REDESIGNED: Industrial B2B Grid Layout for Industry Verticals */}
<section className="mb-20 bg-white">
  <div className="flex flex-col items-center text-center mb-10">
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-3">
      Trusted Solutions for Every Business
    </h2>
    <p className="w-full max-w-3xl text-sm text-slate-500 font-normal leading-relaxed">
      Commercial spaces require more than standard air conditioning. They need intelligent HVAC systems that balance temperature control, air quality, operational efficiency, and energy savings. At Adhunik Powertech, we provide customized commercial cooling solutions for:
    </p>
  </div>
  
  {/* High-Contrast Corporate Grid System */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {[
      { text: "Corporate Offices & Business Parks", icon: <Building className="w-5 h-5 text-cyan-700" /> },
      { text: "Manufacturing & Industrial Facilities", icon: <Factory className="w-5 h-5 text-cyan-700" /> },
      { text: "Healthcare Centers", icon: <Activity className="w-5 h-5 text-cyan-700" /> },
      { text: "Hotels & Hospitality Spaces", icon: <Bed className="w-5 h-5 text-cyan-700" /> },
      { text: "Retail & Shopping Complexes", icon: <ShoppingCart className="w-5 h-5 text-cyan-700" /> },
      { text: "Educational Institutions", icon: <GraduationCap className="w-5 h-5 text-cyan-700" /> },
      { text: "Cleanroom Environments", icon: <Microscope className="w-5 h-5 text-cyan-700" /> }
    ].map((item, index) => (
      <div 
        key={index} 
        className="flex items-center gap-4 bg-slate-50/60 p-4 rounded-xl border-l-4 border-l-cyan-600 border border-slate-200/50 hover:bg-slate-100/60 transition-all duration-200"
      >
        <div className="p-2.5 bg-white rounded-lg border border-slate-200/40 shadow-sm shrink-0">
          {item.icon}
        </div>
        <h3 className="text-xs font-bold text-slate-800 tracking-tight leading-snug">
          {item.text}
        </h3>
      </div>
    ))}
  </div>
</section>

        {/* CTA Section */}
        <section className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl relative">
          <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-7/12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Get the Best Commercial Air Conditioning in Roorkee
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
               Expert VRV, VRF, AHU & Centralized HVAC Solutions for Offices, Commercial Buildings, Healthcare Facilities & Industrial Spaces.
              </p>
              <div className="border-t border-slate-800 pt-4 text-xs text-cyan-400 font-bold uppercase tracking-wider">
                Contact Adhunik Powertech Today <br />
                <span className="normal-case font-normal text-slate-400">Authorized Blue Star Dealer | Commercial HVAC Experts <br />Serving Roorkee, Haridwar & Uttarakhand</span>
              </div>
            </div>

            <div className="lg:w-5/12 w-full">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col gap-6">
                <a href="tel:8287885885" className="group bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-cyan-900/40">
                  <span className="flex items-center gap-3">
                    <PhoneCall className="w-5 h-5" /> +91 82878 85885
                  </span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link href="/support-form" className="group bg-transparent border-2 border-slate-700 hover:border-cyan-400 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-between transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <Mail className="w-5 h-5" /> Schedule HVAC Audit
                  </span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Scriptless, CSS-Driven High Performance FAQs Accordion Section */}
      <section className="pb-24 max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center flex items-center justify-center gap-2">
            <HelpCircle className="text-slate-800" /> Frequently Asked Questions(FAQs)
        </h3>
        <div className="space-y-4">
            {faqs.map((faq, i) => (
                <details key={i} className="group border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300">
                    <summary className="w-full list-none font-semibold text-slate-800 bg-slate-50 p-5 flex justify-between items-center cursor-pointer select-none [&::-webkit-details-marker]:hidden">
                        <span>{faq.q}</span>
                        <ChevronRight className="w-6 h-3 transition-transform duration-300 transform group-open:rotate-90 text-slate-300" />
                    </summary>
                    <div className="p-5 text-gray-600 bg-white border-t border-slate-200 text-sm leading-relaxed transition-all duration-300">
                        {faq.a}
                    </div>
                </details>
            ))}
        </div>
      </section>
    </div>
  )
}

// Inline standalone micro-components to clean up design dependencies
function Building(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 7h.01"/><path d="M16 7h.01"/><path d="M8 11h.01"/><path d="M16 11h.01"/><path d="M12 7h.01"/><path d="M12 11h.01"/><path d="M8 15h.01"/><path d="M16 15h.01"/><path d="M12 15h.01"/></svg>
  );
}
function Bed(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 4v16"/><path d="M2 11h20"/><path d="M2 17h20"/><path d="M22 4v16"/><path d="M18 14h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2v7Z"/></svg>
  );
}
function ShoppingCart(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
  );
}
function GraduationCap(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M6 18.8v-4L2 13"/><path d="M21.4 11.6v6c0 1.1-.9 2-2 2h-1c-1.1 0-2-.9-2-2v-6"/></svg>
  );
}