export interface Option {
  id: string;
  label: string;
  value: string;
}

export interface Question {
  id: number;
  title: string;
  subtitle?: string;
  options: Option[];
}

export interface SurveyState {
  currentStep: number; // 0 = Welcome, 1-5 = Questions, 6 = Results
  answers: Record<number, string>;
}