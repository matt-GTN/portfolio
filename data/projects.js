
import Zenyth from '@/components/svg/Zenyth';
import Birds from '@/components/svg/Birds';

export const getProjectsData = (t) => [
  {
    title: t('content.projects.items.0.title'),
    category: t('content.projects.items.0.category'),
    description: t('content.projects.items.0.description'),
    technologies: ['Python', 'LangGraph', 'Streamlit', 'Groq', 'Docker', 'Pandas', 'Plotly', 'Scikit-learn'],
    imageSrc: '/avatar_stella.png',
    bgColor: 'bg-black/90',
    link: 'https://trystella.app',
    github: {
      username: 'matt-GTN',
      repository: 'stella'
    }
  },
  {
    title: t('content.projects.items.1.title'),
    category: t('content.projects.items.1.category'),
    description: t('content.projects.items.1.description'),
    technologies: ['LangGraph', 'FastAPI', 'Next.js', 'Docker', 'Groq', 'Python', 'Nginx'],
    imageSrc: <Zenyth />,
    bgColor: 'bg-black/90',
    link: 'https://tryzenyth.app',
    github: {
      username: 'matt-GTN',
      repository: 'zenyth'
    }
  },
  {
    title: t('content.projects.items.2.title'),
    category: t('content.projects.items.2.category'),
    description: t('content.projects.items.2.description'),
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Vanta.js', 'DaisyUI', 'Three.js'],
    imageSrc: <Birds />,
    bgColor: 'bg-black/90',
    link: '#',
    github: {
      username: 'matt-GTN',
      repository: 'portfolio'
    }
  },
];
