import React from 'react';
import { Home, Users, Brain, BarChart3, Zap } from 'lucide-react';
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
    <div className="w-72 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SignVision
            </h1>
            <p className="text-xs text-gray-500">AI-Powered Recognition</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left group ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </div>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Hackathon 2024</h3>
          <p className="text-sm text-gray-600 mb-3">
            Breaking barriers with AI-powered sign language recognition
          </p>
          <div className="flex items-center gap-2 text-xs text-blue-600">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            System Active
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;