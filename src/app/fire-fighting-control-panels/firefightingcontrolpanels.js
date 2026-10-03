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
  Flame,
  Wind,
  Zap,
  Activity,
  Layers,
  HardHat,
  Gauge
} from 'lucide-react';

export default function FireFightingControlPanelsClient() {
  const router = useRouter();
  const form = useRef(null);

  const notifye = () => toast.error("Invalid Details. Please check the required fields.");
  const notifys = () => toast.success("Enquiry Sent Successfully! Our fire electrical safety team will connect with you.");

  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    company: "",
    panelConfiguration: "Complete Fire Pump Room Set (Hydrant + Sprinkler + Jockey + Engine)",
    preferredMake: "Schneider Electric",
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
        panelConfiguration: "Complete Fire Pump Room Set (Hydrant + Sprinkler + Jockey + Engine)",
        preferredMake: "Schneider Electric",
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

  const fireTechnicalSpecs = [
    { label: "Governing Standards", value: "National Building Code (NBC 2016 Part 4), IS 8623, IEC 61439-1 & 2, NFPA 20"},
    { label: "Enclosure Construction", value: "2-Hour Fire-Rated Sheet Steel (2.0mm CRCA), IP55 Dust & Water Jet Ingress Protection"},
    { label: "Dual Power Auto-Changeover", value: "Four-Pole Motorized ATS / Incomer AMF logic (Normal Mains + Captive Emergency DG)"},
    { label: "Pump Starter Topologies", value: "Automatic Star-Delta & Soft-Starters for Main Hydrant/Sprinkler; DOL for Jockey Pump"},
    { label: "Diesel Engine Controller Sync", value: "Engine starting contactors, 12V/24V dual battery charger, speed & oil pressure trips"},
    { label: "Pressure Cascade Staging", value: "Direct multi-stage pressure switch inputs for automated Jockey-Hydrant-Sprinkler cascading"},
    { label: "Smoke Pressurization & Exhaust", value: "Dedicated starters for Staircase Pressurization, Lift-Well Blowers & Basement Jet Fans"},
    { label: "Fire Alarm (FACP) Interface", value: "Potential-free alarm input contacts, auto-override of thermal overloads during fire runs" },
    { label: "Internal Wiring Specification", value: "Fire Survival (FS) / FRLS ZHFR copper wiring rated up to 950°C for circuit integrity" },
    { label: "Enclosure Finish", value: "7-Tank Chemical Processed, Pure Polyester Powder Coated in Signal Red (RAL 3000 / 3001)" }
  ];

  const faqs = [
    {
      q: "How does the panel automate pressure cascading between Jockey, Hydrant, and Sprinkler pumps?",
      a: "The panel connects directly to independent pressure switches calibrated across distinct bar/psi thresholds on the main fire ring header. When minor pressure drops occur due to line seepage, the Jockey pump runs briefly. If a hydrant valve or sprinkler bulb triggers a major pressure drop, the main electric pump starts automatically. If electrical mains fail, the standby diesel engine pump cranks automatically within seconds."
    },
    {
      q: "Why are staircase and lift-well pressurization fan panels mandatory for fire NOC clearance?",
      a: "According to the National Building Code (NBC 2016), pressurized air prevents hot toxic smoke and lethal combustion gases from penetrating emergency escape routes. Our panels actuate high-velocity blowers immediately upon fire alarm initiation, creating a continuous positive pressure differential inside stairwells and lift shafts to ensure safe egress for occupants."
    },
    {
      q: "Why does the panel bypass motor overload trips during an actual emergency fire event?",
      a: "In compliance with life-safety fire codes, the primary electric fire pump must run to destruction rather than tripping on minor overcurrent during an active fire. Our starter units feature lockable auto-manual switches and bypass circuits ensuring the main water flow continues unabated until the fire is controlled or manually shut off."
    },
    {
      q: "Does the panel provide dual power auto-changeover between utility power and emergency DG?",
      a: "Yes. The panel incorporates an integrated four-pole automatic transfer switch (ATS) with motorized ACB/MCCB breakers and mechanical/electrical interlocking. In the event of grid supply loss, it automatically shifts incomer bus connections to the captive emergency generator within seconds."
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
                Fire Pump &amp; Smoke Pressurization <br />
                <span className="text-cyan-700">Panels in Delhi NCR</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                Life safety electrical starter cubicles engineered for Main Hydrant, Sprinkler, and Jockey pumps alongside staircase and lift-well smoke pressurization blowers across Delhi NCR, Gurugram, and Manesar. Featuring dual power source ATS changeovers, pressure-switch automated cascade sequencing, and full Fire NOC clearance compliance.
              </p>

              {/* Trust Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">NBC 2016</div>
                  <div className="text-xs text-gray-500 font-medium">Safety Standard</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">2-Hour</div>
                  <div className="text-xs text-gray-500 font-medium">Fire-Rated Enclosure</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">ATS Sync</div>
                  <div className="text-xs text-gray-500 font-medium">Dual Power Auto Sync</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-extrabold text-cyan-800">IP55</div>
                  <div className="text-xs text-gray-500 font-medium">Gasketed Protection</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#rfq-section"
                  className="px-6 py-3.5 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm transition shadow-md flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Submit Fire Pump Schedule for Quotation
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
                    src="/Adhunik Fire Panel.webp"
                    alt="Fire Pump and Smoke Pressurization Control Panel"
                    width={500}
                    height={380}
                    priority
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="p-4 bg-gray-50 rounded-xl mt-4 border border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-gray-500 block">Switchgear &amp; Starter Makes</span>
                    <strong className="text-gray-800 font-semibold">Schneider • L&amp;T • Siemens • ABB</strong>
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

      {/* 2. CORE CAPABILITIES */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest block mb-2">
              Mission-Critical Life Safety
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Engineered for Zero Failure During Fire Emergencies
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Combining pressure-triggered automatic pump cascading, diesel engine synchronization, and life-safety escape route smoke pressurization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pressure Switch Cascade Logic</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Monitors header pressure to automate Jockey, Main Electric, and Diesel Standby engine starters in calibrated stages, maintaining continuous hydrant and sprinkler ring pressure.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dual Power Automatic ATS Sync</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Heavy-duty motorized automatic source changeover between electrical grid mains and captive emergency generator power ensures continuous pump operation without operator intervention.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <Wind className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Stairwell &amp; Lift Pressurization</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                High-capacity smoke extraction and positive-pressure air supply fan controls interface directly with the Fire Alarm Panel (FACP) to secure escape paths for safe building evacuation.
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
            Fire Pump &amp; Pressurization Control Panel Specifications
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Manufactured and inspected strictly in compliance with NBC 2016 Part 4, IS 8623, and IEC 61439-1 &amp; 2 standards.
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
              {fireTechnicalSpecs.map((item, idx) => (
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

      {/* 4. RFQ SUBMISSION FORM */}
      <section id="rfq-section" className="py-16 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-cyan-700/20 rounded-3xl p-8 sm:p-12 shadow-xl relative">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700">
              Fire Electrical Engineering Consultation
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
              Request a Fire Pump Panel Proposal
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Submit your pump room motor schedule, pressurization fan ratings, or tender BOQ. Our fire engineering team will verify starter coordination, battery charger sizing, and deliver a comprehensive proposal.
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
                  placeholder="e.g. Fire Safety Officer / MEP Consultant"
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

            {/* Row 2: Company and Configuration Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  Company &amp; Project Location *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Industrial Complex, Gurugram"
                  className="w-full bg-gray-50/80 border border-gray-300 rounded-xl p-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-700 focus:bg-white transition"
                />
                {errors.company && <p className="text-red-500 text-xs mt-1 font-medium">{errors.company}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  Primary Panel Configuration
                </label>
                <select
                  name="panelConfiguration"
                  value={formData.panelConfiguration}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50/80 border border-gray-300 rounded-xl p-3.5 text-sm text-gray-800 focus:outline-none focus:border-cyan-700 focus:bg-white transition cursor-pointer"
                >
                  <option value="Complete Fire Pump Room Set (Hydrant + Sprinkler + Jockey + Engine)">
                    Complete Fire Pump Room Set (Hydrant + Sprinkler + Jockey + Engine)
                  </option>
                  <option value="Main Hydrant & Jockey Pump Control Panel">
                    Main Hydrant &amp; Jockey Pump Control Panel
                  </option>
                  <option value="Sprinkler System Automatic Starter Panel">
                    Sprinkler System Automatic Starter Panel
                  </option>
                  <option value="Diesel Engine Standby Pump Sync Panel">
                    Diesel Engine Standby Pump Sync Panel
                  </option>
                  <option value="Staircase & Lift-Well Pressurization Fan Panel">
                    Staircase &amp; Lift-Well Pressurization Fan Panel
                  </option>
                  <option value="Basement Jet Fan & Smoke Extraction Control Panel">
                    Basement Jet Fan &amp; Smoke Extraction Control Panel
                  </option>
                </select>
              </div>
            </div>

            {/* Row 3: Switchgear Make Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5">
                Preferred Switchgear Make
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                {[
                  { id: 'schneider', label: 'Schneider Electric', value: 'Schneider Electric' },
                  { id: 'lnt', label: 'L&T Electrical', value: 'L&T Electrical' },
                  { id: 'siemens', label: 'Siemens', value: 'Siemens' },
                  { id: 'others', label: 'Others / ABB', value: 'Others' }
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

            {/* Message / Pump HP specifications */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5">
                Pump Ratings (HP / kW) &amp; Fire NOC Details
              </label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Specify pump HP/kW ratings (e.g. 75HP Hydrant, 75HP Sprinkler, 15HP Jockey), fan CFM, or special Fire NOC consultant specifications..."
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
              value={`Fire Panel Inquiry - Config: ${formData.panelConfiguration} | Make: ${formData.preferredMake} | Details: ${formData.message}`} 
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
                  : "Submit Fire Safety Requirements for Engineering Review"}
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
            Preparing Fire Fighting Drawings for Fire NOC Approval?
          </h2>
          <p className="text-xs sm:text-sm text-cyan-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Our life-safety engineering team in Gurugram / Delhi NCR reviews pump schedules and delivers complete GA layout drawings, wiring schematics, and commercial quotes.
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