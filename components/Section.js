import { motion } from 'motion/react';

const Section = ({ title, children }) => {
  const hoverTransition = {
    duration: 0.2,
    ease: "easeOut"
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
      className="p-4 sm:p-6"
      variants={itemVariants}
      whileHover={{ x: 5 }}
      transition={hoverTransition}
    >
      <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black dark:text-white transition-colors duration-300">{title}</h3>
      {children}
    </motion.div>
  );
};

export default Section;
