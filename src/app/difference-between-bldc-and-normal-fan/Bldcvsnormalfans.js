"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Zap,
  Leaf,
  Volume2,
  Settings,
  Clock,
  IndianRupee,
  ChevronDown,
  Fan,
  Lightbulb,
  BarChart2,
  Calculator,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  BatteryCharging,
  Smartphone,
  Home,
  Wind,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState, useRef } from "react";
import React, {   useEffect } from 'react';


import {  useAnimation } from 'framer-motion';
import { Power,    VolumeX, Cpu,   Package, BarChart,  Menu, X } from 'lucide-react';
import Link from "next/link";

const fullComparisonData = [
  {
    feature: "Motor Type",
    normal: "AC Induction Motor",
    bldc: "BLDC (Brushless Direct Current) Motor",
  },
  {
    feature: "Power Consumption",
    normal: "70-80 Watts",
    bldc: "26-35 Watts (Adhunik Air Care: Up to 65% less power consumption)",
  },
  {
    feature: "Electricity Bill Savings",
    normal: "Minimal",
    bldc: "Substantial (Adhunik Air Care: Approx. ₹1600-₹2000 annually per fan)*",
  },
  {
    feature: "Inverter/UPS Backup",
    normal: "Drains battery quickly",
    bldc: "3 times longer backup (Adhunik Air Care's proven advantage)",
  },
  {
    feature: "Noise Level",
    normal: "Often produces an audible humming noise (due to friction)",
    bldc: "Whisper-quiet operation (no brushes, minimal friction)",
  },
  {
    feature: "Speed Control",
    normal: "Limited (3-5 fixed speeds) via mechanical regulator",
    bldc: "Precise (6+ speeds) via Remote Control; consistent performance across speeds",
  },
  {
    feature: "Durability & Lifespan",
    normal: "Moderate (brushes wear out over time, motor heats up)",
    bldc: "Significantly Longer (less wear & tear, lower heat generation)",
  },
  {
    feature: "Maintenance",
    normal: "May require occasional checks for wear and tear",
    bldc: "Virtually maintenance-free",
  },
  {
    feature: "Initial Cost",
    normal: "Generally Lower",
    bldc: "Higher (quickly recouped by long-term energy savings)",
  },
  {
    feature: "Voltage Fluctuation",
    normal: "Performance can be erratic; higher consumption",
    bldc: "Consistent performance even at low voltage",
  },
  {
    feature: "Smart Features",
    normal: "Basic (on/off, speed change)",
    bldc: "Often includes remote, timer, sleep mode, and smart home compatibility",
  },
  {
    feature: "Eco-Friendliness",
    normal: "Higher carbon footprint",
    bldc: "Lower carbon footprint (reduced energy consumption)",
  },
];

