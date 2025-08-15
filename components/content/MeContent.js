// components/MeContent.js
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Lightbulb, Code, Users, Download, Linkedin, User } from 'lucide-react';

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

// --- Core values based on CV information ---
const valuesData = [
  {
    icon: <Users size={24} className="text-blue-500" />,
    title: "Leadership & Collaboration",
    description: "5 years of experience in team management and project leadership, and working in IT environnements. I've managed a team of 8 people and restructured company culture to re-engage employees.",
  },
  {
    icon: <Lightbulb size={24} className="text-violet-500" />,
    title: "Innovation & AI",
    description: "Specialized in emerging technologies: LangChain, LangGraph, LLM APIs. I design innovative solutions combining AI and data analysis.",
  },
  {
    icon: <Code size={24} className="text-amber-500" />,
    title: "Technical Expertise",
    description: "Complete mastery of the Data Science stack: Python, Machine Learning, Data Viz, Agentic AI and modern web development (Next.js, FastAPI).",
  },
];

// --- About data for pill layout with emojis and colors ---
const getAboutData = () => ({
  profile: [
    { text: '📍 Nantes, France', color: 'bg-red-400 hover:bg-red-500' },
    { text: `🎂 ${calculateAge(BIRTH_DATE)}`, color: 'bg-purple-600 hover:bg-purple-700' },
    { text: '🎓 Data Scientist', color: 'bg-green-600 hover:bg-green-700' },
    { text: '💼 5 years experience', color: 'bg-orange-600 hover:bg-orange-700' },
    { text: '🚗 Driving License', color: 'bg-blue-600 hover:bg-blue-700' }
  ],
  languages: [
    { text: '🇬🇧 English - C2', color: 'bg-indigo-600 hover:bg-indigo-700' },
    { text: '🇮🇹 Italian - B2', color: 'bg-indigo-600 hover:bg-indigo-700' },
    { text: '🇫🇷 French - Native', color: 'bg-indigo-600 hover:bg-indigo-700' }
  ]
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
  // Get dynamic about data with calculated age
  const aboutData = getAboutData();

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

  return (
    <motion.div
      className="w-full flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible" // Using animate instead of whileInView for immediate effect on card open
    >
      {/* --- SECTION 1: INTRODUCTION & AVATAR --- */}
      <motion.div
        className="p-6 rounded-2xl bg-black/90 border border-white/10"
        variants={itemVariants}
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
          <div className="text-white/90">
            <p className="text-2xl mb-2 font-bold">
              From managing humans to training machines 🦾
            </p>
            <p className="text-base text-white/70">
              5 years turning creative ideas into code, I'm now teaching AI to be smarter than me
            </p>
          </div>
        </div>
      </motion.div>

      {/* --- SECTION 2: CORE VALUES --- */}
      <motion.div
        className="p-6 rounded-2xl bg-black/90 border border-white/10"
        variants={itemVariants}
      >
        <h3 className="text-3xl font-bold mb-6 text-white">Core Values</h3>
        <div className="flex flex-col gap-6">
          {valuesData.map((value, index) => (
            <motion.div
              key={value.title}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="flex-shrink-0 mt-1"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {value.icon}
              </motion.div>
              <div>
                <h4 className="text-lg font-semibold text-white">{value.title}</h4>
                <p className="text-md text-white/70 mt-1">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- SECTION 3: PERSONAL INFO --- */}
      <motion.div
        className="p-6 rounded-2xl bg-black/90 border border-white/10"
        variants={itemVariants}
      >
        <h3 className="text-3xl font-bold mb-6 text-white">About</h3>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Profile</h4>
          <div className="flex flex-wrap gap-2">
            {aboutData.profile.map((item, index) => (
              <InfoPill key={index} color={item.color}>
                {item.text}
              </InfoPill>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Languages</h4>
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
        className="p-6 rounded-2xl bg-black/90 border border-white/10"
        variants={itemVariants}
      >
        <h3 className="text-3xl font-bold mb-6 text-white">Let's Connect</h3>
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors duration-300 w-full"
            >
              <Download size={18} />
              Download Resume
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors duration-300 w-full"
            >
              <Linkedin size={18} />
              LinkedIn
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MeContent;