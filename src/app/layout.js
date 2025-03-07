import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import WatsapButton from "@/components/watsap";
import { GoogleTagManager } from '@next/third-parties/google'
 


export const metadata = {

  title: {
    default: " Adhunik Powertech Private Limited | HVAC Solutions & Air Cooling Systems in Gurugram, India ",
    template: " %s "
  },
 
  twitter:{
    card:"summary_large_image",
    title: "Adhunik Powertech Private Limited - Hvac Under One Roof",
    description: "Discover Adhunik Powertech Private Limited, a leader in HVAC solutions and air cooling systems. Based in Gurugram, India, we specialize in innovative, turnkey projects for industrial and commercial cooling needs",
    
  }
  
}


export default function RootLayout({ children }) {

  const jsonLd = {

    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Adhunik Powertech",
    "url": "https://www.adhunikpowertech.com/",
    "alternateName": "Adhunik Powertech Private Limited",
  
  };

  return (
    
    <html lang="en">
  
      <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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



      <body className={inter.className}>
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
