import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import Image from "next/image";

export default function QuizBox() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

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
        {`${month}월 ${day}일`}
        <div
          className="flex justify-center items-center w-26 h-6 ml-20 rounded-[30px]"
          style={{
            backgroundColor: COLORS.primary.mint,
            fontSize: FONT_SIZE.body2,
            fontWeight: FONT_WEIGHT.body2,
            color: COLORS.sub.white,
          }}
        >
          점수 : 80점
        </div>
        <div className="pl-6">
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
