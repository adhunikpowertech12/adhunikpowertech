'use client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function page2() {


 
  const slides = [
    {
      id: 1,
      video: 'https://videos.pexels.com/video-files/28750643/12466849_2560_1440_25fps.mp4',
      title: <> A Legacy of Strength  A <br /> Future of Hope </>,
      description: '',
      buttonText: 'Overview',
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Auto-play every 5 seconds

    return () => clearInterval(slideInterval); // Clean up on unmount
  }, [slides.length]);

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


  const articles = [
    {
      id: 1,
      title: ' Air Washer',
      description: 'Breathe easy with our air washers. Experience cleaner, fresher air by removing pollutants and allergens. ',
      imgSrc: '/AWI.png',
      link: '#',
      imgHeight: "250px ",
      imgWidth: "250px ",
    },
    {
      id: 2,
      title: ' Ducted Air Coolers ',
      description: 'Stay comfortable in style. Our ducted air coolers provide quiet, efficient cooling without compromising your space.',
      imgSrc: '/DCI.png',
      link: '#',
      imgHeight: "250px    ",
      imgWidth: "250px ",
    },
    {
      id: 3,
      title: ' Ventlilation Exhaust Fan ',
      description: ' Create a healthier, more comfortable indoor environment. Our ventilation exhaust fans remove moisture, odors, and pollutants. ',
      imgSrc: '/efss.png',
      link: '#',
      imgHeight: "250px ",
      imgWidth: " 250px  ",
    },
  ];


  const articles2 = [
    {
      id: 1,
      title: ' PANEL AIR CONDITIONER ',
      description: 'Keep your CNC and electrical panels running smoothly. Our panel air conditioners provide precise temperature control and reliable cooling, preventing overheating and system failures.',
      imgSrc: '/panelac.png',
      link: '#',
      imgHeight: "350px",
      imgWidth: "350px",
    },
    {
      id: 2,
      title: ' OIL AND COOLANT CHILLER ',
      description: 'Protect your valuable machinery and maintain optimal operating temperatures with our efficient oil and coolant chillers. Prevent overheating, reduce downtime, and improve overall productivity.',
      imgSrc: '/OC.png',
      link: '#',
      imgHeight: "350px",
      imgWidth: "350px",
    },
    {
      id: 3,
      title: 'AIR SHOWER ',
      description: ' Maintain a clean and controlled environment with our high-performance air showers. Effectively remove dust, debris, and contaminants from personnel before entering critical areas. ',
      imgSrc: '/as.png',
      link: '#',
      imgHeight: "350px",
      imgWidth: "350px",
    },
    {
      id: 4,
      title: 'Air Handling Unit ',
      description: ' Optimize indoor air quality and comfort with our efficient air handling units. Control temperature, humidity, and airflow for a healthy and productive environment. ',
      imgSrc: '/AHU.png',
      link: '#',
      imgHeight: "350px",
      imgWidth: "350px",
    },
  ];



  
  const [showModal, setShowModal] = React.useState(false);

  const closeModal = () => {
    setShowModal(false);
  };


  useEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
      })
    );

    let zoomControl = chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
    zoomControl.homeButton.set("visible", true);

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am4geodata_worldLow,
        exclude: ["AQ"]
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0xdadada)
    });

    let pointSeries = chart.series.push(am5map.ClusteredPointSeries.new(root, {}));

    pointSeries.set("clusteredBullet", function(root) {
      let container = am5.Container.new(root, {
        cursorOverStyle: "pointer"
      });

      let circle1 = container.children.push(am5.Circle.new(root, {
        radius: 8,
        tooltipY: 0,
        fill: am5.color(0xff8c00)
      }));

      let circle2 = container.children.push(am5.Circle.new(root, {
        radius: 12,
        fillOpacity: 0.3,
        tooltipY: 0,
        fill: am5.color(0xff8c00)
      }));

      let circle3 = container.children.push(am5.Circle.new(root, {
        radius: 16,
        fillOpacity: 0.3,
        tooltipY: 0,
        fill: am5.color(0xff8c00)
      }));

      let label = container.children.push(am5.Label.new(root, {
        centerX: am5.p50,
        centerY: am5.p50,
        fill: am5.color(0xffffff),
        populateText: true,
        fontSize: "8",
        text: "{value}"
      }));

      container.events.on("click", function(e) {
        pointSeries.zoomToCluster(e.target.dataItem);
      });

      return am5.Bullet.new(root, {
        sprite: container
      });
    });

    pointSeries.bullets.push(function() {
      let circle = am5.Circle.new(root, {
        radius: 6,
        tooltipY: 0,
        fill: am5.color(0xff8c00),
        tooltipText: "{title}"
      });

      return am5.Bullet.new(root, {
        sprite: circle
      });
    });

    // Set data for cities
    let cities = [
      { title: "Nepal", latitude: 28.3949, longitude: 84.1240 }, // Nepal
      { title: "India", latitude: 20.5937, longitude: 78.9629 }, // India
      { title: "Iraq", latitude: 33.2232, longitude: 43.6793 }, // Iraq
      { title: "Saudi Arabia", latitude: 23.8859, longitude: 45.0792 }, // Saudi Arabia
      { title: "Bangladesh", latitude: 23.685, longitude: 90.3563 }, // Bangladesh
      { title: "UAE", latitude: 23.4241, longitude: 53.8478 } // UAE
    ];
    

    for (let i = 0; i < cities.length; i++) {
      let city = cities[i];
      addCity(city.longitude, city.latitude, city.title);
    }

    function addCity(longitude, latitude, title) {
      pointSeries.data.push({
        geometry: { type: "Point", coordinates: [longitude, latitude] },
        title: title
      });
    }

    chart.appear(1000, 100);

    return () => {
      root.dispose(); // Clean up when component unmounts
    };
  }, []);

  const data = [
    {
      id: 1,
      title: "Pioneers in Innovation",
      description: "We are the proud manufacturers of India's first stainless steel (304 grade) air washer and ducted air cooler, setting the benchmark for durability and hygiene.",
      imgSrc: "https://plus.unsplash.com/premium_photo-1672847671576-21241c8e28f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGluZHVzdHJpYWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      title: "Unmatched Variety  ",
      description: "Our extensive product range caters to diverse needs and budgets, ensuring you find the perfect fit for your requirements.",
      imgSrc: "https://plus.unsplash.com/premium_photo-1672847671576-21241c8e28f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGluZHVzdHJpYWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title: "Cost-Effective & Energy-Efficient",
      description: "Our innovative designs prioritize energy efficiency, translating to lower operating costs and a smaller environmental footprint. ",
      imgSrc: "https://plus.unsplash.com/premium_photo-1672847671576-21241c8e28f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGluZHVzdHJpYWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "Eco-Conscious Cooling ",
      description: "Our eco-friendly products bring in fresh, outside air while minimizing environmental impact.  ",
      imgSrc: "https://plus.unsplash.com/premium_photo-1672847671576-21241c8e28f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGluZHVzdHJpYWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      title: "Unwavering Support  ",
      description: "We offer a standard 1-year warranty, backed by 10 years of reliable spare parts support, ensuring long-term peace of mind.  ",
      imgSrc: "https://plus.unsplash.com/premium_photo-1672847671576-21241c8e28f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGluZHVzdHJpYWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      title: "Global Reach  ",
      description: "Our products are readily available across India and exported globally, making us a trusted choice worldwide.  ",
      imgSrc: "https://plus.unsplash.com/premium_photo-1672847671576-21241c8e28f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGluZHVzdHJpYWx8ZW58MHx8MHx8fDA%3D",
    },
    // Add more items as needed
  ];

  return (
    <>


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


            <div className="flex  items-center h-full bg-black bg-opacity-40">

              <div className=" text-white  text-center md:text-left  lg:px-16 ">

                <p className="  text-3xl md:text-6xl    font-sans w-full  md:w-[90%]  mb-2 font-thin">
                  {slide.title}  
                </p>

                <p className=' text-[14px]  md:w-[70%]  '>
                {slide.description}
                </p>

                <button
                  className=" cursor-pointer relative  text-5xl z-10  top-28 mt-4   text-white rounded-lg shadow-lg transition-colors duration-300" >

                  {slide.buttonText}


                  <div className=" font-sans text-sm flex justify-center items-center ">
                  Products <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    Overview

                  </div>

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

      <div className=" justify-center items-center flex flex-col " >
        <p className=' px-10 pt-9 text-2xl  md:text-4xl w-full  md:w-[70%] text-center font-sans font-thin'  > A Global Commitment, Rooted in India

        </p>
        <p className=' px-1 pt-3  text-[15px] w-full  md:w-[70%] text-center font-sans font-thin' >Adhunik Powertech is committed to taking Indian manufacturing to the global stage. Our products are designed and engineered in India, and exported to diverse markets across the globe, from Asia's bustling cities to the Middle East’s skyscrapers. We believe in delivering products that are not only efficient and reliable but also environmentally friendly. Our focus on sustainability drives us to develop innovative solutions that reduce energy consumption and minimize our carbon footprint. </p>


      </div>



      <div className="row  flex flex-col-reverse lg:flex-col-reverse  pb-8 ">



        <div className=' flex w-full justify-center items-center'>


          <div className="col w-full md:w-[80%]   justify-center flex flex-col px-2 md:px-10 ">

            <br />

            <p className=' px-2 md:px-11 text-center   text-[15px] text-gray-500' >

              Adhunik Powertech is more than just a company; it's a movement. We are dedicated to empowering India's manufacturing sector and contributing to the nation's economic growth. By choosing Adhunik Powertech, you are not just selecting a product; you are supporting Indian manufacturing and investing in a sustainable future.


            </p>

            <p className=' text-center text-2xl md:ps-10 pt-3'>
              Choose From Our Wide Range Of Products

            </p>


            <br />



            <br />

          </div>
        </div>


        <div className="col w-full px-4">
          <div className=' justify-center items-center flex'>
          <div id="chartdiv" ></div>
          </div>


        </div>


      </div>

      <div className="row pb-12">






        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-7 justify-center w-full">
          {articles.map((article) => (
            <div
              key={article.id}
              className="border-2 border-sky-200 bg-white rounded-lg justify-center flex-col w-full px-5 mb-5 pt-3"
            >


              <div className="   2xl:h-auto  flex items-center justify-center overflow-hidden bg-gray-100 rounded-t-lg">
                <a href={article.link} >
                  <img
                    className=" object-contain h-full w-full  "
                    src={article.imgSrc}
                    alt={article.title}
                    style={{
                      height: article.imgHeight,
                      width: article.imgWidth,
                    }}

                  />

                </a>
              </div>

              {/* Content */}
              <div className="pt-5">
                <a href={article.link}>
                  <h5 className="border-l-4 ps-4 text-[#00A0E1] border-[#00A0E1] mb-2 text-2xl font-bold">
                    {article.title}
                  </h5>
                </a>
                <p className="mb-3 ps-4 font-normal font-sans text-gray-700">
                  {article.description}
                </p>
                <a
                  href={article.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-[#00A0E1] h-14 w-20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>




        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6 px-7  justify-center w-full  ">

          {articles2.map((article) => (
            <div
              key={article.id}
              className=" bg-white border-2 border-sky-200  rounded-lg justify-center flex-col w-full px-2 pt-2"
            >
              <div className="h-64  2xl:h-auto  flex items-center justify-center overflow-hidden bg-gray-100 rounded-t-lg ">

                <a href={article.link} className=' '>

                  <img
                    className=" object-contain h-full w-full  "
                    src={article.imgSrc}
                    alt={article.title}
                    style={{
                      height: article.imgHeight,
                      width: article.imgWidth,
                    }}

                  />
                </a>
              </div>




              <div className=" pt-5 ">
                <a href={article.link}>
                  <h5 className=" border-l-4 ps-4 text-[#00A0E1] border-[#00A0E1]  mb-2 text-[19px] font-bold ">
                    {article.title}
                  </h5>
                </a>


                <p className="mb-3 ps-4 font-normal font-sans text-gray-700  ">
                  {article.description}
                </p>


                <a href={article.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-black "
                >

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#00A0E1]  h-14 w-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>


                </a>


              </div>
            </div>
          ))}

        </div>




      </div>

      <div className="row">






        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center pb-16">


            <div>
              <p className="  text-center md:text-left mt-3 text-lg text-gray-800 dark:text-neutral-400">About Our Company
              </p>
              <h1 className="block text-2xl md:text-3xl font-bold text-center md:text-left  text-gray-600 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">What Makes Us <br /> the Right Choice</h1>
              {/* <p className="mt-3 text-sm md:text-md text-gray-800 dark:text-neutral-400 text-center md:text-left">What Makes Us the Right Choice
Choosing the right cooling solution can significantly impact your comfort, energy bills, and environmental impact. That's why we stand out as the preferred choice for cooling needs. Here's why:
</p> */}

              <ul className="space-y-2 sm:space-y-4 pt-3">
             


                <div>
      {data.map((item) => (
        <a
          key={item.id}
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 m-2 dark:bg-gray-800 hover:text-cyan-500 text-gray-400  dark:hover:bg-gray-700 ps-2 "
        >
          {/* <img
            className="rounded-full h-14 w-14 "
            src={item.imgSrc}
            alt=""
          /> */}
          <div className="flex flex-col justify-between py-2 px-4 leading-normal">
            <h5 className="mb-2 text-[15px] font-bold tracking-tight    dark:text-white">
              {item.title}
            </h5>
            <p className="mb-3 font-normal  text-[12px]     dark:text-gray-400">
              {item.description}
            </p>
          </div>
        </a>
      ))}
    </div>

              </ul>



          


              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  Know more About Us
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </a>
                <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                  Contact sales team
                </a>
              </div>



            </div>


            <div className="relative ms-4 items-center flex justify-center">

              <div className="flex justify-center  absolute " >
                <span className="relative flex h-16 w-16">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"
                  ></span>

                  <span  
                    className="relative flex justify-center items-center  h-16 w-16 rounded-full bg-white"
                  >
                    <FaPlay />
                  </span>

                </span>
                <button className=' z-50  text-transparent absolute p-5' onClick={() => setShowModal(true)}>.bdfbbdb</button>
              </div>




              <img className="  rounded-md" src="/po.png" alt="Hero Image"  />
              <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>



            </div>

        
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={closeModal} // Close modal when clicking outside
          >
            <div
              className="relative  my-6    container-fluid "
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on modal content
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
             
                {/*body*/}
                <div className="relative  flex-auto">
                  
                 
                     <iframe className="responsive-iframe" width="860" height="515" src="https://www.youtube.com/embed/lrCuiQKhzpg?si=9YXv4snGgFg7rXA4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>
                {/*footer*/}
              
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    

          </div>

        </div>

      </div>


  

    </>
  )
}



