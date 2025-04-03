
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import WatsapButton from "@/components/watsap";
import { GoogleTagManager } from '@next/third-parties/google'




export const metadata = {
  title: {

    default:" Top & Best HVAC Companies in India - Adhunik Powertech",
    template: "%s"
  },
  description: "Searching for the top HVAC companies in India? Adhunik Powertech, Delhi's trusted HVAC contractor, manufacturer & supplier, offers expert cooling solutions across India. Contact us now & Get a Free Quote!",
  keywords: [
    "HVAC Solutions",
    "Industrial Air Cooling",
    "Commercial Air Cooling Systems",
    "Air Washer Systems",
    "Ducted Air Coolers",
    "Ventilation Exhaust Fans",
    "Panel Air Conditioners",
    "Oil and Coolant Chillers",
    "Air Handling Units",
    "Air Shower Systems",
    "Energy-Efficient Cooling Solutions",
    "Industrial Ventilation Systems",
    "Commercial HVAC Systems","HVAC contractors","hvac company in noida",
  ],
  robots: "index,follow",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppTitle: "Adhunik Powertech",
  appleMobileWebAppStatusBarStyle: "default",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.adhunikpowertech.com/"
  },
  twitter: {
    site: "@adhunikpowertech",
    title: "Adhunik Powertech | Top HVAC & Air Cooling Systems Gurugram",
    description: "Discover Adhunik Powertech Private Limited, a leader in HVAC solutions and air cooling systems. Based in Gurugram, India, we specialize in innovative, turnkey projects for industrial and commercial cooling needs.",
    card: "summary",
    image: "https://adhunikpowertech.com/apple-touch-icon.png",
    imageAlt: "Adhunik Powertech - HVAC & Air Cooling Solutions"
  },
  openGraph: {
    title: "Adhunik Powertech",
    type: "website",
    url: "https://adhunikpowertech.com/",
    siteName: "Adhunik Powertech - HVAC Experts",
    image: "https://adhunikpowertech.com/apple-touch-icon.png",
    locale: "en_IN",
    creator:"Adhunik Powertech",
    

    images: [
      {
        url: "https://adhunikpowertech.com/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "Adhunik Powertech HVAC Solutions"
      }
    ]
  },
  additionalMeta: [
    { httpEquiv: "X-UA-Compatible", content: "IE=EmulateIE7" },
    { httpEquiv: "Accept-CH", content: "DPR, Viewport-Width, Width, Save-Data" }
  ],
  link: [
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" },
    { rel: "preconnect", href: "http://cdn12.lemnisk.co" }
  ]
};






export default function RootLayout({ children }) {



  return (

    <html lang="en">
  

      <head>
      <title>Adhunik Powertech</title>
      
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Adhunik Powertech",
              "url": "https://www.adhunikpowertech.com/",
              "alternateName": "Adhunik Powertech",
  
            }),
          }}
        />
     
     <div itemscope itemtype="https://schema.org/WebSite">
    <link itemprop="url" href="https://www.adhunikpowertech.com/" />
    <meta itemprop="name" content="Adhunik Powertech"/>
  </div>

<GoogleTagManager   gtmId="GTM-W994SKBG"  />
      <meta name="google-site-verification" content="NvZ4IN4DrHMOm2iwZo-ONRq9_7U8g_ntzz0_MaRVVc8" />

<Script async src="https://www.googletagmanager.com/gtag/js?id=G-5MBSC4RFX3">
  
</Script>

      <Script  id="google-analytics" >

 {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5MBSC4RFX3');`}

</Script>
      

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

<link rel="icon" href="/favicon.ico" sizes="any" />

      </head>



      <body>
      <Analytics/>
      <SpeedInsights/>
        <Header />
        <WatsapButton phoneNumber="+919599050534" />
       
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W994SKBG"
height="0" width="0" style={{display:"none" , visibility:"hidden"}}></iframe></noscript>

        {children}
        
        <Footer />
        
      </body>
    </html>
  );
}
