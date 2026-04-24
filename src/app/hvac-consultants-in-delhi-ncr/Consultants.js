"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  ShieldCheck, GaugeCircle, Thermometer, Clock, Wind, CheckCircle2,
  PhoneCall, PackageCheck, Zap, Droplets, ArrowRightLeft, Settings,
  ChevronRight, Mail, MapPin, Factory, Microscope, Construction,
  AlertTriangle, HelpCircle, Snowflake, Cpu, Activity
} from "lucide-react";

export default function HVACConsultantsDelhi() {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: 'HVAC System Design',
      desc: <>
        <p><strong className='text-cyan-600 font-semibold'>Precision Engineering: </strong> Based on heat load calculations, psychrometric analysis, and airflow dynamics.</p>
        <p><strong className='text-cyan-600 font-semibold'>Optimization: </strong> Includes duct design, equipment sizing, and air distribution planning for zero energy wastage.</p>
      </>,
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: 'Cleanroom & Pharma',
      desc: <>
        <p><strong className='text-cyan-600 font-semibold'>GMP Compliance: </strong> Specialized solutions including HEPA filtration and pressure control systems.</p>
        <p><strong className='text-cyan-600 font-semibold'>Environments: </strong> Essential for pharmaceutical plants, labs, and healthcare facilities.</p>
      </>,
      icon: <Microscope className="w-6 h-6" />
    },
    {
      title: 'Turnkey Execution',
      desc: <>
        <p><strong className='text-cyan-600 font-semibold'>End-to-End: </strong> We handle the full lifecycle from design and procurement to installation and commissioning.</p>
        <p><strong className='text-cyan-600 font-semibold'>Seamless Delivery: </strong> Ensures engineering excellence from start to finish.</p>
      </>,
      icon: <Construction className="w-6 h-6" />
    },
  ];

  const faqs = [
    {
      q: "What is HVAC Consultancy?",
      a: "HVAC consultancy is the process of planning, designing, and optimizing heating, ventilation, and air conditioning systems to ensure energy efficiency, proper airflow, and cost-effective performance. It ensures your system works smarter—not harder."
    },
    {
      q: "Why is HVAC design critical in Delhi NCR?",
      a: "High ambient temperatures (45°C+) demand accurate cooling load calculations. Proper design prevents excessive power consumption, uneven cooling, and air stagnation common in the region."
    },
    {
      q: "What are the latest trends in HVAC systems?",
      a: "The future is shaping up through Smart HVAC automation, IoT-based monitoring, energy-efficient cooling systems, and sustainable HVAC design."
    }
  ];

  const clients = [
    { name: "Hero", logo: "/projects/5.webp" },
    { name: "Maruti Suzuki", logo: "/projects/6.webp" },
    { name: "AIS", logo: "/projects/2.webp" },
    { name: "Zomato", logo: "/projects/10.webp" },
    { name: "Godrej", logo: "/projects/101.webp" },
    { name: "BKT", logo: "/projects/3.webp" },
    { name: "Somany", logo: "/projects/clients/57.webp" },
    { name: "Aarvy Hospital", logo: "/projects/1.webp" },
    { name: "Positron", logo: "/projects/9.webp" },
  ];

  return (
    <div className="bg-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="w-full md:w-7/12 order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl font-bold text-cyan-800 mb-6 leading-tight">
              Trusted HVAC Consultants in Delhi NCR – Adhunik Powertech
            </h1>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify">
              <p className="text-xl font-semibold text-red-600">
                Heat is Not Your Biggest Problem—Inefficient HVAC Design Is
              </p>
              <p>
                Every summer in Delhi NCR, businesses struggle to maintain indoor comfort as temperatures surge past 45°C. But the real issue isn’t just the heat outside—it’s how your HVAC system responds to it.
              </p>
              <p>
                An inefficient HVAC system doesn’t just fail to cool—it silently drains energy, disrupts airflow balance, and increases operational costs. <strong>That’s where Adhunik Powertech comes in.</strong>
              </p>
              <p className="font-medium text-cyan-700">
                As one of the trusted HVAC consultants in Delhi NCR, we specialize in designing precision-engineered, energy-efficient HVAC systems.
              </p>
            </div>
          </div>
          <div className="w-full md:w-5/12 order-1 md:order-2">
            <Image
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1777031578/Trusted_HVAC_Consultants_in_Delhi_NCR_zucxru.webp"
              alt="Trusted HVAC consultants in Delhi NCR reviewing building plans and system design for efficient installation"
              width={700}
              height={500}
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </section>

 

        {/* Why Design Matters Section */}
        <section className="mb-16 bg-white p-6 md:p-10 rounded-xl shadow-md border border-red-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <AlertTriangle className="text-red-500" /> Why HVAC Design is Critical in Delhi NCR
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <h4 className="font-bold text-red-800 mb-3">Common Design Mistakes:</h4>
                <ul className="space-y-2 text-sm text-red-700">
                    <li className="flex items-center gap-2">❌ Incorrect system sizing</li>
                    <li className="flex items-center gap-2">❌ Poor duct layout & stagnation</li>
                    <li className="flex items-center gap-2">❌ Ignoring ventilation design</li>
                    <li className="flex items-center gap-2">❌ High operational costs (30-40% higher)</li>
                </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-800 mb-3">Our Engineering Benefits:</h4>
                <ul className="space-y-2 text-sm text-green-700">
                    <li className="flex items-center gap-2">✔ Energy-Efficient Systems</li>
                    <li className="flex items-center gap-2">✔ Superior Indoor Air Quality</li>
                    <li className="flex items-center gap-2">✔ Reliable Performance in 45°C+</li>
                    <li className="flex items-center gap-2">✔ Long-Term Cost Savings</li>
                </ul>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-cyan-800 mb-8">
            Comprehensive HVAC Turnkey & Consultancy Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-cyan-100 hover:border-cyan-400 transition-all shadow-sm hover:shadow-lg">
                <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-cyan-600">
                  {item.icon}
                </div>
                <div className="font-bold text-cyan-900 text-lg mb-3">{item.title}</div>
                <div className="text-gray-600 text-sm text-justify flex flex-col gap-3">{item.desc}</div>
              </div>
            ))}
          </div>
          
          {/* Secondary Services Row */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
              {[
                  { title: "Ventilation & Air Distribution", desc: "Fresh air systems, AHUs, and filtration critical for air quality and pressure control.", icon: <Wind/> },
                  { title: "Industrial Solutions", desc: "Heat extraction and large-area cooling for factories, warehouses, and manufacturing units.", icon: <Factory/> },
                  { title: "Evaporative Air Cooling", desc: "Cost-effective solutions for large spaces offering energy savings up to 80%.", icon: <Droplets/> },
                  { title: "Maintenance & Audits", desc: "System performance audits and energy optimization upgrades for long-term reliability.", icon: <Activity/> }
              ].map((item, i) => (
                <div key={i} className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-cyan-600 mr-3 mt-1">{item.icon}</div>
                    <div>
                        <h4 className="font-bold text-slate-800 text-md">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                </div>
              ))}
          </div>
        </section>
   {/* Benefits to Your Business Section - Integrated for Adhunik Powertech */}
<section className="my-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-cyan-800 mb-4">
     Smarter HVAC. Better Business Performance.
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
     Key business advantages of professional HVAC consultancy and smart system design:
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Benefit 1: Cost Savings */}
    <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
      <div className="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-cyan-200">
        <Wind className="w-7 h-7" />
      </div>
      <h3 className="font-bold text-slate-800 mb-3 text-lg">Cost Savings</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        By optimizing HVAC system design, We helps reduce energy consumption and avoid frequent breakdowns, saving your business significant costs in the long run.
      </p>
    </div>

   

    {/* Benefit 3: Improved Productivity */}
    <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
      <div className="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-cyan-200">
        <Activity className="w-7 h-7" />
      </div>
      <h3 className="font-bold text-slate-800 mb-3 text-lg">Improved Productivity</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        A well-designed HVAC system creates a comfortable indoor environment, helping employees stay focused and productive, even during extreme heat conditions.
      </p>
    </div>
     {/* Benefit 2: Professional Expertise */}
    <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
      <div className="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-cyan-200">
        <Settings className="w-7 h-7" />
      </div>
      <h3 className="font-bold text-slate-800 mb-3 text-lg">Professional Expertise</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        With Adhunik Powertech, you get experienced HVAC professionals who ensure your system is designed and executed for reliable and efficient performance.
      </p>
    </div>

    {/* Benefit 4: Regulatory Compliance */}
    <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
      <div className="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-cyan-200">
        <CheckCircle2 className="w-7 h-7" />
      </div>
      <h3 className="font-bold text-slate-800 mb-3 text-lg">Regulatory Compliance</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Our HVAC consultancy ensures that your systems meet all required safety standards and building regulations, giving you complete peace of mind.
      </p>
    </div>

    {/* Benefit 5: Longer Equipment Life */}
    <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
      <div className="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-cyan-200">
        <PackageCheck className="w-7 h-7" />
      </div>
      <h3 className="font-bold text-slate-800 mb-3 text-lg">Longer Equipment Life</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Proper system design and load balancing by Adhunik Powertech increase the lifespan of your HVAC equipment, reducing the need for frequent replacements.
      </p>
    </div>

    {/* Benefit 6: Energy Efficiency */}
    <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
      <div className="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-cyan-200">
        <Zap className="w-7 h-7" />
      </div>
      <h3 className="font-bold text-slate-800 mb-3 text-lg">Better Energy Efficiency</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
       Heating and cooling systems use a large share of a building’s energy. By working with an HVAC expert, businesses can make these systems run more efficiently. This helps cut down on energy use and reduces overall operating costs.
      </p>
    </div>

  </div>
