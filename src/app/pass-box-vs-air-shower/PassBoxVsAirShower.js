"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ShieldCheck, Clock, Award, HelpCircle } from "lucide-react";

export default function PassBoxVsAirShower() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the difference between a Pass Box and an Air Shower?",
      a: "A Pass Box transfers materials between cleanroom areas through an interlocked chamber, while an Air Shower removes dust and loose particles from personnel before they enter the cleanroom."
    },
    {
      q: "Can an Air Shower replace a Pass Box?",
      a: "No. An Air Shower is designed for personnel contamination control and should not be used as a substitute for controlled material transfer."
    },
    {
      q: "Do pharmaceutical cleanrooms need both Pass Box and Air Shower?",
      a: "Many pharmaceutical cleanrooms use both because materials and personnel introduce contamination through different pathways."
    },
    {
      q: "Which is better for a cleanroom: Pass Box or Air Shower?",
      a: "Neither is universally better. Choose a Pass Box for material transfer and an Air Shower for personnel contamination control based on your cleanroom workflow."
    },
    {
      q: "Can a Pass Box replace an Air Shower?",
      a: "No. A Pass Box cannot remove contaminants from personnel or replace the particle-removal function of an Air Shower."
    }
  ];
  return (
    <div className="bg-slate-50 mt-24 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
          <div className="w-full md:w-6/12">
            <h1 className="text-xl md:text-2xl font-bold text-cyan-900 mb-4 leading-tight text-center md:text-left">
              Pass Box vs Air Shower: What's the Difference?
            </h1>
            <p className="text-sm text-gray-700 text-justify md:text-left leading-relaxed mb-6">
              In industries where cleanliness directly affects product quality and safety, contamination control is one of the most important parts of facility design. Pharmaceutical manufacturing plants, biotechnology laboratories, hospitals, medical device facilities, electronics production units, and research laboratories all rely on cleanrooms to maintain controlled environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 p-3 bg-cyan-50/50 rounded-lg border border-cyan-100">
                <Clock className="w-4 h-4 text-cyan-700 flex-shrink-0" />
                <span className="font-semibold text-cyan-900 text-xs">Material Transfer Solutions</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-cyan-50/50 rounded-lg border border-cyan-100">
                <Award className="w-4 h-4 text-cyan-700 flex-shrink-0" />
                <span className="font-semibold text-cyan-900 text-xs">Personnel Decontamination</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-cyan-50/50 rounded-lg border border-cyan-100">
                <ShieldCheck className="w-4 h-4 text-cyan-700 flex-shrink-0" />
                <span className="font-semibold text-cyan-900 text-xs">Cleanroom Protection</span>
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
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1787657181/Pass-Box-vs-Air-Shower_krfeov.webp" 
              alt="Adhunik Powertech cleanroom with personnel using an air shower and pass box, with the headline “Pass Box vs Air Shower: What’s the Difference?"
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
            Cleanroom Contamination Control Equipment
          </h2>
      <p className="text-gray-600 w-full max-w-6xl lg:max-w-none mx-auto text-xs sm:text-sm leading-relaxed text-center px-4">
            Cleanroom cleanliness isn't only about HEPA filters and HVAC systems. People and material movement can introduce dust, microbes, fibers, and airborne particles, making contamination-control equipment essential. Understand the critical differences between Pass Boxes and Air Showers to choose the right contamination-control solution for your facility.
          </p>
        </section>

        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto space-y-12 text-gray-700">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
  {/* Importance Section (Left Side - Spans 7 columns on desktop) */}
  <section className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 text-sm space-y-4">
    <h2 className="text-xl font-bold text-cyan-800">
      Why Are Pass Boxes and Air Showers Important in Cleanrooms?
    </h2>

    <p className="text-justify leading-relaxed">
      Cleanrooms are designed to maintain a specific level of air cleanliness. Even a small amount of contamination can affect sensitive manufacturing processes or laboratory operations.
    </p>

    <div className="bg-cyan-50/40 border border-cyan-100 rounded-xl p-5 shadow-sm my-4">
      <h3 className="text-sm font-bold text-cyan-900 mb-3">
        Common contamination sources include:
      </h3>
      <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700">
        <li>Dust particles from outside environments.</li>
        <li>Fibers from clothing.</li>
        <li>Skin flakes and hair.</li>
        <li>Packaging materials.</li>
        <li>Equipment and tools entering production areas.</li>
        <li>Airborne microorganisms in critical environments.</li>
      </ul>
    </div>

    <p className="text-justify leading-relaxed">
      Every entry point into a cleanroom is a potential contamination pathway. Instead of allowing unrestricted movement of people and materials, cleanroom facilities use dedicated equipment to minimize contamination risks.
    </p>

    <p className="text-justify leading-relaxed">
      A well-designed contamination-control strategy typically includes:
    </p>
    <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700">
      <li>HVAC systems with HEPA filtration.</li>
      <li>Pressure-controlled rooms.</li>
      <li>Airlocks and gowning areas.</li>
      <li>Pass Boxes for controlled material transfer.</li>
      <li>Air Showers for personnel decontamination.</li>
    </ul>
    <p className="text-justify leading-relaxed">
      Together, these systems help maintain cleanroom integrity and improve operational efficiency.
    </p>
  </section>

  {/* Quick Answer Section (Right Side - Dark Cyan Card, Spans 5 columns on desktop) */}
  <section className="lg:col-span-5 bg-cyan-900 text-white p-6 md:p-8 rounded-xl shadow-lg text-sm space-y-4 sticky top-6">
    <h2 className="text-xl font-bold text-cyan-100">
      Basic Difference Between a Pass Box and an Air Shower
    </h2>
    <blockquote className="border-l-4 border-cyan-400 bg-cyan-950/60 p-4 rounded-r-lg italic text-cyan-100 text-sm my-4 border">
      The biggest difference is the purpose they serve.<br />
      <strong>Pass Box</strong> = Material transfer<br />
      <strong>Air Shower</strong> = Personnel contamination control
    </blockquote>

    <p className="text-cyan-100/90 leading-relaxed">
      Both help reduce contamination, but they protect cleanrooms in different ways.
    </p>
  </section>
          </div>
          {/* What Is a Pass Box */}
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-6 text-sm">
            <div>
              <h2 className="text-xl font-bold text-cyan-800 mb-2">What Is a Pass Box?</h2>
              <p className="text-justify leading-relaxed">
                A <Link href="/airshower" className="text-cyan-800 underline font-medium">Pass Box</Link> for cleanroom applications is an enclosed transfer chamber installed between two rooms with different cleanliness levels. It allows materials to pass from one side to the other without requiring personnel to enter both rooms.
              </p>
              <p className="text-justify leading-relaxed mt-2">
                Think of it as a secure transfer window designed specifically for contamination-sensitive environments.
              </p>
              <p className="text-justify leading-relaxed mt-2">
                Instead of opening a cleanroom door every time tools, samples, or packaging materials need to move, personnel place items inside the Pass Box. After one door closes, the opposite side opens only when it's safe to do so.
              </p>
              <p className="text-justify leading-relaxed mt-2">
                This simple process significantly reduces contamination risks.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-cyan-800 mb-2">What Is a Pass Box Used For?</h3>
              <p className="text-justify leading-relaxed">
                A Pass Box is primarily used for transferring materials between controlled environments while maintaining cleanliness standards.
              </p>
              <p className="text-justify leading-relaxed mt-2">
                Typical materials transferred include:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700 mt-2">
                <li>Raw materials for pharmaceutical production.</li>
                <li>Laboratory samples.</li>
                <li>Sterile packaging.</li>
                <li>Medical instruments.</li>
                <li>Documentation.</li>
                <li>Electronic components.</li>
                <li>Finished products.</li>
              </ul>
              <p className="text-justify leading-relaxed mt-2">
                Rather than increasing personnel traffic between rooms, a Pass Box creates a dedicated transfer point.
              </p>
            </div>

            {/* Table: Pass Box Industries */}
            <div>
              <h3 className="text-lg font-bold text-cyan-800 mb-4">Common Industries That Use Pass Boxes</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-cyan-800 text-white">
                      <th className="p-3 border border-cyan-900">Industry</th>
                      <th className="p-3 border border-cyan-900">Typical Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-medium">Pharmaceutical Manufacturing</td>
                      <td className="p-3 border border-gray-200">Transfer of sterile materials and packaging components.</td>
                    </tr>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-medium">Biotechnology</td>
                      <td className="p-3 border border-gray-200">Sample movement between laboratories.</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-medium">Healthcare</td>
                      <td className="p-3 border border-gray-200">Sterile supply transfer in hospitals.</td>
                    </tr>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-medium">Medical Device Manufacturing</td>
                      <td className="p-3 border border-gray-200">Controlled movement of components.</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-medium">Electronics & Semiconductor</td>
                      <td className="p-3 border border-gray-200">Dust-sensitive component transfer.</td>
                    </tr>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-medium">Food & Nutraceutical Manufacturing</td>
                      <td className="p-3 border border-gray-200">Hygienic ingredient and packaging transfer.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


            <div>
              <h3 className="text-lg font-bold text-cyan-800 mb-4">Types of Pass Boxes Used in Cleanrooms</h3>
              <p className="text-justify leading-relaxed text-xs mb-4">Different cleanroom applications require different types of Pass Boxes.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-cyan-100/70 border border-cyan-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-bold text-cyan-900 block mb-2 text-sm">1. Static Pass Box</span>
                    <p className="text-cyan-950 leading-relaxed mb-3">A static Pass Box has no dedicated airflow system.</p>
                    <p className="font-semibold text-cyan-900 mb-1">Best suited for:</p>
                    <ul className="list-disc pl-4 text-cyan-950 space-y-1">
                      <li>Areas with similar cleanliness classifications.</li>
                      <li>Transfer of low-risk materials.</li>
                      <li>Laboratories and packaging rooms.</li>
                    </ul>
                  </div>
                  <p className="text-cyan-900 font-medium mt-3 border-t border-cyan-200 pt-2">Benefits include simple installation and low maintenance.</p>
                </div>

                <div className="bg-cyan-100/70 border border-cyan-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-bold text-cyan-900 block mb-2 text-sm">2. Dynamic Pass Box</span>
                    <p className="text-cyan-950 leading-relaxed mb-3">A dynamic Pass Box includes HEPA-filtered airflow inside the chamber.</p>
                    <p className="font-semibold text-cyan-900 mb-1">Best suited for:</p>
                    <ul className="list-disc pl-4 text-cyan-950 space-y-1">
                      <li>Transfer between rooms with different cleanliness grades.</li>
                      <li>Pharmaceutical manufacturing.</li>
                      <li>Sterile production areas.</li>
                      <li>Biotechnology facilities.</li>
                    </ul>
                  </div>
                  <p className="text-cyan-900 font-medium mt-3 border-t border-cyan-200 pt-2">Continuous airflow helps remove airborne particles during transfer.</p>
                </div>

                <div className="bg-cyan-100/70 border border-cyan-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-bold text-cyan-900 block mb-2 text-sm">3. UV Pass Box</span>
                    <p className="text-cyan-950 leading-relaxed mb-3">A UV Pass Box adds ultraviolet light for additional microbial surface disinfection.</p>
                    <p className="font-semibold text-cyan-900 mb-1">Best suited for:</p>
                    <ul className="list-disc pl-4 text-cyan-950 space-y-1">
                      <li>Microbiology laboratories.</li>
                      <li>Healthcare applications.</li>
                      <li>Sensitive pharmaceutical operations.</li>
                    </ul>
                  </div>
                  <p className="text-cyan-900 font-medium mt-3 border-t border-cyan-200 pt-2">UV systems are used as an additional contamination-control measure rather than replacing cleaning procedures.</p>
                </div>
              </div>
            </div>
          </section>

          {/* What Is an Air Shower */}
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-6 text-sm">
            <div>
              <h2 className="text-xl font-bold text-cyan-800 mb-2">What Is an Air Shower?</h2>
              <p className="text-justify leading-relaxed">
                While a Pass Box handles materials, an <Link href="/air-shower" className="text-cyan-800 underline font-medium">Air Shower</Link>  for cleanroom applications focuses on people.
              </p>
              <p className="text-justify leading-relaxed mt-2">
                An Air Shower is a self-contained chamber installed at the entrance of a cleanroom. Before personnel enter the controlled area, they pass through the chamber where high-velocity HEPA-filtered air removes dust, lint, fibers, and loose particles from clothing and exposed surfaces.
              </p>
              <p className="text-justify leading-relaxed mt-2">
                It acts as the final contamination-control step before entering the cleanroom.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-cyan-800 mb-2">Why Is an Air Shower Important?</h3>
              <p className="text-justify leading-relaxed">
                People are one of the largest contamination sources inside cleanrooms.
              </p>
              <p className="text-justify leading-relaxed mt-2">
                Even after wearing cleanroom garments, personnel may carry:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700 mt-2">
                <li>Dust particles.</li>
                <li>Hair.</li>
                <li>Skin flakes.</li>
                <li>Clothing fibers.</li>
                <li>External airborne contaminants.</li>
                <li>Particles attached to shoes or gloves.</li>
              </ul>
              <p className="text-justify leading-relaxed mt-2">
                Without proper decontamination, these particles can enter sensitive manufacturing or laboratory environments. An Air Shower helps reduce this contamination before entry.
              </p>
            </div>

            {/* Table: Air Shower Applications */}
            <div>
              <h3 className="text-lg font-bold text-cyan-800 mb-4">Where Are Air Showers Used?</h3>
              <p className="text-justify leading-relaxed text-xs mb-4">
                Air Showers are commonly installed at cleanroom entrances in industries where personnel contamination must be minimized.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-cyan-800 text-white">
                      <th className="p-3 border border-cyan-900">Industry</th>
                      <th className="p-3 border border-cyan-900">Typical Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-medium">Pharmaceutical Manufacturing</td>
                      <td className="p-3 border border-gray-200">Personnel entry before sterile production.</td>
                    </tr>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-medium">Biotechnology Laboratories</td>
                      <td className="p-3 border border-gray-200">Controlled laboratory access.</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-medium">Medical Device Manufacturing</td>
                      <td className="p-3 border border-gray-200">Operator contamination control.</td>
                    </tr>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-medium">Hospitals & Healthcare</td>
                      <td className="p-3 border border-gray-200">Entry into sterile preparation areas.</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-medium">Semiconductor Manufacturing</td>
                      <td className="p-3 border border-gray-200">Dust removal before production floors.</td>
                    </tr>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-medium">Food Processing Cleanrooms</td>
                      <td className="p-3 border border-gray-200">Personnel hygiene before production areas.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">Air Showers are often installed after gowning rooms and before the cleanroom entrance.</p>
            </div>

            
          </section>

          {/* Comparison Section */}
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-6 text-sm">
            <div>
              <h2 className="text-xl font-bold text-cyan-800 mb-2">Pass Box vs Air Shower: Key Differences Explained</h2>
              <p className="text-justify leading-relaxed mb-4">
                Now that we've understood what each system does, let's compare Pass Box vs Air Shower side by side. While both are used for cleanroom contamination control, their design, purpose, and applications are very different.
              </p>

              {/* Table: Main Comparison */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-cyan-800 text-white">
                      <th className="p-3 border border-cyan-900">Feature</th>
                      <th className="p-3 border border-cyan-900">Pass Box</th>
                      <th className="p-3 border border-cyan-900">Air Shower</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-bold text-cyan-900">Primary purpose</td>
                      <td className="p-3 border border-gray-200">Controlled transfer of materials between cleanroom areas.</td>
                      <td className="p-3 border border-gray-200">Removal of dust and particles from personnel before entering a cleanroom.</td>
                    </tr>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-bold text-cyan-900">Used for</td>
                      <td className="p-3 border border-gray-200">Raw materials, samples, tools, packaging, and equipment.</td>
                      <td className="p-3 border border-gray-200">Personnel wearing cleanroom garments.</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-bold text-cyan-900">Personnel movement</td>
                      <td className="p-3 border border-gray-200">Not designed for personnel entry.</td>
                      <td className="p-3 border border-gray-200">Specifically designed for personnel entry.</td>
                    </tr>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-bold text-cyan-900">Material movement</td>
                      <td className="p-3 border border-gray-200">Primary application.</td>
                      <td className="p-3 border border-gray-200">Not intended for routine material transfer.</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-bold text-cyan-900">Installation location</td>
                      <td className="p-3 border border-gray-200">Built into walls between controlled rooms.</td>
                      <td className="p-3 border border-gray-200">Installed at cleanroom entrances or gowning exits.</td>
                    </tr>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-bold text-cyan-900">Contamination-control method</td>
                      <td className="p-3 border border-gray-200">Interlocked chamber with optional HEPA airflow or UV sterilization.</td>
                      <td className="p-3 border border-gray-200">High-velocity HEPA-filtered air removes loose particles.</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-bold text-cyan-900">Door system</td>
                      <td className="p-3 border border-gray-200">Mechanical or electromagnetic interlocking doors.</td>
                      <td className="p-3 border border-gray-200">Automatic interlocked entry and exit doors.</td>
                    </tr>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-bold text-cyan-900">Air filtration</td>
                      <td className="p-3 border border-gray-200">Available in dynamic models only.</td>
                      <td className="p-3 border border-gray-200">Essential component in every Air Shower system.</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-bold text-cyan-900">Space requirement</td>
                      <td className="p-3 border border-gray-200">Compact wall-mounted installation.</td>
                      <td className="p-3 border border-gray-200">Requires a dedicated entry chamber.</td>
                    </tr>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <td className="p-3 border border-gray-200 font-bold text-cyan-900">Main benefit</td>
                      <td className="p-3 border border-gray-200">Maintains cleanliness during material transfer.</td>
                      <td className="p-3 border border-gray-200">Reduces contamination carried by personnel.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <blockquote className="border-l-4 border-cyan-600 bg-cyan-50/50 p-4 rounded-r-lg italic text-cyan-900 text-sm my-4">
                <strong>The Biggest Difference in Simple Words:</strong><br />
                A Pass Box protects the cleanroom during material movement, while an Air Shower protects the cleanroom during personnel movement.<br />
                If materials enter frequently, a Pass Box becomes essential. If employees regularly enter controlled areas, an Air Shower becomes equally important.
              </blockquote>
            </div>


          </section>
   {/* Conclusion Section */}
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-4 text-sm">
            <h2 className="text-xl font-bold text-cyan-800">Conclusion</h2>
            <p className="text-justify leading-relaxed">
              Choosing the right contamination-control equipment is an important part of maintaining a clean and efficient cleanroom. Depending on your cleanroom requirements, using one or both systems can help maintain a controlled and reliable environment.
            </p>
      
          </section>
          {/* FAQs Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: FAQs Column (Spans 7 Columns) */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-2xl font-bold text-[#0D3B4C] mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#F8FAFC] hover:bg-gray-100/80 rounded-xl transition-all duration-200 overflow-hidden border border-gray-100"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-4 text-left font-semibold text-[#0D3B4C] text-xs sm:text-sm select-none"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <span className="text-gray-400 font-light text-xl leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-200/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Lead Generation Card (Spans 5 Columns) */}
        <div className="lg:col-span-5">
          <div className="bg-[#0E5168] text-white rounded-2xl p-8 md:p-10 text-center shadow-xl space-y-6 flex flex-col justify-center items-center">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-wide">
             Not Sure Which Cleanroom Solution You Need?
            </h3>

            <p className="text-cyan-50/90 text-xs sm:text-sm leading-relaxed max-w-sm">
              Contact us today to find the right cleanroom solution for your facility, workflow, and compliance needs.
            </p>
            <Link
              href="https://www.adhunikpowertech.com/support-form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto text-center bg-white text-[#0E5168] hover:bg-cyan-50 font-bold text-xs sm:text-sm py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Request a Free Consultation
            </Link>
          </div>
        </div>

      </div>
    </div>
  

       

        </div>
      </div>
    </div>
  );
}