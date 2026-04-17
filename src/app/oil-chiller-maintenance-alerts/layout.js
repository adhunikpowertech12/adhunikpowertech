
// SEO Metadata for the "Hydraulic Oil Chiller" blog post
export const metadata = {
  metadataBase: new URL('https://www.adhunikpowertech.com'),

  title: "Hydraulic Oil Chiller Checklist | Adhunik Powertech",
  description: "Prevent production downtime with a 7-point hydraulic oil chiller checklist. Identify early failure signs and keep your system running efficiently.",

  keywords: [
    "hydraulic oil chiller",
  "oil chiller maintenance checklist",
  "chiller troubleshooting checklist",
  "oil chiller maintenance India",
  "hydraulic system cooling",
  "industrial chiller failure signs",
  "hydraulic oil temperature control",
  "oil chiller working principle",
  "hydraulic oil chiller unit",
  "oil chiller price in India",
  "oil cooling chiller price",
  "oil chiller manufacturers in India",
  "hydraulic oil chiller manufacturers",
  "oil chiller in Delhi NCR",
  "chiller repair Delhi NCR",
  "oil cooling chiller manufacturers",
  "chiller oil pressure issues",
  "daikin oil cooling unit alarms",
  "industrial oil chiller maintenance tips",
  "Adhunik Powertech oil chiller"
  ],

  alternates: {
    // IMPORTANT: Update this path to match exactly where this page lives on your site
    canonical: "https://www.adhunikpowertech.com/oil-chiller-maintenance-alerts",
  },

  openGraph: {
    title: "Hydraulic Oil Chiller Checklist | Adhunik Powertech",
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
    title: "Hydraulic Oil Chiller Checklist | Adhunik Powertech",
    description: "Prevent production downtime with a 7-point hydraulic oil chiller checklist. Identify early failure signs and keep your system running efficiently.",
    image: "/hydraulic-chiller-guide.webp", // IMPORTANT: Use the same image
  },
};

export default function BlogLayout({ children }) {
  return (
    <>{children}</>
  );
}
