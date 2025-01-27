"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useDarkMode from "@/hooks/useDarkMode";
import { APIDataProvider } from "@/hooks/UseApi";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathName = usePathname()
  const showNavbar = pathName !== "/price-tracker"
  const {isDarkMode, toggleDarkMode} = useDarkMode();
  console.log(`Dark mode: ${isDarkMode}`);
  
  return (
    <APIDataProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          {showNavbar && <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
    </APIDataProvider>
  );
}
