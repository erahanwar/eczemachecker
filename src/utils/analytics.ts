// Analytics utility functions
export const trackPageView = (pageName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href
    });
  }
};

export const trackIngredientAnalysis = (ingredientCount: number, flaggedCount: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ingredient_analysis', {
      event_category: 'Analysis',
      event_label: 'Ingredient Check',
      ingredient_count: ingredientCount,
      flagged_count: flaggedCount
    });
  }
};

export const trackArticleView = (articleTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'article_view', {
      event_category: 'Content',
      event_label: articleTitle
    });
  }
};

export const trackPOEMAssessment = (score: number, severity: string, isCaregiver: boolean) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'poem_assessment', {
      event_category: 'Assessment',
      event_label: 'POEM Completed',
      poem_score: score,
      severity_level: severity,
      is_caregiver: isCaregiver
    });
  }
};
