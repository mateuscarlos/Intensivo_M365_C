export interface Lesson {
  id: string;
  title: string;
  order: number;
  level: "Iniciante" | "Intermediário" | "Avançado";
  duration: string;
  summary: string;
  objectives: string[];
  topics: string[];
  content: string;
}

export interface QuizOption {
  label: string;
  value: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  answer: string;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  topic: string;
  duration: string;
  questions: QuizQuestion[];
}

export interface Challenge {
  id: string;
  title: string;
  difficulty: "Fácil" | "Médio" | "Difícil";
  description: string;
  sampleInput: string;
  sampleOutput: string;
  acceptanceCriteria: string[];
  hints: string[];
  topics: string[];
}

export interface PlaygroundSnippet {
  id: string;
  title: string;
  description: string;
  code: string;
}
