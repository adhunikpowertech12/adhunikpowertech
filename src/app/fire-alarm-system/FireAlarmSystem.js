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

export default function FireAlarmSystem() {

  
  const integrationExamples = [
    {
      icon: <GitPullRequest className="w-6 h-6" />,
      title:
      <>
        <Link  href='https://adhunikdecodive.com/modular-kitchen-designs' className=' text-red-700 hover:text-red-500'>
    Fire Alarm Control Panel (FACP)
        </Link>
      </> 
      ,
      content: "The central nervous system of the system, receiving signals from detectors, processing them, and activating alarms. Our contractors ensure optimal placement and configuration."
    },


 

    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>
 Detectors
        </Link>
      </> 
      ,
      content: <>
        <ul className=' list-disc'>
          <li>
<strong className=' text-red-500 '>Smoke Detectors :  
</strong>
Respond to smoke particles (e.g., photoelectric, ionization).
          </li>

          
          <li>
<strong className=' text-red-500 '>Heat Detectors :
</strong>
 Respond to rapid temperature rise or fixed high temperatures.
   </li>

          <li>
<strong className=' text-red-500 '>Multi-Sensor Detectors :
</strong>
 Combine detection methods for enhanced accuracy and reduced false alarms.
 </li>


        </ul>
      </>
    },

   

    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>
 Alarm Notification Devices

        </Link>
      </> 
      ,
      content: <>
        <ul className=' list-disc'>
          <li>
<strong className=' text-red-500 '>
Audible Alarms :  
</strong>
 Hooters, sirens, bells to alert occupants.

          </li>

          
          <li>
<strong className=' text-red-500 '> Visual Alarms :
</strong>
 Strobes and flashing lights, essential for the hearing impaired and in noisy environments.

   </li>
 


        </ul>
      </>
    },

   
  {
      icon: <GitPullRequest className="w-6 h-6" />,
      title:
      <>
        <Link  href='https://adhunikdecodive.com/modular-kitchen-designs' className=' text-red-700 hover:text-red-500'>
   Manual Call Points (Manual Pull Stations)
        </Link>
      </> 
      ,
      content: " Allow occupants to manually trigger an alarm in case of a visible fire."
    },


   
  {
      icon: <GitPullRequest className="w-6 h-6" />,
      title:
      <>
        <Link  href='https://adhunikdecodive.com/modular-kitchen-designs' className=' text-red-700 hover:text-red-500'>
    Control Modules & Interface Units
        </Link>
      </> 
      ,
      content: " Facilitate communication between the FACP and other building systems (e.g., HVAC shutdown, elevator recall, access control)."
    },


   
  {
      icon: <GitPullRequest className="w-6 h-6" />,
      title:
      <>
        <Link  href='https://adhunikdecodive.com/modular-kitchen-designs' className=' text-red-700 hover:text-red-500'>
    Power Supplies
        </Link>
      </> 
      ,
      content: " Primary (mains electricity) and secondary (battery backup) power sources to ensure continuous operation."
    },

 

  ];

  // Design considerations
  const designConsiderations = [
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Early Detection & Warning",
      content: " Provides crucial minutes for safe evacuation, significantly improving life safety outcomes."
    },

    {
       icon: <Droplets className="w-6 h-6" />,
      title: "Life Safety",
      content: " The primary benefit, ensuring that all occupants are alerted promptly, giving them time to exit the premises."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Minimizes Property Damage",
      content: "Early warning allows for quicker professional response, limiting fire spread and reducing structural and asset loss."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Reduced Emergency Response Costs",
      content: "Quicker alerts lead to more efficient firefighting efforts, lowering overall expenses."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Regulatory Compliance",
      content: "Essential for meeting stringent fire safety norms, including BIS, NFPA (e.g., NFPA 72), and local municipal fire department requirements, especially under acts like the Haryana Fire Act 2022 in regions like Gurugram. Our contractor expertise ensures your system adheres to all applicable acts and standards."
    },
     
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Potential Insurance Benefits",
      content: "Properties with certified, well-maintained fire alarm systems often qualify for lower insurance premiums due to reduced fire risk."
    },
     
   
  ];


  const fireSafetyPoints = [
  {
    title: "Turnkey Solutions",
    description:
      "We offer a complete suite of services, from initial hazard assessment, customized engineering design, ISI-certified supply, precise installation by our expert contracting team, rigorous testing, and proactive Annual Maintenance Contracts (AMC). Our role as a fire safety contractor means we handle every step with precision.",
  },
  {
    title: "Certified Expertise",
    description:
      " Our team of highly qualified engineers and technicians possesses extensive experience in designing and implementing complex fire alarm networks for diverse industries and infrastructures.",
  },
  {
    title: "Quality & Compliance Assured",
    description:
      " We supply and install systems built with robust, reliable components that meet the highest national and international safety standards. Our contracting work ensures these standards are meticulously followed during every project across Delhi NCR and our expanded service locations.",
  },
  {
    title: "Local Presence, Pan-India Reach",
    description:
      "With a strong operational presence across Delhi NCR and a robust network covering Jaipur, Chandigarh, and numerous industrial clusters like Manesar and Bhiwadi, we guarantee prompt and efficient service, whether you need a supplier or a full-service contractor.",
  },
  {
    title: "Customized & Precision Engineered",
    description:
      "Our solutions are not off-the-shelf. They are custom-engineered and expertly installed by our contracting team to meet the specific detection needs and structural requirements of your unique facility.",
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
                      src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1749038480/fire_alarm_scmnlu.webp"
                      alt="Adhunik Powertech air washer"
                      loading="lazy"
                    />


                  </div>

                  <div className=" w-full md:w-6/12 md:text-center text-left text-gray-800 mb-6 flex justify-center md:items-center flex-col mt-2">
                    <div className="md:text-center text-left     ">


                      <span className="text-sm font-medium  flex justify-center md:justify-start mb-3 pt-6 items-center md:items-center  text-red-800">
                      <Sparkles className="w-4 h-4 text-red-600 mr-4" /> FIRE SAFETY ESSENTIALS
                      </span>


                      <p className="  text-2xl text-center md:text-left font-bold text-gray-900  mb-2 leading-tight">
                        <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                          <Link href='https://www.adhunikpowertech.com/top-Fire-Fighting-Company-in-Delhi-NCR-And-India' className='  '>
              Fire Alarm System Contractor, Supplier & Dealer in Delhi NCR, Gurugram, Noida & Across India 
                          </Link>
                        </span><br />
                        <span className="font-light text-gray-700">   <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                           <span  className='  '>
           
                          </span> 
                        </span>   Adhunik FireXpert
                        </span>
                      </p>
                    </div>
                    <p className=" font-sans text-md text-gray-600 text-justify  md:text-left pt-3   ">

For the earliest possible detection and warning in the event of a fire, a reliable Fire Alarm System is paramount. As a leading dealer, supplier, and expert contractor of state-of-the-art fire alarm systems across Gurugram, Delhi NCR (including Noida, Greater Noida, Faridabad, Ghaziabad), and extended regions like Jaipur, Chandigarh, Sonipat, Panipat, Rohtak, Rewari, Palwal, Bhiwadi, Meerut, Neemrana, Tapukara, Bawal, Manesar, Dharuhera, and Muzaffarnagar, Adhunik FireXpert delivers comprehensive, turnkey solutions.

                    </p>
                    <p className=" font-sans text-md text-gray-600 text-justify  md:text-left pt-3   ">
We specialize in designing, installing, and maintaining custom fire alarm systems for a wide range of properties, from commercial buildings and industrial facilities to educational institutions and large residential complexes. Our ISI-marked and NFPA-compliant systems ensure rapid detection and immediate alerts, providing precious time for safe evacuation and prompt emergency response, crucial for protecting lives and property across Delhi, Haryana, Rajasthan, and Uttar Pradesh.

                    </p>

                  </div>
                </div>

              </div>
            </section>





          </div>
        </section>

            <div className="text-center py-12">
            
              <h2 className="text-2xl  font-bold text-gray-900 mb-6 leading-tight">

    The Critical Role of Advanced Fire Alarm Systems

 <br />
                <span className="text-red-600">Your Essential First Line of Defense</span>
              </h2>

              <div className="max-w-6xl text-justify  mx-auto text-sm text-gray-600 space-y-6">
                <p>

A meticulously planned and expertly installed fire alarm system serves as your first line of defense, providing early warning signals that can mean the difference between minor incident and major disaster. These systems are vital for detecting smoke, heat, or flames and initiating immediate alerts, allowing occupants to evacuate safely and enabling firefighters to respond quickly. Partnering with a skilled fire alarm system contractor like Adhunik FireXpert is essential for safeguarding your people and assets.

                </p>
               
              </div>
            </div>


<p className=" w-full text-center font-sans py-4 md:py-12   text-2xl  text-sky-700  capitalize">
Types of Fire Alarm Systems Supplied & Installed by Adhunik FireXpert

 </p>

 <p className=" w-full text-center font-sans  text-sm  text-sky-700 ">
Adhunik FireXpert is a top fire alarm system dealer and contractor, offering a range of systems tailored to various building sizes, complexities, and hazard levels

</p>

<div className="row">


  <div className=" h-full flex flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">



    <div className="md:w-[60%] flex items-start flex-col  justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block"> Conventional Fire Alarm Systems</h2>
      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Description : </strong> 
   
   These systems divide a building into detection zones. When an alarm triggers, the control panel indicates the zone, requiring manual inspection to pinpoint the exact location.


      </p>

         <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>   Ideal For : </strong> 
     
 Smaller commercial buildings, offices, and schools where pinpoint location accuracy isn't as critical. We expertly install these in various establishments across Faridabad and Ghaziabad.


      </p>

      
         <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Benefits : </strong> 
     
  Cost-effective, simple to install, and reliable for less complex structures.

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
                  src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618655/fire-alarm-system_02_uzvg1k.webp"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-2xl font-bold text-white">
          Conventional Fire Alarm Systems

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
              <div className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                <img
                  className=" object-center object-cover  "
                  fetchPriority="high"
                  decoding="async"
                  alt="Fire Extinguishers"
                  src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1753768470/FAS_BLOG_te00bz.webp"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-2xl font-bold text-white"> Addressable Fire Alarm Systems
               </h2>
              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
           Prevents water in the barrel from freezing and causing damage, ensuring reliability in cold conditions.  </p>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="md:w-[60%] flex flex-col items-start justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block">Addressable Fire Alarm Systems</h2>
      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Description : </strong> 
     
     Each detector, call point, and module has a unique address, allowing the control panel to pinpoint the exact device that initiated the alarm.



      </p>

      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Ideal For :  </strong> 
     
     Large commercial buildings, high-rise residential complexes, data centers, and industrial facilities in Gurugram and Noida, where precise location identification is crucial for rapid response.

      </p>

      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Benefits :  </strong> 
     
  Offers precise location identification, faster response times, and enhanced fault tolerance.



      </p>

 
    </div>


  </div>
 
</div>



<div className="row">


  <div className=" h-full flex flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">


    <div className="md:w-[60%] flex items-start flex-col  justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block"> 
Wireless Fire Alarm Systems

       </h2>
      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Description : </strong> 
  These systems use radio frequencies for communication between devices, eliminating the need for extensive wiring.


      </p>

         <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>   Ideal For : </strong> 
     
   Buildings where wiring is difficult or undesirable (e.g., historical buildings), temporary structures, or sites requiring flexible system expansion. Our contracting team provides seamless wireless installations.


      </p>

      
         <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Benefits : </strong> 
     
  Quick and easy installation, minimal disruption, and flexibility in placement.


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
                  src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618654/Fire-Alarm_qlh32m.webp"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-2xl font-bold text-white">
           Wireless Fire Alarm Systems

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
         Our Fire Alarm Systems (Supplied & Installed)

 <br />
                <span className="text-red-600">

As an experienced fire alarm system supplier and contractor, Adhunik FireXpert ensures every component meets rigorous quality standards and is expertly integrated for optimal performance



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
                  <div className="text-gray-600 text-sm text-justify md:text-left">{example.content}</div>
                </div>
              ))}
            </div>

          

            {/* Design Considerations Section */}
            <div className="mb-24">
              <h2 className=" text-xl md:text-4xl font-bold text-gray-900 mb-6 text-center">

