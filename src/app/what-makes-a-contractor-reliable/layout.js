import React from 'react';

/**
 * SEO Strategy: HVAC Contractor Reliability & Selection
 * Focus: Top HVAC Company in Delhi NCR & Top HVAC Contractor in Delhi NCR
 * Target: Industrial & Commercial Decision Makers in Delhi/NCR
 */
export const metadata = {
  metadataBase: new URL('https://www.adhunikpowertech.com'),

  title: "Top HVAC Contractor in Delhi NCR | Reliable Company Guide",
  description: "Find out what makes a TOP HVAC CONTRACTOR IN DELHI NCR reliable. Explore Adhunik Powertech's 19+ years of expertise in industrial and commercial HVAC projects.",

  keywords: [
    "Top HVAC Company in Delhi NCR",
    "TOP HVAC CONTRACTOR IN DELHI NCR",
    "Reliable HVAC contractors Delhi",
    "Industrial HVAC projects Gurugram",
    "Commercial AC installation Noida",
    "Adhunik Powertech HVAC reliability",
    "Best HVAC engineering company India",
    "HVAC turnkey projects Delhi NCR",
    "industrial climate control experts",
    "HVAC Company in Delhi NCR",
    "HVAC Company in Gurugram",
    "Top HVAC Manufacturing in Delhi NCR",
    "Top HVAC Solutions in Delhi NCR",
    "Top & Best HVAC Company in Delhi NCR",
    "Top HVAC Company in India",
    "HVAC Company in Gurgaon",
    "HVAC System Manufacturers in India",
    "HVAC Consultants in Delhi NCR"

  ],

  alternates: {
    canonical: "https://www.adhunikpowertech.com/what-makes-a-contractor-reliable",
  },

  openGraph: {
    title: "Top HVAC Contractor in Delhi NCR | Reliable Company Guide",
    description: "Choose the top HVAC contractor in Delhi NCR with confidence. Understand reliability factors, project expertise, and energy-efficient HVAC solutions for your business.",
    url: "https://www.adhunikpowertech.com/what-makes-a-contractor-reliable",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1773833826/company_guide_b7dkig.webp", 
        width: 1200,
        height: 630,
        alt: "An industrial-style image featuring large silver HVAC ductwork and ventilation machinery in a clean, professional facility. The lower third of the image contains a dark blue banner with bold white text that reads: TOP HVAC CONTRACTOR IN DELHI NCR | RELIABLE COMPANY GUIDE. A small company logo is visible in the top left corner.",
      },
    ],
  },

  robots: "index, follow",

  twitter: {
    card: "summary_large_image",
    title: "Top HVAC Contractor in Delhi NCR | Reliable Company Guide",
    description: "Choose the top HVAC contractor in Delhi NCR with confidence. Understand reliability factors, project expertise, and energy-efficient HVAC solutions for your business.",
    images: ["https://res.cloudinary.com/ddkyx2jhh/image/upload/v1773833826/company_guide_b7dkig.webp"]
  },
};

export default function HVACReliabilityLayout({ children }) {
  return (
    <section className="hvac-reliability-blog-wrapper">
      {/* This layout wraps the HVAC reliability content. 
          It ensures all metadata is properly injected into the <head> 
          for better ranking of the focus keywords.
      */}
      {children}
    </section>
  );
}