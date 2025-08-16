import { Category } from "../../types/category";
import { API } from "./config";

export interface CategoryScore {
  category: Category;
  total: number;
  correct: number;
}

export interface Weakness {
  categories: CategoryScore[];
  summary: string | null;
}

export interface WeaknessResponse {
  week: number;
  weakWord: Weakness;
  weakNews: Weakness;
}

export async function getWeakness(
  studentId: number,
  week: number
): Promise<WeaknessResponse> {
  const res = await API.get<WeaknessResponse>(
    `/users/${studentId}/weakness?week=${week}`
  );
  console.log("API response:", res.data);
  return res.data;
}
