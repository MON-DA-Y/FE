"use client";

import { useSearchParams, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import SeriesCard from "./SeriesCard";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { useRouter } from "next/navigation";
import { Series, getSeriesHistory } from "@/apis/seriesHistory";

interface SeriesHistoryProps {
  keywordFilter: string | "all";
  statusFilter: "all" | "done" | "ongoing";
}

export default function SeriesHistory({
  keywordFilter,
  statusFilter,
}: SeriesHistoryProps) {
  const searchParams = useSearchParams();
  const params = useParams();
  const studentId = Number(params.studentId) || 1;

  const [isOpen, setIsOpen] = useState(false);
  const [seriesList, setSeriesList] = useState<Series[]>([]);
  const [selectedSeries, setSelectedSeries] = useState<Series | null>(null);

  const router = useRouter();

  const week = searchParams.get("week") === "이번주" ? "이번주" : "저번주";

  useEffect(() => {
    getSeriesHistory(studentId, week)
      .then((data) => setSeriesList(data.seriesList))
      .catch((err) => console.error("시리즈 히스토리 API 실패:", err));
  }, [studentId, week]);

  const filteredSeries = seriesList.filter((series) => {
    // 키워드 필터
    if (keywordFilter !== "all" && series.keyword !== keywordFilter)
      return false;

    // 학습 현황 필터
    if (statusFilter !== "all" && series.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="grid grid-cols-3 gap-y-15">
      {filteredSeries.map((series) => (
        <SeriesCard
          key={series.seriesId}
          keyword={series.keyword}
          status={series.status}
          totalCount={series.totalCount}
          learnedCount={series.learnedCount}
          imgUrl={series.imgUrl}
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
                key={part.partId}
                className="cursor-pointer"
                onClick={() =>
                  router.push(
                    `/MonSeries/${selectedSeries?.seriesId}/part/${part.partId}`
                  )
                }
              >
                <div className="flex justify-start items-center gap-[10px] mt-4">
                  {part.isLearned === true ? (
                    <Image
                      src="/icons/Pin_LearnedPart.svg"
                      alt="Pin"
                      width={30}
                      height={30}
                    />
                  ) : (
                    <Image
                      src="/icons/Pin_UpcomingPart.svg"
                      alt="Pin"
                      width={30}
                      height={30}
                    />
                  )}
                  <div className="flex flex-col">
                    <div
                      style={{
                        color: part.isLearned
                          ? COLORS.sub.gray4
                          : COLORS.sub.black,
                        fontSize: FONT_SIZE.body1,
                        fontWeight: FONT_WEIGHT.body1,
                      }}
                    >
                      {part.part_title}
                    </div>
                    <div
                      style={{
                        color: part.isLearned
                          ? COLORS.sub.gray3
                          : COLORS.sub.black,
                        fontSize: FONT_SIZE.caption2,
                        fontWeight: FONT_WEIGHT.caption2,
                      }}
                    >
                      {part.part_sub_title}
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
