"use client";

import { useState, useEffect } from "react";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import Image from "next/image";
import WordBox from "@/components/ui/WordBox";
import { TrendingSeries } from "@/types/studentMain";

export default function TrendingSeriesDropdown() {
  const [seriesRank, setSeriesRank] = useState<TrendingSeries[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    setSeriesRank([
      { id: 1, keyword: "혁신기술" },
      { id: 2, keyword: "유통비용" },
      { id: 3, keyword: "물류" },
    ]);
  }, []);

  // 3초 마다 표시할 인기 시리즈 변경
  useEffect(() => {
    if (!seriesRank.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % seriesRank.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [seriesRank]);

  // 현재 표시할 시리즈
  const item = seriesRank[currentIndex];
  if (!item) return null;

  // Dropdown 오픈/클로즈
  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-col gap-2.5 select-none">
        <div
          onClick={handleDropdownClick}
          className="w-40 h-9 px-2.5 py-1.5 bg-white rounded-[20px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] inline-flex justify-start items-center gap-2.5 overflow-hidden cursor-pointer"
        >
          <WordBox
            p={"3px 10px"}
            bg={"rgba(255, 108, 108, 0.20)"}
            textColor={COLORS.series.error}
            font="caption1"
          >
            인기
          </WordBox>
          <div className="inline-flex justify-start items-center gap-[5px] ">
            <span
              style={{
                color: COLORS.sub.gray3,
                fontSize: FONT_SIZE.caption1,
                fontWeight: FONT_WEIGHT.caption1,
              }}
            >
              {item.id}
            </span>
            <span
              style={{
                minWidth: "55px",
                color: COLORS.sub.gray4,
                fontSize: FONT_SIZE.caption1,
                fontWeight: FONT_WEIGHT.caption1,
              }}
            >
              {item.keyword}
            </span>
          </div>
          <Image src="/icons/Dropdown.svg" alt="v" width={7} height={3.5} />
        </div>

        {isOpen && (
          <div
            className="w-40 p-2.5  rounded-2xl inline-flex flex-col justify-start items-start gap-[5px] cursor-pointer"
            style={{ background: COLORS.sub.gray1 }}
          >
            {seriesRank.map((series: TrendingSeries, index: number) => (
              <div
                className={`w-36 px-2.5 py-1.5 rounded-2xl flex justify-start items-start gap-2.5 overflow-hidden hover:bg-green-300/30 ${
                  series.id === item.id ? "bg-green-300/30" : "bg-white"
                }`}
              >
                <span
                  className="justify-start "
                  style={{
                    color: COLORS.sub.gray3,
                    fontSize: FONT_SIZE.caption1,
                    fontWeight: FONT_WEIGHT.caption1,
                  }}
                >
                  {series.id}
                </span>
                <span
                  className="justify-start text-Gray4"
                  style={{
                    color: COLORS.sub.gray4,
                    fontSize: FONT_SIZE.caption2,
                    fontWeight: FONT_WEIGHT.caption2,
                  }}
                >
                  {series.keyword}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
