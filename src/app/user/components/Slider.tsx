import { FONT_SIZE, FONT_WEIGHT, COLORS } from "@/styles/theme/tokens";
import { Category } from "../../../types/category";
import { Category_Label } from "../../../../constants/categoryLabel";
import { Category_Color } from "../../../../constants/categoryColor";

interface SliderProps {
  category: Category;
  total: number;
  correct: number;
}

export default function Slider({ category, total, correct }: SliderProps) {
  const label = Category_Label[category]?.label;
  const color = Category_Color[category];
  const score = total > 0 ? correct / total : 0;

  return (
    <div
      className="flex flex-col gap-3.5 px-2.5"
      style={{ fontSize: FONT_SIZE.body2, fontWeight: FONT_WEIGHT.body2 }}
    >
      <div className="flex w-96 justify-between">
        <div>{label}</div>
        <div className="">{`${correct}/${total}`}</div>
      </div>
      <div
        className="relative w-96 h-3 rounded"
        style={{ backgroundColor: COLORS.sub.gray1 }}
      >
        <div
          className="absolute top-0 left-0 w-50 h-3 rounded"
          style={{ width: `${score * 100}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
