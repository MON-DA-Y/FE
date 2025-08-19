import { API } from "./config";

export interface Part {
  partId: number;
  isLearned: boolean;
  part_title: string;
  part_sub_title: string;
}

export interface Series {
  seriesId: number;
  keyword: string;
  title: string;
  sub_title: string;
  status: "done" | "ongoing";
  totalCount: number;
  learnedCount: number;
  imgUrl: string;
  parts: Part[];
}

export interface SeriesHistoryResponse {
  week: number;
  seriesList: Series[];
}

export async function getSeriesHistory(
  studentId: number,
  week: number
): Promise<SeriesHistoryResponse> {
  const res = await API.get<SeriesHistoryResponse>(
    `/users/${studentId}/history/series?week=${week}`
  );
  console.log("API response:", res.data);
  return res.data;
}
