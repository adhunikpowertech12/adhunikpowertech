"use client";

import { FaPlay } from "react-icons/fa";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from "next/link";

export default function DuctedAirCooler() {


    const accordionData = useMemo(() => [
      
      {
        title: " What are the key applications of oil chillers?",
        content:
          " Oil chillers are used in industries like manufacturing, CNC machining, plastic injection molding, die casting, and hydraulic press operations to prevent overheating and ensure smooth performance. ",
      },
      {
        title: "  How do Oil and Coolant Chillers Work? ",
        content:
          " Both oil and coolant chillers operate on a similar principle. They circulate the fluid through a heat exchanger where it transfers heat to a refrigerant. The refrigerant absorbs the heat and dissipates it into the environment, cooling the fluid in the process. ",
      },
      {
        title: " What are the Benefits of Using Oil and Coolant Chillers? ",
        content:
  
        <>
   <div className="faq-item">
  <div className="faq-content">
    <ul className="list-disc pl-5">
      <li><strong>Improved Equipment Performance</strong>: Maintains optimal operating temperatures, reducing wear and tear.</li>
      <li><strong>Increased Productivity</strong>: Ensures consistent performance and prevents downtime.</li>
      <li><strong>Extended Equipment Life</strong>: Prevents premature failure due to overheating.</li>
      <li><strong>Enhanced Product Quality</strong>: Maintains precise temperature control for consistent results.</li>
      <li><strong>Reduced Energy Consumption</strong>: Efficient cooling systems minimize energy usage.</li>
    </ul>
  </div>
</div>

      </>,
  
      },
  
      {
        title: " Can I Use an Oil Chiller for Coolant and Vice Versa? ",
        content:
          "While it's possible to use an oil chiller for coolant and vice versa, it's not recommended. Oil and coolant have different properties and require specific cooling requirements. Using the wrong chiller can lead to reduced performance and potential damage to the equipment.",
      },
      {
        title: " What are the common issues faced by oil chillers? ",
        content:"Common problems include clogged filters, low refrigerant levels, pump malfunctions, and improper oil flow due to viscosity changes.",
      },
    ], []);
  
    // State for active accordion index
    const [activeIndex, setActiveIndex] = useState(null);
  
    // Refs for dynamic content heights
    const refs = useRef([]);
  
    // Calculate heights dynamically and ensure they are set after component mounts
    useEffect(() => {
      if (typeof window !== "undefined") {
        refs.current = refs.current.slice(0, accordionData.length);
      }
    }, [accordionData]);
  
    const handleClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

  const [showModal, setShowModal] = React.useState(false);

  const closeModal = () => {
    setShowModal(false);
  };



  const logos = [
    { src: '/dc1.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc2.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc3.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc4.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc5.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc6.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc7.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc8.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc9.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc10.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc11.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc12.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc13.webp', alt: 'Asahi-India-Glass-Ltd' },


  ];

  const column1 = [
    "Warehouses",
    "Automotive Industry",
    "Banquet Halls",
    "Food Industry",
    "Medical / Healthcare",
    "Offices",
    "Restaurants"
  ];

  const column2 = [
    "Educational Institutions",
    "Textile Industry",
    "Multiplex/Theatres",
    "Retail stores/Showrooms",
    "Print & Packaging Industry",
    "Religious Places",
    "Gymnasium"
  ];

  const features2 = [
    {
      id: 1,
      description: "High Sensible Cooling",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      id: 2,
      description: " Fully Programmable Micro-Controller ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      id: 3,
      description: " SS Heat Exchanger ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 4,
      description: " Alarm For Critical Failure ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      id: 5,
      description: "Over/Underload Protection ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      id: 6,
      description: " Heat Exchanger Accumulator ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      id: 7,
      description: " Compressor with the make of Danfoss, Panasonic, and Tecumseh ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 8,
      description: " Energy Saving and Aesthetically appealing ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },


  ];






  return (


    <>

      <div className="row mt-36 font-sans">

        <p className=" w-full text-center font-sans  text-5xl  text-sky-700 uppercase"> Chiller </p>


        <div className="row">

          <div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">



            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block">Oil Chiller Unit (1.5 TR.) </h2>
              <p className="text-justify md:text-center">
                Our 1.5 TR Oil/Coolant Chiller is a powerful yet compact cooling solution tailored to meet the demands of various applications. This advanced refrigeration system effectively controls the temperature of your oil and other industrial fluids. With a sophisticated cooling process, our chillers ensure consistent temperature regulation, safeguarding your valuable equipment and maximizing productivity. </p>
              <div className="show_m mt-5">
                <button
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                  onClick={() => {
                    window.location.href = 'mailto:info@adhunikpowertech.com?subject=Enquiry%20Now&body=Hello, I would like to enquire about your services.';
                  }}
                >
                  Enquiry Now
                </button>



              </div>
            </div>

            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  h-[28rem]  object-center object-cover "
                          fetchPriority="high"
                          decoding="async"
                          alt="Exhaust Fan (SS)"
                          src="awi/1.jpeg"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">  Oil Chiller Unit (1.5 TR.)
                      </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>





          </div>





          <p className=" w-full text-center  text-2xl font-sans py-3"> TECHNICAL SPECIFICATION</p>


          <div className="flex justify-center items-center w-full px-4 mb-4">
            <div className="overflow-x-auto w-full max-w-6xl">
              <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">
                <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
                  <tr className="text-center">
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Model</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Compressor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Condenser</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Dimension (mm) (LxWxH)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Evaporator</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Expansion Valve</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Filter Drier</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">HP & LP</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Refrigerant</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Supply</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Consumption (Amp)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Temperature Control</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Electric Motor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Hydraulic Gear Pump (LPM)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Operating Temp. Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white text-center border-b border-gray-300">
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300"> 1.5 Tr.  </td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Reciprocating</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Air-cooled (copper tube alu. fins)</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">550 X 550 X 1000</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Brazed Plate Heat-exchanger</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300"> TE-2 </td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">DML-163</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Manually reset</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">R-407C</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">415V, 50Hz, 3PH</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">4.5 Amp.</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Subzero 7510t ( -40 to +99 )</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300"> 1 HP,1440 RPM, 50 Hz, TEFC, IE-2 </td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300"> LPM 28 TO 36 </td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300"> 10 deg.C to 60 deg.C </td>
                  </tr>
                </tbody>
              </table>


            </div>
          </div>





        </div>





        <div className="row">

          <div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">

            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  h-[28rem]  object-center object-cover "
                          fetchPriority="high"
                          decoding="async"
                          alt="Exhaust Fan (SS)"
                          src="awi/15.jpeg"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">  Oil Chiller Unit (3 TR.)
                      </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block">Oil Chiller Unit (3 TR.) </h2>
              <p className="text-justify md:text-center">
                Introducing our 3 TR Oil/Coolant Chiller—an efficient cooling solution for industrial applications that ensures precise temperature control for your oil and fluids, optimizing equipment performance and extending lifespan. With exceptional cooling capacity, durable construction, improved energy efficiency, and easy maintenance, this factory-tested system guarantees a seamless installation process. Trust our 3 TR Oil Chiller for reliable cooling and enhanced operational efficiency in your critical processes. </p>
              <div className="show_m mt-5">
                <button
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                  onClick={() => {
                    window.location.href = 'mailto:info@adhunikpowertech.com?subject=Enquiry%20Now&body=Hello, I would like to enquire about your services.';
                  }}
                >
                  Enquiry Now
                </button>



              </div>
            </div>






          </div>





          <p className=" w-full text-center  text-2xl font-sans py-3"> TECHNICAL SPECIFICATION</p>


          <div className="flex justify-center items-center w-full px-4 mb-4">
            <div className="overflow-x-auto w-full max-w-6xl">
              <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">
                <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
                  <tr className="text-center">
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Model</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Compressor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Condenser</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Dimension (mm) (LxWxH)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Evaporator</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Expansion Valve</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Filter Drier</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">HP & LP</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Refrigerant</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Supply</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Consumption (Amp)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Temperature Control</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Electric Motor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Hydraulic Gear Pump (LPM)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Operating Temp. Range</th>
                  </tr>
                </thead>
                <tbody>


                  {/* Row for Tr. 3 */}
                  <tr className="bg-white text-center border-b border-gray-300">
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">3 Tr.</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Copeland Scroll</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Air-cooled (copper tube alu. fins)</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">50 X 50 X 1 00 7 7 2</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Brazed Plate Heat-exchanger</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">TGEL-3.5</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">DML-163</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Manually reset</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">R-410A</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">415V, 50Hz, 3PH</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">.5 Amp. 6</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Subzero 7510t (-40 to +99)</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">1 HP, 1440 RPM, 50 Hz, TEFC, IE-2</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">28 TO 36</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">10 deg.C to 60 deg.C</td>
                  </tr>


                </tbody>
              </table>
            </div>
          </div>






        </div>


        <div className="row">

          <div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">



            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block">Oil Chiller Unit (5 TR.) </h2>
              <p className="text-justify md:text-center">
                Improve your industrial operations with our 5 TR Oil/Coolant Chiller. This advanced refrigeration system delivers precise temperature control, extending the lifespan and performance of your critical equipment. Designed with durability, energy efficiency, and ease of maintenance in mind, our chiller ensures reliable operation year-round. Featuring microprocessor control and high-efficiency components, our factory-tested chiller guarantees a seamless installation and dependable performance.  </p>
              <div className="show_m mt-5">
                <button
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                  onClick={() => {
                    window.location.href = 'mailto:info@adhunikpowertech.com?subject=Enquiry%20Now&body=Hello, I would like to enquire about your services.';
                  }}
                >
                  Enquiry Now
                </button>



              </div>
            </div>

            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  h-[28rem]  object-center object-cover "
                          fetchPriority="high"
                          decoding="async"
                          alt="Exhaust Fan (SS)"
                          src="awi/16.jpeg"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">  Oil Chiller Unit (5 TR.)
                      </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>





          </div>





          <p className=" w-full text-center  text-2xl font-sans py-3"> TECHNICAL SPECIFICATION</p>


          <div className="flex justify-center items-center w-full px-4 mb-4">
            <div className="overflow-x-auto w-full max-w-6xl">
              <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">
                <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
                  <tr className="text-center">
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Model</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Compressor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Condenser</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Dimension (mm) (LxWxH)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Evaporator</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Expansion Valve</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Filter Drier</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">HP & LP</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Refrigerant</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Supply</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Consumption (Amp)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Temperature Control</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Electric Motor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Hydraulic Gear Pump (LPM)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Operating Temp. Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white text-center border-b border-gray-300">
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300"> 5 Tr.  </td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Copeland Scroll</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Air-cooled (copper tube alu. fins)</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">50 X 50 X 1 0 9 9 27</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Brazed Plate Heat-exchanger</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">TGEL- .5 4</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">DML-16 4</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Manually reset</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">R-410A</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">415V, 50Hz, 3PH</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">12.6</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Subzero 7510t ( -40 to +99 )</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">HP, 1440 RPM, 50 Hz, TEFC, IE-2 2</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">TO 40 60</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">10 deg.C to 60 deg.C</td>
                  </tr>
                </tbody>
              </table>


            </div>
          </div>





        </div>



        <div className="row">

          <div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">





            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  h-[28rem]  object-center object-cover "
                          fetchPriority="high"
                          decoding="async"
                          alt="Exhaust Fan (SS)"
                          src="awi/14.jpeg"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">  Oil Chiller Unit (8 TR.)
                      </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block">Oil Chiller Unit (8 TR.) </h2>
              <p className="text-justify md:text-center">

                Introducing our powerful 8 TR Oil/Coolant Chiller, specifically designed for heavy industrial applications. This chiller provides excellent temperature control for oil and industrial fluids, enhancing equipment performance and lifespan. With a factory-tested design, it ensures easy installation and reliable cooling for critical processes. Choose Adhunik Powertech for effective industrial cooling solutions tailored to your needs.
              </p>
              <div className="show_m mt-5">
                <button
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                  onClick={() => {
                    window.location.href = 'mailto:info@adhunikpowertech.com?subject=Enquiry%20Now&body=Hello, I would like to enquire about your services.';
                  }}
                >
                  Enquiry Now
                </button>



              </div>
            </div>

          </div>





          <p className=" w-full text-center  text-2xl font-sans py-3"> TECHNICAL SPECIFICATION</p>


          <div className="flex justify-center items-center w-full px-4 mb-4">
            <div className="overflow-x-auto w-full max-w-6xl">
              <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">
                <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
                  <tr className="text-center">
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Model</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Compressor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Condenser</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Dimension (mm) (LxWxH)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Evaporator</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Expansion Valve</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Filter Drier</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">HP & LP</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Refrigerant</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Supply</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Consumption (Amp)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Temperature Control</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Electric Motor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Hydraulic Gear Pump (LPM)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Operating Temp. Range</th>
                  </tr>
                </thead>
                <tbody>

                  <tr className="bg-white text-center border-b border-gray-300">
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">8 Tr.</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Copeland Scroll</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Air-cooled (copper tube alu. fins)</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">50 X 50 X 10 10 1460</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Brazed Plate Heat-exchanger</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">TGEL- .5 8</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">DML-16 5S</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Manually reset</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">R-410A</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">415V, 50Hz, 3PH</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">15.5</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Subzero 7510t (-40 to +99)</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">HP, 1440 RPM, 50 Hz, TEFC, IE-2 3</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">TO 90 110</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">10 deg.C to 60 deg.C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>






        </div>







        <div className="bg-[#283e56] p-4 relative">
          {/* Background Blur Effect */}
          <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-6 py-4 md:px-12 xl:px-6">
            <div className="md:w-2/3 lg:w-1/2 mt-2 text-gray-100 flex items-center">
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-2xl font-bold text-white md:text-4xl ps-3">Product Features</h2>
            </div>

            {/* Grid of Features */}
            <div className="mt-5 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
              {features2.map((feature) => (
                <div key={feature.id} className="group  relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-300/10">
                  <div className="relative space-y-8 py-12  p-8">
                    <div className="space-y-2">
                      <ul className="list-none flex flex-row">
                        <div className="h-full w-fit pe-3 text-[#eff0f4] ">{feature.icon}</div>
                        <li className="text-[#F1F2FD] text-[13px] ">{feature.description}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="row">






<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

  <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center pb-16">


    <div className=" mt-5">
    <p className="mt-3 text-3xl font-sans font-bold text-gray-800 dark:text-neutral-400">  FAQs

              </p>
      <div className="container mx-auto mt-8 mb-10">
      {accordionData.map((item, index) => (
        <div
          className="border-[#F6F6F8] mb-4 rounded border"
          key={index}
        >
          <div
            className="font-sans font-medium text-[14px] accordion-header bg-[#F6F6F8] cursor-pointer px-4 py-2 flex justify-between items-center"
            onClick={() => handleClick(index)}
          >
            {item.title}
            <span className={`arrow ${activeIndex === index ? 'down' : 'right'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                {activeIndex === index ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                )}
              </svg>
            </span>
          </div>
          <div
            ref={(el) => (refs.current[index] = el)}
            className={`font-sans font-medium text-[13px] text-justify accordion-content overflow-hidden transition-all duration-300 ${
              activeIndex === index ? 'max-h-screen' : 'max-h-0'
            }`}
            style={{
              height: activeIndex === index ? `${refs.current[index]?.scrollHeight}px` : '0px',
            }}
          >
            <div className="px-4 pb-4 pt-2">{item.content}</div>
          </div>
        </div>
      ))}
    </div>






      <div className="mt-7 grid gap-3 w-full sm:inline-flex">
      <Link href="/our_Company" class="  rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
    <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
    <span class="relative">       Know more About Us </span>
</Link>
                  <a  href="tel:+919953909177" 
    onclick="location.href='tel:+919953909177'; return false;"  class="  rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
    <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
    <span class="relative"> Contact sales team</span>
</a>
      </div>



    </div>


    <div className="relative ms-4 items-center flex justify-center">

      <div className="flex justify-center  absolute " >
        <span className="relative flex h-16 w-16">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"
          ></span>

          <span
            className="relative flex justify-center items-center  h-16 w-16 rounded-full bg-white"
          >
            <FaPlay />
          </span>

        </span>
        <button className=' z-50  text-transparent absolute p-5' onClick={() => setShowModal(true)}>.bdfbbdb</button>
      </div>




      <img className="h-[70%] rounded-md" src="/pacth.png" alt="Hero Image" />
      <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>


     

    </div>


    {showModal ? (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="relative  my-6    container-fluid "
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on modal content
          >
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}

              {/*body*/}
              <div className="relative  flex-auto">
              <iframe className="responsive-iframe" width="860" height="515" src="https://www.youtube.com/embed/jtizPl_Y744?si=oWwFcUq_IwXZgvjD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

              </div>
              {/*footer*/}

            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}


  </div>

</div>

</div>





        <div className="flex justify-center items-center w-full h-full flex-row">
          {/* Left line */}
          <div className="w-[30%] h-px my-8 bg-gray-300 border-0" />

          {/* Center text */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-gray-200 px-5 py-4 rounded-full bg-white md:text-4xl font-sans font-bold capitalize text-center">
            APPLICATIONS
          </span>

          {/* Right line */}
          <div className="w-[30%] h-px my-8 bg-gray-300 border-0" />
        </div>


        <div className="row pb-16 flex justify-center items-center flex-col">






          <div className="row  w-full h-full">


            <div className="relative overflow-x-auto justify-center items-center flex font-sans font-thin">


              <table className="w-[50%] text-sm text-center text-gray-500 ">
                <thead className="text-xs  text-gray-700 uppercase bg-gray-50 ">

                </thead>
                <tbody>
                  <tr className="bg-white text-[15px]">
                    <td className="px-6 py-4  text-left">
                      <ul className="list-disc list-inside">
                        {column1.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 text-left">
                      <ul className="list-disc list-inside">
                        {column2.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>


          <div className="w-[85%] py-5 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            {[...Array(2)].map((_, index) => (
              <ul
                key={index}
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden={index === 1 ? 'true' : 'false'}
              >
                {logos.map((logo, idx) => (
                  <li key={idx}>
                    <img
                      className=" w-48 object-center object-cover  h-48  rounded-full"
                      src={logo.src}
                      alt={logo.alt}
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>

        </div>



      </div>




    </>

  )
}
