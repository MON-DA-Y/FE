import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";

export default function ProgressSlider() {
  return (
    <div
      className="flex flex-col w-full px-9 py-7 rounded-[19px] gap-10"
      style={{
        backgroundColor: COLORS.primary.mint,
        fontSize: FONT_SIZE.subtitle2,
        fontWeight: FONT_WEIGHT.subtitle2,
      }}
    >
      <div className="flex flex-col gap-4">
        <div
          className="relative w-56 h-8 bg-white rounded-[30px] px-6"
          style={{ boxShadow: SHADOW.interactive }}
        >
          최대 스트라이크
          <div
            className="absolute top-0 right-0 w-15 h-8 rounded-[30px] text-center"
            style={{
              backgroundColor: COLORS.primary.navy,
              color: COLORS.sub.white,
            }}
          >
            3🏁
          </div>
        </div>
        <div
          className="relative w-56 h-8 bg-white rounded-[30px] px-6"
          style={{ boxShadow: SHADOW.interactive }}
        >
          현재 스트라이크
          <div
            className="absolute top-0 right-0 w-15 h-8 rounded-[30px] text-center"
            style={{
              backgroundColor: COLORS.primary.mint,
              color: COLORS.sub.white,
            }}
          >
            0🔥
          </div>
        </div>
      </div>

      <div
        className="relative w-[85%] h-7 rounded-[10px] ml-16"
        style={{ backgroundColor: COLORS.sub.gray1 }}
      >
        <div
          className="absolute top-0 left-0 w-[65%] h-7 rounded-[10px]"
          style={{
            background: `linear-gradient(to right, #d4d4d8, ${COLORS.primary.navy})`,
          }}
        >
          <div
            className="absolute top-1/2 -translate-y-1/2 mx-20 left-[65%] w-20 h-14 rounded-3xl flex items-center justify-center"
            style={{
              backgroundColor: COLORS.primary.navy,
              color: COLORS.sub.white,
            }}
          >
            65%
          </div>
        </div>
      </div>
    </div>
  );
}
