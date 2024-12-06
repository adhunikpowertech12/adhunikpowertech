"use client";

import React from "react";
import { FaPlay } from "react-icons/fa";
export default function DuctedAirCooler() {
  
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

      const comparisonData = [
        { cooler: "Evaporative Cooling (Water evaporation)", ac: "Refrigerant Cycle", image: "100.png" },
        { cooler: "Very High (Uses less electricity)", ac: "Lower (Uses more electricity)", image: "102.png" },
        { cooler: "Low", ac: "Higher", image: "104.png" },
        { cooler: "Limited (15-18°C below outdoor temp)", ac: "Precise (Can cool to much lower temperatures)", image: "106.png" },
        { cooler: "Works best in dry climates", ac: "Less effective in humid climates", image: "108.png" },
        { cooler: "Introduces fresh, cool air", ac: "Recirculates existing air", image: "110.png" },
        { cooler: "Maintains natural humidity", ac: "Can dry out the air", image: "112.png" },
        { cooler: "Relatively simple", ac: "More complex", image: "114.png" },
      ];

      const comparisonData1 = [

        { cooler: "Capacity ", dc: "40,000 CMH" , ac:"8.5 TR",  image: "100.png" ,aw:"40,000 CMH", },
        { cooler: "Power", dc: "4KW", image: "102.png" ,ac:"9.4KW",aw:"7.5KW", },
        { cooler: "Covered Area", dc: "1", image: "104.png" ,ac:"3500Sqft",aw:"3500Sqft", },
        { cooler: "No of Machines Required", dc: "4KW", image: "106.png",ac:"3",aw:"1", },
        { cooler: "Total kw", dc: "9600", image: "108.png",ac:"28.2KW",aw:"7.5KW", },
        { cooler: <>Electricity unit consumption <br /> per year (10hr ,240 days)</>, dc: "96,000", image: "110.png",ac:"67680",aw:"18000", },
        { cooler: <>Running cost per year <br /> ( ₹10.00 per unit )</>, dc: "14.18%", image: "112.png",ac:"6,76,800",aw:"1,80,000", },
        { cooler: <>
          %Running cost with Reference <br /> to Refrigerative Aircon
        </>, dc: "3500Sqft", image: "114.png",ac:"100%",aw:"26.5%", },

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
                    className="  h-[28rem]  object-center object-fill "
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
                Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                </p>
              
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
<div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">


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
                    className=" h-96"
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
                Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                </p>
              
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
                    className=" h-96"
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
                Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                </p>
             
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
<div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">


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
                    className=" h-96"
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
                Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
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

        <p className="text-sm font-sans text-center font-thin  mb-3 ">
        Outdoor Air Intake: The ducted air cooler  draws in warm, <br /> dry air from outside the industrial space.
        </p>
        <p className=" text-[20px] font-sans font-thin ">  <span className=" "> Evaporative Cooling Process:</span> This hot air passes through wetted pads inside the cooler. As the air moves through the pads, water evaporates into the air stream, absorbing heat in the process. This cool, moist air is then distributed throughout the industrial space via ducts.
</p>
        <p className=" text-[20px] font-sans font-thin ">  <span>Temperature Reduction:</span>  The cooler lowers the temperature of the air by several degrees Celsius, depending on the outdoor humidity. This cool air helps to improve worker comfort and productivity in hot environments.
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


      {/* <div className="absolute bottom-0 start-0">
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
      </div> */}

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
              
                <iframe className="responsive-iframe" width="860" height="515" src="https://www.youtube.com/embed/zCH3jHqXoSo?si=AdmiMjEtClY5y6R9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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




      </div>

</div>




        </>

    )
}
