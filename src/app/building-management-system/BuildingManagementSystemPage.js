"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  Cpu,
  GaugeCircle,
  Wind,
  Snowflake,
  SlidersHorizontal,
  Server,
  CheckCircle2
} from "lucide-react";

export default function BuildingManagementSystemPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const bmsSubsystems = [
    {
      title: 'Chiller Plant Optimization',
      desc: (
        <p>
          Automates primary/secondary and variable-primary-flow (VPF) chillers, cooling towers, and pumping systems with dynamic staging, temperature reset, and load matching to cut central plant power draw.
        </p>
      ),
      icon: <Snowflake className="w-6 h-6 text-cyan-600" />
    },
    {
      title: 'AHU Automation',
      desc: (
        <p>
          Delivers closed-loop control of supply/return temperatures, VFD fan speeds, static pressure reset, and economizer dampers, with continuous filter differential pressure monitoring.
        </p>
      ),
      icon: <Wind className="w-6 h-6 text-cyan-600" />
    },
    {
      title: 'VAV Terminal Control',
      desc: (
        <p>
          Pressure-independent zone control maintaining target CFM through pitot-array transducers, occupancy setbacks, and CO2 demand-controlled ventilation (750 ppm baseline).
        </p>
      ),
      icon: <SlidersHorizontal className="w-6 h-6 text-cyan-600" />
    },
    {
      title: 'VRF / VRV Gateway Integration',
      desc: (
        <p>
          Centralized supervision connecting manufacturer gateways over BACnet or Modbus for floor-wise scheduling, mode locking, error code diagnostics, and tenant-level energy billing.
        </p>
      ),
      icon: <Cpu className="w-6 h-6 text-cyan-600" />
    },
    {
      title: 'Ventilation & Car Park Exhaust',
      desc: (
        <p>
          CO-based multi-stage car park exhaust automation, stairwell and lift-well pressurization, and emergency smoke extraction with direct life-safety fire alarm panel interlocks.
        </p>
      ),
      icon: <GaugeCircle className="w-6 h-6 text-cyan-600" />
    },
    {
      title: 'Precision Cooling (PAC / CRAC)',
      desc: (
        <p>
          Maintains strict psychrometric envelopes (±0.5°C temp, ±3% RH) for data centers, battery rooms, and sterile laboratories with lead-lag rotation and water leak detection.
        </p>
      ),
      icon: <Server className="w-6 h-6 text-cyan-600" />
    }
  ];

  const ClientReferences = [
    {
      description: (
        <>
          <p>
            <span className='font-bold text-lg text-cyan-700'>
              Unified Open Protocol Integration (BACnet, Modbus & IP)
            </span> <br />
            <strong className='font-semibold text-cyan-700'>
              The Difference :
            </strong>{" "}
            Proprietary building controls lock facility managers into a single vendor. A true enterprise BMS integrates open industry-standard communication protocols seamlessly across field devices and web servers.
          </p>
          <p className="mt-2">
            <strong className='font-semibold text-cyan-700'>
              Adhunik Powertech's Approach :
            </strong>{" "}
            We deliver complete interoperability through BACnet IP/MSTP, Modbus RTU/TCP, and hardwired I/O modules. Our direct digital controllers (DDC) and smart gateways link third-party chillers, electrical panels, and energy meters into one responsive dashboard.
          </p>
        </>
      ),
    },
    {
      description: (
        <>
          <p>
            <span className='font-bold text-lg text-cyan-700'>
              End-to-End Turnkey Engineering (Design to Commissioning)
            </span> <br />
            <strong className='font-semibold text-cyan-700'>
              The Difference :
            </strong>{" "}
            Effective HVAC automation requires deep domain expertise across mechanical fluid dynamics, electrical distribution, and digital control sequence algorithms.
          </p>
          <p className="mt-2">
            <strong className='font-semibold text-cyan-700'>
              Adhunik Powertech's Experience :
            </strong>{" "}
            Our in-house MEP and automation engineers handle sensor selection, control panel fabrication, cable scheduling, DDC programming, graphic user interface (GUI) development, and on-site testing and commissioning across commercial, industrial, and hospital facilities.
          </p>
        </>
      ),
    },
    {
      description: (
        <>
          <p>
            <span className='font-bold text-lg text-cyan-700'>
              Data-Driven Energy Management & Plant Efficiency
            </span> <br />
            <strong className='font-semibold text-cyan-700'>
              The Difference :
            </strong>{" "}
            A Building Management System must actively optimize operating performance rather than simply display operating states.
          </p>
          <p className="mt-2">
            <strong className='font-semibold text-cyan-700'>
              Adhunik Powertech's Solution :
            </strong>{" "}
            We configure automated chiller plant management, temperature resets, runtime equalization, and demand-controlled fresh air routines. Continuous BTU and power sub-metering pinpoint efficiency losses to reduce building utility bills significantly.
          </p>
        </>
      ),
    },
    {
      description: (
        <>
          <p>
            <span className='font-bold text-lg text-cyan-700'>
              Critical Space Protection & Multi-System Safety Interlocks
            </span> <br />
            <strong className='font-semibold text-cyan-700'>
              The Difference :
            </strong>{" "}
            Mission-critical environments like data centers, server rooms, and pharmaceutical facilities cannot afford communication latency during fault events.
          </p>
          <p className="mt-2">
            <strong className='font-semibold text-cyan-700'>
              Adhunik Powertech's Assurance :
            </strong>{" "}
            Our architectures feature automated standby changeover, dirty filter alerts, water leak detection, and hardwired fire-trip overrides to ensure life safety and continuous uptime.
          </p>
        </>
      ),
    }
  ];

  const KeyTakeaways = [
    {
      title: "HVAC Automation : ",
      description: "Precision sequence control of central chiller plants, pumping networks, air handling units, and zoning terminal boxes for total thermal stability.",
    },
    {
      title: "Energy Optimization : ",
      description: "Automated load tracking, chilled-water setpoint reset, and fan-pressure optimization to eliminate energy waste and lower peak electrical demand.",
    },
    {
      title: "Real-Time Telemetry : ",
      description: "Live supervisory visibility, trend logging, differential pressure diagnostics, and immediate SMS/Email alert dispatches during equipment faults.",
    },
    {
      title: "Multi-Service Integration : ",
      description: "Unified monitoring bringing together HVAC, electrical panels, BTU metering, water treatment (STP/WTP), and life-safety systems.",
    },
    {
      title: "Predictive Intelligence : ",
      description: "Runtime equalization, automated lead-lag changeover, and preventive maintenance scheduling based on operational hours and filter condition.",
    }
  ];

  return (
    <>
      <div className="bg-gradient-to-b mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className="w-full md:w-6/12">
              <Image
                src="/BMS Image.webp"
                alt="Adhunik Powertech Building Management System BMS"
                width={700}
                height={500}
                priority
                className="w-full h-auto rounded-xl shadow-sm border border-cyan-100 object-contain"
              />
            </div>

            <div className="w-full md:w-6/12">
              <h1 className="text-lg md:text-2xl text-center md:text-left font-bold text-cyan-800 mb-6 leading-tight">
                Building Management System (BMS) & Precision HVAC Automation Solutions
              </h1>

              <p className="w-full md:w-10/12 text-sm text-gray-700 mb-6 text-justify md:text-left">
                Modern commercial buildings, healthcare campuses, data centers, and industrial facilities demand unified operational intelligence. Adhunik Powertech engineers advanced Building Management Systems (BMS) that integrate central cooling plants, airside distribution, electrical metering, and safety subsystems into a single automated control platform.
              </p>
            </div>
          </section>

          {/* Intro Overview */}
          <section className="mb-16 bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100">
            <p className='text-sm pb-4 text-justify'>
              At <Link href='/' className='font-semibold text-cyan-500'>Adhunik Powertech</Link>, we engineer intelligent building management architectures that connect field sensors, DDC controllers, integration gateways, and enterprise web dashboards. By bridging mechanical HVAC engineering with smart automation, we optimize operational uptime, ensure indoor air purity, and maximize facility energy savings.
            </p>
          </section>

          {/* Core Pillars */}
          <section className="mb-16 bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100">
            <p className="md:text-2xl text-center md:text-left font-bold text-cyan-800 mb-6 pb-2 border-b-2 border-cyan-200">
              <span className="bg-cyan-600 text-white px-2 py-1 rounded-md">
                Engineering Intelligence Into Every Building
              </span>
            </p>

            <p className='text-sm pb-4 text-justify'>
              Our Building Management System converges multiple independent mechanical and electrical installations into an interconnected network. We eliminate isolated equipment operation to deliver synchronized climate control and lower operating costs.
            </p>

            <p className='text-md font-bold pb-2 text-justify'>
              Core Deliverables of Adhunik Powertech BMS Architecture :
            </p>

            <p className='text-sm pb-2 text-gray-500 text-justify'>
              Every automated deployment is structured around five operational principles:
            </p>

            <ul className="space-y-4 pt-2">
              {KeyTakeaways.map((item, index) => (
                <li key={index} className="flex py-2 items-start md:items-center">
                  <span className="flex-shrink-0 bg-cyan-100 text-cyan-800 rounded-full p-2 mr-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-700" />
                  </span>
                  <span className="text-gray-700 text-justify text-sm md:font-medium">
                    <strong className='font-bold text-cyan-600'>{item.title}</strong> {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Main Content Section */}
          <div className="space-y-16">

            <section className="bg-white md:p-8 p-3 rounded-xl shadow-md">
              <div className="mt-8">
                <h3 className="md:text-2xl font-semibold text-cyan-700 mb-4 text-center md:text-left">
                  Why Choose Adhunik Powertech for Your BMS & HVAC Automation Project?
                </h3>
                <p className="text-gray-600 mb-4 text-sm text-justify md:text-left">
                  A high-performing Building Management System requires seamless coordination between mechanical equipment and digital controls. Here is what sets Adhunik Powertech apart as a turnkey HVAC automation contractor:
                </p>

                <div className="bg-white border border-cyan-200 rounded-lg p-6 shadow-sm">
                  <ul className="space-y-4">
                    {ClientReferences.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-cyan-600 mr-2 font-bold">•</span>
                        <div className="text-gray-700 text-sm">
                          {item.description}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Subsystems Specialized In */}
            <section className="bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100 mb-16">
              <div className="mb-8">
                <h3 className="md:text-2xl text-center md:text-left font-semibold text-cyan-700 mb-4">
                  HVAC Systems & Equipment We Automate
                </h3>

                <p className="text-gray-700 mb-6 text-sm text-justify md:text-left">
                  We engineer dedicated direct digital control (DDC) sequences and communication gateways for key building mechanical systems:
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bmsSubsystems.map((system, index) => (
                    <div key={index} className="bg-white flex flex-col justify-start items-center md:items-start md:text-left text-center p-5 rounded-lg border border-cyan-100 hover:border-cyan-300 transition-all shadow-sm hover:shadow-md">
                      <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        {system.icon}
                      </div>
                      <div className="font-bold text-cyan-800 text-lg mb-2">
                        {system.title}
                      </div>
                      <div className="text-gray-500 text-sm text-justify flex flex-col gap-2">
                        {system.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Integration Architecture Table */}
            <section className="bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100 mb-16">
              <h3 className="md:text-2xl text-center md:text-left font-semibold text-cyan-700 mb-2">
                Multi-System Integration Architecture
              </h3>
              <p className="text-gray-600 mb-6 text-sm text-justify md:text-left">
                Our BMS bridges multiple disciplines under a unified graphical user interface using hardwired I/O and standard software protocols:
              </p>

              <div className="overflow-x-auto w-full">
                <table className="min-w-full text-sm text-left text-gray-600 border border-gray-200 rounded-lg">
                  <thead className="text-xs text-white uppercase bg-cyan-700">
                    <tr>
                      <th className="py-3 px-4 border-r border-cyan-600">Discipline</th>
                      <th className="py-3 px-4 border-r border-cyan-600">Connected Equipment</th>
                      <th className="py-3 px-4 border-r border-cyan-600">Protocols Supported</th>
                      <th className="py-3 px-4">Supervisory Functions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-bold text-cyan-900 border-r border-gray-200">HVAC Plant</td>
                      <td className="py-3 px-4 border-r border-gray-200">Chillers, Heat Pumps, Cooling Towers, Primary/Secondary Pumps</td>
                      <td className="py-3 px-4 border-r border-gray-200">BACnet IP, Modbus RTU, 4-20mA</td>
                      <td className="py-3 px-4">Staging, Sequencing, VPF Pumping, Supply Temp Reset, Runtime Balancing</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-bold text-cyan-900 border-r border-gray-200">Air Distribution</td>
                      <td className="py-3 px-4 border-r border-gray-200">AHUs, VAV Boxes, Treated Fresh Air (TFA), Exhaust Fans</td>
                      <td className="py-3 px-4 border-r border-gray-200">BACnet MS/TP, Analog/Digital I/O</td>
                      <td className="py-3 px-4">VFD modulation, Static Pressure Reset, Dirty Filter DP, CO2 Demand Ventilation</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-bold text-cyan-900 border-r border-gray-200">Electrical & Energy</td>
                      <td className="py-3 px-4 border-r border-gray-200">HT/LT Panels, Transformers, UPS, DG Sets, BTU & Energy Meters</td>
                      <td className="py-3 px-4 border-r border-gray-200">Modbus RTU / TCP, RS-485</td>
                      <td className="py-3 px-4">Power quality, kWh tracking, peak demand shaving, tenant utility allocation</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-bold text-cyan-900 border-r border-gray-200">PHE & Life Safety</td>
                      <td className="py-3 px-4 border-r border-gray-200">Pumps, WTP/STP, Level Switches, Fire Alarm Panels, CO Sensors</td>
                      <td className="py-3 px-4 border-r border-gray-200">Potential-free Contacts, BACnet</td>
                      <td className="py-3 px-4">Tank levels, automated pump changeover, fire smoke purge override</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Engineering ROI & Chiller Plant Management Deep-Dive */}
<section className="bg-white p-6 md:p-10 rounded-xl shadow-md border border-cyan-100 mb-16">
  <div className="max-w-4xl">
    <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block mb-1">
      Advanced Hydronic Automation
    </span>
    <h3 className="text-xl md:text-3xl font-bold text-cyan-900 mb-4">
      Optimized Chiller Plant Management (CPM): The 1°F Setpoint Advantage
    </h3>
    <p className="text-sm text-gray-700 leading-relaxed mb-6 text-justify">
      In large commercial and industrial facilities, the central chiller plant accounts for <strong>50% to 60% of total building power consumption</strong>. Adhunik Powertech's Chiller Plant Manager implements continuous, load-based supply water reset logic: <strong>elevating chilled water supply setpoints by just 1°F during partial load periods delivers up to 2% in chiller energy savings</strong> without compromising occupant comfort.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
    <div className="border border-gray-200 rounded-lg p-5 bg-gray-50/50">
      <h4 className="font-bold text-cyan-800 text-base mb-2">Deficit & Excess Flow Staging</h4>
      <p className="text-xs text-gray-600 leading-relaxed text-justify">
        Continuously tracks decoupled bypass line flow. Starts lag chillers during deficit flow conditions and stages equipment off when excess flow exceeds 110%–115% of the operating pump capacity.
      </p>
    </div>

    <div className="border border-gray-200 rounded-lg p-5 bg-gray-50/50">
      <h4 className="font-bold text-cyan-800 text-base mb-2">Anti-Cycling Delay Deadbands</h4>
      <p className="text-xs text-gray-600 leading-relaxed text-justify">
        Configured with user-editable 10-minute add and 20-minute subtract delay timers to prevent erratic compressor cycling, nuisance trips, and unnecessary equipment wear during peak spikes.
      </p>
    </div>

    <div className="border border-gray-200 rounded-lg p-5 bg-gray-50/50">
      <h4 className="font-bold text-cyan-800 text-base mb-2">Decoupler Sensor Calibration</h4>
      <p className="text-xs text-gray-600 leading-relaxed text-justify">
        Eliminates hydraulic false-readings through strategic thermal immersion wells installed on supply tees, return mains, and bypass loops for true thermodynamic load calculation.
      </p>
    </div>
  </div>
</section>

{/* Unified Life Safety & IBMS Integration */}
<section className="bg-cyan-900 text-white p-6 md:p-10 rounded-xl shadow-lg mb-16">
  <div className="max-w-4xl mb-8">
    <h3 className="text-xl md:text-3xl font-bold mb-3">
      Cross-System Life Safety & Incident Interoperability
    </h3>
    <p className="text-sm text-cyan-100 leading-relaxed text-justify">
      Our BMS operates as an integrated command center. During emergency smoke detector activation, the automation engine executes an immediate safety sequence: tripping supply air fans to isolate fire zones, initiating stairwell pressurization, ramping basement smoke exhaust, recalling elevators to ground level, and releasing access control doors for safe egress.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
    <div className="bg-cyan-800/60 p-4 rounded-lg border border-cyan-700">
      <span className="text-cyan-300 font-bold block text-sm mb-1">Smoke Extraction</span>
      <p className="text-xs text-cyan-100">Automated damper & jet fan fire override</p>
    </div>
    <div className="bg-cyan-800/60 p-4 rounded-lg border border-cyan-700">
      <span className="text-cyan-300 font-bold block text-sm mb-1">Water Leak Detection</span>
      <p className="text-xs text-cyan-100">Rope sensing for server & electrical rooms</p>
    </div>
    <div className="bg-cyan-800/60 p-4 rounded-lg border border-cyan-700">
      <span className="text-cyan-300 font-bold block text-sm mb-1">Tenant Sub-Metering</span>
      <p className="text-xs text-cyan-100">Automated BTU & kWh utility invoicing</p>
    </div>
    <div className="bg-cyan-800/60 p-4 rounded-lg border border-cyan-700">
      <span className="text-cyan-300 font-bold block text-sm mb-1">Rodent Repellency</span>
      <p className="text-xs text-cyan-100">Live ultrasonic transducer wave monitoring</p>
    </div>
  </div>
</section>

{/* Enterprise Advantage vs Proprietary Systems */}
<section className="bg-white p-6 md:p-10 rounded-xl shadow-md border border-cyan-100 mb-16">
  <div className="text-center max-w-3xl mx-auto mb-10">
    <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block mb-1">
      Open Architecture Advantage
    </span>
    <h3 className="text-xl md:text-3xl font-bold text-cyan-900">
      Engineered for Flexibility: Zero Proprietary Lock-In
    </h3>
    <p className="text-sm text-gray-600 mt-2">
      Unlike rigid, closed building control platforms, Adhunik Powertech delivers open-standard automation that gives you full ownership of your data and infrastructure.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="border border-gray-200 rounded-xl p-6 bg-gradient-to-b from-gray-50 to-white hover:border-cyan-400 transition-all">
      <h4 className="font-bold text-cyan-800 text-lg mb-2">Native Open Protocols</h4>
      <p className="text-xs text-gray-600 leading-relaxed text-justify">
        Built strictly on open ASHRAE BACnet, Modbus, and IP communication standards. Seamlessly connect any chiller, VFD, or energy meter without expensive license keys.
      </p>
    </div>

    <div className="border border-gray-200 rounded-xl p-6 bg-gradient-to-b from-gray-50 to-white hover:border-cyan-400 transition-all">
      <h4 className="font-bold text-cyan-800 text-lg mb-2">Predictive Asset Uptime</h4>
      <p className="text-xs text-gray-600 leading-relaxed text-justify">
        Continuous KPI diagnostics track chiller approach temperatures, fan run-hours, and filter differential pressures to stop catastrophic breakdowns before they happen.
      </p>
    </div>

    <div className="border border-gray-200 rounded-xl p-6 bg-gradient-to-b from-gray-50 to-white hover:border-cyan-400 transition-all">
      <h4 className="font-bold text-cyan-800 text-lg mb-2">Turnkey Execution</h4>
      <p className="text-xs text-gray-600 leading-relaxed text-justify">
        Single-point accountability from sensor layout and DDC panel engineering to field commissioning, custom GUI development, and ongoing AMC support across Delhi NCR.
      </p>
    </div>
  </div>
</section>

{/* BMS Retrofit & Modernization Section */}
<section className="bg-white p-6 md:p-10 rounded-xl shadow-md border border-cyan-100 mb-16">
  <div className="max-w-4xl mb-8">
    <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block mb-1">
      Plant Modernization
    </span>
    <h3 className="text-xl md:text-3xl font-bold text-cyan-900 mb-3">
      BMS Retrofit & Legacy Control Upgrades
    </h3>
    <p className="text-sm text-gray-700 leading-relaxed text-justify">
      Stuck with an obsolete, proprietary BMS with unsupported controllers or expensive licensing? Adhunik Powertech specializes in phased modernization of operational facilities across Delhi NCR. We migrate your legacy panels to open BACnet/Modbus DDC controllers with zero plant downtime and no mandatory recurring software fees.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
      <h4 className="font-bold text-cyan-800 text-base mb-2">Zero-Downtime Migration</h4>
      <p className="text-xs text-gray-600 leading-relaxed text-justify">
        Progressive hardware replacement schedules keep central chillers, pumps, and AHUs running during commercial working hours.
      </p>
    </div>

    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
      <h4 className="font-bold text-cyan-800 text-base mb-2">Non-Proprietary Open Field DDCs</h4>
      <p className="text-xs text-gray-600 leading-relaxed text-justify">
        Gain full ownership of your engineering logic, database configurations, and graphic pages upon commissioning handover*.
      </p>
    </div>

    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
      <h4 className="font-bold text-cyan-800 text-base mb-2">Immediate Energy Payback</h4>
      <p className="text-xs text-gray-600 leading-relaxed text-justify">
        Upgrading mechanical starters to VFD automation with dynamic setpoint resets delivers measurable power savings within months.
      </p>
    </div>
  </div>
</section>

{/* EPMS & Power Infrastructure Integration */}
<section className="bg-gray-900 text-white p-6 md:p-10 rounded-xl shadow-lg mb-16">
  <div className="max-w-4xl mb-8">
    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
      Electrical Power Monitoring (EPMS)
    </span>
    <h3 className="text-xl md:text-3xl font-bold mb-3">
      Unified Electrical & Utility Infrastructure Management
    </h3>
    <p className="text-sm text-gray-300 leading-relaxed text-justify">
      An enterprise BMS must look beyond cooling. Adhunik Powertech integrates electrical distribution boards, backup power, and utility flow lines directly into your supervisory screen for comprehensive asset health and energy audits.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <span className="text-cyan-400 font-bold block text-sm mb-1">Transformers & HT/LT</span>
      <p className="text-xs text-gray-300">Continuous voltage, current & power factor telemetry</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <span className="text-cyan-400 font-bold block text-sm mb-1">DG Set Automation</span>
      <p className="text-xs text-gray-300">Fuel level tracking, battery status & AMF interlocks</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <span className="text-cyan-400 font-bold block text-sm mb-1">UPS & Battery Banks</span>
      <p className="text-xs text-gray-300">Backup autonomy logs & critical room load distribution</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <span className="text-cyan-400 font-bold block text-sm mb-1">Water Treatment (STP/WTP)</span>
      <p className="text-xs text-gray-300">Level controllers, chemical dosing & pump automation</p>
    </div>
  </div>
</section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Transform Your Facility with Intelligent HVAC Automation
                </h2>
                <p className="text-cyan-100 text-justify mb-8 text-sm">
                  Whether you are planning a greenfield central plant or upgrading an existing commercial facility with smart DDC controls, Adhunik Powertech delivers precision automation engineered for efficiency, compliance, and reliability.
                </p>
                <p className="text-cyan-100 text-justify mb-8 text-sm">
                  Our engineers are ready to design a scalable Building Management System customized to your equipment schedule and operational requirements.
                </p>

                <h3 className="text-sm font-bold mb-4">
                  Ready to optimize your building performance with a custom BMS quote?
                </h3>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="tel:8287885885"
                    className="bg-white text-sm md:text-md font-bold text-cyan-800 hover:bg-cyan-100 py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact Expert
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
        </div>
      </div>
    </>
  )
}