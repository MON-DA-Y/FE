"use client";

import { useState } from "react";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

interface GradeBtnProps {
  onChange?: (schoolType: "middle" | "high", grade: number | null) => void;
}

export default function GradeBtn({ onChange }: GradeBtnProps) {
  const [schoolType, setSchoolType] = useState<"middle" | "high">("middle");
  const [grade, setGrade] = useState<number | null>(null);

  const handleSchoolChange = (type: "middle" | "high") => {
    setSchoolType(type);
    setGrade(null); // 학교 바꾸면 학년 초기화
    onChange?.(type, null);
  };

  const handleGradeChange = (g: number) => {
    setGrade(g);
    onChange?.(schoolType, g);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="px-1" style={{ color: COLORS.sub.gray4 }}>
        학년 선택
      </div>
      {/* 학교 타입 선택 */}
      <div className="flex gap-2">
        {["middle", "high"].map((type) => (
          <button
            key={type}
            onClick={() => handleSchoolChange(type as "middle" | "high")}
            style={{
              padding: "8px 16px",
              borderRadius: "24px",
              backgroundColor:
                schoolType === type ? COLORS.sub.gray3 : COLORS.sub.gray1,
              fontSize: FONT_SIZE.body2,
              fontWeight: FONT_WEIGHT.body2,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {type === "middle" ? "중학교" : "고등학교"}
          </button>
        ))}
      </div>

      {/* 학년 선택 */}
      <div className="flex gap-2">
        {[1, 2, 3].map((g) => (
          <button
            key={g}
            onClick={() => handleGradeChange(g)}
            style={{
              padding: "6px 14px",
              borderRadius: "34px",
              backgroundColor:
                grade === g ? COLORS.sub.gray3 : COLORS.sub.gray1,
              fontSize: FONT_SIZE.body2,
              fontWeight: FONT_WEIGHT.body2,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {g}학년
          </button>
        ))}
      </div>
    </div>
  );
}
