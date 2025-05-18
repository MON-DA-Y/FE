"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ReactConfetti from "react-confetti";
import Image from "next/image";
import Icon from "../../components/Icon";
import MessageBox from "../../components/MessageBox";
import { COLORS } from "@/styles/theme/tokens";

export default function SuccessPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      router.push("/main");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {isClient && <ReactConfetti />}
      <Image
        src="/images/logo.svg"
        width={318}
        height={95}
        alt="logo"
        priority
      />
      <p className="text-5xl font-bold">하루를 시작해보세요</p>
      <div className="flex flex-col items-center pt-20 gap-8">
        <Icon userType="parent" label="학부모" />
        <MessageBox userType="parent" width={279} height={110}>
          우리 아이{" "}
          <span style={{ color: COLORS.primary.navy }}>학습 리포트</span>를
          <br /> 보러 가볼까요?
        </MessageBox>
      </div>
    </div>
  );
}
