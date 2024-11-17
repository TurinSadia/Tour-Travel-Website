import type { Metadata } from "next";
import { Nunito } from "next/font/google";

// Style files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets : ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable : "--font"
});


export const metadata: Metadata = {
  title: "Tour and Travel",
  description: "Tour and Travel Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-primary text-tertiary overflow-x-hidden ${nunito.variable}`}
      >

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
