import WhatIsHvac from "./WhatIsHvac";



export const metadata = {
  title: "What is HVAC ? A Beginner's Guide to Heating, Ventilation & Air Conditioning | Adhunik Powertech",

  description:

    "Confused about HVAC ? Our comprehensive guide explains what HVAC means, its key components, and how it works. Discover the benefits of a modern HVAC system for your home or business.",

  keywords: [ 

    "what is HVAC",
    "HVAC meaning",
    "HVAC for beginners",
    "how does HVAC work",
    "HVAC system explained", 
    "HVAC components",
    "types of HVAC systems",
    "heating, ventilation air conditioning",
    "central AC",
    "chiller systems",
    "ductless mini-split",
    "air handling unit",
    "heat pump",
    "ductwork",
    "furnace", 
    "benefits of HVAC",
    "energy efficient HVAC",
    "indoor air quality",
    "HVAC maintenance",
    "HVAC for commercial buildings",
    "HVAC for industrial projects",
    "hvac for home", 
    "Adhunik Powertech",
    "HVAC contractor Delhi NCR",
    "HVAC Gurugram",
    "HVAC Noida",
    "HVAC Faridabad",
  ],

  // SEO Robots Instructions
  robots: "index, follow",

  
  openGraph: {
    title: "What is HVAC ? A Beginner's Guide to Heating, Ventilation & AC | Adhunik Powertech",
    description:
      "Confused about HVAC ? Our comprehensive guide explains what HVAC means, its key components, and how it works. Discover the benefits of a modern HVAC system for your home or business.",
    url: "https://www.adhunikpowertech.com/what-is-hvac/",  
    type: "article",
    images: [
      {
        url: "http://localhost:3000/_next/image?url=%2FWhatisHVAC.webp&w=640&q=75",  
        width: 1200,
        height: 630,
        alt: "A diagram of an HVAC system, explaining its components and function.",
      },
    ],
  },
  alternates: {
    canonical:
      "https://www.adhunikpowertech.com/what-is-hvac/",  
  },
  twitter: {
    card: "summary_large_image",
    title: "What is HVAC? A Beginner's Guide to Heating, Ventilation & AC | Adhunik Powertech",
    description:
      "Confused about HVAC? Our comprehensive guide explains what HVAC means, its key components, and how it works. Discover the benefits of a modern HVAC system for your home or business.",
    image: "http://localhost:3000/_next/image?url=%2FWhatisHVAC.webp&w=640&q=75",  
  },
};


export default function page() {

  return (
    <> 

        <WhatIsHvac />


    </>
    
  )
}
