"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Options from "./Options";

interface DropdownProps {
  type:
    | "year"
    | "month"
    | "week"
    | "day"
    | "category"
    | "keyword"
    | "result"
    | "status";
}

export default function Dropdown({ type }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | number | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value: string | number) => {
    setSelected(value);
    setIsOpen(false);
  };

  const defaultPlaceholder = {
    year: new Date().getFullYear() + "년",
    month: new Date().getMonth() + 1 + "월",
    week: "첫째주",
    day: "요일",
    category: "카테고리",
    keyword: "키워드",
    result: "전체",
    status: "전체",
  }[type];

  return (
    <div
      ref={dropdownRef}
      className="relative flex justify-start items-center pl-5 pr-10 h-11 bg-white rounded-lg"
      style={{
        boxShadow: SHADOW.interactive,
        minWidth: "90px",
      }}
    >
      <span
        style={{
          fontSize: FONT_SIZE.body1,
          fontWeight: FONT_WEIGHT.body1,
          color: COLORS.sub.gray3,
        }}
      >
        {selected || defaultPlaceholder}
      </span>
      <Image
        src="/icons/Arrow_Down.png"
        alt="dropdown"
        width={24}
        height={24}
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-[10.5px] cursor-pointer"
      />
      {isOpen && (
        <div
          className="absolute top-full mt-1 left-0 bg-white rounded-lg z-10"
          style={{
            boxShadow: SHADOW.interactive,
            maxHeight: "220px",
            overflowY: "auto",
          }}
        >
          <Options type={type} onSelect={handleSelect} selected={selected} />
        </div>
      )}
    </div>
  );
}
