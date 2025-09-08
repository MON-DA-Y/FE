import axios from "axios";
import { selectedChoices } from "@/types/monQuiz";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

// 토큰 가져오기
const getToken = () => {
  const token = localStorage.getItem("token");
  //   console.log("가져온 토큰:", token);
  return token;
};

// 토큰을 헤더에 추가
const getAuthHeader = () => {
  const token = getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  //   console.log("생성된 헤더:", headers);
  return headers;
};

export const monQuizApi = {
  // monQuiz 조회
  getMonQuiz: async () => {
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/monWord`, {
        headers,
      });
      // console.log("monQuiz 조회 결과:", response.data);
      return response.data.result;
    } catch (error) {
      console.error("monQuiz get 실패:", error);
      throw error;
    }
  },

  // monQuiz 제출
  postMonQuizSubmit: async (selectedChoices: selectedChoices) => {
    try {
      const headers = getAuthHeader();
      const response = await axios.post(
        `${baseURL}/monWord/done`,
        { selectedChoices },
        {
          headers,
        }
      );
      return response.data.result;
    } catch (error) {
      console.error("monQuiz 제출 post 실패:", error);
      throw error;
    }
  },
};
