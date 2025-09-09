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
            <li><strong>Agent :
</strong> Pressurized water.</li>
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
                src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618767/topfire_jx2sgb.webp"
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

                  <p className=" text-sm  text-red-900 ">
                    <strong className=" text-red-500">
                      {" "}
                      Understanding the Classes of Fire
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
                    <strong className=" text-red-500 ">
                      {" "}
                     Common Types of Fire Extinguishers and Their Uses

                    </strong>{" "} <br />
              Fire extinguishers are designed with specific agents to combat different fire classes. It's essential to match the extinguisher to the fire class.
  </p>
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
                  Adhunik FireXpert : Your Choice for Top Firefighting
                  Contractors in Delhi
                </h2>
                <p className="text-red-100 mb-8 text-sm  text-justify ">
                  In Delhi's dynamic landscape, choosing the right firefighting
                  contractor is a decision that directly impacts safety and
                  business continuity. Adhunik FireXpert is not just a fire
                  safety dealer and supplier; we are a dedicated firefighting
                  contractor committed to delivering superior fire protection
                  engineering. Our strong foundation in comprehensive building
                  solutions, including our parent company's legacy in advanced
                  HVAC systems, empowers us to offer integrated and highly
                  reliable safety solutions.
                </p>

                <p className="text-red-100 mb-8 text-sm  text-justify">
                  Whether you require a complete fire safety overhaul for your
                  new commercial project in Saket, Delhi, a specialized fire
                  suppression system for your data center in Noida, or annual
                  maintenance for your fire alarm systems in Gurugram, our
                  expertise and commitment make us the ideal partner.
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
