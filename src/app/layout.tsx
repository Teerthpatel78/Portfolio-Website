import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Teerth Patel | Flutter & Mobile App Developer",
  description: "Portfolio of Teerth Patel - A passionate Flutter and Mobile Application Developer specializing in cross-platform app development with clean architecture and beautiful UI/UX.",
  keywords: ["Flutter Developer", "Mobile App Developer", "Dart", "Firebase", "Supabase", "Cross-platform", "Portfolio"],
  authors: [{ name: "Teerth Patel" }],
  openGraph: {
    title: "Teerth Patel | Flutter & Mobile App Developer",
    description: "Building scalable, high-performance cross-platform mobile applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teerth Patel | Flutter & Mobile App Developer",
    description: "Building scalable, high-performance cross-platform mobile applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0f] text-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
