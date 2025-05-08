
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm py-4 border-b border-vatican-gold/20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-vatican-gold flex items-center justify-center text-white font-bold">
            ✝
          </div>
          <h1 className="text-2xl font-semibold text-vatican-dark">Rezemos o Terço</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
