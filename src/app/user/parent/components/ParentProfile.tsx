"use client";

import { useState, useEffect } from "react";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import Image from "next/image";
import Link from "next/link";
import { getParentInfo, PrtInfoResponse } from "@/apis/parentInfo";

export default function ParentProfile() {
  const [parent, setParent] = useState<PrtInfoResponse | null>(null);

  useEffect(() => {
    getParentInfo()
      .then(setParent)
      .catch((err) => console.error("부모 정보 API 실패:", err));
  }, []);

  return (
    <div className="flex items-center gap-7">
      <div style={{ fontSize: FONT_SIZE.body2, fontWeight: FONT_WEIGHT.body2 }}>
        {parent?.prt_name}님
      </div>
      <div>
        <Link href="../parent/mypage" className="cursor-pointer">
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
