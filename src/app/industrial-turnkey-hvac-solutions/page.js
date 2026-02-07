"use client";
import React from "react";
import {
    ShieldCheck,
    Clock,
    Award,
    Users,
    Wrench,
    Zap,
    CheckCircle,
    Factory,
    Settings,
    TrendingUp,
    Thermometer,
    ChevronsRight,
    Layout,
    BarChart3,
    Construction,
    RotateCcw,
    Scale,
    ShieldAlert,
    Cpu
} from "lucide-react";

export default function TurnkeyHVACSolutionsBlog() {
    // Core Benefits of Turnkey Model
    const turnkeyBenefits = [
        {
            title: "Custom Engineering",
            description:
                "Data-driven design using CAD layouts and airflow modeling. We avoid energy wastage by sizing systems perfectly for your machinery and roof structure.",
            icon: <Cpu className="w-8 h-8 text-cyan-600" />,
        },
        {
            title: "Single-Point Accountability",
            description:
                "No more vendor finger-pointing. From design and manufacturing to installation and commissioning, the entire responsibility falls under one roof.",
            icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />,
        },
        {
            title: "Energy Efficiency (Up to 30%)",
            description:
                "Integration of VFDs, smart controls, and optimized ducting layouts reduces power consumption by up to 25-30% compared to standard setups.",
            icon: <Zap className="w-8 h-8 text-cyan-600" />,
        },
        {
            title: "Full Regulatory Compliance",
            description:
                "Systems engineered to meet ASHRAE, ISHRAE, and NBC standards, ensuring your facility is ready for audits and environmental approvals.",
            icon: <Scale className="w-8 h-8 text-cyan-600" />,
        },
    ];

    // Lifecycle Stages
    const lifecycleStages = [
        {
            title: "Phase 1: Design",
            description: "Detailed heat load calculations and technical system architecture.",
            icon: <Layout className="w-8 h-8 text-cyan-700" />,
        },
        {
            title: "Phase 2: Execution",
            description: "In-house manufacturing of AHUs and equipment followed by on-site installation.",
            icon: <Construction className="w-8 h-8 text-cyan-700" />,
        },
        {
            title: "Phase 3: Handover",
            description: "Rigorous testing, commissioning, and turning the key for immediate operation.",
            icon: <RotateCcw className="w-8 h-8 text-cyan-700" />,
        },
    ];

    // Table Data for Components
    const hvacComponents = [
        { name: "Heat Load Calculation", role: "Determines accurate cooling capacity based on process and occupancy.", icon: <BarChart3 className="w-5 h-5" /> },
        { name: "Ducting & Airflow", role: "Ensures uniform cooling with no hot zones throughout the shop floor.", icon: <Settings className="w-5 h-5" /> },
        { name: "Air Handling Units (AHUs)", role: "Precision control over airflow, filtration, and humidity levels.", icon: <Factory className="w-5 h-5" /> },
        { name: "Process Cooling", role: "Direct cooling for machinery and sensitive production lines.", icon: <Thermometer className="w-5 h-5" /> },
        { name: "Control Systems", role: "BMS integration for maximum energy efficiency and remote monitoring.", icon: <Cpu className="w-5 h-5" /> },
    ];

    return (
        <div className="bg-gray-50 mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* HERO SECTION - RESTRUCTURED TYPOGRAPHY SCALE */}
                <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
                    <div className="w-full md:w-6/12">
                        <h1 className="text-2xl md:text-4xl font-bold text-cyan-800 mb-4 leading-tight">
                            Turnkey HVAC Solutions: The Complete Industrial Guide
                        </h1>
                        
                        <p className="text-sm text-gray-800 mb-3 text-justify md:text-left">
                            In today’s highly competitive industrial environment, climate control is no longer a supporting function—it is a critical operational asset. Maintaining the right temperature, ventilation, and air quality directly impacts productivity, product quality, equipment life, and energy costs.
                        </p>
                        <p className="text-sm text-gray-800 mb-3 text-justify md:text-left">
                            Adhunik Powertech simplifies complex cooling projects with 
                            <strong> Single-Point Responsibility</strong>—taking your project from initial 
                            heat load design to final commissioning.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-cyan-700" />
                                <span className="font-semibold text-cyan-800 text-sm">
                                    Design & EPC Expertise
                                </span>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-cyan-700" />
                                <span className="font-semibold text-cyan-800 text-sm">
                                    600+ Projects Completed
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-start mb-8">
                            <a
                                href="/support-form"
                                className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-xl flex items-center text-sm"
                            >
                                <ChevronsRight className="w-5 h-5 mr-2" />
                                Discuss Your Project
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-6/12">
                        <img
                            src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1770457627/Havc_Turnkey_b8xazd.webp"
                            alt="Industrial HVAC Turnkey Project Installation"
                            width="1260"
                            height="750"
                            loading="lazy"
                            className="w-full h-auto rounded-xl shadow-lg"
                        />
                    </div>
                </section>

                <hr className="border-gray-300 my-8" />

                {/* THE "WHY" SECTION */}
                <section className="my-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
                            Why Industries Choose Turnkey Models
                        </h2>
                        <p className="mt-4 max-w-5xl mx-auto text-gray-600 text-base">
                            Instead of dealing with multiple vendors, industrial leaders choose HVAC turnkey solutions that offer a single-point responsibility—from design to commissioning.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {turnkeyBenefits.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md border-t-4 border-cyan-600 flex flex-col items-start hover:shadow-lg transition-shadow duration-200"
                            >
                                <div className="mb-3">{item.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 text-justify leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="border-gray-300 my-8" />

                {/* EXECUTION LIFECYCLE SECTION */}
                <section className="mb-16 bg-blue-50 p-8 rounded-xl shadow-inner text-center">
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
                            End-to-End Execution Lifecycle
                        </h2>
                        <p className="mt-4 max-w-5xl mx-auto text-gray-600 text-base">
                            Adhunik Powertech manages every technical coordination hassle to ensure your facility starts operation without technical conflicts.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                        {lifecycleStages.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md border-b-4 border-cyan-600 flex flex-col items-center"
                            >
                                <div className="mb-3">{item.icon}</div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="border-gray-300 my-8" />

                {/* TABLE SECTION */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
                            Strategic System Components
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 shadow-xl rounded-lg overflow-hidden">
                            <thead className="bg-cyan-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Component</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Role in Industrial HVAC</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {hvacComponents.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 flex items-center">
                                            <span className="text-cyan-600 mr-2">{item.icon}</span>
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {item.role}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <hr className="border-gray-300 my-8" />

                {/* MISTAKES SECTION */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-red-700">
                            Critical Mistakes to Avoid
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg border-t-8 border-red-600">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldAlert className="w-8 h-8 text-red-600" />
                                <h3 className="text-xl font-bold text-gray-800">Industrial Pitfalls</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Low-bid contractors with zero engineering depth.",
                                    "Poor ducting installation causing air leakage.",
                                    "Non-standard components with no spare availability.",
                                    "Systems failing under harsh Indian ambient heat."
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-2 text-sm text-gray-600">
                                        <span className="font-bold text-red-600">✕</span> {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border-t-8 border-green-600">
                             <div className="flex items-center gap-3 mb-4">
                                <Award className="w-8 h-8 text-green-700" />
                                <h3 className="text-xl font-bold text-gray-800">The Adhunik Advantage</h3>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
                                With over 19 years of industry experience, we design low-maintenance, high-durability systems using industrial-grade components suitable for continuous operation and Indian conditions.
                            </p>
                            <div className="flex gap-6">
                                <div>
                                    <div className="text-2xl font-bold text-cyan-700">19+</div>
                                    <div className="text-xs text-gray-500 uppercase font-bold">Years Experience</div>
                                </div>
                                <div className="w-px h-10 bg-gray-200"></div>
                                <div>
                                    <div className="text-2xl font-bold text-cyan-700">600+</div>
                                    <div className="text-xs text-gray-500 uppercase font-bold">Projects Delivered</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA SECTION */}
                <section className="bg-gradient-to-r from-cyan-700 to-cyan-900 rounded-2xl p-10 md:p-14 text-white shadow-2xl text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
                            Ready to Build a Smarter Industrial Cooling System?
                        </h2>
                        <p className="text-cyan-100 mb-7 text-sm md:text-base leading-relaxed">
                            Scale your operations with precision-engineered HVAC systems. From concept design to final commissioning, we handle the entire project lifecycle to eliminate operational risk.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-5">
                            <a
                                href="/support-form"
                                className="bg-white text-cyan-800 font-bold text-sm py-3 px-8 rounded-lg shadow-lg hover:bg-cyan-100 transition duration-300 uppercase tracking-wide flex items-center justify-center"
                            >
                                <span className="mr-2">Discuss Your Requirements</span>
                                <ChevronsRight className="w-5 h-5" />
                            </a>
                            <a
                                href="/hvac"
                                className="border-2 border-white text-white font-bold text-sm py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-cyan-800 transition duration-300 uppercase tracking-wide flex items-center justify-center"
                            >
                                <span className="mr-2">Explore Portfolio</span>
                                <Users className="w-5 h-5" />
                            </a>
                        </div>

                        <p className="text-sm mt-6 text-cyan-200">
                            *Trusted for Industrial HVAC Solutions Across India
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}