import axios from "axios";

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

export const monWordApi = {
  // monWord 조회
  getMonWord: async () => {
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/monWord`, {
        headers,
      });
      console.log("monWord 조회 결과:", response.data);
      return response.data.result;
    } catch (error) {
      console.error("monWord get 실패:", error);
      throw error;
    }
  },

  // monWord item 이해했어요
  postWordItemUnderstand: async (wordId: number) => {
    try {
      const headers = getAuthHeader();
      const response = await axios.post(
        `${baseURL}/monWord/understand`,
        { id: wordId },
        { headers }
      );
      console.log("monWord 이해했어요:", response.data);
      return response.data.result;
    } catch (error) {
      console.error("monWord item 이해했어요 post 실패:", error);
      throw error;
    }
  },

  // monWord 학습 완료
  postMonWordDone: async () => {
    try {
      const headers = getAuthHeader();
      const response = await axios.post(`${baseURL}/monWord/done`, {
        headers,
      });
      return response.data.result;
    } catch (error) {
      console.error("momWord 학습 완료 post 실패:", error);
      throw error;
    }
  },
};
