import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      <a 
        href="https://github.com/k745698" 
        className="text-gray-300 hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={24} />
      </a>
      <a 
        href="https://www.linkedin.com/in/kartik-k-v-992b64269/" 
        className="text-gray-300 hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={24} />
      </a>
      <a 
        href="mailto:k745698@gmail.com" 
        className="text-gray-300 hover:text-white transition-colors"
      >
        <Mail size={24} />
      </a>
    </div>
  );
}