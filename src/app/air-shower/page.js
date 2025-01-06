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
      description: "⁠All Spare parts have rust free anti corrosion coating. " ,
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
      description: "Outstanding reliability and performance ",
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
      description: " High quality components. ",
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
      description: " Light-weighted, good-looking appearance, and compact and solid structure. ",
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
      description: " Operation efficiency and energy savings. ",
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


<div className="row">
<p className=" w-full text-center font-sans text-3xl  md:text-5xl  text-sky-700 uppercase">Air Shower & Pass Box </p>

<div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">

  <div className="md:w-[40%] w-auto">
    <div className="flex items-center justify-center h-full">
      <div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
          <div className="w-auto">
            <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
              <img
                className="  md:h-[28rem]  object-center object-cover "
                fetchPriority="high"
                decoding="async"
                alt="Air Handling Unit"
                src="as.png"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h2 className="font-dmserif text-3xl font-bold text-white">  Air Shower </h2>
            <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Ensure a clean and contaminant-free environment with our high-performance Air Showers. Our powerful units effectively remove dust, debris, and particles, enhancing workplace safety.     </p>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
    <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block"> Air Shower</h2>
    <p className="text-justify md:text-center">
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

<p className=" w-full text-center  text-2xl font-sans py-3"> TECHNICAL SPECIFICATION</p>



<div className="flex justify-center items-center w-full px-4 mb-4">
  <div className="overflow-x-auto w-full max-w-6xl">
    <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">
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
{/* Background Blur Effect */}
<div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
<div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
</div>

{/* Main Content */}
<div className="max-w-7xl mx-auto px-6 py-4 md:px-12 xl:px-6">
<div className="md:w-2/3 lg:w-1/2 mt-2 text-gray-100 flex items-center">
  {/* Icon */}
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

{/* Grid of Features */}
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



<div className="row">

<div className=" h-full flex  flex-col-reverse md:flex-row text-center p-5 bg-[#F4F4F4] m-4">

 

  <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
    <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block"> Pass Box</h2>
    <p className="text-justify md:text-center">
    Adhunik Powertech's Pass Box is essential for maintaining cleanroom environments. Designed for the safe transfer of materials between areas with different cleanliness levels, it minimizes contamination risks while ensuring the integrity of controlled settings. With its airtight design and UV sterilization capabilities, it effectively eliminates harmful microorganisms, making it ideal for pharmaceuticals, biotechnology, and healthcare. Reliable and robust, Adhunik Powertech's Pass Box is crucial for upholding aseptic conditions and ensuring product quality.
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
            <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
              <img
                className="  md:h-[28rem]  object-center object-fill "
                fetchPriority="high"
                decoding="async"
                alt="Air Conditioning & Clean Room Jobs"
                src="pb.png"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h2 className="font-dmserif text-2xl font-bold text-white">  Pass Box </h2>
            <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Protect your cleanroom investment with our essential Pass Box. Designed for the safe transfer of materials between areas with different cleanliness levels, it minimizes contamination and ensures the integrity of your controlled settings.  </p>

          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<p className=" w-full text-center  text-2xl font-sans py-3"> TECHNICAL SPECIFICATION</p>


<div className="flex justify-center items-center w-full px-4 mb-4">
  <div className="overflow-x-auto w-full max-w-6xl">
    <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">
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
{/* Background Blur Effect */}
<div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
<div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
</div>

{/* Main Content */}
<div className="max-w-7xl mx-auto px-6 py-4 md:px-12 xl:px-6">
<div className="md:w-2/3 lg:w-1/2 mt-2 text-gray-100 flex items-center">
  {/* Icon */}
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

{/* Grid of Features */}
<div className="mt-5 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
  {features2.map((feature) => (
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
   


    


       


 
      



          <div className="flex justify-center items-center w-full h-full flex-row">
            {/* Left line */}
            <div className="w-[30%] h-px my-8 bg-gray-300 border-0" />

            {/* Center text */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-gray-200 px-5 py-4 rounded-full bg-white md:text-4xl text-3xl font-sans font-bold capitalize text-center">
              APPLICATIONS 
            </span>

            {/* Right line */}
            <div className="w-[30%] h-px my-8 bg-gray-300 border-0" />
          </div>


          <div className="row pb-16 flex justify-center items-center flex-col">






            <div className="row  w-full h-full">


              <div className="relative overflow-x-auto justify-center items-center flex font-sans font-thin">


                <table className=" md:w-[50%] text-sm text-center text-gray-500 ">
                  <thead className="text-xs  text-gray-700 uppercase bg-gray-50 ">

                  </thead>
                  <tbody>
                    <tr className="bg-white text-[15px] flex flex-col  md:flex-row justify-center">
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
                        className=" w-32 h-32 md:w-48 md:h-48 object-center object-cover    rounded-full"
                        src={logo.src}
                        alt={logo.alt}
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
