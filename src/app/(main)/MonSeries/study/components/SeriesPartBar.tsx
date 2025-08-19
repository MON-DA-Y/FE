"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

type SeriesPartBarProps = {
  part_title: string;
  total: number;
  current: number;
};

export default function SeriesPartBar({
  part_title,
  total,
  current,
}: SeriesPartBarProps) {
  const steps = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="w-fit max-w-56 p-3 bg-green-300/30 rounded-[20px] flex flex-col gap-2">
      {/* 파트 제목 */}
      <div
        style={{
          color: COLORS.sub.black,
          fontSize: FONT_SIZE.caption1,
          fontWeight: FONT_WEIGHT.caption1,
        }}
      >
        {part_title}
      </div>

      {/* Step Progress Bar */}
      <div className="flex items-center gap-1">
        {steps.map((step, index) => (
          <div className="flex items-center" key={step}>
            {/* 동그라미 */}
            <div
              className="w-4 h-4 rounded-full"
              style={{
                backgroundColor:
                  step <= current ? COLORS.primary.mint : COLORS.sub.gray2,
              }}
            />
            {/* 마지막 원은 선 없이 끝 */}
            {index < total - 1 && (
              <div
                className="h-1 w-6"
                style={{
                  backgroundColor:
                    step < current ? COLORS.primary.mint : COLORS.sub.gray2,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
