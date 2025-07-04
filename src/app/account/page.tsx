"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Icon from "./components/icon";
import MessageBox from "./components/MessageBox";
import { COLORS } from "@/styles/theme/tokens";

export default function AccountPage() {
  const router = useRouter();

  const handleClick = (type: "student" | "parent") => {
    if (type === "student") {
      router.push("/account/signup/student");
    } else {
      router.push("/account/signup/parent");
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
      <div style={{ fontSize: "45px", fontWeight: "bold" }}>회원가입</div>
      <div className="flex pt-15 gap-40">
        <Icon
          userType={"student"}
          label="학생"
          onClick={() => handleClick("student")}
        />
        <Icon
          userType={"parent"}
          label="학부모"
          onClick={() => handleClick("parent")}
        />
      </div>
      <div className="flex pt-5 pl-10 gap-15">
        <MessageBox userType="student" width={160} height={110}>
          경제 지식이 <span style={{ color: COLORS.primary.mint }}>쑥쑥</span>
          <br /> 늘고 싶다면?
        </MessageBox>
        <MessageBox userType="parent" width={237} height={110}>
          우리 아이의{" "}
          <span style={{ color: COLORS.primary.navy }}>학습 리포트</span>를
          <br /> 받고 싶다면?
        </MessageBox>
      </div>
    </div>
  );
}
