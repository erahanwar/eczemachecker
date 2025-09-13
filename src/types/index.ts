export interface Ingredient {
  name: string;
  inci: string;
  status: 'safe' | 'caution' | 'avoid';
  reason: string;
  source: string;
}

export interface Product {
  name: string;
  brand?: string;
  ingredients: string[];
}

export interface AnalysisResult {
  verdict: 'suitable' | 'caution' | 'unsuitable';
  flaggedIngredients: Ingredient[];
  safeIngredients: Ingredient[];
  score: number;
  recommendations: string[];
}

export interface POEMQuestion {
  id: string;
  text: string;
  options: POEMOption[];
}

export interface POEMOption {
  value: number;
  label: string;
  description: string;
}

export interface POEMResult {
  totalScore: number;
  severity: 'clear' | 'mild' | 'moderate' | 'severe' | 'very-severe';
  interpretation: string;
  recommendations: string[];
  completedAt: Date;
}

export interface POEMAssessment {
  answers: Record<string, number>;
  isCaregiver: boolean;
  patientAge?: number;
  result?: POEMResult;
}
