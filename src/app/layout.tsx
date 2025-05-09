import type { Metadata } from "next";
import { Open_Sans, Cormorant_Upright } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const cormorantUpright = Cormorant_Upright({
  variable: "--font-cormorant-upright",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
})

export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Evana Hotels",
  description: "Premium spaces, curated experiences, and personalized service, discover the new standard in hospitality."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantUpright.className} w-screen items-center overflow-x-hidden antialiased`}
        data-theme="light"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
