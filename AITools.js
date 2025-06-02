import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const AITools = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-indigo-900 mb-6">
            AI Tools
          </h1>
          <p className="text-xl text-gray-700">
            Explore our collection of AI-powered educational tools designed specifically for Sindhi language learners.
          </p>
        </div>
        
        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tool 1 */}
          <div className="card hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 ajrak-pattern rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Sindhi Chatbot</h3>
            <p className="text-gray-600 mb-4">
              Practice conversational Sindhi with our AI-powered chatbot. Perfect for beginners and intermediate learners.
            </p>
            <button className="btn-primary w-full">Try Now</button>
          </div>
          
          {/* Tool 2 */}
          <div className="card hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 ajrak-pattern rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Translation Assistant</h3>
            <p className="text-gray-600 mb-4">
              Translate text between Sindhi and English with cultural context awareness and idiomatic expressions.
            </p>
            <button className="btn-primary w-full">Try Now</button>
          </div>
          
          {/* Tool 3 */}
          <div className="card hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 ajrak-pattern rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 017.072 0m-9.9-2.828a9 9 0 0112.728 0" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Pronunciation Coach</h3>
            <p className="text-gray-600 mb-4">
              Perfect your Sindhi pronunciation with real-time feedback and personalized exercises.
            </p>
            <button className="btn-primary w-full">Try Now</button>
          </div>
          
          {/* Tool 4 */}
          <div className="card hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 ajrak-pattern rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Vocabulary Builder</h3>
            <p className="text-gray-600 mb-4">
              Expand your Sindhi vocabulary with personalized flashcards and spaced repetition learning.
            </p>
            <button className="btn-primary w-full">Try Now</button>
          </div>
          
          {/* Tool 5 */}
          <div className="card hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 ajrak-pattern rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Grammar Assistant</h3>
            <p className="text-gray-600 mb-4">
              Master Sindhi grammar with interactive exercises and instant feedback on your writing.
            </p>
            <button className="btn-primary w-full">Try Now</button>
          </div>
          
          {/* Tool 6 */}
          <div className="card hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 ajrak-pattern rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Cultural Stories</h3>
            <p className="text-gray-600 mb-4">
              Explore AI-generated stories based on Sindhi folklore and cultural traditions with interactive elements.
            </p>
            <button className="btn-primary w-full">Try Now</button>
          </div>
        </div>
        
        {/* Coming Soon Section */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Coming Soon</h2>
          <p className="text-xl text-gray-700 mb-8">
            We're constantly developing new AI tools to enhance your Sindhi language learning experience. 
            Stay tuned for these upcoming features:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Speech Recognition</h3>
              <p className="text-gray-600">Advanced speech recognition specifically trained on Sindhi dialects.</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Writing Assistant</h3>
              <p className="text-gray-600">AI-powered writing assistance for composing texts in Sindhi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITools;
