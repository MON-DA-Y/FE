import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import HistoryStatusBtn from "./HistoryStatusBtn";
import Image from "next/image";

interface SeriesCardProps {
  keyword: string;
  status?: "ongoing" | "done";
  imgUrl?: string;
  title: string;
  onClick?: () => void;
}

export default function SeriesCard({
  keyword,
  status,
  imgUrl,
  title,
  onClick,
}: SeriesCardProps) {
  const defaultImg = "/images/logo.svg";

  return (
    <div
      className="flex flex-col relative w-60 h-78 rounded-[20px] px-8 py-7"
      style={{
        backgroundColor: COLORS.sub.white,
        boxShadow: SHADOW.interactive,
      }}
      onClick={onClick}
    >
      <div className="absolute flex -top-3.5 right-7">
        {status && <HistoryStatusBtn status={status} />}
      </div>
      <div
        style={{
          fontSize: FONT_SIZE.subtitle2,
          fontWeight: FONT_WEIGHT.subtitle1,
        }}
      >
        {keyword}
      </div>
      <div className="flex items-center justify-center w-44 h-44 rounded-[10px] border border-gray-300 mt-4">
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
        <div className="truncate" title={title}>
          {title}
        </div>
      </div>
    </div>
  );
}
