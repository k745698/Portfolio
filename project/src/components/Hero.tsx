import React from 'react';
import { Brain } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`${isDark ? 'bg-gradient-to-br from-black to-gray-900 text-white' : 'bg-gradient-to-br from-white to-gray-100 text-gray-900'} min-h-screen flex items-center`}>
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">
              AI & Machine Learning Engineer
            </h1>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              Transforming data into intelligent solutions. Specializing in deep learning,
              computer vision, and natural language processing.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get in Touch
              </a>
              <a href="#projects" className={`border ${isDark ? 'border-white hover:bg-white hover:text-black' : 'border-gray-900 hover:bg-gray-900 hover:text-white'} px-6 py-3 rounded-lg font-semibold transition-colors`}>
                View Projects
              </a>
            </div>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Brain size={300} className="text-blue-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}