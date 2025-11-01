"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ShieldCheck, Clock, Award, Users, Wrench, Ruler, Snowflake, Wind, ChevronsRight, Zap } from "lucide-react";

export default function TopHvacContractorNoidaPage() {

  const services = [
    {
      title: "Turnkey HVAC Project Execution",
      description: "We take complete ownership of your project, from the initial blueprint to the final handover. Our turnkey approach ensures a smooth, timely, and budget-compliant project delivery.",
      icon: <Users className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "HVAC System Design & Engineering",
      description: "A powerful HVAC system starts with a flawless design. Our veteran engineers use the latest tools to create balanced, efficient, and sustainable designs tailored to your space.",
      icon: <Ruler className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "VRV / VRF System Installation",
      description: "Ideal for modern commercial buildings, these systems offer exceptional energy efficiency and individual zone control. We specialize in the expert installation and maintenance.",
      icon: <Snowflake className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Chiller Plant Solutions",
      description: "For large-scale facilities like hospitals and malls, we design and install high-capacity, heavy-duty chiller plants focused on long-term performance and serviceability.",
      icon: <ChevronsRight className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Industrial & Commercial Ventilation",
      description: "Ensuring high Indoor Air Quality (IAQ) is critical in Noida. We engineer bespoke systems to remove stale air, control humidity, and filter pollutants.",
      icon: <Wind className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "24/7 Service, Repair & AMC",
      description: "An HVAC breakdown can halt business. Our Annual Maintenance Contracts (AMCs) prevent problems, and our rapid-response repair team is available 24/7 across Delhi NCR to get you back online fast.",
      icon: <Wrench className="w-8 h-8 text-cyan-600" />
    },
  ];

  const whyAdhunik = [
    {
      title: "Unmatched Expertise & Experience (19+ Years)",
      description: "With over 19 years of deep industry expertise (founded in 2005), our team of engineers possesses a profound understanding of HVAC dynamics. We don't just follow instructions; we analyze challenges and engineer reliable solutions.",
      icon: <Users className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Award-Winning Quality Standards",
      description: "Quality is our guarantee. We are an ISO 9001:2015 certified company, and our work (inherited by Adhunik HVAC Projects) was honored with the India Business Award 2025 for 'Best Quality Standards'. We adhere strictly to ISHRAE, ASHRAE, and NBC standards.",
      icon: <Award className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Pioneers in Energy Efficiency",
      description: "Our core philosophy is creating sustainable solutions. We conduct detailed analyses to select the right-sized equipment, integrate smart controls (BMS), and design systems for maximum efficiency, reducing your operational costs.",
      icon: <Zap className="w-8 h-8 text-cyan-600" />
    }
  ];

  return (
    <>
      <div className="bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
            <div className="w-full md:w-6/12">
              <h1 className="text-2xl md:text-3xl text-center md:text-left font-bold text-cyan-800 mb-4 leading-tight">
                How to Choose the Best HVAC Contractor in Noida (A 5-Point Checklist)
              </h1>
              <p className="text-sm text-gray-700 mb-6 text-justify md:text-left">
                Noida and Greater Noida are at the epicenter of India's commercial and industrial boom. From the high-tech IT parks in Sector 62 to the sprawling manufacturing plants and data centers, every business relies on a critical, often invisible, asset: its HVAC system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Clock className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">19+ Years of Expertise</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Award className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Award-Winning Quality</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">24/7 Service & Support</span>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link href="/support-form" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  GET A FREE CONSULTATION
                </Link>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src="/top-hvac-contractor-in-noida.webp" // Assumes this image is in your /public folder
                alt="Skyline of Noida IT Parks, representing commercial HVAC"
                width={1260}
                height={750}
                loading="lazy"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </section>

          {/* Trusted By Section */}
          <section className="text-center my-16 py-8">
             <h2 className="text-xl font-semibold text-gray-500 mb-4">Trusted By Industry Leaders Across Delhi NCR</h2>
             <p className="max-w-3xl mx-auto text-gray-600 text-sm">
                Our commitment to quality and reliability has made us the go-to HVAC partner for some of the most respected names in the industry. We are proud to have earned the trust of businesses that demand nothing but the best.
             </p>
          </section>
          
          {/* Main Blog Content Section -- WIDTH UPDATED */}
          <section className="mb-16">
            {/* FIX: Changed 'max-w-3xl' (narrow) to 'max-w-5xl' (wider) 
              You can also try 'max-w-7xl' if you want it to be full-width.
            */}
            <div className="max-w-8xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="text-gray-700 font-sans">
                <p className="text-justify mb-4">Choosing the right <strong>HVAC contractor in Noida</strong> is a critical business decision that impacts your operational costs, energy efficiency, and long-term business continuity. How do you find a true engineering partner among the countless installers? Here is a 5-point checklist to help you identify a top-tier contractor.</p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. Look for Turnkey & Industrial Expertise</h2>
                <p className="text-justify mb-4">
                  The first mistake many businesses make is hiring a residential contractor for a commercial job. The scale, complexity, and demands are completely different. Your facility needs a specialist. Look for a contractor with a proven portfolio of commercial and industrial projects. More importantly, find a <Link href="https://www.adhunikpowertech.com/hvac" className="text-cyan-600 hover:underline"><strong>turnkey HVAC contractor</strong></Link>. This means they provide a "single-point-of-contact" solution, managing the entire project lifecycle. At Adhunik Powertech, our turnkey process covers:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                  <li className="text-justify font-sans"><span className="font-semibold">Consultancy & Design:</span> We assess your needs, perform precise heat-load calculations, and design a custom, energy-efficient system.</li>
                  <li className="text-justify font-sans"><span className="font-semibold">Engineering & Installation:</span> Our in-house engineers and certified technicians handle the complete installation and commissioning.</li>
                  <li className="text-justify font-sans"><span className="font-semibold">Long-Term Support:</span> We provide comprehensive <strong>Annual Maintenance Contracts (AMCs)</strong> to ensure your system runs flawlessly for years.</li>
                </ul>
                <p className="text-justify mb-4">This turnkey approach saves you from the nightmare of coordinating separate designers, installers, and service teams, ensuring accountability and a smoother project flow.</p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. Are They a Manufacturer or Just an Installer?</h2>
                <p className="text-justify mb-4">This is a critical, often-overlooked question. Most HVAC contractors in Noida are simply installers—they sell and install equipment made by other brands. A top-tier contractor has a deeper level of engineering knowledge. <strong>Adhunik Powertech is a leading HVAC manufacturer.</strong> We don't just install key components; we design and build them in our own state-of-the-art facilities. Our manufacturing range includes:</p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                  <li className="text-justify font-sans">Air Handling Units (AHUs)</li>
                  <li className="text-justify font-sans">Air Washers</li>
                  <li className="text-justify font-sans">Ducted Air Coolers</li>
                  <li className="text-justify font-sans">Panel Air Conditioners</li>
                  <li className="text-justify font-sans">Industrial Ventilation Fans</li>
                  <li className="text-justify font-sans">Cleanroom Products like Air Showers</li>
                </ul>
                <p className="text-justify mb-4">What does this mean for you? It means we have an engineer's understanding of every nut and bolt. We can ensure total quality control and create truly customized solutions for your Noida facility, not just a "one-size-fits-all" installation.</p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. Demand a Focus on Energy Efficiency</h2>
                <p className="text-justify mb-4">In an era of rising energy costs, an inefficient HVAC system can be one of the largest drains on your operational budget. A modern HVAC contractor must also be an energy consultant. Your contractor should be able to:</p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                  <li className="text-justify font-sans"><span className="font-semibold">Design for Efficiency:</span> Our core focus is providing "energy-efficient & cost-effective cooling solutions".</li>
                  <li className="text-justify font-sans"><span className="font-semibold">Right-Size Equipment:</span> We conduct detailed analyses to ensure your system is "right-sized"—not too big (wasting capital) and not too small (failing to cool).</li>
                  <li className="text-justify font-sans"><span className="font-semibold">Integrate Smart Controls:</span> We can integrate advanced Building Management Systems (BMS) to optimize performance, reduce waste, and potentially save you 18-20% or more on electricity bills.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">4. Verify Their Experience & Quality Standards</h2>
                <p className="text-justify mb-4">You cannot afford to be a new contractor's test project. Experience and proven quality are non-negotiable.</p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                  <li className="text-justify font-sans"><span className="font-semibold">Legacy:</span> How long have they been in business? Adhunik Powertech was founded in 2005 and has a <strong>19+ year legacy</strong> of engineering excellence.</li>
                  <li className="text-justify font-sans"><span className="font-semibold">Compliance:</span> Do they adhere to all critical standards? Our projects strictly follow <strong>ISHRAE, ASHRAE, NBC, and CPWD guidelines</strong>.</li>
                  <li className="text-justify font-sans"><span className="font-semibold">Awards & Certifications:</span> Look for third-party validation. Adhunik Powertech is an <strong>ISO 9001:2015 certified</strong> company. Our new projects division, Adhunik HVAC Projects, inherits a legacy recognized with the <strong>India Business Award 2025 for 'Best Quality Standards'</strong>.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">5. Insist on a Strong Local Service Team</h2>
                <p className="text-justify mb-4">When your critical cooling system fails in the middle of a May heatwave, you need a local partner. A top HVAC contractor in Noida must have a robust Delhi NCR service team. A local team means faster emergency response times, familiarity with local building codes, and quicker access to parts and support. Adhunik Powertech is headquartered in Gurugram and has a massive service footprint across Noida, Greater Noida, Ghaziabad, and Faridabad, offering <strong>24/7 support</strong> to our AMC clients.</p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Your Trusted HVAC Partner in Noida</h2>
                <p className="text-justify mb-4">Choosing the right contractor comes down to finding a partner with proven experience, deep engineering knowledge, and an unwavering commitment to quality. As a 19-year veteran manufacturer and a turnkey project expert, Adhunik Powertech is the trusted choice for hundreds of industrial and commercial clients across Noida and the Delhi NCR.</p>
                <p className="text-justify">Don't leave your facility's performance to chance.</p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Contact Noida's Leading HVAC Contractor Today!</h2>
              <p className="text-cyan-100 mb-8 text-sm">Partner with Adhunik Powertech for innovative, reliable, and cost-effective solutions tailored to your needs. Contact us today for a free consultation and site assessment for your Noida facility.</p>
              <div className="flex justify-center">
                <Link href="/support-form" className="bg-white text-md font-bold text-cyan-800 hover:bg-cyan-100 py-3 px-8 rounded-lg transition duration-300">
                  REQUEST A FREE CONSULTATION
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

