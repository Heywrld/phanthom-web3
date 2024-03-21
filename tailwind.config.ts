import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)"],
      inter: ["var(--font-inter)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        blackGray: "rgb(34, 34, 34)",
        lightPurple: "#AB9FF2",
        lightGray: "rgb(51, 51, 51)",
        deepBlack: "rgb(24, 24, 24)",
        grayFourSeven: "rgb(47, 47, 47)",
        lightBlack: "rgb(153, 153, 153)",
        deepPurple: "rgb(171, 159, 242)",
      },
    },
  },
  plugins: [],
};
export default config;
