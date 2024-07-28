import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        "2lg": "1280px",
        xl: "1440px",
        desktop: "1728px",
        ultra: "2560px",
      },
      colors: {
        primary: "#8D1A8F",
        text: "#171717",
        "text-light": "#6A6A6A",
      },
      fontFamily: {
        primary: ["var(--font-primary)"],
        secondary: ["var(--font-secondary)"],
      },
      transitionTimingFunction: {
        "custom-bezier": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
