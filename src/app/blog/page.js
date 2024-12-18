"use client"
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Fuse from "fuse.js";
import { useRouter } from "next/navigation";


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

  const searchBarRef = useRef(null); // Ref for the search bar

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false); // To toggle input visibility
  const router = useRouter();

  const items = [
    { id: "1", name: "Product A", link: "/products/1" },
    { id: "2", name: "Product B", link: "/products/2" },
    { id: "3", name: "Product C", link: "/products/3" },
    { id: "4", name: "Product D", link: "/products/4" },
  ];

  const fuse = new Fuse(items, {
    keys: ["name"],
    threshold: 0.3,
  });

  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.trim() === "") {
      setResults([]);
    } else {
      const searchResults = fuse.search(input).map((result) => result.item);
      setResults(searchResults);
    }
  };

  const handleSelect = (link) => {
    router.push(link);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setShowSearch(false); // Close the search bar
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
   
    
    <div className="search-bar-container">
      {/* Logo Section */}
      <div className="logo-section">
      <i className="px-2 fa-solid fa-magnifying-glass"  onClick={() => setShowSearch(!showSearch)} ></i>

       
     
      </div>

      {/* Input Section */}
      {showSearch && (
        <div className="search-bar p-5"  ref={searchBarRef}>
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search products..."
            className="search-input"
          />
          {results.length > 0 && (
            <ul className="search-results">
              {results.map((item) => (
                <li
                  key={item.id}
                  className="search-item"
                  onClick={() => handleSelect(item.link)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <style jsx>{`
        .logo-section {
          text-align: center;
          cursor: pointer;
          margin: 20px 0;
        }
        .logo {
          width: 100px;
          height: auto;
        }
        .search-bar {
          position: fixed;
          top: 60px; /* Adjust as needed */
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 10px;
          width: 400px; /* Adjust width as needed */
          z-index: 1000;
        }
        .search-input {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .search-results {
          margin-top: 10px;
          background: white;
          border: 1px solid #ddd;
          border-radius: 4px;
          max-height: 200px;
          overflow-y: auto;
          list-style: none;
          padding: 0;
        }
        .search-item {
          padding: 10px;
          cursor: pointer;
        }
        .search-item:hover {
          background: #f0f0f0;
        }
      `}</style>

    </div>
   
    </div>
      </div>
    </>
  );
}
