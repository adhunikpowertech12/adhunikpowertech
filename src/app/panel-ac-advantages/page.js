import React from 'react';
import PanelACGuide from './PanelACGuide'; // This is the UI component I wrote previously

export const metadata = {
  title: "Advantages of Panel AC for Industrial Cooling | Guide",
  description: "Explore the advantages of Panel AC with Adhunik Powertech. Ensure safe, efficient, and reliable cooling for your industrial electrical panels.",
  keywords: [
     "advantages of panel AC",
  "panel air conditioner benefits",
  "industrial panel cooling",
  "electrical cabinet cooling",
  "panel AC for electrical panel",
  "electrical enclosure cooling",
  "control panel cooling system",
  "cabinet air conditioner",
  "panel AC vs fan comparison",
  "closed loop cooling system",
  "electrical panel heat management",
  "industrial HVAC India",
  "VFD cooling solutions",
  "PLC panel cooling system",
  "CNC machine cooling solutions",
  "IP54 rated panel AC",
  "maintenance free panel cooling",
  "panel cooling system India",
  "Adhunik Powertech panel AC",
  "panel AC manufacturer in India"
  ],
  
  openGraph: {
    title: "Advantages of Panel AC for Industrial Cooling | Guide",
    description: "Explore the advantages of Panel AC with Adhunik Powertech. Ensure safe, efficient, and reliable cooling for your industrial electrical panels.",
    url: "https://www.adhunikpowertech.com/panel-ac-advantages", 
    type: "article",  
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1776406523/panel-ac-advantages_smbjao.webp",  
        width: 1200, 
        height: 630, 
        alt: "A row of industrial control panels equipped with panel air conditioners in a clean, modern manufacturing facility, featuring the Adhunik Powertech logo",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.adhunikpowertech.com/panel-ac-advantages",  
  },
  twitter: {
    card: "summary_large_image",
    title: "Advantages of Panel AC for Industrial Cooling | Guide",
    description: "Explore the advantages of Panel AC with Adhunik Powertech. Ensure safe, efficient, and reliable cooling for your industrial electrical panels.",
    images: ["https://res.cloudinary.com/ddkyx2jhh/image/upload/v1776406523/panel-ac-advantages_smbjao.webp"], 
  },
};

export default function Page() {
  return (
    <>
      {/* Ensure you rename the UI component file to 'PanelACGuideUI.jsx' 
          or update the import name to match your specific file name.
      */}
      <PanelACGuide />
    </>
  );
}