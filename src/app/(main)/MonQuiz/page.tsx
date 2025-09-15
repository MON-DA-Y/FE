"use client";

import { useState, useEffect } from "react";
import HomeBtn from "@/components/shared/HomeBtn";
import Image from "next/image";
import QuizList from "./components/QuizList";
import QuizMarkList from "./components/QuizMarkList";
import { COLORS } from "@/styles/theme/tokens";
import { monQuizApi } from "@/apis/monQuiz/monQuiz";

export default function page() {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect(() => {
    // 이 학생이 시험을 제출했었는지 데이터 가져오는 api 로직 구현
    const getStudentSubmit = async () => {
      try {
        const data = await monQuizApi.getStudentSubmit();
        console.log(data);
        setIsSubmit(data.submit);
      } catch (error) {
        console.error("monQuiz 제출 여부 조회 실패:", error);
        alert(error);
      }

      getStudentSubmit();
    };
  });
  return (
    <>
      <div className="relative flex justify-center gap-5">
        <div className="flex flex-col gap-32">
          <HomeBtn />
          <Image
            src="/icons/MonQuiz_header.svg"
            alt="Mon퀴즈"
            width={203}
            height={99}
          />
        </div>
        <div
          className="mt-[30px] w-[722px] h-[455px] rounded-[30px] overflow-scroll"
          style={{
            background: COLORS.sub.gray1,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {!isSubmit ? (
            <>
              <QuizList />
            </>
          ) : (
            <>
              <QuizMarkList />
            </>
          )}
        </div>
      </div>
    </>
  );
}
