"use client";


export default function DuctedAirCooler() {





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


  const features = [
    {
      id: 1,
      description: "Wide range of products (Double Skin Comfort & Clean Room Fire Tubing System) Starts from capacity 500CFM to 50000 CFM.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 2,
      description: " MS powder coated body and SS-304 also available as per requirement.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 3,
      description: "⁠All Spare parts have rust free anti corrosion coating. ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 4,
      description: " Maximum energy efficiency and indoor air quality. ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

  ];


  const features2 = [
    {
      id: 1,
      description: " Ideal For: Class A extinguishers are best for use in areas with materials that can easily ignite and burn, such as offices, homes, and schools. ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      id: 2,
      description: " Not Suitable For: They should not be used on fires involving flammable liquids (Class B), electrical fires (Class C), or reactive metals (Class D), as water can spread the fire or cause dangerous reactions. ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },



  ];


  return (


    <>

      <div className="row mt-32 font-sans">


        <div className="row">
          <p className=" w-full text-center font-sans  text-5xl  text-sky-700 uppercase"> Fire Tubing System </p>

          <div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">

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
                          alt="Fire Tubing System"
                       src="/ft.jpg"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-2xl font-bold text-white">  Fire Tubing System  </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  text-justify">
              <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block"> Fire Tubing System </h2>
              <p className="text-justify  py-2">
              A fire tubing system is a crucial component of fire protection engineering, designed to control and
extinguish fires in various settings. These systems utilize specialized tubing filled with water or other
extinguishing agents, activated by heat from a fire. Designed to supply water to combat fires
effectively. These systems are commonly found in commercial, industrial, and residential settings,
providing a reliable means to extinguish flames and prevent the spread of fire
              </p>


              <div className="card">
              <p className=" text-4xl pt-2  text-left "> Key Components of a Fire Tubing System</p>
                <ul className=" list-disc py-3 space-y-1  ps-4">


                  <li>
                 <span className=" font-sans font-bold">   
                 Glow signage:                
                   </span>  
                 
                   refers to illuminated signs that use photoluminescent materials or
integrated lighting to enhance visibility, especially in low-light or emergency
situations.

                  </li>

                  <li>
                 <span className=" font-sans font-bold">   
                 Fire Hoses:         
                   </span>  
                 
                  High-quality hoses that can withstand high pressure and are resistant to abrasion and chemicals.
                   They come in various lengths and diameters, tailored to the specific needs of a facility.

                  </li>

                 
                  <li>
                 <span className=" font-sans font-bold">   
                 Hose Reels:        
                   </span>  
                 
            These are wall-mounted devices that store hoses in a ready-to-use manner. They ensure that hoses
are accessible and can be deployed quickly during emergencies.

                  </li>

                 
                  <li>
                 <span className=" font-sans font-bold">   
                 Water Supply:      
                   </span>  
                 
                  A consistent and adequate water supply is essential. This can come from municipal water
sources, dedicated tanks, or fire pumps designed to maintain pressure and flow during emergencies.

                  </li>

                 
                  <li>
                 <span className=" font-sans font-bold">   
                 Valves and Connectors:     
                   </span>  
                 
                  Essential for controlling water flow, these components connect hoses and ensure that
the system operates safely and efficiently.

                  </li>

                 
                  <li>
                 <span className=" font-sans font-bold">   
                 Nozzles:    
                   </span>  
                 
   
 Attached to the end of hoses, nozzles control the spray pattern and flow rate of water, allowing for
targeted fire suppression.
                  </li>

                 
                  <li>
                 <span className=" font-sans font-bold">   
                 Control Panels:  
                   </span>  
                 
   

                   In more advanced systems, control panels monitor pressure, flow rates, and system integrity,
providing real-time data and alerts.
                  </li>

                 




                  
                


                </ul>
              </div>

          


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









        </div>

     
        <div className="row">


          <div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4 items-center">



            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  text-justify">
              <h2 className="text-[6vw] md:text-4xl mb-3    text-left"> Advantages of Fire Tubing Systems</h2>
        
             
              
           





              <div className="card">

            
                <ul className=" list-disc py-3 space-y-1  ps-4">

               
                  <li>

                 <span className=" font-sans font-bold">
                    
                 Immediate Fire Response:
                   </span> 
                   Fire tubing systems allow for quick access to water, enabling personnel to tackle small
                   fires before they escalate.


                  </li>
            

               
                  <li>

                 <span className=" font-sans font-bold">
                    
                 Accessibility: 
                   </span> 
                  Properly placed hose reels and access points ensure that individuals can reach firefighting
                   equipment swiftly, reducing response times.

                  </li>
            
                  <li>

                 <span className=" font-sans font-bold">
                    
                 Cost Efficiency:  
                   </span> 
               Investing in a fire tubing system can mitigate the financial impact of fire damage by controlling
                   flames early and effectively.
                  </li>
            
                  <li>

                 <span className=" font-sans font-bold">
                    
                 Regulatory Compliance:  
                   </span> 
                   Many jurisdictions require fire protection systems in buildings, making fire tubing
systems not only a safety measure but a legal necessity.

                  </li>
            

               

              
                
            
                
                </ul>
              </div>


           
              <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block"> Conclusion </h2>
              <p className="text-justify  py-2">
              A fire tubing system is an integral part of any comprehensive fire safety strategy. By ensuring a reliable water
supply and facilitating quick response in emergencies, these systems significantly enhance the safety of occupants
and property. Regular maintenance, adherence to safety regulations, and effective training are essential to
maximize the benefits of fire tubing systems in safeguarding lives and assets.

              </p>
           







           
            </div>


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
                          alt="Fire Tubing System"
                          src=" ft2.jpg "
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-2xl font-bold text-white">  Fire Tubing System  </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                      </p>

                    </div>
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
