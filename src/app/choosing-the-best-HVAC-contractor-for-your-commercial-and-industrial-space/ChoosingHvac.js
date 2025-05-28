"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  ShieldCheck,
  GaugeCircle,
  Thermometer,
  Clock,
  BadgeDollarSign,
  Hammer,
  Boxes,
  FileCheck2,
  Ruler,
  AlertTriangle,
  Trash2
} from "lucide-react";

import {
  ScanSearch,
  Users2,
  ThermometerSun,
  Wrench,
  SlidersHorizontal,
  BarChart3,

  Wind,
  LayoutTemplate,
  Plug,
  Cpu
} from "lucide-react";

import {
  CalendarCheck2,

  Radar,
  Repeat2,
  LineChart,
  ThumbsDown,

  ShieldX,

  ClipboardCheck,
  Building2
} from "lucide-react";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


import { PhoneCall, AlarmClockCheck, MapPin, PackageCheck } from 'lucide-react';

import { RefreshCw, } from 'lucide-react';


export default function ChoosingHvac() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const energySystems = [
    {
      title: 'Variable Refrigerant Flow (VRF) Systems',
      desc: 'Highly efficient for zones with varying heating/cooling needs.',
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },
    {
      title: 'Geothermal HVAC',
      desc: 'Leverages ground temperature for significant energy savings in suitable locations.',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    },
    {
      title: 'High-Efficiency Chillers & Boilers',
      desc: 'Optimized for your specific load requirements.',
      icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
    },
    {
      title: 'Advanced Building Management Systems (BMS) / HVAC Controls',
      desc: 'Smart systems that automate and optimize HVAC operation based on occupancy, weather, and operational schedules',
      icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
    },
    {
      title: 'Heat Recovery Ventilation (HRV) / Energy Recovery Ventilation (ERV) Systems',
      desc: 'Reclaiming energy from exhaust air to temper incoming fresh air.',
      icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6'
    },
    {
      title: 'Dedicated Outside Air Systems (DOAS)',
      desc: 'Separating ventilation from space conditioning for better efficiency and indoor air quality.',
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
    }
  ];


  const ClientReferences = [
    {
      description: "The contractor's responsiveness and professionalism.",
    },
    {
      description: "Their ability to meet deadlines and stay within budget."
    },
    {
      description: "The quality and longevity of their work."
    },
    {
      description: "Their handling of unexpected issues or emergencies."
    },
    {
      description: "Their understanding of operational impact during work."
    },
  ];

  const warrantyTypes = [
    {
      title: "Manufacturer Equipment Warranties",
      description:
        "These cover the major components (compressors, heat exchangers, motors) and often vary in length (e.g., 5, 10, or even 15 years) and coverage based on the specific equipment. Some manufacturers offer extended warranties or performance guarantees for critical components.",
    },
    {
      title: "Contractor Workmanship Warranties",
      description:
        "These cover the labor and installation quality provided by the contractor. The duration can range from 1 to 5 years, but for complex commercial installations, aim for a longer period. This warranty is vital as proper installation is key to system longevity and efficiency.",
    },
    {
      title: "Parts Replacement Warranties",
      description:
        "Beyond major components, inquire about warranties for smaller, frequently replaced parts that can impact uptime.",
    },
  ];

  const warrantyDocumentation = [
    {
      title: "Coverage Scope",
      description:
        "Clearly delineate what is covered (parts, labor, specific components) and what is excluded (e.g., routine maintenance, acts of God, damage from improper operation by facility staff).",
    },
    {
      title: "Duration",
      description:
        "Note the start and end dates for all warranty types.",
    },
    {
      title: "Transferability",
      description:
        "If you plan to sell the property, can the warranty be transferred to the new owner?",
    },
    {
      title: "Claim Process",
      description:
        "Understand the exact procedure for making a warranty claim, including required documentation, response times, and authorized service providers.",
    },
    {
      title: "Maintenance Requirements",
      description:
        "Many warranties are contingent on adhering to a strict schedule of preventative maintenance performed by qualified technicians. Failure to do so can void your warranty.",
    },
  ];




  const KeyTakeaways = [
    {
      description: "Always verify the HVAC contractor possesses the necessary commercial/industrial licenses, certifications, and comprehensive insurance.",
    },
    {
      description: "Prioritize contractors with a proven track record, extensive experience, and a strong reputation in the industrial/commercial sector."
    },
    {
      description: "Ensure they demonstrate deep expertise in energy efficiency and can implement tailored, eco-friendly solutions for large-scale operations."
    },
    {
      description: "Thoroughly review warranties, service agreements, and performance guarantees to safeguard your substantial investment."
    },
    {
      description: "Obtain multiple, detailed proposals, focusing on overall value, long-term operational costs, and the scope of services, not just the lowest bid."
    }
  ];

  const Understanding = [
    {
      title: "ASHRAE 90.1",
      description: "A widely adopted standard for energy efficiency in commercial buildings.",
    },

    {
      title: " Local and State Energy Codes",
      description: " Specific regulations that dictate minimum efficiency requirements for new installations and retrofits.",
    },
    {
      title: "Utility Rebate Programs",
      description: "Opportunities for your business to receive financial incentives for installing high-efficiency equipment."
    },
    {
      title: "Carbon Emission Reduction Targets",
      description: "For businesses committed to sustainability, the contractor should understand how to contribute to these goals."
    }

  ];

  const performanceGuarantees = [
    {
      title: "Energy Consumption Guarantees",
      description:
        "A promise that the new system will achieve a certain level of energy savings or consumption, with penalties if not met.",
      icon: GaugeCircle,
    },
    {
      title: "Temperature or Humidity Guarantees",
      description:
        "Ensuring the system can maintain specified environmental conditions within your facility.",
      icon: Thermometer,
    },
    {
      title: "Uptime Guarantees",
      description:
        "Particularly for mission-critical systems, a contractor might guarantee a certain percentage of operational uptime, with compensation for failures.",
      icon: Clock,
    },
  ];

  const pricingBreakdown = [
    {
      title: "Equipment Costs",
      description:
        "Itemized list of all major components (chillers, boilers, air handling units, controls, etc.) and their specific models/specifications.",
      icon: Boxes,
    },
    {
      title: "Labor Costs",
      description:
        "Broken down by type of labor (e.g., skilled technicians, sheet metal workers, electricians) and estimated hours.",
      icon: Hammer,
    },
    {
      title: "Materials and Consumables",
      description:
        "Detailed list of piping, insulation, ductwork, wiring, refrigerants, etc.",
      icon: Ruler,
    },
    {
      title: "Permit Fees and Inspection Costs",
      description: "All necessary regulatory fees.",
      icon: FileCheck2,
    },
    {
      title: "Engineering and Design Fees",
      description:
        "For complex installations, this might include detailed load calculations, system design, and blueprint creation.",
      icon: ShieldCheck,
    },
    {
      title: "Contingency Fees",
      description:
        "A reasonable contingency (e.g., 5-10%) for unforeseen issues, clearly outlined.",
      icon: AlertTriangle,
    },
    {
      title: "Disposal/Recycling Costs",
      description: "For old equipment, especially refrigerants.",
      icon: Trash2,
    },
  ];


  const servicePackages = [
    {
      title: "Preventative Maintenance Contracts",
      description:
        " Essential for maximizing system lifespan and efficiency. These should include regular inspections, cleaning, filter changes, lubrication, and system diagnostics. They may offer tiered levels (e.g., quarterly, semi-annual, annual)",
      icon: CalendarCheck2,
    },
    {
      title: "Emergency Service Contracts",
      description:
        "Crucial for minimizing downtime. Ask about guaranteed response times (e.g., within 2-4 hours for critical failures), 24/7 availability, and whether emergency labor rates are included or discounted.",
      icon: AlertTriangle,
    },
    {
      title: "Predictive Maintenance (PdM) / Condition-Based Monitoring",
      description:
        "Utilizing sensors and data analytics to anticipate failures before they occur, allowing for proactive maintenance and reducing unplanned downtime. This is particularly valuable for mission-critical systems.",
      icon: Radar,
    },
    {
      title: "Retro-Commissioning Services",
      description:
        "Optimizing existing systems to improve performance and energy efficiency without major equipment replacement.",
      icon: Repeat2,
    },
    {
      title: "HVAC System Audits and Optimization Plans",
      description:
        "Regular assessments to identify opportunities for efficiency improvements and cost reductions.",
      icon: LineChart,
    },
  ];

  const redFlags = [
    {
      title: "Substandard Equipment",
      description:
        "Use of cheaper, less efficient, or lower durability components.",
      icon: ThumbsDown,
    },
    {
      title: "Inadequate Labor",
      description:
        "Employing less experienced technicians or insufficient staffing for the project timeline.",
      icon: Hammer,
    },
    {
      title: "Missing Scope",
      description:
        "Omitting crucial aspects of the project (e.g., permits, complex ductwork, specialized controls) that will later be added as costly change orders.",
      icon: ClipboardCheck,
    },
    {
      title: "Lack of Insurance/Bonding",
      description:
        "Operating without adequate protection for your business.",
      icon: ShieldX,
    },
  ];

  const evaluationChecklist = [
    {
      title: "Assess Building Envelope",
      description:
        "Analyze insulation R-values, window types, roof construction, and potential air infiltration points.",
      icon: ScanSearch,
    },
    {
      title: "Understand Occupancy and Usage",
      description:
        "Determine varying occupancy loads, operational hours, and specific temperature/humidity requirements for different zones (e.g., offices, manufacturing floors, server rooms, cold storage).",
      icon: Users2,
    },
    {
      title: "Evaluate Internal Heat Loads",
      description:
        "Account for heat generated by machinery, lighting, computers, and processes, which can be substantial in commercial and industrial settings.",
      icon: ThermometerSun,
    },
    {
      title: "Inspect Existing HVAC Infrastructure",
      description:
        "Thoroughly examine current equipment, ductwork (for leaks, blockages, proper sizing), piping, controls, and electrical infrastructure.",
      icon: Wrench,
    },
    {
      title: "Review Process Requirements",
      description:
        "For industrial facilities, understand specific process cooling, ventilation, dust collection, or air purification needs.",
      icon: SlidersHorizontal,
    },
    {
      title: "Discuss Business Objectives",
      description:
        "Engage with facility managers and business leaders to understand critical uptime needs, energy efficiency goals, budget constraints, and future expansion plans.",
      icon: BarChart3,
    },
    {
      title: "Analyze Historical Energy Data",
      description:
        "Request past utility bills to identify consumption patterns and potential areas for savings.",
      icon: Ruler,
    },
  ];

  const designChecklist = [
    {
      title: "Undersized Systems",
      description:
        "Will struggle to maintain desired temperatures, leading to occupant discomfort, equipment overheating, and excessive energy consumption as they run continuously.",
      icon: Wind,
    },
    {
      title: "Oversized Systems",
      description:
        "Will short-cycle frequently, leading to poor humidity control, uneven temperatures, premature wear and tear on components, and wasted energy.",
      icon: LayoutTemplate,
    },
    {
      title: "Detailed Load Calculations",
      description:
        "Using industry-standard methodologies (e.g., ASHRAE Manual J or T for commercial applications, or specialized industrial calculations) to precisely determine the required capacity for your specific facility.They should consider latent and sensible heat loads, ventilation requirements, and process demands. This leads to a custom-designed system that operates efficiently and reliably.",
      icon: Ruler,
    },
  ];

  const systemAssessment = [
    {
      title: "Ductwork Integrity and Design",
      description:
        "Look for leaks, obstructions, proper sizing for airflow, insulation levels, and zoning capabilities. Inadequate ductwork can severely compromise even the most efficient HVAC unit.",
      icon: Wind,
    },
    {
      title: "Piping Systems",
      description:
        "For hydronic systems (chillers, boilers), inspect pipe sizing, insulation, valve functionality, and pump efficiency.",
      icon: Plug,
    },
    {
      title: "Building Automation System (BAS) Integration",
      description:
        "How will the new HVAC system integrate with existing building controls? A well-integrated system offers superior control, monitoring, and energy management.",
      icon: Cpu,
    },
    {
      title: "Electrical and Structural Considerations",
      description:
        "Ensure your facility's electrical supply can handle new equipment and that structural elements can support new installations.",
      icon: Building2,
    },
  ];

  const benefits = [
    {
      icon: <ShieldCheck className="text-cyan-600 w-12 h-12" />,
      title: "Maximized Uptime",
      description:
        "Reduces the likelihood of unexpected breakdowns, which can halt production, damage sensitive equipment, or compromise environmental conditions."
    },
    {
      icon: <RefreshCw className="text-cyan-600 w-12 h-12" />,
      title: "Optimized Energy Efficiency",
      description:
        "Regular tune-ups, cleaning, and calibration ensure components operate at their intended efficiency, leading to significant energy cost savings."
    },
    {
      icon: <Clock className="text-cyan-600 w-12 h-12" />,
      title: "Extended Equipment Lifespan",
      description:
        "Proactive identification and resolution of minor issues prevent them from escalating into major, costly repairs, thereby prolonging the life of expensive equipment."
    },
    {
      icon: <ShieldCheck className="text-cyan-600 w-12 h-12" />,
      title: "Compliance and Safety",
      description:
        "Ensures systems meet regulatory standards for indoor air quality, safety, and environmental impact."
    },
    {
      icon: <CalendarCheck2 className="text-cyan-600 w-12 h-12" />,
      title: "Preserved Warranties",
      description:
        "Most manufacturer warranties for commercial equipment mandate regular professional maintenance."
    }
  ];

  const maintenancePlans = [
    {
      title: "Basic Inspection/Tune-up Plans",
      description:
        "Annual or semi-annual checks, filter changes, coil cleaning, and basic operational checks."
    },
    {
      title: "Comprehensive PM Contracts",
      description:
        "Include all basic services plus more in-depth diagnostics, specific component checks, lubrication, belt replacements, and potential discounts on parts and labor for covered repairs."
    },
    {
      title: "Full-Service Contracts",
      description:
        "The most inclusive, often covering all parts and labor for repairs (excluding major equipment replacement), with prioritized service. This offers the highest level of budget predictability."
    },
    {
      title: "Predictive Maintenance (PdM) Plans",
      description:
        "Utilizing advanced technologies like vibration analysis, thermography, and oil analysis to monitor equipment health and predict failures, allowing for maintenance to be scheduled proactively before a breakdown occurs."
    },
    {
      title: "Seasonal Commissioning",
      description:
        "Optimizing systems specifically for heating or cooling seasons to ensure peak performance."
    }
  ];

  const supportItems = [
    {
      icon: <PhoneCall className="text-cyan-600 w-14 h-14" />,
      title: "24/7/365 Availability",
      description:
        "Do they offer round-the-clock emergency service, including holidays?"
    },
    {
      icon: <AlarmClockCheck className="text-cyan-600 w-14 h-14" />,
      title: "Guaranteed Response Times",
      description:
        "What is their promised response time for critical failures (e.g., within 2-4 hours)? Are these legally binding in the contract?"
    },
    {
      icon: <PhoneCall className="text-cyan-600 w-14 h-14" />,
      title: "Dedicated Emergency Line/Dispatch",
      description:
        "Do they have a clear, easy-to-access system for emergency calls?"
    },
    {
      icon: <MapPin className="text-cyan-600 w-14 h-14" />,
      title: "Geographic Coverage",
      description:
        "Ensure their emergency service extends to your facility's location."
    },
    {
      icon: <AlertTriangle className="text-cyan-600 w-14 h-14" />,
      title: "After-Hours Rates",
      description:
        "Understand any premium charges for emergency or after-hours service."
    },
    {
      icon: <PackageCheck className="text-cyan-600 w-14 h-14" />,
      title: "Parts Availability",
      description:
        "Do they stock common commercial/industrial parts or have rapid access to suppliers to minimize downtime?"
    }
  ];


  const faqItems = [
    {
      question:
        "Why is it important to hire a licensed HVAC contractor with commercial specialization?",
      answer:
        "Hiring a contractor with commercial-specific licenses ensures they possess the necessary expertise for complex systems, adhere to stringent building codes, and carry appropriate insurance, protecting your business from operational and legal risks."
    },
    {
      question:
        "How can I verify a commercial HVAC contractor's experience and reputation?",
      answer:
        "Request detailed client references from similar commercial projects, ask for case studies, and inquire about their safety record (e.g., EMR). While online reviews are helpful, direct commercial client feedback is more valuable."
    },
    {
      question:
        "Why are energy efficiency services crucial for commercial spaces?",
      answer:
        "Energy efficiency services for commercial HVAC systems can lead to significant reductions in operational costs, lower carbon emissions, and improved compliance with environmental regulations, directly impacting your business's profitability and sustainability."
    },
    {
      question:
        "What specific types of warranties and guarantees should I inquire about for commercial HVAC?",
      answer:
        "Ask about comprehensive manufacturer equipment warranties, detailed contractor workmanship warranties, and, most importantly, Service Level Agreements (SLAs) that outline guaranteed response times and potential performance guarantees for system uptime and energy consumption."
    },
    {
      question:
        "How do commercial maintenance plans benefit businesses?",
      answer:
        "Regular, tailored maintenance plans for commercial HVAC systems prevent costly breakdowns, extend equipment lifespan, optimize energy efficiency, ensure compliance, and provide budget predictability, minimizing operational disruptions and maximizing ROI."
    }
  ];

