import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import Image from "next/image";
import Icon from "@/app/account/components/icon";
import SignUpBtn from "../components/SignUpBtn";
import SignUpForm from "../components/SignUpForm";

export default function StudentSignUpPage() {
  return (
    <div>
      <div className="flex justify-center items-center gap-8">
        <div className="flex flex-col justify-start">
          <p
            style={{
              fontSize: FONT_SIZE.body2,
              fontWeight: FONT_WEIGHT.body2,
            }}
          >
            moneyday, everyday!
          </p>
          <Image
            src="/images/logo.svg"
            width={318}
            height={95}
            alt="logo"
            priority
          />
          <p
            style={{
              fontSize: FONT_SIZE.subtitle1,
              fontWeight: FONT_WEIGHT.subtitle1,
            }}
          >
            학생 회원가입
          </p>
        </div>
        <Icon userType="student" />
      </div>
      <div className="flex flex-col justify-center items-center pt-7 gap-8">
        <SignUpForm userType="student" />
        <SignUpBtn userType="student" />
      </div>
    </div>
  );
}
