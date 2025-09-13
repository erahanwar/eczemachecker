import React, { useEffect } from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import POEMAssessment from '../components/POEMAssessment';
import { trackPageView } from '../utils/analytics';

function POEMAssessmentPage() {
  useEffect(() => {
    // Track page view for Eczema Score
    trackPageView('Eczema Score Page');
  }, []);

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
              <span className="text-base font-medium">Back to Checker</span>
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
                <span className="text-sm font-medium">Back</span>
              </Link>
            </div>
            <p className="text-base text-gray-600 text-left mb-4">
              Skincare ingredient analysis for sensitive skin
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-left mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Eczema <span className="text-blue-600">Score</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Assess your eczema severity using the validated Patient Oriented Eczema Measure (POEM) 
            from the University of Nottingham.
          </p>
        </div>

        {/* Assessment Tool */}
        <div className="mb-12">
          <POEMAssessment />
        </div>

        {/* About POEM Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">About This Assessment</h3>
          <div className="prose prose-gray max-w-none text-left">
            <p className="text-gray-700 mb-4">
              This eczema score assessment is based on the Patient Oriented Eczema Measure (POEM), a validated 
              questionnaire developed by researchers at the University of Nottingham to assess the impact 
              of atopic eczema on patients and their families.
            </p>
            <p className="text-gray-700 mb-4">
              POEM focuses on patient-relevant aspects of eczema, measuring symptoms that matter 
              most to people living with the condition. It covers seven key areas: itching, sleep 
              disturbance, bleeding, weeping/oozing, cracking, flaking, and dryness/roughness.
            </p>
            <p className="text-gray-700 mb-6">
              The tool is widely used by healthcare professionals and researchers worldwide to 
              monitor eczema severity and treatment effectiveness over time.
            </p>
            
            {/* Copyright and Permission Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-gray-900 mb-2">Copyright & Permission</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Copyright:</strong> The POEM questionnaire is copyrighted by The University of Nottingham. 
                All rights reserved.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Permission:</strong> Permission has been requested from The University of Nottingham 
                for the non-commercial use of this questionnaire in this educational tool.
              </p>
            </div>
          </div>
        </div>

        {/* Creator Credentials Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-l-4 border-blue-600">
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
                Implemented by <a 
                  href="https://www.instagram.com/dr.erahanwar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Dr. Erah Anwar, PhD in Skin Regeneration
                </a>. 
                This eczema score assessment tool uses the official University of Nottingham POEM version to provide 
                accurate eczema severity evaluation for both patients and caregivers.
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

export default POEMAssessmentPage;
