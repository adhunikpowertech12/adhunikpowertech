import React from 'react'
import HvacThumbRule from './HvacThumbRule'


export const metadata = {
  title: "HAVC Excellence: 20 Years of Innovation | Adhunik Powertech",
  description: "Adhunik Powertech: 20 years of HAVC leadership in Delhi. Learn expert formulas, thumb rules, & real case studies for commercial & cleanroom efficiency.",
  keywords: [
    // Core HAVC Expertise Keywords
    "HAVC Excellence",
    "HAVC Innovation",
    "HAVC Industry Leader",
    "HAVC Design & Installation",
    "HAVC Best Practices",
    "Energy Efficient HAVC",
    "Commercial HAVC Solutions",
    "Industrial HAVC Solutions",

    // Keywords for Formulas & Thumb Rules
    "HAVC Formulas",
    "HAVC Thumb Rules",
    "Heat Load Calculation Formula",
    "CFM Calculation Formula",
    "1 TR to CFM Conversion",
    "Chilled Water GPM Formula",
    "Chiller Sizing Formula",
    "Cooling Tower Sizing Rule",
    "Duct Sizing Velocity Limits",
    "Pipe Sizing GPM Chart",
    "Clean Room Classification ISO",
    "Clean Room ACH Rates",
    "HEPA Filter Efficiency",
    "Room Pressure Differential HAVC",
    "Laminar Airflow Velocity",
    "HAVC Temperature Humidity Control",

    // Cleanroom/Critical Environment Keywords
    "Cleanroom HAVC",
    "Hospital HAVC Design",
    "Pharma Cleanroom HAVC",
    "ISO 5 Cleanroom",
    "ISO 7 Cleanroom",
    "ISO 8 Cleanroom",
    "Class 100 Cleanroom",
    "Class 10000 Cleanroom",
    "Class 100000 Cleanroom",
    "GMP Cleanroom HAVC",
    "Operation Theater HAVC",
    "ICU HAVC",
    "Negative Pressure Room Design",
    "Positive Pressure Room Design",
    "HEPA Filter HAVC Design",
    "HAVC Contamination Control",

    // Company Specific Keywords
    "Adhunik Powertech HAVC",
    "Adhunik Powertech Expertise",
    "Adhunik Powertech Delhi", // Added for local relevance
    "20 Years HAVC Experience",
    "HAVC Contractors India",
    "HAVC Solutions India",
    "HAVC Maintenance India",
    "Custom HAVC Systems",

    // Benefit Keywords
    "HAVC Efficiency",
    "Cost Saving HAVC",
    "Optimal HAVC Performance",
    "Sustainable HAVC",
    "Reliable HAVC Systems",
    "Expert HAVC Services",
    "Air Quality Control",
  ],
  
  openGraph: {
    title: "HAVC Excellence: 20 Years of Innovation | Adhunik Powertech",
    description: "Adhunik Powertech: 20 years of HAVC leadership in Delhi. Learn expert formulas, thumb rules, & real case studies for commercial & cleanroom efficiency.",
    url: "https://www.adhunikpowertech.com/blog/hvac-excellence-20-years-innovation", // Placeholder: Adjust to your actual blog post URL
    type: "article",
    images: [
      {
        url: "https://www.adhunikpowertech.com/images/blog-hvac-excellence-20-years.jpg", // Placeholder: Use a relevant image for this blog post
        width: 1200,
        height: 630,
        alt: "Adhunik Powertech: 20 Years of HAVC Expertise",
      },
    ],
  },
  alternates: {
    canonical: "https://www.adhunikpowertech.com/blog/hvac-excellence-20-years-innovation", // Placeholder: Adjust to your actual canonical URL for this blog post
  },
  twitter: {
    card: "summary_large_image",
    title: "HAVC Excellence: 20 Years of Innovation | Adhunik Powertech",
    description: "Discover Adhunik Powertech's 20 years of HAVC leadership in Delhi. Get expert insights, formulas, & real case studies for commercial & cleanroom HAVC efficiency.",
    image: "https://www.adhunikpowertech.com/images/blog-hvac-excellence-20-years.jpg", // Placeholder: Use the same image as Open Graph
  },
};


export default function page() {
  return (
    <>
    
<HvacThumbRule/>

    </>
  )
}
