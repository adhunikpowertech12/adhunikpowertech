"use client";

export default function AirHandling() {

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
      description: "Wide range of products (Double Skin Comfort & Clean Room Air Handling Unit) Starts from capacity 500CFM to 50000 CFM.",
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

 const energySystems = [

    {
      title: "Comfort Air Handling Units (Double Skin)",
      desc: (
        <>
         <ul className=" list-disc list-inside">
            <li>  
            Our Double Skin Comfort AHUs are the perfect solution for large commercial spaces where superior air quality and thermal comfort are paramount. The double-skin construction provides excellent thermal insulation and acoustic performance, ensuring quiet and efficient operation.
</li>
<span >
 <strong className=" text-cyan-500"> Ideal For :
</strong>
</span>

            <li> 
            Corporate Offices & Commercial Buildings
</li>
            <li> 
           Hotels, Malls & Multiplexes

</li>
<li>
  Hospitals & Educational Institutions

</li>
<li>
  Large-Scale Industrial Sheds

</li>

          

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
      title: "Hygienic / Cleanroom Air Handling Units",
      desc: (
        <>
         <ul className=" list-disc list-inside">
            <li> 
           For industries where air purity is non-negotiable, our Cleanroom AHUs are engineered to meet the strictest standards. Designed with smooth, non-porous surfaces and easy-to-clean interiors, these units are crucial for preventing microbial growth and ensuring a contaminant-free environment.

</li>
<span >
 <strong className=" text-cyan-500"> Ideal For :
</strong>
</span>

            <li> 
           Pharmaceutical & Biotechnology Labs

</li>
            <li> 
        Hospitals (Operating Theaters & ICUs)

</li>
<li>
 Electronics & Semiconductor Manufacturing

</li>
<li>
 Food & Beverage Processing Facilities

</li>

         </ul>


        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     

     
   
     
  ];
 const energySystems2 = [

    {
      title: "Wide Capacity Range",
      desc: (
        <>
         <ul className=" list-disc list-inside">

            <li>  
          We offer a full range of products, with capacities starting from 500 CFM to 50,000 CFM, ensuring a perfectly sized solution for any project.

</li>


         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
      title: " Robust Double Skin Construction",
      desc: (
        <>
         <ul className=" list-disc list-inside">

            <li>  
        Our units feature a double-skin panel design that minimizes heat loss, reduces operational noise, and enhances structural rigidity.


</li>


         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
      title: "High-Quality Materials",
      desc: (
        <>
         <ul className=" list-disc list-inside">

            <li>  
    We offer construction in both heavy-duty Powder Coated GI and corrosion-resistant Stainless Steel (SS-304) to suit your specific application.

</li>

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
      title: "Advanced Filtration",
      desc: (
        <>
         <ul className=" list-disc list-inside">

            <li>  
   Our AHUs can be configured with a multi-stage filtration system, including pre-filters, bag filters, and high-efficiency HEPA filters, to achieve the required level of air purity.

</li>

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
      title: "High-Efficiency Components",
      desc: (
        <>
         <ul className=" list-disc list-inside">

            <li>  
   We use high-quality, energy-efficient blowers, motors, and cooling coils to maximize performance and minimize operational costs.

</li>

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
      title: "Rust-Free & Anti-Corrosion Coating",
      desc: (
        <>
         <ul className=" list-disc list-inside">

            <li>  
   All spare parts are treated with a rust-free, anti-corrosion coating to ensure a long and trouble-free service life.

</li>

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     

     
  ];

  return (
    <>
      <div className="row mt-32 font-sans">


        <div className="row">
          <h1 className=" w-full text-center font-sans text-2xl     text-cyan-600 uppercase">Precision Air Handling Units : The Heart of Your HVAC System
 </h1>

          <div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">

            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="   h-full w-full  object-center object-contain "
                          fetchPriority="high"
                          loading="lazy"
                          decoding="async"
                          alt="Air Handling Unit"
                          src="/ahu2.jpeg"
                          
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <p className="font-dmserif text-3xl font-bold text-white">  Air Handling Unit  </p>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Experience the perfect blend of style and performance that elevates your environment. Contact us today for a free consultation and discover how to create a cooler, more comfortable space.  
                          </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">


              <h2 className=" text-cyan-700 md:text-xl text-center md:text-left mb-3 hidden md:block">
Precision Air Handling Units : The Heart of Your HVAC System
               </h2>

              <p className="text-justify text-sm  ">
              Experience Unparalleled Air Quality, Precise Temperature Control, and Exceptional Energy Efficiency with Adhunik Powertech’s Advanced Air Handling Units.
              </p>

              <h2 className="text-cyan-700 pt-2 text-center md:text-left md:text-xl mb-3 hidden md:block">
The Core of Your Building's Environment
               </h2>

              <p className="text-justify text-sm  ">
              The Air Handling Unit (AHU) is the central component of your HVAC system, acting as the "lungs" of your building. It is responsible for conditioning and circulating air, ensuring that every corner of your facility receives a consistent supply of clean, fresh, and temperature-controlled air. A high-quality, properly engineecyan AHU is fundamental to achieving superior indoor air quality (IAQ), thermal comfort, and energy efficiency.
<br />
Adhunik Powertech manufactures a wide range of robust and reliable AHUs, designed to meet the most demanding requirements of commercial, industrial, and specialized environments.

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


          <div className="bg-[#283e56] p-4 relative">

            <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
              <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
              <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
            </div>


            <div className="max-w-7xl mx-auto px-6 py-4 md:px-12 xl:px-6">
              <div className="md:w-2/3 lg:w-1/2 mt-2 text-gray-100 flex items-center">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-secondary"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                    clipRule="evenodd"
                  />
                </svg>
                <h2 className="text-2xl font-bold text-white md:text-4xl ps-3">Product Features</h2>
              </div>


              <div className="mt-5 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
                {features.map((feature) => (
                  <div key={feature.id} className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                    <div className="relative space-y-8 py-12 p-8">
                      <div className="space-y-2">
                        <ul className="list-none flex flex-row">
                          <div className="h-full  w-fit pe-3 text-[#eff0f4]">{feature.icon}</div>
                          <li className="text-[#F1F2FD] text-[14px]">{feature.description}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

<div className="mb-12 px-4 md:px-24 pt-24">
               <p className=" text-sm pb-4  text-cyan-900 ">
                    <strong className=" text-xl text-cyan-500 ">
                      {" "}
                   Our Air Handling Unit Portfolio: Solutions for Every Need

                    </strong> {" "} <br />
            We offer a comprehensive range of AHUs, including both Comfort AHUs for general applications and highly specialized Cleanroom AHUs for critical environments.

  </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {energySystems.map((system, index) => (
                    <div
                      key={index}
                      className="bg-white flex flex-col    items-start  md:text-left text-center p-5 rounded-lg border border-cyan-100 hover:border-cyan-300 transition-all shadow-sm hover:shadow-md"
                    >
                      <div className="row justify-center items-center flex flex-row gap-2 md:gap-4 ">
                        <div className=" bg-cyan-50 w-12 h-12 items-center rounded-full flex  justify-center mb-4">
                        
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-container-icon lucide-container"><path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"/><path d="M10 21.9V14L2.1 9.1"/><path d="m10 14 11.9-6.9"/><path d="M14 19.8v-8.1"/><path d="M18 17.5V9.4"/></svg>

                        </div>

                        <h2 className=" w-9/12 md:w-full font-bold text-cyan-700 text-sm text-left  md:text-lg mb-2">
                          {system.title}
                        </h2>
                      </div>

                      <div className=" text-justify text-sm text-gray-600">
                        {system.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>


<div className="mb-12 px-4 md:px-24 py-2">

               <p className=" text-sm pb-4  text-cyan-900 ">
                    <strong className=" text-xl text-cyan-500 ">
                      {" "}
                Engineered for Performance and Durability

                    </strong> {" "} <br />
        Every Adhunik Powertech AHU is built with a focus on quality, reliability, and long-term performance.

  </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {energySystems2.map((system, index) => (
                    <div
                      key={index}
                      className="bg-white flex flex-col    items-start  md:text-left text-center p-5 rounded-lg border border-cyan-100 hover:border-cyan-300 transition-all shadow-sm hover:shadow-md"
                    >
                      <div className="row justify-center items-center flex flex-row gap-2 md:gap-4 ">
                        <div className=" bg-cyan-50 w-12 h-12 items-center rounded-full flex  justify-center mb-4">
                        
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-container-icon lucide-container"><path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"/><path d="M10 21.9V14L2.1 9.1"/><path d="m10 14 11.9-6.9"/><path d="M14 19.8v-8.1"/><path d="M18 17.5V9.4"/></svg>

                        </div>

                        <h2 className=" w-9/12 md:w-full font-bold text-cyan-700 text-sm text-left  md:text-lg mb-2">
                          {system.title}
                        </h2>
                      </div>

                      <div className=" text-justify text-sm text-gray-600">
                        {system.desc}
                      </div>
                    </div>
                  ))}
                </div>

                    <p className=" text-center pt-7 text-sm pb-4  text-cyan-900 ">
                    <strong className=" text-xl text-cyan-500 ">
                      {" "}
               Let's Build the Heart of Your HVAC System

                    </strong> {" "} <br />
      Our team of technical experts is ready to help you select and configure the perfect Air Handling Unit for your specific needs.

  </p>
              </div>



        <div className="flex pt-5 justify-center items-center w-full h-full flex-row">

          <div className="w-[30%] h-px my-8 bg-gray-300 border-0" />


          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-gray-200 px-5 py-4 rounded-full bg-white text-3xl md:text-4xl font-sans font-bold capitalize text-center">
            APPLICATIONS
          </span>


          <div className="w-[30%] h-px my-8 bg-gray-300 border-0" />
        </div>


        <div className="row pb-16 flex justify-center items-center flex-col">
 
          <div className="row  w-full h-full">


            <div className="relative overflow-x-auto justify-center items-center flex font-sans font-thin">


              <table className="md:w-[50%] text-sm text-center text-gray-500 ">
                      <caption className="  uppercase text-base font-semibold text-gray-700 mb-2">
   Typical Applications of Our Air Handling Unit Solutions

  </caption>
                <thead className="text-xs  text-gray-700 uppercase bg-gray-50 ">

                </thead>
                <tbody>
                  <tr className="bg-white text-[15px] flex flex-col md:flex-row justify-center">
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
                      className=" w-32 h-32 md:w-48 md:h-48  object-center object-cover    rounded-full"
                      src={logo.src}
                      alt={logo.alt}
                       height="300"
                          width="300"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>

        </div>

  

      </div>

    </>
  )
}
