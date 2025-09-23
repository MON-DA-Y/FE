"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "./components/Header";
import Study from "./components/Study";
import { COLORS } from "@/styles/theme/tokens";
import { monSeriesApi } from "@/apis/monSeries";
import { Series, Part } from "@/types/monSeries";
import AssignLoading from "@/components/shared/AssignLoading";

export default function StudyPage() {
  const params = useParams();
  const seriesId = Number(params.seriesId);
  const partId = Number(params.partId);

  const [series, setSeries] = useState<Series | null>(null);
  const [part, setPart] = useState<Part | null>(null);

  useEffect(() => {
    if (!seriesId || !partId) return;
    const fetchMonSeriesStudy = async () => {
      try {
        const data = await monSeriesApi.getMonSeriesPart(seriesId, partId);
        // data.result 구조에 맞게 분리
        setSeries({
          id: data.msId,
          keyword: data.keyword, // 필요시 추가
          title: data.title,
          sub_title: data.subtitle,
          parts: Array.isArray(data.series) ? data.series : [], // 단일 파트만 배열로
        });
        // console.log("fetchMonSeriesStudy data:", data);
        setPart(data.part);
      } catch (error) {
        console.error("MonSeriesStudy 조회 실패: ", error);
      }
    };

    fetchMonSeriesStudy();
  }, [seriesId, partId]);

  if (!series || !part) return <AssignLoading />;

  return (
    <div className="relative flex justify-center gap-5">
      <Header series={series} part={part} />
      <div
        className="mt-[30px] w-[722px] h-[455px] rounded-[30px] overflow-scroll"
        style={{
          background: COLORS.sub.gray1,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Study series={series} part={part} />
      </div>
    </div>
  );
}
