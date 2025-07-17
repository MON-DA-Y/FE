import { COLORS, SHADOW } from "@/styles/theme/tokens";
import WordItem from "./WordItem";

export default function WordHistory() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center rounded-[20px] px-6 pt-5 gap-2"
      style={{
        backgroundColor: COLORS.sub.white,
        boxShadow: SHADOW.interactive,
      }}
    >
      <WordItem
        type="MONEY"
        word="전세"
        wordDescription="일정 기간 집을 빌리는 대가로 목돈을 맡기고, 계약 종료 시 전액을 돌려받는 제도"
        wordUse="최근 전세 가격이 크게 올라 세입자들의 부담이 커지고 있다."
      />
      <WordItem
        type="BIGPICTURE"
        word="무역전쟁"
        wordDescription="국가 간 관세 인상이나 수출입 제한을 통한 경제적 갈등"
        wordUse="미중 무역전쟁이 세계 경제에 부정적인 영향을 주고 있다."
      />
    </div>
  );
}
