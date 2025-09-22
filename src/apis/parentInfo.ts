import { API } from "./config";

export interface PrtInfoResponse {
  prt_name: string;
  prt_email: string;
  prt_phone: string;
  studentIds: string[];
}

interface PrtInfoAPIResponse {
  result: PrtInfoResponse;
}

export async function getParentInfo(): Promise<PrtInfoResponse> {
  const res = await API.get<PrtInfoAPIResponse>("/prtInfo");
  console.log("API response:", res.data.result);
  return res.data.result;
}

// 부모에게 자녀 추가
interface AddStudentRequest {
  studentId: string;
}

interface AddStudentResponse {
  message: string;
  student: {
    id: string;
    name: string;
    school: string;
    grade: string;
  };
}

export async function addStudent(
  studentId: string
): Promise<AddStudentResponse> {
  const reqBody: AddStudentRequest = { studentId }; // 인터페이스 사용
  const res = await API.post<AddStudentResponse>("/add-student", reqBody);
  console.log("자녀 추가 API response:", res.data);
  return res.data;
}
