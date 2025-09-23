import { COLORS, SHADOW } from "@/styles/theme/tokens";
import Image from "next/image";
import { ReactNode } from "react";

interface MessageBoxProps {
  userType: "student" | "parent";
  width: number;
  height: number;
  children: ReactNode;
  marginLeft?: number;
}

export default function MessageBox({
  userType,
  width,
  height,
  children,
  marginLeft,
}: MessageBoxProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={
          userType === "student"
            ? "/images/polygon_navy.svg"
            : "/images/polygon_mint.svg"
        }
        width={43}
        height={47}
        alt="polygon"
        style={{ marginBottom: "-15px", marginLeft: `${marginLeft}px` }}
      />
      <div
        className="flex flex-col justify-center items-center"
        style={{
          backgroundColor:
            userType === "student" ? COLORS.primary.navy : COLORS.primary.mint,
          borderRadius: "16px",
          width: `${width}px`,
          height: `${height}px`,
          boxShadow: SHADOW.interactive,
        }}
      >
        <span
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: "20px",
            color: "white",
          }}
        >
          {children}
        </span>
      </div>
    </div>
  );
}
