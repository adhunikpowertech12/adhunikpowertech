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
  Cpu,
  Monitor,
  Fan,
  Network,
  Sliders,
  Layers,
  ThermometerSnowflake,
  Settings
} from 'lucide-react';

export default function VfdControlPanelsClient() {
  const router = useRouter();
  const form = useRef(null);

  const notifye = () => toast.error("Invalid Details. Please check the required fields.");
  const notifys = () => toast.success("Enquiry Sent Successfully! Our automation engineering team will connect with you.");

  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    company: "",
    automationType: "PLC + HMI Integrated Control Panel",
    preferredMake: "Siemens",
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
        automationType: "PLC + HMI Integrated Control Panel",
        preferredMake: "Siemens",
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

  const vfdTechnicalSpecs = [
    { label: "Target Automation Systems", value: "Multi-Pump Cascade Staging, Material Handling, HVAC VFD Loops, Extruders, Batch Mixing" },
    { label: "Supported PLC Platforms", value: "Siemens (S7-1200 / S7-1500), Schneider (Modicon M221/M241), Delta, Allen-Bradley" },
    { label: "Human Machine Interface (HMI)", value: "7\" to 15\" Color Touchscreen with Custom Dynamic Mimic Visualizations & Alarm Logs" },
    { label: "Variable Frequency Drives (VFD)", value: "0.75 kW to 315 kW Heavy Duty Drives (Danfoss, Schneider, Siemens, ABB, Delta)" },
    { label: "Harmonic & Spike Protection", value: "Built-in Line Reactors (AC Chokes), Output dV/dt Filters, and EMI/RFI Line Suppressors" },
    { label: "Industrial Fieldbus Networks", value: "Profinet, Ethernet/IP, Modbus TCP/RTU, RS485, and Profibus-DP Architectures" },
    { label: "Thermal Enclosure Conditioning", value: "Forced Louver Air Cooling or Closed-Loop Industrial Panel Air Conditioners (<35°C Internal)" },
    { label: "Control Supply & Safety Isolation", value: "24V DC Regulated SMPS, Galvanic Analog Isolators, Relays & Surge Protection (SPD)" },
    { label: "Enclosure Ingress Protection", value: "IP54 (Mechanical Rooms) / IP55 / IP65 (Dust-proof Polyurethane PU Gasketed)" },
    { label: "Panel Steel & Pre-treatment", value: "1.6mm / 2.0mm CRCA Sheet, 7-Tank Pretreated, Electrostatic RAL 7035/7032 Powder Coat" },
    { label: "Programming & Commissioning", value: "Full Ladder / FBD / SCL logic development, on-site loop checking, and SCADA integration" }
  ];

  const faqs = [
    {
      q: "Why is closed-loop cooling or panel AC essential for VFD and PLC automation cubicles?",
      a: "Industrial automation drives and switchmode power supplies generate substantial internal heat and are sensitive to ambient temperatures exceeding 40°C. In Delhi NCR industrial sheds where summer temperatures surpass 48°C, closed-loop panel air conditioners maintain interior temperatures under 35°C while preventing dust, moisture, and conductive airborne particles from settling onto drive power electronics."
    },
    {
      q: "How do AC line reactors and dV/dt filters protect drives and motor windings?",
      a: "Line reactors (input AC chokes) dampen voltage surges, mitigate harmonic distortion injected back into the facility grid, and protect the drive rectifier bridge. Output dV/dt filters round off high-frequency voltage spikes generated by fast-switching IGBTs, safeguarding motor insulation when cables between the panel and motor exceed 30–50 meters."
    },
    {
      q: "Can Adhunik Powertech integrate custom dynamic SCADA screens and cloud IoT monitoring?",
      a: "Yes. Our automation team programs color touchscreen HMIs with custom dynamic equipment mimic diagrams, operational trend charts, and per-fault diagnostics. We can also integrate IoT gateways for remote smartphone/dashboard telemetry and central SCADA connectivity over Profinet or Modbus TCP."
    },
    {
      q: "Can the panel manage automatic cascade multi-pump staging with lead-lag logic?",
      a: "Yes. For booster pumping stations, cooling towers, and chiller loops, our PLC logic dynamically stages auxiliary pumps across variable-speed drives based on pressure sensor feedback, balancing total running hours across all motors to maximize mechanical lifespan."
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
                VFD &amp; PLC Process Automation Panels<br />
                <span className="text-cyan-700"> Manufacturer in Delhi NCR</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                Variable frequency drive and PLC automation cubicles designed for precise machine speed modulation, multi-pump cascade staging, and complex process sequencing across Delhi NCR, Gurugram, and Manesar. Equipped with touchscreen HMIs, input line reactors, and integrated climate control to maintain internal temperatures below 35°C.
              </p>

              {/* Trust Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">Siemens / Delta</div>
                  <div className="text-xs text-gray-500 font-medium">PLC Hardware</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">7&quot; - 15&quot;</div>
                  <div className="text-xs text-gray-500 font-medium">Touch HMI Screen</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">&lt; 35°C</div>
                  <div className="text-xs text-gray-500 font-medium">Enclosure Cooling</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">Profinet</div>
                  <div className="text-xs text-gray-500 font-medium">Ethernet / Modbus</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#rfq-section"
                  className="px-6 py-3.5 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm transition shadow-md flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Submit Automation IO List for Quotation
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
                    src="/Adhunik plc-vfd-control-panel.webp"
                    alt="VFD and PLC Process Automation Electrical Panel"
                    width={500}
                    height={380}
                    priority
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="p-4 bg-gray-50 rounded-xl mt-4 border border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-gray-500 block">Supported Hardware Platforms</span>
                    <strong className="text-gray-800 font-semibold">Siemens • Schneider • Delta • ABB</strong>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded">
                    100% Sequence FAT
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOUNDATIONAL EDUCATION: WHAT IS A VFD & PLC AUTOMATION PANEL */}
      <section className="py-16 lg:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-2">
              Industrial Automation Fundamentals
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              What is a VFD &amp; PLC Process Automation Control Panel?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed text-justify sm:text-left">
              In modern industrial manufacturing and complex fluid systems, fixed-speed motor running results in massive energy wastage, mechanical shock, and sluggish process control. A <strong>VFD &amp; PLC Process Automation Panel</strong> combines intelligent digital logic controllers (Programmable Logic Controllers) with solid-state speed regulators (Variable Frequency Drives) and operator touchscreens (HMIs) inside a climate-controlled enclosure. This setup automates multi-motor sequences, matches motor output to dynamic process demands, and delivers complete real-time production telemetry.
            </p>
          </div>

          {/* 3 Core Architecture Pillars: PLC, VFD, and HMI/SCADA */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            
            {/* What is a PLC in the Panel */}
            <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-cyan-500 transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-5">
                  <Cpu className="w-6 h-6 text-cyan-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  1. The Brain: Programmable Logic Controller (PLC)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify mb-3">
                  The PLC reads field sensors (pressure, temperature, flow, limit switches) across digital and analog I/O channels.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  Running tailored logic programs (Ladder, FBD, SCL), it handles complex interlocking, automatic lead-lag equipment rotation, safety cutoffs, and recipe-driven batch sequencing.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-gray-200 text-[11px] text-gray-700 space-y-1 font-medium">
                <div><strong>Supported Hardware:</strong> Siemens (S7-1200 / 1500), Schneider, Delta, Allen-Bradley</div>
                <div><strong>Core Execution:</strong> Closed-loop PID algorithms &amp; safety sequencing</div>
              </div>
            </div>

            {/* What is a VFD in the Panel */}
            <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-cyan-500 transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-5">
                  <Sliders className="w-6 h-6 text-cyan-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  2. The Muscle: Variable Frequency Drive (VFD)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify mb-3">
                  The VFD converts incoming 50 Hz AC power into an adjustable frequency and voltage output, modulating induction motor RPM smoothly from 0 to 100%.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  This eliminates starting inrush current spikes, prevents hydraulic water hammer in long pump pipelines, and reduces plant electrical consumption by up to 30–50% under partial loads.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-gray-200 text-[11px] text-gray-700 space-y-1 font-medium">
                <div><strong>Protective Topology:</strong> AC line chokes, dV/dt filters &amp; bypass contactors</div>
                <div><strong>Energy Impact:</strong> Smooth ramp start, soft stop &amp; kW optimization</div>
              </div>
            </div>

            {/* What is HMI & Industrial Networking */}
            <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-cyan-500 transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-5">
                  <Monitor className="w-6 h-6 text-cyan-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  3. The Interface: Touchscreen HMI &amp; Fieldbus
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify mb-3">
                  Industrial color touchscreens (7&quot; to 15&quot;) mounted on panel doors display dynamic machine mimic diagrams, live process curves, and detailed fault history.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  Digital networking via Profinet, Ethernet/IP, or Modbus eliminates thick bundles of hardwired multi-core cabling and allows direct integration into facility SCADA and cloud IoT dashboards.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-gray-200 text-[11px] text-gray-700 space-y-1 font-medium">
                <div><strong>Touchscreen Displays:</strong> 7&quot; to 15&quot; high-resolution IP65 front bezels</div>
                <div><strong>Protocols:</strong> Profinet, Modbus TCP/RTU, Ethernet/IP, BACnet</div>
              </div>
            </div>

          </div>

          {/* Technical Comparison Table: Conventional Hardwired Panels vs. Integrated PLC-VFD Panels */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm mb-12">
            <div className="bg-cyan-900 text-white px-6 py-4">
              <h3 className="text-base sm:text-lg font-bold">
                Comparison: Integrated PLC-VFD Automation Panels vs. Conventional Starter Panels
              </h3>
              <p className="text-xs text-cyan-200 mt-0.5">
                Why modern facilities are transitioning from electro-mechanical relay logic to digital PLC automation cubicles.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-gray-700 border-collapse">
                <thead className="bg-gray-100 text-gray-800 uppercase font-semibold text-[11px] border-b border-gray-200">
                  <tr>
                    <th className="py-3 px-5 w-1/4">System Characteristic</th>
                    <th className="py-3 px-5 w-3/8 text-cyan-950">Integrated PLC + VFD Automation Panel</th>
                    <th className="py-3 px-5 w-3/8">Conventional DOL / Star-Delta Starter Panel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-3.5 px-5 font-bold text-gray-900 bg-gray-50/40">Motor Speed &amp; Torque Control</td>
                    <td className="py-3.5 px-5 font-semibold text-cyan-950">Continuous variable modulation (0–100%) via PID loop feedback</td>
                    <td className="py-3.5 px-5">Fixed 100% full-speed running only; zero operational modulation</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-3.5 px-5 font-bold text-gray-900 bg-gray-50/40">Starting Inrush Current</td>
                    <td className="py-3.5 px-5 font-semibold text-cyan-950">Soft, progressive ramp up (1.0x to 1.5x full load current)</td>
                    <td className="py-3.5 px-5">Severe current spikes (6x to 8x rated current) causing voltage dips</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-3.5 px-5 font-bold text-gray-900 bg-gray-50/40">Process Flexibility &amp; Logic</td>
                    <td className="py-3.5 px-5 font-semibold text-cyan-950">Software reprogrammable; recipe control, staging, timers &amp; logic</td>
                    <td className="py-3.5 px-5">Rigid physical timers and auxiliary contactor relay wiring</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-3.5 px-5 font-bold text-gray-900 bg-gray-50/40">Diagnostics &amp; Operator Visibility</td>
                    <td className="py-3.5 px-5 font-semibold text-cyan-950">Full color HMI graphic screens with timestamped trip alarms</td>
                    <td className="py-3.5 px-5">Basic door pushbuttons and red/green indicator lamps only</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-3.5 px-5 font-bold text-gray-900 bg-gray-50/40">Energy Consumption Impact</td>
                    <td className="py-3.5 px-5 font-semibold text-cyan-950">Cube law power savings (affinity laws) on centrifugal pumps and fans</td>
                    <td className="py-3.5 px-5">Motors pull maximum power; throttled via inefficient mechanical dampers/valves</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Thermal Management Callout */}
          <div className="bg-cyan-50/60 border border-cyan-200/80 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-cyan-950 max-w-3xl">
              <strong>Engineered for High-Ambient Industrial Sheds:</strong> VFD drives and electronic power supplies dissipate notable heat. During Delhi NCR summers (exceeding 45°C), uncooled enclosures lead to drive tripping and microprocessor failure. Adhunik Powertech designs automation enclosures with integrated closed-circuit industrial panel air conditioners that keep internal core temperatures strictly below 35°C.
            </div>
            <a
              href="#rfq-section"
              className="px-4 py-2.5 bg-cyan-800 hover:bg-cyan-900 text-white rounded-lg text-xs font-bold whitespace-nowrap shadow-sm transition"
            >
              Submit Automation Specs
            </a>
          </div>

        </div>
      </section>

      {/* 2. CORE CAPABILITIES */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-2">
              Integrated Process Control
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Engineered for Seamless Machine Synchronization &amp; Operator Visibility
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Combining precision speed regulation, intuitive touchscreen interfaces, and industrial-grade thermal safeguarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Dynamic SCADA &amp; HMI</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Color touchscreen interfaces engineered with graphic mimic process diagrams, per-motor speed control sliders, live trend curves, and timestamped fault history for rapid diagnostics.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Line Reactors &amp; Harmonic Chokes</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Integrated input AC line reactors and output filters shield delicate drive electronics from supply-side voltage spikes while mitigating motor winding insulation stress across long cable runs.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <ThermometerSnowflake className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Internal Climate Management</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                High-capacity exhaust fans or closed-circuit industrial panel air conditioner units keep internal enclosure temperatures below 35°C, preventing high-ambient processor throttling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS DATA TABLE */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-1">
            Engineering Parameters
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            VFD &amp; PLC Automation Cubicle Technical Data
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Manufactured and tested strictly in compliance with IS 8623, IEC 61439-1 &amp; 2, and IEC 61800-3/5 drive standards.
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
              {vfdTechnicalSpecs.map((item, idx) => (
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

      {/* 4. REGIONAL COVERAGE STRIP (PLACED RIGHT BEFORE FAQS) */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-1">
            Northern India Engineering Network
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Supplying VFD &amp; PLC Automation Panels Across Major Industrial Hubs
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

      {/* 4. RFQ SUBMISSION FORM */}
      <section id="rfq-section" className="py-16 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-cyan-700/20 rounded-3xl p-8 sm:p-12 shadow-xl relative">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700">
              Direct Automation Consultation
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
              Request a VFD / PLC Automation Proposal
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Submit your motor IO list, process description, or Single-Line Diagram (SLD). Our senior controls engineers will verify drive ratings, network architecture, and provide a comprehensive proposal.
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
                  Full Name &amp; Designation *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Automation Engineer / Plant Head"
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

            {/* Row 2: Company and Architecture Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  Company &amp; Plant Location *
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
                  Primary Automation Architecture
                </label>
                <select
                  name="automationType"
                  value={formData.automationType}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50/80 border border-gray-300 rounded-xl p-3.5 text-sm text-gray-800 focus:outline-none focus:border-cyan-700 focus:bg-white transition cursor-pointer"
                >
                  <option value="PLC + HMI Integrated Control Panel">PLC + HMI Integrated Control Panel</option>
                  <option value="Multi-Drive VFD Process Synchronization Panel">Multi-Drive VFD Process Synchronization Panel</option>
                  <option value="Pump Staging Cascade VFD Automation Panel">Pump Staging Cascade VFD Automation Panel</option>
                  <option value="SCADA / BMS Modbus-Profinet Gateway Panel">SCADA / BMS Modbus-Profinet Gateway Panel</option>
                  <option value="Custom Machine OEM Automation Panel">Custom Machine OEM Automation Panel</option>
                </select>
              </div>
            </div>

            {/* Row 3: Hardware Brand Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5">
                Preferred PLC / VFD Brand
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                {[
                  { id: 'siemens', label: 'Siemens (S7-1200 / 1500)', value: 'Siemens' },
                  { id: 'schneider', label: 'Schneider Electric', value: 'Schneider Electric' },
                  { id: 'delta', label: 'Delta Automation', value: 'Delta' },
                  { id: 'others', label: 'Others / Danfoss', value: 'Others' }
                ].map((item) => (
                  <label
                    key={item.id}
                    className={`flex items-center justify-center p-3 rounded-xl border cursor-pointer transition select-none font-medium ${
                      formData.preferredMake === item.value
                        ? 'border-cyan-700 bg-cyan-50/70 text-cyan-900 font-bold shadow-sm'
                        : 'border-gray-200 bg-gray-50/80 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="preferredMake"
                      value={item.value}
                      checked={formData.preferredMake === item.value}
                      onChange={handleInputChange}
                      className="mr-2 accent-cyan-700 cursor-pointer"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message / IO requirements */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5">
                Drive Ratings, IO Count &amp; Communication Protocol
              </label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Mention number of drives and kW ratings, approximate Digital/Analog IO count, preferred fieldbus (Profinet/Modbus), or cooling needs..."
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
              value={`VFD/PLC Panel Inquiry - Arch: ${formData.automationType} | Make: ${formData.preferredMake} | Details: ${formData.message}`} 
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
                  : "Submit Automation Specs for Engineering Review"}
              </span>
            </button>

            <p className="text-[11px] text-center text-gray-500 font-medium">
              Directly routed to Adhunik Powertech engineering team.
            </p>
          </form>

        </div>
      </section>

      {/* 5. TECHNICAL FAQS ACCORDION */}
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

      {/* 6. BOTTOM CONVERSION FOOTER STRIP */}
      <section className="py-12 bg-cyan-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Need Custom PLC Programming or Multi-Drive Panel Engineering?
          </h2>
          <p className="text-xs sm:text-sm text-cyan-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Our controls team in Gurugram / Delhi NCR reviews IO schedules and delivers complete GA layout drawings, electrical schematics, and commercial quotes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@adhunikpowertech.com"
              className="px-6 py-3 rounded-lg bg-white text-cyan-900 hover:bg-cyan-50 font-bold text-xs sm:text-sm transition shadow"
            >
              Email IO Schedule: info@adhunikpowertech.com
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