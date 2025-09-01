import { API } from "./config";

export interface AttendanceDay {
  day: string;
  isAttended: boolean;
}

export interface AttendanceResponse {
  week: number;
  days: AttendanceDay[];
}

export async function getAttendance(
  studentId: number,
  week: "이번주" | "저번주"
): Promise<AttendanceResponse> {
  console.log("getAttendance 호출 - studentId:", studentId, "week:", week);
  const res = await API.get<AttendanceResponse>(
    `/users/${studentId}/attendance?week=${week}`
  );
  console.log("API response:", res.data);
  return res.data;
}
