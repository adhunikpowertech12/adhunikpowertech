"use client"
import React from 'react'
import { ShieldCheck, Clock, Award, Users, Wrench, Ruler, Snowflake, Wind, ChevronsRight, Zap, Leaf } from "lucide-react";

export default function HvacExpertsGurugramPage() {

  // Data based on "Mastering Gurugram's Climate Demands" and "Tangible ROI" sections
  const localExpertiseBenefits = [
    {
      title: "Summer Efficiency Mastery & Peak Performance",
      description: "Expert installation and precision tuning ensure your unit is perfectly sized and calibrated for Gurugram’s high heat load, maximizing cooling output while drastically minimizing system strain and energy consumption.",
      icon: <Snowflake className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Winter Readiness Protocols & Safety Compliance",
      description: "Technicians meticulously prepare heating components for the cooler months, focusing strictly on safety compliance and reliable thermal output for consistent warmth.",
      icon: <Zap className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Extended Asset Lifespan (Strategic ROI)",
      description: "Proactive care mitigates unnecessary mechanical wear. Professional servicing significantly extends the functional life of your high-value equipment, protecting your capital investment.",
      icon: <Clock className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Guaranteed Indoor Air Quality (IAQ)",
      description: "Technicians ensure all filters, ducts, and air pathways are rigorously cleared of particulate matter, allergens, and airborne contaminants, crucial for maintaining a healthy indoor environment year-round.",
      icon: <Wind className="w-8 h-8 text-cyan-600" />
    },
  ];

  // Data based on "The Service Blueprint: What Leading Gurugram HVAC Partners Deliver"
  const blueprintServices = [
    {
      title: "Design & Engineering",
      description: "Accurate system sizing (load calculations), bespoke designs for commercial assets (offices, IT spaces), and integration advice for modern building codes.",
      icon: <Ruler className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Installation & Commissioning",
      description: "Expert setup of all major system types (VRV/VRF), precise refrigerant charge verification, and rigorous commissioning for guaranteed performance metrics.",
      icon: <Wrench className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Preventive Maintenance (AMC)",
      description: "Comprehensive Annual Maintenance Contracts (AMC), scheduled deep cleaning, component tuning, and performance baseline checks to prevent disruptive failures.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "System Optimization & Retrofitting",
      description: "Consultation for retrofitting legacy equipment with high-efficiency units, modernizing controls, and enhancing overall building thermal performance.",
      icon: <Leaf className="w-8 h-8 text-cyan-600" />
    },
  ];

  // Data based on "The Differentiator: Choosing a Trusted Local Authority"
  const partnerValue = [
    {
      title: "Certified Professionals",
      description: "Verify that the technical team possesses current training and demonstrable experience servicing the complex, modern systems prevalent across Gurugram’s corporate parks and high-rise residences.",
      icon: <Award className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Genuine Parts Assurance",
      description: "Inferior components result in recurring failures. Insist on the exclusive use of genuine, OEM-grade spare parts for all servicing and replacements.",
      icon: <Zap className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Transparent Service Contracts",
      // The description for Transparent Service Contracts includes the JSX link now
      description: (
          <span>
             A reputable firm provides a clear <a href="/annual-maintenance-contract" className="text-cyan-700 font-semibold hover:underline">Annual Maintenance Contract (AMC)</a> that explicitly itemizes coverage (labor, parts, gas charging) to ensure predictable annual budgeting and eliminate surprise billing.
          </span>
      ),
      icon: <Users className="w-8 h-8 text-cyan-600" />
    }
  ];

  return (
    <>
      <div className="bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

           {/* Hero Section - UPDATED CONTENT HERE */}
          <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
            <div className="w-full md:w-6/12">
              <h1 className="text-2xl md:text-4xl text-center md:text-left font-bold text-cyan-800 mb-4 leading-tight">
                HVAC Experts in Gurugram: Best Air Conditioning & Heating Services
              </h1>
              <p className="text-base text-gray-700 mb-6 text-justify md:text-left">
                When Gurugram heats up, your comfort system is put to the ultimate test. From air conditioners running full tilt in blistering summers to heaters keeping you cozy in chilly winters, maintaining the right indoor climate is more than a luxury—it’s a necessity. That’s where your Heating, Ventilation, and Air Conditioning (HVAC) system engineered and maintained by <strong>Adhunik Powertech’s </strong> trusted experts—steps in as the silent partner in your comfort, productivity, and health.
              </p>

              {/* Key Value Tags */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Snowflake className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Year-Round Performance</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Zap className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Maximized Efficiency</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Wind className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Superior Indoor Air Quality (IAQ)</span>
                </div>
              </div>

              {/* CTA Button - ADDED BACK AFTER KEY VALUES */}
              <div className="flex justify-center md:justify-start mb-8">
                <a href="/support-form" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-xl">
                  <ChevronsRight className="inline-block w-5 h-5 mr-2" />
                  Get HVAC Expert Advice
                </a>
              </div>

            </div>


            {/* Image Placeholder - Changed from Image to img */}
            <div className="w-full md:w-6/12">
              <img
                src= "/hvacexperts.webp"
                alt="Commercial HVAC installation and service in Gurugram."
                width="1260"
                height="750"
                loading="lazy"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </section>

          {/* Intro Section: Why Localized Expertise is Non-Negotiable */}
          <section className="text-center my-16 py-8">
             <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">Why Localized Expertise is Non-Negotiable in Gurugram</h2>
             <p className="max-w-4xl mx-auto text-gray-600 text-base">
                The unique variables of the region—including ambient air quality, high humidity spikes, and specific power grid fluctuations—render generic HVAC solutions ineffective. You require specialists deeply versed in the local operational environment, prioritizing long-term system integrity and efficiency.
             </p>
          </section>

          {/* The Tangible ROI and Climate Mastery Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">The Tangible ROI of Professional HVAC Maintenance</h2>
              <p className="mt-4 max-w-5xl mx-auto text-gray-600 text-sm">Regular, professional HVAC maintenance is a strategic capital investment, not an operational expense. Our certified experts deliver comprehensive services that translate directly into measurable returns:</p>
            </div>
            {/* 4-column grid for benefits */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {localExpertiseBenefits.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-cyan-600 flex flex-col items-start">
                  <div className="mb-3">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 text-justify flex-grow">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The Service Blueprint Section */}
          <section className="mb-16 bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">The Service Blueprint: What Leading Gurugram HVAC Partners Deliver</h2>
              <p className="mt-4 max-w-4xl mx-auto text-gray-600 text-sm">A premier HVAC service provider in the region offers a complete lifecycle management approach, covering design, flawless installation, and sustained operational efficiency.</p>
            </div>
            {/* 2x2 grid for services */}
            <div className="grid md:grid-cols-2 gap-8">
              {blueprintServices.map((item, index) => (
                <div key={index} className="flex flex-row gap-4 p-6 border rounded-xl shadow-sm bg-gray-50 hover:bg-cyan-50 transition-colors duration-200">
                  <div className="flex-shrink-0 pt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-700 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The Differentiator: Choosing a Trusted Local Authority */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">The Differentiator: Choosing a Trusted Local Authority</h2>
              <p className="mt-4 max-w-4xl mx-auto text-gray-600 text-sm"> When selecting your HVAC partner in Gurugram, prioritize a provider dedicated to sustainable, long-term outcomes. Adhunik Powertech delivers reliability, technical proficiency, and transparency—your most valuable assurances for continuous comfort.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {partnerValue.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-8 border-cyan-600">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA Section - Changed from Link to a */}
          <section className="bg-gradient-to-r from-cyan-700 to-cyan-900 rounded-xl p-8 text-white shadow-2xl">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make Your Space More Comfortable?</h2>
              <p className="text-cyan-100 mb-8 text-lg"> From precise installations to expert maintenance, our team ensures your system runs flawlessly every day. Relax—we’ll keep your comfort under control.</p>
              <div className="flex justify-center">
                <a href="/support-form" className="bg-white text-md font-bold text-cyan-800 hover:bg-cyan-100 py-4 px-10 rounded-full transition duration-300 shadow-xl uppercase tracking-wider">
                 
                  Request a Free Consultation
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}