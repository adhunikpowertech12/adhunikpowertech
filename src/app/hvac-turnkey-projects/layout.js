import React from 'react';

export const metadata = {
  metadataBase: new URL('https://www.adhunikpowertech.com'),

  title: "HVAC Turnkey Projects Delhi NCR | Save Cost – Adhunik Powertech",
  description: "Save up to 25% on HVAC costs with integrated turnkey projects in Delhi NCR. Discover how Adhunik Powertech eliminates vendor conflicts and speeds up facility launches.",

  keywords: [
    "HVAC turnkey projects in Delhi NCR",
    "best HVAC Contractor in Delhi NCR",
    "Industrial HVAC contractor in Delhi NCR",
    "Commercial HVAC contractor NCR",
    "HVAC maintenance contractor NCR",
    "Adhunik Powertech turnkey HVAC cost savings",
    "industrial cooling project management",
    "Adhunik Powertech HVAC solutions",
    "centralized HVAC projects Delhi",
    "HVAC system design and installation NCR",
    "turnkey HVAC project meaning for industries",
    "HVAC turnkey contractor near me",
    "HVAC contractor in Delhi NCR for industries",
    "industrial HVAC services near Delhi NCR",
    "commercial HVAC contractor near me",

    "HVAC maintenance services near me NCR",
    "HVAC project company in Gurgaon Noida Faridabad",
    "HVAC contractor for factories in Noida",
    "HVAC solutions provider in Gurugram",
    "HVAC turnkey services in Greater Noida"
  ],

  alternates: {
    canonical: "/hvac-turnkey-projects",
  },

  openGraph: {
    title: "HVAC Turnkey Projects Delhi NCR | Save Cost – Adhunik Powertech",
    description: "Planning an HVAC project in Delhi NCR? Talk to our turnkey HVAC experts and get a custom cost-saving plan for your facility",
    url: "/hvac-turnkey-projects-delhi-ncr",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1771838810/hvacturnkey_jpm1qj.webp", 
        width: 1200,
        height: 630,
        alt: "Why turnkey HVAC projects save cost in large facilities",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  twitter: {
    card: "summary_large_image",
    title: " HVAC Turnkey Projects Delhi NCR | Cut Cost & Delays with Adhunik Powertech",
    description: "Struggling with HVAC vendor conflicts and slow project timelines? Learn how turnkey HVAC projects in Delhi NCR reduce cost, risk, and commissioning time.",
    images: ["https://res.cloudinary.com/ddkyx2jhh/image/upload/v1771838810/hvacturnkey_jpm1qj.webp"]
  },
};

export default function TurnkeyHVACLayout({ children }) {
  return (
    <section className="hvac-turnkey-blog-layout">
      {/* This wrapper ensures the turnkey content is properly 
          contained for industrial-themed styling.
      */}
      {children}
    </section>
  );
}