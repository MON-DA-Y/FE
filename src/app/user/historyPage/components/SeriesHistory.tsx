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
        type="ISSUES"
        status="ongoing"
        title="트럼프, 그가 하고 있는 일"
      />
      <HistoryCard
        type="TECH"
        status="done"
        title="트럼프, 그가 하고 있는 일"
      />
      <HistoryCard
        type="RULES"
        status="done"
        title="트럼프, 그가 하고 있는 일"
      />
    </div>
  );
}
