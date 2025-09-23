import { Category } from "@/types/category";
import { API } from "./config";
import { useParams } from "next/navigation";

export interface Word {
  mwiId: number;
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
  week: string
): Promise<WordHistoryResponse> {
  const res = await API.get<WordHistoryResponse>(
    `/users/history/word?week=${week}`
  );
  console.log("API response:", res.data);
  return res.data;
}

export async function getParentWordHistory(
  week: string
): Promise<WordHistoryResponse> {
  const res = await API.get<WordHistoryResponse>(
    `/users/parent/history/word?week=${week}`
  );
  console.log("API response:", res.data);
  return res.data;
}
