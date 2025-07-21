"use client";

import { useState, useEffect } from "react";
import WordItem, { WordItemProps } from "./WordItem";
import CommonBtn from "@/components/shared/CommonBtn";

export default function WordList() {
  const [words, setWords] = useState<WordItemProps[]>([]);

  useEffect(() => {
    // Mon단어 더미데이터
    setWords([
      {
        id: 1,
        word: "인플레이션",
        explain: (
          <>
            인플레이션은 물건 값(물가)이 전반적으로 오르는 현상이에요. 같은
            돈으로 살 수 있는 게 점점 줄어드는 것과 같아요.
          </>
        ),
        use: "아니 작년에 500원이던 과자가 이제 800원이라고? 이거 완전 인플레이션이네!",
      },
      {
        id: 2,
        word: "디플레이션",
        explain: (
          <>인플레이션과 반대로 물건 값이 전반적으로 내려가는 현상이에요.</>
        ),
        use: "요즘 게임기 가격이 계속 떨어지던데? 이거 디플레이션 때문인가?",
      },
    ]);
  }, []);

  const handleFinishClick = () => {
    // Mon 단어 학습 완료 api 로직 구현
    console.log("오늘 Mon 단어 학습 완료");
  };

  return (
    <>
      <div className="px-5 py-7 flex flex-col justify-center items-center gap-5">
        {words.map((item, index) => (
          <WordItem
            key={index}
            id={item.id}
            word={item.word}
            explain={item.explain}
            use={item.use}
          />
        ))}
        <div className="">
          <CommonBtn
            type="finish"
            subText="오늘의 MON단어를 다 이해했어요!"
            onClick={() => handleFinishClick}
          />
        </div>
      </div>
    </>
  );
}
