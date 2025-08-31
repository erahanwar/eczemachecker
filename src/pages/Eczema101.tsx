import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import ArticleAccordion from '../components/ArticleAccordion';

function Eczema101() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h1 className="text-2xl font-bold text-gray-900">Eczema Checker</h1>
              </div>
            </div>
            <Link 
              to="/"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">Back to Checker</span>
            </Link>
          </div>

          {/* Desktop Subheader */}
          <div className="hidden md:block mt-1">
            <p className="text-xl text-gray-600">Skincare ingredient analysis for sensitive skin</p>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-2" />
                <h1 className="text-2xl font-bold text-gray-900">Eczema Checker</h1>
              </div>
              <Link 
                to="/"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <ArrowLeft className="w-3 h-3 mr-1" />
                <span className="text-xs font-medium">Back</span>
              </Link>
            </div>
            <p className="text-base text-gray-600 text-left mb-4">
              Skincare ingredient analysis for sensitive skin
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="text-left mb-12">
          <div className="mb-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Eczema <span className="text-blue-600">101</span>
            </h2>
            <p className="text-xl text-gray-600 mt-2">
              Evidence-based educational articles about eczema and skincare
            </p>
          </div>
        </div>

        {/* Articles Accordion */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 mb-12">
          <ArticleAccordion articles={articles} />
        </div>

        {/* Creator Credentials Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 mb-12 border-l-4 border-blue-600 max-w-5xl">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <img 
                src="https://cdn.chatandbuild.com/users/6844d462a59d4b7ba8993c11/photo-1756625353127-641889726.jpg"
                alt="Dr. Erah Anwar"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="ml-4 text-left">
              <p className="text-gray-700 leading-relaxed">
                Written by <a 
                  href="https://www.instagram.com/dr.erahanwar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Dr. Erah Anwar, PhD in Skin Regeneration
                </a>. 
                These articles provide science-based information to help you better understand eczema and make informed skincare decisions.
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

export default Eczema101;
