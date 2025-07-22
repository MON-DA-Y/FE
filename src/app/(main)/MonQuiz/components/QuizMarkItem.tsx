"use client";

import RedBox from "@/components/ui/RedBox";
import NavyBox from "@/components/ui/NavyBox";
import WordBox from "@/components/ui/WordBox";
import Choice from "@/components/ui/Choice";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

export interface QuizMarkItemProps {
  id: number;
  type: "word" | "news";
  question: string;
  choices: string[];
  selectedAnswer: string;
  answer: string;
  marking: string;
  isCorrect: boolean;
  onClick: (choice: string) => void;
}

export default function QuizMarkItem({
  id,
  type,
  question,
  choices,
  selectedAnswer,
  answer,
  marking,
  isCorrect,
  onClick,
}: QuizMarkItemProps) {
  return (
    <div className="w-[680px] px-10 pt-10 pb-7 bg-white rounded-[30px] flex flex-col gap-3.5">
      {/* 퀴즈 타입 (단어 / 뉴스)*/}
      <div className="inline-flex">
        <WordBox
          p={"5px 10px"}
          bg={`${COLORS.primary.mint}`}
          textColor={`${COLORS.sub.white}`}
          font={"body1"}
        >
          {type === "word" ? "MON단어 퀴즈" : "MON뉴스 퀴즈"}
        </WordBox>
      </div>

      {/* question */}
      <div className="flex flex-col gap-4" style={{ color: COLORS.sub.black }}>
        <div
          style={{
            fontSize: FONT_SIZE.body1,
            fontWeight: FONT_WEIGHT.body1,
          }}
        >
          {question}
        </div>

        {/* choice (answer) */}
        <div className="inline-flex flex-col justify-center items-start gap-1.5">
          {choices.map((item, index) => (
            <Choice
              key={index}
              text={`${index + 1}) ${item}`}
              isSelected={item === selectedAnswer}
              isCorrect={item === answer}
              onClick={() => onClick(item)}
            />
          ))}
        </div>

        {/* Marking */}
        {isCorrect ? (
          <RedBox title="오답">{marking}</RedBox>
        ) : (
          <NavyBox title="정답">{marking}</NavyBox>
        )}
      </div>
    </div>
  );
}
