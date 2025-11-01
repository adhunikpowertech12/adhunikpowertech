import React from 'react';

// SEO Metadata for this blog post
export const metadata = {
  // FIX: Added metadataBase to define the root URL for your site
  metadataBase: new URL('https://www.adhunikpowertech.com'),

  title: "5 Ways to Reduce Commercial HVAC Energy Consumption | Adhunik Powertech",
  description: "Learn how to reduce your commercial HVAC energy bills with 5 proven strategies, from smart maintenance (AMCs) to energy-efficient system upgrades.",

  keywords: [
    "reduce HVAC energy consumption",
    "commercial HVAC cost-saving",
    "energy-efficient HVAC India",
    "optimize HVAC performance",
    "HVAC AMC",
    "industrial cooling costs",
    "Adhunik Powertech"
  ],

  alternates: {
    canonical: "/blog/reduce-hvac-energy-consumption", // Using relative canonical
  },

  openGraph: {
    title: "5 Ways to Reduce Commercial HVAC Energy Consumption | Adhunik Powertech",
    description: "Learn how to reduce your commercial HVAC energy bills with 5 proven strategies, from smart maintenance (AMCs) to energy-efficient system upgrades.",
    url: "/blog/reduce-hvac-energy-consumption", // Using relative URL
    type: "article",
    images: [
      {
        url: "/5 ways to reduce energy consumption.webp", // <-- UPDATED IMAGE URL
        width: 1200,
        height: 630,
        alt: "5 ways to reduce commercial HVAC energy consumption.", // Updated Alt Text
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "5 Ways to Reduce Commercial HVAC Energy Consumption | Adhunik Powertech",
    description: "Learn how to reduce your commercial HVAC energy bills with 5 proven strategies, from smart maintenance (AMCs) to energy-efficient system upgrades.",
    image: "/5 ways to reduce energy consumption.webp", // <-- UPDATED IMAGE URL
  },
};

// This layout component just passes the children (your page.js) through
export default function BlogLayout({ children }) {
  return (
    <>{children}</>
  );
}

