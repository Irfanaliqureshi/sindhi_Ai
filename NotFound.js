import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const NotFound = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="w-24 h-24 ajrak-pattern rounded-full flex items-center justify-center mx-auto">
          <span className="text-white text-4xl font-bold">404</span>
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Page Not Found
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-primary inline-block">
            {translations.home}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
