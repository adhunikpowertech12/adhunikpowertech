'use client';

import { useEffect, useState } from "react";

export default function AirWasher() {
  const [activePage, setActivePage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOnLastSlide, setIsOnLastSlide] = useState(false);
  const [isOnFirstSlide, setIsOnFirstSlide] = useState(true);
  const [isMyslideInView, setIsMyslideInView] = useState(false); // Track if myslide is in view
  const pages = [
    { id: 0, title: 'Business', description: 'Welcome to our website' },
    { id: 1, title: 'Ownership', description: 'Learn more about us' },
    { id: 2, title: 'Values', description: 'Our range of services' },
    { id: 3, title: 'Financials', description: 'Get in touch with us' },
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
          <div id="myslide" className="h-screen myslide w-full overflow-hidden relative bg-gray-100">
            {/* Main Pages */}
            <div
              className="h-full w-full transition-transform ease-in-out duration-500"
              style={{ transform: `translateY(-${activePage * 100}vh)` }}
            >
              {pages.map((page) => (
                <div
                  key={page.id}
                  className="h-screen flex flex-col items-center justify-center   bg-gray-600 text-white"
                >
                  <h1 className="text-4xl font-bold">{page.title}</h1>
                  <p className="text-lg mt-4">{page.description}</p>
                </div>
              ))}
            </div>

            {/* Page Indicators */}
            <div className="absolute  top-1/2 left-4 transform -translate-y-1/2 flex flex-col items-center">
              {pages.map((page) => (

                <div
                  key={page.id}
                  className={`flex items-center w-40 justify-start mb-4 cursor-pointer transition-all duration-300 ${page.id === activePage ? 'opacity-100 scale-105' : 'opacity-50'
                    }`}
                  onClick={() => !isScrolling && setActivePage(page.id)}
                >
                  <div
                    className={`h-8 w-2 rounded-full mr-2 ${page.id === activePage ? ' border-2  border-blue-500' : 'bg-gray-400'
                      }`}
                  ></div>
                  
                  <div
                    className={`h-[2px] w-5 rounded-full relative right-2 mr-2 ${page.id === activePage ? ' bg-blue-500' : 'bg-gray-400'
                      }`}
                  ></div>

                  <span className="text-sm font-medium text-white">
                    {page.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rest of the content below */}
        <div className="my-11">
          <span className="text-transparent">.</span>
        </div>

        <div className="row">
          <div className="col py-12 justify-center items-center flex flex-col">
            <p className="text-3xl font-serif">HVAC Solution Under One Roof</p>
            <p className="text-[12xl] w-[75%] text-center font-sans font-thin py-7">
              Adhunik Powertech Private Limited is a leading manufacturer specializing in high-quality air cooling and air conditioning products. We offer comprehensive HVAC project services, including expert design, installation, and maintenance, ensuring our clients receive unparalleled support throughout every phase. With over 19 years of experience in the HVAC industry, we are committed to providing innovative turnkey solutions that meet and exceed international standards. Choose Adhunik Powertech to enhance your indoor comfort and energy efficiency with our trusted HVAC expertise.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="relative h-[500px] w-full">
            {/* Video background */}
            <video
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-fill object-center"
            >
              <source src="https://rilstaticasset.akamaized.net/sites/default/files/2022-08/about-us-flag-video-mob.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay container for centered content */}
            <div className="absolute inset-0 text-gray-700 flex items-center justify-center">
              <div className="text-center w-[75%] rounded-md border-gray-400 border-[1px] p-11 font-thin bg-white text-gray-700">
                <h1 className="text-3xl font-sans mb-4">A Brighter India, Powered by Adhunik Powertech</h1>
                <p className="text-lg font-thin font-sans">
                  Our conviction, "A Brighter India, Powered by Adhunik Powertech," drives our vision and actions every day. We have successfully evolved from an HVAC services company to India’s premier manufacturer of air cooling and air conditioning products. By supporting the Make in India initiative, we not only enhance local manufacturing but also bring our innovative products to markets around the world, demonstrating our commitment to quality and excellence on a global scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
