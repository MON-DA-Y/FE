"use client";

import { useState } from "react";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { useRouter } from "next/navigation";
import SeriesSelectModal from "./SeriesSelectModal";

export interface KeywordItemProps {
  id: number;
  keyword: string;
  explain: string;
  series: Series[];
}

export interface Series {
  id: number;
  title: string;
  sub_title: string;
}

export default function KeywordItem({
  id,
  keyword,
  explain,
  series,
}: KeywordItemProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const isYellow = id % 4 === 1 || id % 4 === 0;

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        <SeriesSelectModal
          id={id}
          isYellow={isYellow}
          keyword={keyword}
          explain={explain}
          series={series}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <div
        className="w-64 h-32 px-7 py-5 rounded-[20px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] outline-4 outline-offset-[-4px] outline-Yellow2 inline-flex flex-col justify-start items-start gap-2.5 cursor-pointer"
        style={{
          outlineColor: isYellow ? COLORS.series.yellow2 : COLORS.series.blue2,
          background: isYellow ? COLORS.series.yellow1 : COLORS.series.blue1,
        }}
        onClick={openModal}
      >
        <div
          style={{
            fontSize: FONT_SIZE.subtitle1,
            fontWeight: FONT_WEIGHT.subtitle1,
          }}
        >
          #{keyword}
        </div>
        <div
          className="mt-[-10px]"
          style={{
            fontSize: FONT_SIZE.body2,
            fontWeight: FONT_WEIGHT.body2,
          }}
        >
          {explain}
        </div>
      </div>
    </>
  );
}
