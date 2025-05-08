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
}

const RosaryTimeline = ({ steps, currentStepIndex, totalSteps }: RosaryTimelineProps) => {
  const progressPercentage = Math.round((currentStepIndex / (totalSteps - 1)) * 100);
  
  // Mostra apenas a etapa atual
  const currentStep = steps[currentStepIndex];
  
  return (
    <div className="mb-8 bg-white/80 rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-vatican-dark/70">Progresso do Terço</h3>
        <span className="text-xs text-vatican-dark/50 font-medium">{progressPercentage}%</span>
      </div>
      
      <Progress value={progressPercentage} className="h-2 mb-4" />
      
      <div className="flex items-center justify-center relative">
        <div className="flex items-center justify-center px-2 w-full overflow-hidden">
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              currentStep.isCurrent
                ? 'bg-vatican-gold/90 text-white shadow-sm'
                : currentStep.isCompleted
                  ? 'bg-vatican-blue/20 text-vatican-dark/70'
                  : 'bg-vatican-light/50 text-vatican-dark/40'
            }`}
          >
            {currentStep.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosaryTimeline;
