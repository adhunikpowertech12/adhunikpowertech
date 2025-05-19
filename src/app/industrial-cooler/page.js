import React from 'react';

export default function IndustrialCoolerPage() {
  const features = [
    "Heavy-duty BLDC motor: Highly efficient, saves up to 50% energy consumption",
    "Industrial-grade thermal auto-clean system",
    "Powerful 1400 m3/hr airflow capacity",
    "Reinforced metallic oil collector for extended durability",
    "Industrial touch control panel with motion sensors",
    "High-performance metallic blower wheel",
    "Energy efficient LED work lights",
    "Turbo speed option for peak demand periods",
    "Rugged steel construction with protective coating",
    "Wall-mounted or ceiling-mounted installation options",
    "IP54 rated for dust and moisture resistance",
    "Corrosion-resistant components for harsh environments"
  ];

  const specifications = [
    { name: "Motor Type", value: "Industrial BLDC" },
    { name: "Power Consumption", value: "0.5 kW" },
    { name: "Airflow Capacity", value: "1400 m³/hr" },
    { name: "Noise Level", value: "<65 dB" },
    { name: "Weight", value: "28 kg" },
    { name: "Warranty", value: "3 years on motor, 1 year comprehensive" }
  ];

  return (
    <div className="container mx-auto px-4 py-12  mt-24 ">
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

              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-bold text-red-600">₹14,500.00</span>
                  <span className="text-lg text-gray-500 line-through">₹18,000.00</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    Save 19%
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Specifications</h3>
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
                    Technical Brochure
                  </button>
                </div>
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