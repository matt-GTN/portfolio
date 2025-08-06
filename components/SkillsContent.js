// components/SkillsContent.js
import Image from 'next/image';
import { motion } from 'motion/react';
import { Code2, Database, Bot, ChartLine, NotebookPen } from 'lucide-react';

// Data for the skills section, mimicking the screenshot
const skillsData = [
  {
    category: 'Data Science & Analytics',
    icon: <ChartLine size={22} className="text-purple-600" />,
    skills: ['Pandas', 'Numpy', 'Jupyer', 'Plotly', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Keras', 'XGBoost', 'SciPy.stats', 'Statsmodels', 'sHAP', 'OpenCV', 'NLTK', 'Recommender Systems', 'Imblearn', 'Prophet', 'TPOT'],
  },
  {
    category: 'Agentic AI & Automation',
    icon: <Bot size={22} className="text-orange-600" />,
    skills: ['LLMs', 'RAG', 'MCP', 'OpenRouter', 'Groq', 'LangChain', 'LangGraph', 'LangSmith', 'Prompt Engineering'],
  },
  {
    category: 'Backend & Systems',
    icon: <Database size={22} className="text-yellow-600" />,
    skills: ['SQL', 'Unix', 'C++', 'Python', 'Git', 'GitHub', 'Docker', 'FastAPI', 'Nginx', 'MLFlow', 'MongoDB', 'SQLAlchemy', 'IoT'],
  },
  {
    category: 'Frontend & Prototyping',
    icon: <Code2 size={22} className="text-cyan-600" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'Next.js', 'React', 'Streamlit', 'Tailwind CSS', 'DaisyUI', 'Motion'],
  },
  {
    category: 'And currently learning...',
    icon: <NotebookPen size={22} className="text-green-600" />,
    skills: ['AWS Cloud', 'PySpark', 'Unit Tests', 'Clustering', 'Reinforcement Learning', 'Beautiful Soup', 'NetworkX', 'TensorFlow', 'PyTorch', 'Vector Databases'],
  },
];

// A small component for the skill "pills" for a consistent look
const SkillPill = ({ children }) => (
  <motion.div whileHover={{ scale: 1.03, y: -5 }} className="text-white text-sm font-normal px-3 py-1.5 badge badge-xl badge-neutral">
    {children}
  </motion.div>
);

// The main content component for the skills card
const SkillsContent = () => {
  return (
    <div className="w-full">

      {/* Skills Categories */}
      <div
      className="flex flex-col gap-y-6">
        {skillsData.map((section, index) => (
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
          className= "mb-6" key={section.category}
          >
            <h3 className="flex items-center gap-3 text-lg font-semibold mb-3 text-gray-800">
              {section.icon}
              <span>{section.category}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill) => (
                <SkillPill key={skill}>{skill}</SkillPill>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;