import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Auth Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Load user data if token exists
  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        setAuthToken(token);
        try {
          const res = await axios.get('/api/users/me');
          setUser(res.data);
          setIsAuthenticated(true);
        } catch (err) {
          localStorage.removeItem('token');
          setToken(null);
          setIsAuthenticated(false);
          setUser(null);
        }
      }
      setLoading(false);
    };

    loadUser();
  }, [token]);

  // Set auth token in axios headers
  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common['x-auth-token'] = token;
      localStorage.setItem('token', token);
    } else {
      delete axios.defaults.headers.common['x-auth-token'];
      localStorage.removeItem('token');
    }
  };

  // Register user
  const register = async (formData) => {
    try {
      const res = await axios.post('/api/users/register', formData);
      setToken(res.data.token);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data?.message || 'Registration failed'
      };
    }
  };

  // Login user
  const login = async (formData) => {
    try {
      const res = await axios.post('/api/users/login', formData);
      setToken(res.data.token);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data?.message || 'Login failed'
      };
    }
  };

  // Logout user
  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    setUser(null);
  };

  // Update user language preference
  const updateLanguage = async (preferredLanguage) => {
    try {
      const res = await axios.put('/api/users/language', { preferredLanguage });
      setUser(res.data);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data?.message || 'Failed to update language preference'
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        register,
        login,
        logout,
        updateLanguage
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
