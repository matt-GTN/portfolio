// components/content/BeyondCodeContent.js
import { motion } from 'framer-motion';
import { Camera, Music, Gamepad2, Plane, Book, Coffee, Mountain, Palette } from 'lucide-react';

// Hobbies and interests data
const hobbiesData = [
  {
    icon: <Camera size={24} className="text-blue-500" />,
    title: "Photography",
    description: "Capturing moments and exploring composition through street and landscape photography. Always looking for the perfect light.",
    emoji: "📸"
  },
  {
    icon: <Music size={24} className="text-purple-500" />,
    title: "Music Discovery",
    description: "Constantly exploring new genres and artists. From electronic beats to indie rock, music fuels my creativity and coding sessions.",
    emoji: "🎵"
  },
  {
    icon: <Gamepad2 size={24} className="text-green-500" />,
    title: "Gaming",
    description: "Strategy games and indie titles are my favorites. I appreciate good game design and the problem-solving aspects of complex gameplay.",
    emoji: "🎮"
  },
  {
    icon: <Book size={24} className="text-amber-500" />,
    title: "Reading",
    description: "Sci-fi novels, tech blogs, and philosophy books. Reading broadens perspectives and often sparks new project ideas.",
    emoji: "📚"
  }
];

// Current interests/activities
const currentActivities = [
  { text: '🏃‍♂️ Running', color: 'bg-red-500 hover:bg-red-600' },
  { text: '☕ Coffee Enthusiast', color: 'bg-amber-600 hover:bg-amber-700' },
  { text: '🎨 Digital Art', color: 'bg-purple-600 hover:bg-purple-700' },
  { text: '🌱 Learning Japanese', color: 'bg-green-600 hover:bg-green-700' },
  { text: '🎧 Podcast Addict', color: 'bg-blue-600 hover:bg-blue-700' },
  { text: '🍳 Cooking Experiments', color: 'bg-orange-600 hover:bg-orange-700' }
];

// Travel wishlist
const travelWishlist = [
  { text: '🇯🇵 Japan', color: 'bg-pink-500 hover:bg-pink-600' },
  { text: '🇮🇸 Iceland', color: 'bg-cyan-500 hover:bg-cyan-600' },
  { text: '🇳🇿 New Zealand', color: 'bg-emerald-500 hover:bg-emerald-600' },
  { text: '🇨🇦 Canada', color: 'bg-red-500 hover:bg-red-600' }
];

// Activity pill component
const ActivityPill = ({ children, color = 'bg-gray-600 hover:bg-gray-700' }) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -2 }}
    className={`text-white text-sm font-normal px-3 py-1.5 rounded-full transition-colors duration-300 ${color}`}
  >
    {children}
  </motion.div>
);

const BeyondCodeContent = () => {
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

  return (
    <motion.div
      className="w-full flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* --- SECTION 1: INTRODUCTION --- */}
      <motion.div
        className="p-6 rounded-2xl bg-black/90 border border-white/10"
        variants={itemVariants}
      >
        <h3 className="text-3xl font-bold mb-4 text-white">Life Beyond the Screen 🌟</h3>
        <p className="text-white/70 mb-4">
          While I love crafting code and building AI solutions, I believe the best developers are well-rounded individuals. 
          Here's what keeps me inspired and balanced outside of work.
        </p>
        <p className="text-white/70">
          These experiences often translate into better problem-solving, creativity, and fresh perspectives in my technical work.
        </p>
      </motion.div>

      {/* --- SECTION 2: MAIN HOBBIES --- */}
      <motion.div
        className="p-6 rounded-2xl bg-black/90 border border-white/10"
        variants={itemVariants}
      >
        <h3 className="text-3xl font-bold mb-6 text-white">Passions & Hobbies</h3>
        <div className="flex flex-col gap-6">
          {hobbiesData.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
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
                {hobby.icon}
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-semibold text-white">{hobby.title}</h4>
                  <span className="text-xl">{hobby.emoji}</span>
                </div>
                <p className="text-md text-white/70">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- SECTION 3: CURRENT ACTIVITIES --- */}
      <motion.div
        className="p-6 rounded-2xl bg-black/90 border border-white/10"
        variants={itemVariants}
      >
        <h3 className="text-3xl font-bold mb-6 text-white">Currently Into</h3>
        <p className="text-white/70 mb-4">
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
        className="p-6 rounded-2xl bg-black/90 border border-white/10"
        variants={itemVariants}
      >
        <h3 className="text-3xl font-bold mb-6 text-white">Wanderlust 🗺️</h3>
        <p className="text-white/70 mb-4">
          I believe travel broadens the mind and provides fresh perspectives. Here are some places on my bucket list:
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {travelWishlist.map((destination, index) => (
            <ActivityPill key={index} color={destination.color}>
              {destination.text}
            </ActivityPill>
          ))}
        </div>
        <p className="text-white/60 text-sm">
          Each destination represents a different culture, landscape, or experience I'm eager to explore.
        </p>
      </motion.div>

      {/* --- SECTION 5: PHILOSOPHY --- */}
      <motion.div
        className="p-6 rounded-2xl bg-black/90 border border-white/10"
        variants={itemVariants}
      >
        <h3 className="text-3xl font-bold mb-4 text-white">Life Philosophy 💭</h3>
        <div className="space-y-4">
          <motion.div
            className="p-4 bg-white/5 rounded-lg border-l-4 border-blue-500"
            whileHover={{ x: 5 }}
          >
            <p className="text-white/80 italic">
              "The best code comes from developers who understand the world beyond their screens."
            </p>
          </motion.div>
          <motion.div
            className="p-4 bg-white/5 rounded-lg border-l-4 border-purple-500"
            whileHover={{ x: 5 }}
          >
            <p className="text-white/80 italic">
              "Curiosity in one area often sparks innovation in another."
            </p>
          </motion.div>
          <motion.div
            className="p-4 bg-white/5 rounded-lg border-l-4 border-green-500"
            whileHover={{ x: 5 }}
          >
            <p className="text-white/80 italic">
              "Balance isn't just about work-life separation; it's about letting different experiences enrich each other."
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BeyondCodeContent;