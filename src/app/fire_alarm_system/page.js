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
      description: "Wide range of products (Double Skin Comfort & Clean Room Fire Alarm System) Starts from capacity 500CFM to 50000 CFM.",
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
          <p className=" w-full text-center font-sans  text-5xl  text-sky-700 uppercase"> Fire Alarm System </p>

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
                          alt="Fire Alarm System"
                          src=" https://media.istockphoto.com/id/935712068/photo/fire-security-equipment-and-blueprint-on-a-table-good-for-security-servise-engeniering-company.jpg?s=612x612&w=0&k=20&c=1gI3Fsg8aLKxAGjAxhQpKA1g2tDIb_ye3awHgb8wVQM= "
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">  Fire Alarm System  </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  text-justify">
              <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block"> Fire Alarm System</h2>
              <p className="text-justify  py-2">
              A fire alarm system is an essential safety mechanism
designed to detect smoke, heat, or fire and alert
occupants of a building, allowing for timely evacuation
and response. These systems play a critical role in
protecting lives and property by providing early
warning in the event of a fire. They allow occupants to
evacuate safely and enable a quick response from
emergency services. With components like detectors,
control panels, and alarm notification devices working
together, fire alarm systems enhance overall safety
and compliance with fire safety regulations.
              </p>
              <div className="card">
              <p className=" text-4xl pt-2  text-left "> Types of Fire Alarm Systems</p>
                <ul className=" list-disc py-3 space-y-1  ps-4">


                  <li>
                 <span className=" font-sans font-bold"> 
                 
                 Conventional Systems:
                  
                   </span>  
                 
                  These systems divide the
building into zones, allowing for the
identification of the area where the alarm was
triggered. They are suitable for smaller buildings.


                  </li>

               
                  <li>
                 <span className=" font-sans font-bold"> 
                 
                 Addressable Systems:
                  
                   </span>  
                 
                   Each detector has a
unique address, enabling precise identification
of the specific unit that triggered the alarm. This
allows for faster response and troubleshooting.


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


          <div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4 items-center">



            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  text-justify">
              <h2 className="text-[6vw] md:text-4xl mb-3    text-left"> Key Components </h2>
        
             
              






              <div className="card">
           
                <ul className=" list-disc py-3 space-y-1  ps-4">


                  <li>

                 <span className=" font-sans font-bold">
                    
                 Control Panel:
                   </span> 
                    The central unit that receives signals from
detectors and initiates alarms. It monitors the system's status
and can communicate with other safety systems.


                  </li>

            
                  <li>

                 <span className=" font-sans font-bold">
                    
                 Detectors:
                   </span> 

                  Devices that sense the presence of fire or smoke.
Common types include:


                  </li>

            
                  <li>

                 <span className=" font-sans font-bold">
                    
                 Smoke Detectors:
                   </span> 

                  Use ionization or photoelectric technology
                   to detect smoke particles.


                  </li>

                  <li>

                 <span className=" font-sans font-bold">
                    
                 Heat Detectors:
                   </span> 

          Trigger alarms based on temperature changes
or specific heat thresholds.

                  </li>

                  <li>

                 <span className=" font-sans font-bold">
                    
                 Multi-Sensor Detectors:
                   </span> 

          Combine smoke and heat detection
for enhanced accuracy.

                  </li>

                  <li>

                 <span className=" font-sans font-bold">
                    
                 Alarm Notification Devices: 
                   </span> 

      These devices alert occupants
when a fire is detected. They can include:

                  </li>

                  <li>

                 <span className=" font-sans font-bold">
                    
                 Audible Alarms: 
                   </span> 

     Sirens or horns that produce loud sounds to
alert people.

                  </li>
                  <li>

                 <span className=" font-sans font-bold">
                    
                 Visual Alarms:
                   </span> 

                    Strobe lights or flashing signals for those with
                   hearing impairments.

                  </li>
                  <li>

                 <span className=" font-sans font-bold">
                    
                 Manual Pull Stations:
                   </span> 

                 Located throughout the building, these
allow occupants to manually trigger the alarm system in case
of fire.

                  </li>
                  <li>

                 <span className=" font-sans font-bold">
                    
                 Control Modules:
                   </span> 

                  Facilitate communication between various
