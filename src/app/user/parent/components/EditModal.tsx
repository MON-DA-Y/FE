"use client";

import { COLORS, FONT_SIZE, FONT_WEIGHT, SHADOW } from "@/styles/theme/tokens";
import { useState } from "react";
import InputBox from "../../components/InputBox";

interface EditModalProps {
  closeRequest: () => void;
  onSave: (data: { name: string; phone: string; email: string }) => void;
  initialData: { name: string; phone: string; email: string };
}

export default function EditModal({
  closeRequest,
  onSave,
  initialData,
}: EditModalProps) {
  const [user, setUser] = useState(initialData);

  const handleSave = () => {
    onSave(user);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50">
        <div
          className="relative z-10 w-[515px] h-[410px] rounded-[30px] mx-176 my-55"
          style={{
            backgroundColor: COLORS.sub.gray1,
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
                placeholder="전화번호를 입력하세요"
                value={user.phone}
                label="연락처"
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
              <InputBox
                type="text"
                placeholder="이메일을 입력하세요"
                value={user.email}
                label="이메일"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
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
