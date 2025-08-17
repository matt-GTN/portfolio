// components/SkillsContent.js
import Image from 'next/image';
import { motion } from 'motion/react';
import { Code2, Database, Bot, ChartLine, NotebookPen, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import InteractivePill from '@/components/InteractivePill';

// Data for the skills section with icons
const getSkillsData = (t) => [
  {
    category: Object.keys(t('content.skills.categories'))[0],
    icon: <ChartLine size={22} className="text-purple-600" />,
    pillColor: 'bg-purple-600 hover:bg-purple-700',
    skills: t('content.skills.categories')[Object.keys(t('content.skills.categories'))[0]],
  },
  {
    category: Object.keys(t('content.skills.categories'))[1],
    icon: <Bot size={22} className="text-orange-600" />,
    pillColor: 'bg-orange-600 hover:bg-orange-700',
    skills: t('content.skills.categories')[Object.keys(t('content.skills.categories'))[1]],
  },
  {
    category: Object.keys(t('content.skills.categories'))[2],
    icon: <Database size={22} className="text-yellow-600" />,
    pillColor: 'bg-yellow-600 hover:bg-yellow-700',
    skills: t('content.skills.categories')[Object.keys(t('content.skills.categories'))[2]],
  },
  {
    category: Object.keys(t('content.skills.categories'))[3],
    icon: <Code2 size={22} className="text-cyan-600" />,
    pillColor: 'bg-cyan-600 hover:bg-cyan-700',
    skills: t('content.skills.categories')[Object.keys(t('content.skills.categories'))[3]],
  },
  {
    category: Object.keys(t('content.skills.categories'))[4],
    icon: <NotebookPen size={22} className="text-green-600" />,
    pillColor: 'bg-green-600 hover:bg-green-700',
    skills: t('content.skills.categories')[Object.keys(t('content.skills.categories'))[4]],
  },
];

// Colored skill pill component with search functionality
const SkillPill = ({ children, pillColor, searchable = true, searchTerms }) => {
  const hoverTransition = {
    duration: 0.2,
    ease: "easeOut"
  };

  return (
    <InteractivePill
      searchable={searchable}
      searchTerms={searchTerms}
      searchContext={{
        section: 'skills',
        originalText: children,
        category: 'technology'
      }}
    >
      <motion.div 
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={hoverTransition}
        className={`text-white text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1.5 rounded-full transition-colors duration-300 min-h-[32px] flex items-center justify-center ${pillColor}`}
      >
        {children}
      </motion.div>
    </InteractivePill>
  );
};

// The main content component for the skills card
const SkillsContent = () => {
  const { t } = useLanguage();
  const skillsData = getSkillsData(t);

  // Animation configuration for different animation types
  const hoverTransition = {
    duration: 0.2,
    ease: "easeOut"
  };

  // Variants for skill sections with hover
  const skillSectionVariants = {
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
    <div className="w-full">

      {/* Skills Categories */}
      <div className="flex flex-col gap-y-6 sm:gap-y-8">
        {skillsData.map((section, index) => (
          <motion.div
            variants={skillSectionVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            custom={index}
            key={section.category}
            className="p-4 sm:p-6 rounded-2xl border border-white/10"
          >
            <h3 className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-black">
              <span className="flex-shrink-0">{section.icon}</span>
              <span className="flex-1 min-w-0 text-sm lg:text-xl">{section.category}</span>
              <span className="text-xs sm:text-sm font-normal text-black/60 flex-shrink-0">
                {section.skills.length} skills
              </span>
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {section.skills.map((skill) => (
                <SkillPill key={skill} pillColor={section.pillColor}>{skill}</SkillPill>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;