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

export const monQuizMarkApi = {
  // monQuiz 채점 조회
  getMonQuizMark: async () => {
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/monQuiz/mark`, {
        headers,
      });
      // console.log("monQuiz 채점 조회 결과:", response.data);
      return response.data.result;
    } catch (error) {
      console.error("monQuiz 채점 get 실패:", error);
      throw error;
    }
  },

  // monQuiz 채점 학습 완료
  postMonQuizDone: async () => {
    try {
      const headers = getAuthHeader();
      const response = await axios.post(`${baseURL}/monQuiz/done`, {
        headers,
      });
      return response.data.result;
    } catch (error) {
      console.error("momWord 학습 완료 post 실패:", error);
      throw error;
    }
  },
};
