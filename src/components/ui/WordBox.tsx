import { ReactNode } from "react";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

interface WordBoxProps {
  p: string; // 패딩
  bg: string; // 배경색
  textColor: string; // 텍스트 색상
  font: keyof typeof FONT_SIZE;
  children: ReactNode;
}

const WordBox = ({ p, bg, textColor, font, children }: WordBoxProps) => {
  return (
    <div
      className="w-fit rounded-[20px]"
      style={{ backgroundColor: bg, padding: p }}
    >
      <div
        className="justify-start text-body1 whitespace-nowrap"
        style={{
          color: textColor,
          fontSize: FONT_SIZE[font],
          fontWeight: FONT_WEIGHT[font],
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default WordBox;
