"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import YearOptions from "./YearOptions";
import MonthOptions from "./MonthOptions";
import WeekOptions from "./WeekOptions";

interface DateDropdownProps {
  type: "year" | "month" | "week";
}

export default function DateDropdown({ type }: DateDropdownProps) {
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

  const renderOptions = () => {
    switch (type) {
      case "year":
        return <YearOptions onSelect={handleSelect} selected={selected} />;
      case "month":
        return <MonthOptions onSelect={handleSelect} selected={selected} />;
      case "week":
        return <WeekOptions onSelect={handleSelect} selected={selected} />;
      default:
        return null;
    }
  };

  const defaultPlaceholder = {
    year: new Date().getFullYear() + "년",
    month: new Date().getMonth() + 1 + "월",
    week: "첫째주",
  }[type];

  return (
    <div
      ref={dropdownRef}
      className="relative flex justify-start items-center pl-7 w-36 h-11 bg-white rounded-lg"
      style={{
        boxShadow: SHADOW.interactive,
      }}
    >
      <span
        style={{
          fontSize: FONT_SIZE.subtitle2,
          fontWeight: FONT_WEIGHT.subtitle2,
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
          {renderOptions()}
        </div>
      )}
    </div>
  );
}
