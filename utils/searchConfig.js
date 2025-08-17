// Search configuration system for pills
// This file contains the configuration for customizing search terms and behavior

// Search types enum
export const SEARCH_TYPES = {
  TECHNOLOGY: 'technology',
  LANGUAGE: 'language',
  LOCATION: 'location',
  ACTIVITY: 'activity',
  DESTINATION: 'destination',
  PROFILE: 'profile',
  GENERAL: 'general'
};

// Default search configuration
export const DEFAULT_SEARCH_CONFIG = {
  // === SKILLS SECTION - Data Science & Analytics ===
  'Pandas': {
    searchable: true,
    customTerms: ['Pandas Python library', 'Pandas data analysis tutorial'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Numpy': {
    searchable: true,
    customTerms: ['Numpy Python library', 'Numpy numerical computing'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Jupyter': {
    searchable: true,
    customTerms: ['Jupyter notebook', 'Jupyter data science'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Plotly': {
    searchable: true,
    customTerms: ['Plotly data visualization', 'Plotly interactive charts'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Matplotlib': {
    searchable: true,
    customTerms: ['Matplotlib Python plotting', 'Matplotlib data visualization'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Seaborn': {
    searchable: true,
    customTerms: ['Seaborn statistical visualization', 'Seaborn Python plotting'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Scikit-learn': {
    searchable: true,
    customTerms: ['Scikit-learn machine learning', 'Sklearn Python library'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Keras': {
    searchable: true,
    customTerms: ['Keras deep learning', 'Keras neural networks'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'XGBoost': {
    searchable: true,
    customTerms: ['XGBoost gradient boosting', 'XGBoost machine learning'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'SciPy.stats': {
    searchable: true,
    customTerms: ['SciPy statistics', 'SciPy statistical analysis'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Statsmodels': {
    searchable: true,
    customTerms: ['Statsmodels statistical modeling', 'Statsmodels Python'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'SHAP': {
    searchable: true,
    customTerms: ['SHAP explainable AI', 'SHAP model interpretation'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'OpenCV': {
    searchable: true,
    customTerms: ['OpenCV computer vision', 'OpenCV image processing'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'NLTK': {
    searchable: true,
    customTerms: ['NLTK natural language processing', 'NLTK text analysis'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Recommender Systems': {
    searchable: true,
    customTerms: ['Recommender systems machine learning', 'Recommendation algorithms'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Imblearn': {
    searchable: true,
    customTerms: ['Imblearn imbalanced learning', 'Imblearn data sampling'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Prophet': {
    searchable: true,
    customTerms: ['Prophet time series forecasting', 'Facebook Prophet'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'TPOT': {
    searchable: true,
    customTerms: ['TPOT automated machine learning', 'TPOT AutoML'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },

  // === SKILLS SECTION - Agentic AI & Automation ===
  'LLMs': {
    searchable: true,
    customTerms: ['Large Language Models', 'LLM artificial intelligence'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'RAG': {
    searchable: true,
    customTerms: ['Retrieval Augmented Generation', 'RAG AI architecture'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'MCP': {
    searchable: true,
    customTerms: ['Model Context Protocol', 'MCP AI integration'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'OpenRouter': {
    searchable: true,
    customTerms: ['OpenRouter API', 'OpenRouter LLM routing'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Groq': {
    searchable: true,
    customTerms: ['Groq AI inference', 'Groq language models'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'LangChain': {
    searchable: true,
    customTerms: ['LangChain framework', 'LangChain AI applications'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'LangGraph': {
    searchable: true,
    customTerms: ['LangGraph workflow orchestration', 'LangGraph AI agents'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'LangSmith': {
    searchable: true,
    customTerms: ['LangSmith debugging', 'LangSmith AI monitoring'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Context Engineering': {
    searchable: true,
    customTerms: ['Context Engineering AI', 'Prompt engineering techniques'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },

  // === SKILLS SECTION - Backend & Systems ===
  'SQL': {
    searchable: true,
    customTerms: ['SQL database queries', 'SQL programming language'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Unix': {
    searchable: true,
    customTerms: ['Unix operating system', 'Unix command line'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'C++': {
    searchable: true,
    customTerms: ['C++ programming language', 'C++ development'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Python': {
    searchable: true,
    customTerms: ['Python programming language', 'Python development tutorial'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Git': {
    searchable: true,
    customTerms: ['Git version control', 'Git source control tutorial'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'GitHub': {
    searchable: true,
    customTerms: ['GitHub repository hosting', 'GitHub collaboration'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Docker': {
    searchable: true,
    customTerms: ['Docker containerization', 'Docker containers tutorial'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'FastAPI': {
    searchable: true,
    customTerms: ['FastAPI Python framework', 'FastAPI web development'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Nginx': {
    searchable: true,
    customTerms: ['Nginx web server', 'Nginx reverse proxy'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'MLFlow': {
    searchable: true,
    customTerms: ['MLFlow machine learning lifecycle', 'MLFlow model management'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'MongoDB': {
    searchable: true,
    customTerms: ['MongoDB database', 'MongoDB NoSQL tutorial'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'SQLAlchemy': {
    searchable: true,
    customTerms: ['SQLAlchemy Python ORM', 'SQLAlchemy database toolkit'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'IoT': {
    searchable: true,
    customTerms: ['Internet of Things', 'IoT development'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },

  // === SKILLS SECTION - Frontend & Prototyping ===
  'HTML': {
    searchable: true,
    customTerms: ['HTML markup language', 'HTML web development'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'CSS': {
    searchable: true,
    customTerms: ['CSS styling', 'CSS web design'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'JavaScript': {
    searchable: true,
    customTerms: ['JavaScript programming', 'JavaScript web development'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Next.js': {
    searchable: true,
    customTerms: ['Next.js React framework', 'Next.js full-stack development'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'React': {
    searchable: true,
    customTerms: ['React JavaScript framework', 'React.js library tutorial'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Streamlit': {
    searchable: true,
    customTerms: ['Streamlit Python apps', 'Streamlit data science'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Tailwind CSS': {
    searchable: true,
    customTerms: ['Tailwind CSS framework', 'Tailwind utility-first CSS'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'DaisyUI': {
    searchable: true,
    customTerms: ['DaisyUI component library', 'DaisyUI Tailwind components'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Framer Motion': {
    searchable: true,
    customTerms: ['Framer Motion animations', 'React animation library'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },

  // === SKILLS SECTION - Currently Learning ===
  'AWS Cloud': {
    searchable: true,
    customTerms: ['Amazon Web Services', 'AWS cloud platform'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'PySpark': {
    searchable: true,
    customTerms: ['PySpark big data', 'Apache Spark Python'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Unit Tests': {
    searchable: true,
    customTerms: ['Unit testing', 'Software testing practices'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Clustering': {
    searchable: true,
    customTerms: ['Clustering algorithms', 'Unsupervised learning'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Reinforcement Learning': {
    searchable: true,
    customTerms: ['Reinforcement learning AI', 'RL machine learning'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Beautiful Soup': {
    searchable: true,
    customTerms: ['Beautiful Soup web scraping', 'Python HTML parsing'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'NetworkX': {
    searchable: true,
    customTerms: ['NetworkX graph analysis', 'Python network analysis'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'TensorFlow': {
    searchable: true,
    customTerms: ['TensorFlow machine learning', 'TensorFlow deep learning'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'PyTorch': {
    searchable: true,
    customTerms: ['PyTorch deep learning', 'PyTorch neural networks'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Vector Databases': {
    searchable: true,
    customTerms: ['Vector databases', 'Embedding storage systems'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },

  // === ABOUT ME SECTION - Profile ===
  '📍 Nantes, France': {
    searchable: true,
    customTerms: ['Nantes France location', 'Nantes city information'],
    searchType: SEARCH_TYPES.LOCATION
  },
  '🎓 Data Scientist': {
    searchable: true,
    customTerms: ['Data Scientist career', 'Data Science profession'],
    searchType: SEARCH_TYPES.PROFILE
  },
  '💼 5 ans d\'expérience': {
    searchable: true,
    customTerms: ['5 years experience', 'Professional experience'],
    searchType: SEARCH_TYPES.PROFILE
  },
  '💼 5 years experience': {
    searchable: true,
    customTerms: ['5 years experience', 'Professional experience'],
    searchType: SEARCH_TYPES.PROFILE
  },
  '🚗 Permis de conduire': {
    searchable: true,
    customTerms: ['Driving license', 'Permis de conduire'],
    searchType: SEARCH_TYPES.PROFILE
  },
  '🚗 Driving License': {
    searchable: true,
    customTerms: ['Driving license', 'Permis de conduire'],
    searchType: SEARCH_TYPES.PROFILE
  },

  // === ABOUT ME SECTION - Languages ===
  '🇬🇧 Anglais - C2': {
    searchable: true,
    customTerms: ['English language C2 level', 'Advanced English'],
    searchType: SEARCH_TYPES.LANGUAGE
  },
  '🇬🇧 English - C2': {
    searchable: true,
    customTerms: ['English language C2 level', 'Advanced English'],
    searchType: SEARCH_TYPES.LANGUAGE
  },
  '🇮🇹 Italien - B2': {
    searchable: true,
    customTerms: ['Italian language B2 level', 'Intermediate Italian'],
    searchType: SEARCH_TYPES.LANGUAGE
  },
  '🇮🇹 Italian - B2': {
    searchable: true,
    customTerms: ['Italian language B2 level', 'Intermediate Italian'],
    searchType: SEARCH_TYPES.LANGUAGE
  },
  '🇫🇷 Français - Natif': {
    searchable: true,
    customTerms: ['French native language', 'Français langue maternelle'],
    searchType: SEARCH_TYPES.LANGUAGE
  },
  '🇫🇷 French - Native': {
    searchable: true,
    customTerms: ['French native language', 'Français langue maternelle'],
    searchType: SEARCH_TYPES.LANGUAGE
  },

  // === BEYOND CODE SECTION - Current Activities ===
  '🎾 Padel': {
    searchable: true,
    customTerms: ['Padel sport', 'Padel tennis game'],
    searchType: SEARCH_TYPES.ACTIVITY
  },
  '📚 The Witcher': {
    searchable: true,
    customTerms: ['The Witcher books', 'Witcher fantasy series'],
    searchType: SEARCH_TYPES.ACTIVITY
  },
  '🐼 Panda Spin': {
    searchable: true,
    customTerms: ['Panda Spin game', 'Board game'],
    searchType: SEARCH_TYPES.ACTIVITY
  },
  '🌱 Apprendre le Darija': {
    searchable: true,
    customTerms: ['Darija Moroccan Arabic', 'Learning Darija language'],
    searchType: SEARCH_TYPES.LANGUAGE
  },
  '🌱 Learning Darija': {
    searchable: true,
    customTerms: ['Darija Moroccan Arabic', 'Learning Darija language'],
    searchType: SEARCH_TYPES.LANGUAGE
  },
  '👻 Kiro Code': {
    searchable: true,
    customTerms: ['Kiro Code AI assistant', 'Kiro development tool'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  '🍪 Pasticiotto pistacchio': {
    searchable: true,
    customTerms: ['Pasticiotto pistachio', 'Italian pastry'],
    searchType: SEARCH_TYPES.ACTIVITY
  },

  // === BEYOND CODE SECTION - Travel Destinations ===
  '🇯🇵 Japon': {
    searchable: true,
    customTerms: ['Japon voyage tourisme', 'Japan travel destination culture'],
    searchType: SEARCH_TYPES.DESTINATION
  },
  '🇯🇵 Japan': {
    searchable: true,
    customTerms: ['Japan travel destination culture', 'Japon voyage tourisme'],
    searchType: SEARCH_TYPES.DESTINATION
  },
  '🇮🇸 Islande': {
    searchable: true,
    customTerms: ['Islande voyage tourisme', 'Iceland travel destination'],
    searchType: SEARCH_TYPES.DESTINATION
  },
  '🇮🇸 Iceland': {
    searchable: true,
    customTerms: ['Iceland travel destination', 'Islande voyage tourisme'],
    searchType: SEARCH_TYPES.DESTINATION
  },
  '🇳🇿 Nouvelle-Zélande': {
    searchable: true,
    customTerms: ['Nouvelle-Zélande voyage', 'New Zealand travel destination'],
    searchType: SEARCH_TYPES.DESTINATION
  },
  '🇳🇿 New Zealand': {
    searchable: true,
    customTerms: ['New Zealand travel destination', 'Nouvelle-Zélande voyage'],
    searchType: SEARCH_TYPES.DESTINATION
  },
  '🇨🇦 Canada': {
    searchable: true,
    customTerms: ['Canada voyage tourisme', 'Canada travel destination'],
    searchType: SEARCH_TYPES.DESTINATION
  },

  // === PROJECTS SECTION - Technologies ===
  // Technologies used in projects (some overlap with skills but with project context)
  'LangGraph': {
    searchable: true,
    customTerms: ['LangGraph workflow orchestration', 'LangGraph AI agents'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Streamlit': {
    searchable: true,
    customTerms: ['Streamlit Python apps', 'Streamlit data science'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Groq': {
    searchable: true,
    customTerms: ['Groq AI inference', 'Groq language models'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'FastAPI': {
    searchable: true,
    customTerms: ['FastAPI Python framework', 'FastAPI web development'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Nginx': {
    searchable: true,
    customTerms: ['Nginx web server', 'Nginx reverse proxy'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Vanta.js': {
    searchable: true,
    customTerms: ['Vanta.js 3D backgrounds', 'Vanta.js WebGL effects'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },
  'Three.js': {
    searchable: true,
    customTerms: ['Three.js 3D graphics', 'Three.js WebGL library'],
    searchType: SEARCH_TYPES.TECHNOLOGY
  },

  // === NON-SEARCHABLE ITEMS ===
  // Age is dynamically calculated and should not be searchable
  'v27.8': {
    searchable: false
  }
};

// Helper function to get search configuration for a given text with language support
export const getSearchConfigForText = (text, context, language = 'en') => {
  const cleanText = text.trim();

  // Check if exact match exists in configuration
  if (DEFAULT_SEARCH_CONFIG[cleanText]) {
    return DEFAULT_SEARCH_CONFIG[cleanText];
  }

  // Check for partial matches (case-insensitive)
  const lowerText = cleanText.toLowerCase();
  for (const [key, config] of Object.entries(DEFAULT_SEARCH_CONFIG)) {
    if (key.toLowerCase() === lowerText) {
      return config;
    }
  }

  // Generate dynamic configuration based on context, text analysis, and language
  return generateDynamicConfig(cleanText, context, language);
};

// Generate dynamic configuration for terms not in the default config
const generateDynamicConfig = (text, context, language = 'en') => {
  const lowerText = text.toLowerCase();

  // Age detection (non-searchable)
  if (/^🎂\s*v\d+\.\d+$/.test(text) || lowerText.includes('ans') || /\d+\s*ans/.test(lowerText)) {
    return { searchable: false };
  }

  // Language-aware term generation
  const generateLanguageAwareTerms = (baseText, type, lang) => {
    if (lang === 'fr') {
      switch (type) {
        case SEARCH_TYPES.TECHNOLOGY:
          return [`${baseText} technologie`, `${baseText} programmation`, `${baseText} développement`];
        case SEARCH_TYPES.LANGUAGE:
          return [`${baseText} langue`, `${baseText} apprentissage`];
        case SEARCH_TYPES.LOCATION:
          return [`${baseText} géographie`, `${baseText} ville`, `${baseText} lieu`];
        case SEARCH_TYPES.ACTIVITY:
          return [`${baseText} activité`, `${baseText} hobby`, `${baseText} loisir`];
        case SEARCH_TYPES.DESTINATION:
          return [`${baseText} voyage`, `${baseText} tourisme`, `${baseText} destination`];
        default:
          return [baseText];
      }
    } else {
      switch (type) {
        case SEARCH_TYPES.TECHNOLOGY:
          return [`${baseText} technology`, `${baseText} programming`, `${baseText} development`];
        case SEARCH_TYPES.LANGUAGE:
          return [`${baseText} language`, `${baseText} learning`];
        case SEARCH_TYPES.LOCATION:
          return [`${baseText} geography`, `${baseText} location`, `${baseText} place`];
        case SEARCH_TYPES.ACTIVITY:
          return [`${baseText} activity`, `${baseText} hobby`, `${baseText} interest`];
        case SEARCH_TYPES.DESTINATION:
          return [`${baseText} travel`, `${baseText} tourism`, `${baseText} destination`];
        default:
          return [baseText];
      }
    }
  };

  // Skills section - technology terms
  if (context?.section === 'skills') {
    return {
      searchable: true,
      customTerms: generateLanguageAwareTerms(text, SEARCH_TYPES.TECHNOLOGY, language),
      searchType: SEARCH_TYPES.TECHNOLOGY
    };
  }

  // Projects section - technology terms
  if (context?.section === 'projects') {
    return {
      searchable: true,
      customTerms: generateLanguageAwareTerms(text, SEARCH_TYPES.TECHNOLOGY, language),
      searchType: SEARCH_TYPES.TECHNOLOGY
    };
  }

  // About Me section
  if (context?.section === 'about') {
    // Language detection
    const languageKeywords = ['français', 'english', 'español', 'deutsch', 'italiano', '日本語', '中文', 'language', 'langue'];
    if (languageKeywords.some(keyword => lowerText.includes(keyword))) {
      return {
        searchable: true,
        customTerms: generateLanguageAwareTerms(text, SEARCH_TYPES.LANGUAGE, language),
        searchType: SEARCH_TYPES.LANGUAGE
      };
    }

    // Location detection
    const locationKeywords = ['france', 'paris', 'lyon', 'marseille', 'toulouse', 'bordeaux', 'lille', 'nantes', 'city', 'ville'];
    if (locationKeywords.some(keyword => lowerText.includes(keyword))) {
      return {
        searchable: true,
        customTerms: generateLanguageAwareTerms(text, SEARCH_TYPES.LOCATION, language),
        searchType: SEARCH_TYPES.LOCATION
      };
    }

    // Default for other profile info
    return {
      searchable: true,
      customTerms: [text],
      searchType: SEARCH_TYPES.PROFILE
    };
  }

  // Beyond Code section
  if (context?.section === 'beyond-code') {
    // Activity detection
    const activityKeywords = ['musculation', 'fitness', 'sport', 'lecture', 'gaming', 'jeux', 'apprentissage', 'hobby', 'activité'];
    if (activityKeywords.some(keyword => lowerText.includes(keyword))) {
      return {
        searchable: true,
        customTerms: generateLanguageAwareTerms(text, SEARCH_TYPES.ACTIVITY, language),
        searchType: SEARCH_TYPES.ACTIVITY
      };
    }

    // Travel destination detection
    const destinationKeywords = ['japon', 'corée', 'islande', 'norvège', 'canada', 'nouvelle-zélande', 'patagonie', 'voyage', 'destination'];
    if (destinationKeywords.some(keyword => lowerText.includes(keyword))) {
      return {
        searchable: true,
        customTerms: generateLanguageAwareTerms(text, SEARCH_TYPES.DESTINATION, language),
        searchType: SEARCH_TYPES.DESTINATION
      };
    }

    // Default for beyond code items
    return {
      searchable: true,
      customTerms: generateLanguageAwareTerms(text, SEARCH_TYPES.ACTIVITY, language),
      searchType: SEARCH_TYPES.ACTIVITY
    };
  }

  // Default configuration
  return {
    searchable: true,
    customTerms: [text],
    searchType: SEARCH_TYPES.GENERAL
  };
};

// Helper function to optimize search terms based on search type and language
export const optimizeSearchTerms = (terms, searchType, language = 'en') => {
  if (!Array.isArray(terms)) {
    terms = [terms];
  }

  // Language-aware optimization
  const optimizations = {
    fr: {
      [SEARCH_TYPES.TECHNOLOGY]: (term) => `${term} tutoriel guide`,
      [SEARCH_TYPES.LANGUAGE]: (term) => `${term} ressources apprentissage`,
      [SEARCH_TYPES.LOCATION]: (term) => `${term} informations géographie`,
      [SEARCH_TYPES.ACTIVITY]: (term) => `${term} comment commencer bienfaits`,
      [SEARCH_TYPES.DESTINATION]: (term) => `${term} guide voyage que voir`
    },
    en: {
      [SEARCH_TYPES.TECHNOLOGY]: (term) => `${term} tutorial guide`,
      [SEARCH_TYPES.LANGUAGE]: (term) => `${term} learning resources`,
      [SEARCH_TYPES.LOCATION]: (term) => `${term} information geography`,
      [SEARCH_TYPES.ACTIVITY]: (term) => `${term} how to start benefits`,
      [SEARCH_TYPES.DESTINATION]: (term) => `${term} travel guide what to see`
    }
  };

  const langOptimizations = optimizations[language] || optimizations.en;
  const optimizer = langOptimizations[searchType];

  if (optimizer) {
    return terms.map(optimizer);
  }

  return terms;
};

// Validate search configuration
export const validateSearchConfig = (config) => {
  if (!config || typeof config !== 'object') {
    return false;
  }

  // Check required properties
  if (typeof config.searchable !== 'boolean') {
    return false;
  }

  // If searchable, validate other properties
  if (config.searchable) {
    if (config.customTerms && !Array.isArray(config.customTerms)) {
      return false;
    }

    if (config.searchType && !Object.values(SEARCH_TYPES).includes(config.searchType)) {
      return false;
    }
  }

  return true;
};