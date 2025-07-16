import { FONT_SIZE, FONT_WEIGHT, COLORS } from "@/styles/theme/tokens";

interface MonthOptionsProps {
  onSelect: (value: string | number) => void;
  selected: string | number | null;
}

export default function MonthOptions({ onSelect }: MonthOptionsProps) {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <ul>
      {months.map((month) => (
        <li
          key={month}
          className="flex items-center justify-center w-36 h-11 bg-white rounded-lg cursor-pointer"
          style={{
            fontSize: FONT_SIZE.subtitle2,
            fontWeight: FONT_WEIGHT.subtitle2,
            color: COLORS.sub.gray3,
          }}
          onClick={() => onSelect(`${month}월`)}
        >
          {month}월
        </li>
      ))}
    </ul>
  );
}
