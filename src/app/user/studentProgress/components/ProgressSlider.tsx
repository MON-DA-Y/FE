// 주간 진도 slider
import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";

interface ProgressSliderProps {
  weekCompletionRate: number;
  strikeDay: number;
}

export default function ProgressSlider({
  weekCompletionRate,
  strikeDay,
}: ProgressSliderProps) {
  return (
    <div
      className="flex flex-col w-full px-9 py-7 rounded-[19px] gap-10"
      style={{
        backgroundColor: COLORS.primary.mint,
        fontSize: FONT_SIZE.subtitle2,
        fontWeight: FONT_WEIGHT.subtitle2,
      }}
    >
      <div
        className="relative w-56 h-8 bg-white rounded-[30px] px-6"
        style={{ boxShadow: SHADOW.interactive }}
      >
        현재 스트라이크
        <div
          className="absolute top-0 -right-7 w-15 h-8 rounded-[30px] text-center pl-2"
          style={{
            backgroundColor: COLORS.primary.navy,
            color: COLORS.sub.white,
          }}
        >
          {strikeDay}🔥
        </div>
      </div>

      <div
        className="relative h-7 rounded-[10px] ml-10 mr-10"
        style={{
          width: `(${weekCompletionRate})%`,
          backgroundColor: COLORS.sub.gray1,
        }}
      >
        <div
          className="absolute top-0 left-0 h-7 rounded-[10px]"
          style={{
            width: `${weekCompletionRate}%`,
            background: `linear-gradient(to right, #d4d4d8, ${COLORS.primary.navy})`,
          }}
        >
          <div
            className="absolute top-1/2 -translate-y-1/2 w-20 h-14 rounded-3xl flex items-center justify-center"
            style={{
              left: `calc(${weekCompletionRate}% - 40px)`,
              backgroundColor: COLORS.primary.navy,
              color: COLORS.sub.white,
            }}
          >
            {weekCompletionRate}%
          </div>
        </div>
      </div>
    </div>
  );
}
