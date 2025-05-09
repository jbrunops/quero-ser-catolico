import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DonationModal from './DonationModal';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const isActive = (route: string) => {
    if (route === '/' && path === '/') return true;
    if (route === '/terco' && path === '/terco') return true;
    if (route === '/rosario' && path === '/rosario') return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const openDonationModal = () => {
    setIsDonationModalOpen(true);
  };
  
  const closeDonationModal = () => {
    setIsDonationModalOpen(false);
  };
  
  // Fechar o dropdown quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Determinar o texto do botão do dropdown com base na página atual
  const getActivePageText = () => {
    if (isActive('/terco')) return "Rezar O Santo Terço";
    if (isActive('/rosario')) return "Rezar O Santo Rosário";
    if (isActive('/')) return "Início";
    return "Menu";
  };
  
  return (
    <>
      <header className="bg-white/80 backdrop-blur-sm shadow-sm py-4 border-b border-primary/20 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <img src="/rezando-o-terco-logo-sembg.svg" alt="Logo Rezando o Terço" className="w-10 h-10" />
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Botão de Doação (Desktop) */}
            <button 
              onClick={openDonationModal}
              className="hidden md:flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-sm"
            >
              DOAÇÃO
            </button>
            
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
            
            {/* Menu desktop com dropdown elegante */}
            <div className="hidden md:block relative" ref={dropdownRef}>
              <button 
                onClick={toggleDropdown}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 ${
                  isDropdownOpen 
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                  : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                }`}
                aria-expanded={isDropdownOpen}
              >
                <span className="font-medium">{getActivePageText()}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 ease-out ${isDropdownOpen ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              
              {/* Dropdown menu */}
              <div 
                className={`absolute right-0 mt-2 w-60 rounded-xl shadow-xl bg-white border border-primary-100 transition-all duration-300 origin-top overflow-hidden ${
                  isDropdownOpen 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 translate-y-1 pointer-events-none'
                }`}
              >
                <div className="p-2">
                  <Link 
                    to="/" 
                    className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive('/') 
                        ? 'bg-primary-50 text-primary-700' 
                        : 'text-primary-700/80 hover:bg-primary-50'
                    }`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span>Início</span>
                    {isActive('/') && <span className="ml-auto w-2 h-2 rounded-full bg-primary-600"></span>}
                  </Link>
                  
                  <Link 
                    to="/terco" 
                    className={`flex items-center px-4 py-3 rounded-lg font-medium mt-1 transition-all ${
                      isActive('/terco') 
                        ? 'bg-primary-50 text-primary-700' 
                        : 'text-primary-700/80 hover:bg-primary-50'
                    }`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span>Rezar O Santo Terço</span>
                    {isActive('/terco') && <span className="ml-auto w-2 h-2 rounded-full bg-primary-600"></span>}
                  </Link>
                  
                  <Link 
                    to="/rosario" 
                    className={`flex items-center px-4 py-3 rounded-lg font-medium mt-1 transition-all ${
                      isActive('/rosario') 
                        ? 'bg-primary-50 text-primary-700' 
                        : 'text-primary-700/80 hover:bg-primary-50'
                    }`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span>Rezar O Santo Rosário</span>
                    {isActive('/rosario') && <span className="ml-auto w-2 h-2 rounded-full bg-primary-600"></span>}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Menu mobile */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
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
                  Rezar O Santo Terço
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
                  Rezar O Santo Rosário
                </Link>
              </li>
              <li className="w-full mt-2">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openDonationModal();
                  }}
                  className="w-full px-4 py-3 bg-green-600 text-white font-medium rounded-md shadow-sm"
                >
                  DOAÇÃO
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Modal de Doação */}
      <DonationModal isOpen={isDonationModalOpen} onClose={closeDonationModal} />
    </>
  );
};

export default Header;
