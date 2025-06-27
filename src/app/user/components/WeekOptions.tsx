import { FONT_SIZE, FONT_WEIGHT, COLORS } from "@/styles/theme/tokens";

interface WeekOptionsProps {
  onSelect: (value: string | number) => void;
  selected: string | number | null;
}

export default function WeekOptions({ onSelect }: WeekOptionsProps) {
  const weeks = ["첫째주", "둘째주", "셋째주", "넷째주", "다섯째주"];

  return (
    <ul>
      {weeks.map((week, index) => (
        <li
          key={index}
          className="flex items-center justify-center w-36 h-11 bg-white rounded-lg"
          style={{
            fontSize: FONT_SIZE.subtitle2,
            fontWeight: FONT_WEIGHT.subtitle2,
            color: COLORS.sub.gray3,
          }}
          onClick={() => onSelect(week)}
        >
          {week}
        </li>
      ))}
    </ul>
  );
}
