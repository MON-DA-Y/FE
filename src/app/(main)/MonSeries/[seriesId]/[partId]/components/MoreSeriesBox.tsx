"use client";

import { useEffect, useState } from "react";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import CommonBtn from "@/components/shared/CommonBtn";

interface MoreSeriesBoxProps {
  series: string;
  nextPart: string;
  nextPartFunc: () => void;
}
export default function MoreSeriesBox({
  series,
  nextPart,
  nextPartFunc,
}: MoreSeriesBoxProps) {
  return (
    <div className="w-[680px] px-10 py-5 bg-white rounded-[30px] flex justify-between items-center sm:flex-row">
      <div className="flex flex-col justify-center items-left">
        <div
          style={{
            color: COLORS.sub.black,
            fontSize: FONT_SIZE.subtitle2,
            fontWeight: FONT_WEIGHT.subtitle2,
          }}
        >
          {series}
        </div>
        <div
          style={{
            color: COLORS.sub.black,
            fontSize: FONT_SIZE.body2,
            fontWeight: FONT_WEIGHT.body2,
          }}
        >
          {nextPart}
        </div>
      </div>
      <div>
        <CommonBtn type="series_next" onClick={nextPartFunc} />
      </div>
    </div>
  );
}
