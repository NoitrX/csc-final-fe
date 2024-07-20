import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "partner-slider": "r-to-l 20s infinite linear",
        "partner-slider-delayed": "r-to-l 20s infinite linear 10s",
        "faq-appear": "max-height-appear 0.25s ease-in-out forwards",
        "faq-disappear": "max-height-disappear 0.25s ease-in-out forwards",
        "faq-chevron-rotate": "rotate-180 0.25s ease-in-out forwards",
        "faq-chevron-unrotate": "from-180 0.25s ease-in-out forwards",
      },
      backgroundColor: {
        primary: "#071952",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "roboto-flex": ["var(--font-roboto-flex)", "sans-serif"],
        ubuntu: ["var(--font-ubuntu)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        "big-shoulders-inline-text": ["var(--font-big-shoulders-inline-text)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
