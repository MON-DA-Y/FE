"use client";

import { useState, useEffect } from "react";
import KeywordItem from "./KeywordItem";
import { Keyword } from "@/types/monSeries";

export default function KeywordList() {
  const [keywords, setKeywords] = useState<Keyword[]>();

  useEffect(() => {
    setKeywords([
      {
        id: 1,
        keyword: "관세",
        explain: "나라에서 나라로 이동하는데 돈이 더 든다고?",
        series: [
          {
            id: 1,
            keyword: "관세",
            title: "트럼프와 경제 정책",
            sub_title: "트럼프의 경제 정책이 세계 경제에 미친 영향",
            parts: [],
          },
          {
            id: 2,
            keyword: "관세",
            title: "금리와 세계 경제",
            sub_title: "금리 변화가 글로벌 경제에 끼친 영향",
            parts: [],
          },
          {
            id: 3,
            keyword: "관세",
            title: "중앙은행의 판단",
            sub_title: "위기 속 통화정책의 선택과 그 파급효과",
            parts: [],
          },
        ],
      },
      {
        id: 2,
        keyword: "무역전쟁",
        explain: "국가 간 고나세와 무역 제한 조치의 충돌",
        series: [
          {
            id: 1,
            keyword: "무역전쟁",
            title: "트럼프와 경제 정책",
            sub_title: "트럼프의 경제 정책이 세계 경제에 미친 영향",
            parts: [],
          },
          {
            id: 2,
            keyword: "무역전쟁",
            title: "금리와 세계 경제",
            sub_title: "금리 변화가 글로벌 경제에 끼친 영향",
            parts: [],
          },
          {
            id: 3,
            keyword: "무역전쟁",
            title: "중앙은행의 판단",
            sub_title: "위기 속 통화정책의 선택과 그 파급효과",
            parts: [],
          },
        ],
      },
      {
        id: 3,
        keyword: "문화",
        explain: "트럼프의 당선의 영향으로 우리나라는 어떻게 될까?",
        series: [
          {
            id: 1,
            keyword: "문화",
            title: "트럼프와 경제 정책",
            sub_title: "트럼프의 경제 정책이 세계 경제에 미친 영향",
            parts: [],
          },
          {
            id: 2,
            keyword: "문화",
            title: "금리와 세계 경제",
            sub_title: "금리 변화가 글로벌 경제에 끼친 영향",
            parts: [],
          },
          {
            id: 3,
            keyword: "문화",
            title: "중앙은행의 판단",
            sub_title: "위기 속 통화정책의 선택과 그 파급효과",
            parts: [],
          },
        ],
      },
      {
        id: 4,
        keyword: "사회",
        explain: "국가 간 관세와 무역 제한 조치의 충돌",
        series: [
          {
            id: 1,
            keyword: "사회",
            title: "트럼프와 경제 정책",
            sub_title: "트럼프의 경제 정책이 세계 경제에 미친 영향",
            parts: [],
          },
          {
            id: 2,
            keyword: "사회",
            title: "금리와 세계 경제",
            sub_title: "금리 변화가 글로벌 경제에 끼친 영향",
            parts: [],
          },
          {
            id: 3,
            keyword: "사회",
            title: "중앙은행의 판단",
            sub_title: "위기 속 통화정책의 선택과 그 파급효과",
            parts: [],
          },
        ],
      },
      {
        id: 5,
        keyword: "은행",
        explain: "나라에서 나라로 이동하는데 돈이 더 든다고?",
        series: [
          {
            id: 1,
            keyword: "은행",
            title: "트럼프와 경제 정책",
            sub_title: "트럼프의 경제 정책이 세계 경제에 미친 영향",
            parts: [],
          },
          {
            id: 2,
            keyword: "은행",
            title: "금리와 세계 경제",
            sub_title: "금리 변화가 글로벌 경제에 끼친 영향",
            parts: [],
          },
          {
            id: 3,
            keyword: "은행",
            title: "중앙은행의 판단",
            sub_title: "위기 속 통화정책의 선택과 그 파급효과",
            parts: [],
          },
        ],
      },
      {
        id: 6,
        keyword: "정책",
        explain: "국가 간 관세와 무역 제한 조치의 충돌",
        series: [
          {
            id: 1,
            keyword: "정책",
            title: "트럼프와 경제 정책",
            sub_title: "트럼프의 경제 정책이 세계 경제에 미친 영향",
            parts: [],
          },
          {
            id: 2,
            keyword: "정책",
            title: "금리와 세계 경제",
            sub_title: "금리 변화가 글로벌 경제에 끼친 영향",
            parts: [],
          },
          {
            id: 3,
            keyword: "정책",
            title: "중앙은행의 판단",
            sub_title: "위기 속 통화정책의 선택과 그 파급효과",
            parts: [],
          },
        ],
      },
    ]);
  }, []);

  if (!keywords) return null;

  return (
    <>
      <div className="relative w-full justify-items-center">
        <div className="py-7 grid grid-cols-2 gap-x-10 gap-y-8">
          {keywords.map((item) => (
            <KeywordItem
              key={item.id}
              id={item.id}
              keyword={item.keyword}
              explain={item.explain}
              series={item.series}
            />
          ))}
        </div>
      </div>
    </>
  );
}
