"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const signupClick = () => {
    router.push("/account");
  };

  return (
    <div className="relative flex justify-center gap-5">
      <div className="flex flex-col gap-0">
        <img
          src="/home/home1.svg"
          alt="home1"
          className="w-full h-auto cursor-pointer"
          onClick={signupClick}
        />
        <img src="/home/home2.svg" alt="home2" className="w-full h-auto" />
        <img src="/home/home3.svg" alt="home3" className="w-full h-auto" />
        <img src="/home/home4.svg" alt="home4" className="w-full h-auto" />
        <img src="/home/home5.svg" alt="home5" className="w-full h-auto" />
      </div>
    </div>
  );
}
