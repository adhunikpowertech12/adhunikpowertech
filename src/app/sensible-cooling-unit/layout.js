import React from 'react';

export const metadata = {
  metadataBase: new URL('https://www.adhunikpowertech.com'),

  title: "Techmark SCU (Sensible Cooling Unit) | Industrial Cooling | Adhunik Powertech",
  description: "Unlock massive energy savings with the Techmark Sensible Cooling Unit (SCU). Innovative indirect evaporative cooling for warehouses and industrial facilities.",

  keywords: [
    "Sensible Cooling Unit",
    "Techmark SCU",
    "Indirect Evaporative Cooling India",
    "Industrial Air Cooling",
    "Energy Efficient HVAC",
    "Adhunik Powertech",
    "DAMA Unit",
    "Fresh Air Pre-cooling"
  ],

  openGraph: {
    title: "Techmark SCU: Revolutionizing Industrial Cooling",
    description: "Reduce cooling operational costs by up to 90% with Techmark's patented Sensible Cooling technology.",
    url: "/products/techmark-sensible-cooling-unit",
    type: "article",
    images: [
      {
        url: "/Sensible Cooling Unit Image.webp", // You will need to upload an image from the PDF
        width: 1200,
        height: 630,
        alt: "Techmark Sensible Cooling Unit (SCU)",
      },
    ],
  },
};

export default function ProductLayout({ children }) {
  return (
    <>{children}</>
  );
}