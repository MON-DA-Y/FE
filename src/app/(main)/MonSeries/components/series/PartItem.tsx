"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface PartProps {
  id: number;
  isLearned: boolean;
  part_title: string;
  part_sub_title: string;
}

export default function PartItem({
  id,
  isLearned,
  part_title,
  part_sub_title,
}: PartProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/MonSeries/${id}`);
  };

  return isLearned ? (
    <>
      {/* 학습한 파트 */}
      <div
        className="inline-flex justify-start items-center gap-[10px] cursor-pointer p-2.5 rounded-2xl outline-1 outline-offset-[-1px]"
        style={{
          outlineColor: COLORS.sub.gray1,
        }}
        onClick={handleClick}
      >
        <div className="flex justify-start items-center gap-[10px]">
          <Image
            src="/icons/Pin_LearnedPart.svg"
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
              {part_title}
            </div>
            <div
              className="mt-[-2px]"
              style={{
                color: COLORS.sub.gray3,
                fontSize: FONT_SIZE.caption2,
                fontWeight: FONT_WEIGHT.caption2,
              }}
            >
              {part_sub_title}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      {/* 학습할 파트 */}
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
        <div className="inline-flex flex-col justify-start">
          <div
            style={{
              color: COLORS.sub.black,
              fontSize: FONT_SIZE.body1,
              fontWeight: FONT_WEIGHT.body1,
            }}
          >
            {part_title}
          </div>
          <div
            className="mt-[-2px]"
            style={{
              color: COLORS.sub.gray4,
              fontSize: FONT_SIZE.caption2,
              fontWeight: FONT_WEIGHT.caption2,
            }}
          >
            {part_sub_title}
          </div>
        </div>
      </div>
    </>
  );
}
