import { AnalysisResult, Ingredient } from '../types';
import { findIngredient, detectFragranceTerms, detectDyeTerms } from '../data/ingredients';

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
      // Check for potential fragrance or dye terms in unknown ingredients
      const isFragrance = detectFragranceTerms(ingredientName);
      const isDye = detectDyeTerms(ingredientName);
      
      if (isFragrance) {
        flaggedIngredients.push({
          name: ingredientName,
          inci: ingredientName,
          status: 'avoid',
          reason: 'Potential fragrance ingredient - products must be fragrance-free per AAD guidelines',
          source: 'AAD Guidelines'
        });
      } else if (isDye) {
        flaggedIngredients.push({
          name: ingredientName,
          inci: ingredientName,
          status: 'avoid',
          reason: 'Potential dye ingredient - products must be dye-free per AAD guidelines',
          source: 'AAD Guidelines'
        });
      } else {
        unknownIngredients.push(ingredientName);
      }
    }
  });

  // Calculate verdict based on NEA Ecz-clusion List + AAD Guidelines
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

  // Generate recommendations based on NEA + AAD guidelines
  const recommendations: string[] = [];
  
  if (verdict === 'unsuitable') {
    const hasFragrance = flaggedIngredients.some(ing => 
      ing.reason.includes('fragrance') || ing.reason.includes('perfume')
    );
    const hasDye = flaggedIngredients.some(ing => 
      ing.reason.includes('dye')
    );
    
    recommendations.push('This product is not recommended for atopic dermatitis management.');
    
    if (hasFragrance) {
      recommendations.push('AAD guidelines require products to be fragrance-free and perfume-free for atopic dermatitis.');
    }
    if (hasDye) {
      recommendations.push('AAD guidelines require products to be dye-free for atopic dermatitis.');
    }
    
    if (productType === 'sunscreen') {
      recommendations.push('For sunscreen, choose fragrance-free, dye-free products with only zinc oxide, titanium dioxide, and iron oxides as active ingredients.');
    } else {
      recommendations.push('Look for fragrance-free, perfume-free, dye-free, hypoallergenic alternatives.');
    }
  } else if (verdict === 'caution') {
    recommendations.push('This product contains ingredients that may cause irritation in some individuals with atopic dermatitis.');
    recommendations.push('Patch test before full use and discontinue if any irritation occurs.');
  } else {
    recommendations.push('This product appears suitable for atopic dermatitis based on NEA and AAD guidelines.');
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
      recommendations.push('Excellent choice! This appears to be a 100% physical sunscreen that meets NEA and AAD requirements.');
    } else if (hasChemicalFilters) {
      recommendations.push('This sunscreen contains chemical filters. NEA and AAD recommend only 100% physical sunscreens for atopic dermatitis.');
    }
  }

  // Add AAD compliance note
  if (verdict === 'suitable') {
    recommendations.push('This product meets the AAD requirement for fragrance-free, perfume-free, and dye-free formulation.');
  }

  return {
    verdict,
    flaggedIngredients,
    safeIngredients,
    score,
    recommendations
  };
};
