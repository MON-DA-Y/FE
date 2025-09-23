"use client";

import Logo from "./components/Logo";
import MonWord from "./components/MonWord";
import MonSeries from "./components/MonSeries/MonSeries";
import MonNews from "./components/MonNews";
import TodayLearningRate from "./components/TodayLearningRate";
import MonQuiz from "./components/MonQuiz";
import { useRouter } from "next/navigation";

export default function StudentMyPage() {
  const router = useRouter();

  return (
    <div className="relative w-full h-full overflow-auto px-10 pt-5">
      <Logo />
      <MonWord />
      <MonSeries />
      <div className="absolute bottom-0 right-5 flex flex-col items-center gap-[15px]">
        <TodayLearningRate />
        <MonNews />
      </div>
      <div className="absolute top-20 right-103">
        <MonQuiz />
      </div>
    </div>
  );
}
