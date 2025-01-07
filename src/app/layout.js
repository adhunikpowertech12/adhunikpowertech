import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import WatsapButton from "@/components/watsap";

export const metadata = {

  title: {
    default: " Adhunik Powertech Private Limited | HVAC Solutions & Air Cooling Systems in Gurugram, India ",
    template: " %s - Hvac Under One Roof "
  },

  description: "",
  
  twitter:{
    card:"summary_large_image",
  }
  
}


export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
  
      <head>
      <meta name="google-site-verification" content="NvZ4IN4DrHMOm2iwZo-ONRq9_7U8g_ntzz0_MaRVVc8" />
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-5MBSC4RFX3">
  
</Script>
      <Script  id="google-analytics">
  

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
      </head>
      <body className={inter.className}>
      <Analytics/>
      <SpeedInsights/>
        <Header />
        <WatsapButton phoneNumber="+919599050534" />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
