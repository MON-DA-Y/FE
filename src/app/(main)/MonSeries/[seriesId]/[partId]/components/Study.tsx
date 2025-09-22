"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import WordBox from "@/components/ui/WordBox";
import TextBox from "./TextBox";
import CommonBtn from "@/components/shared/CommonBtn";
import { useRouter } from "next/navigation";
import { SeriesStudyProps } from "@/types/monSeries";
import MoreSeriesBox from "./MoreSeriesBox";

export default function Study({ series, part }: SeriesStudyProps) {
  const router = useRouter();

  const handleSeriesStudyClick = () => {
    // 학습 완료 api 요청 보내기
    console.log("오늘의 MonSeries 학습 완료");
    router.push(`/`);
  };

  // 시리즈 더보기 박스에 표시할 내용
  const seriesId = 1; // 임시
  const nextPartId = 2; // 임시

  if (!part) {
    return <p>잘못된 접근입니다.</p>;
  }

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
          {part.part_title}
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
          {part.part_sub_title}
        </div>
        {/* 파트 해시태그 */}
        <div className="flex gap-[10px]">
          {part.part_study.part_category.map((item) => (
            <WordBox
              key={item}
              p={"5px 10px"}
              bg={`${COLORS.primary.mint}`}
              textColor={`${COLORS.series.deepGreen}`}
              font={"caption1"}
            >
              {item}
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
          {part.part_study.summary}
        </div>
        {/* 실생활 예시 */}
        <TextBox
          type="lifeExample"
          text="중국에서 만든 1,000달러짜리 전자제품에 25%의 관세과 부과된다면, 미국에 수입될 때 250달러의 세금이 추가되어 최소 1,250달러의 가격이 됩니다. 이렇게 되면 미국 소비자들은 더 비싼 가격을 지불해야 해요. "
        />
        {/* 파트 내용 */}
        <div
          className="w-full"
          style={{
            color: COLORS.sub.black,
          }}
        >
          {part.part_study.body}
        </div>
        {/* 실생활 예시 */}
        <TextBox
          type="term"
          text="무역 적자: 한 국가가 수출하는 것보다 수입하는 것이 더 많을 때 발생하는 상황"
        />
      </div>
      <div>
        {/* 시리즈 이어보기 MoreSeriesBox */}
        <MoreSeriesBox
          series={series.title}
          nextPart={part.part_title}
          nextPartFunc={() =>
            router.push(`/MonSeries/${seriesId}/${nextPartId}`)
          }
        />
      </div>
      <div>
        <CommonBtn type="series_study" onClick={handleSeriesStudyClick} />
      </div>
    </div>
  );
}
