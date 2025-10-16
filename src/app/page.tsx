"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // const loginClick = () => {
  //   router.push("/account/login");
  // };

  const signupClick = () => {
    router.push("/account");
  };

  return (
    <div className="relative flex justify-center">
      <div className="flex flex-col gap-0">
        <div onClick={signupClick}>
          <Image
            src="/home/home1.svg"
            alt="home1"
            fill
            className="object-contain"
          />
        </div>
        <Image
          src="/home/home2.svg"
          alt="home2"
          fill
          className="object-contain"
        />
        <Image
          src="/home/home3.svg"
          alt="home3"
          fill
          className="object-contain"
        />
        <Image
          src="/home/home4.svg"
          alt="home4"
          fill
          className="object-contain"
        />
        <Image
          src="/home/home5.svg"
          alt="home5"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
