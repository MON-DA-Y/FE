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
  week: number;
  weekCompletionRate: number;
  strikeDay: number;
  days: ProgressDay[];
}

export async function getProgress(week: number): Promise<ProgressResponse> {
  const res = await API.get<ProgressResponse>(`/users/progress?week=${week}`);
  console.log("API response:", res.data);
  return res.data;
}
