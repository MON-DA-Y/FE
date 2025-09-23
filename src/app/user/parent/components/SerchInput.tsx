"use client";

import { COLORS } from "@/styles/theme/tokens";
import { useState } from "react";
import Image from "next/image";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [value, setValue] = useState("");

  const handleSearchClick = () => {
    onSearch(value);
  };

  return (
    <div className="flex h-11 p-5 rounded-[10px] border-[0.5px] items-center justify-between gap-5">
      <input
        type="text"
        placeholder="이메일 주소로 자녀를 검색합니다"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-72 placeholder-[#8E8E8E] placeholder:text-xl placeholder:font-semibold"
        style={{ borderColor: COLORS.sub.gray3 }}
      />
      <Image
        src="/icons/Search.svg"
        alt="search"
        width={20}
        height={20}
        className="cursor-pointer"
        onClick={handleSearchClick}
      />
    </div>
  );
}
