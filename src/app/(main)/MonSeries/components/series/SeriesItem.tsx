"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import PartItem, { PartProps } from "./PartItem";

export interface SeriesItemProps {
  id: number;
  title: string;
  sub_title: string;
  parts: PartProps[];
}

export default function SeriesItem({
  title,
  sub_title,
  parts,
}: SeriesItemProps) {
  return (
    <>
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
            isLearned={item.isLearned}
            part_title={item.part_title}
            part_sub_title={item.part_sub_title}
          />
        ))}
      </div>
    </>
  );
}
