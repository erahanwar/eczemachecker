import { AnalysisResult, FlaggedIngredient, SafeIngredient } from '../types';

// NEA Ecz-clusion List and AAD Guidelines
const FLAGGED_INGREDIENTS = {
  // Fragrances and Essential Oils (NEA Ecz-clusion List)
  fragrances: [
    'parfum', 'fragrance', 'aroma', 'perfume',
    'lavender oil', 'lavandula angustifolia oil', 'lavandula oil',
    'tea tree oil', 'melaleuca alternifolia leaf oil',
    'eucalyptus oil', 'eucalyptus globulus leaf oil',
    'peppermint oil', 'mentha piperita oil',
    'lemon oil', 'citrus limon peel oil',
    'orange oil', 'citrus aurantium dulcis peel oil',
    'bergamot oil', 'citrus bergamia peel oil',
    'ylang ylang oil', 'cananga odorata flower oil',
    'geranium oil', 'pelargonium graveolens oil',
    'rosemary oil', 'rosmarinus officinalis leaf oil',
    'chamomile oil', 'chamomilla recutita flower oil',
    'sandalwood oil', 'santalum album oil',
    'jasmine oil', 'jasminum officinale oil',
    'rose oil', 'rosa damascena flower oil',
    'linalool', 'limonene', 'citronellol', 'geraniol', 'eugenol',
    'benzyl alcohol', 'benzyl benzoate', 'benzyl salicylate',
    'cinnamyl alcohol', 'cinnamal', 'citral', 'coumarin',
    'farnesol', 'hexyl cinnamal', 'hydroxycitronellal',
    'isoeugenol', 'methyl 2-octynoate', 'alpha-isomethyl ionone'
  ],

  // Preservatives (NEA Ecz-clusion List)
  preservatives: [
    'methylisothiazolinone', 'methylchloroisothiazolinone',
    'kathon cg', 'formaldehyde', 'quaternium-15',
    'dmdm hydantoin', 'imidazolidinyl urea', 'diazolidinyl urea',
    'sodium hydroxymethylglycinate', 'bronopol',
    'methyldibromo glutaronitrile', 'phenoxyethanol'
  ],

  // Dyes and Colorants
  dyes: [
    'fd&c', 'fdc', 'd&c', 'ci 77891', 'ci 77492', 'ci 77491', 'ci 77499',
    'ci 19140', 'ci 16035', 'ci 42090', 'ci 17200', 'ci 15985',
    'yellow 5', 'yellow 6', 'red 40', 'red 4', 'blue 1',
    'titanium dioxide', 'iron oxides', 'mica', 'talc'
  ],

  // Harsh Surfactants
  surfactants: [
    'sodium lauryl sulfate', 'sls', 'sodium laureth sulfate', 'sles',
    'ammonium lauryl sulfate', 'ammonium laureth sulfate'
  ],

  // Alcohols (Drying)
  alcohols: [
    'alcohol denat', 'ethanol', 'isopropyl alcohol', 'benzyl alcohol',
    'methanol', 'sd alcohol'
  ],

  // Acids (High Concentration)
  acids: [
    'glycolic acid', 'salicylic acid', 'lactic acid', 'citric acid',
    'malic acid', 'tartaric acid', 'mandelic acid'
  ],

  // Retinoids
  retinoids: [
    'retinol', 'retinyl palmitate', 'tretinoin', 'adapalene',
    'tazarotene', 'retinaldehyde'
  ],

  // Sunscreen Chemicals
  sunscreenChemicals: [
    'oxybenzone', 'octinoxate', 'octisalate', 'avobenzone',
    'homosalate', 'octocrylene', 'benzophenone-3', 'benzophenone-4'
  ]
};

