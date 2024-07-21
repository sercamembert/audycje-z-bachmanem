import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Manrope, playFairDisplaySC } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Audycje z Bachmanem - Sezon 2024/2025",
  description:
    "Twórcze Kształcenie dzieci: Edukacja Artystyczna na Rzecz Zdrowia i Dobrego Samopoczucia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={cn(
          Manrope.variable,
          playFairDisplaySC.variable,
          "overflow-x-hidden !scroll-smooth font-primary text-primary"
        )}
      >
        {children}
      </body>
    </html>
  );
}
