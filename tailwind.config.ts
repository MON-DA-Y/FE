import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        navy: "#1C376B",
        mint: "#A0EBAF",

        // Sub
        black: "#1C1C1C",
        gray1: "#EFEFEF",
        gray2: "#D9D9D9",
        gray3: "#8E8E8E",
        gray4: "#636363",

        // 시리즈, 퀴즈
        yellow1: "#FFFD79",
        yellow2: "#FDE68A",
        yellow3: "#92400D",
        blue1: "#EFF6FF",
        blue2: "#C5DFFF",
        blue3: "#1D40B0",
        deepGreen: "#166434",
        error: "#F66C6C",

        // 카테고리
        money: "#F6CA83",
        bigPicture: "#D0D38F",
        dailyLife: "#9EA96B",
        global: "#B1DCDD",
        industries: "#8193B6",
        tech: "#AFAFAF",
        issues: "#FABEC0",
        rules: "#E97B76",
      },

      fontSize: {
        headline: "35px",
        subtitle1: "30px",
        subtitle2: "20px",
        body1: "17px",
        body2: "15px",
        caption1: "12px",
        caption2: "12px",
      },

      boxShadow: {
        clickable: "0 2px 6px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
