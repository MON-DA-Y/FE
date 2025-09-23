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

export const monNewsApi = {
  // monNews 배정
  postMonNewsAssign: async () => {
    try {
      const headers = getAuthHeader();
      const response = await axios.post(
        `${baseURL}/monNews/assign`,
        {},
        { headers }
      );
      // console.log("monNews 배정 post 결과:", response.data);
      return response.data.result;
    } catch (error) {
      console.error("monNews 배정 실패:", error);
    }
  },

  // monNews 조회
  getMonNews: async () => {
    const headers = getAuthHeader();
    const response = await axios.get(`${baseURL}/monNews`, { headers });
    // console.log("monNews 조회 결과:", response.data);
    return response.data.result[0];
  },

  // monNews 학습 완료
  postMonNews: async (newsId: number) => {
    const headers = getAuthHeader();
    const response = await axios.post(
      `${baseURL}/monNews/done`,
      { newsId: newsId },
      { headers }
    );
    return response.data.result;
  },
};
