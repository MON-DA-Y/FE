"use client";

import { useState } from "react";
import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import SearchInput from "./SerchInput";
import { getStudentByEmail, StdInfoResponse } from "@/apis/studentInfo";

interface AddStudentProps {
  closeRequest: () => void;
  onAddStudent: (student: StudentProps) => void;
}

interface StudentProps {
  id: number;
  name: string;
  school: string;
  grade: string;
}

export default function AddStudentModal({
  closeRequest,
  onAddStudent,
}: AddStudentProps) {
  const [student, setStudent] = useState<StudentProps | null>(null);
  const handleSearch = async (email: string) => {
    try {
      const data: StdInfoResponse = await getStudentByEmail(email);
      console.log("검색 결과:", data);
      // 타입 맞춰서 변환
      setStudent({
        id: data.std_id,
        name: data.std_name,
        school: data.std_schoolType,
        grade: `${data.std_grade}학년`,
      });
    } catch (err) {
      console.error(err);
      setStudent(null);
      alert("해당 이메일의 자녀를 찾을 수 없습니다.");
    }
  };

  const handleAdd = () => {
    if (!student) {
      alert("자녀 정보를 먼저 검색해주세요.");
      return;
    }
    onAddStudent(student);
  };

  const handleCancel = () => {
    closeRequest();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={closeRequest}
    >
      <div className="absolute inset-0 bg-black/50">
        <div
          className="relative z-10 w-[515px] h-96 rounded-[30px] mx-148 my-50"
          style={{
            backgroundColor: COLORS.sub.gray1,
            boxShadow: SHADOW.interactive,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center p-10 pt-30 gap-6">
            {!student ? (
              <>
                <div
                  style={{
                    color: COLORS.sub.black,
                    fontSize: FONT_SIZE.headline,
                    fontWeight: FONT_WEIGHT.headline,
                  }}
                >
                  자녀 추가
                </div>
                <SearchInput onSearch={handleSearch} />
              </>
            ) : (
              <div className="flex flex-col items-center">
                <div
                  style={{
                    fontSize: FONT_SIZE.headline,
                    color: COLORS.sub.black,
                    fontWeight: FONT_WEIGHT.headline,
                  }}
                >
                  자녀 정보 확인
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <div
                    style={{
                      fontSize: FONT_SIZE.subtitle1,
                      fontWeight: FONT_WEIGHT.subtitle1,
                    }}
                  >
                    {student.name}
                  </div>
                  <div
                    style={{
                      fontSize: FONT_SIZE.subtitle2,
                      fontWeight: FONT_WEIGHT.subtitle2,
                    }}
                  >
                    {student.school === "middle" ? "중학교" : "고등학교"}
                  </div>
                  <div
                    style={{
                      fontSize: FONT_SIZE.subtitle2,
                      fontWeight: FONT_WEIGHT.subtitle2,
                    }}
                  >
                    {student.grade}
                  </div>
                </div>
                <div
                  className="flex gap-4 pt-4"
                  style={{
                    fontSize: FONT_SIZE.subtitle2,
                    color: COLORS.sub.white,
                    fontWeight: FONT_WEIGHT.subtitle2,
                  }}
                >
                  <button
                    type="button"
                    className="w-24 h-9 rounded-[10px]"
                    style={{
                      backgroundColor: COLORS.sub.gray3,
                      boxShadow: SHADOW.interactive,
                    }}
                    onClick={handleCancel}
                  >
                    취소
                  </button>
                  <button
                    type="button"
                    className="w-24 h-9 rounded-[10px]"
                    style={{
                      backgroundColor: COLORS.primary.navy,
                      boxShadow: SHADOW.interactive,
                    }}
                    onClick={handleAdd}
                  >
                    추가
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
