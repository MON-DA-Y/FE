"use client";

import { useState, useEffect } from "react";
import QuizItem from "./QuizItem";
import CommonBtn from "@/components/shared/CommonBtn";

interface Quizzes {
  id: number;
  type: "word" | "news";
  question: string;
  choices: string[];
}

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<Quizzes[]>([]);
  const [selectedChoices, setSelectedChoices] = useState<{
    [key: number]: string | null;
  }>({});

  useEffect(() => {
    // MonQuiz 가져오기 api 로직 구현
    setQuizzes([
      {
        id: 1,
        type: "word",
        question: "인플레이션은 무엇인가요?",
        choices: ["물가 상승", "물가 하락", "경제 안정"],
      },
      {
        id: 2,
        type: "news",
        question: "디플레이션의 특징은 무엇인가요?",
        choices: ["물가 상승", "물가 하락", "경제 성장"],
      },
    ]);
  }, []);

  const handleChoiceSelect = (id: number, choice: string) => {
    setSelectedChoices((prevState) => ({
      ...prevState,
      [id]: choice,
    }));
  };

  const handleSubmitClick = () => {
    // Mon 퀴즈 제출 완료 api 로직 구현
    confirm("하루에 한 번 퀴즈에 응시할 수 있습니다. 정말 제출하시겠습니까?");
    console.log("오늘 MonQuiz 제출 완료");
    console.log("선택된 답:", selectedChoices);
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
