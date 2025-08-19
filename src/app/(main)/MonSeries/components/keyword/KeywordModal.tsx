"use client";

import SelectSeries from "./SelectSeries";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { KeywordModalType } from "@/types/monSeries";

export default function KeywordModal({
  id,
  isYellow,
  keyword,
  explain,
  series,
  onClose,
}: KeywordModalType) {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full z-100 bg-black/25"
        onClick={onClose}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  px-10 pt-10 pb-7 bg-white rounded-[30px] inline-flex flex-col justify-start items-start gap-2.5">
          <div
            style={{
              color: COLORS.sub.black,
              fontSize: FONT_SIZE.subtitle1,
              fontWeight: FONT_WEIGHT.subtitle1,
            }}
          >
            {keyword}
          </div>
          <div
            className="mt-[-10px]"
            style={{
              color: COLORS.sub.black,
              fontSize: FONT_SIZE.body2,
              fontWeight: FONT_WEIGHT.body2,
            }}
          >
            {explain}
          </div>
          <div className="inline-flex flex-col gap-1 ">
            {series.map((item) => (
              <SelectSeries
                id={item.id}
                isYellow={isYellow}
                series_title={item.title}
                series_sub_title={item.sub_title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
