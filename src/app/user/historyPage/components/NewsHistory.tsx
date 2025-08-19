"use client";

import { useState, useEffect } from "react";
import { News, getNewsHistory } from "@/apis/newsHistory";
import NewsCard from "./NewsCard";
import { Category } from "../../../../../types/category";

interface NewsHistoryProps {
  categoryFilter: Category | "all";
  resultFilter: "all" | "correct" | "incorrect";
}

export default function NewsHistory({
  categoryFilter,
  resultFilter,
}: NewsHistoryProps) {
  const studentId = 1;
  const week = 3;
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    getNewsHistory(studentId, week)
      .then((data) => setNews(data.newsList))
      .catch((err) => console.error("뉴스 히스토리 API 실패:", err));
  }, [studentId, week]);

  const filteredNews = news.filter((news) => {
    // 카테고리 필터
    if (categoryFilter !== "all" && news.category !== categoryFilter)
      return false;

    // 정답/오답 필터
    if (resultFilter === "correct" && !news.isCorrect) return false;
    if (resultFilter === "incorrect" && news.isCorrect) return false;

    return true;
  });

  return (
    <div className="flex flex-wrap gap-x-10 gap-y-15 p-2">
      {filteredNews.map((news) => (
        <NewsCard
          key={news.newsId}
          category={news.category}
          title={news.title}
          imgUrl={news.imgUrl}
          isCorrect={news.isCorrect}
        />
      ))}
    </div>
  );
}
