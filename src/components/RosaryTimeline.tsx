
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  
  // Determine which steps to show (current step and up to 2 steps before and after)
  const visibleSteps = () => {
    const startIdx = Math.max(0, currentStepIndex - 2);
    const endIdx = Math.min(steps.length - 1, currentStepIndex + 2);
    return steps.slice(startIdx, endIdx + 1);
  };
  
  return (
    <div className="mb-8 bg-white/80 rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-vatican-dark/70">Progresso do Terço</h3>
        <span className="text-xs text-vatican-dark/50 font-medium">{progressPercentage}%</span>
      </div>
      
      <Progress value={progressPercentage} className="h-2 mb-4" />
      
      <div className="flex items-center justify-between relative">
        <button
          className="flex items-center justify-center w-6 h-6 rounded-full bg-vatican-light/60 text-vatican-dark/60 hover:bg-vatican-light"
          disabled={currentStepIndex <= 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        
        <div className="flex items-center justify-center gap-2 px-2 w-full overflow-hidden">
          {visibleSteps().map((step) => (
            <div
              key={step.id}
              className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                step.isCurrent
                  ? 'bg-vatican-gold/90 text-white shadow-sm'
                  : step.isCompleted
                    ? 'bg-vatican-blue/20 text-vatican-dark/70'
                    : 'bg-vatican-light/50 text-vatican-dark/40'
              }`}
            >
              {step.title}
            </div>
          ))}
        </div>
        
        <button
          className="flex items-center justify-center w-6 h-6 rounded-full bg-vatican-light/60 text-vatican-dark/60 hover:bg-vatican-light"
          disabled={currentStepIndex >= totalSteps - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default RosaryTimeline;
