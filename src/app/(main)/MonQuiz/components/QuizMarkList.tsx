"use client";

import { useState, useEffect } from "react";
import QuizMarkItem from "./QuizMarkItem";
import CommonBtn from "@/components/shared/CommonBtn";
import { QuizMark } from "@/types/monQuiz";
import { monQuizMarkApi } from "@/apis/monQuiz/monQuizMark";
import { useRouter } from "next/navigation";
import AssignLoading from "@/components/shared/AssignLoading";

export default function QuizList() {
  const router = useRouter();
  const [quizMarks, setQuizMarks] = useState<QuizMark[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTodayMonQuizMark = async () => {
      try {
        setIsLoading(true);
        const data = await monQuizMarkApi.getMonQuizMark();
        console.log("채점 조회: ", data);
        setQuizMarks(data);
      } catch (error) {
        console.error("오늘 monQuiz 채점 조회 실패: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodayMonQuizMark();
  }, []);

  const handleFinishClick = async () => {
    alert("오늘 MonQuiz 학습 완료 처리되었습니다!");
    router.push("/student");
  };

  if (isLoading) return <AssignLoading />;

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
