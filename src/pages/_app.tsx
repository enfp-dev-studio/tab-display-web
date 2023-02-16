import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
import Layout from "../components/Layout";

import { api } from "../utils/api";

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
      content: "",
    },
  ],
};

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <DefaultSeo {...DEFAULT_SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
