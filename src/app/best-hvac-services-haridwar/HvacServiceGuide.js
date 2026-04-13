
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
  Home,
  Building2,
  Fan,
  Gauge,
  Box,
  PhoneCall,
  Search,
  LayoutTemplate,
  ThermometerSnowflake,
  Zap,
  HardHat,
  Factory
} from "lucide-react";

export default function HaridwarHVACBlog() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const hvacSystems = [
    {
      title: 'Centralized AC Systems',
      desc: <>
        <p>Ideal for large buildings like malls and hotels. It provides uniform cooling across large areas with high efficiency.</p>
      </>,
      icon: <Layout className="w-6 h-6 text-cyan-600" />
    },
    {
      title: 'VRV / VRF Systems',
      desc: <>
        <p>Very energy-efficient and flexible. Best for modern offices and hotels where different rooms need different temperature settings.</p>
      </>,
      icon: <Zap className="w-6 h-6 text-cyan-600" />
    },
    {
      title: 'Industrial & Cleanroom',
      desc: <>
        <p>Specialized systems for Pharma units in SIDCUL. Maintains sterile environments and handles heavy industrial heat loads.</p>
      </>,
      icon: <ShieldCheck className="w-6 h-6 text-cyan-600" />
    },
    {
      title: 'Split & Mini-Split ACs',
      desc: <>
        <p><strong className='text-cyan-600 font-semibold'>Residential & Small Commercial:</strong> The most common choice for homes and small shops. Features separate indoor/outdoor units for quiet cooling and zoned control without ductwork.</p>
      </>,
      icon: <Home className="w-6 h-6 text-cyan-600" />
    },
    {
      title: 'Packaged Rooftop Units (RTUs)',
      desc: <>
        <p><strong className='text-cyan-600 font-semibold'>Large Commercial:</strong> Commonly used in larger commercial buildings to provide both heating and cooling in one compact rooftop unit.</p>
      </>,
      icon: <Building2 className="w-6 h-6 text-cyan-600" />
    },
    {
      title: 'Air Coolers',
      desc: <>
        <p><strong className='text-cyan-600 font-semibold'>Budget-Friendly:</strong> Heavily used in residential and small shops during hot, dry periods as a cost-effective alternative to traditional AC systems.</p>
      </>,
      icon: <Fan className="w-6 h-6 text-cyan-600" />
    }
  ];


  const benefitsChecklist = [
    {
      title: "Industrial Growth:",
      description: "Haridwar has many factories and pharma companies that need controlled environments for production."
    },
    {
      title: "Weather Protection:",
      description: "Extreme heat (40°C+) and high monsoon humidity make high-quality cooling a necessity, not a luxury."
    },
    {
      title: "Cost Savings:",
      description: "Modern energy-efficient systems significantly reduce monthly electricity bills and operational costs."
    },
    {
      title: "Compliance:",
      description: "Industries must follow strict rules (especially pharma and food industries)."
    }
  ];

  const haridwarFaqs = [
   {
      question: "Which is the best HVAC service provider in Haridwar?",
      answer: (
        <>
          The best provider depends on your project requirements. Look for experience in industrial projects, proper certifications, and strong after-sales support. Companies like 
          <Link href="https://www.adhunikpowertech.com/hvac" className="font-normal text-cyan-700 hover:underline mx-1">
            Adhunik Powertech
          </Link> 
          are known for delivering professional HVAC solutions, energy-efficient systems, and strong maintenance support for industrial and commercial projects.
        </>
      )
    },
    {
      question: "What is the cost of HVAC installation in Haridwar?",
      answer: "It ranges from ₹25,000 for small setups to ₹1 crore+ for large industrial HVAC systems, depending on the technology used."
    },
    {
      question: "How often should HVAC systems be serviced?",
      answer: "For commercial and industrial units in Haridwar, servicing is recommended every 3–6 months to ensure efficiency and prevent breakdowns."
    },
    {
      question: "What is a cleanroom HVAC system?",
      answer: "It is a specialized system used primarily by pharmaceutical companies to maintain a contamination-free and strictly controlled air environment."
    },
    {
      question: "Are energy-efficient HVAC systems worth the extra cost?",
      answer: "Yes, they can reduce electricity consumption by up to 30%, meaning the system often pays for itself through lower utility bills within a few years."
    }
  ];

  return (
    <div className="bg-gradient-to-b mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="w-full md:w-6/12">
            <Image
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1776057546/besthvacservicesinharidwar_efifa7.webp" 
              alt="Best HVAC Services in Haridwar 2026"
              width={700}
              height={500}
              className="w-full h-auto rounded-xl shadow-xl border-2 border-cyan-100"
              priority
            />
          </div>
          <div className="w-full md:w-6/12">
            <h1 className="text-xl md:text-3xl text-center md:text-left font-bold text-cyan-800 mb-6 leading-tight uppercase">
              Best HVAC Services in Haridwar: Complete 2026 Guide
            </h1>
            <p className="w-full md:w-11/12 text-sm text-gray-700 mb-6 text-justify md:text-left leading-relaxed">
              Haridwar is changing fast. It is no longer just a religious city—it is now becoming a major industrial hub. With the growth of SIDCUL, pharma units, and hotels, the need for professional cooling has never been higher.
            </p>
            <p className="w-full md:w-11/12 text-sm text-gray-700 text-justify md:text-left font-medium">
              Whether it is extreme 40°C summers or high monsoon humidity, maintaining a safe indoor environment is critical for business productivity and equipment safety in Haridwar.
            </p>
          </div>
        </section>

        {/* Importance Section */}
        <section className="mb-16 bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100">
          <div className="md:text-2xl font-bold text-cyan-800 mb-6 pb-2 border-b-2 border-cyan-200">
            <span className="bg-cyan-600 text-white px-2 py-1 rounded-md uppercase">
              Why HVAC is Essential in Haridwar
            </span>
          </div>
          <p className='text-sm pb-4 text-justify'>
            In a rapidly expanding city like Haridwar, HVAC (Heating, Ventilation, and Air Conditioning) is the backbone of business infrastructure. It controls temperature, air quality, and airflow to meet industrial standards.
          </p>
          <ul className="space-y-4">
            {benefitsChecklist.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 bg-cyan-100 text-cyan-600 rounded-full p-2 mr-3">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <span className="text-gray-700 md:font-medium text-sm">
                  <strong className='font-bold text-cyan-600'>{item.title}</strong> {item.description}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services & Trends */}
        <section className="bg-white md:p-8 p-3 rounded-xl shadow-md mb-16">
          <div className="mt-8">
            <h3 className="md:text-2xl font-semibold text-cyan-700 mb-4 text-center md:text-left">
              Professional HVAC Solutions for Haridwar Businesses
            </h3>
            <p className="text-gray-600 mb-4 text-sm text-justify md:text-left leading-relaxed">
              From SIDCUL industrial zones to pharmaceutical plants, companies are upgrading to smart, IoT-enabled HVAC systems. A professional provider ensures your business stays compliant with GMP and ISO standards.
            </p>

            <div className="bg-white border border-cyan-200 rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-cyan-700 mb-3">
                Latest 2026 HVAC Trends
              </h4>
              <p className='pb-4 text-sm text-gray-500'>
                Staying updated with technology helps in long-term performance and sustainability.
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  "Smart IoT Remote Monitoring",
                  "Energy-Saving Technologies (up to 30%)",
                  "Eco-Friendly Refrigerants",
                  "Automated Airflow Controls",
                  "Predictive Maintenance Sensors",
                  "Advanced HEPA Filtration"
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

        {/* Systems Comparison Table/Grid */}
        <section className="bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100 mb-16">
          <div className="mb-12">
            <h3 className="md:text-2xl text-center md:text-left font-semibold text-cyan-700 mb-4">
              Types of HVAC Systems Used in Haridwar
            </h3>
            <p className="text-gray-700 mb-6 text-sm text-justify md:text-left">
              Choosing the right system depends on your industry and space. Here are the most common solutions:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hvacSystems.map((system, index) => (
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
              Final Thoughts: Making the Right Choice
            </h2>
            <p className="text-gray-700 text-sm text-justify leading-relaxed">
              Investing in the right HVAC service directly impacts your energy costs and business performance. Whether you run a pharma unit or a hotel, choosing an experienced partner in Haridwar ensures long-term reliability. For top-tier expertise, you can consult with the 
              <Link href="https://www.adhunikpowertech.com/top-hvac-companies-in-haridwar" className="text-cyan-700 font-bold hover:underline mx-1">
                Top HVAC Companies
              </Link> 
              to get a solution tailored specifically for your space.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold mb-4">Upgrade Your Cooling Today</h2>
            <p className="text-cyan-100 mb-6 text-sm md:text-lg">
              Get expert consultation for your commercial or industrial HVAC project in Haridwar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:YOUR_NUMBER_HERE"
                className="bg-white text-sm md:text-md font-bold text-cyan-800 hover:bg-cyan-100 py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <PhoneCall className="w-5 h-5 mr-2" /> Request a Quote
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

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-800 mb-8 text-center uppercase">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {haridwarFaqs.map((faq, index) => (
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
