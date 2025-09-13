import { AnalysisResult, FlaggedIngredient, SafeIngredient } from '../types';
import { findIngredient, detectFragranceTerms, detectChemicalUVAbsorbers, detectFormaldehydeReleasers } from '../data/ingredients';

// Official NEA Ecz-clusion List - EXACT 35 ingredients only
const NEA_FLAGGED_INGREDIENTS = [
  // Specific fragrance allergens
  'alpha-amyl cinnamic alcohol', 'amylcinnamaldehyde',
  'cinnamic alcohol', 'cinnamic aldehyde', 'citral', 'citronellol',
  'coumarin', 'eugenol', 'farnesol', 'geraniol', 'hexyl cinnamic aldehyde',
  'hydroxycitronellal', 'isoeugenol', 'lyral', 'hydroxy-isohexyl cyclohexene carboxaldehyde',

  // Topical antibiotics and anesthetics
  'bacitracin', 'benzocaine', 'lidocaine', 'neomycin sulfate', 'polymyxin b sulfate',

  // Citrus extracts
  'citrus aurantifolia peel powder', 'citrus aurantifolia (lime) peel powder',
  'citrus aurantium dulcis peel oil', 'citrus aurantium dulcis (orange) peel oil',
  'citrus extract', 'citrus limon peel powder', 'citrus limon (lemon) peel powder',

  // Formaldehyde and specific preservatives on NEA list
  'formaldehyde', 'methylchloroisothiazolinone', 'methyl dibromo glutaronitrile',
  'methylisothiazolinone', 'triclosan',

  // Natural extracts and resins
  'myroxylon balsamum', 'balsam of tolu', 'myroxylon pereirae resin', 'balsam of peru',
  'oak moss absolute', 'propolis', 'shellac',

  // General categories
  'fragrance', 'parfum', 'perfume', 'aroma',

  // Chemical UV absorbers
  'avobenzone', 'oxybenzone', 'benzophenone-3', 'octisalate', 'ethylhexyl salicylate',
  'octocrylene', 'homosalate', 'octinoxate', 'ethylhexyl methoxycinnamate',

  // Formaldehyde releasers
  'dmdm hydantoin', 'quaternium-15', 'imidazolidinyl urea', 'diazolidinyl urea'
];

// Safe ingredients commonly found in eczema-friendly products
const SAFE_INGREDIENTS = [
  'aqua', 'water', 'glycerin', 'petrolatum', 'dimethicone',
  'ceramide', 'hyaluronic acid', 'sodium hyaluronate', 'niacinamide', 'panthenol',
  'allantoin', 'colloidal oatmeal', 'shea butter', 'squalane',
  'zinc oxide', 'titanium dioxide', 'mineral oil', 'paraffin', 'lanolin',
  'tocopherol', 'bisabolol', 'caprylic/capric triglyceride'
];

// Ingredients to use with caution (not on NEA list but potentially problematic)
const CAUTION_INGREDIENTS = [
  'sodium lauryl sulfate', 'sls', 'sodium laureth sulfate', 'sles',
  'alcohol denat', 'isopropyl alcohol', 'ethanol', 'denatured alcohol'
];

