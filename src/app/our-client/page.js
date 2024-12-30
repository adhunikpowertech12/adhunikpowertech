
import Link from 'next/link';
import React from 'react'

export default function page() {

  const products = [
    {
      src: "/projects/clients/1.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/2.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/3.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/4.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
   
   
   
   

   
    {
      src: "/projects/clients/8.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/9.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/10.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/11.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/12.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/13.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/14.png",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/15.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/16.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/17.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/18.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/19.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/20.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
  
   
    {
      src: "/projects/clients/22.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
  
   
    {
      src: "/projects/clients/23.png",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
   
    {
      src: "/projects/clients/24.png",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/24.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/26.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "/projects/clients/27.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    { src: "/projects/clients/28.webp", alt: "Air Purifiers", borderColor: "border-blue-500" },
    { src: "/projects/clients/29.webp", alt: "Air Conditioners", borderColor: "border-green-500" },
    { src: "/projects/clients/30.webp", alt: "HVAC Solutions", borderColor: "border-red-500" },

    { src: "/projects/clients/33.webp", alt: "Smart Climate Control", borderColor: "border-pink-500" },
    { src: "/projects/clients/34.webp", alt: "Eco-friendly Air Conditioning", borderColor: "border-orange-500" },
    { src: "/projects/clients/35.webp", alt: "Climate Solutions", borderColor: "border-cyan-500" },
    { src: "/projects/clients/36.webp", alt: "Ventilation Systems", borderColor: "border-teal-500" },
    { src: "/projects/clients/37.webp", alt: "Energy-efficient Coolers", borderColor: "border-yellow-500" },
    { src: "/projects/clients/38.webp", alt: "Heat Recovery Systems", borderColor: "border-blue-500" },
    { src: "/projects/clients/39.webp", alt: "Airflow Systems", borderColor: "border-green-500" },
    { src: "/projects/clients/40.webp", alt: "Airflow Efficiency", borderColor: "border-red-500" },
    { src: "/projects/clients/41.webp", alt: "HVAC Installation", borderColor: "border-indigo-500" },
    { src: "/projects/clients/42.webp", alt: "Environmental Control", borderColor: "border-purple-500" },
    { src: "/projects/clients/43.webp", alt: "Thermal Comfort", borderColor: "border-pink-500" },
    { src: "/projects/clients/44.webp", alt: "Efficient Air Systems", borderColor: "border-orange-500" },
    { src: "/projects/clients/45.webp", alt: "Air Conditioning Units", borderColor: "border-cyan-500" },
    { src: "/projects/clients/46.webp", alt: "Home Cooling Solutions", borderColor: "border-teal-500" },
    { src: "/projects/clients/47.webp", alt: "Energy-saving Solutions", borderColor: "border-yellow-500" },
    { src: "/projects/clients/48.webp", alt: "Industrial Air Coolers", borderColor: "border-blue-500" },
    { src: "/projects/clients/49.webp", alt: "Smart Cooling Systems", borderColor: "border-green-500" },
    { src: "/projects/clients/50.webp", alt: "Climate Control Units", borderColor: "border-red-500" },
    { src: "/projects/clients/51.webp", alt: "Modern HVAC Systems", borderColor: "border-indigo-500" },
    {
      src: "/projects/clients/5.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
    {
      src: "/projects/clients/6.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
    {
      src: "/projects/clients/7.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
  
  ];
  

  
  return (
    <>
    

    <div className="row   mt-36">

<p className=" text-4xl md:text-5xl  font-sans py-3 w-full text-center text-cyan-900 capitalize "> SOME OF OUR PROJECT CLIENTS </p>


<div className="col">


  <div className="  justify-center   ">


    <div className="row">


      <div className="col py-4">


      <div className="items-center justify-center h-full">

      <div className="flex-row flex flex-wrap justify-center items-center gap-5 pb-10">

      {products.map((item, index) => (
        <div key={index} className="md:w-[15%]  ">

          <div className=" group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-xl">
            <div className="w-auto  items-center flex justify-center">
              <div className={`w-full rounded-xl  bg-white   ${item.borderColor}`}>
                <img
                  className={`h-[50%]  w-[80%] mx-auto object-center object-cover transition-transform duration-500 group-hover:scale-90  rounded-lg `} // Dynamic border color
                  src={item.src}
                  fetchPriority="high"
                  decoding="async"
                  alt={item.alt}
                />

              </div>
              <div className="text-center mt-3">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <a
                  href={item.link}
                  className="text-blue-500 hover:underline mt-1 inline-block"
                >
                  {item.linkText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      
      
    </div>
</div>
<p className=' text-center'>And Many More.</p>
      </div>

    </div>

  </div>

</div>

</div>
    </>
  )
}