const advantagesData = [
  {
    icon: Power,
    title: "Unmatched Energy Savings – Guaranteed Impact",
    description:
      "Our BLDC fans are meticulously engineered to consume up to 65% less power than conventional fans. This isn't just a claim; it's a promise of tangible savings on your electricity bills, directly contributing to your household budget year after year.",
    image: "https://placehold.co/800x600/e0f2fe/0891b2?text=Savings",
  },
  {
    icon: ShieldCheck,
    title: '"Proudly Made In India" – A Commitment to Quality',
    description:
      "As a brand rooted in India, we uphold the highest standards of manufacturing and quality control. Choosing Adhunik Air Care means investing in a product built with superior craftsmanship and local expertise, ensuring quality you can trust.",
    image: "https://placehold.co/800x600/e0f2fe/0891b2?text=Quality",
  },
  {
    icon: Cpu,
    title: "Superior Durability with 100% Copper Winding",
    description:
      "We believe in building products that last. That's why our BLDC motors feature 100% copper winding. Copper, known for its excellent conductivity and durability, ensures better efficiency, less heat generation, and a longer lifespan for your fan. This commitment to quality is backed by our robust 2-year warranty.",
    image: "https://placehold.co/800x600/e0f2fe/0891b2?text=Durability",
  },
  {
    icon: Zap,
    title: "Uninterrupted Comfort – 3X Longer on Inverter",
    description:
      "Power cuts are a reality in many parts of India. Adhunik Air Care BLDC fans are designed for India's homes, consuming so little power that they run 3 times longer on inverter backup compared to traditional fans, ensuring consistent airflow even when you're off-grid.",
    image: "https://placehold.co/800x600/e0f2fe/0891b2?text=Backup",
  },
  {
    icon: VolumeX,
    title: "Whisper-Quiet Operation",
    description:
      "The brushless design of our motors, combined with precision engineering, means our fans operate with virtually silent performance. Say goodbye to annoying hums and enjoy a peaceful, serene environment in your home or office.",
    image: "https://placehold.co/800x600/e0f2fe/0891b2?text=Silence",
  },
  {
    icon: Wind,
    title: "Higher Air Delivery, Smarter Cooling",
    description:
      "Despite their low power consumption, Adhunik Air Care BLDC fans deliver 15% higher air delivery at their peak speed. This means you get powerful, effective cooling throughout your room, optimized for maximum comfort.",
    image: "https://placehold.co/800x600/e0f2fe/0891b2?text=Airflow",
  },
  {
    icon: Package,
    title: "Designed for Modern Living",
    description:
      "Our fans come equipped with smart features like convenient remote control, precise speed settings, and sleek designs that seamlessly integrate into any modern home aesthetic.",
    image: "https://placehold.co/800x600/e0f2fe/0891b2?text=Design",
  },
];

