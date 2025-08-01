import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge"; // 1. Import the utility

// Accept className as a prop
function GlassmorphicCard({ className }) {
  // 2. Define your base classes separately (optional, but clean)
  const baseClasses = `card w-96 
                     bg-white/10 backdrop-blur-sm shadow-lg shadow-black/30
                     border border-white/20 text-black-500`;

  return (
    // 3. Use twMerge to combine the base classes and the prop
    <motion.div
      className={twMerge(baseClasses, className)} // <-- Use twMerge here
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* ... rest of the card content ... */}
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Glassmorphism Card</h2>
        <p>This card intelligently merges classes.</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </motion.div>
  );
}

export default GlassmorphicCard;