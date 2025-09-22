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

export const stdMainApi = {
  // 오늘 학습률 조회
  getTodayLearningRate: async () => {
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/std/todayLearningRate`, {
        headers,
      });
      return response.data.result;
    } catch (error) {
      console.error("오늘 학습률 get 실패: ", error);
      throw error;
    }
  },

  // monWord 조회
  getStdMonWord: async () => {
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/std/monWord`, { headers });
      // console.log("monWord 조회 결과:", response.data);
      return response.data.result;
    } catch (error) {
      console.error("monWord get 실패:", error);
      throw error;
    }
  },

  // monNews 조회
  getStdMonNews: async () => {
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/std/monNews`, { headers });

      return response.data.result;
    } catch (error) {
      console.error("monNews 조회 실패:", error);
      throw error;
    }
  },
};
