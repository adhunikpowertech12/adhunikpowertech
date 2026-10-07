import HvacElectricalControlPanels from "./hvacelectricalcontrolpanels";

export const metadata = {
  title: "HVAC, AHU & Air Washer Control Panel Manufacturers in Delhi NCR",
  description:
    "Custom AHU, Air Washer, and HVAC Electrical Control Panels in Delhi NCR. Native BACnet/Modbus, dynamic duct static pressure VFD modulation, and fire damper trips.",
  keywords: [
    // Primary High-Volume Search Terms
    "HVAC Control Panel Manufacturers in Delhi NCR",
    "AHU Electrical Control Panel",
    "Air Washer Control Panel Manufacturers",
    "Air Handling Unit Starter Panel",
    "HVAC Control Panel Manufacturers Gurgaon",
    "Custom Air Washer Panel Fabricators Noida",
    "Industrial Ventilation Control Panels",
    "HVAC VFD Starter Switchboards",

    // Educational Intent
    "What is HVAC Control Panel",
    "What is AHU Control Panel",
    "What is Air Washer Control Panel",
    "Difference Between AHU and Air Washer Panel",
    "Static Pressure VFD Control Panel",
    "Fire Damper Interlocked AHU Panel",
    "Filter DP Switch Monitoring Panel",
    "BACnet IP HVAC Control Panels",

    // Industrial Locations & Corridors
    "HVAC Panels Delhi NCR",
    "AHU Starter Panels Gurugram",
    "Air Washer Control Panels Manesar",
    "HVAC Electrical Panels Faridabad",
    "Air Washer Panels Noida Greater Noida",
    "HVAC Control Panels Ghaziabad",
    "Industrial Ventilation Panels Sonipat Panipat",
    "AHU Panels Rohtak Rewari Palwal",
    "Air Washer Panels Bhiwadi Neemrana Tapukara",
    "HVAC Control Panels Bawal Dharuhera",
    "Airside Control Switchboards Meerut Muzaffarnagar",
    "HVAC Panels Jaipur Chandigarh",
  ],

  robots: "index, follow",

  openGraph: {
    title: "HVAC, AHU & Air Washer Control Panel Manufacturers in Delhi NCR",
    description:
      "Custom AHU, Air Washer, and HVAC Electrical Control Panels in Delhi NCR. Native BACnet/Modbus integration, dynamic duct static pressure VFD modulation, and fire damper safety trips.",
    url: "https://www.adhunikpowertech.com/hvac-electrical-control-panels",
    type: "website",
    images: [
      {
        url: "https://www.adhunikpowertech.com/HVAC%20&%20Air%20Washer%20Control%20Panels.webp",
        width: 800,
        height: 600,
        alt: "Adhunik Powertech Custom HVAC and Air Washer Electrical Control Panel",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikpowertech.com/hvac-electrical-control-panels",
  },

  twitter: {
    card: "summary_large_image",
    title: "HVAC, AHU & Air Washer Control Panel Manufacturers | Adhunik Powertech",
    description:
      "Custom AHU, Air Washer, and HVAC Electrical Control Panels in Delhi NCR. Native BACnet/Modbus integration and NBC fire damper trips.",
    image: "https://www.adhunikpowertech.com/HVAC%20&%20Air%20Washer%20Control%20Panels.webp",
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
      "name": "HVAC & Air Washer Control Panels",
      "item": "https://www.adhunikpowertech.com/hvac-electrical-control-panels"
    }
  ]
};

// 2. Product Schema for Manufacturer Entity Authority
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "HVAC & Air Washer Electrical Control Panels",
  "image": "https://www.adhunikpowertech.com/HVAC%20&%20Air%20Washer%20Control%20Panels.webp",
  "description": "Custom AHU, Air Washer, and HVAC Electrical Control Panels with native BACnet/Modbus integration, dynamic duct static pressure VFD modulation, and motorized fire damper cutoffs.",
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
      "name": "How does the panel automate AHU fan speeds based on duct static pressure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The panel integrates a closed-loop PID controller within the Variable Frequency Drive (VFD) wired to a sensitive static pressure transmitter in the duct, automatically modulating fan RPM to maintain setpoint pressure and reduce energy consumption."
      }
    },
    {
      "@type": "Question",
      "name": "What safety interlock occurs when a fire alarm or smoke damper is triggered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our panels feature fail-safe loops linked directly to Motorized Fire Dampers (MFD) and the building Fire Alarm Panel (FACP), instantly cutting off supply air fans to prevent smoke circulation while actuating dedicated smoke extraction blowers."
      }
    },
    {
      "@type": "Question",
      "name": "Can this panel monitor filter clogging in cleanrooms and pharma sterile areas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The panel incorporates differential pressure (DP) switches and analog transmitters across Pre, Fine, and HEPA filter banks, generating visual alerts and BMS signals when thresholds exceed cleanroom limits."
      }
    },
    {
      "@type": "Question",
      "name": "Can the panel manage water level and pump alternation in Air Washers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. For evaporative air washers, the panel includes multi-level water controller circuits with dry-run cutoff, motorized float valve control, and pump alternation timers for lead-lag rotation."
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
      <HvacElectricalControlPanels />
    </>
  );
}