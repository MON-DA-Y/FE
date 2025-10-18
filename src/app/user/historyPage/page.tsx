"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import HomeBtn from "./components/HomeBtn";
import Dropdown from "../components/Dropdown";
import WordHistory from "./components/WordHistory";
import NewsHistory from "./components/NewsHistory";
import SeriesHistory from "./components/SeriesHistory";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { Category } from "@/types/category";
import { Category_Label } from "../../../../constants/categoryLabel";
import { getParentInfo } from "@/apis/parentInfo";

export default function HistoryPage() {
  const params = useParams();
  const role = params.role === "parent" ? "parent" : "student";
  const [studentId, setStudentId] = useState<string | null>(null);

  // query param에서 type 가져오기
  const [type, setType] = useState("series");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const typeParam = url.searchParams.get("type");
      if (typeParam) setType(typeParam);
    }
  }, []);

  const [keywordFilter, setKeywordFilter] = useState<"all" | string>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "done" | "ongoing">(
    "all"
  );
  const [categoryFilter, setCategoryFilter] = useState<"all" | Category>("all");
  const [resultFilter, setResultFilter] = useState<
    "all" | "correct" | "incorrect"
  >("all");

  // 부모일 때만 studentId 가져오기
  useEffect(() => {
    if (role === "parent") {
      const fetchStudentId = async () => {
        try {
          const parentInfo = await getParentInfo();
          if (parentInfo.studentIds && parentInfo.studentIds.length > 0) {
            setStudentId(parentInfo.studentIds[0]);
          }
        } catch (err) {
          console.error("부모 정보 불러오기 실패:", err);
        }
      };
      fetchStudentId();
    }
  }, [role]);

  const label =
    {
      word: "단어",
      news: "뉴스",
      series: "시리즈",
    }[type as "word" | "news" | "series"] ?? "";

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
          // statusFilter={statusFilter}
        />
      );
      break;
    default:
      ContentComponent = <div>잘못된 타입입니다.</div>;
  }

  return (
    <div className="relative w-full px-20 py-5">
      <HomeBtn role={role} studentId={role === "parent" ? studentId : ""} />
      <div className="flex flex-col items-stretch w-[900px] pt-10 pl-16">
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
        <div className="absolute top-35 left-215">
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
              {/* <Dropdown
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
              /> */}
            </div>
          )}
        </div>
      </div>
      <main className="p-15">{ContentComponent}</main>
    </div>
  );
}
