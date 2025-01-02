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
      description: "Wide range of products (Double Skin Comfort & Clean Room Fire suppression system) Starts from capacity 500CFM to 50000 CFM.",
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
          <p className=" w-full text-center font-sans text-4xl  md:text-5xl  text-sky-700 uppercase"> Fire suppression system </p>

          <div className=" h-full flex flex-col md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">

            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/10 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  md:h-[28rem]  object-center object-cover  "
                          fetchPriority="high"
                          decoding="async"
                          alt="Fire suppression system"
                          src=" https://media.istockphoto.com/id/1178819648/photo/automatic-gas-fire-extinguishing-system-safety-of-premises-from-conflagration-red-compressed.jpg?s=612x612&w=0&k=20&c=64d5ykqzttrQlXWdSVIyHsgzb_luXXlM0jgwLJ5qGbE="
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">  Fire suppression system  </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
              <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block"> Fire suppression system</h2>
              <p className="md:text-justify  py-2">
              A Fire suppression system is a critical safety  mechanism designed to control or extinguish fires in
various environments, protecting lives, property, and
assets. These systems utilize different methods and
agents to suppress flames, offering effective solutions
tailored to specific hazards and settings.
              </p>


              <h2 className="text-[6vw] md:text-4xl mb-3    text-left"> Key Components Fire suppression system </h2>
        
             
              






        <div className="card   text-left">
     
          <ul className=" list-disc py-3 space-y-1  ps-4">
            <li>

           <span className=" font-sans font-bold">
              
           Suppression Agent:
             </span> 
           The material used to extinguish
or control a fire. Common agents include water,
foam, dry chemicals, carbon dioxide (CO2), and
clean agents like FM-200 or Inergen.


            </li>
            <li>

           <span className=" font-sans font-bold">
              
           Delivery System:
             </span> 
         The network of pipes, nozzles, or
hoses through which the suppression agent is
distributed. This system can be activated manually
or automatically.

            </li>

            <li>

           <span className=" font-sans font-bold">
              
           Control Panel:
             </span> 
       The central unit that monitors and
manages the fire suppression system, including
alarms and notifications. It can integrate with other
fire safety systems.

            </li>

            <li>

           <span className=" font-sans font-bold">
              
           Detection System: 
             </span> 
   Devices such as smoke
detectors, heat detectors, or flame sensors that
trigger the suppression system when a fire is
detected.

            </li>
            <li>

           <span className=" font-sans font-bold">
              
           Nozzles and Discharge Devices:
             </span> 
            These components
disperse the suppression agent over the fire area.
Their design and placement are critical for effective
fire suppression.

            </li>
          
      
          
          </ul>
        </div>

          


              <div className="show_m mt-5">
                <button
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                  onClick={() => {
                    window.location.href = 'mailto:sales@adhunikpowertech.com?subject=Enquiry%20Now&body=Hello, I would like to enquire about your services.';
                  }}
                >
                  Enquiry Now
                </button>



              </div>
            </div>


          </div>









        </div>

     
        <div className="row">


          <div className=" h-full flex flex-col md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4 items-center">



            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
        


           
            <div className="card   text-left">
              <p className=" text-4xl pt-2  text-left "> Importance of Fire Suppression Systems</p>
                <ul className=" list-disc py-3 space-y-1  ps-4">


                  <li>
                 <span className=" font-sans font-bold"> 
                 
                 Life Safety:
                  
                   </span>  
                 
                 Quickly control or extinguish fires,
significantly increasing the chances of occupant
survival and evacuation.


                  </li>

                  <li>
                 <span className=" font-sans font-bold"> 
                 
                 Property Protection:
                  
                   </span>  
                 
               Minimize damage to buildings
and equipment, leading to reduced repair costs and
downtime.


                  </li>

                  <li>
                 <span className=" font-sans font-bold"> 
                 
                 Insurance Advantages:
                  
                   </span>  
                 
            Buildings with fire
suppression systems often qualify for lower
insurance premiums due to decreased fire risk.


                  </li>

                  <li>
                 <span className=" font-sans font-bold"> 
                 
                       
           Regulatory Compliance:
                   </span>  
           Many jurisdictions require
fire suppression systems in commercial and
industrial settings, ensuring adherence to safety
regulations.

                  </li>

                  
                


                </ul>
              </div>







           
            </div>


            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/10 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  md:h-[28rem]  object-center object-cover  "
                          fetchPriority="high"
                          decoding="async"
                          alt="Fire suppression system"
                          src="https://media.istockphoto.com/id/1320085951/photo/gas-extinguishing-modules.jpg?s=612x612&w=0&k=20&c=AB-l9BfGlXYfYNJSg4jq8_Lc1zX0TrYfVVgzuEAzt60="
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">  Fire suppression system  </h2>
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


        <div className="row">


          <div className=" h-full flex flex-col md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">


            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/10 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  md:h-[28rem]  object-center object-cover  "
                          fetchPriority="high"
                          decoding="async"
                          alt="Fire suppression system"
                          src=" https://media.istockphoto.com/id/1320085870/photo/gas-extinguishing-modules.jpg?s=612x612&w=0&k=20&c=Zx4iBzH7VIUYUItWnw2sv59d7AWUEbwZQ8LXc-ZY0T4="
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">  Fire suppression system  </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
              <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block"> Maintenance and Inspection</h2>
            
            






              <div className="card   text-left">
           

                <ul className=" list-disc py-3 space-y-1  ps-4">

                  <li>
                 <span className=" font-sans font-bold">
                 Routine Inspections: 
                  </span>

                 Conduct thorough checks
annually or bi-annually to ensure all components are
functioning correctly.


                  </li>


                  <li>
                 <span className=" font-sans font-bold">
              
                 Testing of Detection Devices:
                  </span>
 Regularly test
detectors and alarms to confirm they activate the
suppression system as intended.

                  </li>
                  <li>
                 <span className=" font-sans font-bold">
                 Agent Replacement:
                  </span>

                  Ensure that suppression agents
are replenished or replaced according to the
manufacturer’s guidelines.


                  </li>
                  <li>
                 <span className=" font-sans font-bold">
                 System Drills:
                  </span>

           
 Conduct training and drills to
familiarize staff with the system's operation and
emergency procedures.


                  </li>

         
            

                
                </ul>
              </div>


             
             
<p className="space-y-1  ps-4"> Fire suppression systems are an indispensable part of fire
safety, providing immediate response capabilities that
protect lives and property from the devastating effects of
fire. these systems can effectively control or extinguish
fires quickly, minimizing damage and enhancing safety.
Regular maintenance and inspections are crucial to
ensure their reliability and effectiveness. </p>

           

          







           
            </div>



          </div>









        </div>




  

      </div>




    </>

  )
}
