"use client";

import React from "react";
import { FaPlay } from "react-icons/fa";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

export default function DuctedAirCoolerPage() {


  const accordionData = useMemo(() => [

    {
      title: " How does an evaporative air cooler work?",
      content:
        "The air cooler works by pulling warm air through moistened pads, which causes the water to evaporate and cool the air. The cooled air is then circulated through ducts and into the desired space, providing a refreshing breeze. This process is energy-efficient and helps to increase humidity levels in dry climates.",
    },

    {
      title: " What is the electricity consumption of evaporative cooling systems?",
      content:
        "They consume 90% less electricity as compared to an air conditioner. To cool an area of 1500 sqft. it consumes only 1.5-2 units/hr.",
    },
    {
      title: " Are evaporative Cooling Machines Environment Friendly?",
      content:
        "Yes, They're eco-friendly. Unlike air conditioners that use harmful chemicals like CFCs, these cooling systems don't release any gases that harm the ozone layer.",
    },
    {
      title: " Is the Air-Cooling machine installed inside or does it require an open space?",
      content:
        "The air cooler needs to be installed outside in an open area. You can put it on the ground using a stand, place it on the terrace, or hang it on walls using a special structure called a cantilever.",
    },
    {
      title: " How much time does it take to install an evaporative cooling system?",
      content:
        "It generally takes around 10-15 days to properly install an effective cooling system with ducts. Hence, it's always better to plan the installation before the summer season. So that your factory is summer-ready and you do not lose productivity due to extreme heat.",
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
    const AIROSTA_ECO = [
        {
          airVolume: '40000 CMH',
          airDischarge: 'Top/Bottom Discharge',
          motorPower: '4 kw',
          powerSupply: '380 v',
          windPressure: '250~280 pa',
          outletSize: '900x900 mm',
          filter: 'NA',
          padSurfaceArea: '40 sq.ft.',
          noise: '< =82 DB',
          tankCapacity: ' 180 Ltr',
          waterPumpPower: '100 watts',
          coolingEffect: '3 ~ 18°C',
          waterInlet: 'Mechanical',
          fanType: 'Axial',
          weight: '135 kg',
          dimensions: '1420x1420x1320 mm',
          celdekPad: '100 mm (Flute size 5mm)',
          bodyMaterial: 'Fibre Re-inforced Plastic',
        },
      
      ];

    const AIROSTA_PLUS = [
      {
        airVolume: '40000 CMH',
        airDischarge: 'Top/Bottom Discharge',
        motorPower: '4 kw',
        powerSupply: '380 v',
        windPressure: '250~280 pa',
        outletSize: '900x900 mm',
        filter: 'NA',
        padSurfaceArea: '40 sq.ft.',
        noise: '< =82 DB',
        tankCapacity: ' 180 Ltr',
        waterPumpPower: '100 watts',
        coolingEffect: '3 ~ 18°C',
        waterInlet: 'Mechanical',
        fanType: 'Axial',
        weight: '165 kg',
        dimensions: '1215x1215x1210 mm',
        celdekPad: '100 mm (Flute size 5mm)',
        bodyMaterial: 'Galvanized Iron & SS 304 (Tank)',
      },
      
      ];
      
    const CYCLON = [
      {
        airVolume: '40000 CMH',
        airDischarge: 'Top/Bottom Discharge',
        motorPower: '4 kw',
        powerSupply: '380 v',
        windPressure: '250 ~ 280 pa',
        outletSize: '900x900 mm',
        filter: '16 no.',
        padSurfaceArea: '50 sq.ft.',
        noise: '< =82 DB',
        tankCapacity: ' 180 Ltr',
        waterPumpPower: '100 watts',
        coolingEffect: '3 ~ 20°C',
        waterInlet: 'Mechanical',
        fanType: 'Axial',
        weight: '175 kg',
        dimensions: '1430x1430x1535 mm',
        celdekPad: '100 mm (Flute size 5mm)',
        bodyMaterial: 'Stainless Steel 304',
      },
      
      ];
    const CYCLON_PLUS = [
      {
        airVolume: '40000 CMH',
        airDischarge: 'Top/Bottom Discharge',
        motorPower: '4 kw',
        powerSupply: '380 v',
        windPressure: '250 ~ 280 pa',
        outletSize: '1050x1050 mm',
        filter: '16 no.',
        padSurfaceArea: '50 sq.ft.',
        noise: '< =82 DB',
        tankCapacity: ' 500 Ltr',
        waterPumpPower: '70x2 watts',
        coolingEffect: '3 ~ 20°C',
        waterInlet: 'Mechanical',
        fanType: 'Axial',
        weight: '200 kg',
        dimensions: '1640x1640x1530 mm',
        celdekPad: '200 mm (Flute size 7mm)',
        bodyMaterial: 'Stainless Steel 304',
      },
      
      ];

     

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

     
    
  return (
    <>

<div className="row mt-32 font-sans">

<p className=" w-full text-center font-sans  text-5xl  text-sky-700"> DUCTED   AIR COOLER </p>

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
                    alt="DUCTED   AIR COOLER "
                    src="/ac.webp"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h2 className="font-dmserif text-3xl font-bold text-white">AIROSTA ECO</h2>
                <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
             Stay cool and comfortable all summer long with AIROSTA ECO, built to last with a durable polypropylene body and offers powerful cooling for warehouses, factories, and more. </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
        <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block">AIROSTA ECO</h2>
        <p className="text-justify md:text-center">
        Our AIROSTA ECO is a high-performance ducted air cooler engineered to cool large spaces efficiently. Its durable polypropylene plastic body ensures long-lasting performance and easy maintenance. With powerful cooling capabilities and energy efficiency, the AIROSTA ECO is an excellent choice for various commercial and industrial environments, including warehouses, factories, offices, and restaurants. Its robust construction and user-friendly features make it ideal for maintaining optimal comfort in large areas.
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
  <div className="rounded-lg relative py-7 overflow-x-auto  w-full xl:w-full  max-w-[85rem] ">
    <table className="text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">
      <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
        <tr className=" text-center">
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Air Volume</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Air Discharge</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Motor Power</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Power Supply</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Wind Pressure</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Outlet Size</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Filter</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Pad Surface Area</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Noise</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Tank Capacity</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Water Pump Power</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Cooling Effect</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Water Inlet</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Fan Type</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Weight</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Dimension (LxWxH)</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">CELdek Pad</th>
          <th scope="col" className="py-1 px-1 text-[10px]">Body Material</th>
        </tr>
      </thead>
      <tbody>
        {AIROSTA_ECO.map((product, index) => (
          <tr key={index} className="bg-white text-center border-b border-gray-300">
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.airVolume}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.airDischarge}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.motorPower}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.powerSupply}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.windPressure}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.outletSize}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.filter}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.padSurfaceArea}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.noise}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.tankCapacity}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.waterPumpPower}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.coolingEffect}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.waterInlet}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.fanType}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.weight}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.dimensions}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.celdekPad}</td>
            <td className="px-1 py-1 text-[12px]">{product.bodyMaterial}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


