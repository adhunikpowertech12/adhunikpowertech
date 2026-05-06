"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  Settings, 
  ThermometerSnowflake, 
  Zap, 
  Factory, 
  Timer, 
  Cpu, 
  CheckCircle2,
  Wrench,
  AlertTriangle,
  Fan,
  Droplets,
  Gauge
} from "lucide-react";

export default function PanelACMaintenanceGuide() {

  const maintenanceSteps = [
    {
      title: "Filter Cleaning & Replacement",
      frequency: "Every 2–4 weeks",
      description: "Dust is the biggest enemy. Clogged filters reduce cooling efficiency and force the compressor to work harder.",
      icon: <Fan className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Condenser Coil Cleaning",
      frequency: "Monthly",
      description: "Ensures heat releases efficiently. Use compressed air or a soft brush to remove industrial debris.",
      icon: <Settings className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Compressor Health Check",
      frequency: "Every 6 months",
      description: "The heart of the system. Monitor noise levels, vibration, and refrigerant pressure to prevent failure.",
      icon: <Cpu className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Electrical & Wiring Audit",
      frequency: "Quarterly",
      description: "Tighten connections and check for burnt wires. Essential for fire safety and operational stability.",
      icon: <Zap className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Drain Line Management",
      frequency: "Monthly",
      description: "Clear blockages in drain lines to prevent water leakage inside the electrical cabinet.",
      icon: <Droplets className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Thermostat Calibration",
      frequency: "Quarterly",
      description: "Verify temperature accuracy and response time to ensure the unit triggers at the right thermal limit.",
      icon: <Gauge className="w-8 h-8 text-cyan-600" />
    },
  ];

  return (
    <>
      <div className="bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
            <div className="w-full md:w-6/12">
              <h1 className="text-2xl md:text-4xl text-center md:text-left font-bold text-cyan-800 mb-4 leading-tight">
                Panel AC Maintenance Checklist: Long Life & Peak Performance
              </h1>
              <p className="text-sm md:text-base text-gray-700 mb-6 text-justify md:text-left">
                In industrial hubs like Gurgaon and Delhi NCR, temperature control isn’t optional—it’s critical. A well-maintained <strong>Enclosure Air Conditioner</strong> ensures stable performance and protects expensive PLCs, VFDs, and server units from the harsh Indian climate.
              </p>
              <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Wrench className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Preventive Care</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Timer className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Zero Downtime</span>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link href="/support-form" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  BOOK SERVICE VISIT
                </Link>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1778061950/Panel_AC_Maintenance_Checklist_glnfpe.webp" 
                alt="Professional technician performing maintenance on a high-quality cooling unit for electrical panels"
                width={1260}
                height={750}
                priority
                className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
              />
            </div>
          </section>

          {/* Maintenance Grid Section */}
          <section className="mb-16">
            <div className="flex flex-col items-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 text-center pb-4 uppercase tracking-wide">
                Comprehensive Maintenance Checklist
              </h2>
              <div className="w-24 h-1 bg-cyan-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {maintenanceSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-cyan-200 transition-all group">
                  <div className="mb-4 flex justify-between items-start">
                    {step.icon}
                    <span className="text-[10px] font-bold bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full uppercase">
                      {step.frequency}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-cyan-700 transition-colors">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Detailed Content & Warning Section */}
          <section className="mb-16">
            <div className="max-w-8xl mx-auto bg-white p-8 rounded-lg shadow-md border-t-4 border-cyan-700">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="text-gray-700 font-sans">
                  <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Why Routine Service Matters</h2>
                  <p className="text-justify mb-4">
                    Without proper maintenance, heat builds up inside the panel, electronic components degrade faster, and energy consumption increases. For businesses using <strong>Server cooling units</strong> or <strong>Portable AC Units</strong>, the stakes are even higher as data loss can occur during sudden thermal shutdowns.
                  </p>
                  <ul className="space-y-3 mt-6">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" /> <span><strong>Lower Operating Costs:</strong> Clean systems use 15-20% less power.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" /> <span><strong>Extended Asset Life:</strong> Protect your ROI on high-quality cooling units.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" /> <span><strong>Compliance:</strong> Meet industrial safety and operational standards.</span></li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2 text-xl">
                    <AlertTriangle className="w-6 h-6" /> Red Flags: Seek Immediate Service
                  </h3>
                  <p className="text-sm text-amber-900 mb-4 italic">Contact an engineer if you notice these symptoms:</p>
                  <div className="grid grid-cols-1 gap-2 text-sm text-amber-800">
                    <div className="flex items-center gap-2 p-2 bg-white/50 rounded">● Reduced cooling performance despite low ambient temps</div>
                    <div className="flex items-center gap-2 p-2 bg-white/50 rounded">● Unusual grinding or humming from the compressor</div>
                    <div className="flex items-center gap-2 p-2 bg-white/50 rounded">● Frequent on/off cycling (Short-cycling)</div>
                    <div className="flex items-center gap-2 p-2 bg-white/50 rounded">● Visible water accumulation or moisture inside the panel</div>
                    <div className="flex items-center gap-2 p-2 bg-white/50 rounded">● Unexplained spikes in monthly electricity bills</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing/Quality Section */}
          <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 bg-slate-900 text-white rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4">The Truth About Maintenance Costs</h2>
              <p className="text-slate-300 text-sm mb-6">
                While some focus solely on the initial <strong>Panel AC price</strong>, the total cost of ownership is determined by maintenance. Low-cost units often require frequent repairs, whereas high-quality units from a trusted manufacturer like <strong>Adhunik Powertech</strong> offer durability and lower long-term service expenses.
              </p>
              <div className="flex items-center gap-4 border-t border-slate-700 pt-6">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-cyan-400">Preventive</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-tighter">Small Cost / High Uptime</span>
                </div>
                <div className="h-10 w-px bg-slate-700"></div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-red-400">Reactive</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-tighter">Huge Cost / Business Risk</span>
                </div>
              </div>
            </div>
            <div>
               <h3 className="text-xl font-bold text-gray-800 mb-4">Professional Maintenance Perks</h3>
               <p className="text-gray-600 text-sm mb-4">While basic cleaning can be done in-house, professional servicing via an expert partner ensures:</p>
               <ul className="grid grid-cols-1 gap-3">
                 {["Accurate Diagnostics & Leak Testing", "Certified Refrigerant Handling", "Full System Performance Audits", "Safety Compliance & Grounding Checks"].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                     <div className="w-2 h-2 bg-cyan-600 rounded-full"></div> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </section>

         

          {/* CTA Banner */}
          <section className="bg-gradient-to-r from-cyan-700 to-cyan-900 rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Extend Your Equipment Life?</h2>
              <p className="text-cyan-100 mb-8">From compact panel air conditioners to large-scale server cooling systems, Adhunik Powertech provides expert maintenance across India.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/support-form" className="bg-white text-cyan-800 font-bold py-3 px-10 rounded-full hover:bg-cyan-50 transition-colors">
                  REQUEST SERVICE
                </Link>
                <Link href="/panel-air-conditioners" className="bg-transparent border border-white/40 font-bold py-3 px-10 rounded-full hover:bg-white/10 transition-colors">
                  VIEW PRODUCTS
                </Link>
              </div>
            </div>
            {/* Aesthetic Background Shape */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          </section>

        </div>

      </div>
       {/* FAQ SECTION */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="text-lg font-semibold text-cyan-800">How do I maintain a panel AC compressor?</h3>
                      <span className="transition-transform duration-300 group-open:rotate-180"><Settings className="w-5 h-5" /></span>
                    </summary>
                    <div className="p-6 pt-0 border-t border-gray-50 text-gray-600 text-sm leading-relaxed">
                      Maintenance involves checking refrigerant pressure, monitoring for abnormal vibrations, ensuring all electrical connections are tight, and verifying the unit isn't running too hot. Regular audits every 6 months prevent complete system failure.
                    </div>
                  </details>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="text-lg font-semibold text-cyan-800">What is the ideal temperature for industrial panels?</h3>
                      <span className="transition-transform duration-300 group-open:rotate-180"><ThermometerSnowflake className="w-5 h-5" /></span>
                    </summary>
                    <div className="p-6 pt-0 border-t border-gray-50 text-gray-600 text-sm leading-relaxed">
                      Most industrial enclosures should be kept between 25°C and 35°C. For server units, we recommend a tighter range of 18°C–27°C to protect senstive electronic components.
                    </div>
                  </details>
                </div>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="text-lg font-semibold text-cyan-800">What is the difference between panel AC and normal air conditioner?</h3>
                      <span className="transition-transform duration-300 group-open:rotate-180"><Settings className="w-5 h-5" /></span>
                    </summary>
                    <div className="p-6 pt-0 border-t border-gray-50 text-gray-600 text-sm leading-relaxed">
                      Most A panel AC (enclosure air conditioner) is designed specifically for cooling electrical cabinets and works in sealed environments, while normal ACs are meant for human comfort cooling in open spaces.
                    </div>
                  </details>
                </div>
              </div>  
            </div>
            
          </section>
    </>
  )
}