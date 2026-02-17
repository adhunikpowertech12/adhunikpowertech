import React from 'react';


export const metadata = {
  metadataBase: new URL('https://www.adhunikpowertech.com'),

  title: "Industrial Turnkey HVAC Solutions | The Complete Industrial Guide",
  description: "Turnkey HVAC solutions for industrial applications, offering end-to-end air cooling and air conditioning projects with expert design, installation, and commissioning.",

  keywords: [
    "turnkey industrial HVAC solutions",
    "industrial air conditioning project management",
    "HVAC design and installation services",
    "commercial HVAC turnkey providers",
    "centralized cooling systems for factories",
    "industrial ventilation system design",
    "HVAC commissioning services",
    "energy-efficient industrial cooling",
    "HVAC contractors",
    "End-to-End HVAC Solutions for Industries",
    "Turnkey HVAC Contractor in Delhi NCR",
    "Industrial Cooling Solutions Provider",
    "Turnkey HVAC Solutions for Factories",
    "HVAC Project Execution Services",
    "Turnkey HVAC Design Build Services",
    "Turnkey HVAC Contractor in Delhi NCR",
    "Turnkey Hvac Solutions for Manufacturing plants",
    "Hvac Turnkey Solutions",

  ],

  alternates: {
    canonical: "/industrial-turnkey-hvac-solutions",
  },

  openGraph: {
    title: "Industrial Turnkey HVAC Solutions | Adhunik Powertech",
    description: "Looking for a reliable HVAC turnkey solution? Adhunik Powertech provides complete industrial HVAC projects for cooling, ventilation, and air conditioning across India",
    url: "/industrial-turnkey-hvac-solutions",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1770457627/Havc_Turnkey_b8xazd.webp", 
        width: 1200,
        height: 630,
        alt: "A large-scale industrial HVAC installation featuring ductwork and AHU units, representing complete turnkey service delivery.",
      },
    ],
  },

  robots: "index, follow",

  twitter: {
    card: "summary_large_image",
    title: "Turnkey HVAC Solutions: Design to Commissioning | Certified Engineering",
    description: "Minimize downtime and maximize efficiency with our all-in-one industrial HVAC solutions. Trusted by government and private sectors.",
    images: 
      "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1770457627/Havc_Turnkey_b8xazd.webp"

  },
};

export default function TurnkeyHVACLayout({ children }) {
  return (
    <section className="hvac-turnkey-wrapper">
      {/* Wrapper used for semantic scoping; 
          React fragment also works if no styling is needed at layout level 
      */}
      {children}
    </section>
  );
}