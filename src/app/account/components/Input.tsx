import { COLORS } from "@/styles/theme/tokens";
import { ReactNode } from "react";

interface InputProps {
  children: ReactNode;
}

export default function Input({ children }: InputProps) {
  <div
    className="w-[354px] h-[51px] p-4 bg-white"
    style={{
      borderRadius: "69px",
      border: COLORS.sub.gray2,
      font: COLORS.sub.gray2,
    }}
  >
    {children}
  </div>;
}
