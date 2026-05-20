"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Factory,
  Settings,
  Zap,
  Layout,
  Microscope,
  ThermometerSnowflake,
  Fan,
  Wrench,
  AlertTriangle,
  PhoneCall,
  Mail,
  ChevronDown,
  ChevronUp,
  Building2,
  Stethoscope,
  ChevronRight
} from "lucide-react";

export default function HVACCompaniesHaridwar() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const topCompanies = [
    { name: "Adhunik Powertech", expertise: "Cleanroom, Pharma HVAC", bestFor: "Industrial & Pharma", projectType: "Turnkey Projects" },
    { name: "HVAC Solutions", expertise: "AHU, Central AC", bestFor: "Industrial", projectType: "Mid-scale Projects" },
    { name: "Reliant Air Cool", expertise: "Industrial Cooling", bestFor: "Large Installations", projectType: "Industrial" },
    { name: "Fresh AIR Cooling", expertise: "AC Services", bestFor: "Residential & Commercial", projectType: "Small Projects" },
    { name: "Airmistic Engineers", expertise: "Engineering HVAC", bestFor: "System Design", projectType: "Custom Projects" },
  ];

  const adhunikServices = [
    { title: "Design", icon: Layout },
    { title: "Engineering", icon: Settings },
    { title: "Supply", icon: Factory },
    { title: "Installation", icon: Wrench },
    { title: "Testing & Commissioning", icon: ShieldCheck },
  ];

  const pharmaExpertise = [
    "Cleanroom HVAC systems",
    "Pharmaceutical plant HVAC",
    "Controlled environment solutions",
    "HEPA filtration & air handling systems",
    "Temperature & humidity control systems"
  ];

  const otherCompanies = [
    { id: 2, name: "HVAC Solutions (Bahadrabad)", details: "Specializing in Industrial AHU, Cleanroom panels, and Central AC. Best for mid-scale projects." },
    { id: 3, name: "Reliant Air Cool", details: "Known for HVAC contracting and large-scale cooling installations in industrial zones." },
    { id: 4, name: "Fresh AIR Cooling", details: "Preferred choice for residential repair and affordable commercial installations." },
    { id: 5, name: "Expert Electrical Fire and IT Solution", details: "Provides HVAC repair and electrical/fire system integration." },
    { id: 6, name: "Cool Aix", details: "Offers HVAC services across Haridwar and Rishikesh." },
    { id: 7, name: "Airmistic Engineers Pvt Ltd", details: "Specializes in engineering-based HVAC and industrial system integration." },
    { id: 8, name: "Anshu Enterprises", details: "Known for quick response times and budget-friendly services." },
    { id: 9, name: "Mds Automech Solutions", details: "Provides mechanical HVAC and industrial cooling solutions." },
    { id: 10, name: "Hot and Cold Service", details: "Offers maintenance and multi-utility repair services." },
  ];

  const faqItems = [
    {
      question: "Which is the top HVAC company in Haridwar?",
     answer: (
      <>
        <Link 
          href="https://www.adhunikpowertech.com/hvac" 
          className="text-cyan-600 hover:text-cyan-800 font-normal underline"
        >
          Adhunik Powertech
        </Link> is considered one of the top HVAC companies due to its expertise in cleanroom and pharmaceutical HVAC projects.
      </>
      )
    },
    {
      question: "Does Adhunik Powertech provide branded AC systems?",
      answer: "Yes, they provide high-quality air conditioners as a dealer of Blue Star, ensuring reliable and efficient cooling solutions."
    },
    {
      question: "What services do HVAC companies in Haridwar offer?",
      answer: "They offer HVAC installation, air conditioning, ventilation systems, and cleanroom HVAC solutions."
    },
    {
      question: "What is a turnkey HVAC solution?",
      answer: "It includes complete project execution from design to installation and commissioning."
    }
  ];

  return (
    <div className="bg-gray-50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-10 items-center mb-16">
          <div className="w-full md:w-6/12">
            <Image
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1775890444/haridwarhvac_u6fnes.webp"
              alt="Commercial air conditioning units and industrial HVAC systems with written text 'Top 10 HVAC Companies in Haridwar"
              width={700}
              height={500}
              className="w-full h-auto rounded-2xl shadow-2xl border-b-4 border-cyan-600"
              priority
            />
          </div>
          <div className="w-full md:w-6/12 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-900 mb-6 leading-tight">
              Top HVAC Companies in Haridwar <span className="text-cyan-600 text-2xl block mt-2">(2026 Updated List)</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With the rapid growth of industrial zones, pharmaceutical manufacturing units, hotels, and hospitals, the demand for professional HVAC companies in Haridwar is rising significantly.
            </p>
            <div className="inline-block bg-cyan-100 text-cyan-800 px-4 py-2 rounded-lg font-semibold border border-cyan-200">
              👉 Which is the top HVAC company in Haridwar you can trust?
            </div>
          </div>
        </section>

        {/* Introduction Summary */}
        <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-16">
            <p className="text-gray-700 text-justify">
                From cleanroom HVAC systems to industrial air conditioning and ventilation, businesses today require energy-efficient, compliant, and reliable HVAC solutions. To help you make the right choice, here is a 2026 updated list of the best HVAC companies in Haridwar, based on expertise, services, and project experience.
            </p>
        </section>

        {/* #1 Company Profile: Adhunik Powertech */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 rounded-3xl p-1 md:p-2 shadow-xl">
            <div className="bg-white rounded-[1.4rem] p-6 md:p-10">
              <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-cyan-900 mb-2"> 1. Adhunik Powertech</h2>
                  <p className="text-xl font-medium text-cyan-600">Top HVAC Company in Haridwar</p>
                </div>
               <div className="bg-cyan-50 border border-cyan-100 px-4 py-2 rounded-full text-sm font-bold text-cyan-700">
                  Best For:{" "}
                  <a 
                    href="https://www.adhunikpowertech.com/turnkey-cleanroom-solutions" 
                    className="hover:underline text-cyan-800 transition-colors"
                  >
                    Pharma, Cleanrooms & Industrial Turnkey
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Zap className="mr-2 text-cyan-500" /> What Makes Adhunik Powertech #1?
                  </h3>
                  <p className="text-gray-600 mb-6">Unlike regular AC contractors, Adhunik Powertech provides complete HVAC turnkey solutions:</p>
                  <div className="grid grid-cols-1 gap-3">
                    {adhunikServices.map((service, idx) => (
                      <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <service.icon className="w-5 h-5 text-cyan-600 mr-3" />
                        <span className="font-semibold text-gray-700">{service.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100">
                  <h3 className="text-xl font-bold text-cyan-900 mb-4 flex items-center">
                    <Microscope className="mr-2" /> Pharma & Cleanroom Specialist
                  </h3>
                  <ul className="space-y-3">
                    {pharmaExpertise.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm italic text-cyan-700 font-medium">
                    Critical for industries requiring GMP compliance and contamination control.
                  </p>
                </div>
              </div>

              {/* Blue Star Section */}
              <div className="mt-12 bg-gray-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <ThermometerSnowflake className="mr-3 text-cyan-400" /> Authorized Blue Star Dealer
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Adhunik Powertech also provides high-quality air conditioning systems as a dealer of Blue Star, ensuring trusted products, energy-efficient cooling, and manufacturer-backed installation.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl min-w-[180px] flex items-center justify-center">
                <Image 
                  src="/blue-star-logo.webp" // Replace with your actual Blue Star logo path
                  alt="Authorized Blue Star Dealer"
                  width={150}
                  height={50}
                  className="h-auto w-full object-contain"
                />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Companies List */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-cyan-600 pl-4">Other Notable HVAC Providers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCompanies.map((company) => (
              <div key={company.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-cyan-600 font-bold mb-2">#{company.id}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{company.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{company.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16 overflow-hidden rounded-xl border border-gray-200 shadow-lg">
          <div className="bg-cyan-700 p-4">
            <h2 className="text-white font-bold text-xl flex items-center">
              <Layout className="mr-2" /> Comparison of Top HVAC Companies
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-700 uppercase text-xs">
                  <th className="p-4">Company Name</th>
                  <th className="p-4">Expertise</th>
                  <th className="p-4">Best For</th>
                  <th className="p-4">Project Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topCompanies.map((company, idx) => (
                  <tr key={idx} className={idx === 0 ? "bg-cyan-50 font-medium" : ""}>
                    <td className="p-4 text-cyan-900 font-bold">{company.name}</td>
                    <td className="p-4 text-gray-700">{company.expertise}</td>
                    <td className="p-4 text-gray-700">{company.bestFor}</td>
                    <td className="p-4 text-gray-700">{company.projectType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Selection Guide & Mistakes */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-cyan-100">
            <h3 className="text-xl font-bold text-cyan-900 mb-6 flex items-center">
                <ShieldCheck className="mr-2 text-green-500" /> How to Choose the Best
            </h3>
            <ul className="space-y-4">
              {["Industry experience (especially pharma & cleanroom)", "End-to-end service capability", "Technical expertise", "Past projects and client portfolio", "After-sales support and AMC"].map((text, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-3" /> {text}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-red-100">
            <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center">
                <AlertTriangle className="mr-2 text-red-500" /> Common Mistakes to Avoid
            </h3>
            <ul className="space-y-4">
              {["Choosing based on lowest price", "Hiring non-specialized contractors for cleanrooms", "Ignoring maintenance services", "Not verifying project experience"].map((text, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <span className="text-red-500 mr-3 font-bold text-lg">×</span> {text}
                </li>
              ))}
            </ul>
          </section>
        </div>

    

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-cyan-900 rounded-[2rem] p-10 md:p-16 text-center shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-cyan-800 rounded-full blur-3xl opacity-50"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Looking for the best HVAC solution in Haridwar?</h2>
            <p className="text-cyan-100 text-lg mb-10 leading-relaxed">
              Contact Adhunik Powertech today for expert consultation on cleanroom, pharma & industrial HVAC turnkey projects. Partner with a trusted expert for guaranteed quality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+918287885885" className="bg-white text-cyan-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-50 transition-all flex items-center justify-center">
                <PhoneCall className="mr-2 w-5 h-5" /> Contact Expert
              </a>
              <Link href="/support-form" className="bg-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-500 transition-all flex items-center justify-center border border-cyan-500">
                <Mail className="mr-2 w-5 h-5" /> Enquiry Now
              </Link>
            </div>
          </div>
        </section>

      </div>
          {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-cyan-900 mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? <ChevronUp className="text-cyan-600" /> : <ChevronDown className="text-cyan-600" />}
                </button>
                {openIndex === index && (
                  <div className="p-5 bg-gray-50 text-gray-600 border-t border-gray-100 animate-in fade-in duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
    </div>
  );
}