"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import type { TextBox } from "@/types/monSeries";

export default function TextBox({ text, type }: TextBox) {
  const isLifeExample = type === "lifeExample";

  return (
    <div
      className="w-[600px] px-5 py-7  rounded-[20px] outline-[3px] outline-offset-[-3px] outline-amber-200 inline-flex justify-start items-center gap-2.5"
      style={{
        background: isLifeExample ? COLORS.series.yellow1 : COLORS.series.blue1,
        outlineColor: isLifeExample
          ? COLORS.series.yellow2
          : COLORS.series.blue2,
      }}
    >
      <div className="w-[540px] flex flex-col justify-center items-start">
        <div
          style={{
            color: isLifeExample ? COLORS.series.yellow3 : COLORS.series.blue3,
            fontSize: FONT_SIZE.subtitle2,
            fontWeight: FONT_WEIGHT.subtitle2,
          }}
        >
          {isLifeExample ? "실생활 예시" : "알아두면 좋을 용어"}
        </div>
        <div
          style={{
            color: COLORS.sub.black,
            fontSize: FONT_SIZE.body2,
            fontWeight: FONT_WEIGHT.body2,
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
