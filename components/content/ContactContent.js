// components/ContactContent.js
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check } from 'lucide-react';

// Contact information data
const contactData = {
  email: 'mathisgenthon@outlook.fr',
  phone: '+33629195741',
  location: 'Nantes, France',
  github: 'https://github.com/matt-GTN',
  linkedin: 'https://www.linkedin.com/in/mathis-genthon-9908102b6/'
};

// Contact methods with icons and colors
const contactMethods = [
  {
    icon: <Mail size={24} className="text-blue-500" />,
    title: "Email",
    value: contactData.email,
    href: `mailto:${contactData.email}`,
    color: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    icon: <Phone size={24} className="text-green-500" />,
    title: "Phone",
    value: contactData.phone,
    href: `tel:${contactData.phone}`,
    color: 'bg-green-600 hover:bg-green-700'
  },
  {
    icon: <MapPin size={24} className="text-red-500" />,
    title: "Location",
    value: contactData.location,
    href: null,
    color: 'bg-red-600 hover:bg-red-700'
  }
];

// Social links
const socialLinks = [
  {
    icon: <Github size={20} />,
    name: 'GitHub',
    href: contactData.github,
    color: 'bg-gray-700 hover:bg-gray-800'
  },
  {
    icon: <Linkedin size={20} />,
    name: 'LinkedIn',
    href: contactData.linkedin,
    color: 'bg-blue-600 hover:bg-blue-700'
  }
];

// Contact pill component
const ContactPill = ({ children, color, href, onClick, disabled = false }) => {
  const hoverTransition = {
    duration: 0.2,
    ease: "easeOut"
  };

  const Component = href ? Link : 'button';
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick, disabled };

  return (
    <motion.div
      whileHover={!disabled ? { scale: 1.03, y: -2 } : {}}
      transition={hoverTransition}
      className="inline-block"
    >
      <Component
        {...props}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 ${color} ${href || !disabled ? 'cursor-pointer' : 'cursor-default'} ${disabled ? 'opacity-75' : ''}`}
      >
        {children}
      </Component>
    </motion.div>
  );
};

const ContactContent = () => {
  // State for copy feedback
  const [copiedItems, setCopiedItems] = useState({});

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

  // Variants for social links
  const socialVariants = {
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
      scale: 1.05,
      y: -2,
      transition: hoverTransition,
    },
  };

  const copyToClipboard = async (text, itemKey) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItems(prev => ({ ...prev, [itemKey]: true }));

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedItems(prev => ({ ...prev, [itemKey]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <motion.div
      className="w-full flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="p-6 rounded-2xl bg-white/20 backdrop-blur-xs border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-3xl font-bold mb-4 text-black">Let's Work Together 👋</h3>
        <p className="text-black/70 mb-6">
          I'm always interested in new opportunities and exciting projects. Whether you have a question,
          want to collaborate, or just want to say hi, feel free to reach out!
        </p>
        <motion.div
          whileHover={{ scaleX: 1.05, y: -2, scaleY: 1.05 }}
          transition={hoverTransition}
          style={{ transformOrigin: 'left center' }}
        >
          <Link
            href={`mailto:${contactData.email}?subject=Let's work together!`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors duration-300"
          >
            <Send size={18} />
            Send Message
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="p-6 rounded-2xl bg-white/20 backdrop-blur-xs border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-3xl font-bold mb-6 text-black">Get In Touch</h3>
        <div className="flex flex-col gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
              variants={nestedItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={index}
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {method.icon}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-black">{method.title}</h4>
                  <p className="text-black/70 truncate">{method.value}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:flex-shrink-0">
                {method.href && (
                  <ContactPill color={method.color} href={method.href}>
                    <Send size={16} />
                    <span className="hidden sm:inline">Contact</span>
                  </ContactPill>
                )}
                <ContactPill
                  color={copiedItems[method.title] ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"}
                  onClick={() => copyToClipboard(method.value, method.title)}
                  disabled={copiedItems[method.title]}
                >
                  <motion.div
                    key={copiedItems[method.title] ? 'check' : 'copy'}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {copiedItems[method.title] ? <Check size={16} /> : <Copy size={16} />}
                  </motion.div>
                  {copiedItems[method.title] ? 'Copied!' : 'Copy'}
                </ContactPill>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- SECTION 2: SOCIAL LINKS --- */}
      <motion.div
        className="p-6 rounded-2xl bg-white/20 backdrop-blur-xs border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-3xl font-bold mb-6 text-black">Connect With Me</h3>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={index}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-white ${social.color}`}
              >
                {social.icon}
                {social.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
};

export default ContactContent;