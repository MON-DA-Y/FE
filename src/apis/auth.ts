import { API } from "./config";

export interface AuthResponse {
  token: string;
}

// 학생 회원가입
export async function studentSignUp(data: {
  name: string;
  email: string;
  password: string;
  schoolType: "middle" | "high";
  grade: number | null;
}): Promise<AuthResponse> {
  const res = await API.post<AuthResponse>("/signup/student", data);
  console.log("학생 회원가입 API response:", res.data);
  return res.data;
}

// 학부모 회원가입
export async function parentSignUp(data: {
  name: string;
  email: string;
  phone: string;
  password: string;
}): Promise<AuthResponse> {
  const res = await API.post<AuthResponse>("/signup/parent", data);
  console.log("학부모 회원가입 API response:", res.data);
  return res.data;
}

// 학생 로그인
export async function studentLogin(data: {
  email: string;
  password: string;
}): Promise<AuthResponse> {
  const res = await API.post<AuthResponse>("/login/student", data);
  console.log("학생 로그인 API response:", res.data);
  return res.data;
}

// 학부모 로그인
export async function parentLogin(data: {
  email: string;
  password: string;
}): Promise<AuthResponse> {
  const res = await API.post<AuthResponse>("/login/parent", data);
  console.log("학부모 로그인 API response:", res.data);
  return res.data;
}
