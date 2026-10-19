"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  ShieldCheck, Thermometer, Wind, CheckCircle2,
  PhoneCall, Zap, Settings, ChevronRight, Mail,
  AlertTriangle, HelpCircle, Cpu, Activity, Info, Layout, Globe,
  Box, Gauge, Calculator, Droplets, ArrowDownCircle
} from "lucide-react";

export default function PanelACForCNCMachines() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Why do standard exhaust fans fail in CNC machine enclosures?",
      a: "Exhaust fans pull in ambient plant air laden with cutting fluid aerosols, vaporized synthetic coolants, and conductive metallic swarf. This sticky film deposits across delicate spindle drives, servo boards, and optical encoder circuits, resulting in insulation breakdown, tracking shorts, and frequent over-temperature drive trips (OH / AL-022)."
    },
    {
      q: "What is the recommended temperature setpoint for a CNC panel air conditioner?",
      a: "The ideal setpoint is between 32°C and 35°C (90°F to 95°F). Setting temperature setpoints too low (such as domestic comfort ranges of 22°C–24°C) wastes continuous power and drops internal cabinet surfaces below the surrounding room's dew point, risking condensation on high-voltage terminals."
    },
    {
      q: "How does closed-loop cooling protect sensitive VFDs and servo drives?",
      a: "A closed-loop panel AC isolates the internal cabinet air completely. It continuously draws warm air from the top of the enclosure, dehumidifies and chills it across an evaporator coil, and returns it to drive racks at a controlled temperature without introducing exterior contaminants or compromising the IP54/IP55 integrity of the panel."
    },
    {
      q: "What size panel AC is required for a CNC milling center?",
      a: "Cooling capacity depends on total internal heat dissipation (typically 2.5% to 3% continuous heat loss from spindle drives and servo modules) plus ambient transmission heat through the enclosure walls. For typical 3-axis to 5-axis CNC machining centers in 45°C ambient shops, units ranging from 1000W to 2000W (such as Adhunik WMS-0010 or WMS-0015) are standard."
    },
    {
      q: "How often should condenser air filters be maintained on the shop floor?",
      a: "In machine shop environments containing active coolant mist, washable aluminum mesh filters should be inspected and cleaned with a neutral degreaser every 15 to 30 days. Keeping the condenser coil clean maintains low discharge pressure and prevents high-pressure compressor cutouts."
    }
  ];

  return (
    <div className="bg-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-6/12">
              <Image
                src="/Panel ac for cnc.webp"
                alt="Panel AC installed on CNC machine electrical enclosure protecting servo drives and VFDs"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl shadow-xl border-2 border-cyan-100"
                priority
              />
            </div>
            <div className="w-full md:w-6/12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-4">
                <Cpu className="w-3.5 h-3.5 text-cyan-600" /> Machine Tool Thermal Management
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-cyan-800 mb-6 leading-tight">
                Panel AC for CNC Machines: Sizing, Installation & VFD Protection
              </h1>
              <div className="text-gray-700 text-sm font-normal space-y-4 leading-relaxed">
                <p>
                  In high-precision machining environments, modern CNC turning centers, vertical machining centers (VMCs), and multi-axis milling cells generate severe thermal loads inside sealed electrical control cabinets.
                </p>
                <p>
                  High-frequency IGBT switching in spindle drives, multi-axis servo packs, and CNC power supplies generates substantial heat. When combined with shop-floor ambient temperatures exceeding 45°C and airborne coolant mist, unconditioned cabinets face thermal trips, encoder drift, and catastrophic component burnout.
                </p>
                <p className="font-semibold text-cyan-900">
                  Closed-loop panel air conditioners provide dedicated, hermetically sealed refrigeration that preserves IP54/IP55 enclosure integrity while keeping electronics within safe operating thresholds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Dual Threat Section */}
        <section className="mb-16 bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <h2 className="text-2xl font-bold text-cyan-800 mb-4 flex items-center gap-3">
            <AlertTriangle className="text-amber-500 w-6 h-6" />
            The Dual Threat: Why CNC Enclosures Fail on Modern Shop Floors
          </h2>
          <p className="text-gray-700 text-sm font-normal mb-6">
            Conventional louvers and exhaust fans pull in ambient plant air. On machining floors, this introduces two destructive failure mechanisms:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-base mb-3">
                <Zap className="w-5 h-5 text-rose-600" />
                VFD Heat Concentration & Arrhenius Degradation
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Spindle and servo drives dissipate approximately <strong>2.5% to 3% of rated power</strong> directly as heat. A 30 kW spindle and three 3 kW axis servo drives dump over 1,170 Watts of heat inside a compact box. Every 10°C rise above 40°C halves the operating life of busbar capacitors and triggers frequent drive over-temperature faults (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-rose-600">OH / AL-022</code>).
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-base mb-3">
                <Droplets className="w-5 h-5 text-amber-600" />
                Aerosol Coolant Mist & Metallic Dust Ingress
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Flood coolants vaporize during aggressive cuts. When intake fans pull this aerosol inside, oil deposits an insulating film across heat sinks and logic cards. Metallic swarf sticks to this oil film, bridging closely spaced PCB traces and causing sudden arc-flash failure across high-voltage terminal rails.
              </p>
            </div>
          </div>
        </section>

        {/* Heat Load Calculation Formula Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-slate-50 border-b border-slate-200 p-6 flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <Calculator className="text-cyan-600 w-6 h-6" />
                CNC Panel AC Heat Load Calculation Formula
              </h2>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider bg-cyan-100/60 px-3 py-1.5 rounded-lg">
                Standard Engineering Method
              </span>
            </div>

            <div className="p-8">
              <p className="text-gray-700 text-sm font-normal mb-6">
                Avoid guessing cooling capacity. Sizing an enclosure air conditioner requires calculating both internal component heat dissipation and exterior transmission heat:
              </p>

              <div className="bg-slate-900 text-cyan-300 p-6 rounded-xl font-mono text-center text-sm md:text-base mb-8 shadow-inner">
                Q_Required = (Q_Internal + Q_Transmission) × 1.15 (Safety Factor)
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-base text-cyan-900 border-b pb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-600" /> Step 1: Internal Component Heat (Q_Internal)
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2 list-disc ml-5">
                    <li><strong>Spindle VFD:</strong> Rated motor power (kW) × 0.030 × 1000 = Watts</li>
                    <li><strong>Servo Drives:</strong> Combined servo kW × 0.030 × 1000 = Watts</li>
                    <li><strong>CNC Controller & Logic:</strong> Flat 150W to 200W estimate</li>
                    <li><strong>24V SMPS & Control Transformers:</strong> Output rating × 15% efficiency loss</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-base text-cyan-900 border-b pb-2 flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-cyan-600" /> Step 2: Surface Heat Gain (Q_Transmission)
                  </h3>
                  <p className="text-xs font-mono bg-slate-100 p-2.5 rounded text-slate-800">
                    Q_Transmission = k × A × (T_Ambient - T_Internal)
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 list-disc ml-5">
                    <li><strong>k-factor:</strong> 5.5 W/m²·K (mild steel) | 4.5 W/m²·K (stainless steel)</li>
                    <li><strong>A (Exposed Surface Area):</strong> 1.8 × H × (W + D) + 1.4 × (W × D) in m²</li>
                    <li><strong>ΔT:</strong> Peak shop floor ambient (e.g. 45°C) minus target interior (35°C)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-cyan-50/60 rounded-xl border border-cyan-100 flex items-start gap-3">
                <Info className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                <p className="text-xs text-cyan-900 leading-relaxed">
                  <strong>Example:</strong> A standard 2.0m × 1.0m × 0.6m enclosure housing an 18.5 kW spindle drive, three 2.5 kW axis servos, and CNC logic in a 45°C workshop has an internal load of 960W and transmission load of 363W (Total: 1,323W). Factoring in a 15% safety margin indicates a <strong>1,521 Watt</strong> requirement — making an Adhunik <strong>1500W (WMS-0015)</strong> or <strong>2000W (WMS-0020)</strong> unit optimal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specification Table */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Gauge className="text-cyan-600" /> Technical Specifications: Adhunik CNC Panel Air Conditioners
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-slate-100 text-slate-800 uppercase text-xs">
                <tr>
                  <th className="p-4 border-b">Parameter</th>
                  <th className="p-4 border-b">WMS-0010 (Side Mount)</th>
                  <th className="p-4 border-b">WMS-0015 (Side Mount)</th>
                  <th className="p-4 border-b">TMT-0010 (Top Mount)</th>
                  <th className="p-4 border-b">TMT-0015 (Top Mount)</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600 divide-y divide-slate-200">
                <tr>
                  <td className="p-4 font-bold text-slate-800">Cooling Capacity (Watts)</td>
                  <td className="p-4 font-semibold text-cyan-800">1000 Watt</td>
                  <td className="p-4 font-semibold text-cyan-800">1500 Watt</td>
                  <td className="p-4 font-semibold text-cyan-800">1000 Watt</td>
                  <td className="p-4 font-semibold text-cyan-800">1500 Watt</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Cooling Capacity (BTU/hr)</td>
                  <td className="p-4">3412 BTU</td>
                  <td className="p-4">5119 BTU</td>
                  <td className="p-4">3412 BTU</td>
                  <td className="p-4">5119 BTU</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Dimensions (D × W × H mm)</td>
                  <td className="p-4 font-mono text-xs">285 × 300 × 785</td>
                  <td className="p-4 font-mono text-xs">285 × 310 × 785</td>
                  <td className="p-4 font-mono text-xs">395 × 655 × 345</td>
                  <td className="p-4 font-mono text-xs">395 × 655 × 345</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Power Input (Watt / Amp)</td>
                  <td className="p-4">770 W / 3.5 A</td>
                  <td className="p-4">924 W / 4.2 A</td>
                  <td className="p-4">770 W / 3.5 A</td>
                  <td className="p-4">924 W / 4.2 A</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Air-Flow Volume (CMH)</td>
                  <td className="p-4">221 CMH</td>
                  <td className="p-4">238 CMH</td>
                  <td className="p-4">221 CMH</td>
                  <td className="p-4">238 CMH</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Compressor Make</td>
                  <td className="p-4">Emerson / Danfoss</td>
                  <td className="p-4">Emerson / Danfoss</td>
                  <td className="p-4">Emerson / Danfoss</td>
                  <td className="p-4">Emerson / Danfoss</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Refrigerant / Temp Rating</td>
                  <td className="p-4">R-134a | Up to 55°C Ambient</td>
                  <td className="p-4">R-134a | Up to 55°C Ambient</td>
                  <td className="p-4">R-134a | Up to 55°C Ambient</td>
                  <td className="p-4">R-134a | Up to 55°C Ambient</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Mounting Configuration Comparison */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Layout className="text-cyan-600" /> Choosing Mounting Types: Side Mount vs. Top Mount
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-cyan-100 rounded-xl hover:shadow-md transition-all bg-white">
              <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
                <Box className="w-5 h-5 text-cyan-600" /> Side / Door Wall Mount (WMS Series)
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                The standard mounting configuration for freestanding CNC machine tool cabinets, automation panels, and operator control consoles.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 list-disc ml-5">
                <li>Direct bottom-to-top air circulation straight across vertical VFD heatsinks.</li>
                <li>Simple eye-level inspection of digital controllers and mesh filter status.</li>
                <li>Fast door cutout integration using standard factory templates.</li>
              </ul>
            </div>

            <div className="p-6 border border-cyan-100 rounded-xl hover:shadow-md transition-all bg-white">
              <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
                <ArrowDownCircle className="w-5 h-5 text-cyan-600" /> Roof / Top Mount (TMT Series)
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Designed specifically for tightly packed machine tool floors where aisle clearance and door swing radii are restricted.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 list-disc ml-5">
                <li>Discharges chilled air vertically downward over top-mounted power busbars.</li>
                <li>Zero footprint encroachment in narrow maintenance walkways.</li>
                <li>Eliminates structural door-sag on wider, thin-gauge sheet metal cabinets.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Engineering Best Practices */}
        <section className="my-16 bg-cyan-900 text-white p-10 rounded-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Engineering Best Practices for CNC Installation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Thermometer className="w-10 h-10 mb-4 text-cyan-400" />
              <h4 className="font-bold mb-2">Maintain 32°C–35°C Setpoint</h4>
              <p className="text-xs text-cyan-100 leading-relaxed">
                Setting controllers below 28°C causes thermal waste and drops internal cabinet surfaces below dew point, creating dangerous condensation on live busbars.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="w-10 h-10 mb-4 text-cyan-400" />
              <h4 className="font-bold mb-2">Wire Door Interlock Switch</h4>
              <p className="text-xs text-cyan-100 leading-relaxed">
                Connect the door microswitch to the AC cut-off contact. Leaving doors open during setups pulls warm room moisture in, causing evaporator coil icing.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Wind className="w-10 h-10 mb-4 text-cyan-400" />
              <h4 className="font-bold mb-2">Clean Washable Mesh Monthly</h4>
              <p className="text-xs text-cyan-100 leading-relaxed">
                Wash the external aluminum condenser filter in warm, degreasing solution every 15–30 days to clear oil mist and prevent high-pressure compressor trips.
              </p>
            </div>
          </div>
        </section>

        {/* Serving Industry Leaders Across India */}
        <section className="mb-20">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-5/12">
                <h2 className="text-3xl font-bold text-slate-800 leading-tight mb-6">
                  Serving Industry Leaders <br />
                  <span className="text-cyan-600 font-black">Across India</span>
                </h2>
                <div className="text-gray-700 text-sm font-normal space-y-4 leading-relaxed text-justify">
                  <p>
                    Recognizing the severe thermal demands of modern machine shops, Adhunik Powertech proudly provides cutting-edge{' '}
                    <a 
                      href="https://www.adhunikpowertech.com/panel-air-conditioners" 
                      className="text-cyan-700 font-bold hover:underline"
                    >
                      panel air conditioner solutions
                    </a>{' '}
                    and field engineering support to major precision machining hubs across India.
                  </p>
                  <p>
                    We address the crucial thermal management needs of businesses in <strong>Ahmedabad, Pune, Hyderabad, Chennai, Mumbai, Goa, Vishakhapatnam, Bhopal, Kolkata, Jaipur, Faridabad, Bangalore, Noida and Delhi NCR</strong>, as well as in thriving industrial zones throughout <strong>Gujarat, Rajasthan, Chhattisgarh, and Odisha</strong>.
                  </p>
                  <p className="font-bold text-cyan-800">
                    Wherever your CNC and automated machine tools operate, trust Adhunik Powertech for heavy-duty, continuous cooling.
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-7/12">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-cyan-600" /> Trusted By Industry Giants (21+ Years)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                    {[
                      "Uflex Limited",
                      "Steel Authority of India Ltd. (SAIL)",
                      "East India Petroleum Pvt. Ltd. (EIPL)",
                      "BAAZ Bikes (Elec Torq Technologies)",
                      "Nippon Steel Pipe India Pvt. Ltd.",
                      "TAK Technologies Pvt. Ltd.",
                      "Hero MotoCorp",
                      "Rise Automation",
                      "Triveni Renewables Pvt. Ltd.",
                      "Zixom Plast"
                    ].map((client, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3 h-3 text-cyan-500 shrink-0" /> {client}
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-[11px] text-gray-500 italic leading-relaxed border-t pt-4">
                    With over 21+ Years of manufacturing experience, ISO 9001:2015, CE compliance, and GeM OEM registration, Adhunik Powertech delivers industrial cooling systems built to perform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Need Expert Assistance CTA */}
        <section className="bg-[#0f172a] rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl mx-auto max-w-6xl my-8">
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Need Engineering Sizing for Your CNC Panels?
            </h2>
            
            <p className="text-slate-300 text-sm md:text-base font-normal mb-6 leading-relaxed max-w-2xl">
              Prevent spindle drive trips and oil mist damage. Connect with our application engineers for custom heat load audits, 2D/3D CAD cutouts (STEP/DWG), and sizing verification.
            </p>
            
            <p className="text-cyan-400 font-semibold text-sm md:text-base mb-10 flex items-center justify-center gap-2">
               Adhunik Powertech manufactures engineered Panel Air Conditioners from 250W to 7000W for industrial machining across India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a 
                href="tel:8287885885" 
                className="w-full sm:w-auto bg-[#0891b2] hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <PhoneCall className="w-4 h-4" /> +91 82878 85885
              </a>
              
              <Link 
                href="/support-form" 
                className="w-full sm:w-auto bg-transparent border border-slate-700 hover:border-cyan-400 text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4" /> Request a Technical Quote
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-cyan-800 mb-8 text-center flex items-center justify-center gap-2">
            <HelpCircle className="text-cyan-600" /> Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <button 
                  className="w-full text-left p-5 font-bold text-slate-800 bg-slate-50 flex justify-between items-center transition-colors hover:bg-slate-100"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`transition-transform duration-200 shrink-0 ${openIndex === i ? 'rotate-90' : ''}`} />
                </button>
                {openIndex === i && (
                  <div className="p-5 text-gray-600 bg-white border-t border-slate-200 text-sm leading-relaxed">
                    {faq.a}
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