import React from 'react';
import { User } from 'lucide-react';

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="bg-white border-b border-blue-100 sticky top-0 z-50">
      <div className="px-8 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900">Dashboard</h2>
            <p className="text-blue-600 mt-1">Real-time sign language recognition platform</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-blue-50 rounded-xl px-6 py-3 border border-blue-200">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-blue-900 font-semibold">{userName}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;