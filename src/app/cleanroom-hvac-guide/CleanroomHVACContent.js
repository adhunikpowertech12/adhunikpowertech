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
  Gauge,
  PhoneCall,
  Search,
  Settings2,
  Navigation,
  RefreshCcw,
  ChevronRight,
  Activity,
  ThermometerSnowflake,
  AlertTriangle
} from "lucide-react";

export default function PharmaHVACMasterBlog() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const workflowSteps = [
    {
      id: "01",
      title: "Fresh Air Intake",
      desc: "Outside air is pulled through specialized louvers. High-quality pre-filters (EU4 grade) remove large dust particles to protect internal components from the heavy dust loads found in North Indian industrial zones.",
      icon: <Wind className="w-5 h-5 text-cyan-600" />
    },
    {
      id: "02",
      title: "AHU Processing",
      desc: "The Air Handling Unit (AHU) acts as the lungs of the facility. Here, precision cooling or heating coils and desiccant wheels adjust temperature and humidity to exact pharmaceutical set points.",
      icon: <Settings2 className="w-5 h-5 text-cyan-600" />
    },
    {
      id: "03",
      title: "HEPA Filtration",
      desc: "Air passes through H13/H14 HEPA filters. This critical terminal stage removes 99.97% of microbes and microscopic particles down to 0.3 microns, ensuring absolute air purity.",
      icon: <ShieldCheck className="w-5 h-5 text-cyan-600" />
    },
    {
      id: "04",
      title: "Air Distribution",
      desc: "Sterile air travels through internally cleaned, GMP-grade sealed ducting. It enters the cleanroom through ceiling-mounted diffusers designed for uniform, non-turbulent airflow patterns.",
      icon: <Navigation className="w-5 h-5 text-cyan-600" />
    },
    {
      id: "05",
      title: "Pressure Balancing",
      desc: "Automated dampers and sensors maintain positive pressure. This ensures that air always flows OUT of the clean zone, creating an invisible barrier against hallway contaminants.",
      icon: <Gauge className="w-5 h-5 text-cyan-600" />
    },
    {
      id: "06",
      title: "Return Air Cycle",
      desc: "Used air is extracted via low-level return risers. To save energy, a percentage is re-filtered and re-circulated, while the rest is exhausted to maintain fresh oxygen levels.",
      icon: <RefreshCcw className="w-5 h-5 text-cyan-600" />
    }
  ];

  const validationChecklist = [
    { title: "ISO 14644 Compliance", description: "Ensuring particle counts per cubic meter stay within the strict limits of Class 5, 7, or 8." },
    { title: "Recovery Time Testing", description: "Verifying how quickly the HVAC system can 'clean' the room after a contamination event." },
    { title: "Laminar Flow Velocity", description: "Measuring air speed (typically 0.45 m/s) to ensure particles are washed away effectively." }
  ];

  const cleanroomFaqs = [
    {
      question: "How does the HVAC system prevent cross-contamination?",
      answer: "Through pressure cascading. We maintain higher pressure in the most sterile rooms. When a door opens, air rushes out, preventing 'dirty' air from entering the sterile zone."
    },
    {
      question: "Why is 40-60% Relative Humidity (RH) the gold standard?",
      answer: "Above 60%, bacteria and mold thrive, and powders become sticky. Below 40%, static electricity builds up, which can interfere with electronic equipment and powder filling."
    },
    {
      question: "What is the lifespan of a Pharma AHU?",
      answer: "With proper maintenance and high-quality double-skin panels, a professional AHU system can last 15-20 years in industrial hubs like Haridwar or Baddi."
    }
  ];

  return (
    <div className="bg-gradient-to-b mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* --- HERO SECTION --- */}
        <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="w-full md:w-6/12">
            <Image
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1774608929/cleanroomguide_tze0yq.webp"
              alt="Cleanroom HVAC system for pharmaceutical manufacturing lab with Cleanroom HVAC Guide: Pharma Manufacturing 2026 text over the image"
              width={700}
              height={500}
              className="w-full h-auto rounded-xl shadow-xl border-2 border-cyan-100"
              priority
            />
          </div>
          <div className="w-full md:w-6/12">
            <h1 className="text-xl md:text-3xl text-center md:text-left font-bold text-cyan-800 mb-6 leading-tight uppercase">
            Cleanroom HVAC Guide: Pharma Manufacturing (2026)
            </h1>
            <p className="w-full md:w-11/12 text-sm text-gray-700 mb-6 text-justify md:text-left leading-relaxed">
              In the pharmaceutical sector, the environment is just as critical as the ingredients. A specialized <strong>Cleanroom HVAC system</strong> isn't just an air conditioner—it's a high-precision engineering solution that regulates air purity, pressure, and climate to ensure every batch of medicine is safe and compliant.
            </p>
            <p className="w-full md:w-11/12 text-sm text-gray-700 text-justify md:text-left font-medium italic border-l-4 border-cyan-600 pl-4">
              Expert solutions for industrial hubs: Baddi, Haridwar, Roorkee, Kashipur, and Delhi-NCR.
            </p>
          </div>
        </section>

        {/* --- CORE PHILOSOPHY SECTION --- */}
        <section className="mb-16 bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100">
          <div className="md:text-2xl font-bold text-cyan-800 mb-6 pb-2 border-b-2 border-cyan-200 uppercase">
            The Role of HVAC in GMP Compliance
          </div>
          <p className='text-sm pb-6 text-justify text-gray-600'>
            To meet WHO-GMP and ISO standards, an HVAC system must do more than cool the air. It must act as a 'scrubber' that removes airborne contaminants while maintaining a precise psychrometric balance.
          </p>
          <ul className="space-y-4">
            {validationChecklist.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 bg-cyan-100 text-cyan-800 rounded-full p-2 mr-3">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <span className="text-gray-700 md:font-medium text-sm">
                  <strong className='font-bold text-cyan-600'>{item.title}:</strong> {item.description}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* --- THE 6-STEP INTERACTIVE WORKFLOW --- */}
        <section className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-slate-100 mb-16">
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-cyan-800 mb-4 tracking-tight uppercase">
              The 6-Step HVAC Workflow
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl">
              Achieving absolute sterility requires a logical, multi-stage process. Here is how our advanced systems process air to ensure 100% contamination control.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 mt-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="group relative bg-white p-6 rounded-xl border border-cyan-50 hover:border-cyan-400 hover:shadow-md transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl font-black text-cyan-100/50 group-hover:text-cyan-100 transition-colors leading-none">
                    {step.id}
                  </span>
                  <div className="p-2.5 bg-cyan-50 rounded-lg group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                    {React.cloneElement(step.icon, { 
                      className: `w-6 h-6 ${step.icon.props.className} group-hover:text-white` 
                    })}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-cyan-700">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed text-justify">
                  {step.desc}
                </p>
                {index !== 2 && index !== 5 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-cyan-200">
                    <ChevronRight size={24} strokeWidth={3} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CHALLENGES BOX - AS PER SCREENSHOT */}
          <div className="bg-white border border-cyan-100 rounded-xl overflow-hidden shadow-sm mt-8">
            <div className="p-6 md:p-8">
              <h4 className="text-xl font-bold text-cyan-800 mb-4 flex items-center gap-2">
                 <AlertTriangle className="text-orange-500" size={24} />
                 Challenges in North India (UP & UK)
              </h4>
              <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                Industrial areas like <strong>Yamunanagar, Saharanpur, and Baddi</strong> face extreme dust levels and intense monsoon humidity. We engineer our systems specifically for these environmental loads:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                {[
                  "Advanced 3-Stage Pre-Filtration",
                  "High-Efficiency Dehumidification",
                  "Energy Efficient VFD-driven AHUs",
                  "Real-time Particle Monitoring Sensors",
                  "Insulated Double-Skin Ducting",
                  "Automated Pressure Controllers"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- TECHNICAL BREAKDOWN SECTION --- */}
        <section className="bg-white md:p-8 p-3 rounded-xl shadow-md border border-cyan-100 mb-16">
            <h3 className="md:text-2xl text-center md:text-left font-semibold text-cyan-700 mb-8 uppercase tracking-tight">
              Laminar Flow vs. Turbulent Flow
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p><strong>Laminar (Unidirectional) Flow:</strong> Used in Grade A sterile zones. Air moves in a straight parallel path from top to bottom, 'washing' particles away instantly. </p>
                <p><strong>Turbulent (Non-Unidirectional) Flow:</strong> Common in Grade C/D areas. Fresh air mixes with room air to dilute and remove contaminants through return air vents.</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100 text-center italic text-cyan-700 text-sm">
                Choosing the right airflow pattern is critical for energy efficiency and compliance.
              </div>
            </div>
        </section>

        {/* --- CONCLUSION SECTION --- */}
        <div className="px-6 lg:px-24 py-12 bg-white rounded-3xl shadow-2xl space-y-16 mb-16 border border-slate-100">
          <div className="space-y-6 pt-10 border-t border-cyan-200 text-center">
            <h2 className="md:text-2xl font-bold text-cyan-700 uppercase">
              Conclusion: Designing for the Future
            </h2>
            <p className="text-gray-700 text-sm text-justify leading-relaxed max-w-4xl mx-auto">
              A cleanroom HVAC system is the single most important investment for a pharmaceutical plant. It ensures product safety, regulatory success, and operational efficiency. Working with the 
              <Link href="https://www.adhunikpowertech.com/hvac" className="text-cyan-700 font-bold hover:underline mx-1">
                Top HVAC Company in India
              </Link> 
              ensures that your facility is equipped with modern, GMP-compliant technology that stands the test of time.
            </p>
          </div>
        </div>

        {/* --- CTA SECTION --- */}
        <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold mb-4 uppercase">Ready to Build Your Cleanroom?</h2>
            <p className="text-cyan-100 mb-6 text-sm md:text-lg">
              Get end-to-end Turnkey Pharma HVAC design and installation across North India.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:8287885885" className="bg-white text-sm md:text-md font-bold text-cyan-800 hover:bg-cyan-100 py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center shadow-lg">
                <PhoneCall className="w-5 h-5 mr-2" /> Request Quote
              </a>
              <Link href="/support-form" className="bg-cyan-900 text-sm md:text-md hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center border border-cyan-700">
                <Search className="w-5 h-5 mr-2" /> Enquiry Now
              </Link>
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-800 mb-8 text-center uppercase">
            Pharma HVAC FAQ
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