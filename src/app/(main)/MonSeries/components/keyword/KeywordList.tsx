"use client";

import { useState, useEffect } from "react";
import KeywordItem from "./KeywordItem";
import { Keyword } from "@/types/monSeries";
import { monSeriesApi } from "@/apis/monSeries";
import AssignLoading from "@/components/shared/AssignLoading";

export default function KeywordList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [keywords, setKeywords] = useState<Keyword[]>();

  useEffect(() => {
    const fetchKeywords = async () => {
      try {
        setIsLoading(true);
        const data = await monSeriesApi.getMonSeries();
        // console.log("키워드 조회: ", data);
        setKeywords(data);
      } catch (error) {
        console.error("키워드 조회 실패: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchKeywords();
  }, []);

  if (!keywords || isLoading) return <AssignLoading />;

  return (
    <>
      <div className="relative w-full h-full justify-items-center">
        <div className="py-7 grid grid-cols-2 gap-x-10 gap-y-8">
          {keywords.map((item, idx) => (
            <KeywordItem
              index={idx}
              key={item.id}
              id={item.id}
              keyword={item.keyword}
              explain={item.explain}
              series={item.series}
            />
          ))}
        </div>
      </div>
    </>
  );
}
