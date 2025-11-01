"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Zap, ShieldCheck, Thermometer, Wrench, Package, Users, AlertTriangle, Clock, TrendingUp } from "lucide-react";

export default function PanelAcBlogPage() {

  // Data for "Pain Points" section
  const painPoints = [
    {
      title: "Catastrophic Production Downtime",
      description: "When a VFD, PLC, or drive overheats, it trips. This doesn't just stop one machine; it can halt an entire production line. Every minute of downtime costs you money.",
      icon: <Clock className="w-8 h-8 text-red-600" />
    },
    {
      title: "Contamination & Component Failure",
      description: "A simple fan is the worst solution. It sucks in all the factory floor's dust, moisture, and metallic particles, coating sensitive circuit boards and causing shorts or corrosion.",
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />
    },
    {
      title: "Shortened Equipment Lifespan",
      description: "Heat is the #1 killer of electronics. For every 10°C rise above its ideal operating temperature, an electronic component's life is cut in half. A simple fan just circulates hot air.",
      icon: <TrendingUp className="w-8 h-8 text-red-600" />
    },
  ];

  // Data for "The Solution" section
  const benefits = [
    {
      title: "Total Uptime & Reliability",
      description: "A Panel AC creates a stable environment, holding a precise temperature (e.g., 25°C). This completely prevents thermal trips and ensures your production line runs 24/7.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "A Sealed, Closed-Loop System",
      description: "Unlike a fan, a Panel AC seals the cabinet (IP54). It cools the *internal* air while keeping all the harmful dust, humidity, and contaminants of the factory floor *out*.",
      icon: <Package className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Maximized Equipment ROI",
      description: "By protecting your sensitive VFDs and PLCs from both heat and contamination, you are maximizing their lifespan and getting the full value from your expensive machinery.",
      icon: <Zap className="w-8 h-8 text-cyan-600" />
    }
  ];

  // Data for "Why Adhunik" section
  const whyAdhunik = [
    {
      title: "We Are the Manufacturer",
      description: "We don't just resell—we are a leading manufacturer of Panel Air Conditioners. This means we have deep engineering control over quality, design, and performance.",
      icon: <Users className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Built for Harsh Environments",
      description: "Our Panel ACs are designed for the reality of an Indian factory floor. They are built to be robust, reliable, and require minimal maintenance even in dusty, high-temperature environments.",
      icon: <Wrench className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Energy-Efficient Solutions",
      description: "Our focus is on cost-effective cooling. Our systems are engineered to provide maximum protection for your electronics while consuming minimal energy, reducing your operational costs.",
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
                The Hidden Cost of Downtime: Why Your Electrical Cabinet Needs a Panel AC
              </h1>
              <p className="text-sm text-gray-700 mb-6 text-justify md:text-left">
                In a busy manufacturing plant, a sudden production halt is a financial disaster. The line stops, workers are idle, and delivery schedules are missed. The culprit? Often, it's a tiny, overheated component in an electrical cabinet—a VFD, PLC, or drive.
              </p>
              <p className="text-sm text-gray-700 mb-6 text-justify md:text-left">
                Many businesses try to solve this with a simple fan. This is a critical mistake. A fan just circulates hot, dusty factory air, making the problem worse. Here’s the real solution your facility needs.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="/support-form" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  Protect Your Panels Today
                </Link>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src="/panel ac mounted on control panel.webp" // IMAGE FROM YOUR UPLOAD
                alt="Adhunik Powertech Panel AC unit installed on an industrial compressor"
                width={1280} // Original width
                height={960} // Original height
                priority
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </section>

          {/* Pain Points Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">The 3 Big "Pain Points" of Not Using a Panel AC</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">If you're just using a fan or vents, you are actively exposing your most critical components to failure.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {painPoints.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <div className="flex items-center gap-4 mb-4">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The Solution Section (Using 'benefits' array) */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">The Solution: 3 Immediate Benefits of a Panel AC</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">A Panel AC is an engineered solution that provides immediate, tangible results.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600">
                  <div className="flex items-center gap-4 mb-4">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Adhunik is Trusted Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">The Adhunik Powertech Advantage: We're the Manufacturer</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">You can buy a panel cooler from any reseller, but Adhunik Powertech is a <Link href="https://www.adhunikpowertech.com/panel-air-conditioners" className="text-cyan-600 hover:underline"><strong>leading Panel AC manufacturer</strong></Link> with over 19+ years of engineering experience.</p>
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
              <h2 className="text-xl md:text-2xl font-bold mb-4">Stop Risking Downtime. Protect Your Panels Today.</h2>
              <p className="text-cyan-100 mb-8 text-sm">Don't wait for the next costly failure. Contact the manufacturing and engineering experts at Adhunik Powertech to find the perfect Panel AC solution for your facility.</p>
              <div className="flex justify-center">
                <Link href="/support-form" className="bg-white text-md font-bold text-cyan-800 hover:bg-cyan-100 py-3 px-8 rounded-lg transition duration-300">
                  GET A FREE CONSULTATION
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

