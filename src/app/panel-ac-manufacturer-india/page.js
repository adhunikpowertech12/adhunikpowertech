import React from 'react';

// SEO Metadata for the "HVAC Experts in Gurugram" blog post
export const metadata = {
  // FIX: Define the root URL for your site
  metadataBase: new URL('https://www.adhunikpowertech.com'),

    // UPDATED TITLE (Under 60 Characters for optimal visibility)
    title: "Best Panel AC Manufacturer India | Govt Approved",
    description: "Leading panel AC manufacturer in India offering industrial cooling solutions from 250W to 7000W. Govt authorized supplier with 19+ years experience. Get best price today!",

    keywords: [
        "Panel AC Manufacturer in India",
        "Authorized Govt. Supplier",
        "Adhunik Powertech Panel AC",
        "Control Panel Cooling",
        "Industrial AC Unit",
        "ZED Certified Manufacturer",
        "Electrical Panel Cooler",
        "Cabinet Air Conditioner",
        "Panel Cooling System India",
        "Electrical Enclosure Cooling",
        "VFD Panel AC",
        "PLC Panel Cooler",
        "CNC Machine Cooling Solutions",
        "Panel ac",
        "panel ac price",
        "panel ac for electrical panel",
        "advance cooling- panel ac",
        "Panel air conditioner on gem",
        "panel air conditioner price",
        "panel ac manufacturers in india",
        "Industrial Cooling India",
        "Industrial Panel Air Conditioner",
        "Electrical Cabinet Cooling System",
        "Panel AC Manufacturer India",

    ],

    // Canonical link for SEO
    alternates: {
        canonical: "https://www.adhunikpowertech.com/panel-ac-manufacturer-india",
    },

    openGraph: {
        // UPDATED OpenGraph Title
        title: "Best Panel AC Manufacturer India | Govt Approved",
        description: "Leading panel AC manufacturer in India offering industrial cooling solutions from 250W to 7000W. Govt authorized supplier with 19+ years experience. Get best price today!",
        url: "https://www.adhunikpowertech.com/panel-ac-manufacturer-india",
        type: "article",
        images: [
            {
                url: "/panelac.webp", // Placeholder
                width: 1200,
                height: 630,
                alt: "Adhunik Powertech Panel AC next to a Government Control Panel.",
            },
        ],
    },
    robots: "index, follow",
    twitter: {
        card: "summary_large_image",
        // UPDATED Twitter Title
        title: "Best Panel AC Manufacturer India | Govt Approved",
        description: "Leading panel AC manufacturer in India offering industrial cooling solutions from 250W to 7000W. Govt authorized supplier with 19+ years experience. Get best price today!",
        image: "/panelac.webp", // Placeholder
    },
};
// This layout component just passes the children (your page.js) through
export default function BlogLayout({ children }) {
  return (
    <>{children}</>
  );
}
