// components/ProjectsContent.js
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link'; // 1. Import the Link component

// A generic SVG data URL to use as a placeholder.
const placeholderSvg = `data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%23374151'/%3E%3Ctext x='50' y='55' font-family='sans-serif' font-size='12' fill='white' text-anchor='middle'%3EImage%3C/text%3E%3C/svg%3E`;

// --- EDIT YOUR PROJECTS HERE ---
const projectsData = [
  {
    title: 'Project Title',
    category: 'Project Category',
    description: 'This is a generic description for the project. Here you can talk about the project\'s goals, the technology stack used, and what you learned.',
    imageSrc: placeholderSvg,
    bgColor: 'bg-zinc-900',
    link: 'https://github.com', // 2. Add a 'link' property to each project
  },
  {
    title: 'Another Title',
    category: 'Another Category',
    description: 'Customize this description for your second project. Explain the challenges and the outcomes.',
    imageSrc: placeholderSvg,
    bgColor: 'bg-slate-800',
    link: 'https://react.dev', // Example link
  },
  {
    title: 'Third Title',
    category: 'Third Category',
    description: 'This is the perfect spot to describe your third masterpiece. Mention key features and your role.',
    imageSrc: placeholderSvg,
    bgColor: 'bg-neutral-900',
    link: '#', // Placeholder link
  },
];

const ProjectsContent = () => {
  return (
    <div className="w-full flex flex-col gap-12 -mt-4">
      {projectsData.map((project, index) => (
        // 3. Wrap the entire project block in a Link component.
        // The 'key' now goes on the top-level Link element.
        <Link
          key={project.title}
          href={project.link}
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security best practice for new tabs
          className="block" // Makes the link behave like a div
        >
          <motion.div
            // 4. Add hover animations and a pointer cursor
            className="cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
          >
            <motion.div             
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
              className={`relative w-full h-64 rounded-2xl p-6 flex flex-col justify-start text-white overflow-hidden shadow-xl ${project.bgColor}`}
            >
              <div className="relative z-10">
                <p className="font-light text-sm text-gray-300">{project.category}</p>
                <h3 className="text-5xl font-bold tracking-tight">{project.title}</h3>
              </div>
              <div className="absolute -bottom-12 -right-12 w-52 h-52 opacity-30">
                <Image
                  src={project.imageSrc}
                  alt={`Image for ${project.title}`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
            <p className="mt-4 text-base text-black/80 px-1">
              {project.description}
            </p>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsContent;