"use client";

import HomeBtn from "@/components/shared/HomeBtn";
import Image from "next/image";
import SeriesPartBar from "./SeriesPartBar";
import WordBox from "@/components/ui/WordBox";
import { COLORS } from "@/styles/theme/tokens";
import { SeriesStudyProps } from "@/types/monSeries";

export default function Header({ series, part }: SeriesStudyProps) {
  if (!series || !part) {
    return <div className="flex flex-col gap-32">잘못된 접근입니다.</div>;
  }
  const currentIndex = series.parts.findIndex((p) => p.id === part.id);

  return (
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
            part_title={part.title}
            total={series.parts.length}
            current={currentIndex + 1}
          />
        </div>
      </div>
    </div>
  );
}