const items = [
  {
    title: "Load Calculations",
    description:
      "Precise determination of heating and cooling loads based on building envelope, occupancy, equipment, and processes.",
  },
  {
    title: "Blower Door Tests (for smaller commercial spaces) / Thermal Imaging",
    description: "Identifying air leakage and insulation deficiencies.",
  },
  {
    title: "Ductwork Integrity Testing",
    description: "Assessing leaks and blockages in large-scale duct systems.",
  },
  {
    title: "System Performance Baselines",
    description: "Establishing current energy usage and identifying areas for improvement.",
  },
];
  return (
    <>

      <div className="bg-gradient-to-b mt-24 from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className=" w-full md:w-6/12">

              <Image
                src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1748256475/hvac2_v4rz2t.webp"
                alt="Commercial HVAC System"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl shadow-xl border-4 border-cyan-100"
                priority
              />

            </div>


            <div className=" w-full md:w-6/12">
              <h1 className=" text-2xl text-center md:text-left md:text-3xl font-bold text-cyan-800 mb-6 leading-tight">
                Choosing the Best HVAC Contractor for Your Commercial and Industrial Space
              </h1>
              <p className="text-md text-gray-700 mb-6 text-justify md:text-left ">
                Finding the right HVAC contractor for your industrial or commercial space can be a monumental task. With the sheer scale and complexity of these systems, it's crucial to know what to look for to ensure optimal performance, energy efficiency, and operational continuity.
              </p>
              <div className="bg-cyan-100 border-l-4 border-cyan-500 p-4 rounded-r-lg">
                <p className="text-cyan-800 font-medium text-justify md:text-left">
                  A top-tier contractor will not only maintain a comfortable environment but also help you manage energy costs, comply with regulations, and prolong the lifespan of your critical HVAC infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="mb-16 bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100">
            <h2 className=" text-2xl md:text-3xl font-bold text-cyan-800 mb-6 pb-2 border-b-2 border-cyan-200">
              <span className="bg-cyan-600 text-white px-2 py-1 rounded-md">Key Takeaways</span>
            </h2>
            <ul className="space-y-4">
              {KeyTakeaways.map((item, index) => (
                <li key={index} className="flex items-start ">
                  <span className="flex-shrink-0 bg-cyan-100 text-cyan-800 rounded-full p-2 mr-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">{item.description}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Licensing Section */}
            <section className="bg-white p-3 md:p-8 rounded-xl shadow-md">
              <div className="  md:text-3xl font-bold text-cyan-800 mb-6 flex items-center">
                <span className="bg-cyan-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                <h2  > Verify Licensing and Certifications</h2>
              </div>

              <div className="mb-8">
                <h3 className="md:text-2xl font-semibold text-cyan-700 mb-4  text-center md:text-left" >Importance of Licensing</h3>
                <p className="text-gray-700 leading-relaxed text-justify md:text-left" >
                  For industrial and commercial HVAC systems, licensing goes far beyond typical residential requirements. It's a critical indicator that the contractor possesses specialized knowledge of complex equipment, large-scale air distribution, advanced control systems, and adherence to stringent commercial building codes and safety regulations.
                </p>
                <div className="bg-cyan-50 p-4 rounded-lg mt-4 border border-cyan-200">
                  <p className="text-cyan-800 font-medium text-center md:text-left">
                    Hiring an unlicensed contractor for a commercial project exposes your business to significant risks, including non-compliance fines, invalidated insurance, and potentially dangerous system failures. A properly licensed contractor ensures they have met rigorous industry standards and are legally authorized to handle the intricacies of commercial and industrial HVAC.

                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="md:text-2xl font-semibold text-cyan-700 mb-4 text-center md:text-left">How to Check Certifications</h2>
                <p className="text-gray-700 leading-relaxed text-justify md:text-left">
                  To verify legitimacy, always request the contractor's commercial/industrial license number. Cross-reference this with your state's licensing board or relevant regulatory bodies. Look for specific commercial HVAC certifications, such as those from NATE (North American Technician Excellence) with commercial endorsements, ASHRAE (American Society of Heating, Refrigerating and Air-Conditioning Engineers), or LEED (Leadership in Energy and Environmental Design) for sustainable building practices. For contractors handling critical industrial systems, specialized certifications for chillers, boilers, or specific industrial ventilation are paramount. Don't hesitate to request proof of these credentials; a reputable contractor will readily provide them.

                </p>
              </div>

              <div className="mb-8">
                <h3 className="md:text-2xl font-semibold text-cyan-700 mb-4 text-center md:text-left">State and Local Regulatory Requirements</h3>
                <p className="text-gray-700 leading-relaxed text-justify md:text-left">
                  HVAC regulations for commercial and industrial facilities are highly complex and vary significantly by jurisdiction. These can include specific mandates for indoor air quality, ventilation rates, refrigerant handling, fire safety integration, and energy performance. A proficient local contractor will be intimately familiar with all applicable state, city, and county codes, and will ensure all necessary permits are secured. Failure to comply can lead to costly delays, operational shutdowns, and severe penalties. Verify their understanding of these requirements and their process for obtaining permits.
                </p>
                <div className="mt-4 p-4 bg-cyan-100 rounded-lg">
                  <p className="text-cyan-800 font-medium text-center md:text-left">
                    Ensuring your HVAC contractor is properly licensed and certified for commercial and industrial applications is non-negotiable. It's the primary way to protect your business, ensure compliance, maintain operational integrity, and guarantee the job is executed safely and to the highest professional standards.

                  </p>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="bg-white md:p-8 p-3 rounded-xl shadow-md">
              <div className="    md:text-3xl font-bold text-cyan-800 mb-6 flex items-center">
                <span className="bg-cyan-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <h2> Evaluate Experience and Reputation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6  text-justify md:text-left">
                For industrial and commercial HVAC, a contractor's experience and reputation are paramount. The stakes are much higher than in residential settings; system failures can lead to significant operational disruptions, lost revenue, and safety hazards. You need a partner with a deep understanding of the unique demands of commercial and industrial environments.

              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-cyan-50 p-6 rounded-lg    border border-cyan-200">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-3  text-center md:text-left">Years in Business and Commercial Specialization</h3>
                  <p className="text-gray-700  text-center md:text-left">
                    In the commercial and industrial HVAC realm, longevity speaks volumes. A company that has thrived for many years demonstrates stability, reliability, and an enduring commitment to the sector. Crucially, verify their specialization in commercial and industrial projects, not just residential work.
                  </p>
                </div>

                <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-3 text-center md:text-left">Industry Recognition and Safety Records</h3>
                  <p className="text-gray-700 text-center md:text-left">
                    They should have a track record of successfully managing projects of similar scale and complexity to yours, from large office buildings and retail centers to data centers, manufacturing plants, or cold storage facilities. Experience with diverse system types (e.g., VRF, chillers, cooling towers, industrial ventilation, process cooling) is also a strong indicator of capability.

                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="md:text-2xl font-semibold text-cyan-700 mb-4 text-center md:text-left">Client References and Case Studies</h3>
                <p className="text-gray-700 mb-4 text-center md:text-left">
                  While online reviews are a good starting point, for commercial projects, direct client references are invaluable. Request a list of commercial clients with similar HVAC needs whom they have served. Contact these references to inquire about:
                </p>

                <div className="bg-white border border-cyan-200 rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-medium text-cyan-700 mb-3">What to Ask References:</h4>
                  <ul className="space-y-3">
                    {ClientReferences.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-cyan-600 mr-2">•</span>
                        <span className="text-gray-700">{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-700 mt-6 text-center md:text-left">
                  Additionally, ask for case studies of past projects. These can provide detailed insights into their problem-solving approach, technical capabilities, and the tangible results they've delivered for other businesses.
                </p>

              </div>
            </section>



            <section className="bg-white md:p-8 p-3 rounded-xl shadow-md">
              <div className=" md:text-3xl font-bold text-cyan-800 mb-6 flex items-center">
                <span className="bg-cyan-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <h2>Industry Recognition and Safety Records</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6  text-justify md:text-left">
                Look for industry recognition such as awards for excellence, specialized certifications (e.g., for specific equipment manufacturers), or memberships in professional organizations like ASHRAE, ACCA (Air Conditioning Contractors of America), or local business associations. Furthermore, a stellar safety record is critical for commercial and industrial contractors. Inquire about their safety protocols, training programs, and EMR (Experience Modification Rate), which indicates their workplace safety performance. A low EMR is a strong sign of a contractor who prioritizes safety on job sites, minimizing risks to your personnel and property.

              </p>

              <p className="text-gray-700 leading-relaxed mb-6 text-justify md:text-left">
                Choosing an HVAC contractor for your business is a strategic decision. Companies like Adhunik Powertech Private Limited, with a strong background in large-scale infrastructure and power solutions, would be a strong candidate in this area, demonstrating the kind of extensive experience, robust reputation, and technical depth essential for complex industrial and commercial HVAC projects. Their commitment to delivering tangible impact aligns with the need for a contractor who can truly optimize your operational efficiency.

              </p>





            </section>


            <section className="bg-white md:p-8 p-3 rounded-xl shadow-md">
              <div className="  md:text-3xl font-bold text-cyan-800 mb-6 flex items-center">
                <span className="bg-cyan-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>

                <h2>
                  Assess Energy Efficiency Expertise

                </h2>

              </div>

              <p className="text-gray-700 leading-relaxed mb-6  text-justify md:text-left">
                In 2025, energy costs are a major operational expenditure for industrial and commercial entities. Therefore, selecting an HVAC contractor with deep expertise in energy efficiency is not just a preference, but a strategic imperative. You need a partner who can optimize your systems to reduce your carbon footprint and, more importantly, deliver significant savings on your utility bills.
              </p>

            </section>



            <section className="mb-16 bg-white md:p-8 p-3 rounded-xl shadow-md border border-cyan-100">
              <div className="text-3xl font-bold text-cyan-800 mb-6 pb-2 border-b-2 border-cyan-200">
                <span className="bg-cyan-600 text-white px-2 py-1 rounded-md  text-sm  md:text-3xl">Understanding Commercial Energy Standards and Regulations
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-justify  md:text-left">
                The contractor must be thoroughly versed in the latest commercial energy standards, regulations, and incentive programs. This includes understanding metrics like EER (Energy Efficiency Ratio) and IPLV (Integrated Part Load Value) for commercial cooling systems, and efficiency standards for boilers, furnaces, and industrial process heating. They should be knowledgeable about:

              </p>
              <ul className="space-y-4 list-disc  ps-4 ">
                {Understanding.map((item, index) => (

                  <li key={index} className=" items-start   font-sans">
                    <span className=' font-bold pr-2'>{item.title} : </span> {item.description}
                  </li>


                ))}
              </ul>

              <p className="text-gray-700 leading-relaxed py-6 text-justify  md:text-left">
                A contractor who can articulate how these standards apply to your facility and how they can leverage them for your benefit is invaluable.

              </p>
            </section>


            <section className="bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100 mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <h2 className="md:text-3xl font-bold text-cyan-800">Assess Energy Efficiency Expertise</h2>

              </div>

              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-lg mb-8">
                <p className="text-cyan-800 font-medium md:text-lg">
                  In 2025, energy costs are a major operational expenditure for industrial and commercial entities. Selecting an HVAC contractor with deep expertise in energy efficiency is not just a preference, but a <span className="font-bold">strategic imperative</span> for reducing both carbon footprint and utility bills.
                </p>
              </div>






              <div className="bg-gradient-to-br from-cyan-50 to-white p-4 md:p-6 rounded-xl border border-cyan-200 shadow-sm mb-8">
                <div className="flex items-center mb-8">
                  <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                    <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>

                  <h2 className="md:text-3xl font-bold text-cyan-800">Understanding Commercial Energy Standards</h2>

                </div>


                <ul className="space-y-3 text-gray-700 list-disc  ps-3">
                  <li><strong>ASHRAE 90.1:</strong> Standard for energy efficiency in commercial buildings.</li>
                  <li><strong>Local and State Energy Codes:</strong> Minimum efficiency requirements for HVAC systems.</li>
                  <li><strong>Utility Rebate Programs:</strong> Financial incentives for high-efficiency equipment.</li>
                  <li><strong>Carbon Emission Reduction Targets:</strong> Align systems to meet sustainability goals.</li>
                </ul>
              </div>


              <div className="mb-12">
                <h3 className="md:text-2xl text-center md:text-left font-semibold text-cyan-700 mb-4">Recommendations for Optimized Energy-Saving Systems</h3>
                <p className="text-gray-700 mb-6 text-center md:text-left">
                  A truly expert contractor won't just replace like-for-like. They will conduct a thorough analysis of your facility's energy consumption patterns and propose tailored, energy-saving solutions. This might include:

                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {energySystems.map((system, index) => (


                    <div key={index} className="bg-white flex flex-col   justify-center  md:items-start items-center  md:text-left text-center p-5 rounded-lg border border-cyan-100 hover:border-cyan-300 transition-all shadow-sm hover:shadow-md">
                      <div className="bg-cyan-100 w-12 h-12 rounded-full flex  items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={system.icon} />
                        </svg>
                      </div>
                      <h4 className="font-bold text-cyan-700 text-lg mb-2">{system.title}</h4>
                      <p className="text-gray-600">{system.desc}</p>
                    </div>


                  ))}
                </div>

                <p className="text-gray-700 mb-6 py-5 text-justify md:text-left">They should provide clear ROI calculations for proposed upgrades, demonstrating how initial investments translate into long-term operational savings.
                </p>
              </div>

              <div className="bg-cyan-50 p-2 md:p-6 rounded-lg border-l-4 border-cyan-500">
                <h3 className="md:text-xl font-semibold text-cyan-700 text-center md:text-left mb-4">Importance of Comprehensive Energy Audits and Analysis
                </h3>
                <p className="text-gray-700 mb-6 text-justify">A crucial service for industrial and commercial spaces is a comprehensive energy audit. The contractor should utilize advanced tools and methodologies, such as:
                </p>


        <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700">
  {items.map((item, index) => (
    <li key={index} className="font-sans">
      <p className=' font-sans'>
        <strong>{item.title} : </strong> {item.description}
      </p>
    </li>
  ))}
</ul>

              </div>
            </section>




            <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-cyan-100 text-gray-800">

              <div className="max-w-7xl mx-auto px-5 md:px-6">
                {/* Section Title */}
                <h2 className="  text-2xl md:text-4xl  font-bold text-center text-cyan-700 mb-12">
                  Inquire About Warranties and Service Guarantees
                </h2>

                {/* Warranty Types */}
                <div className="mb-16">
                  <h3 className=" text-center md:text-2xl font-semibold text-cyan-800 mb-4">
                    Types of Warranties for Commercial Systems
                  </h3>
                  <p className="mb-6 text-gray-700 md:text-lg text-justify md:text-left">
                    For commercial and industrial HVAC systems, warranties are far more complex and crucial due to the significant investment involved. Typically, you'll encounter:
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {warrantyTypes.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl border border-cyan-200 shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-200"
                      >
                        <h4 className="md:text-xl  font-semibold text-cyan-900 mb-2 text-center md:text-left">
                          {item.title}
                        </h4>
                        <p className="text-gray-700 text-justify md:text-left md:text-md text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-gray-700 text-justify text-sm md:text-lg">
                    Thoroughly understand what each warranty covers, its duration, and any conditions that might void it (e.g., neglecting scheduled maintenance).
                  </p>
                </div>

                {/* Warranty Documentation */}
                <div>
                  <h2 className="md:text-2xl  font-semibold text-center md:text-left text-cyan-800 mb-4">
                    What to Look For in Warranty Documentation
                  </h2>
                  <p className="mb-6 text-gray-700 text-sm md:text-lg">
                    When reviewing warranty agreements, pay meticulous attention to the fine print:
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {warrantyDocumentation.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl border border-cyan-200 shadow-md p-6 hover:shadow-lg transition-all duration-200"
                      >
                        <h4 className=" md:text-xl text-center md:text-left font-semibold text-cyan-900 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-700 text-sm   text-center md:text-left md:text-md">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>




            <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-cyan-100 text-gray-800">
              <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <h2 className=" text-2xl md:text-4xl font-bold text-center text-cyan-700 mb-12">
                  SLAs, Performance Guarantees & Pricing Breakdown
                </h2>

                {/* SLAs & Guarantees */}
                <div className="mb-16">
                  <h3 className=" text-center md:text-2xl font-semibold text-cyan-800 mb-4">
                    Importance of Service Level Agreements (SLAs) and Performance Guarantees
                  </h3>
                  <p className=" text-sm text-justify md:text-md text-gray-700 mb-6">
                    Beyond standard warranties, ask about Service Level Agreements (SLAs) and specific performance guarantees, especially for critical industrial or commercial facilities. An SLA outlines the contractor's commitment to response times, repair times, and system uptime. This is critical for businesses where HVAC downtime translates directly to lost revenue or compromised operations (e.g., data centers, manufacturing, healthcare).

                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {performanceGuarantees.map(({ title, description, icon: Icon }, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl border border-cyan-200 shadow-md p-6 hover:shadow-lg transition-all duration-200 flex items-start gap-4"
                      >
                        <Icon className="w-8 h-8 text-cyan-600 shrink-0 mt-1" />
                        <div>
                          <h4 className="text-xl font-semibold text-cyan-900 mb-1">
                            {title}
                          </h4>
                          <p className="text-gray-700">{description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="  text-sm text-justify py-3 md:text-left md:text-md text-gray-700 my-6">A contractor willing to stand by their work with robust SLAs and performance guarantees demonstrates confidence in their capabilities and a commitment to your business's success.
                  </p>
                </div>

                {/* Pricing Breakdown */}
                <div>
                  <h3 className=" text-2xl md:text-3xl  pb-4 font-semibold text-cyan-800 mb-4 text-center ">
                    Compare Pricing and Services Offered
                  </h3>
                  <p className="  text-md text-center md:text-left md:text-lg  font-semibold text-cyan-800 mb-4" >Understanding Commercial Cost Structures</p>
                  <p className=" text-sm text-justify md:text-md text-gray-700 mb-6">
                    For industrial and commercial HVAC projects, understanding the cost structure is far more complex than for residential systems. A detailed, transparent breakdown is essential. Demand to see:
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {pricingBreakdown.map(({ title, description, icon: Icon }, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl border border-cyan-200 shadow-md p-6 hover:shadow-lg transition-all duration-200 flex items-start gap-4"
                      >
                        <Icon className="w-8 h-8 text-cyan-600 shrink-0 mt-1" />
                        <div>
                          <h4 className="text-xl font-semibold text-cyan-900 mb-1">
                            {title}
                          </h4>
                          <p className="text-gray-700">{description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6  text-justify md:text-left text-sm md:text-md text-gray-700">
                    Beware of vague "lump sum" bids. A reputable contractor will provide granular detail and explain each line item. The lowest bid often signals cut corners, potentially leading to higher long-term operational costs and premature system failure.
                  </p>

                </div>
              </div>
            </section>


            <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-cyan-100 text-gray-800">
              <div className="max-w-7xl mx-auto px-6">

                <h2 className="  md:text-4xl  text-2xl font-bold text-center text-cyan-700 mb-12">
                  Evaluating Comprehensive Service Packages
                </h2>

                {/* Comprehensive Service Packages */}
                <div className="mb-16">
                  <p className="  text-center md:text-md text-gray-700 mb-6">
                    For commercial and industrial clients, ongoing support is paramount. Inquire about a range of service packages beyond the initial installation or repair :

                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {servicePackages.map(({ title, description, icon: Icon }, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl border border-cyan-200 shadow-md p-6 hover:shadow-lg transition-all duration-200 flex items-start gap-4"
                      >
                        <Icon className="w-8 h-8 text-cyan-600 shrink-0 mt-1" />
                        <div>
                          <h4 className=" md:text-xl font-semibold text-cyan-900 mb-1">
                            {title}
                          </h4>
                          <p className="text-gray-700 text-sm  md:text-md text-justify">{description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className=" md:text-md text-center text-gray-700 my-6">
                    Choosing a contractor who offers comprehensive post-installation support ensures continuity and optimizes your operational expenditures.
                  </p>
                </div>

                {/* Avoiding Low-Ball Estimates */}
                <div className="mb-16">
                  <h3 className=" text-lg md:text-2xl font-semibold text-cyan-800 mb-4 text-center">
                    Avoiding Low-Ball Estimates and Ensuring Value
                  </h3>
                  <p className=" text-sm md:text-lg text-gray-700 mb-6 text-center">
                    In the commercial sector, a significantly low bid is a major red flag. It often indicates:
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {redFlags.map(({ title, description, icon: Icon }, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl border border-cyan-200 shadow-md p-6 hover:shadow-lg transition-all duration-200 flex items-start gap-4"
                      >
                        <Icon className="w-8 h-8 text-cyan-600 shrink-0 mt-1" />
                        <div>
                          <h4 className="text-xl font-semibold text-cyan-900 mb-1">
                            {title}
                          </h4>
                          <p className="text-gray-700">{description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 md:text-md text-sm text-justify text-gray-700">
                    Always obtain at least three detailed proposals. If one is substantially lower, demand a line-by-line explanation of the discrepancies. Focus on the total cost of ownership (TCO), which includes initial investment, energy consumption, maintenance, and projected lifespan, rather than just the upfront price. A higher initial investment in a quality system and contractor can lead to significant long-term savings and fewer headaches.
                  </p>
                </div>

                {/* Facility Evaluation */}
                <div>
                  <h2 className="   text-center md:text-2xl font-semibold text-cyan-800 mb-4">
                    Conduct a Thorough Facility Evaluation
                  </h2>
                  <p className=" text-justify text-sm md:text-md text-gray-700 mb-6">
                    Before any proposals are finalized, a reputable HVAC contractor for industrial and commercial spaces must conduct an extensive, on-site facility evaluation. This isn't a quick walk-through; it's a deep dive into your operational needs, building characteristics, and existing infrastructure. This comprehensive assessment is the foundation for an accurate design, proper sizing, and ultimately, a system that meets your specific business objectives.

                  </p>
                  <div className="flex items-start gap-4 bg-white rounded-2xl border border-cyan-200 shadow-md p-6">
                    <Building2 className="w-8 h-8 text-cyan-600 shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm md:text-md">
                      This deep-dive lays the groundwork for correct sizing, accurate system design, and ultimately a solution tailored to your business objectives.
                    </p>
                  </div>
                </div>
              </div>
            </section>



            <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-cyan-100 text-gray-800">
              <div className="max-w-7xl mx-auto md:px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-cyan-700 mb-12">
                  What to Expect During a Commercial/Industrial Evaluation
                </h2>
                <p className=' text-center py-6'>During the evaluation, the contractor should go beyond mere visual inspection. They should -
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {evaluationChecklist.map(({ title, description, icon: Icon }, i) => (
                    <div key={i} className="bg-white border border-cyan-200 rounded-2xl p-6 shadow-md flex gap-4">
                      <Icon className="w-8 h-8 text-cyan-600 mt-1 shrink-0" />
                      <div>
                        <h4 className="md:text-xl text-md font-semibold text-cyan-900 mb-1">{title}</h4>
                        <p className=' text-sm md:text-md '>{description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="md:text-3xl text-2xl font-semibold text-cyan-800 mb-6 text-center">
                  Importance of Proper Sizing and System Design
                </h2>
                <p className=' py-4 text-center'>
                  In commercial and industrial environments, improper sizing is a costly mistake.

                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {designChecklist.map(({ title, description, icon: Icon }, i) => (
                    <div key={i} className="bg-white border border-cyan-200 rounded-2xl p-6 shadow-md flex gap-4">
                      <Icon className="w-8 h-8 text-cyan-600 mt-1 shrink-0" />
                      <div>
                        <h4 className=" text-md md:text-xl font-semibold text-cyan-900 mb-1">{title}</h4>
                        <p className=' text-sm  md:text-lg pt-2   text-justify'>{description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className=" text-xl md:text-3xl font-semibold text-cyan-800 mb-6 text-center">
                  Ductwork, Piping, and Building Systems Assessment
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {systemAssessment.map(({ title, description, icon: Icon }, i) => (
                    <div key={i} className="bg-white border border-cyan-200 rounded-2xl p-6 shadow-md flex gap-4">
                      <Icon className="w-8 h-8 text-cyan-600 mt-1 shrink-0" />
                      <div>
                        <h4 className=" md:text-xl font-semibold text-cyan-900 mb-1">{title}</h4>
                        <p className=' text-sm md:text-md pt-2'>{description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className='md:text-md  text-justify px-4 text-cyan-800 my-6 text-sm'>
                  Ignoring these aspects can lead to significant energy losses, poor performance, and even structural issues, negating the benefits of new HVAC equipment. The contractor should propose solutions that address these foundational elements for holistic system optimization.

                </p>
              </div>
            </section>



            <div className="space-y-12 px-4 lg:px-16 py-10 bg-white rounded-xl shadow-lg">
              <section className="space-y-4">
                <h2 className=" text-2xl text-center md:text-left md:text-4xl font-extrabold text-cyan-700">
                  Ask About Maintenance Plans and Support
                </h2>
                <p className="text-gray-700 text-lg">
                  The commissioning and installation of an HVAC system for an industrial or commercial
                  space are just the beginning. Ongoing maintenance and support are absolutely critical
                  to ensuring system longevity, peak performance, and maximum energy efficiency. Neglecting
                  these aspects can lead to costly breakdowns, operational disruptions, and significantly
                  higher utility bills.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-3xl font-bold text-cyan-600">
                  Benefits of Regular Preventive Maintenance (PM)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {benefits.map((item, index) => (
                    <div key={index} className="bg-cyan-50 border border-cyan-100 rounded-2xl p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="shrink-0">{item.icon}</div>
                        <div>
                          <h4 className="text-xl font-semibold text-cyan-800 mb-1">{item.title}</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-3xl font-bold text-cyan-600">
                  Types of Commercial/Industrial Maintenance Plans
                </h3>
                <p>Maintenance plans for commercial and industrial facilities are typically much more detailed and tailored than residential ones. Ask about:
                </p>
                <ul className="space-y-4 text-gray-800 text-base">
                  {maintenancePlans.map((plan, index) => (
                    <li key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-cyan-600 before:rounded-full">
                      <span className="font-semibold text-cyan-700">{plan.title}:</span> {plan.description}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 text-base">
                  Ensure the plan clearly defines the scope of work, frequency of visits, included parts,
                  and any excluded services. Compare plans to find one that aligns with your operational
                  criticality and budget.
                </p>
              </section>
            </div>


            <div className="px-6 lg:px-24 py-12 bg-white rounded-3xl shadow-2xl space-y-16">
              <div className="space-y-6">
                <h2 className="text-4xl font-extrabold text-cyan-700">Emergency Support Availability and Service Level Agreements (SLAs)</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  For commercial and industrial operations, HVAC emergencies can be catastrophic. Therefore, understanding the contractor's emergency support capabilities is paramount:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {supportItems.map((item, index) => (
                  <div key={index} className="bg-cyan-50 border border-cyan-100 rounded-2xl p-6 flex items-start space-x-5 hover:shadow-xl transition-shadow">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-cyan-800 mb-1">{item.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 text-base">
                  A strong Service Level Agreement (SLA) for emergency support is a critical component of any commercial HVAC contract. It provides peace of mind knowing that when your critical systems fail, your chosen contractor will respond swiftly and effectively.
                </p>
              </div>

              <div className="space-y-6 pt-10 border-t border-cyan-200">
                <h2 className="text-4xl font-bold text-cyan-700">Wrapping It Up</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Selecting the right HVAC contractor for your industrial or commercial space is a critical business decision. It directly impacts your operational efficiency, energy consumption, indoor environment quality, and ultimately, your bottom line. Take the time to meticulously verify their licenses, assess their commercial experience and reputation, delve into their energy efficiency expertise, scrutinize warranties and service guarantees, and compare detailed proposals.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Don’t rush this process; a well-chosen contractor will help you avoid costly downtime, extend asset life, and ensure your business stays comfortable and productive for years to come. Start your search today, and make sure you partner with a leader who understands the unique demands of commercial and industrial HVAC. Your business deserves it!
                </p>
              </div>
            </div>



            {/* CTA Section */}
            <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Get Expert Advice for Your Cooling Needs</h2>
                <p className="text-cyan-100 mb-8 text-lg">
                  Contact us today to leverage our expertise. We offer a free consultation to help you assess your specific cooling requirements. Let's keep your operations running cool!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="tel:8287885885"
                    className="bg-white text-cyan-800 hover:bg-cyan-100 font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact HVAC Expert
                  </a>
                  <Link
                    href="/contact-Us"
                    className="bg-cyan-900 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center border border-cyan-700"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Enquiry Now
                  </Link>
                </div>
              </div>
            </section>


            <div className="px-6 lg:px-24 py-12 bg-white rounded-3xl shadow-2xl">
              <h2 className="text-5xl font-extrabold text-cyan-700 mb-10">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-cyan-100 rounded-2xl bg-cyan-50 overflow-hidden"
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex justify-between items-center p-5 text-left hover:bg-cyan-100 transition-colors"
                    >
                      <span className="text-lg font-semibold text-cyan-800">
                        {item.question}
                      </span>
                      {openIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-cyan-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-cyan-600" />
                      )}
                    </button>
                    {openIndex === index && (
                      <div className="p-5 pt-0 text-gray-700 text-base leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}
