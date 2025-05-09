import React, { useState, useEffect } from 'react';
import PrayerStep from './PrayerStep';
import MysteryCard from './MysteryCard';
import MysteryIntroCard from './MysteryIntroCard';
import OurFatherCard from './OurFatherCard';
import GloryCard from './GloryCard';
import SalveRainhaCard from './SalveRainhaCard';
import RosaryTimeline from './RosaryTimeline';
import Header from './Header';
import Footer from './Footer';
import { 
  TercoSteps,
  Mysteries, 
  getMysteryTitle,
  getMysteryOfTheDay,
  getDayOfWeekName,
  Prayers,
  Mystery
} from '../utils/prayers';
import { Button } from '@/components/ui/button';

// Tipos para as props
interface PrayerBaseProps {
  mode: 'terco' | 'rosario';
  mysterySets?: string[];
  initialMysterySet?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

// Gerar todos os passos para a timeline
const generateTimelineSteps = (mysterySets: string[], isTerco: boolean) => {
  const initialSteps = TercoSteps.map(step => ({
    id: `init-${step.id}`,
    title: step.title,
    type: 'initial'
  }));
  
  const mysterySteps = [];
  
  if (isTerco) {
    // Para o terço, utilizamos apenas o conjunto especificado
    const mysterySet = mysterySets[0];
    Mysteries[mysterySet].forEach((mystery, index) => {
      mysterySteps.push({
        id: `mystery-${index}`,
        title: `${index + 1}º Mistério`,
        type: 'mystery'
      });
    });
  } else {
    // Para o rosário, utilizamos todos os conjuntos
    for (const set of mysterySets) {
      Mysteries[set].forEach((mystery, index) => {
        mysterySteps.push({
          id: `${set}-${index}`,
          title: `${index + 1}º ${getMysteryTitle(set).slice(0, -1)}`,
          type: 'mystery'
        });
      });
    }
  }
  
  const finalSteps = [{ id: 'final', title: 'Salve Rainha', type: 'final' }];
  
  return [...initialSteps, ...mysterySteps, ...finalSteps];
};

// Componente principal
const PrayerBase = ({ 
  mode = 'terco',
  mysterySets = mode === 'terco' ? [getMysteryOfTheDay()] : ['joyful', 'luminous', 'sorrowful', 'glorious'],
  initialMysterySet = mysterySets[0],
  showHeader = true,
  showFooter = true
}: PrayerBaseProps) => {
  // Definições das etapas
  const PHASE_WELCOME = 'welcome';
  const PHASE_INITIAL = 'initial';
  const PHASE_MYSTERY_INTRO = 'mystery_intro';
  const PHASE_OUR_FATHER = 'our_father';
  const PHASE_HAIL_MARY = 'hail_mary';
  const PHASE_GLORY = 'glory';
  const PHASE_FINAL = 'final';
  const PHASE_COMPLETED = 'completed';
  
  // Estados
  const [currentPhase, setCurrentPhase] = useState(mode === 'rosario' ? PHASE_WELCOME : PHASE_INITIAL);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentMysterySetIndex, setCurrentMysterySetIndex] = useState(0);
  const [currentMysteryIndex, setCurrentMysteryIndex] = useState(0);
  const [hailMaryCount, setHailMaryCount] = useState(0);
  const [isPrayerCompleted, setIsPrayerCompleted] = useState(false);
  
  // Variáveis derivadas
  const isTerco = mode === 'terco';
  const currentMysterySet = mysterySets[currentMysterySetIndex];
  const currentMysteries = Mysteries[currentMysterySet];
  const timelineSteps = generateTimelineSteps(mysterySets, isTerco);
  
  // Calcular a posição na timeline
  const getTimelinePosition = () => {
    if (currentPhase === PHASE_WELCOME) {
      return 0;
    }
    
    if (currentPhase === PHASE_INITIAL) {
      return currentStepIndex;
    }
    
    const initialStepsCount = TercoSteps.length;
    let basePosition = initialStepsCount;
    
    if (!isTerco) {
      // No rosário, precisamos considerar os conjuntos anteriores
      for (let i = 0; i < currentMysterySetIndex; i++) {
        basePosition += Mysteries[mysterySets[i]].length;
      }
    }
    
    const mysteryBasePosition = basePosition + currentMysteryIndex;
    
    if (currentPhase === PHASE_MYSTERY_INTRO || currentPhase === PHASE_OUR_FATHER) {
      return mysteryBasePosition;
    } else if (currentPhase === PHASE_HAIL_MARY) {
      return mysteryBasePosition + (hailMaryCount / 20);
    } else if (currentPhase === PHASE_GLORY) {
      return mysteryBasePosition + 0.5;
    } else if (currentPhase === PHASE_FINAL || currentPhase === PHASE_COMPLETED) {
      return timelineSteps.length - 1;
    }
    
    return currentStepIndex;
  };
  
