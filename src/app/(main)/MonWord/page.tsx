"use client";

import HomeBtn from "@/components/shared/HomeBtn";
import Image from "next/image";
import WordList from "./components/WordList";
import { COLORS } from "@/styles/theme/tokens";

export default function page() {
  return (
    <>
      <div className="relative flex justify-center gap-5">
        <div className="flex flex-col gap-32">
          <HomeBtn />
          <Image
            src="/icons/MonWord_header.svg"
            alt="Mon단어"
            width={227}
            height={85}
          />
        </div>
        <div
          className="mt-[30px] w-[722px] h-[455px] rounded-[30px] overflow-scroll"
          style={{
            background: COLORS.sub.gray1,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <WordList />
        </div>
      </div>
    </>
  );
}
