import { FONT_SIZE, FONT_WEIGHT, COLORS } from "@/styles/theme/tokens";

interface OptionsProps {
  type:
    | "year"
    | "month"
    | "week"
    | "category"
    | "keyword"
    | "result"
    | "status";
  onSelect: (value: string | number) => void;
  selected: string | number | null;
  keywords?: string[];
}

export default function Options({ type, onSelect, keywords }: OptionsProps) {
  const currentYear = new Date().getFullYear();
  const getOptions = (type: string) => {
    switch (type) {
      case "year":
        return Array.from({ length: 5 }, (_, i) => `${currentYear - i}년`);
      case "month":
        return Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
      case "week":
        return ["이번주", "저번주"];
      case "category":
        return [
          "전체",
          "금융/시장",
          "거시경제",
          "생활경제",
          "글로벌경제",
          "산업/기업",
          "특집/이슈",
          "테크/신사업",
          "정책/규제",
        ];
      case "keyword":
        return ["전체", ...(keywords ?? [])];
      case "result":
        return ["전체", "오답", "정답"];
      case "status":
        return ["전체", "학습중", "완료"];
      default:
        return [];
    }
  };

  const options = getOptions(type);
  return (
    <ul>
      {options.map((option, index) => (
        <li
          key={index}
          className="flex items-center justify-center w-full min-w-[90px] px-6 h-11 bg-white rounded-lg cursor-pointer whitespace-nowrap"
          style={{
            fontSize: FONT_SIZE.body2,
            fontWeight: FONT_WEIGHT.body2,
            color: COLORS.sub.gray3,
          }}
          onClick={() => onSelect(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
}
