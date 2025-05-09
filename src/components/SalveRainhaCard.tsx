import React from 'react';
import { Prayers } from '../utils/prayers';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface SalveRainhaCardProps {
  onComplete: () => void;
  onGoBack?: () => void;
  canGoBack?: boolean;
  isActive: boolean;
  type: 'terco' | 'rosario';
}

const SalveRainhaCard = ({ 
  onComplete, 
  onGoBack,
  canGoBack = false,
  isActive,
  type
}: SalveRainhaCardProps) => {
  if (!isActive) return null;
  
  const handleComplete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onComplete();
  };

  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onGoBack) {
      onGoBack();
    }
  };

  return (
    <div className="step-card">
      <h3 className="text-2xl font-semibold text-vatican-dark mb-3">
        Salve-Rainha
      </h3>
      <p className="text-vatican-dark/80 mb-4">
        Conclua o {type === 'terco' ? 'terço' : 'rosário'} com a Salve-Rainha.
      </p>
      <div className="bg-vatican-light/70 rounded-md p-4 border-l-4 border-vatican-gold mb-6">
        <p className="text-vatican-dark/90 font-medium leading-relaxed">
          {Prayers.salvePrayers}
        </p>
      </div>
      
      <div className="mt-6 flex justify-between">
        {canGoBack && onGoBack && (
          <Button 
            onClick={handleGoBack}
            className="prayer-btn-secondary"
            variant="outline"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Voltar
          </Button>
        )}
        
        <div className={canGoBack ? '' : 'ml-auto'}>
          <Button 
            onClick={handleComplete}
            className="prayer-btn"
          >
            Próximo Passo (Conclusão)
            <ChevronRight className="h-5 w-5 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SalveRainhaCard; 