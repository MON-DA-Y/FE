"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { News, getNewsHistory, getParentNewsHistory } from "@/apis/newsHistory";
import NewsCard from "./NewsCard";
import { Category } from "@/types/category";

interface NewsHistoryProps {
  categoryFilter: Category | "all";
  resultFilter: "all" | "correct" | "incorrect";
}

export default function NewsHistory({
  categoryFilter,
  resultFilter,
}: NewsHistoryProps) {
  const params = useParams();
  const role = params.role as "student" | "parent";
  const week = params.week === "이번주" ? "이번주" : "저번주";

  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data =
          role === "parent"
            ? await getParentNewsHistory(week)
            : await getNewsHistory(week);
        setNews(data.newsList);
      } catch (err) {
        console.error("뉴스 히스토리 API 실패:", err);
      }
    };
    fetchData();
  }, [week, role]);

  const filteredNews = news.filter((news) => {
    if (categoryFilter !== "all" && news.category !== categoryFilter)
      return false;
    if (resultFilter === "correct" && !news.isCorrect) return false;
    if (resultFilter === "incorrect" && news.isCorrect) return false;
    return true;
  });

  return (
    <div className="flex flex-wrap gap-x-10 gap-y-15 p-2">
      {filteredNews.map((news) => (
        <NewsCard
          key={news.mnId}
          category={news.category}
          title={news.title}
          imgUrl={news.imgUrl}
          isCorrect={news.isCorrect}
        />
      ))}
    </div>
  );
}