<div className="row">
<div className=" h-full flex flex-col-reverse  md:flex-row text-center p-5 bg-[#F4F4F4] m-4">


<div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">

        <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block">
        AIROSTA PLUS
        </h2>
        <p className="text-justify md:text-center">
        Introducing the AIROSTA PLUS, a powerful ducted air cooler specifically designed to keep large spaces comfortably cool. Its sturdy construction combines galvanized iron with high-quality stainless steel (SS 304) for the tank, ensuring durability and easy maintenance. Experience exceptional cooling performance and energy efficiency, making the AIROSTA PLUS an excellent choice for various commercial and industrial applications. With its outstanding capabilities, it is the ideal solution for creating a pleasant environment in large areas.
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
                    alt="DUCTED   AIR COOLER "
                    src="/ac2.webp"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h2 className="font-dmserif text-3xl font-bold text-white">AIROSTA PLUS</h2>
                <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Invest in the AIROSTA PLUS, the ducted air cooler that combines performance with practicality. Its robust construction and stainless steel tank make it a low-maintenance solution for large spaces.  </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>

    


    </div>

    <p className=" w-full text-center  text-2xl font-sans"> TECHNICAL SPECIFICATION</p>
    <div className="flex justify-center">
  <div className="rounded-lg relative py-7 overflow-x-auto  w-full xl:w-full  max-w-[85rem] ">
    <table className="text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">
      <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
        <tr className=" text-center">
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Air Volume</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Air Discharge</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Motor Power</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Power Supply</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Wind Pressure</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Outlet Size</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Filter</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Pad Surface Area</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Noise</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Tank Capacity</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Water Pump Power</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Cooling Effect</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Water Inlet</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Fan Type</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Weight</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Dimension (LxWxH)</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">CELdek Pad</th>
          <th scope="col" className="py-1 px-1 text-[10px]">Body Material</th>
        </tr>
      </thead>
      <tbody>
        {AIROSTA_PLUS.map((product, index) => (
          <tr key={index} className="bg-white text-center border-b border-gray-300">
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.airVolume}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.airDischarge}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.motorPower}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.powerSupply}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.windPressure}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.outletSize}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.filter}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.padSurfaceArea}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.noise}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.tankCapacity}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.waterPumpPower}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.coolingEffect}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.waterInlet}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.fanType}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.weight}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.dimensions}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.celdekPad}</td>
            <td className="px-1 py-1 text-[12px]">{product.bodyMaterial}</td>
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
                    alt="DUCTED   AIR COOLER "
                    src="/ac3.webp"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h2 className="font-dmserif text-3xl font-bold text-white">CYCLON</h2>
                <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Built to last, the CYCLONE is crafted from durable stainless steel (SS 304) for long-lasting performance and minimal maintenance.   </p>
             
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">

        <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block">
        CYCLON
        </h2>
        <p className="text-justify md:text-center">
        Experience unmatched cooling with the CYCLON, a high-performance ducted air cooler designed to cool large spaces efficiently. Made from durable stainless steel (SS 304), this unit ensures long-lasting performance and easy maintenance. With its powerful cooling capabilities and energy-efficient design, the CYCLON is the ideal solution for various commercial and industrial environments. Choose the CYCLON for an exceptional combination of reliability and efficiency, providing optimal comfort even in the largest areas.
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
  <div className="rounded-lg relative py-7 overflow-x-auto  w-full xl:w-full  max-w-[85rem] ">
    <table className="text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">
      <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
        <tr className=" text-center">
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Air Volume</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Air Discharge</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Motor Power</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Power Supply</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Wind Pressure</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Outlet Size</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Filter</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Pad Surface Area</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Noise</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Tank Capacity</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Water Pump Power</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Cooling Effect</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Water Inlet</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Fan Type</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Weight</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Dimension (LxWxH)</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">CELdek Pad</th>
          <th scope="col" className="py-1 px-1 text-[10px]">Body Material</th>
        </tr>
      </thead>
      <tbody>
        {CYCLON.map((product, index) => (
          <tr key={index} className="bg-white text-center border-b border-gray-300">
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.airVolume}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.airDischarge}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.motorPower}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.powerSupply}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.windPressure}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.outletSize}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.filter}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.padSurfaceArea}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.noise}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.tankCapacity}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.waterPumpPower}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.coolingEffect}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.waterInlet}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.fanType}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.weight}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.dimensions}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.celdekPad}</td>
            <td className="px-1 py-1 text-[12px]">{product.bodyMaterial}</td>
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
        CYCLON PLUS
        </h2>
        <p className="text-justify md:text-center">
        Introducing the CYCLON PLUS—your ultimate solution for cooling large spaces with unmatched efficiency. Crafted from rugged stainless steel (SS 304), it promises exceptional durability and effortless maintenance. With its powerful cooling capabilities and superior energy efficiency, complemented by a larger tank size, the CYCLON PLUS dominates the commercial and industrial markets. Experience unparalleled comfort and reliability in large industrial areas. Choose the CYCLON PLUS for an unparalleled cooling experience that stands above the rest!
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
                    alt="DUCTED   AIR COOLER "
                    src="/ac4.webp"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h2 className="font-dmserif text-3xl font-bold text-white">CYCLON PLUS</h2>
                <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Transform your cooling experience with CYCLONE PLUS! Enjoy powerful cooling, enhanced energy efficiency, and a larger tank that ensures optimal comfort and productivity.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>

    


    </div>
    <p className=" w-full text-center  text-2xl font-sans"> TECHNICAL SPECIFICATION</p>
    <div className="flex justify-center">
  <div className="rounded-lg py-7 relative overflow-x-auto  w-full xl:w-full  max-w-[85rem] ">
    <table className="text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">
      <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
        <tr className=" text-center">
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Air Volume</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Air Discharge</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Motor Power</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Power Supply</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Wind Pressure</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Outlet Size</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Filter</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Pad Surface Area</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Noise</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Tank Capacity</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Water Pump Power</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Cooling Effect</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Water Inlet</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Fan Type</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Weight</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">Dimension (LxWxH)</th>
          <th scope="col" className="py-1 px-1 text-[10px] border-r border-gray-100">CELdek Pad</th>
          <th scope="col" className="py-1 px-1 text-[10px]">Body Material</th>
        </tr>
      </thead>
      <tbody>
        {CYCLON_PLUS.map((product, index) => (
          <tr key={index} className="bg-white text-center border-b border-gray-300">
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.airVolume}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.airDischarge}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.motorPower}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.powerSupply}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.windPressure}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.outletSize}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.filter}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.padSurfaceArea}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.noise}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.tankCapacity}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.waterPumpPower}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.coolingEffect}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.waterInlet}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.fanType}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.weight}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.dimensions}</td>
            <td className="px-1 py-1 text-[12px] border-r border-gray-300">{product.celdekPad}</td>
            <td className="px-1 py-1 text-[12px]">{product.bodyMaterial}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

