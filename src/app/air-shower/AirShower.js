"use client";

export default function AirShower() {



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
    "Pharmaceutical & Biotechnology",
    "Electronics & Semiconductor Manufacturing",
    "Hospitals & Healthcare (Operating Theaters, sterile labs)",
    "Warehouses",
    "Automotive Industry",
    "Banquet Halls",
    "Food Industry",
    "Medical / Healthcare",
    "Offices",
    "Restaurants"
  ];

  const column2 = [
    "Food & Beverage Processing",
    "Aerospace and Automotive (paint shops, precision assembly)",
    "Research & Development Laboratories",
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

      description: <>
        <p>
          <strong className=" text-cyan-600 text-lg">High-Velocity Air Jets : </strong>  <br />Strategically placed nozzles deliver air streams at high velocity for effective, full-body decontamination. 

        </p>
      </>
      ,

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

      description: <>
        <p>
          <strong className=" text-cyan-600 text-lg">Integrated HEPA Filtration : </strong>  <br /> An integrated HEPA filtration system ensures the air used for cleaning is pristine, with an efficiency of <strong className=" font-bold text-cyan-500">99.97% at 0.3 microns.</strong> 
 

        </p>
      </>
      ,

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

      description: <>
        <p>
          <strong className=" text-cyan-600 text-lg">Door Interlocking System : </strong>  <br /> A standard electromagnetic interlocking system prevents both doors from being opened simultaneously, maintaining pressure differentials and preventing cross-contamination. Durable Construction: Available in robust Stainless Steel (SS 304) for pharmaceutical and food-grade applications, or heavy-duty Powder Coated GI for industrial use. 


        </p>
      </>
      ,

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

      description: <>
        <p>
          <strong className=" text-cyan-600 text-lg">Full Customization :  </strong>  <br /> We offer complete customization, including size, number of nozzles, and entry/exit configurations to perfectly fit your facility's layout and workflow. 

        </p>
      </>
      ,

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

      description: <>
        <p>
          <strong className=" text-cyan-600 text-lg">Mechanical & Electromagnetic Interlocking : </strong>  <br /> Prevents cross-contamination by ensuring only one door can be opened at a time.

        </p>
      </>
      ,

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

      description: <>
        <p>
          <strong className=" text-cyan-600 text-lg">UV Germicidal Light : </strong>  <br />  An integrated UV light sterilizes the internal chamber, neutralizing microorganisms and ensuring the aseptic integrity of transferred materials.


        </p>
      </>
      ,

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

      description: <>
        <p>
          <strong className=" text-cyan-600 text-lg">Durable & Easy-to-Clean : </strong>  <br />  Constructed from high-grade stainless steel with smooth, coved corners for easy cleaning and sterilization.



        </p>
      </>
      ,

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

   

  const Axial_Flow_fans = [
    {

      fanDiameter: ' 450 to 1600 mm',
      volume: '3000 to 50000',
      staticPressure: ' up to 40',
      fanCastingMaterial: 'Cold rolled steel',
      impellerMaterial: 'Aluminum',

      surfaceFinish: ' Painted ',
      mounting: 'Suitable for wall, roof, Vertical and Horizontal',
      bearing: ' Ball Bearing',
      bladeSweep: '90 mm Diameter',
      motorHP: ' Upto 20',
      fanSpeed: '960 to 1440',
      warranty: '12 months',
    },
  ];


  return (
    <>

      <div className="row mt-32 font-sans">
   <h1 className=" w-full text-center font-sans text-3xl  md:text-5xl  text-sky-700 uppercase">Air Shower & Pass Box </h1>

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  md:py-12">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className=" w-full   h-full  md:w-6/12">
              <img
                src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1757583402/22_lvaqj1.webp"
                alt="Commercial HVAC System"
                loading="lazy"
                className="w-full h-full  object-center object-contain"
              />
            </div>



            <div className=" w-full md:w-6/12">
              <h2 className=" text-lg md:text-xl text-center md:text-left font-bold text-cyan-800 mb-3 leading-tight">
             Air Showers & Pass Boxes for Critical Environments

              </h2>
             
              <p className="text-sm text-gray-700 mb-2 text-justify md:text-left ">
            Protect Your Cleanroom Integrity with Adhunik Powertech’s Precision-Engineered Contamination Control Solutions.

              </p>

               <h2 className=" text-lg md:text-xl text-center md:text-left font-bold text-cyan-800 mb-2 leading-tight">
         The Critical Importance of Contamination Control

              </h2>
              <div className="bg-cyan-100  border-l-4 border-cyan-500 p-4 rounded-r-lg">

                <p className="text-cyan-800 text-sm font-medium text-justify md:text-left">
             In today's advanced manufacturing and research environments, the greatest threat can be microscopic. A single airborne particle can compromise a sterile process, ruin a sensitive electronic component, or contaminate a pharmaceutical batch. Effective contamination control is not a luxury—it is an absolute necessity for quality, safety, and compliance.

                </p>
                <p className="text-cyan-800  text-sm font-medium text-justify md:text-left">
Adhunik Powertech provides a robust first line of defence with our state-of-the-art Air Showers and Pass Boxes, engineered to protect the integrity of your critical and controlled environments.

                </p>
              

              </div>

              


            </div>
          </section>
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
                          className="     object-center object-cover "
                          fetchPriority="high"
                          decoding="async"
                          alt=" adhunik powertech Air Shower"
                           height="300"
                          width="300"
                          src="as.png"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">   </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Ensure a clean and contaminant-free environment with our high-performance Air Showers. Our powerful units effectively remove dust, debris, and particles, enhancing workplace safety.     </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <p className="  md:text-2xl mb-3 hidden md:block"> 
             Air Shower : Your First Line of Defence

              </p>
              <p className=" text-sm text-justify md:text-center">
               Our Air Shower is a self-contained, high-efficiency chamber designed to effectively remove surface contaminants from personnel before they enter a cleanroom or sterile environment. High-velocity jets of HEPA-filtered air blow across the individual, dislodging and removing dust, lint, and other particulate matter, ensuring a clean transition and protecting your critical processes. <br />
                  Adhunik Powertech's Air Shower is the perfect solution for maintaining a clean and contaminant-free environment. Designed to remove dust, debris, and particles from personnel entering controlled areas, it ensures excellent cleanliness and safety. With its powerful airflow system and user-friendly design, this Air Shower offers effective contaminant removal and easy maintenance. Choose Adhunik Powertech's Air Shower for a healthier workspace and experience the benefits today!

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

        
          <div className="flex justify-center items-center w-full px-4 mb-4">
            <div className="overflow-x-auto w-full max-w-6xl">
              <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">
                      <caption className="  uppercase text-base font-semibold text-gray-700 mb-2">
  Air Shower
 TECHNICAL SPECIFICATION
  </caption>
                <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
                  <tr className="text-center">
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Dimension in mm</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Number of Nozzles</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Fluorescent Lamp</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Material of Construction</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Maximum Power</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Electrical Motor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Motor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Number of Users / Cycle</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Entry</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Flooring</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Application</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Input</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Customization Available</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white text-center border-b border-gray-300">
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">1480 x 1500 x 2145</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">15 Nos.</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">01 Nos.</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Stainless Steel 304 Grade / Powder Coated GI</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">3.0 Amp.</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">IE2/IE3/Flame Proof</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">2Hp/3Hp</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Human Only/Human & Trolley Movement / Material Movement</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">01/02/03/04/05</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">100 Required / Not Required</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Pharmacy / Auto / Electronics / Others (Specify)</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">440v/50Hz</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">YES</td>
                  </tr>
                </tbody>
              </table>
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
                <h2 className="text-2xl font-bold text-white md:text-4xl ps-3">Key Features & Benefits
</h2>
              </div>


              <div className="mt-5 grid divide-x divide-y   overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-2 lg:divide-y-0 xl:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.id} className="group relative  bg-gray-100 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                    <div className="relative space-y-8 py-12 p-8">
                      <div className="space-y-2">
                        <ul className="list-none flex  flex-row">
                          <div className="h-full  w-fit pe-3 text-cyan-600">{feature.icon}</div>
                          <li className="text-cyan-900 text-[14px]">{feature.description}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
 
        <div className="row">

          <div className=" h-full flex  flex-col-reverse md:flex-row text-center p-5 bg-[#F4F4F4] m-4">
 
            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">

              <h2 className=" md:text-2xl mb-3 hidden md:block"> 
              Pass Box : Secure Material Transfer
              </h2>

              <p className="text-justify text-sm md:text-center">
               Maintaining a sterile environment requires controlling not just the movement of people, but also materials. Our Pass Boxes (also known as pass-through hatches) provide a secure, airtight space for transferring materials between a cleanroom and a non-controlled area, minimizing personnel traffic and eliminating contamination risks.
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
                      <div className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  h-full w-full    object-center object-contain "
                          fetchPriority="high"
                          decoding="async"
                           loading="lazy"
                           
                          alt="Air Conditioning & Clean Room Jobs"
                          src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1747476599/pb_xtdwhq.webp"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <p className="font-dmserif text-2xl font-bold text-white">  Pass Box </p>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Protect your cleanroom investment with our essential Pass Box. Designed for the safe transfer of materials between areas with different cleanliness levels, it minimizes contamination and ensures the integrity of your controlled settings.  </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        
          <div className=" h-full flex  flex-col-reverse md:flex-row-reverse text-center p-5 bg-[#F4F4F4] m-4">
 
            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <h2 className="  md:text-2xl mb-3 hidden md:block"> Static Pass Box


              </h2>
              <p className="text-justify text-sm md:text-center">
             Ideal for transferring non-sensitive materials, the Static Pass Box features interlocking doors that prevent a direct, open-air path between the two environments, effectively minimizing particle migration.


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
                      <div className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  h-full w-full    object-center object-contain "
                          fetchPriority="high"
                          decoding="async"
                          loading="lazy"
                           
                          alt="Air Conditioning & Clean Room Jobs"
                          src="https://5.imimg.com/data5/SELLER/Default/2023/9/348069021/NK/DM/RK/74516012/ss-static-pass-box-1000x1000.jpeg"
                        />
                      </div> 
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <p className="font-dmserif text-2xl font-bold text-white">  Static Pass Box
 </p>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Designed for the safe transfer of materials between areas with different cleanliness levels, it minimizes contamination and ensures the integrity of your controlled settings.  </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div className=" h-full flex  flex-col-reverse md:flex-row text-center p-5 bg-[#F4F4F4] m-4">
 
            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <h2 className="  md:text-2xl mb-3 hidden md:block"> 
             Dynamic Pass Box

              </h2>
              <p className="text-justify text-sm md:text-center">
            For highly sensitive materials, the Dynamic Pass Box creates its own sterile environment. It is equipped with its own HEPA filter and fan system, continuously flushing the interior with clean air to ensure the utmost sterility during transfer.


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
                      <div className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className=" h-full w-full    object-center object-contain "
                          fetchPriority="high"
                          decoding="async"
                           loading="lazy"
                          alt="Air Conditioning & Clean Room Jobs"
                          src="https://cdn.prod.website-files.com/665b8087c8ad43adf2ab7ad9/665b8087c8ad43adf2ab7eff_647f0040ed7ed2b1be6dbecb_Schematic_dynamic_pass_box_1.webp"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <p className="font-dmserif text-2xl font-bold text-white">  Dynamic Pass Box
 </p>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Designed for the safe transfer of materials between areas with different cleanliness levels, it minimizes contamination and ensures the integrity of your controlled settings.  </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

 
          <div className="flex justify-center items-center w-full px-4 mb-4">
            <div className="overflow-x-auto w-full max-w-6xl">
              <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">
                      <caption className="  uppercase text-base font-semibold text-gray-700 mb-2">
   Pass Box TECHNICAL SPECIFICATION
  </caption>
                <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
                  <tr className="text-center">
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Fan Diameter</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Volume</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Static Pressure(mmWG)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Fan Casting Material</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Impeller Material</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Surface Finish</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Mounting</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Bearing</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Blade Sweep</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Motor (HP)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Fan Speed (RPM)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Warranty</th>
                  </tr>
                </thead>
                <tbody>
                  {Axial_Flow_fans.map((product, index) => (
                    <tr key={index} className="bg-white text-center border-b border-gray-300">
                      <td className="px-2 py-2 text-[12px] border-r border-gray-300">{product.fanDiameter}</td>
                      <td className="px-2 py-2 text-[12px] border-r border-gray-300">{product.volume}</td>
                      <td className="px-2 py-2 text-[12px] border-r border-gray-300">{product.staticPressure}</td>
                      <td className="px-2 py-2 text-[12px] border-r border-gray-300">{product.fanCastingMaterial}</td>
                      <td className="px-2 py-2 text-[12px] border-r border-gray-300">{product.impellerMaterial}</td>
                      <td className="px-2 py-2 text-[12px] border-r border-gray-300">{product.surfaceFinish}</td>
                      <td className="px-2 py-2 text-[12px] border-r border-gray-300">{product.mounting}</td>
                      <td className="px-2 py-2 text-[12px] border-r border-gray-300">{product.bearing}</td>
                      <td className="px-2 py-2 text-[12px] border-r border-gray-300">{product.bladeSweep}</td>
                      <td className="px-2 py-2 text-[12px] border-r border-gray-300">{product.motorHP}</td>
                      <td className="px-2 py-2 text-[12px] border-r border-gray-300">{product.fanSpeed}</td>
                      <td className="px-2 py-2 text-[12px] border-r border-gray-300">{product.warranty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                <p className="text-2xl font-bold text-white md:text-4xl ps-3">Key Features & Benefits</p>
              </div>


               <div className="mt-5 grid divide-x divide-y   overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3">
                {features2.map((feature) => (
                  <div key={feature.id} className="group relative  bg-gray-100 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                    <div className="relative space-y-8 py-12 p-8">
                      <div className="space-y-2">
                        <ul className="list-none flex  flex-row">
                          <div className="h-full  w-fit pe-3 text-cyan-600">{feature.icon}</div>
                          <li className="text-cyan-900 text-[14px]">{feature.description}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>














        <div className="flex justify-center items-center w-full h-full flex-row">

          <div className="w-[30%] h-px my-8 bg-gray-300 border-0" />


          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-gray-200 px-5 py-4 rounded-full bg-white md:text-4xl text-3xl font-sans font-bold capitalize text-center">
            APPLICATIONS
          </span>


          <div className="w-[30%] h-px my-8 bg-gray-300 border-0" />
        </div>


        <div className="row pb-16 flex justify-center items-center flex-col">



          <div className="row  w-full h-full">


            <div className="relative overflow-x-auto justify-center items-center flex font-sans font-thin">


              <table className=" md:w-[50%] text-sm text-center text-gray-500 ">
              <p>
                Applications Across Critical Industries

              </p>
                      <caption className="  uppercase text-base font-semibold text-gray-600 mb-2">
   Our Air Showers and Pass Boxes are essential for maintaining the stringent standards of a wide range of industries, including:


  </caption>
                <thead className="text-xs  text-gray-700 uppercase bg-gray-50 ">

                </thead>
                <tbody>

                  <tr className="bg-white text-[15px] flex flex-col  md:flex-row justify-center">

                    <td className="px-6 py-4  text-left">
                      <ul className="list-disc list-outside">
                        {column1.map((item, index) => (
                          <li  key={index}>{item}</li>
                        ))}
                      </ul>
                    </td>


                    <td className="px-6 py-4 text-left">
                      <ul className="list-disc list-outside">
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
                      className=" w-32 h-32 md:w-48 md:h-48 object-center object-cover    rounded-full"
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
