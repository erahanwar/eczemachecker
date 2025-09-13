import { POEMResult, POEMAssessment } from '../types';

export const calculatePOEMScore = (answers: Record<string, number>): POEMResult => {
  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  
  let severity: POEMResult['severity'];
  let interpretation: string;
  let recommendations: string[];

  if (totalScore <= 2) {
    severity = 'clear';
    interpretation = 'Clear or almost clear eczema';
    recommendations = [
      'Continue current skincare routine',
      'Use gentle, fragrance-free moisturizers daily',
      'Monitor for any changes in symptoms'
    ];
  } else if (totalScore <= 7) {
    severity = 'mild';
    interpretation = 'Mild eczema';
    recommendations = [
      'Maintain consistent daily moisturizing routine',
      'Use gentle, eczema-friendly skincare products',
      'Consider identifying and avoiding triggers',
      'Consult healthcare provider if symptoms worsen'
    ];
  } else if (totalScore <= 16) {
    severity = 'moderate';
    interpretation = 'Moderate eczema';
    recommendations = [
      'Schedule appointment with healthcare provider or dermatologist',
      'Consider prescription treatments if not already using',
      'Implement comprehensive trigger avoidance strategies',
      'Use therapeutic moisturizers and gentle cleansers',
      'Consider wet wrap therapy for flare-ups'
    ];
  } else if (totalScore <= 24) {
    severity = 'severe';
    interpretation = 'Severe eczema';
    recommendations = [
      'Seek immediate medical attention from dermatologist',
      'Discuss advanced treatment options with healthcare provider',
      'Consider specialist referral if not already under care',
      'Implement strict trigger avoidance and skin protection measures',
      'May require systemic treatments or biologics'
    ];
  } else {
    severity = 'very-severe';
    interpretation = 'Very severe eczema';
    recommendations = [
      'Urgent dermatologist consultation required',
      'Discuss advanced systemic treatments and biologics',
      'Consider specialist eczema center referral',
      'Comprehensive lifestyle and environmental modifications needed',
      'May require multidisciplinary care approach'
    ];
  }

  return {
    totalScore,
    severity,
    interpretation,
    recommendations,
    completedAt: new Date()
  };
};

export const getSeverityColor = (severity: POEMResult['severity']): string => {
  switch (severity) {
    case 'clear':
      return 'text-green-600 bg-green-50 border-green-200';
    case 'mild':
      return 'text-blue-600 bg-blue-50 border-blue-200';
    case 'moderate':
      return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'severe':
      return 'text-orange-600 bg-orange-50 border-orange-200';
    case 'very-severe':
      return 'text-red-600 bg-red-50 border-red-200';
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200';
  }
};
