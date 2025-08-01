// components/SkillsContent.js
import Image from 'next/image';
import { Code2, Database, Paintbrush } from 'lucide-react';

// Data for the skills section, mimicking the screenshot
const skillsData = [
  {
    category: 'Frontend Development',
    icon: <Code2 size={22} className="text-yellow-600" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'DaisyUI', 'Next.js', 'React', 'Streamlit', 'Motion'],
  },
  {
    category: 'Backend & Systems',
    icon: <Database size={22} className="text-yellow-600" />,
    skills: ['SQL', 'Unix', 'C++', 'Python', 'Git', 'GitHub', 'Docker', 'MLFlow', 'MongoDB', 'SQLAlchemy'],
  },
  {
    category: 'Design & Creative Tools',
    icon: <Paintbrush size={22} className="text-yellow-600" />,
    skills: ['Figma', 'Davinci Code', 'Illustrator', 'Canva', 'Keynote'],
  },
];

// A small component for the skill "pills" for a consistent look
const SkillPill = ({ children }) => (
  <div className="bg-gray-900 text-white text-sm font-normal px-3 py-1.5 rounded-lg shadow-sm">
    {children}
  </div>
);

// The main content component for the skills card
const SkillsContent = () => {
  return (
    <div className="w-full">

      {/* Skills Categories */}
      <div className="flex flex-col gap-y-6">
        {skillsData.map((section) => (
          <div key={section.category}>
            <h3 className="flex items-center gap-3 text-lg font-semibold mb-3 text-gray-800">
              {section.icon}
              <span>{section.category}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill) => (
                <SkillPill key={skill}>{skill}</SkillPill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;