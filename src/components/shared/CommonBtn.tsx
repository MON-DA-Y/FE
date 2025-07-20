"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import Image from "next/image";

interface CommonBtnProps {
  type: "understand" | "finish" | "series"; // 패딩
  subText?: string;
  seriesColor?: string;
  seriesName?: string;
}

export default function CommonBtn({
  type,
  subText,
  seriesColor,
  seriesName,
}: CommonBtnProps) {
  return (
    <>
      {type === "finish" && (
        <div className="relative flex flex-col justify-center items-center">
          <div
            style={{
              color: COLORS.primary.navy,
              fontSize: FONT_SIZE.caption2,
              fontWeight: FONT_WEIGHT.caption2,
            }}
          >
            {subText}
          </div>
          <div
            className="px-5 py-3.5 rounded-[30px] text-white text-center cursor-pointer"
            style={{
              backgroundColor: COLORS.primary.navy,
              fontSize: FONT_SIZE.subtitle2,
              fontWeight: FONT_WEIGHT.subtitle2,
            }}
          >
            💡 학습 완료했어요
          </div>
        </div>
      )}
      {type === "series" && (
        <div className="px-2.5 py-1.5 rounded-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center">
          <div
            className="text-center justify-start text-white"
            style={{
              fontSize: FONT_SIZE.caption1,
              fontWeight: FONT_WEIGHT.caption1,
            }}
          >
            {seriesName}
          </div>
          <Image src="/icons/next.svg" alt=">" width={15} height={15} />
        </div>
      )}
    </>
  );
}
