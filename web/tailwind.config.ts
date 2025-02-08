import type { Config } from "tailwindcss";
import { COLOR, lightColors, darkColors } from "./constants/COLOR";

export default {
  darkMode: "selector",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: COLOR.brand,
        accent: COLOR.accent,
        ...lightColors,
        ...darkColors,
      },
    },
  },
  plugins: [],
} satisfies Config;
