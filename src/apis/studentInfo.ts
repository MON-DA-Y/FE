import { API } from "./config";

export interface StdInfoResponse {
  std_id: number;
  std_name: string;
  std_level: string;
  std_img: string;
  std_email: string;
  std_schoolType: string;
  std_grade: number;
}

interface StdInfoAPIResponse {
  result: StdInfoResponse;
}

export async function getStudentInfo(): Promise<StdInfoResponse> {
  const res = await API.get<StdInfoAPIResponse>("/stdInfo");
  console.log("API response:", res.data.result);
  return res.data.result;
}

export async function getStudentByEmail(
  email: string
): Promise<StdInfoResponse> {
  const res = await API.get(`/student/email?email=${email}`);
  const data = res.data;
  return {
    std_id: data._id,
    std_name: data.std_name,
    std_level: data.std_level,
    std_img: data.std_img,
    std_email: data.std_email,
    std_schoolType: data.std_schoolType,
    std_grade: data.std_grade,
  };
}

// import axios from "axios";

// const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

// // 토큰 가져오기
// const getToken = () => {
//   const token = localStorage.getItem("token");
//   //   console.log("가져온 토큰:", token);
//   return token;
// };

// // 토큰을 헤더에 추가
// const getAuthHeader = () => {
//   const token = getToken();
//   const headers = {
//     Authorization: `Bearer ${token}`,
//   };
//   //   console.log("생성된 헤더:", headers);
//   return headers;
// };

// export const studentInfoApi = {
//   // 학생 정보 조회
//   getStudentInfo: async () => {
//     try {
//       const headers = getAuthHeader();
//       const response = await axios.get(`${baseURL}/stdInfo`, {
//         headers,
//       });
//       // console.log("학생 정보 조회 결과:", response.data);
//       return response.data.result;
//     } catch (error) {
//       console.error("학생 정보 get 실패:", error);
//       throw error;
//     }
//   },
// };
