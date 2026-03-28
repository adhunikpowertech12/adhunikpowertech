import CleanroomHVACContent from "./CleanroomHVACContent"; // Assuming your component name

export const metadata = {
  // Meta Title (60 characters optimized)
  title: "Cleanroom HVAC System for Pharma | GMP HVAC India",

  // Meta Description (155–160 characters)
  description: "Learn cleanroom HVAC systems for pharma manufacturing. GMP-compliant design, AHU, HEPA, ACH & turnkey solutions in Haridwar, Baddi, Rudrapur & more.",

  keywords: [
    // Core Keywords
    "cleanroom HVAC system",
    "pharma HVAC requirements",
    "cleanroom air handling system",
    "HVAC for pharmaceutical manufacturing",
    "GMP HVAC system India",
    "cleanroom HVAC design",

    // Regional/Geographic Focus Keywords
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
    title: "Cleanroom HVAC Guide: Pharma Manufacturing (2026)",
    description: "GMP-compliant HVAC design, AHU, and HEPA solutions for pharma manufacturing in Haridwar, Baddi, Rudrapur, and across North India.",
    url: "https://www.adhunikpowertech.com/cleanroom-hvac-guide", // Adjust to your actual slug
    type: "article",
    siteName: "Adhunik Powertech",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1774608929/cleanroomguide_tze0yq.webp", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Cleanroom HVAC system for pharmaceutical manufacturing lab with Cleanroom HVAC Guide: Pharma Manufacturing 2026 text over the image",
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: "https://www.adhunikpowertech.com/cleanroom-hvac-guide", 
  },

  twitter: {
    card: "summary_large_image",
    title: "Cleanroom HVAC Guide: Pharma Manufacturing (2026)",
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