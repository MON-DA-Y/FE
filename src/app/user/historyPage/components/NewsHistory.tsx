import NewsCard from "./NewsCard";

export default function NewsHistory() {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-15 p-2">
      <NewsCard type="MONEY" title="트럼프, 그가 하고 있는 일" />
      <NewsCard type="BIGPICTURE" title="충격에 빠진 한국 경제" />
      <NewsCard type="GLOBAL" title="트럼프, 그가 하고 있는 일" />
      <NewsCard type="ISSUES" title="트럼프, 그가 하고 있는 일" />
    </div>
  );
}
