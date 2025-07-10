"use client";
import React, { useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Zap,
  ShieldCheck,
  Wrench,
  Thermometer,
  Building,
  Factory,
  ArrowRight,
  Menu,
  X,
  Server,
  CheckCircle2,
  Star,
  Wind,
} from "lucide-react";

import { AirVent, ThermometerSun, Building2,  HeartPulse, ConciergeBell, School, Home, Check } from 'lucide-react';


import { Cpu, CheckCircle, Cog } from 'lucide-react';

const servicesData = [
  {
    icon: <Thermometer className="w-10 h-10 text-cyan-600" />,
    title: "HVAC Systems",
    description:
      "Comprehensive maintenance for heating, ventilation, and air conditioning systems to ensure optimal air quality and comfort.",
  },
  {
    icon: <Factory className="w-10 h-10 text-cyan-600" />,
    title: "Industrial AC",
    description:
      "Specialized AMC for heavy-duty industrial air conditioning units, focusing on reliability and performance under demanding conditions.",
  },
  {
    icon: <Building className="w-10 h-10 text-cyan-600" />,
    title: "Commercial Cooling",
    description:
      "Tailored solutions for commercial spaces like offices, malls, and hospitals, maximizing efficiency and minimizing disruptions.",
  },
];

const benefitsData = [
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: "Maximize Efficiency",
    description:
      "Regular servicing keeps your systems running at peak performance, reducing energy consumption and lowering utility bills.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Prevent Breakdowns",
    description:
      "Our proactive approach identifies and resolves potential issues before they lead to costly downtime and emergency repairs.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    title: "Extend Lifespan",
    description:
      "Proper maintenance significantly extends the operational life of your valuable cooling equipment, protecting your investment.",
  },
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: "Expert Technicians",
    description:
      "Our team consists of highly skilled, technically vetted engineers with over 19 years of industry experience.",
  },
];




const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-cyan-100/30 to-transparent z-10"></div>
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/29470941/12686080_2560_1440_30fps.mp4"
      />
    </div>
    <div className="relative z-20 container mx-auto px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-gray-900"
        style={{ textShadow: "0px 2px 10px rgba(255, 255, 255, 0.5)" }}
      >
        Annual Maintenance Contracts (AMC) for HVAC, Industrial & Commercial
        Cooling Systems in Delhi NCR
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-3xl mx-auto text-lg md:text-xl text-gray-800 mb-8"
      >
        Ensure peak performance, maximize efficiency, and extend the lifespan of
        your critical cooling infrastructure with Adhunik Powertech's
        specialized AMC plans.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 10px 25px -5px rgba(0, 191, 255, 0.4), 0 8px 10px -6px rgba(0, 191, 255, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 text-lg"
        >
          Request a Free AMC Quote Today{" "}
          <ArrowRight className="inline-block ml-2" />
        </motion.button>
      </motion.div>
    </div>
  </section>
);

const IntroductionSection = () => (
  <section className="   ">
    <div className="container mx-auto px-4 pt-12">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-cyan-800"
        >
          Introduction
        </motion.h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-600 mb-6 leading-relaxed">
            Is your business in Delhi NCR plagued by unpredictable breakdowns,
            soaring energy bills, or premature equipment failure? In today's
            fast-paced industrial and commercial landscape, operational
            continuity is paramount. Adhunik Powertech offers tailored Annual
            Maintenance Contracts (AMC) designed to eliminate these concerns,
            ensuring your HVAC system, Industrial AC, and Commercial Cooling
            System run flawlessly year-round.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-lg mt-8 border border-gray-200/80">
            <div className="flex items-center space-x-4">
              <Award className="w-12 h-12 text-amber-500 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">
                  India Business Award 2025 for Best Services
                </h4>
                <p className="text-gray-500 mt-1">
                  With over{" "}
                  <span className="font-bold text-gray-700">
                    19 years of excellence
                  </span>
                  , our recognition guarantees optimal system performance,
                  significant cost savings, and complete peace of mind for
                  businesses throughout Delhi NCR.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-xl h-full shadow-2xl shadow-cyan-500/20 text-white"
        >
          <div className="flex items-start space-x-4">
            <Server className="w-8 h-8 text-white mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">
                What is an Adhunik Powertech AMC?
              </h3>
              <p className="text-cyan-100 mb-4 leading-relaxed">
                An Adhunik Powertech Annual Maintenance Contract (AMC) is more
                than just a service agreement; it's a strategic partnership
                designed to safeguard your critical cooling and HVAC
                infrastructure. It's a proactive investment in the longevity,
                efficiency, and reliability of your assets, managed by our team
                of highly skilled and technically vetted engineers and
                technicians.
              </p>
              <p className="text-cyan-100 leading-relaxed">
                Our AMC plans move beyond reactive repairs, focusing on a
                proactive, data-informed approach to predict potential failures
                before they escalate. This minimizes downtime, optimizes energy
                consumption, and extends the operational life of your assets,
                translating into tangible benefits for your business.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
      >
        Tailored AMC for Every Need
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-16"
      >
        We provide comprehensive maintenance plans for a wide range of cooling
        systems, ensuring your specific requirements are met with precision and
        expertise.
      </motion.p>
      <div className="grid md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              y: -8,
              boxShadow:
                "0 20px 25px -5px rgba(0, 191, 255, 0.1), 0 8px 10px -6px rgba(0, 191, 255, 0.1)",
            }}
            className="bg-white p-8 rounded-xl border border-gray-200/80 transition-all duration-300 cursor-pointer shadow-lg"
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section className="py-20 md:py-28 bg-gray-50">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
      >
        The Adhunik Powertech Advantage
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col items-start text-left p-6 bg-white rounded-lg shadow-md border border-gray-200/60"
          >
            <div className="bg-cyan-100 p-3 rounded-full mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-cyan-400 to-blue-500 p-12 rounded-2xl shadow-2xl shadow-cyan-500/30"
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
        >
          Eliminate Unpredictable Breakdowns & Soaring Energy Bills
        </h2>
        <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
          Let our experts design a custom AMC plan that fits your business needs
          and budget. Secure your operational continuity today.
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "#ffffff",
            color: "#0891b2",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-cyan-600 font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 text-lg"
        >
          Get Your Free Quote Now <ArrowRight className="inline-block ml-2" />
        </motion.button>
      </motion.div>
    </div>
  </section>
);

