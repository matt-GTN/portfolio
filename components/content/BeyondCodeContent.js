// components/content/BeyondCodeContent.js
import { motion } from 'framer-motion';
import { Languages, Book, Dumbbell, Dices } from 'lucide-react';

// Hobbies and interests data
const hobbiesData = [
  {
    icon: <Dumbbell size={24} className="text-blue-500" />,
    title: "Sports",
    description: "Mens sana in corpore sano. I love to discover new sports and go to the gym everyday, it helps me feeling well and balanced.",
    emoji: ""
  },
  {
    icon: <Dices size={24} className="text-green-500" />,
    title: "Board games",
    description: "Abstract games and thematic titles are my favorites. As a former Game Designer, I appreciate good game design and the problem-solving aspects of complex gameplay.",
    emoji: ""
  },
  {
    icon: <Book size={24} className="text-amber-500" />,
    title: "Reading",
    description: "Fantasy novels, tech blogs, and philosophy books. Reading broadens perspectives and often sparks in me new project ideas.",
    emoji: ""
  },
  {
    icon: <Languages size={24} className="text-pink-500" />,
    title: "Languages",
    description: "I've always been passionated about discovering new cultures and ways to speak, as it unlocks new ways to think.",
    emoji: ""
  },
];

// Current interests/activities
const currentActivities = [
  { text: '🎾 Padel', color: 'bg-red-500 hover:bg-red-600' },
  { text: '🗡️ The Witcher', color: 'bg-amber-600 hover:bg-amber-700' },
  { text: '🐼 Panda Spin', color: 'bg-purple-600 hover:bg-purple-700' },
  { text: '🌱 Learning Darija', color: 'bg-green-600 hover:bg-green-700' },
  { text: '👻 Kiro Code', color: 'bg-blue-600 hover:bg-blue-700' },
  { text: '🍪 Pasticiotti', color: 'bg-orange-600 hover:bg-orange-700' }
];

// Travel wishlist
const travelWishlist = [
  { text: '🇯🇵 Japan', color: 'bg-pink-500 hover:bg-pink-600' },
  { text: '🇮🇸 Iceland', color: 'bg-cyan-500 hover:bg-cyan-600' },
  { text: '🇳🇿 New Zealand', color: 'bg-emerald-500 hover:bg-emerald-600' },
  { text: '🇨🇦 Canada', color: 'bg-red-500 hover:bg-red-600' }
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
        <h3 className="text-3xl font-bold mb-4 text-black">🚀 Life Beyond the Screen</h3>
        <p className="text-black/70 mb-4">
          While I love crafting code and building AI solutions, I believe the best developers are well-rounded individuals.
        </p>
      </motion.div>

      {/* --- SECTION 2: MAIN HOBBIES --- */}
      <motion.div
        className="p-6 rounded-2xl border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-3xl font-bold mb-6 text-black">Passions & Hobbies </h3>
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
        <h3 className="text-3xl font-bold mb-6 text-black">Currently Into</h3>
        <p className="text-black/70 mb-4">
          Things I'm actively pursuing or recently discovered:
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
        <h3 className="text-3xl font-bold mb-6 text-black">Wanderlust </h3>
        <p className="text-black/70 mb-4">
          I believe travel broadens the mind and provides fresh perspectives. Here are some places on my bucket list:
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
        <h3 className="text-3xl font-bold mb-6 text-black">🔥 Craziest achievement</h3>

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
              I embarked myself on a cross-country duo hitchhiking challenge from Nantes to Sevilla. While we didn't win, this experience built my resilience and taught me a lesson in learning from rejection and navigating challenges.
            </p>
            <p className="text-black/80 text-lg leading-relaxed font-medium">
              This was truly the craziest experience of my life!
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BeyondCodeContent;