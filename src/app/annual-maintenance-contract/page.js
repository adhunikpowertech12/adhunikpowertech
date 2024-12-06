"use client"
import React, { useEffect, useRef, useState } from 'react'

export default function page() {

  const slides = [
    {
      id: 1,
      video: '/videos/1.mp4',
      title: <> Reliable Maintenance Today, <br /> Assured Performance Tomorrow.</>,
      description: '',
      buttonText: <> <div className=' text-left pb-2'>
        Annual Maintenance <br /> Contract
      </div></>,
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Auto-play every 5 seconds

    return () => clearInterval(slideInterval); // Clean up on unmount
  }, [slides.length]);

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

  return (
    <>
      <div className="row ">

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
                className="w-full h-full object-cover"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
              >
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>


              <div className="flex items-center h-full bg-black bg-opacity-30">

                <div className=" text-white  text-center md:text-left  lg:px-16">
                  <p className="  text-3xl md:text-6xl  font-sans md:w-[90%]  mb-2 font-thin">
                    {slide.title}</p>
                  <p className=' text-[14px]   md:w-[70%]'>{slide.description}</p>
                  <button
                    className=" cursor-pointer relative  text-3xl z-10   top-28 mt-4   text-white rounded-lg shadow-lg transition-colors duration-300"

                  >
                    {slide.buttonText}
                    <div className=" font-sans text-sm flex justify-start items-center ">
                      Home <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                      Overview

                    </div>
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


        <section className="annual-sec py-10">
          <div className="container mx-auto px-4">
            {/* Image Cards Row */}
            <div className="flex flex-wrap -mx-4  text-center">

              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="annual-1 justify-center items-center flex flex-col">
                  <img
                    src="amc1.png" // Replace with actual image path
                    alt="Happiness by Smart Savings"

                    className="  w-32 h-auto"
                  />
                  <div className="annual-img-1 mt-4">
                    <h3 className="text-xl font-semibold">Happiness by Smart Savings</h3>
                    <p className="mt-2">
                      With all functional parts charges and labor costs waived, you get
                      extreme savings on your repair bills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="annual-1 justify-center items-center flex flex-col" >
                  <img
                    src="amc2.png" // Replace with actual img path
                    alt="Happiness by Smart Assistance"
                    className=" w-32 h-auto"
                  />

                  <div className="annual-img-1 mt-4">
                    <h3 className="text-xl font-semibold">Happiness by Smart Assistance</h3>
                    <p className="mt-2">
                      We offer a team of trained engineers to take care of your products and genuine spare parts, if replacement is required.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="annual-1 justify-center items-center flex flex-col">
                  <img
                    src="amc3.png" // Replace with actual img path
                    alt="Happiness by Smart Assistance"
                    className=" w-32 h-auto"
                  />
                  <div className="annual-img-1 mt-4">
                    <h3 className="text-xl font-semibold">Happiness by Smart Summon</h3>
                    <p className="mt-2">
                      Just in case there's trouble, all you need to do is call our customer support center number and we will take care of your worries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="mt-10">
              <h2 className="text-4xl text-center font-bold mb-6">Types of Annual Maintenance Contracts</h2>
              <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300 text-left">
                  <tbody>
                    {/* Labour Only */}
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 bg-gray-100" rowSpan="3">Labour Only</th>
                      <td className="py-2 px-4 text-green-600">Service Included</td>
                      <td className="py-2 px-4 text-red-600">Service Excluded</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">General Services</td>
                      <td className="py-2 px-4 text-red-600">All Spare Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Any Unwanted Breakdowns</td>
                      <td className="py-2 px-4"></td>
                    </tr>

                    {/* Non-Comprehensive Annual Maintenance Contract */}
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 bg-gray-100" rowSpan="12">Non-Comprehensive Annual Maintenance Contract</th>
                      <td className="py-2 px-4 text-green-600">Service Included</td>
                      <td className="py-2 px-4 text-red-600">Service Excluded</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">General Servicing (4 Times a Year)</td>
                      <td className="py-2 px-4 text-red-600">Compressor</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Any Unwanted Breakdowns</td>
                      <td className="py-2 px-4 text-red-600">Sheet Metal Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">
                        Refrigerant Gas Charging at the time of Compressor/Sensor/Four Valve Replacement, and for reasons other than attributable to Environmental Corrosion.
                      </td>
                      <td className="py-2 px-4 text-red-600">Plastic Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">
                        The Following spare part shall be replaced/repaired free of cost in case of any breakdown during the Annual Maintenance Service Period: Fan Motor, PCB &amp; Transformer
                      </td>
                      <td className="py-2 px-4 text-red-600">Air Filters</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Relay Maintenance</td>
                      <td className="py-2 px-4 text-red-600">Handset Remote Control</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4" rowSpan="6">Oiling of Spare Parts</td>
                      <td className="py-2 px-4 text-red-600">Condenser &amp; Evaporator Coils</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">Shifting &amp; Re-installation</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">Voltage Stabilizers &amp; Scanners</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">Circuit Breakers</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">Thermocol Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">
                        Refrigerant leakage due to corrosion in environmental conditions is not covered, and any breakdown due to faulty power supply and mishandling by external factors are not covered.
                      </td>
                    </tr>

                    {/* Comprehensive Annual Maintenance Contract */}
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 bg-gray-100" rowSpan="11">Comprehensive Annual Maintenance Contract</th>
                      <td className="py-2 px-4 text-green-600">Service Included</td>
                      <td className="py-2 px-4 text-red-600">Service Excluded</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">General Servicing (4 Times a Year)</td>
                      <td className="py-2 px-4 text-red-600">Plastic Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Priority attendance on Any Unwanted Breakdowns</td>
                      <td className="py-2 px-4 text-red-600">Air Filters</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">
                        Refrigerant Gas Charging at the time of Compressor/Sensor/Four Valve Replacement, and for reasons other than attributable to Environmental Corrosion.
                      </td>
                      <td className="py-2 px-4 text-red-600">Sheet Metal Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">
                        The Following spare part shall be replaced/repaired free of cost in case of any breakdown during the Annual Maintenance Service Period: Compressor, Fan Motor, PCB &amp; Transformer
                      </td>
                      <td className="py-2 px-4 text-red-600">Condenser &amp; Evaporator Coils</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Relay Maintenance</td>
                      <td className="py-2 px-4 text-red-600">Shifting &amp; Re-installation</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Relay Maintenance</td>
                      <td className="py-2 px-4 text-red-600">Handset Remote Control</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4" rowSpan="4">Oiling of Spare Parts</td>
                      <td className="py-2 px-4 text-red-600">Voltage Stabilizers &amp; Scanners</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">Circuit Breakers</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">Thermocol Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">
                        Refrigerant leakage due to corrosion in environmental conditions is not covered, and any breakdown due to faulty power supply and mishandling by external factors are not covered.
                      </td>
                    </tr>

                    {/* Routine Servicing */}
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 bg-gray-100" rowSpan="3">Routine Servicing</th>
                      <td className="py-2 px-4" colSpan="2">Total 4 Services in a Year</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4" colSpan="2">Wet Service: Once a year</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4" colSpan="2">Dry Service: 3 Times a Year</td>
                    </tr>

                    {/* Breakdowns */}
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 bg-gray-100">Breakdowns</th>
                      <td className="py-2 px-4" colSpan="2">Any Breakdown Complaints (Guaranteed resolved within 5-8 Hours)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Benefits List */}
            <div className="mt-10">
              <h4 className="text-xl font-bold mb-4">Our AMC Benefit Involves:</h4>
              <ul className="list-disc ml-5 space-y-2">
                <li>If any breakdown occurs then immediate action will be taken on priority bases.</li>
                <li>On-call 24x7 assistance for any unwanted breakdowns.</li>
                <li>A systematic check of all electrical components, compressors, fans, motors, etc.</li>
                <li>Genuine spare parts.</li>
                <li>Wet &amp; Dry Services.</li>
                <li>Cleaning of air filter &amp; unit.</li>
                <li>Cleaning of cooling coil &amp; condenser coil etc.</li>
                <li>Oiling/Lubrication of the fan motor.</li>
                <li>Checking overall performance and current consumptions.</li>
                <li>Details report of the A/C unit will be made and handed over to the customer for their reference.</li>
                <li>Servicing Air Conditioners Unit will be on a Monthly/Alternate Monthly and Quarterly basis as per customer desires.</li>
                <li>Refrigerant 22, 32, 134a, 407c &amp; 410a Charging.</li>
                <li>Once your product is covered under our AMC Plan, then Om Cooling takes complete care of your product with regular/scheduled checkups.</li>
                <li>Our well-maintained Customer Management System (CMS) and help-line desk service keep all your purchases and complaints recorded systematically and we commit to providing you with the solution without your reminders.</li>
              </ul>

            </div>

            {/* Contact Info */}
            <div className="mt-10">
              <div className="energy-img flex justify-center items-center mb-6">
                <img
                  src="amc4.jpg" // Replace with actual img path
                  alt="Annual Maintenance Contract"

                  className=" w-6/12 h-6/12"
                />
              </div>
              <div className="content-maintanance">
                <p className="text-2xl font-sans font-semibold text-center mb-4 ">AIR CONDITIONING REPAIR &amp; SERVICE</p>
                <p className="mb-4 font-sans font-normal">
                  We revamp all varieties of ACs like <strong>Window AC, Split AC &amp; Central Air Conditioning. </strong>
                  Also, we cover all high-end brands like <strong>Carrier, Hitachi, Daikin, Mitsubishi, Blue star &amp; Voltas,</strong> etc. We cater to commercial as well as Industrial ACs as well. Bulk <strong>repairing jobs</strong> are an
                  everyday task for us. We believe in using only quality spare parts for repairs. Our service coordinator shall provide all the briefings. Subject to your approval, most repairs are carried out immediately
                  and the air conditioner is back up and running better than ever.
                </p>


                <p className=" p-3 text-white bg-gradient-to-r from-[#f74c06] to-[#efb42b] motive font-semibold mb-4">
                  For further information regarding Annual Maintenance Contract (AMC) service, pricing, etc., related queries. Kindly contact our Customer Care Number:
                </p>

                <p className="font-bold mb-2">
                  <a href="tel:8287885885" className="text-blue-600 hover:underline">Customer Contact Number: 8287885885</a>
                </p>

                <p className="font-bold mb-2">
                  <a href="mailto:info@adhunikpowertech.com" className="text-blue-600 hover:underline">Email:  info@adhunikpowertech.com</a>
                </p>
                <p className="font-bold">** All jobs are done subject to the Terms &amp; Conditions of the contract</p>
              </div>
            </div>
          </div>
        </section>
      </div>



    </>
  )
}
