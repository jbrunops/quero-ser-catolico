import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (route: string) => {
    if (route === '/' && path === '/') return true;
    if (route === '/terco' && path === '/terco') return true;
    if (route === '/rosario' && path === '/rosario') return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm py-4 border-b border-primary/20 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img src="/logo-sem-nome.svg" alt="Logo Rezando o Terço" className="w-10 h-10" />
            <h1 className="text-xl md:text-2xl font-semibold text-primary-700">Rezando o Terço</h1>
          </Link>
        </div>
        
        {/* Botão do menu mobile */}
        <button 
          className="md:hidden flex flex-col justify-center items-center gap-1.5"
          onClick={toggleMobileMenu}
          aria-label="Menu de navegação"
        >
          <span className={`block w-6 h-0.5 bg-primary-700 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-primary-700 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-primary-700 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        
        {/* Menu desktop */}
        <nav className="hidden md:flex items-center">
          <ul className="flex gap-3">
            <li>
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive('/') 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-primary-700/70 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                Início
              </Link>
            </li>
            <li>
              <Link 
                to="/terco" 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive('/terco') 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-primary-700/70 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                Terço
              </Link>
            </li>
            <li>
              <Link 
                to="/rosario" 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive('/rosario') 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-primary-700/70 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                Rosário
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Menu mobile */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mt-2 px-4 pb-3">
          <ul className="flex flex-col gap-2 border-t border-primary/10 pt-3">
            <li className="w-full">
              <Link 
                to="/" 
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-all w-full text-center ${
                  isActive('/') 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-primary-700/70 hover:bg-primary-50 hover:text-primary-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </Link>
            </li>
            <li className="w-full">
              <Link 
                to="/terco" 
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-all w-full text-center ${
                  isActive('/terco') 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-primary-700/70 hover:bg-primary-50 hover:text-primary-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Terço
              </Link>
            </li>
            <li className="w-full">
              <Link 
                to="/rosario" 
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-all w-full text-center ${
                  isActive('/rosario') 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-primary-700/70 hover:bg-primary-50 hover:text-primary-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Rosário
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
