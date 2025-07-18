"use client";

import { COLORS } from "@/styles/theme/tokens";
import Image from "next/image";
import WordBox from "@components/ui/WordBox";

export default function MonNews() {
  const monWords = ["디플레이션", "시장", "코인", "인플레이션"];

  return (
    <>
      <div
        className="w-[534px] h-28 px-6 mt-[15px] ml-[-18px] flex items-center gap-2.5 rounded-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"
        style={{ backgroundColor: COLORS.primary.navy }}
      >
        <Image
          src="/icons/MonWord_white.svg"
          alt="Mon단어"
          width={181}
          height={61}
        />
        <div className="w-72 relative overflow-hidden items-center">
          <div
            className="overflow-x-auto px-2 flex justify-start
             items-center gap-5"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {monWords.map((word, index) => (
              <WordBox
                p={"10px 20px"}
                bg={"white"}
                textColor={`${COLORS.primary.navy}`}
                font={"body1"}
              >
                {word}
              </WordBox>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
