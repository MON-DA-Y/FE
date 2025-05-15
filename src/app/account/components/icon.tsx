"use client";

import { useRouter } from "next/navigation";
import { COLORS } from "@/styles/theme/tokens";

interface IconProps {
  userType: "student" | "parent";
}

export default function Icon({ userType }: IconProps) {
  const router = useRouter();

  const handleClick = () => {
    if (userType === "student") {
      router.push("/account/student");
    } else {
      router.push("/account/parent");
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        display: "flex",
        width: "80px",
        height: "80px",
        padding: "25px",
        borderRadius: "30px",
        backgroundColor:
          userType === "student" ? COLORS.primary.navy : COLORS.primary.mint,
        justifyContent: "center",
        alignItems: "center",
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
  );
}
