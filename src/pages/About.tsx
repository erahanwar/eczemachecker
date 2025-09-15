import React from 'react';
import { Shield, ArrowLeft, Heart, Users, BookOpen, Award, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Eczema Checker</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Democratizing skincare education for everyone, regardless of access to dermatological care.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl shadow-lg p-8 text-white mb-12">
          <div className="flex items-start mb-6">
            <Heart className="w-8 h-8 text-white mr-4 flex-shrink-0 mt-1" />
            <h3 className="text-2xl font-bold mb-4 text-left">Our Mission</h3>
          </div>
          <p className="text-lg leading-relaxed text-left">
            Healthcare shouldn't be a privilege. Millions of people worldwide struggle with eczema and sensitive skin 
            conditions but lack access to dermatological expertise. Eczema Checker bridges this gap by providing 
            science-based, accessible skincare education and tools that empower individuals to make informed decisions 
            about their skin health.
          </p>
        </div>

        {/* Creator Profile */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 text-left">Meet Dr. Erah Anwar</h3>
              <div className="flex items-center space-x-3">
                <a 
                  href="https://www.instagram.com/dr.erahanwar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/erah-anwar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
            
            <div className="text-left">
              <div className="flex items-start mb-6">
                <img 
                  src="https://cdn.chatandbuild.com/users/6844d462a59d4b7ba8993c11/photo-1756625353127-641889726.jpg"
                  alt="Dr. Erah Anwar"
                  className="w-20 h-20 rounded-full object-cover mr-6 flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    A mom of three with a PhD in skin regeneration, she knows eczema personally - both for herself and her children. She has led scientific and medical affairs for global skincare brands across Asia Pacific and was recognized with scholarships throughout her academic journey. Blending professional expertise with lived experience, she created Eczema Checker to make evidence-based skincare simple and accessible for every family.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <h3 className="text-xl font-bold text-gray-900 text-left mb-4">Meet Dr. Erah Anwar</h3>
            
            <div className="flex items-start mb-6">
              <img 
                src="https://cdn.chatandbuild.com/users/6844d462a59d4b7ba8993c11/photo-1756625353127-641889726.jpg"
                alt="Dr. Erah Anwar"
                className="w-20 h-20 rounded-full object-cover mr-4 flex-shrink-0"
              />
              <div className="flex flex-col space-y-2">
                <a 
                  href="https://www.instagram.com/dr.erahanwar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/erah-anwar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-left">
              A mom of three with a PhD in skin regeneration, she knows eczema personally - both for herself and her children. She has led scientific and medical affairs for global skincare brands across Asia Pacific and was recognized with scholarships throughout her academic journey. Blending professional expertise with lived experience, she created Eczema Checker to make evidence-based skincare simple and accessible for every family.
            </p>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
            <div className="flex items-start mb-4">
              <Users className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <h4 className="text-xl font-bold text-gray-900 text-left">Healthcare Access Gap</h4>
            </div>
            <p className="text-gray-600 text-left leading-relaxed">
              Many people worldwide lack access to dermatologists due to geographic, economic, or systemic barriers. 
              This leaves millions struggling with eczema and sensitive skin conditions without proper guidance, 
              often leading to worsened symptoms and decreased quality of life.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
            <div className="flex items-start mb-4">
              <BookOpen className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <h4 className="text-xl font-bold text-gray-900 text-left">Evidence-Based Solution</h4>
            </div>
            <p className="text-gray-600 text-left leading-relaxed">
              Eczema Checker provides scientifically-backed information based on established dermatological guidelines 
              from trusted sources like the National Eczema Association and University of Nottingham, making expert 
              knowledge accessible to everyone.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">What We Offer</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Ingredient Analysis</h4>
              <p className="text-gray-600 text-sm">
                Instant analysis of skincare ingredients against dermatologist guidelines to identify potential eczema triggers.
              </p>
            </div>
            
            <div className="text-left">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Educational Resources</h4>
              <p className="text-gray-600 text-sm">
                Comprehensive, evidence-based articles covering all aspects of eczema management and skincare.
              </p>
            </div>
            
            <div className="text-left">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Eczema Self-Assessment</h4>
              <p className="text-gray-600 text-sm">
                Validated eczema severity assessment tool from the University of Nottingham for accurate self-evaluation.
              </p>
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-left">Our Commitment</h3>
          <div className="text-left">
            <p className="text-gray-700 leading-relaxed mb-4">
              Eczema Checker will always remain free and accessible to everyone. We believe that quality healthcare 
              information should not be behind paywalls or restricted by geographic location. Our tools and resources 
              are designed to complement, not replace, professional medical care.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are committed to maintaining the highest standards of scientific accuracy, regularly updating our 
              database with the latest dermatological research, and continuously improving our tools based on user 
              feedback and emerging evidence.
            </p>
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

export default About;
