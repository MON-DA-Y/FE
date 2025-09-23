"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import SeriesCard from "./SeriesCard";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { useRouter } from "next/navigation";
import { Series, getSeriesHistory } from "@/apis/seriesHistory";

interface SeriesHistoryProps {
  keywordFilter: string | "all";
}

export default function SeriesHistory({ keywordFilter }: SeriesHistoryProps) {
  const params = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [seriesList, setSeriesList] = useState<Series[]>([]);
  const [selectedSeries, setSelectedSeries] = useState<Series | null>(null);

  const router = useRouter();

  // params.week이 배열일 수 있으므로 문자열로 변환
  const weekParam = params.week;
  const week = Array.isArray(weekParam)
    ? weekParam[0] === "이번주"
      ? "이번주"
      : "저번주"
    : weekParam === "이번주"
    ? "이번주"
    : "저번주";

  useEffect(() => {
    getSeriesHistory(week)
      .then((data) => setSeriesList(data.seriesList))
      .catch((err) => console.error("시리즈 히스토리 API 실패:", err));
  }, [week]);

  const filteredSeries = seriesList.filter((series) => {
    if (keywordFilter !== "all" && series.keyword !== keywordFilter)
      return false;
    return true;
  });

  return (
    <div className="grid grid-cols-3 gap-y-15">
      {filteredSeries.map((series) => (
        <SeriesCard
          key={series.msId}
          keyword={series.keyword}
          title={series.title}
          onClick={() => {
            setSelectedSeries(series);
            setIsOpen(true);
          }}
        />
      ))}

      {/*모달*/}
      {isOpen && selectedSeries && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white px-10 pt-10 pb-7 rounded-[30px] w-[680px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                fontSize: FONT_SIZE.subtitle1,
                fontWeight: FONT_WEIGHT.subtitle1,
              }}
            >
              {selectedSeries?.title}
            </div>
            <div
              style={{
                fontSize: FONT_SIZE.body2,
                fontWeight: FONT_WEIGHT.body2,
              }}
            >
              {selectedSeries?.sub_title}
            </div>
            {selectedSeries?.parts.map((part) => (
              <div
                key={part.msaId}
                className="cursor-pointer"
                onClick={() =>
                  router.push(
                    `/MonSeries/${selectedSeries?.msId}/part/${part.msaId}`
                  )
                }
              >
                <div className="flex justify-start items-center gap-[10px] mt-4">
                  <Image
                    src="/icons/Pin_UpcomingPart.svg"
                    alt="Pin"
                    width={30}
                    height={30}
                  />
                  <div className="flex flex-col">
                    <div
                      style={{
                        fontSize: FONT_SIZE.body1,
                        fontWeight: FONT_WEIGHT.body1,
                      }}
                    >
                      {part.title}
                    </div>
                    <div
                      style={{
                        fontSize: FONT_SIZE.caption2,
                        fontWeight: FONT_WEIGHT.caption2,
                      }}
                    >
                      {part.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
