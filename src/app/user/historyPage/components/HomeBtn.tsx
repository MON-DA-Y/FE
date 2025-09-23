"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface HomeBtnProps {
  role: "student" | "parent";
  studentId?: string | null; // 부모일 경우만 필요
}

export default function HomeBtn({ role, studentId }: HomeBtnProps) {
  const router = useRouter();

  return (
    <Image
      src="/icons/Home.svg"
      alt="home"
      width={40}
      height={40}
      onClick={() =>
        router.push(
          role === "student" ? `/user/student` : `/user/parent/${studentId}`
        )
      }
      className="cursor-pointer"
    />
  );
}