components of the fire alarm system, such as integrating with
fire suppression systems or emergency lighting.

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
                          className="  h-[28rem]  object-center object-cover  "
                          fetchPriority="high"
                          decoding="async"
                          alt="Fire Alarm System"
                          src="https://media.istockphoto.com/id/1165656389/photo/detector-on-ceiling.jpg?s=612x612&w=0&k=20&c=M5kL8whMCn2Muk60qVP4Bxb6Vbn0QkqNboAKOVADqjs="
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">  Fire Alarm System  </h2>
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
                          alt="Fire Alarm System"
                          src=" https://media.istockphoto.com/id/1340874584/photo/smoke-detector-and-interlinked-fire-alarm-in-action-background.jpg?s=612x612&w=0&k=20&c=UOkGMd1E1ODLG2sZffU0fzo9wBE6jgl4HqvJ0OeUPWQ= "
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">  Fire Alarm System  </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  text-justify">
              <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block"> Importance of Fire Alarm Systems</h2>
            
            






              <div className="card">
           

                <ul className=" list-disc py-3 space-y-1  ps-4">

                  <li>
                 <span className=" font-sans font-bold">
                 Early Detection:
                  </span>

                   Fire alarm systems provide critical
early warnings, significantly increasing the chances
of safe evacuation.


                  </li>


                  <li>
                 <span className=" font-sans font-bold">
                 Life Safety:
                  </span>
                 By alerting occupants quickly, these
systems help save lives and reduce the risk of
injuries during a fire.

                  </li>
                  <li>
                 <span className=" font-sans font-bold">
              
                 Property Protection:
                  </span>
 Early detection allows for
quicker response from emergency services,
minimizing property damage and losses.


                  </li>
                  <li>
                 <span className=" font-sans font-bold">
                 Insurance Advantages:
                  </span>

           
               Buildings equipped with
effective fire alarm systems may qualify for lower
insurance premiums due to reduced risk.


                  </li>
                  <li>
                 <span className=" font-sans font-bold">
                 Compliance:
                  </span>

           
                  Many jurisdictions require fire alarm
systems in commercial and public buildings,
ensuring adherence to safety regulations.


                  </li>

         
            

                
                </ul>
              </div>


             
             


           

          







           
            </div>



          </div>









        </div>



        <div className="row">


<div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4 items-center">



  <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  text-justify">
    <h2 className="text-[6vw] md:text-4xl mb-3    text-left"> Maintenance and Inspection </h2>

   
    

<p>Regular maintenance and inspection are essential for the
reliability and effectiveness of fire alarm systems. Key
practices include:</p>




    <div className="card">
 
      <ul className=" list-disc py-3 space-y-1  ps-4">


        <li>

       <span className=" font-sans font-bold">
          
       Routine Inspections: 
         </span> 
        Conduct thorough checks at
least annually to ensure all components are
functioning correctly.


        </li>

  
        <li>

       <span className=" font-sans font-bold">
          
       Testing Detectors:
         </span> 
         Regularly test smoke and heat
detectors to confirm they activate and respond
appropriately.


        </li>

  
        <li>

       <span className=" font-sans font-bold">
          
       Battery Replacement:
         </span> 

         Ensure that backup batteries
are replaced regularly, especially in battery-operated
units.

        </li>

        <li>

       <span className=" font-sans font-bold">
          
       Documentation: 
         </span> 

      Keep accurate records of
inspections, tests, and maintenance to demonstrate
compliance with safety regulations.

        </li>

    

  
      
  
      
      </ul>
    </div>

    <p className="space-y-1  ps-4">A fire alarm system is a vital element of any
comprehensive fire safety strategy, providing early
warning and facilitating safe evacuation during
emergencies. Understanding the components, types,
benefits, and maintenance requirements of these
systems is crucial for effective fire protection. </p>
 







 
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
                alt="Fire Alarm System"
                src="https://media.istockphoto.com/id/625855274/video/smoke-detector.jpg?s=640x640&k=20&c=4ktwn1wlZ-6HvNGftLD-JLv1t2jeXrHfmGOdBZlnq3c="
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h2 className="font-dmserif text-3xl font-bold text-white">  Fire Alarm System  </h2>
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
