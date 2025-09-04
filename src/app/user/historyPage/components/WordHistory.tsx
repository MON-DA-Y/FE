"use client";

import { useSearchParams, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Word, getWordHistory } from "@/apis/wordHistory";
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
  const searchParams = useSearchParams();
  const params = useParams();
  const studentId = Number(params.studentId) || 123;
  const week = searchParams.get("week") === "이번주" ? "이번주" : "저번주";

  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    getWordHistory(studentId, week)
      .then((data) => setWords(data.words))
      .catch((err) => console.error("단어 히스토리 API 실패:", err));
  }, [studentId, week]);

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
          key={word.wordId}
          category={word.category}
          word={word.word}
          explain={word.explain}
          use={word.use}
        />
      ))}
    </div>
  );
}
