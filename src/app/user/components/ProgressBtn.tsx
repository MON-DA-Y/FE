"use client";

import { useRouter } from "next/navigation";
import { FONT_SIZE, FONT_WEIGHT, COLORS, SHADOW } from "@/styles/theme/tokens";
import Image from "next/image";

export default function ProgressBtn() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/user/studentProgress");
  };

  return (
    <div onClick={handleClick}>
      <div
        className="flex items-center w-36 h-8 pl-3 whitespace-nowrap cursor-pointer"
        style={{
          fontSize: FONT_SIZE.body1,
          fontWeight: FONT_WEIGHT.body1,
          backgroundColor: COLORS.primary.mint,
          color: COLORS.sub.white,
          boxShadow: SHADOW.interactive,
          borderRadius: "30px",
        }}
      >
        진도 현황 보기
        <div className="px-1.5">
          <Image
            src="/icons/Polygon_2.svg"
            alt="polygon"
            width={17}
            height={17}
          />
        </div>
      </div>
    </div>
  );
}
