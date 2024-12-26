import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SectionTitle from './shared/SectionTitle';
import Button from './shared/Button';
import Card from './shared/Card';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-6">
        <SectionTitle>Get in Touch</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {[
                { icon: <Mail className="w-6 h-6 text-blue-400" />, text: 'k745698@gmail.com' },
                { icon: <Phone className="w-6 h-6 text-blue-400" />, text: '+91 7702395024' },
                { icon: <MapPin className="w-6 h-6 text-blue-400" />, text: 'Hyderabad, IN' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center group cursor-pointer"
                >
                  <div className="mr-4 transform transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="transition-colors duration-300 group-hover:text-blue-400">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {[
                { label: 'Name', type: 'text', name: 'name' },
                { label: 'Email', type: 'email', name: 'email' }
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formState[field.name as keyof typeof formState]}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-2 rounded-lg 
                      ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'} 
                      border focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                      transition-all duration-300
                    `}
                    placeholder={`Your ${field.label.toLowerCase()}`}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className={`
                    w-full px-4 py-2 rounded-lg 
                    ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'} 
                    border focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                    transition-all duration-300 h-32
                  `}
                  placeholder="Your message"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}