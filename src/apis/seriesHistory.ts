import { API } from "./config";

export interface Part {
  msaId: number;
  title: string;
  subtitle: string;
}

export interface Series {
  msId: number;
  keyword: string;
  title: string;
  sub_title: string;
  parts: Part[];
}

export interface SeriesHistoryResponse {
  seriesList: Series[];
}

export async function getSeriesHistory(
  week: "이번주" | "저번주"
): Promise<SeriesHistoryResponse> {
  const res = await API.get<SeriesHistoryResponse>(
    `/users/history/series?week=${week}`
  );
  console.log("API response:", res.data);
  return res.data;
}
