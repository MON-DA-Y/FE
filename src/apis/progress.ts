import { API } from "./config";

export interface Task {
  word: string;
  news: string;
  series: string;
  quiz: string;
}

export interface ProgressDay {
  day: string;
  tasks: Task;
}

export interface ProgressResponse {
  weekCompletionRate: number;
  strikeDay?: number;
  days: ProgressDay[];
}

export async function getProgress(
  week: "이번주" | "저번주"
): Promise<ProgressResponse> {
  const res = await API.get<ProgressResponse>(`/users/progress?week=${week}`);
  console.log("API response:", res.data);
  return res.data;
}

export async function getStudentProgress(
  studentId: string,
  week: "이번주" | "저번주"
): Promise<ProgressResponse> {
  const res = await API.get<ProgressResponse>(
    `/users/${studentId}/progress?week=${week}`
  );
  console.log("API response: (progress)", res.data);
  return res.data;
}
