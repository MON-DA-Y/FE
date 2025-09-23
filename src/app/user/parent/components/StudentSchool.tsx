import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

interface StudentSchoolProps {
  schoolType: string;
  grade: number;
}

export default function StudentSchool({
  schoolType,
  grade,
}: StudentSchoolProps) {
  return (
    <div
      className="flex w-22 h-7 rounded-[30px] justify-center items-center"
      style={{
        backgroundColor: COLORS.sub.gray1,
        fontSize: FONT_SIZE.body2,
        fontWeight: FONT_WEIGHT.body2,
      }}
    >
      {schoolType === "middle" ? "중학교" : "고등학교"} {grade}학년
    </div>
  );
}
