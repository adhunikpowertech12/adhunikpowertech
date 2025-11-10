import React from 'react';

// SEO Metadata for the "HVAC Experts in Gurugram" blog post
export const metadata = {
  // FIX: Define the root URL for your site
  metadataBase: new URL('https://www.adhunikpowertech.com'),

  // UPDATED TITLE (43 Characters - meets the <= 50 char limit)
  title: "HVAC Experts Gurugram: AC & Heating Services",
  description: "Find trusted HVAC experts in Gurugram for seamless installation, expert maintenance (AMC), and system optimization to handle Delhi NCR's extreme weather swings efficiently.",

  keywords: [
    "HVAC Experts Gurugram",
    "HVAC Installation Expert",
    "HVAC AMC Gurugram",
    "HVAC contractor Delhi NCR",
    "Best Air Conditioning Services in Gurugram"
  ],

  // Canonical link for SEO
  alternates: {
    canonical: "/hvac-experts-in-gurugram", 
  },

  openGraph: {
    // UPDATED OpenGraph Title
    title: "HVAC Experts Gurugram: AC & Heating Services",
    description: "Find trusted HVAC experts in Gurugram for seamless installation, expert maintenance (AMC), and system optimization to handle Delhi NCR's extreme weather swings efficiently.",
    url: "/hvac-experts-in-gurugram", 
    type: "article",
    images: [
      {
        url: "/hvacexperts.webp",
        width: 1200,
        height: 630,
        alt: "Professional HVAC expert servicing a unit in a Gurugram building.",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    // UPDATED Twitter Title
    title: "HVAC Experts Gurugram: AC & Heating Services",
    description: "Find trusted HVAC experts in Gurugram for seamless installation, expert maintenance (AMC), and system optimization to handle Delhi NCR's extreme weather swings efficiently.",
    image: "/hvacexperts.webp", 
  },
};

// This layout component just passes the children (your page.js) through
export default function BlogLayout({ children }) {
  return (
    <>{children}</>
  );
}