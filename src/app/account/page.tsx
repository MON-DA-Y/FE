import Image from "next/image";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

export default function AccountPage() {
  return (
    <div className="flex flex-col items-center justify-center pt-8">
      <Image src="/images/logo.svg" alt="logo" width={318} height={95} priority />
      <div className="font-bold text-5xl" style={{ fontSize: "45px", fontWeight: "bold" }}>
        회원가입
      </div>
    </div>
  );
}
