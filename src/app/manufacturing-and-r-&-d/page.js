"use client"
import React, { useEffect, useRef, useState } from 'react'
import { IoIosCall } from 'react-icons/io';
import { MdMessage } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


export default function page() {

  const images3 = [

    {
      original: "/awi/rd2.png",
      thumbnail: "/awi/rd2.png",
    },
  
    {
      original: "/awi/rd1.png",
      thumbnail: "/awi/rd1.png",
    },
  
    {
      original: "/awi/rd3.png",
      thumbnail: "/awi/rd3.png",
    },
  
    {
      original: "/awi/rd4.png",
      thumbnail: "/awi/rd4.png",
    },
  

  
  ];


  const slides = [
    {
      id: 1,
      image: '/awi/rd5.webp',
      title: <> Advancing HVAC Excellence <br />   through   Research and Development</>,
      description: '',
      buttonText: <> <div className=' text-left pb-2'>
Manufacturing and R&D
      </div></>,
      video: 'https://videos.pexels.com/video-files/17850330/17850330-uhd_2560_1440_60fps.mp4',
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

  const listItems = [
    {
      title: "Innovative Design",
      description:
        "Our products are thoughtfully designed by experienced engineers to meet current and future needs.",
    },
    {
      title: "Material Selection",
      description:
        "Only the best, sustainable raw materials are chosen to ensure durability and efficiency.",
    },
    {
      title: "Rigorous Standards",
      description:
        "Every product adheres to stringent manufacturing protocols to meet global benchmarks.",
    },
    {
      title: "Quality Assurance",
      description:
        "Our dedicated QC team conducts thorough inspections and tests to ensure flawless performance.",
    },
  ];

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
                    R&D
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
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


      <div className="row ">

        <div className=" container-fluid px-2 md:px-4 pt-6 lg:pt-10 pb-12  lg:px-8 mx-auto ">
          <div className="max-w-2xl">


          </div>

          <div className="space-y-5 md:space-y-8">

            <div className="space-y-3">
           
              <h2
                className="font-manrope uppercase  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-4xl lg:text-4xl text-black mb-9 text-center relative ">

Shaping the Future of HVAC</h2>

              <p className="text-lg text-gray-800 text-center dark:text-neutral-200">
                At Adhunik Powertech Private Limited, we envision a market driven by high-standard products that set quality, innovation, and reliability benchmarks. Our commitment to excellence extends beyond just manufacturing; it is a mission to create value for our extended family of customers by meeting their needs with precision, efficiency, and unmatched dedication.
              </p>

            </div>

            <p className="text-lg text-gray-800 text-center dark:text-neutral-200">
              We aim to redefine the HVAC market by delivering products that inspire confidence and satisfaction. At Adhunik Powertech, manufacturing isn’t just a task—it’s a promise to provide cutting-edge solutions that combine the latest technologies, superior design, and world-class quality standards.
            </p>


            <div className="row">
      
            <h2
                className="font-manrope uppercase  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-4xl lg:text-4xl text-black mb-9 text-center relative pt-10">

                Our Manufacturing Excellence </h2>
          <div className="row flex flex-row flex-wrap-reverse  justify-evenly items-center">
          
            <div className=" w-full h-full md:w-5/12 ">
           
                <div className="space-y-3">
                <p className=' font-sans font-normal'>
                The manufacturing process at Adhunik Powertech is a harmonious blend of innovation, expertise, and attention to detail. Every step in the journey, from concept to creation, is designed to uphold our high standards and achieve customer satisfaction.
                </p>
              <h3 className="text-2xl font-semibold dark:text-white pb-3"> Key highlights of our manufacturing process include: </h3>


            </div>

            <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
      {listItems.map((item, index) => (
        <li key={index} className="ps-2 font-sans font-normal">
          <span className="font-sans font-bold ">{item.title}:</span> {item.description}
        </li>
      ))}
    </ul>
       
            </div>
            <div className=" w-full h-full md:w-5/12 my-5  ">
              <ImageGallery items={images3} className=" rounded-lg " alt="pics" />

            </div>
            
          </div>
          <div className="container flex justify-center">
          <p className="text-lg text-gray-800 dark:text-neutral-200 text-center w-[90%] font-sans font-normal">     Our facility has advanced machinery such as Hydraulic Press Machines, PU Forming Machines, Sheet Bending Machines and Hydraulic Shearing Machines, ensuring precision, speed, and consistency.</p>

          </div>
        

        </div>



        <div className=" h-full flex flex-col md:flex-row text-center md:p-5 bg-[#F4F4F4]">




<div className="md:w-[40%] w-auto">
  <div className="flex items-center justify-center h-full">
    <div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/10 rounded-xl">
        <div className="w-auto">
          <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
        
            <img
              className="  h-[28rem]  object-center object-cover  "
              fetchPriority="high"
              decoding="async"
              alt="Fire Extinguishers"
             src="/awi/rd.png"
            />
          </div>
        </div>
     
      </div>
    </div>
  </div>
</div>


<div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  text-justify">
  <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block">Research & Development – Innovating for the Future</h2>
  <p className="text-justify  py-2 font-sans font-normal">
  We believe in staying ahead by investing in innovation. Our R&D division works tirelessly to design and refine HVAC systems that deliver superior performance while conserving energy. Every breakthrough we achieve is focused on enhancing customer comfort and minimizing environmental impact.
  </p>

  <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block"> Advanced Testing Laboratory </h2>
  <p className="text-justify  py-2 font-sans font-normal">
  We’ve built a cutting-edge testing lab to ensure every product meets and exceeds the toughest standards. Our testing facility replicates real-world conditions, evaluating performance, durability, and energy efficiency to guarantee that our customers receive only the best.
  </p>






</div>


</div>


           

          
          </div>

        </div>




        {/* <div className="sticky bottom-6 inset-x-0 text-center z-10 ">
          <div className="inline-block backdrop-blur-md  p-3 rounded-md bg-white/30 ">
            <div className="flex items-center gap-x-1.5  ">

         
         
                  <div className="row flex flex-row justify-center  ">

                  <button
                    className=" cursor-pointer z-10 relative  text-sm px-7 py-4 text-white rounded-lg shadow-lg transition-colors duration-300"
                    style={{
  background: `
    linear-gradient(90deg, #00B4DB 0%, #0083B0 100%)
  `,
  backgroundBlendMode: 'multiply' // Optional, can be removed or adjusted
}}

                  >
                     Call Us Now
                  </button>
             </div>

              <div className="block h-10 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>
            
              <div className="row flex flex-row justify-center items-center">
              <button
                    className=" cursor-pointer z-10 relative  text-sm px-7 py-4 text-white rounded-lg shadow-lg transition-colors duration-300"
                    style={{
  background: `
    linear-gradient(90deg, #00B4DB 0%, #0083B0 100%)
  `,
  backgroundBlendMode: 'multiply' // Optional, can be removed or adjusted
}}


                  >
                  Request a Quote
                  </button>
             </div>
            

            </div>
          </div>
        </div> */}


      

      </div>



    </>
  )
}
