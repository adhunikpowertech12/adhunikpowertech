
import Link from 'next/link';
import React from 'react'

export default function page() {

  const products = [
    { src: "/productClients/1.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/2.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/3.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/4.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/5.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/6.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/7.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/8.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/9.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/10.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/11.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/12.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/13.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/14.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/15.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/16.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/17.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/18.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/19.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/20.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/21.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/22.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/23.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/24.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/25.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/26.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/27.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/28.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/29.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/30.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/31.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/32.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/33.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/34.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/35.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/36.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/37.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/38.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/39.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/40.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/41.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/42.jpg", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },


    
    { src: "/productClients/43.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/44.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/45.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/46.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/47.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/48.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/49.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/50.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/51.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/52.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/53.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/54.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/55.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/56.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/57.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/58.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/59.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/60.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/61.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/62.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/63.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/64.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/65.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
    { src: "/productClients/66.webp", alt: "Ducted Air Coolers", borderColor: "border-yellow-500" },
  ];
  
  
  return (
    <>
    

    <div className="row   mt-36">

<p className=" text-5xl  pt-10 font-sans py-3 w-full text-center text-cyan-900 capitalize "> SOME OF OUR PRODUCTS CLIENTS </p>


<div className="col">


  <div className="  justify-center   ">


    <div className="row">


      <div className="col py-4">


      <div className="items-center justify-center h-full">

      <div className="flex-row flex flex-wrap justify-center items-center gap-5 pt-5 pb-10">

      {products.map((item, index) => (
        <div key={index} className="md:w-[15%]  ">

          <div className=" group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-xl">
            <div className="w-auto  items-center flex justify-center">
              <div className={`w-full rounded-xl  bg-white   ${item.borderColor}`}>
                <img
                  className={`h-[50%] border w-[80%] mx-auto object-center object-cover transition-transform duration-500 group-hover:scale-90  rounded-lg `} // Dynamic border color
                  src={item.src}
                  fetchPriority="high"
                  decoding="async"
                  alt={item.alt}
                />

              </div>
          
            </div>
          </div>
        </div>
      ))}

      
      
    </div>

    <p className=' text-center'>And Many More.</p>
</div>

      </div>

    </div>

  </div>

</div>

</div>
    </>
  )
}





