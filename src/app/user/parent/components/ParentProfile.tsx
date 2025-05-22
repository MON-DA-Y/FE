import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import Image from "next/image";
import Link from "next/link";

export default function ParentProfile() {
  return (
    <div className="flex items-center gap-7">
      <div style={{ fontSize: FONT_SIZE.body2, fontWeight: FONT_WEIGHT.body2 }}>
        이00님
      </div>
      <div>
        <Link href="../mypage" className="cursor-pointer">
          <Image
            src="/images/parent.png"
            alt="parent"
            width={50}
            height={50}
            className="rounded-[50px]"
          />
        </Link>
      </div>
    </div>
  );
}
