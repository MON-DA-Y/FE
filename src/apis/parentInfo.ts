import { API } from "./config";

export interface PrtInfoResponse {
  prt_name: string;
  prt_email: string;
  prt_phone: string;
}

interface PrtInfoAPIResponse {
  result: PrtInfoResponse;
}

export async function getParentInfo(): Promise<PrtInfoResponse> {
  const res = await API.get<PrtInfoAPIResponse>("/prtInfo");
  console.log("API response:", res.data.result);
  return res.data.result;
}
