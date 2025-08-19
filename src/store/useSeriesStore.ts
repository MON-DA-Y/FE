import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Series, Part } from "@/types/monSeries";

interface SeriesStore {
  // 현재 선택된 시리즈/파트
  currentSeries: Series | null;
  currentPart: Part | null;

  // setter
  setCurrentSeries: (series: Series) => void;
  setCurrentPart: (part: Part) => void;

  // 유틸: id로 파트 찾기
  getPartById: (partId: number) => Part | undefined;

  // 초기화
  clearSelection: () => void;
}

export const useSeriesStore = create<SeriesStore>()(
  devtools(
    (set, get) => ({
      currentSeries: null,
      currentPart: null,

      setCurrentSeries: (series) =>
        set(() => ({
          currentSeries: series,
          // 시리즈가 바뀌면 파트 선택 초기화
          currentPart: null,
        })),

      setCurrentPart: (part) =>
        set(() => ({
          currentPart: part,
        })),

      getPartById: (partId) => {
        return get().currentSeries?.parts?.find((p) => p.id === partId);
      },

      clearSelection: () =>
        set(() => ({
          currentSeries: null,
          currentPart: null,
        })),
    }),
    { name: "SeriesStore" }
  )
);
