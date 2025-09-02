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

export default function FireSupresion() {

  
  const integrationExamples = [
    {
      icon: <GitPullRequest className="w-6 h-6" />,
      title:
      <>
        <Link  href='https://adhunikdecodive.com/modular-kitchen-designs' className=' text-red-700 hover:text-red-500'>
      Suppression Agents

        </Link>
      </> 
      ,
      content: "The specific extinguishing agent chosen based on the hazard (e.g., FM-200, Novec 1230, CO2, Foam, Dry Chemical)."
    },

    {
      icon: <Eye className="w-6 h-6" />,
      title: 
       <>
        <Link  href='https://adhunikdecodive.com/domestic-furniture' className=' text-red-700 hover:text-red-500'>
      Detection System
</Link>
      </> 
,
      content: "Advanced smoke, heat, or flame detectors configured for rapid and accurate fire identification, triggering the suppression system."
    },

    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>
     Control Panel
        </Link>
      </> 
      ,
      content: " The intelligent hub for system monitoring, activation, and status reporting."
    },

    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>Delivery System</Link>
      </> 
      ,
      content: "A network of specialized pipes, manifolds, and nozzles precisely installed by our contracting team to ensure uniform and effective agent dispersal."
    },

    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>
      Storage Cylinders
        </Link>
      </> 
      ,
      content: " High-pressure cylinders designed to safely store the suppression agent."
    },

    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>Manual Release Stations</Link>
      </> 
      ,
      content: " Provide an option for human activation when necessary."
    },

    
    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>Pre-Discharge Alarms</Link>
      </> 
      ,
      content: " Crucial for signaling occupants to evacuate before agent release, particularly for gaseous systems."
    },

   

  ];

  // Design considerations
  const designConsiderations = [
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Minimizes Damage to Critical Assets",
      content: "Protects expensive machinery, data, sensitive electronics, and irreplaceable documents from fire and water damage, especially with clean agent solutions."
    },

    {
       icon: <Droplets className="w-6 h-6" />,
      title: "Rapid & Automatic Response",
      content: " Systems activate automatically upon fire detection, suppressing the fire within seconds, often before it can fully develop or spread."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Enhanced Life Safety",
      content: " While some systems are designed for unoccupied spaces, many provide pre-discharge alarms, allowing safe evacuation before agent release, significantly improving life safety."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Ensures Business Continuity",
      content: " By quickly controlling fires and minimizing disruption, these systems help maintain operational integrity and reduce downtime, crucial for businesses in Delhi NCR."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Regulatory Compliance",
      content: " Essential for meeting stringent international and national fire safety norms, including NFPA (e.g., NFPA 2001 for Clean Agents), BIS, and local municipal fire department requirements. Our contractor expertise ensures your system adheres to all applicable acts and standards."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Potential Insurance Advantages",
      content: " Properties with certified, well-maintained suppression systems may qualify for significant reductions in insurance premiums."
    },
   
  ];


  const fireSafetyPoints = [
  {
    title: "Turnkey Solutions",
    description:
      " We offer a complete suite of services, from initial hazard assessment, customized engineering design, ISI-certified supply, precise installation by our expert contracting team, rigorous testing, and proactive Annual Maintenance Contracts (AMC).",
  },
  {
    title: "Specialized Expertise",
    description:
      " Our highly qualified engineers and technicians are experienced in the intricacies of various fire suppression technologies and their application in diverse, high-stakes environments",
  },
  {
    title: "Quality & Compliance Assured",
    description:
      " We supply and install systems built with robust, reliable components that meet the highest national and international safety standards. Our contracting work ensures these standards are meticulously followed during every project.",
  },
  {
    title: "Local Presence, Pan-India Reach",
    description:
      "  With a strong operational presence across Delhi NCR and a robust network covering Jaipur, Chandigarh, and numerous industrial clusters like Manesar and Bhiwadi, we guarantee prompt and efficient service, whether you need a supplier or a full-service contractor.",
  },
  {
    title: "Customized & Precision Engineered",
    description:
      " Our solutions are not off-the-shelf. They are custom-engineered and expertly installed by our contracting team to mitigate the specific fire risks of your unique facility and protect your most valuable assets.",
  },
];


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
                      src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618657/fire-suppression-system_dawyka.webp"
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
                  Fire Suppression System Contractor, Supplier & Dealer in 
 Delhi NCR, Gurugram & Noida 
                          </Link>
                        </span><br />
                        <span className="font-light text-gray-700">   <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                           <span  className='  '>
           
                          </span> 
                        </span>   Adhunik FireXpert
                        </span>
                      </p>
                    </div>
                    <p className=" font-sans text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">


