import React from 'react'
import LegacyOfAdhunikPowertech from './LegacyOfAdhunikPowertech';


export const metadata = {
  title: "Adhunik HVAC Projects: The Legacy of Adhunik Powertech",
  description: "Adhunik Powertech's award-winning HVAC division is now Adhunik HVAC Projects. Learn about our new company focused on turnkey solutions for industrial & commercial projects.",
  
  keywords: [
   
    "Adhunik HVAC Projects",
    "Adhunik Powertech legacy",
    "Adhunik Guds & Services",
    "new HVAC company",
    "HVAC company announcement",  
    "turnkey HVAC projects",
    "industrial HVAC solutions",
    "commercial HVAC contractor",
    "HVAC design and installation",
    "award-winning HVAC", 
    "HVAC engineering",
    "HVAC industry news",
    "MEP contractors India",
  ],

  robots: "index, follow",

  openGraph: {
    title: "A Legacy Reimagined: Introducing Adhunik HVAC Projects",
    description: "Discover the next chapter in our 19+ year engineering legacy. Adhunik HVAC Projects is the new, specialized company born from Adhunik Powertech's award-winning expertise.",
    url: "https://www.adhunikpowertech.com/adhunik-hvac-projects-the-legacy-of-adhunik-powertech",  
    type: "article",
    images: [
      {
        url: "/adhunik-blog.webp",  
        width: 1200, 
        height: 630, 
        alt: "Announcing the launch of Adhunik HVAC Projects",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikpowertech.com/adhunik-hvac-projects-the-legacy-of-adhunik-powertech",  
  },

  twitter: {
    card: "summary_large_image",
    title: "Adhunik HVAC Projects: The Legacy of Adhunik Powertech",
    description: "Discover the next chapter in our 19+ year engineering legacy. Adhunik HVAC Projects is the new company born from Adhunik Powertech's award-winning HVAC expertise.",
    image: "/adhunik-blog.webp",  
  },
};



export default function page() {

  return (
    <>

<LegacyOfAdhunikPowertech/>

    </>
  )
}
