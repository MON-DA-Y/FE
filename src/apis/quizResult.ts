import { API } from "./config";

export interface Result {
  quizId: number;
  day: string;
  score: number;
}

export interface QuizResultResponse {
  results: Result[];
}

export async function getQuizResult(
  studentId: string,
  week: "이번주" | "저번주"
): Promise<QuizResultResponse> {
  const res = await API.get<QuizResultResponse>(
    `/users/${studentId}/quiz-result?week=${week}`
  );
  console.log("API response:", res.data);
  return res.data;
}
