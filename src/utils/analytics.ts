// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Track page views for different routes
export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-VN3BNHEDRN', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track ingredient analysis
export const trackIngredientAnalysis = (ingredientCount: number, flaggedCount: number) => {
  trackEvent('ingredient_analysis', {
    ingredient_count: ingredientCount,
    flagged_ingredients: flaggedCount,
  });
};

// Track article views
export const trackArticleView = (articleTitle: string) => {
  trackEvent('article_view', {
    article_title: articleTitle,
  });
};
