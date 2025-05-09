import React, { useState } from 'react';
import { PrayerStep as PrayerStepType } from '../utils/prayers';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface PrayerStepProps {
  step: PrayerStepType;
  onComplete: () => void;
  onGoBack?: () => void;
  canGoBack?: boolean; 
  isActive: boolean;
}

const PrayerStep = ({ 
  step, 
  onComplete, 
  onGoBack, 
  canGoBack = false,
  isActive 
}: PrayerStepProps) => {
  const [prayersDone, setPrayersDone] = useState(0);
  
  if (!isActive) return null;

  const hasMultiplePrayers = step.repetitions && step.repetitions > 1;
  const isCompleted = hasMultiplePrayers && prayersDone >= step.repetitions!;
  
  const markPrayerDone = () => {
    if (hasMultiplePrayers && prayersDone < step.repetitions!) {
      const newCount = prayersDone + 1;
      setPrayersDone(newCount);
    }
  };

  const handleNextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!hasMultiplePrayers || isCompleted) {
      onComplete();
    } else {
      markPrayerDone();
    }
  };

  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (hasMultiplePrayers && prayersDone > 0) {
      setPrayersDone(prev => prev - 1);
    } else if (onGoBack) {
      onGoBack();
    }
  };

  return (
    <div className="step-card">
      <h3 className="text-2xl font-semibold text-primary-700 mb-3 flex items-center">
        <span className="inline-block w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 text-primary-600 font-bold">
          <img src="/logo-sem-nome.svg" alt="Logo" className="w-4 h-4" />
        </span>
        {step.title}
      </h3>
      
      <p className="text-primary-800/80 mb-6">
        {step.description}
      </p>
      
      {step.prayerText && (
        <div className="mt-4 mb-6">
          <div className="bg-primary-50 rounded-md p-4 border-l-4 border-primary">
            <p className="text-primary-800/90 font-medium leading-relaxed whitespace-pre-line">
              {step.prayerText}
            </p>
          </div>
        </div>
      )}
      
      {hasMultiplePrayers && (
        <div className="mt-4 mb-6">
          <div className="flex flex-wrap gap-2 justify-center my-4">
            {Array.from({ length: step.repetitions! }, (_, i) => (
              <div 
                key={i} 
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  i < prayersDone 
                    ? 'bg-primary text-white' 
                    : 'bg-primary-50/70 text-primary-700/40'
                }`}
              >
                {i+1}
              </div>
            ))}
          </div>
          
          <div className="text-center text-primary-700/70 mb-4">
            {prayersDone} de {step.repetitions} {step.title} rezadas
          </div>
        </div>
      )}
      
      <div className="mt-6 flex justify-between">
        {(canGoBack || (hasMultiplePrayers && prayersDone > 0)) && (
          <Button 
            onClick={handleGoBack}
            className="prayer-btn-back"
            variant="outline"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Voltar
          </Button>
        )}
        
        <div className={(canGoBack || (hasMultiplePrayers && prayersDone > 0)) ? '' : 'ml-auto'}>
          <Button 
            onClick={handleNextStep}
            className="prayer-btn"
          >
            {isCompleted ? 'Próximo Passo' : `Próximo Passo ${hasMultiplePrayers ? `(${prayersDone}/${step.repetitions})` : ''}`}
            <ChevronRight className="h-5 w-5 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrayerStep;
