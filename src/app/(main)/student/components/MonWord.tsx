"use client";

import { useState, useEffect } from "react";
import { COLORS } from "@/styles/theme/tokens";
import Image from "next/image";
import WordBox from "@components/ui/WordBox";
import { useRouter } from "next/navigation";
import { stdMainApi } from "@/apis/stdMain";

export default function MonWord() {
  const [monWords, setMonWords] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchTodayMonQuizMark = async () => {
      try {
        setIsLoading(true);
        const data = await stdMainApi.getStdMonWord();
        setMonWords(data);
      } catch (error) {
        console.error("오늘 monQuiz 채점 조회 실패: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodayMonQuizMark();
  }, []);

  return (
    <>
      <div
        className="w-[534px] h-28 px-6 mt-[15px] ml-[-18px] flex items-center gap-2.5 rounded-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"
        style={{ backgroundColor: COLORS.primary.navy }}
      >
        <Image src="/icons/MonWord.svg" alt="Mon단어" width={181} height={61} />
        <div className="w-72 relative overflow-hidden items-center">
          <div
            className="overflow-x-auto px-2 flex justify-start
             items-center gap-5"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {monWords.map((word, index) => (
              <div
                className="cursor-pointer"
                onClick={() => router.push("/MonWord")}
              >
                <WordBox
                  key={index}
                  p={"10px 20px"}
                  bg={"white"}
                  textColor={`${COLORS.primary.navy}`}
                  font={"body1"}
                >
                  {word}
                </WordBox>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
