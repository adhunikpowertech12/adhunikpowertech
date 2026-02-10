import React from 'react';

/**
 * SEO Strategy: Evaporative Cooling vs AC
 * Focus: Best Evaporative Air Cooling Projects of Adhunik Powertech
 * Target: Delhi NCR
 */
export const metadata = {
  metadataBase: new URL('https://www.adhunikpowertech.com'),

  title: "Best Evaporative Air Cooling Projects in Delhi NCR | Adhunik Powertech",
  description: "Looking for the best evaporative air cooling projects in Delhi NCR? Discover how industrial air washers reduce energy costs by up to 80% while delivering fresh, sustainable cooling.",

  keywords: [
    "best evaporative air cooling projects of Adhunik Powertech",
    "industrial air cooling solution Delhi NCR",
    "evaporative cooling vs AC in Delhi/Ncr",
    "sustainable industrial cooling solutions",
    "industrial air washers Delhi NCR",
    "Adhunik Powertech cooling systems",
    "energy efficient cooling for factories",
    "industrial ventilation services Delhi"
  ],

  alternates: {
    canonical: "/best-industrial-air-cooling-solution",
  },

  openGraph: {
    title: "Best Evaporative Air Cooling Projects in Delhi NCR | Adhunik Powertech",
    description: "Looking for the best evaporative air cooling projects in Delhi NCR? Discover how industrial air washers reduce energy costs by up to 80% while delivering fresh, sustainable cooling.",
    url: "/best-industrial-air-cooling-solution",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1770705914/evaoprative_air_coolingvs_ac_ewjq1b.webp", 
        width: 1200,
        height: 630,
        alt: "Industrial evaporative cooling system vs traditional air conditioning setup for factory air cooling solutions by Adhunik Powertech",
      },
    ],
  },

  robots: "index, follow",

  twitter: {
    card: "summary_large_image",
    title: "Best Evaporative Air Cooling Projects in Delhi NCR | Adhunik Powertech",
    description: "Looking for the Best Air Cooling Projects in Delhi NCR? Discover how industrial air washers reduce energy costs by up to 80%.",
    images: ["https://res.cloudinary.com/ddkyx2jhh/image/upload/v1770705914/evaoprative_air_coolingvs_ac_ewjq1b.webp"]
  },
};

export default function EvaporativeCoolingLayout({ children }) {
  return (
    <section className="evaporative-cooling-comparison">
      {/* Container for industrial cooling content */}
      {children}
    </section>
  );
}