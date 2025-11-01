"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ShieldCheck, Clock, Award, Users, Wrench, Ruler, Snowflake, Wind, ChevronsRight, Zap, BarChart3 } from "lucide-react"; // Added BarChart3

export default function HvacEnergyConsumptionPage() {

  // Updated array for the 5 strategies
  const strategies = [
    {
      title: "1. Proactive Maintenance (Not Just Reactive Repair)",
      description: "Don't wait for it to break. A dirty filter or coil can increase energy consumption by 15% or more. Our comprehensive AMCs include proactive cleaning, testing, and optimization to keep your system running at peak efficiency and prevent costly failures.",
      icon: <Wrench className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "2. Smart System Design & 'Right-Sizing'",
      description: "The biggest energy waste often comes from an improperly sized system. A unit that's too big (short-cycling) or too small (running constantly) wastes power. Our engineers conduct detailed heat-load calculations to ensure your equipment is perfectly sized for your space.",
      icon: <Ruler className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "3. Upgrade to Modern, Efficient Technology",
      description: "A 15-year-old chiller is no match for today's technology. Upgrading to modern VRF/VRV systems or high-efficiency chillers can cut your cooling energy use by 30-50%. As manufacturers, we specialize in engineering these next-generation solutions.",
      icon: <Zap className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "4. Integrate Smart Controls (BMS)",
      description: "Why cool an empty boardroom? We integrate advanced Building Management Systems (BMS) and smart thermostats. This allows you to program schedules, optimize performance based on occupancy, and monitor consumption in real-time, drastically reducing waste.",
      icon: <BarChart3 className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "5. Optimize Your Air Distribution",
      description: "It's not just about making cold air; it's about getting it where it needs to go. Leaky ducts, poor ventilation, and inefficient Air Handling Units (AHUs) mean your system is just cooling the ceiling. As AHU manufacturers, we design systems for perfect, balanced, and efficient airflow.",
      icon: <Wind className="w-8 h-8 text-cyan-600" />
    },
  ];

  const whyAdhunik = [
    {
      title: "We Are Engineers & Manufacturers",
      description: "Unlike simple installers, we are an ISO 9001:2015 certified manufacturer. We have an engineer's understanding of system dynamics and build our own high-efficiency AHUs, Air Washers, and Ducted Coolers.",
      icon: <Users className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "19+ Years of Proven Expertise",
      description: "Since 2005, we have been the trusted partner for hundreds of industrial and commercial clients. Our experience (inherited by Adhunik HVAC Projects) has been recognized with the India Business Award 2025 for 'Best Quality Standards'.",
      icon: <Award className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Turnkey Solutions Provider",
      description: "We handle everything from the initial energy audit and system design to installation and long-term AMCs. This single-point-of-contact approach ensures your energy-saving goals are met at every stage.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />
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
                Beyond the Thermostat: 5 Proven Ways to Reduce Commercial HVAC Energy Consumption
              </h1>
              <p className="text-sm text-gray-700 mb-6 text-justify md:text-left">
                For nearly all commercial and industrial facilities in India, the HVAC system is one of the largest operational expenses, often accounting for 40-60% of an entire building's electricity bill. But these costs aren't fixed. Adhunik Powertech, with 19+ years of engineering expertise, shares 5 proven strategies to cut waste and significantly reduce your HVAC energy consumption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Zap className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Save Up to 30%</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Wrench className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Prevent 95% of Failures</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Award className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Award-Winning Quality</span>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link href="/support-form" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  GET A FREE ENERGY AUDIT
                </Link>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src="/5 ways to reduce energy consumption.webp" // IMPORTANT: Create and upload this image
                alt="An energy-efficient HVAC system on a commercial rooftop"
                width={1260}
                height={750}
                loading="lazy"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </section>

          {/* Intro Section */}
          <section className="text-center my-16 py-8">
             <h2 className="text-xl font-semibold text-gray-500 mb-4">Why Inefficient HVAC is More Than Just a High Bill</h2>
             <p className="max-w-3xl mx-auto text-gray-600 text-sm">
                An inefficient HVAC system doesn't just cost you money every month. It's working harder than it should, leading to increased wear-and-tear, more frequent breakdowns, and a shorter equipment lifespan. Optimizing your system isn't just about saving—it's about protecting your investment.
             </p>
          </section>
          
          {/* 5 Strategies Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">5 Proven Strategies to Cut HVAC Costs</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">Here are 5 actionable strategies our engineers use to help businesses across Delhi NCR reduce their HVAC energy consumption.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {strategies.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600">
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 text-justify">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Adhunik is Trusted Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">Why Partner with Adhunik for Energy Efficiency?</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">Fixing energy efficiency isn't just about changing a filter. It requires a holistic, engineering-first approach. Adhunik Powertech is uniquely positioned to be your partner.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {whyAdhunik.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Stop Wasting Money on Inefficient Cooling</h2>
              <p className="text-cyan-100 mb-8 text-sm">Partner with Adhunik Powertech to analyze your current system and build a strategy for long-term savings. Contact our engineering team today for a free consultation and energy efficiency audit.</p>
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
