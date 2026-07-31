"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShieldCheck, Clock, Award, HelpCircle, Plus, Minus } from "lucide-react";

export default function PharmaCleanroomContractor() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How is a pharmaceutical cleanroom different from a standard cleanroom?",
      answer: "A pharmaceutical cleanroom is specifically designed to meet GMP guidelines and regulatory requirements for pharmaceutical manufacturing. In addition to controlling airborne particles, it must support product quality, process consistency, and regulatory compliance."
    },
    {
      question: "Why is HVAC important in pharmaceutical cleanrooms?",
      answer: "HVAC systems maintain clean air, room pressure, temperature, humidity, and air changes per hour (ACH). A properly designed HVAC system helps prevent contamination and ensures stable environmental conditions for pharmaceutical production."
    },
    {
      question: "What standards should a pharmaceutical cleanroom meet?",
      answer: "Most pharmaceutical cleanrooms are designed in accordance with applicable GMP guidelines and recognized standards such as ISO 14644 for cleanroom classification. Additional requirements may apply depending on the product, process, and target regulatory market."
    },
    {
      question: "Why should I choose a turnkey cleanroom contractor?",
      answer: "A turnkey contractor manages the complete project—from design and engineering to construction, validation, and documentation. This improves coordination, reduces project delays, and provides a single point of accountability throughout the project lifecycle."
    }
  ];
  return (
    <div className="bg-slate-50 mt-24 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
          <div className="w-full md:w-6/12">
            <h1 className="text-xl md:text-2xl font-bold text-cyan-900 mb-4 leading-tight text-center md:text-left">
              Pharmaceutical Cleanroom Experts | Turnkey GMP Solutions India
            </h1>
            <p className="text-sm text-gray-700 text-justify md:text-left leading-relaxed mb-6">
              The success of a pharmaceutical manufacturing facility depends on more than advanced equipment and production processes. It also relies on a well-designed cleanroom that maintains the right level of cleanliness, airflow, temperature, humidity, and pressure to protect products from contamination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 p-3 bg-cyan-50/50 rounded-lg border border-cyan-100">
                <Clock className="w-4 h-4 text-cyan-700 flex-shrink-0" />
                <span className="font-semibold text-cyan-900 text-xs">Turnkey Engineering Execution</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-cyan-50/50 rounded-lg border border-cyan-100">
                <Award className="w-4 h-4 text-cyan-700 flex-shrink-0" />
                <span className="font-semibold text-cyan-900 text-xs">GMP & ISO 14644 Compliance</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-cyan-50/50 rounded-lg border border-cyan-100">
                <ShieldCheck className="w-4 h-4 text-cyan-700 flex-shrink-0" />
                <span className="font-semibold text-cyan-900 text-xs">Validation & Testing Support</span>
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
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1785494265/cleanroom_contractor_kxdebm.webp" 
              alt= "Modern pharmaceutical cleanroom for GMP-compliant manufacturing."
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
            Turnkey GMP Cleanroom Solutions for Pharmaceutical Facilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
            From site survey to final commissioning, validation. Discover how complete engineering precision protects product quality.
          </p>
        </section>

        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto space-y-12 text-gray-700">

          {/* Intro Card Section */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-4 text-sm">
            <p className="text-justify leading-relaxed">
              Whether you're manufacturing tablets, injectables, vaccines, APIs, or medical devices, your cleanroom must comply with Good Manufacturing Practices (GMP) and international cleanroom standards. Achieving this requires careful planning, specialized engineering, and seamless coordination between multiple systems.
            </p>
            <p className="text-justify leading-relaxed">
              This is where a trusted pharmaceutical cleanroom contractor makes a difference. Instead of managing separate vendors for civil work, HVAC, modular cleanroom panels, electrical systems, and validation, pharmaceutical manufacturers increasingly choose a turnkey cleanroom contractor who can manage the complete project from start to finish.
            </p>
            
            <p className="text-justify leading-relaxed pt-2">
              Whether you're planning a new pharmaceutical plant or upgrading an existing facility, this guide will help you understand the complete cleanroom lifecycle and make informed project decisions.
            </p>
          </div>

          {/* What Does a Pharmaceutical Cleanroom Contractor Do? */}
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 text-sm space-y-4">
            <h2 className="text-xl font-bold text-cyan-800">What Does a Pharmaceutical Cleanroom Contractor Do?</h2>
            
            <p className="text-justify leading-relaxed">
              A pharmaceutical cleanroom contractor is a specialized engineering company that plans, designs, builds, and validates cleanrooms for pharmaceutical manufacturing facilities. Unlike general construction companies, a cleanroom contractor understands how facility design affects contamination control, production efficiency, and regulatory compliance.
            </p>
            
            <p className="font-semibold text-cyan-900 mt-2">A professional contractor manages every stage of the project, including:</p>
            
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <li>Site survey and feasibility assessment</li>
              <li>Understanding the manufacturing process</li>
              <li>Cleanroom design and layout planning</li>
              <li>Personnel and material flow</li>
              <li>Pressure cascade planning</li>
              <li>HVAC system design</li>
              <li>HEPA filtration integration</li>
              <li>Modular cleanroom construction</li>
              <li>Airlocks and pass boxes</li>
              <li>HVAC commissioning</li>
              <li>Cleanroom testing and validation</li>
              <li>Project documentation and handover</li>
            </ul>

            <blockquote className="border-l-4 border-cyan-600 bg-cyan-50/50 p-4 rounded-r-lg italic text-cyan-900 text-sm my-4">
              Managing these activities under one roof helps reduce coordination challenges and ensures every system works together as a complete GMP-compliant solution.
            </blockquote>
          </section>

          {/* Why Turnkey Solutions Are Preferred */}
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 text-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-cyan-800 mb-2">Why Choose Turnkey Cleanroom Solutions?</h2>
              <p className="text-justify leading-relaxed">
                Building a pharmaceutical cleanroom involves much more than installing wall panels or an air conditioning system. Every engineering discipline must work together to create a controlled manufacturing environment. If different contractors are responsible for civil work, HVAC, electrical systems, cleanroom panels, and validation, communication gaps and design conflicts can easily arise. These issues often lead to project delays, additional costs, and compliance risks.
              </p>
              <p className="text-justify leading-relaxed mt-2">
                A turnkey cleanroom contractor simplifies the process by managing the complete project from concept to commissioning.
              </p>
            </div>

            <div className="overflow-x-auto">
              <h3 className="text-sm font-bold text-cyan-900 mb-3">Benefits of a Turnkey Approach</h3>
              <table className="w-full text-left text-xs border-collapse border border-cyan-100">
                <thead>
                  <tr className="bg-cyan-800 text-white">
                    <th className="p-3 border border-cyan-900">Feature</th>
                    <th className="p-3 border border-cyan-900">Multiple Vendors</th>
                    <th className="p-3 border border-cyan-900">Turnkey Pharmaceutical Cleanroom Contractor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="p-3 font-semibold border border-gray-200">Project Management</td>
                    <td className="p-3 border border-gray-200">Separate contractors for different activities</td>
                    <td className="p-3 border border-gray-200 bg-cyan-50/30">One team manages the complete project</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-semibold border border-gray-200">Coordination</td>
                    <td className="p-3 border border-gray-200">Coordination between multiple agencies</td>
                    <td className="p-3 border border-gray-200 bg-cyan-50/30">Single point of responsibility</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold border border-gray-200">Design Consistency</td>
                    <td className="p-3 border border-gray-200">Higher risk of design conflicts</td>
                    <td className="p-3 border border-gray-200 bg-cyan-50/30">Integrated engineering and execution</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-semibold border border-gray-200">Timeline</td>
                    <td className="p-3 border border-gray-200">Longer project timelines</td>
                    <td className="p-3 border border-gray-200 bg-cyan-50/30">Faster project delivery</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold border border-gray-200">Warranty & Support</td>
                    <td className="p-3 border border-gray-200">Complex warranty and service management</td>
                    <td className="p-3 border border-gray-200 bg-cyan-50/30">Simplified after-sales support</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-semibold border border-gray-200">Compliance Risk</td>
                    <td className="p-3 border border-gray-200">Greater compliance risks</td>
                    <td className="p-3 border border-gray-200 bg-cyan-50/30">Better alignment with GMP requirements</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-justify leading-relaxed text-xs">
              This integrated approach helps pharmaceutical manufacturers save time, improve project coordination, and achieve faster regulatory readiness.
            </p>
          </section>

          {/* Lifecycle Header */}
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 text-sm space-y-6">
            <h2 className="text-xl font-bold text-cyan-800">Pharmaceutical Cleanroom Project Lifecycle</h2>
            <p className="text-justify leading-relaxed">
              Every successful cleanroom project follows a structured engineering process. Each stage plays an important role in creating a safe, compliant, and efficient manufacturing environment. Let's look at the key phases involved.
            </p>

            {/* Stage 1 */}
            <div className="space-y-2 border-t pt-4">
              <h3 className="text-base font-bold text-cyan-900">1. Site Survey and Feasibility Assessment</h3>
              <p className="text-justify leading-relaxed">
                Every cleanroom project begins with a detailed site survey. Before preparing the design, engineers visit the proposed facility to understand the available space, existing infrastructure, utilities, and production requirements.
              </p>
              <p className="font-semibold text-xs text-gray-700">During this stage, they evaluate:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-x-2">
                <li>Building dimensions and structural condition</li>
                <li>Available electrical and mechanical utilities</li>
                <li>Existing HVAC infrastructure</li>
                <li>Production capacity requirements</li>
                <li>Space for equipment installation</li>
                <li>Utility routing</li>
                <li>Future expansion possibilities</li>
                <li>Environmental conditions</li>
              </ul>
              <p className="text-justify leading-relaxed text-xs pt-1">
                This assessment helps identify potential challenges early and ensures the cleanroom design is practical, cost-effective, and aligned with the client's manufacturing goals.
              </p>
            </div>


            {/* Stage 2 */}
            <div className="space-y-2 border-t pt-4">
              <h3 className="text-base font-bold text-cyan-900">2. Cleanroom Design and Layout Planning</h3>
              <p className="text-justify leading-relaxed">
                Once the manufacturing process is clearly defined, the next step is developing the cleanroom layout. A well-designed layout improves productivity, minimizes unnecessary movement, and reduces the risk of contamination.
              </p>
              <p className="font-semibold text-xs text-gray-700">Key considerations include:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-x-2">
                <li>Equipment positioning</li>
                <li>Production workflow</li>
                <li>Utility routing</li>
                <li>Operator access</li>
                <li>Maintenance accessibility</li>
                <li>Storage areas</li>
                <li>Cleaning requirements</li>
                <li>Future expansion options</li>
              </ul>
              <p className="text-justify leading-relaxed text-xs pt-1">
                Every design decision should support both operational efficiency and regulatory compliance. At Adhunik Powertech, our engineering team develops customized cleanroom layouts based on the client's production process, available space, and applicable GMP guidelines rather than using a one-size-fits-all approach.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="space-y-2 border-t pt-4">
              <h3 className="text-base font-bold text-cyan-900">3. Planning Personnel and Material Flow</h3>
              <p className="text-justify leading-relaxed">
                People and materials are among the biggest sources of contamination inside a pharmaceutical facility. Poor movement planning can increase the risk of cross-contamination and affect product quality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-cyan-50/40 border border-cyan-100 rounded-xl p-4">
                  <h4 className="font-bold text-cyan-900 text-xs mb-2">Personnel Flow</h4>
                  <p className="text-xs text-gray-700 text-justify leading-relaxed">
                    Operators, supervisors, quality personnel, and maintenance teams should follow designated entry and exit routes through gowning rooms and airlocks before entering classified production areas. A well-planned personnel flow helps maintain cleanroom integrity while supporting safe and efficient operations.
                  </p>
                </div>
                <div className="bg-cyan-50/40 border border-cyan-100 rounded-xl p-4">
                  <h4 className="font-bold text-cyan-900 text-xs mb-2">Material Flow</h4>
                  <p className="text-xs text-gray-700 text-justify leading-relaxed">
                    Raw materials, packaging components, finished products, and waste should move through separate, controlled pathways wherever possible. A typical material flow plan includes dedicated material entry points, material airlocks, pass boxes, storage/staging areas, and waste removal routes.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="space-y-2 border-t pt-4">
              <h3 className="text-base font-bold text-cyan-900">4. Pressure Cascade Planning</h3>
              <p className="text-justify leading-relaxed">
                Maintaining the correct air pressure between cleanroom areas is essential for contamination control. A pressure cascade ensures that cleaner rooms remain at a higher pressure than adjacent areas. When a door is opened, clean air flows outward, preventing contaminants from entering critical manufacturing spaces.
              </p>
              <p className="font-semibold text-xs text-gray-700">During the design stage, engineers determine:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700">
                <li>Room pressure requirements</li>
                <li>Pressure differences between adjacent rooms</li>
                <li>Airflow direction</li>
                <li>Monitoring and alarm systems</li>
              </ul>
              <p className="text-justify leading-relaxed text-xs pt-1">
                A properly designed pressure cascade supports cleanroom classification, protects pharmaceutical products, and helps maintain a stable manufacturing environment.
              </p>
            </div>

            {/* Stage 5 */}
            <div className="space-y-2 border-t pt-4">
              <h3 className="text-base font-bold text-cyan-900">5. HVAC Design – The Backbone of Every Pharmaceutical Cleanroom</h3>
              <p className="text-justify leading-relaxed">
                An efficient HVAC system is the foundation of every pharmaceutical cleanroom. It not only maintains a comfortable working environment but also controls airborne contamination, temperature, humidity, and room pressure—all of which are critical for GMP compliance.
              </p>
              <p className="font-semibold text-xs text-gray-700">A properly designed HVAC system helps:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-x-2">
                <li>Maintain the required cleanroom classification</li>
                <li>Control airborne particles and microorganisms</li>
                <li>Regulate temperature and humidity</li>
                <li>Maintain pressure differentials between rooms</li>
                <li>Provide the required Air Changes per Hour (ACH)</li>
                <li>Support consistent manufacturing conditions</li>
              </ul>
              <p className="text-justify leading-relaxed text-xs pt-1">
                The HVAC design should be based on the type of pharmaceutical product, manufacturing process, room classification, and applicable GMP guidelines. At Adhunik Powertech, every HVAC system is custom-designed to match the client's production requirements, ensuring reliable performance, energy efficiency, and long-term compliance.
              </p>
            </div>

            {/* Stage 6 */}
            <div className="space-y-2 border-t pt-4">
              <h3 className="text-base font-bold text-cyan-900">6. HEPA Filtration – The Key to Clean Air</h3>
              <p className="text-justify leading-relaxed">
                Air quality is one of the most important factors in pharmaceutical manufacturing. Even microscopic airborne particles can affect product quality and increase the risk of contamination. To maintain clean air, pharmaceutical cleanrooms use High-Efficiency Particulate Air (HEPA) filters. These filters are designed to remove 99.97% of airborne particles as small as 0.3 microns, helping maintain the required cleanliness level.
              </p>
              <p className="font-semibold text-xs text-gray-700">A typical filtration system may include:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700">
                <li>Pre-filters for larger dust particles</li>
                <li>Fine filters for intermediate filtration</li>
                <li>Terminal HEPA filters</li>
                <li>Ceiling-mounted HEPA modules</li>
              </ul>
              <p className="text-justify leading-relaxed text-xs pt-1">
                Selecting the right filtration system depends on factors such as cleanroom classification, airflow requirements, production process, and energy efficiency. Regular filter testing and preventive maintenance are equally important to ensure the system continues to perform effectively throughout its lifecycle.
              </p>
            </div>

            {/* Stage 7 */}
            <div className="space-y-2 border-t pt-4">
              <h3 className="text-base font-bold text-cyan-900">7. Modular Cleanroom Construction and Panels</h3>
              <p className="text-justify leading-relaxed">
                Modern pharmaceutical facilities increasingly prefer modular cleanroom construction because it offers flexibility, faster installation, and easier future expansion. Instead of conventional brick-and-mortar construction, modular cleanrooms are built using factory-finished panels and components that can be assembled quickly on-site.
              </p>
              <p className="font-semibold text-xs text-gray-700">A typical modular cleanroom includes:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-x-2">
                <li>Insulated wall panels</li>
                <li>Ceiling panels</li>
                <li>Flush-view windows</li>
                <li>Cleanroom doors</li>
                <li>Coving for smooth internal corners</li>
                <li>Epoxy or vinyl flooring</li>
                <li>Utility panels and service raceways</li>
              </ul>
              <p className="text-justify leading-relaxed text-xs pt-1">
                These materials are selected because they are durable, non-porous, easy to clean, and resistant to corrosion and chemical exposure. As a pharma cleanroom manufacturer, Adhunik Powertech designs and installs modular cleanroom systems that meet GMP requirements while allowing future modifications with minimal disruption to production.
              </p>
            </div>

            {/* Stage 8 */}
            <div className="space-y-2 border-t pt-4">
              <h3 className="text-base font-bold text-cyan-900">8. Airlocks and Pass Boxes – Controlling Movement Without Contamination</h3>
              <p className="text-justify leading-relaxed">
                One of the biggest challenges in pharmaceutical manufacturing is controlling the movement of people and materials between different cleanroom zones. This is achieved through airlocks and pass boxes, which help reduce contamination and maintain pressure differences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-cyan-50/40 border border-cyan-100 rounded-xl p-4">
                  <h4 className="font-bold text-cyan-900 text-xs mb-1">Airlocks</h4>
                  <p className="text-xs text-gray-700 text-justify leading-relaxed">
                    An airlock is a small enclosed area between two rooms with different cleanliness levels. Its purpose is to maintain room pressure, reduce contamination during entry and exit, control personnel/material movement, and protect critical production areas. Most airlocks use interlocked doors, allowing only one door to open at a time to preserve the pressure cascade.
                  </p>
                </div>
                <div className="bg-cyan-50/40 border border-cyan-100 rounded-xl p-4">
                  <h4 className="font-bold text-cyan-900 text-xs mb-1">Pass Boxes</h4>
                  <p className="text-xs text-gray-700 text-justify leading-relaxed">
                    A pass box allows materials to move between cleanroom areas without requiring personnel to enter another room. Depending on the application, facilities may use static pass boxes, dynamic pass boxes with HEPA filtration, or UV pass boxes for surface disinfection.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 9 */}
            <div className="space-y-2 border-t pt-4">
              <h3 className="text-base font-bold text-cyan-900">9. Cleanroom Construction and Installation</h3>
              <p className="text-justify leading-relaxed">
                Once the design is approved, the project moves into the construction phase. A professional pharmaceutical cleanroom contractor follows a systematic installation process to ensure every component is installed according to approved drawings and GMP requirements.
              </p>
              <p className="font-semibold text-xs text-gray-700">The construction stage typically includes:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-x-2">
                <li>Structural framework installation</li>
                <li>Modular wall and ceiling panel installation</li>
                <li>HVAC ducting and air distribution</li>
                <li>Electrical and lighting systems</li>
                <li>HEPA filter installation</li>
                <li>Cleanroom doors and windows</li>
                <li>Flooring systems</li>
                <li>Airlocks and pass boxes</li>
                <li>Utility connections and control systems</li>
              </ul>
              <p className="text-justify leading-relaxed text-xs pt-1">
                Throughout construction, regular quality inspections are carried out to verify workmanship, airtight sealing, alignment, and compliance with project specifications. This structured approach helps avoid costly modifications during the later stages of the project.
              </p>
            </div>

            {/* Stage 10 */}
            <div className="space-y-2 border-t pt-4">
              <h3 className="text-base font-bold text-cyan-900">10. HVAC Commissioning – Ensuring the System Works as Designed</h3>
              <p className="text-justify leading-relaxed">
                Before the cleanroom is handed over, the HVAC system must be thoroughly tested to confirm it performs according to the approved design. This stage is known as HVAC commissioning.
              </p>
              <p className="font-semibold text-xs text-gray-700">During commissioning, engineers verify:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-x-2">
                <li>Airflow balance</li>
                <li>Air Changes per Hour (ACH)</li>
                <li>Room pressure differentials</li>
                <li>Temperature and humidity levels</li>
                <li>Control system performance</li>
                <li>Equipment operation</li>
                <li>Alarm and monitoring systems</li>
              </ul>
              <p className="text-justify leading-relaxed text-xs pt-1">
                If any deviations are identified, adjustments are made before moving to the validation stage. Proper commissioning ensures the cleanroom is ready for testing and routine pharmaceutical operations.
              </p>
            </div>

            {/* Stage 11 */}
            <div className="space-y-2 border-t pt-4">
              <h3 className="text-base font-bold text-cyan-900">11. Cleanroom Testing, Validation and Documentation</h3>
              <p className="text-justify leading-relaxed">
                Construction alone does not guarantee GMP compliance. The cleanroom must also be tested and validated to demonstrate that it performs consistently under operating conditions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <p className="font-semibold text-xs text-cyan-900 mb-1">Validation Activities Include:</p>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-gray-700">
                    <li>HEPA filter integrity testing</li>
                    <li>Airflow visualization (smoke studies)</li>
                    <li>Air velocity measurements</li>
                    <li>Airborne particle count testing</li>
                    <li>Pressure differential testing</li>
                    <li>Temperature and humidity mapping</li>
                    <li>Recovery time testing</li>
                    <li>Noise and lighting measurements</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <p className="font-semibold text-xs text-cyan-900 mb-1">Documentation Package Includes:</p>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-gray-700">
                    <li>User Requirement Specification (URS)</li>
                    <li>Design Qualification (DQ)</li>
                    <li>Installation Qualification (IQ)</li>
                    <li>Operational Qualification (OQ)</li>
                    <li>Performance Qualification (PQ)</li>
                    <li>HVAC design calculations & Validation reports</li>
                    <li>Equipment manuals & SOPs</li>
                    <li>As-built drawings</li>
                  </ul>
                </div>
              </div>
              <p className="text-justify leading-relaxed text-xs pt-1">
                Complete documentation provides evidence that the pharmaceutical cleanroom has been designed, installed, tested, and validated in accordance with GMP guidelines and industry best practices. For pharmaceutical manufacturers, this documentation is essential during audits by regulatory authorities or other agencies.
              </p>
            </div>
          </section>

          {/* Key Summary Quote */}
          <div className="bg-cyan-900 text-white p-6 rounded-xl shadow-sm text-sm text-center">
            <p className="leading-relaxed">
              A successful pharmaceutical cleanroom project is not defined by construction alone. It is the result of careful planning, precision engineering, reliable HVAC performance, effective contamination control, thorough validation, and complete documentation. When these elements are managed by an experienced turnkey partner, pharmaceutical manufacturers can focus on what matters most—producing safe, high-quality products with confidence.
            </p>
          </div>


         {/* Why Choose Adhunik Powertech */}
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 text-sm space-y-4">
            <h2 className="text-xl font-bold text-cyan-800">Why Adhunik Powertech for Pharmaceutical Cleanrooms?</h2>
            <p className="text-justify leading-relaxed">
              Choosing the right cleanroom contractor means partnering with experts who understand pharmaceutical manufacturing, GMP compliance, and contamination control. As a trusted Modular Clean Room Manufacturer in Uttarakhand and a leading Clean Room Manufacturer in Haridwar and Roorkee, We delivers turnkey cleanroom solutions designed for performance, regulatory compliance, and long-term reliability.
            </p>
            <p className="text-justify leading-relaxed">
              From industrial turnkey HVAC solutions to modular cleanrooms for pharmaceutical manufacturing plants, including facilities across Haridwar, we help pharmaceutical, biotechnology, healthcare, and research organizations build efficient, contamination-controlled environments that meet global quality standards.
            </p>

            <div className="pt-2 pb-2">
              <a 
                href="https://www.adhunikpowertech.com/turnkey-cleanroom-solutions" 
                className="inline-block bg-cyan-800 hover:bg-cyan-900 text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                Explore Our Solutions
              </a>
            </div>

            <p className="text-justify leading-relaxed text-xs">
              By managing every stage of the project under one roof, we help clients reduce project complexity, improve coordination, and achieve faster project completion.
            </p>
          </section>

          

          <section className="max-w-7xl mx-auto py-8 px-4">
      {/* 2-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: FAQs (Takes 7 columns on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

            {/* Accordion List */}
            <div className="space-y-3">
              {faqData.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className="bg-gray-50 border border-gray-100 rounded-lg overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 font-semibold text-gray-800 text-sm flex justify-between items-center hover:bg-gray-100/60 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <span className="text-gray-500 flex-shrink-0 ml-2">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Optional Bottom Button to match reference layout */}
          <div className="pt-2">
            <Link 
              href="https://www.adhunikpowertech.com/hvac" 
              className="inline-block bg-cyan-800 hover:bg-cyan-900 text-white font-medium text-xs py-2.5 px-5 rounded-md transition duration-200 shadow-sm"
            >
              Know more About Us
            </Link>
          </div>
        </div>

        {/* Right Side: Call To Action Card (Takes 5 columns on desktop) */}
        <div className="lg:col-span-5 flex">
          <div className="bg-[#124b5f] text-white p-8 md:p-10 rounded-2xl flex flex-col justify-center items-center text-center space-y-6 shadow-md w-full">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Ready to take the next step?
            </h2>
            <p className="text-xs text-cyan-100 leading-relaxed max-w-md">
              Whether you're planning a new pharmaceutical facility or upgrading an existing one, investing in the right cleanroom solution today will help ensure safer manufacturing, regulatory compliance, and long-term operational efficiency.        
              </p>
            <div className="pt-2">
              <Link 
                href="/support-form" 
                className="inline-block bg-white text-[#124b5f] font-bold text-sm py-3 px-8 rounded-lg hover:bg-cyan-50 transition duration-300 shadow-sm"
              >
                Request a Free Consultation
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
     {/* Conclusion 
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 text-sm space-y-4">
            <h2 className="text-xl font-bold text-cyan-800">Conclusion</h2>
            <p className="text-justify leading-relaxed">
              Building a pharmaceutical cleanroom is a significant investment that directly impacts product quality, regulatory compliance, and operational efficiency. Success depends on careful planning, experienced engineering, and a well-coordinated execution strategy.
            </p>
            <p className="text-justify leading-relaxed">
              Working with a trusted cleanroom contractor helps ensure that every stage of the project—from the initial site survey and HVAC design to cleanroom construction, validation, and documentation—is completed according to industry best practices.
            </p>
            <p className="text-justify leading-relaxed">
              Whether you're planning a new pharmaceutical manufacturing plant, expanding production capacity, or upgrading an existing facility, our team can help you develop a cleanroom solution tailored to your operational and regulatory requirements.
            </p>
          </section>*/}
        </div>
      </div>
    </div>
  );
}