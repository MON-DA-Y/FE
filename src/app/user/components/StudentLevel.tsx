import { FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";

export default function StudentLevel() {
  return (
    <div
      className="flex w-20 h-6 rounded-[30px] justify-center items-center"
      style={{
        boxShadow: SHADOW.interactive,
        backgroundColor: "#ECFAEF",
        fontSize: FONT_SIZE.body2,
        fontWeight: FONT_WEIGHT.body2,
      }}
    >
      🌱새싹
    </div>
  );
}
