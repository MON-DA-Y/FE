"use client";

import { useState } from "react";
import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";

export default function InputBox() {
  const [text, setText] = useState("");

  return (
    <div
      className="pt-3.5"
      style={{
        fontSize: FONT_SIZE.body2,
        fontWeight: FONT_WEIGHT.body2,
      }}
    >
      <textarea
        placeholder="더 좋은 경제 교육을 위해 학부모님의 바람을 100자 이내로 적어주세요. (예: 소비와 저축의 균형을 배웠으면 해요.)"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="placeholder-[#7d7C7C] w-[360px] h-[80px] px-2.5 py-4 rounded-[10px] border border-[#7D7C7C] font-light text-[15px]"
        maxLength={100}
      />
      <div
        style={{
          color: COLORS.sub.gray3,
        }}
      >
        ⋇ 해당 사항은 다음날 반영됩니다.
      </div>
      <button
        type="submit"
        className="absolute top-38 left-68"
        style={{
          width: "86px",
          height: "28px",
          backgroundColor: COLORS.series.yellow1,
          borderRadius: "30px",
          boxShadow: SHADOW.interactive,
        }}
      >
        제출
      </button>
    </div>
  );
}
