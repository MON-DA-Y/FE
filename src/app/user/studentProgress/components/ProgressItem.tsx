import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import StatusBtn from "./StatusBtn";

export default function ProgressItem() {
  return (
    <div>
      <div className="w-full flex flex-col py-6 pl-8 whitespace-nowrap">
        <div
          className="flex items-center gap-16"
          style={{
            fontSize: FONT_SIZE.subtitle2,
            fontWeight: FONT_WEIGHT.subtitle2,
          }}
        >
          <div>2025년 7월 16일</div>
          <div className="flex gap-6">
            <StatusBtn label="단어" status="done" />
            <StatusBtn label="뉴스" status="done" />
            <StatusBtn label="시리즈" status="ongoing" />
            <StatusBtn label="퀴즈" status="pending" />
          </div>
        </div>
      </div>
      <div
        className="w-full h-[1px] border"
        style={{ borderColor: COLORS.sub.gray2 }}
      ></div>
    </div>
  );
}