</div>
</div>








<div className="row">



     


<div className="row">
  <div className="container">

  </div>
</div>


<div className="row  p-5 justify-center  flex-col flex items-center "  style={{ backgroundImage: "url('/lcbg.png')" }} >
<p className=" w-fit text-center px-5 py-4  bg-[#1D4355] text-white relative  top-10 rounded-full ">Air Cooling in Industrial Space with Ducted Air Cooler</p>

<div className=" h-full w-fit flex justify-center items-center flex-col md:flex-row text-center p-5  bg-[#FCFCFC] m-4 rounded-xl">

<div className="md:w-[50%] w-auto h-full p-2 m-2 md:p-5 md:m-5  ">

       

        <p className=" text-[20px] font-sans font-thin  text-left">  <span className=" ">  Outdoor Air Intake:</span>     The ducted air cooler  draws in warm,  dry air from outside the industrial space.
      
</p>

        <p className=" text-[20px] font-sans font-thin  text-left">  <span className=" "> Evaporative Cooling Process:</span> This hot air passes through wetted pads inside the cooler. As the air moves through the pads, water evaporates into the air stream, absorbing heat in the process. This cool, moist air is then distributed throughout the industrial space via ducts.
</p>
        <p className=" text-[20px] font-sans font-thin  text-left">  <span>Temperature Reduction:</span>  The cooler lowers the temperature of the air by several degrees Celsius, depending on the outdoor humidity. This cool air helps to improve worker comfort and productivity in hot environments.
