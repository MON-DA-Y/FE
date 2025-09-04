"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Options from "./Options";
import { getSeriesHistory, Series } from "@/apis/seriesHistory";

interface DropdownProps {
  type:
    | "year"
    | "month"
    | "week"
    | "category"
    | "keyword"
    | "result"
    | "status";
  value?: string | number | null;
  onChange?: (value: string | number) => void;
}

export default function Dropdown({ type, value, onChange }: DropdownProps) {
  const studentId = 1;
  const [week, setWeek] = useState<"이번주" | "저번주">("이번주");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [seriesList, setSeriesList] = useState<Series[]>([]);
  const keywords = Array.from(new Set(seriesList.map((s) => s.keyword))); // keyword 중복 제거

  // useEffect(() => {
  //   getSeriesHistory(studentId, week)
  //     .then((data) => setSeriesList(data.seriesList))
  //     .catch((err) => console.error("시리즈 히스토리 API 실패:", err));
  // }, [studentId, week]);

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

  const handleSelect = (selectedValue: string | number) => {
    setIsOpen(false);
    onChange?.(selectedValue);
  };

  const defaultPlaceholder = {
    year: new Date().getFullYear() + "년",
    month: new Date().getMonth() + 1 + "월",
    week: "이번주",
    category: "카테고리",
    keyword: "키워드",
    result: "전체",
    status: "전체",
  }[type];

  return (
    <div
      ref={dropdownRef}
      className="relative flex justify-start items-center pl-5 pr-10 h-11 bg-white rounded-lg cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
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
        {value || defaultPlaceholder}
      </span>
      <Image
        src="/icons/Arrow_Down.png"
        alt="dropdown"
        width={24}
        height={24}
        className="absolute right-[10.5px]"
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
          <Options
            type={type}
            onSelect={handleSelect}
            selected={value ?? defaultPlaceholder}
            keywords={keywords}
          />
        </div>
      )}
    </div>
  );
}
