import { FONT_SIZE, FONT_WEIGHT, COLORS, SHADOW } from "@/styles/theme/tokens";
import { Category } from "../../../../types/category";
import { Category_Label } from "../../../../../constants/categoryLabel";
import { Category_Color } from "../../../../../constants/categoryColor";

export default function CategoryBtn({ type }: { type: Category }) {
  const label = Category_Label[type]?.label;
  const color = Category_Color[type];

  return (
    <div
      className="flex items-center justify-center w-22 h-[26px] rounded-[30px] whitespace-nowrap"
      style={{
        fontSize: FONT_SIZE.body2,
        fontWeight: FONT_WEIGHT.body2,
        backgroundColor: color,
        color: COLORS.sub.black,
        boxShadow: SHADOW.interactive,
      }}
    >
      {label}
    </div>
  );
}
