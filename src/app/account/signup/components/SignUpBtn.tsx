import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";

interface SignUpBtnProps {
  userType: "student" | "parent";
}

export default function SignUpBtn({ userType }: SignUpBtnProps) {
  return (
    <div
      className="flex items-center justify-center w-[284px] h-[56px] border text-white"
      style={{
        backgroundColor:
          userType === "student" ? COLORS.primary.navy : COLORS.primary.mint,
        boxShadow: SHADOW.interactive,
        borderRadius: "80px",
        fontSize: FONT_SIZE.subtitle2,
        fontWeight: FONT_WEIGHT.subtitle2,
      }}
    >
      회원가입
    </div>
  );
}
