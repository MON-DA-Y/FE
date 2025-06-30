import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

export default function StudentSchool() {
  return (
    <div
      className="flex w-22 h-7 rounded-[30px] justify-center items-center"
      style={{
        backgroundColor: COLORS.sub.gray1,
        fontSize: FONT_SIZE.body2,
        fontWeight: FONT_WEIGHT.body2,
      }}
    >
      00중 2학년
    </div>
  );
}
