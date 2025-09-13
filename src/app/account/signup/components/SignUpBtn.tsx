"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SignUpBtnProps {
  userType: "student" | "parent";
  onClick?: () => void;
}

export default function SignUpBtn({ userType, onClick }: SignUpBtnProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (onClick) onClick();

    if (userType === "student") {
      router.push("/account/signupsuccess/student");
    } else {
      router.push("/account/signupsuccess/parent");
    }
  };

  let bgColor =
    userType === "student" ? COLORS.primary.navy : COLORS.primary.mint;
  if (isHovered) bgColor = COLORS.sub.gray2;
  if (isActive) bgColor = COLORS.sub.gray3;

  return (
    <div
      onClick={handleClick}
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
