import { Category } from "../../types/category";
import { API } from "./config";

export interface News {
  newsId: number;
  category: Category;
  title: string;
  imgUrl: string;
  isCorrect: boolean;
}

export interface NewsHistoryResponse {
  week: number;
  newsList: News[];
}

export async function getNewsHistory(
  studentId: number,
  week: number
): Promise<NewsHistoryResponse> {
  const res = await API.get<NewsHistoryResponse>(
    `/users/${studentId}/history/news?week=${week}`
  );
  console.log("API response:", res.data);
  return res.data;
}
