"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Award, Zap, ShieldCheck, Users, Building, Rss } from "lucide-react";

export default function LegacyBlogPage() {

  // Data for "Why This Change" section
  const benefits = [
    {
      title: "Unmatched Focus",
      description: "A team that lives and breathes turnkey HVAC projects. This sharp focus allows them to stay at the forefront of the latest technologies and industry best practices.",
      icon: <Users className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Greater Agility",
      description: "A specialized structure allows the projects team to respond faster and more flexibly to the unique, complex demands of every client and construction site.",
      icon: <Zap className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "The Best of Both Worlds",
      description: "Our clients get the agile, personalized service of a dedicated specialist, backed by the stability, resources, and manufacturing power of the Adhunik Powertech brand.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />
    },
  ];

  // Data for "Core Services" section
  const services = [
    {
      title: "Turnkey Project Execution",
      description: "Managing the entire project from initial design and engineering to installation, commissioning, and final handover with a single point of accountability.",
      icon: <Award className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Specialized Industry Solutions",
      description: "Expertise in demanding sectors like Pharmaceuticals (Clean Rooms), IT (Data Centers), Manufacturing (Process Cooling), and large-scale Commercial buildings.",
      icon: <Building className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "After-Sales Support & AMCs",
      description: "A continued partnership after handover, offering comprehensive Annual Maintenance Contracts (AMCs) to ensure peak performance and longevity.",
      icon: <Rss className="w-8 h-8 text-cyan-600" />
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
                A New Chapter of Engineering Excellence: Introducing Adhunik HVAC Projects
              </h1>
              <p className="text-sm text-gray-700 mb-6 text-justify md:text-left">
                For over 19 years, <strong>Adhunik Powertech</strong> has been a benchmark for engineering excellence, manufacturing, and project execution across India. Our success has been built on a foundation of trust, quality, and an unwavering commitment to our clients.
              </p>
              <p className="text-sm text-gray-700 mb-6 text-justify md:text-left">
                Today, we are thrilled to announce a strategic and exciting evolution in our journey. To provide even greater focus and specialized expertise to our project clients, we have channeled the power of our legacy into a new, dedicated division under the company Adhunik Guds & Services Private Limited : <strong>Adhunik HVAC Projects</strong>.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="https://www.adhunikhvacprojects.com/" target="_blank" rel="noopener noreferrer" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  Visit the New Website
                </Link>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src="/Adhunik HVAC Projects Logo.webp" // IMPORTANT: Create and upload this image
                alt="Adhunik Powertech and Adhunik HVAC Projects logos"
                width={1260}
                height={750}
                priority
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </section>

          {/* Intro Section */}
          <section className="text-center my-16 py-8">
             <h2 className="text-xl font-semibold text-gray-500 mb-4">A Legacy Reimagined, Not Replaced</h2>
             <p className="max-w-3xl mx-auto text-gray-600 text-sm">
               <strong>Adhunik HVAC Projects</strong> is not a new startup. It is the evolution of the very projects division that has been the heart of our turnkey solutions for nearly two decades. This team inherits the entire <strong>19+ year legacy</strong>, a portfolio of over <strong>600+ completed projects</strong>, and the industry-wide recognition for quality, including the prestigious <strong>India Business Award 2025 for "Best Quality Standards & Services"</strong>.
             </p>
          </section>
          
          {/* Why This Change? Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">Why a Dedicated Company?</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">The world of HVAC is more complex than ever. This new structure allows our project experts to provide you with:</p>
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

          {/* Core Services & Backlink Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">What Does Adhunik HVAC Projects Do?</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">Adhunik HVAC Projects will now operate as our specialized arm for all large-scale turnkey projects, focusing exclusively on delivering end-to-end engineering solutions.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Main Backlink & CTA Section */}
          <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4">The Future is Focused</h2>
              <p className="text-cyan-100 mb-8 text-sm">
                While Adhunik Powertech continues to lead in manufacturing high-quality HVAC products like Panel ACs, Air Washers, and Fans, Adhunik HVAC Projects will be our focused expert for project execution.
                <br /><br />
                To explore their portfolio, detailed services, and to partner with the team you've always trusted, we invite you to visit their new home on the web.
              </p>
              <div className="flex justify-center">
                <Link 
                  href="https://www.adhunikhvacprojects.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white text-md font-bold text-cyan-800 hover:bg-cyan-100 py-3 px-8 rounded-lg transition duration-300"
                >
                  Visit Adhunik HVAC Projects
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}