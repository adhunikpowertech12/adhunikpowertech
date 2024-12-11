'use client';

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export default function AirWasher() {



  return (
    <>

      <div className=" my-11">
        <span className="  text-transparent">.</span>
      </div>

      <div className="row">
        <div className="col py-12 justify-center items-center  flex flex-col">






          <p className="  text-3xl font-serif" >   HVAC Solution Under One Roof </p>



          <p className="text-[12xl] w-[75%] text-center font-sans font-thin py-7">

            Adhunik Powertech Private Limited is a leading manufacturer specializing in high-quality air cooling and air conditioning products. We offer comprehensive HVAC project services, including expert design, installation, and maintenance, ensuring our clients receive unparalleled support throughout every phase. With over 19 years of experience in the HVAC industry, we are committed to providing innovative turnkey solutions that meet and exceed international standards. Choose Adhunik Powertech to enhance your indoor comfort and energy efficiency with our trusted HVAC expertise.
          </p>

        </div>
      </div>

      <div className="row ">

        <div className="relative h-[500px] w-full">
          {/* Video background */}
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-fill object-center"
          >
            <source src="https://rilstaticasset.akamaized.net/sites/default/files/2022-08/about-us-flag-video-mob.mp4
" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay container for centered content */}
          <div className="absolute inset-0 text-gray-700  flex items-center justify-center"
          >



            <div className=" text-center   w-[75%]  rounded-md  border-gray-400  border-[1px] p-11 font-thin bg-white text-gray-700 ">
              <h1 className="text-3xl  font-sans  mb-4"> A Brighter India, Powered by Adhunik Powertech </h1>

              <p className="text-lg font-thin font-sans">Our conviction, "A Brighter India, Powered by Adhunik Powertech," drives our vision and actions every day. We have successfully evolved from an HVAC services company to India’s premier manufacturer of air cooling and air conditioning products. By supporting the Make in India initiative, we not only enhance local manufacturing but also bring our innovative products to markets around the world, demonstrating our commitment to quality and excellence on a global scale. </p>



            </div>
          </div>



        </div>
      </div>


      <div className="row">
    
   
   
   <div className="container mx-auto mt-8 mb-10">
            {accordionData.map((item, index) => (
                <div
                    className="border-[#F6F6F8] mb-4 rounded border"
                    key={index}
                >
                    <div
                        className="accordion-header bg-[#F6F6F8] cursor-pointer px-4 py-2 flex justify-between items-center"
                        onClick={() => handleClick(index)}
                    >
                        {item.title}
                        <span className={`arrow ${activeIndex === index ? 'down' : 'right'}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</span>
                    </div>
                    <div
                        ref={el => refs.current[index] = el}
                        className={`accordion-content overflow-hidden transition-height duration-300 ease-in-out ${
                            activeIndex === index ? 'h-auto' : 'h-0'
                        }`}
                        style={{
                            height: activeIndex === index ? `${contentHeights[index]}px` : '0px'
                        }}
                    >
                        <div className="px-4 pb-4 pt-2">{item.content}</div>
                    </div>
                </div>
            ))}
        </div>


    </div>





    


    </>
  )
}

