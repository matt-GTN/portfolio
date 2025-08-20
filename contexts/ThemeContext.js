"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState('light');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const initializeTheme = () => {
      try {
        // Try to get saved theme from localStorage
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
          setThemeState(savedTheme);
          applyTheme(savedTheme);
          setIsInitialized(true);
          return;
        }

        // Detect browser preference for dark mode
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = prefersDark ? 'dark' : 'light';
        setThemeState(initialTheme);
        applyTheme(initialTheme);
        setIsInitialized(true);
      } catch (error) {
        console.warn('Failed to initialize theme:', error);
        setThemeState('light');
        applyTheme('light');
        setIsInitialized(true);
      }
    };

    initializeTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      // Only update if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (!savedTheme) {
        const newTheme = e.matches ? 'dark' : 'light';
        setThemeState(newTheme);
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const applyTheme = (newTheme) => {
    try {
      const html = document.documentElement;
      
      // Apply Tailwind dark mode classes
      if (newTheme === 'dark') {
        html.classList.add('dark');
        html.classList.remove('light');
      } else {
        html.classList.add('light');
        html.classList.remove('dark');
      }
      
      // Apply DaisyUI theme via data-theme attribute
      html.setAttribute('data-theme', newTheme);
    } catch (error) {
      console.warn('Failed to apply theme:', error);
    }
  };

  const setTheme = (newTheme) => {
    if (!['light', 'dark'].includes(newTheme)) {
      console.warn(`Unsupported theme: ${newTheme}`);
      return;
    }

    setThemeState(newTheme);
    applyTheme(newTheme);
    
    try {
      localStorage.setItem('portfolio-theme', newTheme);
    } catch (error) {
      console.warn('Failed to persist theme:', error);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const isDark = theme === 'dark';

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark,
    isInitialized
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
