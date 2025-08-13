import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import AIPage from './pages/AIPage';
import StatisticsPage from './pages/StatisticsPage';

interface DashboardProps {
  userName: string;
}

export type PageType = 'home' | 'team' | 'ai' | 'statistics' | 'ai-interface';

const Dashboard: React.FC<DashboardProps> = ({ userName }) => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'team':
        return <TeamPage />;
      case 'ai':
        return <AIPage onNavigateToInterface={() => setCurrentPage('ai-interface')} />;
      case 'ai-interface':
        return <AIInterfacePage onBack={() => setCurrentPage('ai')} />;
      case 'statistics':
        return <StatisticsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex-1 flex flex-col">
        <Header userName={userName} />
        <main className="flex-1 overflow-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

const AIInterfacePage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="p-12 max-w-6xl mx-auto">
      <div className="mb-12">
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800 font-medium mb-6 flex items-center gap-2 text-lg"
        >
          ← Back to AI Technology
        </button>
        <h1 className="text-5xl font-bold text-blue-900 mb-6">AI Recognition Interface</h1>
        <p className="text-xl text-blue-700 leading-relaxed">
          Real-time sign language recognition powered by advanced AI
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-blue-200 p-16">
        <div className="text-center py-24">
          <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Camera Interface</h2>
          <p className="text-blue-600 mb-12 max-w-lg mx-auto text-lg leading-relaxed">
            This is where the AI recognition interface will be implemented. 
            The camera feed and real-time translation will appear here.
          </p>
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 max-w-lg mx-auto">
            <p className="text-blue-700 leading-relaxed">
              <strong className="text-blue-900">Coming Soon:</strong> Real-time camera integration with AI-powered 
              sign language recognition and instant text translation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;