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


    ],
    openGraph: {
      title: "Adhunik Powertech",
      description: "Award-winning HVAC in Delhi! Trusted by top brands like Maruti & Hero Honda. Expert service & quality you can rely on",
      url: "https://www.adhunikpowertech.com/",
      siteName: "Adhunik Powertech", 
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Adhunik Powertech | HVAC & Air Cooling Systems Gurugram",
      description: "Award-winning HVAC in Delhi! Trusted by top brands like Maruti & Hero Honda. Expert service & quality you can rely on",
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