For critical assets, sensitive equipment, and high-value properties, an advanced Fire Suppression System provides ultimate protection, automatically detecting and extinguishing fires with specialized agents. As a leading dealer, supplier, and expert contractor of cutting-edge fire suppression systems across Gurugram, Delhi NCR (including Noida, Greater Noida, Faridabad, Ghaziabad), and extended regions like Jaipur, Chandigarh, Sonipat, Panipat, Rohtak, Rewari, Palwal, Bhiwadi, Meerut, Neemrana, Tapukara, Bawal, Manesar, Dharuhera, and Muzaffarnagar, Adhunik FireXpert delivers comprehensive, turnkey solutions.


                    </p>
                    <p className=" font-sans  text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">

We specialize in designing, installing, and maintaining custom fire suppression systems for data centers, server rooms, control rooms, industrial facilities, archives, and high-rise commercial buildings. Our ISI-marked and NFPA-compliant systems ensure rapid, targeted fire control, minimizing damage and ensuring regulatory adherence across Delhi, Haryana, Rajasthan, and Uttar Pradesh.


                    </p>

                  </div>
                </div>

              </div>
            </section>





          </div>
        </section>

            <div className="text-center py-12">
            
              <h2 className=" text-lg md:text-2xl  font-bold text-gray-900 mb-6 leading-tight">

      The Critical Role of Advanced Fire Suppression Systems

 <br />
                <span className="text-red-600">Your Essential First Line of Defense</span>
              </h2>

              <div className="max-w-6xl px-4 text-justify  mx-auto text-sm text-gray-600 space-y-6">
                <p>

Traditional fire fighting methods aren't always suitable for sensitive environments where water or conventional extinguishing agents could cause more damage than the fire itself. Fire Suppression Systems offer a specialized, automatic response, using clean agents or other targeted methods to extinguish fires quickly without harming valuable assets or disrupting critical operations. Partnering with a skilled fire suppression system contractor like Adhunik FireXpert is crucial for safeguarding your most vital infrastructure.

                </p>
               
              </div>
            </div>


<p className=" w-full text-center font-sans py-4 md:py-12  text-lg  md:text-2xl  text-sky-700  capitalize">
Types of Fire Suppression Systems Supplied & Installed by Adhunik FireXpert

 </p>

 <p className=" w-full text-center font-sans text-sm  text-sky-700 ">
Adhunik FireXpert is a top fire suppression system dealer and contractor, providing a range of specialized systems tailored to various hazards and environments

</p>

<div className="row">


  <div className=" h-full flex flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">



    <div className="md:w-[60%] flex items-start flex-col  justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block"> Clean Agent Fire Suppression Systems (e.g., FM-200, Novec 1230, Inergen) </h2>
      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Description : </strong> 
   
    These systems use gaseous agents that are electrically non-conductive, non-corrosive, and leave no residue upon discharge. They suppress fires by removing heat or oxygen, or by interrupting the chemical chain reaction.


      </p>

         <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>   Ideal For : </strong> 
     
Data centers, server rooms, control rooms, telecommunication facilities, museums, archives, and critical electrical rooms in Noida, Gurugram, and across Delhi NCR.


      </p>

      
         <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Benefits : </strong> 
     
