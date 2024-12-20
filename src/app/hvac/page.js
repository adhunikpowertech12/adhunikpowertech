'use client';

import React, { useEffect, useState } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images3 = [
  {
    original: "/jobs/1.jpg",
    thumbnail: "/jobs/1.jpg",
  },

  {
    original: "/jobs/2.jpg",
    thumbnail: "/jobs/2.jpg",
  },

  {
    original: "/jobs/3.jpg",
    thumbnail: "/jobs/3.jpg",
  },

  {
    original: "/jobs/4.jpg",
    thumbnail: "/jobs/4.jpg",
  },

  {
    original: "/jobs/5.jpg",
    thumbnail: "/jobs/5.jpg",
  },

  {
    original: "/jobs/6.jpg",
    thumbnail: "/jobs/6.jpg",
  },

  {
    original: "/jobs/7.jpg",
    thumbnail: "/jobs/7.jpg",
  },


];

const images4 = [
  {
    original: "/jobs/8.jpg",
    thumbnail: "/jobs/8.jpg",
  },

  {
    original: "/jobs/9.jpg",
    thumbnail: "/jobs/9.jpg",
  },

  {
    original: "/jobs/10.jpg",
    thumbnail: "/jobs/10.jpg",
  },

  {
    original: "/jobs/11.jpg",
    thumbnail: "/jobs/11.jpg",
  },

  {
    original: "/jobs/12.jpg",
    thumbnail: "/jobs/12.jpg",
  },

  {
    original: "/jobs/13.jpg",
    thumbnail: "/jobs/13.jpg",
  },




];


const images5 = [
  {
    original: "/jobs/14.jpg",
    thumbnail: "/jobs/14.jpg",
  },

  {
    original: "/jobs/15.jpg",
    thumbnail: "/jobs/15.jpg",
  },

  {
    original: "/jobs/16.jpg",
    thumbnail: "/jobs/16.jpg",
  },

  {
    original: "/jobs/17.jpg",
    thumbnail: "/jobs/17.jpg",
  },

  {
    original: "/jobs/18.jpg",
    thumbnail: "/jobs/18.jpg",
  },

  {
    original: "/jobs/19.jpg",
    thumbnail: "/jobs/19.jpg",
  },

  {
    original: "/jobs/20.jpg",
    thumbnail: "/jobs/20.jpg",
  },

  {
    original: "/jobs/21.jpg",
    thumbnail: "/jobs/21.jpg",
  },

  {
    original: "/jobs/22.jpg",
    thumbnail: "/jobs/22.jpg",
  },




];



const images6 = [
  {
    original: "/jobs/27.jpg",
    thumbnail: "/jobs/27.jpg",
  },

  {
    original: "/jobs/26.jpg",
    thumbnail: "/jobs/26.jpg",
  },

  {
    original: "/jobs/25.jpg",
    thumbnail: "/jobs/25.jpg",
  },

  {
    original: "/jobs/28.jpg",
    thumbnail: "/jobs/28.jpg",
  },

  {
    original: "/jobs/29.jpg",
    thumbnail: "/jobs/29.jpg",
  },

  {
    original: "/jobs/30.jpg",
    thumbnail: "/jobs/30.jpg",
  },





];


const images7 = [
  {
    original: "/jobs/31.jpg",
    thumbnail: "/jobs/31.jpg",
  },

  {
    original: "/jobs/32.jpg",
    thumbnail: "/jobs/32.jpg",
  },

  {
    original: "/jobs/33.jpg",
    thumbnail: "/jobs/33.jpg",
  },

  {
    original: "/jobs/34.jpg",
    thumbnail: "/jobs/34.jpg",
  },

  {
    original: "/jobs/35.jpg",
    thumbnail: "/jobs/35.jpg",
  },






];




