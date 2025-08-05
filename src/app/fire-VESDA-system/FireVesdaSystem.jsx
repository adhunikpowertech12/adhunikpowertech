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

export default function FireVesdaSystem() {


    const integrationExamples = [
        {
            icon: <GitPullRequest className="w-6 h-6" />,
            title:
                <>
                    <Link href='https://adhunikdecodive.com/modular-kitchen-designs' className=' text-red-700 hover:text-red-500'>
                       Very Early Smoke Detection
                    </Link>
                </>
            ,
            content: " Detects fire at the incipient (earliest) stage, often before visible smoke is present, providing critical time for investigation and response."
        },

        {
            icon: <GitPullRequest className="w-6 h-6" />,
            title:
                <>
                    <Link href='https://adhunikdecodive.com/modular-kitchen-designs' className=' text-red-700 hover:text-red-500'>
                       Reduced False Alarms
                    </Link>
                </>
            ,
            content: " Advanced laser technology and air filtration significantly lower the likelihood of nuisance alarms triggered by dust, steam, or other non-fire phenomena, ensuring operational continuity."
        },



        {
            icon: <GitPullRequest className="w-6 h-6" />,
            title:
                <>
                    <Link href='https://adhunikdecodive.com/modular-kitchen-designs' className=' text-red-700 hover:text-red-500'>
                       Enhanced Life Safety
                    </Link>
                </>
            ,
            content: " Early warning provides maximum time for safe evacuation of occupants, greatly improving life safety outcomes."
        },



        {
            icon: <GitPullRequest className="w-6 h-6" />,
            title:
                <>
                    <Link href='https://adhunikdecodive.com/modular-kitchen-designs' className=' text-red-700 hover:text-red-500'>
                       Minimizes Property Damage & Downtime
                    </Link>
                </>
            ,
            content: "By enabling pre-emptive action or immediate suppression, VESDA systems drastically limit the spread of fire, smoke, and heat, protecting valuable equipment and ensuring business continuity."
        },

        {
            icon: <GitPullRequest className="w-6 h-6" />,
            title:
                <>
                    <Link href='https://adhunikdecodive.com/modular-kitchen-designs' className=' text-red-700 hover:text-red-500'>
                       Versatility for Sensitive Environments
                    </Link>
                </>
            ,
            content: "Ideal for data centers in Greater Noida, server rooms in Jaipur, clean rooms, museums, archives, and healthcare facilities where conventional detectors may be unsuitable or cause unacceptable damage."
        },

        {
            icon: <GitPullRequest className="w-6 h-6" />,
            title:
                <>
                    <Link href='https://adhunikdecodive.com/modular-kitchen-designs' className=' text-red-700 hover:text-red-500'>
                      Data Collection & Analytics
                    </Link>
                </>
            ,
            content: " These systems can collect and store extensive data on air quality and smoke levels, providing valuable insights for facility management, safety compliance, and proactive maintenance."
        },
        {
            icon: <GitPullRequest className="w-6 h-6" />,
            title:
            <>
             <Link href='https://adhunikdecodive.com/modular-kitchen-designs' className=' text-red-700 hover:text-red-500'>
                      Regulatory Compliance
                    </Link>

            </>,
            content:" Essential for meeting stringent international and national fire safety norms, including NFPA (e.g., NFPA 72, NFPA 75), UL/FM approvals, and local municipal fire department requirements. Our contractor expertise ensures your system adheres to all applicable acts and standards.",

        }



    ];

    // Design considerations
    const designConsiderations = [
        {

            icon: <PanelLeft className="w-6 h-6" />,
            title: "Pinpoint Protection",
            content: "Targets fires directly at their source within enclosed spaces, preventing spread and minimizing collateral damage."
        },

        {
            icon: <Droplets className="w-6 h-6" />,
            title: "Automatic & Rapid Activation",
            content: "Detects heat and suppresses fires within seconds, without human intervention, crucial for unmanned equipment."
        },
        {

            icon: <PanelLeft className="w-6 h-6" />,
            title: "Minimizes Collateral Damage",
            content: "Especially with clean agents, these systems extinguish fires without harming sensitive electronics or leaving residue, ensuring minimal downtime and cleanup."
        },
        {

            icon: <PanelLeft className="w-6 h-6" />,
            title: "Cost-Effective for Micro-Environments",
            content: "A highly efficient and economical solution for protecting specific, high-risk equipment where a full room suppression system might be impractical."
        },
        {

            icon: <PanelLeft className="w-6 h-6" />,
            title: "Enhanced Life Safety",
            content: "By containing fires quickly, they reduce the risk of larger, more dangerous incidents."
        },

        {

            icon: <PanelLeft className="w-6 h-6" />,
            title: "Regulatory Compliance",
            content: " Essential for meeting stringent industry-specific fire safety norms and NFPA standards (e.g., NFPA 75 for IT Equipment), especially for critical infrastructure in Jaipur or Chandigarh. Our contractor expertise ensures your system adheres to all applicable acts and standards."
        },


    ];


    const fireSafetyPoints = [

        {
            title: "Specialized Expertise",
            description:
                "Our highly qualified engineers and technicians are experts in assessing unique critical environment risks and designing precise VESDA solutions tailored to your specific needs.",
        },
        {
            title: "Turnkey Solutions",
            description:
                "We offer a complete suite of services, from initial hazard assessment, customized engineering design, UL/FM Approved supply, meticulous installation by our expert contracting team, rigorous testing, and proactive Annual Maintenance Contracts (AMC).",
        },
        {
            title: "Quality & Compliance Assured",
            description:
                "We supply and install systems built with robust, reliable components from leading global manufacturers that meet the highest national and international safety standards. Our contracting work ensures these standards are meticulously followed during every project across Delhi NCR and our expanded service locations.",
        },
        {
            title: "Local Presence, Pan-India Reach",
            description:
                "Local Presence, Pan-India Reach: With a strong operational presence across Delhi NCR and a robust network covering Jaipur, Chandigarh, and numerous industrial clusters like Manesar and Bhiwadi, we guarantee prompt and efficient service, whether you need a supplier or a full-service contractor.",
        },
        {
            title: "Customized & Precision Engineered",
            description:
                "Our solutions are not off-the-shelf. They are custom-engineered and expertly installed by our contracting team to meet the specific detection needs and structural requirements of your unique, high-value facility.",
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
                                            src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618666/Zedexfire5_cigse6.webp"
                                            alt="Fire VESDA System"
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
                                                        VESDA System Contractor, Supplier & Dealer in Delhi NCR, Gurugram, Noida & Across India

                                                    </Link>
                                                </span><br />
                                                <span className="font-light text-gray-700">   <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                                                    <span className='  '>

                                                    </span>
                                                </span>   Adhunik FireXpert
                                                </span>
                                            </p>
                                        </div>
                                        <p className=" font-sans text-md text-gray-600 text-justify  md:text-left pt-3   ">

                                            For the ultimate in early fire detection and protection of mission-critical assets, a VESDA (Very Early Smoke Detection Apparatus) System is unparalleled. As a leading dealer, supplier, and expert contractor of advanced VESDA systems across Gurugram, Delhi NCR (including Noida, Greater Noida, Faridabad, Ghaziabad), and extended regions like Jaipur, Chandigarh, Sonipat, Panipat, Rohtak, Rewari, Palwal, Bhiwadi, Meerut, Neemrana, Tapukara, Bawal, Manesar, Dharuhera, and Muzaffarnagar, Adhunik FireXpert delivers comprehensive, turnkey solutions.


                                        </p>
                                        <p className=" font-sans text-md text-gray-600 text-justify  md:text-left pt-3   ">

                                            We specialize in designing, installing, and maintaining custom VESDA systems for data centers, server rooms, clean rooms, telecommunication hubs, museums, archives, and other high-value or sensitive environments where even the slightest smoke can be catastrophic. Our UL/FM approved and NFPA-compliant systems provide unparalleled early warning, ensuring prompt action and minimizing potential damage across Delhi, Haryana, Rajasthan, and Uttar Pradesh.


                                        </p>

                                    </div>
                                </div>

                            </div>
                        </section>





                    </div>
                </section>

                <div className="text-center px-4 py-12">

                    <div className="text-2xl  font-bold text-gray-900 mb-6 leading-tight">

                     The Power of Very Early Smoke Detection :

                        <br />
                        <span className="text-red-600"> Protecting Your Most Critical Assets</span>
                    </div>

                    <div className="max-w-6xl text-justify  mx-auto text-sm text-gray-600 space-y-6">

                        <p>

                          Traditional smoke detectors are often insufficient for environments where fire must be detected at its absolute earliest, invisible stage. VESDA Systems utilize sophisticated aspirated smoke detection technology to actively draw air samples from the protected area through a network of sampling pipes. This air is then analyzed by a high-sensitivity laser detection chamber, allowing for the detection of microscopic smoke particles long before they are visible to the human eye or trigger conventional alarms.


                        </p>
                        <p>

                            This proactive approach to fire safety provides crucial additional time – often hours – to investigate an alert, respond to a potential threat, and initiate protective measures or suppress the fire before significant damage occurs. Partnering with a skilled VESDA system contractor like Adhunik FireXpert is essential for safeguarding your most vital infrastructure and ensuring business continuity.

                        </p>

                    </div>
                </div>


                <p className=" w-full text-center font-sans py-4 md:py-12   text-2xl  text-sky-700  capitalize">
                Key Components & Advanced Functionality of VESDA Systems (Supplied & Installed)
                </p>

                <p className=" px-4  w-full text-justify md:text-center font-sans  text-sm  text-sky-700 ">
                   As an experienced VESDA system supplier and contractor, Adhunik FireXpert ensures every component meets rigorous quality standards and is expertly integrated for optimal performance
                </p>

                <div className="row">


                    <div className=" h-full flex flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">


                        <div className="md:w-[60%] flex items-start flex-col  justify-center w-auto h-full p-2 m-2 md:p-5 md:m-5  md:text-justify">
                            <h2 className=" text-2xl mb-3 hidden md:block">
                              Key Components & Advanced Functionality
                            </h2>
                            <p className=" text-left md:text-justify text-sm  py-2">
                                <strong className=' text-red-500'>
                               Aspirator : </strong>

                            A powerful fan that actively draws air samples from the protected area through a network of sampling pipes.

                            </p>

                            <p className="text-left md:text-justify text-sm  py-2">
                                <strong className=' text-red-500'>    Sampling Pipe Network : </strong>

                               Precisely engineered and installed by our contracting team, these pipes feature strategically placed holes to draw air from the environment.

                            </p>


                            <p className="text-left md:text-justify text-sm  py-2">
                                <strong className=' text-red-500'> Detection Chamber (Laser-Based) : </strong>

                               The core of the system, where a highly sensitive laser analyzes the sampled air for microscopic smoke particles.

                            </p>

                            <p className="text-left md:text-justify text-sm  py-2">
                                <strong className=' text-red-500'> Air Filters : </strong>

                            Remove dust and debris from the air sample before it enters the detection chamber, preventing false alarms and ensuring detector longevity.
                            </p>

                            <p className=" text-left md:text-justify text-sm  py-2">
                                <strong className=' text-red-500'> Control Panel/Display : </strong>

                          Provides real-time status, alarm levels, fault indications, and allows for configuration and diagnostic access. VESDA systems offer multiple sensitivity levels (e.g., LaserFOCUS, LaserPLUS, LaserSCANNER, VESDA-E series), allowing tailoring to specific environmental needs, whether a clean room or a high-traffic area.

                            </p>

                            <p  className="text-left md:text-justify text-sm  py-2">
 <strong className=' text-red-500'> Remote Access & Monitoring Modules : </strong>
                                 Enable facility managers to check system status, receive alerts, and control the system from anywhere, crucial for geographically spread assets across Delhi NCR and remote sites.

                            </p>

<p  className="text-left md:text-justify text-sm  py-2">
 <strong className=' text-red-500'> Integration with Fire Alarm & Suppression Systems : </strong>
  VESDA systems seamlessly integrate with your existing fire alarm control panels (FACP) and automatic fire suppression systems, providing comprehensive coverage and enhancing overall fire safety protocols.
   
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
                                                    alt="Fire VESDA System"
                                                    src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618666/Zedexfire4_wz58ui.webp"
                                                />
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                        <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                            <h2 className="font-dmserif text-2xl font-bold text-white">
                                            Key Components
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

                                <p className="text-md  font-bold text-gray-900 mb-6 leading-tight">
                                   The Unmatched Benefits of 

                                    <br />
                                    <span className="text-red-600">

                                      Professional VESDA Systems

                                    </span>
                                </p>
                                <p className=' text-gray-600'>
                                    Implementing an advanced VESDA system from Adhunik FireXpert offers critical advantages for high-stakes properties across Gurugram, Delhi, Noida, and beyond:

                                </p>


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



                         

                        </section>
                    </div>

                    <div className="bg-gradient-to-b from-white to-red-50/20">
                        {/* ===== Premium Hero Section ===== */}
                        <section className="relative    px-6 max-w-7xl mx-auto">
                            <div className="absolute inset-0 overflow-hidden -z-10">
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-400/5 rounded-full filter blur-[100px]"></div>
                            </div>

                            <div className="text-center mb-10 md:mb-20">
                                <div className=" text-2xl md:text-4xl   font-bold text-gray-900 mb-6 leading-tight">

                                 Why Choose Adhunik FireXpert  

                                    {" "}

                                    <span className="text-red-600 ">
                                        VESDA System?
                                    </span>
                                </div>

                                <div className="max-w-4xl  mx-auto text-sm text-justify md:text-md text-gray-600 space-y-6">


                                    <p className="md:text-justify text-sm  py-2">

                                        As your trusted 
                                        
                                        <strong className=' text-red-500'>   VESDA system dealer, supplier, and contractor,  </strong>

                                         Adhunik FireXpert brings unparalleled expertise and a commitment to excellence in specialized fire detection

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
                                <div className=" text-2xl md:text-4xl   font-bold text-gray-900 mb-6 leading-tight">

                                    Regular Maintenance : Ensuring Continuous, High-Precision Protection &
{" "}

                                    <span className="text-red-600 ">Compliance</span>
                                </div>
                                <p className=' text-justify py-4 text-sm text-gray-600'>
The reliability and accuracy of a VESDA system depend heavily on diligent maintenance. Adhunik FireXpert, as a comprehensive fire safety contractor, provides ongoing maintenance services across Gurugram, Delhi, Noida, and all our service areas

                                </p>

                                <div className="max-w-4xl  mx-auto text-sm text-justify md:text-md text-gray-600 space-y-6">


                                    <p className="md:text-justify text-sm  py-2">
                                        <strong className=' text-red-500'> Routine Checks & Inspections : </strong>
                                Regular visual inspections of sampling pipes, aspirator units, filters, and control panels for any damage or obstructions.

                                    </p>


                                    <p className="md:text-justify text-sm  py-2">
                                        <strong className=' text-red-500'> Filter Replacement : </strong>
                                      Timely replacement of air filters to ensure optimal air sampling and prevent false alarms.


                                    </p>

                                    <p className="md:text-justify text-sm  py-2">
                                        <strong className=' text-red-500'>   Detector Calibration & Testing :  </strong>
                                        Periodic calibration and testing of the laser detection chamber to maintain its high sensitivity and accuracy.

                                    </p>


                                    <p className="md:text-justify text-sm  py-2">
                                        <strong className=' text-red-500'>  System Diagnostics : </strong>
                                       Running diagnostic checks to monitor system integrity, air flow, and detector performance.
 
                                    </p>


                                    <p className="md:text-justify text-sm  py-2">
                                        <strong className=' text-red-500'>  Firmware Updates : </strong>
                                       Ensuring all system software is up-to-date for optimal functionality and security.
 
                                    </p>


                                    <p className="md:text-justify text-sm  py-2">
                                        <strong className=' text-red-500'>  Compliance & Documentation : </strong>
                                    Maintaining detailed records of all tests, inspections, and repairs to ensure your system consistently meets Fire NOC requirements, NFPA standards, and manufacturer guidelines for continuous operability
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

                                    Secure Your Critical Assets with Adhunik FireXpert's VESDA Systems!

                                    </h3>
                                    <p className=" text-justify text-sm   text-red-100 mb-8 ">

                                       Don't compromise on the earliest possible fire detection for your invaluable assets. Partner with Adhunik FireXpert, the premier VESDA system dealer, supplier, and contractor committed to delivering reliable, compliant, and cutting-edge fire detection solutions. Our team is ready to assess your unique risks, design, install, and maintain a system that offers maximum protection and peace of mind for your critical infrastructure.

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
