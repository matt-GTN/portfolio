import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

import GitHubButton from '@/components/GitHubButton';
import Pill from '@/components/Pill';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProjectsData } from '@/data/projects';

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
                    <Pill key={tech} color="badge-neutral" size="badge" searchContext={{ section: 'projects', originalText: tech, category: 'technology' }}>{tech}</Pill>
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