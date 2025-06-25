
'use client';

import {
  ArrowRight,
  Check,
  ShieldCheck,
  Settings,
  VolumeX,
  PanelLeft,
  Thermometer,
  ChevronRight,
  Sparkles
} from 'lucide-react';


import {

  Home,
  Utensils,
  Building,
  Droplets,
  Volume2,

} from 'lucide-react';

import {

  CheckCircle,

  Droplet,
  EyeOff,
  LayoutGrid,
  Users,

  Briefcase
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LuxuryDesign() {
  // Feature data array
  const features = [
    {
      icon: <PanelLeft className="w-6 h-6" />,
      title: "Concealed Ducting and Grilles",
      content: "The days of exposed, industrial-looking ducts are largely behind us for residential and high-end commercial applications. Modern design prioritizes expertly planned ductwork that is entirely hidden within walls, ceilings, or even floors. Only the subtle, architecturally complementary grilles are visible, blending harmoniously with the surrounding surfaces. Our solutions at Adhunik Powertech are meticulously planned to ensure maximum airflow efficiency while respecting and enhancing your chosen design aesthetic. This also includes the use of linear diffusers or slot diffusers that virtually disappear into the ceiling or wall lines."
    },
    {
      icon: <VolumeX className="w-6 h-6" />,
      title: "Whisper-Quiet Operation",
      content: "Noise pollution is a significant factor in perceived comfort. Advanced fan technologies, vibration isolation systems, and sound-dampening materials mean that contemporary cooling, heating, and ventilation systems operate almost silently. This preserves the tranquility and peaceful ambiance of your living or working space, allowing conversations, concentration, or relaxation to flourish undisturbed."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Smart Zoning and Individual Control",
      content: "The concept of heating or cooling an entire building uniformly is becoming obsolete. Smart zoning capabilities allow you to divide your space into multiple, independently controllable climate zones. This means you can precisely regulate the temperature in individual rooms or specific areas, optimizing energy use by not conditioning unoccupied spaces, and ensuring personalized comfort exactly where and when it's needed. This level of control enhances both comfort and energy efficiency."
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Compact and Customizable Units",
      content: "Modern HVAC units, particularly indoor components, are designed to be more compact and versatile. This allows for their strategic placement within tighter spaces, such as utility closets, bulkheads, or even integrated into custom cabinetry, further reducing their visual impact. Some units even offer customizable fascias or covers to match interior finishes."
    }
  ];

  const integrationExamples = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Modular Kitchen Integration",
      content: "When conceptualizing a modern modular kitchen, the strategic placement of high-efficiency exhaust systems, discreet air conditioning units, and subtle ventilation grilles must be meticulously considered alongside the integration of appliances, the flow of counter space, and the overall cabinet layouts. A truly well-designed kitchen is not merely visually stunning; it is also a comfortable, healthy, and highly functional space for culinary activities and social gatherings. The right ventilation can even extend the life of your kitchen finishes by managing humidity and grease effectively."
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Residential Spaces",
      content: "In crafting truly sleek interior designs for an entire home, the thoughtful selection and integration of HVAC solutions can dramatically impact the overall aesthetic and perceived luxury. Our team at Adhunik Powertech is committed to providing units that are not only high-performing but also compact, aesthetically pleasing, or specifically engineered to be easily concealed."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Commercial Applications",
      content: "For sophisticated commercial spaces, our design philosophy empowers interior designers to unleash their full creative potential, knowing that comfort systems will complement their vision rather than compromise it. We work with architects and designers to ensure that our systems fit perfectly within the structural and aesthetic parameters."
    }
  ];

  // Design considerations
  const designConsiderations = [
    {
      icon: <PanelLeft className="w-6 h-6" />,
      title: "Custom False Ceiling Designs",
      content: "Ingeniously designed false ceilings can artfully conceal ducting, intricate wiring, sophisticated lighting systems, and even discrete HVAC grilles. This creates a clean, uninterrupted overhead aesthetic while simultaneously facilitating optimal and even air distribution throughout the room."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Strategic Material Selection",
      content: "Interior designers play a crucial role in selecting materials that enhance the efficiency of climate control systems. Materials with good insulation properties, or those that interact favorably with air circulation, can further enhance comfort and energy efficiency."
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Acoustic Considerations",
      content: "A good interior designer considers the acoustic properties of materials and layouts to minimize any potential noise from mechanical systems, ensuring a truly serene environment."
    }
  ];

  const valuePropositions = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Optimal Temperature",
      description: "Precision climate control tailored to your space"
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Pristine Air Quality",
      description: "Advanced filtration for healthier indoor environments"
    },
    {
      icon: <EyeOff className="w-6 h-6" />,
      title: "Discreet Integration",
      description: "Technology that disappears into your design"
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: "Seamless Harmony",
      description: "Systems that complement your aesthetic vision"
    }
  ];

  const consultationOptions = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Residential Consultation",
      description: "Tailored solutions for luxury homes and apartments"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Commercial Planning",
      description: "Integrated systems for sophisticated workspaces"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Designer Partnerships",
      description: "Collaborate with our network of interior specialists"
    }
  ];

  return (
    <>
      <div className="bg-white  ">
        {/* ===== Luxury Hero Section ===== */}
        <section className="   mt-28 md:mt-0 px-4 relative h-auto md:h-screen min-h-[800px] flex items-center justify-center bg-gradient-to-br from-cyan-50/20 to-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-cyan-400/5 rounded-full filter blur-[100px] "></div>
            <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-orange-400/5 rounded-full filter blur-[80px] "></div>
          </div>

          <div className="relative z-10  max-w-7xl mx-auto text-center ">

            <section className=' md:p-5 pb-0 mb-0 flex flex-col md:flex-row  '>
              <div className="blog-img mb-6 text-center">
                <div className="flex gap-4 md:gap-9  justify-evenly items-center  flex-col md:flex-row">
                  <div className=" w-full md:w-6/12 flex justify-center items-center  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">


                    <img
                      className="w-full h-full object-center object-cover rounded-3xl"
                      src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750830723/2_fvctyi.webp"
                      alt="Adhunik Powertech air washer "

                      loading="lazy"
                    />


                  </div>

                  <div className=" w-full md:w-6/12 md:text-center text-left text-gray-800 mb-6 flex justify-center md:items-center flex-col mt-2">
                    <div className="md:text-center text-left     ">


                      <span className="text-sm font-medium  flex justify-start mb-3 pt-6 items-center  text-cyan-800">
                      <Sparkles className="w-4 h-4 text-cyan-600 mr-4" /> Architectural Climate Systems</span>


                      <p className="text-4xl text-left md:text-4xl font-bold text-gray-900  mb-2 leading-tight">
                        <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                          How Smart HVAC
                        </span><br />
                        <span className="font-light text-gray-700">   <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                          Design Integrates
                        </span> Seamlessly with Modern Interior Aesthetics
                        </span>
                      </p>
                    </div>
                    <p className=" font-sans text-gray-600 text-justify  md:text-left pt-3   ">


                      In today's fast-paced world, the concept of a truly comfortable and functional space has evolved far beyond mere aesthetics. While a beautifully designed interior can undoubtedly inspire and delight, its true potential is only unlocked when it's seamlessly integrated with advanced comfort systems. At Adhunik Powertech, we deeply understand that optimal climate control isn't just about maintaining a specific temperature – it's about curating an environment that feels just right, operating with quiet efficiency, and enhancing the overall well-being of its occupants.

                    </p>

                  </div>
                </div>

              </div>
            </section>





          </div>
        </section>

        {/* ===== Architectural Divider ===== */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent max-w-7xl mx-auto mb-20">
          <div className="absolute left-1/2 -translate-x-1/2 -top-3.5 bg-white px-4 text-gray-500 text-3xl">
            Design Integration Philosophy
          </div>
        </div>

        {/* ===== Premium Content Section ===== */}
        <section className="relative max-w-7xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left sticky column */}
            <div className="lg:sticky lg:top-32 h-fit">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Invisible Comfort :<br />
                <span className="text-cyan-600">HVAC as Design Element</span>
              </h2>
              <p className="text-gray-600 text-sm mb-8">
                However, a common challenge arises when the very systems designed to provide this comfort appear to clash with the clean lines, minimalist approaches, and elegant finishes that define modern interior design. This is precisely where the synergy between intelligent HVAC solutions and thoughtful interior aesthetics becomes not just beneficial, but absolutely paramount. The goal is to make the technology disappear, leaving behind only the comfort and beauty.
              </p>
              <div className="hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1738168246881-40f35f8aba0a?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="HVAC integrated into modern architecture"
                  className="rounded-xl shadow-xl border border-gray-100 w-full"
                />
              </div>
            </div>

            {/* Right content column */}
            <div className="lg:col-span-2 space-y-20">
              {/* Intro paragraph */}
              <div className="prose prose-lg text-gray-600">
                <p>
                  Traditional HVAC systems, often characterized by their conspicuous ducts, bulky outdoor units, and sometimes noisy operation, can indeed become an unwelcome visual intrusion in a meticulously designed space. They can disrupt the flow, compromise the aesthetic integrity, and even limit design possibilities. Fortunately, significant advancements in climate control technology have ushered in an era of solutions that are as discreet as they are remarkably effective.
                </p>
                <p>
                  Imagine stepping into a living room where cool, fresh, and perfectly filtered air circulates evenly throughout the space, all without the distracting hum of machinery or the presence of unsightly vents. Picture a serene bedroom where the temperature is precisely regulated to your preference, ensuring a perfect night's sleep, while simultaneously maintaining a minimalist, uncluttered, and tranquil atmosphere. This elevated level of comfort and seamless integration is achievable through several innovative approaches:
                </p>
              </div>

              {/* Mapped features */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-8 lg:p-10">
                    <div className="flex items-start gap-8">
                      <div className="bg-cyan-100/10 border border-cyan-100/30 p-4 rounded-xl text-cyan-600 flex-shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-white">
          {/* ===== Hero Section ===== */}
          <section className="relative     px-6 max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                When HVAC Meets High Design :<br />
                <span className="text-cyan-600">A Partnership for Perfection</span>
              </h1>

              <div className="max-w-4xl mx-auto text-sm text-gray-600 space-y-6">
                <p>
                  The ultimate goal in integrating HVAC with interior design is to have your comfort systems enhance, rather than detract from, your interior design vision. Achieving this harmony necessitates a collaborative approach from the very earliest stages of a project.
                </p>
              </div>
            </div>

            {/* Integration Examples */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {integrationExamples.map((example, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-cyan-300 transition-colors">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mb-6">
                    {example.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{example.title}</h3>
                  <p className="text-gray-600 text-sm ">{example.content}</p>
                </div>
              ))}
            </div>

            {/* Full-width content block */}
            <div className="bg-cyan-900/5 rounded-2xl p-12 border border-cyan-900/10 mb-24">
              <p className="text-md text-gray-700 mb-8">
                Our team at Adhunik Powertech is committed to providing units that are not only high-performing but also compact, aesthetically pleasing, or specifically engineered to be easily concealed. This design philosophy empowers interior designers to unleash their full creative potential, knowing that comfort systems will complement their vision rather than compromise it. We work with architects and designers to ensure that our systems fit perfectly within the structural and aesthetic parameters.
              </p>
            </div>

            {/* Design Considerations Section */}
            <div className="mb-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                The Indispensable Role of Thoughtful Interior Planning
              </h2>
              <p className="text-md text-gray-600 max-w-4xl mx-auto text-center mb-16">
                This is precisely where the specialized expertise of an accomplished interior design professional becomes not just valuable, but truly indispensable.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {designConsiderations.map((item, index) => (
                  <div key={index} className="group relative overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-8 border border-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mb-6">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </section>
        </div>

        <div className="bg-gradient-to-b from-white to-cyan-50/20">
          {/* ===== Premium Hero Section ===== */}
          <section className="relative    px-6 max-w-7xl mx-auto">
            <div className="absolute inset-0 overflow-hidden -z-10">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/5 rounded-full filter blur-[100px]"></div>
            </div>

            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Experience the <span className="text-cyan-600">Best of Both Worlds</span>
              </h1>

              <div className="max-w-4xl mx-auto text-md text-gray-600 space-y-6">
                <p>
                  At Adhunik Powertech, our core commitment is to provide you with cutting-edge climate control solutions that consistently deliver superior comfort, remarkable efficiency, and long-term reliability. We firmly believe that true comfort is a sophisticated blend of optimal temperature, pristine air quality, and an environment that visually inspires and emotionally uplifts.
                </p>
              </div>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {valuePropositions.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 hover:border-cyan-300 transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Full-width content block */}
            <div className="relative bg-white rounded-2xl overflow-hidden mb-24">
              <div style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/002/401/674/small/black-and-white-small-dots-pattern-free-vector.jpg")` }}
                className="absolute inset-0   opacity-5"></div>
              <div className="relative">
                <p className="text-xl text-gray-700 max-w-4xl mx-auto text-center">
                  To truly explore how these advanced, discreet climate control systems can be seamlessly woven into the fabric of your dream home or commercial venture, we highly recommend consulting with interior design professionals who specialize in creating harmonious, functional, and aesthetically captivating environments .
                </p>
              </div>
            </div>

            {/* Consultation Options */}
            <div className="mb-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
                Begin Your Transformation
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {consultationOptions.map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-8 border border-gray-100"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mb-6">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 mb-6">{item.description}</p>
                      <Link href='https://adhunikdecodive.com/' className="text-cyan-600 font-medium flex items-center gap-2 group-hover:text-cyan-700 transition-colors">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing CTA */}
            <div className="bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-2xl p-12 mb-24 text-white relative overflow-hidden">
              <div style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/002/401/674/small/black-and-white-small-dots-pattern-free-vector.jpg")` }}
                className="absolute inset-0   bg-[length:20px_20px] opacity-10"></div>
              <div className="relative max-w-4xl mx-auto text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-6 text-cyan-300" />
                <h3 className="text-3xl font-bold mb-6">Partner with Experts</h3>
                <p className="text-xl text-cyan-100 mb-8">
                  Partnering with experts like Adhunik Decodive can unlock the full potential of your space, delivering comfort that is felt, not seen.
                </p>
                <Link href='https://adhunikdecodive.com/support-form' className="bg-white w-fit text-cyan-900 px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors mx-auto shadow-xl">
                  Schedule Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>
        </div>


      </div>
    </>
  );
}