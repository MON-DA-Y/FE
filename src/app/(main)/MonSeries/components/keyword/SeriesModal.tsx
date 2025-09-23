"use client";

import SeriesItem from "../series/SeriesItem";
import { Series } from "@/types/monSeries";

export default function SeriesModal({
  series,
  onClose,
}: {
  series: Series;
  onClose: () => void;
}) {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-[110] bg-black/25 flex justify-center items-center"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <SeriesItem
          id={series.id}
          keyword={series.keyword}
          title={series.title}
          sub_title={series.sub_title}
          parts={series.parts}
        />
      </div>
    </div>
  );
}
