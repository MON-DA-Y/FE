import { FONT_SIZE, FONT_WEIGHT, COLORS } from "@/styles/theme/tokens";

interface YearOptionsProps {
  onSelect: (value: string | number) => void;
  selected: string | number | null;
}

export default function YearOptions({ onSelect }: YearOptionsProps) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  return (
    <ul>
      {years.map((year) => (
        <li
          key={year}
          className="flex items-center justify-center w-36 h-11 bg-white rounded-lg"
          style={{
            fontSize: FONT_SIZE.subtitle2,
            fontWeight: FONT_WEIGHT.subtitle2,
            color: COLORS.sub.gray3,
          }}
          onClick={() => onSelect(`${year}년`)}
        >
          {year}년
        </li>
      ))}
    </ul>
  );
}
