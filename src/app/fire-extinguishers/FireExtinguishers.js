"use client";
 
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Settings,
  VolumeX,
  PanelLeft,
  Thermometer,
  ChevronRight,
  Sparkles,
  GitPullRequest,
  Eye,
  Atom
} from 'lucide-react';


import {

  Home,
  Utensils,
  Building,
  Droplets,
  Volume2,

} from 'lucide-react';

import {

  CheckCircle,

  Droplet,
  EyeOff,
  LayoutGrid,
  Users,

  Briefcase
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function FireExtinguishers() {

  
  const integrationExamples = [
    {
      icon: <GitPullRequest className="w-6 h-6" />,
      title:
      <>
        <Link  href='https://adhunikdecodive.com/modular-kitchen-designs' className=' text-red-700 hover:text-red-500'>Pull the pin</Link>
      </> 
      ,
      content: " Break the tamper seal and pull the pin."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 
       <>
        <Link  href='https://adhunikdecodive.com/domestic-furniture' className=' text-red-700 hover:text-red-500'>Aim the nozzle</Link>
      </> 
,
      content: " Aim low, pointing the nozzle at the base of the fire."
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'> Squeeze the handle</Link>
      </> 
      ,
      content: " Press the handle to release the extinguishing agent."
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'> Sweep side-to-side</Link>
      </> 
      ,
      content: " Sweep the nozzle from side to side at the base of the fire until it is extinguished."
    }
  ];

  // Design considerations
  const designConsiderations = [
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Annual Professional Servicing",
      content: " Our certified fire safety specialists conduct thorough inspections, recharging, and testing to comply with all relevant Indian and international standards (including BIS and NFPA). We offer comprehensive Annual Maintenance Contracts (AMC) for all types of fire extinguishers in Gurugram, Noida, Faridabad, Ghaziabad, and all our service areas."
    },

    {
       icon: <Droplets className="w-6 h-6" />,
      title: "Monthly Visual Inspections",
      content: "Check for damage, pressure gauge readings (if applicable), and clear access."
    },
  
   
  ];

  const valuePropositions = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Optimal Temperature",
      description: "Precision climate control tailored to your space"
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Pristine Air Quality",
      description: "Advanced filtration for healthier indoor environments"
    },
    {
      icon: <EyeOff className="w-6 h-6" />,
      title: "Discreet Integration",
      description: "Technology that disappears into your design"
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: "Seamless Harmony",
      description: "Systems that complement your aesthetic vision"
    }
  ];

  const consultationOptions = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Residential Consultation",
      description: "Tailored solutions for luxury homes and apartments"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Commercial Planning",
      description: "Integrated systems for sophisticated workspaces"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Designer Partnerships",
      description: "Collaborate with our network of interior specialists"
    }
  ];


  const features2 = [
  {
    title: "Effective on Class A Fires",
    description: "Ideal for extinguishing fires involving organic materials."
  },
  {
    title: "Cooling Agent",
    description: "Water cools the burning material and reduces the heat, preventing re-ignition."
  },
  {
    title: "Environmentally Friendly",
    description: "Water is a non-toxic and readily available extinguishing agent."
  }
];

  const features3 = [
  {
    title: "Effective on Class A & B fires",
    description: " utilizes foam concentrate to smother and cool, easily recognizable."
  },
 
];

  const features4 = [
  {
    title: "Multi-Class effectiveness (A, B, C)",
    description: "uses monoammonium phosphate or bicarbonates, rapidly smothers flames."
  },
 
];

  const features5 = [
  {
    title: "Key Features",
    description: "Displaces oxygen and cools, non-conductive, leaves no residue."
  },
 
];

  const features6 = [
  {
    title: "Key Features",
    description: " Uses non-conductive, residue-free agents, rapid suppression on Class A, B, and C fires."
  },
 
];

const fireExtinguisherFeatures = [
  {
    title: "Effective on Class A Fires",
    description: "Water extinguishers are specifically designed for ordinary combustibles like wood, paper, and textiles, making them highly effective for common household and workplace fires."
  },
  {
    title: "Cooling Capability", 
    description: "Reduces fire intensity and prevents re-ignition."
  },
  {
    title: "Environmentally Friendly",
    description: "Non-toxic, safe, and readily available."
  },
  {
    title: "Cost-Effective",
    description: "Generally, more economical for both purchase and maintenance, making them a practical choice for widespread deployment."
  },
   
];

