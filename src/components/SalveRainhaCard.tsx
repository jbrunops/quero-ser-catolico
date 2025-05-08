import React from 'react';
import { Prayers } from '../utils/prayers';
import { Button } from '@/components/ui/button';

interface SalveRainhaCardProps {
  onComplete: () => void;
  isActive: boolean;
  type: 'terco' | 'rosario';
}

const SalveRainhaCard = ({ 
  onComplete, 
  isActive,
  type
}: SalveRainhaCardProps) => {
  if (!isActive) return null;

  return (
    <div className="step-card">
      <h3 className="text-2xl font-semibold text-vatican-dark mb-3">
        Salve-Rainha
      </h3>
      <p className="text-vatican-dark/80 mb-4">
        Conclua o {type === 'terco' ? 'terço' : 'rosário'} com a Salve-Rainha.
      </p>
      <div className="bg-vatican-light rounded-md p-4 border-l-4 border-vatican-gold mb-6">
        <p className="text-vatican-dark/90 font-medium leading-relaxed">
          {Prayers.salvePrayers}
        </p>
      </div>
      
      <div className="flex justify-end">
        <Button 
          onClick={onComplete}
          className="prayer-btn-gold"
        >
          Concluir {type === 'terco' ? 'Terço' : 'Rosário'}
        </Button>
      </div>
    </div>
  );
};

export default SalveRainhaCard; 