"use client";

import { useSearchParams } from "next/navigation";
import HomeBtn from "./components/HomeBtn";
import Dropdown from "../components/Dropdown";
import WordHistory from "./components/WordHistory";
import NewsHistory from "./components/NewsHistory";
import SeriesHistory from "./components/SeriesHistory";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

export default function HistoryPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "series";

  const label =
    {
      word: "단어",
      news: "뉴스",
      series: "시리즈",
    }[type] ?? "";

  let ContentComponent;
  switch (type) {
    case "word":
      ContentComponent = <WordHistory />;
      break;
    case "news":
      ContentComponent = <NewsHistory />;
      break;
    case "series":
      ContentComponent = <SeriesHistory />;
      break;
    default:
      ContentComponent = <div>잘못된 타입입니다.</div>;
  }

  return (
    <div className="relative w-full px-13 py-7">
      <HomeBtn />
      <div className="flex flex-col items-stretch w-[900px] pt-10 px-12">
        <div
          className="flex"
          style={{
            fontSize: FONT_SIZE.headline,
            fontWeight: FONT_WEIGHT.headline,
          }}
        >
          <span style={{ color: COLORS.primary.mint }}>🗂️MON</span>
          <span style={{ color: COLORS.primary.navy }}>{label} 히스토리</span>
        </div>
        <div className="flex justify-end -mt-3">
          {type === "series" ? (
            <div className="flex gap-4.5">
              <Dropdown type="keyword" />
              <Dropdown type="status" />
            </div>
          ) : (
            <div className="flex gap-4.5">
              <Dropdown type="category" />
              <Dropdown type="result" />
            </div>
          )}
        </div>
      </div>
      <main className="p-12">{ContentComponent}</main>
    </div>
  );
}
