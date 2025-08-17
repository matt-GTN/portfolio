"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState('en');

  // Initialize language on mount
  useEffect(() => {
    const initializeLanguage = () => {
      try {
        // Try to get saved language from localStorage
        const savedLanguage = localStorage.getItem('portfolio-language');
        if (savedLanguage && ['fr', 'en'].includes(savedLanguage)) {
          setLanguageState(savedLanguage);
          return;
        }

        // Detect browser language
        const browserLanguage = navigator.language.toLowerCase();
        if (browserLanguage.startsWith('fr')) {
          setLanguageState('fr');
        } else {
          setLanguageState('en');
        }
      } catch (error) {
        console.warn('Failed to initialize language:', error);
        setLanguageState('en');
      }
    };

    initializeLanguage();
  }, []);

  const setLanguage = (newLanguage) => {
    if (!['fr', 'en'].includes(newLanguage)) {
      console.warn(`Unsupported language: ${newLanguage}`);
      return;
    }

    setLanguageState(newLanguage);
    
    try {
      localStorage.setItem('portfolio-language', newLanguage);
      document.documentElement.lang = newLanguage;
    } catch (error) {
      console.warn('Failed to persist language:', error);
    }
  };

  // Translation function with dot notation support
  const t = (key) => {
    try {
      const keys = key.split('.');
      let value = translations[language];
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          // Fallback to English if key not found
          value = translations.en;
          for (const fallbackKey of keys) {
            if (value && typeof value === 'object' && fallbackKey in value) {
              value = value[fallbackKey];
            } else {
              console.warn(`Translation key not found: ${key}`);
              return key; // Return the key itself as fallback
            }
          }
          break;
        }
      }
      
      return value;
    } catch (error) {
      console.warn(`Translation error for key "${key}":`, error);
      return key;
    }
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};