import React from 'react';

/**
 * SEO Strategy: HVAC Contractor Reliability & Selection
 * Focus: Top HVAC Company & Contractor in Delhi NCR
 * Updated: March 19, 2026
 */

export const metadata = {
  metadataBase: new URL('https://www.adhunikpowertech.com'),
  title: "Top HVAC Contractor in Delhi NCR | Industrial & Commercial HVAC Solutions",
  description: "Looking for a TOP HVAC CONTRACTOR IN DELHI NCR? Adhunik Powertech offers 19+ years of expertise in industrial & commercial HVAC projects, turnkey solutions, and energy-efficient systems.",
  
  keywords: [
    // Original Keywords
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
    "HVAC Consultants in Delhi NCR",
    "Top 10 HVAC Companies in Delhi",
    "HVAC contractors in Delhi",
    "Top HVAC contractors in Delhi",
    "HVAC contractors in Gurgaon",
    "HVAC Contractors in Noida",
    "HVAC company in India",
    "HVAC consultants in Delhi",
    "HVAC contractors near me",
    "Hvac contractor hvac system near me",
    "Hvac contractor hvac system cost",
    "Hvac contractor hvac services near me",
    "HVAC contractors in Delhi NCR",
    "Hvac contractor hvac services jobs"
  ],

  alternates: {
    canonical: "https://www.adhunikpowertech.com/hvac-consultants-in-delhi-ncr,
  },

  openGraph: {
    title: "Top HVAC Contractor in Delhi NCR | Reliable Company Guide",
    description: "Choose the top HVAC contractor in Delhi NCR with confidence. Industrial and commercial HVAC solutions by Adhunik Powertech.",
    url: "https://www.adhunikpowertech.com/hvac-consultants-in-delhi-ncr",
    siteName: "Adhunik Powertech",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1774247285/HVACinDelhincr_nioekh.webp",
        width: 1200,
        height: 630,
        alt: "Top HVAC contractor in Delhi NCR for industrial and commercial projects featuring modern HVAC plant room with large ducts, chillers, and ventilation systems by Adhunik Powertech",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Top HVAC Contractor in Delhi NCR | Adhunik Powertech",
    description: "Expert Industrial & Commercial HVAC Solutions in Delhi, Noida, and Gurgaon.",
    images: ["https://res.cloudinary.com/ddkyx2jhh/image/upload/v1774247285/HVACinDelhincr_nioekh.webp"]
  },
};

export default function HVACReliabilityLayout({ children }) {
  // Structured Data (JSON-LD) for better Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Adhunik Powertech",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi NCR",
      "addressCountry": "IN"
    },
    "description": "Top HVAC Contractor in Delhi NCR providing industrial and commercial HvacSolutions.",
    "url": "https://www.adhunikpowertech.com"
  };

  return (
    <section className="hvac-reliability-blog-wrapper">
      {/* Injecting JSON-LD for SEO enrichment */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="prose lg:prose-xl mx-auto px-4 py-8">
        {children}
      </article>
    </section>
  );
}
