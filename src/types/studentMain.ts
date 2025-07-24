// 오늘의 학습률 type
export interface LearningRate {
  learn_word: number;
  today_word: number;
  learn_news: number;
  today_news: number;
  learn_series: number;
  today_series: number;
}

// 시리즈 카드 type
export interface SeriesCardType {
  onClick: () => void;
  keyword: string;
  children: React.ReactNode;
}

// 인기 시리즈 item type
export interface TrendingSeries {
  id: number;
  keyword: string;
}
