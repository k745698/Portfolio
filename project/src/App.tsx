import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';

function AppContent() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
      <ThemeToggle />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;