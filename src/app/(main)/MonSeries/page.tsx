"use client";

import { useState, useEffect } from "react";
import HomeBtn from "@/components/shared/HomeBtn";
import Image from "next/image";
import ViewSwitchTab from "./components/ViewSwitchTab";
import SeriesList from "./components/series/SeriesList";
import KeywordList from "./components/keyword/KeywordList";
import { COLORS } from "@/styles/theme/tokens";

export default function page() {
  const [viewMode, setViewMode] = useState<"series" | "keyword">("series");

  return (
    <>
      <div className="relative flex justify-center gap-5">
        <div className="flex flex-col gap-32">
          <HomeBtn />
          <div className="flex flex-col gap-3">
            <Image
              src="/icons/MonSeries_header.svg"
              alt="Mon시리즈"
              width={216}
              height={85}
            />
            <ViewSwitchTab viewMode="series" onChangeView={setViewMode} />
          </div>
        </div>
        <div
          className="mt-[30px] w-[722px] h-[455px] rounded-[30px] overflow-scroll"
          style={{
            background: COLORS.sub.gray1,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {viewMode === "series" ? <SeriesList /> : <KeywordList />}
        </div>
      </div>
    </>
  );
}
