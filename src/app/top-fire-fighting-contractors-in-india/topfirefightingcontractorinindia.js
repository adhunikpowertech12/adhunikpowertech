'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TopFireFightingContractorInIndia() {
  const router = useRouter();
  const formRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [faqOpen, setFaqOpen] = useState(null);
  const containerRef = useRef(null);

  // Form State & Validation (Matches Electrical Panel Pattern)
  const [formData, setFormData] = useState({
    representative_name: '',
    company_name: '',
    phone_number: '',
    user_email: '',
    facility_category: 'Manufacturing Plant / Industrial Shed',
    built_up_area: '',
    scope_required: 'Full Turnkey Fire EPC (Hydrants + Sprinklers + Pumps)',
    project_location: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const notifye = () =>
    toast.error('Invalid Details. Please check the required fields.');
  const notifys = () =>
    toast.success(
      'Enquiry Sent Successfully! Our fire protection engineering team will connect with you.'
    );

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.representative_name.trim()) {
      newErrors.representative_name = 'Full Name is required';
    }
    if (!formData.company_name.trim()) {
      newErrors.company_name = 'Company Name is required';
    }
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phone_number.trim())) {
      newErrors.phone_number = 'Must be a valid 10-digit number';
    }
    if (!formData.project_location.trim()) {
      newErrors.project_location = 'Project Location is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      notifye();
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_vo5gd7i',
        'template_l7fwlg4',
        formRef.current,
        { publicKey: 'l1ClVd3RFtBBP43zB' }
      );

      notifys();
      setFormData({
        representative_name: '',
        company_name: '',
        phone_number: '',
        user_email: '',
        facility_category: 'Manufacturing Plant / Industrial Shed',
        built_up_area: '',
        scope_required: 'Full Turnkey Fire EPC (Hydrants + Sprinklers + Pumps)',
        project_location: '',
      });
      setTimeout(() => router.push('/'), 4000);
    } catch (err) {
      console.error('Email send failed:', err);
      notifye();
    } finally {
      setIsSubmitting(false);
    }
  };

  const slides = [
    {
      id: 1,
      imgSrc: '/Top%20Firefighting%20Contractors%20India.webp',
      alt: 'Top Fire Fighting Contractors in India - Industrial Fire Protection Infrastructure',
      title: 'TOP FIRE FIGHTING CONTRACTORS IN INDIA',
      description:
        'A comprehensive guide to the leading fire fighting companies and turnkey EPC contractors providing certified life safety infrastructure across North India.',
      buttonText: 'Request Turnkey BOQ Quote',
      buttonLink: '#quote-section',
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentPos = e.clientX;
    const diff = startPos - currentPos;

    if (diff > 50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setIsDragging(false);
    }
    if (diff < -50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);
  const handleDotClick = (index) => setCurrentSlide(index);
  const toggleFaq = (index) => setFaqOpen(faqOpen === index ? null : index);

  const top10Companies = [
    {
      rank: '01',
      name: 'Adhunik FireXpert (Adhunik Powertech)',
      tagline: 'Leading Turnkey Fire EPC Contractor & Life Safety Engineering Firm',
      focus:
        'Turnkey EPC Contracting, Automated Pump Houses, Hydrants, ESFR Sprinklers, In-Panel Tubing & Fire NOC Liaison',
      hq: 'Gurugram / Delhi NCR',
      description:
        'Ranked #1 for turnkey industrial and commercial execution across India. Adhunik FireXpert delivers full engineering, procurement, and construction—from computerized hydraulic pipe modeling to on-site fabrication, heavy automated pump house erection, clean agent gas flooding, and complete Fire NOC clearances under NBC 2016 Part 4.',
      highlight: true,
    },
    {
      rank: '02',
      name: 'Ceasefire Industries Pvt. Ltd.',
      tagline: 'Prominent Fire Safety Equipment & Modular Product Manufacturer',
      focus: 'Portable Fire Extinguishers, Modular Suppression Systems & CQRS',
      hq: 'Noida, Uttar Pradesh',
      description:
        'A nationally recognized brand in modular fire extinguishers and specialized in-panel systems. Known for high product certifications, though primarily focused on equipment manufacturing rather than heavy civil and mechanical pump room EPC site execution.',
      highlight: false,
    },
    {
      rank: '03',
      name: 'Safex Fire Services Ltd.',
      tagline: 'Established Fire Fighting Equipment Manufacturer & Exporter',
      focus: 'Fire Extinguishers, Hydrant Valves, Hose Reels & Fire Safety Accessories',
      hq: 'Mumbai, Maharashtra',
      description:
        'One of India’s oldest fire hardware suppliers, providing BIS-certified fire hydrants, landing valves, and portable extinguishers to commercial and municipal segments nationwide.',
      highlight: false,
    },
    {
      rank: '04',
      name: 'Firepro Systems Private Limited (Panasonic Life Solutions)',
      tagline: 'Infrastructure Protection & Integrated Security Systems',
      focus: 'Integrated BMS Fire Detection, Alarms & Security Automation',
      hq: 'Bengaluru, Karnataka',
      description:
        'Specializes in large enterprise integration, addressing electronic fire detection, voice evacuation, and Building Management System (BMS) security controls for major tech parks.',
      highlight: false,
    },
    {
      rank: '05',
      name: 'Kanex Fire Solutions Limited',
      tagline: 'Industrial Fire Extinguisher & Mist Suppression Provider',
      focus: 'Clean Agent Extinguishers, Water Mist & Automatic Modular Systems',
      hq: 'Mumbai / Gujarat',
      description:
        'A leading equipment brand specializing in ISI-marked ABC dry powder units, clean agent extinguishers, and modular automatic ceiling units for commercial offices and small factories.',
      highlight: false,
    },
    {
      rank: '06',
      name: 'NewAge Fire Protection Industries Pvt. Ltd.',
      tagline: 'Heavy Industrial Rescue & Hydrant Hardware Exporter',
      focus: 'Fire Water Monitors, Foam Equipment, Hydrant Fittings & Fire Tenders',
      hq: 'Surendranagar, Gujarat / Mumbai',
      description:
        'Renowned for manufacturing heavy-duty water monitors, foam proportioners, and specialized fire fighting vehicles catering to petrochemical complexes and oil refineries.',
      highlight: false,
    },
    {
      rank: '07',
      name: 'Usha Fire Safety Equipments Pvt. Ltd.',
      tagline: 'Industrial Safety Products & Corporate Training Provider',
      focus: 'Pre-action Protection Accessories, Portable Extinguishers & EHS Training',
      hq: 'Chennai, Tamil Nadu',
      description:
        'A major fire safety brand in South India, offering fire hardware distribution alongside enterprise fire drill simulations and workforce EHS safety training programs.',
      highlight: false,
    },
    {
      rank: '08',
      name: 'Vimal Fire Controls Pvt. Ltd.',
      tagline: 'Specialized High-Risk Hazard Fire Systems',
      focus: 'High-Expansion Foam, Rim Seal Protection & Gas Flooding',
      hq: 'Mumbai, Maharashtra',
      description:
        'Engineers specialized fire suppression hardware for oil depots, power plants, and chemical refineries with UL-listed and ISI-certified foam and gas systems.',
      highlight: false,
    },
    {
      rank: '09',
      name: 'Safe Pro Fire Services Pvt. Ltd.',
      tagline: 'Commercial Extinguisher & Passive Fire Supplier',
      focus: 'Trolley-Mounted Extinguishers, Fire Doors & Safety Hardware',
      hq: 'New Delhi / NCR',
      description:
        'Provides fire fighting gear, ISI-marked extinguishers, and passive fire safety equipment for schools, residential societies, and commercial retail units across North India.',
      highlight: false,
    },
    {
      rank: '10',
      name: 'Sea Max Fire Engineering Works',
      tagline: 'Fire Alarm & Equipment Maintenance Contractor',
      focus: 'Conventional Alarm Panels, Periodic Refilling & AMC Contracts',
      hq: 'Delhi NCR, India',
      description:
        'Offers fire detection systems, routine safety equipment refilling, and annual maintenance contracts (AMCs) for small-to-mid commercial buildings.',
      highlight: false,
    },
  ];

  const systems = [
    {
      id: 'hydrant',
      navTitle: 'Fire Hydrants & Pump Rooms',
      tag: 'Heavy EPC & Bulk Water Infrastructure',
      heading: 'Turnkey Fire Hydrant Ring Mains & Automated Fire Pump Rooms',
      summary:
        'Engineered to deliver high-volume water supply and continuous pressure head across factories, high-bay warehousing, and commercial campuses.',
      imgSrc:
        'https://res.cloudinary.com/dgx5cntyb/image/upload/v1753529202/inner_hydrant_bvpgcw.webp',
      alt: 'Turnkey fire hydrant system cabinet with hose reel and pump room connections',
      points: [
        'Automated Pump House: Primary electric motor pump + automatic diesel standby backup + jockey pump for steady hydraulic head.',
        'Heavy-Class Piping: IS:1239 / IS:3589 MS/GI pipelines with anti-corrosive multi-layer coal tar wrap for underground ring mains.',
        'Certified Landing Valves: Gunmetal single and double-headed landing valves adhering to IS:5290 with quick-coupling RRL hose cabinets.',
        'Pressure Stabilization: Surge-suppression valves and automatic pressure-switch manifolds to eliminate water hammer risks.',
      ],
      link: '/fire-hydrant-system',
    },
    {
      id: 'sprinkler',
      navTitle: 'Automatic Sprinklers',
      tag: 'NFPA 13 & IS:15105 Compliant',
      heading: 'Automatic Sprinkler Systems & ESFR High-Bay Warehouse Protection',
      summary:
        'Computer-modeled hydraulic pipe networks providing instantaneous localized cooling and suppressing flashovers at early stages of combustion.',
      imgSrc: 'firex/fss2.webp',
      alt: 'Automatic fire sprinkler network installed in industrial manufacturing facility',
      points: [
        'ESFR Warehouse Sprinklers: Early Suppression Fast Response heads designed for high-density warehouse storage, eliminating in-rack lines.',
        'Corporate Interiors: Pendent, upright, and aesthetic flush-concealed quartzoid bulb sprinkler heads.',
        'High/Medium Velocity Deluge (HVWS/MVWS): Rapid-deluge valve systems engineered for outdoor oil-filled power transformer bays.',
        'Alarm Check Valves (ACV): Hydraulically driven mechanical water motor gongs independent of plant electricity supply.',
      ],
      link: '/fire-sprinkler-system',
    },
    {
      id: 'panel',
      navTitle: 'In-Panel Micro-Suppression',
      tag: 'Micro-Environment Protection',
      heading:
        'Direct & Indirect Electrical Panel Fire Suppression Systems (DLP & IHP)',
      summary:
        'Over 75% of industrial factory fires originate in LT/HT electrical panels and MCC switchgear. Micro-tubing suppression stops fires directly at the arc source within 10 seconds.',
      imgSrc:
        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1756803409/fire_tubing_system_Overview_page_s6hn3q.webp',
      alt: 'Direct and indirect fire tubing suppression system for industrial electrical panel',
      points: [
        'Direct Low Pressure (DLP): Flexible polymer tubing bursts at 110°C–120°C at the hottest arc point, spraying clean agent right onto the arc.',
        'Indirect High Pressure (IHP): Pneumatic sensing line activates high-pressure manifold discharge nozzles for multi-tier switchboards.',
        'Clean Agent Media: Zero-residue FK-5-1-12 / FM-200 / CO2 leaves delicate PLCs, busbars, and electronics completely undamaged.',
        '100% Autonomous: Mechanical pressure-driven actuation requires zero external electrical wiring or battery backup.',
      ],
      link: '/fire-tubing-system',
    },
    {
      id: 'cleanagent',
      navTitle: 'Clean Agent Gas Flooding',
      tag: 'NFPA 2001 Total Flooding',
      heading:
        'Clean Agent Gas Flooding (FK-5-1-12 / FM-200 / CO2 Total Flooding)',
      summary:
        'Electrically non-conductive, residue-free total flooding systems designed for server rooms, data centers, SCADA rooms, and control centers.',
      imgSrc:
        'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618657/fire-suppression-system_dawyka.webp',
      alt: 'Clean agent gas flooding system cylinders and control panel',
      points: [
        'FK-5-1-12 Clean Gas: Sustainable fluoroketone agent with zero ozone depletion and high safety margin for occupied spaces.',
        'FM-200 (HFC-227ea): Reliable total flooding chemical gas extinguishing electrical hazards within 10 seconds.',
        'CO2 High Pressure System: Total flooding suppression tailored for unmanned substations, battery banks, and cable vaults.',
        'Room Integrity Integration: Coordinated motorized pressure relief dampers, abort stations, and evacuation warning sirens.',
      ],
      link: '/fire-suppression-system',
    },
    {
      id: 'alarm',
      navTitle: 'Alarms & Smoke Tripping',
      tag: 'Early Warning & BMS Interlock',
      heading:
        'Intelligent Addressable Fire Alarms & BMS HVAC Smoke Interlocking',
      summary:
        'Early-stage detection panels that pinpoint exact hazard zones and automatically interface with HVAC AHUs and dampers to prevent toxic smoke recirculation.',
      imgSrc: 'firex/fire-alarm-system.webp',
      alt: 'Intelligent addressable fire alarm panel and smoke detection setup',
      points: [
        'Addressable Multi-Sensors: Optical smoke and thermal sensors programmed with distinct loop addresses for precise floor/room zoning.',
        'HVAC & AHU Tripping: Native interlocks with building AHUs to instantly shut down ventilation blowers and close motorized fire smoke dampers.',
        'Stairwell Pressurization: Automatic fan actuation to keep emergency escape stairwells clear of toxic smoke.',
        'VESDA Aspirating Detection: Laser air-sampling systems for ultra-early warning in high-airflow cleanrooms and data halls.',
      ],
      link: '/addressable-fire-alarm-system-in-delhi-ncr',
    },
  ];

  const faqs = [
    {
      q: 'Who are the top fire fighting contractors in India in 2026?',
      a: 'The top fire fighting players in India include Adhunik FireXpert (Adhunik Powertech), Ceasefire Industries, Safex Fire Services, Firepro Systems, Kanex Fire, NewAge Fire Protection, and Vimal Fire Controls. Adhunik FireXpert ranks #1 for heavy turnkey EPC site execution and Fire NOC liaison.',
    },
    {
      q: 'What distinguishes a turnkey fire fighting contractor from an equipment trader?',
      a: 'While equipment traders merely resell cylinders and hardware, a turnkey EPC contractor handles end-to-end design, computerized hydraulic pipe modeling (NFPA 13/20), structural on-site fabrication, automated pump room execution, and on-the-ground municipal Fire NOC testing and approvals.',
    },
    {
      q: 'What is the average cost of installing an industrial fire fighting system in India?',
      a: 'Typical turnkey industrial setups—comprising external hydrants, internal risers, wet pipe sprinkler coverage, and an automated pump room—range between ₹35 to ₹300 per square foot (including materials, labor, supply, and installation), depending on facility hazard class and built-up area.',
    },
    {
      q: 'Why is in-panel electrical suppression superior to ceiling sprinklers for panels?',
      a: 'Ceiling sprinklers only trigger after fire breaches the cabinet, by which time costly electrical equipment is lost. In-panel micro-tubing detects the thermal arc directly at the source and extinguishes it in under 10 seconds without water residue or secondary damage.',
    },
  ];

  return (
    <div className="w-full relative bg-white font-sans text-slate-800 antialiased selection:bg-[#DD1403] selection:text-white">
      <ToastContainer position="top-right" autoClose={4000} />

      {/* 1. HERO SECTION */}
      <div
        className="relative w-full h-[88vh] md:h-screen overflow-hidden bg-slate-900"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 w-full h-full">
              <img
                src={slide.imgSrc}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30"></div>
            </div>

            <div className="relative z-20 flex items-center h-full">
              <div className="text-white text-center md:text-left px-6 lg:px-16 max-w-5xl">
                <p className="text-2xl md:text-5xl lg:text-6xl mb-3 font-extrabold tracking-tight leading-tight">
                  {slide.title}
                </p>
                <p className="text-sm md:text-base text-slate-200 mb-8 leading-relaxed max-w-3xl">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href={slide.buttonLink}
                    className="cursor-pointer z-10 relative text-sm md:text-base px-8 py-3.5 text-white font-bold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    style={{
                      background: `radial-gradient(circle at 12.3% 19.3%, #DD1403 0%, #B91C1C 100.2%)`,
                    }}
                  >
                    {slide.buttonText}
                  </a>
                  <a
                    href="https://wa.me/919599050534?text=Hello%20Adhunik%20FireXpert%2C%20I%20need%20a%20turnkey%20fire%20fighting%20contractor%20estimate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer z-10 relative text-sm md:text-base px-8 py-3.5 text-white font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                    WhatsApp Engineer
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Slide ${index + 1}`}
              className={`w-6 h-1.5 rounded-sm transition-all ${
                index === currentSlide ? 'bg-[#DD1403] w-8' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. ADHUNIK SOLAR YELLOW ANNOUNCEMENT STRIP (PRIMARY H1) */}
      <div className="row">
        <div className="section bg-[#FBFF00] border-b border-yellow-300">
          <div className="content-wrap py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-7/12">
                  <div className="text-primary">
                    <h1 className="text-xl md:text-[32px] font-sans text-center md:text-left font-extrabold text-slate-900 leading-tight p-4 md:p-6">
                      Top 10 Fire Fighting Contractors &amp; Protection Companies in India (2026 Guide)
                    </h1>
                  </div>
                </div>
                <div className="w-full lg:w-5/12">
                  <p className="text-black text-center text-sm md:text-justify font-sans p-4 md:p-6 leading-relaxed">
                    According to national safety audit reports and the <strong>National Building Code (NBC 2016 Part 4)</strong>,
                    industrial plants, high-bay warehouses, and commercial infrastructures face strict fire safety enforcement.
                    Here is the definitive evaluation of the top fire protection players and turnkey contractors in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. TOP 10 LISTICLE SECTION */}
      <div className="row py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              List of the Best Fire Protection &amp; Fire Fighting Companies in India
            </h2>
            <p className="mt-3 text-xs md:text-sm text-slate-600 leading-relaxed">
              Whether you need turnkey pump room civil execution, NBC Part 4 compliance, or specialized in-panel micro-suppression,
              here is how India&apos;s leading fire protection brands compare in 2026.
            </p>
          </div>

          <div className="space-y-6">
            {top10Companies.map((comp) => (
              <div
                key={comp.rank}
                className={`p-6 rounded-xl border transition-all ${
                  comp.highlight
                    ? 'bg-[#F4F4F4] border-l-8 border-l-[#DD1403] border-slate-300 shadow-lg'
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-sm md:text-base font-black px-3 py-1 rounded ${
                        comp.highlight ? 'bg-[#DD1403] text-white' : 'bg-slate-200 text-slate-800'
                      }`}
                    >
                      #{comp.rank}
                    </span>
                    <h3 className="text-lg md:text-2xl font-bold text-slate-900">
                      {comp.highlight ? (
                        <Link href="https://www.adhunikfirexpert.com/" className="text-[#DD1403] hover:underline">
                          {comp.name}
                        </Link>
                      ) : (
                        comp.name
                      )}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded border border-slate-200 self-start sm:self-auto">
                    HQ: {comp.hq}
                  </span>
                </div>

                <p className="text-xs md:text-sm font-semibold text-slate-700 mb-2">
                  <span className="text-[#DD1403]">Specialization:</span> {comp.tagline}
                </p>

                <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-justify mb-3">
                  {comp.description}
                </p>

                <div className="text-xs text-slate-500 bg-white/80 p-2.5 rounded border border-slate-200 mb-4">
                  <strong>Core Offerings:</strong> {comp.focus}
                </div>

                <div className="flex flex-wrap gap-3 pt-3 border-t border-slate-200">
                  <a
                    href="#quote-section"
                    className="inline-block rounded-md bg-[#DD1403] hover:bg-red-700 py-2 px-5 text-xs md:text-sm font-semibold text-white shadow transition-colors"
                  >
                    Request Turnkey BOQ Quote →
                  </a>
                  <a
                    href={`https://wa.me/919599050534?text=${encodeURIComponent(
                      `Hello Adhunik FireXpert, I was comparing fire fighting contractors (${comp.name}) and would like to get a turnkey BOQ quotation and technical consultation for my project.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-md bg-emerald-600 hover:bg-emerald-700 py-2 px-5 text-xs md:text-sm font-semibold text-white shadow transition-colors"
                  >
                    Direct WhatsApp Inquiry
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. INTERACTIVE TABBED SYSTEM SHOWCASE */}
      <div className="row bg-[#F4F4F4] py-12 border-t border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Turnkey Fire Protection Systems We Engineer &amp; Install
            </h2>
            <p className="mt-2 text-xs md:text-sm text-slate-600">
              Select an engineered system below to review technical specifications, components, and industrial application scopes.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {systems.map((sys, idx) => (
              <button
                key={sys.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${
                  activeTab === idx
                    ? 'bg-[#DD1403] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:text-[#DD1403] border border-slate-300'
                }`}
              >
                {sys.navTitle}
              </button>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-md max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <span className="text-xs font-bold tracking-wider text-[#DD1403] uppercase bg-red-50 border border-red-200 px-3 py-1 rounded">
                  {systems[activeTab].tag}
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-3 mb-2">
                  {systems[activeTab].heading}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4 text-justify">
                  {systems[activeTab].summary}
                </p>

                <div className="space-y-2.5 mb-6">
                  {systems[activeTab].points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-red-100 text-[#DD1403] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </div>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed text-justify">{pt}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Link
                    href={systems[activeTab].link}
                    className="inline-block rounded-md bg-[#DD1403] hover:bg-red-700 py-2 px-5 text-xs md:text-sm font-semibold text-white shadow transition-colors"
                  >
                    View System Specifications →
                  </Link>
                  <a
                    href="#quote-section"
                    className="inline-block rounded-md bg-neutral-900 hover:bg-neutral-800 py-2 px-5 text-xs md:text-sm font-semibold text-white shadow transition-colors"
                  >
                    Request BOQ for This System
                  </a>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="relative rounded-xl overflow-hidden shadow group">
                  <img
                    src={systems[activeTab].imgSrc}
                    alt={systems[activeTab].alt}
                    className="w-full h-72 md:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-xs font-medium text-white">
                    Engineered according to NBC 2016 Part 4 &amp; NFPA Standards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. TURNKEY EPC VS TRADERS COMPARISON TABLE */}
      <div className="row py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Why Choose Turnkey EPC Contractors Over Equipment Resellers?
            </h2>
            <p className="mt-2 text-xs md:text-sm text-slate-600">
              Comparing turnkey engineering execution with standard product vendors:
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-900">
                  <th className="p-3.5 font-bold">Key Evaluation Parameter</th>
                  <th className="p-3.5 font-bold text-slate-600">Standard Product Resellers</th>
                  <th className="p-3.5 font-bold text-[#DD1403]">Adhunik FireXpert (Turnkey EPC)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-semibold text-slate-900">Project Execution</td>
                  <td className="p-3.5 text-slate-600">Supply-only; requires separate plumbing contractors</td>
                  <td className="p-3.5 text-slate-800 font-medium">Complete civil pump room, pipe welding, electrical &amp; testing turnkey EPC</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-semibold text-slate-900">System Architecture</td>
                  <td className="p-3.5 text-slate-600">Proprietary parts locking clients into high refill costs</td>
                  <td className="p-3.5 text-slate-800 font-medium">Standard-compliant open-protocol assemblies (UL, FM, BIS)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-semibold text-slate-900">Hydraulic Modeling</td>
                  <td className="p-3.5 text-slate-600">Often omitted or outsourced</td>
                  <td className="p-3.5 text-slate-800 font-medium">Verified computer-modeled flow &amp; pressure loss validation (NFPA 13/20)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-semibold text-slate-900">Fire NOC Liaison</td>
                  <td className="p-3.5 text-slate-600">Test certificates only; zero site liaison</td>
                  <td className="p-3.5 text-slate-800 font-medium">End-to-end liaison with DFS, Haryana Fire Service &amp; RIICO</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-semibold text-slate-900">HVAC &amp; BMS Tripping</td>
                  <td className="p-3.5 text-slate-600">Third-party coordination required</td>
                  <td className="p-3.5 text-slate-800 font-medium">Native engineering team for AHU trip and smoke damper automation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 6. HIGH-CONVERSION BOQ ESTIMATOR FORM (WIRED VIA EMAILJS) */}
      <div id="quote-section" className="row py-12 bg-[#F4F4F4]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="p-6 md:p-10 bg-white rounded-2xl border-t-8 border-[#DD1403] shadow-lg">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DD1403] bg-red-100 px-3 py-1 rounded-full">
                Engineering Estimation
              </span>
              <h2 className="text-xl md:text-3xl font-extrabold text-slate-900 mt-2">
                Request a Turnkey Fire Protection BOQ Estimate
              </h2>
              <p className="mt-1 text-xs md:text-sm text-slate-600">
                Submit your facility parameters below to receive an engineering proposal, compliance roadmap, and preliminary BOQ calculation within 24 to 48 hours.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Representative Name *
                  </label>
                  <input
                    type="text"
                    name="representative_name"
                    value={formData.representative_name}
                    onChange={handleInputChange}
                    placeholder="e.g. Name"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#DD1403] bg-slate-50"
                  />
                  {errors.representative_name && (
                    <p className="text-red-500 text-xs mt-1 font-medium">
                      {errors.representative_name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Plant Name *
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleInputChange}
                    placeholder="e.g. Company Name"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#DD1403] bg-slate-50"
                  />
                  {errors.company_name && (
                    <p className="text-red-500 text-xs mt-1 font-medium">
                      {errors.company_name}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#DD1403] bg-slate-50"
                  />
                  {errors.phone_number && (
                    <p className="text-red-500 text-xs mt-1 font-medium">
                      {errors.phone_number}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Corporate Work Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#DD1403] bg-slate-50"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Facility Category *
                  </label>
                  <select
                    name="facility_category"
                    value={formData.facility_category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#DD1403] bg-slate-50 cursor-pointer"
                  >
                    <option value="Manufacturing Plant / Industrial Shed">
                      Manufacturing Plant / Industrial Shed
                    </option>
                    <option value="Warehouse / Logistics Center">
                      Warehouse / Logistics Center
                    </option>
                    <option value="Commercial High-Rise / Office">
                      Commercial High-Rise / Office
                    </option>
                    <option value="Hospital / Healthcare Campus">
                      Hospital / Healthcare Campus
                    </option>
                    <option value="Data Center / Substation">
                      Data Center / Substation
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Approx Built-up Area (Sq. Ft.)
                  </label>
                  <input
                    type="text"
                    name="built_up_area"
                    value={formData.built_up_area}
                    onChange={handleInputChange}
                    placeholder="e.g. 50,000 sq. ft."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#DD1403] bg-slate-50"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Primary Scope Required *
                  </label>
                  <select
                    name="scope_required"
                    value={formData.scope_required}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#DD1403] bg-slate-50 cursor-pointer"
                  >
                    <option value="Full Turnkey Fire EPC (Hydrants + Sprinklers + Pumps)">
                      Full Turnkey Fire EPC (Hydrants + Sprinklers + Pumps)
                    </option>
                    <option value="In-Panel Micro-Suppression Tubing (DLP/IHP)">
                      In-Panel Micro-Suppression Tubing (DLP/IHP)
                    </option>
                    <option value="Clean Agent Gas Flooding (FM200 / FK-5-1-12)">
                      Clean Agent Gas Flooding (FM200 / FK-5-1-12)
                    </option>
                    <option value="Fire Safety Audit & Fire NOC Clearance">
                      Fire Safety Audit &amp; Fire NOC Clearance
                    </option>
                    <option value="Annual Maintenance Contract (AMC)">
                      Annual Maintenance Contract (AMC)
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project City / Industrial Zone *
                  </label>
                  <input
                    type="text"
                    name="project_location"
                    value={formData.project_location}
                    onChange={handleInputChange}
                    placeholder="e.g. IMT Manesar / Greater Noida"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#DD1403] bg-slate-50"
                  />
                  {errors.project_location && (
                    <p className="text-red-500 text-xs mt-1 font-medium">
                      {errors.project_location}
                    </p>
                  )}
                </div>
              </div>

              {/* Hidden EmailJS Mapping Fields to guarantee compatibility with template_l7fwlg4 */}
              <input
                type="hidden"
                name="name"
                value={formData.representative_name}
              />
              <input
                type="hidden"
                name="company"
                value={`${formData.company_name} - ${formData.project_location}`}
              />
              <input
                type="hidden"
                name="phoneNumber"
                value={formData.phone_number}
              />
              <input
                type="hidden"
                name="email"
                value={formData.user_email || 'info@adhunikpowertech.com'}
              />
              <input
                type="hidden"
                name="message"
                value={`Fire Safety Turnkey RFQ: Scope: ${formData.scope_required} | Facility: ${formData.facility_category} | Area: ${formData.built_up_area || 'N/A'} sq ft | Location: ${formData.project_location}`}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 px-6 rounded-lg text-white font-bold transition-all shadow-md text-sm md:text-base mt-2 flex justify-center items-center gap-2 ${
                  isSubmitting
                    ? 'bg-slate-400 cursor-not-allowed'
                    : 'bg-[#DD1403] hover:bg-red-700 active:scale-[0.99]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    <span>Submitting Technical Request...</span>
                  </>
                ) : (
                  <span>Submit Project Details for BOQ Evaluation</span>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-500 font-medium">
                Directly routed to Adhunik FireXpert team.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* 7. FAQ ACCORDION */}
      <div className="row py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions (Fire Protection Engineering)
            </h2>
            <p className="mt-1 text-xs md:text-sm text-slate-600">
              Answers regarding NBC 2016 Part 4 compliance, contractor rankings, and pump room execution.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-lg bg-[#F4F4F4] border border-slate-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-4 text-left flex justify-between items-center gap-4 hover:bg-slate-200/60 transition-colors"
                >
                  <span className="font-bold text-sm md:text-base text-slate-900">
                    {faq.q}
                  </span>
                  <span className="text-[#DD1403] font-bold text-lg">
                    {faqOpen === i ? '−' : '+'}
                  </span>
                </button>
                {faqOpen === i && (
                  <div className="px-4 pb-4 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3 text-justify">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}