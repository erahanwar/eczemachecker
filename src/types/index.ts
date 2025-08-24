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
