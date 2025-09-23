"use client";

import { useState } from "react";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { useRouter } from "next/navigation";
import KeywordModal from "./KeywordModal";
import { Keyword } from "@/types/monSeries";

export default function KeywordItem({
  index,
  id,
  keyword,
  explain,
  series,
}: Keyword) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // 노랑, 2개 파랑/2개 노랑 반복 패턴
  const isYellow = index === 0 ? true : Math.floor(((index - 1) % 4) / 2) === 1;

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        <KeywordModal
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
