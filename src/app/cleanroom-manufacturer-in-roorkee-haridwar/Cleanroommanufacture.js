
"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Thermometer,
  Wind,
  Boxes,
  FileCheck2,
  AlertTriangle,
  CheckCircle2,
  Mail,
  PhoneCall,
  Globe,
  Settings,
  Activity,
  Layout,
  Scaling
} from "lucide-react";

export default function cleanroommanufacturer() {
  return (
    <div className="bg-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header/Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-6/12">
              <Image
                src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1782469867/cleanroom_manufacturer_sk2szl.webp" 
                alt="Turnkey ISO and GMP cleanroom solutions by Adhunik Powertech in Roorkee and Haridwar"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl shadow-xl border-2 border-cyan-100"
                priority
              />
            </div>
            <div className="w-full md:w-6/12">
              <h1 className="text-2xl md:text-4xl font-bold text-cyan-800 mb-6 leading-tight">
                Cleanroom Manufacturer in Roorkee & Haridwar-Turnkey Solutions 
              </h1>
              
              <div className="text-gray-700 text-sm font-normal space-y-4">
                <p className="font-semibold text-cyan-600">
                  Building Cleanrooms That Support Compliance, Expansion, and Long-Term Manufacturing Growth
                </p>
                <p>
                  For many manufacturers in Roorkee and Haridwar, the decision to invest in a cleanroom doesn't begin with construction—it begins with a challenge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Paragraphs Section */}
        <section className="mb-16 bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <div className="text-gray-700 text-sm font-normal space-y-3 text-justify">
            <p>
              Sometimes it's a pharmaceutical company preparing for a GMP audit. Sometimes it's a medical device manufacturer expanding production capacity. In other cases, it's a factory struggling with contamination issues, product rejection, or changing regulatory expectations.
            </p>
            <p>
              Over the last few years, we have seen a noticeable shift across Uttarakhand's industrial landscape. Manufacturing facilities are no longer looking for basic production spaces. They are looking for controlled environments that can support product quality, regulatory compliance, and future business growth.
            </p>
            <p>
              This is particularly true in Haridwar and Roorkee, where pharmaceutical, healthcare, nutraceutical, biotechnology, and food processing industries continue to expand. As production volumes increase and compliance standards become more stringent, cleanroom infrastructure has become a critical part of modern manufacturing facilities.
            </p>
            <p>
              At Adhunik Powertech, we work with organizations that need more than just a cleanroom. They need a solution that aligns with their manufacturing process, regulatory obligations, expansion plans, and operational goals.
            </p>
            <p>
              Whether you are setting up a new facility, upgrading an existing manufacturing area, or planning a Schedule M compliance project, our team helps create cleanroom environments designed around real operational requirements—not generic templates.
            </p>
          </div>
        </section>

       {/* 
        <section className="mb-16">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-slate-50 border-b border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <AlertTriangle className="text-cyan-600 w-6 h-6" />
                Why Demand for Cleanrooms Is Increasing Across Roorkee & Haridwar
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2">
              <div className="p-8 border-r border-slate-100 text-gray-700 text-sm font-normal space-y-4 text-justify">
                <p className="text-sm font-medium text-slate-700 text-relaxed">
                  If you visit industrial zones across SIDCUL Haridwar, Bhagwanpur, Roorkee, and nearby manufacturing clusters, one trend becomes immediately clear: facilities are growing.
                </p>
                <p>
                  Production lines are expanding. Export opportunities are increasing. Regulatory expectations are becoming stricter. Customers are demanding greater consistency in quality. As a result, many manufacturers are reassessing the environments in which their products are produced.
                </p>
                <p>
                  A facility that operated efficiently ten years ago may no longer meet today's manufacturing expectations. Production capacities have increased, machinery layouts have changed, workforce sizes have grown, and compliance requirements have evolved. In many cases, the infrastructure simply wasn't designed for current manufacturing demands.
                </p>
              </div>

              <div className="p-8 bg-cyan-50/30 flex flex-col justify-center">
                <div className="bg-white p-6 rounded-xl border border-cyan-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Settings className="w-5 h-5 text-cyan-600" />
                    <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider">
                      Strategic Integration
                    </span>
                  </div>
                  <p className="text-cyan-900 text-xs font-semibold leading-relaxed">
                    This is where properly planned cleanroom solutions create value. Rather than treating contamination control as an afterthought, manufacturers are now integrating environmental control into their long-term production strategy. The objective is not only to satisfy auditors but to improve process consistency, reduce manufacturing risks, and support future growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>*/}

       {/* Realities & Upgrades Grid 
        <section className="my-16">
          <div className="grid md:grid-cols-2 gap-8">
            
          
            <div className="p-6 border border-cyan-100 rounded-xl hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
                <Activity className="w-5 h-5" /> The Reality Pharmaceutical Manufacturers Are Facing Today
              </h3>
              <p className="text-sm text-gray-600 text-justify mb-3">
                Haridwar has established itself as one of India's leading pharmaceutical manufacturing destinations. With both domestic and export-focused production facilities operating in the region, manufacturers are facing increasing pressure to demonstrate compliance, consistency, and quality assurance.
              </p>
              <p className="text-sm text-justify mb-2 font-semibold text-cyan-800">
                One of the conversations we frequently have with plant heads and project teams revolves around facility readiness. Questions often include:
              </p>
              <ul className="text-xs text-gray-600 space-y-1 list-disc pl-5 mb-3">
                <li>Will our current infrastructure support future audits?</li>
                <li>Are our production environments aligned with updated compliance expectations?</li>
                <li>Can we expand capacity without disrupting existing operations?</li>
                <li>How can we reduce contamination risks during manufacturing?</li>
                <li>What improvements are necessary before a major customer inspection?</li>
              </ul>
              <p className="text-sm text-gray-600 text-justify">
                These questions are becoming increasingly important as regulatory bodies place greater emphasis on environmental control, documentation, validation, and manufacturing quality systems. A cleanroom is often a key part of the answer—but only when it is designed around the actual manufacturing process.
              </p>
            </div>

            {/* Schedule M Upgrades
            <div className="p-6 border border-cyan-100 rounded-xl hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
                <Thermometer className="w-5 h-5" /> Schedule M Upgrades: Reassessing Infrastructure
              </h3>
              <p className="text-sm text-gray-600 text-justify mb-3">
                One of the biggest drivers behind cleanroom investments in recent years has been the implementation of updated Schedule M requirements. For many pharmaceutical manufacturers, the discussion is no longer about whether facility upgrades are necessary. The discussion is about how quickly they can be completed without affecting production schedules.
              </p>
              <p className="text-sm text-justify mb-2 font-semibold text-cyan-800">
                The revised requirements have encouraged companies to take a closer look at several aspects of their facilities, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-3">
                <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-cyan-500" /> Environmental control</div>
                <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-cyan-500" /> Material movement</div>
                <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-cyan-500" /> Personnel flow</div>
                <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-cyan-500" /> Process segregation</div>
                <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-cyan-500" /> Contamination prevention</div>
                <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-cyan-500" /> Monitoring practices</div>
              </div>
              <p className="text-sm text-gray-600 text-justify">
                Facilities that were originally designed many years ago often require modifications to meet current expectations. During project assessments, it is common to find production areas that have been expanded multiple times without a corresponding review of airflow management, contamination control strategies, or future compliance requirements.
              </p>
            </div>

          </div>
        </section>*/}

        {/* Common Challenges & Solutions Grid */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            Common Cleanroom Challenges Faced by Manufacturers
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="p-6 border border-slate-100 rounded-xl bg-slate-50/50">
              <h4 className="font-semibold text-cyan-900 mb-1">Contamination Control</h4>
              <p className="text-xs text-gray-600 text-justify leading-relaxed">
                Even minor contamination can affect product quality and regulatory compliance. Proper airflow, HEPA filtration, pressure control, and cleanroom design are essential to maintain a controlled manufacturing environment.
              </p>
            </div>

            <div className="p-6 border border-slate-100 rounded-xl bg-slate-50/50">
              <h4 className="font-semibold text-cyan-900 mb-1"> GMP & ISO Compliance</h4>
              <p className="text-xs text-gray-600 text-justify leading-relaxed">
                Meeting ISO 14644, GMP, and Schedule M requirements requires more than cleanroom construction. A compliant cleanroom must be designed, validated, and documented to ensure successful audits and long-term performance..
              </p>
            </div>

            <div className="p-6 border border-slate-100 rounded-xl bg-slate-50/50">
              <h4 className="font-semibold text-cyan-900 mb-1">HVAC & Utility Integration</h4>
              <p className="text-xs text-gray-600 text-justify leading-relaxed">
                Integrating HVAC systems, electrical services, process utilities, and cleanroom panels into new or existing facilities is a complex process. Proper engineering ensures stable temperature, humidity, airflow, and pressure differentials.
              </p>
            </div>

            <div className="p-6 border border-slate-100 rounded-xl bg-slate-50/50">
              <h4 className="font-semibold text-cyan-900 mb-1">Future-Ready Cleanroom Design</h4>
              <p className="text-xs text-gray-600 text-justify leading-relaxed">
                Many facilities are designed only for current production needs. A scalable cleanroom layout supports future expansion, new equipment, regulatory updates, and increased production without major modifications.
              </p>
            </div>

          </div>
        </section>


       {/* Successful Project Questions Block
        <section className="my-16">
          <div className="w-full">
       
            <h2 className="text-2xl font-bold mb-4 text-slate-800 text-left">
              What Makes a Successful Cleanroom Project?
            </h2>
            <p className="text-sm text-gray-600 mb-6 text-justify">
              Many people assume a cleanroom project begins with walls, panels, and equipment. In reality, successful projects begin much earlier. The first step is understanding how the facility operates. Before any design work takes place, critical questions need to be answered:
            </p>
            
          
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3.5 text-xs text-slate-700 w-full mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> 
                <span>How do raw materials enter the production area?</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> 
                <span>How do personnel move through the facility?</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> 
                <span>Where are contamination risks most likely to occur?</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> 
                <span>What are the future expansion plans?</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> 
                <span>What regulatory standards apply to the operation?</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> 
                <span>How will maintenance be managed?</span>
              </div>
              <div className="flex items-start gap-2 md:col-span-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> 
                <span>What validation requirements will need to be met?</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-justify italic pt-4 border-t border-slate-100">
              The answers to these questions influence every decision that follows. This is why cleanroom projects that focus solely on construction often struggle to deliver long-term value. The most successful facilities are designed around processes, not products.
            </p>
          </div>
        </section> */}

      

{/* Condensed Complete Turnkey Cleanroom Solutions Section */}
<section className="my-16">
  <div className="w-full mb-8">
  <h2 className="text-2xl font-bold text-slate-800 mb-3 text-left">
    Complete Turnkey Cleanroom Solutions
  </h2>
  
  {/* Re-applied CSS layer to maximize responsive page width coverage */}
  <p className="text-sm text-gray-600 text-left leading-relaxed w-full max-w-none md:max-w-full tracking-normal block clear-both">
    Complete turnkey cleanroom solutions cover every stage of the project, from design and engineering to manufacturing, installation, HVAC integration, validation, and commissioning. This end-to-end approach ensures ISO and GMP compliance, effective contamination control, seamless project execution, and long-term operational reliability for pharmaceutical, biotechnology, healthcare, food processing, and industrial manufacturing facilities.
  </p>
  
  <div className="mt-4 text-left">
    <Link 
      href="https://www.adhunikpowertech.com/turnkey-cleanroom-solutions"
      className="inline-flex items-center gap-1 text-xs font-bold text-cyan-600 hover:text-cyan-500 transition-colors uppercase tracking-wider"
    >
      Explore Our Full Turnkey Setup &rarr;
    </Link>
  </div>
</div>

  {/* Modular Subcategories Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    
    {/* Solution Core Block 1 */}
    <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm border-t-4 border-t-[#0891b2] flex flex-col transition-all hover:shadow-md">
      <div className="w-9 h-9 rounded-xl bg-cyan-50/50 flex items-center justify-center mb-3.5 text-[#0891b2]">
        <Layout className="w-4 h-4" />
      </div>
      <h3 className="font-bold text-sm text-slate-800 mb-1.5">Design & Engineering</h3>
      <p className="text-xs text-gray-500 text-justify leading-relaxed">
        Custom layout plotting, pressure cascade maps, and workforce/material flow analysis configured to eliminate contamination pathways early.
      </p>
    </div>

    {/* Solution Core Block 2 */}
    <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm border-t-4 border-t-[#0891b2] flex flex-col transition-all hover:shadow-md">
      <div className="w-9 h-9 rounded-xl bg-cyan-50/50 flex items-center justify-center mb-3.5 text-[#0891b2]">
        <Wind className="w-4 h-4" />
      </div>
      <h3 className="font-bold text-sm text-slate-800 mb-1.5">Cleanroom HVAC Systems</h3>
      <p className="text-xs text-gray-500 text-justify leading-relaxed">
        Precision environmental air handlers managing temperature loops, relative humidity parameters, and macro particle separation via ASHRAE profiles.
      </p>
    </div>

    {/* Solution Core Block 3 */}
    <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm border-t-4 border-t-[#0891b2] flex flex-col transition-all hover:shadow-md">
      <div className="w-9 h-9 rounded-xl bg-cyan-50/50 flex items-center justify-center mb-3.5 text-[#0891b2]">
        <Boxes className="w-4 h-4" />
      </div>
      <h3 className="font-bold text-sm text-slate-800 mb-1.5">HEPA Filtration & Panels</h3>
      <p className="text-xs text-gray-500 text-justify leading-relaxed">
        Terminal HEPA filters coupled with durable, airtight ceiling and wall panel setups utilizing insulated PUF, Rockwool, or EPS modules.
      </p>
    </div>

    {/* Solution Core Block 4 */}
    <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm border-t-4 border-t-[#0891b2] flex flex-col transition-all hover:shadow-md">
      <div className="w-9 h-9 rounded-xl bg-cyan-50/50 flex items-center justify-center mb-3.5 text-[#0891b2]">
        <Settings className="w-4 h-4" />
      </div>
      <h3 className="font-bold text-sm text-slate-800 mb-1.5">Accessory Integration</h3>
      <p className="text-xs text-gray-500 text-justify leading-relaxed">
        Airtight cleanroom doors, electronic interlocking pass-boxes, completely flush viewing windows, and specialized dust-resistant LED light fixtures.
      </p>
    </div>

  </div>
</section>

        {/* Validation & Project Cost Factors Table Layout */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Validation, Audit Readiness & Financial Factors</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 mb-8">
            <table className="w-full text-left">
              <thead className="bg-slate-100 text-slate-800 uppercase text-xs">
                <tr>
                  <th className="p-4 border-b w-1/2"><FileCheck2 className="inline w-4 h-4 mr-1.5 text-cyan-700" /> Cleanroom Validation & Audit Readiness</th>
                  <th className="p-4 border-b w-1/2"><Scaling className="inline w-4 h-4 mr-1.5 text-cyan-700" /> Factors That Influence Project Costs</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600">
                <tr>
                  <td className="p-4 text-justify align-top border-r space-y-2">
                    <p> Validation activities help confirm that environmental conditions meet required standards and remain stable over time.</p>
                    <p className="font-semibold text-xs text-slate-700">Our validation testing protocol services include:</p>
                    <p className="text-xs text-slate-500">Airflow testing, Particle count testing, HEPA filter integrity testing, Pressure differential testing, Temperature mapping, Humidity validation, and Recovery testing.</p>
                    <p>Comprehensive documentation ensures structural confidence and complete execution readiness during major GMP inspections, customer audits, or certification assessments.</p>
                  </td>
                  <td className="p-4 text-justify align-top space-y-2">
                    <p>One of the most common questions asked by facility owners is, "What determines the cost of a cleanroom project?" The answer depends on several core variables:</p>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                      <li><strong>Facility Size:</strong> Larger spaces demand extended infrastructure and environmental control arrays.</li>
                      <li><strong>Regulatory Requirements:</strong> Compliance tiers shift design and layout architecture complexity.</li>
                      <li><strong>Industry Application:</strong> Process-specific constraints influence strict contamination benchmarks.</li>
                      <li><strong>Facility Layout:</strong> Existing building criteria heavily impact actual engineering implementation scopes.</li>
                      <li><strong>Expansion Considerations:</strong> Pre-planning for modular scalability shifts structural sizing parameters.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* Technical Differentiators Section */}
<section className="my-16 bg-cyan-900 rounded-2xl p-8 shadow-xl text-white">
  <div className="grid md:grid-cols-2 gap-8 items-start">
    
    {/* Left Column: Heading and Context */}
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">
        What Makes Adhunik Powertech Different?
      </h2>
      <p className="text-sm text-cyan-100 text-justify leading-relaxed mb-6">
        Building a high-performance cleanroom requires more than modular panels—it demands precise HVAC engineering, regulatory expertise, and seamless project execution. As a leading Cleanroom Manufacturer, We delivers complete  <Link 
    href="https://www.adhunikpowertech.com/hvac" 
    className="text-white-600 font-normal hover:underline"
  >
    turnkey cleanroom and HVAC solutions
  </Link>{" "}  that create controlled environments.
      </p>
      
      {/* Adjusted visual callout box to match the dark blue theme background */}
      <div className="bg-cyan-950/50 p-4 rounded-xl border border-cyan-800 text-xs text-cyan-100 leading-relaxed text-justify">
        <strong className="text-cyan-400">Building Confidence, Not Just Cleanrooms</strong> Every cleanroom is designed to protect what matters most—your products, your compliance, and your reputation. From concept to commissioning, every detail is engineered for reliable, contamination-controlled manufacturing.
      </div>
    </div>

    {/* Right Column: Differentiators List */}
    <div className="space-y-3.5 pt-2">
      {[
        "Turnkey cleanroom solutions—from design consultation to commissioning",
        "Expertise in HVAC, ventilation, cleanrooms, and controlled environments under one roof",
        "Solutions designed in accordance with ISO 14644, GMP, and industry best practices",
        "Experienced engineering and project management team",
        "Support for greenfield projects, brownfield expansions, and facility upgrades",
        "On-time project execution with minimal disruption to ongoing operations",
        "PAN India project execution with strong service support in Haridwar, Roorkee, and surrounding regions"
      ].map((diff, i) => (
        <div key={i} className="flex gap-3 items-start">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <span className="text-xs font-medium text-cyan-50 leading-tight">{diff}</span>
        </div>
      ))}
    </div>

  </div>
</section>
        {/* Step-by-Step Project Approach Section */}
        <section className="mb-20">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-5/12">
                <h2 className="text-3xl font-bold text-slate-800 leading-tight mb-6">
                  Our Structured <br />
                  <span className="text-cyan-600 font-black">Project Execution Approach</span>
                </h2>
                <div className="text-gray-700 text-sm font-normal space-y-4 leading-relaxed text-justify">
                  <p>
                   Every project follows a structured implementation process to ensure superior quality, regulatory compliance, and long-term operational performance.
                  </p>
                  <p className="font-normal text-cyan-600">
                    For us, every completed project is the beginning of a lasting partnership. Many of our clients continue to trust Adhunik Powertech for cleanroom expansions, GMP facility upgrades, HVAC maintenance, and turnkey cleanroom solutions that support their future growth and evolving manufacturing needs.</p>                </div>
              </div>

              <div className="w-full lg:w-7/12">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-cyan-600" /> Operational Step Lifecycle Phases:
                  </h4>
                  <div className="space-y-4">
                    {[
                      { step: "Site Assessment", desc: "We begin by understanding your facility, manufacturing processes, and operational objectives." },
                      { step: "Requirement Evaluation", desc: "Our team identifies contamination control needs, compliance expectations, and project priorities." },
                      { step: "Engineering Planning", desc: "Detailed planning helps ensure the final solution aligns with both regulatory requirements and operational goals." },
                      { step: "Installation & Implementation", desc: "Projects are executed using established quality procedures and industry best practices." },
                      { step: "Validation & Documentation", desc: "Performance verification and documentation support long-term operational confidence." },
                      { step: "Ongoing Support", desc: "Our team remains available to assist clients with maintenance, upgrades, and future expansion requirements." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" /> 
                        <div>
                          <strong>{i + 1}. {item.step}:</strong> <span className="text-xs text-gray-600">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion / Summary Content Block */}
        <div className="px-6 lg:px-24 py-12 bg-white rounded-3xl shadow-2xl space-y-6 mb-16 border border-slate-200">
          <h2 className="text-2xl font-bold text-cyan-700 text-center md:text-left">
            Areas We Serve Across Uttarakhand
          </h2>
          <p className="text-sm text-gray-700 text-justify">
            As a leading cleanroom manufacturer serving Uttarakhand, We supports industrial cluster projects across: <strong>Roorkee, Haridwar, SIDCUL Haridwar, Bhagwanpur, Dehradun, Rudrapur, Kashipur, Pantnagar, Sitarganj, Kotdwar, and Haldwani</strong>. Our experience working with manufacturing facilities across the region allows us to understand local industry requirements and project challenges intimately.
          </p>
        </div>

        {/* Call To Action / Contact Section */}
        <section className="bg-[#0f172a] rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl mx-auto max-w-6xl my-8">
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Looking for a Cleanroom Manufacturer in Roorkee or Haridwar?
            </h2>
            
            <p className="text-slate-300 text-sm font-normal mb-4 leading-relaxed max-w-2xl">
              Planning a new cleanroom or upgrading an existing manufacturing facility?  Our team is ready to discuss your needs and recommend the best approach for your facility.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a 
                href="tel:8287885885" 
                className="w-full sm:w-auto bg-[#0891b2] hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <PhoneCall className="w-4 h-4" /> Request a free Consultation
              </a>
              
              <Link 
                href="/support-form" 
                className="w-full sm:w-auto bg-transparent border border-slate-700 hover:border-cyan-400 text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4" /> Get a Custom Quote
              </Link>
            </div>
            
          </div>
        </section>

      </div>
    </div>
  )
}

