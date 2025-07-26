"use client";

import Header from "./components/Header";
import { useSeriesStore } from "@/store/useSeriesStore";

export default function page() {
  const series = useSeriesStore((state) => state.currentSeries);
  const part = useSeriesStore((state) => state.currentPart);

  if (!series || !part) {
    return <p>잘못된 접근입니다.</p>;
  }

  console.log(series);

  return (
    <>
      <div className="relative flex justify-center gap-5">
        <Header
          keyword={series.keyword ? series.keyword : ""}
          series_id={series.id}
          series_title={series.title}
          part_id={part.id}
        />
      </div>
    </>
  );
}
