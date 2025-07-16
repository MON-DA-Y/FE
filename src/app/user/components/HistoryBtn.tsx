import { COLORS, SHADOW } from "@/styles/theme/tokens";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface HistoryBtnProps {
  type: "word" | "news" | "series";
}

export default function HistoryBtn({ type }: HistoryBtnProps) {
  const label = (type: string) => {
    if (type === "word") return "단어";
    if (type === "news") return "뉴스";
    if (type === "series") return "시리즈";
  };
  const router = useRouter();

  const handleClick = () => {
    router.push(`/user/historyPage?type=${type}`);
  };

  return (
    <div
      className="flex items-center w-[420px] h-[106px] pl-5 rounded-[30px] whitespace-nowrap"
      style={{ boxShadow: SHADOW.interactive }}
      onClick={handleClick}
    >
      <Image
        src="/images/ellipse_mint.svg"
        width={66}
        height={66}
        alt="ellipse"
      />
      <span
        className="ml-[-35px]"
        style={{
          color: COLORS.primary.mint,
          fontSize: "40px",
          fontWeight: 800,
        }}
      >
        MON
      </span>
      <span
        style={{
          color: COLORS.primary.navy,
          fontSize: "40px",
          fontWeight: 800,
        }}
      >
        {label(type)}
      </span>
      <span
        className="mx-[10px]"
        style={{
          color: COLORS.primary.navy,
          fontSize: "40px",
          fontWeight: 800,
        }}
      >
        히스토리
      </span>
    </div>
  );
}
