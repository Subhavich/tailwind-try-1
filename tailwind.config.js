import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        autoFit260: "repeat(auto-fit,minmax(260px,1fr))",
      },
      gridTemplateRows: {
        row550: "550px",
      },
      gridAutoRows: {
        autoRow550: "550px",
      },
      keyframes: {
        slidein: {
          "0%": {
            transform: "scale(0)",
            opacity: 0,
          },
          "100%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
      },
      animation: {
        slideIn: "slidein .2s linear",
      },
    },
  },
  plugins: [],
};
