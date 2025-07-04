"use client";

import Image from "next/image";
import Icon from "../components/icon";
import MessageBox from "../components/MessageBox";
import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import Input from "../components/Input";
import { useState } from "react";

export default function LoginPage() {
  const [selectedType, setSelectedType] = useState<"student" | "parent">(
    "student"
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/images/logo.svg"
        width={318}
        height={95}
        alt="logo"
        priority
      />
      <div style={{ fontSize: "45px", fontWeight: "bold" }}>로그인</div>
      <div className="flex pt-15 gap-40">
        <Icon
          userType={"student"}
          label="학생"
          onClick={() => setSelectedType("student")}
        />
        <Icon
          userType={"parent"}
          label="학부모"
          onClick={() => setSelectedType("parent")}
        />
      </div>
      <div className="flex pt-5">
        <MessageBox
          userType={selectedType}
          width={444}
          height={203}
          marginLeft={selectedType === "student" ? -255 : 265}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col gap-3">
              <Input type="email" placeholder="이메일" width={303} />
              <Input type="password" placeholder="비밀번호" width={303} />
            </div>
            <button
              style={{
                width: "78px",
                height: "100px",
                borderRadius: "20px",
                backgroundColor:
                  selectedType === "student" ? "#B3BFD6" : "#12511F",
                boxShadow: SHADOW.interactive,
                fontSize: FONT_SIZE.subtitle2,
                fontWeight: FONT_WEIGHT.subtitle2,
                color:
                  selectedType === "student"
                    ? COLORS.primary.navy
                    : COLORS.primary.mint,
              }}
            >
              로그인
            </button>
          </div>
        </MessageBox>
      </div>
    </div>
  );
}
