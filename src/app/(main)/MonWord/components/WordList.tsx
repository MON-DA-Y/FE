"use client";

import { useState, useEffect } from "react";
import WordItem from "./WordItem";
import CommonBtn from "@/components/shared/CommonBtn";
import { Word } from "@/types/monWord";
import { monWordApi } from "@/apis/monWord";

export default function WordList() {
  const [words, setWords] = useState<Word[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // monWord 조회 API
    const fetchTodayMonWord = async () => {
      try {
        setIsLoading(true);
        const data = await monWordApi.getMonWord();
        console.log(data);
        setWords(data);
      } catch (error) {
        console.error("오늘의 monWord 조회 실패", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodayMonWord();
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
            onClick={handleFinishClick}
          />
        </div>
      </div>
    </>
  );
}
