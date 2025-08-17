// components/SkillsContent.js
import Image from 'next/image';
import { motion } from 'motion/react';
import { Code2, Database, Bot, ChartLine, NotebookPen, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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

// Colored skill pill component
const SkillPill = ({ children, pillColor }) => {
  const hoverTransition = {
    duration: 0.2,
    ease: "easeOut"
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.03, y: -2 }}
      transition={hoverTransition}
      className={`text-white text-sm font-bold px-3 py-1.5 rounded-full transition-colors duration-300 ${pillColor}`}
    >
      {children}
    </motion.div>
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
      <div className="flex flex-col gap-y-8">
        {skillsData.map((section, index) => (
          <motion.div
            variants={skillSectionVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            custom={index}
            key={section.category}
            className="p-6 rounded-2xl border border-white/10"
          >
            <h3 className="flex items-center gap-3 text-xl font-bold mb-6 text-black">
              {section.icon}
              <span>{section.category}</span>
              <span className="text-sm font-normal text-black/60 ml-auto">
                {section.skills.length} skills
              </span>
            </h3>
            <div className="flex flex-wrap gap-2">
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