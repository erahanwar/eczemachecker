import { Ingredient } from '../types';

// Official NEA Ecz-clusion List - EXACT 35 ingredients only
export const ingredientDatabase: Record<string, Ingredient> = {
  // 1. Alpha-amyl Cinnamic Alcohol (Amylcinnamaldehyde)
  'alpha-amyl cinnamic alcohol': {
    name: 'Alpha-amyl Cinnamic Alcohol',
    inci: 'Amylcinnamaldehyde',
    status: 'avoid',
    reason: 'Fragrance allergen that can trigger eczema flares',
    source: 'NEA Ecz-clusion List'
  },
  'amylcinnamaldehyde': {
    name: 'Alpha-amyl Cinnamic Alcohol',
    inci: 'Amylcinnamaldehyde',
    status: 'avoid',
    reason: 'Fragrance allergen that can trigger eczema flares',
    source: 'NEA Ecz-clusion List'
  },

  // 2. Bacitracin
  'bacitracin': {
    name: 'Bacitracin',
    inci: 'Bacitracin',
    status: 'avoid',
    reason: 'Topical antibiotic with high allergic contact dermatitis potential',
    source: 'NEA Ecz-clusion List'
  },

  // 3. Benzocaine
  'benzocaine': {
    name: 'Benzocaine',
    inci: 'Benzocaine',
    status: 'avoid',
    reason: 'Topical anesthetic that can cause contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },

  // 4. Cinnamic Alcohol
  'cinnamic alcohol': {
    name: 'Cinnamic Alcohol',
    inci: 'Cinnamic Alcohol',
    status: 'avoid',
    reason: 'Fragrance allergen that can cause contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },

  // 5. Cinnamic Aldehyde
  'cinnamic aldehyde': {
    name: 'Cinnamic Aldehyde',
    inci: 'Cinnamic Aldehyde',
    status: 'avoid',
    reason: 'Fragrance allergen that can trigger eczema',
    source: 'NEA Ecz-clusion List'
  },

  // 6. Citrus aurantifolia (lime) peel powder
  'citrus aurantifolia peel powder': {
    name: 'Lime Peel Powder',
    inci: 'Citrus Aurantifolia (Lime) Peel Powder',
    status: 'avoid',
    reason: 'Citrus extract that can cause photosensitivity and irritation',
    source: 'NEA Ecz-clusion List'
  },
  'citrus aurantifolia (lime) peel powder': {
    name: 'Lime Peel Powder',
    inci: 'Citrus Aurantifolia (Lime) Peel Powder',
    status: 'avoid',
    reason: 'Citrus extract that can cause photosensitivity and irritation',
    source: 'NEA Ecz-clusion List'
  },

  // 7. Citrus aurantium dulcis (orange) peel oil
  'citrus aurantium dulcis peel oil': {
    name: 'Orange Peel Oil',
    inci: 'Citrus Aurantium Dulcis (Orange) Peel Oil',
    status: 'avoid',
    reason: 'Citrus oil that can cause skin sensitization',
    source: 'NEA Ecz-clusion List'
  },
  'citrus aurantium dulcis (orange) peel oil': {
    name: 'Orange Peel Oil',
    inci: 'Citrus Aurantium Dulcis (Orange) Peel Oil',
    status: 'avoid',
    reason: 'Citrus oil that can cause skin sensitization',
    source: 'NEA Ecz-clusion List'
  },

  // 8. Citrus extract
  'citrus extract': {
    name: 'Citrus Extract',
    inci: 'Citrus Extract',
    status: 'avoid',
    reason: 'Citrus extracts can cause photosensitivity and irritation',
    source: 'NEA Ecz-clusion List'
  },

  // 9. Citrus limon (lemon) peel powder
  'citrus limon peel powder': {
    name: 'Lemon Peel Powder',
    inci: 'Citrus Limon (Lemon) Peel Powder',
    status: 'avoid',
    reason: 'Citrus extract that can cause photosensitivity reactions',
    source: 'NEA Ecz-clusion List'
  },
  'citrus limon (lemon) peel powder': {
    name: 'Lemon Peel Powder',
    inci: 'Citrus Limon (Lemon) Peel Powder',
    status: 'avoid',
    reason: 'Citrus extract that can cause photosensitivity reactions',
    source: 'NEA Ecz-clusion List'
  },

  // 10. Citral
  'citral': {
    name: 'Citral',
    inci: 'Citral',
    status: 'avoid',
    reason: 'Fragrance allergen commonly found in citrus oils',
    source: 'NEA Ecz-clusion List'
  },

  // 11. Citronellol
  'citronellol': {
    name: 'Citronellol',
    inci: 'Citronellol',
    status: 'avoid',
    reason: 'Fragrance allergen that can cause skin sensitization',
    source: 'NEA Ecz-clusion List'
  },

  // 12. Coumarin
  'coumarin': {
    name: 'Coumarin',
    inci: 'Coumarin',
    status: 'avoid',
    reason: 'Fragrance allergen with sensitization potential',
    source: 'NEA Ecz-clusion List'
  },

  // 13. Eugenol
  'eugenol': {
    name: 'Eugenol',
    inci: 'Eugenol',
    status: 'avoid',
    reason: 'Fragrance allergen that can cause contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },

  // 14. Farnesol
  'farnesol': {
    name: 'Farnesol',
    inci: 'Farnesol',
    status: 'avoid',
    reason: 'Fragrance allergen that can trigger eczema flares',
    source: 'NEA Ecz-clusion List'
  },

  // 15. Formaldehyde
  'formaldehyde': {
    name: 'Formaldehyde',
    inci: 'Formaldehyde',
    status: 'avoid',
    reason: 'Formaldehyde is a known irritant and allergen',
    source: 'NEA Ecz-clusion List'
  },

  // 16. Geraniol
  'geraniol': {
    name: 'Geraniol',
    inci: 'Geraniol',
    status: 'avoid',
    reason: 'Fragrance allergen commonly found in essential oils',
    source: 'NEA Ecz-clusion List'
  },

  // 17. Hexyl Cinnamic Aldehyde
  'hexyl cinnamic aldehyde': {
    name: 'Hexyl Cinnamic Aldehyde',
    inci: 'Hexyl Cinnamic Aldehyde',
    status: 'avoid',
    reason: 'Fragrance allergen that can cause skin sensitization',
    source: 'NEA Ecz-clusion List'
  },

  // 18. Hydroxycitronellal
  'hydroxycitronellal': {
    name: 'Hydroxycitronellal',
    inci: 'Hydroxycitronellal',
    status: 'avoid',
    reason: 'Fragrance allergen with high sensitization potential',
    source: 'NEA Ecz-clusion List'
  },

  // 19. Isoeugenol
  'isoeugenol': {
    name: 'Isoeugenol',
    inci: 'Isoeugenol',
    status: 'avoid',
    reason: 'Fragrance allergen that can trigger contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },

  // 20. Lidocaine
  'lidocaine': {
    name: 'Lidocaine',
    inci: 'Lidocaine',
    status: 'avoid',
    reason: 'Topical anesthetic that can cause allergic reactions',
    source: 'NEA Ecz-clusion List'
  },

  // 21. Lyral (Hydroxy-Isohexyl Cyclohexene Carboxaldehyde)
  'lyral': {
    name: 'Lyral',
    inci: 'Hydroxy-Isohexyl Cyclohexene Carboxaldehyde',
    status: 'avoid',
    reason: 'Fragrance allergen with very high sensitization potential',
    source: 'NEA Ecz-clusion List'
  },
  'hydroxy-isohexyl cyclohexene carboxaldehyde': {
    name: 'Lyral',
    inci: 'Hydroxy-Isohexyl Cyclohexene Carboxaldehyde',
    status: 'avoid',
    reason: 'Fragrance allergen with very high sensitization potential',
    source: 'NEA Ecz-clusion List'
  },

  // 22. Methylchloroisothiazolinone
  'methylchloroisothiazolinone': {
    name: 'Methylchloroisothiazolinone',
    inci: 'Methylchloroisothiazolinone',
    status: 'avoid',
    reason: 'Preservative with high allergic contact dermatitis potential',
    source: 'NEA Ecz-clusion List'
  },

  // 23. Methyl dibromo glutaronitrile
  'methyl dibromo glutaronitrile': {
    name: 'Methyl Dibromo Glutaronitrile',
    inci: 'Methyl Dibromo Glutaronitrile',
    status: 'avoid',
    reason: 'Preservative that can cause severe contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },

  // 24. Methylisothiazolinone
  'methylisothiazolinone': {
    name: 'Methylisothiazolinone',
    inci: 'Methylisothiazolinone',
    status: 'avoid',
    reason: 'Preservative with very high sensitization potential',
    source: 'NEA Ecz-clusion List'
  },

  // 25. Myroxylon balsamum / (Balsam of Tolu)
  'myroxylon balsamum': {
    name: 'Balsam of Tolu',
    inci: 'Myroxylon Balsamum',
    status: 'avoid',
    reason: 'Natural resin that can cause allergic contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },
  'balsam of tolu': {
    name: 'Balsam of Tolu',
    inci: 'Myroxylon Balsamum',
    status: 'avoid',
    reason: 'Natural resin that can cause allergic contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },

  // 26. Myroxylon pereirae resin / (Balsam of Peru)
  'myroxylon pereirae resin': {
    name: 'Balsam of Peru',
    inci: 'Myroxylon Pereirae Resin',
    status: 'avoid',
    reason: 'Natural resin with high allergenic potential',
    source: 'NEA Ecz-clusion List'
  },
  'balsam of peru': {
    name: 'Balsam of Peru',
    inci: 'Myroxylon Pereirae Resin',
    status: 'avoid',
    reason: 'Natural resin with high allergenic potential',
    source: 'NEA Ecz-clusion List'
  },

  // 27. Neomycin sulfate
  'neomycin sulfate': {
    name: 'Neomycin Sulfate',
    inci: 'Neomycin Sulfate',
    status: 'avoid',
    reason: 'Topical antibiotic with high sensitization potential',
    source: 'NEA Ecz-clusion List'
  },

  // 28. Oak Moss Absolute
  'oak moss absolute': {
    name: 'Oak Moss Absolute',
    inci: 'Oak Moss Absolute',
    status: 'avoid',
    reason: 'Natural fragrance ingredient that can cause sensitization',
    source: 'NEA Ecz-clusion List'
  },

  // 29. Polymyxin B sulfate
  'polymyxin b sulfate': {
    name: 'Polymyxin B Sulfate',
    inci: 'Polymyxin B Sulfate',
    status: 'avoid',
    reason: 'Topical antibiotic that can cause contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },

  // 30. Propolis
  'propolis': {
    name: 'Propolis',
    inci: 'Propolis',
    status: 'avoid',
    reason: 'Bee product that can cause allergic contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },

  // 31. Shellac
  'shellac': {
    name: 'Shellac',
    inci: 'Shellac',
    status: 'avoid',
    reason: 'Natural resin that can cause contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },

  // 32. Triclosan
  'triclosan': {
    name: 'Triclosan',
    inci: 'Triclosan',
    status: 'avoid',
    reason: 'Antimicrobial agent that can cause contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },

  // 33. Fragrance (general category)
  'fragrance': {
    name: 'Fragrance',
    inci: 'Parfum/Fragrance',
    status: 'avoid',
    reason: 'Products must be fragrance-free for eczema management',
    source: 'NEA Ecz-clusion List'
  },
  'parfum': {
    name: 'Fragrance',
    inci: 'Parfum/Fragrance',
    status: 'avoid',
    reason: 'Products must be fragrance-free for eczema management',
    source: 'NEA Ecz-clusion List'
  },
  'perfume': {
    name: 'Perfume',
    inci: 'Perfume',
    status: 'avoid',
    reason: 'Products must be perfume-free for eczema management',
    source: 'NEA Ecz-clusion List'
  },
  'aroma': {
    name: 'Aroma',
    inci: 'Aroma',
    status: 'avoid',
    reason: 'Fragrance ingredient - products must be fragrance-free',
    source: 'NEA Ecz-clusion List'
  },

  // 34. Chemical UV absorbers (category)
  'avobenzone': {
    name: 'Avobenzone',
    inci: 'Avobenzone',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'oxybenzone': {
    name: 'Oxybenzone',
    inci: 'Benzophenone-3',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'benzophenone-3': {
    name: 'Oxybenzone',
    inci: 'Benzophenone-3',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'octisalate': {
    name: 'Octisalate',
    inci: 'Ethylhexyl Salicylate',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'ethylhexyl salicylate': {
    name: 'Octisalate',
    inci: 'Ethylhexyl Salicylate',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'octocrylene': {
    name: 'Octocrylene',
    inci: 'Octocrylene',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'homosalate': {
    name: 'Homosalate',
    inci: 'Homosalate',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'octinoxate': {
    name: 'Octinoxate',
    inci: 'Ethylhexyl Methoxycinnamate',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'ethylhexyl methoxycinnamate': {
    name: 'Octinoxate',
    inci: 'Ethylhexyl Methoxycinnamate',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },

  // 35. Formaldehyde releasers (category)
  'dmdm hydantoin': {
    name: 'DMDM Hydantoin',
    inci: 'DMDM Hydantoin',
    status: 'avoid',
    reason: 'Formaldehyde releaser that can cause contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },
  'quaternium-15': {
    name: 'Quaternium-15',
    inci: 'Quaternium-15',
    status: 'avoid',
    reason: 'Formaldehyde releaser with high allergen potential',
    source: 'NEA Ecz-clusion List'
  },
  'imidazolidinyl urea': {
    name: 'Imidazolidinyl Urea',
    inci: 'Imidazolidinyl Urea',
    status: 'avoid',
    reason: 'Formaldehyde releaser that can trigger eczema',
    source: 'NEA Ecz-clusion List'
  },
  'diazolidinyl urea': {
    name: 'Diazolidinyl Urea',
    inci: 'Diazolidinyl Urea',
    status: 'avoid',
    reason: 'Formaldehyde releaser and potential irritant',
    source: 'NEA Ecz-clusion List'
  },

  // Physical sunscreen ingredients - safe
  'zinc oxide': {
    name: 'Zinc Oxide',
    inci: 'Zinc Oxide',
    status: 'safe',
    reason: 'Physical sunscreen filter approved for eczema-prone skin',
    source: 'NEA Guidelines'
  },
  'titanium dioxide': {
    name: 'Titanium Dioxide',
    inci: 'Titanium Dioxide',
    status: 'safe',
    reason: 'Physical sunscreen filter approved for eczema-prone skin',
    source: 'NEA Guidelines'
  },

  // Common safe ingredients
  'glycerin': {
    name: 'Glycerin',
    inci: 'Glycerin',
    status: 'safe',
    reason: 'Excellent humectant that helps retain moisture',
    source: 'Dermatologist Guidelines'
  },
  'hyaluronic acid': {
    name: 'Hyaluronic Acid',
    inci: 'Sodium Hyaluronate',
    status: 'safe',
    reason: 'Powerful humectant that attracts and retains moisture',
    source: 'Dermatologist Guidelines'
  },
  'sodium hyaluronate': {
    name: 'Hyaluronic Acid',
    inci: 'Sodium Hyaluronate',
    status: 'safe',
    reason: 'Powerful humectant that attracts and retains moisture',
    source: 'Dermatologist Guidelines'
  },
  'ceramides': {
    name: 'Ceramides',
    inci: 'Ceramides',
    status: 'safe',
    reason: 'Help restore and maintain skin barrier function',
    source: 'Dermatologist Guidelines'
  },
  'niacinamide': {
    name: 'Niacinamide',
    inci: 'Niacinamide',
    status: 'safe',
    reason: 'Anti-inflammatory ingredient that soothes irritated skin',
    source: 'Dermatologist Guidelines'
  },
  'petrolatum': {
    name: 'Petrolatum',
    inci: 'Petrolatum',
    status: 'safe',
    reason: 'Excellent occlusive that prevents water loss',
    source: 'Dermatologist Guidelines'
  },

  // Common ingredients with caution (not on NEA list but worth noting)
  'sodium lauryl sulfate': {
    name: 'Sodium Lauryl Sulfate',
    inci: 'Sodium Lauryl Sulfate',
    status: 'caution',
    reason: 'Harsh surfactant that can strip natural oils and irritate sensitive skin',
    source: 'Dermatologist Guidelines'
  },
  'sls': {
    name: 'Sodium Lauryl Sulfate',
    inci: 'Sodium Lauryl Sulfate',
    status: 'caution',
    reason: 'Harsh surfactant that can strip natural oils and irritate sensitive skin',
    source: 'Dermatologist Guidelines'
  },
  'alcohol denat': {
    name: 'Denatured Alcohol',
    inci: 'Alcohol Denat',
    status: 'caution',
    reason: 'Drying alcohol that can irritate sensitive skin',
    source: 'Dermatologist Guidelines'
  },
  'isopropyl alcohol': {
    name: 'Isopropyl Alcohol',
    inci: 'Isopropyl Alcohol',
    status: 'caution',
    reason: 'Drying alcohol that can worsen eczema',
    source: 'Dermatologist Guidelines'
  }
};

export const normalizeIngredientName = (ingredient: string): string => {
  return ingredient.toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, ' ');
};

export const findIngredient = (ingredientName: string): Ingredient | null => {
  const normalized = normalizeIngredientName(ingredientName);
  return ingredientDatabase[normalized] || null;
};

// Enhanced fragrance detection for NEA compliance
export const detectFragranceTerms = (ingredient: string): boolean => {
  const fragranceTerms = [
    'fragrance', 'parfum', 'perfume', 'aroma', 'scent',
    'essential oil', 'natural fragrance', 'fragrant'
  ];
  
  const normalized = normalizeIngredientName(ingredient);
  return fragranceTerms.some(term => normalized.includes(term));
};

// Enhanced chemical UV absorber detection
export const detectChemicalUVAbsorbers = (ingredient: string): boolean => {
  const chemicalUVTerms = [
    'avobenzone', 'oxybenzone', 'benzophenone', 'octisalate', 
    'ethylhexyl salicylate', 'octocrylene', 'homosalate', 
    'octinoxate', 'ethylhexyl methoxycinnamate'
  ];
  
  const normalized = normalizeIngredientName(ingredient);
  return chemicalUVTerms.some(term => normalized.includes(term));
};

// Enhanced formaldehyde releaser detection
export const detectFormaldehydeReleasers = (ingredient: string): boolean => {
  const formaldehydeReleasers = [
    'dmdm hydantoin', 'quaternium-15', 'imidazolidinyl urea', 'diazolidinyl urea'
  ];
  
  const normalized = normalizeIngredientName(ingredient);
  return formaldehydeReleasers.some(term => normalized.includes(term));
};
