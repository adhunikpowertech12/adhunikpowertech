import React from 'react'
import HvacThumbRule from './HvacThumbRule'


export const metadata = {
  title: "HVAC Excellence: 20 Years of Innovation | Adhunik Powertech",
  description: "Adhunik Powertech: 20 years of HVAC leadership in Delhi. Learn expert formulas, thumb rules, & real case studies for commercial & cleanroom efficiency.",
  keywords: [
    // Core HVAC Expertise Keywords
    "HVAC Excellence",
    "HVAC Innovation",
    "HVAC Industry Leader",
    "HVAC Design & Installation",
    "HVAC Best Practices",
    "Energy Efficient HVAC",
    "Commercial HVAC Solutions",
    "Industrial HVAC Solutions",

    // Keywords for Formulas & Thumb Rules
    "HVAC Formulas",
    "HVAC Thumb Rules",
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
    "Room Pressure Differential HVAC",
    "Laminar Airflow Velocity",
    "HVAC Temperature Humidity Control",

    // Cleanroom/Critical Environment Keywords
    "Cleanroom HVAC",
    "Hospital HVAC Design",
    "Pharma Cleanroom HVAC",
    "ISO 5 Cleanroom",
    "ISO 7 Cleanroom",
    "ISO 8 Cleanroom",
    "Class 100 Cleanroom",
    "Class 10000 Cleanroom",
    "Class 100000 Cleanroom",
    "GMP Cleanroom HVAC",
    "Operation Theater HVAC",
    "ICU HVAC",
    "Negative Pressure Room Design",
    "Positive Pressure Room Design",
    "HEPA Filter HVAC Design",
    "HVAC Contamination Control",

    // Company Specific Keywords
    "Adhunik Powertech HVAC",
    "Adhunik Powertech Expertise",
    "Adhunik Powertech Delhi", // Added for local relevance
    "20 Years HVAC Experience",
    "HVAC Contractors India",
    "HVAC Solutions India",
    "HVAC Maintenance India",
    "Custom HVAC Systems",

    // Benefit Keywords
    "HVAC Efficiency",
    "Cost Saving HVAC",
    "Optimal HVAC Performance",
    "Sustainable HVAC",
    "Reliable HVAC Systems",
    "Expert HVAC Services",
    "Air Quality Control",
  ],
  
  openGraph: {
    title: "HVAC Excellence: 20 Years of Innovation | Adhunik Powertech",
    description: "Adhunik Powertech: 20 years of HVAC leadership in Delhi. Learn expert formulas, thumb rules, & real case studies for commercial & cleanroom efficiency.",
    url: "https://www.adhunikpowertech.com/blog/hvac-excellence-20-years-innovation", // Placeholder: Adjust to your actual blog post URL
    type: "article",
    images: [
      {
        url: "https://www.adhunikpowertech.com/images/blog-hvac-excellence-20-years.jpg", // Placeholder: Use a relevant image for this blog post
        width: 1200,
        height: 630,
        alt: "Adhunik Powertech: 20 Years of HVAC Expertise",
      },
    ],
  },
  alternates: {
    canonical: "https://www.adhunikpowertech.com/blog/hvac-excellence-20-years-innovation", // Placeholder: Adjust to your actual canonical URL for this blog post
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Excellence: 20 Years of Innovation | Adhunik Powertech",
    description: "Discover Adhunik Powertech's 20 years of HVAC leadership in Delhi. Get expert insights, formulas, & real case studies for commercial & cleanroom HVAC efficiency.",
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