  // Timeline
  const timelinePosition = getTimelinePosition();
  const displayTimelineSteps = timelineSteps.map((step, index) => ({
    ...step,
    isCompleted: index < Math.floor(timelinePosition),
    isCurrent: Math.floor(index) === Math.floor(timelinePosition)
  }));
  
  // Funções para gerenciar os passos
  const startPrayer = () => {
    setCurrentPhase(PHASE_INITIAL);
  };
  
  const nextInitialStep = () => {
    if (currentStepIndex < TercoSteps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      setCurrentPhase(PHASE_MYSTERY_INTRO);
    }
  };
  
  const handleMysteryIntroComplete = () => {
    setCurrentPhase(PHASE_OUR_FATHER);
  };
  
  const handleOurFatherComplete = () => {
    setCurrentPhase(PHASE_HAIL_MARY);
    setHailMaryCount(0);
  };
  
  const handlePrayHailMary = () => {
    if (hailMaryCount < 10) {
      const newCount = hailMaryCount + 1;
      setHailMaryCount(newCount);
      
      if (newCount >= 10) {
        setCurrentPhase(PHASE_GLORY);
      }
    }
  };
  
  const handleGloriaComplete = () => {
    if (currentMysteryIndex < currentMysteries.length - 1) {
      // Próximo mistério no mesmo conjunto
      setCurrentMysteryIndex(prev => prev + 1);
      setCurrentPhase(PHASE_MYSTERY_INTRO);
    } else if (!isTerco && currentMysterySetIndex < mysterySets.length - 1) {
      // No rosário, avançamos para o próximo conjunto de mistérios
      setCurrentMysterySetIndex(prev => prev + 1);
      setCurrentMysteryIndex(0);
      setCurrentPhase(PHASE_MYSTERY_INTRO);
    } else {
      // Orações finais
      setCurrentPhase(PHASE_FINAL);
    }
  };
  
  const handleFinishPrayer = () => {
    setCurrentPhase(PHASE_COMPLETED);
    setIsPrayerCompleted(true);
  };
  
