'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
export default function page() {

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
      img: '/102.png',
      items: ['Maintains excellent indoor air quality', 'Healthy conditions for the human body',]
    },
    {
      heading: <>Up to 80% less power consumption <br /> compared to air-conditioners</>,
      img: '/102.png',
      items: ['Low operating cost ', 'Low carbon footprint',]
    },
    {
      heading: 'High level of filtration',
      img: '/102.png',
      items: ['Supplies clean air', 'Keeps indoor areas clean',]
    },
    {
      heading: 'Positive pressure system',
      img: '/102.png',
      items: ['Prevents ingress of dust', ' Drives out harmful contaminants',]
    },
    {
      heading: <>Non refrigerant and compressor <br /> based technology
      </>,
      img: '/102.png',
      items: ['No harmful gases used', 'Sustainable cooling solution',]
    },
    {
      heading: 'Robust and compact design',
      img: '/102.png',
      items: ['The body of the machine doesn’t get damaged when exposed to harsh weather conditions ', 'Long product life',]
    },
    {
      heading: 'Up to 5°C more cooling compared to direct evaporative air-coolers ',
      img: '/102.png',
      items: ['Easily maintains temperatures below 30°C ', 'Ideal temperature conditions for both man and machine',]
    },
    {
      heading: 'Up to 60% less moisture addition in air compared to direct evaporative air-coolers',
      img: '/102.png',
      items: ['Supplies drier air compared to direct evaporative air-coolers ', ' Can be used even in the monsoon season',]
    },
    {
      heading: '3 modes of operation – IDEC, IEC and ventilation ',
      img: '/102.png',
      items: ['  Modes can be selected based on ambient weather conditions  ', ' All weather cooling solution ',]
    },
    {
      heading: ' Blow through design  ',
      img: '/102.png',
      items: ['   Blower doesn’t come in contact with moist air  ', '  Zero chance of blower rusting ',]
    },
  ];


  return (


    <>


      <div className="row  mt-32 font-sans">
        <p className=" w-full text-center font-sans  text-5xl  text-sky-700 uppercase">Air washer</p>

      


          <div className="row ">
            <div className=" h-auto  flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">

              <div className="md:w-[40%] w-auto  rounded-xl ">
                <div className="flex items-center justify-center h-full">
                  <div>
                    <div className="">
                      <div className="w-auto">
                        <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                          <img
                            className="  h-[28rem]  object-center object-fill "
                            fetchPriority="high"
                            decoding="async"
                            alt="Air washer"
                            src="/awi/5.webp"
                          />
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-[60%] w-auto h-auto p-2 m-2 md:p-5 md:m-5 flex flex-col ">

                <div className=" px-2 py-2" >
                  <p className=' text-4xl uppercase text-left' >overview</p>
                  <p className=' text-[14px] text-justify pt-2 ' >
                    Introducing Adhunik Powertech’s Air Washer with 304 -SS grade
                  </p>
                  <p className=' text-[14px] text-justify py-2' >
                    From budget-friendly options to premium models, we offer a diverse range to suit your needs and preferences. Our air washers are engineered to be both cost-effective and energy-efficient, helping you save on utility bills without compromising comfort.
                  </p>
                  <p className=' text-[14px] text-justify  ' >

                    Whether you’re looking to cool a small space or a large industrial facility, we have a solution for you. Let's deep dive into the science behind cooling technology  exploring the working principles of single and double-stage air washer and product features etc.


                  </p>
                </div>


                <h2 className="text-3xl md:text-4xl font-sans mb-3  uppercase text-left  justify-start">Air Washer</h2>
                <div className="text-justify  ">
                  <ul className="list-none" >
                    <li> Air Washer works on the principle of evaporative air cooling. Inside the air washer, large, specially designed cooling pads are kept constantly wet using a water distribution system. As hot, dry air passes through these wet pads, water molecules absorb heat and evaporate into the air. This process cools the air down significantly, delivering a refreshing breeze to your workplace. </li>

                  </ul>

                  <h2 className="text-2xl font-semibold font-sans  py-3  uppercase  ">Product Features</h2>
                  <hr className="h-px w-60   bg-gray-300 border-0 "></hr>



                  <ul className='  py-3  space-y-1 list-disc  ps-4 ' >
                    <li>
                      India’s first stainless steel (304 grade)air washer with 80% extra cooling pad and filter, model Hailstorm

                    </li>
                    <li>
                      Model Storm, made of Galvanized steel. Its Entire floor area made with SS-304 with 20% extra cooling pad and filter.

                    </li>
                    <li>
                      Base frame having C channel with thickness of 3 mm to 5 mm.

                    </li>
                    <li>
                      Its has an induction motor which is the TEFC Squirrel cage type and functions. for 50/60 cycle, 415+10% volts with AC Supply in 3 phase or 1 phase .

                    </li>
                    <li> Water pump are made of SS 304 which are reliable & durable.
                    </li>
                    <li>
                      All spare parts have rust free anti corrosion coating .

                    </li>
                    <li> Customization Available.</li>


                  </ul>





                </div>
                <div className="show_m mt-5">




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
                <p className=" text-[20px] w-full text-center font-serif " > (Working Principle)</p>
                <div className="flex items-center w-full justify-center h-full">
                  <div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl">
                      <div className="w-auto">
                        <div className="w-full object-cover rounded-xl">
                          {/* Use the Next.js Image component for optimized image loading */}
                          <img
                            className=" h-full w-full"
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
                            className="  h-[28rem]  object-center object-fill "
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
                          Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
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
                        <span className=' italic font-sans font-thin '>  (Indirect Evaporative Coolling System) </span>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
                <h2 className="text-3xl  font-sans mb-3  uppercase  text-left "> Double STAGE Air Washer <br /> (IN-DIRECT EVAPORATIVE
                  COOLING SYSTEM) </h2>
                <p className=" text-[15px] w-full text-center font-serif" > (Working Principle)</p>
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
                  <div className="w-6/12">
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
                  <div className="w-6/12">
                    {lists.slice(5).map((list, index) => (
                      <div key={index} className="mb-4">
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


              <div>
                <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">About Our Company
                </p>
                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">We have 19+ years of Professional Experience</h1>
                <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">We are pleased to introduce ourselves as one of the Heating, Ventilation, and Air Conditioning Contractors and Solution providers with considerable experience in the field to provide turnkey solutions for HVAC and HVACR works meeting International Standards.</p>

                <ul className="space-y-2 sm:space-y-4 pt-3">
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        Quick To Respond
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        Flexible Price
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        24/7 Hours Support
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        Experienced Professionals
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        Experienced Professionals
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        Conscientious
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        Ontime at Services
                      </span>
                    </div>
                  </li>
                </ul>






                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                  <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                    Know more About Us
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </a>
                  <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                    Contact sales team
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




                <img className="h-[70%] rounded-md" src="/about3.jpg" alt="Hero Image" />
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

                          <iframe className="responsive-iframe" width="860" height="515" src="https://www.youtube.com/embed/maCpVe_3Y2M?si=a1rz8p00L814B6xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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


