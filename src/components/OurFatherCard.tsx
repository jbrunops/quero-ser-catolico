import React from 'react';
import { Mystery, Prayers } from '../utils/prayers';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface OurFatherCardProps {
  mystery: Mystery;
  onComplete: () => void;
  onGoBack?: () => void;
  canGoBack?: boolean;
  isActive: boolean;
}

const OurFatherCard = ({ 
  mystery, 
  onComplete, 
  onGoBack,
  canGoBack = false,
  isActive
}: OurFatherCardProps) => {
  if (!isActive) return null;

  // Cores específicas para cada tipo de mistério
  const getBgColor = () => {
    switch (mystery.type) {
      case 'joyful':
        return 'from-primary-50 to-primary-100 border-primary-200';
      case 'sorrowful':
        return 'from-primary-100 to-primary-200 border-primary-300';
      case 'glorious':
        return 'from-primary-50 to-primary-100 border-primary-200';
      case 'luminous':
        return 'from-primary-100 to-primary-200 border-primary-300';
      default:
        return 'from-white/90 to-primary-50 border-primary/30';
    }
  };
  
  const handleNextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    onComplete();
  };

  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onGoBack) {
      onGoBack();
    }
  };

  return (
    <div className={`step-card bg-gradient-to-br ${getBgColor()} border-2`}>
      <h3 className="text-2xl font-semibold text-primary-700 mb-3">
        Pai-Nosso do {mystery.title}
      </h3>
      
      <p className="text-primary-800/80 mb-4">
        Reze um Pai-Nosso para iniciar o mistério.
      </p>
      
      <div className="bg-primary-50 rounded-md p-4 border-l-4 border-primary mb-6">
        <p className="text-primary-800/90 font-medium leading-relaxed">
          {Prayers.ourFather}
        </p>
      </div>
      
      <div className="flex justify-between">
        {canGoBack && onGoBack && (
          <Button 
            onClick={handleGoBack}
            className="prayer-btn-back"
            variant="outline"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Voltar
          </Button>
        )}
        
        <div className={canGoBack ? '' : 'ml-auto'}>
          <Button 
            onClick={handleNextStep}
            className="prayer-btn transition-all duration-300"
          >
            Iniciar Ave-Marias
            <ChevronRight className="h-5 w-5 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OurFatherCard; 