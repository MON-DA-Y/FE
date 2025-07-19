"use Client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

interface TodayLearningRate {
  learn_word: number;
  today_word: number;
  learn_news: number;
  today_news: number;
  learn_series: number;
  today_series: number;
}

export default function TodayLearningRate() {
  const [todayLearn, setTodayLearn] = useState<TodayLearningRate | null>(null);
  const [wordBarWidth, setWordBarWidth] = useState(0);
  const [newsBarWidth, setNewsBarWidth] = useState(0);

  const barFunc = (learn: number, today: number, width: number): number => {
    if (today === 0) return 0;
    return (learn / today) * width;
  };

  useEffect(() => {
    // 오늘의 학습률 더미데이터
    setTodayLearn({
      learn_word: 4,
      today_word: 10,
      learn_news: 1,
      today_news: 1,
      learn_series: 0,
      today_series: 2,
    });
  }, []);

  useEffect(() => {
    if (todayLearn) {
      const wordWidth = barFunc(
        todayLearn.learn_word,
        todayLearn.today_word,
        256
      );

      const newsWidth = barFunc(
        todayLearn.learn_news,
        todayLearn.today_news,
        256
      );

      setTimeout(() => {
        setWordBarWidth(wordWidth);
        setNewsBarWidth(newsWidth);
      }, 100);
    }
  }, [todayLearn]);

  if (!todayLearn) return null;

  return (
    <div className="mt-2 p-6 bg-White rounded-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-start items-start gap-3">
      <div className="w-80 flex flex-col justify-start items-start gap-3.5">
        <div
          style={{
            fontSize: FONT_SIZE.subtitle2,
            fontWeight: FONT_WEIGHT.subtitle2,
          }}
        >
          <Mint>오늘의 MON+</Mint>
          <Navy>DAY 학습률</Navy>
        </div>
        <div className="w-80 flex flex-col justify-start items-start gap-3.5">
          {/* 단어 */}
          <div className="relative flex w-80 items-center">
            <div className="w-10 whitespace-nowrap">단어</div>
            <div
              className="absolute left-10 w-64 h-3 rounded-[30px]"
              style={{ background: COLORS.sub.gray2 }}
            />
            <div
              className="absolute left-10 bg-green-300 rounded-[30px] h-3 transition-all duration-1000 ease-in-out"
              style={{
                width: `${wordBarWidth}px`,
              }}
            />
          </div>
          {/* 뉴스 */}
          <div className="relative flex w-80 items-center">
            <div className="w-10">뉴스</div>
            <div
              className="absolute left-10 w-64 h-3 rounded-[30px]"
              style={{ background: COLORS.sub.gray2 }}
            />
            <div
              className="absolute left-10 bg-green-300 rounded-[30px] h-3 transition-all duration-1000 ease-in-out"
              style={{
                width: `${newsBarWidth}px`,
              }}
            />
          </div>
          {/* 시리즈 */}
          <div className="inline-flex justify-start items-start gap-3.5">
            <div className="flex justify-start items-center gap-4">
              <div>시리즈</div>
            </div>
            <div className="justify-start">
              <span style={{ color: COLORS.primary.mint }}>
                {todayLearn.learn_series}시리즈
              </span>
              <span style={{ color: COLORS.sub.gray2 }}>
                / {todayLearn.today_series}시리즈
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Mint = styled.span`
  color: ${COLORS.primary.mint};
`;

const Navy = styled.span`
  color: ${COLORS.primary.navy};
`;
