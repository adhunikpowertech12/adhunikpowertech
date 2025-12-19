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

export default function FireHydrant() {

  
  const integrationExamples = [
    {
      icon: <GitPullRequest className="w-6 h-6" />,
      title:
      <>
        <Link  href='https://adhunikdecodive.com/modular-kitchen-designs' className=' text-red-700 hover:text-red-500'>
        Hydrant Body

        </Link>
      </> 
      ,
      content: "Robustly constructed to withstand high pressure and harsh environmental conditions."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 
       <>
        <Link  href='https://adhunikdecodive.com/domestic-furniture' className=' text-red-700 hover:text-red-500'>Valve Mechanism
</Link>
      </> 
,
      content: "Precisely engineered to control water flow efficiently and reliably."
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>Outlet Nozzles</Link>
      </> 
      ,
      content: "Designed for quick and secure connection of fire hoses, ensuring optimal water delivery"
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>Bonnet</Link>
      </> 
      ,
      content: "Protects the internal operating mechanism from external elements and tampering"
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>Drainage System</Link>
      </> 
      ,
      content: "Essential for dry barrel hydrants to prevent water retention and freezing issues."
    },

    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>Bury Depth</Link>
      </> 
      ,
      content: "Installed at appropriate depths by our contracting team to protect the system from freeze damage and traffic."
    },

    
    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>Pumping System</Link>
      </> 
      ,
      content: "High-capacity pumps ensure adequate pressure and flow throughout the network, professionally installed and commissioned by our contractors."
    },

    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>Fire Hose Reels & Landing Valves</Link>
      </> 
      ,
      content: "Integral parts of the internal hydrant system, providing immediate access to water inside buildings."
    },

    {
      icon: <Atom className="w-6 h-6" />,
      title: 
        <>
        <Link  href='https://adhunikdecodive.com/commercial-furniture' className=' text-red-700 hover:text-red-500'>Fire Tanks</Link>
      </> 
      ,
      content: "Large reservoirs to ensure a sustained water supply for firefighting."
    },



  ];

  // Design considerations
  const designConsiderations = [
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Immediate & Abundant Water Supply",
      content: "Provides firefighters with crucial, high-volume water access for large fires, significantly reducing damage and controlling spread."
    },

    {
       icon: <Droplets className="w-6 h-6" />,
      title: "Enhanced Life Safety",
      content: "Directly contributes to the safety of occupants by empowering rapid fire suppression, allowing more time for evacuation."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Community Preparedness",
      content: "A robust network of hydrants strengthens overall community fire safety infrastructure."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Regulatory Compliance",
      content: "Essential for meeting stringent fire safety norms, including BIS, NFPA, and local municipal fire department requirements, especially under acts like the Haryana Fire Act 2022 in regions like Gurugram. Our contractor expertise ensures your system is always compliant."
    },
      {
    
       icon: <PanelLeft className="w-6 h-6" />,
      title: "Potential Insurance Benefits",
      content: " Properly installed and maintained fire hydrant systems can lead to reduced insurance premiums for your property."
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
                      src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1753529202/inner_hydrant_bvpgcw.webp"
                      alt="Adhunik Powertech air washer"
                      loading="lazy"
                    />


                  </div>

                  <div className=" w-full md:w-6/12 md:text-center text-left text-gray-800 mb-6 flex justify-center md:items-center flex-col mt-2">
                    <div className="md:text-center text-left     ">


                      <span className="text-sm font-medium  flex justify-center md:justify-start mb-3 pt-6 items-center md:items-center  text-red-800">
                      <Sparkles className="w-4 h-4 text-red-600 mr-4" /> FIRE SAFETY ESSENTIALS
                      </span>


                      <p className="   md:text-2xl text-center md:text-left font-bold text-gray-900  mb-2 leading-tight">
                        <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                          <Link href='https://www.adhunikpowertech.com/top-Fire-Fighting-Company-in-Delhi-NCR-And-India' className='  '>
                       Fire Hydrant System Dealer, Supplier & 

                          </Link>
                        </span><br />
                        <span className="font-light text-gray-700">   <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                           <span  className='  '>
                  Contractor in Delhi NCR, Gurugram, Noida & Across India 
                          </span> 
                        </span> | Adhunik FireXpert
                        </span>
                      </p>
                    </div>
                    <p className=" font-sans text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">

               For robust and reliable fire protection, a high-performing Fire Hydrant System is indispensable. As a leading dealer, supplier, and specialized contractor of advanced fire hydrant systems across Gurugram, Delhi NCR (including Noida, Greater Noida, Faridabad, Ghaziabad), and extended regions like Jaipur, Chandigarh, Sonipat, Panipat, Rohtak, Rewari, Palwal, Bhiwadi, Meerut, Neemrana, Tapukara, Bawal, Manesar, Dharuhera, and Muzaffarnagar, Adhunik FireXpert provides comprehensive, end-to-end solutions from design to installation and ongoing maintenance.

                    </p>
                    <p className=" font-sans text-sm  md:text-md text-gray-600 text-justify  md:text-left pt-3   ">

We equip commercial buildings, industrial complexes, and large residential societies with ISI-marked and NFPA-compliant fire hydrant systems, ensuring firefighters have immediate and abundant access to water during emergencies. Our expertise ensures your property's adherence to the latest fire safety regulations, offering unparalleled protection across Delhi, Haryana, Rajasthan, and Uttar Pradesh.


                    </p>

                  </div>
                </div>

              </div>
            </section>





          </div>
        </section>

            <div className="text-center py-12">
            
              <h2 className="  md:text-2xl font-bold text-gray-900 mb-6 leading-tight">
              Why a Robust Fire Hydrant System is Non-Negotiable

 <br />
                <span className="text-red-600">Your Essential First Line of Defense</span>
              </h2>

              <div className="max-w-6xl text-justify  mx-auto px-4 text-sm text-gray-600 space-y-6">
                <p>
              A meticulously designed and installed fire hydrant system is the backbone of any effective fire suppression strategy. It provides a crucial, readily available water source for professional firefighters, enabling swift response to large-scale incidents that manual extinguishers simply can't handle. Investing in a quality system from a trusted fire hydrant system supplier and contractor like Adhunik FireXpert enhances property safety, protects lives, and secures your valuable assets.


                </p>
               
              </div>
            </div>


<p className=" w-full text-center font-sans py-4 md:py-12 text-lg md:text-2xl  text-sky-700  capitalize"> Types of Fire Hydrant Systems Supplied & Installed <br /> by Adhunik FireXpert
 </p>

 <p className=" w-full text-center font-sans px-2  text-sm  text-sky-700 ">Adhunik FireXpert is a top fire hydrant system dealer and contractor, offering both primary types to suit diverse climatic conditions and operational requirements
</p>

<div className="row">

  <div className=" h-full flex flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">

    <div className="md:w-[60%] flex items-start flex-col  justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block"> 1. Wet Barrel Hydrants </h2>
      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Description : </strong> These hydrants are always filled with water up to the main valve, making them instantly ready for use.

      </p>

         <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>   Ideal For : </strong> 
     
 Common in warmer climates like Delhi NCR, Gurugram, and Faridabad, where freezing is not a concern.


      </p>

      
         <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Benefits : </strong> 
     
 Provides immediate water access, allowing for faster response times.


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
                  src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1753529202/hydrant_blog_evkkga.webp"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-lg md:text-3xl font-bold text-white">Wet Barrel Hydrants
 </h2>
              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
               Instant water availability for quick, reliable fire response in non-freezing regions </p>

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
                  src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618655/fire-hydrant-system_y6jt44.webp"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h2 className="font-dmserif text-lg md:text-3xl font-bold text-white"> Foam Dry Barrel Hydrants
               </h2>
              <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
           Specialized, freeze-resistant fire hydrant solutions built for extreme weather conditions.  </p>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="md:w-[60%] flex flex-col items-start justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
      <h2 className=" text-2xl mb-3 hidden md:block"> 2. Dry Barrel Hydrants</h2>
      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>Description :</strong> 
     
      Designed for colder climates, the main valve is located below the frost line. Water enters the barrel only when the hydrant is opened.


      </p>

      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Ideal For :  </strong> 
     
  Regions prone to freezing temperatures, though less common in our immediate target areas, we can supply and install these as specialized solutions when required.

      </p>

      <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Benefits :  </strong> 
     
 Prevents water in the barrel from freezing and causing damage, ensuring reliability in cold conditions.


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
            Our Fire Hydrant Systems (Supplied & Installed)
 <br />
                <span className="text-red-600 text-sm">
              As an experienced fire hydrant system supplier and contractor, Adhunik FireXpert ensures every component meets the highest quality standards and is expertly installed:

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
The Unmatched Importance of Professional Fire Hydrant Systems
 </h2>
              <p className=" text-sm md:text-md text-gray-600 max-w-4xl mx-auto text-center mb-16">
        Implementing a professional fire hydrant system from Adhunik FireXpert offers critical advantages for properties across Noida, Ghaziabad, and beyond
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

 <span className="text-red-600 ">Fire Hydrant System Contractor & Supplier ?</span>
              </div>

              <div className="max-w-4xl  mx-auto text-sm text-justify md:text-md text-gray-600 space-y-6">


               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>   End-to-End Solutions :  </strong> 
We offer a complete suite of services, from initial consultation and custom design to ISI-certified installation, rigorous testing, and proactive Annual Maintenance Contracts (AMC). Our role as a fire safety contractor means we handle every step.
      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Certified Expertise : </strong> 
 Our team of highly qualified engineers and technicians possesses extensive experience in designing and implementing complex fire hydrant networks for diverse industries and infrastructures.

      </p>
                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Quality & Compliance : </strong> 
  We supply systems built with robust, reliable components that meet the highest national and international safety standards. Our contracting work ensures these standards are met during installation.


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
              <p className=' py-4 text-sm text-gray-600'>A fire hydrant system is only effective if it's meticulously maintained. Adhunik FireXpert, as a comprehensive fire safety contractor, provides ongoing maintenance services across Gurugram, Delhi, Noida, and all our service areas :
</p>

              <div className="max-w-4xl  mx-auto text-sm text-justify md:text-md text-gray-600 space-y-6">


               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Routine Inspections : </strong> 
 Regular checks of all components, including pumps, pipes, valves, and hydrants, to detect any wear, damage, or blockages.

      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Flow Testing : </strong> 
 Periodic testing to ensure adequate water pressure and flow rates are maintained for effective firefighting.


      </p>
                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'>  Lubrication : </strong> 
 Proper lubrication of moving parts to ensure smooth operation.


      </p>

                
               <p className="md:text-justify text-sm  py-2">
     <strong className=' text-red-500'> Winterization (for Dry Barrel) : </strong> 
 Specific procedures to prevent freezing and ensure functionality in cold weather, where applicable.


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
                Partner with the Experts in Fire Hydrant Systems!
</h3>
                <p className=" text-sm  text-justify  text-red-100 mb-8">
                Don't leave your property's safety to chance. Partner with Adhunik FireXpert, the premier fire hydrant system dealer, supplier, and contractor committed to delivering reliable, compliant, and cutting-edge fire protection solutions. Our team is ready to assess your needs, design, install, and maintain a system that offers maximum protection and peace of mind.

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
