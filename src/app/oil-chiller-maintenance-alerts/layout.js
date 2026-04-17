
// SEO Metadata for the "Hydraulic Oil Chiller" blog post
export const metadata = {
  metadataBase: new URL('https://www.adhunikpowertech.com'),

  title: "7-Point Oil Chiller Checklist | Adhunik Powertech",
  description: "Prevent production downtime with a 7-point hydraulic oil chiller checklist. Identify early failure signs and keep your system running efficiently.",

  keywords: [
    "Hydraulic Oil Chiller",
    "Chiller Troubleshooting Checklist",
    "Oil Chiller Maintenance India",
    "Hydraulic System Cooling",
    "Chiller Repair Delhi NCR",
    "Industrial Chiller Failure Signs",
    "Adhunik Powertech",
    "Hydraulic Oil Temperature Control"
  ],

  alternates: {
    // IMPORTANT: Update this path to match exactly where this page lives on your site
    canonical: "https://www.adhunikpowertech.com/oil-chiller-maintenance-alerts",
  },

  openGraph: {
    title: "7-Point Oil Chiller Checklist | Adhunik Powertech",
    description: "Prevent production downtime with a 7-point hydraulic oil chiller checklist. Identify early failure signs and keep your system running efficiently.",
    // IMPORTANT: Update this URL to match the canonical link above
    url: "https://www.adhunikpowertech.com/oil-chiller-maintenance-alerts",
    type: "article",
    images: [
      {
        url: "/hydraulic-chiller-guide.webp", // IMPORTANT: Ensure you upload an image with this name to your public folder
        width: 1200,
        height: 630,
        alt: "Technician inspecting a Hydraulic Oil Chiller system.",
      },
    ],
  },
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    title: "7-Point Oil Chiller Checklist | Adhunik Powertech",
    description: "Prevent production downtime with a 7-point hydraulic oil chiller checklist. Identify early failure signs and keep your system running efficiently.",
    image: "/hydraulic-chiller-guide.webp", // IMPORTANT: Use the same image
  },
};

export default function BlogLayout({ children }) {
  return (
    <>{children}</>
  );
}
