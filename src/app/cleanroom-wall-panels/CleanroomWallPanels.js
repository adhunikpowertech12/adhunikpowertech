"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  ShieldCheck, PhoneCall, Zap, Settings, Wrench, 
   HeartHandshake, ChevronRight, Mail, Factory, Microscope, 
  Layers,  Cpu,  HelpCircle, Activity, LayoutGrid, Flame, Sparkles
} from "lucide-react";


export default function CleanroomWallPanels() {
  const [panelView, setPanelView] = useState('materials'); // 'materials' or 'cores'
  const [activeTrustTab, setActiveTrustTab] = useState(0); 
  
  const faqs = [
    { 
      q: "What are cleanroom wall panels?", 
      a: "Cleanroom wall panels are prefabricated modular wall systems designed to create contamination-controlled environments in pharmaceutical, healthcare, biotechnology, food, and electronics industries." 
    },
    { 
      q: "Which material is best for pharmaceutical cleanroom wall panels?", 
      a: "HPL (High-Pressure Laminate), stainless steel, and insulated PUF wall panels are commonly used due to their durability, hygienic properties, and total compliance with stringent GMP standards." 
    },
    { 
      q: "Are modular cleanroom wall panels GMP compliant?", 
      a: "Yes. Professionally designed and flush-fitted modular cleanroom wall panels support both GMP requirements and strict ISO cleanroom classifications when integrated with proper sealing profiles." 
    },
    { 
      q: "What insulation options are available in cleanroom wall panels?", 
      a: "Common insulation options include PUF (Polyurethane Foam), Rockwool, PIR, and Paper/Aluminum Honeycomb cores, chosen based on thermal, fire-retardant, or structural rigidity requirements." 
    },
    { 
      q: "Can cleanroom wall panels accommodate electrical and HVAC systems?", 
      a: "Yes. Modern cleanroom wall panels are engineered with built-in integrated utility chaseways to cleanly route electrical conduits, HVAC return air ducts, gas piping, and critical monitoring system line infrastructures within the panel frame." 
    },
    { 
      q: "How long do cleanroom wall panels last?", 
      a: "With proper professional installation and standardized sterilization/maintenance schedules, high-quality cleanroom modular wall panel arrays deliver robust structural and protective performance for many years." 
    }
  ];

  const trustPillars = [
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Design Support Expertise",
      description: "We don't believe in generic components. Our engineering staff helps determine the most effective customized wall panel systems tailored precisely to your specific layout footprint and necessary particulate cleanliness classification.",
      features: ["Custom floorplan integrations", "Cleanliness validation safety maps", "Exact architectural spacing calculations"]
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Advanced Engineering Alignment",
      description: "Our engineering layout matrices guarantee flawless mechanical compatibility with heavy structural elements, static pressure boundary configurations, utility line drops, and strict HVAC air washer flows.",
      features: ["Flush return-air riser integration", "Pressure differential control seals", "Vibration-isolated structural joints"]
    },
    {
      icon: <Factory className="h-5 w-5" />,
      title: "Precision Manufacturing Standards",
      description: "Our in-house manufacturing facility produces Cleanroom Wall Panels, AHUs, Air Showers, Pass Boxes, Modular Doors, and Cleanroom Windows with a focus on quality, consistency, and GMP compliance.",
      features: ["In-house production for complete quality control", "Precision-engineered cleanroom components", "Reliable performance for pharmaceutical facilities"]
    },
    {
      icon: <HeartHandshake className="h-5 w-5" />,
      title: "End-to-End Turnkey Execution",
      description: "Beyond supplying panels, we deliver complete operational architectures including flush ceilings, specialized mechanical doors, integrated double-glazed windows, cleanroom floors, and post-setup validation.",
      features: ["Turnkey modular design-builds", "ISO 14644 testing parameters", "Comprehensive validation report documentation"],
      footerText: "Providing absolute operational readiness from raw facility design up to point-of-commissioning."
    }
  ];

  return (
    <div className="bg-white mt-24 overflow-x-hidden text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-6 lg:gap-12 items-stretch mb-16">
          <div className="w-full md:w-5/12 flex items-center">
            <Image
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1780555671/modular-cleanroom-wall-panels_nkbgjv.webp"
              alt="Modular cleanroom wall panels for GMP-compliant pharmaceutical cleanroom applications."
              width={600}
              height={420}
              className="w-full h-auto rounded-xl shadow-lg border border-cyan-100 object-cover"
              priority
            />
          </div>

          <div className="w-full md:w-7/12 flex flex-col justify-between py-1">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-800 uppercase tracking-wide mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600" /> GMP & ISO Compliant Infrastructure
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-cyan-800 leading-tight mb-2">
                Modular Cleanroom Wall Panels
              </h1>
              <h2 className="text-base lg:text-lg font-semibold text-slate-700 leading-snug mb-4">
                High-Performance Wall Partition Systems for Pharmaceutical, Biotech & Healthcare Facilities
              </h2>
            </div>
            
            <div className="space-y-3 text-gray-700 text-sm leading-relaxed text-justify md:text-left justify-center">
              <p>
                Building a contamination-controlled environment starts with selecting the right cleanroom infrastructure. Among all key architectural components, wall panels play a critical role in maintaining particle cleanliness, system air-tightness, thermal insulation, and strict regulatory compliance.
              </p>
              <p>
                At <span className="font-semibold text-cyan-700">Adhunik Powertech</span>, we engineer, manufacture, and supply high-quality modular cleanroom wall panel configurations engineered to satisfy international standards. Our dynamic structural designs support ISO 14644 and GMP-compliant operations while offering stellar durability and project flexibility.
              </p>
              <p className="!mb-0">
                Whether you are establishing a new industrial facility or upgrading an old manufacturing system, our modular layout setups help maximize system performance while minimizing maintenance overhead.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="tel:+918287885885"
                className="group inline-flex items-center justify-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <PhoneCall className="h-4 w-4 text-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <span>Consult Our Cleanroom Experts</span>
              </a>
            </div>
          </div>
        </section>

        {/* Dynamic Architectural Advantages Section */}
        <section className="mt-8 mb-16 border-t border-slate-100 pt-10">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Why Deploy Modular Cleanroom Walls?
            </h2>
            <div className="w-20 h-1 bg-cyan-600 mt-3 rounded-full"></div>
            <p className="text-sm text-slate-500 mt-3 max-w-2xl">
             Regular walls are not built to meet the strict requirements of cleanrooms. Modular cleanroom wall panels are designed to create a cleaner, safer, and more controlled environment. Some of their key benefits are:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 hover:shadow-md transition-all">
              <div className="bg-cyan-100 p-2 w-10 h-10 rounded-lg text-cyan-700 flex items-center justify-center font-bold text-lg mb-4">01</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Accelerated Project Delivery</h3>
              <p className="text-xs text-slate-600 leading-justified">Unlike conventional building methods, modular cleanroom panels are pre-engineered for quick installation. Helps to shorten project timelines, minimize site disruption, and speed up facility readiness.</p>
          </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 hover:shadow-md transition-all">
              <div className="bg-cyan-100 p-2 w-10 h-10 rounded-lg text-cyan-700 flex items-center justify-center font-bold text-lg mb-4">02</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Superior Hygienic Standards</h3>
              <p className="text-xs text-slate-600 leading-justified">Designed with smooth, non-porous surfaces, help to prevent dust, moisture, and microbial buildup. Easy-to-clean finish supports regular sanitization and maintain high hygiene standards in controlled environments.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 hover:shadow-md transition-all">
              <div className="bg-cyan-100 p-2 w-10 h-10 rounded-lg text-cyan-700 flex items-center justify-center font-bold text-lg mb-4">03</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Airtight Pressure Containment</h3>
              <p className="text-xs text-slate-600 leading-justified">Engineered with airtight joints and high-quality sealing materials, helps to maintain pressure differentials required for GMP-compliant cleanroom environments.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 hover:shadow-md transition-all">
              <div className="bg-cyan-100 p-2 w-10 h-10 rounded-lg text-cyan-700 flex items-center justify-center font-bold text-lg mb-4">04</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Modular & Expandable Design</h3>
              <p className="text-xs text-slate-600 leading-justified">Designed for long-term operational flexibility, our cleanroom wall panels make it easier to accommodate facility expansions, process changes, and regulatory upgrades while maintaining a controlled environment.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 hover:shadow-md transition-all">
              <div className="bg-cyan-100 p-2 w-10 h-10 rounded-lg text-cyan-700 flex items-center justify-center font-bold text-lg mb-4">05</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Seamless Utility Integration</h3>
              <p className="text-xs text-slate-600 leading-justified">Integrates electrical, HVAC, and communication services within the panel structure for a clean, organized, and efficient facility environment.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 hover:shadow-md transition-all">
              <div className="bg-cyan-100 p-2 w-10 h-10 rounded-lg text-cyan-700 flex items-center justify-center font-bold text-lg mb-4">06</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Regulatory Validation Ready</h3>
              <p className="text-xs text-slate-600 leading-justified">Engineered to support seamless technical auditing and verification pathways to easily secure official USFDA, WHO-GMP, and ISO certificates.</p>
            </div>
          </div>
        </section>

        {/* Our Cleanroom Wall Panel Solutions - Product Presentation Matrix */}
        <section className="mb-16 bg-white p-4 md:p-8 rounded-2xl shadow-md border border-slate-100">
          <div className="flex flex-col items-center text-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2">
              Our Cleanroom Wall Panel Solutions
            </h2>
            <div className="w-16 h-1 bg-cyan-500 rounded-full mt-3"></div>
            <p className="text-sm text-gray-600 mt-4 max-w-3xl">Every cleanroom project has unique requirements. Explore our Outer Panel Materials and Insulation Core Options to create a durable, hygienic, and high-performance cleanroom environment.
            </p>
            
            {/* View Switch Controller */}
            <div className="mt-6 inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button 
                onClick={() => setPanelView('materials')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${panelView === 'materials' ? 'bg-white text-cyan-800 shadow-sm' : 'text-slate-500'}`}
              >
                1. Outer Panel Materials
              </button>
              <button 
                onClick={() => setPanelView('cores')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${panelView === 'cores' ? 'bg-white text-cyan-800 shadow-sm' : 'text-slate-500'}`}
              >
                2. Internal Core Insulations
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500">
            {panelView === 'materials' ? (
              <>
                {/* Product 1 */}
                <div className="p-6 bg-cyan-50/40 rounded-2xl border border-cyan-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-cyan-600 p-2 rounded-lg text-white"><Microscope className="w-5 h-5" /></div>
                      <h3 className="text-lg font-bold text-cyan-900">HPL Cleanroom Wall Panels</h3>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed mb-4">
                      High-Pressure Laminate systems provide exceptional structural defense against heavy scratches, violent impacts, and harsh biocidal chemical washings.
                    </p>
                    <div className="text-xs text-slate-700 font-semibold mb-2">Ideal Applications:</div>
                    <p className="text-xs text-gray-600 mb-4">Biotech plants, chemical laboratories, standard formulation areas, and premium hospital clinics.</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-cyan-100 text-xs text-cyan-800 font-medium grid grid-cols-2 gap-2">
                    <span>✔ Chemical Resistant Finish</span>
                    <span>✔ Impact Proof Build</span>
                    <span>✔ Ultra Smooth Clean Gloss</span>
                     <span>✔ Sheet Thickness: 3 mm</span>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="p-6 bg-cyan-50/40 rounded-2xl border border-cyan-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-cyan-600 p-2 rounded-lg text-white"><Layers className="w-5 h-5" /></div>
                      <h3 className="text-lg font-bold text-cyan-900">Stainless Steel Wall Panels (SS-304/316)</h3>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed mb-4">
                      Engineered to endure the absolute highest criteria of sterilization and moisture stress without running risks of rust oxidation or chemical decomposition.
                    </p>
                    <div className="text-xs text-slate-700 font-semibold mb-2">Ideal Applications:</div>
                    <p className="text-xs text-gray-600 mb-4">Sterile core zones, live injectable filling suites, vaccine labs, and high-humidity environments.</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-cyan-100 text-xs text-cyan-800 font-medium grid grid-cols-2 gap-2">
                    <span>✔ Zero Corrosion Risk</span>
                    <span>✔ Maximum Longevity</span>
                    <span>✔ Severe Washdown Ready</span>
                     <span>✔ Sheet Thickness: 0.8 mm. 1 mm, 1.2 mm</span>
                  </div>
                </div>

                {/* Product 3 */}
                <div className="p-6 bg-cyan-50/40 rounded-2xl border border-cyan-100 flex flex-col justify-between md:col-span-2">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-cyan-600 p-2 rounded-lg text-white"><Wrench className="w-5 h-5" /></div>
                        <h3 className="text-lg font-bold text-cyan-900">Powder-Coated Galvanized Steel Panels (GPSP)</h3>
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        A highly cost-effective, versatile cleanroom wall variant. Coated with anti-microbial pure polyester powder coatings over specialized galvanized sheets to supply solid impact structural integrity without stretching financial layout budgets. Excellent choice for mass production floors, food packing halls, and device assembly hubs.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-cyan-100 text-xs text-cyan-800 font-medium h-full flex flex-col justify-center gap-2">
                      <div className="flex items-center gap-2">✔ High-grade electro-galvanized framing sheets</div>
                      <div className="flex items-center gap-2">✔ Uniform 60-80 micron anti-microbial coat finishes</div>
                      <div className="flex items-center gap-2">✔ Flawless balance of mechanical strength and budget optimization</div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Core 1 */}
                <div className="p-6 bg-emerald-50/40 rounded-2xl border border-emerald-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-emerald-600 p-2 rounded-lg text-white"><Flame className="w-5 h-5" /></div>
                      <h3 className="text-lg font-bold text-emerald-900">Rockwool Structural Core</h3>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed mb-4">
                      High-density mineral fibers stitched inside panels to form an incredible defensive block against heat propagation and structural fires.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-emerald-100 text-xs text-emerald-800 font-medium grid grid-cols-2 gap-2">
                    <span>✔ Certified Fire Rating</span>
                    <span>✔ Sound Attenuation Noise Block</span>
                    <span>✔ Dense Mechanical Stability</span>
                    <span>✔ Non-Combustible Build</span>
                  </div>
                </div>

                {/* Core 2 */}
                <div className="p-6 bg-emerald-50/40 rounded-2xl border border-emerald-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-emerald-600 p-2 rounded-lg text-white"><Zap className="w-5 h-5" /></div>
                      <h3 className="text-lg font-bold text-emerald-900">PUF (Polyurethane Foam) Core</h3>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed mb-4">
                      Provides superior thermal insulating metrics. Drastically limits thermodynamic losses across wall junctions, minimizing centralized HVAC compressor work loads.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-emerald-100 text-xs text-emerald-800 font-medium grid grid-cols-2 gap-2">
                    <span>✔ Premium Thermal R-Value</span>
                    <span>✔ Ultra-Light Net Weight</span>
                    <span>✔ High Structural Rigidity</span>
                    <span>✔ HVAC Energy Conservation</span>
                  </div>
                </div>

                {/* Core 3 */}
                <div className="p-6 bg-emerald-50/40 rounded-2xl border border-emerald-100 flex flex-col justify-between md:col-span-2">
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-emerald-600 p-2 rounded-lg text-white"><LayoutGrid className="w-5 h-5" /></div>
                        <h3 className="text-lg font-bold text-emerald-900">Aluminum / Paper Honeycomb Core</h3>
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        Features an hexagonal cell matrix engineered explicitly to produce maximum flat dimensional straightness and zero sag over expansive ceiling or wall structures, while remaining highly lightweight.
                      </p>
                    </div>
                    <div className="bg-white px-4 py-2.5 rounded-lg border border-emerald-100 text-xs font-bold text-emerald-800 shrink-0">
                      Ideal for Large-Span Cleanrooms
                    </div>
                  </div>
                </div>
              </>
            )}
          </div> 
        </section>

        {/* Why Adhunik Powertech - Trust Pillar Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-900 tracking-tight">
                Why Support Your Project with Adhunik Powertech?
              </h2>
              <div className="w-16 h-1 bg-cyan-500 rounded-full mt-3"></div>
            </div>

            {/* Split Screen Image-Free Console Workspace */}
            <div className="bg-slate-50 rounded-2xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch border border-slate-100">
              
              {/* LEFT SIDE: Selector Tab Row */}
              <div className="md:col-span-5 flex flex-col gap-2.5 justify-center">
                {trustPillars.map((pillar, idx) => {
                  const isActive = activeTrustTab === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveTrustTab(idx)}
                      className={`w-full text-left p-3.5 rounded-xl flex items-center gap-3.5 transition-all duration-300 ${
                        isActive 
                          ? 'bg-cyan-700 text-white shadow-md shadow-cyan-900/10 scale-[1.01]' 
                          : 'bg-white text-slate-700 hover:bg-slate-100/80 border border-slate-200/50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 transition-colors ${isActive ? 'bg-cyan-600 text-white' : 'bg-cyan-50 text-cyan-700'}`}>
                        {pillar.icon}
                      </div>
                      <span className="font-semibold text-sm tracking-tight">
                        {pillar.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* RIGHT SIDE: Text Content Deck */}
              <div className="md:col-span-7 bg-white rounded-xl p-6 border border-slate-200/60 shadow-sm flex flex-col justify-between min-h-[250px]">
                <div className="space-y-4">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-cyan-50 text-cyan-700">
                    Infrastructure Quality Core 0{activeTrustTab + 1}
                  </span>
                  
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-cyan-600">{trustPillars[activeTrustTab].icon}</span>
                    {trustPillars[activeTrustTab].title}
                  </h3>
                  
                  <p className="text-xs leading-relaxed text-slate-600">
                    {trustPillars[activeTrustTab].description}
                  </p>

                  {/* Feature Lists */}
                  <div className="pt-1">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-cyan-50/40 rounded-xl p-3 border border-cyan-100/40">
                      {trustPillars[activeTrustTab].features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Text Footer Status Area */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  {trustPillars[activeTrustTab].footerText ? (
                    <p className="text-xs font-semibold text-cyan-700 leading-tight">
                      {trustPillars[activeTrustTab].footerText}
                    </p>
                  ) : (
                    <p className="text-[11px] text-slate-400 italic">
                      Adhunik Powertech ISO 9001 and GMP system certified production workflows.
                    </p>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
        
        {/* Turnkey Complete Cleanroom Banner Spotlight */}
        <section className="my-16 bg-cyan-900 p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500 opacity-10 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
            <Settings className="w-8 h-8 text-cyan-400 animate-spin-slow" />
            Looking for Complete Turnkey Cleanroom Solutions?
          </h2>
          <p className="text-cyan-100 text-sm mb-6 max-w-3xl">
            Building a GMP-compliant cleanroom requires more than wall panels. Our Turnkey Cleanroom Solutions integrate HVAC systems, cleanroom equipment, and validation services to create efficient, contamination-controlled environments.
          </p>
          
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 flex flex-wrap gap-2 text-xs">
              {[
                "Cleanroom Design Layouts", 
                "Advanced HVAC Systems", 
                "Modular Enclosures", 
                "Flush Ceiling Grids", 
                "Air Tight Doors & Windows", 
                "Integrated Utilities", 
                "Testing & Validation"
              ].map((service, index) => (
                <span 
                  key={index} 
                  className="bg-cyan-950/50 px-3 py-1.5 rounded-lg text-cyan-100 font-medium border border-cyan-800/50"
                >
                  ✔ {service}
                </span>
              ))}
            </div>

            <div className="md:col-span-4 flex justify-end w-full">
              <Link 
                href="https://www.adhunikpowertech.com/turnkey-cleanroom-solutions"
                className="group w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white text-cyan-900 font-bold text-xs px-5 py-3.5 rounded-xl shadow-lg hover:bg-cyan-50 transition-all duration-300"
              >
                <span>Explore Turnkey Solutions</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Industrial B2B Grid Layout for Industry Verticals */}
        <section className="mb-20 bg-white">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Industries We Serve Successfully
            </h2>
            <p className="w-full max-w-3xl text-sm text-slate-500 font-normal leading-relaxed">
              Controlled facilities demand specialized designs based on product sensitivity profiles. Our panel installations maintain strict performance metrics across various technical environments:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Pharmaceutical Production", desc: "Tablet zones, injectable suites, active ingredient packaging lines.", icon: <Factory className="w-5 h-5 text-cyan-700" /> },
              { title: "Biotechnology & Research", desc: "Vaccine synthesis cleanrooms, clean cell incubation labs.", icon: <Microscope className="w-5 h-5 text-cyan-700" /> },
              { title: "Healthcare Systems", desc: "Advanced surgical theaters, positive pressure isolation units.", icon: <Activity className="w-5 h-5 text-cyan-700" /> },
              { title: "Precision Electronics", desc: "Semiconductor print suites, clean micro-PCB lines.", icon: <Cpu className="w-5 h-5 text-cyan-700" /> },
            ].map((vertical, index) => (
              <div 
                key={index} 
                className="flex flex-col justify-between bg-slate-50/60 p-5 rounded-xl border-t-4 border-t-cyan-600 border border-slate-200/50 hover:bg-slate-100/60 transition-all duration-200"
              >
                <div>
                  <div className="p-2 bg-white rounded-lg border border-slate-200/40 shadow-sm shrink-0 inline-block mb-3">
                    {vertical.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 tracking-tight mb-1">
                    {vertical.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-normal">{vertical.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl relative">
          <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-7/12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Secure Your Cleanroom Infrastructure Quality
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Get custom designed, high durability HPL, GPSP, or Stainless Steel panels configured by seasoned design engineers to match your parameters perfectly.
              </p>
              <div className="border-t border-slate-800 pt-4 text-xs text-cyan-400 font-bold uppercase tracking-wider">
                Adhunik Powertech Engineering Team <br />
                <span className="normal-case font-normal text-slate-400">Custom Cleanrooms | ISO 14644 Compliance Solutions</span>
              </div>
            </div>

            <div className="lg:w-5/12 w-full">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col gap-4">
                <a href="tel:8287885885" className="group bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-cyan-900/40">
                  <span className="flex items-center gap-3">
                    <PhoneCall className="w-5 h-5" /> Request a Project Quote
                  </span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link href="mailto:info@adhunikpowertech.com?subject=Inquiry%20-%20Cleanroom%20Wall%20Panel%20Specifications" className="group bg-transparent border-2 border-slate-700 hover:border-cyan-400 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-between transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <Mail className="w-5 h-5" /> Email Layout Specifications
                  </span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Accordion FAQ Component Section */}
      <section className="pb-24 max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center flex items-center justify-center gap-2">
            <HelpCircle className="text-slate-800" /> Technical Frequently Asked Questions
        </h3>
        <div className="space-y-4">
            {faqs.map((faq, i) => (
                <details key={i} className="group border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300">
                    <summary className="w-full list-none font-semibold text-slate-800 bg-slate-50 p-5 flex justify-between items-center cursor-pointer select-none [&::-webkit-details-marker]:hidden">
                        <span>{faq.q}</span>
                        <ChevronRight className="w-5 h-5 transition-transform duration-300 transform group-open:rotate-90 text-slate-400" />
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