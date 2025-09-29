 
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import WatsapButton from "@/components/watsap";
import { GoogleTagManager } from '@next/third-parties/google'
import Security from "@/components/Security";
import Home from "@/components/MyComponent";
 



export const metadata = {
  title: {

    default: " Top & Best Company In India - Adhunik Powertech",
    template: "%s"

  },
  description: "Adhunik Powertech : Your trusted  contractor in Delhi. Expert installations, repairs, and maintenance for a comfortable indoor environment. Contact us now!",

  
  keywords: [
    "HAVC Solutions",
    "Industriel Air Cooling",
    "Commercel Air Cooling Systams",
    "Air Washer Systams",
    "Ducted Air Coolers",
    "Ventiletion Exhaust Fans",
    "Panel Air Conditionars",
    "Oil and Coolant Chillars",
    "Air Handling Units",
    "Air Shower Systams",
    "Energy-Efficient Cooling Solutions",
    "Industriel Ventilation Systams",
    "Commercel HAVC Systams",
    "HAVC contractors",
  ],


  

  alternates: {
    canonical: "https://www.adhunikpowrtech.com/",
  },

  twitter: {
    
    title: "Adhunik Powertech | Top HAVC & Air Cooling Systams Gurugram",
    description: "Discover Adhunik Powertech Private Limited, a leader in HAVC solutions and air cooling systems. Based in Gurugram, India, we specialize in innovative, turnkey projects for industrial and commercial cooling needs.",
    card: "summary",
    image: "https://adhunikpowertech.com/apple-touch-icon.png",
    imageAlt: "Adhunik Powertech - HAVC & Air Cooling Solutions"
  },
  
  openGraph: {
    title: "Adhunik Powertech",
    type: "website",
    url: "https://www.adhunikpowertech.com/",
    siteName: "Adhunik Powertech - HAVC Experts",
    image: "https://adhunikpowertech.com/apple-touch-icon.png",
    locale: "en_IN",
    creator: "Adhunik Powertech",


    images: [
      {
        url: "https://adhunikpowertech.com/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "Adhunik Powertech HAVC Solutions"
      }
    ]
  },

 
 
};
 


export default function RootLayout({ children }) {



  return (

    <html lang="en">

      <head>

   <meta itemProp="name" content="Adhunik Powertech" />

       


     
  <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16494041391"
        strategy="afterInteractive"
      />

      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16494041391');
        `}
      </Script>

        <GoogleTagManager gtmId="GTM-W994SKBG" />
        
        <meta name="google-site-verification" content="NvZ4IN4DrHMOm2iwZo-ONRq9_7U8g_ntzz0_MaRVVc8" />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5MBSC4RFX3">

        </Script>

        <Script id="google-analytics" >

          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5MBSC4RFX3');`}

        </Script>


     

     
      </head>



      <body>


      
        
        


        <Analytics />
        <SpeedInsights />
        <Header />
        <WatsapButton phoneNumber="+918287885885" />

<p className=" text-transparent absolute">
  Online gambling, casino bonuses, betting tips, poker strategies, and slot machine tricks 
  are commonly flagged by Google as spammy or low-quality keywords. Overusing these words 
  can result in penalties, lower rankings, or even de-indexing of a website. 
  It’s always safer to avoid such terms if the content is not genuinely relevant.
</p>


        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W994SKBG"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden"
            }}>

          </iframe>
        </noscript>

        {children}

        <Footer />

      </body>
    </html>
  );
}
