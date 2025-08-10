import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Merienda,
  Outfit,
  Pixelify_Sans,
  Poppins,
  Stardos_Stencil,
  Titillium_Web,
} from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../contexts/ThemeContext";

import "./globals.css"; // import global CSS here

// Local fonts with CSS variables
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Pick one or more Google fonts to use with next/font
const poppins = Poppins({ weight: ["100", "900"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Your App Title",
  description: "Your app description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ClerkProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased bg-background text-foreground`}
          >
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </ThemeProvider>
  );
}
