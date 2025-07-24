// 퀴즈 item type
export interface Quiz {
  id: number;
  type: "word" | "news";
  question: string;
  choices: string[];
  selectedChoice: string | null;
  onClick: (choice: string) => void;
}

// 퀴즈 채점 item type
export interface QuizMark {
  id: number;
  type: "word" | "news";
  question: string;
  choices: string[];
  selectedAnswer: string;
  answer: string;
  marking: string;
  isCorrect: boolean;
  onClick?: (choice: string) => void;
}

// 퀴즈 리스트 -
export interface Quizzes {
  id: number;
  type: "word" | "news";
  question: string;
  choices: string[];
}
