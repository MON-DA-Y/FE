import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import CategoryBtn from "./CategoryBtn";
import HistoryStatusBtn from "./HistoryStatusBtn";
import { Category } from "../../../../../types/category";
import Image from "next/image";

interface HistoryCardProps {
  //뉴스 api 연결 시 정보들
  type: Category;
  status: "ongoing" | "done";
  imgUrl?: string;
  title: string;
  isSeries: boolean;
}

export default function HistoryCard({
  type,
  status,
  imgUrl,
  title,
  isSeries,
}: HistoryCardProps) {
  const defaultImg = "/images/logo.svg";

  return (
    <div
      className="flex flex-col relative w-60 h-72 rounded-[20px] px-8 py-9"
      style={{
        backgroundColor: COLORS.sub.white,
        boxShadow: SHADOW.interactive,
      }}
    >
      <div className="absolute flex -top-3.5 left-6 gap-4">
        <CategoryBtn type={type} />
        {isSeries && <HistoryStatusBtn status={status} />}
      </div>
      <div className="flex items-center justify-center w-44 h-44 rounded-[10px] border border-gray-300">
        <Image src={imgUrl ?? defaultImg} width={59} height={40} alt={title} />
      </div>
      <div
        className="relative group pt-4"
        style={{
          fontSize: FONT_SIZE.subtitle2,
          fontWeight: FONT_WEIGHT.subtitle2,
          color: COLORS.primary.navy,
        }}
      >
        <div className="truncate">{title}</div>
        <div
          className="absolute flex items-center justify-center w-fit h-5 opacity-0 group-hover:opacity-100 bottom-full inset-0 left-0 z-50 rounded-[5px] px-1.5 whitespace-nowrap"
          style={{
            backgroundColor: COLORS.sub.gray1,
            fontSize: FONT_SIZE.caption2,
            fontWeight: FONT_WEIGHT.caption2,
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
}
