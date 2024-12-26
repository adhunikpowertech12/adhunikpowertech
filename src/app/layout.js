import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
export const metadata = {
  title: "Adhunik Powertech",
  description: "HVAC  Solution under one roof",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <head>
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
      <SpeedInsights/>
        <Header />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
