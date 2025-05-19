"use client"
import React, { useState } from 'react';

export default function IndustrialCoolerPage() {
    const [selectedCapacity, setSelectedCapacity] = useState('100');

    const features = [
        "High Cooling Efficiency",
        "Eco-Friendly Operation",
        "Durable Plastic Body",
        "Low Maintenance",
        "Eco-Friendly Operation",
        "6 Month Warranty Coverage (MOTOR & PUMP)"
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

        "100": { current: "₹ 24,000", old: "₹ 28,000", discount: "14%" },
        "190": { current: "₹ 20,000", old: "₹ 24,000", discount: "17%" }
    };

    return (
        <div className="container mx-auto px-4 py-12 mt-24">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
                    Industrial Grade Cooling System
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Product Image */}
                    <div className="w-full lg:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                        <img
                            src="https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg"
                            alt="Industrial cooling system"
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                        
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Heavy-Duty Industrial Air Cooler | Model IC-1400HD
                            </h2>

                            {/* Sliding Effect Buttons */}
                            <div className="relative bg-gray-100 p-1 rounded-full mb-6 flex w-fit">
                                {["100", "190"].map((capacity) => (
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

                            {/* Dynamic Pricing */}
                            <div className="flex items-center gap-4 mb-4 transition-all duration-300">
                                <span className="text-2xl font-bold text-red-600">{pricing[selectedCapacity].current}</span>
                                <span className="text-lg text-gray-500 line-through">{pricing[selectedCapacity].old}</span>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                                    Save {pricing[selectedCapacity].discount}
                                </span>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                <h3 className="text-xl font-semibold text-blue-800 mb-3">Key Features</h3>
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
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex-1 min-w-[200px]">
                                    Request Quote
                                </button>
                                <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors flex-1 min-w-[200px]">
                                    Call Us Now
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Industrial Applications</h3>
                            <p className="text-gray-700">
                                Ideal for factories, warehouses, workshops, and manufacturing plants where
                                reliable cooling is required for worker comfort and equipment protection.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
