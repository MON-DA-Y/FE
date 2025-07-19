"use client";

import Logo from "./components/Logo";
import MonWord from "./components/MonWord";
import MonSeries from "./components/MonSeries/MonSeries";
import { useRouter } from "next/navigation";

export default function StudentMyPage() {
  const router = useRouter();

  return (
    <div className="relative w-full h-full overflow-auto px-13 pt-5">
      <Logo />
      <MonWord />
      <MonSeries />
    </div>
  );
}
