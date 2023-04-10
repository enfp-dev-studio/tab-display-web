import { type AppType } from "next/app";
import React from "react";
import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Script from "next/script";

const DEFAULT_SEO = {
  title: "Tab Display: Android Tablet as MacBook External Display",
  description:
    "Take Your Workflow to the Next Level: Seamlessly Transform Your Android Tablet into a MacBook External Display",
  canonical: "https://tab-display.enfpdev.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tab-display.enfpdev.com",
    title: "Tab Display: Android Tablet as MacBook External Display",
    site_name: "Tab Display",
    images: [
      {
        url: "https://tab-display.enfpdev.com/og-image.webp",
        width: 533,
        height: 320,
        alt: "image",
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "google-site-verification",
      content: "8cQSD-YmLYyjhiW6x5AF1ZLRgk9WYcZJOZtldEzHUjM",
    },
  ],
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
