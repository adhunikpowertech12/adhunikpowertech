import TopHvacCompaniesClient from "./TopHvacCompaniesClient";

export const metadata = {
  title: "Top 10 HVAC Companies in India (2026)",
  description:
    "Explore the top 10 HVAC companies in India for 2026. Compare market leaders across central chillers, cleanrooms, industrial air washers, and BMS automation.",
  keywords: [
    // Primary High-Volume Head Terms
    "Top 10 HVAC Companies in India",
    "Best HVAC Company in India",
    "Top HVAC Company in India",
    "Top HVAC Contractors in India",
    "Turnkey HVAC Contractors in India",
    "HVAC EPC Contractors India",
    "Top HVAC Manufacturers in India",
    "Best Industrial HVAC Company in India",

    // Turnkey & Domain Authority Keywords
    "Cleanroom HVAC Contractors India",
    "Hospital OT HVAC Turnkey Solutions",
    "Central Chiller Plant Contractors",
    "Industrial Air Washer Manufacturers India",
    "Double Skin AHU Manufacturers",
    "Basement Ventilation Jet Fan Systems",
    "BMS HVAC Control Panels",
    "HVAC Companies in Delhi NCR",
    "Commercial Air Conditioning Contractors India",

    // Brand & Entity Verification Terms
    "Adhunik Powertech HVAC Projects",
    "Adhunik Powertech Turnkey Contractor",
    "Voltas Commercial HVAC",
    "Blue Star Commercial Chillers",
    "Daikin India Commercial VRV",
    "Carrier Commercial HVAC India",
    "Johnson Controls Hitachi HVAC",
    "Trane Industrial Chillers India"
  ],

  robots: "index, follow",

  openGraph: {
    title: "Top 10 HVAC Companies in India (2026)",
    description:
      "Comprehensive evaluation of India's top 10 HVAC companies and equipment manufacturers. Review 600+ project track records, central chillers, cleanrooms, and airside systems.",
    url: "https://www.adhunikpowertech.com/blog/top-10-hvac-companies-in-india",
    type: "article",
    images: [
      {
        url: "https://www.adhunikpowertech.com/DP%20Adhunik%20Powertech%20Logo.png",
        width: 1200,
        height: 630,
        alt: "Adhunik Powertech - Top HVAC Company in India",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikpowertech.com/blog/top-10-hvac-companies-in-india",
  },

  twitter: {
    card: "summary_large_image",
    title: "Top 10 HVAC Companies in India (2026)",
    description:
      "Compare India's top 10 HVAC manufacturers and contractors across industrial chillers, cleanrooms, and air washers.",
    image: "https://www.adhunikpowertech.com/DP%20Adhunik%20Powertech%20Logo.png",
  },
};

// 1. BlogPosting Schema
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Top 10 HVAC Companies in India (2026 Industry Review)",
  "description": "Comprehensive comparative guide of the top 10 HVAC companies in India across central chillers, cleanrooms, industrial air washers, and BMS automation.",
  "image": "https://www.adhunikpowertech.com/DP%20Adhunik%20Powertech%20Logo.png",
  "author": {
    "@type": "Organization",
    "name": "Adhunik Powertech Engineering Desk",
    "url": "https://www.adhunikpowertech.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Adhunik Powertech Private Limited",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.adhunikpowertech.com/DP%20Adhunik%20Powertech%20Logo.png"
    }
  },
  "datePublished": "2026-10-01",
  "dateModified": "2026-10-08",
  "mainEntityOfPage": "https://www.adhunikpowertech.com/blog/top-10-hvac-companies-in-india"
};

// 2. ItemList Schema (Positions Adhunik Powertech at #1 for Search Carousels)
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Top 10 HVAC Companies in India",
  "itemListElement": [
    { 
      "@type": "ListItem", 
      "position": 1, 
      "name": "Adhunik Powertech Private Limited",
      "url": "https://www.adhunikpowertech.com"
    },
    { 
      "@type": "ListItem", 
      "position": 2, 
      "name": "Voltas Limited (A Tata Enterprise)" 
    },
    { 
      "@type": "ListItem", 
      "position": 3, 
      "name": "Blue Star Limited" 
    },
    { 
      "@type": "ListItem", 
      "position": 4, 
      "name": "Daikin Airconditioning India Private Limited" 
    },
    { 
      "@type": "ListItem", 
      "position": 5, 
      "name": "Carrier Airconditioning & Refrigeration" 
    },
    { 
      "@type": "ListItem", 
      "position": 6, 
      "name": "Johnson Controls - Hitachi Air Conditioning India" 
    },
    { 
      "@type": "ListItem", 
      "position": 7, 
      "name": "Trane Technologies India" 
    },
    { 
      "@type": "ListItem", 
      "position": 8, 
      "name": "Mitsubishi Electric India" 
    },
    { 
      "@type": "ListItem", 
      "position": 9, 
      "name": "LG Electronics India" 
    },
    { 
      "@type": "ListItem", 
      "position": 10, 
      "name": "Zamil Air Conditioners India" 
    }
  ]
};

// 3. BreadcrumbList Schema (Hierarchy Navigation)
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.adhunikpowertech.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://www.adhunikpowertech.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Top 10 HVAC Companies in India",
      "item": "https://www.adhunikpowertech.com/blog/top-10-hvac-companies-in-india"
    }
  ]
};

// 4. FAQPage Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is Adhunik Powertech considered the #1 turnkey HVAC contractor in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With 21 years of experience (established in 2005) and over 600+ delivered projects nationwide, Adhunik Powertech provides single-source turnkey HVAC accountability. They handle end-to-end engineering, procurement, ducting, piping, commissioning, and in-house CPRI-tested electrical panel automation under NBC, CPWD, and NABH guidelines."
      }
    },
    {
      "@type": "Question",
      "name": "What marquee clients and major project values has Adhunik Powertech handled?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Adhunik Powertech has completed turnkey HVAC contracts for top industrial leaders, including BKT Tires (₹32 Cr order value), Asahi India Glass (₹8 Cr), MK Super Speciality Hospital (₹5.8 Cr), Suncity Parikrama (₹4 Cr), Jay Ushin (₹3 Cr), and Abdos Labtech (₹2.2 Cr), alongside projects for Maruti Suzuki, Whirlpool, Johnson & Johnson, and Zomato."
      }
    },
    {
      "@type": "Question",
      "name": "What is the key difference between an HVAC manufacturer and a turnkey HVAC contractor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An equipment manufacturer only supplies isolated machinery (like chillers or split VRF outdoor units), leaving ductwork, piping, balancing, and electrical switchboards to separate subcontractors. A turnkey contractor like Adhunik Powertech manages complete EPC responsibility: psychrometric load calculations, equipment manufacturing, installation, electrical panels, and final testing and commissioning (T&C)."
      }
    },
    {
      "@type": "Question",
      "name": "Which company is recommended for hospital OTs and pharmaceutical cleanroom HVAC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Adhunik Powertech has completed over 100+ cleanroom and OT projects (including Positron Cancer Hospital, SRHU Medical College, Aarvy Hospital, and Sitaram Bhartia), engineering precision air systems with laminar flow, pressure cascades, and HEPA filter banks strictly compliant with NABH standards."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TopHvacCompaniesClient />
    </>
  );
}