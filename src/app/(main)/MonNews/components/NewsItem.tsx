"use client";

import { useState, useEffect } from "react";
import NavyBox from "@/components/ui/NavyBox";
import CommonBtn from "@/components/shared/CommonBtn";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { News } from "@/types/monNews";
import { monNewsApi } from "@/apis/monNews";
import { useRouter } from "next/navigation";

export default function NewsItem() {
  const router = useRouter();
  const [news, setNews] = useState<News>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTodayMonNews = async () => {
      try {
        setIsLoading(true);
        const data = await monNewsApi.getMonNews();
        setNews(data);
      } catch (error) {
        console.error("오늘의 monNews 조회 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodayMonNews();

    // setNews({
    //   id: 1,
    //   title: "햄버거 값 또 올랐다! 인플레이션으로 물가 상승이 계속될까?",
    //   body: (
    //     <>
    //       요즘 햄버거 가게에 가면 깜짝 놀라는 사람들이 많아요. 작년에는
    //       5,500원이던 햄버거 세트가 올해는 6,500원이 되었기 때문이에요. 왜
    //       이렇게 가격이 오르는 걸까요?
    //       <br />
    //       <br />
    //       이것은 바로 인플레이션 때문이에요. 인플레이션은 물건 값이 전반적으로
    //       올라가는 현상을 말해요. 요즘은 고기, 빵, 채소 같은 재료 가격도 오르고,
    //       직원들 월급도 올라서 음식점들이 가격을 올릴 수밖에 없어요.
    //       <br />
    //       <br />
    //       전문가들은 "지금은 전 세계적으로 인플레이션이 계속되고 있어요. 물가가
    //       안정될 때까지는 가격이 더 오를 수도 있어요."라고 말했어요.
    //       <br />
    //       <br />
    //       소비자들은 "예전에는 같은 돈으로 더 많이 먹을 수 있었는데, 이제는
    //       부담돼요."라며 걱정하고 있어요.
    //       <br />
    //       <br />
    //       여러분도 최근에 가격이 올라서 놀란 물건이 있나요? 🤔
    //     </>
    //   ),
    //   summary:
    //     "최근 인플레이션 때문에 햄버거 값이 올라서 사람들이 부담을 느끼고 있어요",
    // });
  }, []);

  // Mon 뉴스 학습 완료 post
  const postMonNewsDone = async () => {
    try {
      setIsLoading(true);
      const data = await monNewsApi.postMonNews();
    } catch (error) {
      console.error("오늘의 monNews 완료 post 실패:", error);
    } finally {
      setIsLoading(false);
      alert("오늘의 MonNews를 완료했어요!");
      router.push("/");
    }
  };

  const handleFinishClick = () => {
    postMonNewsDone();
  };

  if (!news) return null;

  return (
    <div className="px-5 py-7 flex flex-col justify-center items-center gap-5">
      <div className="w-[680px] px-10 pt-10 pb-7 bg-white rounded-[30px] flex flex-col gap-5">
        {/* 단어 및 설명 */}
        <div
          className="flex flex-col gap-4"
          style={{ color: COLORS.sub.black }}
        >
          <div
            style={{
              fontSize: FONT_SIZE.subtitle2,
              fontWeight: FONT_WEIGHT.subtitle2,
            }}
          >
            {news.title}
          </div>
          <div
            style={{ fontSize: FONT_SIZE.body2, fontWeight: FONT_WEIGHT.body2 }}
          >
            {news.body}
          </div>
        </div>

        {/* 예문 (써먹기) */}
        <NavyBox title="한 줄 요약">{news.summary}</NavyBox>
      </div>
      {/* 학습 완료 버튼 */}
      <div className="">
        <CommonBtn
          type="finish"
          subText="오늘의 MON뉴스를 다 읽었어요!"
          onClick={handleFinishClick}
        />
      </div>
    </div>
  );
}