// Safe ingredients commonly found in eczema-friendly products
const SAFE_INGREDIENTS = [
  'aqua', 'water', 'glycerin', 'petrolatum', 'dimethicone',
  'ceramide', 'hyaluronic acid', 'niacinamide', 'panthenol',
  'allantoin', 'colloidal oatmeal', 'shea butter', 'squalane',
  'zinc oxide', 'mineral oil', 'paraffin', 'lanolin',
  'sodium hyaluronate', 'tocopherol', 'bisabolol'
];

export function analyzeIngredients(ingredients: string[], skinType: string = 'general'): AnalysisResult {
  const flaggedIngredients: FlaggedIngredient[] = [];
  const safeIngredients: SafeIngredient[] = [];
  
  // Normalize ingredients for comparison
  const normalizedIngredients = ingredients.map(ing => ing.toLowerCase().trim());
  
  // Check each ingredient
  normalizedIngredients.forEach(ingredient => {
    let isFlaged = false;
    
    // Check fragrances and essential oils
    FLAGGED_INGREDIENTS.fragrances.forEach(flagged => {
      if (ingredient.includes(flagged.toLowerCase()) || flagged.toLowerCase().includes(ingredient)) {
        if (!flaggedIngredients.some(fi => fi.inci.toLowerCase() === ingredient)) {
          flaggedIngredients.push({
            name: ingredient.charAt(0).toUpperCase() + ingredient.slice(1),
            inci: ingredient.toUpperCase(),
            reason: 'Fragrances and essential oils can trigger contact dermatitis and worsen eczema symptoms.',
            status: 'avoid',
            source: 'NEA'
          });
          isFlaged = true;
        }
      }
    });
    
    // Check preservatives
    if (!isFlaged) {
      FLAGGED_INGREDIENTS.preservatives.forEach(flagged => {
        if (ingredient.includes(flagged.toLowerCase()) || flagged.toLowerCase().includes(ingredient)) {
          if (!flaggedIngredients.some(fi => fi.inci.toLowerCase() === ingredient)) {
            flaggedIngredients.push({
              name: ingredient.charAt(0).toUpperCase() + ingredient.slice(1),
              inci: ingredient.toUpperCase(),
              reason: 'This preservative is a known contact allergen that can cause skin sensitization.',
              status: 'avoid',
              source: 'NEA'
            });
            isFlaged = true;
          }
        }
      });
    }
    
    // Check dyes and colorants
    if (!isFlaged) {
      FLAGGED_INGREDIENTS.dyes.forEach(flagged => {
        if (ingredient.includes(flagged.toLowerCase()) || flagged.toLowerCase().includes(ingredient)) {
          if (!flaggedIngredients.some(fi => fi.inci.toLowerCase() === ingredient)) {
            flaggedIngredients.push({
              name: ingredient.charAt(0).toUpperCase() + ingredient.slice(1),
              inci: ingredient.toUpperCase(),
              reason: 'Dyes and colorants are unnecessary additives that can cause allergic reactions.',
              status: 'avoid',
              source: 'NEA'
            });
            isFlaged = true;
          }
        }
      });
    }
    
    // Check harsh surfactants
    if (!isFlaged) {
      FLAGGED_INGREDIENTS.surfactants.forEach(flagged => {
        if (ingredient.includes(flagged.toLowerCase()) || flagged.toLowerCase().includes(ingredient)) {
          if (!flaggedIngredients.some(fi => fi.inci.toLowerCase() === ingredient)) {
            flaggedIngredients.push({
              name: ingredient.charAt(0).toUpperCase() + ingredient.slice(1),
              inci: ingredient.toUpperCase(),
              reason: 'Harsh sulfates can strip the skin barrier and increase irritation in eczema-prone skin.',
              status: 'avoid',
              source: 'NEA'
            });
            isFlaged = true;
          }
        }
      });
    }
    
    // Check drying alcohols
    if (!isFlaged) {
      FLAGGED_INGREDIENTS.alcohols.forEach(flagged => {
        if (ingredient.includes(flagged.toLowerCase()) || flagged.toLowerCase().includes(ingredient)) {
          if (!flaggedIngredients.some(fi => fi.inci.toLowerCase() === ingredient)) {
            flaggedIngredients.push({
              name: ingredient.charAt(0).toUpperCase() + ingredient.slice(1),
              inci: ingredient.toUpperCase(),
              reason: 'Drying alcohols can compromise the skin barrier and increase water loss.',
              status: 'caution',
              source: 'NEA'
            });
            isFlaged = true;
          }
        }
      });
    }
    
    // Check acids
    if (!isFlaged) {
      FLAGGED_INGREDIENTS.acids.forEach(flagged => {
        if (ingredient.includes(flagged.toLowerCase()) || flagged.toLowerCase().includes(ingredient)) {
          if (!flaggedIngredients.some(fi => fi.inci.toLowerCase() === ingredient)) {
            flaggedIngredients.push({
              name: ingredient.charAt(0).toUpperCase() + ingredient.slice(1),
              inci: ingredient.toUpperCase(),
              reason: 'Exfoliating acids can increase skin sensitivity and irritation in compromised skin barriers.',
              status: 'caution',
              source: 'NEA'
            });
            isFlaged = true;
          }
        }
      });
    }
    
    // Check retinoids
    if (!isFlaged) {
      FLAGGED_INGREDIENTS.retinoids.forEach(flagged => {
        if (ingredient.includes(flagged.toLowerCase()) || flagged.toLowerCase().includes(ingredient)) {
          if (!flaggedIngredients.some(fi => fi.inci.toLowerCase() === ingredient)) {
            flaggedIngredients.push({
              name: ingredient.charAt(0).toUpperCase() + ingredient.slice(1),
              inci: ingredient.toUpperCase(),
              reason: 'Retinoids can increase skin sensitivity and may worsen inflammation in active eczema.',
              status: 'caution',
              source: 'NEA'
            });
            isFlaged = true;
          }
        }
      });
    }
    
    // Check chemical sunscreens
    if (!isFlaged) {
      FLAGGED_INGREDIENTS.sunscreenChemicals.forEach(flagged => {
        if (ingredient.includes(flagged.toLowerCase()) || flagged.toLowerCase().includes(ingredient)) {
          if (!flaggedIngredients.some(fi => fi.inci.toLowerCase() === ingredient)) {
            flaggedIngredients.push({
              name: ingredient.charAt(0).toUpperCase() + ingredient.slice(1),
              inci: ingredient.toUpperCase(),
              reason: 'Chemical sunscreen filters can cause contact dermatitis. Mineral sunscreens are preferred.',
              status: 'caution',
              source: 'NEA'
            });
            isFlaged = true;
          }
        }
      });
    }
    
    // Check if ingredient is safe
    if (!isFlaged) {
      SAFE_INGREDIENTS.forEach(safe => {
        if (ingredient.includes(safe.toLowerCase()) || safe.toLowerCase().includes(ingredient)) {
          if (!safeIngredients.some(si => si.inci.toLowerCase() === ingredient)) {
            let reason = 'Generally well-tolerated ingredient suitable for sensitive skin.';
            
            if (safe === 'ceramide') reason = 'Helps restore and maintain the skin barrier function.';
            if (safe === 'hyaluronic acid') reason = 'Provides hydration without irritation.';
            if (safe === 'niacinamide') reason = 'Anti-inflammatory properties that can help calm eczema.';
            if (safe === 'colloidal oatmeal') reason = 'Clinically proven to soothe and protect eczema-prone skin.';
            if (safe === 'petrolatum') reason = 'Excellent occlusive that helps repair compromised skin barriers.';
            if (safe === 'zinc oxide') reason = 'Gentle mineral sunscreen with anti-inflammatory properties.';
            
            safeIngredients.push({
              name: ingredient.charAt(0).toUpperCase() + ingredient.slice(1),
              inci: ingredient.toUpperCase(),
              reason: reason
            });
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
