
import React, { useState } from 'react';
import { PrayerStep as PrayerStepType } from '../utils/prayers';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface PrayerStepProps {
  step: PrayerStepType;
  onComplete: () => void;
  isActive: boolean;
}

const PrayerStep = ({ step, onComplete, isActive }: PrayerStepProps) => {
  const [showPrayer, setShowPrayer] = useState(false);
  const [prayersDone, setPrayersDone] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  if (!isActive) return null;

  const hasMultiplePrayers = step.repetitions && step.repetitions > 1;
  
  const markPrayerDone = () => {
    if (hasMultiplePrayers && prayersDone < step.repetitions!) {
      setPrayersDone(prev => prev + 1);
      
      if (prayersDone + 1 >= step.repetitions!) {
        setIsCompleted(true);
      }
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <div className="step-card">
      <h3 className="text-2xl font-semibold text-vatican-dark mb-3 flex items-center">
        <span className="inline-block w-8 h-8 bg-vatican-gold/20 rounded-full flex items-center justify-center mr-3 text-vatican-blue font-bold">
          ✝
        </span>
        {step.title}
      </h3>
      
      <p className="text-vatican-dark/80 mb-6">
        {step.description}
      </p>
      
      {step.prayerText && (
        <div className="mt-4 mb-6">
          {!showPrayer && step.type === 'prayer' ? (
            <Button 
              onClick={() => setShowPrayer(true)}
              className="bg-vatican-blue/80 hover:bg-vatican-blue text-white transition-all mb-4"
            >
              Mostrar Oração
            </Button>
          ) : (
            <div className="bg-vatican-light rounded-md p-4 border-l-4 border-vatican-gold animate-fade-in">
              <p className="text-vatican-dark/90 font-medium leading-relaxed whitespace-pre-line">
                {step.prayerText}
              </p>
            </div>
          )}
        </div>
      )}
      
      {hasMultiplePrayers && showPrayer && (
        <div className="mt-4 mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <p className="text-vatican-dark/80">
              {prayersDone} de {step.repetitions} orações rezadas
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-1 mb-4">
            {Array.from({ length: step.repetitions! }, (_, i) => (
              <div 
                key={i} 
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                  i < prayersDone 
                    ? 'bg-vatican-gold text-white' 
                    : 'bg-vatican-light/70 text-vatican-dark/40'
                }`}
              >
                {i+1}
              </div>
            ))}
          </div>
          
          {!isCompleted && (
            <div className="flex items-center justify-center gap-2">
              <Checkbox 
                id="markDone" 
                checked={false}
                onCheckedChange={markPrayerDone}
              />
              <label htmlFor="markDone" className="text-sm text-vatican-dark/80 cursor-pointer">
                Marcar oração como concluída
              </label>
            </div>
          )}
        </div>
      )}
      
      <div className="mt-6 flex justify-end">
        {!hasMultiplePrayers || isCompleted ? (
          <Button 
            onClick={onComplete}
            className="prayer-btn"
          >
            Próximo Passo
            <ChevronRight className="h-5 w-5" />
          </Button>
        ) : showPrayer && (
          <Button 
            onClick={() => setIsCompleted(true)}
            variant="outline" 
            className="text-vatican-dark border-vatican-gold/50 hover:bg-vatican-light/50"
          >
            Pular para o próximo passo
          </Button>
        )}
      </div>
    </div>
  );
};

export default PrayerStep;
