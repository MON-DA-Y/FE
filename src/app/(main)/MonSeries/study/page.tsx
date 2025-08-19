"use client";

import Header from "./components/Header";
import { COLORS } from "@/styles/theme/tokens";
import Study from "./components/Study";

export default function page() {
  return (
    <>
      <div className="relative flex justify-center gap-5">
        <Header />
        <div
          className="mt-[30px] w-[722px] h-[455px] rounded-[30px] overflow-scroll"
          style={{
            background: COLORS.sub.gray1,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <Study />
        </div>
      </div>
    </>
  );
}
