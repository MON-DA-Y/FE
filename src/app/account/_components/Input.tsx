import { COLORS } from "@/styles/theme/tokens";
import { ReactNode } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  children?: ReactNode;
  width: number;
  onChange?: (value: string) => void;
}

export default function Input({
  type,
  placeholder,
  value,
  children,
  width,
  onChange,
}: InputProps) {
  return (
    <div
      className="flex items-center h-[55px] p-5 bg-white border gap-9"
      style={{
        borderRadius: "69px",
        borderColor: COLORS.sub.gray2,
        color: COLORS.sub.gray3,
        width: `${width}px`,
      }}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {children}
    </div>
  );
}
