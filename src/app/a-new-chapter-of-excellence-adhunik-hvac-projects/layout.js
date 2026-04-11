import React from 'react';

// SEO Metadata for this blog post
export const metadata = {
  metadataBase: new URL('https://www.adhunikpowertech.com'),

  title: "A New Chapter of Excellence: Introducing Adhunik HVAC Projects",
  description: "Adhunik Powertech is proud to announce Adhunik HVAC Projects, our new specialized company inheriting our 19+ year legacy in turnkey HVAC solutions.",

  keywords: [
    "Adhunik HVAC Projects",
    "Adhunik Powertech",
    "turnkey HVAC contractor",
    "HVAC projects division",
    "commercial HVAC",
    "industrial HVAC",
    "HVAC engineering excellence"
  ],

  alternates: {
    canonical: "https://www.adhunikpowertech.com/a-new-chapter-of-excellence-adhunik-hvac-projects",
  },
robots: "index, follow",
  openGraph: {
    title: "A New Chapter of Excellence: Introducing Adhunik HVAC Projects",
    description: "Adhunik Powertech is proud to announce Adhunik HVAC Projects, our new specialized company inheriting our 19+ year legacy.",
    url: "https://www.adhunikpowertech.com/a-new-chapter-of-excellence-adhunik-hvac-projects",
    type: "article",
    images: [
      {
        url: "/Adhunik HVAC Projects Logo.webp", // IMPORTANT: Create and upload an image for this
        width: 1200,
        height: 630,
        alt: "Adhunik Powertech and Adhunik HVAC Projects logos side-by-side.",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "A New Chapter of Excellence: Introducing Adhunik HVAC Projects",
    description: "Adhunik Powertech is proud to announce Adhunik HVAC Projects, our new specialized company inheriting our 19+ year legacy.",
    image: "/Adhunik HVAC Projects Logo.webp", // IMPORTANT: Use the same image
  },
};

export default function BlogLayout({ children }) {
  return (
    <>{children}</>
  );
}