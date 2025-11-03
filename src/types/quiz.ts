export type GameState = "start" | "playing" | "end" | "reward";


export interface Question {
  question: string;
  options: string[];
  correct: number;
}