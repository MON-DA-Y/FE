"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import { useRouter } from "next/navigation";

interface SignUpBtnProps {
  userType: "student" | "parent";
}

export default function SignUpBtn({ userType }: SignUpBtnProps) {
  const router = useRouter();

  const handleClick = () => {
    if (userType === "student") {
      router.push("/account/signupsuccess/student");
    } else {
      router.push("/account/signupsuccess/parent");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-center w-[284px] h-[56px] border text-white"
      style={{
        backgroundColor:
          userType === "student" ? COLORS.primary.navy : COLORS.primary.mint,
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