</section>

        {/* Adhunik Spotlight */}
<section className="mb-16 bg-cyan-900 p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
  <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500 opacity-10 rounded-full"></div>
  <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
    <ShieldCheck className="w-8 h-8 text-cyan-400" />
    Why Choose Adhunik Powertech?
  </h2>
  
  <div className="grid md:grid-cols-2 gap-12">
    <div className="space-y-4">
      <p className="text-cyan-100 italic">Selecting the right HVAC contractor is a critical decision. Here is why Adhunik Powertech is the preferred choice:</p>
      
      <div className="space-y-3">
        {/* Blue Star Highlight */}
        <div className="flex gap-3 items-start">
          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
          <span><strong>Authorized Dealer:</strong> Blue Star AC ensuring premium, energy-efficient equipment.</span>
        </div>

        {/* Points from Screenshot */}
        <div className="flex gap-3 items-start">
          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
          <span><strong>Extensive Experience:</strong> Knowledge and expertise to handle projects of any complexity.</span>
        </div>
        
        <div className="flex gap-3 items-start">
          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
          <span><strong>Expert Team:</strong> Highly skilled qualified engineers and certified technicians.</span>
        </div>

        <div className="flex gap-3 items-start">
          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
          <span><strong>Pan-India Reach:</strong> Resources and capability to serve clients across India.</span>
        </div>

        <div className="flex gap-3 items-start">
          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
          <span><strong>Adherence to Standards:</strong> We follow all relevant Indian standards and safety regulations.</span>
        </div>
      </div>
    </div>

    {/* Value Indicators Column */}
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
      <h4 className="font-bold mb-4 flex items-center gap-2">
        <ArrowRightLeft className="w-5 h-5"/> Commitment to You
      </h4>
      <div className="space-y-4 text-sm">
        <div className="flex justify-between border-b border-white/10 pb-2">
          <span>Communication</span>
          <span className="text-cyan-400 font-bold">Transparent & Open</span>
        </div>
        <div className="flex justify-between border-b border-white/10 pb-2">
          <span>Approach</span>
          <span className="text-cyan-400 font-bold">Customer-Centric</span>
        </div>
        <div className="flex justify-between">
          <span>Support</span>
          <span className="text-cyan-400 font-bold">Comprehensive & Dedicated</span>
        </div>
      </div>
      <p className="mt-6 text-xs text-cyan-200 leading-relaxed">
        We are your dedicated HVAC partner from initial consultation to post-installation support.
      </p>
    </div>
  </div>
