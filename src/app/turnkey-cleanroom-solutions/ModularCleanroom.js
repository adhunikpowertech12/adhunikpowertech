"use client";

import { useState, useEffect } from 'react'; // Added useEffect to imports
import {
  Shield, Check, Phone, Mail, MapPin, ChevronDown, 
  ChevronRight, ArrowRight, Settings, Engineering, 
  Construction, Ruler, Zap, Building2, FlaskConical,
  Activity, Wind, Thermometer, Droplets, Gauge,
  MessageSquareQuote, Info, HelpCircle, BadgeCheck,
  Headphones, Layout, DoorOpen, AirVent, Box, Layers, Fan,
  Globe, Users, Award, Briefcase, Star
} from 'lucide-react';
import Link from 'next/link';

export default function ModularCleanroom() {
  const [activeTab, setActiveTab] = useState('engineering');
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);
  // New state to manage the carousel image rotation
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect changing images every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cleanroomImages.length);
    }, 3500); // 3500ms = 3.5 seconds
    return () => clearInterval(timer);
  }, []);
 

  const cleanroomStandards = [
    { class: "ISO Class 5", application: "High-precision sterile manufacturing" },
    { class: "ISO Class 6", application: "Biotech & delicate electronic assembly" },
    { class: "ISO Class 7", application: "Pharmaceutical & medical device packaging" },
    { class: "ISO Class 8", application: "General industrial controlled zones" },
  ];
  // Sample array of cleanroom images for the carousel
const cleanroomImages = [
  "AumovioClean room.webp",
  "cleanroom site.webp",
  "/jobs/cleanroom2.webp", // Replace with your actual image URLs
  "/jobs/cleanroom1.webp",
  "/jobs/cleanroom4.webp"
];

  const expertises = {
    engineering: {
      title: "Engineering Excellence",
      description: "Every successful cleanroom begins with intelligent engineering. Our specialists analyze your production process and regulatory requirements.",
      items: ["Site Assessment", "Airflow Analysis", "Pressure Mapping", "Heat Load Calculation", "Utility Planning", "HVAC Integration"]
    },
    designing: {
      title: "Precision Designing",
      description: "Precision cleanroom design ensures functional workflow and contamination control. We focus on compliance readiness and scalability.",
      items: ["Material Flow", "Personnel Flow", "Space Optimization", "Cross Contamination Prevention", "Future Scalability"]
    },
    manufacturing: {
      title: "Quality Manufacturing",
      description: "Our in-house manufacturing ensures superior quality control. We produce panels, doors, and air showers using high-grade materials.",
      items: ["Wall Partition Panels", "In-Built Riser Panels", "Ceiling Systems", "Air Showers & Pass Boxes", "HEPA Filter Systems"]
    }
  };

  const hvacComponents = [
    { 
      name: "Air Handling Units (AHU)", 
      details: "Custom-designed units with multi-stage filtration to regulate airflow, temperature, and humidity specifically for controlled environments." 
    },
    { 
      name: "Advanced HEPA Filtration", 
      details: "High-Efficiency Particulate Air filters capable of removing 99.97% of particles as small as 0.3 microns to ensure ISO class compliance." 
    },
    { 
      name: "Cooling Coils & Return Air Systems", 
      details: "Precisely engineered heat exchangers and return paths that maintain thermal stability and ensure constant air scrubbing." 
    },
    { 
      name: "Pre & Fine Filter Sections", 
      details: "Initial filtration stages that protect expensive HEPA filters by capturing larger dust particles and pollutants." 
    },
    { 
      name: "Ducting & Diffusers", 
      details: "Leak-proof galvanized or stainless steel ductwork paired with specialized diffusers for laminar or turbulent airflow patterns." 
    },
    { 
      name: "Microprocessor Control Panels", 
      details: "Real-time monitoring and automation systems that adjust pressure, humidity, and temperature via high-precision sensors." 
    }
  ];

  const manufacturingProducts = [
    {
      title: "Cleanroom Wall Panels",
      image: "cleanroom-wallpanels.webp",
      features: ["50–100 mm PUF/Rockwool", "GI / PPGI / SS Finish", "Fire Resistant Construction"]
    },
    {
      title: "Ceiling Systems",
      image: "clean-room-ceiling-panels.webp",
      features: ["Leak-proof Sealing", "Integrated HEPA Housing", "Walkable Structural Strength"]
    },
    {
      title: "Modular Doors & Windows",
      image: "Modular Doors & Windows.webp",
      features: ["Airtight Gasketing", "Automatic / Emergency Exit", "Flush Vision Panels"]
    },
    {
      title: "Air Showers & Pass Boxes",
      image: "dynamic-pass-box-cleanroom.webp",
      features: ["Dynamic/Static Pass Boxes", "Microprocessor Control", "UV Sterilization"]
    }
  ];

  // Added/Verified array data container here to resolve ReferenceError
  const testimonials = [
    {
      quote: "Adhunik Powertech delivered our ISO Class 7 cleanroom on schedule. Their custom HVAC and AHU performance mapping are exceptionally precise.",
      author: "Director of Operations",
      company: "Pharma Manufacturing Hub, Roorkee",
      rating: 5
    },
    {
      quote: "The modular partition wall quality and flush ceiling integrations are flawless. They made our GMP validation process smooth and stress-free.",
      author: "Plant Head",
      company: "Healthcare Solutions, Haridwar",
      rating: 5
    },
    {
      quote: "Their turnkey execution is unmatched. From material flow layouts to air shower commissionings, everything was handled by an expert team.",
      author: "Technical Consultant",
      company: "Medical Devices Unit, Baddi",
      rating: 5
    },
    {
      quote: "Highly impressed with their post-installation service and quick sensor adjustments. They are truly reliable partners for critical industrial environments.",
      author: "Quality Assurance Lead",
      company: "Biotech Lab, Gurugram NCR",
      rating: 5
    }
  ];

