import { AnalysisResult, Ingredient } from '../types';
import { findIngredient } from '../data/ingredients';

export const analyzeIngredients = (
  ingredients: string[],
  productType: 'cleanser' | 'moisturizer' | 'sunscreen'
): AnalysisResult => {
  const flaggedIngredients: Ingredient[] = [];
  const safeIngredients: Ingredient[] = [];
  const unknownIngredients: string[] = [];

  ingredients.forEach(ingredientName => {
    const ingredient = findIngredient(ingredientName);
    
    if (ingredient) {
      if (ingredient.status === 'avoid' || ingredient.status === 'caution') {
        flaggedIngredients.push(ingredient);
      } else {
        safeIngredients.push(ingredient);
      }
    } else {
      unknownIngredients.push(ingredientName);
    }
  });

  // Calculate verdict based on NEA Ecz-clusion List
  const hasAvoidIngredients = flaggedIngredients.some(ing => ing.status === 'avoid');
  const hasCautionIngredients = flaggedIngredients.some(ing => ing.status === 'caution');

  let verdict: 'suitable' | 'caution' | 'unsuitable';
  let score: number;

  if (hasAvoidIngredients) {
    verdict = 'unsuitable';
    score = 0;
  } else if (hasCautionIngredients) {
    verdict = 'caution';
    score = 50;
  } else {
    verdict = 'suitable';
    score = 100;
  }

  // Generate recommendations based on NEA guidelines
  const recommendations: string[] = [];
  
  if (verdict === 'unsuitable') {
    recommendations.push('This product contains ingredients from the NEA Ecz-clusion List and is not recommended for eczema-prone skin.');
    if (productType === 'sunscreen') {
      recommendations.push('For sunscreen, choose products with only zinc oxide, titanium dioxide, and iron oxides as active ingredients.');
    } else {
      recommendations.push('Look for fragrance-free, hypoallergenic alternatives without the flagged ingredients.');
    }
  } else if (verdict === 'caution') {
    recommendations.push('This product contains ingredients that may cause irritation in some individuals with eczema.');
    recommendations.push('Patch test before full use and discontinue if any irritation occurs.');
  } else {
    recommendations.push('This product appears suitable for eczema-prone skin based on the NEA Ecz-clusion List.');
    recommendations.push('Always patch test new products and consult your dermatologist if you have concerns.');
  }

  // Special sunscreen recommendations based on NEA guidelines
  if (productType === 'sunscreen') {
    const hasPhysicalFilters = safeIngredients.some(ing => 
      ing.inci.includes('Zinc Oxide') || ing.inci.includes('Titanium Dioxide')
    );
    const hasChemicalFilters = flaggedIngredients.some(ing => 
      ['Avobenzone', 'Benzophenone-3', 'Ethylhexyl Salicylate', 'Octocrylene', 'Homosalate', 'Ethylhexyl Methoxycinnamate'].includes(ing.inci)
    );

    if (hasPhysicalFilters && !hasChemicalFilters && verdict !== 'unsuitable') {
      recommendations.push('Excellent choice! This appears to be a 100% physical sunscreen, which is recommended by the NEA for eczema-prone skin.');
    } else if (hasChemicalFilters) {
      recommendations.push('This sunscreen contains chemical filters. The NEA recommends only 100% physical sunscreens (zinc oxide, titanium dioxide, iron oxides) for eczema-prone skin.');
    }
  }

  return {
    verdict,
    flaggedIngredients,
    safeIngredients,
    score,
    recommendations
  };
};
