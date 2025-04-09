'use client';

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';


export default function OurCompany() {


  const [activePage, setActivePage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMyslideInView, setIsMyslideInView] = useState(false);
  const [isPageScrollingAllowed, setIsPageScrollingAllowed] = useState(true);

  const handleWheel = (e) => {
    if (!isMyslideInView || isScrolling) return;

    // Prevent scrolling past the last slide
    if (e.deltaY > 0 && activePage < pages.length - 1) {
      // Scroll down to the next slide (only if not on the last slide)
      setIsScrolling(true);
      setActivePage((prev) => Math.min(prev + 1, pages.length - 1)); // Ensure we don't go beyond last page
    } else if (e.deltaY < 0 && activePage > 0) {
      // Scroll up to the previous slide (only if not on the first slide)
      setIsScrolling(true);
      setActivePage((prev) => Math.max(prev - 1, 0)); // Ensure we don't go before first page
    } else if (e.deltaY > 0 && activePage === pages.length - 1) {
      // If already at the last slide, prevent further scrolling
      setIsScrolling(false);
      setIsPageScrollingAllowed(true);
      setIsMyslideInView(false); // Do nothing and prevent scrolling past last slide
    } else if (e.deltaY < 0 && activePage === 0) {
      // If already at the first slide, lock scrolling
      setIsPageScrollingAllowed(false);
      setIsMyslideInView(true);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsScrolling(false), 800);
    return () => clearTimeout(timeout);
  }, [activePage]);

  useEffect(() => {
    document.body.style.overflow = isPageScrollingAllowed ? "auto" : "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [isPageScrollingAllowed]);

  useEffect(() => {
    const slideElement = document.getElementById("myslide");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMyslideInView(entry.isIntersecting);
        setIsPageScrollingAllowed(!entry.isIntersecting);
      },
      { threshold: 1.0 }
    );

    if (slideElement) observer.observe(slideElement);

    return () => {
      if (slideElement) observer.unobserve(slideElement);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activePage, isMyslideInView, isScrolling]);

  const pages = [

    {
      id: 0,
      year: 'Overview',

      bgImage: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841336/dv_oyivkm.webp',
      content: (

        <div className="z-10 text-center">

          <div className="row">
            <div className="col py-12 relative md:static  right-10 md:right-0  justify-center items-center flex flex-col">
              <p className="text-[12xl] w-[60%]  text-justify font-sans font-thin pt-7 italic md:text-3xl  pb-3" >About Us</p>
              <p className="text-[12xl] w-[60%]  font-semibold  text-justify font-sans  md:text-5xl " >We are Adhunik Powertech: Experts Who Make a Difference</p>
              <p className=" text-[12px] md:text-[12xl] w-[60%] text-justify font-sans font-thin pt-7">
                Our journey began in 2005 with a simple vision: to create an indoor environment that nurtures and enhances the well-being of every individual. We started as a small team of passionate engineers, offering innovative HVAC solutions to our local community.
                Over the years, we have grown and evolved, expanding our product range and geographic reach. Today, we are proud to be a leading provider of comprehensive HVAC solutions, serving a diverse clientele across various industries.

              </p>


              <p className=" relative  top-16 font-sans font-thin">Scroll down to learn more about us.</p>

              <div className="row">
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>
            </div>
          </div>


        </div>
      ),
    },



    {

      id: 1,
      year: '2005',

      bgImage: '/blog/2005.webp',
      content: (

        <div className="z-10 text-center">

          <div className="row">
            <div className="col relative md:static  right-5 md:right-0 py-12 justify-center items-center flex flex-col">
              <p className="text-[12xl] w-[70%] text-justify font-sans font-thin pt-7 italic md:text-3xl   " > Our Journey  </p>
              <p className="text-[12xl] w-[70%] text-justify font-sans font-semibold   md:text-3xl  pb-3" >2005  </p>
              <p className="text-[12xl] w-[60%] relative md:static   right-5 md:right-0  md:w-[70%]  font-thin text-left   font-sans  md:text-5xl " ><span className=" font-semibold font-sans">Foundation:</span> Established as Adhunik Cooling Systems Pvt. Ltd.  </p>
              <div className="text-[12xl] w-[70%] text-justify font-sans font-thin pt-7">
                <blockquote className="border-l-4 border-[#00A0E1]  my-4 pl-3 md:pl-7 md:text-2xl font-sans font-thin ">With a vision to provide innovative and sustainable HVAC solutions.</blockquote>
              </div>




              <div className="row">
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>
            </div>
          </div>

        </div>
      ),
    },

    {
      id: 2,
      year: '2010',


      bgImage: '/blog/2010.webp',
      content: (

        <div className="z-10 text-center">

          <div className="row">
            <div className="col py-12 justify-center items-center flex flex-col">
              <p className="text-[12xl] w-[90%] text-justify font-sans font-semibold   text-3xl  pb-3" >2010  </p>
              <p className="text-[12xl] w-[90%]  font-thin text-left   font-sans  text-5xl " ><span className=" font-semibold font-sans">Expansion:</span> Launched Air Washer               Manufacturing  </p>
              <div className="text-[12xl] w-[90%] text-justify font-sans font-thin pt-7">
                <blockquote className="border-l-4 border-[#00A0E1]  my-4 pl-8 md:pl-7 text-2xl font-sans font-thin ">Expanded our product range to include Air Washers for improved air quality.</blockquote>
              </div>




              <div className="row">
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>
            </div>
          </div>

        </div>
      ),
    },

    {
      id: 3,
      year: '2014',

      bgImage: '/blog/2014.webp',
      content: (

        <div className="z-10 text-center">

          <div className="row">
            <div className="col py-12 justify-center items-center flex flex-col">
              <p className="text-[12xl] w-[70%] text-justify font-sans font-semibold   text-3xl  pb-3" >2014  </p>
              <p className="text-[12xl] w-[70%]  font-thin text-left   font-sans  text-5xl " ><span className=" font-semibold font-sans">Product Launch:</span> Introduced Panel Air
                Conditioner Manufacturing  </p>
              <div className="text-[12xl] w-[70%] text-justify font-sans font-thin pt-7">
                <blockquote className="border-l-4 border-[#00A0E1]  my-4 pl-8 md:pl-7 text-2xl font-sans font-thin "> Launched Panel Air Conditioner Manufacturing, marking a significant
                  milestone in our growth. </blockquote>
              </div>




              <div className="row">
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>
            </div>
          </div>

        </div>
      ),
    },

    {
      id: 4,

      year: '2016',

      bgImage: '/blog/2016.webp',

      content: (

        <div className="z-10 text-center">

          <div className="row">
            <div className="col py-12 justify-center items-center flex flex-col">
              <p className="text-[12xl] w-[63%] text-justify font-sans font-semibold   text-3xl  pb-3" >2016  </p>
              <p className="text-[12xl] w-[63%]  font-thin text-left   font-sans  text-5xl " ><span className=" font-semibold font-sans"> Manufacturing Milestone:</span> Established a dedicated manufacturing plant </p>
              <div className="text-[12xl] w-[63%] text-justify font-sans font-thin pt-7">
                <blockquote className="border-l-4 border-[#00A0E1]  my-4 pl-8 md:pl-7 text-2xl font-sans font-thin "> Established a dedicated manufacturing plant to enhance production capabilities. </blockquote>
              </div>




              <div className="row">
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>

            </div>
          </div>

        </div>
      ),
    },



    {
      id: 5,
      year: '2017',

      bgImage: '/blog/2017.webp',
      content: (

        <div className="z-10 text-center">

          <div className="row">
            <div className="col py-12 justify-center items-center flex flex-col">
              <p className="text-[12xl] w-[82%] text-justify font-sans font-semibold   text-3xl  pb-3" >2017  </p>
              <p className="text-[12xl] w-[82%]  font-thin text-left   font-sans  text-5xl " ><span className=" font-semibold font-sans"> Diversification:</span> Expanded into Oil Chiller Manufacturing </p>
              <div className="text-[12xl] w-[82%] text-justify font-sans font-thin pt-7">
                <blockquote className="border-l-4 border-[#00A0E1]  my-4 pl-8 md:pl-7 text-2xl font-sans font-thin "> Diversified into Oil Chiller Manufacturing to meet growing market demands. </blockquote>
              </div>




              <div className="row">
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>
            </div>
          </div>

        </div>
      ),

    },

    {
      id: 6,
      year: '2020',

      bgImage: '/blog/2020.webp',

      content: (

        <div className="z-10 text-center">

          <div className="row">
            <div className="col py-12 justify-center items-center flex flex-col">
              <p className="text-[12xl] w-[80%] text-justify font-sans font-semibold   text-3xl  pb-3" >2020            </p>
              <p className="text-[12xl] w-[80%]  font-thin text-left   font-sans  text-5xl " ><span className=" font-semibold font-sans"> Market Expansion:</span>  Started Ventilation Fan Manufacturing </p>
              <div className="text-[12xl] w-[80%] text-justify font-sans font-thin pt-7">
                <blockquote className="border-l-4 border-[#00A0E1]  my-4 pl-8 md:pl-7 text-2xl font-sans font-thin "> Expanded our product portfolio with Ventilation Fan Manufacturing. </blockquote>
              </div>




              <div className="row">
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>
            </div>
          </div>

        </div>
      ),

    },

    {
      id: 7,
      year: '2021',

      bgImage: '/blog/2014.webp',
      content: (

        <div className="z-10 text-center">

          <div className="row">
            <div className="col py-12 justify-center items-center flex flex-col">
              <p className="text-[12xl] w-[70%] text-justify font-sans font-semibold   text-3xl  pb-3" >2021</p>
              <p className="text-[12xl] w-[70%]  font-thin text-left   font-sans  text-5xl " ><span className=" font-semibold font-sans"> Product Launch:</span>  Introduced Air Shower & Pass Box Manufacturing </p>
              <div className="text-[12xl] w-[70%] text-justify font-sans font-thin pt-7">
                <blockquote className="border-l-4 border-[#00A0E1]  my-4 pl-8 md:pl-7 text-2xl font-sans font-thin "> Launched Air Shower & Pass Box Manufacturing to meet cleanroom demands. </blockquote>
              </div>

              <div className="row">
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>
            </div>
          </div>

        </div>
      ),
    },

    {
      id: 8,
      year: '2024',

      bgImage: '/blog/2024.webp',
      content: (

        <div className="z-10 text-center">

          <div className="row">
            <div className="col py-12 justify-center items-center flex flex-col">
              <p className="text-[12xl] w-[77%] text-justify font-sans font-semibold   text-3xl  pb-3" >2024</p>
              <p className="text-[12xl] w-[77%]  font-thin text-left   font-sans  text-4xl " ><span className=" font-semibold font-sans"> Service Expansion:</span>   Added Fire & Safety Services</p>
              <p className="text-[12xl] w-[77%]  font-thin text-left   font-sans  text-4xl " ><span className=" font-semibold font-sans"> Rebranding:</span>
                The company name changed to Adhunik Powertech Private Limited </p>
              <div className="text-[12xl] w-[77%] text-justify font-sans font-thin pt-7">
                <blockquote className="border-l-4 border-[#00A0E1]  my-4 pl-8 md:pl-7 text-2xl font-sans font-thin "> Added Fire & Safety Services and rebranded as Adhunik Powertech Private Limited  </blockquote>
              </div>

              <div className="row">
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>
            </div>
          </div>

        </div>
      ),
    },


    {
      id: 9,
      year: 'Present',

      bgImage: '/blog/grow.webp',
      content: (

        <div className="z-10  container-fluid  h-screen w-screen justify-center items-center flex    ">

          <div className="row text-center  ">

            <p className=' relative top-8 font-sans  text-4xl'> Growing Stronger, <br />
              <span> Innovating Always…</span></p>
          </div>
        </div>
      ),
    },

  ];


  return (
    <>

      <div className="container-fluid">


        <div className="row">


          <div id="myslide" className="   hidden lg:block  h-screen w-full overflow-hidden relative">

            <h1 className=" text-transparent absolute">About Us</h1>
            <div
              className="h-full w-full transition-transform ease-in-out duration-500"
              style={{ transform: `translateY(-${activePage * 100}vh)` }}
            >

              {pages.map((page) => (
                <div
                  key={page.id}
                  className="h-screen flex flex-col items-center justify-center text-white relative"
                  style={{
                    backgroundImage: `url(${page.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
             
                  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                   
                  <div className="z-10 text-center">
                    <p className="text-4xl font-bold">{page.title}</p>
                    <p className="text-lg mt-4">{page.description}</p>
                    {page.content}
                  </div>
                </div>
              ))}
            </div>

           
            <div className="absolute top-[60%]  left-[70%] md:left-auto  md:right-4 transform -translate-y-1/2 flex flex-col items-center">
              {pages.map((page) => (
                <div
                  key={page.id}
                  className={`flex items-center w-40 justify-start mb-4 cursor-pointer transition-all duration-300 ${page.id === activePage
                    ? "opacity-100 scale-105 "
                    : "opacity-50"
                    }`}
                  onClick={() => !isScrolling && setActivePage(page.id)}
                >
                  
                  <div
                    className={`h-8 w-2 rounded-full mr-2 ${page.id === activePage
                      ? "border-2 border-cyan-500"
                      : "bg-gray-400"
                      }`}
                  ></div>
                  
                  <div
                    className={`h-[2px] w-5 rounded-full relative right-2 mr-2 ${page.id === activePage
                      ? "border-2 border-cyan-500"
                      : "bg-gray-400 "
                      }`}
                  ></div>
                 
                  <span className={` font-sans font-normal  text-[14px]
                  ${page.id === activePage
                      ? "opacity-100 scale-105 bg-white text-black rounded-full text-[12px] p-1"
                      : "opacity-50 text-white"
                    }
                    `}>
                    {page.year}
                  </span>
                </div>
              ))}
            </div>
          </div>


        </div>

        <div className="  block lg:hidden row h-screen flex flex-col mt-10  w-full overflow-hidden justify-center items-center">
          <p>

            &gt;&gt; SWIPE RIGHT TO SEE MORE


          </p>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >


            <SwiperSlide>


              <div className="text-center bg-[#00000051]">

                <div className="row">
                  <div className="col py-5 px-5  relative md:static    justify-center items-center flex flex-col">
                    <p className="text-4xl   text-justify font-sans font-thin pt-7 italic md:text-3xl  pb-3" >
                      About Us
                    </p>

                    <h2 className="text-2xl   font-semibold  lg:text-justify font-sans  lg:text-5xl " >We are Adhunik Powertech: Experts Who Make a Difference
                    </h2>

                    <p className=" text-[14px] md:text-[12xl]  lg:text-justify font-sans font-thin pt-7">
                      Our journey began in 2005 with a simple vision: to create an indoor environment that nurtures and enhances the well-being of every individual. We started as a small team of passionate engineers, offering innovative HVAC solutions to our local community.
                      Over the years, we have grown and evolved, expanding our product range and geographic reach. Today, we are proud to be a leading provider of comprehensive HVAC solutions, serving a diverse clientele across various industries.
                    </p>

                  </div>
                </div>


              </div>

            </SwiperSlide>




            <SwiperSlide>

              <div className="text-center bg-[#00000051]">

                <div className="row h-[30rem]">
                  <div className="col py-5 px-5  relative md:static    justify-center items-center flex flex-col">
                    <p className="text-3xl   text-justify font-sans font-semibold   lg:text-3xl py-5  " >2005  </p>
                    <h2 className="text-3xl   text-justify font-sans font-thin  italic lg:text-3xl  px-4 py-3 " >Our Journey </h2>
                    <p className="text-2xl   font-semibold  lg:text-justify font-sans  lg:text-5xl " ><span className=" font-semibold font-sans">Foundation:</span> Established as Adhunik Cooling Systems Pvt. Ltd.</p>

                    <div className="text-[16px]  text-justify font-sans font-thin pt-7">
                      <blockquote className=" border-l-4 border-[#00A0E1]  my-4 pl-3 lg:pl-7 md:text-2xl font-sans font-thin ">With a vision to provide innovative and sustainable HVAC solutions.</blockquote>
                    </div>



                  </div>
                </div>


              </div>




            </SwiperSlide>

            <SwiperSlide>



              <div className="text-center bg-[#00000051]">

                <div className="row h-[30rem]">
                  <div className="col py-5 px-5  relative md:static    justify-center items-center flex flex-col">
                    <p className="text-3xl   text-justify font-sans font-semibold   lg:text-3xl py-5  " >2010  </p>
                    <h2 className="text-3xl   text-justify font-sans font-thin  italic lg:text-3xl  px-4 py-3 " >Our Journey </h2>
                    <p className="text-2xl   font-semibold  lg:text-justify font-sans  lg:text-5xl " ><span className=" font-semibold font-sans">Expansion:</span> Launched Air Washer Manufacturing</p>

                    <div className="text-[16px]  text-justify font-sans font-thin pt-7">
                      <blockquote className=" border-l-4 border-[#00A0E1]  my-4 pl-3 lg:pl-7 lg:text-2xl font-sans font-thin ">Expanded our product range to include Air Washers for improved air quality.</blockquote>
                    </div>



                  </div>
                </div>


              </div>




            </SwiperSlide>

            <SwiperSlide>

              <div className="text-center bg-[#00000051]" >

                <div className="row h-[30rem]">
                  <div className="col py-5 px-5  relative md:static    justify-center items-center flex flex-col">
                    <p className="text-3xl   text-justify font-sans font-semibold   lg:text-3xl py-5  " >2014  </p>
                    <p className="text-3xl   text-justify font-sans font-thin  italic lg:text-3xl  px-4 py-3 " >Our Journey </p>
                    <p className=" text-[22px]   font-semibold  lg:text-justify font-sans  lg:text-5xl  " >
                      <span className=" font-semibold font-sans">
                        Product Launch:</span> Introduced Panel Air
                      Conditioner Manufacturing
                    </p>

                    <div className="text-[13px]  text-justify font-sans font-thin pt-7">
                      <blockquote className="border-l-4 border-[#00A0E1]  my-4 pl-8 lg:pl-7  font-sans font-thin "> Launched Panel Air Conditioner Manufacturing, marking a significant
                        milestone in our growth. </blockquote>
                    </div>



                  </div>
                </div>


              </div>




            </SwiperSlide>



            <SwiperSlide>




              <div className="text-center bg-[#00000051]">

                <div className="row h-[30rem]">
                  <div className="col py-5 px-5  relative md:static    justify-center items-center flex flex-col">
                    <p className="text-3xl   text-justify font-sans font-semibold   lg:text-3xl py-5  " >2016  </p>
                    <p className="text-3xl   text-justify font-sans font-thin  italic lg:text-3xl  px-4 py-3 " >Our Journey </p>
                    <p className=" text-[22px]   font-semibold  lg:text-justify font-sans  lg:text-5xl  " >
                      <span className=" font-semibold font-sans"> Manufacturing Milestone:</span> Established a dedicated manufacturing plant
                    </p>

                    <div className="text-[13px]  text-justify font-sans font-thin pt-7">
                      <blockquote className="border-l-4 border-[#00A0E1]  my-4 pl-8 lg:pl-7  font-sans font-thin "> Established a dedicated manufacturing plant to enhance production capabilities. </blockquote>
                    </div>



                  </div>
                </div>


              </div>




            </SwiperSlide>



            <SwiperSlide>

              <div className="text-center bg-[#00000051]">

                <div className="row h-[30rem]">
                  <div className="col py-5 px-5  relative md:static    justify-center items-center flex flex-col">
                    <p className="text-3xl   text-justify font-sans font-semibold   lg:text-3xl py-5  " >2017  </p>
                    <p className="text-3xl   text-justify font-sans font-thin  italic lg:text-3xl  px-4 py-3 " >Our Journey </p>
                    <p className=" text-[22px]   font-semibold  lg:text-justify font-sans  lg:text-5xl  " >
                      <span className=" font-semibold font-sans"> Diversification:</span> Expanded into Oil Chiller Manufacturing </p>

                    <div className="text-[13px]  text-justify font-sans font-thin pt-7">
                      <blockquote className="border-l-4 border-[#00A0E1]  my-4 pl-8 lg:pl-7  font-sans font-thin "> Diversified into Oil Chiller Manufacturing to meet growing market demands. </blockquote>
                    </div>
                  </div>
                </div>


              </div>




            </SwiperSlide>



            <SwiperSlide>

              <div className="text-center bg-[#00000051]">
                <div className="row h-[30rem]">
                  <div className="col py-5 px-5  relative md:static    justify-center items-center flex flex-col">
                    <p className="text-3xl   text-justify font-sans font-semibold   lg:text-3xl py-5  " >2020  </p>
                    <p className="text-3xl   text-justify font-sans font-thin  italic lg:text-3xl  px-4 py-3 " >Our Journey </p>
                    <p className=" text-[22px]   font-semibold  lg:text-justify font-sans  lg:text-5xl  " >
                      <span className=" font-semibold font-sans"> Market Expansion:</span>  Started Ventilation Fan Manufacturing </p>

                    <div className="text-[13px]  text-justify font-sans font-thin pt-7">
                      <blockquote className="border-l-4 border-[#00A0E1]  my-4 pl-8 lg:pl-7  font-sans font-thin "> Expanded our product portfolio with Ventilation Fan Manufacturing. </blockquote>
                    </div>



                  </div>
                </div>


              </div>


            </SwiperSlide>



            <SwiperSlide>

              <div className="text-center bg-[#00000051]">

                <div className="row h-[30rem]">
                  <div className="col py-5 px-5  relative md:static    justify-center items-center flex flex-col">
                    <p className="text-3xl   text-justify font-sans font-semibold   lg:text-3xl py-5  " >2024  </p>
                    <p className="text-3xl   text-justify font-sans font-thin  italic lg:text-3xl  px-4 py-3 " >Our Journey </p>
                    <p className=" text-[22px]   font-semibold  lg:text-justify font-sans  lg:text-5xl  " >
                      <span className=" font-semibold font-sans"> Service Expansion:</span>   Added Fire & Safety Services </p>

                    <p className=" text-[22px]   font-semibold  lg:text-justify font-sans  lg:text-5xl  " >

                      <span className=" font-semibold font-sans"> Rebranding:</span>
                      The company name changed to Adhunik Powertech Private Limited </p>

                    <div className="text-[13px]  text-justify font-sans font-thin pt-7">
                      <blockquote className="border-l-4 border-[#00A0E1]  my-4 pl-8 lg:pl-7  font-sans font-thin "> Added Fire & Safety Services and rebranded as Adhunik Powertech Private Limited </blockquote>
                    </div>

                  </div>
                </div>

              </div>

            </SwiperSlide>

            <SwiperSlide>

              <div className="text-center bg-[#00000051]">

                <div className="row ">



                  <div className="row h-[30rem] flex flex-col justify-center items-center">

                    <p>
                      Growing Stronger,

                    </p>
                    <span> Innovating Always… </span>

                  </div>

                </div>

              </div>

            </SwiperSlide>

          </Swiper>
        </div>


      </div>
    </>
  )
}