</section>
{/* Horizontal Separator */}
        <hr className="border-t border-slate-200 my-16" />

        {/* Serving Areas Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-bold text-slate-800 leading-tight">
                Serving Delhi NCR <span className="text-cyan-600">and Beyond</span>
              </h2>
              <div className="mt-4 p-4 bg-cyan-50 rounded-xl border-l-4 border-cyan-500">
                <p className="text-sm text-slate-600 italic">
                  Our commitment to providing quality HVAC solutions extends across India. Contact us to discuss your project, regardless of your location.
                </p>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Delhi NCR Group */}
                <div className="space-y-2">
                  <h4 className="font-bold text-cyan-800 text-sm uppercase tracking-wider">Delhi NCR</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Noida & Gurugram</li>
                    <li>Faridabad & Ghaziabad</li>
                    <li>Manesar & Dharuhera</li>
                    <li>Bawal & Tapukara</li>
                  </ul>
                </div>

                {/* Uttarakhand Group */}
                <div className="space-y-2">
                  <h4 className="font-bold text-cyan-800 text-sm uppercase tracking-wider">Uttarakhand</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Haridwar & Roorkee</li>
                    <li>Dehradun & Kashipur</li>
                    <li>Rudrapur & Sitarganj</li>
                    <li>Pithoragarh & Kotdwar</li>
                    <li>Pauri Garhwal & Kalagarh</li>
                  </ul>
                </div>

                {/* North India & Others */}
                <div className="space-y-2">
                  <h4 className="font-bold text-cyan-800 text-sm uppercase tracking-wider">Other Key Regions</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Muzaffarnagar & Saharanpur</li>
                    <li>Yamunanagar & Meerut</li>
                    <li>Jaipur & Chandigarh</li>
                    <li>Sonipat & Panipat</li>
                    <li>Rohtak & Rewari</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Client Section (Ref Image Integration) */}
       {/* Horizontal Separator */}
        <hr className="border-t border-slate-200 my-16" />
