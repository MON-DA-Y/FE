import { API } from "./config";

export interface AttendanceDay {
  day: string;
  isAttended: boolean;
}

export interface AttendanceResponse {
  days: AttendanceDay[];
}

export async function getAttendance(
  week: "이번주" | "저번주"
): Promise<AttendanceResponse> {
  const res = await API.get<AttendanceResponse>(
    `/users/attendance?week=${week}`
  );
  console.log("API response:", res.data);
  return res.data;
}

// 부모가 특정 학생의 출석 가져오기
export async function getStudentAttendance(
  studentId: string,
  week: "이번주" | "저번주"
): Promise<AttendanceResponse> {
  const res = await API.get<AttendanceResponse>(
    `/users/${studentId}/attendance?week=${week}`
  );
  console.log("API response (parent):", res.data);
  return res.data;
}

export async function postAttendance(): Promise<{ message: string }> {
  const res = await API.post<{ message: string }>(`/users/attendance/today`);
  console.log("오늘 출석 처리 API response:", res.data);
  return res.data;
}
