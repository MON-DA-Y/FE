import Input from "../../components/Input";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import GradeBtn from "./GradeBtn";

interface SignUpFormProps {
  userType: "student" | "parent";
  onChange: (field: string, value: any) => void;
}

export default function SignUpForm({ userType, onChange }: SignUpFormProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <Input
        type="name"
        placeholder="이름을 입력해주세요."
        width={370}
        onChange={(value) => onChange("name", value)}
      />
      <Input
        type="email"
        placeholder="이메일을 입력해주세요."
        width={370}
        onChange={(value) => onChange("email", value)}
      >
        {/* <button
          className="flex items-center justify-center rounded-[34px] w-[63px] border p-1 text-black"
          style={{
            backgroundColor: COLORS.sub.gray1,
            borderColor: COLORS.sub.gray2,
            fontSize: FONT_SIZE.caption2,
            fontWeight: FONT_WEIGHT.caption2,
          }}
        >
          중복 확인
        </button> */}
      </Input>

      <Input
        type="password"
        placeholder="비밀번호를 입력해주세요."
        width={370}
        onChange={(value) => onChange("password", value)}
      />
      <Input
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."
        width={370}
        onChange={(value) => onChange("passwordConfirm", value)}
      />
      {userType === "student" ? (
        <div style={{ width: 370 }}>
          <GradeBtn
            onChange={(schoolType, grade) => {
              onChange("schoolType", schoolType);
              onChange("grade", grade);
            }}
          />
        </div>
      ) : (
        <Input
          type="phone"
          placeholder="휴대폰 번호를 입력해주세요."
          width={370}
          onChange={(value) => onChange("phone", value)}
        />
      )}
    </div>
  );
}
