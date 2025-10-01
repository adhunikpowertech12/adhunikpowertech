"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
 

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

 

export default function FireContractorBlog() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const energySystems = [
    {
      title: "Unwavering Compliance & Certifications",
      desc:
       <>
        <p>
        In a city governed by strict fire safety norms (like the National Building Code, Delhi Fire Service regulations, and sometimes even the Haryana Fire Act for NCR regions like Gurugram), compliance is paramount. A top contractor ensures every system meets or exceeds these standards.
        </p>

        <p>
        <strong className=" text-red-500">Adhunik FireXpert's Edge : </strong>
         All our systems and components are ISI-marked, NFPA-compliant, and, where applicable, UL/FM Approved. We ensure full adherence to the National Building Code (NBC), Haryana Fire Act 2022, and facilitate Fire NOC compliance for our clients across Delhi, Gurugram, Noida, and Faridabad.
        </p>
      </>,
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },


    {
      title: "Local Presence with Broad Reach",
      desc: 
      <>
        <p>
      While "Delhi" is the core focus, a truly top contractor has the logistical capability to serve the entire region effectively.
        </p>

        <p>
        <strong className=" text-red-500">Adhunik FireXpert's Edge : </strong>
         We maintain a strong operational presence within Delhi and a robust network extending across Gurugram, Noida, Greater Noida, Faridabad, Ghaziabad, Sonipat, Panipat, Rohtak, Rewari, Palwal, Bhiwadi, Meerut, Muzaffarnagar, Neemrana, Tapukara, Bawal, Manesar, Dharuhera, Jaipur, and Chandigarh. This extensive reach ensures prompt service and support wherever you are located in North India.

        </p>
      </>
      ,
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    },

    {
      title: "Proactive Maintenance & After-Sales Support",
      desc: 
      <>
        <p>
    The installation is just the beginning. A top contractor provides robust Annual Maintenance Contracts (AMC) and prompt repair services to ensure systems remain operational and compliant year after year.
 </p>

        <p>
        <strong className=" text-red-500">Adhunik FireXpert's Edge : </strong>
     We offer comprehensive AMC plans tailored to your specific system, ensuring regular inspections, testing, and servicing performed by our certified technicians, maintaining system reliability and extending equipment lifespan across all our serviced locations.

        </p>

      </>
      ,
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    },
    
    {
      title: "Deep Technical Expertise & Experience",
      desc: 
       <>
        <p>
       Fire safety is not a one-size-fits-all domain. A leading contractor possesses a team of highly qualified and experienced engineers and technicians who understand the nuances of different hazards and building types.
        </p>

        <p>
        <strong className=" text-red-500">Adhunik FireXpert's Edge : </strong>
        Our team comprises seasoned fire safety specialists with extensive experience in designing and implementing complex fire protection systems for diverse sectors. This deep engineering capability is further bolstered by our association with Adhunik Powertech Private Limited, a company renowned since 2005 for its expertise in designing and manufacturing advanced HVAC systems, providing robust infrastructure solutions across industrial, commercial, and institutional projects. This shared legacy of engineering excellence in critical building systems underpins our commitment to precision and reliability in fire safety.

        </p>
      </>
      ,
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },

    {
      title:
        "Transparent Processes & Client-Centric Approach",
      desc: 
      <>
        <p>
   From initial consultation to project handover and beyond, a leading contractor maintains clear communication, transparent pricing, and prioritizes client satisfaction.

 </p>

        <p>
        <strong className=" text-red-500">Adhunik FireXpert's Edge : </strong>
     We pride ourselves on a consultative approach, understanding your unique needs and delivering customized, cost-effective fire safety solutions that provide genuine peace of mind. Our focus is on delivering tangible impact and maximizing safety for our clients.


        </p>
        
      </>
       ,
      icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
    },

    {
      title: "Dedicated Outside Air Systems (DOAS)",
      desc: "Separating ventilation from space conditioning for better efficiency and indoor air quality.",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
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
      <div className="bg-gradient-to-b mt-24 from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className=" w-full  h-96 md:w-6/12">
              <img
                src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618767/topfire_jx2sgb.webp"
                alt="Commercial HVAC System"
                loading="lazy"
                className="w-full h-full  object-center object-contain"
              />
            </div>

            <div className=" w-full md:w-6/12">
              <h1 className=" text-lg md:text-2xl text-center md:text-left font-bold text-red-800 mb-6 leading-tight">
                What Makes a Fire Fighting Contractor "Top" in Delhi? And Why
                Adhunik FireXpert Leads the Way
              </h1>
              <p className="text-sm text-gray-700 mb-6 text-justify md:text-left ">
                Delhi, a bustling metropolis with an ever-expanding skyline of
                commercial hubs, industrial zones, and residential complexes,
                faces unique fire safety challenges. For businesses, developers,
                and facility managers, safeguarding lives and assets means
                partnering with the absolute top firefighting contractors in
                Delhi. But what truly defines a "top" contractor in this
                critical field ?
              </p>
              <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-red-800 text-sm font-medium text-justify md:text-left">
                  It's more than just providing equipment; it's about
                  comprehensive expertise, unwavering reliability, adherence to
                  stringent compliance, and a commitment to long-term safety. At
                  Adhunik FireXpert, we believe we embody these very qualities,
                  consistently delivering cutting-edge fire protection solutions
                  across Delhi NCR and beyond. Our foundation is built on years
                  of engineering excellence, drawing strength from our parent
                  entity's deep-rooted experience in critical infrastructure
                  solutions.
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
                Beyond Basic Services : The Hallmarks of a Leading Firefighting Contractor

                </h2>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                <p className="text-red-800 font-medium  text-sm">
                  When you search for the "best firefighting contractors in Delhi," you're looking for a partner who offers a holistic approach to fire safety. Here are the non-negotiable qualities that define the leaders in this space:

                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-4 md:p-6 rounded-xl border border-red-200 shadow-sm mb-8">
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

                  <p className=" text-sm md:text-2xl text-red-900 ">
                  <strong className=" text-red-500">Adhunik FireXpert's Edge : </strong>We are your complete firefighting contractor, offering services spanning:

                  </p>
                </div>

                <ul className="space-y-3 text-sm text-gray-700 list-disc  ps-3">
                  <li>
                    <strong className=" text-red-500">Fire Extinguishers :</strong>  Dealer & Supplier of all types (ABC Dry Powder, CO2, Water, Foam, Wet Chemical, Clean Agent).

                  </li>
                  <li>
                    <strong className=" text-red-500">
                     Fire Hydrant Systems :</strong> 
                Design, supply, and installation for robust external and internal water access.

                  </li>
                  <li>
                    <strong className=" text-red-500">
                     Fire Sprinkler Systems :
                    </strong>
                   Precision design and installation of Wet, Dry, Preaction, and Deluge systems.

                  </li>
                  <li>
                    <strong className=" text-red-500"> Fire Suppression Systems : </strong> 
               Specialized solutions for critical assets (Clean Agent, CO2, Foam, Dry Chemical).

                  </li>

                  
                  <li>
                    <strong className=" text-red-500"> Fire Alarm Systems : </strong> 
              Advanced Conventional, Addressable, and Wireless systems for early detection.

                  </li>

                  
                  <li>
                    <strong className=" text-red-500"> Fire Tubing Systems : </strong> 
           Targeted suppression for electrical panels, server racks, and machinery.

                  </li>

                  <li>
                    <strong className=" text-red-500">  Glow Signage & Emergency Lights : </strong> 
         Essential guidance and illumination for safe evacuation.


                  </li>


                </ul>
                
              </div>

              <div className="mb-12">
                
               
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">

                  {energySystems.map((system, index) => (
                    <div
                      key={index}
                      className="bg-white flex flex-col    items-start  md:text-left text-center p-5 rounded-lg border border-red-100 hover:border-red-300 transition-all shadow-sm hover:shadow-md"
                    >

                    <div className="row flex flex-row gap-2 md:gap-4 ">
                    
  <div className="bg-red-100 w-12 h-12 items-center rounded-full flex  justify-center mb-4">
                        <svg
                          className="w-6 h-6 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={system.icon}
                          />
                        </svg>
                      </div>

                      <h2 className=" w-9/12 md:w-full font-bold text-red-700 text-sm text-left  md:text-lg mb-2">
                        {system.title}
                      </h2>

                    </div>
                    
                      <div className=" text-justify text-sm text-gray-600">{system.desc}</div>
                    </div>
                  ))}
                </div>

               
              </div>

          
            </section>

           

            {/* CTA Section */}

            <section className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-8 text-white shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="  text-xl  font-bold mb-4">
               Adhunik FireXpert : Your Choice for Top Firefighting Contractors in Delhi

                </h2>
                <p className="text-red-100 mb-8 text-sm  text-justify ">
             In Delhi's dynamic landscape, choosing the right firefighting contractor is a decision that directly impacts safety and business continuity. Adhunik FireXpert is not just a fire safety dealer and supplier; we are a dedicated firefighting contractor committed to delivering superior fire protection engineering. Our strong foundation in comprehensive building solutions, including our parent company's legacy in advanced HVAC systems, empowers us to offer integrated and highly reliable safety solutions.
 </p>

 <p className="text-red-100 mb-8 text-sm  text-justify">
  Whether you require a complete fire safety overhaul for your new commercial project in Saket, Delhi, a specialized fire suppression system for your data center in Noida, or annual maintenance for your fire alarm systems in Gurugram, our expertise and commitment make us the ideal partner.

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
