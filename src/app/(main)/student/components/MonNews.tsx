"use Client";

import { useState, useEffect, ReactNode } from "react";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import Image from "next/image";
import styled from "styled-components";

export default function MonNews() {
  const [monNews, setMonNew] = useState<ReactNode>(null);

  useEffect(() => {
    setMonNew(
      <>
        우리나라 돈의 가치가 떨어져서, <Mint>1달러</Mint>를 사려면{" "}
        <Mint>1,480원</Mint>이나 필요하다고?
      </>
    );
  }, []);
  return (
    <div
      className="w-95 p-6 rounded-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] flex flex-col justify-start gap-2.5"
      style={{ background: COLORS.primary.navy }}
    >
      <Image
        src="/icons/MonNews_white.svg"
        alt="MonNews"
        width={181}
        height={61}
        className=""
      />
      <div className="w-80 h-44 p-10 flex justify-center items-center relative bg-white rounded-[20px] overflow-hidden">
        <span
          className=""
          style={{
            color: COLORS.sub.black,
            fontSize: FONT_SIZE.subtitle2,
            fontWeight: FONT_WEIGHT.subtitle2,
          }}
        >
          {monNews}
        </span>
      </div>
    </div>
  );
}

const Mint = styled.span`
  color: ${COLORS.primary.mint};
`;
