"use client"
import Link from "next/link";



export default function Page() {


  const blogData = [
    {
      id: 1,
      title: "What is an Air Washer?",
      image:
        "",
      link: "/what-is-an-air-washer",
      img: "/awb.png",
    },

    {
      id: 2,
      title: "What is a Ducted Air Cooler?",
      image:
      "",
      link: "/what-is-a-ducted-air-cooler",
      img: "/ac4.webp",
    },
    
    {
      id: 3,
      title: "What is Panel Air Conditioners ?",
      image:
      "",
      link: "/what-is-panel-air-conditioners",
      img: "/pab.png",
    },
  ];

 
  return (
    <>

      <div className="container mt-32 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-7xl mx-auto text-center ">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Blogs</h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400 pb-9">
            Explore thought-provoking insights and stay informed with expert perspectives.
          </p>

          <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.map((blog) => (
              <Link
                key={blog.id}
                className="group border border-cyan-500 relative flex flex-col w-full  bg-cover bg-center rounded-xl hover:shadow-lg transition"

                href={blog.link}
                style={{
                  backgroundImage: `url('${blog.image}')`
                  
                  ,
                }}
              >
                <div className="flex p-4 ">
                  <h3 className="text-4xl text-cyan-800 group-hover:text-gray-500">
                    <span className="font-bold">{blog.title.split(" ")[0]}</span>{" "}
                    {blog.title.split(" ").slice(1).join(" ")}
                  </h3>
                </div>
                <div className="pt-0 p-4 md:p-6 ">

                  <img src={blog.img} alt={blog.title}  className="w-full h-auto max-h-64 sm:max-h-72 lg:max-h-80 object-cover rounded-md" />

                  <div className=" pt-3 inline-flex items-center gap-2 text-sm font-medium  text-gray-800 group-hover:text-gray-500 ">
                    Read More

                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                    </svg>
                  </div>

                </div>
              </Link>
            ))}

          </div>
        </div>
        {/* End Title */}

    <div className="row">
   
    
   
   
    </div>
      </div>
    </>
  );
}
