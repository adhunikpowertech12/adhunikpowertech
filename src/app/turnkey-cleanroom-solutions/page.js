import React from 'react'
import ModularCleanroom from "./ModularCleanroom";

export const metadata = {
  title: "Clean Room Manufacturers in India | Turnkey Modular Solutions",
  description: "Adhunik Powertech specializes in turnkey modular cleanrooms. Design, engineering, manufacturing, & validation for Pharma, Healthcare, & Electronics. ISO & GMP compliant.",
  keywords: [
    "Clean Room Manufacturers in India",
    "Turnkey Cleanroom Solutions",
    "Modular Cleanroom Manufacturers",
    "Cleanroom Design and Engineering",
    "Pharmaceutical Cleanroom India",
    "Cleanroom HVAC Systems",
    "Cleanroom Wall Panels",
    "Cleanroom Ceiling Panels",
    "Modular Cleanroom Doors",
    "Air Shower Manufacturers",
    "Pass Box Manufacturers",
    "Dynamic Pass Box",
    "Static Pass Box",
    "HEPA Filter Systems",
    "ISO 14644 Cleanroom",
    "GMP Compliant Cleanroom",
    "Cleanroom Validation Services",
    "Cleanroom Maintenance India",
    "HVAC Consultants Delhi NCR",
    "Adhunik Powertech Cleanroom",
    "Modular Cleanroom Delhi",
    "Cleanroom Manufacturers Gurugram",
    "Cleanroom Manufacturers Noida",
    "Cleanroom Manufacturers Hyderabad",
    "Cleanroom Manufacturers Bangalore",
    "Operation Theatre Manufacturers",
    "ICU Cleanroom Solutions",
    "Electronic Manufacturing Cleanroom"
  ],
  
  openGraph: {
    title: "Adhunik Powertech: Leading Clean Room Manufacturers in India",
    description: "Expert turnkey modular cleanroom solutions. Customized design, manufacturing, and validation for critical controlled environments. Meet ISO & GMP standards.",
    url: "https://www.adhunikpowertech.com/turnkey-cleanroom-solutions",  
    type: "website",  
    images: [
      {
        url: "HVAC-CLEANROOM.webp", // Ensure you upload a relevant OG image
        width: 1200,  
        height: 630, 
        alt: "Bright, ultra-clean HVAC cleanroom lab with white flooring, ceiling HEPA vents and LED lighting",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.adhunikpowertech.com/turnkey-cleanroom-solutions",  
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnkey Modular Cleanroom Solutions | Adhunik Powertech",
    description: "High-performance modular cleanrooms tailored for Pharma, Biotech, and Healthcare. Turnkey execution from design to validation.",
    image: "HVAC-CLEANROOM.webp",  
  },
};

// Paste this small block here to connect this page to your main header graph
const cleanroomJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.adhunikpowertech.com/turnkey-cleanroom-solutions#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.adhunikpowertech.com/" },
        { "@type": "ListItem", "position": 2, "name": "Clean Room Solutions", "item": "https://www.adhunikpowertech.com/turnkey-cleanroom-solutions" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.adhunikpowertech.com/turnkey-cleanroom-solutions",
      "url": "https://www.adhunikpowertech.com/turnkey-cleanroom-solutions",
      "name": "Clean Room Manufacturers in India | Turnkey Modular Solutions",
      "description": "Adhunik Powertech is a premier clean room manufacturer in India, offering complete turnkey modular clean room solutions for pharmaceutical, electronics, and healthcare industries.",
      "breadcrumb": { "@id": "https://www.adhunikpowertech.com/turnkey-cleanroom-solutions#breadcrumb" },
      "isPartOf": { "@id": "https://www.adhunikpowertech.com/#website" },
      "inLanguage": "en-IN"
    }
  ]
};

export default function Page() {
  return (
    <>
      {/* This injects the schema cleanly into this page only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanroomJsonLd) }}
      />
                     <ModularCleanroom/>
    </>
  )
}