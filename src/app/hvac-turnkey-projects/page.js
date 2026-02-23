"use client";

import React from "react";
import {
  ShieldCheck,
  Zap,
  CheckCircle,
  Factory,
  TrendingUp,
  DollarSign,
  ChevronsRight,
  Users,
  Settings,
  Layers,
  Activity,
  Clock,
  ArrowRightLeft,
  Briefcase,
  AlertTriangle,
  Building2,
  CalendarDays,
  Gem
} from "lucide-react";

export default function TurnkeyHVACCostSavingsBlog() {
  // Key Differentiators / Why Turnkey
  const turnkeyBenefits = [
    {
      title: "Single-Point Accountability",
      description:
        "Eliminate the 'blame game' between vendors. One contractor manages design, procurement, and installation, ensuring total responsibility for performance.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />,
    },
    {
      title: "Faster Revenue Generation",
      description:
        "Overlapping project phases allow facilities to start operations 4–8 weeks earlier, translating directly into faster ROI and production uptime.",
      icon: <Clock className="w-8 h-8 text-cyan-600" />,
    },
    {
      title: "Bulk Procurement Savings",
      description:
        "Benefit from our integrated supply chain. Bulk equipment ordering reduces capital expenditure (CAPEX) compared to small-volume retail pricing.",
      icon: <DollarSign className="w-8 h-8 text-cyan-600" />,
    },
    {
      title: "Operational Efficiency",
      description:
        "Optimized system designs prevent overspending on oversized units and reduce long-term electricity consumption by 15–25% through energy-balanced engineering.",
      icon: <Zap className="w-8 h-8 text-cyan-600" />,
    },
  ];

  // Technical Deliverables
  const projectScope = [
    {
      title: "Integrated Design",
      description:
        "Precision load calculations and technical planning ensure the HVAC system aligns perfectly with the facility's heat load and machinery requirements.",
      icon: <Layers className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Advanced Equipment",
      description:
        "Direct procurement of high-efficiency chillers, air washers, ventilation systems, SCUs, and specialized industrial cooling units.",
      icon: <Settings className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Professional Execution",
      description:
        "Expert installation, ducting, and electrical integration performed by a unified team to minimize rework and change orders.",
      icon: <Activity className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Commissioning & AMC",
      description:
        "Performance-tested handovers followed by dedicated annual maintenance contracts (AMC) to ensure the system runs at peak performance.",
      icon: <Gem className="w-8 h-8 text-blue-600" />,
    },
  ];

  // Industrial Challenges vs Turnkey Solutions
  const hiddenCostsInsights = [
    {
      title: "The Fragmented Model Fail",
      description:
        "In traditional models, the installer blames the designer, and the supplier blames the installer. Turnkey eliminates this confusion entirely.",
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Coordination Complexity",
      description:
        "Managing 5+ vendors leads to site delays. Our synchronized execution plans ensure equipment arrives exactly when the site is ready.",
      icon: <ArrowRightLeft className="w-8 h-8 text-red-600" />,
    },
    {
      title: "The Overdesign Trap",
      description:
        "Independent consultants often overdesign systems to play safe, leading to massive unnecessary costs. We build for your specific reality.",
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
              Why Turnkey HVAC Projects Save Cost in Large Facilities
            </h1>
            <p className="text-sm text-gray-700 mb-6 text-justify leading-relaxed">
              Planning HVAC for manufacturing plants, data centers, or hospitals requires a balance of 
              performance and cost control. While many assume hiring separate vendors saves money, 
              the reality is often high delays and technical conflicts. Adhunik Powertech 
              delivers fully integrated HVAC turnkey projects in Delhi NCR that reduce both capital 
              investment and long-term operational expenses.
            </p>

            {/* Key Tags */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <CalendarDays className="w-6 h-6 text-cyan-700" />
                <span className="font-semibold text-cyan-800 text-sm">
                 Faster Delivery
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-cyan-700" />
                <span className="font-semibold text-cyan-800 text-sm">
                  Single Accountability
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                <Building2 className="w-6 h-6 text-cyan-700" />
                <span className="font-semibold text-cyan-800 text-sm">
                  Industrial Scale
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start mb-8">
              <a
                href="/support-form"
                className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-xl flex items-center"
              >
                <ChevronsRight className="w-5 h-5 mr-2" />
                Get a Turnkey Quote
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-6/12">
            <img
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1771838810/hvacturnkey_jpm1qj.webp"
              alt="Why turnkey HVAC projects save cost in large facilities"
              width="1260"
              height="750"
              loading="lazy"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* SECTION: THE PROBLEM */}
        <section className="text-center my-16 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
            The Hidden Cost of Fragmented Vendor Management
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-sm">
            Large facilities can’t afford the “blame game.” When the installer blames the design consultant 
            and the equipment supplier points at the electrical team, your project stalls. 
            <strong> HVAC turnkey projects in Delhi NCR</strong> eliminate this friction by housing design, 
            procurement, and execution under one professional roof, preventing financial leakages.
          </p>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* CORE BENEFITS SECTION */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
               Direct Financial Advantages of Turnkey HVAC
            </h2>
            <p className="mt-4 max-w-5xl mx-auto text-gray-600 text-sm text-justify">
            As a leading 
            <a 
                href="/top-HVAC-Contractor-in-Delhi-NCR-&-India" 
                className="text-cyan-700 font-bold hover:underline px-1"
            >
                Industrial HVAC contractor in Delhi NCR
            </a>, 
            we ensure that engineering aligns with execution to deliver measurable savings.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {turnkeyBenefits.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-cyan-600 flex flex-col items-start"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* SCOPE / BUILD QUALITY SECTION */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
              The Turnkey Lifecycle: From Concept to Commissioning
            </h2>
            <p className="mt-4 max-w-4xl mx-auto text-gray-600 text-sm">
              We manage the technical complexities so you can focus on your core business operations. 
              Our integrated approach ensures every component works in harmony.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projectScope.map((item, index) => (
              <div
                key={index}
                className="flex flex-row gap-4 p-6 border rounded-xl shadow-sm bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 pt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* INSIGHTS SECTION */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
              Why Large Facilities Trust Adhunik Powertech
            </h2>
            <p className="mt-4 max-w-4xl mx-auto text-gray-600 text-sm">
              Partnering with a 
              <a 
                href="/hvac" 
                className="text-cyan-700 font-bold hover:underline px-1"
              >
                Top HVAC Contractor in Delhi NCR
              </a> 
              guarantees peace of mind and technical precision for large-scale cooling.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {hiddenCostsInsights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-8 border-cyan-600"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-cyan-700 to-cyan-900 rounded-xl p-8 text-white shadow-2xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Save Costs on Your Next HVAC Project?
            </h2>
            <p className="text-cyan-100 mb-8 text-lg">
              Avoid vendor conflicts and project delays. Let the experts at Adhunik Powertech 
              handle your industrial HVAC turnkey requirements with precision and efficiency.
            </p>
            <div className="flex justify-center">
              <a
                href="/support-form"
                className="bg-white text-md font-bold text-cyan-800 hover:bg-cyan-100 py-4 px-10 rounded-full transition duration-300"
              >
                Get Professional HVAC Advice Today
              </a>
            </div>
          </div>
        </section>
     
        {/* FAQ SECTION: CENTERED & LISTED */}
       {/* FAQ SECTION: CENTERED ACCORDION LIST */}
        <section className="mt-16 bg-white p-8 rounded-xl shadow-md border-t-4 border-cyan-600 flex flex-col items-center">
          <div className="max-w-4xl w-full text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-4xl w-full space-y-4">
            {[
              {
                q: "Why choose Adhunik Powertech for HVAC turnkey projects in Delhi NCR?",
                a: "Adhunik Powertech is a top HVAC Contractor offering complete turnkey solutions including design, procurement, installation, and commissioning. We help reduce delays and lower overall project costs through single-point responsibility."
              },
              {
                q: "How do HVAC turnkey projects in Delhi NCR help reduce overall project cost?",
                a: "They eliminate multiple vendor coordination, prevent expensive rework due to design mismatches, and optimize bulk equipment procurement, enabling faster completion timelines and earlier revenue generation."
              },
              {
                q: "Is Adhunik Powertech suitable for industrial HVAC projects in Delhi NCR?",
                a: "Yes, we are an experienced Industrial HVAC contractor specializing in air washers, chillers, ventilation, and specialized cooling units for manufacturing plants, warehouses, and pharma units."
              },
              {
                q: "Does Adhunik Powertech provide HVAC maintenance services in NCR?",
                a: "Yes, we operate as a full-service HVAC maintenance contractor, offering preventive maintenance, Annual Maintenance Contracts (AMC), and performance monitoring to ensure long-term system efficiency."
              },
              {
                q: "What makes Adhunik Powertech a reliable Commercial HVAC contractor in NCR?",
                a: "Our reliability stems from in-house design expertise, timely execution, and a turnkey approach that removes vendor conflicts, ensuring your commercial facility is cooled effectively on budget."
              }
            ].map((faq, index) => (
              <details 
                key={index} 
                className="group border border-gray-100 rounded-xl bg-gray-50 overflow-hidden transition-all duration-300"
              >
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none">
                  <span className="text-sm font-bold text-gray-800 pr-4 leading-tight">
                    {faq.q}
                  </span>
                  <div className="text-cyan-600 transition-transform duration-300 group-open:rotate-180">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
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

      {/* SCHEMA FOR SEO (Includes all 5 questions) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why choose Adhunik Powertech for HVAC turnkey projects in Delhi NCR?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Adhunik Powertech is a top HVAC Contractor offering complete turnkey HVAC solutions including design, procurement, installation, and commissioning. We reduce delays through single-point responsibility."
                }
              },
              {
                "@type": "Question",
                "name": "How do HVAC turnkey projects in Delhi NCR help reduce overall project cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "They eliminate vendor coordination issues, prevent design mismatches, and allow for bulk procurement savings, leading to faster ROI."
                }
              },
              {
                "@type": "Question",
                "name": "Is Adhunik Powertech suitable for industrial HVAC projects in Delhi NCR?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, they specialize in industrial cooling like air washers and chillers for plants and warehouses in Delhi NCR."
                }
              },
              {
                "@type": "Question",
                "name": "Does Adhunik Powertech provide HVAC maintenance services in NCR?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, they provide preventive maintenance and AMCs for all industrial and commercial HVAC systems."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Adhunik Powertech a reliable Commercial HVAC contractor in NCR?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Their reliability comes from in-house design, expert project management, and a unified turnkey process."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}