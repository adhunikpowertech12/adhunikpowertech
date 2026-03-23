"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { 
  Settings, 
  ShieldCheck, 
  Wind, 
  Wrench, 
  Cpu, 
  Users, 
  ThermometerSnowflake, 
  Zap, 
  BarChart3, 
  CheckCircle2 
} from "lucide-react";

export default function HvacContractorBlogPage() {

  // Data for Core Services Section
  const hvacServices = [
    {
      title: "Smart HVAC Solutions",
      description: "Integration of IoT sensors and AI-driven thermostats that adjust cooling based on real-time heat load, maximizing system longevity and reducing operational costs.",
      icon: <Cpu className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Specialized Industrial Ventilation",
      description: "Robust exhaust systems for manufacturing units and basements. Includes axial fans, centrifugal blowers, and scrubbers for strict environmental compliance.",
      icon: <Wind className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Precision Air Conditioning (PAC)",
      description: "Niche cooling solutions for IT hubs and data centers that require exact 24/7 temperature and humidity control to maintain high-uptime environments.",
      icon: <Settings className="w-8 h-8 text-cyan-600" />
    },
  ];

  // Data for Specialized Projects Section
  const specializedProjects = [
    {
      title: "Industrial Air Washers",
      description: "High-efficiency evaporative cooling for massive floor areas where traditional AC systems are not cost-effective.",
      icon: <ThermometerSnowflake className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Panel Air Conditioners",
      description: "Protecting sensitive CNC and electrical control panels from overheating and dust in harsh industrial environments.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Turnkey Projects",
      description: "Seamless management from conceptual design to commissioning, integrating exhaust and central cooling into one infrastructure.",
      icon: <CheckCircle2 className="w-8 h-8 text-cyan-600" />
    }
  ];

  // Data for Why Adhunik Section
  const companyPillars = [
    {
      title: "Design & Consultancy",
      description: "Meticulous heat load calculations by expert engineers to prevent over-designing costs or under-designing performance gaps.",
      icon: <BarChart3 className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Energy Efficiency Audits",
      description: "Comprehensive audits of existing systems with retrofitting options to lower carbon footprints and rising electricity bills in the NCR.",
      icon: <Zap className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Air Quality & Disinfection",
      description: "Integration of UVGI, HEPA filters, and air ionizers to ensure healthy, pathogen-free environments for modern commercial spaces.",
      icon: <Users className="w-8 h-8 text-cyan-600" />
    }
  ];

  return (
    <>
      <div className="bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col-reverse md:flex-row gap-12 items-center mb-20">
            <div className="w-full md:w-6/12">
              <span className="text-cyan-700 font-bold tracking-widest uppercase text-sm">Engineering Excellence</span>
              <h1 className="text-3xl md:text-4xl font-bold text-cyan-900 mt-2 mb-6 leading-tight">
                Top HVAC Contractor in Delhi NCR for Industrial & Commercial Projects
              </h1>
              <p className="text-md text-gray-700 mb-6 text-justify">
                In the rapidly evolving industrial landscape of Delhi, Noida, and Gurgaon, maintaining a controlled environment is a business necessity. Adhunik Powertech is your strategic partner, understanding the complexities of industrial cooling, energy efficiency, and regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/support-form" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-center">
                  Consult an Expert
                </Link>
                <Link href="/our-projects" className="border-2 border-cyan-700 text-cyan-700 hover:bg-cyan-50 font-bold py-3 px-8 rounded-lg transition duration-300 text-center">
                  View Our Projects
                </Link>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1774247285/HVACinDelhincr_nioekh.webp" 
                alt="Top HVAC contractor in Delhi NCR for industrial and commercial projects featuring modern HVAC plant room with large ducts, chillers, and ventilation systems by Adhunik Powertech"
                width={1200}
                height={800}
                priority
                className="w-full h-auto rounded-2xl shadow-2xl border-b-8 border-cyan-700"
              />
            </div>
          </section>

          {/* Core Services Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Comprehensive HVAC Engineering</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600">We don't just install units; we engineer ecosystems designed for Delhi NCR's extreme 48°C climate.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {hvacServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-cyan-600">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-justify">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Specialized Cooling Section */}
          <section className="mb-20 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3">
                <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-4">Specialized Industrial Solutions</h2>
                <p className="text-gray-600 mb-6">Custom-engineered cooling that goes beyond residential standards to ensure machine and personnel efficiency.</p>
                <ul className="space-y-3">
                  {['Manesar Industrial Belt', 'Gurgaon Tech Hubs', 'Noida Logistics Centers'].map((loc) => (
                    <li key={loc} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600" /> {loc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                {specializedProjects.map((project, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-gray-50">
                    <div className="shrink-0">{project.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{project.title}</h4>
                      <p className="text-xs text-gray-600 leading-normal">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Pillars Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">Why Adhunik Powertech is the Top Choice</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600">Setting new benchmarks in Delhi NCR through technical prowess and strategic OEM partnerships.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {companyPillars.map((pillar, index) => (
                <div key={index} className="text-center group p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-50 group-hover:bg-cyan-700 group-hover:text-white transition-colors duration-300 mb-6 text-cyan-700">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{pillar.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process Timeline Section */}
          <section className="mb-20">
            <div className="bg-cyan-900 rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-2xl font-bold mb-10 text-center">Our Execution Roadmap</h2>
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 text-center">
                {['Site Survey', 'Concept Design', 'Budgeting', 'Installation', 'Testing', 'AMC Support'].map((step, i) => (
                  <div key={step} className="relative">
                    <div className="text-cyan-400 font-black text-3xl mb-2">0{i + 1}</div>
                    <div className="text-sm font-bold uppercase tracking-tighter">{step}</div>
                    {i < 5 && <div className="hidden lg:block absolute top-4 -right-2 w-4 h-px bg-cyan-700"></div>}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-800 p-12 text-center text-white shadow-xl">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Facility?</h2>
              <p className="text-cyan-100 mb-10">Whether it's a new industrial plant or a corporate retrofit, get the expertise your high-stakes project deserves.</p>
              <Link href="/support-form" className="bg-white text-cyan-800 hover:bg-cyan-50 font-black py-4 px-10 rounded-full transition-transform hover:scale-105 inline-block">
                GET A FREE SITE AUDIT
              </Link>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
          </section>

        </div>
      </div>
    </>
  )
}