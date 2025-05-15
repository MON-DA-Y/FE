import Image from "next/image";
import Icon from "./components/Icon";
import MessageBox from "./components/MessageBox";
import { COLORS } from "@/styles/theme/tokens";

export default function AccountPage() {
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
        <Icon userType={"student"} />
        <Icon userType={"parent"} />
      </div>
      <div className="flex pt-5 pl-10 gap-15">
        <MessageBox userType="student" width={160}>
          경제 지식이 <span style={{ color: COLORS.primary.mint }}>쑥쑥</span>
          <br /> 늘고 싶다면?
        </MessageBox>
        <MessageBox userType="parent" width={237}>
          우리 아이의{" "}
          <span style={{ color: COLORS.primary.navy }}>학습 리포트</span>를
          <br /> 받고 싶다면?
        </MessageBox>
      </div>
    </div>
  );
}
