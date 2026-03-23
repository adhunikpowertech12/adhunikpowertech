"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  ShieldCheck,
  Wind,
  Settings,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Layout,
  Gauge,
  Box,
  PhoneCall,
  Search,
  LayoutTemplate
} from "lucide-react";

export default function PharmaCleanroomBlog() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const comparisonSystems = [
    {
      title: 'AHU (Air Handling Unit)',
      desc: <>
        <p><strong className='text-cyan-600 font-semibold'>System Type:</strong> Centralized HVAC system distributing air through complex ducting.</p>
        <p><strong className='text-cyan-600 font-semibold'>Key Functions:</strong> Controls temperature, humidity, and pressure differentials while filtering air via HEPA filters.</p>
        <p><strong className='text-cyan-600 font-semibold'>Best Application:</strong> Large-scale pharmaceutical manufacturing plants and high-capacity facilities.</p>
      </>,
      icon: <Settings className="w-6 h-6 text-cyan-600" />
    },
    {
      title: 'FFU (Fan Filter Unit)',
      desc: <>
        <p><strong className='text-cyan-600 font-semibold'>System Type:</strong> Decentralized unit installed directly in ceiling grids for localized control.</p>
        <p><strong className='text-cyan-600 font-semibold'>Key Functions:</strong> Provides localized air filtration and uniform airflow without heavy dependency on ducting.</p>
        <p><strong className='text-cyan-600 font-semibold'>Best Application:</strong> Modular clean rooms, labs, R&D facilities, and flexible expansion projects.</p>
      </>,
      icon: <Wind className="w-6 h-6 text-cyan-600" />
    },
    {
      title: 'Hybrid HVAC System',
      desc: <>
        <p><strong className='text-cyan-600 font-semibold'>The Best Approach:</strong> Combining AHU + FFU technologies for modern Turnkey Pharma projects.</p>
        <p><strong className='text-cyan-600 font-semibold'>Benefit:</strong> Delivers the best performance, scalability, and compliance for mission-critical zones.</p>
        <p><strong className='text-cyan-600 font-semibold'>Usage:</strong> Widely adopted in industrial hubs like Delhi NCR, Haridwar, and Roorkee.</p>
      </>,
      icon: <LayoutTemplate className="w-6 h-6 text-cyan-600" />
    }
  ];

  const selectionChecklist = [
    {
      title: "AHU is better for:",
      description: "Large pharma manufacturing units, centralized HVAC control, and long-term operational efficiency."
    },
    {
      title: "FFU is better for:",
      description: "Modular clean rooms, flexible expansion, and small to mid-scale facilities."
    },
    {
      title: "Cost Factors:",
      description: "AHU has a higher initial setup but lower long-term complexity for large areas. FFU offers lower initial investment for small areas but requires maintenance of multiple units."
    }
  ];

  const cleanroomFaqs = [
  
    {
      question: "Which system is more cost-effective?",
      answer: "AHU is cost-effective for large facilities, while FFU is suitable for smaller or expandable setups."
    },
     {
      question: "Why are FFUs used in critical cleanroom areas?",
      answer: "FFUs provide uniform laminar airflow and reduce contamination risk, making them ideal for sterile and high-grade zones."
    },
      {
      question: "Can AHU alone maintain pharma cleanroom standards?",
      answer: "AHU can manage temperature and humidity, but for high-sterility zones, FFUs are often required for better contamination control."
    },
   
    {
      question: "Who provides Turnkey Pharma Clean Room Projects in India?",
      answer: "Experienced companies like Adhunik Powertech deliver complete Turnkey Pharma Clean Room Projects in India, including design, installation, and validation"
    },
   
     {
      question: "Which locations are the best for a pharma cleanroom setup in North India?",
      answer: "Most ideal locations are concentrated in Baddi (Himachal Pradesh), Haridwar & Roorkee (Uttarakhand), and the Delhi-NCR region, including Noida and Greater Noida."
    }
  
  ];

  return (
    <div className="bg-gradient-to-b mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="w-full md:w-6/12">
            <Image
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1774258077/ahuvsffu_pcs3xq.webp"
              alt="AHU vs FFU Pharma Cleanroom"
              width={700}
              height={500}
              className="w-full h-auto rounded-xl shadow-xl border-2 border-cyan-100"
              priority
            />
          </div>
          <div className="w-full md:w-6/12">
            <h1 className="text-lg md:text-2xl text-center md:text-left font-bold text-cyan-800 mb-6 leading-tight uppercase">
              AHU vs FFU in Pharma Clean Rooms: Which is Better? (Complete HVAC Guide 2026)
            </h1>
            <p className="w-full md:w-11/12 text-sm text-gray-700 mb-6 text-justify md:text-left leading-relaxed">
              In the pharmaceutical industry, clean rooms are critical for maintaining product quality, safety, and regulatory compliance. A well-designed HVAC system ensures controlled airflow, temperature, humidity, and contamination levels.
            </p>
            <p className="w-full md:w-11/12 text-sm text-gray-700 text-justify md:text-left font-medium">
              AHU vs FFU in pharma clean rooms: AHU (Air Handling Unit) is a centralized system, while FFU (Fan Filter Unit) is a decentralized ceiling unit. Choosing correctly is essential for facilities in Delhi NCR, Haridwar, Roorkee, and Kashipur.
            </p>
          </div>
        </section>

        {/* Quick Answer / Role of HVAC */}
        <section className="mb-16 bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100">
          <div className="md:text-2xl font-bold text-cyan-800 mb-6 pb-2 border-b-2 border-cyan-200">
            <span className="bg-cyan-600 text-white px-2 py-1 rounded-md uppercase">
              Role of HVAC in Pharma Clean Rooms
            </span>
          </div>
          <p className='text-sm pb-4 text-justify'>
            In simple terms, HVAC is the backbone of any clean room. It ensures controlled temperature and humidity, proper air changes per hour (ACH), contamination control, and compliance with GMP standards.
          </p>
          <ul className="space-y-4">
            {selectionChecklist.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 bg-cyan-100 text-cyan-800 rounded-full p-2 mr-3">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <span className="text-gray-700 md:font-medium text-sm">
                  <strong className='font-bold text-cyan-600'>{item.title}</strong> {item.description}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technical Explanations Section */}
        <section className="bg-white md:p-8 p-3 rounded-xl shadow-md mb-16">
          <div className="mt-8">
            <h3 className="md:text-2xl font-semibold text-cyan-700 mb-4 text-center md:text-left">
              Pharma Clean Room HVAC Solutions in India
            </h3>
            <p className="text-gray-600 mb-4 text-sm text-justify md:text-left leading-relaxed">
              Pharmaceutical industries in Delhi NCR, Haridwar, Roorkee, and Kashipur are rapidly adopting advanced HVAC solutions. For successful execution, most companies prefer Turnkey Pharma Clean Room Projects in India to ensure seamless design, installation, and validation processes.
            </p>

            <div className="bg-white border border-cyan-200 rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-cyan-700 mb-3">
                Importance of Turnkey Clean Room Projects
              </h4>
              <p className='pb-4 text-sm text-gray-500'>
                A turnkey approach provides a single point of responsibility, faster execution, and reduced risk.
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  "HVAC System Design",
                  "Clean Room Panels",
                  "Electrical Systems",
                  "Validation Processes (IQ, OQ, PQ)",
                  "Knowledge of GMP Compliance",
                  "Proper System Performance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* System Breakdown Section */}
        <section className="bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100 mb-16">
          <div className="mb-12">
            <h3 className="md:text-2xl text-center md:text-left font-semibold text-cyan-700 mb-4">
              Detailed Comparison: AHU vs FFU
            </h3>
            <p className="text-gray-700 mb-6 text-sm text-justify md:text-left">
              Choosing between AHU and FFU depends on project scale, budget, and future expansion plans. Here are the core functions and functions of both systems:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comparisonSystems.map((system, index) => (
                <div key={index} className="bg-white flex flex-col justify-start md:items-start items-start md:text-left text-center p-5 rounded-lg border border-cyan-100 hover:border-cyan-300 transition-all shadow-sm hover:shadow-md">
                  <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {system.icon}
                  </div>
                  <div className="font-bold text-cyan-800 text-lg mb-2">{system.title}</div>
                  <div className="text-gray-500 text-sm text-justify flex flex-col gap-2">{system.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* Conclusion Section */}
        <div className="px-6 lg:px-24 py-12 bg-white rounded-3xl shadow-2xl space-y-16 mb-16">
          <div className="space-y-6 pt-10 border-t border-cyan-200">
            <h2 className="md:text-2xl text-center md:text-left font-bold text-cyan-700">
              Conclusion: Choosing the Right Strategy
            </h2>
            <p className="text-gray-700 text-sm text-justify leading-relaxed">
              The key difference between AHU and FFU lies in their design and application. AHU is best for large, centralized systems, while FFU is ideal for flexible, modular setups. A hybrid approach offers the best results for most Turnkey Pharma Clean Room Projects in India. Working with the 
              <Link href="https://www.adhunikpowertech.com/hvac" className="text-cyan-700 font-bold hover:underline mx-1">
                Top & best HVAC Company in India
              </Link> 
              ensures proper system design, efficient installation, and reliable long-term performance.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold mb-4">Let’s Design Your Cleanroom the Right Way</h2>
            <p className="text-cyan-100 mb-6 text-sm md:text-lg">
              Get customized HVAC design and end-to-end execution with GMP-compliant solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:8287885885"
                className="bg-white text-sm md:text-md font-bold text-cyan-800 hover:bg-cyan-100 py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <PhoneCall className="w-5 h-5 mr-2" /> Request Consultation
              </a>
              <Link
                href="/support-form"
                className="bg-cyan-900 text-sm md:text-md hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center border border-cyan-700"
              >
                <Search className="w-5 h-5 mr-2" /> Enquiry Now
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section - Located AFTER CTA */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-800 mb-8 text-center uppercase">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {cleanroomFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-cyan-100">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-cyan-800 hover:bg-cyan-50 transition-colors"
                >
                  <span className="text-sm md:text-base">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-cyan-50">
                    {faq.answer}
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
