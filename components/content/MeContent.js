// components/MeContent.js
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Download, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Pill from '@/components/Pill';
import { getAboutData, getValuesData } from '@/data/me';
import Section from '@/components/Section';



const MeContent = () => {
  const { t } = useLanguage();
  
  // Get dynamic about data with calculated age
  const aboutData = getAboutData(t);
  const valuesData = getValuesData(t);

  // Animation configuration for different animation types
  const hoverTransition = {
    duration: 0.2,
    ease: "easeOut"
  };

  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of children by 0.2s
      },
    },
  };

  // Variants for nested items with hover
  const nestedItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    }),
    hover: {
      x: 5,
      transition: hoverTransition,
    },
  };

  return (
    <motion.div
      className="w-full flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible" // Using animate instead of whileInView for immediate effect on card open
    >
      {/* --- SECTION 1: INTRODUCTION & AVATAR --- */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
        <motion.div
          className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            // --- CUSTOMIZE: Update with the path to your avatar ---
            src="/avatar.png" // Replace with your avatar image path
            alt="Mathis's Avatar"
            fill
            className="rounded-full object-cover shadow-lg"
            priority // Good for LCP if this card is opened first
          />
        </motion.div>
        <div className="text-black/90 text-center sm:text-left">
          <p className="text-xl sm:text-2xl mb-2 font-bold">
            {t('content.me.introduction.title')}
          </p>
          <p className="text-sm sm:text-base text-black/70">
            {t('content.me.introduction.subtitle')}
          </p>
        </div>
      </div>

      {/* --- SECTION 2: CORE VALUES --- */}
      <Section title={t('content.me.sections.coreValues')}>
        <div className="flex flex-col gap-4 sm:gap-6">
          {valuesData.map((value, index) => (
            <motion.div
              key={value.title}
              className="flex items-start gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
              variants={nestedItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={index}
            >
              <motion.div
                className="flex-shrink-0 mt-1"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {value.icon}
              </motion.div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-black">{value.title}</h4>
                <p className="text-sm sm:text-md text-black/70 mt-1">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- SECTION 3: PERSONAL INFO --- */}
      <Section title={t('content.me.sections.about')}>
        <div className="mb-4 sm:mb-6">
          <h4 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">{t('content.me.sections.profile')}</h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {aboutData.profile.map((item, index) => (
              <Pill key={index} color={item.color} searchable={!/^🎂\s*v\d+\.\d+$/.test(item.text)} searchContext={{ section: 'about', originalText: item.text, category: 'personal-info' }}>
                {item.text}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">{t('content.me.sections.languages')}</h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {aboutData.languages.map((language, index) => (
              <Pill key={index} color={language.color} flag={language.countryCode} searchContext={{ section: 'about', originalText: language.text, category: 'personal-info' }}>
                {language.text}
              </Pill>
            ))}
          </div>
        </div>
      </Section>

      {/* --- SECTION 4: CALLS TO ACTION --- */}
      <Section title={t('content.me.sections.connect')}>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            <Link
              // --- CUSTOMIZE: Link to your resume PDF ---
              href="https://drive.usercontent.google.com/download?id=1dXmO2WGj3kjiB9lwjSc6cpa_rcqGCj3D&export=download&authuser=0&confirm=t"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors duration-300 w-full min-h-[44px]"
            >
              <Download size={18} />
              {t('content.me.cta.resume')}
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            <Link
              // --- CUSTOMIZE: Link to your LinkedIn profile ---
              href="https://www.linkedin.com/in/mathis-genthon-9908102b6/"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 border border-black/30 text-black rounded-lg font-medium hover:bg-black/10 transition-colors duration-300 w-full min-h-[44px]"
            >
              <Linkedin size={18} />
              {t('content.me.cta.linkedin')}
            </Link>
          </motion.div>
        </div>
      </Section>
    </motion.div>
  );
};

export default MeContent;