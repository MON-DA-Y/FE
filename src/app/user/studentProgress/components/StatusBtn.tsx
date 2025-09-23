// task 상태 버튼
import { FONT_SIZE, FONT_WEIGHT, SHADOW, COLORS } from "@/styles/theme/tokens";
import { useRouter } from "next/navigation";

interface StatusBtnProps {
  label: string;
  status: "done" | "pending";
}

const labelMap: Record<StatusBtnProps["label"], string> = {
  word: "단어",
  news: "뉴스",
  quiz: "퀴즈",
};

export default function StatusBtn({ label, status }: StatusBtnProps) {
  const router = useRouter();
  const colorStyle = (() => {
    switch (status) {
      case "done":
        return {
          backgroundColor: COLORS.primary.mint,
          color: COLORS.series.deepGreen,
        };
      // case "ongoing":
      //   return {
      //     backgroundColor: COLORS.series.yellow2,
      //     color: COLORS.series.yellow3,
      //   };
      case "pending":
        return {
          backgroundColor: COLORS.series.error,
          color: COLORS.sub.white,
        };
      default:
        return {};
    }
  })();

  return (
    //단어/뉴스/퀴즈 페이지로 이동하도록 router 수정
    <div
      className="w-30 h-9 px-7 py-1.5 rounded-[19px] flex items-center justify-center whitespace-nowrap cursor-pointer"
      style={{
        fontSize: FONT_SIZE.subtitle2,
        fontWeight: FONT_WEIGHT.subtitle2,
        boxShadow: SHADOW.interactive,
        ...colorStyle,
      }}
      onClick={() => router.push("/")}
    >
      MON{labelMap[label]}
    </div>
  );
}
