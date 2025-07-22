"use client";

import { useState, useEffect } from "react";
import SeriesItem from "./SeriesItem";
import { SeriesItemProps } from "./SeriesItem";

export default function SeriesList() {
  const [series, setSeries] = useState<SeriesItemProps[]>();

  useEffect(() => {
    // series 내용 가져오기 api 로직
    setSeries([
      {
        id: 1,
        title: "트럼프와 경제 정책",
        sub_title: "트럼프의 경제 정책이 세계 경제에 미친 영향",
        parts: [
          {
            id: 1,
            isLearned: true,
            part_title: "2016년: 대선 승리",
            part_sub_title: "트럼프의 경제 공약과 당선 배경",
          },
          {
            id: 2,
            isLearned: false,
            part_title: "2018년: 관세 인상",
            part_sub_title: "중국 제품에 대한 관세 인상과 무역 전쟁의 시작",
          },
          {
            id: 3,
            isLearned: false,
            part_title: "2020년: 코로나19와 경제 대응",
            part_sub_title: "팬데믹 상황에서의 경제 정책과 영향",
          },
        ],
      },
      {
        id: 2,
        title: "금리와 세계 경제",
        sub_title: "금리 변화가 글로벌 경제에 끼친 영향",
        parts: [
          {
            id: 1,
            isLearned: true,
            part_title: "2008년: 글로벌 금융위기와 제로금리",
            part_sub_title: "미국 연준의 기준금리 인하와 세계 시장의 반응",
          },
          {
            id: 2,
            isLearned: false,
            part_title: "2022년: 인플레이션과 금리 인상",
            part_sub_title: "급격한 금리 인상이 소비와 투자에 미친 영향",
          },
        ],
      },
      {
        id: 3,
        title: "중앙은행의 판단",
        sub_title: "위기 속 통화정책의 선택과 그 파급효과",
        parts: [
          {
            id: 1,
            isLearned: true,
            part_title: "2011년: 유럽 재정위기",
            part_sub_title: "ECB의 금리 정책과 유로존 안정화 시도",
          },
          {
            id: 2,
            isLearned: false,
            part_title: "2020년: 팬데믹과 유동성 공급",
            part_sub_title: "각국 중앙은행의 유례없는 통화 완화 조치",
          },
        ],
      },
    ]);
  }, []);

  if (!series) return null;

  return (
    <div className="px-5 py-7 flex flex-col justify-center items-center gap-5">
      {series.map((item) => (
        <SeriesItem
          key={item.id}
          id={item.id}
          title={item.title}
          sub_title={item.sub_title}
          parts={item.parts}
        />
      ))}
    </div>
  );
}
