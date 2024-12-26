import React from 'react';
import { Brain, Image, MessageSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SectionTitle from './shared/SectionTitle';
import Card from './shared/Card';

const projects = [
  {
    title: 'Computer Vision for Medical Imaging',
    description: 'Deep learning model for early detection of diseases using medical imaging data. Achieved 95% accuracy in diagnosis prediction.',
    icon: <Image className="w-12 h-12 text-blue-500" />,
    tech: ['PyTorch', 'OpenCV', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'NLP for Sentiment Analysis',
    description: 'Built an advanced sentiment analysis system for real-time social media monitoring using transformer models.',
    icon: <MessageSquare className="w-12 h-12 text-green-500" />,
    tech: ['BERT', 'Hugging Face', 'Python'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Reinforcement Learning Agent',
    description: 'Developed a RL agent for autonomous navigation in complex environments using Deep Q-Learning.',
    icon: <Brain className="w-12 h-12 text-purple-500" />,
    tech: ['PyTorch', 'OpenAI Gym', 'NumPy'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <div className="group relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`
                        px-3 py-1 
                        ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'} 
                        rounded-full text-sm
                        transition-transform duration-300 hover:scale-105
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}