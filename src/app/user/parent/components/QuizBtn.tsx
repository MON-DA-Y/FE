import { QuizItemProps } from "@/app/(main)/MonQuiz/components/QuizItem";
import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import Image from "next/image";

interface QuizBtnProps {
  day: string;
  score: number;
}

export default function QuizBtn({ day, score }: QuizBtnProps) {
  const date = new Date(day);
  const month = date.getMonth() + 1;
  const d = date.getDate();

  return (
    <div className="flex whitespace-nowrap">
      <div
        className="flex w-[359px] h-[40px] rounded-[10px] items-center px-7.5"
        style={{
          boxShadow: SHADOW.interactive,
          fontSize: FONT_SIZE.body1,
          fontWeight: FONT_WEIGHT.body1,
        }}
      >
        {`${month}월 ${d}일`}
        <div
          className="flex absolute justify-center items-center w-26 h-6 left-48 rounded-[30px]"
          style={{
            backgroundColor: COLORS.primary.mint,
            fontSize: FONT_SIZE.body2,
            fontWeight: FONT_WEIGHT.body2,
            color: COLORS.sub.white,
          }}
        >
          점수 : {score}점
        </div>
        <div className="pl-6 absolute left-73 cursor-pointer">
          <Image
            src="/icons/Arrow_right.svg"
            alt="arrow"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}
