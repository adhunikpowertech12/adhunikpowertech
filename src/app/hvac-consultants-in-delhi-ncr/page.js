import React from 'react'
import Consultants from './Consultants'

export const metadata = {
  title: "Trusted HVAC Consultants Delhi NCR | Adhunik Powertech",
  description: "Looking for trusted HVAC consultants in Delhi NCR? Adhunik Powertech offers expert HVAC design, turnkey installation, industrial cooling & energy-efficient solutions.",
  
  keywords: [
    // Primary Keywords
    "HVAC Consultants Delhi NCR",
    "HVAC consultants in Delhi NCR",
    "best HVAC consultants in Delhi NCR",
    "top HVAC consultants in Delhi NCR",
    "top 10 HVAC consultants in Delhi NCR",

    // Location-Based Keywords
    "HVAC consultants in Gurgaon",
    "top HVAC consultants in Gurgaon",
    "best HVAC consultants in Gurgaon",
    "HVAC consultants in Noida",
    "HVAC consultants in Ghaziabad",
    "HVAC company in Greater Noida",

    // India-Level Keywords
    "top HVAC consultants in India",
    "top 10 HVAC consultants in India",
    "best HVAC consultants in India",
    "list of HVAC consultants in India",
    "HVAC companies in India",

    // Service Keywords
    "HVAC design services",
    "HVAC consultancy services",
    "HVAC turnkey projects",
    "industrial HVAC solutions",
    "commercial HVAC services",
    "HVAC contractors Delhi NCR",
    "HVAC installation services",
    "HVAC maintenance services",

    // Industrial + Cooling Keywords
    "evaporative cooling Delhi NCR",
    "factory cooling systems",
    "warehouse ventilation systems",
    "energy efficient HVAC systems",

    // Cleanroom Keywords
    "cleanroom HVAC systems",
    "pharmaceutical HVAC design",
    "GMP HVAC systems",
    "HEPA filtration HVAC",
    "hospital HVAC systems",

    // High Intent / Search Queries
    "HVAC consultants in Delhi NCR contact number",
    "free HVAC consultants in Delhi NCR",
    "top 10 HVAC companies in Delhi",

    // Competitor / Intent Capture (optional but strategic)
    "sns engineering nta pvt ltd",
    "sns engineering agra",
    "sns engineers ahmedabad",

    // Brand Keywords
    "Adhunik Powertech HVAC",
    "Adhunik Powertech Delhi NCR"
  ],

  openGraph: {
    title: "Trusted HVAC Consultants Delhi NCR | Adhunik Powertech",
    description: "Adhunik Powertech provides expert HVAC consultancy, system design, and turnkey cooling solutions across Delhi NCR for industrial & commercial spaces.",
    url: "https://www.adhunikpowertech.com/hvac-consultants-in-delhi-ncr",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1777031578/Trusted_HVAC_Consultants_in_Delhi_NCR_zucxru.webp",
        width: 1200,
        height: 630,
        alt: "Trusted HVAC consultants in Delhi NCR reviewing building plans and system design for efficient installation",
      },
    ],
  },

  robots: "index, follow",

  alternates: {
    canonical: "https://www.adhunikpowertech.com/hvac-consultants-in-delhi-ncr",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trusted HVAC Consultants Delhi NCR | Adhunik Powertech",
    description: "Expert HVAC consultants in Delhi NCR offering design, installation & energy-efficient cooling solutions.",
    image: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1777031578/Trusted_HVAC_Consultants_in_Delhi_NCR_zucxru.webp",
  },
};

export default function HVACConsultants() {
  return (
    <>
      <Consultants />
    </>
  )
}