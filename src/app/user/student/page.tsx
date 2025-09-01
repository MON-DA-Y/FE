"use client";

import { FONT_SIZE, FONT_WEIGHT, SHADOW, COLORS } from "@/styles/theme/tokens";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getAttendance, AttendanceResponse } from "@/apis/attendance";
import { CategoryScore, getWeakness, WeaknessResponse } from "@/apis/weakness";
import StudentLevel from "../components/StudentLevel";
import Dropdown from "../components/Dropdown";
import ProgressBtn from "../components/ProgressBtn";
import AttendBtn from "../components/AttendBtn";
import Slider from "../components/Slider";
import TabBar from "../components/TabBar";
import HistoryBtn from "../components/HistoryBtn";
import StudentEdit from "./components/StudentEdit";

export default function StudentMyPage() {
  const params = useParams();
  const studentId = params.studentId ? Number(params.studentId) : 123;

  const router = useRouter();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [profileImg, setProfileImg] = useState<string>("/images/student.png");

  // 출석률 조회
  const [attendanceData, setAttendanceData] = useState<boolean[]>([]);
  const [dates, setDates] = useState<number[]>([]);
  const [week, setWeek] = useState<"이번주" | "저번주">("이번주");

  useEffect(() => {
    handleApply(); // 첫 렌더 시 현재 주차 데이터 자동 조회
  }, []);

  // 약점 분석 조회
  const [weaknessData, setWeaknessData] = useState<WeaknessResponse | null>(
    null
  );
  const [selectedTab, setSelectedTab] = useState<"word" | "news">("word");
  const handleTabChange = (value: { selectedTab: "word" | "news" }) => {
    setSelectedTab(value.selectedTab);
  };

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
    //학생 메인 페이지로 이동하도록 router 수정
    <div className="relative w-full px-13 py-5">
      <header className="flex justify-between">
        <Image
          src="/icons/Home.svg"
          alt="home"
          width={40}
          height={40}
          onClick={() => router.push("/")}
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
                backgroundColor: COLORS.series.yellow1,
                boxShadow: SHADOW.interactive,
              }}
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
                  <ProgressBtn />
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
                  2025 8월 첫째주
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
              <div className="flex flex-col pt-5 gap-6 -ml-4">
                {selectedTab === "word"
                  ? weaknessData?.weakWord?.categories.map(
                      (c: CategoryScore) => (
                        <Slider
                          key={c.category}
                          category={c.category}
                          total={c.total}
                          correct={c.correct}
                        />
                      )
                    )
                  : weaknessData?.weakNews?.categories.map(
                      (c: CategoryScore) => (
                        <Slider
                          key={c.category}
                          category={c.category}
                          total={c.total}
                          correct={c.correct}
                        />
                      )
                    )}
              </div>
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
                {/* summary는 약점 개수가 4개일때만 표시 */}
                {selectedTab === "word"
                  ? weaknessData?.weakWord?.summary ||
                    "약점 분석 데이터가 충분하지 않아요. 이번 주 남은 단어 학습을 마치면 더 정확한 피드백을 받을 수 있어요."
                  : weaknessData?.weakNews?.summary ||
                    "약점 분석 데이터가 충분하지 않아요. 이번 주 남은 뉴스 학습을 마치면 더 정확한 피드백을 받을 수 있어요."}
              </div>
            </div>

            {/*히스토리 버튼*/}
            <div className="flex absolute flex-col gap-5 top-180 left-125">
              <HistoryBtn type="word" />
              <HistoryBtn type="news" />
              <HistoryBtn type="series" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
