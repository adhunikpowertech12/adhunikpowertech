import React from 'react'
import IndiaBusinessAward from './IndiaBusinessAward'

export const metadata = {
    title: "Award-Winning HVAC Service in Delhi",
    description: "Award-winning HVAC in Delhi! Trusted by top brands like Maruti & Hero Honda. Expert service & quality you can rely on.",
    keywords: [
      "HVAC solutions Delhi NCR",
    "HVAC contractor Noida",
    "Air conditioning contractor Gurugram",
"Turnkey HVAC projects Northern India",
"HVAC services Delhi",
"Commercial HVAC solutions Delhi NCR",
"Industrial HVAC installation Noida",
"HVAC system design Northern India,"
// Energy-efficient HVAC Delhi
// Trusted HVAC partner Delhi NCR
// HVAC clients in Northern India
// HVAC Projects
// HVAC Contactor Delhi

    ],
    openGraph: {
      title: "Adhunik Powertech",
      description: "Discover Adhunik Powertech Private Limited, a leader in HVAC solutions and air cooling systems. Based in Gurugram, India, we specialize in innovative, turnkey projects for industrial and commercial cooling needs.",
      url: "https://www.adhunikpowertech.com/",
      siteName: "Adhunik Powertech", 
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Adhunik Powertech | HVAC & Air Cooling Systems Gurugram",
      description: "Discover Adhunik Powertech Private Limited, a leader in HVAC solutions and air cooling systems. Based in Gurugram, India, we specialize in innovative, turnkey projects for industrial and commercial cooling needs.",
      creator: "@AdhunikPowertech",
    },
    alternates: {
      canonical: "https://adhunikpowertech.com/",
    },
  };


export default function page() {
  return (
    <>
    <IndiaBusinessAward/>
    </>
  )
}
