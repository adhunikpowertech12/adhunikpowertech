
import Link from 'next/link';
import React from 'react'

export default function page() {

  const products = [
     {
      src: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1748602146/A_R_1_rjplf1.webp",
      alt: "AWARDED AS INDIA BUSINESS AWARD 2025",
      borderColor: "border-yellow-500", 
    },

    {
      src: "/certi/award1.webp",
      alt: "AWARDED AS MOST INNOVATIVE BRAND FOR HVAC PROJECTS 2024-25",
      borderColor: "border-yellow-500", 
    }
    ,
      
    {
      src: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1748602146/A_R__2_qup0rl.webp",
      alt: "AWARDED AS NATIONAL GROWTH PARTNER AWARD",
      borderColor: "border-yellow-500", 
    },

    {
      src: "/certi/award2.webp",
      alt: "AWARDED FOR PARTICIPATION GURUGRAM INDUSTRIAL EXPO 2023",
      borderColor: "border-yellow-500", 
    }
    ,

    {
      src: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1748602146/A_R_3_fkcvcv.webp",
      alt: " AWARDED FOR BEST QUALITY STANDARDS & SERVICES IN HVAC INDUSTRY",
      borderColor: "border-yellow-500", 
    },

  
  
    
    {
      src: "/certi/award3.webp",
      alt: "RECOGNIZED BY NATIONAL TRADE & INDUSTRY COUNCIL",
      borderColor: "border-yellow-500", 
    }
    ,
    {
      src: "/certi/award4.webp",
      alt: "AWARDED FOR PARTICIPATION SUSTAINABLE HVAC AND ARCHITECTURE",
      borderColor: "border-yellow-500", 
    }
    ,
    {
      src: "/certi/award5.webp",
      alt: "CERTIFICATE OF APPRECIATION MOST INNOVATIVE BRAND FOR HVAC PROJECTS 2024-25",
      borderColor: "border-yellow-500", 
    },
    {
      src: "/certi/award6.webp",
      alt: "AWARDED FOR OVERALL PERFORMANCE IN 2023",
      borderColor: "border-yellow-500", 
    },

  
   



  

  

  ];


  return (
    <>


      <div className="row   mt-36">

        <h1 className=" text-5xl  font-sans py-3 w-full text-center text-cyan-900 capitalize ">Awards and Recognitions</h1>

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
                                className={`h-auto border-[1px]  ${item.borderColor} p-2 w-auto mx-auto object-center object-cover transition-transform duration-500 group-hover:scale-90 
                           rounded-lg`} 
                                src={item.src}
                                fetchPriority="high"
                                loading="lazy"
                                 height={300}
                  width={500}
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