<section className="mb-20 text-center">
    <h2 className="text-2xl font-bold text-slate-800 mb-10">Our Trusted Clients</h2>
    
    {/* Corrected div syntax: removed the extra < and matched closing tags */}
    <div className="relative overflow-hidden flex items-center bg-gray-50 py-10 rounded-2xl border border-gray-100">
        <div className="flex gap-16 animate-marquee whitespace-nowrap items-center px-4">
            {[...clients, ...clients].map((client, i) => (
                <div key={i} className="flex-shrink-0 w-40 h-24 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="max-w-full max-h-full object-contain" 
                    />
                </div>
            ))}
        </div>
    </div>

    {/* Using standard JSX style tag or you can move this to your global CSS */}
    <style jsx>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            display: flex;
            animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
            animation-play-state: paused;
        }
    `}</style>
</section>
        {/* CTA Section */}
        <section className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl relative">
          <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-7/12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Choose Engineering, Not Just Equipment. 
                <span className="text-cyan-400 block mt-2">Get Expert Consultancy Today.</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                In today’s environment, HVAC systems must do more than just cool—they must perform efficiently and sustainably. Partner with Adhunik Powertech for engineering-driven excellence.
              </p>
            </div>

            <div className="lg:w-5/12 w-full">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col gap-6">
                <a href="tel:8287885885" className="group bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-cyan-900/40">
                  <span className="flex items-center gap-3">
                    <PhoneCall className="w-5 h-5" /> +91 82878 85885
                  </span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link href="/support-form" className="group bg-transparent border-2 border-slate-700 hover:border-cyan-400 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-between transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <Mail className="w-5 h-5" /> Schedule HVAC Audit
                  </span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* FAQs */}
      <section className="pb-24 max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-cyan-800 mb-8 text-center flex items-center justify-center gap-2">
              <HelpCircle className="text-cyan-600" /> Frequently Asked Questions
          </h3>
          <div className="space-y-4">
              {faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                      <button 
                          className="w-full text-left p-5 font-bold text-slate-800 bg-slate-50 flex justify-between items-center"
                          onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      >
                          {faq.q}
                          <ChevronRight className={`transition-transform ${openIndex === i ? 'rotate-90' : ''}`} />
                      </button>
                      {openIndex === i && (
                          <div className="p-5 text-gray-600 bg-white border-t border-slate-200 text-sm">
                              {faq.a}
                          </div>
                      )}
                  </div>
              ))}
          </div>
      </section>
    </div>
  )
}