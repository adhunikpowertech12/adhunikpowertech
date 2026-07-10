"use client"; 
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  ShieldCheck, GaugeCircle, Thermometer, Wind, CheckCircle2,
  PhoneCall, ArrowRightLeft, Settings, ChevronRight, Mail, ArrowRight
} from "lucide-react";

export default function CleanroomCeilingGuide() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeStep, setActiveStep] = useState(null);


  const ceilingSystems = [
    {
      title: 'T-Grid Cleanroom Ceiling System',
      desc: <>
        <p>
          <strong className='text-cyan-600 font-semibold'>Configuration: </strong>  
          Consists of an aluminium grid framework supporting removable ceiling panels, HEPA filters, lighting fixtures, and diffusers.
        </p>
        <p>
          <strong className='text-cyan-600 font-semibold'>Ideal For: </strong>  
          Pharmaceutical, healthcare, and electronics cleanrooms where components must be relocated or replaced with minimal disruption.
        </p>
        <p>
          <strong className='text-cyan-600 font-semibold'>Core Benefit: </strong>  
          Offers a flexible layout, easy filter replacement, simple maintenance, quick installation, and excellent future expansion capability.
        </p>
      </>,
      icon: 'M4 7h16M4 12h16m-7 5h7'
    },
    {
      title: 'Seamless Panel Cleanroom Ceiling System',
      desc: <>
        <p>
          <strong className='text-cyan-600 font-semibold'>Configuration: </strong>  
          Uses large prefabricated steel or insulated sandwich panels that create a continuous, smooth surface with fewer joints.
        </p>
        <p>
          <strong className='text-cyan-600 font-semibold'>Ideal For: </strong>  
          Sterile pharmaceutical production, biotechnology laboratories, and aseptic manufacturing facilities where minimizing joints is essential.
        </p>
        <p>
          <strong className='text-cyan-600 font-semibold'>Core Benefit: </strong>  
          Provides superior airtightness, reduced particle accumulation, easier cleaning, better contamination control, and excellent durability.
        </p>
      </>,
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Walkable Cleanroom Ceiling System',
      desc: <>
        <p>
          <strong className='text-cyan-600 font-semibold'>Configuration: </strong>  
          Engineered to safely support maintenance personnel during servicing of HVAC systems, HEPA filters, lighting, and process utilities.
        </p>
        <p>
          <strong className='text-cyan-600 font-semibold'>Ideal For: </strong>  
          Large GMP facilities where regular above-ceiling service and utility management are performed without entering the clean space.
        </p>
        <p>
          <strong className='text-cyan-600 font-semibold'>Core Benefit: </strong>  
          Ensures safe maintenance access, reduced operational downtime, faster servicing, and eliminates the need for external scaffolding.
        </p>
      </>,
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
  ];

  return (
    <div className="bg-gradient-to-b mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="w-full md:w-6/12 order-2 md:order-1">
            <h1 className="text-3xl md:text-3xl font-bold text-cyan-800 mb-4 leading-tight">
             Modular Cleanroom Ceiling Systems: Types, Materials & Benefits
            </h1>
            <div className="space-y-2 text-gray-700 text-sm leading-relaxed text-justify">
             <p>
                A modular cleanroom ceiling system is a critical component of any controlled environment, helping maintain cleanliness, support efficient airflow, and integrate essential services such as HEPA filters, cleanroom lighting, sprinklers, and HVAC systems. Designed for industries like pharmaceuticals, biotechnology, healthcare, electronics, food processing, and medical device manufacturing, these ceiling systems play a key role in meeting ISO and GMP requirements while simplifying maintenance and future facility upgrades.
              </p>
              <p>
               In this guide, you'll learn what a modular cleanroom ceiling system is, its key components, types, materials, benefits, applications, design considerations, and how to choose the right solution for your cleanroom project.
              </p>
            </div>
          </div>
          <div className="w-full md:w-6/12 order-1 md:order-2">
            <Image
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1783673014/Cleanroom_Ceiling_System_tjuope.webp"
              alt="Modular cleanroom ceiling system with integrated LED lighting, HEPA filters, and ventilation for pharmaceutical cleanrooms."
              width={700}
              height={500}
              loading="lazy"
              className="w-full h-auto rounded-xl shadow-2xl border-2 border-cyan-100"
            />
          </div>
        </section>

        {/* Overview Section */}
        <section className="mb-16 bg-white p-6 md:p-10 rounded-xl shadow-md border border-cyan-100">
          <h2 className="text-2xl font-bold text-cyan-800 mb-6 pb-2 border-b-2 border-cyan-200">
            What Is a Modular Cleanroom Ceiling System?
          </h2>
          <div className="text-gray-700 text-sm mb-8 leading-relaxed text-justify">
            <p>
              A modular cleanroom ceiling system is a specially designed ceiling used in controlled environments to support contamination control, efficient airflow, and regulatory compliance. It provides a smooth, airtight, and easy-to-clean surface while integrating essential cleanroom components such as HEPA filters, FFUs, LED lighting, sprinklers, sensors, and return air systems.
            </p>
            <p className="mt-4">
            Its modular design allows for easy installation, maintenance, and future upgrades, making it an ideal choice for pharmaceutical, biotechnology, healthcare, electronics, and food processing cleanrooms.
            </p>
          </div>

          <h3 className="text-xl font-bold text-cyan-800 mb-6">
            Why Is the Cleanroom Ceiling Important?
          </h3>
          <div className="text-gray-700 text-sm mb-8 leading-relaxed">
            <p>
              The ceiling is one of the most important components of contamination control because it directly influences airflow, filtration efficiency, and environmental stability. Since HEPA filters are usually installed within the ceiling, its structural integrity directly affects cleanroom performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              { title: "Pressure Management", desc: "Helps maintain positive or negative room pressure depending on classification requirements." },
              { title: "Airflow Optimization", desc: "Supports uniform laminar airflow patterns necessary for removing airborne particulates." },
              { title: "Contamination Reduction", desc: "Prevents particle accumulation and drastically reduces overall contamination risks." },
              { title: "HVAC & Energy Efficiency", desc: "Improves total HVAC performance and enhances energy efficiency through tight, reliable sealing." }
            ].map((item, i) => (
              <div key={i} className="flex items-start p-4 bg-cyan-50 rounded-lg border border-cyan-100">
                <CheckCircle2 className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-cyan-800 text-md">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Integrated Components Section */}
        <section className="mb-16 bg-white p-6 md:p-10 rounded-xl shadow-lg border border-cyan-100">
          <h2 className="text-2xl font-bold text-cyan-800 mb-6">
            Key Components of a Modular Cleanroom
          </h2>
          <div className="space-y-6 text-gray-700 text-sm leading-relaxed text-justify">
            <p>
              Although the ceiling system is a critical element of any cleanroom, it functions as part of a fully integrated modular cleanroom. Every component contributes to contamination control, operational efficiency, and regulatory compliance. A well-designed modular cleanroom combines structural integrity with advanced airflow management and hygienic construction.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-cyan-50 border-l-4 border-cyan-600">
                <h4 className="font-bold text-cyan-800 mb-1 flex items-center gap-2"><Wind className="w-4 h-4"/> 1. Modular Wall Panels</h4>
                <p className="text-xs text-gray-600">Forms an airtight enclosure using PPGI, stainless steel, HPL, aluminium, or uPVC finishes to minimize particle generation.</p>
              </div>
              <div className="p-4 rounded-lg bg-cyan-50 border-l-4 border-cyan-600">
                <h4 className="font-bold text-cyan-800 mb-1 flex items-center gap-2"><Settings className="w-4 h-4"/> 2. Structural Post & Panel</h4>
                <p className="text-xs text-gray-600">Provides framework support and concealed pathways for electrical, communication, and process utility layouts.</p>
              </div>
              <div className="p-4 rounded-lg bg-cyan-50 border-l-4 border-cyan-600">
                <h4 className="font-bold text-cyan-800 mb-1 flex items-center gap-2"><GaugeCircle className="w-4 h-4"/> 3. Air Filtration System</h4>
                <p className="text-xs text-gray-600">Integrates HEPA/ULPA filters, Fan Filter Units (FFUs), and return air grilles to remove airborne contaminants cleanly.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 rounded-lg bg-cyan-50 border-l-4 border-cyan-600">
                <h4 className="font-bold text-cyan-800 mb-1 flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> 4. Ceiling System</h4>
                <p className="text-xs text-gray-600">Serves as the platform for integrating filtration, lighting, detectors, and creating an airtight structural enclosure.</p>
              </div>
              <div className="p-4 rounded-lg bg-cyan-50 border-l-4 border-cyan-600">
                <h4 className="font-bold text-cyan-800 mb-1 flex items-center gap-2"><ArrowRightLeft className="w-4 h-4"/> 5. Cleanroom Doors</h4>
                <p className="text-xs text-gray-600">Specialized hinged, sliding, automatic, or interlocking doors designed carefully to minimize air leakage.</p>
              </div>
              <div className="p-4 rounded-lg bg-cyan-50 border-l-4 border-cyan-600">
                <h4 className="font-bold text-cyan-800 mb-1 flex items-center gap-2"><Thermometer className="w-4 h-4"/> 6. Flush Windows</h4>
                <p className="text-xs text-gray-600">Double-glazed, flush-mounted window systems that reduce dust accumulation and completely eliminate exposed ledges.</p>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500 italic">
              * Note: Additional cleanroom accessories include pass boxes, air showers, gowning rooms, return air risers, observation windows, and utility raceways to maximize systematic control.
            </p>
          </div>
        </section>

        {/* Ceiling Types Grid */}
        <section className="bg-white p-6 md:p-10 rounded-xl shadow-md border border-cyan-100 my-16">
          <h2 className="text-2xl font-bold text-cyan-800 mb-4 text-center md:text-left">
            Types of Modular Cleanroom Ceiling Systems
          </h2>
          <p className="text-gray-600 text-sm mb-8 text-center md:text-left">
            Different cleanroom applications require different ceiling configurations based on contamination control requirements, maintenance accessibility, equipment loads, and structural design.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ceilingSystems.map((system, index) => (
              <div key={index} className="bg-white flex flex-col p-6 rounded-lg border border-cyan-100 hover:border-cyan-400 transition-all shadow-sm hover:shadow-lg">
                <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={system.icon} />
                  </svg>
                </div>
                <div className="font-bold text-cyan-900 text-lg mb-3">{system.title}</div>
                <div className="text-gray-600 text-sm text-justify flex flex-col gap-3">{system.desc}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-100 text-sm text-gray-700">
            <div>
              <h4 className="font-bold text-cyan-800 mb-2">4. Non-Walkable Cleanroom Ceiling System</h4>
              <p className="text-gray-600">Suitable for facilities with minimal above-ceiling maintenance access. Provides lower structural weight, cost-effective installation, reliable contamination control, and simplified construction. Commonly used in ISO Class 7 and ISO Class 8 cleanrooms.</p>
            </div>
            <div>
              <h4 className="font-bold text-cyan-800 mb-2">5. Self-Supporting Modular Ceiling System</h4>
              <p className="text-gray-600">Eliminates suspension from the building roof by using an independent structural framework. Offers greater installation flexibility, reduced dependence on the building structure, easier relocation, and perfect vibration isolation for retrofit projects.</p>
            </div>
            <div>
              <h4 className="font-bold text-cyan-800 mb-2">6. Gel Seal Ceiling System</h4>
              <p className="text-gray-600">Creates an airtight connection between HEPA filters and the supporting grid using a specialized gel channel. Highly recommended for aseptic pharmaceutical production, injectable manufacturing, biotechnology, and high-grade ISO Class 5 environments.</p>
            </div>
            <div>
              <h4 className="font-bold text-cyan-800 mb-2">7. Gasket Seal Ceiling System</h4>
              <p className="text-gray-600">Uses compressible gaskets to create an airtight seal between ceiling components and filter housings. Delivers reliable sealing, easier maintenance, lower installation cost, and simple filter replacement across core laboratories and medical device plants.</p>
            </div>
          </div>
        </section>

        {/* Materials, Design & Process Section */}
        <section className="mb-16 bg-white p-6 md:p-10 rounded-xl shadow-md border border-cyan-100">
          <h2 className="text-2xl font-bold text-cyan-800 mb-6">
            Materials, Design Considerations & Installation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-700">
            <div>
              <h3 className="font-bold text-lg text-cyan-800 mb-3">Materials Used in Systems</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><strong>PPGI (Pre-Painted Galvanized Iron):</strong> Offers excellent corrosion resistance, smooth finish, long service life, and easy maintenance.</li>
                <li><strong>Stainless Steel:</strong> Preferred in high-hygiene setups like biotechnology and pharmaceutical lines due to superior chemical resistance.</li>
                <li><strong>Aluminium:</strong> Provides lightweight structural performance, natural corrosion protection, and exceptionally fast installation speeds.</li>
                <li><strong>Insulated Sandwich Panels:</strong> Utilizes core insulation like PIR, PUF, Rockwool, or Mineral wool to improve thermal, fire, and acoustic metrics.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-cyan-800 mb-3">Design Considerations Before Installing</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><strong>Cleanroom Classification:</strong> Ensure the chosen layout aligns properly with target regulatory ISO standards.</li>
                <li><strong>Airflow Pattern:</strong> Choose based on whether the zone requires systematic laminar airflow or turbulent airflow configurations.</li>
                <li><strong>Equipment Load:</strong> Grid structures must safely support the collective weight of filters, Fan Filter Units (FFUs), lights, and utilities.</li>
                <li><strong>HVAC Integration & Chemistry:</strong> Maintains balanced airflow, room pressure, temperature consistency, and resists aggressive cleaning chemicals.</li>
              </ul>
            </div>
          </div>

        </section>

        {/* Maintenance & Mistakes Comparison Section */}
        <section className="mb-16">
          <h3 className="text-xl font-bold text-cyan-800 mb-6 flex items-center gap-2">
            <ArrowRightLeft className="text-cyan-600" /> Maintenance Best Practices vs Common Mistakes
          </h3>
          <div className="overflow-x-auto rounded-xl border border-cyan-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-cyan-800 text-white uppercase text-xs font-bold">
                <tr>
                  <th className="px-6 py-5">Operational Focus</th>
                  <th className="px-6 py-5">Recommended Best Practices</th>
                  <th className="px-6 py-5">Common Mistakes to Avoid</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                <tr className="hover:bg-cyan-50 transition-colors">
                  <td className="px-6 py-4 border-b font-semibold bg-gray-50/50">Inspection & Sealing</td>
                  <td className="px-6 py-4 border-b text-green-700 font-bold">Scheduled cleaning, regular seal integrity checks, and air leakage audits.</td>
                  <td className="px-6 py-4 border-b text-red-600">Inadequate panel sealing, delaying planned maintenance, and ignoring minor leak paths.</td>
                </tr>
                <tr className="hover:bg-cyan-50 transition-colors">
                  <td className="px-6 py-4 border-b font-semibold bg-gray-50/50">Material Selection</td>
                  <td className="px-6 py-4 border-b">Matching component selections strictly to operational chemistry and thermal guidelines.</td>
                  <td className="px-6 py-4 border-b">Selecting unsuitable, low-quality materials to lower upfront capital construction costs.</td>
                </tr>
                <tr className="hover:bg-cyan-50 transition-colors">
                  <td className="px-6 py-4 border-b font-semibold bg-gray-50/50">Planning & Integration</td>
                  <td className="px-6 py-4 border-b">Thorough coordination with HVAC infrastructure and creating clear paths for future expansions.</td>
                  <td className="px-6 py-4 border-b">Ignoring future modification needs, poor filter installation, and overlooking regulatory data.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Selection Guide Section */}
        <section className="mb-16 bg-white p-6 md:p-10 rounded-xl shadow-md border border-cyan-100">
          <h2 className="text-2xl font-bold text-cyan-800 mb-4">
            How to Choose the Right Modular Cleanroom Ceiling System ?
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            When evaluating ceiling systems for a prospective facility, make sure to consider the following critical evaluation metrics:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <ul className="space-y-2 list-disc pl-5 text-gray-600">
              <li>What ISO cleanliness level is explicitly required?</li>
              <li>Which specific filtration configuration (HEPA/ULPA) will be installed?</li>
              <li>What operational utilities require ceiling integration paths?</li>
            </ul>
            <ul className="space-y-2 list-disc pl-5 text-gray-600">
              <li>What environmental conditions will the clean workspace operate under?</li>
              <li>Are there future expansions planned down the line?</li>
              <li>Does the structural layout completely support modern regulatory compliance?</li>
            </ul>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="px-6 lg:px-12 py-12 bg-white rounded-3xl shadow-xl border border-cyan-50 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-8 flex items-center gap-3">
            <ShieldCheck className="text-cyan-600 w-8 h-8" />
            Expert Modular Cleanroom Ceiling Systems by Adhunik Powertech
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed text-justify">
              <p>
                As a <a href="https://www.adhunikpowertech.com/turnkey-cleanroom-solutions">trusted cleanroom manufacturer</a> in Haridwar and Roorkee, Adhunik Powertech delivers high-quality modular cleanroom ceiling systems designed for pharmaceutical, healthcare, biotechnology, food processing, electronics, and industrial manufacturing facilities. Our ceiling systems are engineered to integrate seamlessly with cleanroom walls, HVAC systems, HEPA filters, lighting, doors, and other critical components, ensuring efficient contamination control and compliance with ISO 14644 and GMP standards.
              </p>
            
              <p>
                From new cleanroom construction to turnkey projects and facility upgrades, our team provides customized, durable, and easy-to-maintain ceiling solutions tailored to your operational requirements. With a focus on quality, performance, and long-term reliability, <a href="https://www.adhunikpowertech.com/cleanroom-manufacturer-in-roorkee-haridwar">Adhunik</a> helps businesses build cleanroom environments that support regulatory compliance, operational efficiency, and future expansion.
              </p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-2xl border-l-8 border-cyan-600 flex flex-col justify-center">
              <h4 className="font-bold text-cyan-800 mb-4 text-lg">Frequently Asked Questions</h4>
              <div className="space-y-4 text-xs md:text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-cyan-900">Q: What is a modular cleanroom ceiling system?</p>
                  <p className="text-gray-600">A: It is a prefabricated ceiling designed to support contamination control by integrating filtration, lighting, utilities, and airtight construction within a controlled environment.</p>
                </div>
                <div>
                  <p className="font-semibold text-cyan-900">Q: Why are modular ceilings preferred over conventional ceilings?</p>
                  <p className="text-gray-600">A: They provide better contamination control, easier maintenance, faster installation, flexibility for future modifications, and improved integration with HVAC and filtration systems.</p>
                </div>
                <div>
                  <p className="font-semibold text-cyan-900">Q: Which material is best for cleanroom ceilings?</p>
                  <p className="text-gray-600">A: The choice depends on the application. PPGI is widely used for durability and cost-effectiveness, while stainless steel is preferred in highly hygienic or corrosive environments.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-600/10 skew-x-12 translate-x-20" />
          <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-7/12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Optimize Your <span className="text-cyan-400">Cleanroom Environment</span> Today !
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                 Looking for a reliable cleanroom solution? Contact us for expert support from design to installation.
              </p>
            </div>

            <div className="lg:w-5/12 w-full">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col gap-6">
                <a href="tel:8287885885" className="group bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-between transition-all duration-300 transform hover:-translate-y-1">
                  <span className="flex items-center gap-3">
                    <PhoneCall className="w-5 h-5" /> +91 82878 85885
                  </span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link href="/support-form" className="group bg-transparent border-2 border-slate-700 hover:border-cyan-400 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-between transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <Mail className="w-5 h-5" /> Schedule an Engineering Inspection
                  </span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}