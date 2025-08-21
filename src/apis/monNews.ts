import axios from "axios";
import { News } from "@/types/monNews";

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
  getMonNews: async () => {
    const headers = getAuthHeader();
    const response = await axios.get(`${baseURL}/monNews`, {
      headers,
    });
    // console.log("monNews 조회 결과:", response.data);
    return response.data.result;
  },

  postMonNews: async () => {
    const headers = getAuthHeader();
    const response = await axios.post(`${baseURL}/monNews/done`, {
      headers,
    });
    return response.data.result;
  },
};
