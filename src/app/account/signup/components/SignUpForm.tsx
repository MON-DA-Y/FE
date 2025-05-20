import Input from "../../components/Input";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";

interface SignUpFormProps {
  userType: "student" | "parent";
}

export default function SignUpForm({ userType }: SignUpFormProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <Input type="name" placeholder="이름을 입력해주세요." width={354} />
      <Input type="email" placeholder="이메일을 입력해주세요." width={354}>
        <button
          className="flex items-center justify-center rounded-[34px] w-[63px] border p-1 text-black"
          style={{
            backgroundColor: COLORS.sub.gray1,
            borderColor: COLORS.sub.gray2,
            fontSize: FONT_SIZE.caption2,
            fontWeight: FONT_WEIGHT.caption2,
          }}
        >
          중복 확인
        </button>
      </Input>
      {userType === "student" ? (
        <Input
          type="birth"
          placeholder="생년월일을 입력해주세요."
          width={354}
        />
      ) : (
        <Input
          type="phone"
          placeholder="휴대폰 번호를 입력해주세요."
          width={354}
        />
      )}
      <Input
        type="password"
        placeholder="비밀번호를 입력해주세요."
        width={354}
      />
      <Input
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."
        width={354}
      />
    </div>
  );
}
