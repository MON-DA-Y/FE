import Image from "next/image";
import React from "react";
import Icon from "./components/icon";

export default function AccountPage() {
  return (
    <div
      style={{
        padding: "70px",
      }}
    >
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={318}
        height={95}
        priority
      />
      <div style={{ fontSize: "45px", fontWeight: "bold" }}>회원가입</div>
      <div
        style={{
          paddingTop: "60px",
          paddingLeft: "68px",
          display: "flex",
          gap: "100px",
        }}
      >
        <Icon userType={"student"} />
        <Icon userType={"parent"} />
      </div>
    </div>
  );
}
