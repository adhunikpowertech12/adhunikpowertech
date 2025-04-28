"use client"
import Link from "next/link";

export default function Blog() {
  const blogData = [

    {
      id: 1,
      title: "What is an Air Washer ?",

      date: "January  2025",
      image:
        "",
      link: "/what-is-an-air-washer",
      img: "/awb.png",
    },

    {
      id: 2,
      title: "What is a Ducted Air Cooler ?",

      date: "January 2025",
      image:
        "",
      link: "/what-is-a-ducted-air-cooler",
      img: "/ac4.webp",
    },

    {
      id: 3,
      title: "What is Panel Air Conditioners ?",

      date: "February  2025",
      image:
        "",
      link: "/what-is-panel-air-conditioners",
      img: "/pab.png",
    },
    {
      id: 4,
      title: "What is HVAC? Guide for Beginners",

      date: "February 2025",
      image:
        "",
      link: "/what-is-hvac?",
      img: "/WhatisHVAC.webp",
    },

    {
      id: 5,
      title: "How to Choose HVAC Contractor in India ?",

      date: "March 2025",
      image:
        "",
      link: "/10-tips-for-choosing-an-HVAC-contractor-in-india",
      img: "/tips10.webp",
    },
    {
      id: 6,
      title: "Award-Winning Services in the HVAC Industry ",

      date: "March  2025",
      image:
        "",
      link: "/india-business-award-2025",
      img: "/blog/ibaaward2.webp",
    },

    {
      id: 7,
      title: "Understanding HVAC and Finding the Right Contractor in India",


      date: "April  2025",
      image:
        "",
      link: "/HVACRightContractor",
      img: "/UnderstandingHVAC.webp",
    },
    
    {
      id: 8,
      title: "Top HVAC Contractor Across Delhi NCR and India ",


      date: "April  2025",
      image:
        "",
      link: "/top-HVAC-Contractor-Across-Delhi-NCR-and-India",
      img: "/hvac-contractor.webp",
    },


  ];

  return (
    <>
      <div className="container  mt-28 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <div className="max-w-7xl mx-auto text-center ">
          <h1 className="text-2xl py-3 mb-4 font-bold md:text-4xl md:leading-tight text-transparent bg-clip-text bg-gradient-to-r to-[#06b6d4] from-[#0ea5e9] "> Featured Blogs </h1>


          <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.reverse().map((blog) => (
              <Link
                key={blog.id}
                className="group border border-cyan-500 relative flex flex-col w-full  bg-cover bg-center rounded-xl hover:shadow-lg transition"

                href={blog.link}
                style={{
                  backgroundImage: `url('${blog.image}')`

                  ,
                }}
              >

                <div className="pt-0 p-4 md:p-6">
                  <div className="card w-full max-w-sm overflow-hidden rounded-md bg-white">
                    <div className="w-full h-60 flex items-center justify-center bg-gray-100">
                      <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                  </div>



                  <div className=" mt-4  text-start flex flex-col">
                    <h2 className="text-cyan-800 group-hover:text-gray-500 font-semibold  font-sans">

                      {blog.title}
                    </h2>
                    <div className="date text-[14px] mt-1 font-sans text-cyan-700">

                      {blog.date}
                    </div>
                  </div>




                </div>

              </Link>
            ))}

          </div>
        </div>
        {/* End Title */}

       
      </div>
    </>
  )
}
