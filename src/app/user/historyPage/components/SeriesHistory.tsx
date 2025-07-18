import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import HistoryCard from "./HistoryCard";

export default function SeriesHistory() {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-15 p-2">
      <HistoryCard
        type="MONEY"
        status="ongoing"
        title="트럼프, 그가 하고 있는 일"
      />
      <HistoryCard
        type="MONEY"
        status="ongoing"
        title="트럼프, 그가 하고 있는 일"
      />
      <HistoryCard
        type="MONEY"
        status="ongoing"
        title="트럼프, 그가 하고 있는 일"
      />
      <HistoryCard
        type="MONEY"
        status="ongoing"
        title="트럼프, 그가 하고 있는 일"
      />
    </div>
  );
}
