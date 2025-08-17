// components/ContactContent.js
import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Contact information data
const contactData = {
  email: 'mathisgenthon@outlook.fr',
  phone: '+33629195741',
  location: 'Nantes, France',
  github: 'https://github.com/matt-GTN',
  linkedin: 'https://www.linkedin.com/in/mathis-genthon-9908102b6/'
};

// Contact methods with icons and colors
const getContactMethods = (t) => [
  {
    icon: <Mail size={24} className="text-blue-500" />,
    title: t('content.contact.methods.0.label'),
    value: t('content.contact.methods.0.value'),
    href: `mailto:${t('content.contact.methods.0.value')}`,
    color: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    icon: <Phone size={24} className="text-green-500" />,
    title: t('content.contact.methods.3.label'),
    value: t('content.contact.methods.3.value'),
    href: `tel:${t('content.contact.methods.3.value')}`,
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
const getSocialLinks = (t) => [
  {
    icon: <Github size={20} />,
    name: t('content.contact.methods.2.label'),
    href: `https://github.com/${t('content.contact.methods.2.value')}`,
    color: 'bg-gray-700 hover:bg-gray-800'
  },
  {
    icon: <Linkedin size={20} />,
    name: t('content.contact.methods.1.label'),
    href: `https://www.linkedin.com/in/${t('content.contact.methods.1.value')}`,
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
      whileTap={!disabled ? { scale: 0.97 } : {}}
      transition={hoverTransition}
      className="inline-block w-full sm:w-auto"
    >
      <Component
        {...props}
        className={`inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full text-white text-xs sm:text-sm font-medium transition-all duration-300 w-full sm:w-auto min-h-[44px] ${color} ${href || !disabled ? 'cursor-pointer' : 'cursor-default'} ${disabled ? 'opacity-75' : ''}`}
      >
        {children}
      </Component>
    </motion.div>
    )
};

const ContactContent = () => {
  const { t } = useLanguage();
  const contactMethods = getContactMethods(t);
  const socialLinks = getSocialLinks(t);

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

  // Enhanced clipboard function with mobile fallbacks
  const copyToClipboard = async (text, itemKey) => {
    try {
      // Check if we're in a secure context (HTTPS or localhost)
      if (!navigator.clipboard || !window.isSecureContext) {
        // Fallback method for non-secure contexts or older browsers
        return fallbackCopyTextToClipboard(text, itemKey);
      }

      // Modern clipboard API
      await navigator.clipboard.writeText(text);
      setCopiedItems(prev => ({ ...prev, [itemKey]: true }));

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedItems(prev => ({ ...prev, [itemKey]: false }));
      }, 2000);

    } catch (err) {
      console.log('Modern clipboard failed, trying fallback:', err);
      // If modern API fails, try fallback
      fallbackCopyTextToClipboard(text, itemKey);
    }
  };

  // Fallback clipboard method for older browsers or non-secure contexts
  const fallbackCopyTextToClipboard = (text, itemKey) => {
    try {
      // Create a temporary textarea element
      const textArea = document.createElement('textarea');
      textArea.value = text;
      
      // Make it invisible but not display:none (some browsers won't copy if hidden)
      textArea.style.position = 'fixed';
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.width = '2em';
      textArea.style.height = '2em';
      textArea.style.padding = '0';
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';
      textArea.style.opacity = '0';
      textArea.style.zIndex = '-1';
      
      // For mobile devices, ensure it's focusable
      textArea.setAttribute('readonly', '');
      textArea.style.userSelect = 'text';
      
      document.body.appendChild(textArea);
      
      // Focus and select the text
      textArea.focus();
      textArea.select();
      textArea.setSelectionRange(0, 99999); // For mobile devices
      
      // Execute copy command
      const successful = document.execCommand('copy');
      
      // Clean up
      document.body.removeChild(textArea);
      
      if (successful) {
        setCopiedItems(prev => ({ ...prev, [itemKey]: true }));
        setTimeout(() => {
          setCopiedItems(prev => ({ ...prev, [itemKey]: false }));
        }, 2000);
      } else {
        throw new Error('Copy command failed');
      }
      
    } catch (err) {
      console.error('Fallback copy also failed:', err);
      // Show user feedback that copy failed
      alert(`Copy failed. Please manually copy: ${text}`);
    }
  };

  return (
    <motion.div
      className="w-full flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="p-4 sm:p-6 rounded-2xl border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-2xl sm:text-3xl text-xl font-bold mb-3 sm:mb-4 text-black">🔧 {t('content.contact.work_together')}</h3>
        <p className="text-md sm:text-base text-black/70 mb-4 sm:mb-6">
          {t('content.contact.subtitle')}
        </p>
        <motion.div
          whileHover={{ scaleX: 1.05, y: -2, scaleY: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={hoverTransition}
          style={{ transformOrigin: 'left center' }}
          className="w-full sm:w-auto"
        >
          <Link
            href={`mailto:${contactData.email}?subject=Let's work together!`}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors duration-300 w-full sm:w-auto min-h-[44px] btn"
          >
            <Send size={18} />
            {t('content.contact.message')}
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="p-4 sm:p-6 rounded-2xl border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">{t('content.contact.infos')}</h3>
        <div className="flex flex-col gap-4 sm:gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="flex flex-col sm:flex-row gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
              variants={nestedItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={index}
            >
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {method.icon}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-semibold text-black">{method.title}</h4>
                  <p className="text-sm sm:text-base text-black/70 break-all sm:truncate">{method.value}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                {method.href && (
                  <ContactPill color={method.color} href={method.href}>
                    <Send size={16} />
                    <span>{t('navigation.contact')}</span>
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
                  {copiedItems[method.title] ? t('content.contact.copySuccess') : 'Copy'}
                </ContactPill>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- SECTION 2: SOCIAL LINKS --- */}
      <motion.div
        className="p-4 sm:p-6 border border-white/10"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={hoverTransition}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">{t('content.me.sections.connect')}</h3>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              custom={index}
              className="w-full sm:w-auto"
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-white w-full sm:w-auto min-h-[44px] ${social.color}`}
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