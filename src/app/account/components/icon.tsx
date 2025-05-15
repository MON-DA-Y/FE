"use client";

import { useRouter } from "next/navigation";
import { COLORS, FONT_SIZE } from "@/styles/theme/tokens";

interface IconProps {
  userType: "student" | "parent";
}

export default function Icon({ userType }: IconProps) {
  const router = useRouter();

  const handleClick = () => {
    if (userType === "student") {
      router.push("../signup");
    } else {
      router.push("../signup");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={handleClick}
        className="flex items-center justify-center w-[100px] h-[100px] p-6"
        style={{
          borderRadius: "30px",
          backgroundColor:
            userType === "student" ? COLORS.primary.navy : COLORS.primary.mint,
        }}
      >
        <span
          style={{
            fontSize: "50px",
            lineHeight: 1,
          }}
        >
          {userType === "student" ? "🧒🏻" : "🧑🏻"}
        </span>
      </div>
      <span
        style={{
          fontSize: FONT_SIZE.subtitle2,
          paddingTop: "5px",
        }}
      >
        {userType === "student" ? "학생" : "학부모"}
      </span>
    </div>
  );
}
