import React from 'react';

// SEO Metadata for this blog post
export const metadata = {
  metadataBase: new URL('https://www.adhunikpowertech.com'),

  title: "Why Your Electrical Cabinet Needs a Panel AC | Adhunik Powertech",
  description: "Stop costly VFD & PLC trips. Learn the pain points of not using a Panel AC and how Adhunik Powertech's industrial cooling solutions ensure 100% uptime.",

  keywords: [
    "panel air conditioner",
    "what is a panel ac",
    "electrical panel cooling",
    "industrial air conditioner",
    "VFD panel cooling",
    "CNC machine cooling",
    "panel ac manufacturer",
    "Adhunik Powertech",
    "prevent industrial downtime",
    "overheating electrical panel"
  ],

  alternates: {
    canonical: "/blog/why-your-electrical-cabinet-needs-a-panel-ac",
  },

  openGraph: {
    title: "Why Your Electrical Cabinet Needs a Panel AC | Adhunik Powertech",
    description: "Stop costly VFD & PLC trips. Learn the pain points of not using a Panel AC and how Adhunik Powertech's industrial cooling solutions ensure 100% uptime.",
    url: "/blog/why-your-electrical-cabinet-needs-a-panel-ac",
    type: "article",
    images: [
      {
        url: "/panel ac mounted on control panel.webp", // The image URL you provided
        width: 1200, 
        height: 630, 
        alt: "A Panel AC unit mounted on an industrial control panel.",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Why Your Electrical Cabinet Needs a Panel AC | Adhunik Powertech",
    description: "Stop costly VFD & PLC trips. Learn the pain points of not using a Panel AC and how Adhunik Powertech's industrial cooling solutions ensure 100% uptime.",
    image: "/panel ac mounted on control panel.webp", // The image URL you provided
  },
};

// This layout component just passes the children (your page.js) through
export default function BlogLayout({ children }) {
  return (
    <>{children}</>
  );
}

