"use client";

import { FONT_SIZE, FONT_WEIGHT, SHADOW, COLORS } from "@/styles/theme/tokens";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Dropdown from "../components/Dropdown";
import ProgressSlider from "./components/ProgressSlider";
import ProgressItem from "./components/ProgressItem";

export default function StudentMyPage() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen overflow-auto px-13 py-5">
      <Image
        src="/icons/Home.svg"
        alt="home"
        width={40}
        height={40}
        onClick={() => router.push("/user/student")}
        className="cursor-pointer"
      />
      <div className="flex flex-col items-stretch justify-between w-[900px] pt-10 px-12">
        <div
          className="flex justify-between"
          style={{
            fontSize: FONT_SIZE.headline,
            fontWeight: FONT_WEIGHT.headline,
          }}
        >
          진도 현황
          <div className="flex gap-4.5">
            <Dropdown type="year" />
            <Dropdown type="month" />
            <Dropdown type="week" />
          </div>
        </div>
        {/*Slider*/}
        <div className="pt-10">
          <ProgressSlider />
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

        {/*api연결 후 ProgressList component 따로 생성*/}
        <ProgressItem />
        <ProgressItem />
      </div>
    </div>
  );
}
