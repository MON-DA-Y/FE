"use client";

import { useState, useEffect } from "react";
import SeriesItem from "./SeriesItem";
import { Series } from "@/types/monSeries";
import { monSeriesApi } from "@/apis/monSeries";
import AssignLoading from "@/components/shared/AssignLoading";

export default function SeriesList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [series, setSeries] = useState<Series[]>();

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        setIsLoading(true);
        const data = await monSeriesApi.getMonSeries(); // 키워드 배열
        // console.log("시리즈 조회: ", data);

        // 키워드 안의 series 배열을 모두 합쳐서 시리즈 배열 생성
        const allSeries: Series[] = data.flatMap(
          (keyword: any) => keyword.series
        );
        setSeries(allSeries);
      } catch (error) {
        console.error("시리즈 조회 실패: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSeries();
  }, []);

  if (!series) return null;

  return (
    <div className="px-5 py-7 flex flex-col justify-center items-center gap-5">
      {series.map((item) => (
        <SeriesItem
          key={item.id}
          id={item.id}
          keyword={item.keyword}
          title={item.title}
          sub_title={item.sub_title}
          parts={item.parts}
        />
      ))}
    </div>
  );
}
