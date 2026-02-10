import React from 'react';

// SEO Metadata for the "HVAC Experts in Gurugram" blog post
export const metadata = {
  // FIX: Define the root URL for your site
  metadataBase: new URL('https://www.adhunikpowertech.com'),

    // UPDATED TITLE (Under 60 Characters for optimal visibility)
    title: "Panel AC Manufacturer & Govt Supplier in India | Adhunik Powertech",
    description: "Adhunik Powertech is a leading panel AC manufacturer and Authorized Govt. Supplier in India, providing ZED-certified, closed-loop cooling solutions for industrial uptime.",

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
        "SS 304 Panel AC",
        "Thermal Management Solutions",
        "Industrial Cooling India",
    ],

    // Canonical link for SEO
    alternates: {
        canonical: "/panel-ac-manufacturers-&-authorised-govt-supplier",
    },

    openGraph: {
        // UPDATED OpenGraph Title
        title: "Panel AC Manufacturer & Govt Supplier in India | Adhunik Powertech",
        description: "Adhunik Powertech is a leading panel AC manufacturer and Authorized Govt. Supplier in India, providing ZED-certified, closed-loop cooling solutions for industrial uptime.",
        url: "/panel-ac-manufacturers-&-authorised-govt-supplier",
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
        title: "Panel AC Manufacturer & Govt Supplier in India | Adhunik Powertech",
        description: "Adhunik Powertech is a leading panel AC manufacturer and Authorized Govt. Supplier in India, providing ZED-certified, closed-loop cooling solutions for industrial uptime.",
        image: "/panelac.webp", // Placeholder
    },
};
// This layout component just passes the children (your page.js) through
export default function BlogLayout({ children }) {
  return (
    <>{children}</>
  );
}
