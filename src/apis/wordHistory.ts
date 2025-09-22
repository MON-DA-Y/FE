import { Category } from "@/types/category";
import { API } from "./config";

export interface Word {
  wordId: number;
  category: Category;
  word: string;
  meaning: string;
  practice: string;
  isCorrect: boolean;
}

export interface WordHistoryResponse {
  wordList: Word[];
}

export async function getWordHistory(
  week: "이번주" | "저번주"
): Promise<WordHistoryResponse> {
  const res = await API.get<WordHistoryResponse>(
    `/users/history/word?week=${week}`
  );
  console.log("API response:", res.data);
  return res.data;
}
