import React from "react";
import Footer from "./Footer";
import AppBar from "./AppBar";
import { Inter } from "@next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center bg-dark-background text-white"
      style={{
        fontFamily: inter.style.fontFamily,
      }}
    >
      {/* https://nextjs.org/docs/messages/next-script-for-ga */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WWVM1VXH7N"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WWVM1VXH7N');
        `}
      </Script>
      <div className="container flex-none">
        <AppBar />
      </div>
      <main>{children}</main>
      <div className="container mx-auto mt-16 flex-none md:mt-52">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
