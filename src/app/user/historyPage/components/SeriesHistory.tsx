import CategoryBtn from "./CategoryBtn";
import HistoryStatusBtn from "./HistoryStatusBtn";

export default function SeriesHistory() {
  return (
    <div className="flex">
      <HistoryStatusBtn status="ongoing" />
      <HistoryStatusBtn status="done" />
    </div>
  );
}
