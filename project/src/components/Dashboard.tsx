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

export type PageType = 'home' | 'team' | 'ai' | 'statistics';

const Dashboard: React.FC<DashboardProps> = ({ userName }) => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'team':
        return <TeamPage />;
      case 'ai':
        return <AIPage />;
      case 'statistics':
        return <StatisticsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
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

export default Dashboard;