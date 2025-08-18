import { Code2, Database, Bot, ChartLine, NotebookPen } from 'lucide-react';

export const getSkillsData = (t) => [
  {
    category: Object.keys(t('content.skills.categories'))[0],
    icon: <ChartLine size={22} className="text-purple-600" />,
    pillColor: 'bg-purple-600 hover:bg-purple-700',
    skills: t('content.skills.categories')[Object.keys(t('content.skills.categories'))[0]],
  },
  {
    category: Object.keys(t('content.skills.categories'))[1],
    icon: <Bot size={22} className="text-orange-600" />,
    pillColor: 'bg-orange-600 hover:bg-orange-700',
    skills: t('content.skills.categories')[Object.keys(t('content.skills.categories'))[1]],
  },
  {
    category: Object.keys(t('content.skills.categories'))[2],
    icon: <Database size={22} className="text-yellow-600" />,
    pillColor: 'bg-yellow-600 hover:bg-yellow-700',
    skills: t('content.skills.categories')[Object.keys(t('content.skills.categories'))[2]],
  },
  {
    category: Object.keys(t('content.skills.categories'))[3],
    icon: <Code2 size={22} className="text-cyan-600" />,
    pillColor: 'bg-cyan-600 hover:bg-cyan-700',
    skills: t('content.skills.categories')[Object.keys(t('content.skills.categories'))[3]],
  },
  {
    category: Object.keys(t('content.skills.categories'))[4],
    icon: <NotebookPen size={22} className="text-green-600" />,
    pillColor: 'bg-green-600 hover:bg-green-700',
    skills: t('content.skills.categories')[Object.keys(t('content.skills.categories'))[4]],
  },
];
