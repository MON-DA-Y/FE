"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import WordBox from "@/components/ui/WordBox";
import TextBox from "./TextBox";
import CommonBtn from "@/components/shared/CommonBtn";
import { useRouter } from "next/navigation";
import { SeriesStudyProps, wordItem } from "@/types/monSeries";
import MoreSeriesBox from "./MoreSeriesBox";
import { monSeriesApi } from "@/apis/monSeries";

export default function Study({ series, part }: SeriesStudyProps) {
  const router = useRouter();

  if (!series || !part) {
    return <p>잘못된 접근입니다.</p>;
  }

  // console.log("series:", series);
  // console.log("part:", part);

  const postMonSeriesStudyDone = async () => {
    try {
      await monSeriesApi.postMonSeriesAssign(series.id, part.id);
      alert("시리즈 학습 완료!");
      // router.push("/student");
    } catch (error) {
      console.error("MonSeriesStudy 완료 실패: ", error);
    }
  };

  const handleSeriesStudyClick = () => {
    console.log("오늘의 MonSeries 학습 완료");
    postMonSeriesStudyDone();
  };

  // 시리즈 더보기 박스에 표시할 내용
  const seriesId = series.id;
  // 실제 다음 파트 id 로직 필요: 아래는 예시
  const currentIndex = series.parts.findIndex((p) => p.id === part.id);
  const nextPart =
    currentIndex + 1 < series.parts.length
      ? series.parts[currentIndex + 1]
      : null;

  return (
    <div className="px-5 py-7 flex flex-col justify-center items-center gap-5">
      <div className="w-[680px] px-10 pt-10 pb-7 bg-white rounded-[30px] flex flex-col gap-3.5">
        {/* 파트 제목 */}
        <div
          style={{
            color: COLORS.sub.black,
            fontSize: FONT_SIZE.subtitle1,
            fontWeight: FONT_WEIGHT.subtitle1,
          }}
        >
          {part.title}
        </div>
        {/* 파트 소제목 */}
        <div
          className="mt-[-18px]"
          style={{
            color: COLORS.sub.black,
            fontSize: FONT_SIZE.body2,
            fontWeight: FONT_WEIGHT.body2,
          }}
        >
          {part.subtitle}
        </div>
        {/* 파트 해시태그 */}
        <div className="flex gap-[10px]">
          {Array.isArray(part.wordItem) &&
            part.wordItem.map((item: wordItem) => (
              <WordBox
                key={item.msaWiId ?? item.word}
                p={"5px 10px"}
                bg={COLORS.primary.mint}
                textColor={COLORS.series.deepGreen}
                font="caption1"
              >
                {item.word}
              </WordBox>
            ))}
        </div>
        {/* 파트 요약 */}
        <div
          className="text-zinc-900"
          style={{
            color: COLORS.sub.black,
            fontSize: FONT_SIZE.body2,
            fontWeight: FONT_WEIGHT.body2,
          }}
        >
          {part.summary}
        </div>
        {/* 실생활 예시 */}
        <TextBox type="lifeExample" text={part.practice} />
        {/* 파트 내용 */}
        <div
          className="w-full"
          style={{
            color: COLORS.sub.black,
          }}
        >
          {part.main}
        </div>
        {/* 용어 설명 */}
        <div className="mt-4">
          <TextBox
            type="term"
            text={
              Array.isArray(part.wordItem)
                ? part.wordItem
                    .map((item: wordItem) => `${item.word}: ${item.meaning}`)
                    .join("\n")
                : ""
            }
          />
        </div>
      </div>
      <div>
        {/* 시리즈 이어보기 MoreSeriesBox */}
        {nextPart && (
          <MoreSeriesBox
            series={series.title}
            nextPart={nextPart.title}
            nextPartFunc={() =>
              router.push(`/MonSeries/${series.id}/${nextPart.id}`)
            }
          />
        )}
      </div>
      <div>
        <CommonBtn type="series_study" onClick={handleSeriesStudyClick} />
      </div>
    </div>
  );
}
