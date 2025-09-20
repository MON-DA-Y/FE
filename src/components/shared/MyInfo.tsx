"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { getStudentInfo } from "@/apis/studentInfo";
import Image from "next/image";

export interface StudentInfo {
  std_name: string;
  std_level: string;
  std_img: string;
  std_schoolType: string;
  std_grade: number;
  std_email: string;
}

export default function MyInfo() {
  const [student, setStudent] = useState<StudentInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        setIsLoading(true);
        const data = await getStudentInfo();
        setStudent(data);
      } catch (error) {
        console.error("학생 정보 조회 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudentInfo();
  }, []);

  if (!student) return null; // 데이터가 아직 없으면 렌더링하지 않음

  return (
    <div className="z-10 w-80 h-20 px-10 py-3 bg-white rounded-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center gap-5 whitespace-nowrap">
      <div
        className="px-4 py-[5px] bg-green-300/30 rounded-[30px] flex justify-center items-center"
        style={{
          fontSize: FONT_SIZE.body1,
          fontWeight: FONT_WEIGHT.body1,
        }}
      >
        {student.std_level}
      </div>
      <div
        style={{
          fontSize: FONT_SIZE.subtitle2,
          fontWeight: FONT_WEIGHT.subtitle2,
        }}
      >
        {student.std_name} 학생
      </div>
      <Image
        className="w-12 h-12 rounded-full"
        src={student.std_img || "/images/logo.svg"}
        width={12}
        height={12}
        onClick={() => router.push(`/user/student`)}
        alt="profile"
      />
    </div>
  );
}
