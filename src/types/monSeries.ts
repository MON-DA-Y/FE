// 파트 - 학습용 type
export interface PartStudy {
  part_category: string[];
  summary: string;
  life_example: string;
  useful_terms: string;
  body: React.ReactNode;
}

// 파트 - 기본 type
export interface Part {
  id: number;
  isLearned: boolean;
  part_title: string;
  part_sub_title: string;
  part_study: PartStudy;
}

// 시리즈 - 기본 type
export interface Series {
  id: number;
  keyword: string;
  title: string;
  sub_title: string;
  parts: Part[];
}

// 시리즈 - 시리즈 페이지 헤더 type
export interface SeriesHeader {
  keyword: string;
  series_id: number;
  series_title: string;
  part_id: number;
}

// 키워드 - 시리즈 선택 모달
export interface KeywordModalType {
  id: number;
  isYellow: boolean;
  keyword: string;
  explain: string;
  series: Series[];
  onClose: () => void;
}

// 키워드 - 시리즈 선택 모달 - 시리즈
export interface KeywordModalSelectSeries {
  id: number;
  isYellow: boolean;
  series_title: string;
  series_sub_title: string;
}

// 키워드 - 기본 type
export interface Keyword {
  id: number;
  keyword: string;
  explain: string;
  series: Series[];
}

// 시리즈 - 시리즈로 보기 / 키워드로 보기 선택 컴포넌트
export interface ViewSwitch {
  viewMode: "series" | "keyword";
  onChangeView: (view: "series" | "keyword") => void;
}

// 시리즈 study - 실생활 예시 / 알아두면 좋을 용어
export interface TextBox {
  type: "lifeExample" | "term";
  text: string;
}
