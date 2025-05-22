"use client"
import Link from 'next/link';
import React, { useState } from 'react';

export default function IndustrialCooler() {

  const [selectedCapacity, setSelectedCapacity] = useState('190');

  const features = [

    "High Cooling Efficiency",
    "Eco-Friendly Operation",
    "Durable Plastic Body",
    "Low Maintenance",
    "Eco-Friendly Operation",
    "1 Year Warranty Coverage (MOTOR & PUMP)"

  ];

  const specifications = [
    { name: "Tank Capacity", value: "100 liters , 190 liters" },
    { name: "Motor Type", value: "3 Speed" },
    { name: "Maximium RPM", value: "950 RPM" },
    { name: "Maximium Wattage", value: "550W" },
    {
      name: <>
        <span>
          <span className=' font-extrabold inline-flex  text-cyan-600 border-2 border-cyan-500 p-1 rounded-lg  '>
            190
          </span>
          Litre Best Suited For
        </span>
      </>,
      value: "Large Industrial & Commercial Cooling Applications"
    },


    {
      name: <>
        <span>
          <span className=' font-extrabold inline-flex  text-cyan-600 border-2 border-cyan-500 p-1 rounded-lg  '>
            190
          </span>
          Litre Water Tank
        </span>
      </>,
      value: "65 kgs"
    },



    { name: <> <span> <span className=' font-extrabold inline-flex text-cyan-600 border-2 border-cyan-500 p-1 rounded-lg'> 100  </span> Litre Best Suited For</span> </>, value: "Medium-scale Industrial Cooling & Outdoor Applications" },
    {
      name: <>
        <span>
          <span className=' font-extrabold inline-flex  text-cyan-600 border-2 border-cyan-500 p-1 rounded-lg  '>
            100
          </span>
          Litre Water Tank
        </span>
      </>,
      value: "60 kgs"
    },
    { name: "Blade Type", value: "3-Leaf High-Performance Plastic Blades" },

    { name: "Fan Type ", value: "Axle Fan 30' " },
    { name: "Cooling Area ", value: "2500 (sq.ft)" },
    { name: "Cooling Pad Size", value: "1170x1076x100mm" },
  ];

  const pricing = {
    "100": {
      current: "₹ 20,000",
      old: "₹ 24,000",
      discount: "17%",
      image: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1747655000/Cooler_3_xavleu.webp"
      ,
      name: "Thunder "
    },
    "190": {

      image: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1747654999/Cooler_2_a8qycx.webp",
      name: "Thunder Max",

      current: "₹ 24,000",
      old: "₹ 28,000",
      discount: "14%",
    }
  };

  const Benefits = [
    {
      title: "High Cooling Efficiency –",
      description:
        "Engineered for maximum air delivery, effectively cooling large areas.",
    },



    {
      title: "Ideal for Large Spaces –",
      description:
        "Perfect for factories, warehouses, workshops, and large commercial establishments in Gurugram, Delhi, and nearby industrial hubs.",
    },




    {
      title: "Durable Plastic Body –",
      description:
        "Ensures longevity and resistance to harsh industrial environments.",
    },


    {
      title: "Low Maintenance –",
      description:
        "Designed for hassle-free operation, minimizing downtime and maintenance costs for businesses in the busy NCR region.",
    },



    {
      title: "1-Year Complete Warranty Coverage –",
      description:
        "Our commitment to quality and performance.",
    },



    {
      title: "Also Suitable as a Powerful Tent Cooler –",
      description:
        "Provides effective cooling for temporary structures and outdoor events common in the Delhi NCR area.",
    },

    {
      title: "Proudly Manufactured by Adhunik Powertech –",
      description:
        "Backed by our ISO, CE, MSME, IEC, and ZED certifications, guaranteeing quality and reliability.",
    },



  ];


  const Technical = [

    {
      title: "Tank Capacity –",
      description:
        "190 liters",
    },
 
    {
      title: "Motor Type –",
      description:
        "3 Speed, 950 RPM",
    },


    {
      title: "Wattage –",
      description:
        "550W",
    },

    {
      title: "Blade Type –",
      description:
        "3-Leaf High-Performance Plastic Blades",
    },
    {
      title: "Best Suited For",
      description: " Large Industrial & Commercial Cooling Applications in Gurugram, Delhi NCR, and surrounding industrial zones.",
    },

 
  ];

  const Features = [
    {
      title: "Efficient Cooling for Medium Spaces –",
      description:
        "Ideal for workshops, smaller factories, outdoor work areas, and semi-open commercial spaces in and around Gurugram and Delhi.",
    },

    {
      title: " Durable Construction",
      description:"Built to withstand regular use in various industrial and outdoor settings."
    }
,

{
  title:"Low Maintenance",
  description: "Easy to operate and maintain, ensuring minimal disruption to your operations in the NCR."
},
{
  title:"1-Year Complete Warranty Coverage",
  dscription:"Ensuring peace of mind with your investment."
},
{
  title:"Versatile Application",
  description:"Suitable for industrial cooling, commercial cooling, and even as a portable industrial cooler for flexible cooling needs."
},

{
  title:"Manufactured with Quality Assurance",
  description:"Adhering to our stringent ISO, CE, MSME, IEC, and ZED certified processes."
}

 
  ];

const Technical2 = [
  {
    title:"Tank Capacity",
    description:"100 liters"
  },

  {
    title:"Motor Type",
    description:'3 Speed, 950 RPM'
  },
  
  {
    title:"Wattage",
    description:"550W"
  },

  {
    title:"Blade Type",
    description:"3-Leaf Plastic Blades"
  },

  {
    title:"Best Suited For",
    description:"Medium-scale Industrial Cooling & Outdoor Applications in Gurugram, Delhi NCR, and nearby areas."
  }
]

const Why = [
  {
    title:"Locally Manufactured Advantage",
    description:"As a manufacturer based in India, we understand the specific climate challenges of the Delhi NCR region and engineer our coolers to perform optimally in these conditions."
  },

  {
    title:"High Cooling Efficiency",
    description:"Our coolers are designed to deliver powerful airflow and effective cooling, ensuring a comfortable environment even during peak summer."
  },
  {
    title:"Eco-Friendly Operation",
    description:"Our industrial coolers offer an energy-efficient alternative to traditional air conditioning, helping you reduce your carbon footprint and energy costs."
  },
  {
    title:"Durable Plastic Body",
    description:"Built to last, our coolers withstand the rigors of industrial and commercial use."
  },
  {
    title:"Low Maintenance",
    description:"Designed for easy operation and minimal upkeep, saving you time and resources."
  },
  {
    title:"Certified Quality",
    desription:"Our ISO, CE, MSME, IEC, and ZED certifications are a testament to our commitment to quality manufacturing and reliable products."
  },
  {
    title:"Ideal for Gurugram, Delhi NCR & Surrounding Areas",
    description:"We provide prompt service and support to businesses in this region."
  },
  {
    title:"Your Trusted Manufacturer",
    description:"Deal directly with the source for competitive pricing and customized solutions."
  }
]


  return (
    <>

      <div className="container mx-auto px-4 py-12 mt-24">
        <div className="max-w-7xl mx-auto ">
          <div className=" h-full w-full text-center">

            <h1 className=" text-2xl md:text-3xl   font-bold   text-blue-900 mb-12">
              Adhunik Powertech : Industrial Cooling Solutions for Gurugram, Delhi NCR & Beyond
            </h1>

          </div>


          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Image */}
            <div className="w-full lg:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <img
                src={pricing[selectedCapacity].image}
                alt={`Industrial Cooler ${selectedCapacity} Liters`}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-md">

                <h2 className="  text-center md:text-left  text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Heavy-Duty Industrial Air Cooler  {pricing[selectedCapacity].name}
                </h2>

                {/* Sliding Effect Buttons */}
                <div className="box justify-center md:justify-start flex items-center w-full relative">
    <div className="relative   bg-gray-100 p-1 rounded-full mb-6 flex w-fit">
                  {["190", "100"].map((capacity) => (
                    <button
                      key={capacity}
                      onClick={() => setSelectedCapacity(capacity)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCapacity === capacity
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                      {capacity} Liters
                    </button>
                  ))}
                </div>
                </div>
            

                {/* Dynamic Pricing */}
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4 transition-all duration-300"> 
                  <span className="text-2xl font-bold text-red-600">  {pricing[selectedCapacity].current}</span>
                  <span className="text-lg text-gray-500 line-through">{pricing[selectedCapacity].old}</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    Save {pricing[selectedCapacity].discount}
                  </span>
                </div>

                <div className="bg-blue-50 p-4  rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Key Features :</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Specifications :</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {specifications.map((spec, index) => (
                      <div key={index} className="border-b border-gray-100 pb-2">
                        <p className="text-gray-600 font-medium">{spec.name}</p>
                        <p className="text-gray-800">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <Link href="/contact-Us" className=" text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex-1 min-w-[200px]">
                    Request Quote
                  </Link>
                  <a href="tel:8287885885" className="flex-1 min-w-[200px]">
                    <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors w-full">
                      Call Us Now
                    </button>
                  </a>

                </div>
              </div>

              <div className="mt-6 text-center md:text-left bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Industrial Applications</h3>
                <p className="text-gray-700">
                  Ideal for factories, warehouses, workshops, and manufacturing plants where
                  reliable cooling is required for worker comfort and equipment protection.
                </p>
              </div>


            </div>
          </div>

          <div className="row">
            <h2 className='  text-center md:text-left text-2xl font-semibold mt-24 py-5 '>
              Beat the Heat with Powerful and Efficient Industrial Coolers, Proudly Made in India.

            </h2>
            <p className=' font-sans font-normal py-3 text-justify'>
              Adhunik Powertech, a certified manufacturer (ISO, CE, MSME, IEC, ZED), brings you a comprehensive range of robust and high-performance industrial coolers designed to tackle the demanding cooling needs of businesses across Gurugram, Delhi NCR, and surrounding areas. As a trusted name in industrial cooling solutions, we understand the critical role a comfortable and productive environment plays in your operations. Our locally manufactured coolers are engineered for efficiency, durability, and reliable performance, making us your ideal partner for all your industrial cooling requirements.
            </p>
            <p className=' font-sans font-normal py-3 text-justify'>
              <strong> Looking for a powerful alternative to traditional air conditioning ?</strong> Our industrial coolers, also known as <strong>heavy-duty coolers</strong> or <strong>tent coolers</strong> (ideal for large open spaces and temporary structures), offer an energy-efficient and cost-effective solution to combat the intense heat, especially during the peak summer months in the Delhi NCR region.

            </p>

            <div className="row mt-10">
              <div className=" h-full gap-5 flex flex-col md:flex-row  md:p-5 pt-0  mt-0 m-4">

                <div className=" w-full md:p-7 md:pt-0   rounded-xl">
                  <div className="flex items-center justify-center h-full">

                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">

                      <div className="inline-flex items-center justify-center w-full mx-auto  mt-0 my-7 md:mb-0">
                        <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
                        <h2 className="absolute px-2 md:px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  text-center text-[20px]  md:text-2xl text-1xl capitalize font-semibold font-sans">
                          Our Range of Industrial Cooling Solutions


                        </h2>
                      </div>

                    </div>


                  </div>
                </div>




              </div>
            </div>
            <section className=' md:p-5 pb-0 mb-0 flex flex-col md:flex-row '>


              <div className="flex justify-center items-center mx-auto">
                <div className="w-1/2 md:w-1/2 transition-transform duration-500 group-hover:scale-105 rounded-xl">
                  <img
                    className="w-full h-auto rounded-2xl"
                    decoding="async"
                    alt="Air washer"
                    src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1747654999/Cooler_2_a8qycx.webp"
                    loading="lazy"
                  />
                </div>
              </div>


              <div className="  box md:w-8/12 pb-0 py-4 px-4 flex justify-center items-start flex-col">
                <h2 className="w-full text-center md:text-left font-sans text-2xl md:text-3xl text-sky-700 leading-tight">
                  Thunder Max : High-Performance Cooling for Large Industrial & Commercial Applications

                </h2>

                <p className="text-gray-700  py-4 font-sans  text-justify md:text-left ">
                  The Thunder Max is our flagship <strong>heavy-duty cooler</strong>, engineered to deliver exceptional cooling for expansive industrial units, large commercial spaces, and even as an effective tent cooler for events and temporary setups in and around Gurugram and Delhi NCR. Built with a robust design and high-capacity components, the Thunder Max ensures consistent and powerful airflow to maintain a comfortable working environment, boosting productivity even in the harshest conditions.

                </p>


              </div>

            </section>

            <div className=" h-full  gap-5 flex flex-col md:flex-row md:pb-0  md:p-5  mt-5  mt-0 m-4">

              <div className=" w-full md:p-7 md:pt-0   rounded-xl">
                <div className="flex items-center justify-center h-full">

                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">

                    <div className="inline-flex items-center justify-center w-full mx-auto  mt-0 my-7 md:mb-0">
                      <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
                      <h2 className="absolute px-2 md:px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  text-center text-[20px]  md:text-2xl text-1xl capitalize font-semibold font-sans">
                        Key Features 

                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className=" py-3  list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">
              {Benefits.map((item, index) => (
                <li key={index} className="font-sans">
                  <span className="font-semibold">{item.title}</span> {item.description}
                </li>
              ))}
            </ul>




            <div className=" h-full  gap-5 flex flex-col md:flex-row md:pb-0  md:p-5  mt-5  mt-0 m-4">
              <div className=" w-full md:p-7 md:pt-0   rounded-xl">
                <div className="flex items-center justify-center h-full">

                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">

                    <div className="inline-flex items-center justify-center w-full mx-auto  mt-0 my-7 md:mb-0">
                      <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
                      <h2 className="absolute px-2 md:px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  text-center text-[20px]  md:text-2xl text-1xl capitalize font-semibold font-sans">
                        Technical Specifications 

                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <ul className=" py-3  list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">
              {Technical.map((item, index) => (
                <li key={index} className="font-sans">
                  <span className="font-semibold">{item.title}</span> {item.description}
                </li>
              ))}
            </ul>
      


  <div className=" justify-center items-center   flex flex-wrap gap-4 mt-8">
                  <Link href="/contact-Us" className=" text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors  ">
                    Request Quote
                  </Link>
                  <a href="tel:8287885885" className=" ">
                    <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors w-full">
                      Call Us Now
                    </button>
                  </a>

                </div>

            <section className=' md:p-5 pb-0 mb-0 flex flex-col-reverse pt-12 md:flex-row '>
 
              <div className="box md:w-8/12 pb-0 py-4 px-4 flex justify-center items-start flex-col">
                <h2 className="w-full text-center md:text-left font-sans text-2xl py-3 md:text-3xl text-sky-700 leading-tight">
                  Thunder : Versatile Cooling for Medium-Scale Industrial & Outdoor Applications

                </h2>

                <p className="text-gray-700  py-4 font-sans  text-justify md:text-left ">
                  The Thunder offers a balanced combination of power and portability, making it an excellent cooling solution for medium-sized industrial units, commercial spaces, and outdoor applications across the Delhi NCR region. Its efficient design provides reliable cooling, contributing to a more comfortable and productive workspace or event space. This model also serves as a practical industrial portable cooler option for areas requiring flexible cooling solutions.
 
                </p>


              </div>

              <div className="flex justify-center items-center mx-auto">
                <div className="w-1/2 md:w-1/2 transition-transform duration-500 group-hover:scale-105 rounded-xl">
                  <img
                    className="w-full h-auto rounded-2xl"
                    decoding="async"
                    alt="Air washer"
                    src=" https://res.cloudinary.com/ddkyx2jhh/image/upload/v1747655000/Cooler_3_xavleu.webp"
                    loading="lazy"
                  />
                </div>
              </div>

            </section>

                   <div className=" h-full  gap-5 flex flex-col md:flex-row md:pb-0  md:p-5  mt-5  mt-0 m-4">
              <div className=" w-full md:p-7 md:pt-0   rounded-xl">
                <div className="flex items-center justify-center h-full">

                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">

                    <div className="inline-flex items-center justify-center w-full mx-auto  mt-0 my-7 md:mb-0">
                      <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
                      <h2 className="absolute px-2 md:px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  text-center text-[20px]  md:text-2xl text-1xl capitalize font-semibold font-sans">
                     Key Features  

                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>


   <ul className=" py-3  list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">
              {Features.map((item, index) => (
                <li key={index} className="font-sans">
                  <span className="font-semibold">{item.title}</span> {item.description}
                </li>
              ))}
            </ul>

           
      
     <div className=" h-full  gap-5 flex flex-col md:flex-row md:pb-0  md:p-5  mt-5  mt-0 m-4">
              <div className=" w-full md:p-7 md:pt-0   rounded-xl">
                <div className="flex items-center justify-center h-full">

                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">

                    <div className="inline-flex items-center justify-center w-full mx-auto  mt-0 my-7 md:mb-0">
                      <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
                      <h2 className="absolute px-2 md:px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  text-center text-[20px]  md:text-2xl text-1xl capitalize font-semibold font-sans">
                    Technical Specifications  

                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>


   <ul className=" py-3  list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">
              {Technical2.map((item, index) => (
                <li key={index} className="font-sans">
                  <span className="font-semibold">{item.title}</span> {item.description}
                </li>
              ))}
            </ul>




                 <div className=" justify-center items-center   flex flex-wrap gap-4 mt-8">
                  <Link href="/contact-Us" className=" text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors  ">
                    Request Quote
                  </Link>
                  <a href="tel:8287885885" className=" ">
                    <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors w-full">
                      Call Us Now
                    </button>
                  </a>

                </div>


<div className="box hidden md:block">
 <div className="  h-full  gap-5 flex flex-col md:flex-row md:pb-0  md:p-5  mt-5  mt-0 m-4">
              <div className=" w-full md:p-7 md:pt-0   rounded-xl">
                <div className="flex items-center justify-center h-full">

                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">

                    <div className="inline-flex items-center justify-center w-full mx-auto  mt-0 my-7 md:mb-0">
                      <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
                      <h2 className="absolute px-2 md:px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  text-center text-[20px]  md:text-2xl text-1xl capitalize font-semibold font-sans">
                   Why Choose Adhunik Powertech for Your Industrial Cooling Needs in Delhi NCR ?
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

</div>

<p className=' md:hidden text-2xl text-center py-5 '>
    Why Choose Adhunik Powertech for Your Industrial Cooling Needs in Delhi NCR ?
</p>
                 




             <ul className=" py-3  list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">
              {Why.map((item, index) => (
                <li key={index} className="font-sans">
                  <span className="font-semibold">{item.title}</span> {item.description}
                </li>
              ))}
            </ul>

                 <div className="row mt-9">
          <div className=" h-full gap-5 flex flex-col md:flex-row  md:p-5 pt-0  mt-0 m-4">

            <div className=" w-full md:p-7 md:pt-0   rounded-xl">
              <div className="flex items-center justify-center h-full">

                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">



<div className="box hidden md:block">
 <div className="  inline-flex items-center justify-center w-full mx-auto  mt-0 my-7 md:mb-0">
                    <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
                    <h2 className="absolute px-2 md:px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  text-center text-[20px]  md:text-2xl text-1xl capitalize font-semibold font-sans">    
                                   Contact Us for Your Industrial Cooling Requirements in Gurugram, Delhi NCR

                    </h2>
                  </div>
</div>
                 
                  <p className=' md:hidden text-2xl text-center py-5 '>
    Why Choose Adhunik Powertech for Your Industrial Cooling Needs in Delhi NCR ?
</p>


                  <p className="font-sans py-3 font-thin text-justify w-full md:text-center" >
                   Ready to experience the Adhunik Powertech difference? Whether you need a heavy-duty cooler for your factory in Gurugram, a reliable cooling solution for your commercial space in Delhi, or a powerful tent cooler for an event in the NCR, our team is here to assist you.
                  </p>

                  <p className=' font-sans text-center w-full py-4'>
                    Adhunik Powertech - Your Partner in Efficient Industrial Cooling for Gurugram, Delhi NCR, and Beyond.
                  </p>

                  <div className="w-full flex justify-center">
                    <a
                      href="tel:8287885885"
                      className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
                      <span className="relative">Contact Us</span>
                    </a>


                    <a
  href="mailto:info@adhunikpowertech.com"
  className="rounded relative overflow-hidden inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white"
>
  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
  <span className="relative">Enquiry Now</span>
</a>




                   
                  </div>


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
