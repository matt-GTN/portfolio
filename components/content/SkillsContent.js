// components/SkillsContent.js
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSkillsData } from '@/data/skills';
import Pill from '@/components/Pill';

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
                <Pill key={skill} color={section.pillColor} searchContext={{ section: 'skills', originalText: skill, category: 'technology' }}>{skill}</Pill>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;