const AmcPlansSection = () => {
  const CheckIcon = () => (
    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mr-3 mt-1" />
  );
  const BenefitIcon = () => (
    <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mr-3 mt-1" />
  );

  return (
    <section className="py-20 md:py-28  ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Tailored Annual Maintenance Contract (AMC) Plans
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Adhunik Powertech offers flexible Annual Maintenance Contracts to
            suit the diverse needs of businesses across Delhi NCR and beyond.
            Our plans are designed to provide maximum value, transparency, and
            comprehensive coverage for your HVAC, Industrial AC, and Commercial
            Cooling Systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200/80 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-cyan-700 mb-2">
              1. Comprehensive AMC
            </h3>
            <p className="font-semibold text-gray-600 mb-4">
              (All-Inclusive Protection)
            </p>
            <p className="text-gray-500 mb-6">
              Ideal for: Businesses seeking maximum peace of mind, predictable
              budgeting, and complete coverage for their critical cooling
              systems.
            </p>

            <h4 className="font-bold text-gray-700 mb-3">
              Detailed Inclusions:
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong>Regular Scheduled Services :</strong>Typically includes
                  4 quarterly visits (3 dry services and 1 comprehensive wet
                  service/deep cleaning per year). Frequency can be customized
                  based on operational demands.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong>24/7 Emergency Breakdown Support :</strong>Guaranteed
                  rapid response times (e.g., within 5-8 hours for critical
                  industrial issues) to minimize operational disruption.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong>Genuine Parts Replacement :</strong> All essential spare parts (e.g., compressors, fan motors, PCBs, contactors, evaporator & condenser coils, filters, sensors, valves, thermostat controls) required during the contract period are covered
                </span>
                <span>
                  Specific wear-and-tear items or parts damaged due to external factors may be excluded; refer to your specific contract for full details.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong>Refrigerant Gas Charging :</strong>  Included if a leak is identified and expertly repaired by Adhunik Powertech technicians.

                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong>Labor Costs :</strong>  All labor charges for routine servicing, breakdown attendance, and repairs within the contract scope are fully covered.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong>System Diagnostics & Performance Tuning :</strong>{" "}
                  Comprehensive checks on system efficiency (COP/EER), airflow, temperature differentials, current consumption, and noise levels.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong>Pre-Season Start-up & Post-Season Shut-down Checks :</strong>  Optimized for seasonal changes to ensure year-round efficiency.

                </span>
              </li>
            </ul>

            <h4 className="font-bold text-gray-700 mt-6 mb-3">Key Benefits:</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <BenefitIcon />
                <span>
                  Predictable annual costs with no unexpected repair bills.
                </span>
              </li>
              <li className="flex items-start">
                <BenefitIcon />
                <span>Maximized uptime and operational continuity for your business.
                </span>
              </li>
              <li className="flex items-start">
                <BenefitIcon />
                <span>Significantly extended equipment lifespan.
                </span>
              </li>
              <li className="flex items-start">
                <BenefitIcon />
                <span>
                  Improved energy efficiency and reduced utility bills.
                </span>
              </li>
              <li className="flex items-start">
                <BenefitIcon />
                <span>
                  Complete peace of mind knowing your systems are in expert hands.

                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200/80 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-cyan-700 mb-2">
              2. Non-Comprehensive AMC
            </h3>
            <p className="font-semibold text-gray-600 mb-4">
              (Labor & Service Only)
            </p>
            <p className="text-gray-500 mb-6">
              Ideal for: Businesses with newer equipment, specific budgetary
              constraints, or those who prefer to manage spare parts procurement
              independently.
            </p>

            <h4 className="font-bold text-gray-700 mb-3">
              Detailed Inclusions:
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong>Regular Scheduled Services :</strong> Includes 4 quarterly visits (3 dry services and 1 comprehensive wet service/deep cleaning per year), customizable frequency
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong>24/7 Emergency Breakdown Support:</strong> Rapid
                  response for breakdown attendance.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong>Labor Costs:</strong>   All labor charges for routine servicing and breakdown repairs within the contract scope are covered.

                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong>System Diagnostics & Performance Tuning:</strong>{" "}

                  Comprehensive checks and calibration to ensure optimal operation.

                </span>
              </li>
            </ul>

            <h4 className="font-bold text-gray-700 mt-6 mb-3">Key Benefits:</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <BenefitIcon />
                <span>Cost-effective solution for proactive maintenance.</span>
              </li>
              <li className="flex items-start">
                <BenefitIcon />
                <span>Ensures expert labor for all servicing needs.</span>
              </li>
              <li className="flex items-start">
                <BenefitIcon />
                <span>
                  Proactive identification of potential issues, even if parts
                  are separate.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-3">
              3. Customized AMC Solutions
            </h3>
            <p className="text-cyan-100 leading-relaxed">
              <strong>Emphasizing Flexibility:</strong> Understanding that every
              business has unique needs, we offer bespoke AMC plans. Whether you
              have a mix of equipment, specific operational hours, unique
              budgetary considerations, or need specialized coverage for a
              unique cooling system, we can design a contract that perfectly
              fits your requirements. Our process involves a thorough
              consultation and site assessment to tailor a plan just for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-700 text-white p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-3">
              Specialized AMC Services for Critical Industrial Air Conditioning
              Systems
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Beyond general HVAC and Commercial AC maintenance contracts,
              Adhunik Powertech offers highly specialized Industrial AC AMC for
              the most critical cooling components that safeguard your
              industrial processes and sensitive equipment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CheckListItem = ({ children }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    className="flex items-start"
  >
    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mr-3 mt-1" />
    <span className="text-gray-600">{children}</span>
  </motion.li>
);

const BenefitListItem = ({ children }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="flex items-start"
  >
    <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mr-3 mt-1" />
    <span className="text-gray-600">{children}</span>
  </motion.li>
);

const ChillerTypeChip = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="bg-cyan-50 border border-cyan-200 text-cyan-800 text-sm font-medium px-4 py-2 rounded-full"
  >
    {children}
  </motion.div>
);

const ChillerContent = () => (
  <motion.div
    key="chiller"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="mb-8">
      <h2 className="text-gray-600 font-semibold pb-2 text-2xl leading-relaxed">
        Chiller Annual Maintenance Contracts
      </h2>
      <p className="text-gray-500 leading-relaxed">
        Chillers are the backbone of many industrial processes, large-scale climate control, and data centers. Their uninterrupted operation is vital. Our chiller AMC services are designed for maximum reliability and efficiency.
      </p>
    </div>

    <div className="mb-12">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of Chillers Covered</h3>
      <div className="flex flex-wrap gap-3">
        <ChillerTypeChip>Water-Cooled Chillers</ChillerTypeChip>
        <ChillerTypeChip>Air-Cooled Chillers</ChillerTypeChip>
        <ChillerTypeChip>Screw Chillers</ChillerTypeChip>
        <ChillerTypeChip>Reciprocating Chillers</ChillerTypeChip>
        <ChillerTypeChip>Centrifugal Chillers</ChillerTypeChip>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Detailed Inclusions for Chiller AMC</h3>
        <ul className="space-y-4">
          <CheckListItem><strong>Compressor Health Checks:</strong> Comprehensive diagnostics including vibration analysis, oil analysis (if applicable), and winding insulation tests to predict and prevent major failures.</CheckListItem>
          <CheckListItem><strong>Condenser & Evaporator Coil Cleaning:</strong> Specialized chemical cleaning and tube brushing for water-cooled chillers; thorough fin cleaning for air-cooled units to maintain optimal heat transfer.</CheckListItem>
          <CheckListItem><strong>Refrigerant Management:</strong> Precise pressure checks, advanced leak detection using specialized tools, and accurate top-ups (as per contract terms) to ensure system integrity.</CheckListItem>
          <CheckListItem><strong>Control Panel & Automation Checks:</strong> Calibration of sensors, DDC/PLC controller diagnostics, and verification of all safety interlocks for precise operation.</CheckListItem>
          <CheckListItem><strong>Pump & Motor Maintenance:</strong> Bearing lubrication, precise alignment checks, and current draw analysis to prevent mechanical failures.</CheckListItem>
          <CheckListItem><strong>Cooling Tower Maintenance (if integrated):</strong> Water quality checks, fill media cleaning, and inspection of fan and motor components.</CheckListItem>
          <CheckListItem><strong>Performance Optimization:</strong> Detailed efficiency calculations (COP/EER) and log sheet analysis for trend monitoring and proactive adjustments.</CheckListItem>
          <CheckListItem><strong>Detailed Reporting:</strong> Comprehensive reports on chiller health, energy consumption, and recommended upgrades for long-term planning.</CheckListItem>
        </ul>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Benefits of Chiller AMC</h3>
        <ul className="space-y-4">
          <BenefitListItem><strong>Maximized Uptime for Production:</strong> Critical for manufacturing, data centers, and process cooling.</BenefitListItem>
          <BenefitListItem><strong>Significant Energy Cost Reduction:</strong> Optimized performance leads to lower operational expenses.</BenefitListItem>
          <BenefitListItem><strong>Extended Chiller Lifespan:</strong> Protects your substantial investment in cooling infrastructure.</BenefitListItem>
          <BenefitListItem><strong>Optimal Process Temperature Control:</strong> Ensures consistent and reliable cooling for sensitive operations.</BenefitListItem>
        </ul>
      </div>
    </div>
  </motion.div>
);

const PanelAcContent = () => (
  <motion.div
    key="panel-ac"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="mb-8">
      <h2 className="text-gray-600 font-semibold pb-2 text-2xl leading-relaxed">
        Panel Air Conditioner Annual Maintenance Contracts

      </h2>
      <p className="text-gray-500 leading-relaxed">
        Panel ACs are indispensable for safeguarding sensitive electronics, control panels, and automation equipment from heat, dust, and humidity. Their failure can lead to severe operational disruptions or data loss.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Detailed Inclusions for Panel AC AMC</h3>
        <ul className="space-y-4">
          <CheckListItem><strong>Filter Cleaning/Replacement:</strong> Regular cleaning and timely replacement of filters for optimal airflow and superior dust protection within the panel.</CheckListItem>
          <CheckListItem><strong>Condenser & Evaporator Coil Cleaning:</strong> Thorough cleaning crucial for maintaining efficiency in compact units and preventing overheating.</CheckListItem>
          <CheckListItem><strong>Electrical Component Checks:</strong> Tightening of terminals, current draw analysis, and comprehensive inspection of fan motors and wiring.</CheckListItem>
          <CheckListItem><strong>Drainage System Cleaning:</strong> Preventing blockages and ensuring proper condensation drainage to avoid water damage to sensitive electronics.</CheckListItem>
          <CheckListItem><strong>Temperature & Humidity Calibration:</strong> Ensuring precise climate control within the panel, critical for electronic longevity.</CheckListItem>
          <CheckListItem><strong>Seal Integrity Checks:</strong> Verifying the integrity of seals to prevent ingress of dust and moisture.</CheckListItem>
          <CheckListItem><strong>Noise & Vibration Analysis:</strong> Identifying potential issues with fans or compressors before they escalate.</CheckListItem>
          <CheckListItem><strong>Proactive Component Assessment:</strong> Expert assessment to identify wear and tear on critical parts, enabling replacement before failure.</CheckListItem>
        </ul>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Benefits of Panel AC AMC</h3>
        <ul className="space-y-4">
          <BenefitListItem><strong>Protection of Critical Electronics:</strong> Safeguards PLCs, VFDs, and other sensitive control equipment.</BenefitListItem>
          <BenefitListItem><strong>Prevention of Production Downtime:</strong> Ensures automation and control systems remain operational.</BenefitListItem>
          <BenefitListItem><strong>Data Integrity:</strong> Maintains optimal conditions for server racks and network equipment.</BenefitListItem>
          <BenefitListItem><strong>Extended Equipment Life:</strong> Maximizes the lifespan of expensive control components.</BenefitListItem>
        </ul>
      </div>
    </div>
  </motion.div>
);


const Amc5 = () => {
  const [activeTab, setActiveTab] = useState('chiller');

  const tabs = [
    { id: 'chiller', label: 'Chiller AMC', icon: <Wind className="w-5 h-5 mr-2" /> },
    { id: 'panel-ac', label: 'Panel AC AMC', icon: <Cpu className="w-5 h-5 mr-2" /> },
  ];

  return (
    <div className="min-h-screen   font-sans flex items-center justify-center p-4">
      <div className="w-full  border-cyan-600 border-2 rounded-2xl  max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-2xl shadow-gray-300/40 overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="flex items-center space-x-3 mb-4">
              <Cog className="w-8 h-8 text-cyan-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Specialized Maintenance Contracts</h1>
            </div>

            <div className="border-b border-gray-200 mb-8">
              <nav className="-mb-px flex space-x-6">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${activeTab === tab.id
                        ? 'text-cyan-600'
                        : 'text-gray-500 hover:text-gray-700'
                      } relative whitespace-nowrap py-4 px-1 text-md font-medium flex items-center transition-colors duration-300`}
                  >
                    {tab.icon}
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500"
                        layoutId="underline"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'chiller' ? <ChillerContent /> : <PanelAcContent />}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const equipmentData = [
  {
    icon: <AirVent className="w-10 h-10 text-cyan-600" />,
    title: "HVAC Systems (General)",
    items: ["Centralized HVAC", "VRF/VRV Systems", "Air Handling Units (AHUs)", "Fan Coil Units (FCUs)", "Ducting Networks"]
  },
  {
    icon: <ThermometerSun className="w-10 h-10 text-cyan-600" />,
    title: "Air Conditioning (AC) Units",
    items: ["Split AC", "Window AC", "Cassette AC", "Ductable AC", "Tower AC", "Packaged AC Units"]
  },
  {
    icon: <Factory className="w-10 h-10 text-cyan-600" />,
    title: "Industrial Air Conditioning",
    items: ["Water-Cooled Chillers", "Air-Cooled Chillers", "Screw Chillers", "Reciprocating Chillers", "Centrifugal Chillers", "Precision Air Conditioning (PAC) Units", "Panel ACs"]
  },
  {
    icon: <Building2 className="w-10 h-10 text-cyan-600" />,
    title: "Commercial Cooling Systems",
    items: ["Large commercial AC units", "Cooling Towers", "Evaporative Cooling Systems (Air Washers, Industrial Air Coolers)"]
  },
  {
    icon: <Wind className="w-10 h-10 text-cyan-600" />,
    title: "Ventilation Systems",
    items: ["Exhaust Fans", "Fresh Air Units"]
  }
];

const beneficiariesData = [
  {
    icon: <Factory className="w-8 h-8 text-blue-600" />,
    title: "Industrial Facilities",
    description: "Manufacturing Plants, Warehouses, Cold Storage, Pharmaceutical Facilities, IT/Data Centers, needing precise process cooling and uptime for critical machinery (e.g., with chillers and panel ACs). Our Industrial AC AMC is designed for you."
  },
  {
    icon: <Building className="w-8 h-8 text-blue-600" />,
    title: "Commercial Buildings",
    description: "Office Complexes, Retail Outlets, Shopping malls, Hotels, ensuring comfortable and productive environments with effective Commercial HVAC maintenance contracts."
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
    title: "Healthcare",
    description: "Hospitals, Clinics, Laboratories, where stable temperatures and clean air are crucial for patient care and sensitive equipment."
  },
  {
    icon: <ConciergeBell className="w-8 h-8 text-blue-600" />,
    title: "Hospitality",
    description: "Hotels, Restaurants, Banquet Halls, relying on consistent cooling for guest comfort and operational efficiency."
  },
  {
    icon: <School className="w-8 h-8 text-blue-600" />,
    title: "Educational Institutions",
    description: "Schools, Colleges, Universities, providing conducive learning environments with well-maintained cooling systems."
  },
  {
    icon: <Home className="w-8 h-8 text-blue-600" />,
    title: "Luxury Residential & Mixed-Use",
    description: "Ensuring sophisticated climate control systems operate flawlessly for unparalleled comfort and system longevity, as trusted by prestigious complexes like DLF Magnolias."
  }
];

// --- HELPER COMPONENTS ---
const EquipmentCard = ({ icon, title, items, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="bg-white p-6 rounded-xl shadow-md border border-gray-200/80 h-full flex flex-col"
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-bold text-gray-800 ml-4">{title}</h3>
    </div>
    <ul className="space-y-2 flex-grow">
      {items.map(item => (
        <li key={item} className="flex items-start">
          <Check className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const BeneficiaryCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gradient-to-br from-cyan-50 to-blue-100 p-6 rounded-lg text-left"
  >
    <div className="flex items-center mb-3">
      <div className="bg-white p-3 rounded-full shadow-sm mr-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);


const Amc6 = () => {

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="container mx-auto px-4 py-16 md:py-24">

        {/* --- Section 1: Equipment Covered --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Comprehensive Annual Maintenance Contracts for All Your Cooling & HVAC Needs</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide expert AMC services for a wide range of industrial and commercial cooling equipment, ensuring your diverse infrastructure operates flawlessly:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {equipmentData.map((equip, index) => (
            <EquipmentCard key={equip.title} index={index} {...equip} />
          ))}
        </div>

        {/* --- Section 2: Who Benefits --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Who Benefits from Adhunik Powertech's HVAC & Industrial Cooling AMC?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our tailored Annual Maintenance Contracts are designed to serve a diverse range of sectors requiring reliable climate control and cooling solutions. If your operations depend on efficient HVAC systems, Industrial AC, or Commercial Cooling Systems, you stand to gain from our expertise:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficiariesData.map((beneficiary, index) => (
            <BeneficiaryCard key={beneficiary.title} index={index} {...beneficiary} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default function AnnualMaintenance() {
  const slides = [
    {
      id: 1,
      video:
        "https://res.cloudinary.com/ddkyx2jhh/video/upload/v1738750032/Fire_Overview__k7uos8.mp4",
      title: (
        <>
          {" "}
          Reliable Maintenance Today, <br /> Assured Performance Tomorrow.
        </>
      ),
      description: "",
      buttonText: (
        <>
          {" "}
          <div className=" text-left pb-2">
            Annual Maintenance <br /> Contract
          </div>
        </>
      ),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Auto-play every 5 seconds

    return () => clearInterval(slideInterval); // Clean up on unmount
  }, [slides.length]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
  };

  // Handle dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentPos = e.clientX;
    const diff = startPos - currentPos;

    // If the user drags left
    if (diff > 50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setIsDragging(false);
    }

    // If the user drags right
    if (diff < -50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setIsDragging(false);
    }
  };

  // End dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // End dragging when mouse leaves the slide area
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Manual slide control via dots
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };


  return (
    <>
      <div className="row ">
        <div
          className="relative w-full h-screen overflow-hidden"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <video
                autoPlay
                poster="/mv2.webp"
                loop
                muted
                type="video/mp4"
                className="w-full h-full object-cover"
                style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
              >
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="flex items-center h-full bg-black bg-opacity-30">
                <div className=" text-white  text-center md:text-left  lg:px-16">
                  <p className="  text-3xl md:text-6xl  font-sans md:w-[90%]  mb-2 font-thin">
                    {slide.title}
                  </p>
                  <p className=" text-[14px]   md:w-[70%]">
                    {slide.description}
                  </p>
                  <button className=" cursor-pointer relative  text-3xl z-10   top-28 mt-4   text-white rounded-lg shadow-lg transition-colors duration-300">
                    {slide.buttonText}
                    <div className=" font-sans text-sm flex justify-start items-center ">
                      Home{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                      Overview
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Progress indicators (dots) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-5 h-1 rounded-sm  ${index === currentSlide ? "bg-[#FC6C1E]" : "bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>

        <section className="annual-sec py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl text-center font-bold mb-6">
              Annual Maintenance Contracts
            </h1>
            {/* Image Cards Row */}
            <div className="flex flex-wrap -mx-4  text-center">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="annual-1 justify-center items-center flex flex-col">
                  <img
                    src="amc1.png"
                    alt="Happiness by Smart Savings"
                    loading="lazy"
                    height="300"
                    width="300"
                    className="w-32 h-auto"
                  />

                  <div className="annual-img-1 mt-4">
                    <h3 className="text-xl font-semibold">
                      Happiness by Smart Savings
                    </h3>
                    <p className="mt-2">
                      With all functional parts charges and labor costs waived,
                      you get extreme savings on your repair bills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="annual-1 justify-center items-center flex flex-col">
                  <img
                    src="amc2.png"
                    loading="lazy"
                    alt="Happiness by Smart Assistance"
                    className=" w-32 h-auto"
                    height="300"
                    width="300"
                  />

                  <div className="annual-img-1 mt-4">
                    <h3 className="text-xl font-semibold">
                      Happiness by Smart Assistance
                    </h3>
                    <p className="mt-2">
                      We offer a team of trained engineers to take care of your
                      products and genuine spare parts, if replacement is
                      required.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="annual-1 justify-center items-center flex flex-col">
                  <img
                    src="amc3.png"
                    loading="lazy"
                    alt="Happiness by Smart Assistance"
                    className=" w-32 h-auto"
                    height="300"
                    width="300"
                  />
                  <div className="annual-img-1 mt-4">
                    <h3 className="text-xl font-semibold">
                      Happiness by Smart Summon
                    </h3>
                    <p className="mt-2">
                      Just in case there's trouble, all you need to do is call
                      our customer support center number and we will take care
                      of your worries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="mt-10">
              <h2 className="text-4xl text-center font-bold mb-6">
                Types of Annual Maintenance Contracts
              </h2>
              <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300 text-left">
                  <caption className="  uppercase text-base font-semibold text-gray-700 mb-2">
                    Annual Maintenance Contracts
                  </caption>
                  <tbody>
                    {/* Labour Only */}
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 bg-gray-100" rowSpan="3">
                        Labour Only
                      </th>
                      <td className="py-2 px-4 text-green-600">
                        Service Included
                      </td>
                      <td className="py-2 px-4 text-red-600">
                        Service Excluded
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">General Services</td>
                      <td className="py-2 px-4 text-red-600">
                        All Spare Parts
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Any Unwanted Breakdowns</td>
                      <td className="py-2 px-4"></td>
                    </tr>

                    {/* Non-Comprehensive Annual Maintenance Contract */}
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 bg-gray-100" rowSpan="12">
                        Non-Comprehensive Annual Maintenance Contract
                      </th>
                      <td className="py-2 px-4 text-green-600">
                        Service Included
                      </td>
                      <td className="py-2 px-4 text-red-600">
                        Service Excluded
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">
                        General Servicing (4 Times a Year)
                      </td>
                      <td className="py-2 px-4 text-red-600">Compressor</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Any Unwanted Breakdowns</td>
                      <td className="py-2 px-4 text-red-600">
                        Sheet Metal Parts
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">
                        Refrigerant Gas Charging at the time of
                        Compressor/Sensor/Four Valve Replacement, and for
                        reasons other than attributable to Environmental
                        Corrosion.
                      </td>
                      <td className="py-2 px-4 text-red-600">Plastic Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">
                        The Following spare part shall be replaced/repaired free
                        of cost in case of any breakdown during the Annual
                        Maintenance Service Period: Fan Motor, PCB &amp;
                        Transformer
                      </td>
                      <td className="py-2 px-4 text-red-600">Air Filters</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Relay Maintenance</td>
                      <td className="py-2 px-4 text-red-600">
                        Handset Remote Control
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4" rowSpan="6">
                        Oiling of Spare Parts
                      </td>
                      <td className="py-2 px-4 text-red-600">
                        Condenser &amp; Evaporator Coils
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">
                        Shifting &amp; Re-installation
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">
                        Voltage Stabilizers &amp; Scanners
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">
                        Circuit Breakers
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">
                        Thermocol Parts
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">
                        Refrigerant leakage due to corrosion in environmental
                        conditions is not covered, and any breakdown due to
                        faulty power supply and mishandling by external factors
                        are not covered.
                      </td>
                    </tr>

                    {/* Comprehensive Annual Maintenance Contract */}
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 bg-gray-100" rowSpan="11">
                        Comprehensive Annual Maintenance Contract
                      </th>
                      <td className="py-2 px-4 text-green-600">
                        Service Included
                      </td>
                      <td className="py-2 px-4 text-red-600">
                        Service Excluded
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">
                        General Servicing (4 Times a Year)
                      </td>
                      <td className="py-2 px-4 text-red-600">Plastic Parts</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">
                        Priority attendance on Any Unwanted Breakdowns
                      </td>
                      <td className="py-2 px-4 text-red-600">Air Filters</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">
                        Refrigerant Gas Charging at the time of
                        Compressor/Sensor/Four Valve Replacement, and for
                        reasons other than attributable to Environmental
                        Corrosion.
                      </td>
                      <td className="py-2 px-4 text-red-600">
                        Sheet Metal Parts
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">
                        The Following spare part shall be replaced/repaired free
                        of cost in case of any breakdown during the Annual
                        Maintenance Service Period: Compressor, Fan Motor, PCB
                        &amp; Transformer
                      </td>
                      <td className="py-2 px-4 text-red-600">
                        Condenser &amp; Evaporator Coils
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Relay Maintenance</td>
                      <td className="py-2 px-4 text-red-600">
                        Shifting &amp; Re-installation
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4">Relay Maintenance</td>
                      <td className="py-2 px-4 text-red-600">
                        Handset Remote Control
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4" rowSpan="4">
                        Oiling of Spare Parts
                      </td>
                      <td className="py-2 px-4 text-red-600">
                        Voltage Stabilizers &amp; Scanners
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">
                        Circuit Breakers
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">
                        Thermocol Parts
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4 text-red-600">
                        Refrigerant leakage due to corrosion in environmental
                        conditions is not covered, and any breakdown due to
                        faulty power supply and mishandling by external factors
                        are not covered.
                      </td>
                    </tr>

                    {/* Routine Servicing */}
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 bg-gray-100" rowSpan="3">
                        Routine Servicing
                      </th>
                      <td className="py-2 px-4" colSpan="2">
                        Total 4 Services in a Year
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4" colSpan="2">
                        Wet Service: Once a year
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 px-4" colSpan="2">
                        Dry Service: 3 Times a Year
                      </td>
                    </tr>

                    {/* Breakdowns */}
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 bg-gray-100">Breakdowns</th>
                      <td className="py-2 px-4" colSpan="2">
                        Any Breakdown Complaints (Guaranteed resolved within 5-8
                        Hours)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Benefits List */}
            <div className="mt-10">
              <h4 className="text-xl font-bold mb-4">
                Our AMC Benefit Involves :
              </h4>

              <ul className="list-disc ml-5 space-y-2">
                <li>
                  If any breakdown occurs then immediate action will be taken on
                  priority bases.
                </li>
                <li>On-call 24x7 assistance for any unwanted breakdowns.</li>
                <li>
                  A systematic check of all electrical components, compressors,
                  fans, motors, etc.
                </li>
                <li>Genuine spare parts.</li>
                <li>Wet &amp; Dry Services.</li>
                <li>Cleaning of air filter &amp; unit.</li>
                <li>Cleaning of cooling coil &amp; condenser coil etc.</li>
                <li>Oiling/Lubrication of the fan motor.</li>
                <li>Checking overall performance and current consumptions.</li>
                <li>
                  Details report of the A/C unit will be made and handed over to
                  the customer for their reference.
                </li>
                <li>
                  Servicing Air Conditioners Unit will be on a Monthly/Alternate
                  Monthly and Quarterly basis as per customer desires.
                </li>
                <li>Refrigerant 22, 32, 134a, 407c &amp; 410a Charging.</li>
                <li>
                  Once your product is covered under our AMC Plan, then Om
                  Cooling takes complete care of your product with
                  regular/scheduled checkups.
                </li>
                <li>
                  Our well-maintained Customer Management System (CMS) and
                  help-line desk service keep all your purchases and complaints
                  recorded systematically and we commit to providing you with
                  the solution without your reminders.
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <div className="energy-img flex justify-center items-center mb-6">
                <img
                  src="amc4.jpg"
                  alt="Annual Maintenance Contract"
                  loading="lazy"
                  className=" md:w-6/12 md:h-6/12"
                  height="300"
                  width="300"
                />
              </div>
              <div className="content-maintanance">
                <p className="text-2xl font-sans font-semibold text-center mb-4 ">
                  AIR CONDITIONING REPAIR &amp; SERVICE
                </p>
                <p className="mb-4 font-sans font-normal">
                  We revamp all varieties of ACs like{" "}
                  <strong>
                    Window AC, Split AC &amp; Central Air Conditioning.{" "}
                  </strong>
                  Also, we cover all high-end brands like{" "}
                  <strong>
                    Carrier, Hitachi, Daikin, Mitsubishi, Blue star &amp;
                    Voltas,
                  </strong>{" "}
                  etc. We cater to commercial as well as Industrial ACs as well.
                  Bulk <strong>repairing jobs</strong> are an everyday task for
                  us. We believe in using only quality spare parts for repairs.
                  Our service coordinator shall provide all the briefings.
                  Subject to your approval, most repairs are carried out
                  immediately and the air conditioner is back up and running
                  better than ever.
                </p>

                <p className=" text-center p-3 text-white bg-gradient-to-r from-[#f74c06] to-[#efb42b] motive font-semibold mb-4">
                  For further information regarding Annual Maintenance Contract
                  (AMC) service, pricing, etc., related queries. Kindly contact
                  our Customer Care Number :
                </p>

                <p className="font-bold mb-2">
                  <a
                    href="tel:8287885885"
                    className="text-blue-600 hover:underline"
                  >
                    Customer Contact Number: 8287885885
                  </a>
                </p>

                <p className="font-bold mb-2">
                  <a
                    href="mailto:info@adhunikpowertech.com"
                    className="text-blue-600 hover:underline"
                  >
                    Email: info@adhunikpowertech.com
                  </a>
                </p>
                <p className="font-bold">
                  ** All jobs are done subject to the Terms &amp; Conditions of
                  the contract
                </p>
              </div>
            </div>
          </div>
        </section>

        <main>
          <HeroSection />
          <IntroductionSection />
          <ServicesSection />
          <BenefitsSection />

          <AmcPlansSection />

          <Amc5 />
          <Amc6 />
          <CTASection />
        </main>
      </div>
    </>
  );
}
