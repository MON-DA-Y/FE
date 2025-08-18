import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { Category_Color } from "../../../../../constants/categoryColor";
import { Category } from "../../../../../types/category";

interface WordItemProps {
  type: Category;
  word: string;
  wordDescription: string;
  wordUse: string;
}

export default function WordItem({
  type,
  word,
  wordDescription,
  wordUse,
}: WordItemProps) {
  const color = Category_Color[type];

  return (
    <div className="pb-3">
      <div className="flex items-center gap-4 pb-3">
        <div className="flex items-center gap-4">
          <div
            className="w-[13px] h-[13px]"
            style={{ backgroundColor: color }}
          ></div>
          <div
            className="w-43 whitespace-nowrap truncate"
            style={{
              fontSize: FONT_SIZE.subtitle1,
              fontWeight: FONT_WEIGHT.subtitle1,
            }}
          >
            {word}
          </div>
        </div>
        <div
          className="flex flex-col gap-1"
          style={{
            fontSize: FONT_SIZE.subtitle2,
            fontWeight: FONT_WEIGHT.subtitle2,
          }}
        >
          <div className="max-w-[46ch]">{wordDescription}</div>
          <div className="flex items-center gap-3">
            <div
              className="rounded-[20px] w-20 h-8 flex justify-center items-center"
              style={{
                backgroundColor: COLORS.sub.gray1,
                color: COLORS.sub.gray3,
              }}
            >
              써먹기
            </div>
            <div style={{ color: COLORS.sub.gray4 }}>{wordUse}</div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[1px] border"
        style={{ borderColor: COLORS.sub.gray2 }}
      ></div>
    </div>
  );
}
