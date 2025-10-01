"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FireExtinguisher() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const energySystems = [

    {
      title: "Water Extinguishers (Class A)",
      desc: (
        <>
         <ul>
            <li><strong className=" text-red-500">Agent :
</strong> Pressurized water.</li>

            <li><strong className=" text-red-500"> Uses :
</strong> Exclusively for Class A fires. They work by cooling the burning material.</li>

            <li><strong className=" text-red-500"> Note : 
</strong> Never use on electrical or liquid fires.</li>

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
      title: "Foam Extinguishers (Class A and B)",
      desc: (
        <>
         <ul>
            <li><strong className=" text-red-500">Agent : </strong> A mixture of water and foam concentrate.</li>

            <li><strong className=" text-red-500">Uses : </strong>  Effective on both Class A and Class B fires. The foam creates a blanket that smothers the fire and cools the fuel.
</li>

            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
      title: "Dry Powder Extinguishers (Class A, B, and C)",
      desc: (
        <>
         <ul>
            <li><strong className=" text-red-500">Agent :
</strong> A fine, dry chemical powder.</li>

            <li><strong className=" text-red-500"> Uses :
</strong> Highly versatile, used for Class A, B, and C fires. They work by interrupting the chemical reaction of the fire.
</li>
            <li><strong className=" text-red-500"> Note :
</strong> Leave a residue and can impair visibility in confined spaces.

</li>

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },


    {
      title: "CO2 (Carbon Dioxide) Extinguishers (Class B and C)",
      desc: (
        <>
         <ul>
            <li><strong className=" text-red-500">Agent :
</strong> Carbon dioxide gas under high pressure.</li>

            <li><strong className=" text-red-500"> Uses :
</strong> Ideal for Class B and C fires. They work by displacing oxygen.
</li>
            <li><strong className=" text-red-500"> Note :
</strong> Leave no residue, making them perfect for electrical equipment, server rooms, and labs.

</li>

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
      title: "Wet Chemical Extinguishers (Class K)",
      desc: (
        <>
         <ul>
            <li><strong className=" text-red-500">Agent :
</strong>  A specialized chemical solution</li>

            <li><strong className=" text-red-500"> Uses :
</strong> Specifically designed for Class K fires. The agent creates a soapy foam on the surface of hot oils and fats to prevent re-ignition.
</li>
          

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
      title: "Clean Agent Extinguishers (Class A, B, and C)",
      desc: (
        <>
         <ul>
            <li><strong className=" text-red-500">Agent :
</strong> Advanced, residue-free chemicals (e.g., FM-200, Novec 1230)</li>

            <li><strong className=" text-red-500"> Uses :
</strong> Versatile for A, B, and C fires. Ideal for sensitive equipment, data centers, and clean rooms as they leave no residue
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
         Expert Consultation :   </strong>
Our specialists will help you
 assess your unique fire risks and select the ideal fire extinguishers for your needs.

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
          Seamless Supply & Installation :  </strong>
   As a leading supplier and dealer, we provide high-quality, compliant extinguishers and ensure proper installation and placement.

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
           Annual Maintenance Contracts (AMC) : </strong> {" "}
    We offer robust AMC services to inspect, test, and maintain your fire extinguishers, ensuring they are always ready to protect you.

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

  return (
    <>
      <div className="  mt-24  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className=" w-full  h-96 md:w-6/12">
              <img
                src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1757488069/pull_hrtmos.webp"
                alt="Commercial HVAC System"
                loading="lazy"
                className="w-full h-full  object-center object-contain"
              />
            </div>

            <div className=" w-full md:w-6/12">
              <h1 className=" text-lg md:text-2xl text-center md:text-left font-bold text-red-800 mb-6 leading-tight">
                Fire Extinguisher Guide : A Complete Handbook for Businesses &
                Homes in Delhi NCR
              </h1>
              <p className="text-sm text-gray-700 mb-6 text-justify md:text-left ">
                A fire can erupt in seconds, but with the right knowledge and
                equipment, you can prevent a small spark from becoming a
                disaster. A fire extinguisher is a crucial first line of
                defense, yet many people are unsure which one to use or how to
                use it.
              </p>
              <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-red-800 text-sm font-medium text-justify md:text-left">
                  As a leading dealer, supplier, and contractor of fire safety
                  solutions across Delhi NCR, Gurugram, Noida, and beyond,
                  Adhunik FireXpert is dedicated to empowering you with the
                  knowledge needed to protect your lives and property. This
                  guide will walk you through everything you need to know about
                  fire extinguishers, from the different types and their uses to
                  the regulations and best practices.
                </p>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Licensing Section */}

            <section className="bg-white p-3 md:p-8 rounded-xl shadow-md border border-red-100 mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <h2 className="md:text-2xl font-bold text-red-800">
                  Beyond Basic Services : The Hallmarks of a Leading
                  Firefighting Contractor
                </h2>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                <p className="text-red-800 font-medium  text-sm">
                  When you search for the "best firefighting contractors in
                  Delhi," you're looking for a partner who offers a holistic
                  approach to fire safety. Here are the non-negotiable qualities
                  that define the leaders in this space:
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-4 md:p-6 rounded-xl border border-red-200 shadow-sm mb-8">
                <div className="flex items-center mb-8">
               

                  <p className=" text-sm  text-red-900 ">
                    <strong className=" text-xl text-red-500">
                      {" "}
                   1.   Understanding the Classes of Fire :
                    </strong>{" "}
                    Using the wrong type of fire extinguisher can be ineffective
                    or even dangerous. Fires are classified based on the type of
                    fuel they burn. The most common classes are :
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-gray-700 list-disc  ps-3">
                  <li>
                    <strong className=" text-red-500">
                     Class A :
                    </strong>{" "}
                    Fires involving ordinary combustible materials such as wood, paper, cloth, and plastics.

                  </li>
                  <li>
                    <strong className=" text-red-500">
                      Class B :
                    </strong>
                  Fires involving flammable liquids and gases like petrol, oil, grease, paint, and propane.

                  </li>
                  <li>
                    <strong className=" text-red-500">
                      Class C :
                    </strong>
                  Fires involving energized electrical equipment. Using a water-based extinguisher on a Class C fire can lead to electrocution.

                  </li>
                  <li>
                    <strong className=" text-red-500">
                      {" "}
                      Class D : {" "}
                    </strong>
                   Fires involving combustible metals such as magnesium, titanium, and potassium. These require specialized extinguishers.

                  </li>

                  <li>
                    <strong className=" text-red-500">
                      {" "}
                      Class K : {" "}
                    </strong>
                    Fires involving cooking oils and fats, commonly found in commercial kitchens. This is a special class distinct from Class B.

                  </li>

                 
                </ul>
              </div>

              <div className="mb-12">
               <p className=" text-sm pb-4  text-red-900 ">
                    <strong className=" text-xl text-red-500 ">
                      {" "}
                    2. Common Types of Fire Extinguishers and Their Uses

                    </strong> {" "} <br />
              Fire extinguishers are designed with specific agents to combat different fire classes. It's essential to match the extinguisher to the fire class.
  </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {energySystems.map((system, index) => (
                    <div
                      key={index}
                      className="bg-white flex flex-col    items-start  md:text-left text-center p-5 rounded-lg border border-red-100 hover:border-red-300 transition-all shadow-sm hover:shadow-md"
                    >
                      <div className="row justify-center items-center flex flex-row gap-2 md:gap-4 ">
                        <div className=" bg-red-50 w-12 h-12 items-center rounded-full flex  justify-center mb-4">
                        
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fire-extinguisher-icon lucide-fire-extinguisher"><path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"/><path d="M9 18h8"/><path d="M18 3h-3"/><path d="M11 3a6 6 0 0 0-6 6v11"/><path d="M5 13h4"/><path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"/></svg>
                        </div>

                        <h2 className=" w-9/12 md:w-full font-bold text-red-700 text-sm text-left  md:text-lg mb-2">
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
                    <strong className=" text-xl text-red-500 ">
                      {" "}
                  3. Key Indian Regulations & Certifications

                    </strong> {" "} <br />

             In India, fire extinguishers must comply with strict safety standards to be legally sold and used.

  </p>
  
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {energySystems2.map((system, index) => (
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

                      <p className=" text-sm pt-4
                        text-red-900 ">
                   
           As a top fire extinguisher dealer and supplier, Adhunik FireXpert ensures that every single extinguisher we provide is fully compliant with these national standards, giving you peace of mind.

  </p>
              </div>

              <div className="mb-12">

               <p className=" text-sm pb-4  text-red-900 ">
                    <strong className=" text-lg text-red-500 ">
                      {" "}
                  4. How to Choose the Right Fire Extinguisher for Your Needs


                    </strong> {" "} <br />
The best way to ensure your property is safe is to conduct a fire risk assessment. Here are some general guidelines for different environments :

  </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {energySystems3.map((system, index) => (
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


              <div className="mb-12">

               <p className=" text-sm pb-4  text-red-900 ">
                    <strong className=" text-lg text-red-500 ">
                      {" "}
                 5. Using a Fire Extinguisher: The P.A.S.S. Method


                    </strong> {" "} <br />
Knowing how to use an extinguisher correctly is crucial. Remember the P.A.S.S. acronym :


  </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {energySystems4.map((system, index) => (
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


              <div className="mb-12">

               <p className=" text-sm pb-4  text-red-900 ">
                    <strong className=" text-lg text-red-500 ">
                      {" "}
             Your Trusted Partner in Fire Safety Across Delhi NCR


                    </strong> {" "} <br />
Choosing the right fire extinguisher is a critical step in a comprehensive fire safety plan. As a dedicated fire safety contractor, Adhunik FireXpert provides more than just products. We offer complete fire safety solutions, including :


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
                 Contact Adhunik FireXpert for a Consultation or Quote.

                </h2>
                <p className="text-red-100 mb-8 text-sm  text-justify ">
               Whether you're in Gurugram, Noida, Faridabad, Ghaziabad, Jaipur, Chandigarh, or any of our service locations, you can rely on Adhunik FireXpert for all your fire safety needs.

                </p>

                <p className=" text-center text-red-100 mb-8 text-sm  ">
             Ready to secure your property with the right fire extinguishers ?

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
