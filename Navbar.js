import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { language, toggleLanguage, translations } = useContext(LanguageContext);
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 ajrak-pattern rounded-full flex items-center justify-center">
              <span className="topi-icon text-white"></span>
            </div>
            <span className="ml-2 text-xl font-bold text-indigo-900">Sindhi AI</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-red-700 transition duration-300">
              {translations.home}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-700 transition duration-300">
              {translations.about}
            </Link>
            <Link to="/ai-tools" className="text-gray-700 hover:text-red-700 transition duration-300">
              AI Tools
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-700 transition duration-300">
              {translations.contact}
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-red-700 transition duration-300">
                  {translations.dashboard}
                </Link>
                {user && user.role === 'admin' && (
                  <Link to="/admin" className="text-gray-700 hover:text-red-700 transition duration-300">
                    {translations.admin}
                  </Link>
                )}
                <button 
                  onClick={logout}
                  className="text-gray-700 hover:text-red-700 transition duration-300"
                >
                  {translations.logout}
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-red-700 transition duration-300">
                  {translations.login}
                </Link>
                <Link to="/register" className="btn-primary">
                  {translations.signup}
                </Link>
              </>
            )}
          </div>

          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center justify-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-md hover:bg-indigo-200 transition duration-300"
          >
            {language === 'sindhi' ? 'English' : 'سنڌي'}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="hidden md:hidden bg-white border-t border-gray-200 py-2">
        <div className="container mx-auto px-4">
          <Link to="/" className="block py-2 text-gray-700 hover:text-red-700">
            {translations.home}
          </Link>
          <Link to="/about" className="block py-2 text-gray-700 hover:text-red-700">
            {translations.about}
          </Link>
          <Link to="/ai-tools" className="block py-2 text-gray-700 hover:text-red-700">
            AI Tools
          </Link>
          <Link to="/contact" className="block py-2 text-gray-700 hover:text-red-700">
            {translations.contact}
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="block py-2 text-gray-700 hover:text-red-700">
                {translations.dashboard}
              </Link>
              {user && user.role === 'admin' && (
                <Link to="/admin" className="block py-2 text-gray-700 hover:text-red-700">
                  {translations.admin}
                </Link>
              )}
              <button 
                onClick={logout}
                className="block w-full text-left py-2 text-gray-700 hover:text-red-700"
              >
                {translations.logout}
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block py-2 text-gray-700 hover:text-red-700">
                {translations.login}
              </Link>
              <Link to="/register" className="block py-2 text-gray-700 hover:text-red-700">
                {translations.signup}
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
