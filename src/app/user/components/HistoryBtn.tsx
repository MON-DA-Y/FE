"use client";

import { useState } from "react";
import { COLORS, SHADOW } from "@/styles/theme/tokens";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface HistoryBtnProps {
  type: "word" | "news" | "series";
  week: "이번주" | "저번주";
  role: "student" | "parent";
}

export default function HistoryBtn({ type, week, role }: HistoryBtnProps) {
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const label = (type: string) => {
    if (type === "word") return "단어";
    if (type === "news") return "뉴스";
    if (type === "series") return "시리즈";
  };
  const router = useRouter();

  const handleClick = () => {
    router.push(`/user/historyPage?type=${type}&week=${week}&role=${role}`);
  };

  return (
    <div
      className="flex items-center w-[420px] h-[106px] pl-5 rounded-[30px] whitespace-nowrap cursor-pointer"
      style={{
        boxShadow: SHADOW.interactive,
        backgroundColor: isActive
          ? COLORS.sub.gray2
          : isHover
          ? COLORS.sub.gray1
          : COLORS.sub.white,
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onClick={handleClick}
    >
      <Image
        src="/images/ellipse_mint.svg"
        width={66}
        height={66}
        alt="ellipse"
      />
      <span
        className="ml-[-35px]"
        style={{
          color: COLORS.primary.mint,
          fontSize: "40px",
          fontWeight: 800,
        }}
      >
        MON
      </span>
      <span
        style={{
          color: COLORS.primary.navy,
          fontSize: "40px",
          fontWeight: 800,
        }}
      >
        {label(type)}
      </span>
      <span
        className="mx-[10px]"
        style={{
          color: COLORS.primary.navy,
          fontSize: "40px",
          fontWeight: 800,
        }}
      >
        히스토리
      </span>
    </div>
  );
}
