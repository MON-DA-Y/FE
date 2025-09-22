"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FONT_SIZE, FONT_WEIGHT, COLORS } from "@/styles/theme/tokens";
import Image from "next/image";
import ProgressSlider from "./components/ProgressSlider";
import ProgressItem from "./components/ProgressItem";
import { getProgress, ProgressResponse } from "@/apis/progress";

export default function StudentMyPage() {
  const router = useRouter();
  const [progress, setProgress] = useState<ProgressResponse | null>(null);

  const searchParams = useSearchParams();
  // 기본을 이번주로 수정
  const week = searchParams.get("week") === "저번주" ? "저번주" : "이번주";

  useEffect(() => {
    getProgress(week)
      .then((data) => setProgress(data))
      .catch((err) => console.error("진도 API 실패:", err));
  }, [week]);

  if (!progress) return <div>Loading...</div>;

  return (
    <div className="pl-15">
      <div className="relative w-full px-10 py-5">
        <Image
          src="/icons/Home.svg"
          alt="home"
          width={40}
          height={40}
          onClick={() => router.push("/user/student")}
          className="cursor-pointer"
        />
        <div className="flex flex-col items-stretch justify-between w-[900px] pt-10 px-5 pl-16">
          <div
            className="flex justify-between"
            style={{
              fontSize: FONT_SIZE.headline,
              fontWeight: FONT_WEIGHT.headline,
            }}
          >
            진도 현황
            {/* <div className="flex gap-4.5">
            <Dropdown type="year" />
            <Dropdown type="month" />
            <Dropdown type="week" />
          </div> */}
          </div>
          {/*Slider*/}
          <div className="pt-10">
            <ProgressSlider
              weekCompletionRate={progress.weekCompletionRate}
              strikeDay={progress.strikeDay || 0}
            />
          </div>
          {/*진도 현황*/}
          <div className="flex items-center pt-13">
            <div
              className="flex pl-19 gap-80"
              style={{
                fontSize: FONT_SIZE.subtitle1,
                fontWeight: FONT_WEIGHT.subtitle1,
              }}
            >
              <span>날짜</span> <span>학습 기록</span>
            </div>
            <div className="flex ml-13 mt-4 gap-12 whitespace-nowrap">
              <div
                className="flex items-center w-3 h-3 rounded-full"
                style={{
                  backgroundColor: COLORS.primary.mint,
                  color: COLORS.primary.mint,
                }}
              >
                <div className="ml-5">완료</div>
              </div>
              <div
                className="flex items-center w-3 h-3 rounded-full"
                style={{
                  backgroundColor: COLORS.series.yellow2,
                  color: COLORS.series.yellow2,
                }}
              >
                <div className="ml-5">진행중</div>
              </div>
              <div
                className="flex items-center w-3 h-3 rounded-full ml-3"
                style={{
                  backgroundColor: COLORS.series.error,
                  color: COLORS.series.error,
                }}
              >
                <div className="pl-5">미완료</div>
              </div>
            </div>
          </div>
          <div className="w-full mt-3 h-[1px] bg-black"></div>

          {progress.days.map((dayData) => (
            <ProgressItem key={dayData.day} days={dayData} />
          ))}
        </div>
      </div>
    </div>
  );
}
