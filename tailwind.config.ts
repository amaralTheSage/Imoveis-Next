import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FFAD0F",
        "dark-gray": "#4E4E4E",
        "light-gray": "#A6A6A6",
      },
      backgroundImage: {
        hero: "url('../public/hero.png')",
      },
    },
  },
  plugins: [],
};
export default config;
