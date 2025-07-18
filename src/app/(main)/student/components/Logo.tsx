"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="grid place-items-start w-[318px] h-[114px]">
      <Image src="/images/logo.svg" alt="Logo" width={318} height={95} />
      <Image
        src="/images/sub_logo.svg"
        alt="SubLogo"
        width={281}
        height={29}
        className="mt-[-10px]"
      />
    </div>
  );
}
