"use client"; 
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  ShieldCheck, GaugeCircle, Thermometer, Clock, Wind, CheckCircle2,
  PhoneCall, PackageCheck, Zap, Droplets, ArrowRightLeft, Settings,
  ChevronRight, Mail, MapPin
} from "lucide-react";

export default function IndustrialAirCooling() {
  const [openIndex, setOpenIndex] = useState(null);

  const coolingSystems = [
    {
      title: 'Advanced Air Washers',
      desc: <>
        <p>
          <strong className='text-cyan-600 font-semibold'>Mechanism: </strong>  
          A sophisticated centralized treatment system that filters and cools incoming air via high-pressure water sprays and specialized cooling media.
        </p>
        <p>
          <strong className='text-cyan-600 font-semibold'>Ideal For: </strong>  
          Textile mills, food processing units, and pharmaceutical plants where precise dust control and humidity regulation are critical.
        </p>
        <p>
          <strong className='text-cyan-600 font-semibold'>Core Benefit: </strong>  
          Simultaneously manages temperature, air purification, and humidity levels for a healthier production environment.
        </p>
      </>,
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Precision Ducted Cooling',
      desc: <>
        <p>
          <strong className='text-cyan-600 font-semibold'>Mechanism: </strong>  
          Draws fresh external air through saturation pads, distributing chilled air via a strategic network of ducts for uniform coverage.
        </p>
        <p>
          <strong className='text-cyan-600 font-semibold'>Ideal For: </strong>  
          Large-scale warehouses, logistics hubs, and manufacturing halls requiring consistent temperature across expansive zones.
        </p>
        <p>
          <strong className='text-cyan-600 font-semibold'>Core Benefit: </strong>  
          Eliminates "hot spots" by ensuring balanced airflow and constant fresh air exchange throughout the facility.
        </p>
      </>,
      icon: 'M4 7h16M4 12h16m-7 5h7'
    },
    {
      title: 'Heavy-Duty Industrial Coolers',
      desc: <>
        <p>
          <strong className='text-cyan-600 font-semibold'>Mechanism: </strong>  
          High-performance standalone units featuring massive water reservoirs and industrial-grade fans for high-velocity spot cooling.
        </p>
        <p>
          <strong className='text-cyan-600 font-semibold'>Ideal For: </strong>  
          Workshops, loading bays, and assembly lines where centralized ducting is physically or financially impractical.
        </p>
        <p>
          <strong className='text-cyan-600 font-semibold'>Core Benefit: </strong>  
          Highly mobile and cost-effective, offering rapid deployment and immediate relief in high-heat production zones.
        </p>
      </>,
      icon: 'M9.75 17L9 20l-2.25 3m10.5-6L18 20l2.25 3m-9-15.75a3 3 0 11-6 0 3 3 0 016 0zm9 0a3 3 0 11-6 0 3 3 0 016 0z'
    },
  ];

  return (
    <div className="bg-gradient-to-b mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="w-full md:w-6/12 order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl font-bold text-cyan-800 mb-6 leading-tight">
              Energy-Efficient Industrial Air Cooling Solutions in Delhi NCR
            </h1>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify">
              <p>
                The intense Indian summer poses a significant threat to industrial operations. Metal-roofed factories and warehouses act as heat traps, where heavy machinery and poor ventilation create hazardous working conditions that plummet productivity and damage sensitive equipment.
              </p>
              <p>
                To combat this, Adhunik Powertech provides next-generation <strong>evaporative air cooling systems</strong>. Our Air Washer and ducted cooling solutions are engineered to deliver high-volume airflow and sustainable temperature reduction for the most demanding industrial environments.
              </p>
            </div>
          </div>
          <div className="w-full md:w-6/12 order-1 md:order-2">
            <Image
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1773394518/Air_cooling_solution_mh3hj2.webp"
              alt="Industrial air cooling ducts being installed in a large warehouse with text-BEST AIR COOLING SOLUTIONS IN DELHI NCR."
              width={700}
              height={500}
              loading="lazy"
              className="w-full h-auto rounded-xl shadow-2xl border-2 border-cyan-100"
            />
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-16 bg-white p-6 md:p-10 rounded-xl shadow-md border border-cyan-100">
          <h2 className="text-2xl font-bold text-cyan-800 mb-6 pb-2 border-b-2 border-cyan-200">
            Why Standard HVAC Fails in Industrial Spaces
          </h2>
          
          <div className="text-gray-700 text-sm mb-8 leading-relaxed">
            <p>
              Cooling a 50,000 sq. ft. warehouse is vastly different from cooling an office. Industrial facilities face unique thermal loads that require specialized HVAC engineering to maintain safety and efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              { title: "Machinery Thermal Load", desc: "Continuous industrial processes generate massive internal heat gains that standard AC units cannot offset." },
              { title: "Radiant Heat Transfer", desc: "Expansive metal roofs absorb solar radiation, significantly increasing the indoor ambient temperature." },
              { title: "Air Quality & Ventilation", desc: "Stagnant air allows dust and fumes to settle; our systems ensure constant 100% fresh air exchange." },
              { title: "High Occupancy Density", desc: "Labor-intensive zones require high-velocity cooling to prevent heat exhaustion and maintain worker focus." }
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

        {/* Adhunik Powertech Section */}
        <section className="mb-16 bg-white p-6 md:p-10 rounded-xl shadow-lg border border-cyan-100">
          <h2 className="text-2xl font-bold text-cyan-800 mb-6">
            Adhunik Powertech: Excellence in Industrial Climate Control
          </h2>
          <div className="space-y-6 text-gray-700 text-sm leading-relaxed text-justify">
            <p>
              Success in industrial cooling depends on choosing a partner who understands the balance between <strong>performance and operational cost</strong>. Adhunik Powertech is a leader in delivering rugged, energy-efficient cooling technologies across India.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-cyan-50 border-l-4 border-cyan-600">
                <h4 className="font-bold text-cyan-800 mb-1 flex items-center gap-2"><Wind className="w-4 h-4"/> Dual-Stage Air Washers</h4>
                <p className="text-xs text-gray-600">Combines cooling with high-efficiency filtration to meet strict indoor air quality (IAQ) standards.</p>
              </div>
              <div className="p-4 rounded-lg bg-cyan-50 border-l-4 border-cyan-600">
                <h4 className="font-bold text-cyan-800 mb-1 flex items-center gap-2"><Zap className="w-4 h-4"/> EC Fan Integration</h4>
                <p className="text-xs text-gray-600">Utilizing Electronically Commutated (EC) fans to reduce energy consumption by up to 30% compared to standard fans.</p>
              </div>
              <div className="p-4 rounded-lg bg-cyan-50 border-l-4 border-cyan-600">
                <h4 className="font-bold text-cyan-800 mb-1 flex items-center gap-2"><Settings className="w-4 h-4"/> Custom Duct Design</h4>
                <p className="text-xs text-gray-600">Engineered layouts that optimize airflow pressure and ensure even cooling in every corner of your facility.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="bg-white p-6 md:p-10 rounded-xl shadow-md border border-cyan-100 my-16">
          <h2 className="text-2xl font-bold text-cyan-800 mb-8 text-center md:text-left">
            Our Cooling Technology Portfolio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coolingSystems.map((system, index) => (
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
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h3 className="text-xl font-bold text-cyan-800 mb-6 flex items-center gap-2">
            <ArrowRightLeft className="text-cyan-600" /> Operational Efficiency Comparison
          </h3>
          <div className="overflow-x-auto rounded-xl border border-cyan-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-cyan-800 text-white uppercase text-xs font-bold">
                <tr>
                  <th className="px-6 py-5">Feature</th>
                  <th className="px-6 py-5">Evaporative Cooling</th>
                  <th className="px-6 py-5">Conventional HVAC</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                <tr className="hover:bg-cyan-50 transition-colors">
                  <td className="px-6 py-4 border-b font-semibold bg-gray-50/50">Energy Savings</td>
                  <td className="px-6 py-4 border-b text-green-700 font-bold">Up to 80% Lower</td>
                  <td className="px-6 py-4 border-b text-red-600">High Power Demand</td>
                </tr>
                <tr className="hover:bg-cyan-50 transition-colors">
                  <td className="px-6 py-4 border-b font-semibold bg-gray-50/50">Air Quality</td>
                  <td className="px-6 py-4 border-b">100% Chilled Fresh Air</td>
                  <td className="px-6 py-4 border-b">Recirculated Stale Air</td>
                </tr>
                <tr className="hover:bg-cyan-50 transition-colors">
                  <td className="px-6 py-4 border-b font-semibold bg-gray-50/50">Eco-Impact</td>
                  <td className="px-6 py-4 border-b">Zero Refrigerants (CFC-Free)</td>
                  <td className="px-6 py-4 border-b">High GWP Refrigerants</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="px-6 lg:px-12 py-12 bg-white rounded-3xl shadow-xl border border-cyan-50 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-8 flex items-center gap-3">
            <ShieldCheck className="text-cyan-600 w-8 h-8" />
            Reliable Cooling for Industrial Growth
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>Maintaining optimal thermal conditions is no longer a luxury—it is a requirement for industrial reliability. From reducing equipment downtime to ensuring worker safety, the right cooling system pays for itself through increased operational uptime.</p>
              <p>Adhunik Powertech remains committed to sustainable engineering, helping industries across Delhi NCR and beyond achieve peak performance through advanced evaporative cooling technologies.</p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-2xl border-l-8 border-cyan-600 flex flex-col justify-center">
              <p className="text-gray-800 font-medium italic">
                "Our mission is to provide cooling solutions that are as cost-effective as they are powerful, ensuring your facility remains productive even in the harshest 45°C+ heatwaves."
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-600/10 skew-x-12 translate-x-20" />
          <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-7/12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Optimize Your <span className="text-cyan-400">Industrial Climate</span> Today
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                Ready to reduce energy costs and improve your facility's working conditions? Get a professional cooling audit and quote from our expert engineers.
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
                    <Mail className="w-5 h-5" /> Schedule an Inspection
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
