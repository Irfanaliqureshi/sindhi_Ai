import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const Home = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 ajrak-pattern opacity-10"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-indigo-900 mb-6">
              {translations.welcome}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              {translations.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register" className="btn-primary text-center">
                {translations.getStarted}
              </Link>
              <Link to="/about" className="btn-secondary text-center">
                {translations.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
            Educational AI Tools in Sindhi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card text-center">
              <div className="w-16 h-16 ajrak-pattern rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="text-gray-600">
                Engage with AI-powered interactive lessons designed specifically for Sindhi speakers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card text-center">
              <div className="w-16 h-16 ajrak-pattern rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Language Preservation</h3>
              <p className="text-gray-600">
                Help preserve and promote Sindhi language and culture through modern technology.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card text-center">
              <div className="w-16 h-16 ajrak-pattern rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
              <p className="text-gray-600">
                Access a growing library of educational content in Sindhi with English translations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Sindhi AI today and experience education in your native language with the power of artificial intelligence.
          </p>
          <Link to="/register" className="inline-block bg-white text-indigo-900 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300">
            {translations.getStarted}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
