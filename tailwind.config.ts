import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pangram: ["PP Pangram Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "18": "72px",
      },
      height: {
        "144": "574px",
      },
      margin: {
        "55": "165px",
      },
      colors: {
        primary: "#272728",
        secondary: "#575758",
        title: "#1A1A1C",
        label: "#868687",
        border: "#CFCFCF",
        white: "#fff",
        blue: "#0A4CF6",
        red: "#DF0707",
      },
    },
  },
  plugins: [],
};
export default config;
