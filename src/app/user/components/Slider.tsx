import { FONT_SIZE, FONT_WEIGHT, COLORS } from "@/styles/theme/tokens";
import { Category } from "../../../../types/category";
import { Category_Label } from "../../../../constants/categoryLabel";
import { Category_Color } from "../../../../constants/categoryColor";

export default function Slider({ type }: { type: Category }) {
  const label = Category_Label[type]?.label;
  const color = Category_Color[type];

  return (
    <div
      className="flex flex-col gap-3.5 px-2.5"
      style={{ fontSize: FONT_SIZE.body2, fontWeight: FONT_WEIGHT.body2 }}
    >
      <div className="flex gap-75">
        {label}
        <div className="absolute right-120">2/5</div>
      </div>
      <div
        className="relative w-96 h-3 rounded"
        style={{ backgroundColor: COLORS.sub.gray1 }}
      >
        <div
          className="absolute top-0 left-0 w-50 h-3 rounded"
          style={{ width: "40%", backgroundColor: color }}
        />
      </div>
    </div>
  );
}
