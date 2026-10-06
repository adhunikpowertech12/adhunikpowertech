import ElectricalPanels from "./ElectricalPanels";

export const metadata = {
  title: "Electrical Panel Manufacturers in Delhi NCR | Adhunik Powertech",
  description:
    "Custom CPRI & IEC 61439 compliant LT, MCC, PCC, and HVAC control panels in Delhi NCR. Get fast 24-hr SLD reviews, competitive pricing, and local site support.",
  keywords: [
    // Core & Regional High-Volume Terms
    "Electrical Panel Manufacturers in Delhi NCR",
    "Electrical Control Panel Manufacturers",
    "LT Panel Manufacturers in Delhi NCR",
    "MCC Panel Manufacturers Delhi",
    "PCC Panel Manufacturers Gurgaon",
    "Industrial Electrical Panel Board",
    "Custom Control Panel Fabricators",
    "Electrical Switchboard Manufacturers",

    // Technical Standards & Compliance
    "IEC 61439 Compliant Panels",
    "IS 8623 Electrical Panels",
    "CPRI Type Tested Panels",
    "Form 4b Segregation Panels",
    "IP55 Electrical Enclosures",
    "IP65 Control Panels",

    // Specific Target Panels
    "Power Control Center Panels",
    "Motor Control Center Panels",
    "Intelligent MCC Panels",
    "HVAC Control Panels",
    "AHU Electrical Control Panel",
    "Air Washer Control Panels",
    "Chiller Plant Starter Panels",
    "VFD Control Panels",
    "PLC Automation Panels",
    "APFC Panels Delhi NCR",
    "Automatic Power Factor Correction",
    "11kV HT Panels",
    "33kV VCB Panels",
    "Fire Fighting Pump Control Panels",
    "Smoke Pressurization Fan Panels",
    "DOL Starter Panels",
    "Star Delta Starter Panels",

    // Industrial Belts & Geotargeting
    "Electrical Panels Gurugram",
    "Electrical Panels Manesar",
    "LT Panel Manufacturers Noida",
    "Control Panel Manufacturers Greater Noida",
    "Electrical Panel Manufacturers Faridabad",
    "Industrial Switchgear Ghaziabad",
    "Electrical Panels Haryana",
    "Electrical Panels Dharuhera",

    // Applications & Client Sectors
    "Cleanroom Electrical Panels",
    "Automotive Plant Control Panels",
    "Pharmaceutical Grade Electrical Panels",
    "Commercial Building LT Distribution",
    "BMS Compatible Control Panels",
    "Industrial Automation Switchboards",
  ],

  robots: "index, follow",

  openGraph: {
    title: "Electrical Panel Manufacturers in Delhi NCR | Adhunik Powertech",
    description:
      "Custom CPRI & IEC 61439 compliant LT, MCC, PCC, and HVAC control panels in Delhi NCR. Get fast 24-hr SLD reviews, competitive pricing, and local site support.",
    url: "https://www.adhunikpowertech.com/electrical-panels",
    type: "website",
    images: [
      {
        url: "https://www.adhunikpowertech.com/panel_ac%20upper%20image.webp",
        width: 800,
        height: 600,
        alt: "Adhunik Powertech Custom Electrical Control Panels",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikpowertech.com/electrical-panels",
  },

  twitter: {
    card: "summary_large_image",
    title: "Electrical Panel Manufacturers in Delhi NCR | Adhunik Powertech",
    description:
      "Custom CPRI & IEC 61439 compliant LT, MCC, PCC, and HVAC control panels in Delhi NCR. Get fast 24-hr SLD reviews, competitive pricing, and local site support.",
    image: "https://www.adhunikpowertech.com/panel_ac%20upper%20image.webp",
  },
};

// Declared outside metadata as a valid standalone schema
const catalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Industrial Electrical Control Panels Portfolio",
  "itemListElement": [
    {
      "@type": "SiteNavigationElement",
      "position": 1,
      "name": "PCC & Main LT Distribution Panels",
      "url": "https://www.adhunikpowertech.com/lt-panel-manufacturers"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 2,
      "name": "MCC & Intelligent Motor Control Centers",
      "url": "https://www.adhunikpowertech.com/mcc-panel-manufacturers"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 3,
      "name": "HVAC & Air Washer Control Panels",
      "url": "https://www.adhunikpowertech.com/hvac-electrical-control-panels"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 4,
      "name": "APFC Harmonic Filter Panels",
      "url": "https://www.adhunikpowertech.com/apfc-panel-manufacturers"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 5,
      "name": "VFD & PLC Automation Panels",
      "url": "https://www.adhunikpowertech.com/vfd-control-panels"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 6,
      "name": "Fire Fighting & Smoke Pressurization Panels",
      "url": "https://www.adhunikpowertech.com/fire-fighting-control-panels"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What standards do Adhunik Powertech electrical panels conform to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Adhunik Powertech electrical panels are built in compliance with IS 8623 and IEC 61439-1 & 2 standards, CPRI type-tested up to 4000A / 65kA with Form 3b/4b segregation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the turnaround time for SLD evaluation and quotation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Preliminary Single-Line Diagrams (SLD), GA drawings, and commercial quotations are provided within 24 to 48 hours of receiving your electrical schedules or BOQ."
      }
    },
    {
      "@type": "Question",
      "name": "How do your panels withstand high ambient temperatures during Delhi NCR summers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Panels feature generous thermal derating on all copper and aluminium busbars, forced ventilation with dust-proof louvers, or closed-loop industrial panel air conditioners to avoid nuisance tripping in sheds over 48°C."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ElectricalPanels />
    </>
  );
}