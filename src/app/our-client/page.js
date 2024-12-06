
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
      src: "/projects/clients/21.webp",
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
   
   
  
  ];
  

  
  return (
    <>
    

    <div className="row   mt-36">

<p className=" text-5xl  font-sans py-3 w-full text-center text-cyan-900 capitalize "> SOME OF OUR PROJECT CLIENTS </p>


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





