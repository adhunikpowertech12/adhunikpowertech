"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  ShieldCheck,
  GaugeCircle,
  Thermometer,
  Clock,
  BadgeDollarSign,
  Hammer,
  Boxes,
  FileCheck2,
  Ruler,
  AlertTriangle,
  Trash2
} from "lucide-react";

import {
  ScanSearch,
  Users2,
  ThermometerSun,
  Wrench,
  SlidersHorizontal,
  BarChart3,

  Wind,
  LayoutTemplate,
  Plug,
  Cpu
} from "lucide-react";

import {
  CalendarCheck2,
  Radar,
  Repeat2,
  LineChart,
  ThumbsDown,
  ShieldX,
  ClipboardCheck,
  Building2
} from "lucide-react";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


import { PhoneCall, AlarmClockCheck, MapPin, PackageCheck } from 'lucide-react';
import { RefreshCw, } from 'lucide-react';


export default function LegacyOfAdhunikPowertech() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const energySystems = [

    {
      title: 'The Same Award-Winning Team, A Sharpened Focus',
      desc: <>

        <p>
       While Adhunik HVAC Projects is a new name, the team, the expertise, and the commitment to quality are the same ones you have trusted for years. This strategic move is further strengthened by our relationship with our dedicated manufacturing arm, Om Cooling System (OCS), which ensures a seamless supply of high-quality, reliable components built to our exacting standards.

</p>
 
      </>,
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },

  
    {
      title: 'Explore the Future of HVAC Excellence',
      desc: <>

        <p>
      We are incredibly excited about this new chapter and are confident that Adhunik HVAC Projects will continue to set the benchmark for quality and reliability in the industry. We invite all our valued clients, partners, and future customers to explore the new home of our HVAC expertise.

</p>
<p>
    Discover our full portfolio of services, our project case studies, and our vision for the future of HVAC engineering by visiting our new website.

</p>
 
      </>,
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },

  
    
  
  ];


  const ClientReferences = [

    {
      description: <>
        <p> <strong className=' font-semibold  text-cyan-700'>
         Consultancy & Strategic Design : </strong> 
       Every successful project begins with a flawless plan. Our process starts with expert consultancy, where our team of professional engineers engages in deep interactions with all stakeholders—architects, owners, and end-users. We work to crystallize your vision and translate it into a clear, actionable strategy. This foundational phase includes a detailed needs assessment, the creation of a design concept report with budgetary estimates, and the development of an optimal system layout that adheres to the highest industry standards.

</p>
      </> ,
    },

   
  
    {
      description: <>
        <p> <strong className=' font-semibold  text-cyan-700'>
         Detailed Engineering : 
         </strong> 
   With our extensive experience, we focus on designing energy-efficient and cost-effective solutions with minimal maintenance. This is where precision takes shape. Our engineers utilize advanced software for precise load calculations, P&ID development, and energy mass balance to ensure peak performance. We develop all necessary technical documents, including plot plans, 2D/3D models, isometrics, and a detailed material take-off (MTO), ensuring every technical aspect is perfected before construction begins.

</p>
      </> ,
    },

   
    {
      description: <>
        <p> <strong className=' font-semibold  text-cyan-700'>
        Turnkey Project Execution & Management : </strong> 
  Our project execution is defined by precision, safety, and a commitment to timelines. We execute all projects under strict adherence to NBC, CPWD, and NABH guidelines, while following ISHRAE, ASHRAE, and ISO standards. Our professional on-site management team oversees every task, manages risk, and maintains transparent communication with regular progress reports. We are committed to completing every project within the promised time, without ever compromising on our award-winning quality.

</p>
      </> ,
    },

   
    {
      description: <>
        <p> <strong className=' font-semibold  text-cyan-700'>
        Specialized Solutions for Demanding Industries : </strong> 
  We understand that every industry has unique challenges. Adhunik HVAC Projects has a proven track record of engineering tailored solutions to meet the strict compliance and operational needs of specialized sectors, including:

</p>

<ul>
    <li>
    <strong className=' font-semibold  text-cyan-700'>Pharmaceutical & Healthcare : </strong> 

   Designing and executing compliant HVAC systems for Clean Rooms, OTs, and laboratories where air quality is non-negotiable.
 </li>

 
    <li>
    <strong className=' font-semibold  text-cyan-700'>
    Manufacturing & Industrial : </strong> 

  Implementing robust ventilation and process cooling to manage high heat loads and ensure worker safety in factories and warehouses.

 </li>

    <li>
    <strong className=' font-semibold  text-cyan-700'>
    IT & Data Centers : </strong> 

  Delivering redundant, mission-critical Precision Air Conditioning (PAC) to protect sensitive digital infrastructure 24/7.

 </li>

    <li>
    <strong className=' font-semibold  text-cyan-700'>
   Commercial & Hospitality : </strong> 

  Creating optimal comfort and energy efficiency for corporate offices, hotels, and retail spaces.

 </li>


</ul>
      </> ,
    },

   
  
   
  ];
 


  const KeyTakeaways = [
    {
        title:"Unmatched Focus : ",
      description: "A team that lives and breathes HVAC, staying at the forefront of the latest technologies and industry best practices.",
    },
   
    {
        title:"Greater Agility : ",
      description: "The ability to respond faster and more flexibly to the unique demands of every project.",
    },
   
    {
        title:"Enhanced Client-Centricity : ",
      description: "A service model built entirely around the specific lifecycle of an HVAC project, from the first sketch to long-term maintenance.",
    },
   
    

  ];

  
  return (
    <>

      <div className="bg-gradient-to-b mt-24  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className=" w-full md:w-6/12">

              <Image
                src="/adhunik-blog.webp"
                alt="Commercial HVAC System"
                width={700}
                loading="lazy"
                height={500}
                className="w-full h-auto rounded-xl shadow-xl border-2 border-cyan-100"
                
              />

            </div>


            <div className=" w-full md:w-6/12">

              <h1 className=" text-lg md:text-2xl text-center md:text-left font-bold text-cyan-800 mb-6 leading-tight">
              A Legacy Reimagined : Introducing Adhunik HVAC Projects, Our New Specialized Company

              </h1>

              <p className=" w-full md:w-10/12 text-sm text-gray-700 mb-6 text-justify md:text-left ">
            For over 19 years, Adhunik Powertech has proudly stood as a benchmark for engineering excellence and project execution across India. Our journey, which began in 2005, has been defined by a relentless commitment to quality, innovation, and client satisfaction. A cornerstone of this success has been our comprehensive HVAC division, a team that has successfully delivered over 600 complex projects and earned the industry's highest honors, including the prestigious India Business Award 2025 for "Best Quality Standards & Services."

              </p>

             

            </div>

          </section>

          {/* Key Takeaways */}



          <section className="mb-16 bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100">
           
            <p className=' text-sm pb-4 text-justify'>
         As we look to the future, we recognize that the world of engineering and construction is evolving. The demand for deeper specialization, greater agility, and more focused expertise has never been higher. To not only meet but exceed these future demands, we have taken a bold and strategic step forward.

</p>
            <p className=' text-sm pb-4 text-justify'>
Today, we are thrilled to announce the next chapter in our engineering legacy. The renowned HVAC projects division of Adhunik Powertech has been strategically restructured into a new, independent, and highly specialized company: <Link href='https://www.adhunikhvacprojects.com'>
            <strong className=' text-cyan-400'>Adhunik HVAC Projects</strong>
          </Link>.


</p>
         
          </section>


          <section className="mb-16 bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100">
            <p className=" md:text-2xl   font-bold text-cyan-800 mb-6 pb-2 border-b-2 border-cyan-200">
              <span className="bg-cyan-600 text-white px-2 py-1 rounded-md">
            
           Why a New, Specialized Company ? The Vision for the Future

              </span>
            </p>
            <p className=' text-sm pb-4 text-justify'>
        This transition is more than just a new name; it's a focused evolution designed to deliver unparalleled value to our clients. In today’s competitive landscape, clients require a partner who is not just a general contractor but a true specialist with deep, domain-specific knowledge. By creating Adhunik HVAC Projects as a dedicated entity under the new banner of Adhunik Guds & Services Private Limited, we are channeling our decades of experience into a single, powerful stream of expertise.

</p>
            <p className=' text-sm pb-4 text-justify'>
       This new structure allows for :


</p>
            <ul className="space-y-4">
              {KeyTakeaways.map((item, index) => (

                <li key={index} className="flex items-start ">
                  <span className="flex-shrink-0 bg-cyan-100 text-cyan-800 rounded-full p-2 mr-3">

                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>

                  </span>

                  <span className="text-gray-700  md:font-medium">
                 <strong className=' font-bold text-cyan-600'> {item.title} : </strong> {item.description}
                  </span>

                </li>
              ))}
            </ul>

                  <p className=' text-sm pb-4 text-justify pt-4'>
      For our valued clients, this means you get the best of both worlds: the proven stability, resources, and trust of the Adhunik legacy, combined with the sharp focus and personalized service of a dedicated specialist.

</p>
          </section>

          {/* Main Content */}
          <div className="space-y-16">
          
            <section className="bg-white md:p-8 p-3 rounded-xl shadow-md">
             

              <div className="mt-8">
                <h3 className="md:text-2xl font-semibold text-cyan-700 mb-4 text-center md:text-left">
             Our Comprehensive Suite of Services : What Adhunik HVAC Projects Delivers

                </h3>
                <p className="text-gray-600 mb-4 text-sm text-justify md:text-left">
             Adhunik HVAC Projects will now serve as the single point of excellence for all end-to-end HVAC needs, continuing the award-winning work of its predecessor. Our services are structured to provide comprehensive support throughout the entire project lifecycle.

 </p>

 

                <div className="bg-white border border-cyan-200 rounded-lg p-6 shadow-sm">
                 
                  <ul className="space-y-3">

                    {ClientReferences.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-cyan-600 mr-2">•</span>
                        <span className="text-gray-700 text-sm">
                        {item.description}
                        </span>
                      </li>
                    ))}

                  </ul>
                </div>

                

              </div>
            </section>



            



            <section className="bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100 mb-16">
           

    
              <div className="mb-12">
                <h3 className="md:text-2xl text-center md:text-left font-semibold text-cyan-700 mb-4">
            After-Sales Support & Annual Maintenance Contracts (AMCs)

  </h3>

                <p className="text-gray-700 mb-6  text-sm text-justify md:text-left">
              Our partnership doesn't end when the project is handed over. We offer comprehensive after-sales support and tailored Annual Maintenance Contracts (AMCs) to ensure your system continues to operate at peak performance. Our support services are designed to extend the life of your investment, prevent unexpected downtime, and guarantee long-term energy efficiency.

                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {energySystems.map((system, index) => (

                    <div key={index} className="bg-white flex flex-col   justify-start  md:items-start items-start  md:text-left text-center p-5 rounded-lg border border-cyan-100 hover:border-cyan-300 transition-all shadow-sm hover:shadow-md">

                      <div className="bg-cyan-100 w-12 h-12 rounded-full flex  items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={system.icon} />
                        </svg>
                      </div>

                      <div className="font-bold text-cyan-800 text-lg mb-2">{system.title}
                      </div>

                      <div className="text-gray-500 text-sm text-justify flex flex-col gap-2  ">{system.desc}</div>

                    </div>


                  ))}
                </div>



       <h3 className="md:text-2xl pt-8 text-center md:text-left font-semibold    ">
          Visit the new <Link href='https://www.adhunikhvacprojects.com'>
            <strong className=' text-cyan-400'>Adhunik HVAC Projects</strong>
          </Link> website today!
  </h3>
                
              </div>

             
            </section>



 



          


        



            {/* CTA Section */}
            <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="  text-xl md:text-3xl font-bold mb-4">Get Expert Advice for Your Cooling Needs</h2>
                <p className="text-cyan-100 mb-8 text-sm md:text-lg">
           Contact us today to leverage our expertise. We offer a free consultation to help you assess your specific cooling requirements. Let's keep your operations running cool!


  </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="tel:8287885885"
                    className="bg-white text-sm md:text-md font-bold text-cyan-800 hover:bg-cyan-100  py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact  Expert
                  </a>
                  <Link
                    href="/support-form"
                    className="bg-cyan-900 text-sm md:text-md hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center border border-cyan-700"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Enquiry Now
                  </Link>
                </div>
              </div>
            </section>

 



          </div>
        </div>
      </div>
    </>
  )
}
