"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getAttendance, AttendanceResponse } from "@/apis/attendance";
import { CategoryScore, getWeakness, WeaknessResponse } from "@/apis/weakness";
import { Result, getQuizResult } from "@/apis/quizResult";
import StudentProfile from "@/app/user/components/StudentProfile";
import ParentProfile from "../components/ParentProfile";
import StudentLevel from "@/app/user/components/StudentLevel";
import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import Image from "next/image";
import StudentSchool from "../components/StudentSchool";
import Dropdown from "../../components/Dropdown";
import ProgressBtn from "../../components/ProgressBtn";
import AttendBtn from "../../components/AttendBtn";
import TabBar from "../../components/TabBar";
import Slider from "../../components/Slider";
import HistoryBtn from "../../components/HistoryBtn";
import InputBox from "../../components/InputBox";
import QuizBtn from "../components/QuizBtn";

export default function ParentPage() {
  const params = useParams();
  const studentId = Number(params.studentId) || 123;

  // 출석률
  const [attendanceData, setAttendanceData] = useState<boolean[]>([]);
  const [dates, setDates] = useState<number[]>([]);
  const [week, setWeek] = useState<"이번주" | "저번주">("이번주");

  useEffect(() => {
    handleApply(); // 첫 렌더 시 현재 주차 데이터 자동 조회
  }, []);

  // 약점
  const [weaknessData, setWeaknessData] = useState<WeaknessResponse | null>(
    null
  );
  const [selectedTab, setSelectedTab] = useState<"word" | "news">("word");
  const handleTabChange = (value: { selectedTab: "word" | "news" }) => {
    setSelectedTab(value.selectedTab);
  };

  // 퀴즈 성적
  const [quizResults, setQuizResults] = useState<Result[]>([]);

  // 적용 버튼 누르면 실행되는 함수
  const handleApply = async () => {
    try {
      // 출석 조회
      const attendance = await getAttendance(studentId, week);
      setAttendanceData(attendance.days.map((d) => d.isAttended));
      setDates(attendance.days.map((d) => new Date(d.day).getDate()));

      // 약점 조회
      //const weakness = await getWeakness(studentId, { year, month, week });
      //setWeaknessData(weakness);

      // 퀴즈 성적 조회
      // const quiz = await getQuizResult(studentId, { year, month, week });
      // setWeaknessData(weakness);
    } catch (err) {
      console.error("데이터 조회 실패:", err);
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden px-13 py-7">
      {/*학부모 프로필*/}
      <div className="ml-190">
        <ParentProfile />
      </div>

      <div className="">
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
              style={{
                fontSize: FONT_SIZE.body2,
                fontWeight: FONT_WEIGHT.body2,
              }}
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
              style={{
                fontSize: FONT_SIZE.body2,
                fontWeight: FONT_WEIGHT.body2,
              }}
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
          <Dropdown
            type="week"
            value={week}
            onChange={(newWeek) => setWeek(newWeek as "이번주" | "저번주")}
          />
          <button
            onClick={handleApply}
            className="px-4 py-2.5 rounded-lg cursor-pointer"
            style={{
              fontSize: FONT_SIZE.body2,
              fontWeight: FONT_WEIGHT.body2,
              backgroundColor: COLORS.series.yellow1,
              boxShadow: SHADOW.interactive,
            }}
          >
            적용
          </button>
        </div>

        {/*출석 현황*/}
        <div className="flex pt-10 items-center gap-26">
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
          <AttendBtn
            days_gap={54}
            attend_gap={2.5}
            attendance={attendanceData}
            dates={dates}
          />
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
          <div className="flex items-center gap-31">
            <div
              style={{
                fontSize: FONT_SIZE.body2,
                fontWeight: FONT_WEIGHT.body2,
              }}
            >
              2025 8월 첫째주
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
          <div className="pt-3.5 px-74">
            <TabBar onChange={handleTabChange} selectedTab={selectedTab} />
          </div>
          <div className="flex flex-col px-5 pt-6 gap-6">
            {selectedTab === "word"
              ? weaknessData?.weakWord?.categories.map((c: CategoryScore) => (
                  <Slider
                    key={c.category}
                    category={c.category}
                    total={c.total}
                    correct={c.correct}
                  />
                ))
              : weaknessData?.weakNews?.categories.map((c: CategoryScore) => (
                  <Slider
                    key={c.category}
                    category={c.category}
                    total={c.total}
                    correct={c.correct}
                  />
                ))}
          </div>
          <div
            className="pt-8 max-w-110"
            style={{ fontSize: FONT_SIZE.body2, fontWeight: FONT_WEIGHT.body2 }}
          >
            <div
              style={{
                fontSize: FONT_SIZE.body1,
                fontWeight: FONT_WEIGHT.headline,
                color: COLORS.category.money,
              }}
            >
              ⋇ 이번 주 체크 포인트 :
            </div>
            {/* summary는 약점 개수가 4개일때만 표시 */}
            {selectedTab === "word"
              ? weaknessData?.weakWord?.summary ||
                "약점 분석 데이터가 충분하지 않아요. 이번 주 남은 단어 학습을 마치면 더 정확한 피드백을 받을 수 있어요."
              : weaknessData?.weakNews?.summary ||
                "약점 분석 데이터가 충분하지 않아요. 이번 주 남은 뉴스 학습을 마치면 더 정확한 피드백을 받을 수 있어요."}
          </div>
        </div>

        {/*히스토리 버튼*/}
        <div className="flex flex-col pt-15 gap-5">
          <HistoryBtn type="word" />
          <HistoryBtn type="news" />
          <HistoryBtn type="series" />
        </div>
      </div>

      {/*바라는 한마디*/}
      <div className="absolute top-85 left-145">
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
      <div className="absolute top-140 left-145">
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
          {quizResults.map((quiz) => (
            <QuizBtn key={quiz.quizId} day={quiz.day} score={quiz.score} />
          ))}
        </div>
      </div>

      {/*경제 TalkTalk*/}
      <div className="absolute top-223 left-145">
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
