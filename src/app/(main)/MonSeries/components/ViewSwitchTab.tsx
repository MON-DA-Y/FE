"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { useState } from "react";
import { ViewSwitch } from "@/types/monSeries";

export default function ViewSwitchTab({ viewMode, onChangeView }: ViewSwitch) {
  const [view, setView] = useState<"series" | "keyword">(viewMode);

  const handleViewSwitch = (view: "series" | "keyword") => {
    onChangeView(view);
    setView(view);
  };

  return (
    <div
      className="w-[188px] h-[44px] rounded-2xl inline-flex justify-center items-center "
      style={{ background: COLORS.sub.gray2 }}
    >
      <button
        className="p-1.5 rounded-xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25) inline-flex justify-center items-center cursor-pointer"
        style={{
          color: view === "series" ? COLORS.sub.black : COLORS.sub.gray3,
          background: view === "series" ? COLORS.sub.white : COLORS.sub.gray2,
          fontSize: FONT_SIZE.caption1,
          fontWeight: FONT_WEIGHT.caption1,
        }}
        onClick={() => handleViewSwitch("series")}
      >
        목록으로 보기
      </button>
      <button
        className="p-1.5 rounded-xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25) inline-flex justify-center items-center cursor-pointer"
        style={{
          color: view === "keyword" ? COLORS.sub.black : COLORS.sub.gray3,
          background: view === "keyword" ? COLORS.sub.white : COLORS.sub.gray2,
          fontSize: FONT_SIZE.caption1,
          fontWeight: FONT_WEIGHT.caption1,
        }}
        onClick={() => handleViewSwitch("keyword")}
      >
        키워드로 보기
      </button>
    </div>
  );
}