</p>
      
     
        <div className="show_m mt-5">
      



        </div>
      </div>

<div className="md:w-[40%] w-auto">
        <div className="flex items-center w-full justify-center h-full">
          <div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden  rounded-xl">
              <div className="w-auto">
                <div className="w-full object-cover  rounded-xl">
                  <img
                    className=" "
                    fetchPriority="high"
                    decoding="async"
                    alt=""
                    src="/is.png"
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






<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

  <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center pb-16">


    <div>
      <p className="mt-3 text-3xl font-sans font-bold text-gray-800 dark:text-neutral-400">FAQs
      </p>
      {/* <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">We have 19+ years of Professional Experience</h1> */}
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
                  <a
  href="tel:+919870248420"
  onClick={(e) => {
    e.preventDefault(); // Prevent default navigation
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




      <img className=" rounded-md" src="/dacth.webp" alt="Hero Image" />
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
              
      
                <iframe className="responsive-iframe" width="860" height="515" src="https://www.youtube.com/embed/NRKxjM4SW7I?si=VRKaD5km3jKjQkfd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

              </div>
              {/*footer*/}

            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black">

        </div>
      </>
    ) : null}


  </div>

</div>

</div>


<div className="row">

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


      <table className="md:w-[50%] text-sm text-center text-gray-500 ">
        <thead className="text-xs  text-gray-700 uppercase bg-gray-50 ">
        
        </thead>
        <tbody>
          <tr className="bg-white text-[15px] flex  justify-center flex-col md:flex-row">
          
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




      </div>

</div>
    </>
  )
}
