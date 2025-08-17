import { Heading1 } from "lucide-react";

export const translations = {
  fr: {
    navigation: {
      me: "À propos de moi",
      projects: "Projets",
      skills: "Compétences",
      beyondCode: "Au-delà du Code",
      contact: "Contact"
    },
    homepage: {
      greeting: "Hey, je suis Mathis 👋, je suis un",
      roles: [
        "Data Scientist",
        "Team Player",
        "Dev IA Agentique",
        "Learning Enthusiast"
      ]
    },
    content: {
      me: {
        introduction: {
          title: "De la gestion d'humains à l'entraînement de machines 🦾",
          subtitle: "5 ans à transformer des idées créatives en code, j'apprends maintenant à l'IA à être plus intelligente que moi"
        },
        values: [
          {
            title: "Leadership & Collaboration",
            description: "5 ans d'expérience en collaboration créative, leadership de projet et travail en environnements IT. J'ai managé une équipe de 8 personnes et restructuré la culture d'entreprise pour réengager les employés."
          },
          {
            title: "Innovation & IA",
            description: "Spécialisé dans les technos agentiques : LangChain, LangGraph, APIs LLM. J'adore les solutions combinant IA et analyse de données !"
          },
          {
            title: "Expertise Technique",
            description: "Maîtrise complète de la stack Data Science : Python, Machine Learning, Data Viz mais aussi IA Agentique et développement web moderne."
          }
        ],
        profile: [
          { text: '📍 Nantes, France', color: 'bg-red-400 hover:bg-red-500' },
          { text: '🎓 Data Scientist', color: 'bg-green-600 hover:bg-green-700' },
          { text: '💼 5 ans d\'expérience', color: 'bg-orange-600 hover:bg-orange-700' },
          { text: '🚗 Permis de conduire', color: 'bg-blue-600 hover:bg-blue-700' }
        ],
        languages: [
          { text: '🇬🇧 Anglais - C2', color: 'bg-indigo-600 hover:bg-indigo-700' },
          { text: '🇮🇹 Italien - B2', color: 'bg-indigo-600 hover:bg-indigo-700' },
          { text: '🇫🇷 Français - Natif', color: 'bg-indigo-600 hover:bg-indigo-700' }
        ],
        sections: {
          coreValues: "Valeurs",
          about: "À Propos",
          profile: "Profil",
          languages: "Langues",
          connect: "Échangeons 👋"
        },
        cta: {
          resume: "Télécharger le CV",
          linkedin: "LinkedIn"
        }
      },
      projects: {
        title: "Mes Projets",
        technologies: "Technologies",
        items: [
          {
            title: 'Stella',
            category: 'Agent de Gestion de risques Financiers',
            description: 'Agent analyste financier intelligent alimenté par LangGraph et Streamlit. Dispose de 12 outils spécialisés pour l\'analyse d\'actions, l\'évaluation des risques et la recherche de marché. Construit comme projet de fin d\'études en Data Science pour apporter notre modèle d\'apprentissage surpervisé en analyse financière fondamentale (et plus) à des utilisateurs non techniques.'
          },
          {
            title: 'Zenyth',
            category: 'Webapp alimentée par IA',
            description: 'Application alimentée par IA qui extrait, transcrit, résume et traduit le contenu vidéo YouTube. Dispose de résumés multi-niveaux, de traduction multilingue et de suivi de progression en temps réel, construite sur l\'orchestration de workflow LangGraph.'
          },
          {
            title: 'Portfolio',
            category: 'Vitrine Interactive de Développeur',
            description: 'Portfolio avec simulation Vanta.js, design UI glassmorphique et animations fluides. Construit avec Next.js App Router, et présente des projets via une navigation avec un design responsive.'
          }
        ]
      },
      skills: {
        title: "Compétences & Expertise",
        categories: {
          "Data Science & Analyse": ['Pandas', 'Numpy', 'Jupyter', 'Plotly', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Keras', 'XGBoost', 'SciPy.stats', 'Statsmodels', 'SHAP', 'OpenCV', 'NLTK', 'Systèmes de recommandation', 'Imblearn', 'Prophet', 'TPOT'],
          "IA Agentique & Automation": ['LLMs', 'RAG', 'MCP', 'OpenRouter', 'Groq', 'LangChain', 'LangGraph', 'LangSmith', 'Context Engineering'],
          "Backend & Systèmes": ['SQL', 'Unix', 'C++', 'Python', 'Git', 'GitHub', 'Docker', 'FastAPI', 'Nginx', 'MLFlow', 'MongoDB', 'SQLAlchemy', 'IoT'],
          "Frontend & Prototypage": ['HTML', 'CSS', 'JavaScript', 'Next.js', 'React', 'Streamlit', 'Tailwind CSS', 'DaisyUI', 'Framer Motion'],
          "En cours d'apprentissage": ['AWS Cloud', 'PySpark', 'Unit Tests', 'Clustering', 'Reinforcement Learning', 'Beautiful Soup', 'NetworkX', 'TensorFlow', 'PyTorch', 'Vector Databases']
        }
      },
      beyondCode: {
        title: "Au-delà du Code",
        introduction: {
          title: "🚀 Et après le code ?",
          content: "Bien que j'adore coder et mettre en place des solutions IA, je pense que les meilleurs développeurs sont ceux qui savent se passionner, au delà des écrans, aussi fort qu'ils codent."
        },
        hobbies: {
          title: "Passions & Loisirs",
          items: [
            {
              title: "Sports",
              description: "Mens sana in corpore sano. Que ce soit ma session quotidienne à la salle ou un nouveau sport à découvrir, j'adore de bouger arpès une journée de travail."
            },
            {
              title: "Jeux de société",
              description: "Jeux abstraits et titres thématiques, c'est mon truc. Mon passé de Game Designer m'a rendu accro aux mécaniques bien faîtes et aux défis qui font réfléchir."
            },
            {
              title: "Lecture",
              description: "Fantasy, articles tech et bouquins de philo, ma pile de lecture est éclectique. - Et c'est souvent dans ce mix que naissent les meilleurs projets."
            },
            {
              title: "Langues",
              description: "Nouvelles cultures, nouvelles langues - j'adore explorer. Une nouvelle façon de parler, c'est une nouvelle façon de penser."
            }
          ]
        },
        currentActivities: {
          title: "Mes dernières trouvailles",
          subtitle: "Des choses que je poursuis activement ou que j'ai récemment découvertes :",
          items: [
            { text: '🎾 Padel', color: 'bg-red-500 hover:bg-red-600' },
            { text: '📚 The Witcher', color: 'bg-amber-600 hover:bg-amber-700' },
            { text: '🐼 Panda Spin', color: 'bg-purple-600 hover:bg-purple-700' },
            { text: '🌱 Apprendre le Darija', color: 'bg-green-600 hover:bg-green-700' },
            { text: '👻 Kiro Code', color: 'bg-blue-600 hover:bg-blue-700' },
            { text: '🍪 Pasticiotto pistacchio', color: 'bg-orange-600 hover:bg-orange-700' }
          ]
        },
        travel: {
          title: "Voyages",
          subtitle: "Des endroits qui me donnent envie de faire mes valises :",
          wishlist: [
            { text: '🇯🇵 Japon', color: 'bg-pink-500 hover:bg-pink-600' },
            { text: '🇮🇸 Islande', color: 'bg-cyan-500 hover:bg-cyan-600' },
            { text: '🇳🇿 Nouvelle-Zélande', color: 'bg-emerald-500 hover:bg-emerald-600' },
            { text: '🇨🇦 Canada', color: 'bg-red-500 hover:bg-red-600' }
          ]
        },
        achievement: {
          title: "🔥 Expérience la plus folle",
          description1: "Je me suis lancé dans un défi d'auto-stop en duo à travers le pays de Nantes à Séville. Mission inachevée, mais une leçon masterclass en résilience et prise de décision sous pression.",
          description2: "C'était une aventure inoubliable !"
        }
      },
      contact: {
        title: "Contact",
        work_together: "Travaillons ensemble",
        infos: "Infos de contact",
        message: "Envoyer un message",
        subtitle: "Toujours partant pour de nouveaux projets et opportunités intéressantes. Une question, une collab ou juste envie de discuter tech ? Écrivez-moi !",
        methods: [
          {
            label: "Email",
            value: "mathisgenthon@outlook.fr",
            type: "email"
          },
          {
            label: "LinkedIn",
            value: "mathis-genthon-9908102b6",
            type: "linkedin"
          },
          {
            label: "GitHub",
            value: "matt-GTN",
            type: "github"
          },
          {
            label: "Téléphone",
            value: "+33 6 29 19 57 41",
            type: "phone"
          }
        ],
        copySuccess: "Copié dans le presse-papiers !",
        copyError: "Erreur lors de la copie"
      }
    },
    common: {
      loading: "Chargement...",
      error: "Une erreur s'est produite",
      close: "Fermer",
      cta: "Travaillons ensemble !",
      work_together: "Travaillons ensemble",
      contact: "Infos de contact"
    }
  },
  en: {
    navigation: {
      me: "About me",
      projects: "Projects",
      skills: "Skills",
      beyondCode: "Beyond Code",
      contact: "Contact"
    },
    homepage: {
      greeting: "Hey, I'm Mathis 👋, I'm a",
      roles: [
        "Data Scientist",
        "Team Player",
        "Agentic AI Dev",
        "Learning Enthusiast"
      ]
    },
    content: {
      me: {
        introduction: {
          title: "From managing humans to training machines 🦾",
          subtitle: "5 years turning creative ideas into code, now teaching AI to be smarter than me"
        },
        values: [
          {
            title: "Leadership & Collaboration",
            description: "5 years of creative collaboration, project leadership, and IT environments. I've managed a team of 8 people and restructured company culture to re-engage employees."
          },
          {
            title: "Innovation & AI",
            description: "Specialized in agentic technologies: LangChain, LangGraph, LLM APIs. I love solutions combining AI and data analysis!"
          },
          {
            title: "Technical Expertise",
            description: "Complete mastery of the Data Science stack: Python, Machine Learning, Data Viz, plus Agentic AI and modern web development."
          }
        ],
        profile: [
          { text: '📍 Nantes, France', color: 'bg-red-400 hover:bg-red-500' },
          { text: '🎓 Data Scientist', color: 'bg-green-600 hover:bg-green-700' },
          { text: '💼 5 years experience', color: 'bg-orange-600 hover:bg-orange-700' },
          { text: '🚗 Driving License', color: 'bg-blue-600 hover:bg-blue-700' }
        ],
        languages: [
          { text: '🇬🇧 English - C2', color: 'bg-indigo-600 hover:bg-indigo-700' },
          { text: '🇮🇹 Italian - B2', color: 'bg-indigo-600 hover:bg-indigo-700' },
          { text: '🇫🇷 French - Native', color: 'bg-indigo-600 hover:bg-indigo-700' }
        ],
        sections: {
          coreValues: "Core Values",
          about: "About",
          profile: "Profile",
          languages: "Languages",
          connect: "Let's Connect 👋"
        },
        cta: {
          resume: "Download Resume",
          linkedin: "LinkedIn"
        }
      },
      projects: {
        title: "My Projects",
        technologies: "Technologies",
        items: [
          {
            title: 'Stella',
            category: 'Agentic Financial Assistant',
            description: 'Intelligent financial analyst agent powered by LangGraph and Streamlit. Features 12 specialized tools for stock analysis, risk assessment, and market research. Built as a Data Science capstone project to bring our supervised learning model of fundamental financial analysis to non-technical users.'
          },
          {
            title: 'Zenyth',
            category: 'AI-Powered Webapp',
            description: 'AI-powered application that extracts, transcribes, summarizes and translates YouTube video content. Features multi-level summaries, multilingual translation, and real-time progress tracking, built on LangGraph workflow orchestration.'
          },
          {
            title: 'Portfolio',
            category: 'Interactive Developer Showcase',
            description: 'Portfolio with backgrounds using Vanta.js simulation, glassmorphic UI design, and smooth animations. Built with Next.js App Router, showcasing projects through navigation with responsive design.'
          }
        ]
      },
      skills: {
        title: "Skills & Expertise",
        categories: {
          "Data Science & Analytics": ['Pandas', 'Numpy', 'Jupyter', 'Plotly', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Keras', 'XGBoost', 'SciPy.stats', 'Statsmodels', 'SHAP', 'OpenCV', 'NLTK', 'Recommender Systems', 'Imblearn', 'Prophet', 'TPOT'],
          "Agentic AI & Automation": ['LLMs', 'RAG', 'MCP', 'OpenRouter', 'Groq', 'LangChain', 'LangGraph', 'LangSmith', 'Context Engineering'],
          "Backend & Systems": ['SQL', 'Unix', 'C++', 'Python', 'Git', 'GitHub', 'Docker', 'FastAPI', 'Nginx', 'MLFlow', 'MongoDB', 'SQLAlchemy', 'IoT'],
          "Frontend & Prototyping": ['HTML', 'CSS', 'JavaScript', 'Next.js', 'React', 'Streamlit', 'Tailwind CSS', 'DaisyUI', 'Framer Motion'],
          "Currently Learning": ['AWS Cloud', 'PySpark', 'Unit Tests', 'Clustering', 'Reinforcement Learning', 'Beautiful Soup', 'NetworkX', 'TensorFlow', 'PyTorch', 'Vector Databases']
        }
      },
      beyondCode: {
        title: "Beyond Code",
        introduction: {
          title: "🚀 Life Beyond the Screen",
          content: "While I love crafting code and building AI solutions, I believe the best developers are well-rounded individuals."
        },
        hobbies: {
          title: "Passions & Hobbies",
          items: [
            {
              title: "Sports",
              description: "Mens sana in corpore sano. Whether it's my daily gym session or discovering a new sport, I love moving after a coding day."
            },
            {
              title: "Board games",
              description: "Abstract games and thematic titles, that's my thing. My Game Designer background made me addicted to well-crafted mechanics and challenges that make you think."
            },
            {
              title: "Reading",
              description: "Fantasy, tech articles and philosophy books, my reading pile is all over the place. And it's often in this mix that the best projects are born."
            },
            {
              title: "Languages",
              description: "New cultures, new languages - I love exploring. A new way to speak is a new way to think."
            }
          ]
        },
        currentActivities: {
          title: "Currently Into",
          subtitle: "Things I'm actively pursuing or recently discovered:",
          items: [
            { text: '🎾 Padel', color: 'bg-red-500 hover:bg-red-600' },
            { text: '📚 The Witcher', color: 'bg-amber-600 hover:bg-amber-700' },
            { text: '🐼 Panda Spin', color: 'bg-purple-600 hover:bg-purple-700' },
            { text: '🌱 Learning Darija', color: 'bg-green-600 hover:bg-green-700' },
            { text: '👻 Kiro Code', color: 'bg-blue-600 hover:bg-blue-700' },
            { text: '🍪 Pasticiotto pistacchio', color: 'bg-orange-600 hover:bg-orange-700' }
          ]
        },
        travel: {
          title: "Travel",
          subtitle: "Places that make me want to pack my bags:",
          wishlist: [
            { text: '🇯🇵 Japan', color: 'bg-pink-500 hover:bg-pink-600' },
            { text: '🇮🇸 Iceland', color: 'bg-cyan-500 hover:bg-cyan-600' },
            { text: '🇳🇿 New Zealand', color: 'bg-emerald-500 hover:bg-emerald-600' },
            { text: '🇨🇦 Canada', color: 'bg-red-500 hover:bg-red-600' }
          ]
        },
        achievement: {
          title: "🔥 Craziest experience",
          description1: "I embarked on a duo hitchhiking challenge across the country from Nantes to Sevilla. Mission unfinished, but a masterclass lesson in resilience and under pressure decision-making.",
          description2: "This was truly the craziest experience of my life!"
        }
      },
      contact: {
        title: "Contact",
        work_together: "Let's Work Together",
        infos: "Get in Touch",
        message: "Send Message",
        subtitle: "I'm always interested in new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!",
        methods: [
          {
            label: "Email",
            value: "mathisgenthon@outlook.fr",
            type: "email"
          },
          {
            label: "LinkedIn",
            value: "mathis-genthon-9908102b6",
            type: "linkedin"
          },
          {
            label: "GitHub",
            value: "matt-GTN",
            type: "github"
          },
          {
            label: "Phone",
            value: "+33 6 29 19 57 41",
            type: "phone"
          }
        ],
        copySuccess: "Copied to clipboard!",
        copyError: "Copy failed"
      }
    },
    common: {
      loading: "Loading...",
      error: "An error occurred",
      close: "Close",
      cta: "Let's Work Together !",
    }
  }
};