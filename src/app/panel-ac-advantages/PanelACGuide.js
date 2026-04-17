"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  Settings, 
  ThermometerSnowflake, 
  Zap, 
  Factory, 
  Timer, 
  Cpu, 
  CheckCircle2 
} from "lucide-react";

export default function PanelACGuide() {

  const advantages = [
    {
      title: "Precise Temperature Control",
      description: "Maintains a stable internal environment for sensitive electronics like PLCs and VFDs, preventing thermal stress and component malfunction.",
      icon: <ThermometerSnowflake className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Closed-Loop Protection",
      description: "Ensures no external air, dust, or moisture enters the enclosure, making it ideal for harsh industrial environments and food processing.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Increased Equipment Life",
      description: "By eliminating heat-related degradation, Panel ACs significantly extend the lifespan of your electrical infrastructure and reduce replacement costs.",
      icon: <Clock className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Maximized Productivity",
      description: "Prevent unexpected system failures and production delays. Consistent cooling leads to consistent uptime for your manufacturing lines.",
      icon: <Zap className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Energy Efficient Cooling",
      description: "Modern units feature intelligent controls and optimized compressors, providing superior cooling with minimal power consumption.",
      icon: <Settings className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Industrial Grade Build",
      description: "Unlike standard ACs, these are designed specifically for industrial heat loads and high-ambient Indian temperatures.",
      icon: <Factory className="w-8 h-8 text-cyan-600" />
    },
  ];

  return (
    <>
      <div className="bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
            <div className="w-full md:w-6/12">
              <h1 className="text-2xl md:text-3xl text-center md:text-left font-bold text-cyan-800 mb-4 leading-tight">
                What Are the Advantages of Using Panel AC?
              </h1>
              <p className="text-sm text-gray-700 mb-6 text-justify md:text-left">
                In today’s industrial landscape, automation systems are the core of operations. From PLCs to CNC controllers, these components generate immense heat. Excessive heat buildup can silently damage components and lead to unexpected failures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Cpu className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Protects PLCs & VFDs</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">GeM Registered</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Timer className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Reduces Downtime</span>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link href="/support-form" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  REQUEST A QUOTE
                </Link>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1776406523/panel-ac-advantages_smbjao.webp" 
                alt="A row of industrial control panels equipped with panel air conditioners in a clean, modern manufacturing facility, featuring the Adhunik Powertech logo"
                width={1260}
                height={750}
                priority
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </section>

                  {/* Advantages Cards Section */}
          <section className="mb-16">
            {/* Added flex, flex-col, and items-center to help center the separator line */}
            <div className="flex flex-col items-center mb-10">
              <h2 className="text-2xl font-bold text-gray-800 text-center pb-4">
                Why Panel Cooling Is Critical
              </h2>
              {/* Thin Grey Separator Line */}
              <div className="w-24 h-px bg-gray-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advantages.map((adv, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="mb-4">{adv.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{adv.title}</h3>
                  <p className="text-sm text-gray-600">{adv.description}</p>
                </div>
              ))}
            </div>
          </section>
          
         {/* --- MAIN BLOG CONTENT SECTION --- */}
