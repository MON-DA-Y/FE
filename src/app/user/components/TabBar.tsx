import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

interface TabBarProps {
  onChange: (value: { selectedTab: "word" | "news" }) => void;
  selectedTab: "word" | "news";
}

export default function TabBar({ onChange, selectedTab }: TabBarProps) {
  const handleTabChange = (tab: "word" | "news") => {
    onChange({
      selectedTab: tab,
    });
  };

  return (
    <div
      className="flex w-[150px] justify-between rounded-2xl px-1.5 py-1 whitespace-nowrap"
      style={{ backgroundColor: COLORS.sub.gray2 }}
    >
      <button
        type="button"
        className="rounded-xl px-1 py-1 transition all"
        style={{
          fontSize: FONT_SIZE.body2,
          fontWeight: FONT_WEIGHT.body2,
          backgroundColor:
            selectedTab === "word" ? COLORS.sub.white : COLORS.sub.gray2,
          color: selectedTab === "word" ? COLORS.sub.black : COLORS.sub.gray3,
        }}
        onClick={() => handleTabChange("word")}
      >
        MON단어
      </button>
      <button
        type="button"
        className="rounded-xl px-1 py-1 transition all"
        style={{
          fontSize: FONT_SIZE.body2,
          fontWeight: FONT_WEIGHT.body2,
          backgroundColor:
            selectedTab === "news" ? COLORS.sub.white : COLORS.sub.gray2,
          color: selectedTab === "news" ? COLORS.sub.black : COLORS.sub.gray3,
        }}
        onClick={() => handleTabChange("news")}
      >
        MON뉴스
      </button>
    </div>
  );
}
