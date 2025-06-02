import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const { translations } = useContext(LanguageContext);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    preferredLanguage: 'sindhi'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { name, email, password, confirmPassword, preferredLanguage } = formData;
  
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    
    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setLoading(true);
    
    try {
      const result = await register({
        name,
        email,
        password,
        preferredLanguage
      });
      
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-20 h-20 ajrak-pattern rounded-full flex items-center justify-center mx-auto">
            <span className="topi-icon text-white text-2xl"></span>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {translations.signup}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {translations.subtitle}
          </p>
        </div>
        
        <form className="mt-8 space-y-6 form-appear" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">{translations.name}</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="input-field rounded-t-md"
                placeholder={translations.name}
                value={name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">{translations.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input-field"
                placeholder={translations.email}
                value={email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">{translations.password}</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="input-field"
                placeholder={translations.password}
                value={password}
                onChange={handleChange}
                minLength="6"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">{translations.confirmPassword}</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="input-field rounded-b-md"
                placeholder={translations.confirmPassword}
                value={confirmPassword}
                onChange={handleChange}
                minLength="6"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Language</label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  id="sindhi"
                  name="preferredLanguage"
                  type="radio"
                  value="sindhi"
                  checked={preferredLanguage === 'sindhi'}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                />
                <label htmlFor="sindhi" className="ml-2 block text-sm text-gray-900">
                  سنڌي
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="english"
                  name="preferredLanguage"
                  type="radio"
                  value="english"
                  checked={preferredLanguage === 'english'}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                />
                <label htmlFor="english" className="ml-2 block text-sm text-gray-900">
                  English
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              {loading ? 'Loading...' : translations.signup}
            </button>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                {translations.login}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
