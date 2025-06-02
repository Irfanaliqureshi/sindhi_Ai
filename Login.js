import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { translations } = useContext(LanguageContext);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { email, password } = formData;
  
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const result = await login(formData);
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
            {translations.login}
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
              <label htmlFor="email" className="sr-only">{translations.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input-field rounded-t-md"
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
                autoComplete="current-password"
                required
                className="input-field rounded-b-md"
                placeholder={translations.password}
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                {translations.forgotPassword}
              </a>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              {loading ? 'Loading...' : translations.login}
            </button>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                {translations.signup}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
