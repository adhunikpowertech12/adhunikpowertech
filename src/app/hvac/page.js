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
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
              <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-0 md:gap-16">
                <CounterBlock
                  counter={600}
                  suffix="+"
                  label="TOTAL PROJECTS"
                />
                <CounterBlock
                  counter={8}
                  suffix="Cr."
                  label="HIGHEST PROJECT VALUE"
                />
                <CounterBlock
                  counter={250}
                  suffix="+"
                  label="AIR CONDITIONING PROJECTS"
                />
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
                We follow the process of lowering air temperature by various cooling methods as per the requirement. We provide increased airflow and reduced temperatures with the use of Air Cooling Products like Air Washers, Ventilation Fans, Ducted, and Non-Ducted Air Coolers, etc. according to the requirement.
                <br />
                The technique involves increased airflow over the target that needs to be cooled or increasing the surface area of the object to help disperse heat. Sometimes both techniques are used.
                <br />
                We are technically very competitive to complete any kind of Air Cooling Job where the conditions are different from normal.
              </p>
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
                We follow the process of altering the properties of air to the more comfortable conditions, typically intending to distribute the conditioned air to an occupied space, such as Residential buildings, Commercial spaces, Hospitals, Pharma and Food Industries, Industrial and Institutional sector, etc., to improve the thermal comfort and indoor air quality.
                <br />
                We at Om Cooling System are well-experienced in handling Air Conditioning jobs and have completed many projects proudly.
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
                Our Team of professional engineers is experienced in Designing an HVAC layout for Clean Rooms and OTs which is a work of high precision with zero tolerance for the entry of foreign particles. We provide a controlled, isolated environment for handling contamination-sensitive substances or for protecting the exterior
                <br />
                environment from dangerous substances in the controlled area. The density of sub-micron and larger airborne particle contamination inside a cleanroom is kept within tightly controlled limits by forcing clean, filtered air into the cleanroom.
                <div className="card">
      <ul className="list-disc py-3 space-y-1 ps-4">

     



        <li>
        Making a blueprint of the duct layout
        </li>
  <li>
  A.H.U design
  </li>
<li>
Duct designing including calculation of the requirement of Risers and Diffusers
</li>
<li>
Contamination control through Air flow rate and direction, pressurization, temperature, humidity, and specialized filtration
</li>
<li>
Maintaining Positive Laminar flow inside the room and not allowing the outside air/foreign particle to enter.
</li>
<li>
Installation of a set of Micro-Filters and HEPA Filters as required.
</li>
<li>
Air Balancing and maintaining positive pressure
</li>
<li>
Fabrication and manufacturing of A.H.U with required Filters and provision of humidity control
</li>
<li>
Installation of HEPA filters either in the A.H.U or at terminals of the Supply duct as the space allows

</li>
<li>
Fabrication of 16G/18-G/20-G/22-G/24-G/26-G duct

</li>
<li>
Guaranteed assurance of class maintenance (particle count) inside the work-space
</li>
<li>
Installation of Duct and A.H.Us under the supervision of experienced professionals
</li>
<li>
Installation of all other standard equipment required for the clean room.
</li>
      </ul>
    </div>

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
      Are you looking for a <strong className="font-semibold">basement ventilation?</strong>
    </p>

    <p className=" text-gray-500 font-sans mt-4">
      Do you have <strong className="font-semibold">stale, stuffy, or moldy air</strong> that needs to be filtered out?
    </p>

    <p className=" text-gray-500 font-sans mt-4">
      If so, we at <strong className="font-semibold">Om Cooling System</strong> provide a Basement Ventilation System that will help improve the air quality by combating the natural 
      <strong className="font-semibold"> “stack effect”</strong> in the <strong className="font-semibold">industrial, institutional, commercial</strong>, and 
      <strong className="font-semibold"> residential sectors</strong>.
    </p>

    <p className=" text-gray-500 font-sans mt-4">
      Our <strong className="font-semibold">Ventilation System</strong> creates a much-needed path of escape from the dirty basement air and introduces the clean, dry air from upstairs to replace the damp, polluted air.
    </p>

    <p className=" text-gray-500 font-sans mt-4">
      No additional heating or cooling ducts are necessary. Our <strong className="font-semibold">Ventilation System</strong> assists in air circulation throughout the area. The entire space benefits from increased 
      <strong className="font-semibold"> air exchanges</strong>, creating a cleaner, healthier living environment that you can see and feel!
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
      We at <strong className="font-semibold">Om Cooling System</strong> ensure that ductwork is installed properly, providing an efficient way to keep your environment 
      <strong className="font-semibold"> comfortable</strong> and <strong className="font-semibold">regulating</strong> the temperature in the required area.
    </p>

    <p className=" text-gray-500 font-sans  mt-4">
      If <strong className="font-semibold">ductwork</strong> is not done properly, it can result in air <strong className="font-semibold">leakage, inefficient systems, poor air quality,</strong> and early failure of 
      <strong className="font-semibold"> heating/air conditioning</strong> equipment.
    </p>

    <p className=" text-gray-500 font-sans  mt-4">
      Proper sizing is also crucial for <strong className="font-semibold">ductwork installation</strong>. The size of the ducts must match your 
      <strong className="font-semibold"> heater or air conditioner</strong> to ensure efficient operation.
    </p>

    <p className=" text-gray-500 font-sans  mt-4">
      Our <strong className="font-semibold">ductwork installation professionals</strong> are skilled technicians who will perfectly match the duct system to your equipment. They fine-tune the ductwork for 
      <strong className="font-semibold"> optimal efficiency, comfort, and longevity</strong>, ensuring air flows correctly into the required areas.
    </p>

    <p className=" text-gray-700 font-sans  mt-4">
      <strong>Our process of Ducting Jobs includes:</strong>
    </p>

    <ul className="list-disc py-3 space-y-1 ps-4">
      <li>Carrying out installation and operation of all ducting activities.</li>
      <li>Scheduling, assigning, planning, and monitoring ducting work on project sites.</li>
      <li>Reviewing layouts and drawings for current and future ducting projects.</li>
      <li>Supervising ducting works on-site.</li>
      <li>Ensuring progress, schedules, and completion within the promised time.</li>
      <li>Preparing and submitting daily reports to supervisors, engineers, and clients.</li>
    </ul>

   
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
