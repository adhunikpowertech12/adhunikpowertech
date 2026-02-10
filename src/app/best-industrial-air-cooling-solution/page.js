"use client";

import React from "react";
import {
  ShieldCheck,
  Zap,
  Leaf,
  CheckCircle,
  Factory,
  Server,
  TrendingUp,
  DollarSign,
  Thermometer,
  ChevronsRight,
  Users,
  Wind,
  Droplets,
  Settings,
  Layers,
  Activity,
  Check,
  ShieldAlert,
  BarChart3,
  Waves
} from "lucide-react";

export default function AirWasherVsACDetailedBlog() {
  // Key Differentiators Data
  const keyDifferentiators = [
    {
      title: "Massive Energy Efficiency",
      description:
        "Evaporative cooling systems consume up to 80% less power compared to traditional AC by utilizing the natural process of water evaporation instead of energy-heavy compressors.",
      icon: <Zap className="w-8 h-8 text-cyan-600" />,
    },
    {
      title: "100% Fresh Filtered Air",
      description:
        "Unlike ACs that recirculate stale air, air washers constantly pull in fresh ambient air, filter it, and circulate it, significantly improving indoor air quality (IAQ).",
      icon: <Wind className="w-8 h-8 text-cyan-600" />,
    },
    {
      title: "Eco-Friendly Operations",
      description:
        "By using water as the cooling medium and zero chemical refrigerants (CFCs/HFCs), these systems help industries slash their carbon footprint and meet green building standards.",
      icon: <Leaf className="w-8 h-8 text-cyan-600" />,
    },
    {
      title: "Cost-Effective Scalability",
      description:
        "From installation to maintenance, air washers are significantly more economical for large industrial sheds, requiring lower initial investment and minimal spare parts.",
      icon: <DollarSign className="w-8 h-8 text-cyan-600" />,
    },
  ];

  // Technical Features for Adhunik Powertech
  const technicalFeatures = [
    {
      title: "Full SS304 Construction",
      description:
        "Our units feature high-grade stainless steel construction for the sump and internal frame, ensuring unmatched corrosion resistance in harsh industrial environments.",
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    },
    {
      title: "High-Efficiency Filtration",
      description:
        "Multi-stage synthetic filters provide 90% efficiency down to 10 microns, effectively removing industrial dust, pollen, and airborne contaminants.",
      icon: <Layers className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Advanced Fan Technology",
      description:
        "Equipped with SISW/DIDW backward curved or EC fans, delivering powerful airflow ranging from 1,000 to 100,000 CFM based on facility requirements.",
      icon: <Activity className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Optimized Saturation Pads",
      description:
        "Utilizing high-density cellulose evaporation pads that ensure maximum heat transfer and uniform cooling even during extreme 45°C+ Indian summers.",
      icon: <Waves className="w-8 h-8 text-green-600" />,
    },
  ];

  // Industry Myths/Challenges
  const industrialInsights = [
    {
      title: "The Humid Climate Myth",
      description:
        "Modern air washers are custom-engineered with multi-stage cooling to perform efficiently even in moderately humid conditions through proper psychrometric design.",
      icon: <BarChart3 className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Worker Productivity Gap",
      description:
        "High heat stress in factories leads to a 20% drop in productivity. Our air cooling projects create a healthy workspace that boosts employee output and safety.",
      icon: <Users className="w-8 h-8 text-red-600" />,
    },
    {
      title: "The Open-Space Challenge",
      description:
        "Traditional AC fails in large warehouses or loading bays. Air washers thrive in open environments, providing a constant flow of chilled, fresh air.",
      icon: <Factory className="w-8 h-8 text-red-600" />,
    },
  ];

  return (
    <div className="bg-gray-50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* HERO SECTION */}
        <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
          <div className="w-full md:w-6/12">
            <h1 className="text-2xl md:text-4xl font-bold text-cyan-800 mb-4 leading-tight">
              Air Washers vs. Traditional AC: The Future of Sustainable Industrial Cooling
            </h1>
            <p className="text-base text-gray-700 mb-6 text-justify">
              Industrial cooling is no longer just about comfort—it is a critical factor affecting productivity, 
              operational costs, and sustainability. As Indian industries expand, traditional air conditioning 
              is becoming an expensive liability. Discover how <strong>Adhunik Powertech’s</strong> evaporative 
              cooling and air washer systems are helping factories save up to 80% on energy costs while 
              delivering 100% fresh, filtered air.
            </p>

            {/* Key Tags */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-cyan-700" />
                <span className="font-semibold text-cyan-800 text-sm">
                  80% Energy Savings
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-cyan-700" />
                <span className="font-semibold text-cyan-800 text-sm">
                  Sustainable ROI
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                <Droplets className="w-6 h-6 text-cyan-700" />
                <span className="font-semibold text-cyan-800 text-sm">
                  Zero Refrigerants
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start mb-8">
              <a
                href="/product-overview"
                className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-xl flex items-center"
              >
                <ChevronsRight className="w-5 h-5 mr-2" />
                Explore Cooling Solutions
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-6/12">
            <img
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1770705914/evaoprative_air_coolingvs_ac_ewjq1b.webp"
              alt="Industrial evaporative cooling system vs traditional air conditioning setup for factory air cooling solutions by Adhunik Powertech"
              width="1260"
              height="750"
              loading="lazy"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* SECTION: THE PROBLEM */}
        <section className="text-center my-16 py-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
            The Industrial Cooling Crisis: Why Traditional AC is Falling Short
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-base">
            In the harsh Indian summers where temperatures exceed 45°C, traditional AC systems struggle to 
            cool large open industrial spaces. They recirculate stale air, consume massive amounts of electricity, 
            and use chemical refrigerants that increase your carbon footprint. 
            <strong> Evaporative cooling</strong> offers a natural, energy-efficient alternative designed for 
            the scale of modern manufacturing.
          </p>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* CORE BENEFITS SECTION */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
             Why Evaporative Cooling is the Smarter Alternative
            </h2>
            <p className="mt-4 max-w-5xl mx-auto text-gray-600 text-sm">
              Adhunik Powertech specializes in custom-engineered <strong>Air Washer Units</strong> that 
              transform hot ambient air into a refreshing, filtered breeze using up to 80% less power 
              than conventional refrigeration cycles.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyDifferentiators.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-cyan-600 flex flex-col items-start"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* TECHNICAL FEATURES SECTION */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-700">
              Engineering Excellence: The Adhunik Build Quality
            </h2>
            <p className="mt-4 max-w-4xl mx-auto text-gray-600 text-sm">
              Our air washers are built to withstand the rigors of heavy industry, featuring robust 
              materials and precision components that guarantee long-term reliability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalFeatures.map((item, index) => (
              <div
                key={index}
                className="flex flex-row gap-4 p-6 border rounded-xl shadow-sm bg-gray-50 hover:bg-green-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 pt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-green-700 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* INDUSTRY INSIGHTS SECTION */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
              Industrial Insights: Breaking Myths & Improving Output
            </h2>
            <p className="mt-4 max-w-4xl mx-auto text-gray-600 text-sm">
              Partner with a 
              <a 
                href="/air-washer" 
                className="text-cyan-700 font-bold hover:underline px-1"
              >
                Top Evaporative Cooling provider
              </a> 
              to navigate the unique challenges of factory climate control.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {industrialInsights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-8 border-cyan-600"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-cyan-700 to-cyan-900 rounded-xl p-8 text-white shadow-2xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Switch to the Future of Industrial Cooling
            </h2>
            <p className="text-cyan-100 mb-8 text-lg">
              Start your custom air cooling project today. Reduce your energy bills and provide a healthier 
              environment for your workforce with Adhunik Powertech.
            </p>
            <div className="flex justify-center">
              <a
                href="/support-form"
                className="bg-white text-md font-bold text-cyan-800 hover:bg-cyan-100 py-4 px-10 rounded-full transition duration-300"
              >
                Talk to Our Cooling Experts
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}