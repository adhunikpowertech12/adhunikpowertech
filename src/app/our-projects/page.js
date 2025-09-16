import OurProjects from "./OurProjects";

 
 
export const metadata = {
   title: "Our HVAC Projects & Portfolio | Commercial & Industrial Solutions | Adhunik Powertech",
  description:
    "Explore Adhunik Powertech's portfolio of successful HVAC projects. See our expertise in delivering innovative, energy-efficient climate control solutions for commercial and industrial sectors. See our work across India.",

  keywords: [
    // Primary & High-Value Keywords
    "Adhunik Powertech projects",
    "Adhunik Powertech portfolio",
    "HVAC projects India",
    "commercial HVAC projects",
    "industrial HVAC projects",
    "HVAC contractor portfolio",
    "turnkey HVAC solutions",

    // Geographic Keywords (from previous analysis)
    "HVAC projects Gurugram",
    "HVAC projects Manesar",
    "HVAC projects Delhi NCR",
    "HVAC projects across India",
    "HVAC projects Jaipur",
    "HVAC projects Chandigarh",
    "HVAC projects Noida",
    "HVAC projects Faridabad",
    
    // Client-Specific & Industry Keywords (from previous analysis)
    "industrial sector projects",
    "institutional sector projects",
    "hospitals HVAC solutions",
    "pharma and food projects",
    "residential building HVAC",
    "corporate office AC projects",

    // Services & Solutions
    "air washer units projects",
    "ducted air cooler projects",
    "panel air conditioners projects",
    "air handling unit projects",
    "chiller plant projects",
    "ventilation projects",

    // Brand & Legacy Keywords
    "Adhunik Powertech expertise",
    "HVAC engineering solutions",
    "climate control solutions",
  ],

     robots: "index, follow",

  openGraph: {
    title: "Our HVAC Projects & Portfolio | Commercial & Industrial Solutions | Adhunik Powertech",
    description:
      "Explore Adhunik Powertech's portfolio of successful HVAC projects. See our expertise in delivering innovative, energy-efficient climate control solutions for commercial and industrial sectors. See our work across India.",
    url: "https://www.adhunikpowertech.com/our-projects",
    type: "website",
    images: [
      {
        url: "https://www.adhunikpowertech.com/projects/20.webp",  
        width: 1200,
        height: 630,
        alt: "A portfolio of completed HVAC projects by Adhunik Powertech.",
      },
    ],
  },

  alternates: {
    canonical:
      "https://www.adhunikpowertech.com/our-projects",  
  },


    twitter: {
    card: "summary_large_image",
     title: "Our HVAC Projects & Portfolio | Commercial & Industrial Solutions | Adhunik Powertech",
    description:
      "Explore Adhunik Powertech's portfolio of successful HVAC projects. See our expertise in delivering innovative, energy-efficient climate control solutions for commercial and industrial sectors. See our work across India.",
     image: "https://www.adhunikpowertech.com/projects/20.webp",
  },

};


 
 

export default function page() {


  return (
    <>


     <OurProjects/>

    </>
  )
}





