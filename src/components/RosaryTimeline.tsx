import React from 'react';
import { Progress } from '@/components/ui/progress';

interface TimelineStep {
  id: string;
  title: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

interface RosaryTimelineProps {
  steps: TimelineStep[];
  currentStepIndex: number;
  totalSteps: number;
  isRosary?: boolean;
}

const RosaryTimeline = ({ steps, currentStepIndex, totalSteps, isRosary = false }: RosaryTimelineProps) => {
  const progressPercentage = Math.round((currentStepIndex / (totalSteps - 1)) * 100);
  
  // Mostra a etapa atual
  // Garantir que currentStepIndex seja válido para o array steps
  const safeIndex = Math.min(currentStepIndex, steps.length - 1);
  const currentStep = steps[safeIndex];
  
  return (
    <div className="mb-4 md:mb-8 bg-white/80 rounded-lg p-3 md:p-4 shadow-sm">
      <div className="flex justify-between items-center mb-1 md:mb-2">
        <h3 className="text-xs md:text-sm font-medium text-primary-700/70">
          {isRosary ? "Progresso do Rosário" : "Progresso do Terço"}
        </h3>
        <span className="text-xs text-primary-700/50 font-medium">{progressPercentage}%</span>
      </div>
      
      <Progress value={progressPercentage} className="h-1.5 md:h-2 mb-3 md:mb-4" />
      
      <div className="flex items-center justify-center relative">
        <div className="flex items-center justify-center px-1 md:px-2 w-full overflow-hidden">
          <div
            className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap truncate max-w-[90%] md:max-w-[80%] transition-all ${
              currentStep?.isCurrent
                ? 'bg-primary text-white shadow-sm'
                : currentStep?.isCompleted
                  ? 'bg-primary/20 text-primary-700/70'
                  : 'bg-primary-50/50 text-primary-700/40'
            }`}
          >
            {currentStep?.title || "Carregando..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosaryTimeline;
