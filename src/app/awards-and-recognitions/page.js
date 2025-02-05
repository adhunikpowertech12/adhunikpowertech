
import Link from 'next/link';
import React from 'react'

export default function page() {

  const products = [

    {
      src: "/certi/award1.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
    {
      src: "/certi/award2.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
    {
      src: "/certi/award3.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
    {
      src: "/certi/award4.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
    {
      src: "/certi/award5.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },

  

  ];


  return (
    <>


      <div className="row   mt-36">

        <p className=" text-5xl  font-sans py-3 w-full text-center text-cyan-900 capitalize ">Awards and Recognitions</p>


        <div className="col">


          <div className="  justify-center   ">


            <div className="row">


              <div className="col py-4">


                <div className="items-center justify-center h-full">
                  <div className="flex-row flex flex-wrap justify-center items-center gap-5 pb-10">

                    {products.map((item, index) => (
                      <div key={index} className=" md:w-[25%] w-80 p-5">
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-xl">
                          <div className="w-auto">
                            <div className={`w-full rounded-xl  bg-white  `}>
                              <img
                                className={`  h-auto border-[1px]  ${item.borderColor} p-2 w-auto mx-auto object-center object-cover transition-transform duration-500 group-hover:scale-90 
                           rounded-lg  `} // Dynamic border color
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

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}





