
'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';


import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Link from 'next/link';
import Popup from '@/app/popup/page';
import { CldImage } from 'next-cloudinary';
 
export default function HeroPage() {

      
  // const cld = new Cloudinary({ cloud: { cloudName: 'demvtn6lc' } });


  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

 
  const images3 = [

    {
      original: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923974/AWI_dy3ktv.webp",
      thumbnail: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923974/AWI_dy3ktv.webp",
    },
    {
      original: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923982/DCI_nnkwzk.webp",
      thumbnail: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923982/DCI_nnkwzk.webp",
    },
    {
      original: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923845/3_hlacmx.webp",
      thumbnail: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923845/3_hlacmx.webp",
    },
    {
      original: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923847/1_vmsg3f.webp",
      thumbnail: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923847/1_vmsg3f.webp",
    },
    {
      original: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923846/2_pxs9ab.webp",
      thumbnail: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923846/2_pxs9ab.webp",
    },
   
    {
      original: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923851/7_xjguld.webp",
      thumbnail: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923851/7_xjguld.webp",
    },
    {
      original: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923851/8_l2toyp.webp",
      thumbnail: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923851/8_l2toyp.webp",
    },
    {
      original: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923852/9_f9bq6x.webp",
      thumbnail: "https://res.cloudinary.com/demvtn6lc/image/upload/v1736923852/9_f9bq6x.webp",
    },
  ];


  const logos = [
    { src: '/projects/1.webp', alt: 'Asahi-India-Glass-Ltd',width: 176, height: 112  },
    { src: '/projects/2.webp', alt: 'Bajaj', width: 126, height: 100  },
    { src: '/projects/3.webp', alt: 'Bajaj', width: 176, height: 112  },
    { src: '/projects/4.webp', alt: 'Bajaj', width: 176, height: 112  },
    { src: '/projects/5.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/6.webp', alt: 'Bajaj', width: 176, height: 112  },
    { src: '/projects/7.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/8.png', alt: 'Bajaj', width: 176, height: 112  },
    { src: '/projects/9.jpeg', alt: 'Bajaj', width: 176, height: 112  },
    { src: '/projects/10.webp', alt: 'Bajaj', width: 176, height: 112  },
    { src: '/projects/10.png', alt: 'Bajaj', width: 176, height: 112  },
    { src: '/projects/11.png', alt: 'Bajaj', width: 176, height: 112  },
  ];
  
  const handleButtonClick = (buttonText) => {
    console.log('Button clicked:', buttonText); // Log the button text
    if (buttonText === 'Request A Quote') {
      window.location.href = '/contact-Us'; // Redirect to Contact Us page
    } 
    else {
      console.log('Please chordo');
      window.location.href = 'tel:+8287885885'; // Initiate a phone call
    }
  };
  
  
  

  const slides = [

    {
      id: 1,
      video: 'https://res.cloudinary.com/demvtn6lc/video/upload/v1737092275/Home_Page_Video_pc4hhv.mp4',
      title: 'WELCOME TO ADHUNIK POWERTECH',
      description: 'We are technically very competent to design any kind of project where conditions are different from nominal.',
      buttonText: 'Request A Quote',
      descriptivetext: "We are technically very competent to design any kind of project where conditions are different from nominal."

    }
    ,
    
    {
      id: 2,
      video: 'https://res.cloudinary.com/demvtn6lc/video/upload/v1736492912/v2_dm9290.mp4',
      title: 'Air Cooling & Air Conditioning System',
      description: <>
        Installation, Service, Repair &amp; Maintenance
        <br />
        24x7 Service Available
      </>,
      buttonText: 'CALL US NOW',
      descriptivetext: "Air Cooling & Air Conditioning System"

    },

    {
      id: 3,
      video: 'https://res.cloudinary.com/demvtn6lc/video/upload/v1736492790/v3_pdbkfe.mp4',
      title: 'Add Peace Of Mind',
      description: <>We offer a team of Experienced Engineers to take care of your products. Just in case there is  trouble, all you need to call our customer support center and we will take care of your worries.</>,
      buttonText: 'CALL US NOW',
      descriptivetext: "We offer a team of Experienced Engineers to take care of your products. Just in case there is  trouble, all you need to call our customer support center and we will take care of your worries."
      
    },

    {
      id: 4,
      video: 'https://res.cloudinary.com/demvtn6lc/video/upload/v1736492733/v4_w6zrtj.mp4',
      title: 'Commercial, Residential & Office Space',
      description: "With our complete HVAC solutions, you will feel superior comfort while enjoying the perfect air conditioning environment.",
      buttonText: 'Request A Quote',
      descriptivetext: "With our complete HVAC solutions, you will feel superior comfort while enjoying the perfect air conditioning environment."
      
    },

    {
      id: 5,
      video: 'https://res.cloudinary.com/demvtn6lc/video/upload/v1736492601/v5_i1aosw.mp4',
      title: 'Hospital, Pharma & Food Industry',
      description: "We help your healthcare team maintain a comfortable temperature and a safe environment with our customized heating and cooling solutions.",
      buttonText: 'Request A Quote',
       descriptivetext: "We help your healthcare team maintain a comfortable temperature and a safe environment with our customized heating and cooling solutions."

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

  const images4 = [

    {

      src: '1_sa8yfj',
      alt: 'India',
      label: 'India',


    }
    ,

    {
      src: 'nepal_k1ewct',
      alt: 'Nepal',
      label: 'Nepal',

    },

    {
      src: 'bangladesh_wjfsuo',
      alt: 'Bangladesh',
      label: 'Bangladesh',

    },
    {
      src: 'uae_zoxpfo',
      alt: 'UAE',
      label: 'UAE',

    },
    {
      src: 'saudi_lvgcvu',
      alt: 'Saudi Arab',
      label: 'Saudi Arab',

    },
    {
      src: 'iraq_y7s6ng',
      alt: 'Iraq',
      label: 'Iraq',

    },

  ];

  const images6 = [
    { src: '/l1.jpg', alt: 'pics', width: 120, height: 120 },
    { src: '/l2.jpg', alt: 'pics', width: 150, height: 150 }, // Custom size
    { src: '/GEM.png', alt: 'pics', width: 220, height: 220 },
    { src: '/RL.png', alt: 'pics', width: 200, height: 100 }, // Custom size
    { src: '/l3.jpg', alt: 'pics', width: 120, height: 120 },
    { src: '/NHWC.png', alt: 'pics', width: 120, height: 120 },

  ];

  const images7 = [
    { src: '/l1.jpg', alt: 'pics', width: 50, height: 50 },
    { src: '/l2.jpg', alt: 'pics', width: 50, height: 50 }, 
    { src: '/GEM.png', alt: 'pics', width: 50, height: 50 },
    { src: '/RL.png', alt: 'pics', width: 50, height: 50 },
    { src: '/l3.jpg', alt: 'pics', width: 120, height: 50 },
    { src: '/NHWC.png', alt: 'pics', width: 120, height: 120 },

  ];
  

  const images = [
    "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1096&q=80",
    "https://images.unsplash.com/photo-1581473483413-313a5afffb08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80",
    "https://images.unsplash.com/photo-1585155967849-91c736589c84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    "https://images.unsplash.com/photo-1527915676329-fd5ec8a12d4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  ];

  const products = [
    {
      src: "awb_y87hai",
      alt: "Air Washer",
      title: "Air Washer",
      description: "Elevate your well-being with our air washers for cleaner, cooler, and fresher air!",
      link: "/air-washer",
      linkText: "Read more",

    },
    {
      src: "DD_oxeclc",
      alt: "Ducted Air Coolers",
      title: "Ducted Air Coolers",
      description: "Experience the flexibility of our ducted air coolers, which offer optimal cooling solutions tailored to any space.",
      link: "/ducted-air-cooler",
      linkText: "Read more",
    },
    
    {
      src: "efss_r3q8fb",
      alt: "Ventlilation Exhaust Fan",
      title: "Ventlilation Exhaust Fan",
      description: " Transform your indoor environment with our powerful ventilation fans, ensuring superior air quality and unmatched comfort. ",
      link: "/ventilation-fans",
      linkText: "Read more",
    },
    // Add more items if needed
  ];
 
  const products2 = [
    {
      src: "pab_p1r8bt",
      alt: "PANEL AIR CONDITIONER",
      title: "PANEL AIR CONDITIONER",
      description: " Protect your valuable equipment from overheating with our wide range of panel air conditioners. ",
      link: "/panel-air-conditioners",
      linkText: "Read more",
    },
    {
      src: "OC_vvhkto",
      alt: "OIL AND COOLANT CHILLER UNIT",
      title: "OIL AND COOLANT CHILLER ",
      description: "Maximize the performance of your machinery and enhance its lifespan with our advanced oil chillers.",
      link: "/chiller-oil-water-coolant",
      linkText: "Read more",
    },
    {
      src: "Air_Shower2_wfkoyp",
      alt: "AIR SHOWER",
      title: "AIR SHOWER",
      description: "Ensure the safety of your workspace and personnel from contamination with our efficient air showers.",
      link: "/air-shower",
      linkText: "Read more",
    },
    {
      src: "AHU1_lab7sl",
      alt: "Air Handling Unit",
      title: "Air Handling Unit",
      description: "Experience unparalleled air quality, precise temperature control, and exceptional energy efficiency with our advanced air handling unit.",
      link: "/air-handling-unit",
      linkText: "Read more",
    },
    // Add more items if needed
  ];


  return (
    <>


<Popup />

      <div className="row   h-auto w-full relative font-sans" >



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
                poster="https://res.cloudinary.com/demvtn6lc/image/upload/v1736923987/slideabout_etmcii.jpg"
             
                type="video/mp4"
                className="w-full h-full object-cover"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}

              >
                <source src={slide.video} type="video/mp4" />

               {slide.descriptivetext}

              </video>




              <div className="flex items-center h-full bg-black bg-opacity-40">

                <div className=" text-white  text-center md:text-left  lg:px-16">
                  <p className="   text-3xl md:text-6xl  md:w-[90%]  mb-2 font-thin">{slide.title}</p>
                  <p className=' text-[14px]  md:w-[70%]'>{slide.description}</p>
                  <button
                className="cursor-pointer z-10 relative mt-4 text-sm px-7 py-4 text-white rounded-lg shadow-lg transition-colors duration-300"
                style={{
                  background: `
                    radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%),
                    linear-gradient(68.8deg, rgba(0, 0, 0, 0.95) 1.8%, rgb(0, 55, 79) 31.8%, rgb(9, 93, 134) 56.2%, rgb(15, 155, 217) 89%)
                  `,
                  backgroundBlendMode: 'multiply',
                }}
                onClick={() => handleButtonClick(slide.buttonText)}
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



        <div className=" flex flex-col section px-7 py-7  w-full justify-center  items-center ">


          <p className=' pt-11 h-full relative w-full justify-center flex  text-9xl font-extrabold font-sans'>
          <CldImage
  width="960"
  height="600"
  src="nw_pa2sza"
  className="h-full md:w-[70%]"
  alt="pic"
  fetchPriority="high"
  decoding="async"
  effect="blur"
/>
            
          </p>

<p className='  uppercase w-full  h-full text-center   md:text-2xl  lg:text-3xl font-sans'> </p>
<p className= "  pt-4 text-3xl font-extrabold text-center md:text-5xl lg:text-6xl"><span className= " bg-clip-text text-transparent bg-gradient-to-r to-[#0093E9] from-[#80D0C7] uppercase">    under one roof </span></p>

        </div>












        <div className="row mt-7">
        


          <section className="bg-white ">

            <div className="gap-16 items-center pt-0 mt-0 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  lg:px-6">

              <div className="font-light text-gray-700 text-[15px]  md:text-[16px] text-center md:text-left">
              
                <h1 className="mb-4 text-[20px] md:text-3xl  font-bold  text-gray-900 ">

                Adhunik Powertech: Over 19+ Years of 
                <br />HVAC Excellence - Contact Us Today!

                </h1>


                <p className="mb-2">
               Founded in 2005, Adhunik Powertech has established itself as a leader in the HVAC industry. We deliver innovative and efficient solutions, driven by our strong commitment to quality, reliability, and exceptional customer satisfaction.



                </p>
                <p className=' mb-2'>
                Our extensive range of air cooling and air conditioning products meets various needs, catering to commercial and industrial environments. We focus on comfort and energy efficiency in every solution. Additionally, our comprehensive HVAC project services—including design, installation, and maintenance—ensure that our clients receive the best possible support from start to finish.


                </p>
                <p className=' pb-8'>
                Experience the Adhunik Difference and Explore Our Solutions Today!

                </p>
                <Link href='/hvac' className=' bg-[#0177C8] relative text-white text-[14px] px-4 py-3 md:px-12 md:py-4 rounded-full  uppercase font-extrabold'>
                  learn more
                </Link>

              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <CldImage
                  className="w-full h-[90%] object-center object-cover rounded-lg"
                  src="landingpage_esq6qm"
                  alt="office content 1"
                 width="600"
  height="960"
                />
                <CldImage
                  className="mt-4 w-full lg:mt-10 rounded-lg"
                width="600"
  height="960"
                 src="lan2_k80ubh"
                  alt="office content 2"
                />
              </div>
            </div>
          </section>

        </div>


        <div className="inline-flex items-center justify-center w-full mx-auto mt-4 my-3">
          <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " /><span className="absolute px-3  text-gray-900 -translate-x-1/2 bg-white left-1/2 text-[26px]  text-center  md:text-3xl text-1xl capitalize font-extrabold font-sans" >our products </span>
        </div>

        <div className="row ">
          <div className="col">


            <div className="  justify-center   ">
        

              <div className="row">
  <div className="col py-4">
    <div className="items-center justify-center h-full">
      <div  className=' flex-row flex  flex-wrap justify-center items-center gap-3'>
        {products.map((item, index) => (
          <div key={index} className="  md:w-[30%]  w-80">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
              <div className="w-auto">
                <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                <CldImage
  width="960"
  height="600"
  src={item.src} // Assuming item.src contains the Cloudinary public ID
  sizes="100vw"
  alt={item.alt} // Assuming item.alt contains the alt description
  fetchPriority="high"
  decoding="async"
  className="h-96 w-full object-center object-contain"
  effect="blur"
/>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h2 className="font-sans font-normal text-[18px] uppercase text-white">
                  {item.title}
                </h2>
                <p className="mb-3 pt-2 text-[12px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  {item.linkText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>


  <div className="col py-4">
    <div className="items-center justify-center h-full">
      <div  className=' flex-row flex-wrap flex justify-center items-center gap-3'>
        {products2.map((item, index) => (
          <div key={index} className="md:w-[22%]  w-80">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
              <div className="w-auto">
                <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                
<CldImage
  width="960"
  height="600"
  src={item.src} // Assuming item.src contains the Cloudinary public ID
  sizes="100vw"
  alt={item.alt} // Assuming item.alt contains the alt description
  fetchPriority="high"
  decoding="async"
  className="h-96 w-full object-center object-fill"
  effect="blur"
/>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h2 className="font-sans  font-normal text-[16px]   uppercase  text-white">
                  {item.title}
                </h2>
                <p className="mb-3 pt-2 text-[12px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  {item.linkText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


            </div>


           



          </div>
        </div>

        <div className="inline-flex items-center justify-center w-full mx-auto my-4">
          <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
          <span className="absolute px-2 md:px-3  text-gray-900 -translate-x-1/2 bg-white left-1/2  text-center text-[20px]  md:text-3xl text-1xl capitalize font-extrabold font-sans"> Serving Worldwide
</span>
        </div>

    






        <div className="row flex flex-col md:flex-row ">
          <div className="col w-full md:w-6/12">
            <div className="row">

              <div className="bg-white   ">
                <div className="mx-auto  max-w-screen-md px-4 md:px-8">

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 ">
                    {images4.map((image, index) => (

                      <a key={index}
                        href="#"
                        className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${index === 0 || index === 3 || index == 4 ? 'md:col-span-2' : ''} md:h-44`}
                      >
                        <CldImage
                        src={image.src}
                           width="800"
  height="600"
                          alt={image.alt}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                          {image.label}
                        </span>
                      </a>
                      
                    ))}
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="col w-full md:w-6/12 items-center justify-center flex  my-auto mx-auto">

            <section className="bg-white ">

              <div className=" md:p-9 py-8 px-5 ">
                <div className="font-light text-gray-700 text-[15px]  md:text-[16px] text-center ">
                  <h2 className="mb-4 text-[20px] md:text-3xl  font-bold  text-gray-900 ">

                  From the Heart of India to  the Far <br /> Corners of the World <br /> <span className='  text-[10px] lg:text-[18px] '> </span>
                  </h2>
                  <p className="mb-3 text-[12px]  lg:text-[14px]">
                  At Adhunik Powertech, we believe everyone deserves the comfort and efficiency of reliable cooling solutions. That's why we're dedicated to delivering our innovative air conditioning and air cooling products to customers across the globe.


                  </p>
                  <p className=' mb-4 text-[12px] lg:text-[14px]'>
                  Our global reach extends far beyond the borders of our home country, India. We've established a strong presence in diverse regions, from the bustling metropolises of Asia to the high-rise buildings of the Middle East. No matter where you are, we're here to provide you with the cooling solutions you need.


                  </p>

                <p className=' text-[12px] lg:text-[14px]'>When you choose Adhunik Powertech, you're choosing a company dedicated to providing innovative, reliable, and sustainable cooling solutions. Our focus on quality, customer satisfaction, and global reach sets us apart as a leading provider in the industry.</p>
               

                </div>
<div className="container flex  justify-center pt-3">
<Link href='/product-overview' className=' bg-[#0177C8] relative text-white text-[14px] px-4 py-3 md:px-12 md:py-4 rounded-full  uppercase font-extrabold'>
                    learn more
                  </Link>
</div>
               

              </div>
            </section>

          </div>


        </div>

        <div className="row">


          <div className="inline-flex items-center justify-center w-full mx-auto my-4">

          </div>



          <section className="relative   py-20  bg-body overflow-hidden bg-black text-white">
            <div className="relative container mx-auto px-4">

              <div className="absolute top-0 right-0 -mr-52 -mt-64 w-186 h-186 bg-gradient-to-t from-purple-600 via-darkBlue-900 rounded-full filter blur-4xl"></div>
              <div className="relative  h-full w-full mx-auto lg:mx-0 mb-7 text-center">
                <h2 className="font-heading text-4xl font-medium  tracking-tight mb-6">Our Quality Services</h2>
                <p className="  text-gray-400 tracking-tight capitalize">
                  <span className='  text-center '> we offer high-quality, personalized services that ensure a  great experience and <br /> exceed your expectations.</span>
                </p>
              </div>


              <div className="relative max-w-md lg:max-w-none mx-auto">
                <div className="flex flex-wrap -mx-4 text-center md:text-left">
                  {[
                    {
                      icon: 'cad_zeyqux',
                      title: 'Consultancy & Design',
                      description: 'Adhunik Powertech provides (Engineering, Procurement, and Construction) HVAC Solutions to clients of various industries, executing turnkey HVAC Projects all over India.',
                    },
                    {
                      icon: 'de_nvmycd',
                      title: 'Detailed Engineering',
                      description: "We have over 19+ years of experience in the HVAC Industry. Our focus while system designing & selection is to provide energy-efficient & cost-effective cooling solutions with near 'zero' maintenance that is for large industrial, institutional, commercial as well as residential premises"
                    },
                    {
                      icon: 'Project_Execution_iogkqo',
                      title: 'Project Execution',
                      description: " We execute all the projects under NBC, CPWD & NABH guidelines. We also follow ISHRAE, ASHRAE & ISO Standards. We are committed to safety, measurement & precautions during the execution of the work."
                    },
                  ].map((service, index) => (
                    <div key={index} className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                      <a
                        className="group block h-auto xl:h-128 p-8 border-2 border-white border-opacity-10 hover:border-opacity-200 rounded-3xl transition duration-200"
                        href="#"
                      >
                        <div className="flex h-full flex-col items-start">
                          <div className="flex w-full mb-12 items-center justify-between">
                          
<CldImage
  width="960"
  height="400"
  src={service.icon} // Assuming service.icon contains the Cloudinary public ID
  className="block w-full rounded-lg h-52 object-cover object-center"
  alt="services"
  fetchPriority="high"
  decoding="async"
/>

                          </div>
                          <div className="mt-auto ">
                            <h4 className="text-3xl sm:text-4xl mb-2 font-medium  group-hover:text-cyan-500">{service.title}</h4>
                            <p className="text-gray-400 tracking-tight leading-5">{service.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </section>


        </div>

        <div className="row">
          <div className="inline-flex items-center justify-center w-full mx-auto my-4">
            <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
            <span className="absolute px-3  text-gray-900 -translate-x-1/2 bg-white left-1/2   md:text-3xl text-1xl capitalize font-bold text-center font-sans">Our Premier Product Selection</span>
          </div>

          <div className="row flex flex-row flex-wrap-reverse  justify-evenly items-center">
            <div className=" w-full h-full md:w-5/12 ">
              <h2
                className="font-manrope uppercase  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-4xl lg:text-4xl text-black mb-9 max-lg:text-center relative">

                Our Product Range </h2>
              <p className="font-normal text-[16px] leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                We pride ourselves on offering a diverse and innovative product range designed to meet the specific needs of our clients across various industries. Our portfolio includes high-quality, cutting-edge solutions that are engineered for performance, durability, and efficiency. Whether you require advanced HVAC systems, specialized ducting, or customized components, our products are meticulously crafted to deliver exceptional results, ensuring that every project is executed to the highest standards.
              </p>
            </div>
            <div className=" w-full h-full md:w-5/12 my-5  ">
              <ImageGallery items={images3} className=" rounded-lg " alt="pics" />

            </div>
          </div>

        </div>



              <div className="inline-flex  items-center justify-center w-full mx-auto my-4 mt-8">
                <hr className="w-[90%] h-px  bg-gray-300 border-0 " />
                <span className="absolute px-5 text-gray-900  -translate-x-1/2 bg-white left-1/2   md:text-3xl text-1xl capitalize font-extrabold text-3xl text-center font-sans">Member of</span>
              </div>

        <div className="row hidden md:block">
          <section className=" ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-4 text-center">
                <h4 className="text-2xl  text-center font-medium"></h4>
              </div>

              <div className="  grid justify-center gap-14  sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 xl:flex">
                {images6.map((image, index) => (
                  <a key={index} href="#" className="flex items-center  justify-center">
                    <Image src={image.src} width={image.width} height={image.height} alt={image.alt} />
                  </a>
                ))}
              </div>

            </div>
          </section>

        </div>




        <div className="row">
  <div className="relative w-full max-w-xl mx-auto block md:hidden">
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images7.map((image, index) => (
          <div
            key={index}
            className="min-w-full flex justify-center items-center"
           
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-auto h-auto object-contain  "
            />
          </div>
        ))}
      </div>
    </div>

    <button
      onClick={handlePrev}
      className="absolute top-1/2 left-2 transform -translate-y-1/2  bg-gray-100 text-black px-3 py-2 rounded-lg"
    >
      &#8249;
    </button>

    <button
      onClick={handleNext}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent text-black px-3 py-2 rounded-lg"
    >
      &#8250;
    </button>
  </div>
</div>


        <div className="row pb-10">


          <div className="  inline-flex mb-4  items-center justify-center w-full mx-auto mt-3 ">

            <hr className="w-[90%] h-px my-8 bg-gray-300 border-0  " />

            <span className=" absolute text-3xl px-3  text-gray-900 -translate-x-1/2 bg-white left-1/2  md:text-3xl text-1xl capitalize font-extrabold text-center font-sans  " > Proudly We Serve </span>

          </div>

          <div className="w-full py-5 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            {[...Array(2)].map((_, index) => (
              <ul
                key={index}
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden={index === 1 ? 'true' : 'false'}
              >
                {logos.map((image, index) => (
                  <li key={index}>
                  <Image src={image.src} width={image.width} height={image.height} alt={image.alt} />





                  </li>
                ))}
              </ul>
            ))}

     

          </div>

        </div>







      </div>

    </>
  )
}
