'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { 
  ShieldCheck, 
  CheckCircle2, 
  PhoneCall, 
  FileText, 
  ChevronDown,
  Zap,
  Layers,
  Settings,
  Activity,
  Cpu,
  Gauge
} from 'lucide-react';

export default function MccPanelClient() {
  const router = useRouter();
  const form = useRef(null);

  const notifye = () => toast.error("Invalid Details. Please check the required fields.");
  const notifys = () => toast.success("Enquiry Sent Successfully! Our engineering desk will connect with you.");

  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    company: "",
    starterType: "Combination (DOL + Star-Delta + VFD Feeders)",
    switchgear: "Schneider Electric",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Must be a valid 10-digit number";
    }
    if (!formData.company.trim()) newErrors.company = "Company & Location is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRfqSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      notifye();
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        "service_vo5gd7i",
        "template_l7fwlg4",
        form.current,
        { publicKey: "l1ClVd3RFtBBP43zB" }
      );

      notifys();
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        company: "",
        starterType: "Combination (DOL + Star-Delta + VFD Feeders)",
        switchgear: "Schneider Electric",
        message: ""
      });
      setTimeout(() => router.push("/"), 4000);
    } catch (err) {
      console.error("Email send failed:", err);
      notifye();
    } finally {
      setIsSubmitting(false);
    }
  };

  // Technical Specs for MCC and IMCC Boards
  const mccTechnicalSpecs = [
    { label: "Rated Operational Voltage (Ue)", value: "415V AC ± 10%, 3-Phase, 3-Wire / 4-Wire, 50 Hz" },
    { label: "Rated Insulation & Impulse Voltage", value: "1000V AC Insulation / 8kV Peak Impulse Withstand" },
    { label: "Main Horizontal Busbar Rating", value: "Up to 3200A Continuous Rating (Electrolytic Cu / E91E Al)" },
    { label: "Vertical Dropper Busbars", value: "Isolated, Fully Shrouded Vertical Busbar Alley (Up to 1000A)" },
    { label: "Short-Circuit Fault Capacity", value: "50kA / 65kA rms for 1.0 Second (CPRI Type-Tested)" },
    { label: "Short-Circuit Coordination", value: "Type-2 Coordination Verified (Zero Contactor Welding)" },
    { label: "Internal Separation Class", value: "Form 3b / Form 4b (IS 8623 / IEC 61439-1 & 2 Compliant)" },
    { label: "Module Execution Types", value: "Fully Compartmentalized Fixed Type & Fully Drawout Cassette Type" },
    { label: "Starter Feeder Configurations", value: "Direct-On-Line (DOL), Automatic Star-Delta, Soft-Starters & VFDs" },
    { label: "Motor Protection Units", value: "Microprocessor MPR (Thermal Model, Jam, Stall, Earth Fault, Phase Loss)" },
    { label: "Intelligent IMCC Protocol Options", value: "Modbus RTU (RS485), Profibus-DP, Ethernet/IP, Profinet & BACnet" },
    { label: "Enclosure Construction & Finish", value: "1.6mm / 2.0mm CRCA Sheet Metal, 7-Tank Treated, 60–80μm RAL 7032/7035" },
    { label: "Ingress Protection (IP Class)", value: "IP42 (Indoor Natural) / IP54 / IP55 (Continuous CNC PU Foam Gasketing)" }
  ];

  const faqs = [
    {
      q: "What is Type-2 Coordination, and why is it critical for industrial MCC panels?",
      a: "According to IEC 60947-4-1, Type-2 coordination guarantees that in the event of a severe short circuit, no danger is posed to operators or adjacent installations, and the contactor and overload relay do not suffer permanent contact welding. The starter unit can be returned to service immediately after clearing the fault without replacing contactors."
    },
    {
      q: "What distinguishes an Intelligent MCC (IMCC) from a standard conventional MCC?",
      a: "A conventional MCC uses hardwired control wiring (stop/start pushbuttons, auxiliary contacts, and analog meters) for each feeder. An Intelligent IMCC replaces bundles of hardwired control cables with digital communication gateways (Modbus, Profibus, or Ethernet) connecting smart Motor Management Relays (MMRs). This delivers real-time per-motor telemetry: operating current, winding temperature, run hours, active power factor, and predictive fault logs straight to central SCADA/BMS screens."
    },
    {
      q: "Can Adhunik Powertech MCC panels house both fixed and drawout modules in the same lineup?",
      a: "Yes. We engineer modular switchboards with fully interchangeable drawout feeder drawers for critical drives (allowing under-2-minute drawer replacement during live plant operation) alongside economical fixed compartmentalized modules for standard, non-critical exhaust fans or auxiliary pumping units."
    },
    {
      q: "How are motor feeder cables terminated safely during routine live maintenance?",
      a: "Our Form 4b enclosures feature independent, isolated vertical cable chambers (cable alleys) running alongside each vertical tier. Each motor feeder is equipped with individual disconnect switches and dedicated terminal blocks, allowing maintenance technicians to dress or inspect motor cables without touching live busbar droppers."
    }
  ];

  return (
    <div className="bg-[#fcfdfd] text-gray-800 font-sans min-h-screen pt-12 selection:bg-cyan-600 selection:text-white">
      <ToastContainer />

      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-cyan-900/10 via-white to-white border-b border-gray-200 py-24 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.18]">
                Motor Control Centers (MCC) & <br />
                <span className="text-cyan-700">Intelligent IMCC Panels</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                Centralized motor drive management designed for continuous-duty industrial plants, pump rooms, heavy air systems, and automated production corridors. Built with verified Type-2 short-circuit coordination, microprocessor-based motor protection relays (MPR), and dedicated isolated vertical cable chambers.
              </p>

              {/* Trust Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">Type-2</div>
                  <div className="text-xs text-gray-500 font-medium">No Contactor Welding</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">Drawout</div>
                  <div className="text-xs text-gray-500 font-medium">Modular Drawers</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">Form 4b</div>
                  <div className="text-xs text-gray-500 font-medium">Segregation Standard</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">SCADA</div>
                  <div className="text-xs text-gray-500 font-medium">Modbus / Profibus</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#rfq-section"
                  className="px-6 py-3.5 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm transition shadow-md flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Submit Motor Schedule for Quotation
                </a>
                <a
                  href="tel:8287885885"
                  className="px-6 py-3.5 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold text-sm transition flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-cyan-700" />
                  Technical Desk: 8287-885-885
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-lg bg-white border border-gray-200 rounded-2xl p-4 shadow-xl">
                <div className="relative w-full h-[320px] rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-2">
                  <Image
                    src="/MCC & Intelligent Motor Control Centers.webp"
                    alt="MCC and Intelligent Motor Control Centers Panel"
                    width={500}
                    height={380}
                    priority
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="p-4 bg-gray-50 rounded-xl mt-4 border border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-gray-500 block">Coordinated Switchgear Makes</span>
                    <strong className="text-gray-800 font-semibold">Schneider • L&T • Siemens • Others</strong>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded">
                    100% FAT Tested
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOUNDATIONAL EDUCATION: WHAT IS MCC & WHAT IS IMCC */}
      <section className="py-16 lg:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-2">
              Motor Control Fundamentals
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Understanding Motor Control Centers (MCC) &amp; Intelligent IMCC Switchboards
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed text-justify sm:text-left">
              In heavy manufacturing, process industries, and large commercial facilities, motors consume over 70% of total plant power. Coordinating starting torque, short-circuit protection, and process telemetry requires centralized, segregated motor management switchgear.
            </p>
          </div>

          {/* Dual Deep-Dive Explainer Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* What is an MCC Panel */}
            <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-7 shadow-sm hover:border-cyan-500 transition">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-5">
                <Layers className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What is a Motor Control Center (MCC)?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify mb-4">
                A <strong>Motor Control Center (MCC)</strong> is a modular, compartmentalized metal enclosure that houses multiple motor starter units in a vertical lineup, served by a common horizontal busbar. Each motor feeder operates inside its own isolated compartment equipped with an isolator or circuit breaker, motor contactor, overload relay, and control transformer.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                Conventional MCCs use hardwired pushbuttons, indicator lamps, and control relays, directing power safely to multi-motor infrastructure including compressors, conveyors, heavy exhaust fans, and water pumps.
              </p>
              <div className="mt-5 pt-4 border-t border-gray-200 text-xs text-gray-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                  <span><strong>Architecture:</strong> Fixed compartmentalized or modular drawout drawers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                  <span><strong>Protection:</strong> Type-2 coordinated thermal-magnetic or electronic OLRs</span>
                </div>
              </div>
            </div>

            {/* What is an Intelligent MCC (IMCC) */}
            <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-7 shadow-sm hover:border-cyan-500 transition">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-5">
                <Cpu className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What is an Intelligent Motor Control Center (IMCC)?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify mb-4">
                An <strong>Intelligent Motor Control Center (IMCC)</strong> upgrades conventional motor control by integrating microprocessor-based Motor Management Relays (MMRs) and digital industrial fieldbus communication (Modbus, Profibus, Ethernet/IP, or Profinet).
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                Instead of hundreds of bundles of hardwired analog and digital control cables, all diagnostic data—including real-time phase current, voltage, thermal motor capacity, ground fault alerts, and running hours—is streamed straight to the central SCADA or BMS workstation, enabling automated predictive maintenance.
              </p>
              <div className="mt-5 pt-4 border-t border-gray-200 text-xs text-gray-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                  <span><strong>Telemetry:</strong> Live kW, power factor, thermal capacity %, and run hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                  <span><strong>Diagnostics:</strong> Rotor jam, stall, phase loss, and ground-fault root causes</span>
                </div>
              </div>
            </div>

          </div>

          {/* Technical Comparison Matrix */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm mb-12">
            <div className="bg-cyan-900 text-white px-6 py-4">
              <h3 className="text-base sm:text-lg font-bold">
                Technical Comparison: Conventional MCC vs. Intelligent IMCC
              </h3>
              <p className="text-xs text-cyan-200 mt-0.5">
                Key functional differences to evaluate for plant design and automation tenders.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-gray-700 border-collapse">
                <thead className="bg-gray-100 text-gray-800 uppercase font-semibold text-[11px] border-b border-gray-200">
                  <tr>
                    <th className="py-3 px-5 w-1/4">Engineering Aspect</th>
                    <th className="py-3 px-5 w-3/8 text-cyan-950">Intelligent IMCC Switchboard</th>
                    <th className="py-3 px-5 w-3/8">Conventional Standard MCC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-3.5 px-5 font-bold text-gray-900 bg-gray-50/40">Control Wiring Topology</td>
                    <td className="py-3.5 px-5 font-semibold text-cyan-950">Single fieldbus trunk cable (RS-485 / Ethernet / Profinet)</td>
                    <td className="py-3.5 px-5">Dense point-to-point hardwired copper multi-core cabling</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-3.5 px-5 font-bold text-gray-900 bg-gray-50/40">Protection &amp; Relaying</td>
                    <td className="py-3.5 px-5 font-semibold text-cyan-950">Digital MMR with programmable I²t thermal curves &amp; stall trip</td>
                    <td className="py-3.5 px-5">Bi-metallic thermal overload relays or standard electronic relays</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-3.5 px-5 font-bold text-gray-900 bg-gray-50/40">Real-Time Process Data</td>
                    <td className="py-3.5 px-5 font-semibold text-cyan-950">Full telemetry: Current, Voltage, THD, Run Hours, Power Factor</td>
                    <td className="py-3.5 px-5">Limited to door-mounted analog/digital meters per feeder</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-3.5 px-5 font-bold text-gray-900 bg-gray-50/40">Fault Diagnostics &amp; History</td>
                    <td className="py-3.5 px-5 font-semibold text-cyan-950">Timestamped event log with pre-fault current snapshot</td>
                    <td className="py-3.5 px-5">Simple door trip lamp indication without cause history</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-3.5 px-5 font-bold text-gray-900 bg-gray-50/40">Commissioning &amp; Modifications</td>
                    <td className="py-3.5 px-5 font-semibold text-cyan-950">Software logic reconfiguration without re-pulling wires</td>
                    <td className="py-3.5 px-5">Physical rewiring of terminal blocks and control circuits required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Type-2 Coordination Callout */}
          <div className="bg-cyan-50/60 border border-cyan-200/80 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-cyan-950 max-w-3xl">
              <strong>Verified Type-2 Coordination Standard:</strong> In accordance with IEC 60947-4-1, Adhunik Powertech designs starter feeder assemblies engineered to endure high prospective short circuits without contactor welding or damage to overload devices. In the event of a fault, the feeder returns to operation immediately without needing component replacements.
            </div>
            <a
              href="#rfq-section"
              className="px-4 py-2.5 bg-cyan-800 hover:bg-cyan-900 text-white rounded-lg text-xs font-bold whitespace-nowrap shadow-sm transition"
            >
              Submit Motor Load List
            </a>
          </div>

        </div>
      </section>

      {/* 2. CORE CAPABILITIES (MCC SPECIFIC) */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-2">
              Advanced Motor Protection & Control
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Engineered for Zero Downtime & Precise Process Telemetry
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              From heavy mechanical pump houses to multi-fan ventilation arrays, our MCC panels ensure maximum electrical life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Verified Type-2 Coordination</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Engineered with motor circuit breakers (MPCB), heavy-duty contactors, and thermal-electronic overloads tested to withstand peak short-circuit events without contact melting or permanent weld damage.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Digital IMCC Networking</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Eliminates miles of control wiring by routing operating current, thermal overload curves, running hours, and start/stop commands over RS485 Modbus RTU, Profibus, or BACnet IP directly to the central control room.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Modular Drawout Drawers</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Drawout cassette units feature reliable mechanical interlocks, distinct Test/Service/Disconnected positions, and self-aligning power stabs for safe maintenance during live operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS DATA TABLE */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-1">
            Certified Design Standard
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            MCC / IMCC Switchboard Engineering Data Sheet
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Manufactured and inspected strictly in compliance with IS 8623, IEC 61439-1 & 2, and IEC 60947-4-1 standards.
          </p>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white">
          <table className="w-full text-xs text-left text-gray-700 border-collapse">
            <thead className="text-[11px] text-white uppercase bg-cyan-800">
              <tr>
                <th className="py-3.5 px-5 font-bold w-1/3">Engineering Parameter</th>
                <th className="py-3.5 px-5 font-bold w-2/3">Adhunik Powertech Specification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mccTechnicalSpecs.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50/80 transition">
                  <td className="py-3 px-5 font-bold text-gray-900 bg-gray-50/50">
                    {item.label}
                  </td>
                  <td className="py-3 px-5 font-medium text-gray-700">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. MOTOR STARTER FEEDER BREAKDOWN */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-2">
              Flexible Feeder Architectures
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Starter Types Tailored to Motor Inrush & Duty Cycles
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Every motor feeder is sized for thermal stability, optimal torque, and reduced utility power dips.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "DOL Starters (Up to 7.5 HP)", 
                desc: "Equipped with MPCB and heavy-duty contactors for high starting torque loads such as small utility pumps, auxiliary fans, and compressors." 
              },
              { 
                title: "Star-Delta (10 HP to 50 HP)", 
                desc: "Transition timer controlled with mechanical and electrical interlocking contactors to cut inrush starting current to one-third of normal values." 
              },
              { 
                title: "Soft Starters (60 HP to 250 HP)", 
                desc: "Thyristor-controlled voltage ramp starter with integrated bypass contactor, eliminating hydraulic water hammer in long pump pipelines." 
              },
              { 
                title: "VFD Drive Feeders (Any Rating)", 
                desc: "Integrated variable frequency drives for continuous closed-loop speed modulation, line chokes, and specialized enclosure panel air conditioning." 
              }
            ].map((feeder, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded inline-block mb-3">
                  Feeder Class 0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {feeder.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  {feeder.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIAL BELT & REGIONAL COVERAGE */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-1">
            Northern India Engineering Network
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Supplying MCC &amp; IMCC Panels Across Major Industrial Hubs
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto text-xs font-medium text-gray-600">
            {[
              "Delhi NCR", "Gurugram", "Faridabad", "Noida", "Greater Noida", 
              "Ghaziabad", "Sonipat", "Panipat", "Rohtak", "Rewari", 
              "Palwal", "Bhiwadi", "Meerut", "Neemrana", "Tapukara", 
              "Bawal", "Manesar", "Dharuhera", "Muzaffarnagar", "Jaipur", "Chandigarh"
            ].map((belt, index) => (
              <span 
                key={index}
                className="bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-md text-gray-700 hover:border-cyan-400 hover:text-cyan-800 transition"
              >
                {belt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIRECT MOTOR SCHEDULE RFQ SUBMISSION FORM */}
      <section id="rfq-section" className="py-16 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-cyan-700/20 rounded-3xl p-8 sm:p-12 shadow-xl relative">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700">
              Fast Techno-Commercial Offer
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
              Request an MCC / IMCC Proposal
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Submit your motor load list, feeder ratings, or Single-Line Diagram (SLD). Our senior engineering desk will verify Type-2 coordination, drawer sizes, and provide a comprehensive proposal.
            </p>
          </div>

          <form
            ref={form}
            onSubmit={handleRfqSubmit}
            className="space-y-5"
          >
            {/* Row 1: Name and Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  Full Name & Designation *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Plant Head / Electrical Lead"
                  className="w-full bg-gray-50/80 border border-gray-300 rounded-xl p-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-700 focus:bg-white transition"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  Mobile / Direct Contact *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="e.g. 8287-885-885"
                  className="w-full bg-gray-50/80 border border-gray-300 rounded-xl p-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-700 focus:bg-white transition"
                />
                {errors.phoneNumber && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phoneNumber}</p>}
              </div>
            </div>

            {/* Row 2: Company and Starter Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  Company & Plant Location *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Industrial Shed, Manesar"
                  className="w-full bg-gray-50/80 border border-gray-300 rounded-xl p-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-700 focus:bg-white transition"
                />
                {errors.company && <p className="text-red-500 text-xs mt-1 font-medium">{errors.company}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  Primary Feeder Arrangement
                </label>
                <select
                  name="starterType"
                  value={formData.starterType}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50/80 border border-gray-300 rounded-xl p-3.5 text-sm text-gray-800 focus:outline-none focus:border-cyan-700 focus:bg-white transition cursor-pointer"
                >
                  <option value="Combination (DOL + Star-Delta + VFD Feeders)">
                    Combination (DOL + Star-Delta + VFD Feeders)
                  </option>
                  <option value="Fixed Compartmentalized Conventional MCC">
                    Fixed Compartmentalized Conventional MCC
                  </option>
                  <option value="Fully Drawout Modular MCC (Cassette Type)">
                    Fully Drawout Modular MCC (Cassette Type)
                  </option>
                  <option value="Intelligent IMCC with Modbus / Profibus MMRs">
                    Intelligent IMCC with Modbus / Profibus MMRs
                  </option>
                  <option value="Soft Starter Multi-Pump Distribution Board">
                    Soft Starter Multi-Pump Distribution Board
                  </option>
                </select>
              </div>
            </div>

            {/* Row 3: Switchgear Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5">
                Preferred Switchgear Make
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                {[
                  { id: 'schneider', label: 'Schneider Electric', value: 'Schneider Electric' },
                  { id: 'lnt', label: 'L&T Electrical', value: 'L&T Electrical' },
                  { id: 'siemens', label: 'Siemens', value: 'Siemens' },
                  { id: 'others', label: 'Others', value: 'Others' }
                ].map((item) => (
                  <label
                    key={item.id}
                    className={`flex items-center justify-center p-3 rounded-xl border cursor-pointer transition select-none font-medium ${
                      formData.switchgear === item.value
                        ? 'border-cyan-700 bg-cyan-50/70 text-cyan-900 font-bold shadow-sm'
                        : 'border-gray-200 bg-gray-50/80 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="switchgear"
                      value={item.value}
                      checked={formData.switchgear === item.value}
                      onChange={handleInputChange}
                      className="mr-2 accent-cyan-700 cursor-pointer"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Project Details textarea */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5">
                Motor Feeder List / BOQ Details
              </label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Mention number of motors, HP/kW ratings, preferred starter types, or specific BMS/SCADA protocols..."
                className="w-full bg-gray-50/80 border border-gray-300 rounded-xl p-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-700 focus:bg-white transition"
              ></textarea>
            </div>

            {/* Hidden Inputs for EmailJS */}
            <input 
              type="hidden" 
              name="email" 
              value={formData.email || "info@adhunikpowertech.com"} 
            />

            <input 
              type="hidden" 
              name="message_context" 
              value={`MCC Panel Inquiry - Type: ${formData.starterType} | Switchgear: ${formData.switchgear} | Details: ${formData.message}`} 
            />

            {/* Submit Action */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl text-white font-bold text-sm shadow-md transition flex justify-center items-center gap-2 mt-4 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-cyan-800 hover:bg-cyan-900 active:scale-[0.99]'
              }`}
            >
              <FileText className="w-4 h-4 text-cyan-200" />
              <span>
                {isSubmitting 
                  ? "Submitting Technical Request..." 
                  : "Submit Motor Schedule for Engineering Review"}
              </span>
            </button>

            <p className="text-[11px] text-center text-gray-500 font-medium">
              Reviewed by Adhunik Powertech engineering team.
            </p>
          </form>

        </div>
      </section>

      {/* 6. TECHNICAL FAQS ACCORDION */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked Technical Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-5 py-4 flex justify-between items-center text-sm font-bold text-gray-800 hover:text-cyan-800 transition"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180 text-cyan-700' : ''}`} />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM CONVERSION FOOTER STRIP */}
      <section className="py-12 bg-cyan-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Have a Motor Feeder Schedule or Plant SLD?
          </h2>
          <p className="text-xs sm:text-sm text-cyan-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Our engineering team in Gurugram / Delhi NCR reviews electrical schedules and delivers complete GA drawings and offers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@adhunikpowertech.com"
              className="px-6 py-3 rounded-lg bg-white text-cyan-900 hover:bg-cyan-50 font-bold text-xs sm:text-sm transition shadow"
            >
              Email Schedule: info@adhunikpowertech.com
            </a>
            <a
              href="tel:8287885885"
              className="px-6 py-3 rounded-lg border border-cyan-600 bg-cyan-800 hover:bg-cyan-700 text-white font-bold text-xs sm:text-sm transition"
            >
              Toll Free No: 8287-885-885
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}