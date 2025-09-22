"use client";

import { useState, useEffect } from "react";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme/tokens";
import { useRouter } from "next/navigation";
import { monQuizApi } from "@/apis/monQuiz/monQuiz";
import AssignLoading from "@/components/shared/AssignLoading";

export default function MonQuiz() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isQuizActive, setIsQuizActive] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const assignMonQuiz = async () => {
      try {
        setIsLoading(true);
        const data = await monQuizApi.postMonQuizAssign();
      } catch (error) {
        console.error("monQuiz 배정 실패: ", error);
      }
    };

    const quizActive = async () => {
      try {
        setIsLoading(true);
        const data = await monQuizApi.getMonQuizActive();
        // console.log(data);
        setIsQuizActive(data.active);
      } catch (error) {
        console.error("monQuiz 활성화 실패: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    assignMonQuiz();
    quizActive();
  }, []);

  if (isLoading) return <AssignLoading />;

  return (
    <>
      <div
        className="relative cursor-pointer"
        onClick={() => router.push("/MonQuiz")}
        style={{
          cursor: isQuizActive ? "pointer" : "default",
        }}
      >
        <div
          className="w-44 h-11 rounded-full flex justify-center items-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] "
          style={{
            background: `${
              isQuizActive ? COLORS.primary.mint : COLORS.sub.gray2
            }`,
          }}
        >
          <div
            style={{
              color: COLORS.sub.white,
              fontSize: FONT_SIZE.subtitle2,
              fontWeight: FONT_WEIGHT.subtitle2,
            }}
          >
            Let’s MON퀴즈
          </div>
        </div>
        {/* 꼬리 */}
        <div className="absolute top-1/2 right-[-25px] -translate-y-1/2 flex items-center space-x-[-2px]">
          <div
            className="w-5 h-1.5"
            style={{
              background: `${
                isQuizActive ? COLORS.primary.mint : COLORS.sub.gray2
              }`,
            }}
          />
          <div
            className="w-3.5 h-3.5 rounded-full"
            style={{
              background: `${
                isQuizActive ? COLORS.primary.mint : COLORS.sub.gray2
              }`,
            }}
          />
        </div>
      </div>
    </>
  );
}
