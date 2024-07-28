import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Manrope, playFairDisplaySC } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/Ui/toaster";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Audycje z Bachmanem - Sezon 2024/2025",
  description:
    "Dołącz do nas na Audycjach z Bachmanem w sezonie 2024/2025! Oferujemy interaktywne koncerty i edukacyjne programy muzyczne dla dzieci.",
  authors: [{ name: "outofplace.space" }],
  alternates: {
    canonical: "https://www.audycjezbachmanem.pl",
  },
  openGraph: {
    type: "website",
    url: "https://www.audycjezbachmanem.pl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="!scroll-smooth">
      <body
        className={cn(
          Manrope.variable,
          playFairDisplaySC.variable,
          "overflow-x-hidden font-primary text-text bg-[#F1EBEB]"
        )}
      >
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
