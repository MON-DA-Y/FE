"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomeBtn() {
  const router = useRouter();

  return (
    <Image
      src="/icons/Home.svg"
      alt="home"
      width={40}
      height={40}
      onClick={() => router.push("/user/student")}
      className="cursor-pointer"
    />
  );
}
