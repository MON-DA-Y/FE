import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

interface TabBarProps {
  onChange: (value: { selectedTab: "series" | "keyword" }) => void;
  selectedTab: "series" | "keyword";
}

export default function TabBar({ onChange, selectedTab }: TabBarProps) {
  const handleTabChange = (tab: "series" | "keyword") => {
    onChange({
      selectedTab: tab,
    });
  };

  return (
    <div
      className="flex w-[195px] justify-between rounded-2xl px-1.5 py-1 whitespace-nowrap"
      style={{ backgroundColor: COLORS.sub.gray2 }}
    >
      <button
        type="button"
        className="rounded-2xl px-1 py-1 transition all"
        style={{
          fontSize: FONT_SIZE.body2,
          fontWeight: FONT_WEIGHT.body2,
          backgroundColor:
            selectedTab === "series" ? COLORS.sub.white : COLORS.sub.gray2,
          color: selectedTab === "series" ? COLORS.sub.black : COLORS.sub.gray3,
        }}
        onClick={() => handleTabChange("series")}
      >
        시리즈로 보기
      </button>
      <button
        type="button"
        className="rounded-2xl px-1 py-1 transition all"
        style={{
          fontSize: FONT_SIZE.body2,
          fontWeight: FONT_WEIGHT.body2,
          backgroundColor:
            selectedTab === "keyword" ? COLORS.sub.white : COLORS.sub.gray2,
          color:
            selectedTab === "keyword" ? COLORS.sub.black : COLORS.sub.gray3,
        }}
        onClick={() => handleTabChange("keyword")}
      >
        키워드로 보기
      </button>
    </div>
  );
}
