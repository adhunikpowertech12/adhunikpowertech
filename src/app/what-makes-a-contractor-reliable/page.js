"use client";

import React from "react";
import {
  ShieldCheck,
  Zap,
  CheckCircle,
  Factory,
  TrendingUp,
  Settings,
  Layers,
  Activity,
  Clock,
  ArrowRightLeft,
  Briefcase,
  AlertTriangle,
  Building2,
  CalendarDays,
  Gem,
  Wind,
  ThermometerSnowflake,
  ShieldAlert,
  Search
} from "lucide-react";

export default function HVACReliabilityGuideBlog() {
  // Section 1 & 2: Engineering & Technology (The framework for reliability)
  const technicalFramework = [
    {
      title: "Scientific Heat Load Calculations",
      description:
        "Moving beyond 'Rule of Thumb' by analyzing SHGC, process heat, and occupancy density to ensure precision equipment sizing.",
      icon: <Layers className="w-8 h-8 text-cyan-600" />,
    },
    {
      title: "Advanced System Architectures",
      description:
        "Proficiency in VRV/VRF, Industrial Chillers, and Air Treatment systems (Washers/Scrubbers) for mission-critical IAQ.",
      icon: <ThermometerSnowflake className="w-8 h-8 text-cyan-600" />,
    },
    {
      title: "Compliance & Safety Ethics",
      description:
        "Rigorous alignment with ISHRAE/ASHRAE standards and NBC fire safety mandates using sustainable low-GWP refrigerants.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />,
    },
    {
      title: "Lifecycle & AMC Support",
      description:
        "Transitioning from installer to caretaker with preventive maintenance, sensor calibration, and localized spare parts inventory.",
      icon: <Activity className="w-8 h-8 text-cyan-600" />,
    },
  ];

  // Adhunik Advantage Core Competencies
  const coreCompetencies = [
    {
      title: "Turnkey Industrial Projects",
      description:
        "End-to-end design, procurement, and commissioning handled by a single expert team for maximum accountability.",
      icon: <Factory className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Clean Room Technology",
      description:
        "High-precision environments specifically engineered for Pharmaceutical and Electronics manufacturing requirements.",
      icon: <Gem className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Retrofitting & Energy Audits",
      description:
        "Identifying energy leaks in aging systems to reduce operational expenditure by up to 25% through scientific audits.",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Vertical Integration",
      description:
        "In-house manufacturing in Bawal for Air Washers and Scrubbers, eliminating middleman markups and ensuring quality.",
      icon: <Settings className="w-8 h-8 text-blue-600" />,
    },
  ];

  // Risk Insights (Why reliability matters)
  const reliabilityInsights = [
    {
      title: "The Sizing Trap",
      description:
        "Subpar contractors ignore Delhi's thermodynamic complexity. We use Psychrometric Analysis to manage extreme humidity and heat.",
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
    },
    {
      title: "The Compliance Gap",
      description:
        "Cheap quotes often hide the cost of non-compliance. We ensure adherence to global standards like ASHRAE and ISHRAE.",
      icon: <ShieldAlert className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Supply Chain Risk",
      description:
        "A two-week wait for a compressor is a disaster. Our localized inventory ensures high Mean Time To Repair (MTTR) performance.",
      icon: <Briefcase className="w-8 h-8 text-red-600" />,
    },
  ];

  return (
    <div className="bg-gray-50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* HERO SECTION */}
        <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
          <div className="w-full md:w-6/12">
            <h1 className="text-1xl md:text-3xl font-bold text-cyan-800 mb-4 leading-tight">
              HVAC Company in Delhi NCR: The Definitive Guide to Contractor Reliability
            </h1>
            <p className="text-sm text-gray-700 mb-6 text-justify leading-relaxed">
              In a geography where ambient temperatures oscillate between 5°C and 48°C, an HVAC system is a mission-critical asset. From Gurugram’s server rooms to Noida’s heavy machinery floors, the distinction between a "vendor" and a "reliable partner" is measured in operational uptime and energy efficiency. Discover the rigorous framework used to identify the Top HVAC Company in Delhi NCR.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <Wind className="w-6 h-6 text-cyan-700" />
                <span className="font-semibold text-cyan-800 text-sm">Thermal Precision</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-cyan-700" />
                <span className="font-semibold text-cyan-800 text-sm">Mission Critical</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-cyan-700" />
                <span className="font-semibold text-cyan-800 text-sm">Energy Efficient</span>
              </div>
            </div>

            <div className="flex justify-center md:justify-start mb-8">
              <a
                href="/support-form"
                className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-xl flex items-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Request Technical Consultation
              </a>
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <img
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1773833826/company_guide_b7dkig.webp"
              alt="An industrial-style image featuring large silver HVAC ductwork and ventilation machinery in a clean, professional facility. The lower third of the image contains a dark blue banner with bold white text that reads: TOP HVAC CONTRACTOR IN DELHI NCR | RELIABLE COMPANY GUIDE. A small company logo is visible in the top left corner."
              width="1260"
              height="750"
              loading="lazy"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* THE PROBLEM SECTION */}
        <section className="text-center my-16 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
            Reliability is Forged in Engineering Precision
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-sm">
            A common pitfall among subpar contractors is sizing equipment based solely on square footage—a reductive approach that ignores Delhi's thermal complexity. A <strong>Top HVAC Contractor in Delhi NCR</strong> utilizes scientific Heat Load Calculations, accounting for solar gain, process heat, and thermal envelope integrity to prevent facility shutdowns.
          </p>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* TECHNICAL FRAMEWORK SECTION */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
                Four Pillars of HVAC Reliability
            </h2>
            <p className="mt-4 max-w-5xl mx-auto text-gray-600 text-sm text-justify">
            Reliability is measured by the ability to offer thermal intelligence
            that balances Indoor Air Quality (IAQ) with the rising costs of global energy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalFramework.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-cyan-600 flex flex-col items-start"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 text-justify">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* ADHUNIK ADVANTAGE SECTION */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
              Why Adhunik Powertech is the Strategic Choice
            </h2>
            <p className="mt-4 max-w-4xl mx-auto text-gray-600 text-sm">
              We bridge the gap between theoretical engineering and rugged, real-world application. Our reliability is validated by demanding sectors like automotive, healthcare, and electronics.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {coreCompetencies.map((item, index) => (
              <div
                key={index}
                className="flex flex-row gap-4 p-6 border rounded-xl shadow-sm bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 pt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* RELIABILITY INSIGHTS SECTION */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
              Technical Reliability Framework
            </h2>
            <p className="mt-4 max-w-4xl mx-auto text-gray-600 text-sm">
              Choosing a 
              <a href="/india-business-award-2025" className="text-cyan-700 font-bold hover:underline px-1">
                Top HVAC Company in Delhi NCR
              </a> 
              guarantees peace of mind and protection against the hidden costs of downtime.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {reliabilityInsights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-8 border-cyan-600"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 text-justify">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-cyan-700 to-cyan-900 rounded-xl p-8 text-white shadow-2xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Secure Your Infrastructure with Adhunik Powertech
            </h2>
            <p className="text-cyan-100 mb-8 text-lg">
              Don't settle for "vendors." Partner with the premier Top HVAC Company in Delhi NCR for data-backed design and unwavering lifecycle support.
            </p>
            <div className="flex justify-center">
              <a
                href="/support-form"
                className="bg-white text-md font-bold text-cyan-800 hover:bg-cyan-100 py-4 px-10 rounded-full transition duration-300"
              >
                Schedule an Energy Audit Today
              </a>
            </div>
          </div>
        </section>
      
        {/* FAQ SECTION */}
        <section className="mt-16 bg-white p-8 rounded-xl shadow-md border-t-4 border-cyan-600 flex flex-col items-center">
          <div className="max-w-4xl w-full text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">Contractor Reliability FAQ</h2>
          </div>

          <div className="max-w-4xl w-full space-y-4">
            {[
              {
                q: "What defines a Top HVAC Company in Delhi NCR?",
                a: "A top contractor is defined by engineering precision (Heat Load Calculations), mastery of advanced architectures like VRF/Chillers, and robust lifecycle support through AMCs."
              },
              {
                q: "Why are scientific Heat Load Calculations important for Delhi's climate?",
                a: "Delhi experiences extreme thermal oscillation (5°C to 48°C). Scientific calculations account for Solar Heat Gain and humidity, preventing equipment failure and mold growth."
              },
              {
                q: "Does Adhunik Powertech handle industrial clean room environments?",
                a: "Yes, we specialize in high-precision Clean Room Technology for Pharmaceutical and Electronics manufacturing, where 1°C variance is not an option."
              },
              {
                q: "How can Adhunik Powertech reduce my facility's operational expenditure?",
                a: "Through energy audits and retrofitting, we identify energy leaks in aging systems, potentially reducing utility costs by up to 25%."
              },
              {
                q: "What is the 'Adhunik Advantage' in the NCR market?",
                a: "Our vertical integration (manufacturing plant in Bawal) and proven industrial pedigree with brands like Maruti Suzuki and Hero MotoCorp set us apart in reliability."
              }
            ].map((faq, index) => (
              <details 
                key={index} 
                className="group border border-gray-100 rounded-xl bg-gray-50 overflow-hidden transition-all duration-300"
              >
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none">
                  <span className="text-sm font-bold text-gray-800 pr-4 leading-tight">{faq.q}</span>
                  <div className="text-cyan-600 transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </summary>
                <div className="p-5 pt-0 text-sm text-gray-600 border-t border-gray-200 bg-white leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* SCHEMA FOR SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What defines a Top HVAC Company in Delhi NCR?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A top contractor is defined by engineering precision, mastery of advanced architectures, and robust lifecycle support through AMCs."
                }
              },
              {
                "@type": "Question",
                "name": "Why are scientific Heat Load Calculations important for Delhi's climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "They account for Delhi's extreme 5°C to 48°C temperature swings, ensuring systems are not undersized or inefficient."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}