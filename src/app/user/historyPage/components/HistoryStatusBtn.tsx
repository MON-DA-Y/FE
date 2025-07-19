import { FONT_SIZE, FONT_WEIGHT, COLORS, SHADOW } from "@/styles/theme/tokens";
import Image from "next/image";

interface HistoryStatusProps {
  status: "ongoing" | "done";
}

export default function HistoryStatusBtn({ status }: HistoryStatusProps) {
  return (
    <div className="relative group">
      <div
        className="flex items-center justify-center w-22 h-[26px] rounded-[30px] whitespace-nowrap"
        style={{
          fontSize: FONT_SIZE.body2,
          fontWeight: FONT_WEIGHT.body2,
          backgroundColor:
            status === "ongoing" ? COLORS.primary.mint : COLORS.primary.navy,
          color: status === "ongoing" ? COLORS.sub.black : COLORS.sub.white,
          boxShadow: SHADOW.interactive,
        }}
      >
        {status === "ongoing" ? "학습중" : "완료"}
      </div>
      <div className="absolute bottom-full left-3.5 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="relative w-[59px] h-[40px]">
          <Image
            src="/images/series_status.svg"
            width={59}
            height={40}
            alt="status"
          />
          <span
            className="absolute top-[1.5px] left-[17px]"
            style={{ fontSize: FONT_SIZE.body2, fontWeight: FONT_WEIGHT.body2 }}
          >
            {/*이후에 비율 data 받아와서 수정*/}
            3/11
          </span>
        </div>
      </div>
    </div>
  );
}
