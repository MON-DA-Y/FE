import { Category } from "../../types/category";
import { API } from "./config";

export interface Word {
  wordId: number;
  category: Category;
  word: string;
  explain: string;
  use: string;
  isCorrect: boolean;
}

export interface WordHistoryResponse {
  week: number;
  words: Word[];
}

export async function getWordHistory(
  studentId: number,
  week: number
): Promise<WordHistoryResponse> {
  const res = await API.get<WordHistoryResponse>(
    `/users/${studentId}/word-history?week=${week}`
  );
  console.log("API response:", res.data);
  return res.data;
}
