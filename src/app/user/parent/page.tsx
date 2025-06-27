import StudentProfile from "@/app/user/components/StudentProfile";
import ParentProfile from "./components/ParentProfile";
import StudentLevel from "@/app/user/components/StudentLevel";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import Image from "next/image";
import StudentSchool from "./components/StudentSchool";
import DateDropdown from "../components/DateDropdown";
import ProgressBtn from "../components/ProgressBtn";
import AttendBtn from "../components/AttendBtn";

export default function ParentPage() {
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
    </div>
  );
}
