import React from 'react';
import { Zap, Heart, Github, Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Sign Language AI</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering communication through innovative AI technology. 
              Making sign language accessible to everyone, everywhere.
            </p>
            <div className="flex gap-4">
              <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Project Details</h4>
            <ul className="space-y-3 text-gray-300">
              <li>• Real-time sign language detection</li>
              <li>• Python-based machine learning</li>
              <li>• Computer vision processing</li>
              <li>• Accessibility-focused design</li>
              <li>• Open source development</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'TensorFlow', 'OpenCV', 'React', 'TypeScript', 'Tailwind CSS', 'MediaPipe'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> for Hackathon 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;