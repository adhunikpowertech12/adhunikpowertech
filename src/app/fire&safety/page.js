'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react";



export default function FireSafety() {

  const slides = [
    {
      id: 1,
      video: 'https://res.cloudinary.com/ddkyx2jhh/video/upload/v1738750036/Fire__pbzsax.mp4',
      title: 'WELCOME TO ADHUNIK FIREXPERT',
      description: 'We are technically very competent to design any kind of project where conditions are different from nominal.',
      buttonText: 'Request A Quote',
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const containerRef = useRef(null);

  // Auto-play logic with manual slide control
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Auto-play every 5 seconds

    return () => clearInterval(slideInterval); // Clean up on unmount
  }, [slides.length]);

  // Start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
  };

  // Handle dragging
  const handleMouseMove = (e) => {

    if (!isDragging) return;
    const currentPos = e.clientX;
    const diff = startPos - currentPos;

    // If the user drags left
    if (diff > 50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setIsDragging(false);
    }

    // If the user drags right
    if (diff < -50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setIsDragging(false);
    }
  };

  // End dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // End dragging when mouse leaves the slide area
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Manual slide control via dots
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const items = [
    {
      id: 1,
      imgSrc: ' firex/4.png ',
      imgAlt: 'fire extinguisher',
      title: 'Top Quality Products',
      description: 'We are well versed in how important fire safety products are during an emergency, so we provide pre-tested, top-quality, and branded fire safety equipment in Gurugram, India.',
    },
    {
      id: 2,
      imgSrc: 'https://plus.unsplash.com/premium_photo-1661962457945-5c1aabee6df4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imgAlt: 'fireman',
      title: 'Professional Services',
      description: 'Our fire protection services are executed with precision by a talented team of fire safety specialists, with years of expertise on how to perform such work accurately.',
    },
    {
      id: 3,
      imgSrc: 'https://www.shyamafireprotectionservices.com/images/sfty-prdcts.jpg',
      imgAlt: 'smoke detector',
      title: 'Best Price',
      description: "When it comes to fire safety, one shouldn't compromise on cost. Our equipment and services are more affordable than most in the market, without sacrificing quality.",
    },
  ];

  const services = [
    {
      icon: "fa-fire-extinguisher",
      title: "Fire Extinguisher Refilling",
      description:
        "Fire extinguishers need regular refills. We use the latest technology to execute the refilling process flawlessly, dealing with all types of fire extinguishers.",
    },
    {
      icon: "fa-fire-extinguisher",
      title: "Fire Extinguisher Installation",
      description:
        "Installation of fire extinguishers is crucial for fire safety. We ensure proper placement so that you can access the extinguisher quickly in an emergency.",
    },
    {
      icon: "fa-fire-extinguisher",
      title: "Fire Extinguisher Maintenance",
      description:
        "Proper maintenance is key for smooth operation. Our experts use the latest technology to ensure top-notch service.",
    },
    {
      icon: "fa-fire",
      title: "Fire Alarm Installation System",
      description:
        "We provide all types of fire safety services. Our specialists ensure precise fire alarm panel installation for optimal safety.",
    },
    {
      icon: "fa-fire",
      title: "Smoke Detector Installation",
      description:
        "Smoke detectors are a crucial part of the fire alarm system. Our team executes the installation with precision.",
    },
    {
      icon: "fa-fire",
      title: "Warning Siren Installation",
      description:
        "Sirens are vital for alerting during fire emergencies. We install warning sirens at strategic points for maximum efficiency.",
    },
  ];

  return (


    <>

      <div className="row   h-auto w-full relative">

        <div
          className="relative w-full h-screen overflow-hidden"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
              >
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>


              <div className="flex items-center h-full bg-black bg-opacity-40">

                <div className=" text-white  text-center md:text-left  lg:px-16">
                  <p className="   text-3xl md:text-6xl  md:w-[90%]  mb-2 font-thin">
                    {slide.title}</p>
                  <p className=' text-[14px]  md:w-[70%]'>{slide.description}</p>
                  <button
                    className=" cursor-pointer z-10 relative mt-4 text-sm px-7 py-4 text-white rounded-lg shadow-lg transition-colors duration-300"
                    style={{
                      background: `
      radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%),
      linear-gradient(68.8deg, rgba(0, 0, 0, 0.95) 1.8%, rgb(0, 55, 79) 31.8%, rgb(9, 93, 134) 56.2%, rgb(15, 155, 217) 89%)
    `,
                      backgroundBlendMode: 'multiply' // You can adjust this if needed
                    }}
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Progress indicators (dots) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-5 h-1 rounded-sm  ${index === currentSlide ? 'bg-[#FC6C1E]' : 'bg-gray-400'
                  }`}
              />
            ))}
          </div>

        </div>



        <div className="row">

          <div className="section bg-[#FBFF00]">
            <div className="content-wrap rt rr">
              <div className="container mx-auto">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-7/12 ss">
                    <div className="text-primary">
                      <h1 className="text-2xl lg:text-[34px] font-sans text-center md:text-left font-extrabold p-9">
                        Adhunik FIREXPERT Services Is A Leading Fire Protection Equipment Supplier in Gurugram, India
                      </h1>
                    </div>
                    <p className="mt-3 uk21"></p>
                  </div>
                  <div className="w-full lg:w-5/12 sa">
                    <p className="lead text-black"></p>
                    <p className="text-black text-center  md:text-justify font-sans  p-9">
                      When it comes to fire safety, ignorance can lead to disaster. Fire accidents can happen anywhere,
                      risking the lives of people working or living there. It should be taken quite seriously. FIREXPERT
                      Protection Services provides excellent quality fire safety equipment , India to enhance and
                      optimize your fire safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div id="class" className="section">
            <div className="py-0">
              <div className="container-fluid lg:container mx-auto">
                <div className="flex flex-wrap justify-center">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="  w-full lg:w-4/12 relative bottom-7 flex justify-center text-center group"
                    >
                      <div className="flex flex-col items-center">
                        {/* Image Wrapper */}
                        <div className="h-80 w-96">
                          <a href="#">
                            <img
                              src={item.imgSrc}
                              alt={item.imgAlt}
                              className="h-full w-full object-contain object-center"
                            />
                          </a>
                        </div>

                        {/* Body Content */}
                        <div className="body-content m-4 shadow-lg p-4 border-l-[#DD1403] border-l-8 border-t-0 border-r-0 border-b-0 transition transform bg-white font-sans group-hover:-translate-y-14 group-hover:shadow-xl">
                          <h3 className="text-black mb-3 text-[26px] group-hover:text-red-600 transition-colors duration-300">
                            <a href="#" className="font-sans font-extrabold">
                              {item.title}
                            </a>
                          </h3>
                          <p className="jsticnt">{item.description}</p>
                        </div>
                      </div>
                    </div>


                  ))}
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
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  md:h-[22rem]  object-center object-fill "
                          fetchPriority="high"
                          decoding="async"
                          alt="Air washer"
                          src="/firex/13.webp"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">Fire Extinguishers <span className=' text-sm'> </span> </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <h2 className="text-[6vw] md:text-4xl md:text-left font-sans mb-3   ">Fire Extinguishers </h2>
              <p className=' text-center md:text-justify' >Fire extinguishers are crucial devices designed to
                suppress small fires and prevent them from spreading.
                Understanding the different types of fire extinguishers
                and their specific applications can help ensure safety in
                homes, offices, and public spaces.</p>
              <h2 className=' text-2xl text-left py-4'>Types of Extinguishers</h2>
              <div className="text-justify ">
                <ul className="list-disc ps-4">
                  <li>Water (Class A)</li>
                  <li>Foam (Class A and B)
                  </li>
                  <li>Dry Powder (Class A, B, and C)</li>
                  <li>Carbon Dioxide (CO2) (Class B and C)</li>
                  <li>Wet Chemical (Class K)</li>
                  <li>Clean Agent (Class B)</li>

                </ul>
              </div>
              <div className="show_m mt-5">
                <Link href='/fire-extinguishers'
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                  
                >
                  Know More
                </Link>



              </div>
            </div>


          </div>




        </div>


        <div className="row">
          <div className=" h-full flex  flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">



            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <h2 className="text-[6vw] md:text-4xl md:text-left font-sans mb-3   ">Fire Hydrant System </h2>
              <p className=' text-center md:text-justify' >A fire hydrant system is a critical component of fire protection infrastructure, providing emergency
                responders with quick access to water for firefighting operations. These systems are strategically
                placed in urban and rural areas to ensure that firefighters can effectively combat fires and protect life
                and property.</p>
              <h2 className=' text-2xl text-left py-4  underline'>Components of a Fire Hydrant System</h2>
              <div className="text-justify ">
                <ul className="list-disc ps-4 text-left md:text-justify">
                  <li> <span className=" font-bold font-sans ">Hydrants:  </span>  The primary components, hydrants are typically made of durable materials such as ductile iron or
                    brass. They come in various types, including:</li>
                  <li> <span className=" font-bold font-sans "> Wet Barrel Hydrants:  </span>  Common in warmer climates, where water remains in the hydrant.
                  </li>
                  <li>  <span className=" font-bold font-sans "> Dry Barrel Hydrants:  </span>  Used in colder areas, designed to drain water to prevent freezing. </li>
                  <li>  <span className=" font-bold font-sans "> Water Supply: </span> Hydrants connect to a municipal water supply or a dedicated water source, ensuring a steady
                    flow of water during emergencies. </li>
                  <li>  <span className=" font-bold font-sans "> Piping: </span>  Underground piping networks transport water from the source to the hydrants. These pipes must be
                    adequately sized to deliver sufficient water pressure. </li>
                  <li> <span className=" font-bold font-sans "> Control Valves:  </span>  These valves regulate the flow of water to the hydrants. Proper operation is crucial for efficient
                    firefighting. </li>
                  <li> <span className=" font-bold font-sans "> Pressure Regulating Devices:  </span>  To maintain optimal water pressure and prevent damage to the system.</li>

                </ul>
              </div>
              <div className="show_m mt-5">
                <Link
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                 href='/fire-hydrant-system'
                >
                  Know More
                </Link>



              </div>
            </div>


            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  md:h-[28rem]  object-center object-fill "
                          fetchPriority="high"
                          decoding="async"
                          alt="Air washer"
                          src="whs.jpeg"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">Fire Hydrant System <span className=' text-sm'> </span> </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
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
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  md:h-[28rem]  object-center object-fill "
                          fetchPriority="high"
                          decoding="async"
                          alt="Air washer"
                          src="https://media.istockphoto.com/id/183351263/photo/fire-sprinkler.jpg?s=612x612&w=0&k=20&c=_VZHbpRW55jCIFxavy0t2MmMN-CwSZN6kkisYwXgU4Y="
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl  font-bold text-white"> Fire Sprinkler System <span className=' text-sm'> </span> </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <h2 className="text-[6vw] md:text-4xl md:text-left font-sans mb-3   ">Fire Sprinkler System </h2>
              <p className=' text-center md:text-justify ' > Fire sprinkler systems are vital components of modern fire protection, designed to detect and
                suppress fires automatically. These systems can significantly reduce the risk of fire-related injuries
                and property damage, making them an essential element in both residential and commercial
                buildings. </p>
              <h2 className=' text-2xl text-left py-4 underline'>Components of a Fire Sprinkler System</h2>
              <div className="text-start md:text-justify ">
                <ul className="list-disc ps-4">
                  <li> <span className=" font-bold font-sans "> Sprinkler Heads:  </span>  The most visible part of the system, sprinkler heads release water when activated by heat.
                    They come in various types, including:</li>
                  <li> <span className=" font-bold font-sans ">  Concealed Sprinklers:  </span> Hidden from view, ideal for aesthetics.
                  </li>
                  <li>  <span className=" font-bold font-sans "> Pendant Sprinklers:  </span> Hang from the ceiling and are commonly used in open spaces. </li>
                  <li> <span className=" font-bold font-sans "> Upright Sprinklers:  </span>  Installed above the ceiling, directing water downward.</li>
                  <li> <span className=" font-bold font-sans "> Piping:  </span>  The network of pipes transports water from the source to the sprinkler heads. These pipes are designed to
                    withstand high pressures and are usually made from steel, copper, or PVC. </li>
                  <li> <span className=" font-bold font-sans "> Water Supply:  </span>  Fire sprinkler systems require a reliable water source, which can be from municipal water
                    lines, tanks, or dedicated pumps. </li>
                  <li><span className=" font-bold font-sans "> Control Valves:  </span>  These valves manage the water flow within the system. They must be regularly inspected to
                    ensure they are operational.</li>
                  <li><span className=" font-bold font-sans "> Alarm Systems: </span>  Integrated fire alarm systems notify occupants and emergency services when a sprinkler is
                    activated.</li>

                </ul>
              </div>
              <div className="show_m mt-5">
                <Link
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                href='/fire-sprinkler-system'
                >
                  Know More
                </Link>



              </div>
            </div>


          </div>




        </div>


        <div className="row">
          <div className=" h-full flex  flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">



            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <h2 className="text-[6vw] md:text-4xl md:text-left font-sans mb-3   "> Fire suppression system </h2>
              <p className=' text-center md:text-justify' > Fire suppression systems are crucial safety measures designed to detect and extinguish fires before
                they escalate, protecting lives, property, and assets. These systems can be categorized into various
                types, each tailored to specific environments and fire risks. Fire suppression systems are critical
                components in fire protection strategies, designed to detect and control fires quickly, minimizing
                damage and protecting lives. </p>
              <h2 className=' text-2xl text-left py-4 underline '> Key Components</h2>
              <div className=" text-start md:text-justify ">
                <ul className="list-disc ps-4">
                  <li> <span className=" font-bold font-sans "> Detection Devices:  </span>  Smoke detectors, heat sensors, and flame detectors identify the
                    presence of fire and initiate the suppression process. </li>
                  <li> <span className=" font-bold font-sans "> Dry Barrel Hydrants:  </span>  Centralized systems that monitor fire conditions and activate suppression
                    mechanisms.
                  </li>
                  <li> <span className=" font-bold font-sans "> Delivery Systems:  </span>  Includes pipes, nozzles, and other components that disperse the
                    extinguishing agent effectively. </li>
                  <li> <span className=" font-bold font-sans "> Manual Activation Stations: </span>  Allow for manual triggering of the suppression system in case
                    of fire detection.</li>

                </ul>
              </div>
              <div className="show_m mt-5">
                <Link
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
             href='/fire-suppression-system'
                >
                  Know More
                </Link>



              </div>
            </div>


            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  md:h-[28rem]  object-center object-fill "
                          fetchPriority="high"
                          decoding="async"
                          alt="Air washer"
                          src="https://media.istockphoto.com/id/1178819648/photo/automatic-gas-fire-extinguishing-system-safety-of-premises-from-conflagration-red-compressed.jpg?s=612x612&w=0&k=20&c=64d5ykqzttrQlXWdSVIyHsgzb_luXXlM0jgwLJ5qGbE="
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">Fire suppression system <span className=' text-sm'> </span> </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
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
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  md:h-[28rem]  object-center object-fill "
                          fetchPriority="high"
                          decoding="async"
                          alt="Air washer"
                          src=" https://media.istockphoto.com/id/935712068/photo/fire-security-equipment-and-blueprint-on-a-table-good-for-security-servise-engeniering-company.jpg?s=612x612&w=0&k=20&c=1gI3Fsg8aLKxAGjAxhQpKA1g2tDIb_ye3awHgb8wVQM= "
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">Fire Alarm System <span className=' text-sm'> </span> </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <h2 className="text-[6vw] md:text-4xl md:text-left font-sans mb-3   "> Fire Alarm System </h2>
              <p className=' text-center md:text-justify' > Fire alarm systems are essential safety mechanisms designed to detect fires early and alert occupants,
enabling swift evacuation and response. They play a crucial role in protecting lives and property by
providing early warning signals when a fire is detected. By providing timely warnings, these systems help
ensure swift evacuations, potentially saving lives and minimizing property damage. </p>
              <h2 className=' text-2xl text-left py-4 underline'>Types of Fire Alarm Systems</h2>
              <div className="text-start md:text-justify ">
                <ul className="list-disc ps-4">
                  <li><span className=" font-bold font-sans "> Conventional Fire Alarm Systems:  </span> 
These systems divide the building into zones. When an alarm is triggered, the control panel indicates the
zone, helping responders identify the location of the fire. </li>
<li> <span className=" font-bold font-sans "> Addressable Fire Alarm Systems:  </span>
More sophisticated, these systems assign a unique address to each detection device, allowing for precise
identification of the device that activated the alarm. This enhances response efficiency.</li>
<li> <span className=" font-bold font-sans "> Wireless Fire Alarm Systems:  </span>
Utilizing wireless technology, these systems are easier to install and expand, making them suitable for
various environments where traditional wiring is not feasible.</li>
                 

                </ul>
              </div>
              <div className="show_m mt-5">
                <Link
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                 href='/fire-alarm-system'
                >
                  Know More
                </Link>



              </div>
            </div>


           

          </div>





        </div>


        <div className="row">
          <div className=" h-full flex  flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">

           

            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <h2 className="text-[6vw] md:text-4xl md:text-left font-sans mb-3    ">Glow Signage and Emergency Lights</h2>
              <p className=' text-center md:text-justify' > Glow signage and emergency lights are critical components of safety management in public spaces,
commercial buildings, and industrial facilities. They serve to guide and inform occupants during
emergencies, ensuring a safe and efficient evacuation. </p>
              <h2 className=' text-2xl text-left py-4 underline'> Types of Glow Signage </h2>
              <div className="text-start md:text-justify ">
                <ul className="list-disc ps-4">
                  <li> <span className=" font-bold font-sans "> Exit Signs:  </span> Indicate the nearest exit routes, guiding occupants to safety.</li>
                  <li><span className=" font-bold font-sans "> Directional Signs:  </span> Provide information on the location of exits, restrooms, fire
                  extinguishers, and assembly points.</li>
                  <li><span className=" font-bold font-sans "> Safety Instructions: </span> Communicate essential safety protocols, such as “Emergency Exit
Only” or “No Smoking.
”</li>
<li><span className=" font-bold font-sans "> Hazard Signs:  </span> Warn of potential hazards, like “Flammable Materials” or “Electrical Hazard.
”</li>
                

                </ul>
              </div>
              <div className="show_m mt-5">
                <Link
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                 href='/glow-signage-&-emergency-lights'
                >
                  Know More
                </Link>



              </div>
            </div>

            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  md:h-[28rem]  object-center object-fill "
                          fetchPriority="high"
                          decoding="async"
                          alt="Air washer"
                          src="firex/10.png"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-2xl font-bold text-white"> Glow Signage and Emergency Lights<span className=' text-sm'> </span> </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
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
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  md:h-[30rem]  object-center object-fill "
                          fetchPriority="high"
                          decoding="async"
                          alt="Air washer"
                          src="ft2.jpg "
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">     Fire Tubing System  <span className=' text-sm'> </span> </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">

       



              <h2 className="text-[6vw] md:text-4xl md:text-left font-sans mb-3   ">      Fire Tubing System</h2>
              <p className=' text-center md:text-justify' >
              A fire tubing system typically consists of a network of flexible, heat-sensitive tubes filled with a special
agent, such as water, foam, or dry chemicals, designed to activate when exposed to heat or flames. The
tubing is strategically placed throughout a protected area, often in vulnerable or high-risk locations,
such as machinery rooms, electrical panels, or large storage areas.
 </p>
              <h2 className=' text-2xl text-left py-4 underline'>  Key Components </h2>
              <div className="text-start md:text-justify ">
                <ul className="list-disc ps-4">

              








                  <li><span className=" font-bold font-sans ">   Flexible Tubing : </span> 
                The heart of the fire tubing system is the flexible heat-sensitive tubing, which is
typically made from durable materials like rubber or plastic. The tubing is designed to burst or
activate when it reaches a specific temperature, releasing the fire suppression agent.
Fire Suppression Agent: Depending on the system, various suppression agents may be used,
including:
</li>
<li> <span className=" font-bold font-sans "> Water :  </span>
 Often used in areas where traditional sprinklers are insufficient or impractical.

</li>
<li> <span className=" font-bold font-sans "> Foam : </span>
 Effective for suppressing flammable liquid fires.


</li>
<li> <span className=" font-bold font-sans "> Chemical agents :  </span>
Like dry powders or gases that are ideal for use in electrical equipment or
machinery where water is not appropriate.

</li>
<li> <span className=" font-bold font-sans "> Fittings and Accessories :  </span>
 These include valves, connectors, and nozzles that help distribute the
suppression agent throughout the protected area. Fittings are designed for quick installation
and maintenance.

</li>
<li> <span className=" font-bold font-sans "> Control Panel (optional) : </span>
 In more advanced systems, a control panel monitors the state of the
fire tubing system, including the temperature, pressure, and agent levels, and provides alerts in
case of activation.

</li>
                 

                </ul>
              </div>
              <div className="show_m mt-5">
                <Link
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                href='/fire-tubing-system'
                >
                  Know More
                </Link>



              </div>
            </div>


           

          </div>





        </div>

        <div className="row">
          <div className=" h-full flex flex-col-reverse md:flex-row text-center md:p-5 bg-[#F4F4F4] m-4">
        
   

            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <h2 className="text-[6vw] md:text-4xl md:text-left font-sans mb-3   "> Fire VESDA System </h2>
              <p className=' text-center md:text-justify' >   The VESDA (Very Early Smoke Detection Apparatus) system is a sophisticated, high-sensitivity smoke
detection solution designed to provide early warning of potential fire risks. This system is widely
recognized for its ability to detect smoke at extremely low concentrations—often well before visible
signs of smoke or flames appear—making it a critical component in modern fire protection systems,
especially in environments where rapid response is vital. </p>
              <h2 className=' text-2xl text-left py-4 underline'> Key Components </h2>
              <div className="text-left md:text-justify ">
                <ul className="list-disc ps-4">





 
                  <li> <span className=" font-bold font-sans "> High Sensitivity : </span>
                  
             
 Detects smoke at low concentrations, often well before visible signs of fire.
                  </li>
                  <li><span className=" font-bold font-sans ">  Early Warning :  </span> 
                  Offers pre-alarms for early intervention, preventing fire spread.
                  </li>
                  <li><span className=" font-bold font-sans ">    Multiple Alarm Levels : </span>
                Alerts vary from pre-alarm to full fire alarms, allowing for appropriate
                  response.
”</li>
<li><span className=" font-bold font-sans "> Wide Coverage:  </span> Suitable for large or complex spaces with its pipe-based air sampling.
”</li>
                
<li><span className=" font-bold font-sans "> Integration :  </span> Can work with other fire safety systems like sprinklers and alarms.
       
”</li>
                

                </ul>
              </div>
              <div className="show_m mt-5">
                <Link
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                href='/fire-VESDA-system'
                >
                  Know More
                </Link>



              </div>
            </div>

            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="    object-center object-fill "
                          fetchPriority="high"
                          decoding="async"
                          alt="Air washer"
                          src="vs2.webp"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-2xl font-bold text-white"> Fire VESDA System <span className=' text-sm'> </span> </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Stay cool and comfortable all summer long with our efficient air cooler, designed for optimal airflow and energy savings.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>




        </div>

      </div>

    </>
  )
}
