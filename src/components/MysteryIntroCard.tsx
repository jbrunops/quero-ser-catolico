import React from 'react';
import { Mystery } from '../utils/prayers';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface MysteryIntroCardProps {
  mystery: Mystery;
  onComplete: () => void;
  isActive: boolean;
}

const MysteryIntroCard = ({ 
  mystery, 
  onComplete, 
  isActive
}: MysteryIntroCardProps) => {
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
    <div className={`step-card bg-gradient-to-br ${getBgColor()} border-2 animate-fade-in`}>
      <h3 className="text-2xl font-semibold text-vatican-dark mb-3">
        {mystery.title}
      </h3>
      
      <div className="bg-white/70 rounded-md p-6 border-l-4 border-vatican-gold mb-6">
        <p className="text-vatican-dark/90 font-medium leading-relaxed text-lg">
          {mystery.description}
        </p>
      </div>
      
      <div className="my-6">
        <p className="text-vatican-dark/80 italic">
          Vamos meditar neste mistério e no seu significado para nossa vida...
        </p>
      </div>
      
      <div className="mt-6 flex justify-end">
        <Button 
          onClick={onComplete}
          className="prayer-btn-gold"
        >
          Próximo Passo
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default MysteryIntroCard; 