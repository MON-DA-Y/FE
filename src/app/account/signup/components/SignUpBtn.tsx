"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import { useState } from "react";

interface SignUpBtnProps {
  userType: "student" | "parent";
  onClick?: () => void;
}

export default function SignUpBtn({ userType, onClick }: SignUpBtnProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  let bgColor =
    userType === "student" ? COLORS.primary.navy : COLORS.primary.mint;
  if (isHovered) bgColor = COLORS.sub.gray2;
  if (isActive) bgColor = COLORS.sub.gray3;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      className="flex items-center justify-center w-[284px] h-[56px] border text-white"
      style={{
        backgroundColor: bgColor,
        boxShadow: SHADOW.interactive,
        borderRadius: "80px",
        fontSize: FONT_SIZE.subtitle2,
        fontWeight: FONT_WEIGHT.subtitle2,
      }}
    >
      회원가입
    </div>
  );
}
