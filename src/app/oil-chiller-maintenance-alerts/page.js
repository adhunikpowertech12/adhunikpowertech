"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { 
  Zap, 
  Droplets, 
  Filter, 
  Volume2, 
  ThermometerSnowflake, 
  Gauge, 
  AlertOctagon, 
  ClipboardList, 
  PowerOff, 
  Users,
  Phone
} from "lucide-react";

export default function HydraulicChillerPage() {

  // Data for "The 7-Point Checklist"
  const checklistPoints = [
    {
      title: "1. Energy Consumption Anomaly",
      description: "A sustained spike in electrical consumption (kWh) without increased load. Scaled coils create a thermal barrier, forcing the compressor to draw exponential current.",
      icon: <Zap className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "2. Hydraulic Fluid Breakdown",
      description: "Rapid oxidation, darkening color, or viscosity changes. Heat above 60°C breaks molecular chains, creating abrasive sludge that scores piston shafts.",
      icon: <Droplets className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "3. Filters Clogging Frequently",
      description: "Air or oil filters reaching pressure limits too fast. This indicates the chiller is starved of airflow or internal components are disintegrating.",
      icon: <Filter className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "4. Abnormal Acoustic Signatures",
      description: "Grinding (bearing failure) or clunking (liquid slugging). These sounds are immediate precursors to catastrophic mechanical seizure.",
      icon: <Volume2 className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "5. Unstable Refrigerant Circuit",
      description: "Ice on the suction line or excessive condensation. Usually caused by a low refrigerant charge leading to pressure drops below freezing.",
      icon: <ThermometerSnowflake className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "6. Temperature Drift",
      description: "Oil temperature oscillates or creeps up under load. Caused by sensor failure, flow restriction, or a sticking Thermal Expansion Valve (TXV).",
      icon: <Gauge className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "7. Electrical Overload Trips",
      description: "Repeated tripping of breakers. The motor is fighting excessive head pressure or winding insulation is failing. Do not bypass safety switches.",
      icon: <AlertOctagon className="w-8 h-8 text-red-600" />
    }
  ];

  // Data for "The Protocol" (Deep Dive Content)
  const protocolSteps = [
    {
      title: "1. System Logging: Detailed Data Capture",
      description: "Instruct floor personnel to establish a rigorous logging procedure for any detected anomalies. This involves meticulously documenting all seven distress signals, recording the exact time, date, and observable changes in performance parameters, such as pressure gauge readings, motor current (Amps), and process fluid temperature. This detailed data trail is crucial for subsequent Hydraulic Oil Chiller troubleshooting as it allows technicians to precisely correlate failure events with operational conditions, significantly reducing diagnostic time.",
      icon: <ClipboardList className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "2. Immediate Shutdown: Critical Interruption Protocol",
      description: "Implement a mandatory, zero-tolerance shutdown protocol immediately upon observing critical failure indicators. This includes Sign #4 (Audible Mechanical Grinding, signifying internal component destruction) and Sign #7 (Repeated Electrical Tripping, indicating severe overload or electrical fault). This proactive action prevents minor mechanical damage from cascading into total, irreparable failure of the compressor—the most costly component in the system.",
      icon: <PowerOff className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "3. Specialized Partnership: Strategic Technical Alignment",
      description: "Engage exclusively with certified and OEM-aligned service providers. Prioritize service teams, such as those from Adhunik Powertech, established top HVAC manufacturers in India, who possess documented expertise and access to genuine components. This strategic partnership ensures that all maintenance and repairs are conducted using precise factory specifications, minimizing the risk of recurrence and maximizing long-term asset reliability.",
      icon: <Users className="w-8 h-8 text-cyan-600" />
    }
  ];

  return (
    <>
      <div className="bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
            <div className="w-full md:w-6/12">
              <div className="inline-block px-3 py-1 mb-4 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wide">
                Production Downtime Alert
              </div>
              <h1 className="text-2xl md:text-3xl text-center md:text-left font-bold text-cyan-900 mb-4 leading-tight">
                Use This Deep Dive 7-Point Checklist to Save Your Hydraulic Oil Chiller
              </h1>
              <p className="text-sm text-gray-700 mb-6 text-justify md:text-left">
                Every successful manufacturing operation in India hinges on predictability. When a hydraulic press delivers precise force, it's not just the machine working—it's the support ecosystem, chief among which is the <strong>Hydraulic Oil Chiller</strong>.
              </p>
              <p className="text-sm text-gray-700 mb-6 text-justify md:text-left">
                High temperatures compromise oil integrity and force expensive shutdowns. The problem is that chillers rarely communicate distress with a loud alarm. Instead, they transmit subtle signals that are frequently missed.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <Link href="/chiller-oil-water-coolant" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center">
                    Explore Hydraulic Oil Chillers
                </Link>
              </div>
            </div>
            <div className="w-full md:w-6/12">
               {/* Ensure you have an image at this path in public folder */}
              <img
                src="/hydraulic-oil-chiller.webp" 
                alt="Industrial hydraulic oil chiller system inside a manufacturing plant with large blue and green cooling pipes, highlighting a 7-point maintenance checklist by Adhunik Powertech."
                width={1260}
                height={750}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </section>

          {/* Intro Section */}
          <section className="text-center my-16 py-8 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
             <h2 className="text-xl font-semibold text-gray-500 mb-4">The Unseen Battle for Uptime</h2>
             <p className="max-w-3xl mx-auto text-gray-600 text-sm leading-relaxed">
               This document serves as an in-depth, operational guide—written for both the floor engineer and the director—to detect the severe, often hidden indicators that your chiller is transitioning from inefficient operation to imminent mechanical failure. 
               <br /><br />
               <strong>This 7-Point Checklist is your non-negotiable protocol for troubleshooting designed to guarantee operational continuity.</strong>
             </p>
          </section>
          
          {/* Grid 1: The 7-Point Checklist */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-900">The 7-Point Chiller Health Checklist</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                These seven areas represent the core diagnostic points where component degradation and efficiency loss manifest.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {checklistPoints.map((item, index) => (
                <div key={index} className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${index === 6 ? 'border-red-600' : 'border-cyan-600'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-gray-800 leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Grid 2: The Protocol (Deep Dive) */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-900">Your Professional Uptime Protocol</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                Recognizing the signs is only the first step. For high-output operations in Delhi NCR, these actions are imperative.
              </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {protocolSteps.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-cyan-50 text-cyan-200 font-bold text-6xl -mr-4 -mt-2 opacity-50">
                    {index + 1}
                  </div>
                  <div className="flex justify-center mb-4 relative z-10">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-center text-gray-800 mb-2 relative z-10">{item.title}</h3>
                  <p className="text-sm text-gray-600 text-justify relative z-10 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Main CTA Section */}
          <section className="bg-gradient-to-r from-cyan-700 to-slate-800 rounded-xl p-8 text-white shadow-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Secure Your Production Schedule</h2>
              <p className="text-cyan-50 mb-8 text-sm">
                We provide a Precision Thermal Analysis and Maintenance Program designed specifically to diagnose and mitigate all 7 failure risks detailed above. Don't let a silent problem become a crippling shutdown.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/support-form" 
                  className="bg-white text-md font-bold text-cyan-900 hover:bg-cyan-50 py-3 px-8 rounded-lg transition duration-300"
                >
                Schedule Chiller Evaluation
                </Link>
                <a 
                  href="tel:+91 8287885885" 
                  className="bg-transparent border border-white text-md font-bold text-white hover:bg-white/10 py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" /> Get Instant Support
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}