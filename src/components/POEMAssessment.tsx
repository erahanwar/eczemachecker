import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, FileText, User, Baby } from 'lucide-react';
import { poemQuestions } from '../data/poemQuestions';
import { POEMAssessment as POEMAssessmentType, POEMResult } from '../types';
import { calculatePOEMScore, getSeverityColor } from '../utils/poemScoring';
import { trackPOEMAssessment } from '../utils/analytics';

const POEMAssessment: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [assessment, setAssessment] = useState<POEMAssessmentType>({
    answers: {},
    isCaregiver: false
  });
  const [result, setResult] = useState<POEMResult | null>(null);
  const [showIntro, setShowIntro] = useState(true);

  const handleCaregiverSelection = (isCaregiver: boolean) => {
    setAssessment(prev => ({ ...prev, isCaregiver }));
    setShowIntro(false);
  };

  const handleAnswer = (questionId: string, value: number) => {
    setAssessment(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: value }
    }));
  };

  const handleNext = () => {
    if (currentStep < poemQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate result
      const poemResult = calculatePOEMScore(assessment.answers);
      setResult(poemResult);
      
      // Track analytics
      trackPOEMAssessment(poemResult.totalScore, poemResult.severity, assessment.isCaregiver);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAssessment({ answers: {}, isCaregiver: false });
    setResult(null);
    setShowIntro(true);
  };

  const currentQuestion = poemQuestions[currentStep];
  const isAnswered = currentQuestion && assessment.answers[currentQuestion.id] !== undefined;
  const progress = ((currentStep + 1) / poemQuestions.length) * 100;

  if (showIntro) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-left mb-8">
          <FileText className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Eczema Score Assessment
          </h2>
          <p className="text-gray-600 max-w-2xl">
            The Patient Oriented Eczema Measure (POEM) is a validated tool developed by the 
            University of Nottingham to assess eczema severity over the past week.
          </p>
        </div>

        <div className="max-w-md space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 text-left mb-6">
            Who is this assessment for?
          </h3>
          
          <button
            onClick={() => handleCaregiverSelection(false)}
            className="w-full p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-left"
          >
            <div className="flex items-center">
              <User className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h4 className="font-semibold text-gray-900">For Myself</h4>
                <p className="text-sm text-gray-600">Self-assessment of my own eczema symptoms</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleCaregiverSelection(true)}
            className="w-full p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-left"
          >
            <div className="flex items-center">
              <Baby className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h4 className="font-semibold text-gray-900">For My Child</h4>
                <p className="text-sm text-gray-600">Caregiver assessment of child's eczema symptoms</p>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800 text-left">
            <strong>Note:</strong> This assessment covers symptoms over the past 7 days. 
            Results should be discussed with a healthcare professional.
          </p>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Result Header */}
        <div className={`p-6 border-b-2 ${getSeverityColor(result.severity)}`}>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Eczema Score Assessment Results
            </h2>
            <div className="text-4xl font-bold mb-2">
              {result.totalScore}/28
            </div>
            <div className="text-lg font-semibold capitalize">
              {result.interpretation}
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Score Interpretation */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">
              Score Interpretation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
              <div className={`p-2 rounded text-center ${result.severity === 'clear' ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-100'}`}>
                <div className="font-semibold">Clear</div>
                <div>0-2</div>
              </div>
              <div className={`p-2 rounded text-center ${result.severity === 'mild' ? 'bg-blue-100 border-2 border-blue-500' : 'bg-gray-100'}`}>
                <div className="font-semibold">Mild</div>
                <div>3-7</div>
              </div>
              <div className={`p-2 rounded text-center ${result.severity === 'moderate' ? 'bg-yellow-100 border-2 border-yellow-500' : 'bg-gray-100'}`}>
                <div className="font-semibold">Moderate</div>
                <div>8-16</div>
              </div>
              <div className={`p-2 rounded text-center ${result.severity === 'severe' ? 'bg-orange-100 border-2 border-orange-500' : 'bg-gray-100'}`}>
                <div className="font-semibold">Severe</div>
                <div>17-24</div>
              </div>
              <div className={`p-2 rounded text-center ${result.severity === 'very-severe' ? 'bg-red-100 border-2 border-red-500' : 'bg-gray-100'}`}>
                <div className="font-semibold">Very Severe</div>
                <div>25-28</div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">
              Recommendations
            </h3>
            <ul className="space-y-2">
              {result.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start text-left">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleRestart}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
            >
              Take Assessment Again
            </button>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 text-left">
              <strong>Important:</strong> This eczema score assessment is based on the validated POEM tool from the University of Nottingham. 
              Results should be discussed with your healthcare provider or dermatologist for proper medical evaluation and treatment planning. 
              This tool is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Progress Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            Eczema Score Assessment {assessment.isCaregiver ? '(Caregiver)' : '(Self)'}
          </h2>
          <span className="text-sm text-gray-600">
            Question {currentStep + 1} of {poemQuestions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="p-6">
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-left">
            {assessment.isCaregiver 
              ? currentQuestion.text.replace('your', "your child's").replace('you', 'your child')
              : currentQuestion.text
            }
          </h3>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className={`w-full p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                  assessment.answers[currentQuestion.id] === option.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    assessment.answers[currentQuestion.id] === option.value
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {assessment.answers[currentQuestion.id] === option.value && (
                      <div className="w-full h-full rounded-full bg-white scale-50"></div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </button>
          
          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className="flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {currentStep === poemQuestions.length - 1 ? 'Get Results' : 'Next'}
            {currentStep !== poemQuestions.length - 1 && <ChevronRight className="w-4 h-4 ml-1" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default POEMAssessment;
