"use client";

import WordBox from "@/components/ui/WordBox";
import Choice from "@/components/ui/Choice";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

export interface QuizItemProps {
  id: number;
  type: "word" | "news";
  question: string;
  choices: string[];
  selectedChoice: string | null;
  onClick: (choice: string) => void;
}

export default function QuizItem({
  id,
  type,
  question,
  choices,
  selectedChoice,
  onClick,
}: QuizItemProps) {
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
              isSelected={item === selectedChoice}
              onClick={() => onClick(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
