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
  HardHat,
  Zap,
  Layers,
  Settings,
  Activity,
  Award
} from 'lucide-react';

export default function PccPanelClient() {
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
    ratingRequired: "1600A - 2500A (Standard Industrial Incomer)",
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
        ratingRequired: "1600A - 2500A (Standard Industrial Incomer)",
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

  // Detailed Technical Specification Matrix for PCC Boards
  const pccTechnicalSpecs = [
    { label: "Rated Operational Voltage (Ue)", value: "415V AC ± 10%, 3-Phase, 4-Wire, 50 Hz" },
    { label: "Rated Insulation Voltage (Ui)", value: "1000V AC / 690V AC Rated Impulse Withstand (8kV)" },
    { label: "Rated Current Capacity (In)", value: "630A up to 4000A Continuous Rating (Thermal Derated)" },
    { label: "Short-Circuit Fault Withstand", value: "50kA / 65kA rms for 1.0 Second (CPRI Type-Tested)" },
    { label: "Internal Compartmentalization", value: "Form 3b / Form 4b (IS 8623 / IEC 61439-1 & 2 Compliant)" },
    { label: "Busbar Material & Grade", value: "Electrolytic Grade Copper (99.9% IACS) or E91E Aluminium" },
    { label: "Busbar Insulation", value: "Full Heat-Shrinkable PVC Sleeves with Color-Coded Phase Indicators" },
    { label: "Enclosure Construction", value: "1.6mm / 2.0mm CRCA Sheet Metal, Modular Non-Welded Frame" },
    { label: "Surface Finish & Coating", value: "Automated 7-Tank Pretreatment, 60–80μm Pure Polyester Powder Coat (RAL 7032/7035)" },
    { label: "Ingress Protection Class", value: "IP42 (Standard Indoor) / IP54 / IP55 (Continuous CNC PU Foam Gasketing)" },
    { label: "Incomer Switchgear Options", value: "Air Circuit Breakers (ACB) 3P/4P Drawout with Microprocessor LSIG Trip Releases" },
    { label: "Outgoing Feeders", value: "Fixed / Drawout ACB, MCCBs with Adjustable Thermal-Magnetic or Electronic Releases" },
    { label: "Metering & Telemetry", value: "Class 0.5 / Class 1.0 Smart Digital Multi-Function Meters with RS485 Modbus RTU" }
  ];

  const faqs = [
    {
      q: "What is the primary difference between a PCC panel and an MCC panel?",
      a: "A Power Control Center (PCC) serves as the primary distribution hub directly connected to the transformer secondary or DG sets, managing heavy power feeders up to 4000A. A Motor Control Center (MCC) focuses downstream on individual motor circuits, housing DOL starters, Star-Delta feeders, VFDs, and soft starters for mechanical equipment."
    },
    {
      q: "Why is Form 4b internal segregation recommended for industrial PCC boards?",
      a: "Form 4b segregation isolates busbars from functional units and separates terminals for external conductors from the functional unit. This provides maximum safety for maintenance engineers, allowing inspection of individual feeders without shutting down the entire plant main bus."
    },
    {
      q: "How does Adhunik Powertech manage busbar temperature rise in high ambient summer conditions?",
      a: "Northern India ambient shed temperatures often exceed 48°C. We design all busbar cross-sections with deliberate thermal derating, keeping current densities strictly within safety thresholds (1.0–1.2 A/mm² for aluminium, 1.5–1.6 A/mm² for copper) to eliminate nuisance ACB tripping."
    },
    {
      q: "Can this PCC board support automated bus coupler source changeovers (AMF)?",
      a: "Yes. Our panels feature motorized Air Circuit Breakers (ACBs) with programmable PLC or relay-based auto source changeover (AMF logic), electrical/mechanical interlocks, and DG synchronization."
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
                Power Control Center (PCC) & <br />
                <span className="text-cyan-700">Main LT Distribution Panels</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                Engineered as the primary electrical backbone for heavy manufacturing plants, automotive corridors, and commercial high-rises. Adhunik Powertech builds custom substation intake boards with motorized source synchronization, Form 4b internal segregation, and verified 65kA short-circuit fault withstand capacity.
              </p>

              {/* Trust Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">4000A</div>
                  <div className="text-xs text-gray-500 font-medium">Rated Current</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">65 kA</div>
                  <div className="text-xs text-gray-500 font-medium">1-Sec Fault Rating</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">Form 4b</div>
                  <div className="text-xs text-gray-500 font-medium">Segregation Standard</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">IP54 / IP55</div>
                  <div className="text-xs text-gray-500 font-medium">PU Gasketing Seal</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#rfq-section"
                  className="px-6 py-3.5 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm transition shadow-md flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Submit SLD for 24-Hr Quotation
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
                    src="/PCC & Main LT Distribution Panel.webp"
                    alt="PCC and Main LT Distribution Panel"
                    width={500}
                    height={380}
                    priority
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="p-4 bg-gray-50 rounded-xl mt-4 border border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-gray-500 block">Incomer Switchgear Brands</span>
                    <strong className="text-gray-800 font-semibold">Schneider • L&T • Siemens • Others</strong>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded">
                    100% FAT Sequence Tested
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES (PCC SPECIFIC) */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-2">
              Mission-Critical Power Distribution
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Engineered for Maximum Continuity & Complete Operator Safety
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Adhunik Powertech PCC boards combine heavy-gauge fabrication with smart protective relaying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Intelligent ACB Incomers</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Drawout Air Circuit Breakers up to 4000A with microprocessor-based LSIG (Overload, Short-Circuit, Instantaneous, Earth Fault) trip units, offering zone-selective interlocking (ZSI) and motorized remote operation.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Form 4b Isolation Alleys</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Total separation between busbars, functional breaker compartments, and external cable connection alleys ensures that technicians can service isolated feeder modules without de-energizing the main power line.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Auto-Source Synchronization</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Dual incomer changeover schemes (Transformer + Captive Generator) with programmable bus-coupler logic, auto-mains-failure (AMF) controllers, and reverse power protection for seamless changeover.
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
            PCC Switchboard Engineering Data Sheet
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Manufactured and inspected strictly in compliance with IS 8623 and IEC 61439-1 & 2 standards.
          </p>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white">
          <table className="w-full text-xs text-left text-gray-700 border-collapse">
            <thead className="text-[11px] text-white uppercase bg-cyan-800">
              <tr>
                <th className="py-3.5 px-5 font-bold w-1/3">Design Parameter</th>
                <th className="py-3.5 px-5 font-bold w-2/3">Adhunik Powertech Specification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pccTechnicalSpecs.map((item, idx) => (
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

      {/* 4. PROCESS DISCIPLINE (From SLD to Site Dispatch) */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-2">
              Quality Assurance
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Rigorous 4-Stage Factory Acceptance Testing (FAT)
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              We invite clients, consultants, and inspection agencies to witness full validation prior to dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Megger Test (1000V DC)", desc: "Phase-to-phase and phase-to-earth insulation resistances tested above certified threshold limits." },
              { num: "02", title: "High-Voltage (2.5 kV)", desc: "Auxiliary and main busbar power circuits subjected to 2500V AC for 60 seconds without leakage." },
              { num: "03", title: "Busbar Torque Verification", desc: "Joint conductivity confirmed with calibrated torque wrenches and high-current millivolt drop inspection." },
              { num: "04", title: "Functional Interlock Checks", desc: "Live simulation of ACB auto-trip cycles, bus-coupler interlocks, and Modbus meter register polling." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-2xl font-extrabold text-cyan-700 mb-2 font-mono">
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

      {/* 5. DIRECT SLD RFQ SUBMISSION FORM */}
      <section id="rfq-section" className="py-16 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-cyan-700/20 rounded-3xl p-8 sm:p-12 shadow-xl relative">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700">
              Fast 24-Hr Techno-Commercial Offer
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
              Request a PCC & LT Panel Quotation
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Submit your transformer rating, incomer capacity, or Single-Line Diagram (SLD). Our senior engineering desk will verify busbar sizing, feeder segregation, and provide a comprehensive proposal.
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

            {/* Row 2: Company and Rating Selector */}
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
                  Incomer Current Rating Required
                </label>
                <select
                  name="ratingRequired"
                  value={formData.ratingRequired}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50/80 border border-gray-300 rounded-xl p-3.5 text-sm text-gray-800 focus:outline-none focus:border-cyan-700 focus:bg-white transition cursor-pointer"
                >
                  <option value="630A - 1000A Incomer (Light / Medium Distribution)">
                    630A - 1000A Incomer (Light / Medium Distribution)
                  </option>
                  <option value="1250A - 2000A Incomer (Standard Plant Incomer)">
                    1250A - 2000A Incomer (Standard Plant Incomer)
                  </option>
                  <option value="2500A - 3200A Incomer (Heavy Substation Secondary)">
                    2500A - 3200A Incomer (Heavy Substation Secondary)
                  </option>
                  <option value="4000A Incomer (High-Capacity Main PCC Board)">
                    4000A Incomer (High-Capacity Main PCC Board)
                  </option>
                  <option value="Custom Incomer + AMF Bus-Coupler Scheme">
                    Custom Incomer + AMF Bus-Coupler Scheme
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

            {/* Hidden Input for EmailJS */}
            <input 
              type="hidden" 
              name="email" 
              value={formData.email || "info@adhunikpowertech.com"} 
            />

            <input 
              type="hidden" 
              name="message" 
              value={`PCC Panel Inquiry - Rating: ${formData.ratingRequired} | Switchgear: ${formData.switchgear} | Location: ${formData.company}`} 
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
                  : "Submit Single-Line Diagram for Engineering Review"}
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
            Have a Transformer Substation Drawing or Tender BOQ?
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