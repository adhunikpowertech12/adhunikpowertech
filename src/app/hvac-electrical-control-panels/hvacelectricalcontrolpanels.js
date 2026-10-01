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
  Wind,
  SlidersHorizontal,
  Flame,
  Activity,
  Cpu,
  GaugeCircle,
  Fan
} from 'lucide-react';

export default function HvacPanelClient() {
  const router = useRouter();
  const form = useRef(null);

  const notifye = () => toast.error("Invalid Details. Please check the required fields.");
  const notifys = () => toast.success("Enquiry Sent Successfully! Our HVAC engineering desk will connect with you.");

  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    company: "",
    hvacApplication: "Air Handling Unit (AHU Starter + VFD Modulation)",
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
        hvacApplication: "Air Handling Unit (AHU Starter + VFD Modulation)",
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

  const hvacTechnicalSpecs = [
    { label: "Target Applications", value: "Air Handling Units (AHUs), Evaporative Air Washers, TFA, Cleanroom HVAC, Pumping Stations" },
    { label: "Operating Voltage & Frequency", value: "415V AC ± 10%, 3-Phase, 4-Wire, 50 Hz (230V Auxiliary Control)" },
    { label: "VFD Speed Modulation Loops", value: "Closed-loop PID based on Duct Static Pressure (ΔP Transducer feedback)" },
    { label: "Filter Monitoring Interlocks", value: "Continuous Differential Pressure (DP) switch telemetry across Pre, Fine, and HEPA filters" },
    { label: "Fire & Life-Safety Sequence", value: "Hardwired Fire Damper Trip Interlock, Smoke Exhaust Mode, and Auto Fan Cutoff" },
    { label: "Building Automation Protocols", value: "Native BACnet IP / MS-TP, Modbus RTU (RS485), and Potential-Free Status Contacts" },
    { label: "Starter & Drive Topology", value: "VFD with Auto/Manual Bypass, Soft-Starters, DOL, and Star-Delta for standby pump sets" },
    { label: "Enclosure Ingress Protection", value: "IP54 (Indoor Mechanical Rooms) / IP55 / IP65 (Continuous CNC PU Foam Gasketing)" },
    { label: "Thermal Management Options", value: "Forced Exhaust Air Louvers with Washable Dust Filters or Closed-Loop Industrial Panel AC" },
    { label: "Switchgear Component Makes", value: "Schneider Electric, L&T Electrical, Siemens, ABB, Danfoss, or Delta Drives" },
    { label: "Internal Wiring & Termination", value: "Flame Retardant Low Smoke (FRLS) / ZHFR copper wiring with numbered terminal ferrules" }
  ];

  const faqs = [
    {
      q: "How does the panel automate AHU fan speeds based on duct static pressure?",
      a: "The panel integrates a closed-loop PID controller within the Variable Frequency Drive (VFD) wired to a sensitive static pressure transmitter installed in the supply air duct (typically 2/3 down the main duct run). As downstream VAV dampers open or close, the VFD automatically adjusts fan RPM to maintain exact setpoint static pressure, reducing electrical power draw during partial-load conditions."
    },
    {
      q: "What safety interlock occurs when a fire alarm or smoke damper is triggered?",
      a: "Our control panels feature fail-safe potential-free and 24V DC auxiliary loops linked directly to Motorized Fire Dampers (MFD) and the building Fire Alarm Control Panel (FACP). Upon smoke detection or fire trip, the panel immediately drops out the main AHU supply fan contactor to prevent smoke distribution through ductwork, while signaling the dedicated smoke extraction or staircase pressurization fans to initiate."
    },
    {
      q: "Can this panel monitor filter clogging in cleanrooms and pharma sterile areas?",
      a: "Yes. We incorporate differential pressure (DP) switches and analog transmitters across each filter bank (EU4 Pre-filters, EU7 Fine filters, and EU13/14 HEPA filters). The panel provides door-mounted visual alert indications, audio buzzers, and real-time BMS alarm signals when differential pressure thresholds exceed recommended cleanroom limits."
    },
    {
      q: "Can the panel manage water level, chemical dosing, and pump alternation in Air Washers?",
      a: "Yes. For two-stage and single-stage evaporative air washers, the panel includes dedicated multi-level water controller circuits (High, Low, Dry-Run cutoff), motorized water supply float valves, pump alternation timers (working/standby lead-lag rotation), and interlocking with the main supply air blower."
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
                HVAC & Air Washer <br />
                <span className="text-cyan-700">Electrical Control Panels</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                Adhunik&apos;s flagship electro-mechanical integration for Air Handling Units (AHUs), Evaporative Air Washers, Treated Fresh Air (TFA) units, and central chiller secondary pumping. Engineered with dynamic duct static pressure VFD modulation, motorized fire damper safety trips, and differential pressure filter warning telemetry.
              </p>

              {/* Trust Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">ΔP Loop</div>
                  <div className="text-xs text-gray-500 font-medium">Static Pressure VFD</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">Fire NOC</div>
                  <div className="text-xs text-gray-500 font-medium">Damper Interlocked</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">BACnet</div>
                  <div className="text-xs text-gray-500 font-medium">Native BMS Gateway</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">IP55 / IP65</div>
                  <div className="text-xs text-gray-500 font-medium">PU Gasketing Seal</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#rfq-section"
                  className="px-6 py-3.5 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm transition shadow-md flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Submit AHU / Air Washer BOQ for Quotation
                </a>
                <a
                  href="tel:8287885885"
                  className="px-6 py-3.5 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold text-sm transition flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-cyan-700" />
                  Toll Free No: 8287-885-885
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-lg bg-white border border-gray-200 rounded-2xl p-4 shadow-xl">
                <div className="relative w-full h-[320px] rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-2">
                  <Image
                    src="/HVAC & Air Washer Control Panels.webp"
                    alt="HVAC and Air Washer Electrical Control Panel"
                    width={500}
                    height={380}
                    priority
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="p-4 bg-gray-50 rounded-xl mt-4 border border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-gray-500 block">Switchgear & Drive Integration</span>
                    <strong className="text-gray-800 font-semibold">Schneider • L&T • Siemens • Danfoss</strong>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded">
                    100% Sequence Tested
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES (HVAC SPECIFIC) */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-2">
              Electro-Mechanical Harmony
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Precision Airside Regulation & Life-Safety Interoperability
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Unlike generic motor panels, Adhunik HVAC switchboards are tailored specifically around air aerodynamics, filter resistance, and damper safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <SlidersHorizontal className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Static Pressure VFD Modulation</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Direct closed-loop integration with in-duct differential pressure (ΔP) sensors. As zone VAV dampers adjust, the fan speed modulates smoothly to maintain duct integrity and drastically cut motor kWh usage.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Motorized Fire Damper Interlock</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Fail-safe cut-offs interface with 24V/230V motorized fire dampers. In an emergency, supply air fans shut down instantly to stop smoke circulation, while stairwell pressurization fans initiate automatically.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Native BMS Gateway (BACnet & Modbus)</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Equipped with open protocol cards (BACnet IP, MS/TP, Modbus RTU) to deliver real-time motor frequency, running current, trip fault diagnostics, and energy data to your central Building Management System.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS DATA TABLE */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-1">
            Certified Engineering Parameters
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            HVAC & Air Washer Control Panel Data Sheet
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Manufactured and type-tested in compliance with IS 8623, IEC 61439-1 & 2, and National Building Code (NBC) standards.
          </p>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white">
          <table className="w-full text-xs text-left text-gray-700 border-collapse">
            <thead className="text-[11px] text-white uppercase bg-cyan-800">
              <tr>
                <th className="py-3.5 px-5 font-bold w-1/3">Design Specification</th>
                <th className="py-3.5 px-5 font-bold w-2/3">Adhunik Powertech Engineering Parameter</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {hvacTechnicalSpecs.map((item, idx) => (
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

      {/* 4. SUBSYSTEM BREAKDOWN */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-2">
              Application Focus
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Specialized Control Panels for Air Systems
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Customized hardware logic built to match each specific airside installation across commercial and industrial facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Air Handling Units (AHU)",
                desc: "Equipped with VFD fan modulation, return air temperature reset, motorized damper actuator sync, and dirty filter DP alarms."
              },
              {
                title: "Evaporative Air Washers",
                desc: "Integrated water tank level switches (high/low cutoff), auto float valves, dual pump lead-lag rotation, and main blower interlocking."
              },
              {
                title: "Treated Fresh Air (TFA)",
                desc: "Enthalpy wheel or heat recovery wheel speed regulation, pre/post heater coil control, and CO2 demand ventilation monitoring."
              },
              {
                title: "Staircase Pressurization",
                desc: "NBC-compliant smoke extraction and lift-well pressurization fan starters featuring emergency manual overrides and dual power changeover."
              }
            ].map((sub, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded inline-block mb-3">
                  Air System 0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {sub.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  {sub.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIRECT RFQ SUBMISSION FORM */}
      <section id="rfq-section" className="py-16 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-cyan-700/20 rounded-3xl p-8 sm:p-12 shadow-xl relative">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700">
              Direct HVAC Engineering Consultation
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
              Submit Your AHU / Air Washer Schedule
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Share your motor load list, static pressure criteria, or tender Single-Line Diagram (SLD). Our HVAC electrical specialists will generate a complete GA layout and commercial quote within 24 to 48 hours.
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
                  placeholder="e.g. HVAC Consultant / MEP Engineer"
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

            {/* Row 2: Company and Application Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  Company & Project Location *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Cleanroom Project, Gurugram"
                  className="w-full bg-gray-50/80 border border-gray-300 rounded-xl p-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-700 focus:bg-white transition"
                />
                {errors.company && <p className="text-red-500 text-xs mt-1 font-medium">{errors.company}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  Primary HVAC Application
                </label>
                <select
                  name="hvacApplication"
                  value={formData.hvacApplication}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50/80 border border-gray-300 rounded-xl p-3.5 text-sm text-gray-800 focus:outline-none focus:border-cyan-700 focus:bg-white transition cursor-pointer"
                >
                  <option value="Air Handling Unit (AHU Starter + VFD Modulation)">
                    Air Handling Unit (AHU Starter + VFD Modulation)
                  </option>
                  <option value="Evaporative Air Washer Control Panel (Blower + Pump)">
                    Evaporative Air Washer Control Panel (Blower + Pump)
                  </option>
                  <option value="Treated Fresh Air (TFA) Heat Recovery Wheel Panel">
                    Treated Fresh Air (TFA) Heat Recovery Wheel Panel
                  </option>
                  <option value="Staircase & Lift-Well Pressurization Fan Panel">
                    Staircase & Lift-Well Pressurization Fan Panel
                  </option>
                  <option value="Basement Smoke Extraction & Jet Fan Control Panel">
                    Basement Smoke Extraction & Jet Fan Control Panel
                  </option>
                  <option value="Chiller Secondary Pump VFD Distribution Board">
                    Chiller Secondary Pump VFD Distribution Board
                  </option>
                </select>
              </div>
            </div>

            {/* Row 3: Preferred Switchgear Brand */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5">
                Preferred Switchgear & Drive Brand
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

            {/* Message / BOQ specifications */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5">
                Fan Ratings, CFM & Interlock Specifications
              </label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Mention fan motor kW/HP, static pressure range, fire damper actuator count, or specific BACnet/Modbus register requirements..."
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
              value={`HVAC Panel Inquiry - App: ${formData.hvacApplication} | Make: ${formData.switchgear} | Details: ${formData.message}`} 
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
                  : "Submit HVAC Panel Requirements for 24-Hr Engineering Review"}
              </span>
            </button>

            <p className="text-[11px] text-center text-gray-500 font-medium">
              Directly routed to Adhunik Powertech electro-mechanical engineering desk.
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
            Have an Air Handling Unit or Cleanroom Schedule?
          </h2>
          <p className="text-xs sm:text-sm text-cyan-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Our engineering team in Gurugram / Delhi NCR reviews HVAC schedules and delivers complete GA drawings, wiring schematics, and offers within 24–48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@adhunikpowertech.com"
              className="px-6 py-3 rounded-lg bg-white text-cyan-900 hover:bg-cyan-50 font-bold text-xs sm:text-sm transition shadow"
            >
              Email Drawings: info@adhunikpowertech.com
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