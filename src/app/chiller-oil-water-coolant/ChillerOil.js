"use client";
import {
  AlertTriangle,
  Zap,
  ShieldCheck,
  Thermometer,
  Wrench,
  GaugeCircle,
  CpuIcon,
  Settings2,
  DropletIcon,
  ZapIcon,
  TruckElectric,
  HardDriveDownload,
  FactoryIcon,
  ActivityIcon,
  ShieldCheckIcon,
  Computer,
  UsersIcon,
  Settings2Icon,
  MapPinCheck,
  Award,
  ArrowRightIcon,
} from "lucide-react";

import {

  LucideFan,
  LucideDroplet,
  LucideGauge,
  LucideCpu,
  LucideBolt,
  LucideShield,
  LucidePackagePlus,
  LucideThermometerSun,
  LucideSettings,
  LucideRefreshCw,

} from "lucide-react";



import { FaCertificate, FaPlay } from "react-icons/fa";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from 'lucide-react';

export default function ChillerOil() {

  const accordionData = useMemo(() => [

    {
      title: " What is the ideal operating temperature for hydraulic oil, and why is it important?",
      content:
        " Generally, hydraulic oil should operate between 40∘Cand50∘C(104∘F to 122∘F). Maintaining this range is crucial because temperatures outside this range can lead to accelerated oil degradation, reduced viscosity, increased component wear, and compromised system precision. ",
    },
    {
      title: "  How do I determine the right capacity for my hydraulic oil chiller? ",
      content:
        " Chiller capacity depends on several critical factors, including the hydraulic system's power consumption, fluid volume, ambient temperature, desired oil outlet temperature, and duty cycle. Our experienced engineers can assist you with a precise heat load calculation to recommend the perfectly sized chiller for your specific application. ",
    },
    {
      title: " What are the main advantages of an Adhunik Powertech hydraulic oil chiller over passive cooling methods? ",
      content: "Our chillers offer active and precise temperature control, which passive methods cannot. This prevents oil degradation, significantly extends component lifespan, ensures consistent machine precision, and leads to substantial energy savings compared to inefficient natural cooling or less advanced systems.",

    },

    {
      title: " What maintenance is typically required for Adhunik Powertech hydraulic oil chillers?  ",
      content:
        " Our chillers are designed for minimal and easy maintenance. Regular checks include condenser coil cleaning (for air-cooled units), refrigerant level verification, and general component inspection. We provide a detailed, user-friendly maintenance schedule with each unit to ensure optimal performance.",
    },
    {
      title: " Can Adhunik Powertech custom-build a hydraulic oil chiller for my unique requirements?  ",
      content: "Absolutely. We specialize in custom-engineered solutions. Whether you have unique space constraints, specific cooling capacities, or particular fluid types, share your detailed specifications with us, and our design team will create a chiller perfectly suited for your operational needs",
    },
    {
      title: " Does Adhunik Powertech provide installation and after-sales support for chillers in locations outside Delhi NCR?  ",
      content: " Yes, we provide comprehensive installation guidance and robust after-sales support for our clients not just in Delhi NCR but across all our service locations throughout India, including Gurugram, Noida, Jaipur, Chandigarh, and beyond. Our dedicated service team ensures your chiller operates optimally wherever you are.",
    },
  ], []);

  // State for active accordion index
  const [activeIndex, setActiveIndex] = useState(null);

  // Refs for dynamic content heights
  const refs = useRef([]);

  // Calculate heights dynamically and ensure they are set after component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      refs.current = refs.current.slice(0, accordionData.length);
    }
  }, [accordionData]);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [showModal, setShowModal] = React.useState(false);

  const closeModal = () => {
    setShowModal(false);
  };



  const logos = [
    { src: '/dc1.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc2.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc3.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc4.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc5.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc6.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc7.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc8.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc9.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc10.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc11.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc12.webp', alt: 'Asahi-India-Glass-Ltd' },
    { src: '/dc13.webp', alt: 'Asahi-India-Glass-Ltd' },


  ];

  const column1 = [
    "Machine Tools",
    "Hydraulic Power Units",
    " Lubrication Systems ",
    "Food Industry",
    " Process Cooling",
    "Automotive Industry",
    "Steel & Metal Processing"
  ];

  const column2 = [
    "Power Generation",
    "General Industrial Applications",
    "CNC machines",
    "VMC machines",
    "cutting oil cooling",
    " Laser Cutting Machines",
    "Welding Equipment"
  ];

  const features2 = [
    {
      id: 1,
      description: "High Sensible Cooling",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      id: 2,
      description: " Fully Programmable Micro-Controller ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      id: 3,
      description: " SS Heat Exchanger ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 4,
      description: " Alarm For Critical Failure ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      id: 5,
      description: "Over/Underload Protection ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      id: 6,
      description: " Heat Exchanger Accumulator ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      id: 7,
      description: " Compressor with the make of Danfoss, Panasonic, and Tecumseh ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 8,
      description: " Energy Saving and Aesthetically appealing ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10  text-[#e8f1f5"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },


  ];



  const benefits = [
    {
      label: 'Extended Equipment Lifespan',
      detail: 'Protects hydraulic components from thermal stress and premature wear.',
    },
    {
      label: 'Enhanced System Efficiency',
      detail: 'Maintains ideal oil viscosity for consistent power, precision, and performance.',
    },
    {
      label: 'Reduced Operating Costs',
      detail: 'Features a cutting-edge, energy-efficient design and requires minimal maintenance.',
    },
    {
      label: 'Superior Process Stability',
      detail: 'Ensures consistent output, product quality, and reduced scrap rates.',
    },
    {
      label: 'Reliable Performance',
      detail: 'Built to withstand and excel in the most demanding industrial environments.',
    },
  ];

  const overheatingIssues = [
    {
      icon: Thermometer,
      title: "Accelerated Oil Degradation",
      detail:
        "High temperatures drastically accelerate the oxidation of hydraulic oil, leading to sludge formation, reduced lubrication properties, compromised fluid viscosity, and an increase in acidity. This necessitates more frequent oil changes, resulting in higher operational costs and environmental impact.",
    },
    {
      icon: Wrench,
      title: "Premature Component Wear & Failure",
      detail:
        "Excessive heat puts immense stress on critical hydraulic components such as pumps, valves, cylinders, seals, and hoses. This leads to accelerated wear, costly breakdowns, unpredictable downtime, and expensive repairs or replacements.",
    },
    {
      icon: GaugeCircle,
      title: "Loss of Precision & Quality",
      detail:
        "Fluctuating oil viscosity due to uncontrolled temperature swings directly affects the accuracy, repeatability, and responsiveness of hydraulic movements. This compromises product quality, increases rejection rates, and impacts your bottom line.",
    },
    {
      icon: Zap,
      title: "Increased Energy Consumption",
      detail:
        "Overheated hydraulic systems operate inefficiently, forcing them to work harder to achieve desired outputs. This directly translates to higher energy consumption and inflated utility bills.",
    },
  ];

  const chillerFeatures = [
    {
      icon: LucideFan,
      label: "High-Efficiency Compressors",
      detail:
        "These units are equipped with energy-efficient, industrial-grade hermetic or semi-hermetic compressors from reputable global brands, ensuring robust performance, optimal energy consumption, and an extended operational lifespan.",
    },
    {
      icon: LucideDroplet,
      label: "Eco-Friendly Refrigerants",
      detail:
        "Utilizes environmentally responsible refrigerants like R-407C, R-134a, or R-410A, minimizing ecological impact while delivering superior and efficient cooling.",
    },
    {
      icon: LucideGauge,
      label: "Advanced Heat Exchange Technology",
      detail:
        "Features specially designed, high-efficiency evaporators (e.g., Brazed Plate Heat Exchangers, Shell & Tube, or Tube-in-Tube) engineered specifically for direct oil cooling. These are built with high fouling factors, increased tube thickness, and robust pressure resistance for superior heat transfer, anti-fouling capabilities, and enhanced durability.",
    },
    {
      icon: LucideCpu,
      label: "Intelligent PLC-Based Control Systems",
      detail:
        "Integrated with state-of-the-art microprocessor or Fully Automatic PLC-based control systems providing ultra-precise temperature regulation (e.g., ±0.5°C). These advanced systems offer real-time performance tracking, comprehensive diagnostics, and automatic fault alarms for proactive maintenance and rapid troubleshooting.",
    },
    {
      icon: LucideBolt,
      label: "Energy-Saving Automation",
      detail:
        "Options for Electronic Expansion Valves (EEV) for precise refrigerant flow and Variable Speed Drives (VSDs) for compressors, enabling automatic capacity control that dynamically matches cooling demand, leading to substantial energy savings and lower operating costs.",
    },
    {
      icon: LucideShield,
      label: "Robust & Durable Construction",
      detail:
        "Our chillers are built to excel in the harshest industrial environments. Featuring heavy-duty, powder-coated Mild Steel cabinets and crucial components like stainless steel tanks and pumps where fluid contact is critical, ensuring maximum corrosion resistance and unparalleled longevity.",
    },
    {
      icon: LucidePackagePlus,
      label: "Compact, Skid-Mounted Design",
      detail:
        "Each unit is compact, completely factory-made and rigorously tested, and delivered skid-mounted with an integrated oil pump and bypass mechanism. This ensures easy, plug-and-play installation and requires minimal floor space.",
    },
    {
      icon: LucideThermometerSun,
      label: "Designed for Extreme Conditions",
      detail:
        "Engineered to perform flawlessly even in extreme tropicalized weather conditions, our chillers are capable of efficiently handling high fluid entry temperatures and very high oil pressures typical of demanding industrial applications.",
    },
    {
      icon: LucideSettings,
      label: "User-Friendly Operation & Simplified Maintenance",
      detail:
        "Designed for simplicity, our chillers feature intuitive digital interfaces for easy monitoring and operation. Accessible components and a robust design facilitate routine checks and simplified maintenance, significantly minimizing downtime.",
    },
    {
      icon: LucideRefreshCw,
      label: "Versatile Cooling Types",
      detail:
        "Available in both Air-Cooled and Water-Cooled configurations, and specialized Stand-alone or Immersion Type models to perfectly suit your specific application and infrastructure.",
    },
  ];


  const applications = [
    {
      icon: CpuIcon,
      label: "Machine Tools",
      detail:
        "Essential for CNC machines, VMC machines, Grinding, Honing, Broaching, Drilling, Milling machines, and EDM (Electrical Discharge Machining) for precise spindle cooling, cutting oil cooling, and hydraulic power pack cooling.",
    },
    {
      icon: Settings2,
      label: "Hydraulic Power Units",
      detail:
        "Critical for Industrial Presses, Injection Molding Machines, Die Casting Machines, and Bending Machines, ensuring the stability and integrity of hydraulic fluid properties.",
    },
    {
      icon: DropletIcon,
      label: "Lubrication Systems",
      detail:
        "Ideal for cooling lubricating oil in large gearboxes, bearings, and high-speed spindles, significantly extending component life and reducing friction.",
    },
    {
      icon: ZapIcon,
      label: "Process Cooling",
      detail:
        "Used in various industrial processes including Heat Treatment applications, Induction Furnaces, Laser Cutting Machines, and Welding Equipment.",
    },
    {
      icon: TruckElectric,
      label: "Automotive Industry",
      detail:
        "Supports a wide range of manufacturing processes and rigorous component testing.",
    },
    {
      icon: HardDriveDownload,
      label: "Steel & Metal Processing",
      detail: "Crucial for applications such as quenching oil cooling.",
    },
    {
      icon: FactoryIcon,
      label: "Power Generation",
      detail:
        "Essential for the cooling of transformer oil and various other auxiliary systems.",
    },
    {
      icon: ActivityIcon,
      label: "General Industrial Applications",
      detail:
        "Any industrial setup where precise temperature control of hydraulic oil, lubricating oil, or cutting fluids is paramount for optimal performance, equipment longevity, and consistent output.",
    },
  ];

  const points = [

    {
      icon: ShieldCheckIcon,
      title: "Decades of Proven Reliability",
      detail:
        "We boast a strong track record of designing, manufacturing, and supplying high-performance, durable chillers that consistently exceed expectations in the most challenging and demanding industrial environments.",
    },

    {
      icon: Computer,
      title: "Expert Engineering & Strategic Vision",
      detail:
        "Our in-house R&D and advanced manufacturing capabilities ensure every chiller is built to the highest quality standards. Leveraging extensive industry experience and data-driven insights – a core passion of our team and a strategic approach – we engineer chiller solutions that are not just products, but strategic assets designed to optimize your operations and maximize your Return on Investment.",
    },

    {
      icon: UsersIcon,
      title: "Comprehensive After-Sales Support",
      detail:
        <>
          Our commitment extends far beyond the sale. We offer dedicated  <Link href='/support-form' className="text-cyan-600 hover:text-cyan-900" >  technical support </Link>
          , prompt on-site service, and readily available genuine spare parts to ensure maximum uptime and complete peace of mind for your critical operations.
        </>

    },

    {
      icon: Settings2Icon,
      title: "Tailored Custom Solutions",
      detail:
        "We understand that every industry and application presents unique requirements. We specialize in providing custom-engineered hydraulic oil chillers to perfectly match your specific flow rates, cooling capacities, and environmental conditions, ensuring seamless integration and optimal performance.",
    },

    {
      icon: MapPinCheck,
      title: "A Leading Manufacturer in Delhi NCR & Across India",
      detail:
        "Our robust presence and service network mean quicker response times, easier access to support, and a deep understanding of the diverse industrial landscapes. Adhunik Powertech proudly serves Delhi NCR, including key industrial hubs like Gurugram, Faridabad, Noida, Greater Noida, and Ghaziabad. Our expertise extends across India, providing reliable hydraulic oil chiller solutions to meet diverse industrial needs in locations such as Sonipat, Panipat, Rohtak, Rewari, Palwal, Bhiwadi, Meerut, Neemrana, Tapukara, Bawal, Manesar, Dharuhera, Muzaffarnagar, Jaipur, and Chandigarh.",
    },

    {
      icon: Award,
      title: "Uncompromising Quality Standards & Esteemed Certifications",
      detail:

        <>
          Our dedication to quality is not just a promise; it's validated by our esteemed <Link href="/certificate-&-accreditation" className=" text-cyan-600 hover:text-cyan-900 " >certifications</Link> and accreditations. Adhunik Powertech is an MSME (Micro, Small & Medium Enterprises) registered entity, proudly CE certified (CE/060219033), and ISO 9001:2015 certified (IAF & IAS Accredited). Furthermore, we are a ZED (Zero Defect Zero Effect) Bronze certified company and registered on GeM (Government e-Marketplace), ensuring transparent and efficient dealings. Our IEC (Import Export Code Licence) further underscores our capability for seamless trade and international quality adherence. These certifications assure you of our unwavering commitment to global quality benchmarks and ethical business practices.
        </>
      ,
    },
  ];

  return (
    <>
      <div className="row  font-sans">

        <section className="  py-16 px-4 md:px-10 pt-40  ">

          <div className="container-fluid justify-center flex mx-auto">
            <h1 className="text-2xl md:text-3xl text-center max-w-5xl  font-bold text-cyan-800 mb-6 leading-snug">
              Adhunik Powertech : Leading Hydraulic Oil Chiller Manufacturer in Delhi NCR & Across India
            </h1>
          </div>


          <div className="max-w-7xl pt-9  mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}

            <div className="w-full   flex justify-center">
              <Image
                src="/awi/16.jpeg"
                alt="Hydraulic Oil Chiller"
                className="rounded-2xl   object-center object-contain"
                width={350}
                height={350}
                loading="lazy"
                priority
              />
            </div>

            {/* Content */}
            <div className="">

              <p className="text-gray-700 text-sm mb-6">
                Ensure the longevity and optimal efficiency of your critical hydraulic machinery.
                <Link href='/' className="text-cyan-600 hover:text-cyan-900" >  Adhunik Powertech </Link> delivers advanced, energy-efficient hydraulic oil chillers,
                meticulously engineered to maintain stable fluid temperatures and maximize your
                operational output across diverse industries.
              </p>

              <ul className="space-y-4">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="pt-1">
                      <CheckCircle className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div className="text-gray-800   font-normal font-sans leading-relaxed">
                      <span className="font-semibold text-cyan-800">{item.label} : </span> {item.detail}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-center w-full py-9 ">
          {/* Left line */}
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500 to-gray-300" />

          {/* Center text */}
          <span className="mx-6 text-[6vw] md:text-4xl font-semibold font-sans text-cyan-800 tracking-wide uppercase bg-white px-4">
            Our Wide Range of Hydraulic Oil/Coolant Chiller

          </span>

          {/* Right line */}
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 via-cyan-500 to-transparent" />
        </div>



        <div className="row">

          <div className=" h-full flex  flex-col-reverse   md:flex-row text-center p-5 bg-[#F4F4F4] m-4">



            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">

              <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block"> Oil Chiller Unit (1.5 TR.) </h2>

              <p className="text-justify md:text-center font-normal font-sans">
                Our 1.5 TR Oil/Coolant Chiller is a powerful yet compact cooling solution tailored to meet the demands of various applications. This advanced refrigeration system effectively controls the temperature of your oil and other industrial fluids. With a sophisticated cooling process, our chillers ensure consistent temperature regulation, safeguarding your valuable equipment and maximizing productivity. </p>
              <div className="show_m mt-5">
                <button
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                  onClick={() => {
                    window.location.href = 'mailto:info@adhunikpowertech.com?subject=Enquiry%20Now&body=Hello, I would like to enquire about your services.';
                  }}
                >
                  Enquiry Now
                </button>




              </div>
            </div>

            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  md:h-[28rem]  object-center object-cover "
                          fetchPriority="high"
                          decoding="async"
                          alt="Exhaust Fan (SS)"
                          src="awi/1.jpeg"
                          loading="lazy"
                          height="300"
                          width="300"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <p className="font-dmserif text-3xl font-bold text-white">  Oil Chiller Unit (1.5 TR.)
                      </p>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Our powerful 1.5 TR Oil Chiller protects your equipment and boosts productivity with precise temperature control.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>





          </div>

          <div className="flex justify-center items-center w-full px-4 mb-4">
            <div className="overflow-x-auto w-full max-w-6xl">
              <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">
                <caption className="  uppercase text-base font-semibold text-gray-700 mb-2">
                  Oil Chiller Unit (1.5 TR.)
                  TECHNICAL SPECIFICATION
                </caption>
                <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
                  <tr className="text-center">
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Model</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Compressor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Condenser</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Dimension (mm) (LxWxH)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Evaporator</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Expansion Valve</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Filter Drier</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">HP & LP</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Refrigerant</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Supply</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Consumption (Amp)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Temperature Control</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Electric Motor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Hydraulic Gear Pump (LPM)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Operating Temp. Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white text-center border-b border-gray-300">
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300"> 1.5 Tr.  </td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Reciprocating</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Air-cooled (copper tube alu. fins)</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">550 X 550 X 1000</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Brazed Plate Heat-exchanger</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300"> TE-2 </td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">DML-163</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Manually reset</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">R-407C</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">415V, 50Hz, 3PH</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">4.5 Amp.</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Subzero 7510t ( -40 to +99 )</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300"> 1 HP,1440 RPM, 50 Hz, TEFC, IE-2 </td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300"> LPM 28 TO 36 </td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300"> 10 deg.C to 60 deg.C </td>
                  </tr>
                </tbody>
              </table>


            </div>
          </div>





        </div>





        <div className="row">

          <div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">

            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  md:h-[28rem]  object-center object-cover "
                          fetchPriority="high"
                          decoding="async"
                          alt="Exhaust Fan (SS)"
                          src="awi/15.jpeg"
                          loading="lazy"
                          height="300"
                          width="300"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">  Oil Chiller Unit (3 TR.)
                      </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Experience superior cooling performance with our 3 TR Oil Chiller. This factory-tested unit offers exceptional cooling capacity, durable construction, and improved energy efficiency.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <p className="text-[6vw] md:text-4xl mb-3 hidden md:block">Oil Chiller Unit (3 TR.) </p>
              <p className="text-justify md:text-center font-normal font-sans">
                Introducing our 3 TR Oil/Coolant Chiller—an efficient cooling solution for industrial applications that ensures precise temperature control for your oil and fluids, optimizing equipment performance and extending lifespan. With exceptional cooling capacity, durable construction, improved energy efficiency, and easy maintenance, this factory-tested system guarantees a seamless installation process. Trust our 3 TR Oil Chiller for reliable cooling and enhanced operational efficiency in your critical processes. </p>
              <div className="show_m mt-5">
                <button
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                  onClick={() => {
                    window.location.href = 'mailto:info@adhunikpowertech.com?subject=Enquiry%20Now&body=Hello, I would like to enquire about your services.';
                  }}
                >
                  Enquiry Now
                </button>
              </div>
            </div>
          </div>






          <div className="flex justify-center items-center w-full px-4 mb-4">
            <div className="overflow-x-auto w-full max-w-6xl">
              <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">

                <caption className="  uppercase text-base font-semibold text-gray-700 mb-2">
                  Oil Chiller Unit (3 TR.) TECHNICAL SPECIFICATION
                </caption>

                <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
                  <tr className="text-center">
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Model</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Compressor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Condenser</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Dimension (mm) (LxWxH)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Evaporator</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Expansion Valve</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Filter Drier</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">HP & LP</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Refrigerant</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Supply</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Consumption (Amp)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Temperature Control</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Electric Motor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Hydraulic Gear Pump (LPM)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Operating Temp. Range</th>
                  </tr>
                </thead>
                <tbody>


                  {/* Row for Tr. 3 */}
                  <tr className="bg-white text-center border-b border-gray-300">
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">3 Tr.</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Copeland Scroll</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Air-cooled (copper tube alu. fins)</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">50 X 50 X 1 00 7 7 2</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Brazed Plate Heat-exchanger</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">TGEL-3.5</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">DML-163</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Manually reset</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">R-410A</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">415V, 50Hz, 3PH</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">.5 Amp. 6</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Subzero 7510t (-40 to +99)</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">1 HP, 1440 RPM, 50 Hz, TEFC, IE-2</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">28 TO 36</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">10 deg.C to 60 deg.C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>






        </div>


        <div className="row">
          <div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">
            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <h2 className="text-[6vw] md:text-4xl mb-3 hidden md:block"> Oil Chiller Unit (5 TR.) </h2>
              <p className="text-justify md:text-center font-normal font-sans">
                Improve your industrial operations with our 5 TR Oil/Coolant Chiller. This advanced refrigeration system delivers precise temperature control, extending the lifespan and performance of your critical equipment. Designed with durability, energy efficiency, and ease of maintenance in mind, our chiller ensures reliable operation year-round. Featuring microprocessor control and high-efficiency components, our factory-tested chiller guarantees a seamless installation and dependable performance.
              </p>
              <div className="show_m mt-5">
                <button
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                  onClick={() => {
                    window.location.href = 'mailto:info@adhunikpowertech.com?subject=Enquiry%20Now&body=Hello, I would like to enquire about your services.';
                  }}
                >
                  Enquiry Now
                </button>
              </div>
            </div>

            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  md:h-[28rem]  object-center object-cover "
                          fetchPriority="high"
                          decoding="async"
                          alt="Exhaust Fan (SS)"
                          src="awi/16.jpeg"
                          loading="lazy"
                          height="300"
                          width="300"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <p className="font-dmserif text-3xl font-bold text-white">  Oil Chiller Unit (5 TR.)
                      </p>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Invest in a reliable and efficient cooling solution for your industrial needs. Our 5 TR Oil Chiller delivers precise temperature control, extending the lifespan and performance of your critical equipment.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>





          </div>
          <div className="flex justify-center items-center w-full px-4 mb-4">
            <div className="overflow-x-auto w-full max-w-6xl">
              <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">
                <caption className="  uppercase text-base font-semibold text-gray-700 mb-2">
                  Oil Chiller Unit (5 TR.)
                  TECHNICAL SPECIFICATION
                </caption>
                <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
                  <tr className="text-center">
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Model</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Compressor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Condenser</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Dimension (mm) (LxWxH)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Evaporator</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Expansion Valve</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Filter Drier</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">HP & LP</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Refrigerant</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Supply</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Consumption (Amp)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Temperature Control</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Electric Motor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Hydraulic Gear Pump (LPM)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Operating Temp. Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white text-center border-b border-gray-300">
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300"> 5 Tr.  </td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Copeland Scroll</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Air-cooled (copper tube alu. fins)</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">50 X 50 X 1 0 9 9 27</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Brazed Plate Heat-exchanger</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">TGEL- .5 4</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">DML-16 4</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Manually reset</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">R-410A</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">415V, 50Hz, 3PH</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">12.6</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Subzero 7510t ( -40 to +99 )</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">HP, 1440 RPM, 50 Hz, TEFC, IE-2 2</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">TO 40 60</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">10 deg.C to 60 deg.C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>



        <div className="row">
          <div className=" h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">
            <div className="md:w-[40%] w-auto">
              <div className="flex items-center justify-center h-full">
                <div>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                    <div className="w-auto">
                      <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                        <img
                          className="  md:h-[28rem]  object-center object-cover "
                          fetchPriority="high"
                          decoding="async"
                          loading="lazy"
                          alt="Exhaust Fan (SS)"
                          src="awi/14.jpeg"
                          height="300"
                          width="300"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h2 className="font-dmserif text-3xl font-bold text-white">  Oil Chiller Unit (8 TR.)
                      </h2>
                      <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Boost your industrial productivity with our reliable 8 TR Oil Chiller. Designed for heavy-duty applications, it delivers precise temperature control, ensuring optimal equipment performance and a longer service life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
              <p className="text-[6vw] md:text-4xl mb-3 hidden md:block">Oil Chiller Unit (8 TR.) </p>
              <p className="text-justify md:text-center font-normal font-sans">

                Introducing our powerful 8 TR Oil/Coolant Chiller, specifically designed for heavy industrial applications. This chiller provides excellent temperature control for oil and industrial fluids, enhancing equipment performance and lifespan. With a factory-tested design, it ensures easy installation and reliable cooling for critical processes. Choose Adhunik Powertech for effective industrial cooling solutions tailored to your needs.
              </p>
              <div className="show_m mt-5">
                <button
                  className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                  onClick={() => {
                    window.location.href = 'mailto:info@adhunikpowertech.com?subject=Enquiry%20Now&body=Hello, I would like to enquire about your services.';
                  }}
                >
                  Enquiry Now
                </button>
              </div>
            </div>
          </div>







          <div className="flex justify-center items-center w-full px-4 mb-4">
            <div className="overflow-x-auto w-full max-w-6xl">
              <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 border-collapse border border-gray-200">
                <caption className="  uppercase text-base font-semibold text-gray-700 mb-2">
                  Oil Chiller Unit (8 TR.) TECHNICAL SPECIFICATION
                </caption>
                <thead className="text-xs text-white font-sans font-extrabold uppercase bg-[#00A0E1] border-b-2 border-gray-200">
                  <tr className="text-center">
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Model</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Compressor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Condenser</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Dimension (mm) (LxWxH)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Evaporator</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Expansion Valve</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Filter Drier</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">HP & LP</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Refrigerant</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Supply</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Power Consumption (Amp)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Temperature Control</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Electric Motor</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Hydraulic Gear Pump (LPM)</th>
                    <th scope="col" className="py-2 px-2 text-[10px] border-r border-gray-100">Operating Temp. Range</th>
                  </tr>
                </thead>
                <tbody>

                  <tr className="bg-white text-center border-b border-gray-300">
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">8 Tr.</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Copeland Scroll</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Air-cooled (copper tube alu. fins)</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">50 X 50 X 10 10 1460</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Brazed Plate Heat-exchanger</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">TGEL- .5 8</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">DML-16 5S</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Manually reset</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">R-410A</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">415V, 50Hz, 3PH</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">15.5</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">Subzero 7510t (-40 to +99)</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">HP, 1440 RPM, 50 Hz, TEFC, IE-2 3</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">TO 90 110</td>
                    <td className="px-2 py-2 text-[12px] border-r border-gray-300">10 deg.C to 60 deg.C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>







        <div className="bg-[#283e56] p-4 relative">
          {/* Background Blur Effect */}
          <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-6 py-4 md:px-12 xl:px-6">
            <div className="md:w-2/3 lg:w-1/2 mt-2 text-gray-100 flex items-center">
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-2xl font-bold text-white md:text-4xl ps-3">Product Features</h2>
            </div>

            {/* Grid of Features */}
            <div className="mt-5 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
              {features2.map((feature) => (
                <div key={feature.id} className="group  relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-300/10">
                  <div className="relative space-y-8 py-12  p-8">
                    <div className="space-y-2">
                      <ul className="list-none flex flex-row">
                        <div className="h-full w-fit pe-3 text-[#eff0f4] ">{feature.icon}</div>
                        <li className="text-[#F1F2FD] text-[13px] ">{feature.description}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>




        <section className=" py-16 px-4 md:px-10 lg:px-20">
          {/* Section Heading */}
          <div className="text-center max-w-6xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl  font-bold text-cyan-800">
              Why Stable Oil Temperature is Crucial for Your Hydraulic Systems & Operations
            </h2>
            <p className="mt-4 text-gray-600 font-normal font-sans">
              In the demanding world of industrial operations, hydraulic systems are the undisputed powerhouses, driving everything from complex CNC machines to heavy-duty presses and injection molding equipment. However, the continuous and intensive operation of these systems generates significant heat. This excess heat directly impacts the performance, efficiency, and crucial lifespan of your hydraulic oil and, consequently, your expensive machinery.
            </p>

            <p className="text-3xl text-center w-full pt-9 font-semibold text-cyan-700 flex justify-center items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-orange-500" /> The Risks of Overheating
            </p>

          </div>


          {/* Risk Cards */}
          <ul className="grid gap-8 md:grid-cols-2">
            {overheatingIssues.map(({ icon: Icon, title, detail }, idx) => (
              <li key={idx} className="flex gap-4 items-start border-l-4 border-cyan-600 pl-5 bg-gray-50 p-5 rounded-lg shadow-sm">
                <div className="bg-cyan-100 p-2 rounded-full">
                  <Icon className="w-6 h-6 text-cyan-800" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
                  <p className="text-gray-700 text-sm">{detail}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Solution Section */}
          <div className="mt-16 bg-cyan-50 p-8 rounded-2xl border-l-8 border-cyan-700">
            <div className="flex items-start gap-5">
              <div className="bg-white p-3 rounded-full shadow">
                <ShieldCheck className="w-6 h-6 text-cyan-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-800 mb-2">
                  Adhunik Powertech’s Solution
                </h3>
                <p className="text-gray-800 leading-relaxed font-normal font-sans">
                  Our advanced Hydraulic Oil Chillers (also commonly known as Oil Coolant Chillers or Industrial Oil Chillers) are specifically designed to counteract these critical challenges. By actively and precisely removing excess heat, our chillers maintain your hydraulic oil at its optimal operating temperature, safeguarding your valuable machinery, ensuring uninterrupted, high-precision operations, and significantly extending equipment life.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="max-w-7xl mx-auto p-8 md:p-16 bg-white rounded-lg shadow-lg">
          <h2 className="text-cyan-800 text-4xl md:text-5xl font-extrabold mb-7">
            Adhunik Powertech Hydraulic Oil Chillers : Engineered for Unmatched Performance
          </h2>
          <h3 className=" text-sm py-3 text-cyan-800">
            Unmatched Features & Advantages: The Adhunik Powertech Difference

          </h3>
          <p className="text-gray-700 text-lg mb-12 max-w-3xl">
            At Adhunik Powertech, we don't just build chillers; we engineer meticulously crafted cooling solutions that redefine industrial reliability and efficiency. Our hydraulic oil chillers are the culmination of cutting-edge technology, robust design, and a deep understanding of the most demanding industrial cooling requirements.
          </p>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {chillerFeatures.map(({ icon: Icon, label, detail }, idx) => (
              <div
                key={idx}
                className="border-l-4 border-cyan-600 pl-6 py-4 bg-cyan-50 rounded-lg shadow-sm hover:shadow-md transition cursor-default"
              >
                <div className="flex items-start gap-4 mb-2">
                  <div className="bg-cyan-100 text-cyan-700 rounded-full p-3 flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-cyan-800 text-xl font-semibold">{label}</h3>
                </div>
                <p className="text-gray-800 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>


        <section className="max-w-7xl mx-auto p-8 md:p-16 bg-white rounded-lg shadow-lg">
          <h2 className="text-cyan-800 text-4xl md:text-5xl font-extrabold mb-10">
            Versatile Applications of Adhunik Powertech Hydraulic Oil Chillers
          </h2>
          <p className="text-gray-700 text-lg mb-12 max-w-3xl">
            Powering Industries: Where Our Hydraulic Oil Chillers Make a Difference
            <br />
            Adhunik Powertech's Hydraulic Oil Chillers are an indispensable asset across a broad spectrum of industries, safeguarding crucial equipment, enhancing operational efficiency, and ensuring product quality.
          </p>

          <ul className="grid gap-8 md:grid-cols-2">
            {applications.map(({ icon: Icon, label, detail }, idx) => (
              <li
                key={idx}
                className="flex gap-5 border-l-4 border-cyan-600 pl-5 bg-cyan-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="bg-cyan-100 flex justify-center items-center text-cyan-700 rounded-full p-3 flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-cyan-800 font-semibold text-xl mb-1">{label}</h3>
                  <p className="text-gray-800 text-sm leading-relaxed">{detail}</p>
                </div>
              </li>
            ))}

          </ul>
        </section>


        <section className="max-w-7xl mx-auto px-6 py-16 bg-cyan-50 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-cyan-800 mb-12 text-center">
            Why Choose Adhunik Powertech for Your Hydraulic Oil Chiller Needs?
          </h2>

          <p className="text-lg text-cyan-700 font-semibold mb-10 text-center max-w-4xl mx-auto">
            The Adhunik Powertech Advantage: Unrivalled Quality, Expertise & Unwavering Support
          </p>

          <div className="space-y-10">
            {points.map(({ icon: Icon, title, detail }, idx) => (
              <div
                key={idx}
                className="flex gap-6 items-start bg-white rounded-xl p-6 shadow-md border border-cyan-300 hover:shadow-xl transition-shadow"
              >
                <div className="flex-shrink-0 bg-cyan-100 p-4 rounded-lg">
                  <Icon className="w-8 h-8 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-900 mb-2">{title}</h3>
                  <p className="text-cyan-800 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>



        <div className="container  mx-auto">
          <section className="max-w-7xl m-4 md:m-12  mx-auto px-8 text-center py-12 bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-900 rounded-3xl shadow-2xl text-white relative overflow-hidden">

            <div className="absolute top-[-60px] right-[-60px] w-48 h-48 bg-cyan-400 opacity-20 rounded-full filter blur-3xl"></div>

            <h2 className="text-3xl font-extrabold tracking-tight mb-6  leading-tight drop-shadow-md">
              Ready to Optimize Your Hydraulic Systems?
            </h2>

            <p className="text-md font-semibold  mb-6 text-cyan-200 drop-shadow-sm">
              Connect with Adhunik Powertech Today for Your Hydraulic Oil Chiller Solution
            </p>

            <p className=" text-sm text-cyan-300 leading-relaxed mb-10   drop-shadow-sm">
              Don’t let overheating compromise your productivity, machine lifespan, or product quality. Invest in a reliable, high-performance hydraulic oil chiller from Adhunik Powertech – your trusted partner for industrial cooling solutions in Delhi NCR and across India.
            </p>

            <p className=" text-sm text-cyan-300 leading-relaxed mb-14   drop-shadow-sm">
              Contact Us Today for a Customized Solution: Our experts are ready to discuss your specific cooling needs, offer technical guidance, and provide a tailor-made, no-obligation quote.
            </p>

            <Link
              href="/support-form"
              className="inline-flex items-center justify-center gap-3 bg-white text-cyan-900 font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 text-sm drop-shadow-md"
              aria-label="Get a Free Quote"
            >
              GET A FREE QUOTE <ArrowRightIcon className="w-6 h-6" />
            </Link>
          </section>
        </div>



        <div className="row">

          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center pb-16">


              <div className=" mt-5">
                <p className="mt-3 text-3xl font-sans font-bold text-gray-800 dark:text-neutral-400">  FAQs

                </p>
                <div className="container mx-auto mt-8 mb-10">
                  {accordionData.map((item, index) => (
                    <div
                      className="border-[#F6F6F8] mb-4 rounded border"
                      key={index}
                    >
                      <div
                        className="font-sans font-medium text-[14px] accordion-header bg-[#F6F6F8] cursor-pointer px-4 py-2 flex justify-between items-center"
                        onClick={() => handleClick(index)}
                      >
                        {item.title}
                        <span className={`arrow ${activeIndex === index ? 'down' : 'right'}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            {activeIndex === index ? (
                              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                            ) : (
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            )}
                          </svg>
                        </span>
                      </div>
                      <div
                        ref={(el) => (refs.current[index] = el)}
                        className={`font-sans font-medium text-[13px] text-justify accordion-content overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-screen' : 'max-h-0'
                          }`}
                        style={{
                          height: activeIndex === index ? `${refs.current[index]?.scrollHeight}px` : '0px',
                        }}
                      >
                        <div className="px-4 pb-4 pt-2">{item.content}</div>
                      </div>
                    </div>
                  ))}
                </div>






                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                  <Link href="/our-Company" className="  rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
                    <span className="relative">       Know more About Us </span>
                  </Link>
                  <a href="tel:8287885885"
                    onclick="location.href='tel:8287885885'; return false;" className=" overflow-hidden  rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
                    <span className="relative"> Contact Us</span>
                  </a>
                </div>
              </div>


              <div className="relative ms-4 items-center flex justify-center">
                <div className="flex justify-center  absolute " >
                  <span className="relative flex h-16 w-16">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"
                    ></span>

                    <span
                      className="relative flex justify-center items-center  h-16 w-16 rounded-full bg-white"
                    >
                      <FaPlay />
                    </span>

                  </span>
                  <button className='z-50  text-transparent absolute p-5' onClick={() => setShowModal(true)}>.bdfbbdb</button>
                </div>

                <img className="md:h-[70%] rounded-md" height="700"
                  width="700" src="/pacth.webp" loading="lazy" alt="Hero Image 3" />
                <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

              </div>


              {showModal ? (
                <>
                  <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    onClick={closeModal} // Close modal when clicking outside
                  >
                    <div
                      className="relative  my-6    container-fluid "
                      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on modal content
                    >

                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                        <div className="relative  flex-auto">
                          <iframe className="responsive-iframe" width="860" height="515" src="https://www.youtube.com/embed/jtizPl_Y744?si=oWwFcUq_IwXZgvjD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}


            </div>

          </div>

        </div>





        <div className="flex justify-center items-center w-full h-full flex-row">

          <div className="w-[30%] h-px my-8 bg-gray-300 border-0" />


          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-gray-200 px-5 py-4 rounded-full bg-white text-3xl md:text-4xl font-sans font-bold capitalize text-center">
            APPLICATIONS
          </span>


          <div className="w-[30%] h-px my-8 bg-gray-300 border-0" />
        </div>


        <div className="row pb-16 flex justify-center items-center flex-col">

          <div className="row  w-full h-full">


            <div className="relative overflow-x-auto justify-center items-center flex font-sans font-thin">


              <table className="  md:w-[50%] text-sm text-center text-gray-500 ">

                <caption className="uppercase text-base font-semibold text-gray-700 mb-2">
                  Typical Applications of Our Hydraulic Oil Chiller Solutions
                </caption>

                <thead className="text-xs  text-gray-700 uppercase bg-gray-50 ">

                </thead>
                <tbody>
                  <tr className="bg-white text-[15px] flex flex-col md:flex-row justify-center">
                    <td className="px-6 py-4  text-left">
                      <ul className="list-disc list-inside">
                        {column1.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 text-left">
                      <ul className="list-disc list-inside">
                        {column2.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>


          <div className="w-[85%] py-5 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            {[...Array(2)].map((_, index) => (
              <ul
                key={index}
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden={index === 1 ? 'true' : 'false'}
              >
                {logos.map((logo, idx) => (
                  <li key={idx}>
                    <img
                      className=" w-32 h-32 md:w-48 md:h-48  object-center object-cover    rounded-full"
                      src={logo.src}
                      loading="lazy"
                      alt={logo.alt}
                      height="300"
                      width="300"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>

        </div>

      </div>
    </>
  )
}
