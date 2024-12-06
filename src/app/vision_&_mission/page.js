
export default function page() {

  const paragraphs = [
    <> Adhunik Powertech Private Limited envisions a market influenced by the high-standard products, we manufacture. We believe in setting a mark and so consider the present to be very important. Manufacturing goods is not only part of our work but a venture to satisfy our extended customers. The manufacturing process has extensive steps that involve extra focus like - Design, Material Selection, Raw Material, Manufacturing Standards, and QC Process. The entire setup especially involves the work of a team of well-qualified and experienced engineers and technicians who are qualified and capable of giving out excellent results.  Adhunik Powertech Private Limited is built on the cornerstone of customer satisfaction by timely delivery of products and services at the most competitive prices along with high standards, and we look forward to sticking earnestly to our policy in the future. </>
  ];
  const paragraphs2 = [
   <>Adhunik Powertech Private Limited aims at providing the latest cooling technologies with sustainable climate control at the fingertips. Our focus while system designing & selection is to provide energy-efficient & cost-effective cooling solutions with near 'zero' maintenance that is for large industrial, institutional, commercial as well as residential premises. .</>,
    <>As our present mission, we would like to claim ourselves as one of the Heating Ventilation, and Air Conditioning Contractors with considerable experience in the field to provide turnkey solutions for HVAC works to meet international standards</>,
   
  ];

  return (
    <>
    
<div className="row">
<div className="row  pt-36 text-center">
    <p className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Vision & Mission</span> </p>

    </div>


    <section className="pb-24 pt-14 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          {/* Left side images */}
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741205.png"
                alt="about Us image"
              />
            </div>
            <img
              className="sm:ml-0 ml-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1717741215.png"
              alt="about Us image"
            />
          </div>

          {/* Right side content */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex transition-colors duration-500 ease-in-out hover:border-cyan-500 border-2 border-gray-300 rounded-xl px-6  py-6">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Our Vision
                </h2>

           


                <div className=" text-base  leading-relaxed   space-y-4">
      {paragraphs.map((paragraph, index) => (
        <p className="font-sans font-thin  text-justify " key={index}>{paragraph}</p>
      ))}
    </div>
            
              
              </div>

              {/* Stats Section */}
            
            </div>

            {/* Button */}
          
          </div>

          
        </div>
      </div>
    </section>

    <section className="pb-10 relative">
      <div
        className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto  "
      >
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1   ">
          {/* Left Content */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex transition-colors duration-500 ease-in-out hover:border-cyan-500 border-2 border-gray-300 rounded-xl px-6  py-16">
            <div className="w-full flex-col justify-center items-start gap-8 flex ">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex ">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Our Mission
                </h2>

                <div className=" text-base  leading-relaxed  space-y-4">
                  {paragraphs2.map((paragraph, index) => (
                    <p className="font-sans font-thin  text-justify " key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <img
            className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
            src="https://pagedone.io/asset/uploads/1717751272.png"
            alt="about Us image"
          />
        </div>
      </div>
    </section>


</div>

    </>
  )
}
