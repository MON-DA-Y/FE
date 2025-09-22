"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Series } from "@/types/monSeries";

// 실제 데이터 구조에 맞게 props 타입 정의
interface PartItem_Props {
  series: Series;
  id: number;
  title: string;
  subtitle: string;
}

export default function PartItem({
  id,
  title,
  subtitle,
  series,
}: PartItem_Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/MonSeries/${series.id}/${id}`);
  };

  return (
    <div
      className="inline-flex justify-start items-center gap-[10px] cursor-pointer p-2.5 rounded-2xl outline-1 outline-offset-[-1px] bg-green-300/10 outline-green-300/50"
      onClick={handleClick}
    >
      <Image
        src="/icons/Pin_UpcomingPart.svg"
        alt="Pin"
        width={30}
        height={30}
      />
      <div className="flex flex-col items-start">
        <div
          style={{
            color: COLORS.sub.gray4,
            fontSize: FONT_SIZE.body1,
            fontWeight: FONT_WEIGHT.body1,
          }}
        >
          {title}
        </div>
        <div
          className="mt-[-2px]"
          style={{
            color: COLORS.sub.gray3,
            fontSize: FONT_SIZE.caption2,
            fontWeight: FONT_WEIGHT.caption2,
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}
