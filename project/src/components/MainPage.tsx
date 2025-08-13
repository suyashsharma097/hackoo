import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import Team from './Team';
import Footer from './Footer';

interface MainPageProps {
  userName: string;
}

const MainPage: React.FC<MainPageProps> = ({ userName }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header userName={userName} />
      <Hero />
      <About />
      <Features />
      <Team />
      <Footer />
    </div>
  );
};

export default MainPage;