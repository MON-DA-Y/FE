"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SeriesCard from "./SeriesCard";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { useRouter } from "next/navigation";

interface Part {
  id: number;
  isLearned: boolean;
  part_title: string;
  part_sub_title: string;
}

interface Series {
  id: number;
  keyword: string;
  title: string;
  sub_title: string;
  parts: Part[];
}

export default function SeriesHistory() {
  const [seriesList, setSeriesList] = useState<Series[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState<Series | null>(null);

  const router = useRouter();

  useEffect(() => {
    // TODO: API 호출 로직으로 변경 가능
    setSeriesList([
      {
        id: 1,
        keyword: "트럼프",
        title: "트럼프와 경제 정책과 그 이후의 미래에 대해서",
        sub_title: "트럼프의 경제 정책이 세계 경제에 미친 영향",
        parts: [
          {
            id: 1,
            isLearned: true,
            part_title: "2016년: 대선 승리",
            part_sub_title: "트럼프의 경제 공약과 당선 배경",
          },
          {
            id: 2,
            isLearned: false,
            part_title: "2018년: 관세 인상",
            part_sub_title: "중국 제품에 대한 관세 인상과 무역 전쟁의 시작",
          },
          {
            id: 3,
            isLearned: false,
            part_title: "2020년: 코로나19와 경제 대응",
            part_sub_title: "팬데믹 상황에서의 경제 정책과 영향",
          },
        ],
      },
      {
        id: 2,
        keyword: "금리",
        title: "금리와 세계 경제",
        sub_title: "금리 변화가 글로벌 경제에 끼친 영향",
        parts: [
          {
            id: 1,
            isLearned: true,
            part_title: "2008년: 글로벌 금융위기와 제로금리",
            part_sub_title: "미국 연준의 기준금리 인하와 세계 시장의 반응",
          },
          {
            id: 2,
            isLearned: true,
            part_title: "2022년: 인플레이션과 금리 인상",
            part_sub_title: "급격한 금리 인상이 소비와 투자에 미친 영향",
          },
        ],
      },
    ]);
  }, []);

  if (!seriesList.length) return null;

  return (
    <div className="grid grid-cols-3 gap-y-15">
      {seriesList.map((series) => {
        const status = series.parts.every((p) => p.isLearned)
          ? "done"
          : "ongoing";

        return (
          <SeriesCard
            key={series.id}
            keyword={series.keyword}
            status={status}
            title={series.title}
            onClick={() => {
              setSelectedSeries(series);
              setIsOpen(true);
            }}
          />
        );
      })}

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
                key={part.id}
                className="cursor-pointer"
                onClick={() =>
                  router.push(
                    `/MonSeries/${selectedSeries?.id}/part/${part.id}`
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
