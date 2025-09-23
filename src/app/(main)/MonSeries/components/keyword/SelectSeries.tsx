import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import Image from "next/image";
import { KeywordModalSelectSeries } from "@/types/monSeries";

export default function SelectSeries({
  id,
  isYellow,
  series_title,
  series_sub_title,
  onClick,
}: KeywordModalSelectSeries & { onClick?: () => void }) {
  return (
    <div
      className="inline-flex justify-start items-center gap-[10px] cursor-pointer p-2.5 rounded-2xl outline-1 outline-offset-[-1px]"
      style={{
        outlineColor: `${
          isYellow ? COLORS.series.yellow1 : COLORS.series.blue1
        }`,
      }}
      onClick={onClick}
    >
      <div className="flex justify-start items-center gap-[10px]">
        <Image
          src={`${
            isYellow ? "/icons/Series_yellow.svg" : "/icons/Series_blue.svg"
          }`}
          alt="Pin"
          width={30}
          height={30}
        />
        <div className="flex flex-col items-start">
          <div
            style={{
              color: COLORS.sub.black,
              fontSize: FONT_SIZE.body1,
              fontWeight: FONT_WEIGHT.body1,
            }}
          >
            {series_title}
          </div>
          <div
            className="mt-[-2px]"
            style={{
              color: COLORS.sub.gray3,
              fontSize: FONT_SIZE.caption2,
              fontWeight: FONT_WEIGHT.caption2,
            }}
          >
            {series_sub_title}
          </div>
        </div>
      </div>
    </div>
  );
}
