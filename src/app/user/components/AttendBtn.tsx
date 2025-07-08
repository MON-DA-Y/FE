"use client";

import { useState, useEffect } from "react";
import { FONT_SIZE, FONT_WEIGHT, COLORS, SHADOW } from "@/styles/theme/tokens";
import Image from "next/image";

interface AttendBtnProps {
  days_gap: number;
  attend_gap: number;
}

export default function AttendBtn({ days_gap, attend_gap }: AttendBtnProps) {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const [todayIndex, setTodayIndex] = useState<number | null>(null);

  const dates = [24, 25, 26, 27, 28, 29, 30];
  const attendance = [true, true, false, true, false, false, true];

  useEffect(() => {
    const day = new Date().getDay();
    const mondayStartIndex = (day + 6) % 7;
    setTodayIndex(mondayStartIndex);
  }, []);

  return (
    <div className="flex flex-col gap-3.5 px-2.5">
      <div className={`flex gap-${days_gap}`}>
        {days.map((day, index) => (
          <div
            key={day}
            style={{
              fontSize: FONT_SIZE.body2,
              fontWeight: FONT_WEIGHT.body2,
              color: index === todayIndex ? COLORS.primary.mint : "text-black",
            }}
          >
            {day}
          </div>
        ))}
      </div>

      <div className={`flex gap-${attend_gap} mx-[-20px]`}>
        {attendance.map((isAttend, index) => (
          <div key={index} className="relative w-[57px] h-[60px]">
            <Image
              src={isAttend ? "/icons/IsAttend.svg" : "/icons/IsNotAttend.svg"}
              alt={isAttend ? "attend" : "not attend"}
              layout="fill"
            />
            <div
              className="absolute inset-0 flex justify-center pt-5"
              style={{
                fontSize: FONT_SIZE.subtitle2,
                fontWeight: FONT_WEIGHT.subtitle2,
                color: isAttend ? COLORS.sub.black : COLORS.sub.gray3,
              }}
            >
              {dates[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
