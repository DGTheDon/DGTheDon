import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-2xl">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;