Rapid suppression, minimal damage to sensitive equipment, no post-fire cleanup, safe for occupied spaces (depending on agent), and environmentally friendly.
      </p>

      
 

    </div>


    <div className="md:w-[40%] w-auto">
      <div className="flex items-center justify-center h-full">
        <div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/10 rounded-xl">
            <div className="w-auto">
              <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                <img
                  className="     object-center object-cover  "
                  fetchPriority="high"
                  decoding="async"
                  alt="Fire Extinguishers"
                  src="https://www.zedexfire.com/fire-suppression-system-1.webp"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className=" font-dmserif  text-sm font-bold text-white">
           Clean Agent Fire Suppression Systems
 </h2>
              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
           Provides immediate water access, allowing for faster response times. </p>

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
                  className="     object-center object-cover  "
                  fetchPriority="high"
                  decoding="async"
                  alt="Fire Extinguishers"
                  src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618768/fire-suppression-system-2_wgxcfe.jpg"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif  text-sm font-bold text-white"> CO2 Fire Suppression Systems </h2>
              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
           Prevents water in the barrel from freezing and causing damage, ensuring reliability in cold conditions.  </p>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="md:w-[60%] flex flex-col items-start justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block">CO2 Fire Suppression Systems:</h2>
      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Description : </strong> 
     
    Utilize Carbon Dioxide (CO2) gas, which rapidly displaces oxygen to suffocate the fire. CO2 is stored as a liquid and expands into a gas upon discharge.


      </p>

      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Ideal For :  </strong> 
     
   Unoccupied industrial areas, power generation facilities, paint booths, electrical substations, and marine applications in industrial belts like Faridabad and Manesar.

      </p>

      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Benefits :  </strong> 
     
Highly effective on Class B and C fires, non-conductive, leaves no residue. Note: Primarily for unoccupied spaces due to oxygen displacement.



      </p>

 
    </div>


  </div>
 
</div>

<div className="row">


  <div className=" h-full flex flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">



    <div className="md:w-[60%] flex items-start flex-col  justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block"> 
  Foam Fire Suppression Systems

       </h2>
      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Description : </strong> 
   Description: These systems discharge a foam solution that spreads over the burning surface, cooling the fuel and forming a barrier to prevent oxygen from reaching the fire.

      </p>

         <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>   Ideal For : </strong> 
     
  Flammable liquid storage areas, oil refineries, aircraft hangars, chemical plants, and fuel loading docks, often found in Bhiwadi or Muzaffarnagar.


      </p>

      
         <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Benefits : </strong> 
     
 Highly effective on Class B fires, prevents re-ignition, and provides cooling.


      </p>

      
 

    </div>


    <div className="md:w-[40%] w-auto">
      <div className="flex items-center justify-center h-full">
        <div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/10 rounded-xl">
            <div className="w-auto">
              <div className="w-full h-[50vh] object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                <img
                  className="object-center object-contain  "
                  fetchPriority="high"
                  decoding="async"
                  alt="Fire Extinguishers"
                  src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1756807051/foam_fire_suppression_system_2_s4y1px.webp"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-sm font-bold text-white">
             Foam Fire Suppression Systems
 </h2>
              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
           Provides immediate water access, allowing for faster response times. </p>

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
                  className="object-center object-contain h-full w-full  "
                  fetchPriority="high"
                  decoding="async"
                  alt="Fire Extinguishers"
                  src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1756807108/dry_chemical_fire_suppression_system_biv4dl.webp"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif  text-sm font-bold text-white"> Dry Chemical Fire Suppression Systems </h2>
              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
           Prevents water in the barrel from freezing and causing damage, ensuring reliability in cold conditions.  </p>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="md:w-[60%] flex flex-col items-start justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block">
    Dry Chemical Fire Suppression Systems

       </h2>
      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Description : </strong> 
     
      Use specially fluidized and siliconized monoammonium phosphate or sodium bicarbonate-based dry chemical agents to rapidly extinguish fires by interrupting the chemical reaction.


      </p>

      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Ideal For :  </strong> 
     
 Commercial kitchens (for specific applications beyond Class K), industrial hazards, and areas with combined fire risks.


      </p>

      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Benefits :  </strong> 
     
 Rapid knockdown of fires, versatile for multiple fire classes.


      </p>

 
    </div>


  </div>
 
</div>


 <div className="bg-white pt-12  ">
         
       
        {/* ===== Architectural Divider ===== */}
        <div className="  relative h-px bg-gradient-to-r from-transparent via-red-500 to-transparent max-w-7xl mx-auto mb-20">
          <h1 className="absolute left-1/2 -translate-x-1/2 -top-3.5 bg-white px-4 text-gray-500 text-md text-center md:text-3xl">
          Key Components
          </h1>
        </div>

       

        <div className="bg-white">
          {/* ===== Hero Section ===== */}
          <section className="relative     px-6 max-w-6xl mx-auto">
          
            <div className="text-center mb-20">

              <h2 className="text-md  font-bold text-gray-900 mb-6 leading-tight">
          Our Fire Suppression Systems (Supplied & Installed)
 <br />
                <span className="text-red-600 text-sm">

