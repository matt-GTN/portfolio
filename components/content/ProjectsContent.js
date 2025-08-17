// components/ProjectsContent.js
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

import Zenyth from '@/components/svg/Zenyth';
import Birds from '@/components/svg/Birds';
import GitHubButton from '@/components/GitHubButton';
import InteractivePill from '@/components/InteractivePill';
import { useLanguage } from '@/contexts/LanguageContext';

// A small component for the technology "pills" matching the skills section with search functionality
const TechPill = ({ children, searchable = true, searchTerms }) => {
  const hoverTransition = {
    duration: 0.2,
    ease: "easeOut"
  };

  return (
    <InteractivePill
      searchable={searchable}
      searchTerms={searchTerms}
      searchContext={{
        section: 'projects',
        originalText: children,
        category: 'technology'
      }}
    >
      <motion.div
        whileHover={{ scale: 1.03, y: -2 }}
        transition={hoverTransition}
        className="text-white text-xs px-2.5 py-1 badge badge-lg badge-neutral font-bold"
      >
        {children}
      </motion.div>
    </InteractivePill>
  );
};

// --- PROJECT DATA WITH STATIC ELEMENTS ---
const getProjectsData = (t) => [
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

const ProjectsContent = () => {
  const { t } = useLanguage();
  const projectsData = getProjectsData(t);

  // Animation configuration for different animation types
  const hoverTransition = {
    duration: 0.2,
    ease: "easeOut"
  };

  // Variants for project containers with hover
  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: (index + 1) * 0.1,
      },
    }),
    hover: {
      x: 5,
      transition: hoverTransition,
    },
  };

  return (
    <div className="w-full flex flex-col gap-12 -mt-4">
      {projectsData.map((project, index) => (
        <div key={`project-container-${index}`} className={index > 0 ? "mt-12" : ""}>
          <motion.div
            key={project.title}
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            custom={index}
          >
            {/* Project Card and Pills Container */}
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Project Card - Left Side */}
              <div className="flex-1 w-full">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={hoverTransition}
                    className={`relative w-full h-64 rounded-2xl p-6 flex flex-col justify-start text-white overflow-hidden shadow-xl cursor-pointer ${project.bgColor}`}
                  >
                    <div className="relative z-10">
                      <p className="font-light text-sm text-grey-900">{project.category}</p>
                      <h3 className="text-5xl font-bold tracking-tight text-black-100">{project.title}</h3>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-52 h-52">
                      {typeof project.imageSrc === 'string' ? (
                        <Image
                          src={project.imageSrc}
                          alt={project.title}
                          width={208}
                          height={208}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        project.imageSrc
                      )}
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* Technology Pills - Right Side */}
              <div className="flex flex-col gap-3 lg:w-48 flex-shrink-0">
                <h4 className="text-sm font-semibold text-black/60 uppercase tracking-wide">{t('content.projects.technologies')}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <TechPill key={tech}>{tech}</TechPill>
                  ))}
                </div>
              </div>
            </div>

            {/* Description and GitHub Button - Full Width */}
            <div className="mt-4 px-1">
              <div className="text-black/80 mb-4 leading-relaxed">
                {project.description.split('. ').map((sentence, idx) => (
                  <p key={idx} className={`${idx === 0 ? 'text-base font-bold mb-2' : 'text-sm mb-1'}`}>
                    {sentence}{idx < project.description.split('. ').length - 1 ? '.' : ''}
                  </p>
                ))}
              </div>

              <div className="flex justify-end">
                <GitHubButton
                  username={project.github.username}
                  repository={project.github.repository}
                  variant="inline"
                  className=""
                />
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsContent;