"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import PartItem from "./PartItem";
import { Series } from "@/types/monSeries";

export default function SeriesItem({
  id,
  keyword,
  title,
  sub_title,
  parts,
}: Series) {
  const series = { id, keyword, title, sub_title, parts };

  if (!parts || parts.length === 0) return null;

  return (
    <div className="w-[680px] px-10 pt-10 pb-7 bg-white rounded-[30px] flex flex-col gap-3.5">
      <div className="flex flex-col gap-0">
        <div
          style={{
            color: COLORS.sub.black,
            fontSize: FONT_SIZE.subtitle1,
            fontWeight: FONT_WEIGHT.subtitle1,
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: COLORS.sub.black,
            fontSize: FONT_SIZE.body2,
            fontWeight: FONT_WEIGHT.body2,
          }}
        >
          {sub_title}
        </div>
      </div>
      {parts.map((item) => (
        <PartItem
          key={item.id}
          id={item.id}
          title={item.title}
          subtitle={item.subtitle}
          series={series}
        />
      ))}
    </div>
  );
}
