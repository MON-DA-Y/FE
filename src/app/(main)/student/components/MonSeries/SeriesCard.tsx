"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import WordBox from "@/components/ui/WordBox";
import { useRouter } from "next/navigation";

interface SeriesCardProps {
  onClick: () => void;
  category: string;
  children: React.ReactNode;
}
export default function SeriesCard({
  onClick,
  category,
  children,
}: SeriesCardProps) {
  const router = useRouter();

  return (
    <>
      <div
        className="mt-4 relative cursor-pointer"
        onClick={() => router.push("/MonSeries")}
      >
        <div className="left-6 top-[-10] absolute">
          <WordBox
            p={"3px 10px"}
            bg={`${COLORS.primary.mint}`}
            textColor={`${COLORS.series.deepGreen}`}
            font={"caption1"}
          >
            {category}
          </WordBox>
        </div>
        <div
          onClick={onClick}
          className="z-10 w-80 h-20 px-10 py-3 bg-white rounded-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] inline-flex justify-start items-center gap-5 "
        >
          <div
            className="w-56 justify-start truncate overflow-hidden whitespace-nowrap"
            style={{
              color: COLORS.primary.navy,
              fontSize: FONT_SIZE.subtitle2,
              fontWeight: FONT_WEIGHT.subtitle2,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
