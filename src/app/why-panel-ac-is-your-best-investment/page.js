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
    Monitor,
    AlertTriangle,
    Lightbulb,
    Hammer, // Corrected import from 'Tool' to 'Hammer'
    Settings,
    XCircle,
    Calculator, // Added for ROI section
} from "lucide-react";

export default function PanelACInvestmentBlog() {
    // Key Features & Guarantees (From the section 'How a Panel AC Guarantees Financial Returns')
    const keyGuarantees = [
        {
            title: "Massive Energy Savings (High EER)",
            description:
                "Microprocessor-based controller and efficient closed-loop design ensure the system only uses the precise electricity needed, driving down operating costs.",
            icon: <Zap className="w-8 h-8 text-cyan-600" />,
        },
        {
            title: "Sealed Closed-Loop System",
            description:
                "Guarantees full protection. Keeps sensitive electronics (PLCs, VFDs) safe from dust, oil mist, and moisture, eliminating heat/dirt-induced failure.",
            icon: <Server className="w-8 h-8 text-cyan-600" />,
        },
        {
            title: "Certified Quality (ISO 9001:2015)",
            description:
                "Proof of strict, high-quality manufacturing processes, ensuring reliable 24-hour continuous duty operation with heavy-duty components.",
            icon: <Award className="w-8 h-8 text-cyan-600" />,
        },
        {
            title: "Compliance & Future-Proofing",
            description:
                "Using modern, ozone-safe refrigerants (R-134a) and meeting national standards protects your business as environmental rules change.",
            icon: <Leaf className="w-8 h-8 text-cyan-600" />,
        },
    ];

    // The Big Problems Your Machines Will Face in 2025
    const bigProblems = [
        {
            title: "Too Much Heat from Modern Machines",
            description:
                "New, high-speed systems generate concentrated heat that standard fans cannot handle. This requires exact, focused cooling.",
            icon: <Thermometer className="w-8 h-8 text-red-600" />,
        },
        {
            title: "Energy Prices Are Unpredictable",
            description:
                "Inefficient cooling systems spike electricity bills as global temperatures rise. Energy efficiency is key to profit control.",
            icon: <DollarSign className="w-8 h-8 text-red-600" />,
        },
        {
            title: "Quick Component Failure",
            description:
                "A 10°C temperature rise above the safe limit cuts component lifespan in half, leading to unpredictable stops and unstable production schedules.",
            icon: <Clock className="w-8 h-8 text-red-600" />,
        },
    ];

    // Panel AC vs. Old Ways Comparison Data
    const comparisonData = [
        {
            feature: "Protection",
            panelAC: "Sealed System. Blocks dust, oil mist, and humidity (IP rated).",
            fans: "Zero Protection. Sucks factory dirt straight into the panel.",
            icon: <ShieldCheck className="w-5 h-5" />,
        },
        {
            feature: "Temperature Control",
            panelAC: "Exact Cooling. Smart computer keeps a stable, cool temperature inside.",
            fans: "Minimal. Only moves hot air around; cannot actually make the air cool.",
            icon: <Settings className="w-5 h-5" />,
        },
        {
            feature: "Energy Use",
            panelAC: "High Efficiency. Smart cooling control saves energy.",
            fans: "Inefficient. Provides no real cooling effect; wastes power when it's hot.",
            icon: <Zap className="w-5 h-5" />,
        },
        {
            feature: "Component Life",
            panelAC: "Maximum Life. Clean, stable climate means parts last longer.",
            fans: "Reduced Life. Heat and dirt cause parts to break down quickly.",
            icon: <Monitor className="w-5 h-5" />,
        },
    ];

    // Maintenance Cost Savings
    const maintenanceSavings = [
        {
            title: "Stops Emergency Repairs",
            description:
                "Predictable cooling means sudden breakdowns are rare, eliminating expensive emergency service calls and unplanned downtime.",
            icon: <Hammer className="w-8 h-8 text-green-700" />, // Used Hammer icon
        },
        {
            title: "Fewer New Parts Needed",
            description:
                "Components (VFDs, PLCs) last longer, significantly reducing costs for replacement parts and inventory.",
            icon: <Wrench className="w-8 h-8 text-green-700" />,
        },
        {
            title: "Easy Servicing",
            description:
                "Durable, reliable design shifts the maintenance budget from fixing failures to simple, planned check-ups.",
            icon: <Lightbulb className="w-8 h-8 text-green-700" />,
        },
    ];

    // ROI Breakdown Data
    const roiData = [
        {
            title: "Initial Investment",
            value: "Starts at ~₹30,000 for base wall-mount units (250W capacity) and scales up based on capacity (up to 7000W) and variant (Top Mount, Stand Alone).",
            icon: <DollarSign className="w-6 h-6 text-orange-600" />,
        },
        {
            title: "Ongoing Savings (The 'Return')",
            value: "Maximum Energy Savings are achieved through closed-loop design and high EER, delivering consistent, reliable cooling using significantly less power than general-purpose solutions.",
            icon: <TrendingUp className="w-6 h-6 text-green-600" />,
        },
        {
            title: "The 'Real Cost of Stopping'",
            value: "Savings are accelerated by eliminating emergency service calls, replacing components less often (longer MTBF), and removing all revenue loss from unplanned thermal downtime.",
            icon: <XCircle className="w-6 h-6 text-red-600" />,
        },
        {
            title: "Payback Period",
            value: "The high energy efficiency and Guaranteed Uptime ensure the initial cost is offset rapidly, typically resulting in a payback period often within the first few years of operation.",
            icon: <CheckCircle className="w-6 h-6 text-cyan-600" />,
        },
    ];


    return (
        <div className="bg-gray-50 mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* HERO SECTION - Updated Content */}
                <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
                    <div className="w-full md:w-6/12">
                        <h1 className="text-2xl md:text-4xl font-bold text-cyan-800 mb-4 leading-tight">
                            Why Panel AC Is Your Best Investment in 2025
                        </h1>
                        
                        {/* TEXT CHANGE 1: Simple, small text */}
                        <p className="text-sm text-gray-800 mb-3 text-justify md:text-left">
                            In 2025, every factory’s performance comes down to one thing—reliability. And the unsung hero behind that reliability is your Panel AC.
                        </p>
                        <p className="text-sm text-gray-800 mb-3 text-justify md:text-left">
                            As industries demand higher efficiency and zero downtime, cooling your electrical brain isn’t optional anymore—it’s a strategic advantage. This is where a certified, high-performance Panel AC becomes your smartest investment.
                        </p>
                        
                        {/* Key Tags */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-cyan-700" />
                                <span className="font-semibold text-cyan-800 text-sm">
                                    Guaranteed Uptime
                                </span>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                                <Zap className="w-6 h-6 text-cyan-700" />
                                <span className="font-semibold text-cyan-800 text-sm">
                                    Massive Energy Savings
                                </span>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                                <Gavel className="w-6 h-6 text-cyan-700" />
                                <span className="font-semibold text-cyan-800 text-sm">
                                    Authorised Govt. Quality
                                </span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center md:justify-start mb-8">
                            <a
                                href="/panel-air-conditioners"
                                className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-xl flex items-center"
                            >
                                <ChevronsRight className="w-5 h-5 mr-2" />
                                Explore Your Best Panel AC Option
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-6/12">
                        <img
                            src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1763445437/Panelac-blog_xk9t4l.webp" // Placeholder image for a panel AC on an industrial control panel
                            alt="Industrial electrical control panel with a panel air conditioner installed, featuring Adhunik Powertech branding and the text 'Why Panel AC Is Your Best Investment in 2025"
                            width="1260"
                            height="750"
                            loading="lazy"
                            className="w-full h-auto rounded-xl shadow-lg"
                        />
                    </div>
                </section>

                <hr className="border-gray-300 my-8" />

                {/* THE BIG PROBLEMS SECTION */}
                <section className="my-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-red-700">
                            The Core Challenges of Panel Reliability
                        </h2>
                        <p className="mt-4 max-w-5xl mx-auto text-gray-600 text-base">
                            The risks to your electronics are growing due to a combination of internal heat generation, volatile energy costs, and the resulting component stress.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                        {bigProblems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-600 flex flex-col items-start"
                            >
                                <div className="mb-3">{item.icon}</div>
                                <h3 className="text-xl font-bold text-red-800 mb-2">
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

                {/* FINANCIAL RETURNS SECTION */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
                            How a Panel AC Guarantees Financial Returns
                        </h2>
                        <p className="mt-4 max-w-5xl mx-auto text-gray-600 text-base">
                            A modern Panel AC from a certified supplier is not a cost—it is a strategic tool designed to bring in money and cut losses in four major, measurable ways.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {keyGuarantees.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md border-t-4 border-cyan-600 flex flex-col items-start hover:shadow-lg transition-shadow duration-200"
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
                
                {/* ROI CALCULATION SECTION - NEWLY ADDED */}
                <section className="mb-16 bg-blue-50 p-8 rounded-xl shadow-inner">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 flex items-center justify-center">
                         
                            ROI with Adhunik Powertech Panel AC
                        </h2>
                        <p className="mt-4 max-w-5xl mx-auto text-gray-600 text-base">
                            The financial benefit of Our Panel AC is immediate and measurable, going far beyond just preventing downtime. The Return on Investment (ROI) is defined by the high efficiency of our units versus their initial cost.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {roiData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-5 rounded-xl shadow-md border-b-4 border-cyan-600 flex flex-col items-start"
                            >
                                <div className="mb-3">{item.icon}</div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 text-justify">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                </section>
                
                <hr className="border-gray-300 my-8" />


                {/* COMPARISON SECTION */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
                            Panel AC vs. The Old Ways
                        </h2>
                        <p className="mt-4 max-w-4xl mx-auto text-gray-600 text-base">
                            If you are still using simple fans, you are exposing your most important assets to unnecessary risk.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 shadow-xl rounded-lg">
                            <thead className="bg-cyan-700">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        Feature
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        Industrial Panel AC (The Investment)
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        Exhaust Fans & Vents (The Liability)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {comparisonData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 flex items-center">
                                            {item.icon}
                                            <span className="ml-2">{item.feature}</span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-green-700 font-semibold">
                                            {item.panelAC}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-red-700 font-semibold">
                                            {item.fans}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <hr className="border-gray-300 my-8" />

                {/* CUT MAINTENANCE COST SECTION */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-green-700">
                            How Panel Cooling Transforms Your Maintenance Strategy
                        </h2>
                        <p className="mt-4 max-w-4xl mx-auto text-gray-600 text-base">
                            Stop paying for panic! The true maintenance drain is not parts, but sudden downtime and emergency service. Invest in reliable cooling to eliminate heat and dirt—the root problems—and permanently transform your budget from reactive crisis to planned savings
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {maintenanceSavings.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-8 border-green-600"
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

                <hr className="border-gray-300 my-8" />

                {/* THE VERDICT/FINAL CTA - Adjusted for smaller text and padding */}
                <section className="bg-gradient-to-r from-cyan-700 to-cyan-900 rounded-2xl p-10 md:p-14 text-white shadow-2xl">
                    <div className="text-center max-w-4xl mx-auto">

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
                            The Final Verdict: Why Adhunik Powertech Is Your 2025 Mandate
                        </h2>

                        {/* Description */}
                        <p className="text-cyan-100 mb-7 text-sm md:text-base leading-relaxed">
                            Our Panel AC's are engineered to safeguard your critical electronic assets, slash unnecessary energy losses, 
                            and keep your operations running without interruption. Choose certified cooling today—and eliminate the risk of costly downtime or equipment failure.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-5">

                            {/* Button 1: Product Page - Smaller text/padding */}
                            <a
                                href="/panel-air-conditioners"
                                className="bg-white text-cyan-800 font-bold text-sm py-3 px-8 rounded-lg shadow-lg hover:bg-cyan-100 transition duration-300 uppercase tracking-wide flex items-center justify-center"
                            >
                                <span className="mr-2">Protect Your Critical Assets</span>
                                <ChevronsRight className="w-5 h-5" />
                            </a>

                            {/* Button 2: Talk to Expert - Smaller text/padding */}
                            <a
                                href="/support-form"
                                className="border-2 border-white text-white font-bold text-sm py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-cyan-800 transition duration-300 uppercase tracking-wide flex items-center justify-center"
                            >
                                <span className="mr-2">Talk to Our Experts</span>
                                <Users className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Optional trust indicators */}
                        <p className="text-sm mt-6 text-cyan-200">
                            Govt-Authorised Manufacturer • 19+ Years of Engineered Cooling Expertise • Trusted by Leading Industries
                        </p>

                    </div>
                </section>

            </div>
        </div>
    );
}
