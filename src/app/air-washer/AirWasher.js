
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
        <h1 className=" w-full text-center font-sans  text-5xl  text-sky-700 uppercase">Air washer</h1>

      


          <div className="row ">
            <div className=" h-auto  flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">

              <div className="md:w-[40%] w-auto  rounded-xl ">

                <div className="flex items-center justify-center h-full">

                  <div>
                    <div className="">
                      <div className="w-auto">
                        <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                          <img
                            className="  md:h-[28rem]  object-center object-fill "
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
             
                <h2 className=" text-center text-3xl  font-sans   uppercase   ">Double STAGE Air Washer <br />
                  <span className=' text-[14px]'> (IN-DIRECT  EVAPORATIVE
                    COOLING SYSTEM)</span> </h2>
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


              <div>
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