const fireExtinguisherFeatures2 = [
  {
    title: "Multi-Purpose Versatility",
    description: "Addresses a variety of fire types critical in industrial and commercial settings across Ghaziabad and Bawal."
  },
  {
    title: "Effective Cooling", 
    description: "Reduces fire intensity and prevents re-ignition."
  },

   
];

const fireExtinguisherFeatures3 = [
  {
    title: "Multi-Purpose Versatility",
    description: "Exceptional Versatility: One extinguisher can handle multiple types of fires, making it an economical choice for comprehensive fire safety."
  },
  {
    title: "Rapid Response", 
    description: " Quickly extinguishes flames, minimizing fire damage."
  },
  {
    title: "Safety for Electrical Fires", 
    description: " Non-conductive, allowing safe use on live electrical equipment in places like data centers in Greater Noida."
  },

   
];

const fireExtinguisherFeatures4 = [
  {
    title: "No Residue",
    description: "Ideal for sensitive environments like offices and labs, where minimal cleanup is crucial."
  },
  {
    title: "Equipment Safety", 
    description: "Does not damage valuable electronics or machinery."
  },
  {
    title: "Effective Against Specific Fires", 
    description: " Particularly useful for flammable liquids and electrical fires."
  },

   
];

const fireExtinguisherFeatures5 = [
  {
    title: "No Residue",
    description: "Eliminates cleanup, making them ideal for delicate environments."
  },
  {
    title: "Equipment Safety", 
    description: "Non-conductive nature protects valuable electronics from damage."
  },
  {
    title: "Versatile Application", 
    description: " Suitable for various fire types, offering a comprehensive solution for critical settings."
  },

   
];


  const faqs = [
    {
      question: "How often should fire extinguishers be inspected and serviced?",
      answer: "Fire extinguishers should undergo a visual inspection monthly and a professional annual servicing. Adhunik FireXpert offers comprehensive AMC services for this purpose across Delhi NCR and surrounding regions."
    },
    {
      question: "What is the difference between an ABC and a CO2 fire extinguisher?",
      answer: "  An ABC (Dry Powder) extinguisher is versatile for Class A, B, and C fires (solids, liquids, electrical), while a CO2 extinguisher is specifically for Class B (flammable liquids) and Class C (electrical) fires and leaves no residue, making it ideal for sensitive equipment."
    },
    {
      question: "Does Adhunik FireXpert offer fire extinguisher refilling services in Gurugram/Delhi?",
      answer: "  Yes, we provide professional fire extinguisher refilling and recharging services for all types of extinguishers, ensuring they meet safety standards, available across Gurugram, Delhi, Noida, Faridabad, and our extended service locations."
    },
    {
      question: "Are your fire extinguishers compliant with Indian safety standards?",
      answer: "  Absolutely. As a reputable fire extinguisher supplier, all our products are BIS-certified and ISI-marked and comply with the latest National Building Code (NBC) guidelines and other relevant Indian fire safety regulations."
    },
    {
      question: " Can Adhunik FireXpert provide bulk orders for commercial properties or societies?",
      answer: " Yes, we specialize in bulk supply of fire extinguishers for commercial buildings, industrial complexes, and residential societies throughout Delhi NCR, Jaipur, Chandigarh, and all our listed service areas. Contact us for competitive pricing."
    },
   
  ];

  const [activeFaq, setActiveFaq] = useState(null);
  
  return (
    <>


<div className="row mt-32 font-sans">


  <section className=" md:mt-0 px-4 relative h-auto  flex items-center justify-center bg-gradient-to-br from-red-50/20 to-white">

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-red-400/5 rounded-full filter blur-[100px] "></div>
            <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-red-400/5 rounded-full filter blur-[80px] "></div>
          </div>

          <div className="relative z-10  max-w-7xl mx-auto text-center ">

            <section className=' md:p-5 pb-0 mb-0 flex flex-col md:flex-row  '>
              <div className=" blog-img mb-6 text-center">
                <div className="flex gap-4 md:gap-9  justify-evenly items-center  flex-col md:flex-row">
                  <div className="w-full h-full md:w-5/12 flex  ">


                    <img
                      className=" w-full h-full object-center rounded-3xl object-contain"
                      src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618655/fire-extinguishers-type_vbvjzi.webp"
                      alt="Adhunik Powertech air washer"
                      loading="lazy"
                    />


                  </div>

                  <div className=" w-full md:w-6/12 md:text-center text-left text-gray-800 mb-6 flex justify-center md:items-center flex-col mt-2">
                    <div className="md:text-center text-left     ">


                      <span className="text-sm font-medium  flex justify-center md:justify-start mb-3 pt-6 items-center md:items-center  text-red-800">
                      <Sparkles className="w-4 h-4 text-red-600 mr-4" /> FIRE SAFETY ESSENTIALS
                      </span>


                      <p className="  text-lg md:text-2xl text-center md:text-left font-bold text-gray-900  mb-2 leading-tight">
                        <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                          <Link href='https://www.adhunikpowertech.com/top-Fire-Fighting-Company-in-Delhi-NCR-And-India' className='  '>
                          Your Trusted Fire Extinguisher
                          </Link>
                        </span><br />
                        <span className="font-light text-gray-700">   <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                           <span  className='  '>
                    Dealer & Supplier in Delhi NCR & Beyond  |
 
                          </span> 
                        </span>   Adhunik FireXpert
                        </span>
                      </p>
                    </div>
                    <p className=" font-sans text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">


                   When unexpected fires strike, immediate action is crucial for protecting lives and property. As a leading fire extinguisher dealer and supplier across Gurugram, Delhi NCR (including Noida, Greater Noida, Faridabad, Ghaziabad), and extended regions like Jaipur, Chandigarh, Sonipat, Panipat, Rohtak, Rewari, Palwal, Bhiwadi, Meerut, Neemrana, Tapukara, Bawal, Manesar, Dharuhera, and Muzaffarnagar, Adhunik FireXpert provides a comprehensive range of high-quality, BIS-certified and ISI-marked fire extinguishers.

                    </p>
                    <p className=" font-sans text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">

We ensure your premises – from bustling commercial complexes and tech parks in Gurugram to manufacturing units in Faridabad and residential societies in Noida – are equipped with the right tools for swift and effective fire suppression, adhering to all Indian safety standards, including NBC guidelines.

                    </p>

                  </div>
                </div>

              </div>
            </section>





          </div>
        </section>

            <div className="text-center px-4 py-12">
            
              <h2 className=" text-lg md:text-2xl  font-bold text-gray-900 mb-6 leading-tight">
                Understanding Fire Extinguishers
 <br />
                <span className="text-red-600">Your Essential First Line of Defense</span>
              </h2>

              <div className="max-w-6xl text-justify  mx-auto text-sm text-gray-600 space-y-6">
                <p>
               Fire extinguishers are indispensable devices designed to suppress small fires and prevent them from escalating into major disasters. Understanding the different types of fire extinguishers and their specific applications is paramount for ensuring safety in homes, offices, industrial facilities, and public spaces across Delhi, Haryana, Rajasthan, and Uttar Pradesh.

                </p>
                <p>
                  Each fire extinguisher is tailored to specific fire scenarios, classified into types including Class A for ordinary combustibles, Class B for flammable liquids, Class C for electrical fires, Class D for combustible metals, and Class K for cooking oils.

                </p>
              </div>
            </div>


<p className=" w-full text-center font-sans py-4 md:py-12  text-lg  md:text-3xl  text-sky-700  capitalize"> Our Range of Fire Extinguishers by Adhunik FireXpert </p>

<div className="row">


  <div className=" h-full flex flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">



    <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block"> 1. Water (Class A) Fire Extinguishers </h2>
      <p className=" text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Ideal For :</strong> Fires involving ordinary combustible materials such as wood, paper, cloth, and plastics – commonly found in offices and homes across Gurugram and Delhi.

      </p>

         <p className="text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>How They Work : </strong> 
     
    Foam extinguishers form a blanket that cools the fire and smothers it, cutting off the oxygen supply and providing excellent cooling.


      </p>

      <div className="card   text-left ">

        <p className=" text-2xl pt-2 "> Advantages </p>

       <ul className="list-disc py-3 space-y-1 ps-4">
  {fireExtinguisherFeatures.map((feature, index) => (
    <li key={index} className="text-sm">
      <span className="font-sans font-bold">{feature.title}: </span>
      {feature.description}
    </li>
  ))}
</ul>
      </div>


      <div className="card text-left">
 
        <p className=" text-2xl pt-2"> Key Features </p>

     <ul className="list-disc py-3 space-y-1 ps-4">
  {features2.map((feature, index) => (

    <li className='text-sm' key={index}>
      <span className="font-sans font-bold">{feature.title} : </span>
      {feature.description}
    </li>

  ))}
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
                  alt="Fire Extinguishers"
                  src="/firex/12.jpg"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-3xl font-bold text-white">Water  Fire Extinguishers  </h2>
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
                  alt="Fire Extinguishers"
                  src=" https://media.istockphoto.com/id/504302566/photo/foam-fire-extinguisher-closeup-with-fire-behind.jpg?s=612x612&w=0&k=20&c=Dfy8h3Z_FiBcuWNz4ez3N81qhdWA2xwT7gzamPNML30= "
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-3xl font-bold text-white"> Foam Fire Extinguishers  </h2>
              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block"> 2. Foam (Class A and B) Fire Extinguishers </h2>
      <p className="text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Ideal For : </strong> 
     
      Versatile for both Class A (ordinary combustibles) and Class B fires (flammable liquids like petrol, oils, paints) – crucial for workshops in Faridabad and commercial kitchens.
 
      </p>

      <p className="text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>How They Work : </strong> 
     
    Foam extinguishers form a blanket that cools the fire and smothers it, cutting off the oxygen supply and providing excellent cooling.


      </p>

      <div className="card text-left ">

        <p className=" text-2xl pt-2 "> Advantages </p>
        
       <ul className="list-disc py-3 space-y-1 ps-4">
  {fireExtinguisherFeatures2.map((feature, index) => (
    <li key={index} className="text-sm">
      <span className="font-sans font-bold">{feature.title}: </span>
      {feature.description}
    </li>
  ))}
</ul>
      </div>


      <div className="card text-left">
 
        <p className=" text-2xl pt-2"> Key Features </p>

     <ul className="list-disc py-3 space-y-1 ps-4">
  {features3.map((feature, index) => (

    <li className='text-sm' key={index}>
      <span className="font-sans font-bold">{feature.title} : </span>
      {feature.description}
    </li>

  ))}
</ul>

      </div>







    </div>


  </div>

 

</div>




<div className="row">


  <div className=" h-full flex flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">



    <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
        <h2 className=" text-2xl mb-3 hidden md:block">3. Dry Powder (Class A, B, and C) Fire Extinguishers
</h2>
      <p className=" text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Ideal For : </strong> 
     
   Highly versatile, suitable for Class A, Class B, and Class C fires (flammable gases, electrical fires) – essential for general safety in homes, offices, and industrial units in Sonipat and Rewari.



      </p>
      <p className="text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>How They Work : </strong> 
     
  They release a fine chemical powder that rapidly extinguishes flames by interrupting the chemical reaction of the fire.


      </p>

      <div className="card   text-left ">

        <p className=" text-2xl pt-2 "> Advantages </p>
        
       <ul className="list-disc py-3 space-y-1 ps-4">
  {fireExtinguisherFeatures3.map((feature, index) => (
    <li key={index} className="text-sm">
      <span className="font-sans font-bold">{feature.title} : </span>
      {feature.description}
    </li>
  ))}
</ul>
      </div>


      <div className="card text-left">
 
        <p className=" text-2xl pt-2"> Key Features </p>

     <ul className="list-disc py-3 space-y-1 ps-4">
  {features4.map((feature, index) => (

    <li className='text-sm' key={index}>
      <span className="font-sans font-bold">{feature.title} : </span>
      {feature.description}
    </li>

  ))}
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
                  alt="Fire Extinguishers"
                  src="  /firex/5.jpg "
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-3xl font-bold text-white">  Dry Powder Fire Extinguishers  </h2>
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
                  alt="Fire Extinguishers"
                  src="  /firex/3.png "
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-3xl font-bold text-white"> (CO2) Fire Extinguishers  </h2>
              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">

  <h2 className=" text-2xl mb-3 hidden md:block">
  4. Carbon Dioxide (CO2) (Class B and C) Fire Extinguishers

</h2>

      <p className=" text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Ideal For : </strong> 
     
Class B fires (flammable liquids) and Class C fires (electrical fires involving energized equipment) – a must-have for server rooms, laboratories, and IT hubs in Delhi and Noida.

      </p>

      <p className="text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>How They Work : </strong> 
     
How They Work: CO2 gas rapidly displaces oxygen around the fire, suffocating the flames, and also provides a significant cooling effect.


      </p>

      <div className="card   text-left ">

        <p className=" text-2xl pt-2 "> Advantages </p>
        
       <ul className="list-disc py-3 space-y-1 ps-4">
  {fireExtinguisherFeatures4.map((feature, index) => (
    <li key={index} className="text-sm">
      <span className="font-sans font-bold">{feature.title} : </span>
      {feature.description}
    </li>
  ))}
</ul>
      </div>


      <div className="card text-left">
 
        <p className=" text-2xl pt-2"> Key Features </p>

     <ul className="list-disc py-3 space-y-1 ps-4">

  {features5.map((feature, index) => (

    <li className='text-sm' key={index}>
      <span className="font-sans font-bold">{feature.title} : </span>
      {feature.description}
    </li>

  ))}

</ul>

      </div>




    </div>


  </div>









</div>



<div className="row">


  <div className=" h-full flex flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">



    <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">


     <h2 className=" text-2xl mb-3 hidden md:block">
5. Wet Chemical (Class K) Fire Extinguishers

</h2>

      <p className="text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Ideal For : </strong> 
     
Class B fires (flammable liquids) and Class C fires (electrical fires involving energized equipment) – a must-have for server rooms, laboratories, and IT hubs in Delhi and Noida.

      </p>

      <p className="text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>How They Work : </strong> 
     
How They Work: CO2 gas rapidly displaces oxygen around the fire, suffocating the flames, and also provides a significant cooling effect.


      </p>

      <div className="card text-left ">

        <p className=" text-2xl pt-2 "> Advantages </p>
        
       <ul className="list-disc py-3 space-y-1 ps-4">
  {fireExtinguisherFeatures4.map((feature, index) => (
    <li key={index} className="text-sm">
      <span className="font-sans font-bold">{feature.title} : </span>
      {feature.description}
    </li>
  ))}
</ul>
      </div>


      <div className="card text-left">
 
        <p className=" text-2xl pt-2"> Key Features </p>

     <ul className="list-disc py-3 space-y-1 ps-4">

  {features5.map((feature, index) => (

    <li className='text-sm' key={index}>
      <span className="font-sans font-bold">{feature.title} : </span>
      {feature.description}
    </li>

  ))}

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
                  alt="Fire Extinguishers"
                  src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1747476598/wfe_nhafyh.webp"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-3xl font-bold text-white"> Wet Fire Extinguishers  </h2>
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
                  alt="Fire Extinguishers"
                  src=" cae.jpeg"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-3xl font-bold text-white"> Clean Agent Fire Extinguishers  </h2>
              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">

     <h2 className=" text-2xl mb-3 hidden md:block">
6. Clean Agent (Class A, B, and C) Fire Extinguishers

</h2>

      <p className="text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Ideal For : </strong> 
     
  Advanced protection for Class A, B, and C fires in areas with highly sensitive or valuable equipment, such as data centers in Greater Noida, server rooms in Jaipur, museums, and corporate offices.

      </p>

      <p className="text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>How They Work : </strong> 
     
  These extinguishers utilize environmentally friendly chemicals (e.g., FK-5-1-12, 3M Novec 1230) to suppress fires by interrupting the chemical reaction without leaving any residue.


      </p>

      <div className="card   text-left ">

        <p className=" text-2xl pt-2 "> Advantages </p>
        
       <ul className="list-disc py-3 space-y-1 ps-4">
  {fireExtinguisherFeatures5.map((feature, index) => (
    <li key={index} className="text-sm">
      <span className="font-sans font-bold">{feature.title} : </span>
      {feature.description}
    </li>
  ))}
</ul>
      </div>


      <div className="card text-left">
 
        <p className=" text-2xl pt-2"> Key Features </p>

     <ul className="list-disc py-3 space-y-1 ps-4">

  {features6.map((feature, index) => (

    <li className='text-sm' key={index}>
      <span className="font-sans font-bold">{feature.title} : </span>
      {feature.description}
    </li>

  ))}

</ul>

      </div>



    </div>


  </div>









</div>




 <div className="bg-white pt-12  ">
         
       
        {/* ===== Architectural Divider ===== */}
        <div className="  relative h-px bg-gradient-to-r from-transparent via-red-500 to-transparent max-w-7xl mx-auto mb-20">
          <h1 className="absolute left-1/2 -translate-x-1/2 -top-3.5 bg-white px-4 text-gray-500 text-md text-center md:text-3xl">
           Mastering Fire Extinguisher Usage : The PASS Method

          </h1>
        </div>

       

        <div className="bg-white">
          {/* ===== Hero Section ===== */}
          <section className="relative     px-6 max-w-7xl mx-auto">
          
            <div className="text-center mb-20">

              <h2 className="text-md  font-bold text-gray-900 mb-6 leading-tight">
               Knowing how to use a fire extinguisher correctly is as important as having one. 
 <br />
                <span className="text-red-600">At Adhunik FireXpert, we educate our clients on the simple PASS method</span>
              </h2>

             
            </div>

            {/* Integration Examples */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {integrationExamples.map((example, index) => (
                <div key={index} className="bg-gray-50 flex flex-col items-center md:items-start  rounded-xl p-8 border border-gray-200 hover:border-red-300 transition-colors">
                  <div className="w-12 h-12  bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6">
                    {example.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">{example.title}</h3>
                  <p className="text-gray-600 text-sm text-justify md:text-left">{example.content}</p>
                </div>
              ))}
            </div>

          

            {/* Design Considerations Section */}
            <div className="mb-24">
              <h2 className=" text-lg md:text-3xl font-bold text-gray-900 mb-6 text-center">
           Regular Maintenance : Ensuring Your Extinguishers Are Always Ready
 </h2>
              <p className=" text-sm md:text-md text-gray-600 max-w-4xl mx-auto text-center mb-16">
         Even the best equipment requires proper care. Adhunik FireXpert emphasizes routine maintenance to ensure your fire extinguishers are always ready for an emergency, providing peace of mind to businesses and homeowners across Delhi NCR and beyond:
  </p>



              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {designConsiderations.map((item, index) => (
                  <div key={index} className="group relative overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-8 border border-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-red-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative flex flex-col md:items-start items-center ">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6">
                        {item.icon}
                      </div>
                      <h3 className=" text-lg md:text-2xl text-center md:text-left  font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 text-sm  text-justify md:text-left">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>


          </section>
        </div>

        <div className="bg-gradient-to-b from-white to-red-50/20">
          {/* ===== Premium Hero Section ===== */}
          <section className="relative    px-6 max-w-7xl mx-auto">
            <div className="absolute inset-0 overflow-hidden -z-10">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-400/5 rounded-full filter blur-[100px]"></div>
            </div>

            <div className="text-center mb-10 md:mb-20">
              <div className="text-xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">

              Your Trusted Partner in {" "}

 <span className="text-red-600 "> Complete Fire Safety</span>
              </div>

              <div className="max-w-4xl  mx-auto text-sm text-justify md:text-md text-gray-600 space-y-6">
                <p>
                At Adhunik FireXpert, we are more than just a dealer and supplier of fire extinguishers; we are your dedicated fire safety partner. Our experienced professionals offer consultancy, design, supply, installation, testing, and commissioning of comprehensive fire safety systems, ensuring holistic protection for your residential, commercial, and industrial premises.

                </p>
                <p>
                  Don't compromise on safety. Contact our fire safety experts today to get a free assessment, request a quote, or discuss the most appropriate fire extinguishers and comprehensive fire protection solutions for your home or business in Gurugram, Delhi, Noida, Faridabad, or any of our service locations.

                </p>
              </div>
            </div>

            {/* Value Propositions */}
           

            {/* Consultation Options */}
        

            {/* Closing CTA */}
            <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-12 mb-24 text-white relative overflow-hidden">
              <div style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/002/401/674/small/black-and-white-small-dots-pattern-free-vector.jpg")` }}
                className="absolute inset-0   bg-[length:20px_20px] opacity-10"></div>
              <div className="relative max-w-4xl mx-auto text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-6 text-red-300" />
                <h3 className=" text-lg md:text-3xl font-bold mb-6">Partner with Experts</h3>
                <p className=" text-sm md:text-xl text-red-100 mb-8">
                  Partnering with experts like Adhunik Decodive can unlock the full potential of your space, delivering comfort that is felt, not seen.
                </p>
                
                <Link href='/support-form' className="bg-white w-fit text-red-900 px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors text-sm md:text-md mx-auto shadow-xl">
                  Schedule Consultation <ArrowRight className="w-5 h-5" />
                </Link>

              </div>
            </div>
          </section>
        </div>

             {/* FAQ Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className=" text-lg md:text-3xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="w-24 h-1 bg-red-600 mx-auto"></div>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    >
                      <h3 className="text-sm font-medium text-gray-900">{faq.question}</h3>
                      <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${activeFaq === index ? 'rotate-90' : ''}`} />
                    </button>
                    {activeFaq === index && (
                      <div className=" text-sm p-6 pt-0 text-gray-600">
                        <p className=' text-sm text-gray-500'>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>


      </div>



 

</div>

    </>
  )
}
