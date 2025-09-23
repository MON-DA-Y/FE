"use client";

import { useState, useEffect } from "react";
import NavyBox from "@/components/ui/NavyBox";
import CommonBtn from "@/components/shared/CommonBtn";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { News } from "@/types/monNews";
import { monNewsApi } from "@/apis/monNews";
import { useRouter } from "next/navigation";

export default function NewsItem() {
  const router = useRouter();
  const [news, setNews] = useState<News>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTodayMonNews = async () => {
      try {
        setIsLoading(true);
        const data = await monNewsApi.getMonNews();
        setNews(data);
      } catch (error) {
        console.error("오늘의 monNews 조회 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodayMonNews();
  }, []);

  // Mon 뉴스 학습 완료 post
  const postMonNewsDone = async () => {
    try {
      setIsLoading(true);

      if (news) {
        await monNewsApi.postMonNews(news.id);
      }
      alert("오늘의 MonNews를 완료했어요!");
      router.push("/student");
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
      console.error("오늘의 monNews 완료 post 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFinishClick = () => {
    postMonNewsDone();
  };

  if (!news) return null;

  return (
    <div className="px-5 py-7 flex flex-col justify-center items-center gap-5">
      <div className="w-[680px] px-10 pt-10 pb-7 bg-white rounded-[30px] flex flex-col gap-5">
        {/* 단어 및 설명 */}
        <div
          className="flex flex-col gap-4"
          style={{ color: COLORS.sub.black }}
        >
          <div
            style={{
              fontSize: FONT_SIZE.subtitle2,
              fontWeight: FONT_WEIGHT.subtitle2,
            }}
          >
            {news.title}
          </div>
          <div
            style={{
              fontSize: FONT_SIZE.body2,
              fontWeight: FONT_WEIGHT.body2,
              whiteSpace: "pre-line",
            }}
          >
            {news.body}
          </div>
        </div>

        {/* 예문 (써먹기) */}
        <NavyBox title="한 줄 요약">{news.summary}</NavyBox>
      </div>
      {/* 학습 완료 버튼 */}
      <div className="">
        <CommonBtn
          type="finish"
          subText="오늘의 MON뉴스를 다 읽었어요!"
          onClick={handleFinishClick}
        />
      </div>
    </div>
  );
}
