import React from 'react';
import { Code2, Database, Brain, BarChart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const skills = [
  {
    category: "Machine Learning",
    icon: <Brain className="w-8 h-8 text-blue-500" />,
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning", "CNN", "RNN", "Transformers"]
  },
  {
    category: "Data Science",
    icon: <BarChart className="w-8 h-8 text-green-500" />,
    items: ["Python", "Pandas", "NumPy", "Data Visualization", "Statistical Analysis"]
  },
  {
    category: "Programming",
    icon: <Code2 className="w-8 h-8 text-purple-500" />,
    items: ["Python", "C++", "JavaScript", "Git", "Docker", "REST APIs"]
  },
  {
    category: "Big Data",
    icon: <Database className="w-8 h-8 text-red-500" />,
    items: ["SQL", "MongoDB", "Apache Spark", "Hadoop", "Data Pipeline Design"]
  }
];

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className={`p-6 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-gray-100'} hover:shadow-lg transition-shadow`}>
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className={`text-xl font-bold ml-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}