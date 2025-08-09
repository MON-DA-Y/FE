import { FONT_SIZE, FONT_WEIGHT, COLORS } from "@/styles/theme/tokens";

interface OptionsProps {
  type:
    | "year"
    | "month"
    | "week"
    | "day"
    | "category"
    | "keyword"
    | "result"
    | "status";
  onSelect: (value: string | number) => void;
  selected: string | number | null;
}

export default function Options({ type, onSelect }: OptionsProps) {
  const currentYear = new Date().getFullYear();
  const getOptions = (type: string) => {
    switch (type) {
      case "year":
        return Array.from({ length: 5 }, (_, i) => `${currentYear - i}년`);
      case "month":
        return Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
      case "week":
        return ["전체", "첫째주", "둘째주", "셋째주", "넷째주", "다섯째주"];
      case "day":
        return [
          "전체",
          "월요일",
          "화요일",
          "수요일",
          "목요일",
          "금요일",
          "토요일",
          "일요일",
        ];
      case "category":
        return [
          "전체",
          "정책/규제",
          "거시경제",
          "특집이슈",
          "글로벌경제",
          "금융/시장",
        ];
      case "keyword":
        return [
          "전체",
          "정책/규제",
          "거시경제",
          "특집이슈",
          "글로벌경제",
          "금융/시장",
        ];
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
