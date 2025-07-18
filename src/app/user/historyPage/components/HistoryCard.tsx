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
}

export default function HistoryCard({
  type,
  status,
  imgUrl,
  title,
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
        <HistoryStatusBtn status={status} />
      </div>
      <div className="flex items-center justify-center w-44 h-44 rounded-[10px] border border-gray-300">
        <Image src={imgUrl ?? defaultImg} width={59} height={40} alt={title} />
      </div>
      <div
        className="pt-4 truncate"
        style={{
          fontSize: FONT_SIZE.subtitle2,
          fontWeight: FONT_WEIGHT.subtitle2,
          color: COLORS.primary.navy,
        }}
      >
        {title}
      </div>
      <div></div>
    </div>
  );
}
