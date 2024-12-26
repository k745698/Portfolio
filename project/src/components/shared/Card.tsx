import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div 
      className={`
        ${isDark ? 'bg-gray-900' : 'bg-gray-100'} 
        rounded-xl shadow-lg overflow-hidden 
        transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
        ${className}
      `}
    >
      {children}
    </div>
  );
}