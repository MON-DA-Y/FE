import { API } from "./config";
import { useParams } from "next/navigation";

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
  week: string
): Promise<SeriesHistoryResponse> {
  const res = await API.get<SeriesHistoryResponse>(
    `/users/history/series?week=${week}`
  );
  console.log("API response:", res.data);
  return res.data;
}
