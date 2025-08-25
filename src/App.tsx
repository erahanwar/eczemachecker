import React, { useState } from 'react';
import { Shield, Heart, User } from 'lucide-react';
import IngredientInput from './components/IngredientInput';
import AnalysisResult from './components/AnalysisResult';
import ProductCurations from './components/ProductCurations';
import { AnalysisResult as AnalysisResultType } from './types';
import { analyzeIngredients } from './utils/analyzer';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResultType | null>(null);

  const handleAnalyze = async (ingredients: string[]) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const result = analyzeIngredients(ingredients, 'general');
    setAnalysisResult(result);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Eczema Checker</h1>
                <p className="text-sm text-gray-600">Skincare ingredient analysis for sensitive skin</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center text-sm text-gray-600">
                <Heart className="w-4 h-4 mr-1 text-red-500" />
                <span>Dermatologist Guidelines</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Is Your Skincare <span className="text-blue-600">Eczema-Friendly</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Instantly analyze your skincare product ingredients against 
            dermatologist guidelines to ensure they're safe for eczema-prone skin.
          </p>
        </div>

        {/* Guidelines Section - Moved Above How It Works */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl shadow-lg p-8 text-white mb-12">
          <h3 className="text-2xl font-bold mb-4 text-left">Based on Trusted Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-left">
              <h4 className="font-semibold mb-2">National Eczema Association (NEA)</h4>
              <p className="text-blue-100 text-sm">
                Our analysis follows NEA's Ecz-clusion list and recommendations for 
                ingredients to avoid in eczema-prone skin care products.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold mb-2">American Academy of Dermatology (AAD)</h4>
              <p className="text-blue-100 text-sm">
                We incorporate AAD guidelines for sensitive skin care, including 
                recommendations for fragrance-free and dye-free formulations.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
          
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Input Ingredients</h4>
              <p className="text-gray-600 text-sm">
                Paste the complete ingredient list using INCI names from the product packaging
              </p>
            </div>
            
            <div className="text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Get Analysis</h4>
              <p className="text-gray-600 text-sm">
                Receive instant feedback with flagged ingredients and safety assessment
              </p>
            </div>
            
            <div className="text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Product Recommendations</h4>
              <p className="text-gray-600 text-sm">
                Get personalized recommendations for eczema-safe alternatives
              </p>
            </div>
          </div>

          {/* Mobile Layout - Reverted to Original */}
          <div className="md:hidden space-y-6">
            <div className="text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Input Ingredients</h4>
              <p className="text-gray-600 text-sm">
                Paste the complete ingredient list using INCI names from the product packaging
              </p>
            </div>
            
            <div className="text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Get Analysis</h4>
              <p className="text-gray-600 text-sm">
                Receive instant feedback with flagged ingredients and safety assessment
              </p>
            </div>
            
            <div className="text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Product Recommendations</h4>
              <p className="text-gray-600 text-sm">
                Get personalized recommendations for eczema-safe alternatives
              </p>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <IngredientInput
          onAnalyze={handleAnalyze}
          isLoading={isLoading}
        />

        {/* Results Section */}
        {analysisResult && (
          <div className="mb-12">
            <AnalysisResult
              result={analysisResult}
            />
          </div>
        )}

        {/* Product Curations Section - Now Always Visible */}
        <ProductCurations />

        {/* Creator Credentials Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-l-4 border-blue-600">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="ml-4 text-left">
              <p className="text-gray-700 leading-relaxed">
                Created by <span className="font-semibold text-gray-900">Dr. Erah Anwar, PhD in Skin Regeneration</span>. 
                With years in the skincare industry, I built this free resource to give families access to science-based skincare information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-400 mr-2" />
              <span className="font-semibold">Eczema Checker</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Helping you make informed decisions about skincare for eczema-prone skin
            </p>
            <p className="text-gray-500 text-xs">
              This tool provides general guidance based on established dermatological guidelines. 
              Always consult with a healthcare professional for personalized medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
