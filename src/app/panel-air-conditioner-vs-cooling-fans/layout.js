import React from 'react';

// SEO Metadata for "Panel AC vs. Cooling Fans" blog post
export const metadata = {
  // Root URL for Adhunik Powertech
  metadataBase: new URL('https://www.adhunikpowertech.com'),

  // SEO Title (Optimized for Search and AI Engines)
  title: "Panel AC vs Cooling Fans: Which Is Better for Control Panels?",
  description: "Using cooling fans in control panels? Discover why exhaust fans increase dust & heat—and why Panel AC is the better cooling solution for industrial panels.",

  // Expanded Keyword List for AEO (18 Targeted Keywords)
  keywords: [
    "Adhunik Powertech Panel Air Conditioner",
    "Heavy Duty Panel Air Conditioner Adhunik Powertech",
    "Industrial Panel Air Conditioners in Delhi NCR",
    "Panel Air Conditioner Manufacturers",
    "Best Panel Air Conditioner for Control Panels",
    "Panel AC for Electrical Enclosures",
    "CNC Machine Control Panel Cooling",
    "PLC Panel Air Conditioning System",
    "Cabinet Air Conditioner for Industrial Use",
    "Closed Loop Cooling for Control Panels",
    "NEMA 4X Panel Air Conditioners India",
    "VFD Panel Cooling Solutions",
    "Industrial Electrical Panel Cooling Delhi",
    "Panel Mounted Air Conditioning Units",
    "Panel ac",
    "panel ac price",
    "panel ac for electrical panel",
    "advance cooling- panel ac",
    "Panel air conditioner on gem",
    "panel air conditioner price",
    "panel ac manufacturers in india",
    "Dust Proof Cooling for Electrical Cabinets",
    "Energy Efficient Panel AC Manufacturers",
    "Panel Air Conditioner Supplier Noida Gurgaon"
  ],

  // Canonical link for SEO
  alternates: {
    canonical: "/panel-air-conditioner-vs-cooling-fans", 
  },

  // OpenGraph for Social Media and AI Discovery
  openGraph: {
    // Relevant AEO-optimized OG Title
    title: "Panel AC vs. Cooling Fans: Protecting Your Industrial Electronics",
    // Relevant AEO-optimized OG Description
    description: "Don't let exhaust fans ruin your PLCs. Learn how closed-loop Panel AC systems prevent dust buildup and overheating in industrial control panels.",
    url: "/panel-air-conditioner-vs-cooling-fans", 
    type: "article",
    siteName: "Adhunik Powertech",
    images: [
      {
        url: "Panel AC vs cooling fans for control panels showing industrial cooling solution in electrical cabinets", 
        width: 1200,
        height: 630,
        alt: "Panel AC vs cooling fans industrial cooling guide for control panels and electrical cabinets",
      },
    ],
  },
  
  // SEO Robots Instructions
  robots: "index, follow",

  // Twitter/X Metadata
  twitter: {
    card: "summary_large_image",
    // Relevant high-engagement Twitter Title
    title: "Is Your Exhaust Fan Damaging Your Control Panel?",
    // Relevant high-engagement Twitter Description
    description: "Fans pull in dust and heat. Switch to Adhunik Powertech's Heavy Duty Panel AC for 24/7 protection of your CNC and PLCs.",
    images: ["https://res.cloudinary.com/ddkyx2jhh/image/upload/v1771330538/Panel_AC_vs._Cooling_Fans_pooufv.webp"], 
  },
};

// Layout component wrapping the blog page
export default function PanelACBlogLayout({ children }) {
  return (
    <section className="panel-ac-blog-wrapper">
      {/* Semantic wrapper for industrial content scoping */}
      {children}
    </section>
  );
}