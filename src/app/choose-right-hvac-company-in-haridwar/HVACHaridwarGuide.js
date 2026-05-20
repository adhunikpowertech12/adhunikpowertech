
"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  ShieldCheck, GaugeCircle, Thermometer, Clock, Wind, CheckCircle2,
  PhoneCall, PackageCheck, Zap, Droplets, ArrowRightLeft, Settings,
  ChevronRight, Mail, MapPin, Factory, Microscope, Construction,
  AlertTriangle, HelpCircle
} from "lucide-react";

export default function HVACGuideHaridwar() {
  const [openIndex, setOpenIndex] = useState(null);

  const selectionFactors = [
    {
      title: 'Industry Experience',
      desc: <>
        <p>
          <strong className='text-cyan-600 font-semibold'>Pharma Focus: </strong>  
          Specialized experience in pharmaceutical manufacturing, hospitals, and labs is non-negotiable.
        </p>
        <p>
          <strong className='text-cyan-600 font-semibold'>Adhunik Edge: </strong>  
          Adhunik Powertech specializes in cleanroom and pharmaceutical HVAC solutions, making it a strong choice for high-end projects.
        </p>
      </>,
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: 'Cleanroom Expertise',
      desc: <>
        <p>
          <strong className='text-cyan-600 font-semibold'>Technical Precision: </strong>  
          Requires HEPA filtration, laminar airflow design, and strict pressure control systems.
        </p>
        <p>
          <strong className='text-cyan-600 font-semibold'>Standards: </strong>  
          The company must understand ISO cleanroom standards and Air Changes Per Hour (ACH) requirements.
        </p>
      </>,
      icon: <Microscope className="w-6 h-6" />
    },
    {
      title: 'End-to-End EPC Capability',
      desc: <>
        <p>
          <strong className='text-cyan-600 font-semibold'>The Full Cycle: </strong>  
          Design, Supply, Installation, and Commissioning should all be handled by a single expert team.
        </p>
        <p>
          <strong className='text-cyan-600 font-semibold'>Efficiency: </strong>  
          Reduces coordination issues and ensures significantly faster project completion.
        </p>
      </>,
      icon: <Construction className="w-6 h-6" />
    },
  ];

  const faqs = [
    {
      q: "Which is the top HVAC company in Haridwar?",
      a: "The best HVAC company depends on your project type, but companies with cleanroom and industrial expertise like Adhunik Powertech are highly recommended."
    },
    {
      q: "What is the cost of HVAC installation in Haridwar?",
      a: "Cost depends on project size, system type, and industry requirements. A professional audit is required for precise quoting."
    },
    {
      q: "Why is HVAC important in pharmaceutical projects?",
      a: "HVAC ensures air purity, temperature control, and compliance with strict GMP/ISO regulations."
    }
  ];

  return (
    <div className="bg-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="w-full md:w-7/12 order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl font-bold text-cyan-800 mb-6 leading-tight">
              How to Choose the Right HVAC Company in Haridwar (Complete 2026 Guide)
            </h1>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify">
              <p>
                When it comes to industrial, commercial, or pharmaceutical projects, choosing the right HVAC company in Haridwar is not just about installation — it’s about <strong>performance, compliance, and long-term reliability.</strong>
              </p>
              <p>
                Whether you are setting up a pharmaceutical plant, cleanroom facility, hospital, or industrial unit, the HVAC system plays a critical role in air quality, temperature control, and regulatory compliance.
              </p>
              <p className="font-medium text-cyan-700">
                In this guide, we help you understand how to choose the best HVAC partner — and why companies like Adhunik Powertech are trusted for Haridwar's high-end projects.
              </p>
            </div>
          </div>
          <div className="w-full md:w-5/12 order-1 md:order-2">
           
                <Image
                src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1775817226/hvaccompanyinharidwar_zvgumq.webp"
                alt="Industrial facility rooftop HVAC units with text “Choose the Best HVAC Company in Haridwar | Expert Guide” and Adhunik Powertech branding."
                width={700}
                height={500}
                className="w-full h-auto rounded-xl shadow-xl"
                />
            
          </div>
        </section>

        {/* Why Choice Matters Section */}
        <section className="mb-16 bg-white p-6 md:p-10 rounded-xl shadow-md border border-red-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <AlertTriangle className="text-red-500" /> Why Choosing the Right HVAC Company Matters
          </h2>
          
          <div className="text-gray-700 text-sm mb-8 leading-relaxed">
            <p>
              Many businesses make the mistake of choosing HVAC contractors based only on price. In high-stakes industries like pharmaceuticals, this can lead to catastrophic results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <h4 className="font-bold text-red-800 mb-3">Risks of Poor Selection:</h4>
                <ul className="space-y-2 text-sm text-red-700">
                    <li className="flex items-center gap-2">❌ Poor air quality</li>
                    <li className="flex items-center gap-2">❌ Non-compliance with standards</li>
                    <li className="flex items-center gap-2">❌ Higher energy costs</li>
                    <li className="flex items-center gap-2">❌ System failure</li>
                </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-800 mb-3">Professional Benefits:</h4>
                <ul className="space-y-2 text-sm text-green-700">
                    <li className="flex items-center gap-2">✔ Proper system design</li>
                    <li className="flex items-center gap-2">✔ Energy efficiency</li>
                    <li className="flex items-center gap-2">✔ Regulatory compliance (GMP, ISO)</li>
                    <li className="flex items-center gap-2">✔ Long-term performance</li>
                </ul>
            </div>
          </div>
        </section>

        {/* Factors Grid */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-cyan-800 mb-8">
            7 Key Factors to Choose the Best HVAC Company in Haridwar
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectionFactors.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-cyan-100 hover:border-cyan-400 transition-all shadow-sm hover:shadow-lg">
                <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-cyan-600">
                  {item.icon}
                </div>
                <div className="font-bold text-cyan-900 text-lg mb-3">{index + 1}. {item.title}</div>
                <div className="text-gray-600 text-sm text-justify flex flex-col gap-3">{item.desc}</div>
              </div>
            ))}
          </div>
          
          {/* Secondary Factors Row */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
              {[
                  { title: "Local Presence", desc: "Faster service response, easier site visits, and better understanding of Haridwar's specific climate conditions.", icon: <MapPin/> },
                  { title: "Transparent Pricing", desc: "Avoiding vague quotations. Focus on energy-efficient systems that reduce operational costs over time.", icon: <Zap/> },
                  { title: "After-Sales Support", desc: "HVAC needs regular servicing. Look for companies offering Annual Maintenance Contracts (AMC) and 24/7 support.", icon: <Settings/> },
                  { title: "Project Portfolio", desc: "Verify past experience in industrial plants and pharmaceutical facilities to ensure they can handle your scale.", icon: <PackageCheck/> }
              ].map((item, i) => (
                <div key={i} className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-cyan-600 mr-3 mt-1">{item.icon}</div>
                    <div>
                        <h4 className="font-bold text-slate-800 text-md">{i + 4}. {item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                </div>
              ))}
          </div>
        </section>

        {/* Adhunik Spotlight */}
        <section className="mb-16 bg-cyan-900 p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500 opacity-10 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-cyan-400" />
            Why Adhunik Powertech?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
                <p className="text-cyan-100 italic">Adhunik Powertech stands out as the preferred choice for high-performance HVAC requirements in Haridwar.</p>
                <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                        <span><strong>Specialized Expertise:</strong> Cleanroom and Pharma project execution excellence.</span>
                    </div>
                    <div className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                        <span><strong>Complete EPC Solutions:</strong> Designing to commissioning under one roof.</span>
                    </div>
                    <div className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                        <span><strong>Compliance Focus:</strong> Systems strictly designed to meet industry standards.</span>
                    </div>
                </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h4 className="font-bold mb-4 flex items-center gap-2"><ArrowRightLeft className="w-5 h-5"/> Quick Comparison</h4>
                <div className="space-y-4 text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                        <span>Energy Savings</span>
                        <span className="text-cyan-400 font-bold">Up to 80% Lower</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                        <span>Air Purity</span>
                        <span className="text-cyan-400 font-bold">100% Fresh Air</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Refrigerants</span>
                        <span className="text-cyan-400 font-bold">Eco-Friendly / CFC-Free</span>
                    </div>
                </div>
            </div>
          </div>
        </section>

        

        {/* CTA Section */}
        <section className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl relative">
          <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-7/12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
        Need Expert 
        <a 
          href="https://www.adhunikpowertech.com/hvac" 
          className="text-cyan-400 hover:text-cyan-300 8 decoration-cyan-400/30 transition-colors ml-2"> HVAC SOLUTIONS
        </a> in Haridwar?
      </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                Partner with the experienced team at Adhunik Powertech for reliable, efficient, and compliant climate control solutions.
              </p>
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
                    <Mail className="w-5 h-5" /> Request a Site Visit
                  </span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
      {/* FAQs */}
        <section className="mb-16 max-w-4xl mx-auto">
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
  )
}
