import React from "react";
import Footer from "./Footer";
import AppBar from "./AppBar";
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] })


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-dark-background text-white" 
    style={{
      fontFamily: inter.style.fontFamily,
    }}>
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
