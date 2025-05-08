import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm py-4 md:py-6 border-t border-vatican-gold/20 mt-6 md:mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base text-vatican-dark/70">
          Rezar em Luz © {new Date().getFullYear()} - Um guia para suas orações
        </p>
        <div className="flex justify-center gap-3 md:gap-4 mt-3 md:mt-4">
          <a 
            href="#" 
            className="text-vatican-dark/60 hover:text-vatican-gold transition-colors"
            aria-label="Compartilhar no Facebook"
          >
            <span className="sr-only">Facebook</span>
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
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a 
            href="#" 
            className="text-vatican-dark/60 hover:text-vatican-gold transition-colors"
            aria-label="Compartilhar no Twitter"
          >
            <span className="sr-only">Twitter</span>
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
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a 
            href="#" 
            className="text-vatican-dark/60 hover:text-vatican-gold transition-colors"
            aria-label="Compartilhar por E-mail"
          >
            <span className="sr-only">E-mail</span>
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
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
