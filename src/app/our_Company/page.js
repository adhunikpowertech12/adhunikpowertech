'use client';

import { useEffect, useState } from "react";

export default function AirWasher() {
  const [activePage, setActivePage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOnLastSlide, setIsOnLastSlide] = useState(false);
  const [isOnFirstSlide, setIsOnFirstSlide] = useState(true);
  const [isMyslideInView, setIsMyslideInView] = useState(false); // Track if myslide is in view
  const pages = [
 
    {
      id: 0,
      
     
      year:'About Us',
      
      bgImage: '/slideabout.webp',
      content: (

        <div className="z-10 text-center">

          <div className="row">
            <div className="col py-12 justify-center items-center flex flex-col">
            <p className="text-[12xl] w-[60%] text-justify font-sans font-thin pt-7 italic text-3xl ps-5 pb-3" >About Us</p>
           <p  className="text-[12xl] w-[60%]  font-semibold  text-justify font-sans  text-5xl " >We are Adhunik Powertech: Experts Who Make a Difference</p>
              <p className="text-[12xl] w-[60%] text-justify font-sans font-thin pt-7">
              Our journey began in 2005 with a simple vision: to create an indoor environment that nurtures and enhances the well-being of every individual. We started as a small team of passionate engineers, offering innovative HVAC solutions to our local community.
              Over the years, we have grown and evolved, expanding our product range and geographic reach. Today, we are proud to be a leading provider of comprehensive HVAC solutions, serving a diverse clientele across various industries.

              </p>
            

              <p className=" relative  top-16 font-sans font-thin">Scroll down to learn more about us.</p>

              <div className="row">
              <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
              </div>
            </div>
          </div>
  
        
        </div>
      ),
    },
    {
      id: 1,
      year:'2005',
    
      bgImage: 'https://images.unsplash.com/photo-1733913128715-ddfac4bcf9fd?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: (

        <div className="z-10 text-center">
        
          <div className="row">
            <div className="col py-12 justify-center items-center flex flex-col">
            <p className="text-[12xl] w-[55%] text-justify font-sans font-thin pt-7 italic text-3xl  " > Our Journey  </p>
            <p className="text-[12xl] w-[55%] text-justify font-sans font-semibold   text-3xl  pb-3" >2005  </p>
           <p  className="text-[12xl] w-[55%]  font-thin text-left   font-sans  text-5xl " ><span className=" font-semibold font-sans">Foundation:</span> Established as Adhunik Cooling Systems Pvt. Ltd.  </p>
              <div className="text-[12xl] w-[55%] text-justify font-sans font-thin pt-7">
              <blockquote class="border-l-4 border-[#A58149]  my-4 pl-8 md:pl-7 text-2xl font-sans font-thin ">With a vision to provide innovative and sustainable HVAC solutions.</blockquote>
              </div>
            

              <p className=" relative  top-16 font-sans font-thin">Scroll down to learn more about us.</p>

              <div className="row">
              <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
              </div>
            </div>
          </div>
  
        </div>
      ),
    },
    {
      id: 2,
      year:'2010',
     
     
      bgImage: 'https://images.unsplash.com/photo-1577702160540-01e3d86e0be2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',
      content: (

        <div className="z-10 text-center">
        
          <div className="row">
            <div className="col py-12 justify-center items-center flex flex-col">
            <p className="text-[12xl] w-[65%] text-justify font-sans font-semibold   text-3xl  pb-3" >2010  </p>
           <p  className="text-[12xl] w-[65%]  font-thin text-left   font-sans  text-5xl " ><span className=" font-semibold font-sans">Expansion:</span> Launched Air Washer               Manufacturing  </p>
              <div className="text-[12xl] w-[65%] text-justify font-sans font-thin pt-7">
              <blockquote class="border-l-4 border-[#A58149]  my-4 pl-8 md:pl-7 text-2xl font-sans font-thin ">Expanded our product range to include Air Washers for improved air quality.</blockquote>
              </div>
            

              <p className=" relative  top-16 font-sans font-thin">Scroll down to learn more about us.</p>

              <div className="row">
              <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
              </div>
            </div>
          </div>
  
        </div>
      ),
    },
    {
      id: 3,
      year:'2014',
    
      bgImage: 'https://images.unsplash.com/photo-1732740676396-ece9a9148342?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: (

        <div className="z-10 text-center">
        
          <div className="row">
            <div className="col py-12 justify-center items-center flex flex-col">
            <p className="text-[12xl] w-[65%] text-justify font-sans font-semibold   text-3xl  pb-3" >2014  </p>
           <p  className="text-[12xl] w-[65%]  font-thin text-left   font-sans  text-5xl " ><span className=" font-semibold font-sans">Product Launch:</span> Introduced Panel Air
           Conditioner Manufacturing  </p>
              <div className="text-[12xl] w-[65%] text-justify font-sans font-thin pt-7">
              <blockquote class="border-l-4 border-[#A58149]  my-4 pl-8 md:pl-7 text-2xl font-sans font-thin "> Launched Panel Air Conditioner Manufacturing, marking a significant
              milestone in our growth. </blockquote>
              </div>
            

              <p className=" relative  top-16 font-sans font-thin">Scroll down to learn more about us.</p>

              <div className="row">
              <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
              </div>
            </div>
          </div>
  
        </div>
      ),
    },
    {
      id: 4,
     
      year:'2016',
     
      bgImage: 'https://images.unsplash.com/photo-1579618216551-cc514029b1a9?q=80&w=2895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    
      content: (

        <div className="z-10 text-center">
        
          <div className="row">
            <div className="col py-12 justify-center items-center flex flex-col">
            <p className="text-[12xl] w-[65%] text-justify font-sans font-semibold   text-3xl  pb-3" >2016  </p>
           <p  className="text-[12xl] w-[65%]  font-thin text-left   font-sans  text-5xl " ><span className=" font-semibold font-sans"> Manufacturing Milestone:</span> Established a dedicated manufacturing plant </p>
              <div className="text-[12xl] w-[65%] text-justify font-sans font-thin pt-7">
              <blockquote class="border-l-4 border-[#A58149]  my-4 pl-8 md:pl-7 text-2xl font-sans font-thin "> Established a dedicated manufacturing plant to enhance production capabilities. </blockquote>
              </div>
            

              <p className=" relative  top-16 font-sans font-thin">Scroll down to learn more about us.</p>

              <div className="row">
              <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
              </div>
            </div>
          </div>
  
        </div>
      ),
    },
    {
      id: 5,
      year:'2017',
    
      bgImage: 'https://images.unsplash.com/photo-1579618216551-cc514029b1a9?q=80&w=2895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: (

        <div className="z-10 text-center">
        
          <div className="row">
            <div className="col py-12 justify-center items-center flex flex-col">
            <p className="text-[12xl] w-[65%] text-justify font-sans font-semibold   text-3xl  pb-3" >2017  </p>
           <p  className="text-[12xl] w-[65%]  font-thin text-left   font-sans  text-5xl " ><span className=" font-semibold font-sans"> Diversification:</span> Expanded into Oil Chiller Manufacturing </p>
              <div className="text-[12xl] w-[65%] text-justify font-sans font-thin pt-7">
              <blockquote class="border-l-4 border-[#A58149]  my-4 pl-8 md:pl-7 text-2xl font-sans font-thin "> Diversified into Oil Chiller Manufacturing to meet growing market demands. </blockquote>
              </div>
            

              <p className=" relative  top-16 font-sans font-thin">Scroll down to learn more about us.</p>

              <div className="row">
              <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
              </div>
            </div>
          </div>
  
        </div>
      ),

    },
    {
      id: 6,
      title: 'Business',
      year:'2019',
      description: 'Welcome to our website',
      bgImage: 'https://images.unsplash.com/photo-1579618216551-cc514029b1a9?q=80&w=2895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add the image URL here
    },
    {
      id: 7,
      title: 'Business',
      year:'2020',
      description: 'Welcome to our website',
      bgImage: 'https://images.unsplash.com/photo-1579618216551-cc514029b1a9?q=80&w=2895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add the image URL here
    },
  ];

  const handleWheel = (e) => {
    if (!isMyslideInView || isScrolling) return; // Prevent scrolling if myslide is not in view or transition is in progress

    if (e.deltaY > 0 && activePage < pages.length - 1 && !isOnLastSlide) {
      setIsScrolling(true);
      setActivePage((prev) => prev + 1);
    } else if (e.deltaY < 0 && activePage > 0 && !isOnFirstSlide) {
      setIsScrolling(true);
      setActivePage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsScrolling(false);
    }, 600); // Match the transition duration

    return () => clearTimeout(timeout);
  }, [activePage]);

  // Prevent body scrolling during the transition
  useEffect(() => {
    if (isScrolling) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is enabled when component unmounts
    };
  }, [isScrolling]);

  // Update state for first and last slides
  useEffect(() => {
    setIsOnFirstSlide(activePage === 0);
    setIsOnLastSlide(activePage === pages.length - 1);
  }, [activePage]);

  // Intersection observer to track if myslide is in the viewport
  useEffect(() => {
    const myslideElement = document.getElementById("myslide");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMyslideInView(entry.isIntersecting); // Update state when myslide is in view
      },
      { threshold: 0.5 } // Trigger when 50% of myslide is in view
    );

    if (myslideElement) {
      observer.observe(myslideElement);
    }

    return () => {
      if (myslideElement) {
        observer.unobserve(myslideElement);
      }
    };
  }, []);

  // Add event listener for the wheel scroll
  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isScrolling, activePage, isMyslideInView]);

  return (
    <>
    <div className="container-fluid">

    
    <div className="row">
    <div
  id="myslide"
  className="h-screen w-full overflow-hidden relative"
>
  {/* Main Pages */}
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
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        {/* Content */}
        <div className="z-10 text-center">
          <h1 className="text-4xl font-bold">{page.title}</h1>
          <p className="text-lg mt-4">{page.description}</p>
          {/* Page Specific Content */}
          {page.content}
        </div>
      </div>
    ))}
  </div>

  {/* Page Indicators */}
  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-center">
    {pages.map((page) => (
      <div
        key={page.id}
        className={`flex items-center w-40 justify-start mb-4 cursor-pointer transition-all duration-300 ${
          page.id === activePage ? 'opacity-100 scale-105' : 'opacity-50'
        }`}
        onClick={() => !isScrolling && setActivePage(page.id)}
      >
        <div
          className={`h-8 w-2 rounded-full mr-2 ${page.id === activePage ? 'border-2 border-blue-500' : 'bg-gray-400'}`}
        ></div>

        <div
          className={`h-[2px] w-5 rounded-full relative right-2 mr-2 ${page.id === activePage ? 'bg-blue-500' : 'bg-gray-400'}`}
        ></div>

        <span className=" text-white font-sans font-thin ">{page.year}</span>
      </div>
    ))}
  </div>
</div>

        </div>

  

  
</div>

    </>
  );
}
