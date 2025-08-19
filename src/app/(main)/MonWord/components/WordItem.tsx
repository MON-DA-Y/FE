"use client";

import NavyBox from "@/components/ui/NavyBox";
import CommonBtn from "@/components/shared/CommonBtn";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { Word } from "@/types/monWord";

export default function WordItem({ id, word, explain, use }: Word) {
  const handleUnderstandClick = (id: number) => {
    console.log(`${id}에 해당하는 단어 이해했어요`);
  };

  return (
    <div className="w-[680px] px-10 pt-10 pb-7 bg-white rounded-[30px] flex flex-col gap-5">
      {/* 단어 및 설명 */}
      <div className="flex flex-col gap-4" style={{ color: COLORS.sub.black }}>
        <div
          style={{
            fontSize: FONT_SIZE.subtitle2,
            fontWeight: FONT_WEIGHT.subtitle2,
          }}
        >
          {word}
        </div>
        <div
          style={{ fontSize: FONT_SIZE.body2, fontWeight: FONT_WEIGHT.body2 }}
        >
          {explain}
        </div>
      </div>

      {/* 예문 (써먹기) */}
      <NavyBox title="써먹기">{use}</NavyBox>

      {/* 버튼 */}
      <div className="flex justify-end">
        <CommonBtn
          type="understand"
          onClick={() => handleUnderstandClick(id)}
        />
      </div>
    </div>
  );
}
