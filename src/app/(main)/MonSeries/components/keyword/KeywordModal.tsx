"use client";

import { useState } from "react";
import SelectSeries from "./SelectSeries";
import SeriesModal from "./SeriesModal";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { KeywordModalType, Series } from "@/types/monSeries";

export default function KeywordModal({
  id,
  isYellow,
  keyword,
  explain,
  series,
  onClose,
}: KeywordModalType) {
  const [selectedSeries, setSelectedSeries] = useState<Series | null>(null);

  const handleSelectSeries = (seriesItem: Series) => {
    setSelectedSeries(seriesItem);
  };

  const handleCloseSeriesModal = () => {
    setSelectedSeries(null);
  };

  return (
    <>
      <div
        className="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-[100] bg-black/25 flex justify-center items-center"
        onClick={onClose}
      >
        <div
          className="px-10 pt-10 pb-7 bg-white rounded-[30px] inline-flex flex-col justify-center items-center gap-2.5"
          onClick={(e) => e.stopPropagation()}
        >
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
                key={item.id}
                id={item.id}
                isYellow={isYellow}
                series_title={item.title}
                series_sub_title={item.sub_title}
                onClick={() => handleSelectSeries(item)}
              />
            ))}
          </div>
        </div>
      </div>
      {selectedSeries && (
        <div
          className="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-[100] bg-black/25 flex justify-center items-center"
          onClick={onClose}
        >
          <SeriesModal
            series={selectedSeries}
            onClose={handleCloseSeriesModal}
          />
        </div>
      )}
    </>
  );
}
