import { Lightbulb, Code, Users } from 'lucide-react';
import { calculateAge } from '@/utils/helpers';

const BIRTH_DATE = '1997-12-25';

export const getValuesData = (t) => [
  {
    icon: <Users size={24} className="text-blue-500" />,
    title: t('content.me.values.0.title'),
    description: t('content.me.values.0.description'),
  },
  {
    icon: <Lightbulb size={24} className="text-violet-500" />,
    title: t('content.me.values.1.title'),
    description: t('content.me.values.1.description'),
  },
  {
    icon: <Code size={24} className="text-amber-500" />,
    title: t('content.me.values.2.title'),
    description: t('content.me.values.2.description'),
  },
];

export const getAboutData = (t) => ({
  profile: [
    ...t('content.me.profile').map(item => ({
      text: item.text,
      color: item.color
    })),
    { text: `🎂 ${calculateAge(BIRTH_DATE)}`, color: 'bg-purple-600 hover:bg-purple-700' }
  ],
  languages: t('content.me.languages')
});
