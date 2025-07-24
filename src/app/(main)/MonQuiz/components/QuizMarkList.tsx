"use client";

import { useState, useEffect } from "react";
import QuizMarkItem from "./QuizMarkItem";
import CommonBtn from "@/components/shared/CommonBtn";
import { QuizMark } from "@/types/monQuiz";

export default function QuizList() {
  const [quizMarks, setQuizMarks] = useState<QuizMark[]>([]);
  const [selectedChoices, setSelectedChoices] = useState<{
    [key: number]: string | null;
  }>({});

  useEffect(() => {
    // MonQuiz 정답 확인 후  api 로직 구현
    setQuizMarks([
      {
        id: 1,
        type: "word",
        question: "인플레이션은 무엇인가요?",
        choices: ["물가 상승", "물가 하락", "경제 안정"],
        answer: "물가 상승",
        selectedAnswer: "물가 상승",
        isCorrect: true,
        marking:
          "물가가 오르는 게 인플레이션이에요! 용돈으로 살 수 있는 과자 수가 줄어드는 거죠.",
      },
      {
        id: 2,
        type: "news",
        question: "디플레이션의 특징은 무엇인가요?",
        choices: ["물가 상승", "물가 하락", "경제 성장"],
        answer: "물가 하락",
        selectedAnswer: "경제 성장",
        isCorrect: false,
        marking:
          "물가가 내려가는 게 디플레이션이에요! 용돈으로 살 수 있는 과자 수가 많아져요.",
      },
    ]);
  }, []);

  const handleFinishClick = () => {
    // Mon 퀴즈 채점 확인 완료 api 로직 구현
    console.log("오늘 Mon+DAY 학습 완료");
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
