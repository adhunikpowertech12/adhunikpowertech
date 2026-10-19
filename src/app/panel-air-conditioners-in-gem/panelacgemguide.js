"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  ShieldCheck, Thermometer, Wind, CheckCircle2,
  PhoneCall, PackageCheck, Zap, Settings,
  ChevronRight, Mail, Factory, AlertTriangle,
  HelpCircle, Snowflake, Cpu, Activity, Info, Layout, Globe,
  Scaling, Box, Gauge, FileSpreadsheet, Building2, Award,
  ExternalLink, ShoppingCart, ArrowRight
} from "lucide-react";

export default function PanelACGeMGuide() {
  const [openIndex, setOpenIndex] = useState(null);

  const GEM_CATALOG_URL = "https://mkp.gem.gov.in/panel-air-conditioner/panel-air-conditioner/p-5116877-574145587-cat.html#variant_id=5116877-574145587";
  const PRODUCT_PAGE_URL = "https://www.adhunikpowertech.com/panel-air-conditioners";

  const faqs = [
    {
      q: "Can PSUs procure Adhunik Panel Air Conditioners directly through GeM?",
      a: "Yes. Adhunik Powertech is an authorized OEM with active catalog listings on the Government e-Marketplace (GeM). PSUs, defense units, railways, and state departments can purchase directly or compare our listed catalog variant (ID: 5116877-574145587) under GFR Rule 149."
    },
    {
      q: "Where can I inspect the complete technical specifications and dimensional drawings?",
      a: "Detailed technical cutouts, CMH airflow charts, and parametric sizing tables across our Wall-Mount (WMS), Top-Mount (TMT), and Stand-Alone (SA) series are available directly on our official Panel Air Conditioners product portal."
    },
    {
      q: "What certifications are required for panel air conditioners in government tenders?",
      a: "Government tenders mandate ISO 9001:2015 for quality management, CE marking for electrical and operational safety, ZED certification (Zero Defect Zero Effect), MSME registration, and compliance with the Public Procurement (Preference to Make in India) Order."
    },
    {
      q: "How can buyers specify panel ACs for extreme high-ambient factory environments?",
      a: "Buyers can utilize GeM's Custom Specification Bid feature to mandate industrial specifications, including operating ambient ratings up to +55°C, IP54/IP55 enclosure integrity, hermetic compressors (Danfoss/Emerson), and SS 304 stainless steel housings."
    },
    {
      q: "What benefits do MSE-registered OEMs receive on GeM bids?",
      a: "Eligible MSE-registered manufacturers benefit from Earnest Money Deposit (EMD) exemptions, relaxation of prior turnover and experience criteria (subject to technical capability validation), and purchase preference under the 25% public procurement mandate."
    },
    {
      q: "Does Adhunik Powertech provide Manufacturer Authorization Forms (MAF) for channel partners?",
      a: "Yes. For authorized GeM tenders, Adhunik Powertech provides tender-specific Manufacturer Authorization Forms (MAF), validated datasheets, compliance matrices, and 2D/3D GA layout drawings to authorized bidding partners."
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
                src="/GeM purchase methods thumbnail.webp"
                alt="Government and PSU procurement of industrial panel air conditioners via GeM portal"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl shadow-xl border-2 border-cyan-100"
                priority
              />
            </div>
            <div className="w-full md:w-6/12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5 text-cyan-600" /> Government & PSU Procurement
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> GeM Authorized OEM
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold text-cyan-800 mb-6 leading-tight">
                How to Procure Industrial Panel Air Conditioners on GeM (GFR 149 Compliance)
              </h1>
              <div className="text-gray-700 text-sm font-normal space-y-4 leading-relaxed">
                <p>
                  Public Sector Undertakings (PSUs), defense establishments, state power utilities, and Indian Railways require reliable, continuous-duty thermal management for critical electrical enclosures and automated control rooms.
                </p>
                <p>
                  Under General Financial Rules (GFR) Rule 149, procurement must be routed through the Government e-Marketplace (GeM). For detailed engineering specifications and complete model options, visit our dedicated{" "}
                  <a 
                    href={PRODUCT_PAGE_URL}
                    className="text-cyan-700 font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Adhunik Panel Air Conditioners product portal <ArrowRight className="w-3 h-3" />
                  </a>.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={GEM_CATALOG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" /> View Verified Product on GeM Portal <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                  <a
                    href={PRODUCT_PAGE_URL}
                    className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 px-5 py-2.5 rounded-xl font-bold text-xs transition-all"
                  >
                    View All Models (250W–7000W)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live GeM Catalog Verified Badge Card */}
        <section className="mb-16 bg-gradient-to-r from-cyan-900 to-slate-900 text-white p-6 md:p-8 rounded-2xl border border-cyan-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-500 text-slate-900 text-[11px] font-black px-2.5 py-0.5 rounded-md uppercase">
                Active Catalog Listing
              </span>
              <span className="text-xs text-cyan-200 font-mono">Variant ID: 5116877-574145587</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Direct GeM Procurement Available for Adhunik Panel Air Conditioners
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Procuring entities can immediately generate a Direct Purchase, run an L1 comparison, or add our certified variant directly to their procurement carts with 100% GFR 149 compliance.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <a
              href={GEM_CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              Access GeM Listing Directly <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={PRODUCT_PAGE_URL}
              className="w-full md:w-auto bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-700 font-bold px-6 py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
            >
              Full Product Specifications
            </a>
          </div>
        </section>

        {/* GFR Rule 149 Thresholds */}
        <section className="mb-16 bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <h2 className="text-2xl font-bold text-cyan-800 mb-4 flex items-center gap-3">
            <FileSpreadsheet className="text-cyan-600 w-6 h-6" />
            Procurement Modes Under GFR 149 on GeM Portal
          </h2>
          <p className="text-gray-700 text-sm font-normal mb-6">
            Government procurement rules categorize purchase workflows based on value thresholds. Purchase officers must adhere to the following workflow paths:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Direct Purchase</div>
              <div className="text-cyan-800 font-black text-lg mb-2">Up to ₹25,000</div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Direct procurement from our verified GeM catalog variant meeting requisites for basic quality, standard specifications, and immediate dispatch timelines.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">L1 Comparison</div>
              <div className="text-cyan-800 font-black text-lg mb-2">₹25,000 to ₹5,00,000</div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Mandatory comparison between at least 3 distinct OEMs or verified channel partners meeting identical technical specifications to determine the L1 bidder.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">E-Bid / Custom RA</div>
              <div className="text-cyan-800 font-black text-lg mb-2">Above ₹5,00,000</div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Mandatory custom e-bidding or reverse auction (RA) on the portal with comprehensive buyer-added terms, detailed BOQs, and technical eligibility criteria.
              </p>
            </div>
          </div>
        </section>

        {/* Mandatory Quality Certifications */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Award className="text-cyan-600" /> Mandatory Compliance & Verification Criteria
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-cyan-100 rounded-xl hover:shadow-md transition-all bg-white">
              <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-600" /> Regulatory Manufacturing Credentials
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                To withstand financial and technical audits, government indenting teams should verify that the bidding OEM holds:
              </p>
              <ul className="text-sm text-gray-600 space-y-2 list-disc ml-5">
                <li><strong>ISO 9001:2015:</strong> Documented quality management system for HVAC manufacturing.</li>
                <li><strong>CE Certification:</strong> Verification of international electrical and mechanical safety norms.</li>
                <li><strong>ZED Bronze / Silver / Gold:</strong> Zero Defect Zero Effect accreditation from the Ministry of MSME.</li>
                <li><strong>Class-I Local Supplier Status:</strong> &gt;50% domestic content under the Make in India initiative.</li>
              </ul>
            </div>

            <div className="p-6 border border-cyan-100 rounded-xl hover:shadow-md transition-all bg-white">
              <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-cyan-600" /> Technical Duty Specifications
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Industrial automation demands higher component benchmarks than commercial comfort cooling units:
              </p>
              <ul className="text-sm text-gray-600 space-y-2 list-disc ml-5">
                <li><strong>Compressors:</strong> Hermetically sealed reciprocating Danfoss, Emerson, or Tecumseh units.</li>
                <li><strong>Continuous Duty:</strong> Continuous 24/7 operating tolerance up to 55°C ambient temperature.</li>
                <li><strong>Ingress Protection:</strong> Dual-compartment closed-loop airflow preserving IP54/IP55 rating.</li>
                <li><strong>Refrigerant:</strong> Eco-friendly R-134a conforming to standard environmental guidelines.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Specification Schedule with Product Link */}
        <section className="my-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <Gauge className="text-cyan-600" /> Standard Technical Parameters for GeM Indents
            </h2>
            <a 
              href={PRODUCT_PAGE_URL}
              className="text-cyan-700 text-xs font-bold hover:underline flex items-center gap-1.5"
            >
              See complete dimensional drawings & weight chart <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-slate-100 text-slate-800 uppercase text-xs">
                <tr>
                  <th className="p-4 border-b">Parameter</th>
                  <th className="p-4 border-b">Adhunik Wall Mount (WMS)</th>
                  <th className="p-4 border-b">Adhunik Top Mount (TMT)</th>
                  <th className="p-4 border-b">Adhunik Stand-Alone (SA)</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600 divide-y divide-slate-200">
                <tr>
                  <td className="p-4 font-bold text-slate-800">Cooling Capacity Range</td>
                  <td className="p-4 font-semibold text-cyan-800">250W to 7000W</td>
                  <td className="p-4 font-semibold text-cyan-800">250W to 1500W</td>
                  <td className="p-4 font-semibold text-cyan-800">1000W to 7000W</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Cooling Output (BTU/hr)</td>
                  <td className="p-4">853 to 23,890 BTU/hr</td>
                  <td className="p-4">853 to 5,119 BTU/hr</td>
                  <td className="p-4">3,412 to 23,890 BTU/hr</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Airflow Volume</td>
                  <td className="p-4">68 to 1,326 CMH</td>
                  <td className="p-4">68 to 238 CMH</td>
                  <td className="p-4">221 to 1,326 CMH</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Compressor Types</td>
                  <td className="p-4">Emerson / Danfoss</td>
                  <td className="p-4">Emerson / Danfoss</td>
                  <td className="p-4">Heavy-Duty Reciprocating</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">MOC Enclosure</td>
                  <td className="p-4">MS Powder Coated / SS 304</td>
                  <td className="p-4">MS Powder Coated / SS 304</td>
                  <td className="p-4">MS Powder Coated / SS 304</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Ambient Temperature Max</td>
                  <td className="p-4 font-medium text-slate-900">+55°C continuous</td>
                  <td className="p-4 font-medium text-slate-900">+55°C continuous</td>
                  <td className="p-4 font-medium text-slate-900">+55°C continuous</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Serving Industry Leaders Across India */}
        <section className="mb-20">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-5/12">
                <h2 className="text-3xl font-bold text-slate-800 leading-tight mb-6">
                  Serving Government & <br />
                  <span className="text-cyan-600 font-black">Industrial Leaders</span>
                </h2>
                <div className="text-gray-700 text-sm font-normal space-y-4 leading-relaxed text-justify">
                  <p>
                    Adhunik Powertech is an authorized manufacturer with 21+ years of demonstrated performance in supplying heavy-duty thermal management systems to government and private infrastructure enterprises.
                  </p>
                  <p>
                    Explore our complete industrial range on the{" "}
                    <a 
                      href={PRODUCT_PAGE_URL}
                      className="text-cyan-700 font-bold hover:underline"
                    >
                      Adhunik Panel Air Conditioners portal
                    </a>{" "}
                    engineered for demanding PSU environments across <strong>Delhi NCR, Ahmedabad, Pune, Hyderabad, Chennai, Mumbai, Visakhapatnam, Bhopal, Kolkata, and key industrial belts in Odisha, Chhattisgarh, Gujarat, and Rajasthan</strong>.
                  </p>
                  <p className="font-bold text-cyan-800">
                    Fully registered on GeM, MSME, and ZED portals for compliant public sector procurement.
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-7/12">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-cyan-600" /> Trusted By Prominent Public & Private Entities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                    {[
                      "Steel Authority of India Ltd. (SAIL)",
                      "East India Petroleum Pvt. Ltd. (EIPL)",
                      "Uflex Limited",
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
                    Authorized OEM on the Government e-Marketplace. Complete BOQ support, Manufacturer Authorization Form (MAF), and Pre-Dispatch Inspection (PDI) compliance provided.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0f172a] rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl mx-auto max-w-6xl my-8">
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Preparing a Panel AC Tender or GeM Indent?
            </h2>
            
            <p className="text-slate-300 text-sm md:text-base font-normal mb-6 leading-relaxed max-w-2xl">
              Connect directly with our GeM procurement desk for technical compliance sheets, customized BOQ clauses, dimensional drawings, and authorized OEM quotations.
            </p>
            
            <p className="text-cyan-400 font-semibold text-sm md:text-base mb-10 flex items-center justify-center gap-2">
              Adhunik Powertech supports PSU purchase officers and authorized bidding partners across India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a 
                href={GEM_CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <ShoppingCart className="w-4 h-4" /> View on GeM Portal <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <a 
                href={PRODUCT_PAGE_URL}
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 px-8 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                Visit Product Page <ArrowRight className="w-4 h-4" />
              </a>

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
                <Mail className="w-4 h-4" /> Request Tender Specs
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