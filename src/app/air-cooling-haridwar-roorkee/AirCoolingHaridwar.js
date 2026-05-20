"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  ShieldCheck, Thermometer, Wind, CheckCircle2,
  PhoneCall, PackageCheck, Zap, Settings,
  ChevronRight, Mail, Factory, AlertTriangle, 
  HelpCircle, Snowflake, Cpu, Activity, Info, Layout, Globe,
  Scaling, Box, Gauge, Droplets
} from "lucide-react";

export default function AirCoolingHaridwar() {
 const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Which is better for factories: air cooling or air conditioning?",
      a: "Industrial air cooling is generally more cost-effective for large open industrial areas, while air conditioning is preferred for controlled environments like pharma cleanrooms and laboratories."
    },
    {
      q: "Are industrial air cooling systems energy efficient?",
      a: "Yes. Most industrial air cooling systems consume significantly less electricity than conventional air conditioning systems."
    },
    {
      q: "What industries require industrial air cooling systems?",
      a: "Industries such as pharmaceuticals, manufacturing, warehousing, food processing, textiles, and packaging commonly use industrial air cooling systems."
    },
    {
      q: "Can industrial air cooling systems be integrated with HVAC systems?",
      a: "Yes. Many industries combine industrial air cooling with HVAC ventilation and filtration systems for better efficiency and environmental control."
    },
    {
      q: "What is the best cooling solution for pharmaceutical industries?",
      a: "Pharmaceutical industries usually require HVAC-integrated air conditioning and cleanroom-compatible ventilation systems with HEPA filtration and humidity control."
    }
  ];

  return (
    <div className="bg-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header/Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-6/12">
              <Image
                src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1779273157/Air_Cooling_in_Haridwar_Roorkee_bfo5dw.webp"
                alt="Industrial air cooling system installation at a factory in Haridwar & Roorkee by Adhunik Powertech."
                width={700}
                height={500}
                className="w-full h-auto rounded-xl shadow-xl border-2 border-cyan-100"
                priority
              />
            </div>
            <div className="w-full md:w-6/12">
              <h1 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-6 leading-tight">
                Best Air Cooling Solutions in Haridwar, Roorkee & Uttarakhand
              </h1>
              <div className="text-gray-700 text-sm font-normalcenter justify-center space-y-4">
                <p>
                  Industrial industries across Uttarakhand are rapidly upgrading their cooling infrastructure to improve productivity, reduce operational costs, and create safer working environments. From pharmaceutical manufacturing units in Haridwar to industrial facilities in Roorkee, businesses are actively searching for reliable and energy-efficient industrial air cooling solutions.
                </p>
                <p>
                 Excessive factory heat, poor airflow, and rising energy costs can affect productivity and operational efficiency. Companies like Adhunik Powertech are helping industries across Haridwar, Roorkee, and Uttarakhand implement reliable industrial air cooling solutions for better airflow, energy savings, and long-term performance.
                </p>
               
                {/* Request a Site Visit Button */}
                <div className="pt-2">
                  <a 
                    href="tel:8287885885" 
                    className="inline-flex items-center gap-2 bg-[#0891b2] hover:bg-cyan-500 text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md w-full sm:w-auto justify-center"
                  >
                    <PhoneCall className="w-3.5 h-3.5" /> Request a Site Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Industrial Air Cooling Systems Are Important Section */}
        <section className="mb-16 bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <h2 className="text-2xl font-bold text-cyan-800 mb-4">Why Industrial Air Cooling Systems Are Important for Industries</h2>
          <p className="text-gray-700 text-sm font-normal mb-6">
            Industrial facilities generate a large amount of heat due to various continuous operational variables. Without proper thermal management, systems break down and worker health plummets.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Factory className="w-4 h-4 text-cyan-600" /> Industrial facilities generate a large amount of heat due to:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Heavy machinery operations", "Boilers and furnaces",
                  "Manufacturing equipment", "Continuous production processes",
                  "High worker occupancy", "Inadequate airflow systems"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8">
              <h3 className="text-sm font-bold text-red-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500" /> Without proper cooling and ventilation, industries often face:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Reduced workforce productivity", "Overheating equipment",
                  "Increased humidity levels", "Poor indoor air quality",
                  "Higher electricity bills", "Increased maintenance expenses",
                  "Product quality risks"
                ].map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm font-normal list-none">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400" />
                    {risk}
                  </li>
                ))}
              </div>
            </div>
          </div>
          
          <p className="mt-6 text-sm text-slate-700 font-medium bg-cyan-50 border border-cyan-100 p-4 rounded-xl">
            Modern industrial air cooling solutions help businesses maintain balanced temperatures while improving air circulation and operational performance.
          </p>
        </section>

        {/* Looking for Best Air Cooling Contractor Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-slate-50 border-b border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <ShieldCheck className="text-cyan-600 w-6 h-6" />
                Looking for the Best Air Cooling Contractor in Haridwar & Roorkee?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2">
              <div className="p-8 border-r border-slate-100">
                <p className="text-gray-700 text-sm font-bold mb-6">
                  Choosing the right HVAC and air cooling contractor is essential for long-term system performance and energy efficiency. Professional industrial air cooling companies analyze:
                </p>
                <ul className="space-y-3">
                  {[
                    "Factory heat load",
                    "Ventilation requirements",
                    "Production conditions",
                    "Space dimensions",
                    "Humidity control requirements",
                    "Airflow distribution"
                  ].map((param, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm font-normal">
                      <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {param} before recommending the most suitable cooling solution.
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-cyan-50/30 flex flex-col justify-center">
                <div className="bg-white p-6 rounded-xl border border-cyan-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Settings className="w-5 h-5 text-cyan-600" />
                    <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider">
                      Strategic Choice
                    </span>
                  </div>
                  <p className="text-cyan-900 text-sm font-normalleading-relaxed">
                   Industries trust <strong>Adhunik Powertech</strong> for reliable air cooling solutions that support efficient airflow, workplace comfort, and sustainable industrial operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Comparison Table Section: Industrial Air Cooling vs Air Conditioning */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Industrial Air Cooling vs Air Conditioning</h2>
          <p className="text-gray-600 text-sm mb-6">
            Many businesses are confused about whether they need industrial air cooling or industrial air conditioning systems.
          </p>
          
          <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-100 text-slate-800 uppercase text-xs">
                <tr>
                  <th className="p-4 border-b w-1/2">Industrial Air Cooling Systems</th>
                  <th className="p-4 border-b w-1/2">Industrial Air Conditioning Systems</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600 align-top">
                <tr className="border-b bg-slate-50/50">
                  <td className="p-4 font-medium italic text-cyan-800">
                    Uses evaporative or ventilation-based technologies to cool large industrial areas efficiently.
                  </td>
                  <td className="p-4 font-medium italic text-indigo-800">
                    Provides precise temperature and humidity control using refrigeration-based technologies.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-slate-100">
                    <span className="font-bold block text-slate-800 mb-1">Key Advantages:</span>
                    <ul className="list-disc pl-5 space-y-1 text-xs">
                      <li>Lower electricity consumption</li>
                      <li>Cost-effective operation</li>
                      <li>Better fresh air circulation</li>
                      <li>Suitable for large open industrial spaces</li>
                      <li>Lower maintenance costs</li>
                    </ul>
                  </td>
                  <td className="p-4">
                    <span className="font-bold block text-slate-800 mb-1">Key Advantages:</span>
                    <ul className="list-disc pl-5 space-y-1 text-xs">
                      <li>Accurate temperature management</li>
                      <li>Controlled humidity</li>
                      <li>Cleanroom compatibility</li>
                      <li>Better environmental control</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Horizontal Best Suitable For Row Outside the Table */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 grid sm:grid-cols-2 gap-6 text-xs">
            <div>
              <span className="font-bold text-slate-800 block mb-2 uppercase tracking-wide">
                Best Suitable For (Air Cooling):
              </span>
              <p className="text-gray-600 leading-relaxed font-medium">
                Warehouses • Manufacturing plants • Engineering units • Packaging industries • Textile factories • Industrial workshops
              </p>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l border-slate-200 pt-4 sm:pt-0 sm:pl-6">
              <span className="font-bold text-slate-800 block mb-2 uppercase tracking-wide">
                Best Suitable For (Air Conditioning):
              </span>
              <p className="text-gray-600 leading-relaxed font-medium">
                Pharmaceutical industries • Cleanrooms • Food processing units • Laboratories • Hospitals • Commercial offices
              </p>
            </div>
          </div>

         {/*} <p className="mt-4 text-xs font-semibold text-slate-500 italic">
            For many industries in Haridwar, Roorkee, Rudrapur, and Dehradun, combining industrial air cooling with HVAC ventilation systems provides the best balance between performance and energy efficiency.
          </p>*/}
        </section>
        {/* Best Industrial Air Cooling Solutions List */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Best Industrial Air Cooling Solutions for Factories & Commercial Facilities
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Explore the specialized configurations commonly deployed throughout the industrial hubs of Uttarakhand.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Solution 1 */}
            <div className="p-6 border border-cyan-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-cyan-600" /> 1. Evaporative Air Cooling Systems
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                  Evaporative cooling systems are among the most preferred industrial cooling solutions in Uttarakhand because they provide effective cooling with lower energy consumption. These systems naturally cool incoming air using water evaporation technology.
              </p>
              <div className="mb-3">
                <span className="text-xs font-bold text-cyan-800 block mb-1">Benefits of Evaporative Cooling:</span>
                <ul className="text-xs text-gray-600 space-y-1 list-disc ml-5">
                  <li>Energy-efficient operation</li>
                  <li>Eco-friendly cooling method</li>
                  <li>Lower operating costs</li>
                  <li>Ideal for large industrial spaces</li>
                </ul>
              </div>
              {/*<div>
                <span className="text-xs font-bold text-cyan-800 block mb-1">Ideal Applications:</span>
                <p className="text-xs text-gray-600">
                  Manufacturing facilities, Warehouses, Assembly units, Industrial workshops, Commercial production floors. Industries operating in high-temperature environments often prefer evaporative cooling systems due to their cost efficiency and scalability.
                </p>
              </div>/*/}
            </div>

            {/* Solution 2 */}
            <div className="p-6 border border-cyan-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-600" /> 2. Industrial Air Washer Systems
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                <a 
                  href="https://www.adhunikpowertech.com/air-washer" 
                  className="text-gray-700 hover:underline font-normal"
                >
                  Air washer systems
                </a>{" "}are widely used in industries that require both cooling and air purification. These systems help improve air quality by removing dust particles, air contaminants, excess humidity, and industrial pollutants.
              </p>
              <div className="mb-3">
                <span className="text-xs font-bold text-cyan-800 block mb-1">Features of Air Washer Systems:</span>
                <ul className="text-xs text-gray-600 space-y-1 list-disc ml-5">
                  <li>Improved ventilation</li>
                  <li>Humidity management</li>
                  <li>Cleaner air circulation</li>
                  <li>Enhanced worker comfort</li>
                </ul>
              </div>
              {/* <div>
                <span className="text-xs font-bold text-cyan-800 block mb-1">Industries Using Air Washer Systems:</span>
                <p className="text-xs text-gray-600">
                  Pharmaceutical manufacturing, Food processing industries, Printing industries, Engineering units, Packaging facilities. Industrial air washer systems are especially useful in pharma manufacturing zones across Haridwar and nearby industrial regions.
                </p>
              </div>*/}
            </div>

            {/* Solution 3 */}
            <div className="p-6 border border-cyan-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
                <Wind className="w-5 h-5 text-cyan-600" /> 3. Industrial Ventilation Systems
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                 <a 
                  href="https://www.adhunikpowertech.com/ventilation-fans" 
                  className="text-gray-700 hover:underline font-normal"
                >
                  Industrial ventilation
                </a>{" "} systems are an essential part of modern air cooling infrastructure. These systems remove hot air, smoke, dust, chemical fumes, and excess heat buildup. Proper industrial ventilation can significantly improve the overall efficiency of factory operations.
              </p>
              <div>
                <span className="text-xs font-bold text-cyan-800 block mb-1">Benefits of Industrial Ventilation:</span>
                <ul className="text-xs text-gray-600 space-y-1 list-disc ml-5">
                  <li>Better indoor air quality</li>
                  <li>Improved workplace safety</li>
                  <li>Reduced machinery heat</li>
                  <li>Better airflow distribution</li>
        
                </ul>
              </div>
            </div>

            {/* Solution 4 */}
            <div className="p-6 border border-cyan-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
                <Layout className="w-5 h-5 text-cyan-600" /> 4. Ducted Air Cooling Systems
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                 Ducted air cooling systems distribute cooled air evenly across large industrial areas. These systems are commonly used in industries that require continuous cooling across multiple operational zones.
              </p>
              <div className="mb-3">
                <span className="text-xs font-bold text-cyan-800 block mb-1">Advantages:</span>
                <ul className="text-xs text-gray-600 space-y-1 list-disc ml-5">
                  <li>Uniform temperature distribution</li>
                  <li>Better airflow management</li>
                  <li>Suitable for large facilities</li>
                  <li>Scalable cooling solutions</li>
                </ul>
              </div>
              {/* <div>
                <span className="text-xs font-bold text-cyan-800 block mb-1">Ideal Applications:</span>
                <p className="text-xs text-gray-600">
                  Automobile manufacturing, Industrial warehouses, Commercial production areas, Large packaging units.
                </p>
              </div> */}
            </div>

          </div>

          {/* Solution 5 Integrated Option */}
          <div className="mt-8 p-6 border border-cyan-200 rounded-xl bg-slate-50">
            <h3 className="font-bold text-lg text-cyan-900 mb-2 flex items-center gap-2">
              <Settings className="w-5 h-5 text-cyan-600" /> 5. HVAC Integrated Air Cooling Systems
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Many industries now prefer integrated HVAC air cooling systems that combine <strong>cooling, ventilation, air filtration, and humidity management</strong>.
            </p>
            <p className="text-xs text-gray-600 mb-2">
              These systems are highly effective for: Pharmaceutical industries, Cleanrooms, Laboratories, and Controlled manufacturing environments.
            </p>
            <p className="text-xs font-bold text-cyan-800 bg-white p-3 rounded border border-cyan-100 inline-block">
              * Industries operating under GMP and ISO standards often require HVAC-integrated cooling systems for regulatory compliance and operational safety.
            </p>
          </div>
        </section>

        {/* Deep Dive Section: Pharmaceutical Industry focus 
        <section className="my-16 bg-cyan-50 border border-cyan-100 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-cyan-900 mb-4">Air Cooling Solutions for Pharmaceutical Industries</h2>
          <p className="text-gray-700 text-sm mb-6">
            The pharmaceutical sector in Haridwar and nearby industrial regions has experienced rapid growth in recent years. Pharma manufacturing requires highly controlled environments for safe and compliant production processes. Advanced industrial air cooling and HVAC systems help maintain:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {[
              "Controlled temperatures", "Clean air circulation",
              "Low contamination levels", "Humidity management",
              "Regulatory compliance"
            ].map((pharmaItem, pIdx) => (
              <div key={pIdx} className="bg-white p-4 rounded-xl border border-cyan-100 text-center shadow-sm">
                <span className="text-xs font-bold text-cyan-800">{pharmaItem}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-700">
            Modern pharma HVAC systems may include: <strong>HEPA filtration systems, AHU systems, ducted ventilation, cleanroom air handling, and controlled airflow systems</strong>. Reliable cooling infrastructure is critical for pharmaceutical industries to maintain GMP standards and operational efficiency.
          </p>
        </section>*/}

        {/* Feature Highlights Grid / Benefits */}
        <section className="my-16 bg-cyan-900 text-white p-10 rounded-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Benefits of Industrial Air Cooling Systems</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="flex flex-col items-center text-center">
              <Zap className="w-10 h-10 mb-4 text-cyan-400" />
              <h4 className="font-bold text-sm mb-2">Energy Savings</h4>
              <p className="text-[11px] text-cyan-100">Consumes significantly less electricity compared to traditional AC systems, reducing long-term operating costs.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Activity className="w-10 h-10 mb-4 text-cyan-400" />
              <h4 className="font-bold text-sm mb-2">Improved Productivity</h4>
              <p className="text-[11px] text-cyan-100">Excessive heat affects employee performance. Proper cooling creates a highly productive environment.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Wind className="w-10 h-10 mb-4 text-cyan-400" />
              <h4 className="font-bold text-sm mb-2">Better Air Quality</h4>
              <p className="text-[11px] text-cyan-100">Modern systems improve ventilation and remove stale air, dust, and pollutants from workspace areas.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Settings className="w-10 h-10 mb-4 text-cyan-400" />
              <h4 className="font-bold text-sm mb-2">Lower Maintenance</h4>
              <p className="text-[11px] text-cyan-100">Compared to refrigeration systems, air cooling options often require much lower maintenance expenses.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Snowflake className="w-10 h-10 mb-4 text-cyan-400" />
              <h4 className="font-bold text-sm mb-2">Eco-Friendly Cooling</h4>
              <p className="text-[11px] text-cyan-100">Many modern technologies are environmentally friendly and support sustainable industrial operations.</p>
            </div>
          </div>
        </section>

        {/* Industries Covered & Choice Strategy Grid */}
        <section className="my-16 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white border border-cyan-100 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-cyan-900 mb-3">Why Businesses Choose Adhunik Powertech</h3>
            <p className="text-xs text-gray-600 mb-4">Choosing the right industrial air cooling company is important for achieving efficient airflow, lower energy consumption, and long-term system performance. We focuses on delivering customized cooling and ventilation solutions based on:</p>
            <ul className="text-xs text-gray-700 space-y-2 list-none mb-4 pl-0">
              {["Industrial project experience", "HVAC expertise", "Ventilation engineering knowledge", "Customized cooling solutions", "Energy-efficient system design", "Maintenance support services"].map((evalPoint, eIdx) => (
                <li key={eIdx} className="flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full" /> {evalPoint}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-600 bg-cyan-50/50 p-3 rounded-lg">
              An experienced HVAC company can design customized cooling systems based on: Heat load analysis, factory size, production requirements, air circulation needs, and industry compliance standards. This ensures long-term cooling efficiency and reduced operational costs.
            </p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Industries We Serve Across Uttarakhand</h3>
            <p className="text-xs text-gray-600 mb-4">At Adhunik Powertech, we provide customized industrial air cooling and ventilation solutions for a wide range of industries across Haridwar, Roorkee, Rudrapur, and nearby industrial regions. </p>
             <h4 className="text-xl font-bold text-slate-800 mb-4">Industries We Commonly Work With</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
              {[
                "Pharmaceutical industries", "Textile manufacturing",
                "Food processing plants", "Automobile industries",
                "Warehousing facilities", "Chemical industries",
                "Packaging units", "Engineering workshops",
                "Commercial manufacturing plants"
              ].map((ind, iIdx) => (
                <div key={iIdx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> {ind}
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-slate-500 italic">
              With growing industrial expansion across Uttarakhand, businesses are increasingly investing in reliable cooling infrastructure to maintain productivity and energy efficiency.
            </p>
          </div>
        </section>

        {/* Regional Preference Statement */}
        <section className="mb-16 p-8 bg-slate-50 rounded-2xl border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Why Businesses in Uttarakhand Prefer Industrial Air Cooling Solutions</h2>
          <p className="text-sm text-gray-700 mb-4">
            Industries across Uttarakhand prefer industrial air cooling systems because they provide:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-bold text-cyan-800 mb-4">
            <div>✓ Lower electricity consumption</div>
            <div>✓ Scalable cooling infrastructure</div>
            <div>✓ Better ventilation</div>
            <div>✓ Cost-effective operation</div>
            <div>✓ Improved worker comfort</div>
            <div>✓ Better production efficiency</div>
          </div>
          <p className="text-xs text-gray-600">
            With increasing industrial expansion in Haridwar, Roorkee, Rudrapur, Kashipur, and Dehradun, demand for advanced industrial cooling solutions is continuously growing.
          </p>
        </section>

        {/* CTA Hook Section */}
        <section className="bg-[#0f172a] rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl mx-auto max-w-6xl my-8">
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
              Need Reliable Industrial Air Cooling Solutions?
            </h2>
            
            <p className="text-slate-300 text-xs md:text-sm font-normal mb-6 leading-relaxed max-w-3xl">
             Improve industrial performance with energy-efficient air cooling solutions by Adhunik Powertech. 
            Designed for modern industries to deliver better airflow, enhanced workplace comfort, and long-term operational efficiency.

            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a 
                href="tel:8287885885" 
                className="w-full sm:w-auto bg-[#0891b2] hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <PhoneCall className="w-4 h-4" /> Connect with Technical Team
              </a>
              
              <Link 
                href="/support-form" 
                className="w-full sm:w-auto bg-transparent border border-slate-700 hover:border-cyan-400 text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4" /> Request a Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs Component Render */}
        <section className="py-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-cyan-800 mb-8 text-center flex items-center justify-center gap-2">
            <HelpCircle className="text-cyan-600" /> Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <button 
                  className="w-full text-left p-5 font-bold text-slate-800 bg-slate-50 flex justify-between items-center text-sm"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {faq.q}
                  <ChevronRight className={`w-4 h-4 transition-transform ${openIndex === i ? 'rotate-90' : ''}`} />
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

        {/* Conclusion block 
        <section className="mt-8 p-6 border-t border-slate-200 text-justify">
          <h3 className="text-xl font-bold text-slate-800 mb-3">Conclusion</h3>
          <div className="text-gray-700 text-sm space-y-3 font-normal">
            <p>
              Industrial air cooling systems have become essential for factories, pharmaceutical units, warehouses, and manufacturing industries across Haridwar, Roorkee, and Uttarakhand. From evaporative cooling systems and industrial air washers to advanced HVAC-integrated ventilation solutions, businesses today have access to highly efficient cooling technologies designed for industrial performance and long-term energy savings.
            </p>
            <p>
              Choosing the right industrial air cooling solution can help industries improve workplace comfort, reduce electricity costs, enhance ventilation quality, and maintain operational efficiency. Businesses looking for reliable industrial cooling infrastructure should invest in professionally designed air cooling and HVAC systems that are customized according to their industrial requirements and environmental conditions.
            </p>
          </div>
        </section>*/}

      </div>
    </div>
  )
}