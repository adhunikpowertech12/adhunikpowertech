"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  ShieldCheck,
  GaugeCircle,
  Thermometer,
  Clock,
  BadgeDollarSign,
  Hammer,
  Boxes,
  FileCheck2,
  Ruler,
  AlertTriangle,
  Trash2,
  Snowflake
} from "lucide-react";

import {
  ScanSearch,
  Users2,
  ThermometerSun,
  Wrench,
  SlidersHorizontal,
  BarChart3,

  Wind,
  LayoutTemplate,
  Plug,
  Cpu
} from "lucide-react";

import {
  CalendarCheck2,
  Radar,
  Repeat2,
  LineChart,
  ThumbsDown,
  ShieldX,
  ClipboardCheck,
  Building2
} from "lucide-react";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


import { PhoneCall, AlarmClockCheck, MapPin, PackageCheck } from 'lucide-react';
import { RefreshCw, } from 'lucide-react';


export default function CentralAcSystem() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const energySystems = [

    {
      title: ' Chiller Systems',
      desc: <>

        <p>
    Ideal for very large commercial and industrial applications, offering superior cooling capacity and efficiency.

</p>
 
      </>,
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },

  
    {
      title: 'Ductable Air Conditioners ',
      desc: <>

        <p>
    Perfect for medium to large spaces requiring discreet, uniform cooling.


</p>
 
 
      </>,
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },

  
    {
      title: ' VRF/VRV Systems',
      desc: <>

        <p>
  Highly versatile and energy-efficient, allowing individual temperature control in different zones.


</p>
 
 
      </>,
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },

  
    {
      title: ' Air Handling Units (AHUs)',
      desc: <>

        <p>
 Custom-engineered solutions for precise air treatment and distribution, often integrated with other systems.


</p>
 
 
      </>,
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },

  
    {
      title: 'Precision AC Units',
      desc: <>

        <p>
  For critical environments like server rooms, where temperature and humidity control are paramount.

</p>
 
 
      </>,
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },

  
    
  
  ];


  const ClientReferences = [

    {

      description: <>
        <p> 
        <span className='font-bold text-lg  text-cyan-700'>
        Turnkey Expertise (Design, Supply, Installation, Maintenance)
</span> <br />


        <strong className=' font-semibold  text-cyan-700'>
        The Difference :
         </strong> 

       A true leader handles everything from concept to commissioning and beyond. They don't just sell you a unit; they engineer a complete climate control solution.

</p>

        <p> 
        <strong className=' font-semibold  text-cyan-700'>
     Adhunik Powertech's Approach : </strong> 
      We act as your complete Central Air Conditioning contractor. Our in-house engineers conduct meticulous site assessments, design custom layouts for optimal airflow and energy use, expertly source and supply premium equipment, manage professional installation, and provide robust Annual Maintenance Contracts (AMC) to ensure longevity.
</p>

      </> ,
    },

   
  
    {

      description: <>
        <p> 
        <span className=' font-bold text-lg   text-cyan-700' >
      Proven Experience with Commercial & Industrial Projects
</span> <br />

        <strong className=' font-semibold  text-cyan-700'>
        The Difference :  </strong> 
   Central Air Conditioning for a large office building or factory is vastly different from a residential setup. You need a contractor with a track record in complex, large-scale projects.

</p>


        <p> 
       

        <strong className=' font-semibold  text-cyan-700'>
     Adhunik Powertech's Experience : </strong> 
      Since 2005, we have been a trusted name in the <Link href='/hvac' className=' font-semibold texcy'>
        HVAC
      </Link>  industry, renowned for delivering sophisticated Central Air Conditioning solutions for hotels, hospitals, corporate offices, data centers, manufacturing units, and commercial complexes across Delhi, Gurugram, Noida, Faridabad, Ghaziabad, Jaipur, and Chandigarh. Our portfolio speaks for itself.

</p>

      </> ,
    },

   
  
    {

      description: <>
        <p> 
        <span className=' font-bold text-lg   text-cyan-700' >
    Focus on Energy Efficiency & Cost Savings
</span> <br />

        <strong className=' font-semibold  text-cyan-700'>
        The Difference :  </strong> 

  A top contractor actively seeks out and recommends systems that provide optimal cooling with minimal power consumption, helping you save significantly on utility bills.

</p>


        <p> 
       

        <strong className=' font-semibold  text-cyan-700'>
      Adhunik Powertech's Commitment : </strong> 
     We specialize in energy-efficient Central Air Conditioning systems, including advanced Chillers and VRF/VRV units. Our designs are optimized to reduce your carbon footprint and operational costs without compromising comfort.


</p>

      </> ,
    },

   
  
    {

      description: <>
        <p> 
        <span className=' font-bold text-lg   text-cyan-700' >
   Emphasis on Indoor Air Quality (IAQ)
</span> <br />

        <strong className=' font-semibold  text-cyan-700'>
        The Difference :  </strong> 

   Modern clients demand more than just cool air; they want healthy air. A leading contractor integrates features for superior air filtration, ventilation, and humidity control.

</p>


        <p> 
       

        <strong className=' font-semibold  text-cyan-700'>
       Adhunik Powertech's Solution : </strong> 
  Our Central Air Conditioning systems are designed not only for comfort but also for health. We incorporate state-of-the-art filtration and ventilation strategies to ensure your indoor environment is fresh, clean, and free of allergens and airborne contaminants.


</p>

      </> ,
    },

   
  
    {

      description: <>
        <p> 
        <span className=' font-bold text-lg   text-cyan-700' >
   Compliance and Certifications
</span> <br />

        <strong className=' font-semibold  text-cyan-700'>
        The Difference :  </strong> 

  Ensures your system meets all national and local safety and performance standards.

</p>


        <p> 
       

        <strong className=' font-semibold  text-cyan-700'>
        Adhunik Powertech's Assurance :  </strong> 
  
  Our equipment and installations adhere to rigorous industry standards and building codes, ensuring your system is safe, efficient, and compliant.



</p>

      </> ,
    },

   
  
  
    {

      description: <>
        <p> 
        <span className=' font-bold text-lg   text-cyan-700' >
  Robust After-Sales Service & Support
</span> <br />

        <strong className=' font-semibold  text-cyan-700'>
        The Difference :  </strong> 

   Even the best systems need ongoing care. A reliable contractor offers responsive support and comprehensive maintenance plans.

</p>


        <p> 
       

        <strong className=' font-semibold  text-cyan-700'>
        Adhunik Powertech's Promise :  </strong> 
  
 Our dedicated service team provides rapid response and flexible AMC options, keeping your Central Air Conditioning system running flawlessly year after year across the entire Delhi NCR region.


</p>

      </> ,
    },

   
  
 
  
   
  ];
 


  const KeyTakeaways = [

    {

        title:"Type of System : ",
      description: "Are you looking for a Chiller, Ductable AC, VRF/VRV, or a large Air Handling Unit (AHU)? Each has specific applications and benefits.",
    },
   
    {
        title:"Energy Efficiency (EER/ISEER Ratings) : ",
      description: "Energy Efficiency (EER/ISEER Ratings): With rising electricity costs, opting for energy-efficient systems is paramount. A top contractor will always prioritize solutions that minimize your operational expenses.",
    },
   
    {
        title:"Capacity (Tons) : ",
      description: "Accurate load calculation is crucial to ensure the system is neither undersized (ineffective) nor oversized (inefficient and costly).",
    },
   
    
    {
        title:"Indoor Air Quality (IAQ) : ",
      description: "Beyond cooling, modern Central Air Conditioning systems can incorporate advanced filtration and ventilation to ensure a healthy indoor environment, free from pollutants, bacteria, and viruses.",
    },
   
    
    {
      title:"Budget & ROI : " ,
      description: "Initial investment vs. long-term operational savings. A good contractor provides a transparent cost analysis and demonstrates the return on investment. ",
    },
   
    
  ];

  
  return (
    <>

      <div className="bg-gradient-to-b mt-24  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className=" w-full md:w-6/12">

              <Image
                src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1757415857/wmremove-transformed_qczj9f.webp"
                alt="Commercial HVAC System"
                width={700}
                loading="lazy"
                height={500}
                className="w-full h-auto rounded-xl "
                
              />

            </div>


            <div className=" w-full md:w-6/12">

              <h1 className=" text-lg md:text-2xl text-center md:text-left font-bold text-cyan-800 mb-6 leading-tight">
            Central Air Conditioning Systems in Delhi NCR : Your Guide to Choosing a Top Contractor & Energy-Efficient Solutions

              </h1>

              <p className=" w-full md:w-10/12 text-sm text-gray-700 mb-6 text-justify md:text-left ">
           Delhi NCR's scorching summers demand reliable and efficient cooling. For commercial spaces, industrial facilities, and even large residences, a Central Air Conditioning system isn't just a luxury—it's a necessity. But with so many options and providers, how do you choose the right system and, more importantly, a top Central Air Conditioning contractor in Delhi, Gurugram, or Noida ?

              </p>

             

            </div>

          </section>

          {/* Key Takeaways */}



          <section className="mb-16 bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100">
           
            <p className=' text-sm pb-4 text-justify'>
      At <Link href='/' className=' font-semibold text-cyan-500'>
        Adhunik Powertech
      </Link>, with our decades of experience in designing, supplying, installing, and maintaining advanced HVAC solutions, we understand the complexities involved. We're here to guide you through the essentials of Central Air Conditioning and demonstrate why partnering with an expert makes all the difference for energy efficiency, indoor air quality, and long-term performance.

</p>
           
         
          </section>


          <section className="mb-16 bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100">
            <p className="  md:text-2xl  text-center md:text-left  font-bold text-cyan-800 mb-6 pb-2 border-b-2 border-cyan-200">
              <span className="bg-cyan-600     text-white px-2 py-1 rounded-md">
            
         What is Central Air Conditioning and why is it Essential for Delhi NCR?

              </span>
            </p>

            <p className=' text-sm pb-4 text-justify'>

      Unlike individual split units, centralized air conditioning provides cooling to multiple rooms or an entire building from a single, centralized system. This delivers uniform temperature control, better aesthetics (with fewer visible units), and often higher energy efficiency for larger spaces. In a demanding climate like Delhi NCR, it's the backbone of comfortable and productive environments.

</p>
            <p className=' text-md  font-bold pb-2 text-justify'>
            
      Key Factors to Consider When Opting for Central Air Conditioning :

</p>
            <p className=' text-sm pb-2 text-gray-500 text-justify'>

     Choosing the right Central Air Conditioning system requires careful consideration of several factors :


</p>
            <ul className="space-y-4 pt-2">
              {KeyTakeaways.map((item, index) => (

                <li key={index} className="flex py-2   items-start md:items-center ">
                  <span className="flex-shrink-0 bg-cyan-100 text-cyan-800 rounded-full p-2 mr-3">

                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>

                  </span>

                  <span className="text-gray-700 text-justify text-sm  md:font-medium">
                 <strong className=' font-bold  text-cyan-600'> {item.title} </strong> {item.description}
                  </span>

                </li>
              ))}
            </ul>

               

          </section>

          {/* Main Content */}
          <div className="space-y-16">
          
            <section className="bg-white md:p-8 p-3 rounded-xl shadow-md">
             

              <div className="mt-8">
                <h3 className="md:text-2xl font-semibold text-cyan-700 mb-4 text-center md:text-left">

          Choosing Your Central Air Conditioning Contractor : What "Top" Really Means in Delhi NCR


                </h3>
                <p className="text-gray-600 mb-4 text-sm text-justify md:text-left">

           Your Central Air Conditioning contractor is the most critical element in your project's success. Here’s what sets a "top" contractor like Adhunik Powertech apart in Delhi, Gurugram, and Noida :


 </p>

 

                <div className="bg-white border border-cyan-200 rounded-lg p-6 shadow-sm">
                 
                  <ul className="space-y-3">

                    {ClientReferences.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-cyan-600 mr-2">•</span>
                        <span className="text-gray-700  text-sm">
                        {item.description}
                        </span>
                      </li>
                    ))}

                  </ul>
                </div>

                

              </div>
            </section>



            



            <section className="bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100 mb-16">
           

    
              <div className="mb-12">
                <h3 className="md:text-2xl text-center md:text-left font-semibold text-cyan-700 mb-4">
           Types of Central Air Conditioning Systems Adhunik Powertech Specializes In


  </h3>

                <p className="text-gray-700 mb-6  text-sm text-justify md:text-left">
              As a leading Central Air Conditioning supplier and contractor, we offer expertise in :
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {energySystems.map((system, index) => (

                    <div key={index} className="bg-white flex flex-col    justify-center  items-center md:items-start  md:text-left text-center p-5 rounded-lg border border-cyan-100 hover:border-cyan-300 transition-all shadow-sm hover:shadow-md">

                      <div className="bg-cyan-100 w-12 h-12 rounded-full flex  items-center justify-center mb-4">
                     <Snowflake />
                      </div>

                      <div className="font-bold text-cyan-800 text-lg mb-2">{system.title}
                      </div>

                      <div className="text-gray-500 text-sm text-justify flex flex-col gap-2  ">{system.desc}</div>

                    </div>


                  ))}
                </div>



      
                
              </div>

             
            </section>



 



          


        



            {/* CTA Section */}
            <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="  text-xl md:text-2xl font-bold mb-4">Make the Right Choice for Your Central Air Conditioning Needs in Delhi NCR
</h2>
                <p className="text-cyan-100 text-justify mb-8 text-sm ">
       Investing in a Central Air Conditioning system is a significant decision. Don't settle for anything less than a top Central Air Conditioning contractor who can deliver unmatched expertise, energy efficiency, and reliable long-term performance.


  </p>
                <p className="text-cyan-100 text-justify mb-8 text-sm ">
    Adhunik Powertech is committed to engineering comfort and efficiency for commercial, industrial, and large residential spaces. Let us show you why we are the preferred partner for centralized air conditioning in Delhi, Gurugram, Noida, and across the entire region.


  </p>

             <h2 className="  text-sm  font-bold mb-4"> Ready to get a quote for your Central Air Conditioning project ?

</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="tel:8287885885"
                    className="bg-white text-sm md:text-md font-bold text-cyan-800 hover:bg-cyan-100  py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact  Expert
                  </a>
                  <Link
                    href="/support-form"
                    className="bg-cyan-900 text-sm md:text-md hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center border border-cyan-700"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Enquiry Now
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
