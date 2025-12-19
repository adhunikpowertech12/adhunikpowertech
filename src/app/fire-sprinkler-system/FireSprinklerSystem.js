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

export default function FireSprinklerSystem() {

  
  const integrationExamples = [
    {
      icon: <GitPullRequest className="w-6 h-6" />,
      title:
      <>
        <Link  href='https://adhunikdecodive.com/modular-kitchen-designs' className=' text-red-700 hover:text-red-500'>
      Sprinkler Heads

        </Link>
      </> 
      ,
      content: " Precision-engineered to activate individually at specific temperatures, releasing water directly onto the fire."
    },

    {
      icon: <Eye className="w-6 h-6" />,
      title: 
       <>
        <Link  href='https://adhunikdecodive.com/domestic-furniture' className=' text-red-700 hover:text-red-500'>
       Piping Network
</Link>
      </> 
,
      content: "A robust system of pipes, strategically designed and installed by our contracting team, to transport water efficiently throughout the protected area."
    },

    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>
       Control Valves
        </Link>
      </> 
      ,
      content: "Regulate water flow within the system, crucial for isolation, maintenance, and emergency operations."
    },

    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>Water Supply</Link>
      </> 
      ,
      content: "A reliable and adequately pressurized water source (municipal connection, dedicated tanks, or fire pumps) ensuring sustained water delivery."
    },

    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>
       Integrated Alarm Systems
        </Link>
      </> 
      ,
      content: "Alert occupants and emergency services immediately upon sprinkler activation."
    },

    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>Flow Switches</Link>
      </> 
      ,
      content: " Detect water flow in the system, triggering alarms and notifications."
    },

    
    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>Fire Pumps</Link>
      </> 
      ,
      content: "Ensure sufficient water pressure and volume, especially in large or high-rise structures in Delhi and Gurugram."
    },

   

  ];

  // Design considerations
  const designConsiderations = [
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Saves Lives",
      content: " Rapid suppression buys precious time for occupants to evacuate safely, significantly reducing fatalities in a fire incident."
    },

    {
       icon: <Droplets className="w-6 h-6" />,
      title: "Minimizes Property Damage",
      content: "Automatic activation contains and extinguishes fires quickly, limiting the spread of flames, smoke, and heat, thus minimizing structural and asset loss."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Reduced Insurance Premiums",
      content: "Properties equipped with certified fire sprinkler systems often qualify for lower insurance costs due to significantly reduced fire risk."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Lower Emergency Response Costs",
      content: "Quicker fire suppression means less extensive firefighting efforts, reducing overall emergency service expenses."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Regulatory Compliance",
      content: "Essential for meeting stringent fire safety norms, including BIS, NFPA (e.g., NFPA 13, 25), and local municipal fire department requirements, especially under acts like the Haryana Fire Act 2022 in regions like Gurugram. Our contractor expertise ensures your system is always compliant."
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
                      src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1756803732/fire-sprinkler-systems_qjaxgo.webp"
                      alt="Adhunik Powertech air washer"
                      loading="lazy"
                    />


                  </div>

                  <div className=" w-full md:w-6/12 md:text-center text-left text-gray-800 mb-6 flex justify-center md:items-center flex-col mt-2">
                    <div className="md:text-center text-left     ">


                      <span className="text-sm font-medium  flex justify-center md:justify-start mb-3 pt-6 items-center md:items-center  text-red-800">
                      <Sparkles className="w-4 h-4 text-red-600 mr-4" /> FIRE SAFETY ESSENTIALS
                      </span>


                      <p className="  text-lg  md:text-2xl text-center md:text-left font-bold text-gray-900  mb-2 leading-tight">
                        <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                          <Link href='https://www.adhunikpowertech.com/top-Fire-Fighting-Company-in-Delhi-NCR-And-India' className='  '>
                    Fire Sprinkler System Contractor, Supplier & Dealer 

                          </Link>
                        </span><br />
                        <span className="font-light text-gray-700">   <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                           <span  className='  '>
                in Delhi NCR, Gurugram, Noida & Across India
                          </span> 
                        </span>   Adhunik FireXpert
                        </span>
                      </p>
                    </div>
                    <p className=" font-sans  text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">
            For unparalleled automatic fire protection, a state-of-the-art Fire Sprinkler System is a cornerstone of modern safety infrastructure. As a leading dealer, supplier, and specialized contractor of advanced fire sprinkler systems across Gurugram, Delhi NCR (including Noida, Greater Noida, Faridabad, Ghaziabad), and extended regions like Jaipur, Chandigarh, Sonipat, Panipat, Rohtak, Rewari, Palwal, Bhiwadi, Meerut, Neemrana, Tapukara, Bawal, Manesar, Dharuhera, and Muzaffarnagar, Adhunik FireXpert provides comprehensive, end-to-end solutions from meticulous design to flawless installation and ongoing maintenance.
                    </p>

                    <p className=" font-sans text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">

We equip commercial complexes, industrial facilities, educational institutions, and large residential properties with ISI-marked and NFPA-compliant fire sprinkler systems, ensuring rapid and automatic fire detection and suppression. Our expertise guarantees your property's adherence to the latest fire safety regulations, offering superior protection and peace of mind across Delhi, Haryana, Rajasthan, and Uttar Pradesh.


                    </p>

                  </div>
                </div>

              </div>
            </section>





          </div>
        </section>

            <div className="text-center py-12">
            
              <h2 className=" text-lg md:text-2xl  font-bold text-gray-900 mb-6 leading-tight">
         Why a Modern Fire Sprinkler System is Indispensable for Your Property

 <br />
                <span className="text-red-600">Your Essential First Line of Defense</span>
              </h2>

              <div className="max-w-6xl text-justify  mx-auto px-4 text-sm text-gray-600 space-y-6">
                <p>

           A professionally designed and installed fire sprinkler system is arguably the most effective tool in minimizing fire damage and protecting occupants. These automatic systems detect fires early and suppress them immediately, often before the fire department arrives. Investing in a quality system from a trusted fire sprinkler system supplier and contractor like Adhunik FireXpert significantly enhances property safety, safeguards lives, and ensures business continuity.

                </p>
               
              </div>
            </div>


<p className=" w-full text-center font-sans py-4 md:py-12  text-lg  md:text-2xl  text-sky-700  capitalize">
Types of Fire Sprinkler Systems Supplied & Installed <br /> by Adhunik FireXpert
 </p>

 <p className=" w-full text-center font-sans px-4  text-sm  text-sky-700 ">
Adhunik FireXpert is a top fire sprinkler system dealer and contractor, offering a range of systems tailored to various building types and hazard levels

</p>

<div className="row">


  <div className=" h-full flex flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">

    <div className="md:w-[60%] flex items-start flex-col  justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block"> Wet Pipe Sprinkler Systems </h2>
      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Description : </strong> 
     The most common type, with pipes constantly filled with water, allowing for immediate discharge upon sprinkler head activation.


      </p>

         <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>   Ideal For : </strong> 
     
Offices, residential buildings, and retail spaces in Gurugram, Noida, and across Delhi NCR.



      </p>

      
         <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Benefits : </strong> 
     
Simple, reliable, and cost-effective, offering rapid response to fire.


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
                  src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1753263837/fire_sprinkler_m2veyv.webp"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-lg md:text-3xl font-bold text-white">
           Wet Pipe Sprinkler Systems
 </h2>
              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
             Experience the Wet Pipe Sprinkler Systems—simple, effective, and trusted fire protection. </p>

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
                  className=" object-center object-cover  "
                  fetchPriority="high"
                  decoding="async"
                  alt="Fire Extinguishers"
                  src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1756803732/fire-sprinkler-systems_qjaxgo.webp"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-lg md:text-3xl font-bold text-white"> Dry Pipe Sprinkler Systems
               </h2>
              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
               Engineered to prevent freezing and protect sensitive areas with precision-controlled water release.  </p>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="md:w-[60%] flex flex-col items-start justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block"> Dry Pipe Sprinkler Systems</h2>
      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Description : </strong> 
     
       Pipes are filled with pressurized air or nitrogen. Water is held back by a valve and released only when a sprinkler head activates.


      </p>

      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Ideal For :  </strong> 
     
   Unheated warehouses, parking garages, and environments prone to freezing temperatures, or areas where accidental discharge of water could be damaging.


      </p>

      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Benefits :  </strong> 
     
  Prevents freezing of water in pipes, suitable for cold climates or sensitive areas.


      </p>

 
    </div>


  </div>
 
</div>

<div className="row">


  <div className=" h-full flex flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">

    <div className="md:w-[60%] flex items-start flex-col  justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block"> 
     Preaction Sprinkler Systems
       </h2>
      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Description : </strong> 
    A two-stage system where both a detection event (e.g., smoke or heat) and sprinkler head activation are required before water is released into the pipes.


      </p>

         <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>   Ideal For : </strong> 
     
  High-value asset areas like data centers, museums, and server rooms in Greater Noida and Jaipur, where accidental water discharge is highly undesirable.


      </p>

      
         <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Benefits : </strong> 
     
  Minimizes accidental discharge risk, critical for protecting sensitive equipment.


      </p>

      
 

    </div>


    <div className="md:w-[40%] w-auto">
      <div className="flex items-center justify-center h-full">
        <div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/10 rounded-xl">
            <div className="w-auto">
              <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                <img
                  className="object-center object-cover  "
                  fetchPriority="high"
                  decoding="async"
                  alt="Fire Extinguishers"
                  src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1756803732/Fire_Pre_Action_1_s3grww.webp"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-lg md:text-3xl font-bold text-white">
             Preaction Sprinkler Systems
         </h2>
              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                 Precision fire protection for critical and high-value assets.</p>

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
                  className="object-center object-cover  "
                  fetchPriority="high"
                  decoding="async"
                  alt="Fire Extinguishers"
                  src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1756803732/deluge_sprinkler_system_qpoyet.jpg"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-lg md:text-3xl font-bold text-white"> Deluge Sprinkler Systems
               </h2>
              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
           Experience the Deluge Sprinkler Systems—rapid, full-scale protection for high-risk fire zones. 
            </p>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="md:w-[60%] flex flex-col items-start justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block">
     Deluge Sprinkler Systems
       </h2>
      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Description : </strong> 
     
       Sprinkler heads are open, and water is delivered through all heads simultaneously once a detection system activates.


      </p>

      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Ideal For :  </strong> 
     
    High-hazard industrial areas, aircraft hangars, and chemical storage facilities in Faridabad, Manesar, and Bhiwadi.



      </p>

      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Benefits :  </strong> 
     
   Rapid and widespread water application for swift suppression of fast-spreading fires.


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
          <section className="relative  px-6 max-w-6xl mx-auto">
          
            <div className="text-center mb-20">

              <h2 className="text-md  font-bold text-gray-900 mb-6 leading-tight">
           Our Fire Sprinkler Systems (Supplied & Installed) :
 <br />
                <span className="text-red-600 text-sm">
      As an experienced fire sprinkler system supplier and contractor, Adhunik FireXpert ensures every component meets the highest quality standards and is expertly installed for optimal performance

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

The Unmatched Advantages of Professional Fire Sprinkler Systems

 </h2>
              <p className=" text-sm md:text-md text-gray-600 max-w-4xl mx-auto text-center mb-16">
       Implementing a professional fire sprinkler system from Adhunik FireXpert offers critical benefits for properties across Noida, Ghaziabad, and beyond

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

           Why Choose Adhunik FireXpert as Your 

{" "}

 <span className="text-red-600 ">
 Fire Sprinkler System Contractor & Supplier ?</span>
              </div>

              <div className="max-w-4xl  mx-auto text-sm text-justify md:text-md text-gray-600 space-y-6">


               <p className="md:text-justify text-sm  py-2">
    
As your trusted  <strong className=' text-red-500'>  
    fire sprinkler system dealer, supplier, and contractor,   </strong>  Adhunik FireXpert brings unparalleled expertise and a commitment to excellence:

      </p>

               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  
      End-to-End Solutions :  </strong> 
  We offer a complete suite of services, from initial consultation and custom design to ISI-certified installation, rigorous testing, and proactive Annual Maintenance Contracts (AMC). Our role as a fire safety contractor means we handle every step with precision.

      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Certified Expertise : </strong> 
 Our team of highly qualified engineers and technicians possesses extensive experience in designing and implementing complex fire sprinkler networks for diverse industries and infrastructures.


      </p>
                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Quality & Compliance : </strong> 
 We supply systems built with robust, reliable components that meet the highest national and international safety standards. Our contracting work ensures these standards are meticulously followed during installation across Delhi NCR and our expanded service locations.


      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Local Presence, Pan-India Reach : </strong> 
 With a strong operational presence across Delhi NCR and a robust network covering Jaipur, Chandigarh, and numerous industrial clusters like Manesar and Bhiwadi, we guarantee prompt and efficient service, whether you need a supplier or a full-service contractor.


      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Customized Design & Installation : </strong> 

 We don't believe in one-size-fits-all. Our solutions are custom-engineered and expertly installed by our contracting team to meet the specific fire hazards and structural requirements of your property.


      </p>

                
              </div>
            </div>

          

            <div className="text-center mb-10 md:mb-20">
              <div className=" text-lg md:text-4xl   font-bold text-gray-900 mb-6 leading-tight">

         Regular Maintenance: Ensuring System Readiness & 
 
{" "}

 <span className="text-red-600 ">Compliance</span>
              </div>
              <p className=' py-4 text-sm text-gray-600'>
        A fire sprinkler system is only effective if it's meticulously maintained. Adhunik FireXpert, as a comprehensive fire safety contractor, provides ongoing maintenance services across Gurugram, Delhi, Noida, and all our service areas

</p>

              <div className="max-w-4xl  mx-auto text-sm text-justify md:text-md text-gray-600 space-y-6">


               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Annual Inspections (NFPA 25) : </strong> 
 Professional inspections conducted at least once a year to check for leaks, corrosion, obstructions, and proper water flow.

      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>   Testing of Alarm Systems : </strong> 
 Ensuring that integrated alarms and notifications function correctly upon system activation.



      </p>
                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Sprinkler Head Maintenance : </strong> 
 Regular checks to ensure heads are free from obstructions and are operating properly.


      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> System Flow Testing : </strong> 
 Testing the flow and pressure to ensure adequate water supply during an emergency.



      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Compliance Checks : </strong> 
 Ensuring your system consistently meets Fire NOC requirements and other local fire safety regulations. Our contracting and maintenance services ensure you stay compliant.


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
              Partner with the Experts in Fire Sprinkler Systems!

</h3>
                <p className=" text-sm  text-justify text-red-100 mb-8">
            Don't leave your property's safety to chance. Partner with Adhunik FireXpert, the premier fire sprinkler system dealer, supplier, and contractor committed to delivering reliable, compliant, and cutting-edge fire protection solutions. Our team is ready to assess your needs, design, install, and maintain a system that offers maximum protection and peace of mind.


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
