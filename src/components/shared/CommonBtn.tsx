"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import Image from "next/image";

interface CommonBtnProps {
  type:
    | "understand"
    | "finish"
    | "series"
    | "series_study"
    | "quiz_submit"
    | "monday_complete" // 패딩
    | "series_next";
  subText?: string;
  seriesName?: string;
  children?: React.ReactNode;
  onClick: () => void;
}

export default function CommonBtn({
  type,
  subText,
  seriesName,
  children,
  onClick,
}: CommonBtnProps) {
  return (
    <>
      {/* 이해했어요 버튼 */}
      {type === "understand" && (
        <div
          className="px-2.5 py-1.5 rounded-[30px] text-center text-white whitespace-nowrap cursor-pointer"
          style={{ background: COLORS.primary.mint }}
          onClick={onClick}
        >
          <div
            style={{
              fontSize: FONT_SIZE.caption1,
              fontWeight: FONT_WEIGHT.caption1,
            }}
          >
            {children}
          </div>
        </div>
      )}
      {/* 학습 완료 버튼 */}
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
            onClick={onClick}
          >
            💡 학습 완료했어요
          </div>
        </div>
      )}
      {/* 시리즈 더 보기 버튼 */}
      {type === "series" && (
        <div
          className="px-2.5 py-1.5 rounded-[30px] inline-flex justify-center items-center cursor-pointer"
          style={{ background: COLORS.primary.navy }}
          onClick={onClick}
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
      {/* 시리즈 학습 완료 버튼 */}
      {type === "series_study" && (
        <div className="relative flex flex-col justify-center items-center">
          <div
            style={{
              color: COLORS.primary.navy,
              fontSize: FONT_SIZE.caption2,
              fontWeight: FONT_WEIGHT.caption2,
            }}
          >
            오늘의 MON시리즈를 다 읽었어요!
          </div>
          <div
            className="px-5 py-3.5 rounded-[30px] text-white text-center cursor-pointer"
            style={{
              backgroundColor: COLORS.primary.navy,
              fontSize: FONT_SIZE.subtitle2,
              fontWeight: FONT_WEIGHT.subtitle2,
            }}
            onClick={onClick}
          >
            💡 학습 완료했어요
          </div>
        </div>
      )}
      {/* 퀴즈 제출 버튼 */}
      {type === "quiz_submit" && (
        <div className="relative flex flex-col justify-center items-center">
          <div
            style={{
              color: COLORS.primary.navy,
              fontSize: FONT_SIZE.caption2,
              fontWeight: FONT_WEIGHT.caption2,
            }}
          >
            오늘의 MOM퀴즈를
          </div>
          <div
            className="px-5 py-3.5 rounded-[30px] text-white text-center cursor-pointer"
            style={{
              backgroundColor: COLORS.primary.navy,
              fontSize: FONT_SIZE.subtitle2,
              fontWeight: FONT_WEIGHT.subtitle2,
            }}
            onClick={onClick}
          >
            ✍🏻 다 풀었어요 !
          </div>
        </div>
      )}
      {/* MONDAY 완료 버튼 */}
      {type === "monday_complete" && (
        <div className="relative flex flex-col justify-center items-center">
          <div
            style={{
              color: COLORS.primary.mint,
              fontSize: FONT_SIZE.caption2,
              fontWeight: FONT_WEIGHT.caption2,
            }}
          >
            MON퀴즈까지 완료했어요!
          </div>
          <div
            className="px-5 py-3.5 rounded-[30px] text-white text-center cursor-pointer"
            style={{
              backgroundColor: COLORS.primary.mint,
              fontSize: FONT_SIZE.subtitle2,
              fontWeight: FONT_WEIGHT.subtitle2,
            }}
            onClick={onClick}
          >
            오늘의 MON+DAY 완료
          </div>
        </div>
      )}
      {/* 시리즈 다음 파트 버튼 */}
      {type === "series_next" && (
        <div
          className="px-4 py-2.5 gap-[5px] rounded-2xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] text-white text-center cursor-pointer relative flex justify-center items-center"
          style={{ backgroundColor: COLORS.primary.mint }}
          onClick={onClick}
        >
          <Image
            src="/icons/MonSeries_more.svg"
            alt="->"
            width={15}
            height={15}
          />
          <div
            style={{
              color: COLORS.series.deepGreen,
              fontSize: FONT_SIZE.caption1,
              fontWeight: FONT_WEIGHT.caption1,
            }}
          >
            시리즈 이어보기
          </div>
        </div>
      )}
    </>
  );
}
