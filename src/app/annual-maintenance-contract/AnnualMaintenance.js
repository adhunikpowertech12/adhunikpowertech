"use client"
import React, { useEffect, useRef, useState } from 'react'

import { 
  Factory, Thermometer, Droplet, Shield, 
  AirVent, Fan, Warehouse, ArrowRight,
  CheckCircle, Cpu, Filter, ChevronRight
} from 'lucide-react';
import Image from 'next/image';

 import { Globe, Award, Leaf, ShieldCheck, Settings2, Phone, FileText } from 'lucide-react';
import Link from 'next/link';

 

export default function AnnualMaintenance() {
  const slides = [
    {
      id: 1,
      video: 'https://res.cloudinary.com/ddkyx2jhh/video/upload/v1738750032/Fire_Overview__k7uos8.mp4',
      title: <> Reliable Maintenance Today, <br /> Assured Performance Tomorrow.</>,
      description: '',
      buttonText: <> <div className=' text-left pb-2'>
        Annual Maintenance <br /> Contract
      </div></>,
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Auto-play every 5 seconds

    return () => clearInterval(slideInterval); // Clean up on unmount
  }, [slides.length]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
  };

  // Handle dragging
  const handleMouseMove = (e) => {

    if (!isDragging) return;
    const currentPos = e.clientX;
    const diff = startPos - currentPos;

    // If the user drags left
    if (diff > 50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setIsDragging(false);
    }

    // If the user drags right
    if (diff < -50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setIsDragging(false);
    }
  };

  // End dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // End dragging when mouse leaves the slide area
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Manual slide control via dots
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

   

    const heroContent = {

    title: "Adhunik Powertech : Leading HVAC & Industrial Cooling Products in India",

    description: [
      "Welcome to Adhunik Powertech, your trusted partner for cutting-edge Heating, Ventilation, and Air Conditioning (HVAC) and industrial cooling solutions. With over 19 years of expertise, we design, engineer, and manufacture a comprehensive range of high-performance products right here in India.",
      "catering to diverse sectors from manufacturing and pharmaceuticals to commercial establishments and cleanroom facilities. Our commitment is to deliver sustainable, energy-efficient, and reliable systems that optimize your environment and protect your critical assets."
    ],
    image: "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  };

  // Product categories and products from your original text
  const productCategories = [
    {
      icon: <Thermometer className="w-10 h-10" />,
      title: "Advanced Air Cooling & Ventilation Systems",
      description: "Adhunik Powertech's air cooling and ventilation products are designed for optimal airflow and indoor air quality. Whether you need to cool large industrial spaces or enhance air circulation, our solutions are built for efficiency and durability.",
      image: "https://images.unsplash.com/photo-1626963822110-c2ccbb1660e6?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Links:'/air-washer',
      products: [
        {
          name: "Ducted Air Coolers",
          description: "Experience powerful, uniform cooling for large areas like factories, warehouses, and workshops. Our industrial ducted air coolers deliver high airflow and operate with exceptional energy efficiency, significantly reducing operational costs.",
          image: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1747477707/ac4_txhqpt.webp",
          specs: ["20,000-50,000 CFM", "GI/SS Construction", "3-Phase Operation"]
        },
        {
          name: "Air Washer Units",
          description: "Improve indoor air quality and achieve effective cooling simultaneously. Our air washer units are crucial for environments requiring pollutant removal and precise humidity control, available in GI and SS constructions.",
          image: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738750082/awb_y87hai_edmbck.webp",
          specs: ["MERV 13 Filtration", "Stainless Steel Options", "Auto Flushing"]
        },
        {
          name: "Ventilation & Exhaust Fans",
          description: "Ensure a healthy and productive environment by effectively removing heat, fumes, and stale air. Our robust industrial exhaust fans and ventilation systems are engineered for continuous, heavy-duty operation.",
          // New image from Unsplash
          image: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1743494659/ventilationfan_ey4ush.webp",
          specs: ["Heavy-Duty Operation", "High Air Exchange Rate", "Durable Construction"]
        }
      ]
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Precision Cooling & Process Control Equipment",
      description: "Protect your valuable machinery and maintain critical temperatures with Adhunik Powertech’s precision cooling solutions. These systems are vital for optimizing performance, extending equipment lifespan, and preventing costly downtime.",
          Links:'/panel-air-conditioners',
      // Original image from first prompt for this category
      image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      products: [
        {
          name: "Panel Air Conditioners",
          description: "Safeguard sensitive electrical and electronic components from overheating. Our panel air conditioners offer precise temperature control, compact designs, and a wide range of cooling capacities, making them ideal for CNC machines, control panels, and automation enclosures.",
          // Original image from first prompt
          image: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1743498847/panel_bgfupm.webp",
          specs: ["±1°C temperature control", "5-30kW cooling capacity", "IP54 rated enclosures"]
        },
        {
          name: "Oil & Coolant Chillers",
          description: "Maintain optimal operating temperatures for hydraulic systems and machine tools. Our industrial oil and coolant chillers are indispensable for industries relying on consistent fluid temperatures for efficient and precise manufacturing processes.",
          // New image from Unsplash
          image: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738750085/OC__koeafw.webp",
          specs: ["Precise Temperature Control", "High-Efficiency Cooling", "Robust for Industrial Use"]
        }
      ]
    },
    {
        icon: <Filter className="w-10 h-10" />,
        title: "Integrated Air Handling & Cleanroom Solutions",
        description: "Designed for superior air quality and thermal comfort in large commercial and industrial settings, including pharmaceutical and healthcare facilities. Our systems ensure precise control over temperature, humidity, and filtration.",
        // New image from Unsplash
            Links:'/air-handling-unit',
        image: "https://images.unsplash.com/photo-1748350985297-bfca7994fc1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        products: [
          {
            name: "Air Handling Units (AHU)",
            description: "Designed for superior air quality and thermal comfort in large commercial and industrial settings, including pharmaceutical and healthcare facilities. Our AHU systems ensure precise control over temperature, humidity, and filtration.",
            // New image from Unsplash
            image: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738750083/AHU1_lab7sl_ccwn9d.webp",
            specs: ["Customizable Modules", "Advanced Filtration (HEPA)", "Energy Recovery Options"]
          },
          {
            name: "Air Showers & Pass Boxes",
            description: "Crucial for maintaining sterile environments in cleanrooms. Our air showers efficiently decontaminate personnel before entry, while pass boxes enable material transfer without compromising cleanroom integrity.",
            // New image from Unsplash
            image: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738750082/Air_Shower2__of10ut.webp",
            specs: ["SS 304 / Powder-Coated GI", "High-Velocity Air Jets", "Interlocking Doors"]
          }
        ]
      }
  ];



  return (
    <>
      <div className="row ">

        <div
          className="relative w-full h-screen overflow-hidden"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <video
                autoPlay
                poster="/mv2.webp"
                loop
                muted
                type="video/mp4"
                className="w-full h-full object-cover"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
              >
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>


              <div className="flex items-center h-full bg-black bg-opacity-30">

                <div className=" text-white  text-center md:text-left  lg:px-16">
                  <p className="  text-3xl md:text-6xl  font-sans md:w-[90%]  mb-2 font-thin">
                    {slide.title}</p>
                  <p className=' text-[14px]   md:w-[70%]'>{slide.description}</p>
                  <button
                    className=" cursor-pointer relative  text-3xl z-10   top-28 mt-4   text-white rounded-lg shadow-lg transition-colors duration-300"

                  >
                    {slide.buttonText}
                    <div className=" font-sans text-sm flex justify-start items-center ">
                      Home <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                      Overview

                    </div>
                  </button>


                </div>
              </div>


            </div>
          ))}

          {/* Progress indicators (dots) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-5 h-1 rounded-sm  ${index === currentSlide ? 'bg-[#FC6C1E]' : 'bg-gray-400'
                  }`}
              />
            ))}
          </div>



        </div>


        <section className="annual-sec py-10">
          <div className="container mx-auto px-4">


            <h1 className="text-4xl text-center font-bold mb-6">Annual Maintenance Contracts</h1>
            {/* Image Cards Row */}
            <div className="flex flex-wrap -mx-4  text-center">

              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="annual-1 justify-center items-center flex flex-col">

                  <img
                    src="amc1.png" 
                    alt="Happiness by Smart Savings"
                    loading="lazy"
                    height="300"
                    width="300"
                    className="w-32 h-auto"
                  />

                  <div className="annual-img-1 mt-4">
                    <h3 className="text-xl font-semibold">Happiness by Smart Savings</h3>
                    <p className="mt-2">
                      With all functional parts charges and labor costs waived, you get
                      extreme savings on your repair bills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="annual-1 justify-center items-center flex flex-col" >

                  <img
                    src="amc2.png"  
                    loading="lazy"
                    alt="Happiness by Smart Assistance"
                    className=" w-32 h-auto"
                      height="300"
                          width="300" />

                  <div className="annual-img-1 mt-4">
                    <h3 className="text-xl font-semibold">Happiness by Smart Assistance</h3>
                    <p className="mt-2">
                      We offer a team of trained engineers to take care of your products and genuine spare parts, if replacement is required.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="annual-1 justify-center items-center flex flex-col">
                  <img
                    src="amc3.png"  
                    loading="lazy"
                    alt="Happiness by Smart Assistance"
                    className=" w-32 h-auto"
                      height="300"
                          width="300"
                  />
                  <div className="annual-img-1 mt-4">
                    <h3 className="text-xl font-semibold">Happiness by Smart Summon</h3>
                    <p className="mt-2">
                      Just in case there's trouble, all you need to do is call our customer support center number and we will take care of your worries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="mt-10">
              <h2 className="text-4xl text-center font-bold mb-6">Types of Annual Maintenance Contracts</h2>
              <div className="overflow-x-auto">

                <table className="table-auto w-full border-collapse border border-gray-300 text-left">
                        <caption className="  uppercase text-base font-semibold text-gray-700 mb-2">
 Annual Maintenance Contracts
  </caption>
                  <tbody>
                    {/* Labour Only */}
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 bg-gray-100" rowSpan="3">Labour Only</th>
                      <td className="py-2 px-4 text-green-600">Service Included</td>
                      <td className="py-2 px-4 text-red-600">Service Excluded</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">General Services</td>
                      <td className="py-2 px-4 text-red-600">All Spare Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Any Unwanted Breakdowns</td>
                      <td className="py-2 px-4"></td>
                    </tr>

                    {/* Non-Comprehensive Annual Maintenance Contract */}
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 bg-gray-100" rowSpan="12">Non-Comprehensive Annual Maintenance Contract</th>
                      <td className="py-2 px-4 text-green-600">Service Included</td>
                      <td className="py-2 px-4 text-red-600">Service Excluded</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">General Servicing (4 Times a Year)</td>
                      <td className="py-2 px-4 text-red-600">Compressor</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Any Unwanted Breakdowns</td>
                      <td className="py-2 px-4 text-red-600">Sheet Metal Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">
                        Refrigerant Gas Charging at the time of Compressor/Sensor/Four Valve Replacement, and for reasons other than attributable to Environmental Corrosion.
                      </td>
                      <td className="py-2 px-4 text-red-600">Plastic Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">
                        The Following spare part shall be replaced/repaired free of cost in case of any breakdown during the Annual Maintenance Service Period: Fan Motor, PCB &amp; Transformer
                      </td>
                      <td className="py-2 px-4 text-red-600">Air Filters</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Relay Maintenance</td>
                      <td className="py-2 px-4 text-red-600">Handset Remote Control</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4" rowSpan="6">Oiling of Spare Parts</td>
                      <td className="py-2 px-4 text-red-600">Condenser &amp; Evaporator Coils</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">Shifting &amp; Re-installation</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">Voltage Stabilizers &amp; Scanners</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">Circuit Breakers</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">Thermocol Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">
                        Refrigerant leakage due to corrosion in environmental conditions is not covered, and any breakdown due to faulty power supply and mishandling by external factors are not covered.
                      </td>
                    </tr>

                    {/* Comprehensive Annual Maintenance Contract */}
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 bg-gray-100" rowSpan="11">Comprehensive Annual Maintenance Contract</th>
                      <td className="py-2 px-4 text-green-600">Service Included</td>
                      <td className="py-2 px-4 text-red-600">Service Excluded</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">General Servicing (4 Times a Year)</td>
                      <td className="py-2 px-4 text-red-600">Plastic Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Priority attendance on Any Unwanted Breakdowns</td>
                      <td className="py-2 px-4 text-red-600">Air Filters</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">
                        Refrigerant Gas Charging at the time of Compressor/Sensor/Four Valve Replacement, and for reasons other than attributable to Environmental Corrosion.
                      </td>
                      <td className="py-2 px-4 text-red-600">Sheet Metal Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">
                        The Following spare part shall be replaced/repaired free of cost in case of any breakdown during the Annual Maintenance Service Period: Compressor, Fan Motor, PCB &amp; Transformer
                      </td>
                      <td className="py-2 px-4 text-red-600">Condenser &amp; Evaporator Coils</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Relay Maintenance</td>
                      <td className="py-2 px-4 text-red-600">Shifting &amp; Re-installation</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Relay Maintenance</td>
                      <td className="py-2 px-4 text-red-600">Handset Remote Control</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4" rowSpan="4">Oiling of Spare Parts</td>
                      <td className="py-2 px-4 text-red-600">Voltage Stabilizers &amp; Scanners</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">Circuit Breakers</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">Thermocol Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">
                        Refrigerant leakage due to corrosion in environmental conditions is not covered, and any breakdown due to faulty power supply and mishandling by external factors are not covered.
                      </td>
                    </tr>

                    {/* Routine Servicing */}
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 bg-gray-100" rowSpan="3">Routine Servicing</th>
                      <td className="py-2 px-4" colSpan="2">Total 4 Services in a Year</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4" colSpan="2">Wet Service: Once a year</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4" colSpan="2">Dry Service: 3 Times a Year</td>
                    </tr>

                    {/* Breakdowns */}
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 bg-gray-100">Breakdowns</th>
                      <td className="py-2 px-4" colSpan="2">Any Breakdown Complaints (Guaranteed resolved within 5-8 Hours)</td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>

            {/* Benefits List */}
            <div className="mt-10">

              <h4 className="text-xl font-bold mb-4">Our AMC Benefit Involves :</h4>

              <ul className="list-disc ml-5 space-y-2">
                <li>If any breakdown occurs then immediate action will be taken on priority bases.</li>
                <li>On-call 24x7 assistance for any unwanted breakdowns.</li>
                <li>A systematic check of all electrical components, compressors, fans, motors, etc.</li>
                <li>Genuine spare parts.</li>
                <li>Wet &amp; Dry Services.</li>
                <li>Cleaning of air filter &amp; unit.</li>
                <li>Cleaning of cooling coil &amp; condenser coil etc.</li>
                <li>Oiling/Lubrication of the fan motor.</li>
                <li>Checking overall performance and current consumptions.</li>
                <li>Details report of the A/C unit will be made and handed over to the customer for their reference.</li>
                <li>Servicing Air Conditioners Unit will be on a Monthly/Alternate Monthly and Quarterly basis as per customer desires.</li>
                <li>Refrigerant 22, 32, 134a, 407c &amp; 410a Charging.</li>
                <li>Once your product is covered under our AMC Plan, then Om Cooling takes complete care of your product with regular/scheduled checkups.</li>
                <li>Our well-maintained Customer Management System (CMS) and help-line desk service keep all your purchases and complaints recorded systematically and we commit to providing you with the solution without your reminders.</li>
              </ul>

            </div>

           
            <div className="mt-10">
              <div className="energy-img flex justify-center items-center mb-6">
                <img
                  src="amc4.jpg" 
                  alt="Annual Maintenance Contract"
                  loading="lazy"
                  className=" md:w-6/12 md:h-6/12"
                  height="300"
                  width="300"
                />
              </div>
              <div className="content-maintanance">
                <p className="text-2xl font-sans font-semibold text-center mb-4 ">AIR CONDITIONING REPAIR &amp; SERVICE</p>
                <p className="mb-4 font-sans font-normal">
                  We revamp all varieties of ACs like <strong>Window AC, Split AC &amp; Central Air Conditioning. </strong>
                  Also, we cover all high-end brands like <strong>Carrier, Hitachi, Daikin, Mitsubishi, Blue star &amp; Voltas,</strong> etc. We cater to commercial as well as Industrial ACs as well. Bulk <strong>repairing jobs</strong> are an
                  everyday task for us. We believe in using only quality spare parts for repairs. Our service coordinator shall provide all the briefings. Subject to your approval, most repairs are carried out immediately
                  and the air conditioner is back up and running better than ever.
                </p>


                <p className=" text-center p-3 text-white bg-gradient-to-r from-[#f74c06] to-[#efb42b] motive font-semibold mb-4">
                  For further information regarding Annual Maintenance Contract (AMC) service, pricing, etc., related queries. Kindly contact our Customer Care Number :
                </p>

                <p className="font-bold mb-2">
                  <a href="tel:8287885885" className="text-blue-600 hover:underline">Customer Contact Number: 8287885885</a>
                </p>

                <p className="font-bold mb-2">
                  <a href="mailto:info@adhunikpowertech.com" className="text-blue-600 hover:underline">Email:  info@adhunikpowertech.com</a>
                </p>
                <p className="font-bold">** All jobs are done subject to the Terms &amp; Conditions of the contract</p>
              </div>
            </div>
          </div>
        </section>


        
   <div className=" font-sans">
      {/* ===== Professional Hero Section ===== */}
      <section className="relative h-full  md:h-[95vh] md:min-h-[700px] flex items-center text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-cyan-700/60 z-10"></div>
        <Image
          src={heroContent.image}
          alt="Adhunik Powertech - Professional Industrial HVAC Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-2xl  py-5 text-center md:text-left  md:text-5xl  font-bold mb-6 leading-tight tracking-tight text-shadow-md">
              {heroContent.title}
            </h1>
            <div className="space-y-4 text-sm text-justify md:text-left px-4 md:px-0 md:text-md  text-slate-200 font-light">
              {heroContent.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <Link href='/product-overview' className=" w-fit mt-12 mb-10 bg-cyan-500 text-white px-10 py-4 rounded-full font-bold text-sm flex items-center gap-3 shadow-lg hover:bg-cyan-600 transition-all duration-300 group transform hover:scale-105">
              Explore Our Solutions
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>


 <div className="inline-flex items-center justify-center bg-white  py-12  w-full mx-auto my-4">
          <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
          <h2 className="absolute px-2 md:px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  text-center text-[20px]  md:text-3xl text-1xl capitalize font-extrabold font-sans text-sm  "> Our Comprehensive Product Categories
          </h2>
        </div>



<div className="container  text-sm md:text-xl px-4  text-center  mx-auto  justify-center bg-white items-center flex">


   Our Comprehensive Product Categories
Discover the Adhunik Powertech advantage through our specialized product lines, each engineered for superior performance and longevity


</div>
  
          
   

      {productCategories.map((category, i) => (

        <section key={i} className={`py-20 md:py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="container mx-auto px-6">
            <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center mb-16">
              <div className=" w-full lg:w-1/2">
                <div className="flex items-center gap-5 mb-5">
                  <div className="bg-cyan-500/10 p-4 rounded-xl text-cyan-600">
                    {category.icon}
                  </div>
                  <h2 className="text-xl md:text-4xl font-bold text-slate-800 tracking-tight">
                    {category.title}
                  </h2>
                </div>
                <p className=" text-justify md:text-left md:text-lg text-slate-600 mb-8 leading-relaxed">
                  {category.description}
                </p>
                <Link href={category.Links} className="text-cyan-600 font-bold flex items-center gap-2 group hover:text-cyan-700 transition-colors">
                  View Full Range <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className=" w-full lg:w-1/2 h-[450px]  relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/10">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover  h-full w-full  object-center"
                />
              </div>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8">
              {category.products.map((product, j) => (
                <div key={j} className="bg-white rounded-xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-cyan-300 transition-all duration-300 group flex flex-col">
                  <div className="h-96 w-full relative overflow-hidden rounded-t-xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain h-full w-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <h3 className="absolute bottom-0 left-0 p-6 text-2xl font-bold text-white tracking-wide">
                      {product.name}
                    </h3>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-slate-600 text-md text-justify md:text-left mb-6 flex-grow">
                      {product.description}
                    </p>
                    <ul className="space-y-3">
                      {product.specs.map((spec, k) => (
                        <li key={k} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                          <span className="text-slate-700 font-medium">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      
    </div>
        

         <div className="bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="max-w-7xl w-full mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

          {/* Left Side: "Why Choose Us" Section */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-cyan-50 to-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
              Why Choose Adhunik Powertech?
              <span className="block text-lg font-medium text-cyan-700 mt-2">
                Your Trusted Partner in Advanced HVAC Solutions
              </span>
            </h2>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-cyan-600 text-white rounded-full p-2 shadow-md">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Made in India, Exported Globally</h3>
                  <p className="text-gray-600 mt-1">
                   We pride ourselves on manufacturing high-quality products in India that meet international standards and serve clients worldwide.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-cyan-600 text-white rounded-full p-2 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Over 19 Years of Expertise</h3>
                  <p className="text-gray-600 mt-1">
                Benefit from nearly two decades of specialized experience in HVAC design, manufacturing, and project execution.  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-cyan-600 text-white rounded-full p-2 shadow-md">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Energy Efficiency & Sustainability</h3>
                  <p className="text-gray-600 mt-1">
                    Our products are engineered to minimize energy consumption and promote environmental responsibility.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-cyan-600 text-white rounded-full p-2 shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Robust & Reliable Construction</h3>
                  <p className="text-gray-600 mt-1">
                    We use premium materials and advanced manufacturing to ensure the longevity and performance of every unit.
                  </p>
                </div>
              </li>
            
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-cyan-600 text-white rounded-full p-2 shadow-md">
                  <Settings2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Comprehensive Service & Support</h3>
                  <p className="text-gray-600 mt-1">
               In addition to our products, we offer complete turnkey solutions, expert consultation, and dedicated after-sales service.
  </p>
                </div>
              </li>

                <li className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-cyan-600 text-white rounded-full p-2 shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Robust & Quality & Compliance</h3>
                  <p className="text-gray-600 mt-1">
                Adherence to industry best practices and standards (e.g., ISHRAE, ASHRAE, ISO) ensures top-tier quality.
  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Side: Action Buttons Section */}
          <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
            <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-800 mb-4">
              Get Started Today
            </h2>
            <p className="text-gray-600 mb-3 text-sm">
           Ready to optimize your environment with Adhunik Powertech’s cutting-edge solutions? Whether you require industrial air coolers, precision panel ACs, cleanroom equipment, or a complete HVAC system, our team of experts is here to assist you.
</p>
            <p className="text-gray-600 mb-10 text-sm">
    Contact us today for a detailed consultation, product specifications, or to request a custom quote. Let us help you achieve your operational goals with reliable, energy-efficient, and high-performance solutions.
</p>

            <div className="space-y-5">
                {/* Primary Button: Request Quote */}
                <Link href='/support-form'
                  
                  className="w-full flex items-center justify-center gap-3 font-bold text-white px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FileText className="w-5 h-5" />
                  Request a Quote
                </Link>
                
                {/* Secondary Button: Call Us */}
                <a href='tel:8287885885'
                  type="button"
                  className="w-full flex items-center justify-center gap-3 font-bold text-cyan-700 bg-cyan-500/10 hover:bg-cyan-500/20 px-8 py-4 rounded-lg transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
            </div>
          </div>

        </div>
      </div>
    </div>
      </div>

    </>
  )
}
