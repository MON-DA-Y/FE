"use client";

import { FONT_SIZE, FONT_WEIGHT, SHADOW, COLORS } from "@/styles/theme/tokens";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getAttendance, postAttendance } from "@/apis/attendance";
import { CategoryScore, getWeakness, WeaknessResponse } from "@/apis/weakness";
import StudentLevel from "../components/StudentLevel";
import Dropdown from "../components/Dropdown";
import ProgressBtn from "../components/ProgressBtn";
import AttendBtn from "../components/AttendBtn";
import Slider from "../components/Slider";
import TabBar from "../components/TabBar";
import HistoryBtn from "../components/HistoryBtn";
import StudentEdit from "./components/StudentEdit";
import { getStudentInfo } from "@/apis/studentInfo";
import { getProgress, ProgressResponse } from "@/apis/progress";
import AssignLoading from "@/components/shared/AssignLoading";

export default function StudentMyPage() {
  const router = useRouter();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [profileImg, setProfileImg] = useState<string>("/images/student.png");

  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [isLevelHover, setIsLevelHover] = useState(false);

  const [dates, setDates] = useState<number[]>([]);
  const [week, setWeek] = useState<"이번주" | "저번주">("이번주");

  // 로딩 화면
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingWeakness, setLoadingWeakness] = useState(true);

  // 출석률 조회
  const [attendanceData, setAttendanceData] = useState<boolean[]>([]);

  // 약점 분석 조회
  const [weaknessData, setWeaknessData] = useState<WeaknessResponse | null>(
    null
  );
  // 총 학습일
  const [progress, setProgress] = useState<ProgressResponse | null>(null);

  const [selectedTab, setSelectedTab] = useState<"word" | "news">("word");
  const handleTabChange = (value: { selectedTab: "word" | "news" }) => {
    setSelectedTab(value.selectedTab);
  };

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
    try {
      setLoadingWeakness(true);
      // 출석 조회
      const attendance = await getAttendance(week);
      setAttendanceData(attendance.days.map((d) => d.isAttended));
      setDates(attendance.days.map((d) => new Date(d.day).getDate()));

      // 약점 조회
      const weakness = await getWeakness(week);
      setWeaknessData(weakness);

      // 총 학습일 조회
      const progressData = await getProgress(week);
      console.log("progressData:", progressData);
      setProgress(progressData);
    } catch (err) {
      console.error("데이터 조회 실패:", err);
    } finally {
      setLoadingWeakness(false);
    }
  };

  const [user, setUser] = useState<any>({}); // 초기값은 빈 객체

  useEffect(() => {
    setLoadingUser(true);
    getStudentInfo()
      .then(setUser)
      .catch((err) => console.error("학생 정보 API 실패:", err))
      .finally(() => setLoadingUser(false));
  }, []);

  if (loadingUser) return <AssignLoading />;

  return (
    //학생 메인 페이지로 이동하도록 router 수정
    <div className="relative w-full px-20 py-5">
      <header className="flex justify-between">
        <Image
          src="/icons/Home.svg"
          alt="home"
          width={40}
          height={40}
          onClick={() => router.push("/student")}
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
      <div className="flex flex-col justify-start w-[900px]">
        <div
          className="pt-3 ml-20"
          style={{
            fontSize: FONT_SIZE.headline,
            fontWeight: FONT_WEIGHT.headline,
          }}
        >
          마이페이지
          <div
            className="flex flex-row gap-1.5 pt-5"
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
            {/* 가입일 바꾸기 ! */}
            가입일 : {user?.std_joinDate}
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
            총 스트라이크 수 : {progress?.strikeDay ?? 0}일
            <div
              className="flex flex-row gap-1.5"
              style={{
                color: COLORS.sub.gray3,
                fontSize: FONT_SIZE.body2,
                fontWeight: FONT_WEIGHT.body2,
              }}
            >
              하루 학습(단어·뉴스·퀴즈·시리즈)을 모두 완료한 일수
            </div>
            <div
              className="relative inline-block mt-0.5"
              onMouseEnter={() => setIsLevelHover(true)}
              onMouseLeave={() => setIsLevelHover(false)}
            >
              <Image
                src="/icons/Warning.svg"
                alt="tooltip"
                width={18}
                height={18}
              />
              {isLevelHover && (
                <div
                  className="absolute top-full -left-25 w-71 rounded-lg z-10 p-5"
                  style={{
                    backgroundColor: COLORS.series.yellow1,
                    fontWeight: FONT_WEIGHT.body1,
                    fontSize: FONT_SIZE.body1,
                  }}
                >
                  하루에 단어·뉴스·퀴즈를 모두 끝내면 스트라이크 수가 쌓여요.
                  <br />이 스트라이크 수가 일정 기준을 넘을 때마다 레벨이
                  올라갑니다. <br />
                  <br />
                  🥑 씨앗: 기본 <br />
                  🌱 새싹: 21일 <br />
                  🌿 잎새: 30일 <br />
                  🪵 가지: 66일 <br />
                  🌳 나무: 100일 <br />
                  🌼 꽃: 365일 <br />
                  🍎 열매: 700일
                </div>
              )}
            </div>
          </div>
        </div>

        {/*개인정보 박스*/}
        <div className="flex flex-col mt-3 px-10">
          <div
            className="w-full rounded-[30px] px-25 pt-5 pb-5 border"
            style={{
              borderColor: COLORS.sub.gray2,
            }}
          >
            <div
              className="flex items-center justify-center w-9 h-9 border rounded-full mt-[-46px] mx-155 mb-2 cursor-pointer"
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
                    std_name: updatedUser.std_name,
                    std_schoolType: updatedUser.std_schoolType,
                    std_grade: updatedUser.std_grade,
                    std_email: updatedUser.std_email,
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
              <div className="absolute flex flex-col left-50">
                <Image src={profileImg} alt="image" width={80} height={80} />
                <div className="-mt-4 mx-2">
                  <StudentLevel />
                </div>
              </div>
              <div className="flex flex-col ml-30">
                <div className="flex gap-3 items-center">
                  <div
                    className="w-20"
                    style={{
                      fontSize: FONT_SIZE.subtitle2,
                      fontWeight: FONT_WEIGHT.body1,
                    }}
                  >
                    이름
                  </div>
                  <div
                    className="text-[23px]"
                    style={{
                      fontWeight: FONT_WEIGHT.subtitle2,
                    }}
                  >
                    {user.std_name}
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div
                    className="w-20"
                    style={{
                      fontSize: FONT_SIZE.subtitle2,
                      fontWeight: FONT_WEIGHT.body1,
                    }}
                  >
                    학교
                  </div>
                  <div
                    className="text-[23px]"
                    style={{
                      fontWeight: FONT_WEIGHT.subtitle2,
                    }}
                  >
                    {user.std_schoolType === "middle" ? "중학교" : "고등학교"}
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div
                    className="w-20"
                    style={{
                      fontSize: FONT_SIZE.subtitle2,
                      fontWeight: FONT_WEIGHT.body1,
                    }}
                  >
                    학년
                  </div>
                  <div
                    className="text-[23px]"
                    style={{
                      fontWeight: FONT_WEIGHT.subtitle2,
                    }}
                  >
                    {user.std_grade}학년
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div
                    className="w-20"
                    style={{
                      fontSize: FONT_SIZE.subtitle2,
                      fontWeight: FONT_WEIGHT.body1,
                    }}
                  >
                    이메일
                  </div>
                  <div
                    className="text-[23px]"
                    style={{
                      fontWeight: FONT_WEIGHT.subtitle2,
                    }}
                  >
                    {user.std_email}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*날짜 드롭다운*/}
          <div className="flex justify-end pt-10 gap-4.5">
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
                    className="text-[25px] whitespace-nowrap"
                    style={{
                      fontWeight: FONT_WEIGHT.subtitle1,
                    }}
                  >
                    🎯 출석 및 학습 진행률
                  </div>
                  <ProgressBtn role="student" />
                </div>
                <AttendBtn
                  days_gap={80}
                  attend_gap={9}
                  attendance={attendanceData}
                  dates={dates}
                />
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
              <div className="flex items-center gap-13">
                <div
                  style={{
                    fontSize: FONT_SIZE.body2,
                    fontWeight: FONT_WEIGHT.body2,
                  }}
                >
                  2025 9월 넷째주
                </div>
                <div
                  className="flex items-center"
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
              <div className="pt-3.5 px-55">
                <TabBar onChange={handleTabChange} selectedTab={selectedTab} />
              </div>
              {loadingWeakness ? (
                <div>약점 분석 로딩중...</div>
              ) : (
                <div className="flex flex-col pt-5 gap-6 -ml-4">
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
                className="pt-6 max-w-[44ch] -ml-2"
                style={{
                  fontSize: FONT_SIZE.body2,
                  fontWeight: FONT_WEIGHT.body2,
                }}
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

            {/*히스토리 버튼*/}
            <div className="flex absolute flex-col gap-5 top-195 left-130">
              <HistoryBtn type="word" week={week} role="student" />
              <HistoryBtn type="news" week={week} role="student" />
              <HistoryBtn type="series" week={week} role="student" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
