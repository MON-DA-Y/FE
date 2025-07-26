"use client";

import HomeBtn from "@/components/shared/HomeBtn";
import Image from "next/image";
import SeriesPartBar from "./SeriesPartBar";
import WordBox from "@/components/ui/WordBox";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

import { useSeriesStore } from "@/store/useSeriesStore";

export default function Header() {
  const series = useSeriesStore((state) => state.currentSeries);
  const part = useSeriesStore((state) => state.currentPart);

  if (!series || !part) {
    return <p>잘못된 접근입니다.</p>;
  }

  return (
    <>
      <div className="flex flex-col gap-32">
        <HomeBtn />
        <div className="flex flex-col gap-3">
          <Image
            src="/icons/MonSeries_header.svg"
            alt="Mon시리즈"
            width={216}
            height={85}
          />

          <WordBox
            p={"7px 15px"}
            bg={`${COLORS.primary.mint}`}
            textColor={`${COLORS.sub.white}`}
            font={"subtitle2"}
          >
            #{series.keyword}
          </WordBox>
          <div className="mt-[-25px]">
            <SeriesPartBar
              part_title={part.part_title}
              total={series.parts.length}
              current={part.id}
            />
          </div>
        </div>
      </div>
    </>
  );
}
