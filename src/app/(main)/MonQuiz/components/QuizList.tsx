"use client";

import { useState, useEffect } from "react";
import QuizItem from "./QuizItem";
import CommonBtn from "@/components/shared/CommonBtn";
import { Quizzes } from "@/types/monQuiz";
import { selectedChoices } from "@/types/monQuiz";
import { monQuizApi } from "@/apis/monQuiz";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<Quizzes[]>([]);
  const [selectedChoices, setSelectedChoices] = useState<selectedChoices>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTodayMonQuiz = async () => {
      try {
        setIsLoading(true);
        const data = await monQuizApi.getMonQuiz();
        setQuizzes(data);
      } catch (error) {
        console.error("오늘의 monQuiz 조회 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodayMonQuiz();
  }, []);

  const handleChoiceSelect = (id: number, choice: string) => {
    setSelectedChoices((prevState) => ({
      ...prevState,
      [id]: choice,
    }));
  };

  const handleSubmitClick = async () => {
    if (
      confirm("하루에 한 번 퀴즈에 응시할 수 있습니다. 정말 제출하시겠습니까?")
    ) {
      try {
        setIsLoading(true);
        // console.log("오늘 MonQuiz 제출 완료");
        // console.log("선택된 답:", selectedChoices);
        await monQuizApi.postMonQuizSubmit(selectedChoices);
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <div className="px-5 py-7 flex flex-col justify-center items-center gap-5">
        {quizzes.map((item, index) => (
          <QuizItem
            key={item.id}
            id={item.id}
            type={item.type}
            question={`Q${index + 1}. ${item.question}`}
            choices={item.choices}
            selectedChoice={selectedChoices[item.id] || null}
            onClick={(choice) => handleChoiceSelect(item.id, choice)}
          />
        ))}
        <div className="">
          <CommonBtn type="quiz_submit" onClick={handleSubmitClick} />
        </div>
      </div>
    </>
  );
}
