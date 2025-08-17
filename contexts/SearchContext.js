"use client";

import React, { createContext, useContext } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Search context interface
const SearchContext = createContext(null);

// Question templates for different languages
const questionTemplates = {
  fr: {
    skills: "Qu'est-ce que {term} et comment ça fonctionne ? Recherche le Web si besoin",
    language: "Parle-moi de la langue {term} et de son niveau",
    location: "Parle-moi de {term} - géographie, culture et informations générales",
    activity: "Parle-moi de {term} - Recherche le Web si besoin",
    destination: "Parle-moi de {term} comme destination de voyage - que voir, que faire, culture",
    general: "Qu'est-ce que {term} ?"
  },
  en: {
    skills: "What is {term} and how does it work? Search the Web if needed",
    language: "Tell me about the {term} language and proficiency level",
    location: "Tell me about {term} - geography, culture and general information",
    activity: "Tell me about {term} - Search the Web if needed",
    destination: "Tell me about {term} as a travel destination - what to see, what to do, culture",
    general: "What is {term}?"
  }
};

// Format search terms as a question based on language and context
const formatQuestionByLanguage = (terms, context, language) => {
  try {
    const originalText = context?.originalText || terms;
    const cleanText = typeof originalText === 'string' ? originalText : terms;
    const currentLanguage = language || 'en';
    
    // Get the appropriate template based on context section and search type
    let templateKey = 'general';
    if (context?.section === 'skills') {
      templateKey = 'skills';
    } else if (context?.section === 'about' && context?.searchType === 'language') {
      templateKey = 'language';
    } else if (context?.section === 'about' && context?.searchType === 'location') {
      templateKey = 'location';
    } else if (context?.section === 'beyond-code' && context?.searchType === 'activity') {
      templateKey = 'activity';
    } else if (context?.section === 'beyond-code' && context?.searchType === 'destination') {
      templateKey = 'destination';
    }

    // Get template for the current language, fallback to English if not found
    const templates = questionTemplates[currentLanguage] || questionTemplates.en;
    const template = templates[templateKey] || templates.general;
    
    // Replace {term} placeholder with the actual term
    return template.replace('{term}', cleanText);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Question formatting failed, using fallback:', error);
    }
    // Fallback to simple English question
    const fallbackText = typeof terms === 'string' ? terms : (Array.isArray(terms) ? terms.join(' ') : 'this topic');
    return `What is ${fallbackText}?`;
  }
};

// URL generation utility for ChatGPT with language support
export const generateSearchURL = (terms, context, language) => {
  try {
    const question = formatQuestionByLanguage(terms, context, language);
    const encodedQuestion = encodeURIComponent(question);
    return `https://chat.openai.com/?q=${encodedQuestion}`;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('URL generation failed, using fallback:', error);
    }
    // Fallback to simple search
    const fallbackTerms = Array.isArray(terms) ? terms.join(' ') : terms;
    return `https://chat.openai.com/?q=${encodeURIComponent(fallbackTerms)}`;
  }
};

// Mobile detection utility
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Error handling utility
const handleSearchError = (error, fallbackAction) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn('Search failed:', error);
  }
  if (fallbackAction) {
    fallbackAction();
  }
};

// SearchProvider component
export const SearchProvider = ({ children }) => {
  const { language } = useLanguage();

  // Safe language detection with error handling
  const getCurrentLanguage = () => {
    try {
      return language || 'en';
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Language detection failed, falling back to English:', error);
      }
      return 'en';
    }
  };

  // Perform search with comprehensive error handling
  const performSearch = (terms, context) => {
    try {
      // Validate input parameters
      if (!terms || (Array.isArray(terms) && terms.length === 0)) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Search attempted with empty terms');
        }
        return;
      }

      // Generate ChatGPT URL with language support
      const currentLanguage = getCurrentLanguage();
      const url = generateSearchURL(terms, context, currentLanguage);

      // Validate generated URL
      if (!url || !url.startsWith('http')) {
        throw new Error('Invalid search URL generated');
      }

      // Open search in new tab/window, or same tab on mobile if needed
      const target = isMobile() ? '_self' : '_blank';
      const newWindow = window.open(url, target);

      // Fallback if popup was blocked or failed to open
      if (!newWindow && target === '_blank') {
        // Try opening in same tab as fallback
        try {
          window.open(url, '_self');
        } catch (sameTabError) {
          handleSearchError(sameTabError, () => {
            // Final fallback: try generic ChatGPT search in same tab
            const query = Array.isArray(terms) ? terms.join(' ') : terms;
            const fallbackUrl = `https://chat.openai.com/?q=${encodeURIComponent(query)}`;
            window.location.href = fallbackUrl;
          });
        }
      }
    } catch (error) {
      handleSearchError(error, () => {
        // Fallback to generic ChatGPT search
        try {
          const query = Array.isArray(terms) ? terms.join(' ') : terms;
          const fallbackUrl = `https://chat.openai.com/?q=${encodeURIComponent(query)}`;
          const target = isMobile() ? '_self' : '_blank';
          const fallbackWindow = window.open(fallbackUrl, target);

          // If fallback also fails, try same tab
          if (!fallbackWindow && target === '_blank') {
            window.open(fallbackUrl, '_self');
          }
        } catch (fallbackError) {
          handleSearchError(fallbackError, () => {
            // Ultimate fallback: direct navigation
            try {
              const query = Array.isArray(terms) ? terms.join(' ') : terms;
              window.location.href = `https://chat.openai.com/?q=${encodeURIComponent(query)}`;
            } catch (ultimateError) {
              handleSearchError(ultimateError);
            }
          });
        }
      });
    }
  };

  const value = {
    performSearch,
    currentLanguage: getCurrentLanguage()
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use search context
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export default SearchContext;