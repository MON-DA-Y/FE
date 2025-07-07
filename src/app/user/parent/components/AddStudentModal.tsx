"use client";

import { useState } from "react";
import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import SearchInput from "./SerchInput";

interface AddStudentProps {
  closeRequest: () => void;
  onAddStudent: (student: StudentProps) => void;
}

interface StudentProps {
  name: string;
  school: string;
  grade: string;
}

export default function AddStudentModal({
  closeRequest,
  onAddStudent,
}: AddStudentProps) {
  const [student, setStudent] = useState<StudentProps | null>(null);
  const handleSearch = (query: string) => {
    if (query === "이00") {
      setStudent({
        name: "이00",
        school: "00중",
        grade: "2학년",
      });
    } else {
      setStudent(null);
      alert("해당 이메일의 자녀를 찾을 수 없습니다.");
    }
  };

  const handleAdd = () => {
    if (student) {
      onAddStudent(student);
    }
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
          className="relative z-10 w-[515px] h-96 rounded-[30px] mx-65 my-50"
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
                    {student.school}
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
