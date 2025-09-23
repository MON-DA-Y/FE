import { FONT_SIZE, FONT_WEIGHT, COLORS, SHADOW } from "@/styles/theme/tokens";
import StudentProfile from "../../components/StudentProfile";
import StudentLevel from "../../components/StudentLevel";

interface StudentCardProps {
  id?: number;
  name: string;
  school: string;
  grade: string;
  level: string;
  onDelete?: () => void;
  onClick?: () => void;
}

export default function StudentCard({
  name,
  school,
  grade,
  level,
  onDelete,
  onClick,
}: StudentCardProps) {
  return (
    <div
      className="relative flex w-64 h-28 rounded-[10px] p-5 border cursor-pointer hover:bg-gray-100"
      style={{
        borderColor: COLORS.sub.gray3,
        boxShadow: SHADOW.interactive,
        color: COLORS.sub.gray3,
      }}
      onClick={onClick}
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
            {name}
          </div>
          <div
            style={{
              fontSize: FONT_SIZE.body2,
              fontWeight: FONT_WEIGHT.body2,
            }}
          >
            {school === "middle" ? "중학교" : "고등학교"}
          </div>
          <div
            style={{
              fontSize: FONT_SIZE.body2,
              fontWeight: FONT_WEIGHT.body2,
            }}
          >
            {grade}
          </div>
        </div>
        <StudentLevel />
      </div>

      {/* 삭제 버튼 */}
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="absolute top-2 right-3 flex justify-center items-center w-3 h-3 rounded-full p-2.5"
          style={{ color: COLORS.sub.white, backgroundColor: COLORS.sub.gray3 }}
        >
          X
        </button>
      )}
    </div>
  );
}
