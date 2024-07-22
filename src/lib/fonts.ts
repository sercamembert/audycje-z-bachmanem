import localFont from "next/font/local";

export const Manrope = localFont({
  src: [
    {
      path: "../../public/fonts/Manrope/Manrope-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Manrope/Manrope-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Manrope/Manrope-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Manrope/Manrope-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-primary",
});

export const playFairDisplaySC = localFont({
  src: [
    {
      path: "../../public/fonts/Playfair_Display/PlayfairDisplay-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Playfair_Display/PlayfairDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-secondary",
});