export function analyzeIngredients(ingredients: string[], skinType: string = 'general'): AnalysisResult {
  const flaggedIngredients: FlaggedIngredient[] = [];
  const safeIngredients: SafeIngredient[] = [];
  
  // Normalize ingredients for comparison
  const normalizedIngredients = ingredients.map(ing => ing.toLowerCase().trim());
  
  // Check each ingredient
  normalizedIngredients.forEach(ingredient => {
    let isProcessed = false;
    
    // First check against our ingredient database
    const foundIngredient = findIngredient(ingredient);
    if (foundIngredient) {
      if (foundIngredient.status === 'avoid') {
        flaggedIngredients.push({
          name: foundIngredient.name,
          inci: foundIngredient.inci,
          reason: foundIngredient.reason,
          status: 'avoid',
          source: foundIngredient.source
        });
        isProcessed = true;
      } else if (foundIngredient.status === 'safe') {
        safeIngredients.push({
          name: foundIngredient.name,
          inci: foundIngredient.inci,
          reason: foundIngredient.reason
        });
        isProcessed = true;
      } else if (foundIngredient.status === 'caution') {
        flaggedIngredients.push({
          name: foundIngredient.name,
          inci: foundIngredient.inci,
          reason: foundIngredient.reason,
          status: 'caution',
          source: foundIngredient.source
        });
        isProcessed = true;
      }
    }
    
    // If not found in database, check against NEA list patterns
    if (!isProcessed) {
      // Check for fragrance terms
      if (detectFragranceTerms(ingredient)) {
        flaggedIngredients.push({
          name: ingredient.charAt(0).toUpperCase() + ingredient.slice(1),
          inci: ingredient.toUpperCase(),
          reason: 'Contains fragrance compounds - products must be fragrance-free per NEA guidelines',
          status: 'avoid',
          source: 'NEA Ecz-clusion List'
        });
        isProcessed = true;
      }
      
      // Check for chemical UV absorbers
      else if (detectChemicalUVAbsorbers(ingredient)) {
        flaggedIngredients.push({
          name: ingredient.charAt(0).toUpperCase() + ingredient.slice(1),
          inci: ingredient.toUpperCase(),
          reason: 'Chemical sunscreen filter - only physical sunscreens are eczema-safe per NEA guidelines',
          status: 'avoid',
          source: 'NEA Ecz-clusion List'
        });
        isProcessed = true;
      }
      
      // Check for formaldehyde releasers
      else if (detectFormaldehydeReleasers(ingredient)) {
        flaggedIngredients.push({
          name: ingredient.charAt(0).toUpperCase() + ingredient.slice(1),
          inci: ingredient.toUpperCase(),
          reason: 'Formaldehyde releaser that can cause contact dermatitis per NEA guidelines',
          status: 'avoid',
          source: 'NEA Ecz-clusion List'
        });
        isProcessed = true;
      }
    }
    
    // Check for safe ingredients if not already processed
    if (!isProcessed) {
      SAFE_INGREDIENTS.forEach(safe => {
        if (ingredient.includes(safe.toLowerCase()) || safe.toLowerCase().includes(ingredient)) {
          if (!safeIngredients.some(si => si.inci.toLowerCase() === ingredient)) {
            let reason = 'Generally well-tolerated ingredient suitable for sensitive skin.';
            
            if (safe === 'ceramide') reason = 'Helps restore and maintain the skin barrier function.';
            if (safe === 'hyaluronic acid' || safe === 'sodium hyaluronate') reason = 'Provides hydration without irritation.';
            if (safe === 'niacinamide') reason = 'Anti-inflammatory properties that can help calm eczema.';
            if (safe === 'colloidal oatmeal') reason = 'Clinically proven to soothe and protect eczema-prone skin.';
            if (safe === 'petrolatum') reason = 'Excellent occlusive that helps repair compromised skin barriers.';
            if (safe === 'zinc oxide' || safe === 'titanium dioxide') reason = 'Gentle mineral sunscreen with anti-inflammatory properties.';
            
            safeIngredients.push({
              name: ingredient.charAt(0).toUpperCase() + ingredient.slice(1),
              inci: ingredient.toUpperCase(),
              reason: reason
            });
            isProcessed = true;
          }
        }
      });
    }
    
    // Check for caution ingredients if not already processed
    if (!isProcessed) {
      CAUTION_INGREDIENTS.forEach(caution => {
        if (ingredient.includes(caution.toLowerCase()) || caution.toLowerCase().includes(ingredient)) {
          if (!flaggedIngredients.some(fi => fi.inci.toLowerCase() === ingredient)) {
            let reason = 'May cause irritation in sensitive skin - use with caution.';
            
            if (caution.includes('sulfate')) reason = 'Harsh surfactant that can strip natural oils and irritate sensitive skin.';
            if (caution.includes('alcohol')) reason = 'Drying alcohol that can irritate sensitive skin and worsen eczema.';
            
            flaggedIngredients.push({
              name: ingredient.charAt(0).toUpperCase() + ingredient.slice(1),
              inci: ingredient.toUpperCase(),
              reason: reason,
              status: 'caution',
              source: 'Dermatologist Guidelines'
            });
            isProcessed = true;
          }
        }
      });
    }
  });
  
  // Determine overall verdict
  let verdict: 'suitable' | 'caution' | 'unsuitable';
  
  const avoidCount = flaggedIngredients.filter(fi => fi.status === 'avoid').length;
  const cautionCount = flaggedIngredients.filter(fi => fi.status === 'caution').length;
  
  if (avoidCount > 0) {
    verdict = 'unsuitable';
  } else if (cautionCount > 0) {
    verdict = 'caution';
  } else {
    verdict = 'suitable';
  }
  
  return {
    verdict,
    flaggedIngredients,
    safeIngredients,
    totalIngredients: ingredients.length
  };
}
