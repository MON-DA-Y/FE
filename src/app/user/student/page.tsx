"use client";

import { FONT_SIZE, FONT_WEIGHT, SHADOW, COLORS } from "@/styles/theme/tokens";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import StudentLevel from "../components/StudentLevel";
import DateDropdown from "../components/DateDropdown";
import ProgressBtn from "../components/ProgressBtn";
import AttendBtn from "../components/AttendBtn";
import Slider from "../components/Slider";
import TabBar from "../components/TabBar";
import HistoryBtn from "../components/HistoryBtn";
import StudentEdit from "./components/StudentEdit";

export default function StudentMyPage() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<"series" | "keyword">(
    "series"
  );
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [profileImg, setProfileImg] = useState<string>("/images/student.png");

  const handleTabChange = (value: { selectedTab: "series" | "keyword" }) => {
    setSelectedTab(value.selectedTab);
  };

  {
    /*나중에 회원정보 불러오기*/
  }
  const [user, setUser] = useState({
    name: "이00",
    school: "00중학교",
    grade: "2학년",
    email: "monday@naver.com",
  });

  return (
    <div className="relative w-full h-screen overflow-auto px-13 py-5">
      <header className="flex justify-between">
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
            style={{
              fontSize: FONT_SIZE.body2,
              fontWeight: FONT_WEIGHT.body2,
            }}
          >
            money day, everyday !
          </div>
        </div>
      </header>
      <div className="flex flex-col justify-start w-[950px]">
        <div
          className="pt-3 ml-20"
          style={{
            fontSize: FONT_SIZE.headline,
            fontWeight: FONT_WEIGHT.headline,
          }}
        >
          마이페이지
        </div>

        {/*개인정보 박스*/}
        <div className="flex flex-col mt-8 px-10">
          <div
            className="w-full rounded-[30px] px-25 pt-8 pb-5 border"
            style={{
              borderColor: COLORS.sub.gray2,
            }}
          >
            <div
              className="flex items-center justify-center w-7 h-7 border rounded-full mt-[-46px] mx-170 mb-2"
              style={{
                boxShadow: SHADOW.interactive,
                borderColor: COLORS.sub.gray1,
                backgroundColor: COLORS.sub.white,
              }}
              onClick={() => setIsEditOpen(true)}
            >
              <Image
                src="/icons/Edit_Pencil_small.svg"
                alt="pencil"
                width={18}
                height={18}
              />
            </div>
            {isEditOpen && (
              <StudentEdit
                initialData={user}
                onSave={(updatedUser) => {
                  setUser({
                    name: updatedUser.name,
                    school: updatedUser.school,
                    grade: updatedUser.grade,
                    email: updatedUser.email,
                  });
                  if (updatedUser.profileImg) {
                    setProfileImg(updatedUser.profileImg);
                  }
                  setIsEditOpen(false);
                }}
                closeRequest={() => setIsEditOpen(false)}
              />
            )}
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="flex gap-3 items-center">
                  <div
                    className="w-20"
                    style={{
                      fontSize: FONT_SIZE.subtitle2,
                      fontWeight: FONT_WEIGHT.subtitle2,
                    }}
                  >
                    이름
                  </div>
                  <div
                    className="text-[23px]"
                    style={{
                      fontWeight: FONT_WEIGHT.subtitle1,
                    }}
                  >
                    {user.name}
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div
                    className="w-20"
                    style={{
                      fontSize: FONT_SIZE.subtitle2,
                      fontWeight: FONT_WEIGHT.subtitle2,
                    }}
                  >
                    학교
                  </div>
                  <div
                    className="text-[23px]"
                    style={{
                      fontWeight: FONT_WEIGHT.subtitle1,
                    }}
                  >
                    {user.school}
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div
                    className="w-20"
                    style={{
                      fontSize: FONT_SIZE.subtitle2,
                      fontWeight: FONT_WEIGHT.subtitle2,
                    }}
                  >
                    학년
                  </div>
                  <div
                    className="text-[23px]"
                    style={{
                      fontWeight: FONT_WEIGHT.subtitle1,
                    }}
                  >
                    {user.grade}
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div
                    className="w-20"
                    style={{
                      fontSize: FONT_SIZE.subtitle2,
                      fontWeight: FONT_WEIGHT.subtitle2,
                    }}
                  >
                    이메일
                  </div>
                  <div
                    className="text-[23px]"
                    style={{
                      fontWeight: FONT_WEIGHT.subtitle1,
                    }}
                  >
                    {user.email}
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col left-195">
                <Image src={profileImg} alt="image" width={80} height={80} />
                <div className="-mt-4 mx-2">
                  <StudentLevel />
                </div>
              </div>
            </div>
          </div>

          {/*날짜 드롭다운*/}
          <div className="flex pt-9 gap-4.5 pl-100">
            <DateDropdown type="year" />
            <DateDropdown type="month" />
            <DateDropdown type="week" />
          </div>

          {/*출석 현황*/}
          <div className="flex mt-6">
            <div
              className="w-full rounded-[30px] px-10 p-6 border"
              style={{
                borderColor: COLORS.sub.gray2,
              }}
            >
              <div className="flex flex-col items-center gap-7">
                <div className="flex justify-between gap-95">
                  <div
                    className="text-[25px]"
                    style={{
                      fontWeight: FONT_WEIGHT.subtitle1,
                    }}
                  >
                    🎯 출석 및 학습 진행률
                  </div>
                  <ProgressBtn />
                </div>
                <AttendBtn days_gap={20} attend_gap={9} />
              </div>
            </div>
          </div>
          <div className="flex items-center pt-13">
            {/*약점 분석*/}
            <div className="flex flex-col">
              <div
                style={{
                  fontSize: FONT_SIZE.subtitle1,
                  fontWeight: FONT_WEIGHT.subtitle1,
                }}
              >
                나의 약점 분석
              </div>
              <div className="flex items-center gap-15">
                <div
                  style={{
                    fontSize: FONT_SIZE.body2,
                    fontWeight: FONT_WEIGHT.body2,
                  }}
                >
                  2025 4월 첫째주
                </div>
                <div
                  className="flex items-center gap-1"
                  style={{
                    fontSize: FONT_SIZE.body1,
                    fontWeight: FONT_WEIGHT.body1,
                    color: COLORS.primary.navy,
                  }}
                >
                  <Image
                    src="/icons/Arrow_Up_Right.svg"
                    width={30}
                    height={30}
                    alt="arrow"
                  />
                  저번 주보다 4% 성장했어요
                </div>
              </div>
              <div className="pt-3.5 px-48">
                <TabBar onChange={handleTabChange} selectedTab={selectedTab} />
              </div>
              <div className="flex flex-col pt-5 gap-6">
                <Slider type="RULES" />
                <Slider type="TECH" />
                <Slider type="BIGPICTURE" />
                <Slider type="MONEY" />
              </div>
              <div
                className="pt-6 max-w-[44ch] "
                style={{
                  fontSize: FONT_SIZE.body2,
                  fontWeight: FONT_WEIGHT.body2,
                }}
              >
                경제 흐름을 파악하는 부분은 강하지만, 정책/규제에 대한 설명은
                조금 약해요. 관련 제도나 법이 어떤 영향을 주는지 배우면 좋을 것
                같아요.
              </div>
            </div>

            {/*히스토리 버튼*/}
            <div className="flex flex-col gap-5 mx-[-125px]">
              <HistoryBtn type="wordHistory" />
              <HistoryBtn type="newsHistory" />
              <HistoryBtn type="seriesHistory" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
