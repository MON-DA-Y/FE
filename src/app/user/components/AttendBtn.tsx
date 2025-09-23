"use client";

import { useState, useEffect } from "react";
import { FONT_SIZE, FONT_WEIGHT, COLORS } from "@/styles/theme/tokens";
import Image from "next/image";

interface AttendBtnProps {
  days_gap: number;
  attend_gap: number;
  attendance: boolean[];
  dates: number[];
}

export default function AttendBtn({
  days_gap,
  attend_gap,
  attendance,
  dates,
}: AttendBtnProps) {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const [todayIndex, setTodayIndex] = useState<number | null>(null);

  useEffect(() => {
    const day = new Date().getDay();
    const mondayStartIndex = (day + 6) % 7;
    setTodayIndex(mondayStartIndex);
  }, []);

  return (
    <div className="flex flex-col gap-3.5 px-2.5">
      <div className="flex" style={{ gap: `${days_gap}px` }}>
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
        {attendance.map((isAttended, index) => (
          <div key={index} className="relative w-[57px] h-[60px]">
            <Image
              src={
                isAttended ? "/icons/IsAttend.svg" : "/icons/IsNotAttend.svg"
              }
              alt={isAttended ? "attend" : "not attend"}
              layout="fill"
            />
            <div
              className="absolute inset-0 flex justify-center pt-5"
              style={{
                fontSize: FONT_SIZE.subtitle2,
                fontWeight: FONT_WEIGHT.subtitle2,
                color: isAttended ? COLORS.sub.black : COLORS.sub.gray3,
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
