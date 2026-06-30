"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  ShieldCheck,
  GaugeCircle,
  Thermometer,
  Clock,
  BadgeDollarSign,
  Hammer,
  Boxes,
  FileCheck2,
  Ruler,
  AlertTriangle,
  Trash2,
  ScanSearch,
  Users2,
  ThermometerSun,
  Wrench,
  SlidersHorizontal,
  BarChart3,
  Wind,
  LayoutTemplate,
  Plug,
  Cpu,
  CalendarCheck2,
  Radar,
  Repeat2,
  LineChart,
  ThumbsDown,
  ShieldX,
  ClipboardCheck,
  Building2,
  PhoneCall,
  AlarmClockCheck,
  MapPin,
  PackageCheck,
  RefreshCw,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function HvacProductQuality() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const parametersControlled = [
    {
      title: 'Temperature Stability',
      desc: <>Different industries require highly controlled temperatures to ensure overall product stability and process reliability.</>,
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    },
    {
      title: 'Humidity Levels',
      desc: <>Managing moisture prevents absolute disasters like microbial growth, rust, or material cracking inside facilities.</>,
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
    },
    {
      title: 'Air Cleanliness & Filtration',
      desc: <>Using efficient particulate filtration stops dust, micro-organisms, and airborne debris from contaminating processes.</>,
      icon: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
    }
  ];

  const industryImpacts = [
    {
      title: "Pharmaceuticals",
      description: "Improper temperatures can alter chemical compositions, reduce efficacy, or affect the stability of active ingredients."
    },
    {
      title: "Food Processing",
      description: "Temperature fluctuations may accelerate spoilage, impact taste and texture, and shorten shelf life."
    },
    {
      title: "Electronics Manufacturing",
      description: "Excessive heat can affect sensitive components and increase operational failure rates significantly."
    },
    {
      title: "Plastic and Precision Manufacturing",
      description: "Even small temperature variations can lead to expansion or contraction of materials, causing dimensional inaccuracies."
    }
  ];

  const hiddenRisks = [
    { title: "Product Contamination", description: "Dust, microbes, and process volatiles settling onto open materials." },
    { title: "Dimensional Inaccuracies", description: "Expansion or contraction of sensitive materials due to thermal shifts." },
    { title: "Reduced Shelf Life", description: "Accelerated degradation patterns in organic or compound-based products." },
    { title: "Increased Microbial Growth", description: "Uncontrolled moisture spikes triggering unexpected biological hazards." },
    { title: "Material Degradation", description: "Raw elements reacting unfavorably with extreme local conditions." },
    { title: "Inconsistent Production Batches", description: "Varying end-results across identical operational lines and hours." }
  ];

  const warningSigns = [
    { title: "Rising Product Rejection Rates", description: "An unexplained increase in defects may indicate environmental instability.", icon: ThumbsDown },
    { title: "Frequent Equipment Problems", description: "Dust accumulation and poor temperature control can affect machinery performance.", icon: AlertTriangle },
    { title: "Inconsistent Production Batches", description: "Variations in product quality often correlate with fluctuating environmental conditions.", icon: RefreshCw },
    { title: "Increased Employee Complaints", description: "Workers may report uncomfortable temperatures, excessive humidity, or poor air quality.", icon: Users2 },
    { title: "Condensation or Excess Moisture", description: "Visible moisture may signal complex humidity control problems.", icon: Wind },
    { title: "Unexpected Compliance Issues", description: "Repeated audit findings related to environmental conditions should not be ignored.", icon: ClipboardCheck }
  ];

  const modernSolutions = [
    { title: "Real-Time Monitoring", description: "Sensors continuously track temperature, humidity, and overall air quality metrics instantly.", icon: Radar },
    { title: "Intelligent Controls", description: "Automated real-time adjustments help maintain stable manufacturing conditions round-the-clock.", icon: Cpu },
    { title: "Energy Optimization", description: "Advanced control systems improve efficiency while fully maintaining operational parameters.", icon: GaugeCircle },
    { title: "Predictive Maintenance", description: "Data-driven monitoring helps identify problems before they ever affect production outcomes.", icon: AlarmClockCheck }
  ];

  const faqItems = [
    {
      question: "Are environmental conditions monitored continuously in your facility?",
      answer: "Continuous monitoring using digital sensors provides the visibility needed to catch temperature or humidity fluctuations before they affect product quality."
    },
    {
      question: "Have product defects or rejection rates increased recently without obvious cause?",
      answer: "An unexplained bump in batch failure rates often traces directly back to underperforming HVAC units failing to maintain strict environments."
    },
    {
      question: "Is the HVAC system sized appropriately for current industrial production demands?",
      answer: "Oversized or undersized systems fail to handle humidity or air exchange safely. Changes to production lines require evaluating your ventilation structure."
    }
  ];

  return (
    <>
      <div className="bg-gradient-to-b mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className="w-full md:w-6/12">
              <Image
                src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1782800892/Current_HVAC_System_Affecting_Product_Quality_fzv43r.webp"
                alt="Industrial HVAC Climate Control System"
                width={700}
                loading="lazy"
                height={500}
                className="w-full h-auto rounded-xl shadow-xl border-2 border-cyan-100"
              />
            </div>

            <div className="w-full md:w-6/12">
              <h1 className="text-xl md:text-3xl text-center md:text-left font-bold text-cyan-800 mb-6 leading-tight">
                Is Your Current HVAC System Affecting Product Quality?
              </h1>
              <p className="w-full md:w-10/12 text-sm text-gray-700 mb-6 text-justify md:text-left leading-relaxed">
                In many industries, product quality is often associated with raw materials, manufacturing processes, and quality control procedures. However, one critical factor is frequently overlooked—the performance of the HVAC system.
              </p>
              <p className="w-full md:w-10/12 text-sm mb-6 text-justify md:text-left font-medium text-cyan-700">
                Could your current HVAC system be affecting product quality without you even realizing it? The answer, in many cases, is yes.
              </p>
            </div>
          </section>

          {/* Intro Section */}
          <section className="mb-16 bg-white p-5 md:p-8 rounded-xl shadow-sm border border-gray-100 text-sm text-gray-700 text-justify space-y-4">
            <h2 className="text-xl font-bold text-cyan-800 mb-2">Why HVAC Systems Matter Beyond Comfort</h2>
            <p>
              Most people think of HVAC systems as equipment designed to keep buildings comfortable. In manufacturing and industrial facilities, however, HVAC systems perform a much larger role. They create and maintain environmental conditions that directly influence production outcomes.
            </p>
            <p>
              For industries such as pharmaceuticals, food processing, electronics, automotive manufacturing, healthcare, and precision engineering, the indoor environment directly influences product consistency, safety, and compliance. Temperature fluctuations, humidity imbalance, poor air filtration, and inadequate ventilation can quietly affect production conditions and eventually compromise the final product.
            </p>
          </section>

          {/* Controlled Parameters Section */}
          <section className="mb-16 bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100">
            <p className="md:text-2xl font-bold text-cyan-800 mb-6 pb-2 border-b-2 border-cyan-200">
              <span className="bg-cyan-600 text-white px-2 py-1 rounded-md">
                Critical Parameters Under Control
              </span>
            </p>
            <p className="text-sm pb-6 text-gray-600">
              A properly designed and maintained HVAC system helps eliminate minor parameter deviations that trigger significant quality issues, defects, waste, and customer complaints:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {parametersControlled.map((param, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-lg border border-gray-100 flex flex-col items-start">
                  <div className="bg-cyan-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={param.icon} />
                    </svg>
                  </div>
                  <h4 className="font-bold text-cyan-800 mb-1">{param.title}</h4>
                  <p className="text-xs text-gray-600">{param.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-xs text-gray-500 italic">
              *Note: Standard environments also control Air Pressure Differentials, Ventilation Fresh Air Exchanges, and overall Contamination Levels.
            </div>
          </section>

          {/* Hidden Connections & Temperature variations */}
          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-5 md:p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-cyan-800 mb-4">The Hidden Connection</h3>
              <p className="text-sm text-gray-600 mb-4">
                Many product defects are initially blamed on machinery, operators, or raw materials. In reality, environmental conditions often play a contributing role because problems develop gradually. An inefficient HVAC system can lead to:
              </p>
              <ul className="space-y-2">
                {hiddenRisks.map((risk, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className="text-cyan-600 mr-2 font-bold">•</span>
                    <span className="text-gray-700"><strong>{risk.title}:</strong> {risk.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 md:p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-cyan-800 mb-4">Temperature Variations & Consistency</h3>
              <p className="text-sm text-gray-600 mb-4">
                Temperature control is one of the most critical aspects of production environments. An HVAC system that struggles to maintain stable conditions creates variations across sectors:
              </p>
              <div className="space-y-3">
                {industryImpacts.map((ind, idx) => (
                  <div key={idx} className="text-xs bg-cyan-50/50 p-2 rounded border-l-4 border-cyan-600">
                    <span className="font-bold text-cyan-800 block mb-0.5">{ind.title}</span>
                    <p className="text-gray-700">{ind.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Humidity & Contamination Deep-dive */}
          <section className="bg-white p-5 md:p-8 rounded-xl shadow-md mb-16 border border-gray-100">
            <h2 className="text-xl md:text-2xl font-bold text-cyan-800 mb-4">Humidity & Air Quality Concerns</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div className="space-y-3">
                <h4 className="font-bold text-cyan-700 border-b pb-1">Humidity: The Silent Quality Influencer</h4>
                <p className="text-xs">Oversized or poorly designed HVAC systems often struggle to manage humidity effectively. Both extremes bring issues:</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-red-50 p-2 rounded">
                    <span className="font-bold text-red-800 block">High Humidity:</span>
                    Microbial growth, rust, raw material moisture absorption, packaging damage.
                  </div>
                  <div className="bg-amber-50 p-2 rounded">
                    <span className="font-bold text-amber-800 block">Low Humidity:</span>
                    Static electricity, material brittleness, cracking, and unwanted dust generation.
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-cyan-700 border-b pb-1">Poor Air Quality & Microscopic Risks</h4>
                <p className="text-xs">
                  Dust, microbes, volatile particles, and airborne contaminants can easily enter production streams, resulting in dust settling on tablets, contaminated food packs, or surface defects in precision manufacturing.
                </p>
                <p className="text-xs font-semibold text-gray-600">
                  Inadequate Ventilation & Pressure Imbalances can also destroy cleanroom integrity, leading to cross-contamination, recalls, and loss of brand reputation.
                </p>
              </div>
            </div>
          </section>

          {/* Signs of HVAC Issues (Using Lucide Grid) */}
          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-cyan-800 mb-6 text-center md:text-left">
              Signs Your HVAC System May Be Affecting Product Quality
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {warningSigns.map((sign, index) => {
                const IconComp = sign.icon;
                return (
                  <div key={index} className="bg-white p-5 rounded-lg border border-cyan-100 shadow-sm flex gap-4 items-start">
                    <div className="bg-amber-50 p-2 rounded-md">
                      <IconComp className="text-amber-600 w-6 h-6 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm mb-1">{sign.title}</h4>
                      <p className="text-gray-600 text-xs">{sign.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Financial cost section */}
          <section className="bg-slate-900 text-white p-6 md:p-10 rounded-2xl mb-16 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="md:w-7/12">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-cyan-400">The Financial Cost of Poor HVAC Performance</h3>
              <p className="text-sm text-slate-300 text-justify">
                Product quality issues caused by environmental instability can become extremely expensive. Expenses stack up rapidly across product recalls, sudden production delays, increased batch waste, regulatory non-compliance penalties, higher equipment maintenance bills, and lost business opportunities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full md:w-4/12 text-xs text-center font-semibold">
              <div className="bg-slate-800 p-3 rounded border border-slate-700">Product Recalls</div>
              <div className="bg-slate-800 p-3 rounded border border-slate-700">Regulatory Fines</div>
              <div className="bg-slate-800 p-3 rounded border border-slate-700">Increased Waste</div>
              <div className="bg-slate-800 p-3 rounded border border-slate-700">Lost Business</div>
            </div>
          </section>

          {/* Modern Solutions & Tech */}
          <section className="bg-white p-5 md:p-8 rounded-xl shadow-md border border-cyan-100 mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-cyan-800 mb-2">How Modern HVAC Systems Support Better Product Quality</h3>
            <p className="text-sm text-gray-600 mb-6">
              Advancements in HVAC technology have significantly improved environmental control capabilities, allowing smart HVAC systems to perfectly balance stability with long-term energy performance.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {modernSolutions.map((sol, idx) => {
                const IconComponent = sol.icon;
                return (
                  <div key={idx} className="border border-gray-100 p-4 rounded-lg bg-gray-50/50">
                    <IconComponent className="w-8 h-8 text-cyan-600 mb-2" />
                    <h5 className="font-bold text-gray-800 text-sm mb-1">{sol.title}</h5>
                    <p className="text-xs text-gray-500">{sol.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Accordion Questions Section */}
          <section className="mb-16 bg-white p-5 md:p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-cyan-800 mb-4">Questions Every Facility Manager Should Ask</h3>
            <p className="text-sm text-gray-600 mb-6">
              To determine whether your existing climate settings or setup might be quietly endangering batch consistency, evaluate these key points:
            </p>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    className="w-full flex justify-between items-center text-left font-semibold text-sm md:text-base text-cyan-800 focus:outline-none"
                    onClick={() => toggle(index)}
                  >
                    <span>{item.question}</span>
                    {openIndex === index ? <ChevronUp className="w-5 h-5 text-cyan-600" /> : <ChevronDown className="w-5 h-5 text-cyan-600" />}
                  </button>
                  {openIndex === index && (
                    <p className="mt-2 text-xs md:text-sm text-gray-600 bg-cyan-50/40 p-3 rounded-md transition-all">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <div className="px-6 lg:px-24 py-12 bg-white rounded-3xl shadow-md border border-gray-100 space-y-6 mb-16">
            <h2 className="text-xl md:text-2xl text-center md:text-left font-bold text-cyan-700">
              Conclusion: Quality Begins with the Right Environment
            </h2>
            <p className="text-gray-700 text-sm text-justify leading-relaxed">
              Product quality depends on far more than production equipment and quality control procedures. The environment in which products are manufactured plays an equally important role. An underperforming HVAC system can quietly contribute to contamination, inconsistencies, increased waste, and compliance risks. 
            </p>
            <p className="text-gray-700 text-sm text-justify leading-relaxed font-semibold">
              Investing in proper environmental control through cleanroom management or scheduled preventive maintenance is not simply an operational decision—it is a proactive quality assurance strategy. 
            </p>
            <p className="text-xs text-cyan-800 italic mt-4 pt-4 border-t border-gray-100">
              The real question is not whether HVAC affects product quality. The real question is: Is your current HVAC system helping you deliver consistent quality—or quietly putting it at risk?
            </p>
          </div>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-3xl font-bold mb-2">Optimize Your Production Environment with Expert HVAC Solutions</h2>
              <p className="text-cyan-100 mb-4 text-sm md:text-base">
               Contact our specialized engineers to review your facility's cooling and compliance strategies today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:8287885885"
                  className="bg-white text-sm md:text-md font-bold text-cyan-800 hover:bg-cyan-100 py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Contact Expert
                </a>
                <Link
                  href="/support-form"
                  className="bg-cyan-900 text-sm md:text-md hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center border border-cyan-700"
                >
                  <PackageCheck className="w-5 h-5 mr-2" />
                  Enquiry Now
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}