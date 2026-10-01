import MccPanelClient from "./mccpanelmanufacturers";

export const metadata = {
  title: "MCC & Intelligent Motor Control Centre Manufacturers in Delhi NCR | Adhunik Powertech",
  description:
    "Custom CPRI type-tested Motor Control Center (MCC) & Intelligent IMCC Panels. Type-2 coordination, drawout drawers, Modbus/Profibus networking, and local site support across Gurugram, Manesar, and Delhi NCR.",
  keywords: [
    // Core & Regional High-Volume Terms
    "MCC Panel Manufacturers in Delhi NCR",
    "Intelligent Motor Control Center Manufacturers",
    "IMCC Panel Manufacturers India",
    "MCC Panel Manufacturers Gurgaon",
    "Motor Control Center Manufacturers Manesar",
    "Custom MCC Panel Fabricators",
    "Industrial Motor Starter Panels",
    "Motor Control Switchboard Manufacturers",

    // Technical Standards & Coordination
    "Type-2 Coordinated MCC Panels",
    "IEC 61439 Compliant MCC Panels",
    "IS 8623 Motor Control Center",
    "Form 4b Segregation MCC",
    "Drawout MCC Panel Manufacturers",
    "Fixed Type Motor Control Center",
    "IP54 MCC Enclosures",
    "IP55 Motor Starter Panels",

    // Starter Feeder Configurations
    "DOL Starter Panels",
    "Automatic Star Delta Starter Panel",
    "Soft Starter Control Panels",
    "VFD Drive Starter Panels",
    "Motor Protection Relay MPR Panels",
    "Multi-Pump Control Center",
    "Chiller Pump MCC Panels",
    "AHU Fan Starter Panels",

    // Intelligent IMCC Telemetry & Fieldbus
    "Smart IMCC Panels",
    "Modbus RTU Motor Control Center",
    "Profibus DP IMCC Panels",
    "Ethernet IP Motor Management",
    "SCADA Compatible MCC Panels",
    "BMS Integrated Motor Control Panels",

    // Industrial Belts & Geotargeting
    "MCC Panels Gurugram",
    "Motor Control Panels Noida",
    "MCC Panel Manufacturers Greater Noida",
    "Industrial Switchgear Faridabad",
    "Motor Control Center Ghaziabad",
    "MCC Panels Haryana",
    "Motor Control Panels Dharuhera",
    "MCC Panels Bawal Neemrana",

    // Applications & Client Sectors
    "Automotive Assembly MCC Panels",
    "Water Treatment Pumping Station MCC",
    "Cleanroom Ventilation Motor Panels",
    "Heavy Manufacturing Motor Control Centers",
    "Commercial Building HVAC MCC",
    "Adhunik Powertech Motor Control Panels"
  ],

  robots: "index, follow",

  openGraph: {
    title: "MCC & Intelligent Motor Control Centre Manufacturers in Delhi NCR | Adhunik Powertech",
    description:
      "Custom CPRI type-tested Motor Control Center (MCC) & Intelligent IMCC Panels. Type-2 coordination, drawout drawers, Modbus/Profibus networking, and local site support across Delhi NCR.",
    url: "https://www.adhunikpowertech.com/mcc-panel-manufacturers",
    type: "article",
    images: [
      {
        url: "https://www.adhunikpowertech.com/MCC%20&%20Intelligent%20Motor%20Control%20Centers.webp",
        width: 800,
        height: 600,
        alt: "Adhunik Powertech Custom MCC and Intelligent Motor Control Centers Panel",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikpowertech.com/mcc-panel-manufacturers",
  },

  twitter: {
    card: "summary_large_image",
    title: "MCC & Intelligent Motor Control Centre Manufacturers | Adhunik Powertech",
    description:
      "Custom CPRI type-tested Motor Control Center (MCC) & Intelligent IMCC Panels. Type-2 coordination, drawout drawers, Modbus/Profibus networking across Delhi NCR.",
    image: "https://www.adhunikpowertech.com/MCC%20&%20Intelligent%20Motor%20Control%20Centers.webp",
  },
};

export default function Page() {
  return (
    <>
      <MccPanelClient />
    </>
  );
}