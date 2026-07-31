import PharmaCleanroomContractor from "./PharmaCleanroomContractor";

export const metadata = {
  title: "Pharmaceutical Cleanroom Experts | Turnkey GMP Solutions India",
  description: "Expert pharmaceutical cleanroom contractor in India. Turnkey GMP cleanrooms in SIDCUL Haridwar & Roorkee. Get a free quote for design, HVAC & validation.",
  keywords: [
  // Primary Keywords
  "pharmaceutical cleanroom contractor in India",
  "turnkey pharmaceutical cleanroom solutions",
  "GMP cleanroom contractor India",
  "cleanroom contractor India",
  "pharma cleanroom contractor",
  "cleanroom manufacturer India",
  "turnkey cleanroom contractor",
  "cleanroom design and build contractor",
  "cleanroom construction company India",
  "pharmaceutical cleanroom manufacturer",

  // Technical & Service Keywords
  "cleanroom HVAC contractor",
  "pharma HVAC system design",
  "cleanroom validation services India",
  "DQ IQ OQ PQ validation cleanroom",
  "HEPA filtration cleanroom systems",
  "modular cleanroom panels manufacturer",
  "cleanroom airlocks and pass boxes",
  "ISO 14644 cleanroom contractor",
  "GMP cleanroom design and installation",
  "turnkey cleanroom engineering services",

  // Location-Based Keywords
  "cleanroom contractor in Haridwar",
  "cleanroom contractor in SIDCUL Haridwar",
  "cleanroom contractor in Roorkee",
  "cleanroom contractor in Dehradun",
  "cleanroom contractor in Uttarakhand",
  "cleanroom contractor in Kala Amb",
  "cleanroom contractor in Baddi",
  "cleanroom contractor in Saharanpur",
  "pharmaceutical cleanroom contractor Uttarakhand",
  "Adhunik Powertech cleanroom contractor"
],

  openGraph: {
    title: "Pharmaceutical Cleanroom Experts | Turnkey GMP Solutions India",
    description: "Expert pharmaceutical cleanroom contractor in India. Turnkey GMP cleanrooms in SIDCUL Haridwar & Roorkee. Get a free quote for design, HVAC & validation.",
    url: "https://www.adhunikpowertech.com/pharma-cleanroom-contractor-india",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1785494265/cleanroom_contractor_kxdebm.webp",
        width: 1200,
        height: 630,
        alt: "Modern pharmaceutical cleanroom for GMP-compliant manufacturing.",
      },
    ],
  },

  robots: "index, follow",
  alternates: {
    canonical: "https://www.adhunikpowertech.com/pharma-cleanroom-contractor-india",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmaceutical Cleanroom Contractor in India | Adhunik Powertech",
    description: "Expert pharmaceutical cleanroom contractor in India. Turnkey GMP cleanrooms in SIDCUL Haridwar & Roorkee. Get a free quote for design, HVAC & validation.",
    images: ["https://res.cloudinary.com/ddkyx2jhh/image/upload/v1785494265/cleanroom_contractor_kxdebm.webp"],
  },
};

export default function Page() {
  return (
    <>
      <PharmaCleanroomContractor />
    </>
  );
}