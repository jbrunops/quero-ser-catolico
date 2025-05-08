import React, { useState, useEffect } from 'react';
import PrayerStep from '../components/PrayerStep';
import MysteryCard from '../components/MysteryCard';
import RosaryTimeline from '../components/RosaryTimeline';
import { 
  TercoSteps,
  Mysteries, 
  getMysteryOfTheDay, 
  getMysteryTitle,
  Prayers
} from '../utils/prayers';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// Define the steps of the Rosary, including both initial and mystery steps
const generateAllSteps = (mysteryType: string) => {
  const initialSteps = TercoSteps.map(step => ({
    id: `init-${step.id}`,
    title: step.title,
    type: 'initial'
  }));
  
  const mysteryNames = Mysteries[mysteryType].map((mystery, index) => ({
    id: `mystery-${index}`,
    title: `${index + 1}º Mistério`,
    type: 'mystery'
  }));
  
  const finalSteps = [{ id: 'final', title: 'Salve Rainha', type: 'final' }];
  
  return [...initialSteps, ...mysteryNames, ...finalSteps];
};

const PrayerApp = () => {
  // Estado para controlar em que parte do terço estamos
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentMysteryIndex, setCurrentMysteryIndex] = useState(0);
  const [mysteryType, setMysteryType] = useState<string>(getMysteryOfTheDay());
  const [isTercoCompleted, setIsTercoCompleted] = useState(false);
  
  // Estados para controlar o fluxo das orações
  const [currentPhase, setCurrentPhase] = useState<'initial' | 'ourFather' | 'mystery' | 'glory' | 'final'>('initial');
  const [hailMaryCount, setHailMaryCount] = useState(0);

  // Get all steps for the rosary and the timeline
  const allSteps = generateAllSteps(mysteryType);
  const todaysMysteries = Mysteries[mysteryType];
  
  // Calculate overall progress for timeline
  const getTimelinePosition = () => {
    // Initial prayers section
    if (currentPhase === 'initial') {
      return currentStepIndex;
    }
    
    // Mystery section calculations
    const initialStepsCount = TercoSteps.length;
    const mysteryBasePosition = initialStepsCount + currentMysteryIndex;
    
    if (currentPhase === 'ourFather') {
      // Já estamos no mistério (para exibir o número correto no progresso)
      return mysteryBasePosition;
    } else if (currentPhase === 'mystery') {
      // Progress within Ave-Marias
      return mysteryBasePosition + (hailMaryCount / 20);
    } else if (currentPhase === 'glory') {
      return mysteryBasePosition + 0.5; // End of mystery but not yet in next
    } else if (currentPhase === 'final') {
      return initialStepsCount + todaysMysteries.length; // Salve Rainha
    }
    
    return currentStepIndex; // Fallback
  };
  
  // Generate timeline steps for display
  const timelinePosition = getTimelinePosition();
  const timelineSteps = allSteps.map((step, index) => ({
    ...step,
    isCompleted: index < Math.floor(timelinePosition),
    isCurrent: Math.floor(index) === Math.floor(timelinePosition)
  }));
  
  // Função para avançar nos passos iniciais
  const nextInitialStep = () => {
    if (currentStepIndex < TercoSteps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      toast.success("Passo concluído!");
    } else {
      // Move to the mysteries after completing initial steps
      setCurrentPhase('ourFather');
      toast.success("Iniciando os mistérios do dia!");
    }
  };
  
  // Handle Our Father prayer completion before each mystery
  const handleOurFatherComplete = () => {
    setCurrentPhase('mystery');
    setHailMaryCount(0);
    
    if (currentMysteryIndex < todaysMysteries.length) {
      toast.success("Iniciando o " + todaysMysteries[currentMysteryIndex].title);
    }
  };
  
  // Handle praying of Ave Maria
  const handlePrayHailMary = () => {
    if (hailMaryCount < 10) {
      setHailMaryCount(prev => prev + 1);
      
      if (hailMaryCount + 1 >= 10) {
        setCurrentPhase('glory');
      }
    }
  };
  
  // Handle Gloria prayer completion after each decade
  const handleGloriaComplete = () => {
    if (currentMysteryIndex < todaysMysteries.length - 1) {
      // Move to next mystery
      setCurrentMysteryIndex(prev => prev + 1);
      setCurrentPhase('ourFather');
    } else {
      // Terço complete - move to final prayer
      setCurrentPhase('final');
    }
  };
  
  // Handle completion of the entire rosary
  const handleFinishRosary = () => {
    setIsTercoCompleted(true);
    toast.success("Santo Terço completado!", { 
      duration: 5000
    });
  };
  
  // Function to restart the rosary
  const resetTerco = () => {
    setCurrentStepIndex(0);
    setCurrentMysteryIndex(0);
    setCurrentPhase('initial');
    setHailMaryCount(0);
    setIsTercoCompleted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast.info("Iniciando um novo terço", { duration: 3000 });
  };
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Render current content based on phase
  const renderCurrentContent = () => {
    // Initial steps of the rosary
    if (currentPhase === 'initial') {
      return (
        <PrayerStep
          key={TercoSteps[currentStepIndex].id}
          step={TercoSteps[currentStepIndex]}
          onComplete={nextInitialStep}
          isActive={true}
        />
      );
    }
    
    // "Our Father" prayer before each mystery
    if (currentPhase === 'ourFather') {
      return (
        <div className="step-card">
          <h3 className="text-2xl font-semibold text-vatican-dark mb-3">
            Pai-Nosso
          </h3>
          <p className="text-vatican-dark/80 mb-4">
            Reze um Pai-Nosso para iniciar o mistério.
          </p>
          <div className="bg-vatican-light rounded-md p-4 border-l-4 border-vatican-gold mb-6">
            <p className="text-vatican-dark/90 font-medium leading-relaxed">
              {Prayers.ourFather}
            </p>
          </div>
          <div className="flex justify-end">
            <Button 
              onClick={handleOurFatherComplete}
              className="prayer-btn"
            >
              Próximo Passo
            </Button>
          </div>
        </div>
      );
    }
    
    // Mystery card for Ave-Maria prayers
    if (currentPhase === 'mystery') {
      return (
        <MysteryCard
          mystery={todaysMysteries[currentMysteryIndex]}
          onComplete={() => setCurrentPhase('glory')}
          isActive={true}
          hailMaryCount={hailMaryCount}
          onPrayHailMary={handlePrayHailMary}
        />
      );
    }
    
    // Glory Be prayer after completing Ave-Marias
    if (currentPhase === 'glory') {
      return (
        <div className="step-card">
          <h3 className="text-2xl font-semibold text-vatican-dark mb-3">
            Glória ao Pai
          </h3>
          <p className="text-vatican-dark/80 mb-4">
            Conclua esta dezena com o Glória ao Pai.
          </p>
          <div className="bg-vatican-light rounded-md p-4 border-l-4 border-vatican-gold mb-6">
            <p className="text-vatican-dark/90 font-medium leading-relaxed">
              {Prayers.gloryBe}
            </p>
          </div>
          
          <div className="bg-vatican-light/70 rounded-md p-4 border-l-4 border-vatican-blue mb-6">
            <p className="text-vatican-dark/90 font-medium leading-relaxed">
              {Prayers.oMeuJesus}
            </p>
          </div>
          
          <div className="flex justify-end">
            <Button 
              onClick={handleGloriaComplete}
              className="prayer-btn"
            >
              {currentMysteryIndex < todaysMysteries.length - 1 ? 'Próximo Mistério' : 'Concluir Terço'}
            </Button>
          </div>
        </div>
      );
    }
    
    // Final Salve-Rainha prayer
    if (currentPhase === 'final') {
      return (
        <div className="step-card">
          <h3 className="text-2xl font-semibold text-vatican-dark mb-3">
            Salve-Rainha
          </h3>
          <p className="text-vatican-dark/80 mb-4">
            Conclua o terço com a Salve-Rainha.
          </p>
          <div className="bg-vatican-light rounded-md p-4 border-l-4 border-vatican-gold mb-6">
            <p className="text-vatican-dark/90 font-medium leading-relaxed">
              {Prayers.salvePrayers}
            </p>
          </div>
          
          <div className="flex justify-end">
            <Button 
              onClick={handleFinishRosary}
              className="prayer-btn-gold"
            >
              Concluir Terço
            </Button>
          </div>
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {!isTercoCompleted ? (
          <>
            <div className="prayer-card mb-6 text-center">
              <h1 className="rosary-heading">
                Rezemos o Terço
              </h1>
              <p className="text-lg text-vatican-dark/80 mb-6">
                Guia interativo para a oração do Santo Terço
              </p>
              
              <div className="bg-vatican-light/50 rounded-lg p-3">
                <p className="text-vatican-dark/80">
                  Hoje: <span className="font-medium text-vatican-blue">{getMysteryTitle(mysteryType)}</span>
                </p>
              </div>
            </div>
            
            <RosaryTimeline 
              steps={timelineSteps} 
              currentStepIndex={Math.floor(timelinePosition)}
              totalSteps={allSteps.length} 
            />
            
            {renderCurrentContent()}
          </>
        ) : (
          <div className="prayer-card text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-vatican-gold/30 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✝</span>
            </div>
            <h2 className="text-3xl font-semibold text-vatican-dark mb-6">
              Santo Terço Completado!
            </h2>
            <p className="text-lg text-vatican-dark/80 mb-6">
              Parabéns por completar o Santo Terço! Que as bênçãos de Nossa Senhora estejam com você.
            </p>
            
            <div className="bg-vatican-light/70 rounded-md p-4 border-l-4 border-vatican-gold mb-8">
              <h3 className="text-xl font-medium text-vatican-dark mb-2">Salve-Rainha</h3>
              <p className="text-vatican-dark/90 leading-relaxed">
                {Prayers.salvePrayers}
              </p>
            </div>
            
            <Button 
              onClick={resetTerco}
              className="prayer-btn-gold mx-auto"
            >
              Rezar Novamente
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrayerApp;
