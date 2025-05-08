import React from 'react';
import { Mystery, Prayers } from '../utils/prayers';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface MysteryCardProps {
  mystery: Mystery;
  onComplete: () => void;
  isActive: boolean;
  hailMaryCount: number;
  onPrayHailMary: () => void;
}

const MysteryCard = ({ 
  mystery, 
  onComplete, 
  isActive,
  hailMaryCount,
  onPrayHailMary
}: MysteryCardProps) => {
  const isCompleted = hailMaryCount >= 10;

  if (!isActive) return null;

  const handleNextPrayer = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isCompleted) {
      onComplete();
    } else {
      onPrayHailMary();
    }
  };

  return (
    <div className="step-card">
      <h3 className="text-2xl font-semibold text-vatican-dark mb-3 flex items-center">
        <span className="inline-block w-8 h-8 bg-vatican-gold/20 rounded-full flex items-center justify-center mr-3 text-vatican-blue font-bold">
          ✝
        </span>
        Ave Maria
      </h3>
      
      <p className="text-vatican-dark/80 mb-6">
        Reze dez Ave-Marias meditando no mistério: {mystery.description}
      </p>
      
      <div className="mt-4 mb-6">
        <div className="bg-vatican-light rounded-md p-4 border-l-4 border-vatican-gold">
          <p className="text-vatican-dark/90 font-medium leading-relaxed whitespace-pre-line">
            {Prayers.hailMary}
          </p>
        </div>
      </div>
      
      <div className="mt-4 mb-6">
        <div className="flex flex-wrap gap-2 justify-center my-4">
          {Array.from({ length: 10 }, (_, i) => (
            <div 
              key={i} 
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                i < hailMaryCount 
                  ? 'bg-vatican-gold text-white' 
                  : 'bg-vatican-light/70 text-vatican-dark/40'
              }`}
            >
              {i+1}
            </div>
          ))}
        </div>
        
        <div className="text-center text-vatican-dark/70 mb-4">
          {hailMaryCount < 10 ? (
            <p>{hailMaryCount} de 10 Ave-Marias rezadas</p>
          ) : (
            <p>Ave-Marias completas!</p>
          )}
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <Button 
          onClick={handleNextPrayer}
          className="prayer-btn"
        >
          {isCompleted ? 'Próximo Passo' : `Próximo Passo (${hailMaryCount+1}/10)`}
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default MysteryCard;
