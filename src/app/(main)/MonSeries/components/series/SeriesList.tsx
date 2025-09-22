"use client";

import { useState, useEffect } from "react";
import SeriesItem from "./SeriesItem";
import { Series } from "@/types/monSeries";

export default function SeriesList() {
  const [series, setSeries] = useState<Series[]>();

  useEffect(() => {
    // series 내용 가져오기 api 로직
    setSeries([
      {
        id: 1,
        keyword: "정치",
        title: "트럼프와 경제 정책",
        sub_title: "트럼프의 경제 정책이 세계 경제에 미친 영향",
        parts: [
          {
            id: 1,
            isLearned: true,
            part_title: "2016년: 대선 승리",
            part_sub_title: "트럼프의 경제 공약과 당선 배경",
            part_study: {
              part_category: ["코로나19", "백신", "팬데믹"],
              summary:
                "관세는 다른 나라에서 수입되는 물건에 부과하는 세금으로, 국내 산업 보호 및 무역 수지를 위해 사용돼요.",
              life_example:
                "중국에서 만든 1,000달러짜리 전자제품에 25%의 관세가 부과되면, 미국에 수입될 때 250달러의 세금이 추가되어 최소 1,250달러의 가격이 돼요. 이렇게 되면 미국 소비자들은 더 비싼 가격을 지불해야 해요.",
              useful_terms:
                "무역 적자: 수출보다 수입이 많을 때 발생하는 상황\nWTO(세계 무역 기구): 무역 규칙을 관리하고 분쟁을 해결하는 국제기구",
              body: `관세는 왜 부과할까요?
- 국내 산업 보호
- 정부 수입 확보
- 무역 불균형 해소
- 정치적 압력 수단

트럼프와 관세
도널드 트럼프 대통령은 “미국 우선주의(America First)” 정책에 따라 중국산 제품에 최대 25%의 관세를 부과했어요.
- 무역 적자 줄이기
- 중국의 불공정 무역 관행 견제
- 미국 제조업 일자리 보호

관세의 영향
[긍정적 영향]
- 국내 산업 보호
- 정부 세수 증가
- 무역 협상 지렛대

[부정적 영향]
- 소비자 가격 상승
- 보복 관세
- 글로벌 공급망 혼란
`,
            },
          },
          {
            id: 2,
            isLearned: false,
            part_title: "2018년: 관세 인상",
            part_sub_title: "중국 제품에 대한 관세 인상과 무역 전쟁의 시작",
            part_study: {
              part_category: ["코로나19", "백신", "팬데믹"],
              summary:
                "관세는 다른 나라에서 수입되는 물건에 부과하는 세금으로, 국내 산업 보호 및 무역 수지를 위해 사용돼요.",
              life_example:
                "중국에서 만든 1,000달러짜리 전자제품에 25%의 관세가 부과되면, 미국에 수입될 때 250달러의 세금이 추가되어 최소 1,250달러의 가격이 돼요. 이렇게 되면 미국 소비자들은 더 비싼 가격을 지불해야 해요.",
              useful_terms:
                "무역 적자: 수출보다 수입이 많을 때 발생하는 상황\nWTO(세계 무역 기구): 무역 규칙을 관리하고 분쟁을 해결하는 국제기구",
              body: `관세는 왜 부과할까요?
- 국내 산업 보호
- 정부 수입 확보
- 무역 불균형 해소
- 정치적 압력 수단

트럼프와 관세
도널드 트럼프 대통령은 “미국 우선주의(America First)” 정책에 따라 중국산 제품에 최대 25%의 관세를 부과했어요.
- 무역 적자 줄이기
- 중국의 불공정 무역 관행 견제
- 미국 제조업 일자리 보호

관세의 영향
[긍정적 영향]
- 국내 산업 보호
- 정부 세수 증가
- 무역 협상 지렛대

[부정적 영향]
- 소비자 가격 상승
- 보복 관세
- 글로벌 공급망 혼란
`,
            },
          },
          {
            id: 3,
            isLearned: false,
            part_title: "2020년: 코로나19와 경제 대응",
            part_sub_title: "팬데믹 상황에서의 경제 정책과 영향",
            part_study: {
              part_category: ["코로나19", "백신", "팬데믹"],
              summary:
                "관세는 다른 나라에서 수입되는 물건에 부과하는 세금으로, 국내 산업 보호 및 무역 수지를 위해 사용돼요.",
              life_example:
                "중국에서 만든 1,000달러짜리 전자제품에 25%의 관세가 부과되면, 미국에 수입될 때 250달러의 세금이 추가되어 최소 1,250달러의 가격이 돼요. 이렇게 되면 미국 소비자들은 더 비싼 가격을 지불해야 해요.",
              useful_terms:
                "무역 적자: 수출보다 수입이 많을 때 발생하는 상황\nWTO(세계 무역 기구): 무역 규칙을 관리하고 분쟁을 해결하는 국제기구",
              body: `관세는 왜 부과할까요?
- 국내 산업 보호
- 정부 수입 확보
- 무역 불균형 해소
- 정치적 압력 수단

트럼프와 관세
도널드 트럼프 대통령은 “미국 우선주의(America First)” 정책에 따라 중국산 제품에 최대 25%의 관세를 부과했어요.
- 무역 적자 줄이기
- 중국의 불공정 무역 관행 견제
- 미국 제조업 일자리 보호

관세의 영향
[긍정적 영향]
- 국내 산업 보호
- 정부 세수 증가
- 무역 협상 지렛대

[부정적 영향]
- 소비자 가격 상승
- 보복 관세
- 글로벌 공급망 혼란
`,
            },
          },
        ],
      },
      // ...다른 시리즈도 동일하게 body를 string으로 작성
    ]);
  }, []);

  if (!series) return null;

  return (
    <div className="px-5 py-7 flex flex-col justify-center items-center gap-5">
      {series.map((item) => (
        <SeriesItem
          key={item.id}
          id={item.id}
          keyword={item.keyword}
          title={item.title}
          sub_title={item.sub_title}
          parts={item.parts}
        />
      ))}
    </div>
  );
}
