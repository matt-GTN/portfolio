// components/ProjectsContent.js
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github } from 'lucide-react';
import Zenyth from '@/components/svg/Zenyth';
import Birds from '@/components/svg/Birds';
import GitHubButton from '@/components/GitHubButton';

// A small component for the technology "pills" matching the skills section
const TechPill = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -2 }}
    className="text-white text-xs px-2.5 py-1 badge badge-lg badge-neutral font-bold"
  >
    {children}
  </motion.div>
);

// --- EDIT YOUR PROJECTS HERE ---
const projectsData = [
  {
    title: 'Stella',
    category: 'Agentic Financial Assistant',
    description: 'Intelligent financial analyst agent powered by LangGraph and Streamlit. Features 12 specialized tools for stock analysis, risk assessment, and market research. Built as a Data Science capstone project to deliver new research on fundamental financial analysis to non-technical users.',
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
    title: 'Zenyth',
    category: 'AI-Powered YouTube Summarizer',
    description: 'AI-powered application that extracts, transcribes, summarizes and translates YouTube video content. Features multi-level summarization, multilingual translation, and real-time progress tracking with a modern web interface built on LangGraph workflow orchestration.',
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
    title: 'Portfolio',
    category: 'Interactive Developer Showcase',
    description: 'Modern personal portfolio featuring interactive 3D backgrounds with Vanta.js bird simulation, glassmorphic UI design, and smooth animations. Built with Next.js App Router, showcasing projects through modal-based navigation with typewriter effects and responsive design.',
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
  return (
    <div className="w-full flex flex-col gap-12 -mt-4">
      {projectsData.map((project, index) => (
        <div key={`project-container-${index}`}>
          {index > 0 && (
            <div className="flex items-center justify-center mb-12">
              <div className="flex-1 h-px bg-black"></div>
              <div className="px-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <div className="flex-1 h-px bg-black"></div>
            </div>
          )}
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            whileHover={{ x: 5 }}
          >
            {/* Project Card and Pills Container */}
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Project Card - Left Side */}
              <div className="flex-1">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
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
                <h4 className="text-sm font-semibold text-black/60 uppercase tracking-wide">Technologies</h4>
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