"use client";

import { useState, useEffect } from "react";
import { getAttendance, postAttendance } from "@/apis/attendance";
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
import QuizBtn from "../components/QuizBtn";
import { StudentInfo } from "@/components/shared/MyInfo";

interface ParentPageProps {
  user: StudentInfo;
}

export default function ParentPage({ user }: ParentPageProps) {
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [dates, setDates] = useState<number[]>([]);
  const [week, setWeek] = useState<"이번주" | "저번주">("이번주");

  // 로딩 화면
  const [loadingWeakness, setLoadingWeakness] = useState(true);

  // 출석률
  const [attendanceData, setAttendanceData] = useState<boolean[]>([]);

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

  useEffect(() => {
    const markAndFetch = async () => {
      try {
        // 오늘 출석 체크
        await postAttendance();

        await handleApply();
      } catch (err) {
        console.error("출석 처리 또는 데이터 조회 실패:", err);
      }
    };

    markAndFetch();
  }, []);

  // 적용 버튼 누르면 실행되는 함수
  const handleApply = async () => {
    setLoadingWeakness(true);
    try {
      // 출석 조회
      const attendance = await getAttendance(week);
      setAttendanceData(attendance.days.map((d) => d.isAttended));
      setDates(attendance.days.map((d) => new Date(d.day).getDate()));

      // 약점 조회
      const weakness = await getWeakness(week);
      setWeaknessData(weakness);

      // 퀴즈 성적 조회
      const quiz = await getQuizResult(week);
      setQuizResults(quiz.results);
    } catch (err) {
      console.error("데이터 조회 실패:", err);
    } finally {
      setLoadingWeakness(false);
    }
  };

  return (
    <div className="relative w-full px-13 py-7">
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
              {user?.std_name}
              <StudentSchool
                schoolType={user?.std_schoolType}
                grade={user?.std_grade}
              />
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
              backgroundColor: isActive
                ? COLORS.series.yellow3
                : isHover
                ? COLORS.series.yellow2
                : COLORS.series.yellow1,
              boxShadow: SHADOW.interactive,
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => {
              setIsHover(false);
              setIsActive(false);
            }}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
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
            {user?.std_name}이의 약점 분석
          </div>
          <div className="flex items-center gap-31">
            <div
              style={{
                fontSize: FONT_SIZE.body2,
                fontWeight: FONT_WEIGHT.body2,
              }}
            >
              2025 9월 넷째주
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
          {loadingWeakness ? (
            <div>약점 분석 로딩중...</div>
          ) : (
            <div className="flex flex-col px-5 pt-6 gap-6">
              {(selectedTab === "word"
                ? weaknessData?.weakWord?.categories
                : weaknessData?.weakNews?.categories
              )?.map((c: CategoryScore) => (
                <Slider
                  key={c.category}
                  category={c.category}
                  total={c.total}
                  correct={c.correct}
                />
              ))}
            </div>
          )}
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
            {selectedTab === "word"
              ? weaknessData?.weakWord?.categories?.length === 0
                ? "이번 주 약점 분석은 임계치(50%) 이상으로 맞춘 카테고리는 약점으로 표시되지 않습니다."
                : weaknessData?.weakWord?.summary_words
              : weaknessData?.weakNews?.categories?.length === 0
              ? "이번 주 약점 분석은 임계치(50%) 이상으로 맞춘 카테고리는 약점으로 표시되지 않습니다."
              : weaknessData?.weakNews?.summary_news}
          </div>
        </div>
      </div>

      {/*바라는 한마디*/}
      {/* <div className="absolute top-85 left-145">
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
      </div> */}

      {/*이번 주 퀴즈*/}
      <div className="absolute top-85 left-145">
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
            <QuizBtn key={quiz.day} day={quiz.day} score={quiz.score} />
          ))}
        </div>
      </div>

      {/*히스토리 버튼*/}
      <div className="absolute top-150 left-145 flex flex-col gap-5">
        <HistoryBtn type="word" week={week} />
        <HistoryBtn type="news" week={week} />
        <HistoryBtn type="series" week={week} />
      </div>

      {/*경제 TalkTalk*/}
      <div className="absolute top-250 left-145">
        <div
          className="whitespace-nowrap"
          style={{
            fontSize: FONT_SIZE.subtitle1,
            fontWeight: FONT_WEIGHT.subtitle1,
          }}
        >
          {user?.std_name}이와의 경제TalkTalk
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
            {user?.std_name} 학생은 이번 주에
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
