import { ReactNode } from "react";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

interface RedBoxProps {
  title: string;
  children: ReactNode;
}

const RedBox = ({ title, children }: RedBoxProps) => {
  return (
    <div
      className="relative px-7 py-2.5 text-white rounded-2xl flex justify-start items-center gap-9"
      style={{ backgroundColor: COLORS.series.error }}
    >
      <div
        style={{
          fontSize: FONT_SIZE.subtitle2,
          fontWeight: FONT_WEIGHT.subtitle2,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: FONT_SIZE.caption1,
          fontWeight: FONT_WEIGHT.caption1,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default RedBox;
