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

export default function GlowSignEmergencyLight() {

  
  const integrationExamples = [

   {
  icon: <GitPullRequest className="w-6 h-6" />,
  title: (
    <>
      <span className="text-red-700 hover:text-red-500 transition-colors cursor-default">
        Illumination Source
      </span>
    </>
  ),
  content: "High-efficiency LEDs for electric signs and emergency lights, or high-grade photoluminescent pigments for glow signs."
},

{
  icon: <Eye className="w-6 h-6" />,
  title: (
    <>
      <span className="text-red-700 hover:text-red-500 transition-colors cursor-default">
        Battery Backup
      </span>
    </>
  ),
  content: "Rechargeable batteries (e.g., Ni-Cad, Li-ion) for emergency lights, ensuring sustained operation during power failures."
},

{
  icon: <Atom className="w-6 h-6" />,
  title: (
    <>
      <span className="text-red-700 hover:text-red-500 transition-colors cursor-default">
        Housing & Enclosures
      </span>
    </>
  ),
  content: "Durable, fire-resistant materials for fixtures and signs, suitable for various indoor and outdoor environments."
},

{
  icon: <Atom className="w-6 h-6" />,
  title: (
    <>
      <span className="text-red-700 hover:text-red-500 transition-colors cursor-default">
        Charging Circuitry
      </span>
    </>
  ),
  content: "For emergency lights, circuits that maintain battery charge and switch to battery power automatically upon power loss."
},

{
  icon: <Atom className="w-6 h-6" />,
  title: (
    <>
      <span className="text-red-700 hover:text-red-500 transition-colors cursor-default">
        Mounting Hardware
      </span>
    </>
  ),
  content: " Secure and compliant mounting solutions for signs and fixtures, installed by our contracting team."
},

  ];

  // Design considerations
  const designConsiderations = [
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Enhanced Life Safety",
      content: "Provides clear visual guidance and illumination during power outages, smoke conditions, or other emergencies, preventing disorientation and ensuring safe, orderly evacuation."
    },

    {
       icon: <Droplets className="w-6 h-6" />,
      title: "Regulatory Compliance",
      content: "Essential for meeting stringent fire safety regulations, building codes, and Fire NOC requirements in various jurisdictions, including those under the Haryana Fire Act 2022 in regions like Gurugram. Our contractor expertise ensures your property is fully compliant."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Increased Visibility",
      content: "Crucial for navigating smoke-filled or dark environments, helping occupants find exits and emergency personnel locate critical safety equipment."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Cost-Effectiveness (Photoluminescent)",
      content: "Non-electric glow signs offer continuous visibility without consuming electricity, providing a sustainable and economical safety solution."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Peace of Mind",
      content: "Knowing your property is equipped with reliable emergency guidance systems instills confidence in occupants and demonstrates a commitment to safety."
    },
      
   
  ];


  const fireSafetyPoints = [
  {
    title: "Turnkey Solutions",
    description:
      "We offer a complete suite of services, from initial assessment and custom design to ISI-marked and NFPA-compliant supply, precise installation by our expert contracting team, rigorous testing, and proactive maintenance. Our role as a fire safety contractor means we handle every step with precision.",
  },
  {
    title: "Certified Expertise",
    description:
      "Our highly qualified engineers and technicians possess extensive experience in assessing your property's unique needs and designing optimal emergency guidance solutions.",
  },
  {
    title: "Quality & Compliance Assured",
    description:
      "We supply and install systems built with robust, reliable components that meet the highest national and international safety standards. Our contracting work ensures these standards are meticulously followed during every project across Delhi NCR and our expanded service locations.",
  },
  {
    title: "Local Presence, Pan-India Reach",
    description:
      "With a strong operational presence across Delhi NCR and a robust network covering Jaipur, Chandigarh, and numerous industrial clusters like Manesar and Bhiwadi, we guarantee prompt and efficient service, whether you need a supplier or a full-service contractor.",
  },
  {
    title: "Customized & Precision Installation",
    description:
      "Our solutions are expertly installed by our contracting team to ensure maximum visibility, optimal light dispersion, and full compliance with local regulations.",
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
                  <div className="w-full h-96 md:w-5/12 flex  ">


                    <img
                      className=" w-full h-full object-center rounded-3xl object-contain"
                      src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1754385628/Lighting-p36-37_ixjar2.webp"
                      alt="Glow Signage & Emergency Lights"
                      loading="lazy"
                    />


                  </div>

                  <div className=" w-full md:w-6/12 md:text-center text-left text-gray-800 mb-6 flex justify-center md:items-center flex-col mt-2">
                    <div className="md:text-center text-left     ">


                      <span className="text-sm font-medium  flex justify-center md:justify-start mb-3 pt-6 items-center md:items-center  text-red-800">
                      <Sparkles className="w-4 h-4 text-red-600 mr-4" /> FIRE SAFETY ESSENTIALS
                      </span>


                      <p className=" text-lg  md:text-2xl text-center md:text-left font-bold text-gray-900  mb-2 leading-tight">
                        <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                          <Link href='https://www.adhunikpowertech.com/top-Fire-Fighting-Company-in-Delhi-NCR-And-India' className='  '>
                 Glow Signage & Emergency Lights Contractor, Supplier & Dealer in Delhi NCR, Gurugram & Noida
                          </Link>
                        </span><br />
                        <span className="font-light text-gray-700">   <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                           <span  className='  '>
           
                          </span> 
                        </span>   Adhunik FireXpert
                        </span>
                      </p>
                    </div>
                    <p className=" font-sans text-sm text-md text-gray-600 text-justify  md:text-left pt-3   ">

In an emergency, clear guidance and reliable illumination are paramount for safe evacuation and rapid response. As a leading dealer, supplier, and expert contractor of essential Glow Signage and Emergency Lighting systems across Gurugram, Delhi NCR (including Noida, Greater Noida, Faridabad, Ghaziabad), and extended regions like Jaipur, Chandigarh, Sonipat, Panipat, Rohtak, Rewari, Palwal, Bhiwadi, Meerut, Neemrana, Tapukara, Bawal, Manesar, Dharuhera, and Muzaffarnagar, Adhunik FireXpert delivers comprehensive, turnkey solutions.


                    </p>
                    <p className=" font-sans text-md text-sm text-gray-600 text-justify  md:text-left pt-3   ">

We specialize in designing, installing, and maintaining vital emergency guidance systems for commercial buildings, public spaces, industrial facilities, and residential complexes. Our ISI-marked and NFPA-compliant solutions ensure clear exit routes and continuous illumination during power failures or fire incidents, crucial for protecting lives and property across Delhi, Haryana, Rajasthan, and Uttar Pradesh.


                    </p>

                  </div>
                </div>

              </div>
            </section>





          </div>
        </section>

            <div className="text-center px-4 py-12">
            
              <h2 className="  text-lg md:text-2xl  font-bold text-gray-900 mb-6 leading-tight">

     The Indispensable Role of Clear Guidance & 

 <br />
                <span className="text-red-600">Illumination in Emergencies</span>
              </h2>

              <div className="max-w-6xl text-justify  mx-auto  text-gray-600 space-y-6">
                <p className=' text-sm'>

When smoke fills a corridor or power fails during a crisis, panic can set in quickly. Glow Signage and Emergency Lights provide the visual cues and essential illumination needed to guide occupants safely to exits, preventing disorientation and accidents. These systems are not just regulatory requirements; they are fundamental components of a robust life safety plan, ensuring rapid and orderly evacuation. Partnering with a skilled glow signage contractor and emergency lighting supplier like Adhunik FireXpert is essential for creating a truly safe environment.

                </p>
               
              </div>
            </div>


<p className=" w-full text-center font-sans py-4 md:py-12   text-lg md:text-2xl  text-sky-700  capitalize">

Our Range of Glow Signage & Emergency Lighting Solutions (Supplied & Installed)

 </p>

 <p className=" w-full text-center font-sans   text-sm  text-sky-700 ">
Adhunik FireXpert is a top glow signage dealer, emergency lights supplier, and contractor, providing a range of solutions tailored to various building types and safety requirements
</p>

<div className="row">


  <div className=" h-full flex flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">



    <div className="md:w-[60%] flex items-start flex-col  justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block">Glow Signage (Photoluminescent & Illuminated) </h2>
      <p className=" text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Description : </strong> 
   
     These signs utilize photoluminescent materials that absorb ambient light and then glow brightly in darkness, or incorporate integrated LED lighting for continuous illumination. They provide vital directional and informational cues.


      </p>

         <p className=" text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>   Ideal For : </strong> 
     
  Exit routes, emergency assembly points, fire extinguisher locations, and safety instructions in commercial buildings, hospitals, schools, and public venues across Gurugram and Delhi.


      </p>

      
         <div className="  text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Benefits  </strong> 
     

<p className='  '>
<strong  className=' text-red-500' >
 High Visibility : 
</strong>

Clearly visible even in smoke-filled environments or during complete power outages.

</p>

<p>
<strong  className=' text-red-500' >
   Durability :  
</strong>

Constructed from robust, long-lasting materials.

</p>

<p>
<strong  className=' text-red-500' >
 Non-Electric Options : 
</strong>

 Photoluminescent signs require no electricity, functioning during power failures and offering cost-effectiveness.

</p>


      </div>

      
         <div className=" text-left md:text-justify text-sm  py-2">
      
<p>
<strong  className=' text-red-500' >
 Common Applications : {" "}
</strong>

 Exit signs, directional arrows, "Do Not Enter" signs, fire equipment location markers, floor-level signage for low-visibility conditions.

</p>
 
      </div>

      
 

    </div>


    <div className="md:w-[40%] w-auto">
      <div className="flex items-center justify-center h-full">
        <div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/10 rounded-xl">
            <div className="w-auto">
              <div className="w-full object-cover h-96 transition-transform duration-500 group-hover:scale-125 rounded-xl">
                <img
                  className="     object-center object-cover  "
                  fetchPriority="high"
                  decoding="async"
                  alt="Glow Signage & Emergency Lights"
                  src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1754385629/iel_t48rco.webp"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif  text-sm font-bold text-white">
           Glow Signage (Photoluminescent & Illuminated)
 </h2>
              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Exit routes, emergency assembly points, fire extinguisher locations, and safety
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
              <div className="w-full object-cover h-96 transition-transform duration-500 group-hover:scale-125 rounded-xl">
                <img
                  className="  h-full w-full  object-center object-cover  "
                  fetchPriority="high"
                  decoding="async"
                  alt="Glow Signage & Emergency Lights"
                  src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1754385628/workplace-emergency-lighting-testing-1024x427_qardkc.webp"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

              <h2 className="font-dmserif text-lg font-bold text-white"> Emergency Lights (Battery-Powered Fixtures)
</h2>

              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
       Hallways, stairwells, exit routes, open areas, and critical operational zones in offices  </p>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="md:w-[60%] flex flex-col items-start justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block">
     Emergency Lights (Battery-Powered Fixtures)

      </h2>
      <p className=" text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Description : </strong> 
     
    Self-contained, battery-powered lighting units that automatically activate when the main power supply fails, illuminating pathways, stairwells, and critical areas.


      </p>

      <p className="  text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Ideal For :  </strong> 
     
 Hallways, stairwells, exit routes, open areas, and critical operational zones in offices, factories, malls, and residential towers throughout Noida, Faridabad, and Ghaziabad.
      </p>

     

         <div className=" text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Benefits  </strong> 
     

<p>
<strong  className=' text-red-500' >
 Continuous Illumination : 
</strong>

 Ensures safe passage and prevents panic during power outages.


</p>

<p>
<strong  className=' text-red-500' >
   Automatic Activation : 
</strong>

 Switches on instantly when main power is lost.

</p>

<p>
<strong  className=' text-red-500' >
Rechargeable Batteries :
</strong>

 Provide sustained illumination for specified durations (typically 90-120 minutes as per regulations).

</p>


      </div>

  <p className=" text-left md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Designs : </strong> 
     
Available in various designs, including wall-mounted units, ceiling-mounted options, and integrated exit signs with emergency lighting.

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
         Our Systems (Supplied & Installed)
 <br />
                <span className="text-red-600 text-sm">

As an experienced glow signage supplier and emergency lights contractor, Adhunik FireXpert ensures every component meets rigorous quality standards and is expertly integrated for optimal performance

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
              <h2 className=" text-lg md:text-4xl font-bold text-gray-900 mb-6 text-center">

The Unmatched Advantages of Professional Glow Signage & Emergency Lighting

 </h2>
              <p className=" text-sm md:text-md text-gray-600 max-w-4xl mx-auto text-center mb-16">
 Implementing a professional system from Adhunik FireXpert offers critical advantages for properties across Delhi NCR, Gurugram, Noida, and beyond
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
              <div className=" text-lg  md:text-4xl   font-bold text-gray-900 mb-6 leading-tight">

       Why Choose Adhunik FireXpert for

{" "}

 <span className="text-red-600 ">
   Glow Signage & Emergency Lights ?
</span>
              </div>

              <div className="max-w-4xl  mx-auto text-sm text-justify md:text-md text-gray-600 space-y-6">


               <p className="  md:text-justify text-sm  py-2">
    
As your trusted  <strong className=' text-red-500'>  
    glow signage dealer, emergency lights supplier, and specialized contractor,  </strong>  Adhunik FireXpert brings unparalleled expertise and a commitment to excellence:


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

      Regular Maintenance: Ensuring Continuous Readiness &
{" "}

 <span className="text-red-600 ">Compliance</span>
              </div>
              <p className=' py-4 text-sm text-gray-600'>
   The effectiveness of glow signage and emergency lights hinges on diligent maintenance. Adhunik FireXpert, as a comprehensive fire safety contractor, provides ongoing maintenance services across Gurugram, Delhi, Noida, and all our service areas

</p>

              <div className="max-w-4xl  mx-auto text-sm text-justify md:text-md text-gray-600 space-y-6">


               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Routine Inspections : </strong> 
 Regular visual checks of signs for damage, fading, or obstructions, and emergency lights for proper fixture integrity.


      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Battery Testing (Emergency Lights) : </strong> 

 Periodic functional tests to ensure batteries hold charge and provide the required illumination duration during power failures.

      </p>
                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Light Source Checks : </strong> 
 Verifying the functionality of all integrated lighting elements.

      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Compliance & Documentation : </strong> 
 Maintaining detailed records of all tests, inspections, and repairs to ensure your system consistently meets Fire NOC requirements and other local fire safety regulations for continuous operability.


      </p>


                
              </div>
            </div>

          

            {/* Closing CTA */}
            <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-7 md:p-12 mb-24 text-white relative overflow-hidden">
              <div style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/002/401/674/small/black-and-white-small-dots-pattern-free-vector.jpg")` }}
                className="absolute inset-0   bg-[length:20px_20px] opacity-10"></div>
              <div className="relative max-w-4xl mx-auto text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-6 text-red-300" />
                <h3 className=" text-lg md:text-3xl font-bold mb-6">
          Ensure Safe Evacuation with Adhunik FireXpert's Safety Lighting Solutions!

</h3>
                <p className=" text-sm   text-red-100 mb-8">

      Don't compromise on clear guidance and reliable illumination during emergencies. Partner with Adhunik FireXpert, the premier glow signage dealer, emergency lights supplier, and contractor committed to delivering reliable, compliant, and cutting-edge safety solutions. Our team is ready to assess your needs, design, install, and maintain systems that offer maximum protection and peace of mind for your property.
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