  const resetPrayer = () => {
    setCurrentStepIndex(0);
    setCurrentMysterySetIndex(0);
    setCurrentMysteryIndex(0);
    setHailMaryCount(0);
    setCurrentPhase(mode === 'rosario' ? PHASE_WELCOME : PHASE_INITIAL);
    setIsPrayerCompleted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Função para voltar ao passo anterior
  const handleGoBack = () => {
    if (currentPhase === PHASE_INITIAL) {
      if (currentStepIndex > 0) {
        // Voltar para o passo anterior das orações iniciais
        setCurrentStepIndex(prev => prev - 1);
      } else if (mode === 'rosario') {
        // No rosário, voltar para a tela de boas-vindas
        setCurrentPhase(PHASE_WELCOME);
      }
    } else if (currentPhase === PHASE_MYSTERY_INTRO) {
      if (currentMysteryIndex === 0 && currentMysterySetIndex === 0) {
        // Se estiver no primeiro mistério, voltar para as orações iniciais
        setCurrentPhase(PHASE_INITIAL);
        setCurrentStepIndex(TercoSteps.length - 1);
      } else if (currentMysteryIndex === 0 && currentMysterySetIndex > 0) {
        // Se estiver no primeiro mistério de um conjunto que não é o primeiro,
        // voltar para o último mistério do conjunto anterior
        setCurrentMysterySetIndex(prev => prev - 1);
        setCurrentMysteryIndex(Mysteries[mysterySets[currentMysterySetIndex - 1]].length - 1);
        setCurrentPhase(PHASE_GLORY);
      } else {
        // Voltar para o Gloria do mistério anterior
        setCurrentMysteryIndex(prev => prev - 1);
        setCurrentPhase(PHASE_GLORY);
      }
    } else if (currentPhase === PHASE_OUR_FATHER) {
      // Voltar para a introdução do mistério
      setCurrentPhase(PHASE_MYSTERY_INTRO);
    } else if (currentPhase === PHASE_HAIL_MARY) {
      if (hailMaryCount > 0) {
        // Se já rezou alguma Ave-Maria, voltar uma
        setHailMaryCount(prev => prev - 1);
      } else {
        // Se não rezou nenhuma, voltar para o Pai-Nosso
        setCurrentPhase(PHASE_OUR_FATHER);
      }
    } else if (currentPhase === PHASE_GLORY) {
      // Voltar para as Ave-Marias
      setCurrentPhase(PHASE_HAIL_MARY);
      setHailMaryCount(10); // Todas as Ave-Marias já foram rezadas
    } else if (currentPhase === PHASE_FINAL) {
      // Voltar para o último Gloria
      const lastMysterySetIndex = isTerco ? 0 : mysterySets.length - 1;
      const lastMysteryIndex = Mysteries[mysterySets[lastMysterySetIndex]].length - 1;
      
      setCurrentMysterySetIndex(lastMysterySetIndex);
      setCurrentMysteryIndex(lastMysteryIndex);
      setCurrentPhase(PHASE_GLORY);
    } else if (currentPhase === PHASE_COMPLETED) {
      // Voltar para a Salve Rainha
      setCurrentPhase(PHASE_FINAL);
      setIsPrayerCompleted(false);
    }
  };
  
  // Scroll para o topo quando a página carrega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Obter classe de cores baseada no tipo de mistério
  const getMysteryColorClass = () => {
    if (currentMysterySet === 'joyful') {
      return 'border-primary-100';
    } else if (currentMysterySet === 'luminous') {
      return 'border-primary-300';
    } else if (currentMysterySet === 'sorrowful') {
      return 'border-primary-700';
    } else if (currentMysterySet === 'glorious') {
      return 'border-primary-500';
    }
    return 'border-primary/30';
  };
  
  // Renderizar o conteúdo atual baseado na fase
  const renderCurrentContent = () => {
    if (currentPhase === PHASE_WELCOME) {
      return (
        <div className="step-card">
          <h3 className="text-2xl font-semibold text-primary-700 mb-3">
            Mistérios do Santo Rosário
          </h3>
          <p className="text-primary-800/80 mb-6">
            O Santo Rosário completo inclui os seguintes mistérios:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/80 rounded-lg p-4 border border-primary/30">
              <h4 className="text-xl font-medium text-primary-700 mb-2">Mistérios Gozosos</h4>
              <p className="text-sm text-primary-700/70">Segunda-feira e Sábado</p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border border-primary/30">
              <h4 className="text-xl font-medium text-primary-700 mb-2">Mistérios Luminosos</h4>
              <p className="text-sm text-primary-700/70">Quinta-feira</p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border border-primary/30">
              <h4 className="text-xl font-medium text-primary-700 mb-2">Mistérios Dolorosos</h4>
              <p className="text-sm text-primary-700/70">Terça-feira e Sexta-feira</p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border border-primary/30">
              <h4 className="text-xl font-medium text-primary-700 mb-2">Mistérios Gloriosos</h4>
              <p className="text-sm text-primary-700/70">Quarta-feira e Domingo</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button className="prayer-btn" onClick={startPrayer}>
              Iniciar o Rosário Completo
            </Button>
          </div>
        </div>
      );
    }
    
    if (currentPhase === PHASE_INITIAL) {
      return (
        <PrayerStep
          key={TercoSteps[currentStepIndex].id}
          step={TercoSteps[currentStepIndex]}
          onComplete={nextInitialStep}
          onGoBack={handleGoBack}
          canGoBack={currentStepIndex > 0 || mode === 'rosario'}
          isActive={true}
        />
      );
    }
    
    if (currentPhase === PHASE_MYSTERY_INTRO) {
      return (
        <MysteryIntroCard
          mystery={currentMysteries[currentMysteryIndex]}
          onComplete={handleMysteryIntroComplete}
          onGoBack={handleGoBack}
          canGoBack={true}
          isActive={true}
        />
      );
    }
    
    if (currentPhase === PHASE_OUR_FATHER) {
      return (
        <OurFatherCard
          mystery={currentMysteries[currentMysteryIndex]}
          onComplete={handleOurFatherComplete}
          onGoBack={handleGoBack}
          canGoBack={true}
          isActive={true}
        />
      );
    }
    
    if (currentPhase === PHASE_HAIL_MARY) {
      return (
        <MysteryCard
          mystery={currentMysteries[currentMysteryIndex]}
          onComplete={() => setCurrentPhase(PHASE_GLORY)}
          onGoBack={handleGoBack}
          canGoBack={true}
          isActive={true}
          hailMaryCount={hailMaryCount}
          onPrayHailMary={handlePrayHailMary}
        />
      );
    }
    
    if (currentPhase === PHASE_GLORY) {
      const isLastMystery = isTerco 
        ? currentMysteryIndex === currentMysteries.length - 1
        : (currentMysteryIndex === currentMysteries.length - 1 && currentMysterySetIndex === mysterySets.length - 1);
        
      return (
        <GloryCard
          mystery={currentMysteries[currentMysteryIndex]}
          onComplete={handleGloriaComplete}
          onGoBack={handleGoBack}
          canGoBack={true}
          isActive={true}
          isLastMystery={isLastMystery}
        />
      );
    }
    
    if (currentPhase === PHASE_FINAL) {
      return (
        <SalveRainhaCard
          onComplete={handleFinishPrayer}
          onGoBack={handleGoBack}
          canGoBack={true}
          isActive={true}
          type={isTerco ? 'terco' : 'rosario'}
        />
      );
    }
    
    if (currentPhase === PHASE_COMPLETED) {
      return (
        <div className="prayer-card text-center">
          <div className="w-20 h-20 rounded-full bg-primary-200 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✝</span>
          </div>
          <h2 className="text-3xl font-semibold text-primary-700 mb-6">
            {isTerco ? "Santo Terço Completado!" : "Santo Rosário Completado!"}
          </h2>
          <p className="text-lg text-primary-800/80 mb-6">
            Parabéns por completar o {isTerco ? "Santo Terço" : "Santo Rosário"}! Que as bênçãos de Nossa Senhora estejam com você.
          </p>
          
          <div className="flex justify-center gap-4">
            <Button 
              onClick={handleGoBack}
              className="prayer-btn-back"
              variant="outline"
            >
              Voltar
            </Button>
            <Button 
              onClick={resetPrayer}
              className="prayer-btn"
            >
              Rezar Novamente
            </Button>
          </div>
        </div>
      );
    }
    
    return null;
  };
  
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (showHeader || showFooter) {
      return (
        <div className="flex flex-col min-h-screen">
          {showHeader && <Header />}
          
          <main className="flex-grow container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto">
              {children}
            </div>
          </main>
          
          {showFooter && <Footer />}
        </div>
      );
    }
    
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </div>
    );
  };
  
  return (
    <Wrapper>
      {!isPrayerCompleted ? (
        <>
          <div className="prayer-card mb-6 text-center">
            <h1 className="rosary-heading text-3xl md:text-4xl font-bold text-primary-800 mb-2">
              {isTerco ? "Santo Terço" : "Santo Rosário"}
            </h1>
            <p className="text-sm text-primary-800/80 mb-4">
              Não esqueça de rezar o santo terço pelas almas do purgatório
            </p>
            
            {currentPhase !== PHASE_WELCOME && (
              <div className="mb-4">
                {!isTerco && currentPhase !== PHASE_INITIAL && (
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {mysterySets.map((set, index) => (
                      <div 
                        key={set}
                        className={`px-3 py-1 text-xs rounded-full ${
                          index < currentMysterySetIndex 
                            ? 'bg-primary/80 text-white' 
                            : index === currentMysterySetIndex 
                              ? 'bg-primary-200 text-primary-700 font-medium' 
                              : 'bg-primary-50/70 text-primary-700/60'
                        }`}
                      >
                        {getMysteryTitle(set).slice(0, -1)}
                      </div>
                    ))}
                  </div>
                )}
                
                {currentPhase === PHASE_INITIAL ? (
                  <p className="text-primary-600 font-medium">
                    {isTerco ? `${getDayOfWeekName()} — ${getMysteryTitle(currentMysterySet)}` : getMysteryTitle(currentMysterySet)}
                  </p>
                ) : (
                  <>
                    <p className="text-primary-600 font-medium mb-1">
                      {isTerco ? `${getDayOfWeekName()} — ${getMysteryTitle(currentMysterySet)}` : getMysteryTitle(currentMysterySet)}
                    </p>
                    <p className="text-primary-800/90 font-medium">
                      {currentMysteries[currentMysteryIndex].title}
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
          
          {currentPhase !== PHASE_WELCOME && (
            <RosaryTimeline 
              steps={displayTimelineSteps} 
              currentStepIndex={Math.floor(timelinePosition)}
              totalSteps={timelineSteps.length} 
              isRosary={!isTerco}
            />
          )}
          
          {renderCurrentContent()}
        </>
      ) : (
        renderCurrentContent()
      )}
    </Wrapper>
  );
};

export default PrayerBase; 