import { COLORS, FONT_SIZE, SHADOW } from "@/styles/theme/tokens";
import Image from "next/image";

interface IconProps {
  userType: "student" | "parent";
  label?: string;
  onClick?: () => void;
}

export default function Icon({ userType, label, onClick }: IconProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        onClick={onClick}
        className="flex items-center justify-center w-[100px] h-[100px] p-6"
        style={{
          borderRadius: "30px",
          boxShadow: SHADOW.interactive,
          backgroundColor:
            userType === "student" ? COLORS.primary.navy : COLORS.primary.mint,
        }}
      >
        <span
          style={{
            fontSize: "50px",
            lineHeight: 1,
          }}
        >
          <Image
            src={
              userType === "student"
                ? "/images/student.png"
                : "/images/parent.png"
            }
            alt="user"
            width={50}
            height={50}
          />
        </span>
      </div>
      <span
        style={{
          fontSize: FONT_SIZE.subtitle2,
          paddingTop: "5px",
        }}
      >
        {label}
      </span>
    </div>
  );
}