export default function Page() {


  function CounterBlock({ icon, counter, suffix, label }) {
    const [displayValue, setDisplayValue] = useState(0);
    const [width, setWidth] = useState(0);


    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let current = 0;
            const increment = counter / 200;

            const updateCounter = () => {
              current += increment;
              if (current < counter) {
                setDisplayValue(Math.ceil(current));
                requestAnimationFrame(updateCounter);
              } else {
                setDisplayValue(counter);
              }
            };

            updateCounter();
            observer.unobserve(entry.target);
          }
        },
        { threshold: 1 }
      );

      const target = document.querySelector(`[data-counter="${counter}"]`);
      if (target) observer.observe(target);
    }, [counter]);

    useEffect(() => {
      const interval = setInterval(() => {
        setWidth((prev) => (prev < 100 ? prev + 3 : 100)); // Slower increment
      }, 100);

      return () => clearInterval(interval);
    }, []);



    return (
      <article>
        <span className="inline-flex font-semibold text-[14px] bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
          {label}
        </span>
        <div className="mb-5 h-4 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-100"
            style={{ width: `${width}%` }}
          ></div>
        </div>
        <h2>
          <span className="flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2">
            <span data-counter={counter} className="counter">
              {displayValue}
            </span>
            {suffix}
          </span>
        </h2>
      </article>
    );
  }



  const cardData = [

    {
      id: 1,
      imgSrc: "certi/1.webp",
      clientName: "BKT Tires, Bhuj",
      location: "Gujrat",
      jobType: "Chiller, AHU & BMS",
      orderValue: "8 Cr",
    },


    {
      id: 2,
      imgSrc: "certi/2.webp",
      clientName: "Suncity Parikarma",
      location: "Punchkula, Haryana",
      jobType: "Basement Ventilation",
      orderValue: "4 Cr",
    },
    {
      id: 3,
      imgSrc: "certi/3.webp",
      clientName: "Jay Ushin",
      location: "Gurgaon, Haryana",
      jobType: " VRF System ",
      orderValue: "3 Cr ",
    },
    {
      
      id: 4,
      imgSrc: "certi/4.webp",
      clientName: <>Positron Multi Specialty <br /> & Cancer Hospital</>,
      location: "Rohtak, Haryana",
      jobType: " Chiller & AHU ",
      orderValue: "2 Cr",
    },


    {
      id: 5,
      imgSrc: "certi/5.webp",
      clientName: "AlS Glass",
      location: "Bawal, Haryana",
      jobType: "Air Cooling with Air Washer",
      orderValue: "3.5 Cr",
    },
  

    {
      id: 6,
      imgSrc: "certi/6.webp",
      clientName: " Abdos Labtech ",
      location: "Roorkee, Uttrakhand",
      jobType: "VRV & AHU",
      orderValue: "2.5 Cr",
    },
  ];

  return (
    <>

      <div className="row mt-36">
        <p className=' text-center font-sans font-thin text-3xl'>OUR ACHIEVEMENTS</p>
        <p className="text-5xl font-sans  py-3 w-full text-center text-cyan-900 capitalize">
          TOTAL PROJECTS DELIVERED
        </p>


        <div className="row">
          <main className="relative flex flex-col justify-center overflow-hidden">
            <div className="w-full max-w-6xl flex justify-center items-center flex-col mx-auto px-4 md:px-6 py-24">
              <section className="  w-full lg:w-[70%]    pb-5 grid gap-12 md:grid-cols-2 lg:grid-cols-2 px-6 md:px-0 md:gap-16">
                <CounterBlock
                  counter={600}
                  suffix="+"
                  label="TOTAL PROJECTS"
                />
               
                <CounterBlock
                  counter={250}
                  suffix="+"
                  label="AIR CONDITIONING PROJECTS"
                />
              
              </section>
              <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-0 md:gap-16">
              <CounterBlock
                  counter={200}
                  suffix="+"
                  label="AIR COOLING PROJECTS"
                />
                <CounterBlock
                  counter={100}
                  suffix="+"
                  label="CLEAN ROOM PROJECTS"
                />
                <CounterBlock
                  counter={50}
                  suffix="+"
                  label="BASEMENT VENTILATION & LIFT PRESSURIZATION"
                />
              
              </section>
            </div>

            
          </main>
        </div>


    
<p className="text-5xl font-sans  py-3 w-full text-center text-cyan-900 capitalize">
SOME OF OUR PROJECT COMPLETION
CERTIFICATION
        </p>
        <div className="row flex flex-row flex-wrap">
      
      {cardData.map((card) => (
        <div key={card.id} className="col w-6/12 p-8">
          <div
            
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            {/* Image Section */}
            <img
              className="object-cover w-[50%] p-8 h-[50%]"
              src={card.imgSrc}
              alt={`${card.clientName} project`}
            />

            {/* Content Section */}
            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <p className="font-sans">
                  <strong>Client Name:</strong> {card.clientName}
                </p>
                <p className="font-sans">{card.location}</p>
                <p className="font-sans">
                  <strong>Job Type:</strong> {card.jobType}
                </p>
                <p className="font-sans">
                  <strong>Order Value:</strong> {card.orderValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

        <div className="row">
          <p className="text-5xl font-sans py-3 w-full text-center text-cyan-900 capitalize">
            Air Management Jobs

          </p>

          <div className="row flex flex-row flex-wrap-reverse  justify-evenly items-center">
            <div className=" w-full h-full md:w-5/12 ">
              <h2
                className="font-manrope uppercase  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-4xl lg:text-4xl text-black mb-9 max-lg:text-center relative">

                Air Cooling Jobs</h2>
              <p className=" text-justify font-normal text-[16px] leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
              At Adhunik Powertech, we take pride in delivering a wide range of cooling methods that effectively lower air temperatures according to your specific needs. Our selection of Air Cooling Products—such as Air Washers, Ventilation Fans, and both Ducted and Non-Ducted Air Coolers—ensures increased airflow and reduced temperatures, helping you create the ideal environment.

                <br />
                Our proven technique focuses on boosting airflow over the areas you want to cool or increasing the surface area of objects to maximize heat dispersal. We often combine both methods to achieve outstanding results.

                <br />
                When it comes to air cooling projects, we stand out with our expertise, even in non-standard conditions. Trust us to provide reliable and efficient air cooling solutions that meet and exceed your expectations.  </p>
            </div>
            <div className=" w-full h-full md:w-5/12 my-5  ">
              <ImageGallery items={images3} className=" rounded-lg " alt="pics" />

            </div>
          </div>
        </div>


        <div className="row">


          <div className="row flex flex-row flex-wrap-reverse  justify-evenly items-center">

            <div className=" w-full h-full md:w-5/12 my-5  ">
              <ImageGallery items={images4} className=" rounded-lg " alt="pics" />

            </div>
            <div className=" w-full h-full md:w-5/12 ">
              <h2
                className="font-manrope uppercase  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-4xl lg:text-4xl text-black mb-9 max-lg:text-center relative">

                Air Conditioning Jobs</h2>
              <p className=" text-justify font-normal text-[16px] leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
              We specialize in enhancing air quality and comfort in every environment. Our mission is to efficiently deliver conditioned air to all spaces, ensuring that everyone enjoys optimal conditions.

                <br />
                We proudly offer HVAC services to a wide variety of settings, including residential, commercial, hospitals, and industries such as pharmaceuticals and food manufacturing, as well as factories and schools. By choosing us, you guarantee improved comfort and exceptional indoor air quality.
<br />
With years of experience in air conditioning projects, we have a proven track record of success. Trust us to meet your air conditioning needs and experience the difference in quality and comfort.
              </p>
            </div>

          </div>
        </div>


        <div className="row pt-11">


          <div className="row flex flex-row flex-wrap-reverse  justify-evenly items-center">
            <div className=" w-full h-full md:w-5/12 ">
              <h2
                className="font-manrope uppercase  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-4xl lg:text-4xl text-black mb-9 max-lg:text-center relative">

                Clean Room & OT Jobs

              </h2>
              <div className=" text-justify font-normal text-[16px] leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
              Our team of professional engineers specializes in designing HVAC layouts for clean rooms and operating theatres, which require a high level of precision with strict zero tolerance for the entry of foreign particles. We create controlled, isolated environments for handling contamination-sensitive substances while also protecting the exterior environment from hazardous materials within these controlled areas. 

                <br />
                To maintain these standards, we manage the density of sub-micron and larger airborne particles by introducing clean, filtered air into the cleanroom. 
<p className=' text-2xl '>Our services include:
</p>
                <div className="card">
      <ul className="list-disc py-3 space-y-1 ps-4">

        <li>
        Making a blueprint of the duct layout
        </li>
        <li>
        Making blueprints for duct layouts 
        </li>
        <li>
         ⁠Designing/Selecting Air Handling Units (AHUs) 

        </li>
        <li>
        ⁠Designing ducts, including calculating the requirement for risers and diffusers
        </li>
        <li>
        ⁠Contamination control through airflow rate and direction, pressurization, temperature, humidity, and specialized filtration 
        </li>
        <li>
        ⁠Contamination control through airflow rate and direction, pressurization, temperature, humidity, and specialized filtration
        </li>
        <li>
        ⁠Contamination control through airflow rate and direction, pressurization, temperature, humidity, and specialized filtration
        </li>
 <li>
 ⁠Maintaining positive laminar flow inside the room to prevent outside air and foreign particles from entering
 </li>
 <li>
 ⁠Installing a set of micro-filters and HEPA filters as required 
 </li>
 <li>
 ⁠Conducting air balancing to ensure positive pressure is maintained
 </li>
 <li>
 ⁠Fabricating and manufacturing AHUs with the necessary filters and humidity control provisions 
 </li>
 <li>
 ⁠Installing HEPA filters either within the AHU or at the terminals of the supply duct, depending on available space 
 </li>
 <li>
 ⁠Fabricating ducts in various gauges (16G, 18G, 20G, 22G, 24G, 26G) 
 </li>
 <li>
 ⁠Providing guaranteed assurance of class maintenance (particle count) inside the workspace 
 </li>
 <li>
 ⁠Installing ducts and AHUs under the supervision of experienced professionals 
 </li>
 <li>
 ⁠Installing all other standard equipment necessary for the clean room.
 </li>
      </ul>
    </div>
<p>Our commitment ensures the highest standards of cleanliness and safety within controlled environments.</p>
              </div>



            </div>
            <div className=" w-full h-full md:w-5/12 my-5  ">
              <ImageGallery items={images5} className=" rounded-lg " alt="pics" />

            </div>
          </div>
        </div>


        <div className="row">



<div className="row flex flex-row flex-wrap-reverse  justify-evenly items-center">

  <div className=" w-full h-full md:w-5/12 my-5  ">
    <ImageGallery items={images6} className=" rounded-lg " alt="pics" />

  </div>
  <div className=" w-full h-full md:w-5/12 ">
    <h2
      className="font-manrope uppercase  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-4xl lg:text-4xl text-black mb-9 max-lg:text-center relative">

Basement Ventilation </h2>
<div className="about-content pb-8">
  <div className="section-title ">
 
    <p className=" text-gray-500 font-sans">
    Do you notice stale, stuffy, or moldy air lingering in your space? At Adhunik Powertech, we offer an effective Basement Ventilation System designed to improve your air quality by addressing the natural “stack effect” found in industrial, institutional, commercial, and residential settings.

    </p>

    <p className=" text-gray-500 font-sans mt-4">
    Our innovative Ventilation System provides a crucial escape route for trapped, unhealthy air in your basement while bringing in clean, dry air from above to replace the damp, polluted atmosphere.
    </p>

    <p className=" text-gray-500 font-sans mt-4">
    The best part? No extra heating or cooling ducts are required! Our system enhances air circulation, resulting in more frequent air exchanges. Enjoy a cleaner and healthier living environment that you can truly appreciate.
    </p>

   

 
  </div>
</div>

  </div>

</div>

</div>


<div className="row pt-11">


<div className="row flex flex-row flex-wrap-reverse  justify-evenly items-center">
  <div className=" w-full h-full md:w-5/12 ">
    <h2
      className="font-manrope uppercase  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-4xl lg:text-4xl text-black mb-9 max-lg:text-center relative">

Ducting Jobs

    </h2>
    <div className=" text-justify font-normal text-[16px] leading-8 text-gray-500 font-sans  max-lg:text-center max-w-2xl mx-auto">
    
    <div className="about-content pb-8">
  <div className="section-title  ">
   
    <p className=" text-gray-500 font-sans ">
    At Adhunik Powertech, we understand the importance of expertly installed ductwork in creating a comfortable indoor environment. Our commitment ensures that your space remains at the ideal temperature, enhancing your overall comfort.

    </p>

    <p className=" text-gray-500 font-sans  mt-4">
    Neglecting proper ductwork installation can lead to significant problems, including air leakage, inefficient systems, compromised air quality, and expedited wear and tear on your heating and air conditioning systems. Don’t let improper installation jeopardize your comfort and investment!

    </p>

    <p className=" text-gray-500 font-sans  mt-4">
    Correct duct sizing is also vital—duct dimensions must perfectly match your heater or air conditioner for optimal performance. Our team of expert technicians specializes in precisely aligning your duct system to your existing equipment. Through meticulous adjustments, we maximize efficiency, comfort, and system longevity, guaranteeing effective airflow wherever you need it.

    </p>

  

    <p className=" text-gray-700 font-sans  mt-4">
      <strong>Our comprehensive Ducting Jobs process includes:
      </strong>
    </p>

    <ul className="list-disc py-3 space-y-1 ps-4">
      <li> Carrying out seamless installation and operation of all ducting activities.
      </li>
      <li>  ⁠Efficiently scheduling, assigning, planning, and monitoring duct work on your project sites.
      </li>
      <li>  ⁠Thoroughly reviewing layouts and drawings for both current and future ducting projects. </li>
      <li> Supervising all duct work on-site to ensure quality.
      </li>
      <li> Upholding progress, schedules, and meeting project deadlines without fail.
      </li>
      <li> ⁠Preparing and delivering detailed daily reports to supervisors, engineers, and clients.
      </li>
    </ul>

   <p>Choose Adhunik Powertech for professional ductwork that you can trust, ensuring comfort and efficiency for years to come!</p>
  </div>
</div>


    </div>



  </div>
  <div className=" w-full h-full md:w-5/12 my-5  ">
    <ImageGallery items={images7} className=" rounded-lg " alt="pics" />

  </div>
</div>
</div>

      </div>
    </>
  );
}
