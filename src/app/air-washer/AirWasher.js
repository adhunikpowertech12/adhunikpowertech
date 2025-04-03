
'use client'

import Image from 'next/image';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
export default function AirWasher() {




  const accordionData = useMemo(() => [

    {
      title: " How does an air washer work?",
      content:
        " An air washer, also known as an evaporative air cooler, works by using the principle of evaporative cooling to lower the temperature of the air. In this process, hot outdoor air is drawn into the unit and passed through water-saturated pads. As the air passes through these pads, it loses heat and evaporates the water, resulting in cooler, more comfortable air. The cooled air is then circulated throughout the building by a blower and duct system.",
    },

    {
      title: "What are the benefits of using an air washer? ",
      content:
        " Air washers offer several benefits, including cooling large industrial spaces, improving air quality by filtering out dust, pollen, and allergens, and maintaining humidity levels, creating a more comfortable and breathable environment, especially in dry climates. ",
    },

    {
      title: "What are the different types of air washers available? ",
      content:

        <>
          <div className="faq-item">

            <div className="faq-content">
              <p>
                Air washers can be broadly classified into two types:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Direct Air Washers</strong>
                  <p>
                    Direct air washers, also known as single-pass air washers, operate using a one-pass system. In this process:
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Air is forced through a series of wet pads where it is cleaned with water.
                    </li>
                    <li>
                      The resulting air is purified, cooled, and humidified, making it suitable for maintaining a comfortable indoor environment.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Indirect Air Washers</strong>
                  <p>
                    Indirect air washers use a two-step process for improved air quality and control:
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      First, air is passed through a sensible heat exchanger to cool it.
                    </li>
                    <li>
                      Then, it moves through wet pads, removing pollutants and further purifying the air.
                    </li>
                    <li>
                      If required, the air is heated before being released back into the room.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </>,

    },

    {
      title: " What Are the Differences Between an Air Washer and an AHU? ",
      content: <>
        <div className="faq-item">
          <div className="faq-content">
            <p>
              An Air Washer and an Air Handling Unit (AHU) are two different systems used for indoor air treatment.
              An Air Washer primarily cools, humidifies, and purifies air by adding moisture and filtering impurities,
              often used in dry environments like in industrial areas.
            </p>
            <p>
              An AHU, on the other hand, is a complex system that conditions and circulates air throughout a building,
              controlling temperature, humidity, and air quality.
            </p>
            <p>
              While an Air Washer focuses on specific air treatments, an AHU offers a comprehensive solution
              for air conditioning and circulation in larger buildings.
            </p>
          </div>
        </div>

      </>,
    },
    {
      title: " How do air washer systems enhance efficiency in industrial processes? ",
      content:
        <>
          <div>

            <p><strong>Key factors to consider when choosing an air washer include:</strong></p>
            <ul className="list-disc pl-5">
              <li>Cooling Capacity</li>
              <li>Humidity Control</li>
              <li>Air Quality</li>
              <li>Energy Efficiency</li>
              <li>Maintenance Ease & Cost</li>
            </ul>
            <p>Also, factor in the specific environment and any special needs.</p>
          </div>
        </>,
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


  const column1 = [
    "Industrial Plant ",
    "Commercial Kitchen",
    "Food Courts & cafeteria ",
    "Laundries",



  ];


  const column2 = [
    "Workshops",
    "  Spot Cooling",
    " DG Ventilation",

    "Warehouses",


  ];



  const logos = [
    { src: '/awi/6.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/awi/7.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/awi/8.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/awi/9.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/awi/10.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/awi/11.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/awi/12.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/awi/13.webp', alt: 'Asahi-India-Glass-Ltd' },

  ];


  const lists = [
    {
      heading: '100% fresh, clean, cool air ',
      img: '/100.png',
      items: ['Maintains excellent indoor air quality', 'Healthy conditions for the human body',]
    },

    {
      heading: <>Up to 80% less power consumption <br /> compared to air-conditioners</>,
      img: '/102.png',
      items: ['Low operating cost ', 'Low carbon footprint',]
    },

    {
      heading: 'High level of filtration',
      img: '/104.png',
      items: ['Supplies clean air', 'Keeps indoor areas clean',]
    },

    {
      heading: 'Positive pressure system',
      img: '/106.png',
      items: ['Prevents ingress of dust', ' Drives out harmful contaminants',]
    },

    {
      heading: <>Non refrigerant and compressor <br /> based technology
      </>,
      img: '/108.png',
      items: ['No harmful gases used', 'Sustainable cooling solution',]
    },

    {
      heading: 'Robust and compact design',
      img: '/110.png',
      items: ['The body of the machine doesn’t get damaged when exposed to harsh weather conditions ', 'Long product life',]
    },

    {
      heading: 'Up to 5°C more cooling compared to direct evaporative air-coolers ',
      img: '/112.png',
      items: ['Easily maintains temperatures below 30°C ', 'Ideal temperature conditions for both man and machine',]
    },

    {
      heading: 'Up to 60% less moisture addition in air compared to direct evaporative air-coolers',
      img: '/114.png',
      items: ['Supplies drier air compared to direct evaporative air-coolers ', ' Can be used even in the monsoon season',]
    },

    {
      heading: '3 modes of operation – IDEC, IEC and ventilation ',
      img: '/100.png',
      items: ['  Modes can be selected based on ambient weather conditions  ', ' All weather cooling solution ',]
    },
    {
      heading: ' Blow through design  ',
      img: '/104.png',
      items: ['   Blower doesn’t come in contact with moist air  ', '  Zero chance of blower rusting ',]
    },
  ];



  return (
    <>


      <div className="row  mt-32 font-sans">


        <section className=' p-5 flex flex-col md:flex-row'>
<div className="box">
<div className="w-auto">
                    <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                      <img
                        className="    object-center object-fill "
                        fetchPriority="high"
                        decoding="async"
                        alt="Air washer"
                        src="/awi/5.webp"
                      />
                    </div>
                  </div>
</div>
<div className="box  py-4 px-4 flex justify-center items-start flex-col ">
<h1 className=" w-full text-center md:text-left font-sans  text-5xl  text-sky-700 ">What is an Air Washer?
          </h1>

          <p className="text-gray-700  py-3 font-sans  text-justify md:text-left"> An air washer is a highly efficient evaporative cooling system designed to condition air in large industrial and commercial spaces. Ideal for factories, commercial kitchens, basements, etc., air washers offer a cost-effective and energy-efficient alternative to traditional cooling methods like chillers and VRF systems.

          </p>

          <h2 className="text-gray-700 text-2xl text-center md:text-left font-sans font-semibold font-manrope w-full leading-normal  ">
            How Air Washers Work: The Science of Evaporative Cooling
          </h2>

          <p className="text-gray-700  pb-3 font-sans text-center md:text-left">
            Air washers utilize the principle of evaporative (adiabatic) cooling to lower air temperatures. <br />
            Here's a detailed breakdown:

          </p>
</div>

     

        </section>





        <section className=" relative">

          <div className="w-full max-w-8xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-8">


              <div className="w-full flex-col justify-center lg:items-start items-center gap-10  inline-flex transition-colors duration-500 ease-in-out hover:border-cyan-500 border-2 border-gray-300 rounded-xl px-6  py-6">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-gray-700 text-2xl font-semibold font-manrope w-full leading-normal ">
                      1. Air Intake & Multi-Stage Filtration :
                    </h2>

                    <div className=" text-base  leading-relaxed   space-y-4">

                      <ul className="list-disc pl-5 text-gray-700 font-sans">
                        <li className='font-sans'>Ambient hot air is drawn into the unit.
                        </li>
                        <li className='font-sans text-justify md:text-left'>This air is passed through a multi-stage filtration system, including pre-filters and high-efficiency synthetic filters (90% efficiency down to 10 microns), removing dust, pollen, and airborne contaminants. This ensures clean, conditioned air delivery.
                        </li>
                      </ul>

                    </div>


                    <h2 className="text-gray-700 text-2xl font-semibold font-manrope w-full leading-normal ">
                      2. Evaporative Cooling Process :
                    </h2>



                    <div className="container  px-3">
                      <h3 className=" underline text-gray-700 text-2xl font-semibold font-manrope w-full leading-normal ">

                       Direct Evaporative Cooling :

                      </h3>

                      <div className=" text-base  leading-relaxed   space-y-4">

                        <ul className="list-disc pl-5 text-gray-700">
                          <li className='font-sans text-justify md:text-left'>Filtered hot air is forced through cellulose evaporation pads saturated with water or a high-pressure water spray.

                          </li>
                          <li className='font-sans text-justify md:text-left'>
                            The water absorbs heat from the air, evaporating and significantly lowering the air temperature.

                          </li>
                          <li className='font-sans'>
                          The cooled, humidified air is then circulated.
                          </li>
                        </ul>

                      </div>
                    </div>



                    <div className="container px-3">
                      <h3 className=" underline text-gray-700 text-2xl font-semibold font-manrope w-full leading-normal ">

                       Indirect Evaporative Cooling :
                      </h3>

                      <div className=" text-base  leading-relaxed   space-y-4">

                        <ul className="list-disc pl-5 text-gray-700">
                          <li className='font-sans'>
                            Hot air passes through a highly efficient heat exchanger.

                          </li>
                          <li className='font-sans text-justify md:text-left'>
                            A separate stream of pre-cooled air (often through direct evaporation) flows on the opposite side of the exchanger.

                          </li>
                          <li className='font-sans text-justify md:text-left'>
                            Heat is transferred from the hot air to the pre-cooled air without mixing, resulting in cooler, dehumidified air.

                          </li>
                        </ul>

                      </div>
                    </div>

                  </div>
                </div>
              </div>



              <div className="w-full   flex-col justify-center lg:items-start items-center gap-10 inline-flex transition-colors duration-500 ease-in-out hover:border-cyan-500 border-2 border-gray-300 rounded-xl px-6  py-6">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">

                    <h2 className="text-gray-700 text-2xl font-semibold font-manrope w-full leading-normal ">
                      3.  Air Distribution :

                    </h2>



                    <div className="container">


                      <div className=" text-base  leading-relaxed   space-y-4">

                        <ul className="list-disc pl-5 text-gray-700">
                          <li className='font-sans text-justify md:text-left'>
                            A powerful, energy-efficient fan (SISW/DIDW backward curved or EC fan) forces the cooled air through ductwork, distributing it evenly throughout the space.

                          </li>
                          <li className='font-sans text-justify md:text-left'>
                            CFM (Cubic Feet per Minute) ranges from 1,000 to 100,000, with static pressure (mm WG) tailored to specific application requirements.

                          </li>
                        </ul>

                      </div>
                    </div>

                    <h2 className="text-gray-700 text-2xl font-semibold font-manrope w-full leading-normal ">
                      Single-Stage vs. Two-Stage Air Washers:


                    </h2>

                    <div className="container ">


                      <div className=" text-base  leading-relaxed   space-y-4">

                        <ul className="list-disc pl-5 text-gray-700">
                          <li className=' font-sans'><strong>Single-Stage :</strong> Uses either direct or indirect evaporative cooling.</li>
                          <li className='font-sans '><strong>Two-Stage :</strong> Combines indirect and direct evaporative cooling for maximum cooling efficiency, especially in hot, dry climates.
</li>

                        </ul>

                      </div>

                      <div className="relative max-w-xl mx-auto  mt-3">
    <img className=" h-60  w-full object-cover rounded-md" src="https://img.freepik.com/free-photo/men-working-with-equipment-full-shot_23-2148921408.jpg?t=st=1743665337~exp=1743668937~hmac=b7012bf18564c4a0dd29181acffb253028376f826ca36427ab9d418df8ce7387&w=2000" alt="Random image"/>
    
    <div className="absolute inset-0 bg-gray-800 opacity-60 rounded-md"></div>
    <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold">Efficient | Durable  </h2>
    </div>
</div>
                    </div>







                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>


        <section className='  text-center px-8 py-6'>


      

          <h2 className="text-gray-700 text-2xl font-semibold font-manrope w-full leading-normal  ">
          Air Washer Manufacturer in Delhi & India
          </h2>

          <p className="text-gray-700  pb-3 font-sans">
          Adhunik Powertech is a leading manufacturer of high-quality air washers in Delhi and across India. <br /> We specialize in designing and manufacturing a wide range of air washer units to meet various industrial and commercial needs.

          </p>

        </section>

     







 


        <div className="row">
          <div className=" h-full gap-5 flex flex-col md:flex-row  p-5  m-4">

            <div className="md:w-[60%] w-auto  p-7  transition-colors duration-500 ease-in-out hover:border-cyan-500 border-2 border-gray-300 rounded-xl">
              <div className="flex items-center justify-center h-full">

              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-gray-700 text-2xl font-semibold font-manrope w-full leading-normal ">
                    Key Features of Adhunik Powertech Air Washers :
                    </h2>

                    <div className=" text-base  leading-relaxed   space-y-4">

                    <ul className="list-disc pl-5 text-gray-700">
  <li className='font-sans'><strong>Full SS304 Construction :</strong> Unmatched corrosion resistance and durability for long-lasting performance.</li>
  <li className='font-sans'><strong>Robust Build :</strong> Outer skin: Galvanized Iron (GI) or Pre-Coated GI (customizable); Inner skin: GI (customizable); Frame: Extruded aluminium profile.</li>
  <li className='font-sans'><strong>High-Efficiency Filtration :</strong> Multi-stage filtration with synthetic filters (90% efficiency down to 10 microns).</li>
  <li className='font-sans'><strong>Optimal Cooling :</strong> Cellulose evaporation pads and PVC eliminators for efficient heat transfer.</li>
  <li className='font-sans'><strong>Powerful Airflow :</strong> SISW/DIDW backward curved or EC fans for efficient air circulation (1,000 – 100,000 CFM).</li>
  <li className='font-sans'><strong>Reliable Water Management :</strong> SS304 sump and high-performance water pumps.</li>
  <li className='font-sans'><strong>Customizable Solutions :</strong> Tailored designs to meet specific application requirements.</li>
  <li className='font-sans'><strong>Easy Installation & Maintenance :</strong> Designed for straightforward setup and long-term reliability.</li>
</ul>

                    </div>
                  </div>

              </div>
            </div>

            <div className="md:w-[40%] w-auto  p-7  transition-colors duration-500 ease-in-out hover:border-cyan-500 border-2 border-gray-300 rounded-xl">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-gray-700 text-2xl font-semibold font-manrope w-full leading-normal ">
                    Technical Specifications :

                    </h2>

                    <div className="container">
                 

                      <div className=" text-base  leading-relaxed   space-y-4">

                      <ul className="list-disc pl-5 text-gray-700">
  <li className='font-sans'>CFM Range: 1,000 – 100,000
</li>
  <li className='font-sans'>Static Pressure: Customizable (mm WG)
</li>
  <li className='font-sans'>Filter Efficiency: 90% down to 10 microns
</li>
  <li className='font-sans'>Sump Material: SS304
</li>
  <li className='font-sans'>Outer Skin Material: Galvanized Iron (GI) or Pre-Coated GI (customizable thickness)
</li>
  <li className='font-sans'>Inner Skin Material: Galvanized Iron (GI) (customizable thickness)
</li>
  <li className='font-sans'>Frame Material: Extruded Aluminium Profile
</li>
  <li className='font-sans'>Fan Type: SISW/DIDW Backward Curved or EC Fan
</li>
  <li className='font-sans'>Evaporation Pad Type: Cellulose
</li>
</ul>

                      </div>
                    
                    </div>



                  </div>
            </div>


          </div>





        </div>

        <div className="row">
          <div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">

            <div className="md:w-[40%] w-auto rounded-lg bg-[#0445E3] text-white   ">
              <div className="flex items-center justify-center h-full">
                <div className=" px-10 py-16" >
                  <p className=' text-4xl uppercase' >Types of  Air Washer </p>

                  <div className='   py-3  text-left' >
                    <IoMdCheckmarkCircleOutline className=' h-10 w-10 p-1' /> <div>
                      <span className='text-2xl' > Single Stage  </span> <br />
                      <span className=' italic font-sans font-thin '>(Direct Evaporative Cooling System)</span>
                    </div>
                  </div>





                </div>
              </div>
            </div>

            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <h2 className=" text-center text-3xl  font-sans   uppercase   ">SINGLE STAGE Air Washer <br />
                <span className=' text-[14px]'> (DIRECT EVAPORATIVE
                  COOLING SYSTEM)</span> </h2>
              <p className=" text-[20px] w-full text-center font-serif pb-5 " > (Working Principle)</p>
              <div className="flex items-center w-full justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover rounded-xl">
                        {/* Use the Next.js Image component for optimized image loading */}
                        <img
                          className=" md:h-full  md:w-full"
                          src="/awi/1.webp"
                          alt="Air washer"
                          fetchPriority="high"
                          decoding="async"
                        // Set appropriate height
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                          className="  md:h-[28rem]  object-center object-fill "
                          fetchPriority="high"
                          decoding="async"
                          alt="Air washer"
                          src="/awi/2.webp"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">Air washer <span className=' text-sm'> </span> </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Boost comfort and productivity with our air washers that deliver clean, cool air all year round.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">

              <div className="text-justify ">
                <ul className="list-disc">
                  <li>Direct evaporative cooling, also known as direct adiabatic cooling or wet bulb cooling, is called direct as there is direct contact between the water and the air stream. During the direct evaporative cooling process, water is evaporated directly into the air stream that needs to be cooled down. This type of evaporative cooling is the most used form worldwide, especially in dry regions.</li>
                  <li>With direct evaporative cooling, outside air is blown through a water-saturated medium (usually cellulose -Honey comb cooling pads) and cooled by evaporation. The cooled air is circulated by a blower.</li>
                  <li>Direct evaporative cooling adds moisture to the air stream until the air stream is close to saturation. The dry bulb temperature* is reduced, while the wet bulb temperature stays the same.</li>
                </ul>
              </div>
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





        </div>



        <div className="row">
          <div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">

            <div className="md:w-[40%] w-auto rounded-lg bg-[#0445E3] text-white   ">
              <div className="flex items-center justify-center h-full">
                <div className=" px-10 py-16" >
                  <p className=' text-4xl uppercase' > Type for  Air Washer </p>





                  <div className=' py-3   text-left ' >
                    <IoMdCheckmarkCircleOutline className=' h-10 w-10 p-1' /> <div>
                      <span className='text-2xl' > Double stage  </span> <br />
                      <span className=' italic font-sans font-thin '>  (Indirect Evaporative Cooling System) </span>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">

              <div className=" text-center text-3xl  font-sans   uppercase   ">Double Stage Air Washer <br />
                <span className=' text-[14px]'> (IN-DIRECT  EVAPORATIVE
                  COOLING SYSTEM)</span> </div>
              <p className=" text-[20px] w-full text-center font-serif  pb-5" > (Working Principle)</p>
              <div className="flex items-center w-full justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover rounded-xl">
                        {/* Use the Next.js Image component for optimized image loading */}
                        <img
                          className=" h-full w-full"
                          src="/awi/3.webp"
                          alt="Air washer"
                          fetchPriority="high"
                          decoding="async"
                        // Set appropriate height
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>




        </div>




        <div className="row">
          <div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">

            <div className="md:w-[20%] w-auto rounded-lg bg-[#0445E3] text-white   ">
              <div className="flex items-center justify-center h-full">
                <div className=" px-10 py-16" >
                  <p className=' text-4xl capitalize' > The IDECooling Advantage
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-[80%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <div className="flex flex-wrap">
                {/* Column 1 */}
                <div className=" w-full md:w-6/12">
                  {lists.slice(0, 5).map((list, index) => (
                    <div key={index} className="mb-4">
                      {/* Image with ul heading */}
                      <div className="flex items-center  mb-2">
                        <Image
                          src={list.img}
                          alt={`Small image for ${list.heading}`}
                          width={30}
                          height={30}
                          className="mr-2"
                        />
                        <h3 className=' text-left text-[18px]'>{list.heading}</h3>
                      </div>

                      {/* Unordered list */}
                      <ul className='list-disc list-inside'>
                        {list.items.map((item, idx) => (
                          <li key={idx} className="mb-1 text-left font-thin text-gray-500">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className=" w-full md:w-6/12">
                  {lists.slice(5).map((list, index) => (
                    <div key={index} className="mb-4  ">
                      {/* Image with ul heading */}
                      <div className="flex items-center mb-2">
                        <Image
                          src={list.img}
                          alt={`Small image for ${list.heading}`}
                          width={30}
                          height={30}
                          className="mr-2"
                        />
                        <h3 className=' text-left'>{list.heading}</h3>
                      </div>

                      {/* Unordered list */}
                      <ul className='list-disc list-inside'>
                        {list.items.map((item, idx) => (
                          <li key={idx} className="mb-1 text-left font-thin text-gray-500">
                            {item}
                          </li>
                        ))}
                      </ul>

                    </div>
                  ))}
                </div>
              </div>
            </div>



          </div>




        </div>




        <div className="row">


          <div className="inline-flex items-center justify-center w-full mx-auto my-4">

          </div>






        </div>

        <div className="row">

          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center pb-16">


              <section >
                <p className="mt-3 text-3xl font-sans font-bold text-gray-800 dark:text-neutral-400"> FAQs

                </p>

                <div className=" container mx-auto mt-8 mb-10">
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
                        className={`font-sans font-medium text-[13px] text-justify accordion-content overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-screen' : 'max-h-0'
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



                  <Link href="/our-Company" className="  rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
                    <span className="relative">       Know more About Us </span>
                  </Link>
                  <a
                    href="tel:+919870248420"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default action
                      window.location.href = "tel:+919870248420";
                    }}
                    className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
                    <span className="relative">Contact sales team</span>
                  </a>



                </div>



              </section>


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




                <img className="md:h-[70%] rounded-md" src="/awth.webp" alt="Hero Image" />
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

                          <iframe className="responsive-iframe" width="860" height="515" src="https://www.youtube.com/embed/maCpVe_3Y2M?si=a1rz8p00L814B6xo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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


        <div className="row pb-16 flex justify-center items-center flex-col">


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

          <div className="row  w-full h-full">


            <div className="relative overflow-x-auto justify-center items-center flex font-sans font-thin">


              <table className="md:w-[50%] text-sm text-center text-gray-500 ">
                <thead className="text-xs  text-gray-700 uppercase bg-gray-50 ">

                </thead>
                <tbody >
                  <tr className="bg-white text-[15px] flex flex-col md:flex-row justify-center  ">
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
                      className="  w-32 h-32 md:w-48 md:h-48 object-center object-cover    rounded-full"
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
