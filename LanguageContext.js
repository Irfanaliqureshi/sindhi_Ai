import React, { createContext, useState, useEffect } from 'react';

// Create Language Context
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default language is Sindhi
  const [language, setLanguage] = useState('sindhi');
  
  // Update document body class for RTL/LTR support
  useEffect(() => {
    const body = document.body;
    
    if (language === 'sindhi') {
      body.classList.add('rtl');
      body.classList.remove('ltr');
    } else {
      body.classList.add('ltr');
      body.classList.remove('rtl');
    }
  }, [language]);
  
  // Toggle language between Sindhi and English
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'sindhi' ? 'english' : 'sindhi');
  };
  
  // Translations object for UI elements
  const translations = {
    sindhi: {
      // Navigation
      home: 'گھر',
      about: 'باري ۾',
      contact: 'رابطو',
      login: 'لاگ ان',
      signup: 'سائن اپ',
      dashboard: 'ڊيشبورڊ',
      admin: 'ايڊمن',
      logout: 'لاگ آئوٽ',
      
      // Homepage
      welcome: 'سنڌي اي آءِ ۾ ڀليڪار',
      subtitle: 'سنڌي ٻولي ۾ تعليمي اي آءِ پليٽ فارم',
      getStarted: 'شروع ڪريو',
      learnMore: 'وڌيڪ سکو',
      
      // Auth
      email: 'اي ميل',
      password: 'پاسورڊ',
      confirmPassword: 'پاسورڊ جي تصديق ڪريو',
      name: 'نالو',
      forgotPassword: 'پاسورڊ وساري ويا؟',
      
      // Contact
      subject: 'موضوع',
      message: 'پيغام',
      send: 'موڪليو',
      
      // Dashboard
      myTutorials: 'منهنجا سبق',
      myProgress: 'منهنجي ترقي',
      settings: 'ترتيبون',
      
      // Footer
      copyright: 'جملي حق © 2025 سنڌي اي آءِ',
      terms: 'شرطون ۽ حالتون',
      privacy: 'رازداري پاليسي',
    },
    english: {
      // Navigation
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      login: 'Login',
      signup: 'Sign Up',
      dashboard: 'Dashboard',
      admin: 'Admin',
      logout: 'Logout',
      
      // Homepage
      welcome: 'Welcome to Sindhi AI',
      subtitle: 'Educational AI Platform in Sindhi Language',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      
      // Auth
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      name: 'Name',
      forgotPassword: 'Forgot Password?',
      
      // Contact
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      
      // Dashboard
      myTutorials: 'My Tutorials',
      myProgress: 'My Progress',
      settings: 'Settings',
      
      // Footer
      copyright: 'All Rights Reserved © 2025 Sindhi AI',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
    }
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
