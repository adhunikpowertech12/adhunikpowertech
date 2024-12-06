import Link from "next/link";
import React from "react";


export default function Page() {
  const blogData = [
    {
      id: 1,
      title: "What is an Air Washer?",
      image:
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
      link: "/what-is-an-air-washer",
    },
    {
      id: 2,
      title: "How to Maintain Air Quality",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
      link: "#",
    },
    {
      id: 3,
      title: "Benefits of Air Purification",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
      link: "#",
    },
  ];
  
  return (
    <>
     
      <div className="container mt-32 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-5xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Blogs</h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400 pb-9">
        Explore thought-provoking insights and stay informed with expert perspectives.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogData.map((blog) => (
        <Link
          key={blog.id}
          className="group relative flex flex-col w-full min-h-[25rem] bg-cover bg-center rounded-xl hover:shadow-lg transition"
          href={blog.link}
          style={{
            backgroundImage: `url('${blog.image}')`,
          }}
        >
          <div className="flex-auto p-4 md:p-6">
            <h3 className="text-4xl text-white/90 group-hover:text-white">
              <span className="font-bold">{blog.title.split(" ")[0]}</span>{" "}
              {blog.title.split(" ").slice(1).join(" ")}
            </h3>
          </div>
          <div className="pt-0 p-4 md:p-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70">
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

      {/* Grid */}
    
      {/* End Grid */}
    </div>
    </>
  );
}
