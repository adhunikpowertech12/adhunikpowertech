"use client";
import React from "react";
import {
    ShieldCheck,
    Clock,
    Zap,
    CheckCircle,    // Fixed: Added missing import
    Factory,
    Settings,
    Thermometer,
    ChevronsRight,
    Layout,
    BarChart3,
    RotateCcw,
    ShieldAlert,
    Cpu,
    Wind,
    Snowflake,
    Shield,
    HelpCircle,     // Fixed: Added missing import
    XCircle,        // Fixed: Added missing import
    Boxes,
    HardHat,
    Scaling,
    AlertTriangle,  // Fixed: Added missing import
    Droplets,       // Fixed: Added missing import
    Wrench          // Fixed: Added missing import
} from "lucide-react";

export default function PanelACVsCoolingFansBlog() {
    
    // Core Benefits of the Panel AC Model
    const acBenefits = [
        {
            title: "Sealed Cooling System",
            description: "No dust, moisture, or oil fumes enter your panel. It creates a closed-loop environment that isolates sensitive electronics from the harsh factory floor.",
            icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />,
        },
        {
            title: "Consistent Temp Control",
            description: "Maintains ideal internal temperatures even during peak Delhi NCR summers. Precise thermal management prevents VFD and PLC tripping.",
            icon: <Thermometer className="w-8 h-8 text-cyan-600" />,
        },
        {
            title: "Longer Equipment Life",
            description: "Reduces thermal stress on capacitors and transistors. Stable cooling can extend the functional life of your automation by up to 300%.",
            icon: <Clock className="w-8 h-8 text-cyan-600" />,
        },
        {
            title: "Industrial Efficiency",
            description: "Modern panel ACs are engineered for 24/7 heavy-duty environments, consuming optimized power while maximizing equipment uptime.",
            icon: <Zap className="w-8 h-8 text-cyan-600" />,
        },
    ];

    // Table Data: Comparison Matrix
    const comparisonData = [
        { feature: "Dust Protection", fan: "❌ No (Pulls grime inside)", ac: "✅ Yes (Sealed system)", icon: <AlertTriangle className="w-5 h-5 text-red-500" /> },
        { feature: "Moisture Control", fan: "❌ No (Humidity enters)", ac: "✅ Yes (Dehumidifies)", icon: <Droplets className="w-5 h-5 text-blue-500" /> },
        { feature: "Temp Control", fan: "❌ Unstable", ac: "✅ Precise", icon: <Thermometer className="w-5 h-5 text-cyan-500" /> },
        { feature: "Component Life", fan: "❌ Reduced", ac: "✅ Extended", icon: <Cpu className="w-5 h-5 text-green-500" /> },
        { feature: "Downtime Risk", fan: "❌ High", ac: "✅ Low", icon: <ShieldAlert className="w-5 h-5 text-red-500" /> },
    ];

    return (
        <div className="bg-gray-50 mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* HERO SECTION */}
                <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
                    <div className="w-full md:w-6/12">
                        <h1 className="text-2xl md:text-4xl font-bold text-cyan-800 mb-4 leading-tight">
                            Panel AC vs Cooling Fans: Which Is Better for Control Panels?
                        </h1>
                        <p className="text-sm text-gray-800 mb-3 text-justify md:text-left">
                            In industrial environments, control panels, PLC cabinets, and VFD drives are the brain of your operations. Many factories still rely on simple cooling fans, but here is the truth:Your exhaust fan might be silently damaging your electronics every single day.                        </p>
                        <p className="text-sm text-gray-800 mb-3 text-justify md:text-left">
                            Cooling fans pull dust, moisture, and hot ambient air directly into sensitive circuits. Adhunik Powertech’s <strong>Panel Air Conditioners</strong> offer a smarter, safer, closed-loop solution.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-cyan-700" />
                                <span className="font-semibold text-cyan-800 text-sm">Industrial Safety First</span>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                                <RotateCcw className="w-6 h-6 text-cyan-700" />
                                <span className="font-semibold text-cyan-800 text-sm">Closed-Loop Cooling</span>
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <a href="/panel-air-conditioners" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-xl flex items-center text-sm">
                                <ChevronsRight className="w-5 h-5 mr-2" />
                                Find the Perfect Panel AC Size
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-6/12">
                        <img
                            src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1771330538/Panel_AC_vs._Cooling_Fans_pooufv.webp"
                            alt="Panel AC vs cooling fans for control panels showing industrial cooling solution in electrical cabinets"
                            width="1260"
                            height="750"
                            className="w-full h-auto rounded-xl shadow-lg border-4 border-white"
                        />
                    </div>
                </section>

                <hr className="border-gray-300 my-8" />

                {/* THE DAMAGE SECTION - WHY FANS FAIL */}
                <section className="my-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-red-700">What Happens When You Use Only Cooling Fans?</h2>
                        <p className="mt-4 max-w-4xl mx-auto text-gray-600">Exhaust fans don’t cool your panel—they only circulate external contaminants inside it.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Dust & Carbon Buildup", desc: "Industrial dust settles on PCBs and contactors, causing insulation failure and arcing.", icon: <AlertTriangle /> },
                            { title: "Moisture Ingress", desc: "Humidity enters the panel, leading to corrosion, rust, and leakage currents.", icon: <Droplets /> },
                            { title: "Hot Air Intake", desc: "In summer, fans push 45°C+ ambient air into your panel, increasing internal heat.", icon: <Thermometer /> },
                            { title: "Frequent Failures", desc: "Overheating shortens the life of PLCs, drives, relays, and power supplies.", icon: <XCircle /> },
                            { title: "Higher Maintenance", desc: "Spend more on manual cleaning, component replacement, and unplanned shutdowns.", icon: <Wrench /> }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                                <div className="text-red-600 mb-3">{item.icon}</div>
                                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="border-gray-300 my-8" />

                {/* THE SOLUTION SECTION */}
                <section className="my-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
                            Industrial Panel AC: The Correct Cooling Choice for Control Panels
                        </h2>
                        <p className="mt-4 max-w-5xl mx-auto text-gray-600 text-base">
                            A Panel AC is specifically designed for electrical cabinets. It doesn’t pull outside air inside; instead, it creates a closed-loop system that keeps electronics safe from factory pollutants.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {acBenefits.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-cyan-600 flex flex-col items-start hover:shadow-lg transition-all">
                                <div className="mb-3">{item.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 text-justify leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="border-gray-300 my-8" />

                {/* COMPARISON TABLE */}
<section className="mb-16">
    <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
            Feature-by-Feature Solution Comparison
        </h2>
        <p className="mt-4 max-w-4xl mx-auto text-gray-600">
            Why industries are shifting from simple ventilation to Adhunik Powertech's active climate control.
        </p>
    </div>

    
    
    <div className="overflow-x-auto mt-8">
        <table className="min-w-full divide-y divide-gray-200 shadow-xl rounded-lg overflow-hidden">
            <thead className="bg-cyan-700 text-white text-left">
                <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-red-100">Cooling Fan</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-cyan-100">Adhunik Panel AC</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                <tr className="bg-gray-50 hover:bg-cyan-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 flex items-center">
                        <AlertTriangle className="w-5 h-5 text-red-500 mr-2" /> Dust Protection
                    </td>
                    <td className="px-6 py-4 text-sm text-red-600 font-medium italic">
                        ❌ Pulls grime and dust inside
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 font-bold">
                        ✅ Sealed system keeps dust out
                    </td>
                </tr>
                <tr className="hover:bg-cyan-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 flex items-center">
                        <Droplets className="w-5 h-5 text-blue-500 mr-2" /> Moisture Control
                    </td>
                    <td className="px-6 py-4 text-sm text-red-600 font-medium italic">
                        ❌ Humidity enters freely
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 font-bold">
                        ✅ Dehumidifies & prevents corrosion
                    </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-cyan-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 flex items-center">
                        <Thermometer className="w-5 h-5 text-cyan-500 mr-2" /> Temperature Control
                    </td>
                    <td className="px-6 py-4 text-sm text-red-600 font-medium italic">
                        ❌ Unstable fluctuations
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 font-bold">
                        ✅ Precise microprocessor control
                    </td>
                </tr>
                <tr className="hover:bg-cyan-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 flex items-center">
                        <Cpu className="w-5 h-5 text-green-500 mr-2" /> Component Life
                    </td>
                    <td className="px-6 py-4 text-sm text-red-600 font-medium italic">
                        ❌ Significantly reduced
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 font-bold">
                        ✅ Extends life of PLC, VFD & electronics
                    </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-cyan-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 flex items-center">
                        <ShieldAlert className="w-5 h-5 text-red-500 mr-2" /> Downtime Risk
                    </td>
                    <td className="px-6 py-4 text-sm text-red-600 font-medium italic">
                        ❌ High risk of failure
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 font-bold">
                        ✅ Low; ensures continuous operations
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
                <hr className="border-gray-300 my-8" />

                {/* UPGRADE TRIGGERS SECTION */}
                <section className="mb-16 bg-blue-50 p-8 rounded-xl border border-blue-100">
                    <h2 className="text-2xl font-bold text-cyan-800 mb-8 text-center">When Should You Upgrade?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            {[
                                "Control panel temperature crosses 35°C",
                                "Panels are installed in dusty/humid areas",
                                "PLCs or VFDs are failing frequently"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                                    <CheckCircle className="text-green-600 w-5 h-5" /> <span className="text-sm font-medium">{text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4">
                            {[
                                "Your plant operates 24x7",
                                "You face recurring summer breakdowns",
                                "Panel contains sensitive automation electronics"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                                    <CheckCircle className="text-green-600 w-5 h-5" /> <span className="text-sm font-medium">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA SECTION */}
                <section className="bg-gradient-to-r from-cyan-700 to-cyan-900 rounded-2xl p-10 text-white text-center shadow-2xl mb-16">
                    <h2 className="text-3xl font-extrabold mb-4 uppercase tracking-wide">Protect Your Productivity</h2>
                    <p className="mb-8 text-cyan-100 max italic">
                        "Dust, heat, and humidity silently damage your electronics every day. Switch to Adhunik Powertech Heavy duty Panel AC cooling and protect your automation systems from unexpected downtime."
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="/support-form" className="bg-white text-cyan-800 font-bold py-3 px-10 rounded-full hover:bg-cyan-100 transition shadow-lg text-sm flex items-center">
                            Upgrade to Industrial Panel Cooling <ChevronsRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </section>

                {/* FAQ SECTION - POSITIONED AT THE END */}
                <section className="mb-8 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 flex items-center justify-center gap-2">
                            <HelpCircle className="w-8 h-8 text-cyan-700" /> Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="grid gap-6 max-w-4xl mx-auto">
                        {[
                            { q: "Is Panel AC better than an exhaust fan for control panels?", a: "Yes. Adhunik Powertech Panel AC provides sealed cooling and prevents dust, moisture, and heat damage, unlike exhaust fans which pull in contaminants." },
                            { q: "What size Panel AC do I need?", a: "Size depends on panel dimensions, heat load of internal components (VFDs, PLCs), and ambient temperature. We recommend a professional heat load calculation." },
                            { q: "Can Panel AC work in dusty environments?", a: "Absolutely.Adhunik Powertech Panel AC is built for harsh industrial environments where open fans cause dust and heat damage, ensuring safe and reliable cooling for control panels." },
                            { q: "Is it suitable for PLC and VFD panels?", a: "Yes, automation panels require stable temperatures (usually below 35°C). Powertech Heavy duty Panel AC is the gold standard for protecting these investments." }
                        ].map((faq, i) => (
                            <div key={i} className="p-6 border-l-4 border-cyan-600 bg-gray-50 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-sm text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}