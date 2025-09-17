"use client";

import { useState, useEffect, ReactNode } from "react";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { stdMainApi } from "@/apis/stdMain";

export default function MonNews() {
  const [monNews, setMonNews] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchStdMonNews = async () => {
      try {
        setIsLoading(true);
        const data = await stdMainApi.getStdMonNews();
        setMonNews(data);
      } catch (error: any) {
        console.error("오늘 monQuiz 채점 조회 실패: ", error);
        const msg =
          error.response?.data?.message || "서버와 연결할 수 없습니다.";
        alert(msg);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStdMonNews();
  }, []);
  return (
    <div
      className="w-95 p-6 rounded-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] flex flex-col justify-start gap-2.5 cursor-pointer"
      style={{ background: COLORS.primary.navy }}
      onClick={() => router.push("/MonNews")}
    >
      <Image
        src="/icons/MonNews.svg"
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

// const Mint = styled.span`
//   color: ${COLORS.primary.mint};
// `;