The Unmatched Advantages of Professional Fire Alarm Systems

 </h2>
              <p className=" text-sm md:text-md text-gray-600 max-w-4xl mx-auto text-center mb-16">
  Implementing a professional fire alarm system from Adhunik FireXpert offers critical advantages for properties across Delhi NCR, Gurugram, Noida, and beyond
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
              <div className="text-4xl   font-bold text-gray-900 mb-6 leading-tight">

       Why Choose Adhunik FireXpert for

{" "}

 <span className="text-red-600 ">
 Your Fire Alarm System Contractor & Supplier ?
  </span>
              </div>

              <div className="max-w-4xl  mx-auto text-sm text-justify md:text-md text-gray-600 space-y-6">


               <p className="md:text-justify text-sm  py-2">
    
    As your trusted <strong className=' text-red-500'>     fire alarm system dealer, supplier, and contractor   </strong>
, Adhunik FireXpert brings unparalleled expertise and a commitment to excellence in fire detection

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
              <div className="text-4xl   font-bold text-gray-900 mb-6 leading-tight">

     Regular Maintenance : Ensuring Continuous Alerts & 
{" "}

 <span className="text-red-600 ">Compliance</span>
              </div>
              <p className=' py-4 text-sm text-gray-600'>

   The reliability of a fire alarm system hinges on diligent maintenance. Adhunik FireXpert, as a comprehensive fire safety contractor, provides ongoing maintenance services across Gurugram, Delhi, Noida, and all our service areas

</p>

              <div className="max-w-4xl  mx-auto text-sm text-justify md:text-md text-gray-600 space-y-6">


               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Routine Checks & Inspections : </strong> 
 Regular visual inspections and functional checks of all components, including detectors, control panels, and notification devices.

      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Testing Detectors : </strong> 
 Periodic testing of smoke, heat, and multi-sensor detectors to ensure they respond accurately.



      </p>
                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Battery Replacement : </strong> 
 Timely replacement of backup batteries to ensure system functionality during power outages.

      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Alarm System Testing : </strong> 
  Regular testing of audible and visual alarms to confirm all notification devices are operational.




      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Thorough Documentation : </strong> 
 Maintaining detailed records of all tests, inspections, and repairs for compliance.


      </p>

              
                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Compliance Checks : </strong> 
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
          Secure Your Property with a State-of-the-Art Fire Alarm System!

</h3>
                <p className=" text-sm   text-red-100 mb-8">
   Don't compromise on early detection and life safety. Partner with Adhunik FireXpert, the premier fire alarm system dealer, supplier, and contractor committed to delivering reliable, compliant, and cutting-edge fire detection solutions. Our team is ready to assess your needs, design, install, and maintain a system that offers maximum protection and peace of mind for your property.


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
