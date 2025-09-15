"use client";

import { useState, useEffect } from "react";
import QuizMarkItem from "./QuizMarkItem";
import CommonBtn from "@/components/shared/CommonBtn";
import { QuizMark } from "@/types/monQuiz";
import { monQuizMarkApi } from "@/apis/monQuiz/monQuizMark";
import { useRouter } from "next/navigation";

export default function QuizList() {
  const router = useRouter();
  const [quizMarks, setQuizMarks] = useState<QuizMark[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTodayMonQuizMark = async () => {
      try {
        setIsLoading(true);
        const data = await monQuizMarkApi.getMonQuizMark();
        setQuizMarks(data);
        router.push("/");
      } catch (error) {
        console.error("오늘 monQuiz 채점 조회 실패: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodayMonQuizMark();
  }, []);

  const handleFinishClick = async () => {
    try {
      setIsLoading(true);
      await monQuizMarkApi.postMonQuizDone();
      alert("오늘 MonQuiz 학습 완료 처리되었습니다!");
    } catch (error) {
      console.error("MonQuiz 학습 완료 처리 실패:", error);
      alert("학습 완료 처리 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="px-5 py-7 flex flex-col justify-center items-center gap-5">
        {quizMarks.map((item, index) => (
          <QuizMarkItem
            key={item.id}
            id={item.id}
            type={item.type}
            question={`Q${index + 1}. ${item.question}`}
            choices={item.choices}
            selectedAnswer={quizMarks[index].selectedAnswer}
            answer={quizMarks[index].answer}
            marking={item.marking}
            isCorrect={quizMarks[index].isCorrect}
            onClick={() => {}}
          />
        ))}
        <div className="">
          <CommonBtn type="monday_complete" onClick={handleFinishClick} />
        </div>
      </div>
    </>
  );
}
