import React from 'react';
import { Mystery } from '../utils/prayers';
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

  // Cores específicas para cada tipo de mistério
  const getBgColor = () => {
    switch (mystery.type) {
      case 'joyful':
        return 'from-blue-50 to-blue-100 border-blue-200';
      case 'sorrowful':
        return 'from-red-50 to-red-100 border-red-200';
      case 'glorious':
        return 'from-yellow-50 to-yellow-100 border-yellow-200';
      case 'luminous':
        return 'from-indigo-50 to-indigo-100 border-indigo-200';
      default:
        return 'from-white/90 to-vatican-light/80 border-vatican-gold/30';
    }
  };

  return (
    <div className={`step-card bg-gradient-to-br ${getBgColor()} border-2`}>
      <h3 className="text-2xl font-semibold text-vatican-dark mb-2">
        {mystery.title}
      </h3>
      
      <p className="text-vatican-dark/80 mb-6">
        {mystery.description}
      </p>
      
      <div className="mb-6">
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
          <p>{hailMaryCount} de 10 Ave-Marias rezadas</p>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        {isCompleted ? (
          <Button 
            onClick={onComplete}
            className="prayer-btn-gold"
          >
            Próximo Mistério
            <ChevronRight className="h-5 w-5" />
          </Button>
        ) : (
          <Button 
            onClick={onPrayHailMary}
            className="prayer-btn"
          >
            Próximo Passo ({hailMaryCount + 1}/10)
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default MysteryCard;
