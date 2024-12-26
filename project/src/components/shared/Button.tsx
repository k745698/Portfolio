import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300';
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105',
    secondary: 'border border-current hover:bg-opacity-10 hover:bg-current transform hover:scale-105'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}