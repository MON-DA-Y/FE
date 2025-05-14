import type { Config } from "tailwindcss";
import { COLORS, FONT_SIZE, FONT_WEIGHT, LETTER_SPACING, LINE_HEIGHT, SHADOW } from "./src/styles/theme/tokens";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        headline: [
          FONT_SIZE.headline,
          {
            lineHeight: LINE_HEIGHT.headline,
            fontWeight: FONT_WEIGHT.headline,
            letterSpacing: LETTER_SPACING.headline,
          },
        ],
        subtitle1: [
          FONT_SIZE.subtitle1,
          {
            lineHeight: LINE_HEIGHT.subtitle1,
            fontWeight: FONT_WEIGHT.subtitle1,
            letterSpacing: LETTER_SPACING.subtitle1,
          },
        ],
        subtitle2: [
          FONT_SIZE.subtitle2,
          {
            lineHeight: LINE_HEIGHT.subtitle2,
            fontWeight: FONT_WEIGHT.subtitle2,
            letterSpacing: LETTER_SPACING.subtitle2,
          },
        ],
        body1: [
          FONT_SIZE.body1,
          {
            lineHeight: LINE_HEIGHT.body1,
            fontWeight: FONT_WEIGHT.body1,
            letterSpacing: LETTER_SPACING.body1,
          },
        ],
        body2: [
          FONT_SIZE.body2,
          {
            lineHeight: LINE_HEIGHT.body2,
            fontWeight: FONT_WEIGHT.body2,
            letterSpacing: LETTER_SPACING.body2,
          },
        ],
        caption1: [
          FONT_SIZE.caption1,
          {
            lineHeight: LINE_HEIGHT.caption1,
            fontWeight: FONT_WEIGHT.caption1,
            letterSpacing: LETTER_SPACING.caption1,
          },
        ],
        caption2: [
          FONT_SIZE.caption2,
          {
            lineHeight: LINE_HEIGHT.caption2,
            fontWeight: FONT_WEIGHT.caption2,
            letterSpacing: LETTER_SPACING.caption2,
          },
        ],
      },
      colors: {
        ...COLORS.primary,
        ...COLORS.sub,
        ...COLORS.series,
        ...COLORS.category,
      },
      boxShadow: {
        interactive: SHADOW.interactive,
      },
    },
  },
  plugins: [],
};

export default config;
