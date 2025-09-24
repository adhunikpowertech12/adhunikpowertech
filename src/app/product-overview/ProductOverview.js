'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import {
  Factory,
  Thermometer,
  Droplet,
  Shield,
  AirVent,
  Fan,
  Warehouse,
  ArrowRight,
  CheckCircle
} from 'lucide-react';


import { 
   
  Cpu, 
    
  Filter,
   
  Globe,
  Clock,
  Zap,
  HardHat,
  LifeBuoy,
  Award
} from 'lucide-react';



export default function ProductOverview() {



  const slides = [
    {
      id: 1,
      video: 'https://res.cloudinary.com/ddkyx2jhh/video/upload/v1738750032/Product_Overview_tyr0uy_ir7wzg.mp4',
      title: <>A Legacy of Strength  A <br /> Future of Hope  </>,
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
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
  };


  const handleMouseMove = (e) => {

    if (!isDragging) return;
    const currentPos = e.clientX;
    const diff = startPos - currentPos;

    if (diff > 50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setIsDragging(false);
    }


    if (diff < -50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setIsDragging(false);
    }
  };


  const handleMouseUp = () => {
    setIsDragging(false);
  };


  const handleMouseLeave = () => {
    setIsDragging(false);
  };


  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };


  const articles = [

    {
      id: 1,
      title: ' Air Washer',
      description: 'Breathe easy with our air washers. Experience cleaner, fresher air by removing pollutants and allergens. ',
      imgSrc: '/AWP.webp',
      link: '/air-washer',
      imgHeight: "250px ",
      imgWidth: "250px ",
    },

    {
      id: 2,
      title: ' Ducted Air Coolers ',
      description: 'Stay comfortable in style. Our ducted air coolers provide quiet, efficient cooling without compromising your space.',
      imgSrc: '/DCP.webp',
      link: '/ducted-air-cooler',
      imgHeight: "250px    ",
      imgWidth: "250px ",
    },
    {
      id: 3,
      title: ' Ventlilation Exhaust Fan ',
      description: ' Create a healthier, more comfortable indoor environment. Our ventilation exhaust fans remove moisture, odors, and pollutants. ',
      imgSrc: '/efss.webp',
      link: '/ventilation-fans',
      imgHeight: "250px ",
      imgWidth: " 250px  ",
    },
  ];


  const articles2 = [
    {
      id: 1,
      title: ' PANEL AIR CONDITIONER ',
      description: 'Keep your CNC and electrical panels running smoothly. Our panel air conditioners provide precise temperature control and reliable cooling, preventing overheating and system failures.',
      imgSrc: '/panelac.webp',
      link: '/panel-air-conditioners',
      imgHeight: "350px",
      imgWidth: "350px",
    },
    {
      id: 2,
      title: ' OIL AND COOLANT CHILLER ',
      description: 'Protect your valuable machinery and maintain optimal operating temperatures with our efficient oil and coolant chillers. Prevent overheating, reduce downtime, and improve overall productivity.',
      imgSrc: '/OC.webp',
      link: '/chiller-oil-water-coolant',
      imgHeight: "350px",
      imgWidth: "350px",
    },
    {
      id: 3,
      title: 'AIR SHOWER ',
      description: ' Maintain a clean and controlled environment with our high-performance air showers. Effectively remove dust, debris, and contaminants from personnel before entering critical areas. ',
      imgSrc: '/as.webp',
      link: '/air-washer',
      imgHeight: "350px",
      imgWidth: "350px",
    },
    {
      id: 4,
      title: 'Air Handling Unit ',
      description: ' Optimize indoor air quality and comfort with our efficient air handling units. Control temperature, humidity, and airflow for a healthy and productive environment. ',
      imgSrc: '/AHU.webp',
      link: '/air-handling-unit',
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

    pointSeries.set("clusteredBullet", function (root) {
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

      container.events.on("click", function (e) {
        pointSeries.zoomToCluster(e.target.dataItem);
      });

      return am5.Bullet.new(root, {
        sprite: container
      });
    });

    pointSeries.bullets.push(function () {
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


    let cities = [

      { title: "Iraq", latitude: 33.2232, longitude: 43.6793 },
      { title: "Saudi Arabia", latitude: 23.8859, longitude: 45.0792 },
      { title: "Bangladesh", latitude: 23.6850, longitude: 90.3563 },
      { title: "UAE", latitude: 23.4241, longitude: 53.8478 },
      { title: "Orissa", latitude: 20.9517, longitude: 85.0985 },
      { title: "Kolkata", latitude: 22.5726, longitude: 88.3639 },
      { title: "West Bengal", latitude: 22.9868, longitude: 87.8550 },
      { title: "Hyderabad", latitude: 17.3850, longitude: 78.4867 },
      { title: "Andhra Pradesh", latitude: 15.9129, longitude: 79.7400 },
      { title: "Gujarat", latitude: 22.2587, longitude: 71.1924 },
      { title: "Rajasthan", latitude: 27.0238, longitude: 74.2179 },
      { title: "Jaipur", latitude: 26.9124, longitude: 75.7873 },
      { title: "Tamil Nadu", latitude: 11.1271, longitude: 78.6569 },
      { title: "Karnataka", latitude: 15.3173, longitude: 75.7139 },
      { title: "Maharashtra", latitude: 19.7515, longitude: 75.7139 },
      { title: "Pune", latitude: 18.5204, longitude: 73.8567 },
      { title: "Goa", latitude: 15.2993, longitude: 74.1240 },
      { title: "Kerala", latitude: 10.8505, longitude: 76.2711 },
      { title: "Andaman and Nicobar", latitude: 11.7401, longitude: 92.6586 },
      { title: "Uttar Pradesh", latitude: 26.8467, longitude: 80.9462 },
      { title: "Madhya Pradesh", latitude: 23.4733, longitude: 77.9470 },
      { title: "Haryana", latitude: 29.0588, longitude: 76.0856 },
      { title: "Chhattisgarh", latitude: 21.2787, longitude: 81.8661 },
      { title: "Nepal", latitude: 28.3949, longitude: 84.1240 }
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
      root.dispose();
    };
  }, []);



  const heroContent = {
    title: "Adhunik Powertech: Leading HVAC & Industrial Cooling Products in India",
    description: [
      "Welcome to Adhunik Powertech, your trusted partner for cutting-edge Heating, Ventilation, and Air Conditioning (HVAC) and industrial cooling solutions. With over 19 years of expertise, we design, engineer, and manufacture a comprehensive range of high-performance products right here in India, catering to diverse sectors from manufacturing and pharmaceuticals to commercial establishments and cleanroom facilities.",
      "Our commitment is to deliver sustainable, energy-efficient, and reliable systems that optimize your environment and protect your critical assets."
    ]
  };

  // Product categories
  const productCategories = [
    {
      icon: <Thermometer className="w-7 h-7" />,
      title: "Advanced Air Cooling & Ventilation Systems",
      description: "Adhunik Powertech's air cooling and ventilation products are designed for optimal airflow and indoor air quality. Whether you need to cool large industrial spaces or enhance air circulation, our solutions are built for efficiency and durability.",
      products: [
        {
          name: "Ducted Air Coolers",
          description: "Experience powerful, uniform cooling for large areas like factories, warehouses, and workshops. Our industrial ducted air coolers deliver high airflow and operate with exceptional energy efficiency, significantly reducing operational costs.",
          icon: <AirVent className="w-7 h-7" />,
          specs: [
            "20,000-50,000 CFM",
            "GI/SS Construction",
            "3-Phase Operation"
          ]
        },
        {
          name: "Air Washer Units",
          description: "Improve indoor air quality and achieve effective cooling simultaneously. Our air washer units are crucial for environments requiring pollutant removal and precise humidity control, available in GI and SS constructions.",
          icon: <Droplet className="w-7 h-7" />,
          specs: [
            "MERV 13 Filtration",
            "Stainless Steel Options",
            "Auto Flushing"
          ]
        },
        {
          name: "Ventilation & Exhaust Fans",
          description: "Ensure a healthy and productive environment by effectively removing heat, fumes, and stale air. Our robust industrial exhaust fans and ventilation systems are engineered for continuous, heavy-duty operation.",
          icon: <Fan className="w-7 h-7" />,
          specs: [
            "1,000-10,000 RPM",
            "Belt/Direct Drive",
            "Explosion-proof Options"
          ]
        }
      ]
    }
    // Additional categories can be added here
  ];

  // Industries served
  const industries = [
    {
      name: "Manufacturing",
      description: "Cooling solutions for factories and production facilities",
      icon: <Factory className="w-6 h-6" />
    },
    {
      name: "Pharmaceuticals",
      description: "Precision climate control for cleanrooms",
      icon: <Droplet className="w-6 h-6" />
    },
    {
      name: "Commercial",
      description: "HVAC systems for offices and retail spaces",
      icon: <Warehouse className="w-6 h-6" />
    },
    {
      name: "Cleanrooms",
      description: "Specialized ventilation for controlled environments",
      icon: <Shield className="w-6 h-6" />
    }
  ];


  const data = [

    {
      id: 1,
      title: "Unmatched Variety  ",
      description: "Our extensive product range caters to diverse needs and budgets, ensuring you find the perfect fit for your requirements.",

    },

    {
      id: 2,
      title: "Eco-Conscious Cooling ",
      description: "Our eco-friendly products bring in fresh, outside air while minimizing environmental impact.",

    },
    {
      id: 3,
      title: "Unwavering Support  ",
      description: "We offer a standard 1-year warranty, backed by 10 years of reliable spare parts support, ensuring long-term peace of mind.  ",

    },
    {
      id: 4,
      title: "Global Reach  ",
      description: "Our products are readily available across India and exported globally, making us a trusted choice worldwide.  ",

    },

  ];


    const precisionCoolingProducts = [
    {
      icon: <Cpu className="w-7 h-7" />,
      title: "Panel Air Conditioners",
      description: "Safeguard sensitive electrical and electronic components from overheating. Our panel air conditioners offer precise temperature control, compact designs, and a wide range of cooling capacities, making them ideal for CNC machines, control panels, and automation enclosures.",
      specs: [
        "±1°C temperature control",
        "5-30kW cooling capacity",
        "IP54 rated enclosures"
      ]
    },
    {
      icon: <Droplet className="w-7 h-7" />,
      title: "Oil & Coolant Chillers",
      description: "Maintain optimal operating temperatures for hydraulic systems and machine tools. Our industrial oil and coolant chillers are indispensable for industries relying on consistent fluid temperatures for efficient and precise manufacturing processes.",
      specs: [
        "10-100TR capacity",
        "PID controlled",
        "Corrosion-resistant construction"
      ]
    }
  ];

  // Cleanroom Solutions
  const cleanroomSolutions = [
    {
      icon: <Filter className="w-7 h-7" />,
      title: "Air Handling Units (AHU)",
      description: "Designed for superior air quality and thermal comfort in large commercial and industrial settings, including pharmaceutical and healthcare facilities. Our AHU systems ensure precise control over temperature, humidity, and filtration.",
      specs: [
        "HEPA/ULPA filtration",
        "±5% RH control",
        "Stainless steel construction"
      ]
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Air Showers & Pass Boxes",
      description: "Crucial for maintaining sterile environments in cleanrooms. Our air showers efficiently decontaminate personnel before entry, while pass boxes enable material transfer without compromising cleanroom integrity. Both are available in high-grade stainless steel (SS 304) and powder-coated GI materials.",
      specs: [
        "25-35m/s air velocity",
        "Interlocked doors",
        "GMP compliant"
      ]
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Made in India, Exported Globally",
      description: "We pride ourselves on manufacturing high-quality products in India that meet international standards and serve clients worldwide."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Over 19 Years of Expertise",
      description: "Benefit from nearly two decades of specialized experience in HVAC design, manufacturing, and project execution."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energy Efficiency & Sustainability",
      description: "Our products are engineered to minimize energy consumption, reduce operational costs, and promote environmental responsibility."
    },
    {
      icon: <HardHat className="w-6 h-6" />,
      title: "Robust & Reliable Construction",
      description: "We use premium materials and advanced manufacturing processes to ensure the longevity and performance of every unit."
    },
    {
      icon: <LifeBuoy className="w-6 h-6" />,
      title: "Comprehensive Service & Support",
      description: "In addition to our products, we offer complete turnkey solutions, expert consultation, and dedicated after-sales service."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality & Compliance",
      description: "Adherence to industry best practices and standards (e.g., ISHRAE, ASHRAE, ISO) ensures top-tier quality."
    }
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
              poster="/mv.webp"
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
        <h1 className=' px-10 pt-9 text-2xl  md:text-4xl w-full  md:w-[70%] text-center font-sans font-thin'  > A Global Commitment, Rooted in India

        </h1>

        <p className=' px-1 pt-3  text-[15px] w-full  md:w-[70%] text-center font-sans font-thin' >Adhunik Powertech is committed to taking Indian manufacturing to the global stage. Our products are designed and engineered in India, and exported to diverse markets across the globe, from Asia's bustling cities to the Middle East’s skyscrapers. We believe in delivering products that are not only efficient and reliable but also environmentally friendly. Our focus on sustainability drives us to develop innovative solutions that reduce energy consumption and minimize our carbon footprint. </p>


      </div>

      <section className='  md:px-14'>


        <div className="row  flex flex-col-reverse lg:flex-col-reverse  pb-8 ">



          <div className=' flex w-full justify-center items-center'>


            <div className="col w-full md:w-[80%]   justify-center flex flex-col px-2 md:px-10 ">

              <br />

              <p className=' px-2 md:px-11 text-center   text-[15px] text-gray-500' >

                Adhunik Powertech is more than just a company; it's a movement. We are dedicated to empowering India's manufacturing sector and contributing to the nation's economic growth. By choosing Adhunik Powertech, you are not just selecting a product; you are supporting Indian manufacturing and investing in a sustainable future.


              </p>

              <h2 className=' text-center text-2xl md:ps-10 pt-3'>

                Choose From Our Wide Range Of Products

              </h2>


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
                <div className="  2xl:h-auto  flex items-center justify-center overflow-hidden bg-gray-100 rounded-t-lg">
                  <a href={article.link} >
                    <img
                      className=" object-contain h-full w-full  "
                      src={article.imgSrc}
                      alt={article.title}

                      height="20"
                      width="20"
                      loading='lazy'

                    />

                  </a>
                </div>


                <div className="pt-5">

                  <a href={article.link}>
                    <h2 className="border-l-4 ps-4 text-[#00A0E1] border-[#00A0E1] mb-2 text-2xl font-bold">
                      {article.title}
                    </h2>
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

                      height="20"
                      width="20"
                      loading='lazy'

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


                <div className="block text-2xl md:text-3xl font-bold text-center md:text-left  text-gray-600 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">What Makes Us <br /> the Right Choice</div>


                <ul className="space-y-2 sm:space-y-4 pt-3">



                  <div>
                    {data.map((item) => (
                      <div
                        key={item.id}

                        className=" cursor-pointer flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 m-2 dark:bg-gray-800 hover:text-cyan-500 text-gray-400  dark:hover:bg-gray-700 ps-2 "
                      >

                        <div className="flex flex-col justify-between py-2 px-4 leading-normal">
                          <h5 className="mb-2 text-[15px] font-bold tracking-tight    dark:text-white">
                            {item.title}
                          </h5>
                          <p className="mb-3 font-normal  text-[12px]     dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                </ul>






                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                  <a href='/our-Company' className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" >
                    Know more About Us
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </a>
                  <a
                    href="tel:8287885985"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "tel:+919870248420";
                    }}
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  >
                    Contact Us
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




                <img className="rounded-md" src="/po.webp"

                  height="700"
                  width="700"

                  loading='lazy' alt="Hero Image" />

                <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0">

                </div>



              </div>


              {showModal ? (
                <>
                  <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <div
                      className="relative  my-6    container-fluid "
                      onClick={(e) => e.stopPropagation()}
                    >

                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">



                        <div className="relative  flex-auto">


                          <iframe className="responsive-iframe" width="860" height="515" src="https://www.youtube.com/embed/lrCuiQKhzpg?si=9YXv4snGgFg7rXA4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                        </div>


                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}


            </div>

          </div>

        </div>
      </section>


      <div className="  md:px-24  md:pb-8">

        {/* ===== Hero Section ===== */}

        <section className="relative pt-16 pb-28 px-6 max-w-8xl mx-auto">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full filter blur-[120px]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="text-cyan-700">Adhunik Powertech</span> : Leading HVAC & Industrial Cooling Products in India
              </h1>

              <div className="prose prose-lg text-gray-600 mb-10">
                {heroContent.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
        
                <a     href="/Adhunik-Powertech-Product-Catalogue-2024.pdf"
                      download="Adhunik-Powertech-Product-Catalogue-2024" className="bg-white text-cyan-800 px-8 py-4 rounded-xl font-bold flex items-center gap-3 border border-gray-300 hover:border-cyan-400 shadow-sm hover:shadow-md transition-all">
                  Download Catalogue
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[400px] bg-[url('https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750850557/sd_phu8br.webp')] bg-cover bg-center rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-cyan-700/10"></div>
            </div>
          </div>
        </section>

        {/* ===== Product Categories ===== */}

        <section className=" px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Product Categories
            </h2>
            <p className="text-sm text-justify text-gray-600 max-w-3xl mx-auto">
              Discover the Adhunik Powertech advantage through our specialized product lines, each engineered for superior performance and longevity.
            </p>
          </div>

          {/* Mapped Product Categories */}

          {productCategories.map((category, index) => (
            <div key={index} className="mb-5">
             

               <section className="relative  pb-16 px-6 max-w-7xl mx-auto">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[100px]"></div>
        </div>
        
        <div className="text-center  ">
          <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-cyan-700"> {category.title}</span>  
          </div>
          <p className="text-sm text-justify  text-gray-600 max-w-4xl mx-auto">
         {category.description} </p>
        </div>
      </section>


              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, pIndex) => (
                  <div
                    key={pIndex}
                    className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-200"
                  >
                    <div className="p-8">
                      <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-700 mb-6">
                        {product.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        {product.name}
                      </h4>
                      <p className="text-gray-600 mb-6">
                        {product.description}
                      </p>

                      <div className="space-y-3">
                        {product.specs.map((spec, sIndex) => (
                          <div key={sIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="px-8 pb-8">
                      <button className="text-cyan-700 font-medium flex items-center gap-2 group-hover:text-cyan-800 transition-colors">
                        Technical Specifications <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ===== Industry Applications ===== */}

        <section className="py-24 bg-cyan-900/5 rounded-2xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted Across Diverse Sectors
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our systems deliver reliable performance in the most demanding environments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 border border-gray-200 hover:border-cyan-300 transition-all hover:shadow-lg"
                >
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-700 mb-6">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>



 <div className=" ">
      {/* ===== Hero Section ===== */}
      <section className="relative  pt-16 px-6 max-w-7xl mx-auto">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[100px]"></div>
        </div>
        
        <div className="text-center  ">
          <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-cyan-700">Precision Cooling</span> & Process Control Equipment
          </div>
          <p className="text-md text-gray-600 max-w-4xl mx-auto">
            Protect your valuable machinery and maintain critical temperatures with Adhunik Powertech's precision cooling solutions. These systems are vital for optimizing performance, extending equipment lifespan, and preventing costly downtime.
          </p>
        </div>
      </section>

      {/* ===== Precision Cooling Products ===== */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {precisionCoolingProducts.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="bg-cyan-100 p-4 rounded-xl text-cyan-700">
                  {product.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-gray-600 text-sm text-justify mb-6">{product.description}</p>
                  <div className="space-y-3">
                    {product.specs.map((spec, sIndex) => (
                      <div key={sIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Cleanroom Solutions ===== */}
      <section className="  py-14 bg-cyan-900/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl   font-bold text-gray-900 mb-4">
              Integrated Air Handling & <span className="text-cyan-700">Cleanroom Solutions</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {cleanroomSolutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-cyan-100 p-4 rounded-xl text-cyan-700">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-gray-600 text-sm text-justify mb-6">{solution.description}</p>
                    <div className="space-y-3">
                      {solution.specs.map((spec, sIndex) => (
                        <div key={sIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl  font-bold text-gray-900 mb-4">
            Why Choose <span className="text-cyan-700">Adhunik Powertech?</span>
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Your Trusted HVAC Partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((reason, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:border-cyan-300 transition-all hover:shadow-md"
            >
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-700 mb-6">
                {reason.icon}
              </div>
              <h3 className="text-md font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className=" text-sm text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className=" py-28 px-6 bg-gradient-to-r md:rounded-2xl from-cyan-800 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl   font-bold mb-8">
            Ready to Protect Your Critical Equipment?
          </h2>
          <p className="text-md text-cyan-100 mb-12 max-w-2xl mx-auto">
            Our technical experts will help you select the perfect precision cooling solution for your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href='tel:8287885985' className="bg-white text-cyan-900 px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-xl hover:bg-gray-100 transition-all">
              Get Expert Advice <ArrowRight className="w-5 h-5" />
            </a>
            <a     href="/Adhunik-Powertech-Product-Catalogue-2024.pdf"
                      download="Adhunik-Powertech-Product-Catalogue-2024" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-white/10 transition-all">
              Download Product Catalog
            </a>
          </div>
        </div>
      </section>

    </div>


       
      </div>


    </>
  )
}
