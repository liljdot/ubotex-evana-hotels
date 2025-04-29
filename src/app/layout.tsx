import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"]
})

export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ubotex Limited",
  description: "Incorporated in 2002, Ubotex Limited is a leading Nigerian firm specializing in cement distribution, building materials, and transport haulage. Committed to excellence, we deliver reliable, efficient, and innovative services across a wide network. Backed by an experienced team, we strive to exceed customer expectations and lead in distribution and transportation across the South-South and beyond."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.className} w-screen items-center overflow-x-hidden antialiased`}
        data-theme="light"
      >
        {children}
      </body>
    </html>
  );
}
