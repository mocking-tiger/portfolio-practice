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
        home: "url(/home.png)",
      },
      animation: {
        typingCursor: "typingCursor 1s steps(2,start) 0ms infinite",
      },
      keyframes: {
        typingCursor: {
          from: {
            borderRight: "2px solid #d1d5db",
          },
          to: {
            borderRight: "2px solid rgba(0,0,0,0)",
          },
        },
      },
      fontFamily: {
        pretendard: ["Pretendard-Regular"],
      },
    },
  },
  plugins: [],
};
export default config;