As an experienced fire suppression system supplier and contractor, Adhunik FireXpert ensures every component meets rigorous quality standards and is expertly integrated


                </span>
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
              <h2 className=" text-xl md:text-4xl font-bold text-gray-900 mb-6 text-center">

The Unmatched Benefits of Professional Fire Suppression Systems
 </h2>
              <p className=" text-sm md:text-md text-gray-600 max-w-4xl mx-auto text-center mb-16">
  Implementing an advanced fire suppression system from Adhunik FireXpert offers critical advantages for properties across Gurugram, Delhi, Noida, and beyond
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
              <div className=" text-lg md:text-4xl   font-bold text-gray-900 mb-6 leading-tight">

       Why Choose Adhunik FireXpert for

{" "}

 <span className="text-red-600 ">
  Your Fire Suppression System ?</span>
              </div>

              <div className="max-w-4xl  mx-auto text-sm text-justify md:text-md text-gray-600 space-y-6">


               <p className="md:text-justify text-sm  py-2">
    
As your trusted  <strong className=' text-red-500'>  
   fire suppression system dealer, supplier, and contractor,  </strong>  Adhunik FireXpert brings unparalleled expertise and a commitment to excellence in specialized fire protection:
  

      </p>

            {fireSafetyPoints.map((point, index) => (
  <p key={index} className="md:text-justify text-sm py-2">
    <strong className="text-red-500">{point.title} : </strong>
    {point.description}
  </p>
))}


                
              </div>
            </div>

          

            <div className="text-center mb-10 md:mb-20">
              <div className=" text-lg md:text-4xl   font-bold text-gray-900 mb-6 leading-tight">

       Regular Maintenance: Ensuring Continuous Protection & 
{" "}

 <span className="text-red-600 ">Compliance</span>
              </div>
              <p className=' py-4 text-sm text-gray-600'>
    The reliability of a fire suppression system hinges on diligent maintenance. Adhunik FireXpert, as a comprehensive fire safety contractor, provides ongoing maintenance services across Gurugram, Delhi, Noida, and all our service areas:

</p>

              <div className="max-w-4xl  mx-auto text-sm text-justify md:text-md text-gray-600 space-y-6">


               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Routine Checks & Inspections : </strong> 
 Regular visual inspections and functional checks of detectors, nozzles, piping, and control panels.

      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>   Agent Level Monitoring : </strong> 
 Periodic verification of suppression agent quantity and pressure in storage cylinders.


      </p>
                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Detection Device Testing :</strong> 
 Regular testing of smoke, heat, and flame detectors to ensure proper function.

      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> System Drills & Training : </strong> 
 Conducting simulated drills and providing training to your staff on system operation and emergency procedures.



      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Compliance & Re-certification : </strong> 
 Ensuring your system consistently meets Fire NOC requirements, NFPA standards, and other local fire safety regulations for continuous operability.


      </p>

                
              </div>
            </div>

          

            {/* Closing CTA */}
            <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-12 mb-24 text-white relative overflow-hidden">
              <div style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/002/401/674/small/black-and-white-small-dots-pattern-free-vector.jpg")` }}
                className="absolute inset-0   bg-[length:20px_20px] opacity-10"></div>
              <div className="relative max-w-4xl mx-auto text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-6 text-red-300" />
                <h3 className=" text-lg md:text-3xl font-bold mb-6">
            Protect Your Critical Assets with Adhunik FireXpert!

</h3>
                <p className=" text-sm text-justify   text-red-100 mb-8">
       Don't compromise the safety of your invaluable assets. Partner with Adhunik FireXpert, the premier fire suppression system dealer, supplier, and contractor committed to delivering reliable, compliant, and cutting-edge fire protection solutions. Our team is ready to assess your unique risks, design, install, and maintain a system that offers maximum protection and peace of mind for your critical infrastructure.


                </p>
                <Link href='/support-form' className="bg-white w-fit text-red-900 px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors text-sm md:text-md mx-auto shadow-xl">
                  Schedule Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>
        </div>

        

      </div>



 

</div>

    </>
  )
}
