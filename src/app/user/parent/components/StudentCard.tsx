import { FONT_SIZE, FONT_WEIGHT, COLORS, SHADOW } from "@/styles/theme/tokens";
import StudentProfile from "../../components/StudentProfile";
import StudentLevel from "../../components/StudentLevel";

interface StudentCardProps {
  id: number;
  name: string;
  grade: string;
  level: string;
}

export default function StudentCard({
  id,
  name,
  grade,
  level,
}: StudentCardProps) {
  return (
    <div
      className="flex w-64 h-28 rounded-[10px] p-5"
      style={{
        borderColor: COLORS.sub.gray3,
        boxShadow: SHADOW.interactive,
        color: COLORS.sub.gray3,
      }}
    >
      <StudentProfile width={50} height={50} />
      <div className="flex flex-col mx-6 gap-2 justify-start">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <div
            style={{
              fontSize: FONT_SIZE.subtitle2,
              fontWeight: FONT_WEIGHT.subtitle2,
            }}
          >
            이00
          </div>
          <div
            style={{
              fontSize: FONT_SIZE.body2,
              fontWeight: FONT_WEIGHT.body2,
            }}
          >
            00중 2학년
          </div>
        </div>
        <StudentLevel />
      </div>
    </div>
  );
}
