import { API } from "./config";

export interface Result {
  quizId: number;
  day: string;
  score: number;
}

export interface QuizResultResponse {
  week: number;
  results: Result[];
}

export async function getQuizResult(
  studentId: number,
  week: number
): Promise<QuizResultResponse> {
  const res = await API.get<QuizResultResponse>(
    `/users/${studentId}/quiz-result?week=${week}`
  );
  console.log("API response:", res.data);
  return res.data;
}
