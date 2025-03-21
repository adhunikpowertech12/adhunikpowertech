'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { FaPlay } from "react-icons/fa";
import Link from 'next/link';

export default function PanelAirConditioners() {
    const accordionData = useMemo(() => [
        {
          title: " Why are panel air conditioners important?",
          content:
            " Panel air conditioners are crucial for preventing overheating, ensuring reliability, improving efficiency, and protecting electronic components from environmental factors. ",
        },
        {
          title: " What factors should I consider when choosing a panel air conditioner? ",
          content:
            "Consider factors like cooling capacity, noise level, energy efficiency, mounting options, and compatibility with your specific equipment.",
        },
        {
          title: " How often should I maintain my panel air conditioner? ",
          content:<>
            <div className="faq-item">
      <div className="faq-content">
       
        <ul className="list-disc pl-5">
          <li><strong>Check and clean filters:</strong> Every 1-2 months.</li>
          <li><strong>Clean the coils:</strong> Every 6-12 months.</li>
          <li><strong>Inspect refrigerant levels:</strong> Annually or if cooling is inadequate.</li>
          <li><strong>Check drainage system:</strong> Every 3-6 months to prevent blockages.</li>
          <li><strong>Examine the unit for debris:</strong> Regularly, especially in outdoor units.</li>
          <li><strong>Check for wear and tear:</strong> Annually or as needed.</li>
        </ul>
        <p>Regular maintenance ensures better performance and longevity!</p>
      </div>
    </div>
    
          </>,
        },
        {
          title: " What is the difference between a panel air conditioner and a regular air conditioner? ",
          content:
            "Panel air conditioners are specifically designed for cooling enclosed spaces with sensitive electronic equipment, while regular air conditioners are designed for cooling larger areas like rooms or buildings. They often offer more precise temperature control and are optimized for efficient heat dissipation.",
        },
        {
          title: " Why should I choose Adhunik Powertech panel air conditioners? ",
          content:
          <>
          <div className="faq-item">
        <div className="faq-content">
        <p>Adhunik Powertech is a renowned manufacturer of high-quality panel air conditioners, offering:
    </p>
          <ul className="list-disc pl-5">
            <li><strong>Reliability:</strong> Proven performance and durability.</li>
            <li><strong>Energy Efficiency:</strong> Reduced operating costs.</li>
            <li><strong>Customizable Solutions:</strong> Tailored to specific cooling needs.</li>
          </ul>
        </div>
      </div>
        </>
        
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
    
    
        
        const products2 = [
            {
              id: 1,
              title: "Where are Panel Air Conditioning Systems Used?",
              description:
                "It is designed to prevent excessive heat that may occur inside electrical panels. These systems are used to control the indoor temperature and ensure the safety of electrical panels.",
          
              imageSrc: "/panelac.png",
              altText: "Panel Air Conditioner ",
            },
            // Add more product objects if needed
          ];
    
    
    
    
        const products3 = [
            {
              id: 1,
              title: "Specifications of Panel Air Conditioner",
              imageSrc: "/pac.jpg",
              altText: "Panel Air Conditioner ",
            },
            // Add more product objects if needed
          ];
    
    
          const wall_mount = [
            {
              heading: "Model No.",
              values: [< > <div className=" font-extrabold font-sans text-black">Units</div></>, "WMS-025", "WMS-005", "WMS-0010", "WMS-0015", "WMS-0020", "WMS-0025", "WMS-0030", "WMS-0035", "WMS-0050", "WMS-0070"],
            },
            {
              heading: "Cooling Capacity",
              values: [< > <div className=" font-extrabold font-sans text-black">BTU</div></>, "853", "1706", "3412", "5119", "6825 ", "8525", "10352", "11945", "17064", "24000"],
            },
            {
              heading: "Dimension in mm",
              values: [< > <div className=" font-extrabold font-sans text-black">HxDxW</div></>, "570x285x285", "570x285x285", "780x285x307", "780x285x307", "1220x257x400", "1220x257x400", "420x330x730", "420x330x730", "420x330x730", "420x330x730"],
            },
            {
              heading: "Power Input",
              values: [< > <div className=" font-extrabold font-sans text-black">Watt/ Amp</div></>, "475/2.2", "689/3.2", " 754/ 3.5", " 906/4.2", " 1010/4.4", "1290/5.8", "1405/6.5", "1470/6.8", "2115/9.2", "2594/12"],
            },
            {
              heading: "Air-Flow",
              values: [< > <div className=" font-extrabold font-sans text-black">CMH </div></>, "85", "85", "314", "314", "320", "485", "680", "731", "1076", "1326"],
            },
            {
              heading: "Gross Weight",
              values: [< > <div className=" font-extrabold font-sans text-black">KG</div></>, "25", "25", "32", "34", "52", "54", "56", "58", "100", "105"],
            },
          ];
    
          const top_mount = [
            {
              heading: "Model No.",
              values: [< > <div className=" font-extrabold font-sans text-black">Units</div></>, "TMT-025", "TMT-005", "TMT-0010", "TMT-0015"],
            },
            {
              heading: "Cooling Capacity",
              values: [< > <div className=" font-extrabold font-sans text-black">BTU</div></>, "853", "1707", "3413", "5120"],
            },
            {
              heading: "Dimension in mm",
              values: [< > <div className=" font-extrabold font-sans text-black">HxDxW</div></>, "555x438x465", "555x438x465", "345x395x655", "345x395x655"],
            },
            {
              heading: "Power Input",
              values: [< > <div className=" font-extrabold font-sans text-black">Watt/ Amp</div></>, "475/2.2", "689/3.2", " 754/ 3.5", " 906/4.2",],
            },
            {
              heading: "Air-Flow",
              values: [< > <div className=" font-extrabold font-sans text-black">CMH </div></>, "68", "68", "221", "221"],
            },
            {
              heading: "Gross Weight",
              values: [< > <div className=" font-extrabold font-sans text-black">KG</div></>, "26", "28", "39", "43",],
            },
          ];
    
          const stand_alone = [
            {
              heading: "Model No.",
              values: [< > <div className=" font-extrabold font-sans text-black">Units</div></>, "SA-0010", "SA-0015", "SA-0030", "SA-0050", "SA-070",],
            },
            {
              heading: "Cooling Capacity",
              values: [< > <div className=" font-extrabold font-sans text-black">BTU</div></>, "3413", "5121", "10230", "17064", "24000 ", ],
            },
            {
              heading: "Dimension in mm",
              values: [< > <div className=" font-extrabold font-sans text-black">HxDxW</div></>, "710x390x420", "710x390x420", "1150x550x550", "1150x550x550", "1500x545x425"],
            },
            {
              heading: "Power Input",
              values: [< > <div className=" font-extrabold font-sans text-black">Watt/ Amp</div></>, " 454/ 3.5", " 906/4.2", " 1729/6.5", " 2053/9.5", " 2594/12", ],
            },
            {
              heading: "Air-Flow",
              values: [< > <div className=" font-extrabold font-sans text-black">CMH </div></>, "221", "221", "714", "883", "1326", ],
            },
            {
              heading: "Gross Weight",
              values: [< > <div className=" font-extrabold font-sans text-black">KG</div></>, "38", "38", "72", "82", "105"],
            },
          ];
    
          const column1 = [
            "CNC Machine Tools ",
            "Robotics",
            "Automation Machines ",
            "Furnace & Elevator Control",
            "Computer CPUs   ","Server Enclosures"
            
          ];
          
          const column2 = [
            "Textile Machines",
            "Telecom Equipment",
            "Medical Electronics Equipment",
            "Retail stores/Showrooms",
            "Process Control Equipment",
            "Drive Panels, PLC Panels ",
            
          ];
    
          const logos = [
            { src: '/pa1.webp', alt: 'Asahi-India-Glass-Ltd' },
            { src: '/pa2.webp', alt: 'Asahi-India-Glass-Ltd' },
            { src: '/pa3.webp', alt: 'Asahi-India-Glass-Ltd' },
            { src: '/pa4.webp', alt: 'Asahi-India-Glass-Ltd' },
            { src: '/pa5.webp', alt: 'Asahi-India-Glass-Ltd' },
            { src: '/pa6.webp', alt: 'Asahi-India-Glass-Ltd' },
            { src: '/pa7.webp', alt: 'Asahi-India-Glass-Ltd' },
            { src: '/pa8.webp', alt: 'Asahi-India-Glass-Ltd' },
           
       
        
          ];
    
  return (
    <>
   <div className="row  mt-32 font-sans">
<h1 className=" w-full text-center font-sans  text-4xl  md:text-5xl  text-sky-700 uppercase"> Panel Air Conditioner </h1>

<div>


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
                    alt="Panel Air Conditioner "
                    src="/wm.png"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h2 className="font-dmserif text-3xl font-bold text-white">Wall Mount </h2>
                <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Protect your critical electrical equipment with our compact and efficient wall-mounted panel air conditioners, designed to provide reliable cooling for a range of applications.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
        <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block">Wall Mount </h2>
        <p className="text-justify md:text-center">
        Our wall-mounted panel air conditioner is a compact and efficient cooling solution designed to protect your critical electrical equipment. We offer a range of cooling capacities from 250W to 7000W, ensuring an ideal fit for your needs. Whether you require cooling for a small electrical panel or a large industrial control cabinet, we have the right unit to keep your equipment cool and operating optimally. With its quiet operation, easy installation, and reliable performance, you can ensure your equipment functions effectively and lasts longer.
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



    <p className=" w-full text-center  text-2xl font-sans"> TECHNICAL SPECIFICATION</p>
    <div className="flex justify-center">
  <div className="rounded-lg relative py-7 overflow-x-auto w-full max-w-[85rem] mx-auto">
    <table className="text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200 min-w-[600px] sm:min-w-[85rem]">
    <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
        <tr className="text-center">
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100 text-black font-sans font-extrabold bg-white sticky left-0 z-10">Capacity in Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100 bg-white"></th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">250 Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">500 Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">1000 Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">1500 Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">2000 Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">2500 Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">3000 Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">3500 Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">5000 Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">7000 Watt</th>
        </tr>
      </thead>
      <tbody>
        {wall_mount.map((row, index) => (
          <tr key={index} className="bg-white text-center border-b border-gray-300">
            <td className="px-1 py-1 text-[12px] font-bold border-r border-gray-300 bg-[#00A0E1] text-white sticky left-0 z-10">{row.heading}</td>
            {row.values.map((value, i) => (
              <td key={i} className="px-1 py-1 text-[12px] border-r border-gray-300">{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

</div>


<div className="row">
<div className=" h-full flex  flex-col-reverse md:flex-row text-center p-5 bg-[#F4F4F4] m-4">




      


      <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">

<h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block">
Top Mount 
</h2>
<p className="text-justify md:text-center">
Discover our Top-Mount Panel Air Conditioners, designed to deliver optimal cooling with capacities ranging from 250W to 1500W. No matter the size of your electrical panel or control cabinet, we have the perfect solution to ensure your equipment remains cool and functions at its best. Protect your investment and enhance performance with our reliable air conditioning units!
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
<div className="md:w-[40%] w-auto">
        <div className="flex items-center justify-center h-full">
          <div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
              <div className="w-auto">
                <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                  <img
                    className=" md:h-96"
                    fetchPriority="high"
                    decoding="async"
                    alt="Panel Air Conditioner "
                    src="/tm.png"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h2 className="font-dmserif text-3xl font-bold text-white">Top Mount </h2>
                <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Experience powerful cooling in your panels with our compact Top-Mount Panel Air Conditioners. Designed for optimal cooling in limited spaces, they're the ideal solution for installations where space is a constraint.
                </p>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    

    


    </div>
    <p className=" w-full text-center  text-2xl font-sans"> TECHNICAL SPECIFICATION</p>
    <div className="flex justify-center">
  <div className="rounded-lg relative py-7 overflow-x-auto w-full max-w-[85rem] mx-auto">
    <table className="text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200 min-w-[600px] sm:min-w-[85rem]">
    <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
        <tr className="text-center">

          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100 text-black font-sans font-extrabold bg-white sticky left-0 z-10">Capacity in Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100 bg-white"></th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">250 Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">500 Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">1000 Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">1500 Watt</th>
       

        </tr>
      </thead>
      <tbody>
        {top_mount.map((row, index) => (
          <tr key={index} className="bg-white text-center border-b border-gray-300">
            <td className="px-1 py-1 text-[12px] font-bold border-r border-gray-300 bg-[#00A0E1] text-white sticky left-0 z-10">{row.heading}</td>
            {row.values.map((value, i) => (
              <td key={i} className="px-1 py-1 text-[12px] border-r border-gray-300">{value}</td>
            ))}
          </tr>
        ))}
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
                    className=" md:h-96"
                    fetchPriority="high"
                    decoding="async"
                    alt="Panel Air Conditioner "
                    src="/sa.png"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h2 className="font-dmserif text-3xl font-bold text-white">Stand Alone  </h2>
                <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Enjoy the flexibility of our Stand-Alone Panel Air Conditioners. Ideal for situations where wall or top-mounted installations are not feasible.
                </p>
             
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">

<h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block">
Stand Alone  
</h2>
<p className="text-justify md:text-center">
Enhance your cooling experience with our Stand-Alone Panel Air Conditioners—flexible and efficient solutions that fit seamlessly into any area of your facility. These units are ideal for situations where wall or top-mounted installations are not feasible. Our panel air conditioners provide powerful cooling capacities ranging from 1,000W to 7,000W. 
Now enjoy the advantages of a compact design, whisper-quiet operation, and reliable performance, ensuring that your critical equipment receives the optimal cooling it needs to thrive.
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
    <p className=" w-full text-center  text-2xl font-sans"> TECHNICAL SPECIFICATION</p>
    <div className="flex justify-center">
  <div className="rounded-lg relative py-7 overflow-x-auto w-full max-w-[85rem] mx-auto">
    <table className="text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200 min-w-[600px] sm:min-w-[85rem]">
    <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
        <tr className="text-center">
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100 text-black font-sans font-extrabold bg-white sticky left-0 z-10">Capacity in Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100 bg-white"></th>
         
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">1000 Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">1500 Watt</th>
        
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">3000 Watt</th>
         
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">5000 Watt</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">7000 Watt</th>
        </tr>
      </thead>
      <tbody>
        {stand_alone.map((row, index) => (
          <tr key={index} className="bg-white text-center border-b border-gray-300">
            <td className="px-1 py-1 text-[12px] font-bold border-r border-gray-300 bg-[#00A0E1] text-white sticky left-0 z-10">{row.heading}</td>
            {row.values.map((value, i) => (
              <td key={i} className="px-1 py-1 text-[12px] border-r border-gray-300">{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</div>

      {products2.map((product) => (
        <div key={product.id} className="h-full flex  flex-col-reverse md:flex-row text-center p-5 bg-[#F4F4F4] m-4">

         
          <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">

          <span className=' relative right-6'>

            <h2 className="text-[6vw] md:text-4xl text-left mb-3 ">{product.title}</h2>
            <p className=' text-justify'>Industrial Panel air conditioners are used in a variety of application areas. <br /> Here are some examples:</p>
          </span>

            <div className=" text-justify">
         
              <ul className="list-disc">
             <span className=' font-bold relative right-7 pt-4 text-2xl  justify-center items-center inline-flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-1"  >
  <path  strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>
Manufacturing Facilities</span> 

                <li>Cool precision machinery (CNC, robotics, automation).

</li>
<li>
Prevent overheating in electrical control panels (drives, PLCs).</li>
<li>Maintain product quality and efficiency on production lines.</li>
<li>Create comfortable assembly environments.</li>
                
              </ul>


              <ul className="list-disc">
             <span className=' font-bold relative right-7 pt-4 text-2xl  justify-center items-center inline-flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-1"  >
  <path  strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>
    Food and Beverage Industry:
</span> 

                <li>Cool processing equipment, control labs, and storage areas.


</li>
<li>
Prevent spoilage and maintain product freshness           .
</li>

                
              </ul>


              <ul className="list-disc">
             <span className=' font-bold relative right-7 pt-4 text-2xl  justify-center items-center inline-flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-1"  >
  <path  strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>
    Data Centers
</span> 

                <li>Protect servers and network equipment from overheating.


</li>
<li>
Ensure data integrity and energy efficiency.
</li>

                
              </ul>
            </div>
          
          </div>
    {/* Text Container */}


          <div className="md:w-[40%] w-auto">
            <div className="flex items-center justify-center h-full">
              <div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                  <div className="w-auto">
                    <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                      {/* Use next/image for optimized image loading */}
                      <Image
                        className="h-[30rem] object-center object-fill"
                        priority
                        alt={product.altText}
                        src={product.imageSrc}
                        width={500} // Set appropriate width
                        height={700} // Set appropriate height
                        layout="responsive" // Ensure responsive behavior
                      />
                    </div>
                  </div>

                  {/* Overlay */}
           
                </div>
              </div>
            </div>
          </div>

        </div>
      ))}


      {products3.map((product) => (


        <div key={product.id} className="h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">
          {/* Image Container */}
          <div className="md:w-[40%] w-auto">
            <div className="flex items-center justify-center h-full">
              <div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                  <div className="w-auto">
                    <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                      {/* Use next/image for optimized image loading */}
                      <Image
                        className="h-[30rem] object-center object-fill"
                        priority
                        alt={product.altText}
                        src={product.imageSrc}
                        width={500} 
                        height={700} 
                        layout="responsive" 
                      />
                    </div>
                  </div>

                  {/* Overlay */}
           
                </div>
              </div>
            </div>
          </div>

       {/* Text Container */}

          <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">

          <span className=' relative right-6'>

            <h2 className="text-[6vw] md:text-4xl px-8  py-4 rounded-full text-left mb-3 bg-black text-white  ">{product.title}</h2>
            
          </span>
  

            <div className=" text-justify">
         
              <ul className="list-disc">
           



 
 

 

                <li>   A wide range of products starts from 250 watts to 7000 watts.

</li>
<li>
Using eco-friendly refrigerant R-134a.</li>
<li> Hermetically sealed reciprocating compressor with a make of Emerson/ Danfoss/Tecumseh.</li>
<li> Designed for a 24-hour working.</li>
<li> Low noise level & aesthetically appealing.</li>
<li> Compact design which saves huge space.</li>
<li> MS powder-coated body and SS 304 also available as per the requirement .</li>
<li>Energy saving Microprocessor-based controller which is easy
to operate.</li>
                
              </ul>


              
            </div>
          
          </div>
   
        </div>
      ))}


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
      <Link href="/our-Company" className="  rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
    <span className="relative">       Know more About Us </span>
</Link>
                  <a  href="tel:+919953909177" 
    onclick="location.href='tel:+919953909177'; return false;"  className="  rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
    <span className="relative"> Contact sales team</span>
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




      <img className="md:h-[70%] rounded-md" src="/pacth.webp" alt="Hero Image" />
      <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>


     

    </div>


    {showModal ? (
      <>
        <div
          className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
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
           
                <iframe className="responsive-iframe" width="860" height="515" src="https://www.youtube.com/embed/jtizPl_Y744?si=oWwFcUq_IwXZgvjD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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
        <tbody>
          <tr className="bg-white text-[15px]  flex  flex-col   md:flex-row justify-center">
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
            className=" w-32 h-32 md:w-48 md:h-48 object-center object-cover   rounded-full "
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
