import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <h2 
      className={`
        text-4xl font-bold text-center mb-16 
        ${isDark ? 'text-white' : 'text-gray-900'}
        transform transition-all duration-500 hover:scale-105
      `}
    >
      {children}
    </h2>
  );
}