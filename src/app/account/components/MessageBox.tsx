import { COLORS } from "@/styles/theme/tokens";
import Image from "next/image";
import { ReactNode } from "react";

interface MessageBoxProps {
  userType: "student" | "parent";
  width: number;
  children: ReactNode;
}

export default function MessageBox({
  userType,
  width,
  children,
}: MessageBoxProps) {
  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        src={
          userType === "student"
            ? "/images/polygon_navy.svg"
            : "/images/polygon_mint.svg"
        }
        width={43}
        height={47}
        alt="polygon"
        style={{ marginBottom: "-15px" }}
      />
      <div
        style={{
          backgroundColor:
            userType === "student" ? COLORS.primary.navy : COLORS.primary.mint,
          borderRadius: "16px",
          width: `${width}px`,
          height: "110px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
