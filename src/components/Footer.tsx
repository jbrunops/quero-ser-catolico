import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm py-4 md:py-6 border-t border-vatican-gold/20 mt-6 md:mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base text-vatican-dark/70">
          Rezando o Terço © {new Date().getFullYear()} - Um Guia Completo para Rezar o Terço e o Rosário
        </p>
        <div className="mt-3 md:mt-4 flex flex-col items-center text-sm text-vatican-dark/70">
          <p className="mb-2">Entre em contato:</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            <a 
              href="https://wa.me/5581999836413" 
              className="flex items-center text-vatican-dark/60 hover:text-vatican-gold transition-colors"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 md:w-5 md:h-5 mr-1"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>WhatsApp: (81) 9 9983-6413</span>
            </a>
            <a 
              href="mailto:jbrunops@outlook.com" 
              className="flex items-center text-vatican-dark/60 hover:text-vatican-gold transition-colors"
              aria-label="E-mail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-5 h-5 md:w-5 md:h-5 mr-1"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>E-mail: jbrunops@outlook.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
