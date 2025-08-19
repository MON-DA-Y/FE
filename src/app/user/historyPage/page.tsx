"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import HomeBtn from "./components/HomeBtn";
import Dropdown from "../components/Dropdown";
import WordHistory from "./components/WordHistory";
import NewsHistory from "./components/NewsHistory";
import SeriesHistory from "./components/SeriesHistory";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { Category } from "../../../../types/category";
import { Category_Label } from "../../../../constants/categoryLabel";

export default function HistoryPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "series";

  const [keywordFilter, setKeywordFilter] = useState<"all" | string>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "done" | "ongoing">(
    "all"
  );
  const [categoryFilter, setCategoryFilter] = useState<"all" | Category>("all");
  const [resultFilter, setResultFilter] = useState<
    "all" | "correct" | "incorrect"
  >("all");

  const label =
    {
      word: "단어",
      news: "뉴스",
      series: "시리즈",
    }[type] ?? "";

  let ContentComponent;
  switch (type) {
    case "word":
      ContentComponent = (
        <WordHistory
          categoryFilter={categoryFilter}
          resultFilter={resultFilter}
        />
      );
      break;
    case "news":
      ContentComponent = (
        <NewsHistory
          categoryFilter={categoryFilter}
          resultFilter={resultFilter}
        />
      );
      break;
    case "series":
      ContentComponent = (
        <SeriesHistory
          keywordFilter={keywordFilter}
          statusFilter={statusFilter}
        />
      );
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
        <div className="absolute top-35 left-190">
          {type === "series" ? (
            <div className="flex gap-4.5">
              <Dropdown
                type="keyword"
                onChange={(value) => {
                  if (value === "전체") {
                    setKeywordFilter("all");
                  } else {
                    setKeywordFilter(value as string);
                  }
                }}
              />
              <Dropdown
                type="status"
                onChange={(value) => {
                  setStatusFilter(
                    value === "학습중"
                      ? "ongoing"
                      : value === "완료"
                      ? "done"
                      : "all"
                  );
                }}
              />
            </div>
          ) : (
            <div className="flex gap-4.5">
              <Dropdown
                type="category"
                // 새로운 카테고리 추가에 대비해 Category_Label로 매핑
                onChange={(label) => {
                  if (label === "전체") {
                    setCategoryFilter("all");
                  } else {
                    const categoryEntry = Object.values(Category_Label).find(
                      (item) => item.label === label
                    );
                    if (categoryEntry)
                      setCategoryFilter(categoryEntry.value as Category);
                  }
                }}
              />
              <Dropdown
                type="result"
                onChange={(value) => {
                  setResultFilter(
                    value === "정답"
                      ? "correct"
                      : value === "오답"
                      ? "incorrect"
                      : "all"
                  );
                }}
              />
            </div>
          )}
        </div>
      </div>
      <main className="p-15">{ContentComponent}</main>
    </div>
  );
}
