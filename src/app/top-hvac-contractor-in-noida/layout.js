import React from 'react';

// SEO Metadata for this blog post
export const metadata = {
  title: "Top HVAC Contractor in Noida | Adhunik Powertech",
  description: "Searching for the top HVAC contractor in Noida? Our 5-point checklist helps you choose the best partner for commercial HVAC installation, repair, and AMC.",
  keywords: [
    "HVAC contractor in Noida",
    "top HVAC contractor in Noida",
    "best HVAC contractor in Noida",
    "commercial HVAC Noida",
    "industrial HVAC Noida",
    "HVAC installation Noida",
    "HVAC AMC Noida",
    "HVAC services Noida",
    "turnkey HVAC projects",
    "chiller plants",
    "VRF/VRV systems",
    "Adhunik Powertech"
  ],
  alternates: {
    canonical: "https://www.adhunikpowertech.com/top-hvac-contractor-in-noida", // Use the correct blog URL
  },
  openGraph: {
    title: "Top HVAC Contractor in Noida | Adhunik Powertech",
    description: "Our 5-point checklist helps you choose the best partner for commercial/industrial HVAC installation, repair, and AMC in Noida.",
    url: "https://www.adhunikpowertech.com/top-hvac-contractor-in-noida", // Use the correct blog URL
    type: "article",
    images: [
      {
        url: "https://www.adhunikpowertech.com/top-hvac-contractor-in-noida.webp",
        width: 1200,
        height: 630,
        alt: "A large industrial HVAC unit on a rooftop in Noida.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top HVAC Contractor in Noida | Adhunik Powertech",
    description: "Our 5-point checklist helps you choose the best partner for commercial/industrial HVAC installation, repair, and AMC in Noida.",
    image: "https.www.adhunikpowertech.com/top-hvac-contractor-in-noida.webp",
  },
};

// This layout component just passes the children (your page.js) through
export default function BlogLayout({ children }) {
  return (
    <>{children}</>
  );
}