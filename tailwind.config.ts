// @ts-nocheck

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        sidebar:
          "linear-gradient(90deg, rgba(8,152,207,1) 70%, rgba(97,244,212,1) 96%, rgba(255,255,255,1) 100%);",
        ocean:
          "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg);",
        home: "url(/home.png)",
      },
      animation: {
        wave: "wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite",
        wave2:
          "wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite",
        typewriter:
          "typewriter 4s steps(40, end), blink 0.75s step-end infinite",
      },
      keyframes: {
        wave: {
          "0%": {
            "margin-left": "0",
          },
          "100%": {
            "margin-left": "-1600px",
          },
        },
        swell: {
          "0, 100%": {
            transform: "translate3d(0,-25px,0)",
          },
          "50%": {
            transform: "translate3d(0,5px,0)",
          },
        },
        typewriter: {
          from: {
            width: "0",
          },
          to: {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            "border-color": "transparent",
          },
        },
      },
      fontFamily: {
        pretendard: ["Pretendard-Regular"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".translate3d-0": {
          transform: "translate3d(0, 0, 0)",
        },
      });
    },
  ],
};
export default config;
