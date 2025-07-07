"use client";

import { useState } from "react";
import StudentProfile from "@/app/user/components/StudentProfile";
import ParentProfile from "../components/ParentProfile";
import StudentLevel from "@/app/user/components/StudentLevel";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import Image from "next/image";
import StudentSchool from "../components/StudentSchool";
import DateDropdown from "../../components/DateDropdown";
import ProgressBtn from "../../components/ProgressBtn";
import AttendBtn from "../../components/AttendBtn";
import TabBar from "../../components/TabBar";
import Slider from "../../components/Slider";
import HistoryBtn from "../../components/HistoryBtn";
import InputBox from "../../components/InputBox";
import QuizBox from "../components/QuizBtn";

export default function ParentPage() {
  const [selectedTab, setSelectedTab] = useState<"series" | "keyword">(
    "series"
  );

  const handleTabChange = (value: { selectedTab: "series" | "keyword" }) => {
    setSelectedTab(value.selectedTab);
  };

  return (
    <div className="relative w-full h-screen overflow-auto p-13">
      {/*학부모 프로필*/}
      <div className="pl-180">
        <ParentProfile />
      </div>

      {/*학생 프로필*/}
      <div className="flex flex-row items-start gap-9">
        <div className="flex flex-col items-center">
          <StudentProfile width={100} height={100} />
          <div className="-mt-4">
            <StudentLevel />
          </div>
        </div>

        {/*학생 소개*/}
        <div className="flex flex-col pt-3">
          <div
            className="flex flex-row gap-2.5 items-center"
            style={{
              fontSize: FONT_SIZE.headline,
              fontWeight: FONT_WEIGHT.headline,
            }}
          >
            이00
            <StudentSchool />
          </div>
          <div
            className="flex flex-row gap-1.5 pt-4"
            style={{ fontSize: FONT_SIZE.body2, fontWeight: FONT_WEIGHT.body2 }}
          >
            <Image
              src="/icons/Calendar.svg"
              alt="calendar"
              width={24}
              height={24}
            />
            가입일 : 2025.02.14
          </div>
          <div
            className="flex flex-row gap-1.5"
            style={{ fontSize: FONT_SIZE.body2, fontWeight: FONT_WEIGHT.body2 }}
          >
            <Image
              src="/icons/Edit_Pencil.svg"
              alt="pencil"
              width={24}
              height={24}
            />
            총 학습일 : 63일
          </div>
        </div>
      </div>

      {/*날짜 드롭다운*/}
      <div className="flex pt-10 gap-4.5">
        <DateDropdown type="year" />
        <DateDropdown type="month" />
        <DateDropdown type="week" />
      </div>

      {/*출석 현황*/}
      <div className="flex pt-7.5 items-center gap-31">
        <div
          style={{
            fontSize: FONT_SIZE.subtitle1,
            fontWeight: FONT_WEIGHT.subtitle1,
          }}
        >
          이번 주 출석 현황
        </div>
        <ProgressBtn />
      </div>
      <div className="pt-4">
        <AttendBtn />
      </div>

      {/*약점 분석*/}
      <div className="flex flex-col pt-17">
        <div
          style={{
            fontSize: FONT_SIZE.subtitle1,
            fontWeight: FONT_WEIGHT.subtitle1,
          }}
        >
          00이의 약점 분석
        </div>
        <div className="flex items-center gap-42">
          <div
            style={{ fontSize: FONT_SIZE.body2, fontWeight: FONT_WEIGHT.body2 }}
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
        <div className="pt-3.5 px-75">
          <TabBar onChange={handleTabChange} selectedTab={selectedTab} />
        </div>
        <div className="flex flex-col px-8 pt-5 gap-6">
          <Slider type="RULES" />
          <Slider type="TECH" />
          <Slider type="BIGPICTURE" />
          <Slider type="MONEY" />
        </div>
        <div
          className="pt-6"
          style={{ fontSize: FONT_SIZE.body2, fontWeight: FONT_WEIGHT.body2 }}
        >
          경제 흐름을 파악하는 부분은 강하지만, 정책/규제에 대한 설명은 조금
          약해요. <br /> 관련 제도나 법이 어떤 영향을 주는지 배우면 좋을 것
          같아요.
        </div>
      </div>

      {/*히스토리 버튼*/}
      <div className="flex flex-col pt-15 gap-5">
        <HistoryBtn type="wordHistory" />
        <HistoryBtn type="newsHistory" />
        <HistoryBtn type="seriesHistory" />
      </div>

      {/*바라는 한마디*/}
      <div className="relative top-[-1125px] left-[530px]">
        <div
          className="whitespace-nowrap"
          style={{
            fontSize: FONT_SIZE.subtitle1,
            fontWeight: FONT_WEIGHT.subtitle1,
          }}
        >
          00이의 교육에 바라는 한마디
        </div>
        <InputBox type="textarea" />
      </div>

      {/*이번 주 퀴즈*/}
      <div className="relative top-[-1070px] left-[530px]">
        <div
          className="whitespace-nowrap"
          style={{
            fontSize: FONT_SIZE.subtitle1,
            fontWeight: FONT_WEIGHT.subtitle1,
          }}
        >
          이번 주 퀴즈
        </div>
        <div className="flex flex-col pt-5 gap-2.5">
          <QuizBox />
          <QuizBox />
          <QuizBox />
        </div>
      </div>

      {/*경제 TalkTalk*/}
      <div className="relative top-[-1000px] left-[530px]">
        <div
          className="whitespace-nowrap"
          style={{
            fontSize: FONT_SIZE.subtitle1,
            fontWeight: FONT_WEIGHT.subtitle1,
          }}
        >
          00이와의 경제TalkTalk
        </div>
        <div
          className="px-13 py-3 ml-[-8px] mt-6 w-92 h-24 rounded-[30px]"
          style={{
            backgroundColor: COLORS.sub.gray1,
          }}
        >
          <div
            style={{
              fontSize: FONT_SIZE.subtitle2,
              fontWeight: FONT_WEIGHT.subtitle2,
            }}
          >
            00이는 이번 주에
          </div>
          <span
            style={{
              fontSize: FONT_SIZE.subtitle1,
              fontWeight: FONT_WEIGHT.subtitle1,
            }}
          >
            "관세율 인상"
          </span>
          <span
            style={{
              fontSize: FONT_SIZE.subtitle2,
              fontWeight: FONT_WEIGHT.subtitle2,
            }}
          >
            을 배웠어요
          </span>
          <div className="flex flex-col pt-8 gap-10">
            <Image
              src="/images/messageBox.svg"
              width={238}
              height={89}
              alt="message"
            />
            <span
              className="mt-[-110px] ml-[20px]"
              style={{
                fontSize: FONT_SIZE.body2,
                fontWeight: FONT_WEIGHT.body2,
              }}
            >
              Q. 트럼프가 관세를 팍 올리면 <br />
              햄버거 가격도 따라 오를까?
            </span>

            <Image
              src="/images/messageBox.svg"
              width={238}
              height={89}
              alt="message"
            />
            <span
              className="mt-[-110px] ml-[20px]"
              style={{
                fontSize: FONT_SIZE.body2,
                fontWeight: FONT_WEIGHT.body2,
              }}
            >
              Q. 사람들이 갤럭시로 갈아탈까, <br /> 아니면 비싸도 그냥 아이폰을
              살까?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
