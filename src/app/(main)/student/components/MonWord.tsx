"use client";

import { useState, useEffect } from "react";
import { COLORS } from "@/styles/theme/tokens";
import Image from "next/image";
import WordBox from "@components/ui/WordBox";
import { useRouter } from "next/navigation";
import { stdMainApi } from "@/apis/stdMain";
import { monWordApi } from "@/apis/monWord";
import AssignLoading from "@/components/shared/AssignLoading";

export default function MonWord() {
  const [monWords, setMonWords] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // monWord 배정 후 monWord 조회
    const monWordAssign = async () => {
      try {
        setIsLoading(true);
        await monWordApi.postMonWordAssign();
        fetchStdMonWord();
      } catch (error: any) {
        console.error("오늘 monWord 배정 실패: ", error);
        const msg = error.response?.message || "서버와 연결할 수 없습니다.";
        alert(msg);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchStdMonWord = async () => {
      try {
        setIsLoading(true);
        const data = await stdMainApi.getStdMonWord();
        // console.log("학생 메인 monWord:", data);

        const words = data.map(
          (item: { id: number; word: string }) => item.word
        );

        setMonWords(words);
      } catch (error) {
        console.error("오늘 monWord 조회 실패: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    monWordAssign();
  }, []);

  if (isLoading) return <AssignLoading />;

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
                key={index}
                className="cursor-pointer"
                onClick={() => router.push("/MonWord")}
              >
                <WordBox
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
