// components/content/BeyondCodeContent.js
import { motion } from 'motion/react';
import { Languages, Book, Dumbbell, Dices } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import InteractivePill from '@/components/InteractivePill';
import Flag from '../Flag';

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

// Activity pill component with search functionality
const ActivityPill = ({ children, color = 'bg-gray-600 hover:bg-gray-700', searchable = true, searchTerms, pillType = 'activity', flag }) => {
  const hoverTransition = {
    duration: 0.2,
    ease: "easeOut"
  };

  // Determine search context based on pill type
  const getSearchContext = () => {
    const textContent = typeof children === 'string' ? children : '';

    // Check if it's a travel destination
    const destinations = ['japon', 'corée', 'islande', 'norvège', 'canada', 'nouvelle-zélande', 'patagonie'];
    const isDestination = destinations.some(dest =>
      textContent.toLowerCase().includes(dest) || pillType === 'destination'
    );

    return {
      section: 'beyond-code',
      originalText: textContent,
      category: isDestination ? 'destination' : 'activity',
      searchType: isDestination ? 'destination' : 'activity'
    };
  };

  return (
    <InteractivePill
      searchable={searchable}
      searchTerms={searchTerms}
      searchContext={getSearchContext()}
    >
      <motion.div
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={hoverTransition}
        className={`text-white text-xs sm:text-sm font-normal px-2.5 sm:px-3 py-1.5 rounded-full transition-colors duration-300 min-h-[32px] flex items-center justify-center ${color}`}
      >
        {flag && <Flag countryCode={flag} className="mr-2" />}
        {children}
      </motion.div>
    </InteractivePill>
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
        className="p-4 sm:p-6 rounded-2xl border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-black">{t('content.beyondCode.introduction.title')}</h3>
        <p className="text-sm sm:text-base text-black/70 mb-3 sm:mb-4">
          {t('content.beyondCode.introduction.content')}
        </p>
      </motion.div>

      {/* --- SECTION 2: MAIN HOBBIES --- */}
      <motion.div
        className="p-4 sm:p-6 rounded-2xl border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">{t('content.beyondCode.hobbies.title')}</h3>
        <div className="flex flex-col gap-4 sm:gap-6">
          {hobbiesData.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
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
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <h4 className="text-base sm:text-lg font-semibold text-black">{hobby.title}</h4>
                  <span className="text-lg sm:text-xl">{hobby.emoji}</span>
                </div>
                <p className="text-sm sm:text-md text-black/70">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- SECTION 3: CURRENT ACTIVITIES --- */}
      <motion.div
        className="p-4 sm:p-6 rounded-2xl border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">{t('content.beyondCode.currentActivities.title')}</h3>
        <p className="text-sm sm:text-base text-black/70 mb-3 sm:mb-4">
          {t('content.beyondCode.currentActivities.subtitle')}
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {currentActivities.map((activity, index) => (
            <ActivityPill key={index} color={activity.color} pillType="activity">
              {activity.text}
            </ActivityPill>
          ))}
        </div>
      </motion.div>

      {/* --- SECTION 4: TRAVEL & EXPLORATION --- */}
      <motion.div
        className="p-4 sm:p-6 rounded-2xl border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">{t('content.beyondCode.travel.title')}</h3>
        <p className="text-sm sm:text-base text-black/70 mb-3 sm:mb-4">
          {t('content.beyondCode.travel.subtitle')}
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {travelWishlist.map((destination, index) => (
            <ActivityPill key={index} color={destination.color} pillType="destination" flag={destination.countryCode}>
              {destination.text}
            </ActivityPill>
          ))}
        </div>
      </motion.div>

      {/* --- SECTION 5: ACHIEVEMENT --- */}
      <motion.div
        className="p-4 sm:p-6 rounded-2xl border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">{t('content.beyondCode.achievement.title')}</h3>

        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row items-start">
          {/* Vertical Carousel - responsive sizing */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="carousel carousel-vertical rounded-xl p-2 sm:p-3 h-64 sm:h-80 w-full sm:w-64 mx-auto lg:mx-0">
            <div className="carousel-item h-64 sm:h-80">
              <img
                src="/sevilla_1.jpg"
                alt="Hitchhiking adventure to Sevilla - Photo 1"
                className="w-full object-cover rounded-lg shadow-md" />
            </div>
            <div className="carousel-item h-64 sm:h-80">
              <img
                src="/sevilla_2.jpg"
                alt="Hitchhiking adventure to Sevilla - Photo 2"
                className="w-full object-cover rounded-lg shadow-md" />
            </div>
            <div className="carousel-item h-64 sm:h-80">
              <img
                src="/sevilla_3.jpg"
                alt="Hitchhiking adventure to Sevilla - Photo 3"
                className="w-full object-cover rounded-lg shadow-md" />
            </div>
          </motion.div>

          {/* Description - responsive text */}
          <div className="flex-1 space-y-3 sm:space-y-4 w-full">
            <p className="text-black/80 text-sm sm:text-lg leading-relaxed">
              {t('content.beyondCode.achievement.description1')}
            </p>
            <p className="text-black/80 text-sm sm:text-lg leading-relaxed font-medium">
              {t('content.beyondCode.achievement.description2')}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BeyondCodeContent;