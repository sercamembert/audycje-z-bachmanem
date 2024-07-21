import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Manrope, playFairDisplaySC } from "@/lib/fonts";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Audycje z Bachmanem - Sezon 2024/2025",
  description:
    "Wybierając „Audycje z Bachmanem”, zapewniasz  dzieciom nie tylko rozrywkę, ale i edukację na najwyższym poziomie.",
  authors: [{ name: "outofplace.space" }],
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
          "overflow-x-hidden !scroll-smooth font-primary text-text"
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
