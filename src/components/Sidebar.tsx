import React from 'react';
import { Home, Users, Brain, BarChart3, Waves } from 'lucide-react';
import { PageType } from './Dashboard';

interface SidebarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  const menuItems = [
    { id: 'home' as PageType, icon: Home, label: 'Home', description: 'Overview & Features' },
    { id: 'ai' as PageType, icon: Brain, label: 'AI Technology', description: 'Recognition Engine' },
    { id: 'statistics' as PageType, icon: BarChart3, label: 'Statistics', description: 'Global Insights' },
    { id: 'team' as PageType, icon: Users, label: 'Team', description: 'Meet the Developers' },
  ];

  return (
    <div className="w-80 bg-white border-r border-blue-100 flex flex-col">
      <div className="p-8 border-b border-blue-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
            <Waves className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-blue-900">
              Web Echoes
            </h1>
            <p className="text-sm text-blue-600">AI-Powered Recognition</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-6">
        <div className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 text-left group ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-blue-600 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                <div className={`p-3 rounded-xl transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-base">{item.label}</div>
                  <div className="text-sm text-blue-500 mt-1">{item.description}</div>
                </div>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-6 border-t border-blue-100">
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="font-bold text-blue-900 mb-3">Hackathon 2024</h3>
          <p className="text-sm text-blue-700 mb-4 leading-relaxed">
            Breaking barriers with AI-powered sign language recognition
          </p>
          <div className="flex items-center gap-3 text-sm text-blue-600">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            System Active
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;