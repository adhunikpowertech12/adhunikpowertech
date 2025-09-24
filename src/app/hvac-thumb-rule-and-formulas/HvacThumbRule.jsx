"use client";

import {
  ArrowRight,
  Check,
  ShieldCheck,
  Settings,
  VolumeX,
  PanelLeft,
  Thermometer,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import { Home, Utensils, Building, Droplets, Volume2 } from "lucide-react";

import {
  CheckCircle,
  Droplet,
  EyeOff,
  LayoutGrid,
  Users,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HvacThumbRule() {
  // Feature data array
  const features = [
    {
      icon: <PanelLeft className="w-6 h-6" />,
      title: (
        <>
          <Link href="/ducted-air-cooler" className=" text-cyan-700">
            Heat Load Calculation
          </Link>
        </>
      ),
      content:
        "The Starting Point Every successful HVAC system begins with an accurate heat load assessment. We use the fundamental formula: Q=Area (sq.ft)×Heat Load Factor (BTU/hr per sq.ft) For instance, a 500 sq.ft office with a typical heat load factor of 30 BTU/hr per sq.ft would require a cooling capacity of 15,000 BTU/hr, equivalent to 1.25 Tons of Refrigeration (TR). This ensures your system is perfectly sized, preventing energy waste or inadequate cooling.",
    },
    {
      icon: <VolumeX className="w-6 h-6" />,
      title: "CFM Calculation",
      content:
        " Airflow is King Optimizing airflow is crucial for comfort and efficiency. Our engineers precisely calculate Cubic Feet per Minute (CFM) using: CFM=Sensible Heat (BTU/hr)/(1.08×Delta T) A well-sized system, like one handling 12,000 BTU/hr with a 20∘F temperature difference, would require approximately 556 CFM to maintain optimal conditions. We often use the quick rule of thumb: 1 TR ≈ 400 CFM for initial estimations.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Chilled Water Flow Rate",
      content:
        " The Lifeblood of Central Systems For central chilling plants, accurate GPM (Gallons Per Minute) calculation is vital: GPM=BTU/hr/(500×Delta T) For example, a system handling 24,000 BTU/hr, typically with a 10∘F chilled water temperature difference, requires 4.8 GPM, ensuring efficient heat transfer.",
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Chiller Sizing & Cooling Towers",
      content:
        " The Heavy Lifters Sizing your primary cooling equipment correctly is paramount. We calculate Chiller Ton of Refrigeration (TR) as: TR=BTU/hr/12,000 A 60,000 BTU/hr load translates to a 5 TR chiller. For cooling towers, which dissipate the heat from the condenser, we apply a factor: Heat Rejection ≈ 1.25 × Cooling Load. This ensures your cooling tower is adequately sized for the entire system's thermal rejection.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Duct and Pipe Sizing",
      content:
        " The Arteries and Veins Efficient distribution of air and water is critical. We adhere to strict velocity limits (e.g., 1400–1800 FPM for main air ducts; 3–12 ft/s for chilled water pipes) to minimize pressure drops and energy consumption while ensuring uniform delivery.",
    },
  ];
  const features2 = [
    {
      icon: <PanelLeft className="w-6 h-6" />,
      title: (
        <>
          <Link href="/top-HVAC-Contractor-Across-Delhi-NCR-and-India" className=" text-cyan-700">
            Clean Room Classifications & Air Changes Per Hour (ACH)
          </Link>
        </>
      ),
      content: (
        <>
          <ul className=" list-disc">
            <li>
              <span className=" font-bold text-cyan-600">
                Operation Theaters (OT) :{" "}
              </span>
              20–25 ACH
            </li>
            <li>
              <span className=" font-bold text-cyan-600">
                {" "}
                ISO 7 Cleanrooms :{" "}
              </span>{" "}
              60–90 ACH These high ACH rates, combined with sophisticated
              filtration, ensure that airborne contaminants are rapidly flushed
              out, maintaining the required cleanliness levels.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <VolumeX className="w-6 h-6" />,
      title: "HEPA Filter Design",
      content:
        " The Last Line of Defense: High-Efficiency Particulate Air (HEPA) filters are cornerstones of cleanroom HVAC. With an efficiency of ≥99.97% at 0.3μm, these filters remove microscopic particles. We typically estimate that one standard 24'x24' HEPA filter handles around 500 CFM, allowing us to size filtration banks accurately for even the most stringent cleanroom requirements.",
    },

    {
      icon: <Settings className="w-6 h-6" />,
      title: "Room Pressure Differentials",
      content: (
        <>
          <p>
            {" "}
            Controlling Contamination Pathways: Maintaining precise pressure
            gradients is vital to prevent cross-contamination. We design systems
            to ensure
          </p>
          <ul className=" list-disc">
            <li>
              <span className=" font-bold text-cyan-600">
                Positive Pressure :{" "}
              </span>{" "}
              For sterile environments like OTs (+10 to +15 Pa) and ICU/NICUs
              (+5 to +10 Pa) relative to corridors, preventing the ingress of
              unfiltered air.
            </li>
            <li>
              <span className=" font-bold text-cyan-600">
                Negative Pressure :{" "}
              </span>{" "}
              For isolation rooms (-10 to -15 Pa), containing airborne pathogens
              within the space.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Laminar Airflow & Environmental Control",
      content: (
        <>
          <p>
            In critical zones, such as above surgical tables, we implement
            unidirectional (laminar) airflow at velocities like 90±20 ft/min,
            creating a clean "air curtain." Furthermore, precise temperature and
            humidity control are non-negotiable
          </p>
          <ul className=" list-disc">
            <li>
              <span className=" font-bold text-cyan-600"> OTs : </span> 21–24∘C
              with 50–60% RH
            </li>
            <li>
              <span className=" font-bold text-cyan-600">
                Pharma Cleanrooms :{" "}
              </span>{" "}
              20–22∘C with 45–55% RH These parameters are crucial for patient
              safety, product integrity, and preventing microbial growth.
            </li>
          </ul>
        </>
      ),
    },
  ];


  const features3 = [
    {
      icon: <PanelLeft className="w-6 h-6" />,
      title: (
        <>
          <Link href="/top-HVAC-Contractor-in-Delhi-NCR-&-India" className=" text-cyan-700">
            Case Study 1
          </Link>
        </>
      ),
      content: (
        <>
         <p>
            Transforming a Commercial Hub in Gurugram A prominent commercial tower in Gurugram faced escalating energy bills and inconsistent cooling across its vast office spaces. Adhunik Powertech conducted a comprehensive energy audit and implemented a Variable Refrigerant Flow (VRF) system, meticulously designed after calculating precise heat loads for each zone. We optimized the ducting and air distribution, ensuring uniform comfort. The result? A 25% reduction in annual energy consumption for HVAC, significantly lowering operational costs and improving tenant satisfaction, making the building more attractive to high-profile businesses
         </p>
        </>
      ),
    },
    {
      icon: <VolumeX className="w-6 h-6" />,
      title: " Case Study 2 ",
      content:
          <>
         <p>
          Ensuring Sterile Environments in a Delhi Hospital For a leading multi-specialty hospital in Delhi, maintaining stringent air quality in their new surgical wing was critical. Adhunik Powertech designed and installed a specialized HVAC system incorporating multiple stages of filtration, including HEPA filters for all Operation Theaters. We implemented precise positive pressure regimes in OTs (+12 Pa) relative to corridors, ensuring no contaminated air could enter. Our rigorous validation processes, including particle counts and airflow velocity tests, confirmed compliance with ISO 7 standards, directly contributing to reduced post-operative infection rates and enhanced patient safety.

         </p>
        </>,
    },

    {
      icon: <Settings className="w-6 h-6" />,
      title: "Case Study 3",
      content: (
        <>
          <p>
        Precision Control for a Pharmaceutical Plant in Hyderabad A pharmaceutical manufacturing facility in Hyderabad required an HVAC system capable of maintaining extremely tight temperature and humidity controls for its API (Active Pharmaceutical Ingredient) production area, specifically a low-humidity cleanroom. Adhunik Powertech engineered a solution that maintained temperatures at a consistent 21∘C and relative humidity at 48% with a deviation of less than ±2%, using specialized desiccant dehumidifiers and high-precision controls. This enabled the client to ensure product stability and meet strict international pharmaceutical regulations (GMP), safeguarding their product quality and market access.

          </p>
        
        </>
      ),
    },
    
  ];

  const integrationExamples = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: (
        <>
          <Link
            href="https://adhunikdecodive.com/modular-kitchen-designs"
            className=" text-orange-700 hover:text-orange-500"
          >
            Modular Kitchen Integration
          </Link>
        </>
      ),
      content:
        "When conceptualizing a modern modular kitchen, the strategic placement of high-efficiency exhaust systems, discreet air conditioning units, and subtle ventilation grilles must be meticulously considered alongside the integration of appliances, the flow of counter space, and the overall cabinet layouts. A truly well-designed kitchen is not merely visually stunning; it is also a comfortable, healthy, and highly functional space for culinary activities and social gatherings. The right ventilation can even extend the life of your kitchen finishes by managing humidity and grease effectively.",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: (
        <>
          <Link
            href="https://adhunikdecodive.com/domestic-furniture"
            className=" text-orange-700 hover:text-orange-500"
          >
            {" "}
            Residential Spaces
          </Link>
        </>
      ),
      content:
        "In crafting truly sleek interior designs for an entire home, the thoughtful selection and integration of HVAC solutions can dramatically impact the overall aesthetic and perceived luxury. Our team at Adhunik Powertech is committed to providing units that are not only high-performing but also compact, aesthetically pleasing, or specifically engineered to be easily concealed.",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: (
        <>
          <Link
            href="https://adhunikdecodive.com/commercial-furniture"
            className=" text-orange-700 hover:text-orange-500"
          >
            {" "}
            Commercial Applications
          </Link>
        </>
      ),
      content:
        "For sophisticated commercial spaces, our design philosophy empowers interior designers to unleash their full creative potential, knowing that comfort systems will complement their vision rather than compromise it. We work with architects and designers to ensure that our systems fit perfectly within the structural and aesthetic parameters.",
    },
  ];

  // Design considerations
  const designConsiderations = [
    {
      icon: <PanelLeft className="w-6 h-6" />,
      title: "Custom False Ceiling Designs",
      content:
        "Ingeniously designed false ceilings can artfully conceal ducting, intricate wiring, sophisticated lighting systems, and even discrete HVAC grilles. This creates a clean, uninterrupted overhead aesthetic while simultaneously facilitating optimal and even air distribution throughout the room.",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Strategic Material Selection",
      content:
        "Interior designers play a crucial role in selecting materials that enhance the efficiency of climate control systems. Materials with good insulation properties, or those that interact favorably with air circulation, can further enhance comfort and energy efficiency.",
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Acoustic Considerations",
      content:
        "A good interior designer considers the acoustic properties of materials and layouts to minimize any potential noise from mechanical systems, ensuring a truly serene environment.",
    },
  ];

  const valuePropositions = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Optimal Temperature",
      description: "Precision climate control tailored to your space",
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Pristine Air Quality",
      description: "Advanced filtration for healthier indoor environments",
    },
    {
      icon: <EyeOff className="w-6 h-6" />,
      title: "Discreet Integration",
      description: "Technology that disappears into your design",
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: "Seamless Harmony",
      description: "Systems that complement your aesthetic vision",
    },
  ];

  const consultationOptions = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Residential Consultation",
      description: "Tailored solutions for luxury homes and apartments",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Commercial Planning",
      description: "Integrated systems for sophisticated workspaces",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Designer Partnerships",
      description: "Collaborate with our network of interior specialists",
    },
  ];

  return (
    <>
      <div className="bg-white  ">
        <section className="   mt-28 md:mt-0 px-4 relative h-auto md:h-screen min-h-[800px] flex items-center justify-center bg-gradient-to-br from-cyan-50/20 to-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-cyan-400/5 rounded-full filter blur-[100px] "></div>
            <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-orange-400/5 rounded-full filter blur-[80px] "></div>
          </div>

          <div className="relative z-10  max-w-7xl mx-auto text-center ">
            <section className=" md:p-5 pb-0 mb-0 flex flex-col md:flex-row  ">
              <div className="blog-img mb-6 text-center">
                <div className="flex gap-4 md:gap-9  justify-evenly items-center  flex-col md:flex-row">
                  <div className=" w-full md:w-6/12 h-[70vh] flex justify-center items-center  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <img
                      className="w-full h-full object-center object-contain rounded-3xl"
                      src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1752651101/formula2_nroume.webp"
                      alt="Adhunik Powertech air washer "
                      loading="lazy"
                    />
                  </div>

                  <div className=" w-full md:w-6/12 md:text-center text-left text-gray-800 mb-6 flex justify-center md:items-center flex-col mt-2">
                    <div className="md:text-center text-left     ">
                      <span className="text-sm font-medium  flex justify-center md:justify-start mb-3 pt-6 items-center md:items-center  text-cyan-800">
                        <Sparkles className="w-4 h-4 text-cyan-600 mr-4" />{" "}
                        Innovation
                      </span>

                      <p className="  text-2xl text-center md:text-left md:text-4xl font-bold text-gray-900  mb-2 leading-tight">
                        <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                          <Link
                            href="https://www.adhunikpowertech.com/hvac"
                            className="  "
                          >
                            Unlocking Efficiency and Innovation: Adhunik
                            Powertech's
                          </Link>
                        </span>
                        <br />
                        <span className="font-light text-gray-700">
                          {" "}
                          <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                            <Link
                              href="https://adhunikdecodive.com/"
                              className="  "
                            ></Link>
                          </span>{" "}
                          20 Years of HVAC Excellence
                        </span>
                      </p>
                    </div>
                    <p className=" font-sans text-md text-gray-600 text-justify  md:text-left pt-3   ">
                      For two decades, Adhunik Powertech has been at the
                      forefront of the Heating, Ventilation, and Air
                      Conditioning (HVAC) industry, consistently delivering
                      cutting-edge solutions and setting benchmarks for
                      excellence. With 20 years of extensive experience, we've
                      not only witnessed the evolution of HVAC technology but
                      have actively contributed to shaping its future. <br />{" "}
                      <br />
                      At Adhunik Powertech, we believe in empowering our clients
                      and the broader industry with knowledge. That's why we're
                      sharing some invaluable insights and the fundamental
                      principles that guide our projects, reflecting our deep
                      understanding and commitment to innovation in HVAC.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* ===== Architectural Divider ===== */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent max-w-7xl mx-auto mb-20">
          <h1 className="absolute left-1/2 -translate-x-1/2 -top-3.5 bg-white px-4 text-gray-500 text-md text-center md:text-3xl">
            The Core of HVAC
          </h1>
        </div>

        {/* ===== Premium Content Section ===== */}
        <section className="relative max-w-7xl mx-auto px-6 mb-12 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-16">
            {/* Left sticky column */}
            <div className="lg:sticky lg:top-32 h-fit">
              <h2 className=" text-center md:text-left text-md md:text-2xl font-bold text-gray-900 mb-6">
                The Core of HVAC : Essential
                <br />
                <span className="text-cyan-600">
                  Thumb Rules & Formulas We Live By
                </span>
              </h2>
              <p className="text-gray-600 text-justify text-sm mb-8">
                Effective HVAC design isn't just about installing equipment;
                it's about meticulous planning, precise calculations, and an
                in-depth understanding of environmental factors. Here are some
                critical thumb rules and formulas that form the bedrock of our
                HVAC solutions :
              </p>
              <div className="hidden lg:block">
                <img
                  src="https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg"
                  alt="HVAC integrated into modern architecture"
                  className="rounded-xl shadow-xl border border-gray-100 w-full"
                />
              </div>
            </div>

            {/* Right content column */}
            <div className="lg:col-span-2 space-y-4 md:space-y-20">
              {/* Intro paragraph */}

              {/* Mapped features */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-8 lg:p-10">
                    <div className="flex justify-center items-center flex-col md:flex-row md:items-start gap-8">
                      <div className="bg-orange-100/10 border border-orange-100/30 p-4 rounded-xl text-orange-600 flex-shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className=" text-lg md:text-2xl text-center md:text-left font-bold text-gray-900 mb-4">
                          {feature.title}
                        </h3>
                        <div className="text-gray-600 text-sm md:text-md leading-relaxed">
                          {feature.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Premium Content Section ===== */}
        <section className="relative max-w-7xl mx-auto px-6 mb-12 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-16">
            <div className="lg:col-span-2 space-y-4 md:space-y-20">
              {/* Mapped features */}
              {features2.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-8 lg:p-10">
                    <div className="flex justify-center items-center flex-col md:flex-row md:items-start gap-8">
                      <div className="bg-orange-100/10 border border-orange-100/30 p-4 rounded-xl text-orange-600 flex-shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className=" text-lg md:text-2xl text-center md:text-left font-bold text-gray-900 mb-4">
                          {feature.title}
                        </h3>
                        <div className="text-gray-600 text-sm md:text-md leading-relaxed">
                          {feature.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Left sticky column */}
            <div className="lg:sticky lg:top-32 h-fit">
              <h2 className=" text-center md:text-left text-md md:text-2xl font-bold text-gray-900 mb-6">
               Real-Life Impact: 

                <br />
                <span className="text-cyan-600">Critical Environments</span>
              </h2>
              <p className="text-gray-600 text-justify text-sm mb-8">
                Adhunik Powertech's expertise extends far beyond standard
                comfort cooling. For two decades, we've specialized in designing
                and implementing HVAC systems for highly sensitive environments
                like hospitals and pharmaceutical clean rooms, where precision,
                contamination control, and strict regulatory compliance are
                non-negotiable.
                <br />
                Here’s a glimpse into our specialized knowledge for these
                critical applications:
              </p>
              <div className="hidden lg:block">
                <img
                  src="https://images.pexels.com/photos/31462219/pexels-photo-31462219.jpeg"
                  alt="HVAC integrated into modern architecture"
                  className="rounded-xl shadow-xl border border-gray-100 w-full"
                />
              </div>
            </div>

            {/* Right content column */}
          </div>
        </section>


        <section className="relative max-w-7xl mx-auto px-6 mb-12 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-16">
         
            {/* Left sticky column */}
            <div className="lg:sticky lg:top-32 h-fit">
              <h2 className=" text-center md:text-left text-md md:text-2xl font-bold text-gray-900 mb-6">
                Beyond Comfort: HVAC in
                <br />
                <span className="text-cyan-600">Critical Environments</span>
              </h2>
              <p className="text-gray-600 text-justify text-sm mb-8">
                Adhunik Powertech's expertise extends far beyond standard
                comfort cooling. For two decades, we've specialized in designing
                and implementing HVAC systems for highly sensitive environments
                like hospitals and pharmaceutical clean rooms, where precision,
                contamination control, and strict regulatory compliance are
                non-negotiable.
                <br />
                Here’s a glimpse into our specialized knowledge for these
                critical applications:
              </p>
              <div className="hidden lg:block">
                <img
                  src="https://images.pexels.com/photos/32032996/pexels-photo-32032996.jpeg"
                  alt="HVAC integrated into modern architecture"
                  className="rounded-xl shadow-xl border border-gray-100 w-full"
                />
              </div>
            </div>

            {/* Right content column */}
               <div className="lg:col-span-2 space-y-4 md:space-y-20">
              {/* Mapped features */}
              {features3.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-8 lg:p-10">
                    <div className="flex justify-center items-center flex-col md:flex-row md:items-start gap-8">
                      <div className="bg-orange-100/10 border border-orange-100/30 p-4 rounded-xl text-orange-600 flex-shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className=" text-lg md:text-2xl text-center md:text-left font-bold text-gray-900 mb-4">
                          {feature.title}
                        </h3>
                        <div className="text-gray-600 text-sm md:text-md leading-relaxed">
                          {feature.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ===== Premium Content Section ===== */}
       

        <div className="bg-white">
          {/* ===== Hero Section ===== */}
          <section className="relative     px-6 max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
               Two Decades of Trust 
 <br />
                <span className="text-cyan-600">
              and Innovation
                </span>
              </h2>

              <div className="max-w-4xl text-justify  mx-auto text-sm text-gray-600 space-y-6">
                <p>
                 Our 20-year journey has been defined by a relentless pursuit of excellence and a commitment to understanding the unique needs of every project. From optimizing energy consumption in commercial buildings to designing hyper-sterile environments for healthcare, Adhunik Powertech leverages its extensive experience, cutting-edge technology, and a deep well of technical knowledge to deliver superior HVAC solutions.

                </p>
                <p>
                    We don't just build systems; we build partnerships, ensuring that our clients benefit from enhanced operational efficiency, reduced running costs, and environments that are perfectly tailored to their purpose. Our legacy is built on the tangible impact we make on the organizations we work with, helping them unlock their true potential and stay ahead in the ever-evolving digital and industrial landscape.

                </p>
              </div>
            </div>

            {/* Integration Examples */}
         

            {/* Full-width content block */}
        

            {/* Design Considerations Section */}
         
          </section>
        </div>

        {/* ===== Premium Content Section ===== */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-800   p-8 text-white shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="  text-xl md:text-3xl font-bold mb-4">Get Expert Advice for Your Cooling Needs</h2>
                <p className="text-cyan-100 mb-8 text-sm md:text-lg">
              Ready to experience the Adhunik Powertech difference? Contact us today to discuss your next HVAC challenge, and let our two decades of expertise work for you.

                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="tel:8287885985"
                    className="bg-white text-sm md:text-md font-bold text-cyan-800 hover:bg-cyan-100  py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact HVAC Expert
                  </a>
                  <Link
                    href="/support-form"
                    className="bg-cyan-900 text-sm md:text-md hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center border border-cyan-700"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Enquiry Now
                  </Link>
                </div>
              </div>
            </section>

        


      </div>
    </>
  );
}
