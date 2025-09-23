"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

interface ChoiceProps {
  text: string;
  isSelected: boolean;
  isCorrect?: boolean;
  onClick: () => void;
}

export default function Choice({
  text,
  isSelected,
  isCorrect,
  onClick,
}: ChoiceProps) {
  const colorFunc = (isSelected: boolean, isCorrect: boolean | undefined) => {
    // QuizItem에서 사용할 배경색
    // (isCorrect가 undefined일 때)
    if (isCorrect === undefined) return COLORS.sub.black;
    // QuizMarkItem에서 사용할 배경색
    // (isCorrect가 true / false 일 때)
    else if (isSelected || isCorrect) return COLORS.sub.white;
    else COLORS.sub.black;
  };

  const bgFunc = (isSelected: boolean, isCorrect: boolean | undefined) => {
    // QuizItem에서 사용할 배경색
    // (isCorrect가 undefined일 때)
    if (isCorrect === undefined)
      return isSelected ? COLORS.primary.mint : COLORS.sub.white;
    // QuizMarkItem에서 사용할 배경색
    // (isCorrect가 true / false 일 때)
    else if (isCorrect) return COLORS.primary.navy; // 정답
    else if (isSelected && !isCorrect) return COLORS.series.error; // 오답
    else return COLORS.sub.white;
  };

  return isCorrect === undefined ? (
    <div
      className={`px-[7px] py-[3px] rounded-[20px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] flex justify-center items-center gap-2.5 cursor-pointer
        hover::shadow-[0px_0px_10px_0px_${COLORS.primary.mint}]`}
      style={{
        color: colorFunc(isSelected, isCorrect),
        fontSize: FONT_SIZE.body2,
        fontWeight: isSelected ? FONT_WEIGHT.body1 : FONT_WEIGHT.body2,
        background: bgFunc(isSelected, isCorrect),
      }}
      onClick={onClick}
    >
      {text}
    </div>
  ) : (
    <>
      <div
        className={`px-[7px] py-[3px] rounded-[20px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] flex justify-center items-center gap-2.5 cursor-pointer
        hover::shadow-[0px_0px_10px_0px_${COLORS.primary.mint}]`}
        style={{
          color: colorFunc(isSelected, isCorrect),
          fontSize: FONT_SIZE.body2,
          fontWeight: isSelected ? FONT_WEIGHT.body1 : FONT_WEIGHT.body2,
          background: bgFunc(isSelected, isCorrect),
        }}
        onClick={onClick}
      >
        {text}
      </div>
    </>
  );
}
