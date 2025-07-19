"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TrendingSeriesDropdown from "./TrendingSeriesDropdown";
import SeriesCard from "./SeriesCard";

export interface MonSeries {
  id: number;
  category: string;
  series_name: string;
}

export default function MonSeries() {
  const [todaySeries, setTodaySeries] = useState<MonSeries[]>([]);
  const router = useRouter();

  // 더미데이터
  useEffect(() => {
    setTodaySeries([
      { id: 12, category: "이자", series_name: "트럼프와 경제 정책" },
      { id: 13, category: "인플레이션", series_name: "2만원 떡볶이 시대" },
    ]);
  }, []);

  // SeriesCard 선택
  const handleSeriesCardClick = (series_id: number) => {
    router.push(`/MonSeries/${series_id}`); // MonSeries의 해당 키워드로 이동
  };

  return (
    <>
      <div className="relative flex flex-col items-start w-[533px] h-56 mt-[20px] ml-[-18px] p-6 bg-[radial-gradient(ellipse_50.15%_54.03%_at_75.14%_68.61%,_rgba(28,_55,_107,_0.20)_0%,_rgba(28,_55,_107,_0.01)_100%)] rounded-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden">
        <div className="flex flex-row">
          <Image
            src="/icons/MonSeries.svg"
            alt="Mon시리즈"
            width={216}
            height={61}
          />
          <div className="absolute top-9 right-25 z-10">
            <TrendingSeriesDropdown />
          </div>
        </div>
        <div className="w-[480px] h-28 relative overflow-hidden">
          <div
            className="h-28 overflow-x-auto px-2 flex justify-start
             items-center gap-5"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {todaySeries.map((series, index) => (
              <SeriesCard
                key={series.id}
                onClick={() => handleSeriesCardClick(series.id)}
                category={series.category}
              >
                {series.series_name}
              </SeriesCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
