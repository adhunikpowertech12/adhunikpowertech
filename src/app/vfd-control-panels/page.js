import VfdControlPanelsClient from "./vfdcontrolpanels";

export const metadata = {
  title: "VFD & PLC Process Automation Panel Manufacturers in Delhi NCR | Adhunik Powertech",
  description:
    "Custom VFD & PLC Automation Panels in Delhi NCR. Integrated Siemens, Schneider & Delta PLCs, 7\"-15\" touchscreen HMIs, input chokes, and panel AC cooling for manufacturing & HVAC.",
  keywords: [
    // Primary High-Volume Search Terms
    "VFD Control Panel Manufacturers in Delhi NCR",
    "PLC Automation Panel Manufacturers",
    "VFD Panel Manufacturers Gurgaon",
    "PLC Control Panel Manufacturers Manesar",
    "Industrial Automation Panel Fabricators Noida",
    "Variable Frequency Drive Panels Faridabad",
    "Process Automation Control Panels",
    "Custom VFD Cubicle Manufacturers",

    // Educational Intent & Technical Keywords
    "What is VFD Control Panel",
    "What is PLC Automation Panel",
    "Difference Between VFD Panel and Starter Panel",
    "Siemens PLC Automation Panel",
    "Schneider PLC Control Panels",
    "Delta PLC HMI Control Panels",
    "Touchscreen HMI Control Panel 7 Inch 15 Inch",
    "Line Reactor AC Choke VFD Panels",
    "Profinet PLC Automation Panels",
    "Modbus RTU VFD Panels",
    "Closed Loop PID Control Panels",

    // Industrial Locations & Regional Corridors
    "VFD Panels Delhi NCR",
    "PLC Panels Gurugram",
    "Automation Panels Manesar",
    "VFD Panels Faridabad",
    "Industrial Control Panels Noida Greater Noida",
    "Automation Cubicles Ghaziabad",
    "VFD Panels Sonipat Panipat",
    "PLC Panels Rohtak Rewari Palwal",
    "Industrial Automation Bhiwadi",
    "VFD Control Panels Neemrana Tapukara",
    "Automation Panels Bawal Dharuhera",
    "Control Panels Meerut Muzaffarnagar",
    "PLC Automation Panels Jaipur Chandigarh",
  ],

  robots: "index, follow",

  openGraph: {
    title: "VFD & PLC Process Automation Panel Manufacturers in Delhi NCR | Adhunik Powertech",
    description:
      "Custom VFD & PLC Automation Panels in Delhi NCR. Integrated Siemens, Schneider & Delta PLCs, 7\"-15\" touchscreen HMIs, input chokes, and panel AC cooling for manufacturing & HVAC.",
    url: "https://www.adhunikpowertech.com/vfd-control-panels",
    type: "website",
    images: [
      {
        url: "https://www.adhunikpowertech.com/Adhunik%20plc-vfd-control-panel.webp",
        width: 800,
        height: 600,
        alt: "Adhunik Powertech VFD and PLC Process Automation Panel",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikpowertech.com/vfd-control-panels",
  },

  twitter: {
    card: "summary_large_image",
    title: "VFD & PLC Process Automation Panel Manufacturers | Adhunik Powertech",
    description:
      "Custom VFD & PLC Automation Panels in Delhi NCR. Integrated Siemens, Schneider & Delta PLCs, 7\"-15\" touchscreen HMIs, and closed-loop climate control.",
    image: "https://www.adhunikpowertech.com/Adhunik%20plc-vfd-control-panel.webp",
  },
};

// 1. Breadcrumb Schema for Hierarchical SEO
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.adhunikpowertech.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Electrical Control Panels",
      "item": "https://www.adhunikpowertech.com/electrical-panels"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "VFD & PLC Process Automation Panels",
      "item": "https://www.adhunikpowertech.com/vfd-control-panels"
    }
  ]
};

// 2. Product Schema for Manufacturer Entity Authority
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "VFD & PLC Process Automation Panels",
  "image": "https://www.adhunikpowertech.com/Adhunik%20plc-vfd-control-panel.webp",
  "description": "Custom Variable Frequency Drive (VFD) and PLC automation panels with integrated Siemens, Schneider, and Delta PLCs, 7\" to 15\" touchscreen HMIs, and panel AC climate management.",
  "brand": {
    "@type": "Brand",
    "name": "Adhunik Powertech"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Adhunik Powertech Private Limited",
    "url": "https://www.adhunikpowertech.com"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
};

// 3. FAQ Schema for Rich Results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is closed-loop cooling or panel AC essential for VFD and PLC automation cubicles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Variable Frequency Drives and control power supplies generate substantial heat and degrade rapidly in ambient temperatures above 40°C. In Delhi NCR summer conditions exceeding 45°C, integrated panel air conditioners keep internal cubicle temperatures below 35°C while preventing dust and moisture ingress."
      }
    },
    {
      "@type": "Question",
      "name": "How do AC line reactors and dV/dt filters protect drives and motor windings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Input AC line reactors dampen supply-side voltage spikes, cut harmonic distortion, and protect drive rectifiers. Output dV/dt filters smooth out high-frequency voltage spikes generated by fast-switching IGBTs, protecting motor winding insulation on cable runs longer than 30 meters."
      }
    },
    {
      "@type": "Question",
      "name": "Can Adhunik Powertech integrate custom dynamic SCADA screens and cloud IoT monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our engineering desk programs custom color touchscreen HMIs with dynamic equipment mimics, live trend graphs, and per-fault historical event logs, along with cloud IoT gateways and SCADA connectivity over Profinet or Modbus TCP."
      }
    },
    {
      "@type": "Question",
      "name": "Can the panel manage automatic cascade multi-pump staging with lead-lag logic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. For booster pumping stations, cooling towers, and secondary chilled water circuits, our PLC logic dynamically stages auxiliary pumps across variable-speed drives based on pressure sensor feedback, balancing total running hours to maximize equipment lifespan."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <VfdControlPanelsClient />
    </>
  );
}