"use client";
import React from "react";
import {
  ShieldCheck,
  Clock,
  Award,
  Users,
  Wrench,
  Zap,
  Leaf,
  CheckCircle,
  Factory,
  Gavel,
  Server,
  Layers,
  TrendingUp,
  DollarSign,
  Thermometer,
  ChevronsRight,
} from "lucide-react";

export default function AdhunikPowertechPanelACBlog() {
  // Credibility & Features
  const credibilityAndFeatures = [
    {
      title: "Authorized Govt. Supplier Status",
      description:
        "An official recognition reflecting adherence to the highest standards of quality, compliance, and reliability required for critical government and PSU projects across India.",
      icon: <Gavel className="w-8 h-8 text-cyan-600" />,
    },
    {
      title: "ZED Bronze Certified Manufacturing",
      description:
        "Commitment to the 'Zero Defect Zero Effect' initiative, ensuring world-class production quality, minimal environmental impact, and superior product longevity.",
      icon: <Award className="w-8 h-8 text-cyan-600" />,
    },
    {
      title: "Sealed Closed-Loop Cooling System",
      description:
        "Guarantees 100% protection for sensitive electronics by isolating internal panel air from external factory dust, moisture, and contamination (IP54/IP55 rated).",
      icon: <Server className="w-8 h-8 text-cyan-600" />,
    },
    {
      title: "Comprehensive Capacity Range",
      description:
        "Solutions tailored for every cabinet size, ranging from 250W for small boxes up to 7000W for massive control desks, ensuring a perfect thermal fit.",
      icon: <Layers className="w-8 h-8 text-cyan-600" />,
    },
  ];

  // ROI Benefits
  const roiBenefits = [
    {
      title: "Guaranteed 100% Uptime",
      description:
        "Eliminating thermal shutdowns and component failure ensures uninterrupted operational continuity for critical industrial processes.",
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Extended Component Lifespan",
      description:
        "Maintaining precise optimal temperatures (25°C to 30°C) significantly extends the life of expensive PLCs, VFDs, and drives.",
      icon: <Clock className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Reduced Power Consumption",
      description:
        "High-efficiency compressors and smart microprocessor-based controllers minimize energy draw and reduce your total cost of ownership (TCO).",
      icon: <Zap className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Minimal Maintenance Requirement",
      description:
        "The filter-less, sealed design drastically reduces the need for frequent cleaning and maintenance, unlike conventional fan-and-filter systems.",
      icon: <Wrench className="w-8 h-8 text-green-600" />,
    },
  ];

  // Differentiator
  const whyAdhunikMatters = [
    {
      title: "Dedicated Panel AC Manufacturer",
      description:
        "As a dedicated manufacturer in India, we ensure superior quality control, customizability, and rapid deployment of certified cooling solutions.",
      icon: <Factory className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Proven PSU & Corporate Trust",
      description:
        "Our portfolio includes successful deployments for government bodies and industry leaders like SAIL, proving our reliability in high-demand environments.",
      icon: <Users className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Eco-Friendly Technology (R-134a)",
      description:
        "We use internationally compliant, eco-friendly refrigerant R-134a, aligning your operations with global environmental standards and ensuring a lower carbon footprint.",
      icon: <Leaf className="w-8 h-8 text-red-600" />,
    },
  ];

  return (
    <div className="bg-gray-50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* HERO SECTION */}
        <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
          <div className="w-full md:w-6/12">
            <h1 className="text-2xl md:text-4xl font-bold text-cyan-800 mb-4 leading-tight">
              India’s Authorised Panel AC Manufacturer & Trusted Government Supplier
            </h1>
            <p className="text-base text-gray-700 mb-6 text-justify">
              Is equipment downtime costing you critical project milestones? In
              high-stakes industrial and governmental infrastructure, the
              smallest component failure can halt large operations. The unsung
              hero is the Panel Air Conditioner. Learn why{" "}
              <strong>Adhunik Powertech Panel AC Manufacturers</strong>, an{" "}
              <strong>Authorized Govt. Supplier</strong> and leading{" "}
              <strong>Panel AC Manufacturer in India</strong>, has become the
              benchmark for reliability, ZED quality, and operational
              continuity.
            </p>

            {/* Key Tags */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-cyan-700" />
                <span className="font-semibold text-cyan-800 text-sm">
                  Authorized Govt. Supplier
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-cyan-700" />
                <span className="font-semibold text-cyan-800 text-sm">
                  Guaranteed 100% Uptime
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                <Thermometer className="w-6 h-6 text-cyan-700" />
                <span className="font-semibold text-cyan-800 text-sm">
                  Closed-Loop Protection
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start mb-8">
              <a
                href="https://www.adhunikpowertech.com/panel-air-conditioners"
                className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-xl flex items-center"
              >
                <ChevronsRight className="w-5 h-5 mr-2" />
                Secure Your Panel Now
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-6/12">
            <img
              src="/panelac.webp"
              alt="Adhunik Powertech Panel AC unit next to a Government/Industrial Control Panel, ZED Certified."
              width="1260"
              height="750"
              loading="lazy"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* SILENT KILLER SECTION */}
        <section className="text-center my-16 py-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
            The Hidden Threat Inside Your Panels: Heat and Dust
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-base">
            The unique variables of the Indian industrial environment—high
            ambient temperatures, dust, and humidity—pose the biggest threats to
            expensive electronics inside control panels. The formula is simple:
            <strong> High Heat = Half Life.</strong> We provides
            a precise, certified defense against this.
          </p>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* CREDIBILITY SECTION */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
              🛡️ The Official Seal of Trust: Built for Government-Grade
              Reliability
            </h2>
            <p className="mt-4 max-w-5xl mx-auto text-gray-600 text-sm">
              Adhunik Powertech is not just a supplier; we are an{" "}
              <strong>Authorized Govt. Supplier</strong> and a dedicated{" "}
              <strong>Panel AC Manufacturer in India</strong>, providing
              certified engineering excellence that guarantees operational
              integrity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {credibilityAndFeatures.map((item, index) => (
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

        {/* ROI SECTION */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-700">
              The ROI: Turning an Expense into a Profit Center
            </h2>
            <p className="mt-4 max-w-4xl mx-auto text-gray-600 text-sm">
              Choosing a high-quality Panel AC is a strategic capital investment
              that reduces operational costs and maximizes your return on
              valuable electronic components.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {roiBenefits.map((item, index) => (
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

        {/* WHY ADHUNIK SECTION */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
              The Adhunik Differentiator: Why We Lead in Indian Manufacturing
            </h2>
            <p className="mt-4 max-w-4xl mx-auto text-gray-600 text-sm">
            When selecting your 
             <a 
                href="/panel-air-conditioners" 
                className="text-cyan-700 font-bold hover:underline"
             >
              Panel AC Manufacturer in India
         </a>
    , choose a partner with proven compliance, government trust, and sustainable technology.
        </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {whyAdhunikMatters.map((item, index) => (
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
             Trusted. Tested. Authorised.
            </h2>
            <p className="text-cyan-100 mb-8 text-lg">
             Experience unmatched reliability with Authorised Panel AC solutions designed to protect your control panels and performance..
            </p>
            <div className="flex justify-center">
              <a
                href="/support-form"
                className="bg-white text-md font-bold text-cyan-800 hover:bg-cyan-100 py-4 px-10 rounded-full transition duration-300 shadow-xl uppercase tracking-wider"
              >
                Request a Free Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
