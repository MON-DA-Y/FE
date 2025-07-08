"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import { useState } from "react";
import InputBox from "../../components/InputBox";
import ProfileImage from "./ProfileImage";

interface StudentEditProps {
  closeRequest: () => void;
  onSave: (data: {
    name: string;
    school: string;
    grade: string;
    email: string;
    profileImg: string | null;
  }) => void;
  initialData: {
    name: string;
    school: string;
    grade: string;
    email: string;
  };
}

export default function StudentEdit({
  closeRequest,
  onSave,
  initialData,
}: StudentEditProps) {
  const [user, setUser] = useState(initialData);
  const [profileImg, setProfileImg] = useState<string | null>(null);

  const handleSave = () => {
    onSave({ ...user, profileImg: profileImg });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50">
        <div
          className="relative z-10 w-[800px] h-[470px] rounded-[30px] mx-28 my-40"
          style={{
            backgroundColor: COLORS.sub.white,
            boxShadow: SHADOW.interactive,
          }}
        >
          <div className="flex flex-col items-center p-10 gap-6">
            <div
              style={{
                fontSize: FONT_SIZE.subtitle1,
                fontWeight: FONT_WEIGHT.subtitle1,
              }}
            >
              개인정보 편집
            </div>

            <div className="flex justify-between items-center gap-25">
              <div className="flex flex-col px-10 gap-5 pt-4">
                <InputBox
                  type="text"
                  placeholder="이름을 입력하세요"
                  value={user.name}
                  label="이름"
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <InputBox
                  type="text"
                  placeholder="학교를 입력하세요"
                  value={user.school}
                  label="학교"
                  onChange={(e) => setUser({ ...user, school: e.target.value })}
                />
                <InputBox
                  type="text"
                  placeholder="학년을 입력하세요"
                  value={user.grade}
                  label="학년"
                  onChange={(e) => setUser({ ...user, grade: e.target.value })}
                />
                <InputBox
                  type="text"
                  placeholder="이메일을 입력하세요"
                  value={user.email}
                  label="이메일"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <ProfileImage onChange={setProfileImg} />
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
                onClick={closeRequest}
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
                onClick={handleSave}
              >
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