{/*const faqs = [
    {
      q: "What ISO classification and cleanroom standards do your systems comply with?",
      a: "Our modular turnkey cleanrooms and HVAC setups are engineered to comply strictly with ISO 14644-1 (Classes 1 through 9), EU GMP (Grades A, B, C, and D), US FDA guidelines, and ASHRAE standards for controlled environments."
    },
    {
      q: "How do your HVAC solutions control pressure differentials and air change rates?",
      a: "We integrate smart terminal HEPA filters, customized Air Handling Units (AHUs), and automated variable air volume (VAV) controls. This maintains precise positive or negative pressure cascades (typically 10-15 Pa between zones) and optimizes air changes per hour (ACPH) based on your classification requirements."
    },
       {
      q: "What cleanroom and HVAC solutions does Adhunik Powertech provide?",
      a: "Adhunik Powertech provides complete cleanroom and HVAC solutions including cleanroom design, AHU systems, HEPA filtration, ducting, ventilation, temperature & humidity control, installation, and validation support for pharmaceutical and healthcare industries guidelines to maintain contamination-controlled pharmaceutical environments."  },
     {
      q: "Are your pharmaceutical cleanroom systems ISO and GMP compliant?",
      a: "Yes, our cleanroom HVAC systems are designed as per ISO 14644, GMP, ASHRAE, and industry-standard guidelines to maintain contamination-controlled pharmaceutical environments."
    },
    {
      q: "Can your systems simultaneously maintain tight temperature and relative humidity (RH) tolerances?",
      a: "Yes. For strict processes like pharmaceutical manufacturing or electronics, our custom panel air conditioners and precision chillers maintain temperatures down to ±1°C and relative humidity levels within ±5% RH continuously."
    },
    {
      q: "What kind of validation and testing documentation do you provide upon handover?",
      a: "We offer comprehensive validation execution following the international lifecycle model. This includes complete Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ) validation documentation to assist your regulatory audit compliance."
    },
    {
      q: "Do you provide post-installation maintenance and room particle validation checks?",
      a: "Absolutely. We provide dedicated AMC (Annual Maintenance Contracts) across North India, which include regular filter integrity testing (PAO/DOP testing), airborne particle count checks, airflow velocity measurements, and 24/7 breakdown technical support."
    },
     {
      q: "What factors affect the cost of a pharmaceutical cleanroom project?",
      a: "The cost depends on cleanroom classification, HVAC capacity, filtration requirements, room size, automation level, validation scope, and environmental control requirements."
    }
  ];*/}

  const clients = [
    { name: "AIS", logo: "/projects/2.webp" },
    { name: "Lotus", logo: "/projects/clients/15.webp" },
    { name: "SD Biosensor", logo: "/projects/clients/51.webp" },
    { name: "AEDI", logo: "/projects/clients/43.webp" },
    { name: "Jushin", logo: "/projects/clients/71.webp" },
    { name: "Aarvy Hospital", logo: "/projects/1.webp" },
    { name: "Sitaram Bhartia", logo: "/projects/clients/13.webp"},
  ];

  const projects = [
    { name: "Abdos Labtech,Roorkee, Uttarakhand", img: "/projects/30.webp" },
    { name: "Lotus Professional Haridwar, Uttrakhand", img: "/projects/32.webp" },
    { name: "Asahi India Glass Ltd (AIS)", img: "AIS.webp" },
    { name: "Johnson & Johnson Baddi, Himachal", img: "/projects/31.webp" },
    { name: "Continental Automotive", img: "continental-manesar-plant.webp" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-32">
      {/* Hero Section */}
      <section className="container mx-auto px-3 md:px-14 mb-16">
        <div className="bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-3xl overflow-hidden shadow-1xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 md:p-16 text-white">
              <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-1 rounded-full text-sm mb-6">
                <Shield className="w-4 h-4" />
                <span>ISO 14644 | GMP</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Clean Room Manufacturers in India | Turnkey Solutions
              </h1>
              <p className="text-lg md:text-xl text-cyan-100 mb-8 font-light">
                Design | Engineering | Manufacturing | Validation <br/>
                <span className="font-semibold text-white">Your Clean Environment, Our Expertise</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/support-form" className="bg-white text-cyan-800 px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-cyan-50 transition">
                  <MessageSquareQuote className="mr-2"/>
                  Request a Free Quote
                </Link>
                <a href="tel:+918287885885" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-white/10 transition">
                  <Phone className="mr-2"/>
                  Call Expert
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative h-full">
              <img src="Cleanroom image.webp" alt="Adhunik Cleanroom Solutions" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4 md:px-14 mb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Trusted HVAC Consultants & Cleanroom Specialists</h2>
          <p className="text-gray-600 text-sm md:text-md leading-relaxed mb-7 w-full font-normal">At Adhunik Powertech, we deliver expert HVAC consulting and high-performance modular cleanroom solutions for industries where precision and compliance are critical. Backed by technical expertise, in-house manufacturing, and turnkey execution, we ensure every system is built for efficiency, reliability, and lasting performance.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ icon: <Wind />, label: "HVAC System Design" }, { icon: <Thermometer />, label: "Cleanroom Engineering" }, { icon: <Droplets />, label: "Environmental Control" }, { icon: <Gauge />, label: "Seamless Project Execution" }].map((feature, i) => (
              <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-cyan-600 flex justify-center mb-2">{feature.icon}</div>
                <p className="text-xs font-semibold text-gray-700 uppercase">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modular Expertise Section */}
      <section className="bg-white py-20 px-4 md:px-14">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold  text-gray-900 text-center mb-12">Our Cleanroom Expertise</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-12">
            {Object.keys(expertises).map((key) => (
              <button key={key} onClick={() => setActiveTab(key)} className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === key ? 'bg-cyan-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{key.charAt(0).toUpperCase() + key.slice(1)}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{expertises[activeTab].title}</h3>
              <p className="text-gray-600 mb-6">{expertises[activeTab].description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertises[activeTab].items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700"><Check className="w-5 h-5 text-cyan-500 mr-2" />{item}</li>
                ))}
              </ul>
            </div>
            
            {/* Modified Image Carousel Container */}
            <div className="bg-gray-200 h-64 md:h-80 rounded-2xl overflow-hidden relative">
              {cleanroomImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Cleanroom Carousel ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Card Manufacturing Section */}
      <section className="py-20 bg-white px-4 md:px-14 border-t border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advanced Manufacturing Capabilities</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-sm md:text-md leading-relaxed mb-7 w-full font-normal">We deliver complete cleanroom solutions backed by advanced manufacturing and technical expertise. Our in-house capabilities include cleanroom wall panels, ceiling panel systems, modular doors & windows, cleanroom equipment, HVAC systems, and flooring solutions—designed to meet industry standards for quality, compliance, durability, and long-term operational efficiency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {manufacturingProducts.map((prod, i) => (
              <div key={i} className="group relative h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img src={prod.image} alt={prod.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{prod.title}</h3>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2">
                    {prod.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center text-white text-xs font-medium bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                        <Check className="w-3 h-3 mr-1" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* HVAC Details */}
          <div className="bg-cyan-900 rounded-3xl overflow-hidden text-white relative shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
              <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 bg-cyan-900/40 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-6">Cleanroom HVAC Systems</h3>
                <p className="text-cyan-100 mb-8 leading-relaxed font-light">Precision HVAC engineering to maintain environment control for ISO compliance.</p>
                <div className="space-y-4">
                  {["Uniform Air Distribution", "Precise Temp & Humidity Control", "Positive/Negative Pressure Management", "Energy Efficient Air Handling"].map((item, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <BadgeCheck className="w-5 h-5 mr-3 text-cyan-400" /> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 md:p-12 bg-black/40 backdrop-blur-md">
                <h4 className="text-xl font-bold mb-6">System Components</h4>
                <div className="grid grid-cols-1 gap-3">
                  {hvacComponents.map((comp, i) => (
                    <div key={i} className="border-b border-white/10">
                      <button 
                        onClick={() => setActiveComponent(activeComponent === i ? null : i)}
                        className="w-full flex justify-between items-center py-3 text-sm text-cyan-50 hover:text-cyan-400 transition-colors group"
                      >
                        <span className={`font-light ${activeComponent === i ? 'text-cyan-400 font-medium' : ''}`}>
                          {comp.name}
                        </span>
                        {activeComponent === i ? (
                          <ChevronDown className="w-4 h-4 text-cyan-400" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                        )}
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeComponent === i ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                        <p className="text-xs text-cyan-200/80 leading-relaxed pl-2 border-l border-cyan-400/30">
                          {comp.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Classification */}
      <section className="py-20 container mx-auto px-4 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Supported Cleanroom Classifications</h2>
            <div className="space-y-4">
              {cleanroomStandards.map((std, i) => (
                <div key={i} className="flex items-center p-4 bg-white rounded-xl border-l-4 border-cyan-600 shadow-sm transition-transform hover:scale-[1.02]">
                  <div className="font-bold text-cyan-600 w-24">{std.class}</div>
                  <div className="text-gray-700 text-sm font-medium">{std.application}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-cyan-800 p-8 rounded-3xl text-white relative overflow-hidden group">
            <Wind className="absolute -right-10 -bottom-10 w-48 h-48 text-white/5" />
            <h3 className="text-xl font-bold mb-6 flex items-center relative z-10"><Activity className="mr-2" /> Specialized HVAC Precision</h3>
            <ul className="space-y-4 relative z-10">
              {["Uniform Air Distribution", "Positive/Negative Pressure", "Air Changes Per Hour (ACH)", "Advanced HEPA Filtration"].map((item, i) => (
                <li key={i} className="flex items-start"><Zap className="w-5 h-5 mr-3 mt-1 text-cyan-400" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white px-4 md:px-14">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Benefits of Our Cleanroom Systems</h2>
            <div className="w-16 h-1 bg-cyan-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Protection from Contamination", desc: "Ensures product integrity and regulatory compliance.", icon: <Shield className="w-6 h-6 text-cyan-600" /> },
              { title: "Safety for End Users", desc: "Controlled environments improve operational safety.", icon: <Activity className="w-6 h-6 text-cyan-600" /> },
              { title: "Energy Efficient Design", desc: "Optimized airflow systems reduce energy consumption.", icon: <Zap className="w-6 h-6 text-cyan-600" /> },
              { title: "Easy Maintenance", desc: "Modular construction simplifies servicing and upgrades.", icon: <Settings className="w-6 h-6 text-cyan-600" /> },
              { title: "Reliable Product Quality", desc: "Stable environmental control improves manufacturing consistency.", icon: <Check className="w-6 h-6 text-cyan-600" /> },
              { title: "Regulatory Compliance", desc: "Helps meet ISO, GMP, and FDA requirements.", icon: <BadgeCheck className="w-6 h-6 text-cyan-600" /> },
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
                <div className="bg-cyan-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{benefit.title}</h3>
                <p className="text-gray-500 text-xs leading-normal">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4 md:px-14">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Pharmaceutical", icon: <FlaskConical className="w-6 h-6" />, desc: "GMP-compliant facilities." },
              { title: "Healthcare", icon: <Activity className="w-6 h-6" />, desc: "OT, ICU & Diagnostics." },
              { title: "Biotechnology", icon: <Building2 className="w-6 h-6" />, desc: "Research environments." },
              { title: "Electronics", icon: <Zap className="w-6 h-6" />, desc: "Precision manufacturing." },
              { title: "Food & Beverage", icon: <Droplets className="w-6 h-6" />, desc: "Hygienic processing." },
              { title: "Chemical", icon: <Settings className="w-6 h-6" />, desc: "Industrial processes." },
            ].map((ind, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition group text-center">
                <div className="text-cyan-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {ind.icon}
                </div>
                <h3 className="text-sm font-bold mb-1">{ind.title}</h3>
                <p className="text-gray-500 text-[10px] leading-tight">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white px-4 md:px-14 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          {/* Full-Length Centered why Choose Adhunik */}
          <div className="text-center w-full mb-12">
            {/* Heading with Decorative Underline */}
            <div className="inline-block w-full mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Why Industry Leaders Trust Adhunik <br className="hidden md:block" /> 
                for Cleanroom Excellence
              </h2>
              <div className="flex justify-center">
                <span className="w-24 h-1 bg-cyan-600 rounded-full"></span>
              </div>
            </div>

            {/* Subtitle Paragraph */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed w-full font-normal max-w-5xl mx-auto">
              With expertise across design, manufacturing, installation, and validation, Adhunik delivers complete cleanroom solutions tailored for precision, compliance, and dependable long-term performance. Explore the key strengths that make us a trusted cleanroom partner.
            </p>
          </div> 

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content: Bullet Points */}
            <div className="space-y-6">
              {[
                {
                  title: "Complete Turnkey Execution",
                  desc: "From concept design and engineering to manufacturing, installation, and validation—everything managed under one expert team."
                },
                {
                  title: "Specialized Cleanroom HVAC Expertise",
                  desc: "Advanced HVAC integration for precise control of airflow, temperature, humidity, and pressure in critical environments."
                },
                {
                  title: "In-House Manufacturing Excellence",
                  desc: "Precision-built modular cleanroom panels, doors, ceilings, and accessories manufactured under strict quality control."
                },
                {
                  title: "Pharma & GMP Compliance Focused",
                  desc: "Cleanroom systems designed to meet ISO 14644, GMP, FDA, and global regulatory standards."
                },
                {
                  title: "Trusted Across North India",
                  desc: "Strong project presence across Gurugram, Delhi NCR, Haridwar, Roorkee, Rudrapur, Baddi, and major pharma hubs."
                },
                {
                  title: "Reliable After-Sales Support",
                  desc: "Long-term service support, maintenance assistance, and system optimization for uninterrupted cleanroom performance."
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="mt-1 bg-cyan-600 rounded-full p-1.5 transition-transform group-hover:scale-110 shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-base mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <Link href="https://www.adhunikpowertech.com/hvac" className="inline-block">
                  <button className="bg-cyan-600 text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Visual Card - Portrait Style & Compact */}
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative lg:max-w-md mx-auto -mt-6 lg:-mt-14 z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-1">Engineering for Excellence.</h3>
                <p className="text-cyan-100 text-lg font-semibold opacity-90">Certified for Safety.</p>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: <Layers className="w-6 h-6" />, label: "Turnkey Mastery", sub: "Concept to Validation Under One Roof" },
                  { icon: <Wind className="w-6 h-6" />, label: "HVAC Precision Control", sub: "Temp • Humidity • Pressure Management" },
                  { icon: <BadgeCheck className="w-6 h-6" />, label: "Pharma Compliance Ready", sub: "Built for GMP & Regulatory Excellence" },
                ].map((card, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 flex items-center space-x-4 text-gray-900 shadow-lg group hover:bg-cyan-50 transition-all duration-300">
                    <div className="bg-cyan-50 p-3 rounded-xl text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm leading-tight mb-1">{card.label}</h4>
                      <p className="text-[11px] text-gray-500 font-medium leading-tight">{card.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-16">
            {[
              { icon: <Award className="w-8 h-8" />, count: "20+", label: "Years of Engineering Excellence" },
              { icon: <Briefcase className="w-8 h-8" />, count: "100+", label: "Projects Completed" },
              { icon: <Settings className="w-8 h-8" />, count: "100%", label: "Customized Turnkey Solutions" },
              { icon: <Headphones className="w-8 h-8" />, count: "24/7", label: "Dedicated Service Support" }
            ].map((stat, i) => (
              <div key={stat.label} className="text-center group">
                <div className="text-cyan-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-cyan-600 mb-1">{stat.count}</p>
                <p className="text-gray-500 text-sm font-medium leading-snug max-w-[180px] mx-auto">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Portfolio Section */}
      <section className="py-20 bg-gray-50 px-4 md:px-14">
        <div className="container mx-auto max-w-7xl">
           <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-900">Discover our Project Portfolio</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Each project reflects our commitment to precision, compliance, and customer satisfaction. From Concept to Completion, see how we bring turnkey projects to life with Innovation and Reliability.
              </p>
              <Link href="/our-projects" className="inline-block mt-4">
                 <button className="bg-cyan-600 text-white px-12 py-4 rounded-full font-bold shadow-lg hover:bg-cyan-700 transition shadow-black-900/20">
                    See All Projects
                 </button>
              </Link>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {projects.map((proj) => (
                <div key={proj.name} className="space-y-3 group">
                   <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
                      <img src={proj.img} alt={proj.name} className="w-full h-full transition-all duration-700" />
                   </div>
                   <p className="text-[12px] font-bold text-cyan-900 text-center leading-tight transition-colors group-hover:text-cyan-600">{proj.name}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
{/* Trusted Clients Section with Marquee Effect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          {/* Heading with Underline */}
          <div className="inline-block mb-12">
            <h2 className="text-3xl font-bold text-cyan-800 mb-3">Our Trusted Clients</h2>
            <div className="flex justify-center">
              <span className="w-16 h-1 bg-cyan-600 rounded-full"></span>
            </div>
          </div>

      

        <div className="flex gap-16 animate-marquee whitespace-nowrap items-center px-4">
            {[...clients, ...clients].map((client, i) => (
                <div key={i} className="flex-shrink-0 w-40 h-24 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="max-w-full max-h-full object-contain" 
                    />
                </div>
            ))}
        </div>
  
      </div>

    {/* Using standard JSX style tag or you can move this to your global CSS */}
    <style jsx>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            display: flex;
            animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
            animation-play-state: paused;
        }
    `}</style>
</section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-gray-50/50 w-full">
        <div className="container mx-auto max-w-4xl px-4">
          
          {/* Sterile Cleanroom Title Layout */}
          <div className="text-center w-full mb-14">
            <h2 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-3 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="flex justify-center">
              <span className="w-16 h-1 bg-cyan-600 rounded-full"></span>
            </div>
          </div>

          {/* Cleanroom Dynamic Accordion List */}
          <div className="space-y-4">
            {[
             {
    q: "What does a turnkey cleanroom solution include?",
    a: "A turnkey cleanroom solution typically covers requirement assessment, site survey, cleanroom design and engineering, modular wall and ceiling systems, HVAC and AHU systems, HEPA filtration, cleanroom equipment, installation, testing, commissioning, and validation support. The exact scope is customised according to the facility, ISO classification, process requirements, and regulatory needs."
  },
  {
    q: "How do I choose the right cleanroom manufacturer in India?",
    a: "When choosing a cleanroom manufacturer in India, consider cleanroom-specific experience, HVAC engineering capabilities, modular manufacturing expertise, project execution, testing and validation support, quality systems, and after-sales service. Adhunik Powertech combines cleanroom engineering with HVAC expertise and turnkey project execution for controlled-environment facilities."
  },
  {
    q: "Which ISO cleanroom classifications does Adhunik Powertech support?",
    a: "Adhunik Powertech designs and executes cleanroom solutions aligned with ISO 14644 requirements, including ISO Class 5, ISO Class 6, ISO Class 7, and ISO Class 8 applications. The appropriate classification is determined by the manufacturing process, product sensitivity, contamination-control requirements, and applicable regulatory standards."
  },
  {
    q: "How does a cleanroom maintain pressure and required air changes?",
    a: "Cleanroom pressure and air changes are controlled through coordinated HVAC design, AHU capacity, supply and return airflow, filtration, room sealing, and pressure-control systems. The required airflow and pressure cascade are determined according to the cleanroom classification, room function, contamination-control strategy, and project specifications."
  },
  {
    q: "Do you provide cleanroom testing, commissioning, and validation support?",
    a: "Yes. Depending on the project scope, cleanroom testing and commissioning may include airborne particle counting, airflow measurement, room pressure differential testing, HEPA filter integrity testing, temperature and humidity checks, recovery testing, and airflow visualisation. Validation and qualification documentation such as IQ, OQ, and PQ can be supported according to the facility's requirements."
  },
  {
    q: "What cleanroom components and systems do you provide?",
    a: "Our turnkey cleanroom solutions can include modular wall panels, ceiling systems, cleanroom doors and windows, AHUs, HVAC systems, HEPA filtration, ducting, air distribution systems, pass boxes, air showers, and environmental monitoring or control systems, depending on the project scope."
  },
  {
    q: "How much does a cleanroom cost in India?",
    a: "The cost of a cleanroom in India depends on factors such as cleanroom area, ISO classification, HVAC capacity, AHU requirements, panel construction, HEPA filtration, cleanroom equipment, existing building conditions, electrical work, and testing or validation requirements. Adhunik Powertech provides project-specific solutions and quotations based on your technical requirements and scope."
  },
  {
    q: "How long does it take to build a cleanroom in India?",
    a: "The timeline for a cleanroom project depends on its size, ISO classification, design complexity, site conditions, HVAC requirements, equipment, material availability, and validation scope. After reviewing your project requirements and site conditions, our team can provide a project-specific execution schedule."
  },
  {
    q: "Can you build a cleanroom inside an existing factory or facility?",
    a: "Yes. Cleanrooms can be designed for both new and existing facilities. For brownfield projects, the solution is developed after assessing the existing building, available space, ceiling height, HVAC infrastructure, utilities, electrical capacity, equipment layout, and production constraints."
  },
  {
    q: "Do you provide cleanroom solutions for pharmaceutical and GMP facilities?",
    a: "Yes. Adhunik Powertech provides cleanroom and HVAC solutions for pharmaceutical and other regulated manufacturing environments. Depending on the application, solutions can include modular cleanrooms, HVAC and AHUs, HEPA filtration, pressure control, controlled personnel and material movement, testing, commissioning, and validation support."
  },
  {
    q: "Do you provide cleanroom projects in Haridwar and Roorkee?",
    a: "Yes. Adhunik Powertech provides cleanroom engineering and turnkey project solutions in Haridwar, Roorkee, and other industrial locations across Uttarakhand and Northern India. Our services can include cleanroom design, modular construction, HVAC, AHUs, HEPA filtration, installation, testing, commissioning, and validation support."
  },
  {
    q: "What industries do you provide cleanroom solutions for?",
    a: "Our cleanroom solutions can be designed for pharmaceutical manufacturing, biotechnology, medical devices, healthcare, laboratories, electronics, food processing, research, and other applications requiring controlled environmental conditions. The cleanroom design is customised according to the specific process and contamination-control requirements."
  },
]
            .map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div 
                  key={i} 
                  className={`border rounded-xl bg-white transition-all duration-300 ${
                    isOpen 
                      ? 'border-cyan-500 shadow-md shadow-cyan-50/50' 
                      : 'border-gray-200/80 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : i)} 
                    className="w-full flex justify-between items-center p-5 md:p-6 text-left transition-colors duration-200 rounded-xl focus:outline-none"
                  >
                    <span className={`font-normal text-sm md:text-base tracking-wide transition-colors duration-200 ${
                      isOpen ? 'text-cyan-600' : 'text-gray-800'
                    }`}>
                      {faq.q}
                    </span>
                    <div className={`p-1 rounded-lg transition-colors duration-200 shrink-0 ml-4 ${
                      isOpen ? 'bg-cyan-50 text-cyan-600' : 'text-gray-400'
                    }`}>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </button>
                  
                  {/* Collapsible Content with elegant border toggle */}
                  <div className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}>
                    <div className="overflow-hidden">
                      <div className="p-6 pt-0 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100/70">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Contact CTA */}
      <section id="quote" className="container mx-auto px-4 md:px-14 mb-20">
        <div className="bg-cyan-600 rounded-3xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Free Cleanroom Consultation</h2>
          <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">Planning a new cleanroom project? Our experts help you design the right contamination-controlled environment.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+918287885885" className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer"><Phone className="w-5 h-5" /><span className="font-bold">+91 8287885885</span></a>
            <a href="mailto:info@adhunikpowertech.com" className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer"><Mail className="w-5 h-5" /><span className="font-semibold">info@adhunikpowertech.com</span></a>
          </div>
          <Link href="/support-form" className="inline-block"><button className="mt-8 bg-white text-cyan-700 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95">Request Quote Today</button></Link>
        </div>
      </section>

      {/* Customer Testimonials Continuous Marquee Slider */}
      <section className="py-20 bg-gray-50 overflow-hidden border-t border-b border-gray-100">
        <div className="container mx-auto max-w-7xl px-4 text-center mb-12">
          <h2 className="text-3xl font-bold text-cyan-900 mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Read reviews from dynamic facility heads and QA managers across our successful turnkey validation projects.</p>
        </div>
        <div className="relative w-full overflow-hidden flex items-center py-4">
          <div className="flex animate-marquee whitespace-nowrap items-center gap-8 px-4">
            {[...testimonials, ...testimonials].map((tst, i) => (
              <div 
                key={i} 
                className="inline-block w-[350px] md:w-[420px] shrink-0 whitespace-normal bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(tst.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm sm:text-baseleading-relaxed mb-6">
                  "{tst.quote}"
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-normal text-gray-900 text-sm md:text-base">{tst.author}</h4>
                  <p className="text-xs text-cyan-600 font-small mt-0.5">{tst.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
