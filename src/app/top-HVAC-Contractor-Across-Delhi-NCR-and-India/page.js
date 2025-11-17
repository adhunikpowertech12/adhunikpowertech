import TopHvacContractor from "./TopHvacContractor";

 
  export const metadata = {
    title: "Top HVAC Contractors in Delhi NCR & India – Adhunik Powertech",
    description: "Adhunik Powertech: Your trusted HVAC contractor in Delhi NCR & India. We provide complete design, installation, repair & maintenance for all sectors",

    keywords: [
      "HVAC Contractors",
      "Delhi NCR HVAC Contractors",
      "India HVAC Contractors",
      "Heating Contractors",
      "Ventilation Contractors",
      "Air Conditioning Contractors",
      "Commercial HVAC",
      "Industrial HVAC",
      "Residential HVAC",
      "HVAC Design",
      "HVAC Installation",
      "HVAC Repair",
      "HVAC Maintenance",
      "Energy-Efficient HVAC",
      "Trusted HVAC Contractors",
      "Quality HVAC Services",
      "Noida HVAC Contractors",
      "Gurugram HVAC Contractors",
      "Faridabad HVAC Contractors",
      "Ghaziabad HVAC Contractors",
      "Top HVAC Contractors In Delhi",
      "HVAC Consultant",
      "Top HVAC Contractors",
      "Top HVAC Consultant",
      "Best HVAC Contractors",
      "Best HVAC Contractors in Delhi",
      "Best HVAC Contractors in India",
    ],
    
    robots: "index, follow",
    alternates: {
      canonical: "https://www.adhunikpowertech.com/top-HVAC-Contractor-Across-Delhi-NCR-and-India",
    },
    
    openGraph: {
      title: "Top HVAC Contractors in Delhi NCR & India – Adhunik Powertech",
      description: "Adhunik Powertech: Your trusted HVAC contractor in Delhi NCR & India. We provide complete design, installation, repair & maintenance for all sectors",
      url: "https://www.adhunikpowertech.com/top-HVAC-Contractor-Across-Delhi-NCR-and-India",
      type: "article",
      images: [
        {
          url: "https://www.adhunikpowertech.com/_next/image?url=%2Fhvac-contractor2.webp&w=1080&q=75",
          width: 800,
          height: 600,
          alt: "Adhunik Powertech HVAC Contractors Services",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Adhunik Powertech - Top HVAC Contractors in Delhi NCR & India",
      description: "Expert & energy-efficient HVAC solutions from design to execution for commercial, industrial, & residential projects across Delhi NCR & India.",
      image: "https://www.adhunikpowertech.com/_next/image?url=%2Fhvac-contractor2.webp&w=1080&q=75",
    },
  };

export default function page() {
  return (
    <>
    <TopHvacContractor/>
    </>
  )
}