<section className="mb-16">
  <div className="max-w-8xl mx-auto bg-white p-8 rounded-lg shadow-md">
    <div className="text-gray-700 font-sans">
      <p className="text-justify mb-4">
        A <strong>Panel Air Conditioner</strong> is a specialized cooling system designed to maintain a controlled temperature inside electrical enclosures without allowing external air to enter. Unlike conventional fans or ventilation systems, Panel AC works on a <strong>closed-loop mechanism</strong>, ensuring protection from contaminants and reliable operation in harsh environments.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Why Choose Adhunik Powertech Panel AC?</h2>
      <p className="text-justify mb-4">
          Choosing the right Panel AC is important for long-term performance. As an 
          <Link 
            href="https://www.adhunikpowertech.com/panel-ac-manufacturer-india" 
            className="text-cyan-700 font-normal hover:underline mx-1"
          >
            authorised govt. supplier
          </Link>, 
          we provide reliable panel cooling solutions designed for Indian industrial conditions. 
          With our experience and support across India, we ensure safe operation, proper performance, 
          and long-lasting equipment life.
        </p>
      {/* Integrated USP and Installation Grid */}
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-100">
          <h3 className="font-bold text-cyan-800 mb-3 flex items-center gap-2">
            <Award className="w-5 h-5" /> Adhunik Engineering Excellence
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" /> <strong>19+ Years Legacy:</strong> Proven expertise since 2005.</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" /> <strong>Cooling Range:</strong> Wide 250W–7000W range for all sizes.</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" /> <strong>Heavy Duty:</strong> Built for harsh, high-ambient environments.</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" /> <strong>Energy Efficient:</strong> Optimized to reduce total operating costs.</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" /> <strong>Trusted:</strong> Preferred by major Govt & Industrial projects.</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5" /> Flexible Installation Options
          </h3>
          <p className="text-xs text-gray-600 mb-4 italic">Customizable solutions based on your specific cabinet layout:</p>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-gray-600 shrink-0" /> <strong>Wall-Mounted:</strong> Ideal for saving floor space.</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-gray-600 shrink-0" /> <strong>Side-Mounted:</strong> Provides easy access for maintenance.</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-gray-600 shrink-0" /> <strong>Top-Mounted:</strong> Perfect for compact industrial layouts.</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-200">
             <p className="text-xs font-semibold text-gray-500">👉 24/7 Support & Nationwide Service Footprint</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Panel AC vs Traditional Cooling</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="p-4 border-b">Feature</th>
              <th className="p-4 border-b text-cyan-700">Adhunik Panel AC</th>
              <th className="p-4 border-b">Normal Fan/Ventilation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-semibold">Cooling Efficiency</td>
              <td className="p-4 text-cyan-700 font-bold">High (Active Refrigeration)</td>
              <td className="p-4 text-gray-500">Low (Ambient Dependent)</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-semibold">Dust & Moisture Protection</td>
              <td className="p-4 text-cyan-700 font-bold">Yes (IP-Rated Sealed Loop)</td>
              <td className="p-4 text-gray-500">No (Pulls in Contaminants)</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-semibold">Component Lifespan</td>
              <td className="p-4 text-cyan-700 font-bold">Significantly Increased</td>
              <td className="p-4 text-gray-500">Moderate to Low</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-semibold">Temperature Stability</td>
              <td className="p-4 text-cyan-700 font-bold">Excellent (+/- 1°C)</td>
              <td className="p-4 text-gray-500">Poor (Fluctuates)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Final Takeaway</h2>
    <p>
        Panel AC is not just a cooling device—it is a critical protection system for industrial electrical infrastructure. 
        For industries aiming to improve productivity, reliability, and long-term cost efficiency, 
        investing in a high quality <a 
          href="https://www.adhunikpowertech.com/panel-air-conditioners" 
          style={{ fontWeight: 'normal', textDecoration: 'underline' }}
        >
            Panel AC
        </a>—like those offered by <strong>Adhunik Powertech</strong>—is 
        a smart and future-ready decision.
    </p>
    </div>
  </div>
</section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Protect Your Electrical Panel Today!</h2>
              <p className="text-cyan-100 mb-8 text-sm">Don't wait for a costly breakdown. Contact Adhunik Powertech for a custom cooling assessment and ensure your industrial components run at peak performance.</p>
              <div className="flex justify-center">
                <Link href="/support-form" className="bg-white text-md font-bold text-cyan-800 hover:bg-cyan-100 py-3 px-8 rounded-lg transition duration-300">
                  CONSULT AN ENGINEER
                </Link>
              </div>
            </div>
          </section>

        </div>
        {/* --- FAQ SECTION --- */}
<section className="mb-16">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">FAQs</h2>
    
    <div className="space-y-4">
      {/* FAQ 1 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <details className="group">
          <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
            <h3 className="text-lg font-normal text-cyan-800">How Does a Panel Air Conditioner Work?</h3>
            <span className="transition-transform duration-300 group-open:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </span>
          </summary>
          <div className="p-6 pt-0 border-t border-gray-50">
            <p className="text-gray-600 font-normal leading-relaxed">
              A Panel AC uses a <strong>closed-loop system</strong> to remove heat from inside the electrical panel and release it outside. It cools the internal air without allowing dust or moisture to enter, ensuring stable temperature and safe operation for sensitive electronics.
            </p>
          </div>
        </details>
      </div>

      {/* FAQ 2 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <details className="group">
          <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
            <h3 className="text-lg font-normal text-cyan-800">How to Calculate Panel Cooling Capacity?</h3>
            <span className="transition-transform duration-300 group-open:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </span>
          </summary>
          <div className="p-6 pt-0 border-t border-gray-50">
            <p className="text-gray-600 font-normal leading-relaxed">
              Cooling capacity depends on the <strong>total heat load (in watts)</strong>, ambient temperature, and desired internal temperature. You should convert the heat load into BTU/hr or watts and add a safety margin. For accurate sizing, expert consultation is recommended to avoid under-cooling.
            </p>
          </div>
        </details>
      </div>

      {/* FAQ 3 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <details className="group">
          <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
            <h3 className="text-lg font-normal text-cyan-800">What Are the Steps in Panel AC Installation?</h3>
            <span className="transition-transform duration-300 group-open:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </span>
          </summary>
          <div className="p-6 pt-0 border-t border-gray-50">
            <p className="text-gray-600 mb-4 font-normal">Our installation process includes:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Assessing heat load and panel size",
                "Selecting the right unit",
                "Preparing panel cutout",
                "Mounting the AC unit",
                "Connecting power supply",
                "Testing and commissioning"
              ].map((step, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 flex items-center justify-center bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold">{idx + 1}</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </div>
  </div>
</section>
      </div>
    </>
  )
}