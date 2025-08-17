// components/content/BeyondCodeContent.js
import { motion } from 'motion/react';
import { Languages, Book, Dumbbell, Dices } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Hobbies and interests data with icons
const getHobbiesData = (t) => [
  {
    icon: <Dumbbell size={24} className="text-blue-500" />,
    title: t('content.beyondCode.hobbies.items.0.title'),
    description: t('content.beyondCode.hobbies.items.0.description'),
    emoji: ""
  },
  {
    icon: <Dices size={24} className="text-green-500" />,
    title: t('content.beyondCode.hobbies.items.1.title'),
    description: t('content.beyondCode.hobbies.items.1.description'),
    emoji: ""
  },
  {
    icon: <Book size={24} className="text-amber-500" />,
    title: t('content.beyondCode.hobbies.items.2.title'),
    description: t('content.beyondCode.hobbies.items.2.description'),
    emoji: ""
  },
  {
    icon: <Languages size={24} className="text-pink-500" />,
    title: t('content.beyondCode.hobbies.items.3.title'),
    description: t('content.beyondCode.hobbies.items.3.description'),
    emoji: ""
  },
];

// Activity pill component
const ActivityPill = ({ children, color = 'bg-gray-600 hover:bg-gray-700' }) => {
  const hoverTransition = {
    duration: 0.2,
    ease: "easeOut"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      transition={hoverTransition}
      className={`text-white text-sm font-normal px-3 py-1.5 rounded-full transition-colors duration-300 ${color}`}
    >
      {children}
    </motion.div>
  );
};

const BeyondCodeContent = () => {
  const { t } = useLanguage();
  const hobbiesData = getHobbiesData(t);
  const currentActivities = t('content.beyondCode.currentActivities.items');
  const travelWishlist = t('content.beyondCode.travel.wishlist');

  // Animation configuration for different animation types
  const hoverTransition = {
    duration: 0.2,
    ease: "easeOut"
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      className="w-full flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* --- SECTION 1: INTRODUCTION --- */}
      <motion.div
        className="p-6 rounded-2xl border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-3xl font-bold mb-4 text-black">{t('content.beyondCode.introduction.title')}</h3>
        <p className="text-black/70 mb-4">
          {t('content.beyondCode.introduction.content')}
        </p>
      </motion.div>

      {/* --- SECTION 2: MAIN HOBBIES --- */}
      <motion.div
        className="p-6 rounded-2xl border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-3xl font-bold mb-6 text-black">{t('content.beyondCode.hobbies.title')}</h3>
        <div className="flex flex-col gap-6">
          {hobbiesData.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
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
                {hobby.icon}
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-semibold text-black">{hobby.title}</h4>
                  <span className="text-xl">{hobby.emoji}</span>
                </div>
                <p className="text-md text-black/70">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- SECTION 3: CURRENT ACTIVITIES --- */}
      <motion.div
        className="p-6 rounded-2xl border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-3xl font-bold mb-6 text-black">{t('content.beyondCode.currentActivities.title')}</h3>
        <p className="text-black/70 mb-4">
          {t('content.beyondCode.currentActivities.subtitle')}
        </p>
        <div className="flex flex-wrap gap-2">
          {currentActivities.map((activity, index) => (
            <ActivityPill key={index} color={activity.color}>
              {activity.text}
            </ActivityPill>
          ))}
        </div>
      </motion.div>

      {/* --- SECTION 4: TRAVEL & EXPLORATION --- */}
      <motion.div
        className="p-6 rounded-2xl border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-3xl font-bold mb-6 text-black">{t('content.beyondCode.travel.title')}</h3>
        <p className="text-black/70 mb-4">
          {t('content.beyondCode.travel.subtitle')}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {travelWishlist.map((destination, index) => (
            <ActivityPill key={index} color={destination.color}>
              {destination.text}
            </ActivityPill>
          ))}
        </div>
      </motion.div>

      {/* --- SECTION 5: ACHIEVEMENT --- */}
      <motion.div
        className="p-6 rounded-2xl border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-3xl font-bold mb-6 text-black">{t('content.beyondCode.achievement.title')}</h3>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Vertical Carousel on the left */}
            <motion.div
              whileHover={{scale:1.05}}
              className="carousel carousel-vertical rounded-xl p-3 h-80 w-64">
              <div className="carousel-item h-80">
                <img
                  src="/sevilla_1.jpg"
                  alt="Hitchhiking adventure to Sevilla - Photo 1"
                  className="w-full object-cover rounded-lg shadow-md" />
              </div>
              <div className="carousel-item h-80">
                <img
                  src="/sevilla_2.jpg"
                  alt="Hitchhiking adventure to Sevilla - Photo 2"
                  className="w-full object-cover rounded-lg shadow-md" />
              </div>
              <div className="carousel-item h-80">
                <img
                  src="/sevilla_3.jpg"
                  alt="Hitchhiking adventure to Sevilla - Photo 3"
                  className="w-full object-cover rounded-lg shadow-md" />
              </div>
            </motion.div>

          {/* Description on the right */}
          <div className="flex-1 space-y-4">
            <p className="text-black/80 text-lg leading-relaxed">
              {t('content.beyondCode.achievement.description1')}
            </p>
            <p className="text-black/80 text-lg leading-relaxed font-medium">
              {t('content.beyondCode.achievement.description2')}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BeyondCodeContent;