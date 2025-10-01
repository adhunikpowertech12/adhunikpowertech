"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FireSafetyProtection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const energySystems = [

    {
      title: "Fire Detection Systems (The First Alarm)",
      desc: (
        <>

        <p className=" text-sm  text-start">
        Early warning is the key to minimizing damage and saving lives
        </p>
        
         <ul>


            <li>

          <Link href="/fire-alarm-system">

              <strong className=" text-red-500">Fire Alarms : 
</strong> 
          </Link>

The central unit that receives signals from detectors and activates audible and visual alarms to alert occupants.

</li>

            <li>

          <Link href="https://www.adhunikfirexpert.com/addressable-fire-alarm-system-in-delhi-ncr">

              <strong className=" text-red-500"> 
              Smoke Detectors :  
</strong> 
          </Link>

The most common form of detection, reacting to smoke particles in the air.

</li>


            <li>

          <Link href="/fire-VESDA-system">

              <strong className=" text-red-500"> 
             VESDA Systems : 
</strong> 
          </Link>

 For critical environments like data centers and archives, VESDA (Very Early Smoke Detection Apparatus) systems use advanced laser technology to detect microscopic smoke particles at the incipient (earliest) stage of a fire, providing crucial minutes or even hours of warning.

</li>

       
            <li>

        
              <strong className=" text-red-500"> 
          What Adhunik FireXpert Does
</strong> 
        

 {" "}: We are a trusted supplier and contractor of state-of-the-art fire alarm, VESDA, and detection systems, ensuring prompt, reliable alerts for properties across Delhi, Noida, and beyond.


</li>

       
         </ul>

        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
      title: " Fire Suppression Systems (The First Response) ",
      desc: (
        <>
        <p className=" text-sm  text-start">
    These systems automatically extinguish a fire without human intervention.

      </p>
        
         <ul>



<li>

          <Link href="/fire-sprinkler-system">

              <strong className=" text-red-500"> Fire Sprinkler Systems : 
</strong> 
          </Link>

  The most common suppression system. When a sprinkler head reaches a specific temperature, it automatically discharges water onto the fire, containing it and reducing its intensity.


</li>

 
<li>

<Link href="/fire-hydrant-system">
             <strong className=" text-red-500">
             Fire Hydrant Systems : {" "}
             </strong> 
</Link>

Fire Hydrant Systems : For larger-scale fires, a fire hydrant network provides firefighters with a high-volume, immediate water source.

</li>


<li>

<Link href="/fire-hydrant-system">  

             <strong className=" text-red-500">
 Specialized Fire Suppression Systems : {" "}
             </strong>

</Link>

 For sensitive areas where water can cause damage, specialized systems using clean agents (like FM-200, Novec 1230), CO2, or foam are used to extinguish fires without leaving residue.

</li>

<li>

<Link href="/fire-hydrant-system">  

             <strong className=" text-red-500">
 What Adhunik FireXpert Does : {" "}
             </strong>

</Link>

 As a premier contractor, we design, install, and maintain these complex systems, ensuring your property is equipped with a robust and reliable first response capability.

</li>


 </ul>

        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {

      title: "Fire Extinguishers (The Manual Defense)",
      desc: (
        <>
        <p className=" text-sm  text-start">
    Portable and accessible, fire extinguishers are for containing small, incipient fires.

      </p>
        
         <ul>



<li>

          <Link href="/fire-sprinkler-system">

              <strong className=" text-red-500">  Different Types : 
</strong> 
          </Link>

 Extinguishers are classified based on the fire type they can combat (Class A, B, C, D, K), using agents like water, foam, dry powder, or wet chemicals.



</li>

  

<li>

          <Link href="/fire-sprinkler-system">

              <strong className=" text-red-500">  What Adhunik FireXpert Does :  
</strong> 
          </Link>

 We are a leading fire extinguisher dealer and supplier, providing BIS-certified and ISI-marked extinguishers for all types of fire hazards, along with expert guidance on their placement and use.



</li>

  

 </ul>

        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {

      title: "Egress & Safety Signage (The Guidance) ",
      desc: (
        <>
        <p className=" text-sm  text-start">
 Ensuring a safe and clear path to escape is as important as fighting the fire itself.


      </p>
        
         <ul>



<li>

          <Link href="/glow-signage-&-emergency-lights">

              <strong className=" text-red-500">   Glow Signage & Emergency Lights : 
</strong> 
          </Link>

These provide clear visual guidance and illumination during power failures or in smoke-filled environments, directing occupants to exits and assembly points.



</li>

  

<li>

          <Link href="/">

              <strong className=" text-red-500">  What Adhunik FireXpert Does:
</strong> 
          </Link>

 Our team designs and installs compliant emergency lighting and glow signage systems to ensure safe and orderly evacuation from any building.


</li>

  
 

 </ul>

        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     

     
  ];

  
  const energySystems2 = [

    {
      
      desc: (
        <>
         <ul>

            <li>
            <strong className=" text-red-500">
            BIS Certification (IS 15683) : </strong>
 The Bureau of Indian Standards (BIS) certification as per IS 15683 is mandatory for all portable fire extinguishers. This standard ensures the extinguisher meets stringent requirements for extinguishing capacity, discharge time, pressure resistance, and safety.
 </li>
 
         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
            ISI Mark : </strong>
  Look for the ISI mark on your extinguisher. It is a symbol of BIS certification, guaranteeing that the product is a high-quality, reliable, and compliant fire safety device.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
            Fire NOC : 
            </strong>
  For commercial and industrial buildings in Delhi, Gurugram, and Noida, the presence of BIS-certified fire extinguishers is a mandatory requirement for obtaining and maintaining a Fire NOC.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    
  ];


  const energySystems3 = [

    {
      
      desc: (
        <>
         <ul>

            <li>
            <strong className=" text-red-500">
            For Homes :  </strong>
 An ABC-rated Dry Powder extinguisher is a versatile choice for most rooms. Keep a Wet Chemical or Class K extinguisher in the kitchen to handle cooking oil fires.

 </li>
 
         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
            For Offices & Commercial Spaces : </strong>
   Use ABC-rated Dry Powder extinguishers for general use. In server rooms or areas with sensitive electronics, a CO2 or Clean Agent extinguisher is a better choice to avoid damage.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
           For Industrial Facilities :</strong> {" "}
   A thorough assessment by a fire safety professional is essential. You will likely need a combination of Dry Powder, CO2, and specialized Class D extinguishers for specific risks.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    
  ];


  const energySystems4 = [

    {
      
      desc: (
        <>
         <ul>

            <li>
            <strong className=" text-red-500">
         P - Pull the Pin :  </strong>
 Pull the pin at the top of the extinguisher to break the tamper seal.

 </li>
 
         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
            A - Aim at the Base : </strong>
    Aim the nozzle at the base of the fire, not the flames.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
           S - Squeeze the Handle : </strong> {" "}
   Squeeze the handle to discharge the extinguishing agent.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
          S - Sweep Side-to-Side : </strong> {" "}
   Sweep the nozzle from side to side at the base of the fire until it goes out.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    
  ];


  const energySystems5 = [

    {
      
      desc: (
        <>
         <ul>

            <li>
            <strong className=" text-red-500">
         As a dedicated fire safety contractor  </strong>  we offer turnkey solutions that manage every aspect of your fire protection needs, from consultation to compliance. We understand the stringent regulations of the Haryana Fire Act 2022 and the National Building Code (NBC), and our systems are designed to help you secure your Fire NOC.


 </li>
 
         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
         Our strong operational  </strong>
    presence in Delhi, Gurugram, and across the entire Delhi NCR region, combined with our robust network, ensures that we can provide prompt and efficient service for your project in Noida, Ghaziabad, Faridabad, Jaipur, Chandigarh, or any of our service locations.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
   

     
     
    
  ];


  const faqItems = [
    {
      question:
        "Why is it important to hire a licensed HVAC contractor with commercial specialization?",
      answer:
        "Hiring a contractor with commercial-specific licenses ensures they possess the necessary expertise for complex systems, adhere to stringent building codes, and carry appropriate insurance, protecting your business from operational and legal risks.",
    },
    {
      question:
        "How can I verify a commercial HVAC contractor's experience and reputation?",
      answer:
        "Request detailed client references from similar commercial projects, ask for case studies, and inquire about their safety record (e.g., EMR). While online reviews are helpful, direct commercial client feedback is more valuable.",
    },
    {
      question:
        "Why are energy efficiency services crucial for commercial spaces?",
      answer:
        "Energy efficiency services for commercial HVAC systems can lead to significant reductions in operational costs, lower carbon emissions, and improved compliance with environmental regulations, directly impacting your business's profitability and sustainability.",
    },
    {
      question:
        "What specific types of warranties and guarantees should I inquire about for commercial HVAC?",
      answer:
        "Ask about comprehensive manufacturer equipment warranties, detailed contractor workmanship warranties, and, most importantly, Service Level Agreements (SLAs) that outline guaranteed response times and potential performance guarantees for system uptime and energy consumption.",
    },
    {
      question: "How do commercial maintenance plans benefit businesses?",
      answer:
        "Regular, tailored maintenance plans for commercial HVAC systems prevent costly breakdowns, extend equipment lifespan, optimize energy efficiency, ensure compliance, and provide budget predictability, minimizing operational disruptions and maximizing ROI.",
    },
  ];


  const fireClasses = [
  {
    title: "Electrical Faults",
    description:
      "Overloaded circuits, faulty wiring, and outdated appliances are the leading causes of fires. In densely-packed office buildings in Gurugram or old industrial units in Faridabad, poor electrical maintenance is a significant risk.",
  },

  {
    title: "Flammable Materials",
    description:
      "Improper storage of flammable liquids and chemicals, a frequent hazard in manufacturing units and warehouses across Manesar and Bhiwadi, can lead to devastating fires.",
  },

  {
    title: "Human Error",
    description:
      "From unattended cooking in office pantries to careless smoking and failure to maintain equipment, human error accounts for a substantial percentage of all fire incidents.",
  },

  {
    title: "Mechanical Failures",
    description:
      "Overheating machinery, friction sparks from worn-out parts, and inadequate lubrication in factories and plants can easily ignite combustible materials.",
  },
 
];


  return (
    <>



      <div className="mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center mb-16">

            <div className=" w-full  h-96 md:w-6/12">
              <img
                src="https://images.unsplash.com/photo-1576707995936-a6cffe26ef7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Commercial HVAC System"
                loading="lazy"
                className="w-full h-full  object-center object-contain"
              />
            </div>

            <div className=" w-full md:w-6/12">

              <h1 className=" text-lg md:text-2xl text-center md:text-left font-bold text-red-800 mb-6 leading-tight">
             A New Era of Safety : Introducing Adhunik FireXpert, a Dedicated Division of Adhunik Powertech
              </h1>

              <p className="text-sm text-gray-700 mb-4 text-justify md:text-left ">
              Fire is a silent, unpredictable threat that can turn a thriving business into a pile of ashes in a matter of minutes. In the fast-paced, ever-expanding urban landscape of Delhi NCR, where commercial hubs, industrial zones, and high-density residential complexes stand side-by-side, fire safety is not just a regulatory requirement—it is a moral and business imperative.
              </p>
            
              <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-red-800 text-sm font-medium text-justify md:text-left">
                 For decades, Adhunik Powertech has been a name synonymous with engineering excellence in critical building systems, delivering advanced HVAC solutions across a diverse range of projects. As a natural evolution of this legacy, we are now proud to introduce our specialized division:  <Link href='/https://www.adhunikfirexpert.com'>
                    Adhunik FireXpert
                 </Link> , a dedicated brand committed to providing comprehensive, turnkey fire protection and life safety solutions.

                </p>
              </div>

                <p className="text-sm text-gray-700 pt-4 text-justify md:text-left ">

         This guide will walk you through the essential components of a robust fire safety strategy and highlight why partnering with a complete  <Link href='/https://www.adhunikpowertech.com/top-Fire-Fighting-Company-in-Delhi-NCR-And-India'>
                   fire safety contractor
                 </Link>  like Adhunik FireXpert is your best defense.

              </p>
            </div>
          </section>

          
          <div className="space-y-16">
            
            <section className="bg-white p-3 md:p-8 rounded-xl shadow-md border border-red-100 mb-16">
              

             

              <div className="bg-gradient-to-br from-red-50 to-white p-4 md:p-6 rounded-xl border border-red-200 shadow-sm mb-8">
                <div className="flex items-center mb-8">
               

                  <p className=" text-sm  text-red-900 ">
                    <strong className=" text-xl text-red-500">
                      {" "}
                 The Real Causes of Fire: Beyond the Spark

                    </strong>{" "} <br />
                  To protect against fire, you must first understand its origins. While a fire may seem sudden, most are a result of preventable causes. In commercial and industrial settings in India, the most common culprits are :

                  </p>

               

                </div>


               <ul className="space-y-3 text-sm text-gray-700 list-disc ps-3">
      {fireClasses.map((fireClass, index) => (
        <li key={index}>
          <strong className="text-red-500">{fireClass.title} : </strong>
          {fireClass.description}
        </li>
      ))}
    </ul>

       <p className=" text-sm pt-4  text-red-900 ">     
                Mitigating these risks requires a multi-layered fire safety approach, which we refer to as the " four pillars " of fire protection.
                  </p>


              </div>

              <div className="mb-12">
               <p className=" text-sm pb-4  text-red-900 ">
                    <strong className=" text-xl text-red-500 ">
                      {" "}
                  The Four Pillars of Comprehensive Fire Protection

                    </strong> {" "} <br />
             A top firefighting contractor provides solutions across all four pillars to ensure complete safety.

  </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 ">
                  {energySystems.map((system, index) => (
                    <div
                      key={index}
                      className="bg-white flex flex-col    items-start  md:text-left text-center p-5 rounded-lg border border-red-100 hover:border-red-300 transition-all shadow-sm hover:shadow-md"
                    >
                      <div className="row justify-center items-center flex flex-row gap-2 md:gap-4 ">
                        <div className=" bg-red-50 text-red-500 w-12 h-12 items-center rounded-full flex  justify-center mb-4">
                        
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
                        </div>

                        <h2 className=" w-9/12 md:w-full font-bold text-red-700 text-sm text-left  mb-2">
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

              
         

            



              <div className="mb-12">

               <p className=" text-sm pb-4  text-red-900 ">
                    <strong className=" text-lg text-red-500 ">
                      {" "}
            Adhunik FireXpert : A Legacy of Engineering Excellence


                    </strong> {" "} <br />

Our commitment to fire safety is an extension of Adhunik Powertech's legacy. For nearly two decades, Adhunik Powertech has been a trusted HVAC contractor known for delivering precision-engineered, energy-efficient HVAC solutions for commercial and industrial giants. The same engineering excellence, meticulous planning, and commitment to reliability that made Adhunik Powertech a leader in climate control are now the foundational principles of Adhunik FireXpert.



  </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {energySystems5.map((system, index) => (
                    <div
                      key={index}
                      className="bg-white flex flex-col    items-start  md:text-left text-center p-5 rounded-lg border border-red-100 hover:border-red-300 transition-all shadow-sm hover:shadow-md"
                    >
                      <div className=" text-justify text-sm text-gray-600">
                        {system.desc}
                      </div>
                    </div>
                  ))}
                </div>

                   
              </div>



            </section>

            {/* CTA Section */}

            <section className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-8 text-white shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="  text-xl  font-bold mb-4">
              Secure Your Property with a Complete Fire Safety Strategy

                </h2>
                <p className="text-red-100 mb-8 text-sm  text-justify ">
         Don't leave your property's safety to chance. Partner with a company that understands both the complexities of fire and the engineering of a safe building. Adhunik Powertech is proud to introduce Adhunik FireXpert, your one-stop solution for fire safety that offers a complete range of services from a single trusted partner.

                </p>

                <p className=" text-center text-red-100 mb-8 text-sm  ">
      We invite you to learn more about our comprehensive solutions and get in touch with our expert team today to secure a safer future for your business.

                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="tel:8287885885"
                    className="bg-white text-sm md:text-md font-bold text-red-800 hover:bg-red-100  py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Ready to enhance your fire safety?
                  </a>
                  <Link
                    href="/support-form"
                    className="bg-red-900 text-sm md:text-md hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center border border-red-700"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Enquiry Now
                  </Link>
                </div>
              </div>
            </section>

            <div className=" p-3 md:px-6 lg:px-24 py-12 bg-white rounded-3xl shadow-2xl">
              <h2 className=" text-2xl text-center   font-extrabold text-red-700 mb-10">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-red-100 rounded-2xl bg-red-50 overflow-hidden"
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex justify-between items-center p-5 text-left hover:bg-red-100 transition-colors"
                    >
                      <span className=" text-sm   font-semibold text-red-800">
                        {item.question}
                      </span>
                      {openIndex === index ? (
                        <ChevronUp className=" ps-2 md:w-8 md:h-8 w-16 h-16 text-red-600" />
                      ) : (
                        <ChevronDown className=" ps-2 md:w-8 md:h- w-16 h-16 text-red-600" />
                      )}
                    </button>
                    {openIndex === index && (
                      <div className=" m-3 md:p-5 pt-0 text-gray-700  text-sm    text-justify mx-2 leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
