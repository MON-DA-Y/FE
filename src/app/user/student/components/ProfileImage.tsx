"use client";

import { useRef, useState } from "react";
import { SHADOW, COLORS } from "@/styles/theme/tokens";
import Image from "next/image";

export default function ProfileImage() {
  const [profileImg, setProfileImg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImg(imageUrl);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative mb-6">
      <Image
        src={profileImg || "/images/student.png"}
        alt="profile"
        width={100}
        height={100}
      />

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="flex flex-col">
        <div
          onClick={handleClick}
          className="flex items-center justify-center w-7 h-7 border rounded-full mx-18 -mt-4"
          style={{
            boxShadow: SHADOW.interactive,
            borderColor: COLORS.sub.gray1,
            backgroundColor: COLORS.sub.white,
          }}
        >
          <Image
            src="/icons/Edit_Image.svg"
            alt="edit"
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  );
}
