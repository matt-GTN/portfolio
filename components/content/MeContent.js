// components/MeContent.js
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Lightbulb, Code, Users, Download, Linkedin, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Function to calculate age with months as decimal
const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();

  // Adjust if we haven't reached the birth month this year
  if (months < 0) {
    years--;
    months += 12;
  }

  // Adjust if we haven't reached the birth day this month
  if (today.getDate() < birth.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  // Return format v27.8 where 8 represents the 8th month (0-11)
  return `v${years}.${months}`;
};

// Your birth date (25/12/1997)
const BIRTH_DATE = '1997-12-25';

// --- Core values with icons ---
const getValuesData = (t) => [
  {
    icon: <Users size={24} className="text-blue-500" />,
    title: t('content.me.values.0.title'),
    description: t('content.me.values.0.description'),
  },
  {
    icon: <Lightbulb size={24} className="text-violet-500" />,
    title: t('content.me.values.1.title'),
    description: t('content.me.values.1.description'),
  },
  {
    icon: <Code size={24} className="text-amber-500" />,
    title: t('content.me.values.2.title'),
    description: t('content.me.values.2.description'),
  },
];

// --- About data for pill layout with emojis and colors ---
const getAboutData = (t) => ({
  profile: [
    ...t('content.me.profile').map(item => ({
      text: item.text,
      color: item.color
    })),
    { text: `🎂 ${calculateAge(BIRTH_DATE)}`, color: 'bg-purple-600 hover:bg-purple-700' }
  ],
  languages: t('content.me.languages')
});

// Info pill component
const InfoPill = ({ children, color = 'bg-gray-600 hover:bg-gray-700' }) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -2 }}
    className={`text-white text-sm font-normal px-3 py-1.5 rounded-full transition-colors duration-300 ${color}`}
  >
    {children}
  </motion.div>
);

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
      <motion.div
        className="p-6 border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <div className="flex items-center gap-6">
          <motion.div
            className="relative w-24 h-24 flex-shrink-0"
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
          <div className="text-black/90">
            <p className="text-2xl mb-2 font-bold">
              {t('content.me.introduction.title')}
            </p>
            <p className="text-base text-black/70">
              {t('content.me.introduction.subtitle')}
            </p>
          </div>
        </div>
      </motion.div>

      {/* --- SECTION 2: CORE VALUES --- */}
      <motion.div
        className="p-6 rounded-2xl border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-3xl font-bold mb-6 text-black">{t('content.me.sections.coreValues')}</h3>
        <div className="flex flex-col gap-6">
          {valuesData.map((value, index) => (
            <motion.div
              key={value.title}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
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
                <h4 className="text-lg font-semibold text-black">{value.title}</h4>
                <p className="text-md text-black/70 mt-1">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- SECTION 3: PERSONAL INFO --- */}
      <motion.div
        className="p-6 border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-3xl font-bold mb-6 text-black">{t('content.me.sections.about')}</h3>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-black mb-3">{t('content.me.sections.profile')}</h4>
          <div className="flex flex-wrap gap-2">
            {aboutData.profile.map((item, index) => (
              <InfoPill key={index} color={item.color}>
                {item.text}
              </InfoPill>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-black mb-3">{t('content.me.sections.languages')}</h4>
          <div className="flex flex-wrap gap-2">
            {aboutData.languages.map((language, index) => (
              <InfoPill key={index} color={language.color}>
                {language.text}
              </InfoPill>
            ))}
          </div>
        </div>
      </motion.div>

      {/* --- SECTION 4: CALLS TO ACTION --- */}
      <motion.div
        className="p-6 border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-3xl font-bold mb-6 text-black">{t('content.me.sections.connect')}</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            <Link
              // --- CUSTOMIZE: Link to your resume PDF ---
              href="https://drive.usercontent.google.com/download?id=1dXmO2WGj3kjiB9lwjSc6cpa_rcqGCj3D&export=download&authuser=0&confirm=t"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors duration-300 w-full"
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-black/30 text-black rounded-lg font-medium hover:bg-black/10 transition-colors duration-300 w-full"
            >
              <Linkedin size={18} />
              {t('content.me.cta.linkedin')}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MeContent;