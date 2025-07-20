"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import Image from "next/image";

interface CommonBtnProps {
  type: "understand" | "finish" | "series"; // 패딩
  subText?: string;
  seriesName?: string;
  onClick: () => void;
}

export default function CommonBtn({
  type,
  subText,
  seriesName,
  onClick,
}: CommonBtnProps) {
  return (
    <>
      {type === "understand" && (
        <div
          className="px-2.5 py-1.5 rounded-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center text-center text-white whitespace-nowrap cursor-pointer"
          style={{ background: COLORS.primary.mint }}
          onClick={() => onClick}
        >
          <div
            style={{
              fontSize: FONT_SIZE.caption1,
              fontWeight: FONT_WEIGHT.caption1,
            }}
          >
            💪🏻 이해했어요
          </div>
        </div>
      )}
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
            onClick={() => onClick}
          >
            💡 학습 완료했어요
          </div>
        </div>
      )}
      {type === "series" && (
        <div
          className="px-2.5 py-1.5 rounded-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center cursor-pointer"
          style={{ background: COLORS.primary.navy }}
          onClick={() => onClick}
        >
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
