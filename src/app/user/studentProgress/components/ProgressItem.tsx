// 해당 날짜의 학습 기록
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import StatusBtn from "./StatusBtn";
import { ProgressDay } from "@/apis/progress";

interface ProgressItemProps {
  days: ProgressDay;
}

export default function ProgressItem({ days }: ProgressItemProps) {
  const { day, tasks } = days;

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
          <div>{day.split("T")[0]}</div>
          <div className="flex gap-6">
            {Object.entries(tasks).map(([label, status]) => (
              <StatusBtn
                key={label}
                label={label}
                status={status as "done" | "ongoing" | "pending"}
              />
            ))}
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
