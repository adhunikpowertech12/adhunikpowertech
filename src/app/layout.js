"use client"
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import WatsapButton from "@/components/watsap";
import { GoogleTagManager } from '@next/third-parties/google'
import Security from "@/components/Security";




 


export default function RootLayout({ children }) {



  return (

    <html lang="en">

      <head>

   <meta itemProp="name" content="Adhunik Powertech" />

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


        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />


        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

      </head>



      <body>
      {/* <Security/> */}
        <Analytics />
        <SpeedInsights />
        <Header />
        <WatsapButton phoneNumber="+919599050534" />

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