// --- Framer Motion Animation Variants ---
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Bldcvsnormalfans() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // For scroll animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // State for calculator
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [hours, setHours] = useState(8);
  const [rate, setRate] = useState(8);
  const [fans, setFans] = useState(3);

  // Calculate savings
  const normalConsumption = (75 * hours * 30 * fans) / 1000;
  const bldcConsumption = (30 * hours * 30 * fans) / 1000;
  const savings = normalConsumption - bldcConsumption;
  const monthlySavings = savings * rate;
  const annualSavings = monthlySavings * 12;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navLinks = ["Showdown", "Advantage", "Savings", "Contact"];

  return (
    <>
      <div className="min-h-screen  ">
      
    <motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="mt-28  md:mt-0 px-4 relative h-auto md:h-screen min-h-[800px] flex items-center justify-center bg-gradient-to-br from-cyan-50/20 to-white"
>
  <div className="absolute inset-0 overflow-hidden">
    <motion.div 
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-cyan-400/5 rounded-full filter blur-[100px]"
    ></motion.div>
    <motion.div 
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-cyan-400/5 rounded-full filter blur-[80px]"
    ></motion.div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <motion.section 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="md:p-5 pb-0 mb-0 flex flex-col md:flex-row"
    >
      <div className="blog-img mb-6 text-center">
        <motion.div 
          className="flex gap-4 md:gap-9 justify-evenly items-center flex-col md:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="w-full md:w-6/12 flex justify-center items-center rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="w-full h-full object-center object-cover rounded-3xl"
              src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1752217844/blog15_esyemu.webp"
              alt="Adhunik Powertech air washer"
              loading="lazy"
            />
          </motion.div>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-full md:w-6/12 md:text-center text-left text-gray-800 mb-6 flex justify-center md:items-center flex-col mt-2"
          >
            <div className="md:text-center text-left">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-sm font-medium flex justify-center md:justify-start mb-3 pt-6 items-center md:items-center text-cyan-800"
              >
                <Sparkles className="w-4 h-4 text-cyan-600 mr-4" /> Adhunik Air Care
              </motion.span>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-2xl text-center md:text-left md:text-4xl font-bold text-gray-900 mb-2 leading-tight"
              >
                <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                  <Link href='https://www.adhunikpowertech.com/hvac' className='hover:text-cyan-700 transition-colors'>
                    Beyond  
                  </Link>
                </span><br />
                <span className="font-light text-gray-700">
                  <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                    <Link href='https://adhunikdecodive.com/' className='hover:text-cyan-700 transition-colors'>
                      Just Air
                    </Link> 
                  </span> Circulation – The Evolution of Cooling
                </span>
              </motion.p>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="font-sans text-md text-gray-600 text-justify md:text-left pt-3"
            >
              In today's fast-paced world, the concept of a truly comfortable and functional space has evolved far beyond mere aesthetics. While a beautifully designed interior can undoubtedly inspire and delight, its true potential is only unlocked when it's seamlessly integrated with advanced comfort systems. <Link href='/' className='text-cyan-600 hover:text-cyan-700 transition-colors'>At Adhunik Powertech</Link>, we deeply understand that optimal climate control isn't just about maintaining a specific temperature – it's about curating an environment that feels just right, operating with quiet efficiency, and enhancing the overall well-being of its occupants.
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 self-start md:self-center"
            >
              <Link 
                href="/hvac"
                className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                Explore Solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  </div>

  <motion.div
    animate={{
      y: [0, 15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-600 hidden md:block"
  >
    <ChevronDown className="w-8 h-8" />
  </motion.div>
</motion.section>

        {/* Introduction */}
        <motion.section
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="py-20 px-6 max-w-6xl mx-auto"
        >
          <motion.div variants={item} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-800 mb-4">
              The Silent Revolution in Home Cooling
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              In every Indian home, the ceiling fan is more than just an
              appliance; it's a silent partner against the heat, a source of
              comfort, and a constant presence. For decades, the traditional AC
              (Alternating Current) ceiling fan was the undisputed king. But
              now, a revolutionary challenger has emerged: the BLDC (Brushless
              Direct Current) fan.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-cyan-700 mb-4">
                The Changing Landscape of Cooling
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With rising electricity bills and a growing awareness of energy
                conservation, choosing the right fan isn't just about airflow –
                it's about smart economics and sustainable living. If you're
                contemplating an upgrade or a new purchase, you're likely
                asking: "What's the real difference between BLDC and normal
                fans, and which one truly delivers value?"
              </p>
              <div className="flex items-center gap-4 text-cyan-700 font-medium">
                <AlertCircle className="w-6 h-6" />
                <span>Traditional fans consume 2-3x more power</span>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white  p-8 rounded-xl shadow-lg border border-cyan-200"
            >
              <h3 className="text-2xl font-bold text-cyan-700 mb-4">
                Adhunik Air Care Commitment
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Adhunik Air Care, we are committed to helping businesses and
                homes maximize their potential through smart, energy-efficient
                solutions. As a brand proudly Made in India, it brings you the
                most impactful products. Let's delve deep into a detailed
                comparison to illuminate the choice and show you why an Adhunik
                Air Care BLDC fan is the smart choice for your home.
              </p>
              <div className="flex items-center gap-4 text-cyan-700 font-medium">
                <CheckCircle className="w-6 h-6" />
                <span>Proudly Made in India</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Core Technology Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="py-20  border-t-[1px] border-cyan-600  from-cyan-100 "
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-800 mb-12 text-center">
              The Core Difference – AC vs. BLDC Motor Technology
            </h2>
            <p className="text-center text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              The heart of any fan lies in its motor. Understanding the
              fundamental difference here is key to appreciating the benefits of
              modern BLDC technology.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Normal Fan */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-md border-t-4 border-cyan-300"
              >
                <h3 className="text-2xl font-bold text-cyan-700 mb-4">
                  The Normal Fan: Relying on AC Induction Motors
                </h3>
                <div className="h-48 bg-gradient-to-r from-cyan-100  rounded-lg mb-6 flex items-center justify-center">
                  <Fan className="w-16 h-16 text-cyan-500" />
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Traditional ceiling fans operate using an AC Induction Motor.
                  These motors function by converting the alternating current
                  from your household power supply directly. They rely on
                  electromagnetic induction to create rotation. While robust and
                  well-understood, this technology comes with inherent
                  inefficiencies due to friction from brushes and continuous
                  magnetic field generation.
                </p>
                <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 p-4 rounded-lg border border-cyan-200">
                  <p className="font-semibold text-cyan-800 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    <span>
                      Typical Power Consumption:{" "}
                      <span className="text-cyan-600">70-80 watts</span>
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* BLDC Fan */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-b from-cyan-900 to-cyan-500 text-white p-8 rounded-xl shadow-md border-t-4 border-cyan-500"
              >
                <h3 className="text-2xl font-bold mb-4">
                  The BLDC Fan: The Power of Brushless DC Technology
                </h3>
                <div className="h-48 bg-gradient-to-r from-cyan-900/30 to-cyan-800/20 rounded-lg mb-6 flex items-center justify-center">
                  <Lightbulb className="w-16 h-16 text-cyan-300" />
                </div>
                <p className="mb-4 leading-relaxed">
                  BLDC stands for Brushless Direct Current. As the name
                  suggests, these motors operate on direct current and,
                  crucially, do away with the brushes found in older DC motors.
                  Instead, they use a sophisticated electronic circuit (a
                  controller) that converts the incoming AC power to DC. This
                  electronic commutation, combined with permanent magnets on the
                  rotor, is what makes them revolutionary.
                </p>
                <div className="bg-gradient-to-r from-cyan-900/40 to-cyan-800/30 p-4 rounded-lg border border-cyan-600/30">
                  <p className="font-semibold flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    <span>
                      Typical Power Consumption :{" "}
                      <span className="text-cyan-100">26-35 watts</span>
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Detailed Comparison Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-6 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-800 mb-12 text-center">
            Detailed Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                    Normal Fan
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                    BLDC Fan
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                    Advantage
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-cyan-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-cyan-600" />
                    Power Consumption
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    70-80 Watts
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    26-35 Watts
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-cyan-700">
                    BLDC saves 50-60% energy
                  </td>
                </motion.tr>

                <motion.tr
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-cyan-600" />
                    Energy Efficiency
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    60-70% efficient
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    85-90% efficient
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-cyan-700">
                    Less energy wasted as heat
                  </td>
                </motion.tr>

                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-cyan-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-cyan-600" />
                    Noise Level
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    50-60 dB
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    35-45 dB
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-cyan-700">
                    Quieter operation
                  </td>
                </motion.tr>

                <motion.tr
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-cyan-600" />
                    Speed Control
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    3-5 steps
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    Precise variable control
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-cyan-700">
                    Better comfort adjustment
                  </td>
                </motion.tr>

                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-cyan-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-cyan-600" />
                    Lifespan
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    5-7 years
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    10-12 years
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-cyan-700">
                    Longer durability
                  </td>
                </motion.tr>

                <motion.tr
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                    <IndianRupee className="w-5 h-5 text-cyan-600" />
                    Initial Cost
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹1,500-3,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹3,500-6,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-cyan-700">
                    Normal is cheaper upfront
                  </td>
                </motion.tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Energy Savings Calculator */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-gradient-to-b from-cyan-900 to-cyan-500 text-white"
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              onClick={() => setCalculatorOpen(!calculatorOpen)}
              className="flex items-center justify-between cursor-pointer mb-8"
              whileTap={{ scale: 0.98 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                <Calculator className="w-8 h-8" />
                Calculate Your Potential Savings
              </h2>
              <motion.div
                animate={{ rotate: calculatorOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>

            <AnimatePresence>
              {calculatorOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-cyan-300/30">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="mb-6">
                          <label className="block text-cyan-100 mb-2">
                            Hours used per day
                          </label>
                          <input
                            type="range"
                            min="1"
                            max="24"
                            value={hours}
                            onChange={(e) => setHours(e.target.value)}
                            className="w-full h-2 bg-cyan-200 rounded-lg appearance-none cursor-pointer"
                          />
                          <div className="flex justify-between mt-2">
                            <span className="text-cyan-100">1h</span>
                            <span className="text-white font-medium">
                              {hours}h
                            </span>
                            <span className="text-cyan-100">24h</span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <label className="block text-cyan-100 mb-2">
                            Electricity rate (₹ per unit)
                          </label>
                          <input
                            type="range"
                            min="4"
                            max="12"
                            step="0.5"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            className="w-full h-2 bg-cyan-200 rounded-lg appearance-none cursor-pointer"
                          />
                          <div className="flex justify-between mt-2">
                            <span className="text-cyan-100">₹4</span>
                            <span className="text-white font-medium">
                              ₹{rate}
                            </span>
                            <span className="text-cyan-100">₹12</span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <label className="block text-cyan-100 mb-2">
                            Number of fans in your home
                          </label>
                          <input
                            type="range"
                            min="1"
                            max="10"
                            value={fans}
                            onChange={(e) => setFans(e.target.value)}
                            className="w-full h-2 bg-cyan-200 rounded-lg appearance-none cursor-pointer"
                          />
                          <div className="flex justify-between mt-2">
                            <span className="text-cyan-100">1</span>
                            <span className="text-white font-medium">
                              {fans}
                            </span>
                            <span className="text-cyan-100">10</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/20 p-6 rounded-lg border border-cyan-300/30">
                        <h3 className="text-xl font-bold mb-6">
                          Your Potential Savings
                        </h3>

                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-cyan-100">
                              Monthly Consumption (Normal Fans):
                            </span>
                            <span className="font-medium">
                              {normalConsumption.toFixed(1)} units
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-cyan-100">
                              Monthly Consumption (BLDC Fans):
                            </span>
                            <span className="font-medium">
                              {bldcConsumption.toFixed(1)} units
                            </span>
                          </div>
                          <div className="border-t border-cyan-300/50 my-3"></div>
                          <div className="flex justify-between">
                            <span className="text-cyan-100">
                              Monthly Savings:
                            </span>
                            <span className="font-bold">
                              ₹{monthlySavings.toFixed(0)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-cyan-100">
                              Annual Savings:
                            </span>
                            <span className="font-bold">
                              ₹{annualSavings.toFixed(0)}
                            </span>
                          </div>
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="mt-8 p-4 bg-cyan-900/50 rounded-lg"
                        >
                          <p className="text-cyan-100 text-center">
                            With Adhunik BLDC fans, you could save up to{" "}
                            <span className="text-white font-bold">
                              ₹{annualSavings.toFixed(0)} per year
                            </span>{" "}
                            on electricity bills!
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>

  
      </div>

      <div className="bg-slate-50 font-sans text-slate-700 overflow-x-hidden relative">
        {/* Interactive Gradient Blob */}
        <motion.div
          className="pointer-events-none fixed -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-cyan-200 to-teal-200 opacity-20 rounded-full blur-3xl"
          animate={{ x: mousePosition.x, y: mousePosition.y }}
          transition={{ type: "tween", ease: "backOut", duration: 2 }}
        />

      

        {/* Main Content */}
        <main>
          {/* Hero Section */}
       

          {/* Comparison Section */}
          <motion.section
            id="showdown"
            className="py-20 md:py-32 bg-white"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl   font-bold text-slate-900">
                  Head-to-Head Showdown: BLDC Fan vs. Normal Fan
                </h2>
                <p className="text-md text-slate-600 mt-4 max-w-3xl mx-auto">
                  Let's break down the key performance indicators that <br /> matter
                  most to you, the homeowner :
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full   divide-y divide-slate-200">
                    <thead className="bg-slate-100 ">
                      <tr>
                        <th
                          scope="col"
                          className="py-5 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider"
                        >
                          Feature
                        </th>
                        <th
                          scope="col"
                          className="py-5 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider"
                        >
                          Normal (AC) Fan
                        </th>
                        <th
                          scope="col"
                          className="py-5 px-6 text-left text-xs font-semibold text-cyan-700 uppercase tracking-wider bg-cyan-50"
                        >
                          BLDC Fan (Adhunik Air Care)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {fullComparisonData.map((item, index) => (
                        <tr
                          key={index}
                          className="hover:bg-slate-50 transition-colors duration-200 text-sm"
                        >
                          <td className="py-5 px-6 whitespace-nowrap font-semibold text-slate-800">
                            {item.feature}
                          </td>
                          <td className="py-5 px-6 whitespace-nowrap text-slate-600">
                            {item.normal}
                          </td>
                          <td className="py-5 text-wrap px-6 whitespace-nowrap text-cyan-800 font-medium bg-cyan-50/50">
                            {item.bldc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
            </div>
          </motion.section>

          {/* Advantages Section */}
          <motion.section
            id="advantage"
            className="py-20 md:py-32 bg-slate-50"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="container mx-auto px-6">
              <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                  The Adhunik Air Care Advantage
                </h2>
                <p className="text-lg text-slate-600 mt-4">
                  While the general benefits of BLDC fans are compelling,
                  Adhunik Air Care brings specific advantages that truly set us
                  apart:
                </p>
              </div>
              <div className="space-y-24">
                {advantagesData.map((advantage, index) => (
                  <motion.div
                    key={index}
                    className={`grid md:grid-cols-2 gap-12 items-center`}
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.div
                      className={`relative ${
                        index % 2 !== 0 ? "md:order-2" : ""
                      }`}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-2xl opacity-20 blur-xl"></div>
                      <img
                        src={advantage.image}
                        alt={advantage.title}
                        className="relative w-full rounded-2xl shadow-2xl"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/800x600/e0f2fe/0891b2?text=Error";
                        }}
                      />
                    </motion.div>
                    <div
                      className={`text-center md:text-left ${
                        index % 2 !== 0 ? "md:order-1" : ""
                      }`}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md mb-6">
                        <advantage.icon className="w-8 h-8 text-cyan-600" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        {advantage.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Savings Section */}
          <motion.section
            id="savings"
            className="py-20 md:py-32 bg-white"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="container mx-auto px-6">
              <div className="relative bg-gradient-to-br from-cyan-500 to-teal-500 rounded-3xl shadow-2xl shadow-cyan-500/30 p-8 md:p-16 text-white overflow-hidden">
                <div className="text-center">
                  <BarChart className="mx-auto w-16 h-16 text-white mb-6" />
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Approximate Savings Calculation
                  </h2>
                  <p className="text-lg mb-8 text-cyan-100 max-w-4xl mx-auto">
                    Based on an average electricity rate of ₹6.5/unit in Delhi
                    and 16 hours of daily usage, an 80W normal fan consumes
                    about 1.28 kWh/day (₹8.32/day), while a 30W Adhunik Air Care
                    BLDC fan consumes approximately 0.48 kWh/day (₹3.12/day).
                    This translates to an annual saving of around ₹1900 per fan.
                    Multiply this by the number of fans in your home for
                    staggering savings!
                  </p>
                  <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                    <p className="text-cyan-100 text-lg">
                      Annual Saving Per Fan
                    </p>
                    <p className="text-5xl md:text-6xl font-extrabold text-white my-2">
                      ~ ₹1,900
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </main>

       
      </div>

            {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make the Smart Switch?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who are already enjoying the
              benefits of Adhunik Air Care BLDC fans - superior comfort,
              significant savings, and a greener tomorrow.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="bg-white text-cyan-700 hover:bg-cyan-50 font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-all flex items-center gap-2 mx-auto">
                Shop BLDC Fans <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </motion.section>
    </>
  );
}
