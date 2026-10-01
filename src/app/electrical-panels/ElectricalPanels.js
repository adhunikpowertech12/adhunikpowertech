'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
//import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'; //Comment this line if you are not using reCAPTCHA v3 
import 'react-toastify/dist/ReactToastify.css';

import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  FileText, 
  ChevronDown,
  HardHat
} from 'lucide-react';

export default function ElectricalPanelsClient() {
  const router = useRouter();
  const form = useRef(null);
  //const { executeRecaptcha } = useGoogleReCaptcha();

  // Toast notifications
  const notifye = () => toast.error("Invalid Details. Please check the fields.");
  const notifys = () => toast.success("Enquiry Sent Successfully!");
  const notifyBot = () => toast.error("reCAPTCHA failed. Please try again.");

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // RFQ Form State
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    company: "",
    panelType: "Power Control Center (PCC / LT Main Distribution)",
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
      newErrors.phoneNumber = "Must be 10 digits";
    }
    if (!formData.company.trim()) newErrors.company = "Company is required";
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
        panelType: "Power Control Center (PCC / LT Main Distribution)",
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

  // Structured Industrial Panel Portfolio with Individual Card Images
  const panelCatalog = [
    {
      id: "pcc-lt",
      title: "PCC & Main LT Distribution Panels",
      image: "/PCC & Main LT Distribution Panel.webp",
      shortDesc: "Main substation power intake switchgear engineered for transformer secondary termination, captive DG synchronization, and high-capacity feeder distribution.",
      specs: [
        { label: "Voltage", val: "415V AC ± 10%, 50Hz" },
        { label: "Fault Level", val: "50kA / 65kA for 1s" },
        { label: "Busbar", val: "EC Grade Cu / E91E Al" },
        { label: "Segregation", val: "Form 3b / Form 4b" }
      ],
      features: [
        "Air Circuit Breakers (ACB) up to 4000A with micro-logic LSIG release",
        "Motorized auto-source changeover (AMF / bus coupler logic)",
        "Class 0.5 / 1.0 smart digital energy monitoring with RS485 Modbus"
      ],
      link: "/lt-panel-manufacturers"
    },
    {
      id: "mcc-imcc",
      title: "MCC & Intelligent Motor Control Centers",
      image: "/MCC & Intelligent Motor Control Centers.webp",
      shortDesc: "Centralized motor drive management designed for continuous duty industrial plants, pump rooms, and high-capacity air systems.",
      specs: [
        { label: "Starters", val: "DOL, Star-Delta, Soft-Starter" },
        { label: "Coordination", val: "Type-2 Standard" },
        { label: "Design", val: "Fixed & Drawout Drawers" },
        { label: "Protection", val: "Electronic MPR / OLR" }
      ],
      features: [
        "Type-2 coordination verified with Schneider, L&T, Siemens, and Others",
        "Microprocessor-based motor protection relays (MPR) with jam/stall detection",
        "Separate vertical cable chambers and busbar alleys for safe live maintenance"
      ],
      link: "/mcc-panel-manufacturers"
    },
    {
      id: "hvac-starter",
      title: "HVAC & Air Washer Control Panels",
      image: "/HVAC & Air Washer Control Panels.webp",
      shortDesc: "Adhunik's flagship electro-mechanical integration for Air Handling Units (AHUs), Evaporative Air Washers, and central chiller secondary pumping.",
      specs: [
        { label: "Application", val: "AHU / Air Washer / TFA" },
        { label: "Control Loop", val: "Dynamic Static ΔP Sensor" },
        { label: "BMS Gateway", val: "BACnet IP / Modbus RTU" },
        { label: "Safety Trip", val: "Motorized Fire Damper" }
      ],
      features: [
        "Automatic VFD fan speed modulation based on duct static pressure",
        "Fire alarm interlock with auto-damper shutoff and fan trip sequences",
        "Differential pressure (DP) switches for clogged filter warning telemetry"
      ],
      link: "/hvac-electrical-control-panels"
    },
    {
      id: "apfc",
      title: "APFC Harmonic Filter Panels",
      image: "/Active-Harmonic-Filter.webp",
      shortDesc: "Automatic Power Factor Correction systems engineered to eliminate DISCOM low power factor penalties and peak-demand surcharges.",
      specs: [
        { label: "Capacity", val: "50 kVAr to 1200 kVAr" },
        { label: "Reactors", val: "7% or 14% Detuned (Cu/Al)" },
        { label: "Controller", val: "Microprocessor 8/14/16 Steps" },
        { label: "Capacitors", val: "Heavy-Duty MPP / APP" }
      ],
      features: [
        "7% / 14% copper or aluminium detuned reactors to avoid harmonic resonance",
        "Heavy-duty MPP capacitors equipped with internal discharge resistors",
        "Thyristor-switched capacitor (TSC) modules for rapid fluctuating loads"
      ],
      link: "/apfc-panel-manufacturers"
    },
    {
      id: "vfd-plc",
      title: "VFD & PLC Process Automation Panels",
      image: "/Adhunik plc-vfd-control-panel.webp",
      shortDesc: "Variable frequency drive and PLC automation cubicles for precise machine speed modulation, multi-pump staging, and complex process sequences.",
      specs: [
        { label: "PLC Hardware", val: "Siemens / Schneider / Delta" },
        { label: "HMI Display", val: "7\" to 15\" Color Touchscreen" },
        { label: "Cooling", val: "Forced Air / Panel AC Unit" },
        { label: "Protocol", val: "Ethernet / Modbus / Profinet" }
      ],
      features: [
        "Color touchscreen HMIs with custom dynamic SCADA mimic diagrams",
        "Line reactors and harmonic chokes to protect drives against spikes",
        "Integrated enclosure cooling maintaining internal temperature below 35°C"
      ],
      link: "/vfd-control-panels"
    },
    {
      id: "fire-fighting",
      title: "Fire Pump & Smoke Pressurization Panels",
      image: "/Adhunik Fire Panel.webp",
      shortDesc: "Life safety electrical starter cubicles for Main Hydrant, Sprinkler, and Jockey pumps alongside staircase and lift-well smoke pressurization blowers.",
      specs: [
        { label: "Compliance", val: "National Building Code" },
        { label: "Enclosure", val: "2-Hour Fire-Rated / IP55" },
        { label: "Operation", val: "Auto / Manual / Engine Sync" },
        { label: "Starting", val: "Star-Delta / Soft-Starter" }
      ],
      features: [
        "Dual power source changeovers (Mains + Captive Emergency Generator)",
        "Staircase and lift-well pressurization fan controls for fire NOC clearance",
        "Pressure switch auto-start cascade sequencing for hydrant and sprinkler lines"
      ],
      link: "/fire-fighting-control-panels"
    }
  ];

  // Engineering & Manufacturing Steps
  const processSteps = [
    {
      num: "01",
      title: "SLD Analysis & Approval",
      desc: "Every panel begins with your single-line diagram and motor schedule. We prepare detailed GA footprint drawings and busbar schematics for your approval before metal cutting begins."
    },
    {
      num: "02",
      title: "Precision CNC Fabrication",
      desc: "High-grade 1.6mm / 2.0mm CRCA sheet steel is sheared, punched, and bent using precision CNC machinery to guarantee dimensional accuracy and Form 4b internal segregation."
    },
    {
      num: "03",
      title: "7-Tank Pre-Treatment & Coating",
      desc: "Automated degreasing, derusting, phosphating, and passivation followed by electrostatic polyester powder coating (RAL 7032 / RAL 7035, 60–80 microns) for 1000+ hours corrosion resistance."
    },
    {
      num: "04",
      title: "100% FAT Sequence Testing",
      desc: "Prior to site dispatch, our engineers execute a mandatory 4-stage FAT: 1000V DC Megger, 2.5 kV Dielectric HV test, busbar torque verification, and live point-to-point sequence simulation."
    }
  ];

  // Technical Comparison Matrix
  const lt_pcc_specs = [
    {
      heading: "Rated Current",
      values: [
        <div key="u" className="font-extrabold font-sans text-gray-900">Amperes</div>,
        "630A", "800A", "1000A", "1250A", "1600A", "2000A", "2500A", "3200A", "4000A",
      ],
    },
    {
      heading: "Fault Level (1s)",
      values: [
        <div key="u" className="font-extrabold font-sans text-gray-900">kA rms</div>,
        "35 kA", "50 kA", "50 kA", "50 kA", "65 kA", "65 kA", "65 kA", "65 kA", "65 kA",
      ],
    },
    {
      heading: "Incomer Breaker",
      values: [
        <div key="u" className="font-extrabold font-sans text-gray-900">Type</div>,
        "MCCB/ACB", "Drawout ACB", "Drawout ACB", "Drawout ACB", "Drawout ACB", "Drawout ACB", "Drawout ACB", "Drawout ACB", "Drawout ACB",
      ],
    },
    {
      heading: "Busbar Material",
      values: [
        <div key="u" className="font-extrabold font-sans text-gray-900">Grade</div>,
        "Al / Cu", "EC Cu / Al", "EC Cu / Al", "EC Cu / Al", "EC Grade Cu", "EC Grade Cu", "EC Grade Cu", "EC Grade Cu", "EC Grade Cu",
      ],
    },
    {
      heading: "Form Separation",
      values: [
        <div key="u" className="font-extrabold font-sans text-gray-900">Standard</div>,
        "Form 3b / 4b", "Form 4b", "Form 4b", "Form 4b", "Form 4b", "Form 4b", "Form 4b", "Form 4b", "Form 4b",
      ],
    },
    {
      heading: "Ingress Protection",
      values: [
        <div key="u" className="font-extrabold font-sans text-gray-900">IP Class</div>,
        "IP42 / IP54", "IP54 / IP55", "IP54 / IP55", "IP54 / IP55", "IP54 / IP55", "IP54 / IP55", "IP54 / IP55", "IP54 / IP55", "IP55",
      ],
    },
  ];

  const faqs = [
    {
      q: "What standards and certifications do Adhunik Powertech electrical panels conform to?",
      a: "Adhunik Powertech designs, tests, and manufactures panels conforming strictly to IS 8623 and IEC 61439-1 & 2 international standards. Assemblies are type-tested for temperature rise limits, dielectric withstand, short-circuit withstand capacity (up to 65kA for 1 second), and ingress protection classes from IP42 up to IP65."
    },
    {
      q: "What is the typical turnaround time for Single-Line Diagram (SLD) evaluation and quotation?",
      a: "For standard LT, MCC, APFC, and HVAC panels, our design office generates preliminary Single-Line Diagrams (SLD), General Arrangement (GA) layout drawings, and commercial offers within 24 to 48 hours of receiving your motor schedule or tender bill-of-quantities (BOQ)."
    },
    {
      q: "Can clients and MEP consultants witness Factory Acceptance Testing (FAT)?",
      a: "Yes. We invite clients, third-party inspection agencies (TPIA), and MEP consultants to our Delhi NCR manufacturing plant to witness our 4-stage FAT protocol: 1000V DC Megger tests, 2.5 kV Dielectric High-Voltage tests, calibrated busbar torque verification, and live functional sequence simulation."
    },
    {
      q: "How do your panels withstand high ambient temperatures during Delhi NCR summers?",
      a: (
        <>
          Summer temperatures in industrial sheds across Gurugram, Manesar, Faridabad, and Greater Noida frequently surpass 48°C. We design all busbar current densities and switchgear with generous thermal derating factors and integrate forced ventilation with dust-proof louvers or closed-loop industrial{" "}
          <Link 
            href="/panel-air-conditioners" 
            className="text-cyan-700 font-semibold underline hover:text-cyan-900 transition"
          >
            panel air conditioners
          </Link>{" "}
          to prevent nuisance breaker tripping.
        </>
      )
    },
    {
      q: "Can your HVAC and Air Washer panels integrate directly with central BMS systems?",
      a: "Yes. Our HVAC control panels feature native Modbus RTU (RS485) and BACnet IP communication cards, enabling seamless integration with central Building Management Systems (BMS) for real-time monitoring of drive speeds, motor run/trip status, differential pressure alarms, and energy consumption."
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
                Electrical Control Panel Manufacturers in Delhi NCR <br />
                <span className="text-cyan-700">Custom LT, MCC & PCC Switchboards</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                Adhunik Powertech designs, fabricates, and tests heavy-duty LT panels, Motor Control Centers (MCC), Power Control Centers (PCC), and smart HVAC control panels. Engineered with Tier-1 switchgear (Schneider, L&T, Siemens) and thermally derated for harsh Northern India ambient conditions. Trusted by top industrial leaders.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#rfq-section"
                  className="px-6 py-3.5 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm transition shadow-md flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Submit SLD / BOQ for Quotation
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

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white border border-gray-200 rounded-2xl p-4 shadow-xl">
                <div className="relative w-full h-[320px] rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                  <Image
                    src="/Adhunik Electrical Panel.webp"
                    alt="Custom Industrial Electrical Switchboard"
                    width={450}
                    height={400}
                    priority
                    className="object-contain w-full h-full p-2"
                  />
                </div>
                <div className="p-4 bg-gray-50 rounded-xl mt-4 border border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-gray-500 block">Switchgear Integration</span>
                    <strong className="text-gray-800 font-semibold">Schneider • L&T • Siemens • Others</strong>
                  </div>
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-800 font-bold rounded">
                    100% FAT Tested
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE CORE PROMISES */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center flex-shrink-0 font-bold">
                <CheckCircle2 className="w-6 h-6 text-cyan-700" />
              </div>
              <div>
                <h2 className="text-base font-bold text-gray-900 mb-1">Zero Specification Mismatches</h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We submit detailed technical drawings, busbar layouts, and GA footprints for your written approval before cutting starts. What arrives on site is exactly what you signed off.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center flex-shrink-0 font-bold">
                <ShieldCheck className="w-6 h-6 text-cyan-700" />
              </div>
              <div>
                <h2 className="text-base font-bold text-gray-900 mb-1">No Compliance Failures</h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Every switchboard fully complies with official national and international safety and manufacturing standards, backed by certified short-circuit fault tests (up to 65kA/1s) for trouble-free consultant approvals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center flex-shrink-0 font-bold">
                <HardHat className="w-6 h-6 text-cyan-700" />
              </div>
              <div>
                <h2 className="text-base font-bold text-gray-900 mb-1">Support Past the Factory Gate</h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Located directly in Delhi NCR, our electrical engineers provide on-site commissioning support across Gurugram, Manesar, Noida, and Delhi NCR regions. We also offer remote troubleshooting and PLC/HMI programming support for clients across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-2">
            Engineered Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Industrial Electrical Panels Built for Any Load
          </h2>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            From primary high-capacity power intake to specialized air-side HVAC starters, explore our comprehensive range of custom low-tension assemblies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {panelCatalog.map((panel) => (
            <div 
              key={panel.id} 
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-cyan-400"
            >
              <div>
                <div className="relative w-full h-52 bg-gradient-to-b from-gray-50 to-gray-100/60 border-b border-gray-100 flex items-center justify-center p-4 overflow-hidden">
                  <Image
                    src={panel.image}
                    alt={panel.title}
                    width={400}
                    height={260}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-800 transition">
                    {panel.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {panel.shortDesc}
                  </p>
                </div>

                <div className="bg-gray-50/70 p-5 grid grid-cols-2 gap-3 text-xs border-b border-gray-100">
                  {panel.specs.map((s, idx) => (
                    <div key={idx}>
                      <span className="text-gray-400 block font-medium">{s.label}</span>
                      <strong className="text-gray-800 font-semibold">{s.val}</strong>
                    </div>
                  ))}
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-3">
                    Built-in Engineering Features
                  </span>
                  <ul className="space-y-2 text-xs text-gray-700">
                    {panel.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Link
                    href={panel.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-900 transition flex-1"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, panelType: panel.title }));
                      const el = document.getElementById("rfq-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-gray-900 hover:bg-cyan-800 text-white text-xs font-semibold transition"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EXECUTION DISCIPLINE */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-2">
              Execution Discipline
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              From Design Approval to Commissioning
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Every order follows a documented engineering protocol so what arrives on site integrates without modification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-2xl font-extrabold text-cyan-700 mb-3 font-mono">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL SPECIFICATION MATRIX */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-1">
            Verified Parameters
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            LT & PCC Switchboard Engineering Specifications
          </h2>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm bg-white">
          <table className="w-full text-xs text-left text-gray-600 border-collapse">
            <thead className="text-[11px] text-white uppercase bg-cyan-800">
              <tr className="text-center">
                <th className="py-3 px-3 border-r border-cyan-700 bg-cyan-900 text-white font-bold sticky left-0 z-10 text-left">
                  Rating Range
                </th>
                <th className="py-3 px-2 border-r border-cyan-700">630A</th>
                <th className="py-3 px-2 border-r border-cyan-700">800A</th>
                <th className="py-3 px-2 border-r border-cyan-700">1000A</th>
                <th className="py-3 px-2 border-r border-cyan-700">1250A</th>
                <th className="py-3 px-2 border-r border-cyan-700">1600A</th>
                <th className="py-3 px-2 border-r border-cyan-700">2000A</th>
                <th className="py-3 px-2 border-r border-cyan-700">2500A</th>
                <th className="py-3 px-2 border-r border-cyan-700">3200A</th>
                <th className="py-3 px-2">4000A</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {lt_pcc_specs.map((row, index) => (
                <tr key={index} className="text-center hover:bg-gray-50 transition">
                  <td className="py-3 px-3 text-left font-bold text-gray-900 bg-gray-50 border-r border-gray-200 sticky left-0 z-10">
                    {row.heading}
                  </td>
                  {row.values.slice(1).map((val, i) => (
                    <td key={i} className="py-3 px-2 border-r border-gray-200 font-medium">
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. PROVEN SECTOR DEPLOYMENTS */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Sectors & Infrastructure We Power
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Delivering dependable electrical control systems for mission-critical installations across Northern India.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Automobile & Ancillary", desc: "Press shop exhaust & heavy MCC panels" },
              { title: "HVAC & Cleanrooms", desc: "Static pressure VFD loops & sterile AHUs" },
              { title: "Pharma & Healthcare", desc: "Form 4b segregation & hygiene switchgear" },
              { title: "Commercial IT Parks", desc: "High-density PCC intake & APFC panels" },
              { title: "Food & Beverage", desc: "IP65 washdown-rated drive enclosures" },
              { title: "Substation Infrastructure", desc: "11kV / 33kV VCB transformer breakers" },
              { title: "Water Treatment (STP/ETP)", desc: "Automated pump lead-lag switchboards" },
              { title: "Cold Chain Storage", desc: "Ammonia & refrigerant compressor starters" }
            ].map((sector, sIdx) => (
              <div key={sIdx} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-center">
                <h3 className="text-sm font-bold text-gray-900 mb-1">{sector.title}</h3>
                <p className="text-[11px] text-gray-500">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONNECTED RFQ FORM (EmailJS + reCAPTCHA v3) */}
      <section id="rfq-section" className="py-16 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-cyan-700/20 rounded-3xl p-8 sm:p-12 shadow-xl relative">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700">
              Direct Engineering Consultation
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
              Submit Your Single-Line Diagram (SLD)
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Share your motor schedule or tender bill-of-quantities (BOQ). Our team will verify busbar sizing, feeder protection coordination, and deliver a detailed commercial quote within 24 to 48 hours.
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
                  placeholder="e.g. Sales / Procurement Head"
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

            {/* Row 2: Company and Panel Selector */}
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
                  placeholder="e.g. Automobile Plant, Manesar"
                  className="w-full bg-gray-50/80 border border-gray-300 rounded-xl p-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-700 focus:bg-white transition"
                />
                {errors.company && <p className="text-red-500 text-xs mt-1 font-medium">{errors.company}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  Primary Panel Required
                </label>
                <select
                  name="panelType"
                  value={formData.panelType}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50/80 border border-gray-300 rounded-xl p-3.5 text-sm text-gray-800 focus:outline-none focus:border-cyan-700 focus:bg-white transition cursor-pointer"
                >
                  <option value="Power Control Center (PCC / LT Main Distribution)">
                    Power Control Center (PCC / LT Main Distribution)
                  </option>
                  <option value="Motor Control Center (MCC / IMCC)">
                    Motor Control Center (MCC / IMCC)
                  </option>
                  <option value="HVAC / AHU Starter Control Panel">
                    HVAC / AHU Starter Control Panel
                  </option>
                  <option value="Automatic Power Factor Correction (APFC) Panel">
                    Automatic Power Factor Correction (APFC) Panel
                  </option>
                  <option value="VFD & PLC Process Automation Panel">
                    VFD & PLC Process Automation Panel
                  </option>
                  <option value="Fire Fighting Pump & Smoke Pressurization Panel">
                    Fire Fighting Pump & Smoke Pressurization Panel
                  </option>
                  <option value="11kV / 33kV HT VCB Substation Panel">
                    11kV / 33kV HT VCB Substation Panel
                  </option>
                </select>
              </div>
            </div>

            {/* Row 3: Switchgear Radio Cards */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5">
                Preferred Switchgear Brand
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

            {/* Hidden Input to capture Email if required by EmailJS template */}
            <input 
              type="hidden" 
              name="email" 
              value={formData.email || "info@adhunikpowertech.com"} 
            />

            {/* Hidden Input to pass the form source info into EmailJS */}
            <input 
              type="hidden" 
              name="message" 
              value={`Electrical Panel Inquiry - Panel: ${formData.panelType} | Make: ${formData.switchgear} | Location: ${formData.company}`} 
            />

            {/* Submit Action Button */}
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
                  ? "Verifying & Submitting Inquiry..." 
                  : "Submit Single-Line Diagram for Engineering Review"}
              </span>
            </button>

            <p className="text-[11px] text-center text-gray-500 font-medium">
              Reviewed by Adhunik Powertech engineering team.
            </p>
          </form>

        </div>
      </section>

      {/* 8. TECHNICAL FAQS ACCORDION */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Frequently Asked Questions</h2>
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

      {/* 9. BOTTOM CONVERSION FOOTER STRIP */}
      <section className="py-12 bg-cyan-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Have a Tender Bill of Quantities (BOQ) or Electrical Schedule?
          </h2>
          <p className="text-xs sm:text-sm text-cyan-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Our engineering team in Gurugram / Delhi NCR reviews electrical schedules and delivers complete GA drawings and offers within 24–48 hours.
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