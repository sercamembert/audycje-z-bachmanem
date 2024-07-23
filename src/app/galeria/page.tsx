import HeroSection from "@/containers/gallery-page/hero-section";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Galeria - Audycje z Bachmanem",
  description:
    "Zobacz naszą galerię z Audycji z Bachmanem! Przeżyj niezapomniane chwile z naszych interaktywnych koncertów i edukacyjnych programów muzycznych.",
  alternates: {
    canonical: "https://www.audycjezbachmanem.pl/galeria",
  },
  openGraph: {
    type: "website",
    url: "https://www.audycjezbachmanem.pl/galeria",
  },
};

export default function page() {
  return (
    <div className="min-h-screen">
      <HeroSection />
    </div>
  );
}
