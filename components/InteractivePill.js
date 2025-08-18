"use client";

import React from 'react';
import { useSearch } from '@/contexts/SearchContext';

// Search configuration for different pill types
const getSearchConfig = (text, context) => {
  const cleanText = text.toLowerCase().trim();
  
  // Age detection (non-searchable)
  if (/^🎂\s*v\d+\.\d+$/.test(text) || cleanText.includes('ans')) {
    return { searchable: false };
  }

  // Skills section - technology terms
  if (context?.section === 'skills') {
    const techTerms = {
      'react': ['React JavaScript framework', 'React.js library'],
      'next.js': ['Next.js React framework', 'Next.js full-stack'],
      'typescript': ['TypeScript JavaScript', 'TypeScript programming language'],
      'python': ['Python programming language', 'Python development'],
      'node.js': ['Node.js JavaScript runtime', 'Node.js backend'],
      'tailwind': ['Tailwind CSS framework', 'Tailwind utility-first CSS'],
      'mongodb': ['MongoDB database', 'MongoDB NoSQL'],
      'postgresql': ['PostgreSQL database', 'PostgreSQL SQL'],
      'docker': ['Docker containerization', 'Docker containers'],
      'aws': ['Amazon Web Services', 'AWS cloud platform'],
      'git': ['Git version control', 'Git source control'],
      'figma': ['Figma design tool', 'Figma UI/UX'],
      'photoshop': ['Adobe Photoshop', 'Photoshop image editing'],
      'illustrator': ['Adobe Illustrator', 'Illustrator vector graphics']
    };

    const customTerms = techTerms[cleanText] || [`${text} technology`, `${text} programming`];
    return {
      searchable: true,
      customTerms,
      searchType: 'technology'
    };
  }

  // About Me section
  if (context?.section === 'about') {
    // Language detection
    const languages = ['français', 'english', 'español', 'deutsch', 'italiano', '日本語', '中文'];
    if (languages.some(lang => cleanText.includes(lang.toLowerCase()))) {
      return {
        searchable: true,
        customTerms: [`${text} langue`, `${text} language`],
        searchType: 'language'
      };
    }

    // Location detection
    const locations = ['france', 'paris', 'lyon', 'marseille', 'toulouse', 'bordeaux', 'lille', 'nantes'];
    if (locations.some(loc => cleanText.includes(loc))) {
      return {
        searchable: true,
        customTerms: [`${text} géographie`, `${text} ville`, `${text} location`],
        searchType: 'location'
      };
    }

    // Default for other profile info
    return {
      searchable: true,
      customTerms: [text],
      searchType: 'profile'
    };
  }

  // Beyond Code section
  if (context?.section === 'beyond-code') {
    // Activity detection
    const activities = ['musculation', 'fitness', 'sport', 'lecture', 'gaming', 'jeux', 'apprentissage'];
    if (activities.some(activity => cleanText.includes(activity))) {
      return {
        searchable: true,
        customTerms: [`${text} activité`, `${text} hobby`, `${text} loisir`],
        searchType: 'activity'
      };
    }

    // Travel destination detection
    const destinations = ['japon', 'corée', 'islande', 'norvège', 'canada', 'nouvelle-zélande', 'patagonie'];
    if (destinations.some(dest => cleanText.includes(dest))) {
      return {
        searchable: true,
        customTerms: [`${text} voyage`, `${text} tourisme`, `${text} destination`],
        searchType: 'destination'
      };
    }

    // Default for beyond code items
    return {
      searchable: true,
      customTerms: [text],
      searchType: 'activity'
    };
  }

  // Default configuration
  return {
    searchable: true,
    customTerms: [text],
    searchType: 'general'
  };
};

// InteractivePill HOC
const InteractivePill = ({ 
  children, 
  searchable = true, 
  searchTerms, 
  searchContext,
  className = '',
  onClick,
  ...props 
}) => {
  const { performSearch, currentLanguage } = useSearch();

  // Extract text content from children for search configuration
  const getTextContent = (element) => {
    if (typeof element === 'string') return element;
    if (typeof element === 'number') return element.toString();
    if (Array.isArray(element)) return element.map(getTextContent).join('');
    if (React.isValidElement(element) && element.props.children) {
      return getTextContent(element.props.children);
    }
    return '';
  };

  const textContent = getTextContent(children);
  const config = getSearchConfig(textContent, searchContext);
  const isSearchable = searchable && config.searchable;

  // Handle click event
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    // Call original onClick if provided
    if (onClick) {
      onClick();
    }

    // Perform search if searchable
    if (isSearchable) {
      const terms = searchTerms || config.customTerms || [textContent];
      const context = {
        ...searchContext,
        searchType: config.searchType,
        originalText: textContent
      };
      performSearch(terms, context);
    }
  };

  // Handle keyboard events
  const handleKeyDown = (event) => {
    if (isSearchable && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      handleClick(event);
    }
  };

  // Get appropriate ARIA label based on current language
  const getAriaLabel = (text, language) => {
    if (language === 'fr') {
      return `Rechercher des informations sur ${text} avec ChatGPT`;
    } else {
      return `Search for information about ${text} with ChatGPT`;
    }
  };

  const getHintText = (language) => {
    if (language === 'fr') {
      return 'Cliquez ou appuyez sur Entrée pour rechercher des informations sur ce terme avec ChatGPT';
    } else {
      return 'Click or press Enter to search for information about this term with ChatGPT';
    }
  };

  // Enhanced children with interactive properties
  const enhancedChildren = React.cloneElement(children, {
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    style: {
      ...children.props.style,
      cursor: isSearchable ? 'pointer' : 'default',
      userSelect: 'none'
    },
    className: `${children.props.className || ''} ${isSearchable ? 'interactive-pill' : ''}`,
    tabIndex: isSearchable ? 0 : -1,
    role: isSearchable ? 'button' : undefined,
    'aria-label': isSearchable ? getAriaLabel(textContent, currentLanguage) : undefined,
    'aria-describedby': isSearchable ? 'pill-search-hint' : undefined,
    'aria-pressed': false,
    'aria-expanded': false,
    ...props
  });

  return (
    <>
      {enhancedChildren}
      {/* Hidden hint for screen readers */}
      {isSearchable && (
        <>
          <span id="pill-search-hint" className="sr-only">
            {getHintText(currentLanguage)}
          </span>
          {/* Live region for search feedback */}
          <div 
            id="search-status" 
            className="sr-only" 
            role="status" 
            aria-live="polite"
            aria-atomic="true"
          />
        </>
      )}
    </>
  );
};

export default InteractivePill;