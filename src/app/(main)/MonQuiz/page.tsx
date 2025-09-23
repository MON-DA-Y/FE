"use client";

import { useState, useEffect } from "react";
import HomeBtn from "@/components/shared/HomeBtn";
import Image from "next/image";
import QuizList from "./components/QuizList";
import QuizMarkList from "./components/QuizMarkList";
import { COLORS } from "@/styles/theme/tokens";
import { monQuizApi } from "@/apis/monQuiz/monQuiz";
import AssignLoading from "@/components/shared/AssignLoading";

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect(() => {
    const getStudentSubmit = async () => {
      try {
        setIsLoading(true);
        const data = await monQuizApi.getStudentSubmit();
        // console.log("제출여부:", data);
        setIsSubmit(data.submit);
      } catch (error) {
        console.error("monQuiz 제출 여부 조회 실패:", error);
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };

    getStudentSubmit();
  }, []);

  if (isLoading) return <AssignLoading />;

  return (
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
          <QuizList onSubmitSuccess={() => setIsSubmit(true)} />
        ) : (
          <QuizMarkList />
        )}
      </div>
    </div>
  );
}
