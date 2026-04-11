import CleanroomHVACContent from "./CleanroomHVACContent"; 

export const metadata = {
  // Meta Title: Optimized for high-intent keywords + Brand Authority (56 chars)
  title: "Cleanroom HVAC Guide 2026 | Turnkey Pharma HVAC India",

  // Meta Description: High CTR with localized intent and CTA (158 chars)
  description: "Master pharma cleanroom HVAC design. Adhunik Powertech offers GMP-compliant AHU & HEPA turnkey solutions in Haridwar, Baddi, & Rudrapur. Get your 2026 guide.",

  keywords: [
    "cleanroom HVAC system",
    "pharma HVAC requirements",
    "cleanroom air handling system",
    "HVAC for pharmaceutical manufacturing",
    "GMP HVAC system India",
    "cleanroom HVAC design",
    "HVAC solutions Haridwar",
    "Pharma HVAC Rudrapur",
    "Cleanroom AHU Baddi",
    "HVAC turnkey projects Dehradun",
    "GMP HVAC Muzaffarnagar",
    "Cleanroom ventilation Yamunanagar",
    "Industrial HVAC Sitarganj",
    "Pharma HVAC Kashipur",
    "Clean room solutions Roorkee",
    "HVAC contractors Saharanpur",
    "Pharma HVAC Uttarakhand",
    "Cleanroom engineering Uttar Pradesh"
  ],
  
  openGraph: {
    // OG Title: Branded and specific for social sharing
    title: "Adhunik Powertech: The 2026 Guide to Pharma Cleanroom HVAC",
    description: "Are your cleanroom systems GMP-ready? Explore our 2026 guide on HVAC design, AHU integration, and turnkey pharma solutions for India's manufacturing hubs.",
    url: "https://www.adhunikpowertech.com/cleanroom-hvac-guide", 
    type: "article",
    siteName: "Adhunik Powertech",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1774608929/cleanroomguide_tze0yq.webp", 
        width: 1200,
        height: 630,
        alt: "Cleanroom HVAC system for pharmaceutical manufacturing lab with Cleanroom HVAC Guide: Pharma Manufacturing 2026 text",
      },
    ],
    locale: "en_IN",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: "https://www.adhunikpowertech.com/cleanroom-hvac-guide", 
  },

  twitter: {
    card: "summary_large_image",
    title: "Adhunik Powertech: 2026 Pharma Cleanroom HVAC Guide",
    description: "Expert HVAC strategies for pharma hubs including Baddi, Haridwar, and Rudrapur.",
    images: ["https://res.cloudinary.com/ddkyx2jhh/image/upload/v1774608929/cleanroomguide_tze0yq.webp"], 
  },
};

export default function page() {
  return (
    <>
      <CleanroomHVACContent />
    </>
  );
}