import FireFightingControlPanelsClient from "./firefightingcontrolpanels";

export const metadata = {
  title: "Fire Pump & Smoke Pressurization Panel Manufacturers in Delhi NCR",
  description:
    "Custom Fire Fighting Pump & Smoke Pressurization Panels in Delhi NCR. NBC 2016 compliant, 2-hour fire-rated enclosures, ATS dual-power changeovers, and Fire NOC support.",
  keywords: [
    // Primary High-Volume Search Terms
    "Fire Fighting Control Panel Manufacturers in Delhi NCR",
    "Fire Pump Control Panel Manufacturers",
    "Smoke Pressurization Fan Panel Manufacturers",
    "Fire Fighting Panel Manufacturers Gurgaon",
    "Fire Pump Starter Panels Manesar",
    "Fire Electrical Control Panel Noida",
    "Hydrant Pump Starter Panel Faridabad",
    "Custom Fire Switchboard Fabricators",

    // Educational Intent & Standards
    "What is Fire Pump Control Panel",
    "What is Smoke Pressurization Panel",
    "Difference Between Fire Pump and Smoke Pressurization Panel",
    "NBC 2016 Fire Fighting Panels",
    "NFPA 20 Fire Pump Starters",
    "2 Hour Fire Rated Electrical Enclosures",
    "IP55 Fire Pump Control Panels",
    "Automatic ATS Fire Pump Panels",
    "Pressure Switch Automated Fire Panels",
    "Fire NOC Clearance Electrical Panels",

    // System Components & Sub-panels
    "Main Hydrant Pump Control Panel",
    "Sprinkler System Starter Panel",
    "Jockey Pump Starter Panel",
    "Staircase Pressurization Fan Panel",
    "Lift Well Smoke Pressurization Panel",
    "Basement Jet Fan Ventilation Panel",
    "Diesel Engine Fire Pump Sync Panels",

    // Industrial Locations & Regional Corridors
    "Fire Panels Delhi NCR",
    "Fire Pump Panels Gurugram",
    "Smoke Extraction Panels Manesar",
    "Fire Fighting Panels Faridabad",
    "Fire Safety Control Panels Noida Greater Noida",
    "Industrial Fire Panels Ghaziabad",
    "Fire Pump Panels Sonipat Panipat",
    "Smoke Pressurization Panels Rohtak Rewari Palwal",
    "Fire Control Panels Bhiwadi",
    "Fire Electrical Panels Neemrana Tapukara",
    "Fire Safety Switchboards Bawal Dharuhera",
    "Fire Fighting Panels Meerut Muzaffarnagar",
    "Fire Pump Panels Jaipur Chandigarh",
  ],

  robots: "index, follow",

  openGraph: {
    title: "Fire Pump & Smoke Pressurization Panel Manufacturers in Delhi NCR",
    description:
      "Custom Fire Fighting Pump & Smoke Pressurization Panels in Delhi NCR. NBC 2016 compliant, 2-hour fire-rated enclosures, ATS dual-power changeovers, and Fire NOC support.",
    url: "https://www.adhunikpowertech.com/fire-fighting-control-panels",
    type: "website",
    images: [
      {
        url: "https://www.adhunikpowertech.com/Adhunik%20Fire%20Panel.webp",
        width: 800,
        height: 600,
        alt: "Adhunik Powertech Fire Pump and Smoke Pressurization Panel",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikpowertech.com/fire-fighting-control-panels",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fire Pump & Smoke Pressurization Panel Manufacturers | Adhunik Powertech",
    description:
      "Custom Fire Fighting Pump & Smoke Pressurization Panels in Delhi NCR. NBC 2016 compliant, 2-hour fire-rated enclosures, and ATS dual-power auto changeovers.",
    image: "https://www.adhunikpowertech.com/Adhunik%20Fire%20Panel.webp",
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
      "name": "Fire Fighting & Smoke Pressurization Panels",
      "item": "https://www.adhunikpowertech.com/fire-fighting-control-panels"
    }
  ]
};

// 2. Product Schema for Manufacturer Entity Authority
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Fire Pump & Smoke Pressurization Control Panels",
  "image": "https://www.adhunikpowertech.com/Adhunik%20Fire%20Panel.webp",
  "description": "Life safety electrical starter cubicles for Main Hydrant, Sprinkler, and Jockey pumps alongside staircase and lift-well smoke pressurization blowers conforming to NBC 2016 Part 4 and NFPA 20.",
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
      "name": "How does the panel automate pressure cascading between Jockey, Hydrant, and Sprinkler pumps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The panel connects directly to independent pressure switches calibrated across distinct bar/psi thresholds on the main fire ring header. When minor pressure drops occur due to line seepage, the Jockey pump runs briefly. If a hydrant valve or sprinkler bulb triggers a major pressure drop, the main electric pump starts automatically. If electrical mains fail, the standby diesel engine pump cranks automatically within seconds."
      }
    },
    {
      "@type": "Question",
      "name": "Why are staircase and lift-well pressurization fan panels mandatory for fire NOC clearance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "According to the National Building Code (NBC 2016), pressurized air prevents hot toxic smoke and lethal combustion gases from penetrating emergency escape routes. Our panels actuate high-velocity blowers immediately upon fire alarm initiation, creating a continuous positive pressure differential inside stairwells and lift shafts to ensure safe egress for occupants."
      }
    },
    {
      "@type": "Question",
      "name": "Why does the panel bypass motor overload trips during an actual emergency fire event?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In compliance with life-safety fire codes, the primary electric fire pump must run to destruction rather than tripping on minor overcurrent during an active fire. Our starter units feature lockable auto-manual switches and bypass circuits ensuring the main water flow continues unabated until the fire is controlled or manually shut off."
      }
    },
    {
      "@type": "Question",
      "name": "Does the panel provide dual power auto-changeover between utility power and emergency DG?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The panel incorporates an integrated four-pole automatic transfer switch (ATS) with motorized ACB/MCCB breakers and mechanical/electrical interlocking. In the event of grid supply loss, it automatically shifts incomer bus connections to the captive emergency generator within seconds."
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
      <FireFightingControlPanelsClient />
    </>
  );
}