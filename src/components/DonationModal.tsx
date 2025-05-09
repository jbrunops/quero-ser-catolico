import React, { useRef, useEffect } from 'react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Fechar o modal quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node) && isOpen) {
        onClose();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    
    // Impedir rolagem da página quando o modal estiver aberto
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div 
        ref={modalRef}
        className="bg-white rounded-xl shadow-2xl w-full max-w-md animate-scale-in"
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-primary-700">Apoie este Ministério</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Fechar"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="text-primary-700/80 mb-5">
            <p className="mb-3">
              Sua contribuição é fundamental para manter e melhorar esta ferramenta de oração. Com sua ajuda, podemos continuar oferecendo este serviço gratuitamente para todos os fiéis.
            </p>
            <p>
              Escaneie o QR Code abaixo para fazer uma doação via Pix, de qualquer valor, conforme suas possibilidades.
            </p>
          </div>
          
          <div className="flex justify-center mb-5">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <img 
                src="/doacao.png" 
                alt="QR Code para doação via Pix" 
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-4">
            <p className="text-center text-sm text-gray-500 mb-4">
              Se preferir, envie o comprovante de sua doação para receber nossa gratidão:
            </p>
            <a 
              href="https://wa.me/5581999836413?text=Olá,%20fiz%20uma%20doação%20para%20o%20Rezando%20o%20Terço." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
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
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Enviar Comprovante via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal; 