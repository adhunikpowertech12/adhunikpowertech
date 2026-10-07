import ApfcPanelClient from "./apfcpanelmanufacturers";

export const metadata = {
  title: "APFC Harmonic Filter Panel Manufacturers in Delhi NCR | Adhunik Powertech",
  description:
    "Custom APFC & Harmonic Filter Panels in Delhi NCR. 50 kVAr to 1200 kVAr with 7% & 14% detuned reactors, thyristor switching (TSC), and DISCOM penalty elimination.",
  keywords: [
    // Primary High-Volume Search Terms
    "APFC Panel Manufacturers in Delhi NCR",
    "APFC Harmonic Filter Panel Manufacturers",
    "Automatic Power Factor Correction Panel",
    "APFC Panel Manufacturers Gurgaon",
    "Harmonic Filter Panel Manufacturers Manesar",
    "Custom APFC Panel Fabricators Noida",
    "Industrial Capacitor Bank Manufacturers",
    "Power Factor Correction Panels Faridabad",

    // Educational Intent & Technical Terms
    "What is APFC Panel",
    "How APFC Panel Works",
    "Difference Between Contactor and Thyristor APFC",
    "7 Percent Detuned Reactor APFC Panel",
    "14 Percent Detuned Filter Panels",
    "Thyristor Switched Capacitor TSC Panel",
    "Heavy Duty MPP Capacitor Panels",
    "DISCOM Low Power Factor Penalty Solution",

    // Industrial Locations & Regional Corridors
    "APFC Panels Delhi NCR",
    "Capacitor Panels Gurugram",
    "Harmonic Panels Manesar",
    "APFC Panels Faridabad",
    "Power Factor Panels Noida Greater Noida",
    "Capacitor Bank Manufacturers Ghaziabad",
    "APFC Panels Sonipat Panipat",
    "Harmonic Filter Panels Rohtak Rewari Palwal",
    "Power Factor Correction Bhiwadi",
    "APFC Panels Neemrana Tapukara",
    "Capacitor Panels Bawal Dharuhera",
    "Power Factor Panels Meerut Muzaffarnagar",
    "APFC Panels Jaipur Chandigarh",
  ],

  robots: "index, follow",

  openGraph: {
    title: "APFC Harmonic Filter Panel Manufacturers in Delhi NCR | Adhunik Powertech",
    description:
      "Custom APFC & Harmonic Filter Panels in Delhi NCR. 50 kVAr to 1200 kVAr with 7% & 14% detuned reactors, thyristor switching (TSC), and DISCOM penalty elimination.",
    url: "https://www.adhunikpowertech.com/apfc-panel-manufacturers",
    type: "website",
    images: [
      {
        url: "https://www.adhunikpowertech.com/Active-Harmonic-Filter.webp",
        width: 800,
        height: 600,
        alt: "Adhunik Powertech APFC Harmonic Filter Electrical Panel",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikpowertech.com/apfc-panel-manufacturers",
  },

  twitter: {
    card: "summary_large_image",
    title: "APFC Harmonic Filter Panel Manufacturers | Adhunik Powertech",
    description:
      "Custom APFC & Harmonic Filter Panels in Delhi NCR. 50 kVAr to 1200 kVAr with 7% & 14% detuned reactors and thyristor switching.",
    image: "https://www.adhunikpowertech.com/Active-Harmonic-Filter.webp",
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
      "name": "APFC Harmonic Filter Panels",
      "item": "https://www.adhunikpowertech.com/apfc-panel-manufacturers"
    }
  ]
};

// 2. Product Schema for Manufacturer Entity Authority
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "APFC Harmonic Filter Control Panels",
  "image": "https://www.adhunikpowertech.com/Active-Harmonic-Filter.webp",
  "description": "Custom Automatic Power Factor Correction (APFC) and Harmonic Filter Panels from 50 kVAr up to 1200 kVAr with 7% and 14% detuned reactors, thyristor switching, and DISCOM penalty elimination.",
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
      "name": "How do APFC panels eliminate low power factor penalties from DISCOMs in Delhi NCR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Power distribution utilities like DHBVN, UHBVN, and BSES penalize facilities operating below 0.90 PF. Our microprocessor-controlled APFC panels continuously track reactive power (kVAr) and automatically switch capacitor steps to maintain power factor near unity (> 0.98), eliminating penalties and demand surcharges."
      }
    },
    {
      "@type": "Question",
      "name": "Why are 7% or 14% detuned reactors required with capacitor banks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non-linear loads like VFDs, CNC machinery, and UPS units generate harmonics. Detuned reactors tune the LC resonance below dominant harmonic frequencies (e.g. 5th and 7th), preventing harmonic resonance and protecting capacitors from over-voltage and thermal failure."
      }
    },
    {
      "@type": "Question",
      "name": "When should Thyristor-Switched Capacitor (TSC) panels be chosen over contactors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard contactors require a discharge cooldown interval of 30 to 60 seconds before re-energizing. For fast-fluctuating loads like spot welders, stamping presses, and cranes, thyristor switching modules connect capacitor steps within milliseconds without transient voltage surges."
      }
    },
    {
      "@type": "Question",
      "name": "How does Adhunik Powertech manage heat dissipation inside APFC panels during peak summer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Detuned reactors generate notable heat during harmonic filtration. Our panels isolate reactor compartments from capacitor banks and integrate thermostatic forced-air exhaust blowers or optional closed-loop industrial panel air conditioners to keep interior temperatures below 40°C."
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
      <ApfcPanelClient />
    </>
  );
}