'use client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import WorldMap from "react-svg-worldmap";
import { FaPlay } from "react-icons/fa";
export default function page2() {


  const slides = [
    {
      id: 1,
      video: 'https://videos.pexels.com/video-files/28750643/12466849_2560_1440_25fps.mp4',
      title: <> A Legacy of Strength  A <br /> Future of Hope </>,
      description: '',
      buttonText: 'Overview',
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


  const articles = [
    {
      id: 1,
      title: ' Air Washer',
      description: 'Breathe easy with our air washers. Experience cleaner, fresher air by removing pollutants and allergens. ',
      imgSrc: '/awt.png',
      link: '#',
      imgHeight: "250px ",
      imgWidth: "250px ",
    },
    {
      id: 2,
      title: ' Ducted Air Coolers ',
      description: 'Stay comfortable in style. Our ducted air coolers provide quiet, efficient cooling without compromising your space.',
      imgSrc: '/ac4.webp',
      link: '#',
      imgHeight: "250px    ",
      imgWidth: "250px ",
    },
    {
      id: 3,
      title: ' Ventlilation Exhaust Fan ',
      description: ' Create a healthier, more comfortable indoor environment. Our ventilation exhaust fans remove moisture, odors, and pollutants. ',
      imgSrc: '/efss.jpeg',
      link: '#',
      imgHeight: "250px ",
      imgWidth: " 250px  ",
    },
  ];


  const articles2 = [
    {
      id: 1,
      title: ' PANEL AIR CONDITIONER ',
      description: 'Keep your CNC and electrical panels running smoothly. Our panel air conditioners provide precise temperature control and reliable cooling, preventing overheating and system failures.',
      imgSrc: '/panelac.png',
      link: '#',
      imgHeight: "350px",
      imgWidth: "350px",
    },
    {
      id: 2,
      title: ' OIL AND COOLANT CHILLER ',
      description: 'Protect your valuable machinery and maintain optimal operating temperatures with our efficient oil and coolant chillers. Prevent overheating, reduce downtime, and improve overall productivity.',
      imgSrc: '/OC.jpeg',
      link: '#',
      imgHeight: "350px",
      imgWidth: "350px",
    },
    {
      id: 3,
      title: 'AIR SHOWER ',
      description: ' Maintain a clean and controlled environment with our high-performance air showers. Effectively remove dust, debris, and contaminants from personnel before entering critical areas. ',
      imgSrc: '/as.png',
      link: '#',
      imgHeight: "350px",
      imgWidth: "350px",
    },
    {
      id: 4,
      title: 'Air Handling Unit ',
      description: ' Optimize indoor air quality and comfort with our efficient air handling units. Control temperature, humidity, and airflow for a healthy and productive environment. ',
      imgSrc: '/AHU.jpg',
      link: '#',
      imgHeight: "350px",
      imgWidth: "350px",
    },
  ];

  const data = [

    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 1311559204 }, // united states

    { country: "br", value: 1311559204 }, // brazil

    { country: "bd", value: 1311559204 }, // bangladesh
    { country: "ru", value: 1311559204 }, // russia
    { country: "mx", value: 1311559204 }, // mexico
  ];

  
  const [showModal, setShowModal] = React.useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>


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
              loop
              muted
              className="w-full h-full object-cover"
              style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
            >
              <source src={slide.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>


            <div className="flex items-center h-full bg-black bg-opacity-40">

              <div className=" text-white  text-center md:text-left  lg:px-16">
                <p className="  text-3xl md:text-6xl  font-sans md:w-[90%]  mb-2 font-thin">
                  {slide.title}</p>
                <p className=' text-[14px]   md:w-[70%]'>{slide.description}</p>
                <button
                  className=" cursor-pointer relative  text-5xl z-10  top-28 mt-4   text-white rounded-lg shadow-lg transition-colors duration-300"

                >
                  {slide.buttonText}
                  <div className=" font-sans text-sm flex justify-center items-center ">
                  Products <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
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

      <div className=" justify-center items-center flex flex-col " >
        <p className=' px-10 pt-9  text-4xl  w-[70%] text-center font-sans font-thin'  > A Global Commitment, Rooted in India

        </p>
        <p className=' px-1 pt-3  text-[15px]  w-[70%] text-center font-sans font-thin' >Adhunik Powertech is committed to taking Indian manufacturing to the global stage. Our products are designed and engineered in India, and exported to diverse markets across the globe, from Asia's bustling cities to the Middle East’s skyscrapers. We believe in delivering products that are not only efficient and reliable but also environmentally friendly. Our focus on sustainability drives us to develop innovative solutions that reduce energy consumption and minimize our carbon footprint. </p>


      </div>



      <div className="row  flex flex-col-reverse lg:flex-col-reverse  pb-8 ">



        <div className=' flex justify-center items-center'>


          <div className="col w-[80%]   justify-center flex flex-col px-10 pt-14">

            <br />

            <p className=' px-11   text-[15px] text-gray-500' >

              Adhunik Powertech is more than just a company; it's a movement. We are dedicated to empowering India's manufacturing sector and contributing to the nation's economic growth. By choosing Adhunik Powertech, you are not just selecting a product; you are supporting Indian manufacturing and investing in a sustainable future.


            </p>

            <p className=' text-center text-2xl ps-10 pt-3'>
              Choose From Our Wide Range Of Products

            </p>


            <br />



            <br />

          </div>
        </div>


        <div className="col w-full px-4">
          <div className=' justify-center items-center flex'>
            <div className="App ">
              <WorldMap
                color="#1d4ed8"
                title=""



                data={data}

                valueSuffix=""
                strokeOpacity='0.5'



              />
            </div>
          </div>


        </div>


      </div>

      <div className="row pb-12">






        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-7 justify-center w-full">
          {articles.map((article) => (
            <div
              key={article.id}
              className="border-2 border-sky-200 bg-white rounded-lg justify-center flex-col w-full px-5 mb-5 pt-3"
            >


              <div className="   2xl:h-auto  flex items-center justify-center overflow-hidden bg-gray-100 rounded-t-lg">
                <a href={article.link} >
                  <img
                    className=" object-contain h-full w-full  "
                    src={article.imgSrc}
                    alt={article.title}
                    style={{
                      height: article.imgHeight,
                      width: article.imgWidth,
                    }}

                  />

                </a>
              </div>

              {/* Content */}
              <div className="pt-5">
                <a href={article.link}>
                  <h5 className="border-l-4 ps-4 text-[#00A0E1] border-[#00A0E1] mb-2 text-2xl font-bold">
                    {article.title}
                  </h5>
                </a>
                <p className="mb-3 ps-4 font-normal font-sans text-gray-700">
                  {article.description}
                </p>
                <a
                  href={article.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-[#00A0E1] h-14 w-20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>




        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6 px-7  justify-center w-full  ">

          {articles2.map((article) => (
            <div
              key={article.id}
              className=" bg-white border-2 border-sky-200  rounded-lg justify-center flex-col w-full px-2 pt-2"
            >
              <div className="h-64  2xl:h-auto  flex items-center justify-center overflow-hidden bg-gray-100 rounded-t-lg ">

                <a href={article.link} className=' '>

                  <img
                    className=" object-contain h-full w-full  "
                    src={article.imgSrc}
                    alt={article.title}
                    style={{
                      height: article.imgHeight,
                      width: article.imgWidth,
                    }}

                  />
                </a>
              </div>




              <div className=" pt-5 ">
                <a href={article.link}>
                  <h5 className=" border-l-4 ps-4 text-[#00A0E1] border-[#00A0E1]  mb-2 text-[19px] font-bold ">
                    {article.title}
                  </h5>
                </a>


                <p className="mb-3 ps-4 font-normal font-sans text-gray-700  ">
                  {article.description}
                </p>


                <a href={article.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-black "
                >

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#00A0E1]  h-14 w-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>


                </a>


              </div>
            </div>
          ))}

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
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      Quick To Respond
                    </span>
                  </div>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      Flexible Price
                    </span>
                  </div>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      24/7 Hours Support
                    </span>
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      Experienced Professionals
                    </span>
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      Experienced Professionals
                    </span>
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      Conscientious
                    </span>
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
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
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
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




              <img className="h-[70%] rounded-md" src="/about3.jpg" alt="Hero Image"  />
              <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>


              <div className="absolute bottom-0 start-0">
                <svg className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="531" y="352" width="99" height="99" fill="currentColor" />
                  <rect x="140" y="352" width="106" height="99" fill="currentColor" />
                  <rect x="482" y="402" width="64" height="49" fill="currentColor" />
                  <rect x="433" y="402" width="63" height="49" fill="currentColor" />
                  <rect x="384" y="352" width="49" height="50" fill="currentColor" />
                  <rect x="531" y="328" width="50" height="50" fill="currentColor" />
                  <rect x="99" y="303" width="49" height="58" fill="currentColor" />
                  <rect x="99" y="352" width="49" height="50" fill="currentColor" />
                  <rect x="99" y="392" width="49" height="59" fill="currentColor" />
                  <rect x="44" y="402" width="66" height="49" fill="currentColor" />
                  <rect x="234" y="402" width="62" height="49" fill="currentColor" />
                  <rect x="334" y="303" width="50" height="49" fill="currentColor" />
                  <rect x="581" width="49" height="49" fill="currentColor" />
                  <rect x="581" width="49" height="64" fill="currentColor" />
                  <rect x="482" y="123" width="49" height="49" fill="currentColor" />
                  <rect x="507" y="124" width="49" height="24" fill="currentColor" />
                  <rect x="531" y="49" width="99" height="99" fill="currentColor" />
                </svg>
              </div>

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
                  
                 
                     <iframe className="responsive-iframe" width="860" height="515" src="https://www.youtube.com/embed/lrCuiQKhzpg?si=9YXv4snGgFg7rXA4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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


    </>
  )
}



