// components/DaisyUIDemo.js
"use client";

import { useTheme } from '@/contexts/ThemeContext';

const DaisyUIDemo = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-6 space-y-4">
      <h3 className="text-lg font-semibold">DaisyUI Integration Demo</h3>
      
      {/* Color showcase */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-primary text-primary-content p-4 rounded-lg text-center">
          <p className="text-sm font-medium">Primary</p>
        </div>
        <div className="bg-secondary text-secondary-content p-4 rounded-lg text-center">
          <p className="text-sm font-medium">Secondary</p>
        </div>
        <div className="bg-accent text-accent-content p-4 rounded-lg text-center">
          <p className="text-sm font-medium">Accent</p>
        </div>
        <div className="bg-neutral text-neutral-content p-4 rounded-lg text-center">
          <p className="text-sm font-medium">Neutral</p>
        </div>
      </div>

      {/* Button showcase */}
      <div className="flex flex-wrap gap-2">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-outline">Outline</button>
      </div>

      {/* Badge showcase */}
      <div className="flex flex-wrap gap-2">
        <div className="badge badge-primary">Primary</div>
        <div className="badge badge-secondary">Secondary</div>
        <div className="badge badge-accent">Accent</div>
        <div className="badge badge-neutral">Neutral</div>
        <div className="badge badge-ghost">Ghost</div>
        <div className="badge badge-outline">Outline</div>
      </div>

      {/* Alert showcase */}
      <div className="space-y-2">
        <div className="alert alert-info">
          <span>Current theme: {theme}</span>
        </div>
        <div className="alert alert-success">
          <span>DaisyUI themes are working! Toggle to see changes.</span>
        </div>
      </div>

      {/* Theme toggle button */}
      <button 
        onClick={toggleTheme}
        className="btn btn-outline btn-wide"
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default DaisyUIDemo;
