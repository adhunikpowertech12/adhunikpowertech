import React from 'react';


export const metadata = {
  metadataBase: new URL('https://www.adhunikpowertech.com'),

  title: "Turnkey HVAC Solutions for Industrial Applications | The Complete Industrial Guide",
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
    "clean room HVAC solutions"
  ],

  alternates: {
    canonical: "/turnkey-hvac-solutions-for-industrial-applications",
  },

  openGraph: {
    title: "Turnkey HVAC Solutions for Industrial Applications | Adhunik Powertech",
    description: "Looking for a reliable HVAC turnkey solution? Adhunik Powertech provides complete industrial HVAC projects for cooling, ventilation, and air conditioning across India",
    url: "/turnkey-hvac-solutions-for-industrial-applications",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1770359810/Turnkey_HVAC_Solution_lxuyjp.webp", 
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
      "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1770359810/Turnkey_HVAC_Solution_lxuyjp.webp"

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