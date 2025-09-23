import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
});

// 매 요청마다 토큰 붙이기
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
