import HistoryCard from "./HistoryCard";

export default function NewsHistory() {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-15 p-2">
      <HistoryCard type="MONEY" title="트럼프, 그가 하고 있는 일" />
      <HistoryCard type="BIGPICTURE" title="충격에 빠진 한국 경제" />
      <HistoryCard type="GLOBAL" title="트럼프, 그가 하고 있는 일" />
      <HistoryCard type="ISSUES" title="트럼프, 그가 하고 있는 일" />
    </div>
  );
}
