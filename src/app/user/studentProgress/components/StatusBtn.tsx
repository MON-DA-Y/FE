import { FONT_SIZE, FONT_WEIGHT, SHADOW, COLORS } from "@/styles/theme/tokens";
import { useRouter } from "next/navigation";

interface StatusBtnProps {
  label: string;
  status: "done" | "ongoing" | "pending";
}

export default function StatusBtn({ label, status }: StatusBtnProps) {
  const router = useRouter();
  const colorStyle = (() => {
    switch (status) {
      case "done":
        return {
          backgroundColor: COLORS.primary.mint,
          color: COLORS.series.deepGreen,
        };
      case "ongoing":
        return {
          backgroundColor: COLORS.series.yellow2,
          color: COLORS.series.yellow3,
        };
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
      MON{label}
    </div>
  );
}
