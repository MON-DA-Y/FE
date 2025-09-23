"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Word, getWordHistory, getParentWordHistory } from "@/apis/wordHistory";
import { COLORS, SHADOW } from "@/styles/theme/tokens";
import WordItem from "./WordItem";
import { Category } from "@/types/category";

interface WordHistoryProps {
  categoryFilter: Category | "all";
  resultFilter: "all" | "correct" | "incorrect";
}

export default function WordHistory({
  categoryFilter,
  resultFilter,
}: WordHistoryProps) {
  const params = useParams();
  const role = params.role === "parent" ? "parent" : "student";
  const week = params.week === "저번주" ? "저번주" : "이번주";

  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data =
          role === "parent"
            ? await getParentWordHistory(week)
            : await getWordHistory(week);
        setWords(data.wordList);
      } catch (err) {
        console.error("뉴스 히스토리 API 실패:", err);
      }
    };
    fetchData();
  }, [week, role]);

  const filteredWords = words.filter((word) => {
    // 카테고리 필터
    if (categoryFilter !== "all" && word.category !== categoryFilter)
      return false;

    // 정답/오답 필터
    if (resultFilter === "correct" && !word.isCorrect) return false;
    if (resultFilter === "incorrect" && word.isCorrect) return false;
    return true;
  });

  return (
    <div
      className="w-full h-full flex flex-col justify-center rounded-[20px] px-6 pt-5 gap-2"
      style={{
        backgroundColor: COLORS.sub.white,
        boxShadow: SHADOW.interactive,
      }}
    >
      {filteredWords.map((word) => (
        <WordItem
          key={word.mwiId}
          category={word.category}
          word={word.word}
          explain={word.meaning}
          use={word.practice}
        />
      ))}
    </div>
  );
}
