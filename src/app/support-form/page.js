import React from 'react'
import ContactUs from './ContactUs'


export const metadata = {

    title: "HVAC Experts in Gurugram | Contact Adhunik Powertech",
  
    description: "Need reliable HVAC systems in Gurugram? Contact Adhunik Powertech for expert industrial & commercial HVAC installation, maintenance, and solutions. Get a free quote!",
      alternates: {
    canonical:"https://www.adhunikpowertech.com/support-form",  

      openGraph: {
    title: "Adhunik Powertech",
    type: "website",
    url: "https://www.adhunikpowertech.com/support-form",
    siteName: "Adhunik Powertech - HVAC Experts",
     locale: "en_IN",
    creator: "Adhunik Powertech",

robots: "index, follow",
    images: [
      {
        url: "https://adhunikpowertech.com/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "Adhunik Powertech HVAC Solutions"
      }
    ]
  },

  },
  }

export default function page() {
  return (
    <>

    <ContactUs/>
    
    </>
  )
}
