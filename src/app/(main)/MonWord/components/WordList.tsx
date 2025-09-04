"use client";

import { useState, useEffect } from "react";
import WordItem from "./WordItem";
import CommonBtn from "@/components/shared/CommonBtn";
import { Word } from "@/types/monWord";
import { monWordApi } from "@/apis/monWord";
import { useRouter } from "next/navigation";

export default function WordList() {
  const router = useRouter();
  const [words, setWords] = useState<Word[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // monWord 조회 API
    const fetchTodayMonWord = async () => {
      try {
        setIsLoading(true);
        const data = await monWordApi.getMonWord();
        // console.log(data);
        setWords(data);
      } catch (error) {
        console.error("오늘의 monWord 조회 실패", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodayMonWord();
  }, []);

  // mon단어 학습 완료 post
  const postTodayMonWordDone = async () => {
    try {
      setIsLoading(true);
      const data = await monWordApi.postMonWordDone();
      // console.log(data);
    } catch (error) {
      alert(error);
      console.error("오늘의 monWord 학습 완료 post 실패", error);
    } finally {
      setIsLoading(false);
      alert("오늘의 MonWord를 완료했어요!");
      router.push("/");
    }
  };
  const handleFinishClick = () => {
    postTodayMonWordDone();
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
