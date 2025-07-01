"use client";

import { FONT_SIZE, FONT_WEIGHT, SHADOW, COLORS } from "@/styles/theme/tokens";
import Image from "next/image";
import { useRouter } from "next/navigation";
import InputBox from "../../components/InputBox";
import StudentCard from "../components/StudentCard";

export default function ParentMyPage() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen overflow-auto p-13">
      <div className="flex mx-[-50px] justify-between">
        <Image
          src="/icons/Home.svg"
          alt="home"
          width={40}
          height={40}
          onClick={() => router.push("../page.tsx")}
          className="cursor-pointer"
        />
        <div className="flex flex-col -space-y-2">
          <Image src="/images/logo.svg" alt="home" width={160} height={48} />
          <div
            style={{ fontSize: FONT_SIZE.body2, fontWeight: FONT_WEIGHT.body2 }}
          >
            money day, everyday !
          </div>
        </div>
      </div>
      <div
        className="mx-10 pt-3"
        style={{
          fontSize: FONT_SIZE.headline,
          fontWeight: FONT_WEIGHT.headline,
        }}
      >
        마이페이지
      </div>

      <div
        className="w-[657px] h-[570px] rounded-[30px] mt-5 px-10"
        style={{ boxShadow: SHADOW.interactive }}
      >
        <div
          className="pt-8"
          style={{
            fontSize: FONT_SIZE.subtitle1,
            fontWeight: FONT_WEIGHT.subtitle1,
          }}
        >
          개인정보 관리
        </div>
        <div className="flex flex-col px-10 gap-5 pt-6">
          <InputBox type="string" placeholder="이00" label="이름" />
          <InputBox type="string" placeholder="010-2769-0890" label="연락처" />
          <InputBox
            type="string"
            placeholder="monday@gmail.com"
            label="이메일"
          />
        </div>

        <div
          className="pt-8"
          style={{
            fontSize: FONT_SIZE.subtitle1,
            fontWeight: FONT_WEIGHT.subtitle1,
          }}
        >
          자녀 관리
        </div>
        {/*자녀 리스트*/}
        <div className="flex p-6 gap-3">
          <StudentCard id={0} name="" grade="" level="" />
          {/*자녀 추가 버튼*/}
          <div
            className="flex items-center justify-center w-64 h-28 rounded-[10px] p-5"
            style={{
              borderColor: COLORS.sub.gray3,
              boxShadow: SHADOW.interactive,
              color: COLORS.sub.gray3,
            }}
            onClick={() => {}}
          >
            <div
              className="flex items-center justify-center w-7 h-7 rounded-full"
              style={{
                boxShadow: SHADOW.interactive,
                backgroundColor: COLORS.primary.navy,
              }}
            >
              <Image
                src="/icons/Plus.svg"
                alt="plus"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
