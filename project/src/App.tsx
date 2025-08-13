import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'dashboard'>('landing');
  const [userName, setUserName] = useState<string>('');

  const handleLogin = (name: string) => {
    setUserName(name);
    setCurrentPage('dashboard');
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'landing' && <LandingPage onLogin={handleLogin} />}
      {currentPage === 'dashboard' && <Dashboard userName={userName} />}
    </div>
  );
}

export default App;