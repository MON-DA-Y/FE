"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Icon from "../components/icon";
import MessageBox from "../components/MessageBox";
import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import Input from "../components/Input";
import { useState } from "react";
import { studentLogin, parentLogin } from "@/apis/auth";

export default function LoginPage() {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [selectedType, setSelectedType] = useState<"student" | "parent">(
    "student"
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      let res;
      if (selectedType === "student") {
        res = await studentLogin({ email, password });
      } else {
        res = await parentLogin({ email, password });
      }
      localStorage.setItem("token", res.token);
      router.push(`/${selectedType}`); // 로그인 성공 후 이동
    } catch (err: any) {
      alert(err.message || "로그인 실패");
    }
  };

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
              <Input
                type="email"
                placeholder="이메일"
                width={303}
                onChange={(value) => setEmail(value)}
              />
              <Input
                type="password"
                placeholder="비밀번호"
                width={303}
                onChange={(value) => setPassword(value)}
              />
            </div>
            <button
              onClick={handleLogin}
              style={{
                width: "78px",
                height: "100px",
                borderRadius: "20px",
                backgroundColor: isActive
                  ? COLORS.sub.white // active 상태 배경
                  : isHover
                  ? COLORS.sub.white // hover 상태 배경
                  : selectedType === "student"
                  ? "#B3BFD6" // 기본 배경
                  : "#12511F",
                boxShadow: SHADOW.interactive,
                fontSize: FONT_SIZE.subtitle2,
                fontWeight: FONT_WEIGHT.subtitle2,
                color: isActive
                  ? selectedType === "student"
                    ? COLORS.primary.navy // active 글자색
                    : "#12511F"
                  : isHover
                  ? selectedType === "student"
                    ? COLORS.primary.navy // hover 글자색
                    : "#12511F"
                  : selectedType === "student"
                  ? COLORS.primary.navy // 기본 글자색
                  : COLORS.primary.mint,
              }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => {
                setIsHover(false);
                setIsActive(false);
              }}
              onMouseDown={() => setIsActive(true)}
              onMouseUp={() => setIsActive(false)}
            >
              로그인
            </button>
          </div>
        </MessageBox>
      </div>
    </div>
  );
}
