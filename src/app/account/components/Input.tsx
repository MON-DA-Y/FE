import { COLORS } from "@/styles/theme/tokens";
import { ReactNode } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  children?: ReactNode;
  width: number;
}

export default function Input({
  type,
  placeholder,
  value,
  children,
  width,
}: InputProps) {
  return (
    <div
      className="flex items-center h-[55px] p-4 bg-white border gap-9"
      style={{
        borderRadius: "69px",
        borderColor: COLORS.sub.gray2,
        color: COLORS.sub.gray2,
        width: `${width}px`,
      }}
    >
      <input type={type} placeholder={placeholder} value={value} />
      {children}
    </div>
  );
}
