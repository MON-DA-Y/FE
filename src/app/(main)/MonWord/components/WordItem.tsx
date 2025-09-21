"use client";

import NavyBox from "@/components/ui/NavyBox";
import CommonBtn from "@/components/shared/CommonBtn";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { Word } from "@/types/monWord";
import { useState } from "react";
import { monWordApi } from "@/apis/monWord";

export default function WordItem({ id, word, explain, use }: Word) {
  const [understood, setUnderstood] = useState<boolean>(false);

  // mon단어 item 이해했어요 post
  const postTodayMonWordItemUnderstand = async (wordId: number) => {
    try {
      const data = await monWordApi.postWordItemUnderstand(wordId);
      console.log(data);
      setUnderstood(true);
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
      console.error("오늘의 monWord 학습 완료 post 실패", error);
    }
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
          onClick={() => postTodayMonWordItemUnderstand(id)}
        >
          {understood ? "⭐️ 이해 완료" : "💪🏻 이해했어요"}
        </CommonBtn>
      </div>
    </div>
  );
}
