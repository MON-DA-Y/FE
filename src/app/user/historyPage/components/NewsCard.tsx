import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import CategoryBtn from "./CategoryBtn";
import { Category } from "@/types/category";
import Image from "next/image";

interface NewsCardProps {
  category: Category;
  imgUrl?: string;
  title: string;
  isCorrect: boolean;
}

export default function NewsCard({ category, imgUrl, title }: NewsCardProps) {
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
        <CategoryBtn type={category} />
      </div>
      <div className="relative flex items-center justify-center w-44 h-44 rounded-[10px] border border-gray-300">
        {imgUrl ? (
          <div className="relative w-44 h-44 rounded-[10px] overflow-hidden">
            <Image src={imgUrl} alt={title} fill className="object-cover" />
          </div>
        ) : (
          <div className="relative w-20 h-20 mx-auto my-auto">
            <Image
              src={defaultImg}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        )}
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
