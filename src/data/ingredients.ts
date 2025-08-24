import { Ingredient } from '../types';

// Official NEA Ecz-clusion List + AAD Guidelines based ingredient database
export const ingredientDatabase: Record<string, Ingredient> = {
  // Fragrance - must be fragrance free per AAD guidelines
  'fragrance': {
    name: 'Fragrance',
    inci: 'Parfum/Fragrance',
    status: 'avoid',
    reason: 'Products must be fragrance-free for atopic dermatitis management per AAD guidelines',
    source: 'NEA Ecz-clusion List + AAD Guidelines'
  },
  'parfum': {
    name: 'Fragrance',
    inci: 'Parfum/Fragrance',
    status: 'avoid',
    reason: 'Products must be fragrance-free for atopic dermatitis management per AAD guidelines',
    source: 'NEA Ecz-clusion List + AAD Guidelines'
  },
  'perfume': {
    name: 'Perfume',
    inci: 'Perfume',
    status: 'avoid',
    reason: 'Products must be perfume-free for atopic dermatitis management per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'aroma': {
    name: 'Aroma',
    inci: 'Aroma',
    status: 'avoid',
    reason: 'Fragrance ingredient - products must be fragrance-free per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'essential oil': {
    name: 'Essential Oil',
    inci: 'Essential Oil',
    status: 'avoid',
    reason: 'Essential oils contain fragrance compounds and must be avoided per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'natural fragrance': {
    name: 'Natural Fragrance',
    inci: 'Natural Fragrance',
    status: 'avoid',
    reason: 'All fragrances, including natural ones, must be avoided per AAD guidelines',
    source: 'AAD Guidelines'
  },

  // Common dyes - must be dye-free per AAD guidelines
  'fd&c blue no. 1': {
    name: 'FD&C Blue No. 1',
    inci: 'CI 42090',
    status: 'avoid',
    reason: 'Synthetic dye - products must be dye-free for atopic dermatitis per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'ci 42090': {
    name: 'FD&C Blue No. 1',
    inci: 'CI 42090',
    status: 'avoid',
    reason: 'Synthetic dye - products must be dye-free for atopic dermatitis per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'fd&c red no. 40': {
    name: 'FD&C Red No. 40',
    inci: 'CI 16035',
    status: 'avoid',
    reason: 'Synthetic dye - products must be dye-free for atopic dermatitis per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'ci 16035': {
    name: 'FD&C Red No. 40',
    inci: 'CI 16035',
    status: 'avoid',
    reason: 'Synthetic dye - products must be dye-free for atopic dermatitis per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'fd&c yellow no. 5': {
    name: 'FD&C Yellow No. 5',
    inci: 'CI 19140',
    status: 'avoid',
    reason: 'Synthetic dye - products must be dye-free for atopic dermatitis per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'ci 19140': {
    name: 'FD&C Yellow No. 5',
    inci: 'CI 19140',
    status: 'avoid',
    reason: 'Synthetic dye - products must be dye-free for atopic dermatitis per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'fd&c yellow no. 6': {
    name: 'FD&C Yellow No. 6',
    inci: 'CI 15985',
    status: 'avoid',
    reason: 'Synthetic dye - products must be dye-free for atopic dermatitis per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'ci 15985': {
    name: 'FD&C Yellow No. 6',
    inci: 'CI 15985',
    status: 'avoid',
    reason: 'Synthetic dye - products must be dye-free for atopic dermatitis per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'fd&c green no. 3': {
    name: 'FD&C Green No. 3',
    inci: 'CI 42053',
    status: 'avoid',
    reason: 'Synthetic dye - products must be dye-free for atopic dermatitis per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'ci 42053': {
    name: 'FD&C Green No. 3',
    inci: 'CI 42053',
    status: 'avoid',
    reason: 'Synthetic dye - products must be dye-free for atopic dermatitis per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'd&c red no. 33': {
    name: 'D&C Red No. 33',
    inci: 'CI 17200',
    status: 'avoid',
    reason: 'Synthetic dye - products must be dye-free for atopic dermatitis per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'ci 17200': {
    name: 'D&C Red No. 33',
    inci: 'CI 17200',
    status: 'avoid',
    reason: 'Synthetic dye - products must be dye-free for atopic dermatitis per AAD guidelines',
    source: 'AAD Guidelines'
  },

  // Formaldehyde and formaldehyde releasers
  'formaldehyde': {
    name: 'Formaldehyde',
    inci: 'Formaldehyde',
    status: 'avoid',
    reason: 'Formaldehyde is a known irritant and allergen',
    source: 'NEA Ecz-clusion List'
  },
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

  // Fragrance allergens from NEA Ecz-clusion List
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
  'cinnamic alcohol': {
    name: 'Cinnamic Alcohol',
    inci: 'Cinnamic Alcohol',
    status: 'avoid',
    reason: 'Fragrance allergen that can cause contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },
  'cinnamic aldehyde': {
    name: 'Cinnamic Aldehyde',
    inci: 'Cinnamic Aldehyde',
    status: 'avoid',
    reason: 'Fragrance allergen that can trigger eczema',
    source: 'NEA Ecz-clusion List'
  },
  'citral': {
    name: 'Citral',
    inci: 'Citral',
    status: 'avoid',
    reason: 'Fragrance allergen commonly found in citrus oils',
    source: 'NEA Ecz-clusion List'
  },
  'citronellol': {
    name: 'Citronellol',
    inci: 'Citronellol',
    status: 'avoid',
    reason: 'Fragrance allergen that can cause skin sensitization',
    source: 'NEA Ecz-clusion List'
  },
  'coumarin': {
    name: 'Coumarin',
    inci: 'Coumarin',
    status: 'avoid',
    reason: 'Fragrance allergen with sensitization potential',
    source: 'NEA Ecz-clusion List'
  },
  'eugenol': {
    name: 'Eugenol',
    inci: 'Eugenol',
    status: 'avoid',
    reason: 'Fragrance allergen that can cause contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },
  'farnesol': {
    name: 'Farnesol',
    inci: 'Farnesol',
    status: 'avoid',
    reason: 'Fragrance allergen that can trigger eczema flares',
    source: 'NEA Ecz-clusion List'
  },
  'geraniol': {
    name: 'Geraniol',
    inci: 'Geraniol',
    status: 'avoid',
    reason: 'Fragrance allergen commonly found in essential oils',
    source: 'NEA Ecz-clusion List'
  },
  'hexyl cinnamic aldehyde': {
    name: 'Hexyl Cinnamic Aldehyde',
    inci: 'Hexyl Cinnamic Aldehyde',
    status: 'avoid',
    reason: 'Fragrance allergen that can cause skin sensitization',
    source: 'NEA Ecz-clusion List'
  },
  'hydroxycitronellal': {
    name: 'Hydroxycitronellal',
    inci: 'Hydroxycitronellal',
    status: 'avoid',
    reason: 'Fragrance allergen with high sensitization potential',
    source: 'NEA Ecz-clusion List'
  },
  'isoeugenol': {
    name: 'Isoeugenol',
    inci: 'Isoeugenol',
    status: 'avoid',
    reason: 'Fragrance allergen that can trigger contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },
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

  // Essential oils and natural fragrances (expanded per AAD guidelines)
  'lavender oil': {
    name: 'Lavender Oil',
    inci: 'Lavandula Angustifolia Oil',
    status: 'avoid',
    reason: 'Essential oil containing fragrance compounds - must be avoided per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'lavandula angustifolia oil': {
    name: 'Lavender Oil',
    inci: 'Lavandula Angustifolia Oil',
    status: 'avoid',
    reason: 'Essential oil containing fragrance compounds - must be avoided per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'tea tree oil': {
    name: 'Tea Tree Oil',
    inci: 'Melaleuca Alternifolia Leaf Oil',
    status: 'avoid',
    reason: 'Essential oil containing fragrance compounds - must be avoided per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'melaleuca alternifolia leaf oil': {
    name: 'Tea Tree Oil',
    inci: 'Melaleuca Alternifolia Leaf Oil',
    status: 'avoid',
    reason: 'Essential oil containing fragrance compounds - must be avoided per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'peppermint oil': {
    name: 'Peppermint Oil',
    inci: 'Mentha Piperita Oil',
    status: 'avoid',
    reason: 'Essential oil containing fragrance compounds - must be avoided per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'mentha piperita oil': {
    name: 'Peppermint Oil',
    inci: 'Mentha Piperita Oil',
    status: 'avoid',
    reason: 'Essential oil containing fragrance compounds - must be avoided per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'eucalyptus oil': {
    name: 'Eucalyptus Oil',
    inci: 'Eucalyptus Globulus Leaf Oil',
    status: 'avoid',
    reason: 'Essential oil containing fragrance compounds - must be avoided per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'eucalyptus globulus leaf oil': {
    name: 'Eucalyptus Oil',
    inci: 'Eucalyptus Globulus Leaf Oil',
    status: 'avoid',
    reason: 'Essential oil containing fragrance compounds - must be avoided per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'rose oil': {
    name: 'Rose Oil',
    inci: 'Rosa Damascena Flower Oil',
    status: 'avoid',
    reason: 'Essential oil containing fragrance compounds - must be avoided per AAD guidelines',
    source: 'AAD Guidelines'
  },
  'rosa damascena flower oil': {
    name: 'Rose Oil',
    inci: 'Rosa Damascena Flower Oil',
    status: 'avoid',
    reason: 'Essential oil containing fragrance compounds - must be avoided per AAD guidelines',
    source: 'AAD Guidelines'
  },

  // Citrus extracts and oils
  'citrus aurantifolia peel powder': {
    name: 'Lime Peel Powder',
    inci: 'Citrus Aurantifolia (Lime) Peel Powder',
    status: 'avoid',
    reason: 'Citrus extract that can cause photosensitivity and irritation',
    source: 'NEA Ecz-clusion List'
  },
  'citrus aurantium dulcis peel oil': {
    name: 'Orange Peel Oil',
    inci: 'Citrus Aurantium Dulcis (Orange) Peel Oil',
    status: 'avoid',
    reason: 'Citrus oil that can cause skin sensitization',
    source: 'NEA Ecz-clusion List'
  },
  'citrus extract': {
    name: 'Citrus Extract',
    inci: 'Citrus Extract',
    status: 'avoid',
    reason: 'Citrus extracts can cause photosensitivity and irritation',
    source: 'NEA Ecz-clusion List'
  },
  'citrus limon peel powder': {
    name: 'Lemon Peel Powder',
    inci: 'Citrus Limon (Lemon) Peel Powder',
    status: 'avoid',
    reason: 'Citrus extract that can cause photosensitivity reactions',
    source: 'NEA Ecz-clusion List'
  },

  // Topical antibiotics and anesthetics
  'bacitracin': {
    name: 'Bacitracin',
    inci: 'Bacitracin',
    status: 'avoid',
    reason: 'Topical antibiotic with high allergic contact dermatitis potential',
    source: 'NEA Ecz-clusion List'
  },
  'benzocaine': {
    name: 'Benzocaine',
    inci: 'Benzocaine',
    status: 'avoid',
    reason: 'Topical anesthetic that can cause contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },
  'lidocaine': {
    name: 'Lidocaine',
    inci: 'Lidocaine',
    status: 'avoid',
    reason: 'Topical anesthetic that can cause allergic reactions',
    source: 'NEA Ecz-clusion List'
  },
  'neomycin sulfate': {
    name: 'Neomycin Sulfate',
    inci: 'Neomycin Sulfate',
    status: 'avoid',
    reason: 'Topical antibiotic with high sensitization potential',
    source: 'NEA Ecz-clusion List'
  },
  'polymyxin b sulfate': {
    name: 'Polymyxin B Sulfate',
    inci: 'Polymyxin B Sulfate',
    status: 'avoid',
    reason: 'Topical antibiotic that can cause contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },

  // Preservatives and antimicrobials
  'methylchloroisothiazolinone': {
    name: 'Methylchloroisothiazolinone',
    inci: 'Methylchloroisothiazolinone',
    status: 'avoid',
    reason: 'Preservative with high allergic contact dermatitis potential',
    source: 'NEA Ecz-clusion List'
  },
  'methyl dibromo glutaronitrile': {
    name: 'Methyl Dibromo Glutaronitrile',
    inci: 'Methyl Dibromo Glutaronitrile',
    status: 'avoid',
    reason: 'Preservative that can cause severe contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },
  'methylisothiazolinone': {
    name: 'Methylisothiazolinone',
    inci: 'Methylisothiazolinone',
    status: 'avoid',
    reason: 'Preservative with very high sensitization potential',
    source: 'NEA Ecz-clusion List'
  },
  'triclosan': {
    name: 'Triclosan',
    inci: 'Triclosan',
    status: 'avoid',
    reason: 'Antimicrobial agent that can cause contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },

  // Natural extracts and resins
  'myroxylon balsamum': {
    name: 'Balsam of Tolu',
    inci: 'Myroxylon Balsamum',
    status: 'avoid',
    reason: 'Natural resin that can cause allergic contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },
  'myroxylon pereirae resin': {
    name: 'Balsam of Peru',
    inci: 'Myroxylon Pereirae Resin',
    status: 'avoid',
    reason: 'Natural resin with high allergenic potential',
    source: 'NEA Ecz-clusion List'
  },
  'oak moss absolute': {
    name: 'Oak Moss Absolute',
    inci: 'Oak Moss Absolute',
    status: 'avoid',
    reason: 'Natural fragrance ingredient that can cause sensitization',
    source: 'NEA Ecz-clusion List'
  },
  'propolis': {
    name: 'Propolis',
    inci: 'Propolis',
    status: 'avoid',
    reason: 'Bee product that can cause allergic contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },
  'shellac': {
    name: 'Shellac',
    inci: 'Shellac',
    status: 'avoid',
    reason: 'Natural resin that can cause contact dermatitis',
    source: 'NEA Ecz-clusion List'
  },

  // Chemical sunscreen ingredients - all avoid per NEA guidelines
  'avobenzone': {
    name: 'Avobenzone',
    inci: 'Avobenzone',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only 100% physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'oxybenzone': {
    name: 'Oxybenzone',
    inci: 'Benzophenone-3',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only 100% physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'benzophenone-3': {
    name: 'Oxybenzone',
    inci: 'Benzophenone-3',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only 100% physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'octisalate': {
    name: 'Octisalate',
    inci: 'Ethylhexyl Salicylate',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only 100% physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'ethylhexyl salicylate': {
    name: 'Octisalate',
    inci: 'Ethylhexyl Salicylate',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only 100% physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'octocrylene': {
    name: 'Octocrylene',
    inci: 'Octocrylene',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only 100% physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'homosalate': {
    name: 'Homosalate',
    inci: 'Homosalate',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only 100% physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'octinoxate': {
    name: 'Octinoxate',
    inci: 'Ethylhexyl Methoxycinnamate',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only 100% physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },
  'ethylhexyl methoxycinnamate': {
    name: 'Octinoxate',
    inci: 'Ethylhexyl Methoxycinnamate',
    status: 'avoid',
    reason: 'Chemical sunscreen filter - only 100% physical sunscreens are eczema-safe',
    source: 'NEA Ecz-clusion List'
  },

  // Physical sunscreen ingredients - safe per NEA guidelines
  'zinc oxide': {
    name: 'Zinc Oxide',
    inci: 'Zinc Oxide',
    status: 'safe',
    reason: 'Physical sunscreen filter approved for eczema-prone skin',
    source: 'NEA Ecz-clusion List'
  },
  'titanium dioxide': {
    name: 'Titanium Dioxide',
    inci: 'Titanium Dioxide',
    status: 'safe',
    reason: 'Physical sunscreen filter approved for eczema-prone skin',
    source: 'NEA Ecz-clusion List'
  },
  'iron oxides': {
    name: 'Iron Oxides',
    inci: 'Iron Oxides',
    status: 'safe',
    reason: 'Physical sunscreen ingredient approved for eczema-prone skin',
    source: 'NEA Ecz-clusion List'
  },

  // Additional common safe ingredients
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

  // Common ingredients with caution
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

// Enhanced fragrance detection for AAD compliance
export const detectFragranceTerms = (ingredient: string): boolean => {
  const fragranceTerms = [
    'fragrance', 'parfum', 'perfume', 'aroma', 'scent',
    'essential oil', 'natural fragrance', 'fragrant',
    'oil', 'extract' // when combined with plant names
  ];
  
  const normalized = normalizeIngredientName(ingredient);
  return fragranceTerms.some(term => normalized.includes(term));
};

// Enhanced dye detection for AAD compliance
export const detectDyeTerms = (ingredient: string): boolean => {
  const dyeTerms = [
    'ci ', 'fd&c', 'd&c', 'color', 'dye', 'pigment',
    'blue', 'red', 'yellow', 'green', 'orange', 'purple'
  ];
  
  const normalized = normalizeIngredientName(ingredient);
  return dyeTerms.some(term => normalized.includes(term));
};
