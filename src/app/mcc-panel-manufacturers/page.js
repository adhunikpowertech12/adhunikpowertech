import MccPanelClient from "./mccpanelmanufacturers";

export const metadata = {
  title: "MCC & Intelligent Motor Control Centre Manufacturers in Delhi NCR",
  description:
    "CPRI type-tested Motor Control Center (MCC) & Intelligent IMCC Panels in Delhi NCR. Type-2 coordination, drawout drawers, Modbus/Profibus, and local site support.",
  keywords: [
    // Core & Primary High-Volume Search Terms
    "MCC Panel Manufacturers in Delhi NCR",
    "Intelligent Motor Control Center Manufacturers",
    "IMCC Panel Manufacturers India",
    "MCC Panel Manufacturers Gurgaon",
    "Motor Control Center Manufacturers Manesar",
    "Custom MCC Panel Fabricators",
    "Industrial Motor Starter Panels",
    "Motor Control Switchboard Manufacturers",

    // Educational & Architectural Intent
    "What is MCC Panel",
    "What is Intelligent IMCC",
    "Difference Between MCC and IMCC",
    "Type-2 Coordinated MCC Panels",
    "Drawout MCC Panel Manufacturers",
    "Fixed Compartmentalized Motor Control Center",
    "Form 4b Segregation MCC",
    "IS 8623 IEC 61439 Motor Control Panels",

    // Starter Feeder Topologies
    "DOL Motor Starter Panels",
    "Automatic Star Delta Starter Panel",
    "Soft Starter Motor Control Center",
    "VFD Drive Integrated MCC Panels",
    "Microprocessor Motor Protection Relay MPR",
    "Multi-Pump Motor Control Center",

    // All Target Locations & Industrial Corridors
    "MCC Panels Delhi NCR",
    "MCC Panel Manufacturers Gurugram",
    "Motor Control Centers Manesar",
    "MCC Panels Faridabad",
    "Motor Control Panels Noida",
    "MCC Panel Manufacturers Greater Noida",
    "Industrial Switchgear Ghaziabad",
    "MCC Panels Sonipat Panipat",
    "Motor Control Switchboards Rohtak Rewari Palwal",
    "MCC Panels Bhiwadi",
    "Motor Control Panels Neemrana Tapukara",
    "MCC Panel Manufacturers Bawal Dharuhera",
    "Motor Control Centers Meerut Muzaffarnagar",
    "MCC Panel Manufacturers Jaipur Chandigarh",
  ],

  robots: "index, follow",

  openGraph: {
    title: "MCC & Intelligent Motor Control Centre Manufacturers in Delhi NCR",
    description:
      "CPRI type-tested Motor Control Center (MCC) & Intelligent IMCC Panels in Delhi NCR. Type-2 coordination, drawout drawers, Modbus/Profibus, and local site support.",
    url: "https://www.adhunikpowertech.com/mcc-panel-manufacturers",
    type: "website",
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
      "CPRI type-tested Motor Control Center (MCC) & Intelligent IMCC Panels in Delhi NCR. Type-2 coordination, drawout drawers, Modbus/Profibus networking.",
    image: "https://www.adhunikpowertech.com/MCC%20&%20Intelligent%20Motor%20Control%20Centers.webp",
  },
};

// 1. Breadcrumb Schema for Site Hierarchy
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
      "name": "MCC & Intelligent IMCC Panels",
      "item": "https://www.adhunikpowertech.com/mcc-panel-manufacturers"
    }
  ]
};

// 2. Product Schema for Manufacturer Entity Authority
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "MCC & Intelligent Motor Control Centers (IMCC)",
  "image": "https://www.adhunikpowertech.com/MCC%20&%20Intelligent%20Motor%20Control%20Centers.webp",
  "description": "Custom CPRI type-tested Motor Control Center (MCC) and Intelligent IMCC Panels up to 3200A busbar with Type-2 short-circuit coordination and Form 4b segregation.",
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

// 3. FAQ Schema for SERP Dropdown Rich Snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Type-2 Coordination, and why is it critical for industrial MCC panels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "According to IEC 60947-4-1, Type-2 coordination guarantees that in the event of a severe short circuit, no danger is posed to operators and the contactor and overload relay do not suffer permanent welding, allowing immediate return to service without replacing parts."
      }
    },
    {
      "@type": "Question",
      "name": "What distinguishes an Intelligent MCC (IMCC) from a standard conventional MCC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A conventional MCC uses hardwired control circuits with analog meters, whereas an Intelligent IMCC integrates microprocessor-based Motor Management Relays (MMRs) and digital industrial fieldbuses (Modbus, Profibus, Ethernet) to stream per-motor telemetry directly to central SCADA/BMS systems."
      }
    },
    {
      "@type": "Question",
      "name": "Can Adhunik Powertech MCC panels house both fixed and drawout modules in the same lineup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Adhunik Powertech manufactures switchboards with fully interchangeable drawout feeder drawers for critical drives alongside economical fixed compartmentalized modules for standard auxiliary drives."
      }
    },
    {
      "@type": "Question",
      "name": "How are motor feeder cables terminated safely during routine live maintenance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Form 4b enclosures feature independent, isolated vertical cable chambers (cable alleys) running alongside each vertical tier, allowing maintenance technicians to inspect or dress motor cables without touching live busbar droppers."
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
      <MccPanelClient />
    </>
  );
}