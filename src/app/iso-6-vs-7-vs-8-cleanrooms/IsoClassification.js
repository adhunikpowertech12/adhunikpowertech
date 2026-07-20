"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ShieldCheck, Clock, Award, HelpCircle } from "lucide-react";

export default function IsoClassification() {
  return (
    <div className="bg-slate-50 mt-24 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
          <div className="w-full md:w-6/12">
            <h1 className="text-xl md:text-2xl font-bold text-cyan-900 mb-4 leading-tight text-center md:text-left">
              ISO Class 6 vs 7 vs 8 Cleanroom Guide: HVAC Design & ACH
            </h1>
            <p className="text-sm text-gray-700 text-justify md:text-left leading-relaxed mb-6">
              Selecting the wrong cleanroom classification can significantly impact product quality, regulatory compliance, and operating costs. An environment that is too clean may increase capital investment and energy consumption unnecessarily, while an under-designed cleanroom can lead to contamination, batch failures, product recalls, and failed audits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 p-3 bg-cyan-50/50 rounded-lg border border-cyan-100">
                <Clock className="w-4 h-4 text-cyan-700 flex-shrink-0" />
                <span className="font-semibold text-cyan-900 text-xs">Optimized ACH Engineering</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-cyan-50/50 rounded-lg border border-cyan-100">
                <Award className="w-4 h-4 text-cyan-700 flex-shrink-0" />
                <span className="font-semibold text-cyan-900 text-xs">ISO 14644-1 Compliance</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-cyan-50/50 rounded-lg border border-cyan-100">
                <ShieldCheck className="w-4 h-4 text-cyan-700 flex-shrink-0" />
                <span className="font-semibold text-cyan-900 text-xs">Turnkey Validation Support</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link href="/support-form" className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-sm py-3 px-8 rounded-lg transition duration-300 shadow-sm">
                Schedule a Consultation
              </Link>
            </div>
          </div>
          <div className="w-full md:w-6/12">
            <Image
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1784531334/Iso_Classifications_osayue.webp" 
              alt="ISO Class 6 vs ISO Class 7 vs ISO Class 8 cleanroom comparison showing HVAC design, airflow, and Air Changes per Hour (ACH) requirements under ISO 14644-1."
              width={1260}
              height={750}
              loading="lazy"
              className="w-full h-auto rounded-2xl shadow-md border border-gray-100"
            />
          </div>
        </section>

        {/* Section Header */}
        <section className="mb-12 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-900 mb-2">
            Cleanroom Classification & Architecture Systems
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Explore the critical differentiators and structural requirements across major ISO classification levels to establish stable, compliant process spaces.
          </p>
        </section>

        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto space-y-12 text-gray-700">

          {/* Intro Card Section */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-4 text-sm">
            <p className="text-justify leading-relaxed">
              Choosing the right ISO cleanroom classification starts with proper HVAC planning. Since HVAC systems control airborne particles, airflow, pressure, and environmental conditions, understanding the differences between ISO Class 6, ISO Class 7, and ISO Class 8 is essential.
            </p>
            <p className="text-justify leading-relaxed">
              Defined under ISO 14644-1, these classifications help balance contamination control, compliance, energy efficiency, and operating costs. This guide compares their HVAC requirements, filtration, airflow, validation, and applications to help you select the right cleanroom for your facility.
            </p>
          </div>

          {/* ISO 14644-1 Standard Section */}
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 text-sm space-y-4">
            <h2 className="text-xl font-bold text-cyan-800">What is ISO 14644-1?</h2>
            
            <p className="text-justify leading-relaxed">
              ISO 14644-1 is the internationally recognized standard for classifying cleanrooms based on airborne particle concentration. Rather than evaluating microbiological contamination, it measures the maximum allowable number of airborne particles ranging from 0.1 μm to 5.0 μm.
            </p>
            
            <blockquote className="border-l-4 border-cyan-600 bg-cyan-50/50 p-4 rounded-r-lg italic text-cyan-900 text-sm my-4">
              The cleaner the environment, the fewer airborne particles are permitted.
            </blockquote>
            
            <p className="text-justify leading-relaxed">
              ISO classifications are determined through certified particle counting performed under standardized testing conditions. These classifications influence every aspect of cleanroom engineering, including HVAC capacity, HEPA filtration, airflow design, room pressurization, and validation protocols.
            </p>
          </section>

          {/* ISO 6 Details */}
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-6 text-sm">
            <div>
              <h2 className="text-xl font-bold text-cyan-800 mb-2">What is an ISO Class 6 ?</h2>
              <p className="text-justify leading-relaxed">
                An ISO Class 6 cleanroom provides a highly controlled environment where airborne particles are tightly regulated to support precision manufacturing and contamination-sensitive processes. Compared to ISO Class 7, achieving ISO Class 6 requires significantly greater HVAC performance, higher air change rates, and more rigorous environmental monitoring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
  {/* Typical Applications Box */}
  <div className="bg-cyan-50/40 border border-cyan-100 rounded-xl p-5 shadow-sm">
   <h3 className="text-sm font-bold text-cyan-900 text-left mb-3">Typical Applications</h3>
    <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700">
      <li>Sterile pharmaceutical manufacturing</li>
      <li>Semiconductor fabrication</li>
      <li>Biotechnology research</li>
      <li>Nanotechnology</li>
      <li>Precision optics</li>
      <li>Aerospace components</li>
    </ul>
  </div>

  {/* HVAC Design Requirements Box */}
  <div className="bg-cyan-50/40 border border-cyan-100 rounded-xl p-5 shadow-sm">
    <h3 className="text-sm font-bold text-cyan-900 text-center mb-2">HVAC Design Requirements</h3>
    <p className="text-justify leading-relaxed text-xs text-gray-600 mb-3">
      Maintaining ISO Class 6 conditions demands an advanced HVAC system capable of delivering consistent airflow and particle removal. Typical requirements include:
    </p>
    <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700">
      <li>H13 or H14 HEPA filtration</li>
      <li>High-capacity air handling units</li>
      <li>Laminar airflow in critical production zones</li>
      <li>Tight room pressurization</li>
      <li>Continuous environmental monitoring</li>
    </ul>
  </div>
</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 text-xs">
  {/* Card 1: ACH */}
  <div className="bg-cyan-100/70 border border-cyan-200 rounded-xl p-5 shadow-sm text-center flex flex-col justify-center">
    <span className="font-bold text-cyan-900 block mb-2 text-sm">
      Air Changes per Hour (ACH)
    </span>
    <p className="text-cyan-950 leading-relaxed">
      90–180 ACH is commonly required, depending on room occupancy, process equipment, and contamination risk.
    </p>
  </div>

  {/* Card 2: Pressure Requirements */}
  <div className="bg-cyan-100/70 border border-cyan-200 rounded-xl p-5 shadow-sm text-center flex flex-col justify-center">
    <span className="font-bold text-cyan-900 block mb-2 text-sm">
      Pressure Requirements
    </span>
    <p className="text-cyan-950 leading-relaxed">
      ISO Class 6 cleanrooms generally maintain positive pressure relative to adjacent spaces to prevent contaminant ingress.
    </p>
  </div>

  {/* Card 3: Temperature & Humidity */}
  <div className="bg-cyan-100/70 border border-cyan-200 rounded-xl p-5 shadow-sm text-center flex flex-col justify-center">
    <span className="font-bold text-cyan-900 block mb-2 text-sm">
      Temperature & Humidity
    </span>
    <p className="text-cyan-950 leading-relaxed">
      Typical operating conditions include Temperature: 20–22°C and Relative Humidity: 40–60%. Exact requirements vary according to the manufacturing process.
    </p>
  </div>
</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cyan-50/50 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                <h4 className="font-bold text-cyan-900 mb-2 text-xs uppercase tracking-wider">Advantages</h4>
                <ul className="list-disc pl-4 space-y-1 text-xs text-gray-700">
                  <li>Exceptional contamination control</li>
                  <li>Suitable for highly regulated production</li>
                  <li>Supports critical sterile processes</li>
                </ul>
              </div>
              <div className="bg-red-50/50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-red-900 mb-2 text-xs uppercase tracking-wider">Challenges</h4>
                <ul className="list-disc pl-4 space-y-1 text-xs text-gray-700">
                  <li>High capital investment</li>
                  <li>Significant energy consumption</li>
                  <li>Intensive maintenance</li>
                  <li>Frequent validation and certification</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">Day-to-Day Operations</h3>
              <p className="text-justify leading-relaxed">
                Operating an ISO Class 6 cleanroom involves strict gowning protocols, continuous HVAC monitoring, scheduled HEPA integrity testing, routine particle counting, and disciplined maintenance to ensure compliance. Even small deviations in airflow or pressure can affect product quality and trigger corrective actions.
              </p>
            </div>
          </section>

  {/* ISO 7 Details */}
<section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-6 text-sm">
  <div>
    <h2 className="text-xl font-bold text-cyan-800 mb-2">What is an ISO Class 7 ?</h2>
    <p className="text-justify leading-relaxed">
      ISO Class 7 is the most commonly specified cleanroom classification across pharmaceutical, biotechnology, and medical device industries because it balances contamination control with operating efficiency.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
    {/* Typical Applications Box */}
    <div className="bg-cyan-50/40 border border-cyan-100 rounded-xl p-5 shadow-sm">
      <h3 className="text-sm font-bold text-cyan-900 text-left mb-3">Typical Applications</h3>
      <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700">
        <li>Pharmaceutical manufacturing</li>
        <li>Medical device production</li>
        <li>Hospital compounding areas</li>
        <li>Biotechnology laboratories</li>
        <li>Electronics manufacturing</li>
      </ul>
    </div>

    {/* HVAC Requirements Box */}
    <div className="bg-cyan-50/40 border border-cyan-100 rounded-xl p-5 shadow-sm">
      <h3 className="text-sm font-bold text-cyan-900 text-center mb-2">HVAC Requirements</h3>
      <p className="text-justify leading-relaxed text-xs text-gray-600 mb-3">
        Maintaining ISO Class 7 conditions requires a reliable HVAC system configured to ensure proper air cleanliness and balance:
      </p>
      <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700">
        <li>H13 HEPA filters</li>
        <li>Turbulent or mixed airflow</li>
        <li>Pressure cascade between adjacent rooms</li>
        <li>Dedicated AHUs with environmental controls</li>
      </ul>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-xs">
    {/* Card 1: Typical ACH */}
    <div className="bg-cyan-100/70 border border-cyan-200 rounded-xl p-5 shadow-sm text-center flex flex-col justify-center">
      <span className="font-bold text-cyan-900 block mb-2 text-sm">
        Typical ACH
      </span>
      <p className="text-cyan-950 leading-relaxed">
        30–60 Air Changes per Hour
      </p>
    </div>

    {/* Card 2: Environmental Control */}
    <div className="bg-cyan-100/70 border border-cyan-200 rounded-xl p-5 shadow-sm text-center flex flex-col justify-center">
      <span className="font-bold text-cyan-900 block mb-2 text-sm">
        Environmental Control
      </span>
      <p className="text-cyan-950 leading-relaxed">
        Consistent temperature, humidity, pressure differentials, and air balancing are essential for maintaining stable operating conditions.
      </p>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-cyan-50/50 border-l-4 border-cyan-600 p-4 rounded-r-lg">
      <h4 className="font-bold text-cyan-900 mb-2 text-xs uppercase tracking-wider">Advantages</h4>
      <ul className="list-disc pl-4 space-y-1 text-xs text-gray-700">
        <li>Lower operating costs than ISO Class 6</li>
        <li>Meets many GMP manufacturing requirements</li>
        <li>Flexible for multiple industries</li>
      </ul>
    </div>
    <div className="bg-red-50/50 border-l-4 border-red-500 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-900 mb-2 text-xs uppercase tracking-wider">Challenges</h4>
      <ul className="list-disc pl-4 space-y-1 text-xs text-gray-700">
        <li>Requires ongoing validation</li>
        <li>HVAC balancing is critical</li>
        <li>Filter maintenance remains essential</li>
      </ul>
    </div>
  </div>

  <p className="text-justify leading-relaxed">
    A pharmaceutical tablet manufacturing facility may use ISO Class 7 cleanrooms for dispensing, granulation, blending, and compression areas, where contamination control is essential but ultra-high cleanliness is unnecessary. When planning complete facilities, integrating HVAC, architectural panels, utilities, and validation into <Link href="https://www.adhunikpowertech.com/turnkey-cleanroom-solutions" className="text-cyan-700 hover:underline font-semibold">Turnkey Cleanroom Solutions</Link> can simplify project execution and improve long-term performance.
  </p>
</section>

          {/* ISO 8 Details */}
<section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-6 text-sm">
  <div>
    <h2 className="text-xl font-bold text-cyan-800 mb-2">What is an ISO Class 8 ?</h2>
    <p className="text-justify leading-relaxed">
      ISO Class 8 cleanrooms provide controlled environments where moderate particle control is sufficient. Because cleanliness requirements are less demanding, HVAC systems are simpler and significantly more energy efficient.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
    {/* Typical Industries Box */}
    <div className="bg-cyan-50/40 border border-cyan-100 rounded-xl p-5 shadow-sm">
      <h3 className="text-sm font-bold text-cyan-900 text-left mb-3">Typical Industries</h3>
      <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700">
        <li>Food processing</li>
        <li>Packaging facilities</li>
        <li>Electronics assembly</li>
        <li>Medical packaging</li>
        <li>Warehousing</li>
        <li>Hospital support areas</li>
      </ul>
    </div>

    {/* HVAC Requirements Box */}
    <div className="bg-cyan-50/40 border border-cyan-100 rounded-xl p-5 shadow-sm">
      <h3 className="text-sm font-bold text-cyan-900 text-center mb-2">HVAC Requirements</h3>
      <p className="text-justify leading-relaxed text-xs text-gray-600 mb-3">
        Operating an ISO Class 8 environment utilizes simplified airflow and filtration specifications:
      </p>
      <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700">
        <li>H13 HEPA filtration where required</li>
        <li>Turbulent airflow</li>
        <li>Lower ACH</li>
        <li>Simpler ductwork and air balancing</li>
      </ul>
    </div>
  </div>

  <div className="my-6 text-xs">
    {/* Card 1: Typical ACH */}
    <div className="bg-cyan-100/70 border border-cyan-200 rounded-xl p-5 shadow-sm text-center flex flex-col justify-center">
      <span className="font-bold text-cyan-900 block mb-2 text-sm">
        Typical ACH
      </span>
      <p className="text-cyan-950 leading-relaxed">
        10–25 Air Changes per Hour
      </p>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-cyan-50/50 border-l-4 border-cyan-600 p-4 rounded-r-lg">
      <h4 className="font-bold text-cyan-900 mb-2 text-xs uppercase tracking-wider">Advantages</h4>
      <ul className="list-disc pl-4 space-y-1 text-xs text-gray-700">
        <li>Lower installation costs</li>
        <li>Reduced energy consumption</li>
        <li>Easier maintenance</li>
        <li>Flexible operation</li>
      </ul>
    </div>
    <div className="bg-red-50/50 border-l-4 border-red-500 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-900 mb-2 text-xs uppercase tracking-wider">Challenges</h4>
      <ul className="list-disc pl-4 space-y-1 text-xs text-gray-700">
        <li>Not suitable for sterile manufacturing</li>
        <li>Limited contamination protection for highly sensitive processes</li>
      </ul>
    </div>
  </div>
</section>

         {/* Key Differences Table Section */}
<section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-4">
  <h2 className="text-xl font-bold text-cyan-800 text-center">
    Key Differences Between ISO Class 6, ISO Class 7 & ISO Class 8
  </h2>
  
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-cyan-200 text-xs border border-cyan-100 rounded-lg overflow-hidden">
      <thead className="bg-cyan-800 text-white">
        <tr>
          <th className="px-4 py-3 text-left font-bold border-b border-cyan-700">Parameter</th>
          <th className="px-4 py-3 text-center font-bold border-b border-cyan-700">ISO 6</th>
          <th className="px-4 py-3 text-center font-bold border-b border-cyan-700">ISO 7</th>
          <th className="px-4 py-3 text-center font-bold border-b border-cyan-700">ISO 8</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-cyan-100/60 text-gray-700">
        <tr className="bg-white hover:bg-cyan-50/30">
          <td className="px-4 py-3 font-semibold bg-cyan-50/50 text-cyan-900 border-r border-cyan-100">Particle Control</td>
          <td className="px-4 py-3 text-center">Excellent</td>
          <td className="px-4 py-3 text-center">High</td>
          <td className="px-4 py-3 text-center">Moderate</td>
        </tr>
        <tr className="bg-cyan-50/20 hover:bg-cyan-50/50">
          <td className="px-4 py-3 font-semibold bg-cyan-50/80 text-cyan-900 border-r border-cyan-100">HVAC Complexity</td>
          <td className="px-4 py-3 text-center">Very High</td>
          <td className="px-4 py-3 text-center">High</td>
          <td className="px-4 py-3 text-center">Medium</td>
        </tr>
         <tr className="bg-cyan-50/20 hover:bg-cyan-50/50">
          <td className="px-4 py-3 font-semibold bg-cyan-50/80 text-cyan-900 border-r border-cyan-100">Typical Particle Limit (≥0.5 μm)</td>
          <td className="px-4 py-3 text-center">35,200 particles/m³</td>
          <td className="px-4 py-3 text-center">352,000 particles/m³</td>
          <td className="px-4 py-3 text-center">3,520,000 particles/m³</td>
        </tr>
        <tr className="bg-white hover:bg-cyan-50/30">
          <td className="px-4 py-3 font-semibold bg-cyan-50/50 text-cyan-900 border-r border-cyan-100">Air Changes</td>
          <td className="px-4 py-3 text-center">90–180</td>
          <td className="px-4 py-3 text-center">30–60</td>
          <td className="px-4 py-3 text-center">10–25</td>
        </tr>
        <tr className="bg-cyan-50/20 hover:bg-cyan-50/50">
          <td className="px-4 py-3 font-semibold bg-cyan-50/80 text-cyan-900 border-r border-cyan-100">Airflow</td>
          <td className="px-4 py-3 text-center">Laminar/Mixed</td>
          <td className="px-4 py-3 text-center">Turbulent</td>
          <td className="px-4 py-3 text-center">Turbulent</td>
        </tr>
        <tr className="bg-white hover:bg-cyan-50/30">
          <td className="px-4 py-3 font-semibold bg-cyan-50/50 text-cyan-900 border-r border-cyan-100">HEPA Requirement</td>
          <td className="px-4 py-3 text-center">H14/H13</td>
          <td className="px-4 py-3 text-center">H13</td>
          <td className="px-4 py-3 text-center">H13</td>
        </tr>
        <tr className="bg-cyan-50/20 hover:bg-cyan-50/50">
          <td className="px-4 py-3 font-semibold bg-cyan-50/80 text-cyan-900 border-r border-cyan-100">Energy Usage</td>
          <td className="px-4 py-3 text-center">Very High</td>
          <td className="px-4 py-3 text-center">Moderate</td>
          <td className="px-4 py-3 text-center">Lower</td>
        </tr>
        <tr className="bg-white hover:bg-cyan-50/30">
          <td className="px-4 py-3 font-semibold bg-cyan-50/50 text-cyan-900 border-r border-cyan-100">Installation Cost</td>
          <td className="px-4 py-3 text-center">Highest</td>
          <td className="px-4 py-3 text-center">Medium</td>
          <td className="px-4 py-3 text-center">Lowest</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="text-justify leading-relaxed text-sm ">
    The right choice depends on product sensitivity, regulatory requirements, occupancy, and lifecycle operating costs. Over-specifying cleanliness can increase energy bills without adding value. Organizations seeking regional expertise may also benefit from working with a <Link href="https://www.adhunikpowertech.com/cleanroom-manufacturer-in-roorkee-haridwar" className="text-cyan-700 hover:underline font-semibold">Cleanroom Manufacturer in Haridwar</Link> that understands local configurations.
  </p>
</section>

          <div className="space-y-4 my-6">
  <h3 className="text-xl font-bold text-cyan-900 text-center mb-4">
    HVAC Design Considerations: Filtration
  </h3>
  <p className="text-center text-xs text-gray-600 mb-4">
    A layered filtration strategy improves system efficiency and extends HEPA filter life.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    {/* Card 1: MERV Filters */}
    <div className="bg-cyan-100/70 border border-cyan-200 rounded-xl p-5 shadow-sm text-center flex flex-col justify-start">
      <span className="font-bold text-cyan-900 block mb-2 text-sm">
        MERV Filters
      </span>
      <p className="text-cyan-950 leading-relaxed text-justify">
        Capture larger particles before final filtration to extend the operating lifespan of high-efficiency filters.
      </p>
    </div>

    {/* Card 2: HEPA Filters */}
    <div className="bg-cyan-100/70 border border-cyan-200 rounded-xl p-5 shadow-sm text-center flex flex-col justify-start">
      <span className="font-bold text-cyan-900 block mb-2 text-sm">
        HEPA Filters
      </span>
      <p className="text-cyan-950 leading-relaxed text-justify">
        Remove at least 99.97% of 0.3 µm particles and are standard in ISO Class 6–8 cleanrooms.
      </p>
    </div>

    {/* Card 3: ULPA Filters */}
    <div className="bg-cyan-100/70 border border-cyan-200 rounded-xl p-5 shadow-sm text-center flex flex-col justify-start">
      <span className="font-bold text-cyan-900 block mb-2 text-sm">
        ULPA Filters
      </span>
      <p className="text-cyan-950 leading-relaxed text-justify">
        Used where even finer particle removal is required, such as semiconductor manufacturing.
      </p>
    </div>
  </div>
</div>

         {/* FAQ Section */}
<section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-4">
  <h2 className="text-xl font-bold text-cyan-800 text-center mb-6">
    Frequently Asked Questions
  </h2>
  
  <div className="space-y-3">
    {/* Question 1 */}
    <details className="group bg-cyan-50/40 border border-cyan-100 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:none">
      <summary className="flex items-center justify-between cursor-pointer font-semibold text-cyan-950 text-xs md:text-sm select-none">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-cyan-700 flex-shrink-0" />
          <span>Is ISO Class 6 cleaner than ISO Class 7?</span>
        </div>
        <span className="text-cyan-700 transition group-open:rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </summary>
      <div className="mt-3 pl-8 text-gray-600 text-xs text-justify leading-relaxed border-t border-cyan-100/60 pt-3">
        Yes. ISO Class 6 permits significantly fewer airborne particles than ISO Class 7 and therefore requires more stringent HVAC design, higher ACH, and tighter environmental control.
      </div>
    </details>

    {/* Question 2 */}
    <details className="group bg-cyan-50/40 border border-cyan-100 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:none">
      <summary className="flex items-center justify-between cursor-pointer font-semibold text-cyan-950 text-xs md:text-sm select-none">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-cyan-700 flex-shrink-0" />
          <span>Why is ISO Class 7 the most common cleanroom classification?</span>
        </div>
        <span className="text-cyan-700 transition group-open:rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </summary>
      <div className="mt-3 pl-8 text-gray-600 text-xs text-justify leading-relaxed border-t border-cyan-100/60 pt-3">
        ISO Class 7 provides an effective balance between contamination control, regulatory compliance, and operating costs, making it suitable for many pharmaceutical and medical device applications.
      </div>
    </details>

    {/* Question 3 */}
    <details className="group bg-cyan-50/40 border border-cyan-100 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:none">
      <summary className="flex items-center justify-between cursor-pointer font-semibold text-cyan-950 text-xs md:text-sm select-none">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-cyan-700 flex-shrink-0" />
          <span>Does every cleanroom require laminar airflow?</span>
        </div>
        <span className="text-cyan-700 transition group-open:rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </summary>
      <div className="mt-3 pl-8 text-gray-600 text-xs text-justify leading-relaxed border-t border-cyan-100/60 pt-3">
        No. Unidirectional (laminar) airflow is typically reserved for critical workflow zones or highly sterile classifications like ISO 5 or ISO 6. ISO Class 7 and 8 spaces heavily utilize non-unidirectional (turbulent) airflow to mix and dilute particles.
      </div>
    </details>
  </div>
</section>

          {/* Conclusion Section */}
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-4 text-sm">
            <h2 className="text-xl font-bold text-cyan-800">Conclusion</h2>
            <p className="text-justify leading-relaxed">
              Choosing the right ISO Class 6, ISO Class 7, or ISO Class 8 cleanroom is about more than achieving the highest cleanliness level. It should align with your process requirements, contamination risks, regulatory standards, and operating costs.
            </p>
            <p className="text-justify leading-relaxed">
              ISO Class 6 is ideal for critical applications, ISO Class 7 offers the best balance of performance and cost for most pharmaceutical and medical device facilities, while ISO Class 8 provides an efficient solution for less demanding controlled environments. Selecting the right ISO class and HVAC design helps ensure compliance, reliable performance, and long-term operational efficiency.
            </p>
          </section>

          {/* Final Call To Action Banner */}
          <section className="bg-slate-900 rounded-2xl p-8 text-white shadow-md border border-slate-800">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white">Optimize Your Cleanroom HVAC with Expert Engineering</h2>
              <p className="text-slate-300 text-xs md:text-sm text-justify md:text-center leading-relaxed">
                Connect to discuss the HVAC design, ISO classification, validation support, or turnkey cleanroom solutions & Get practical recommendations tailored to your facility and project requirements.
              </p>
              <div className="pt-2 flex justify-center">
                <Link href="/support-form" className="bg-cyan-600 text-white font-bold text-sm hover:bg-cyan-500 py-3 px-8 rounded-lg transition duration-300 shadow-sm">
                  Request a Free Consultation
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}