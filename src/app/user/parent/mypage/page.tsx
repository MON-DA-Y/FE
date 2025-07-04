"use client";

import { FONT_SIZE, FONT_WEIGHT, SHADOW, COLORS } from "@/styles/theme/tokens";
import Image from "next/image";
import { useRouter } from "next/navigation";
import InputBox from "../../components/InputBox";
import StudentCard from "../components/StudentCard";
import { useState } from "react";
import AddStudentModal from "../components/AddStudentModal";
import EditModal from "../components/EditModal";

interface StudentProps {
  name: string;
  school: string;
  grade: string;
}

export default function ParentMyPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [students, setStudents] = useState<StudentProps[]>([]);

  {
    /*나중에 회원정보 불러오기*/
  }
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  return (
    <div className="relative w-full h-screen overflow-auto px-13 py-5">
      <div className="flex mx-[-50px] justify-between">
        <Image
          src="/icons/Home.svg"
          alt="home"
          width={40}
          height={40}
          onClick={() => router.push("../page.tsx")}
          className="cursor-pointer"
        />
        <div className="flex flex-col -space-y-2">
          <Image src="/images/logo.svg" alt="home" width={160} height={48} />
          <div
            style={{ fontSize: FONT_SIZE.body2, fontWeight: FONT_WEIGHT.body2 }}
          >
            money day, everyday !
          </div>
        </div>
      </div>
      <div
        className="mx-10 pt-3"
        style={{
          fontSize: FONT_SIZE.headline,
          fontWeight: FONT_WEIGHT.headline,
        }}
      >
        마이페이지
      </div>

      <div
        className="w-[657px] rounded-[30px] mt-5 px-10 p-3"
        style={{ boxShadow: SHADOW.interactive }}
      >
        <div className="flex pt-4 items-center gap-4">
          <div
            style={{
              fontSize: FONT_SIZE.subtitle1,
              fontWeight: FONT_WEIGHT.subtitle1,
            }}
          >
            개인정보 관리
          </div>
          <div
            className="flex items-center justify-center w-7 h-7 border rounded-full"
            style={{
              boxShadow: SHADOW.interactive,
              borderColor: COLORS.sub.gray1,
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
        </div>
        {isEditOpen && (
          <EditModal
            initialData={user}
            onSave={(updatedUser) => {
              setUser(updatedUser);
              setIsEditOpen(false);
            }}
            closeRequest={() => setIsEditOpen(false)}
          />
        )}
        <div className="flex flex-col px-10 gap-5 pt-6">
          <InputBox type="text" value={user.name} label="이름" readOnly />
          <InputBox type="text" value={user.phone} label="연락처" readOnly />
          <InputBox type="text" value={user.email} label="이메일" readOnly />
        </div>

        <div
          className="pt-8"
          style={{
            fontSize: FONT_SIZE.subtitle1,
            fontWeight: FONT_WEIGHT.subtitle1,
          }}
        >
          자녀 관리
        </div>
        {/*자녀 리스트*/}
        <div className="flex p-6 gap-3">
          {students.map((s, idx) => (
            <StudentCard
              key={idx}
              name={s.name || ""}
              school={s.school || ""}
              grade={s.grade || ""}
              level=""
            />
          ))}
          {/*자녀 추가 버튼*/}
          <div
            className="flex items-center justify-center w-64 h-28 rounded-[10px] p-5 border"
            style={{
              borderColor: COLORS.sub.gray3,
              boxShadow: SHADOW.interactive,
              color: COLORS.sub.gray3,
            }}
            onClick={() => {}}
          >
            <div
              className="flex items-center justify-center w-7 h-7 rounded-full"
              style={{
                boxShadow: SHADOW.interactive,
                backgroundColor: COLORS.primary.navy,
              }}
            >
              <Image
                src="/icons/Plus.svg"
                alt="plus"
                width={20}
                height={20}
                className="cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              />
              {isModalOpen && (
                <AddStudentModal
                  closeRequest={() => setIsModalOpen(false)}
                  onAddStudent={(newStudent) => {
                    setStudents([...students, newStudent]);
                    setIsModalOpen(false);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
