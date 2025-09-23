"use client";

import { COLORS, FONT_SIZE, SHADOW } from "@/styles/theme/tokens";
import { useState } from "react";
import Image from "next/image";

interface IconProps {
  userType: "student" | "parent";
  label?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function Icon({
  userType,
  label,
  onClick,
  isActive,
}: IconProps) {
  const [isHover, setIsHover] = useState(false);
  // 기본 색상
  const defaultColor =
    userType === "student" ? COLORS.primary.navy : COLORS.primary.mint;

  // hover / active 색상
  const backgroundColor = isActive
    ? COLORS.sub.gray3
    : isHover
    ? COLORS.sub.gray2
    : defaultColor;

  return (
    <div className="flex flex-col items-center cursor-pointer">
      <div
        onClick={onClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="flex items-center justify-center w-[100px] h-[100px] p-6"
        style={{
          borderRadius: "30px",
          boxShadow: SHADOW.interactive,
          backgroundColor,
        }}
      >
        <span
          style={{
            fontSize: "50px",
            lineHeight: 1,
          }}
        >
          <Image
            src={
              userType === "student"
                ? "/images/student.png"
                : "/images/parent.png"
            }
            alt="user"
            width={50}
            height={50}
          />
        </span>
      </div>
      <span
        style={{
          fontSize: FONT_SIZE.subtitle2,
          paddingTop: "5px",
        }}
      >
        {label}
      </span>
    </div>
  );
}
