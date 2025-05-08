import React, { useState, useEffect } from 'react';
import PrayerStep from '../components/PrayerStep';
import MysteryCard from '../components/MysteryCard';
import RosaryTimeline from '../components/RosaryTimeline';
import { 
  TercoSteps,
  Mysteries, 
  getMysteryTitle,
  Prayers
} from '../utils/prayers';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// Define the steps of the Rosary, including both initial and all mystery sets
const generateAllSteps = () => {
  const initialSteps = TercoSteps.map(step => ({
    id: `init-${step.id}`,
    title: step.title,
    type: 'initial'
  }));
  
  const mysterySets = ['joyful', 'luminous', 'sorrowful', 'glorious'];
  const mysterySteps = [];
  
  for (const set of mysterySets) {
    Mysteries[set].forEach((mystery, index) => {
      mysterySteps.push({
        id: `${set}-${index}`,
        title: `${index + 1}º ${getMysteryTitle(set).slice(0, -1)}`,
        type: 'mystery'
      });
    });
  }
  
  const finalSteps = [{ id: 'final', title: 'Salve Rainha', type: 'final' }];
  
  return [...initialSteps, ...mysterySteps, ...finalSteps];
};

const RosaryApp = () => {
  // Estados para controlar o rosário completo
  const [currentPhase, setCurrentPhase] = useState<'initial' | 'ourFather' | 'mystery' | 'glory' | 'final' | 'welcome'>('welcome');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentMysterySetIndex, setCurrentMysterySetIndex] = useState(0); // Conjunto de mistérios
  const [currentMysteryIndex, setCurrentMysteryIndex] = useState(0); // Mistério dentro do conjunto
  const [hailMaryCount, setHailMaryCount] = useState(0);
  const [isRosaryCompleted, setIsRosaryCompleted] = useState(false);
  
  // Ordem dos mistérios para o rosário completo
  const mysterySets = ['joyful', 'luminous', 'sorrowful', 'glorious'];
  
  // Conjunto atual de mistérios
  const currentMysterySet = mysterySets[currentMysterySetIndex];
  const currentMysteries = Mysteries[currentMysterySet];
  
  // Gerar todos os passos do rosário para a barra de progresso
  const allSteps = generateAllSteps();
  
  // Calcular a posição atual na timeline
  const getTimelinePosition = () => {
    // Tela de boas-vindas
    if (currentPhase === 'welcome') {
      return 0;
    }
    
    // Passos iniciais
    if (currentPhase === 'initial') {
      return currentStepIndex;
    }
    
    // Cálculos para os mistérios
    const initialStepsCount = TercoSteps.length;
    let basePosition = initialStepsCount;
    
    // Adicionar a posição dos conjuntos de mistérios anteriores
    for (let i = 0; i < currentMysterySetIndex; i++) {
      basePosition += Mysteries[mysterySets[i]].length;
    }
    
    // Adicionar a posição dentro do conjunto atual
    const mysteryBasePosition = basePosition + currentMysteryIndex;
    
    if (currentPhase === 'ourFather') {
      return mysteryBasePosition;
    } else if (currentPhase === 'mystery') {
      return mysteryBasePosition + (hailMaryCount / 20);
    } else if (currentPhase === 'glory') {
      return mysteryBasePosition + 0.5;
    } else if (currentPhase === 'final') {
      // Salve Rainha (posição final)
      return allSteps.length - 1;
    }
    
    return currentStepIndex; // Fallback
  };
  
  // Gerar passos da timeline para exibição
  const timelinePosition = getTimelinePosition();
  const timelineSteps = allSteps.map((step, index) => ({
    ...step,
    isCompleted: index < Math.floor(timelinePosition),
    isCurrent: Math.floor(index) === Math.floor(timelinePosition)
  }));
  
  // Função para iniciar o rosário
  const startRosary = () => {
    setCurrentPhase('initial');
    toast.success("Iniciando o Santo Rosário Completo!");
  };
  
  // Função para avançar para o próximo passo inicial
  const nextInitialStep = () => {
    if (currentStepIndex < TercoSteps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      toast.success("Passo concluído!");
    } else {
      // Vamos para os mistérios depois de completar os passos iniciais
      setCurrentPhase('ourFather');
      toast.success(`Iniciando os ${getMysteryTitle(currentMysterySet)}!`);
    }
  };
  
  // Função para lidar com a oração do Pai-Nosso antes do mistério
  const handleOurFatherComplete = () => {
    setCurrentPhase('mystery');
    setHailMaryCount(0);
    
    if (currentMysteryIndex < currentMysteries.length) {
      toast.success("Iniciando o " + currentMysteries[currentMysteryIndex].title);
    }
  };
  
  // Função para rezar uma Ave-Maria
  const handlePrayHailMary = () => {
    if (hailMaryCount < 10) {
      setHailMaryCount(prev => prev + 1);
      
      if (hailMaryCount + 1 >= 10) {
        setCurrentPhase('glory');
      }
    }
  };
  
  // Função para lidar com a oração do Glória
  const handleGloriaComplete = () => {
    if (currentMysteryIndex < currentMysteries.length - 1) {
      // Próximo mistério no conjunto atual
      setCurrentMysteryIndex(prev => prev + 1);
      setCurrentPhase('ourFather');
    } else if (currentMysterySetIndex < mysterySets.length - 1) {
      // Próximo conjunto de mistérios
      setCurrentMysterySetIndex(prev => prev + 1);
      setCurrentMysteryIndex(0);
      setCurrentPhase('ourFather');
      toast.success(`Completou os ${getMysteryTitle(currentMysterySet)}! Avançando para os próximos mistérios...`, { 
        duration: 3000
      });
    } else {
      // Rosário completo - última oração
      setCurrentPhase('final');
    }
  };
  
  // Finalizar o rosário
  const handleFinishRosary = () => {
    setIsRosaryCompleted(true);
    toast.success("Santo Rosário Completado!", { 
      duration: 5000
    });
  };
  
  // Função para reiniciar o rosário
  const resetRosary = () => {
    setCurrentStepIndex(0);
    setCurrentMysterySetIndex(0);
    setCurrentMysteryIndex(0);
    setHailMaryCount(0);
    setCurrentPhase('welcome');
    setIsRosaryCompleted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast.info("Iniciando um novo rosário", { duration: 3000 });
  };
  
  // Renderizar o conteúdo atual baseado na fase
  const renderCurrentContent = () => {
    // Tela de boas-vindas
    if (currentPhase === 'welcome') {
      return (
        <div className="step-card">
          <h3 className="text-2xl font-semibold text-vatican-dark mb-3">
            Mistérios do Santo Rosário
          </h3>
          <p className="text-vatican-dark/80 mb-6">
            O Santo Rosário completo inclui os seguintes mistérios:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/80 rounded-lg p-4 border border-vatican-gold/30">
              <h4 className="text-xl font-medium text-vatican-dark mb-2">Mistérios Gozosos</h4>
              <p className="text-sm text-vatican-dark/70">Segunda-feira e Sábado</p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border border-vatican-gold/30">
              <h4 className="text-xl font-medium text-vatican-dark mb-2">Mistérios Luminosos</h4>
              <p className="text-sm text-vatican-dark/70">Quinta-feira</p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border border-vatican-gold/30">
              <h4 className="text-xl font-medium text-vatican-dark mb-2">Mistérios Dolorosos</h4>
              <p className="text-sm text-vatican-dark/70">Terça-feira e Sexta-feira</p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border border-vatican-gold/30">
              <h4 className="text-xl font-medium text-vatican-dark mb-2">Mistérios Gloriosos</h4>
              <p className="text-sm text-vatican-dark/70">Quarta-feira e Domingo</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button className="prayer-btn-gold" onClick={startRosary}>
              Iniciar o Rosário Completo
            </Button>
          </div>
        </div>
      );
    }
    
    // Passos iniciais do rosário
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
    
    // Pai-Nosso antes de cada mistério
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
    
    // Mistérios (Ave-Marias)
    if (currentPhase === 'mystery') {
      return (
        <MysteryCard
          mystery={currentMysteries[currentMysteryIndex]}
          onComplete={() => setCurrentPhase('glory')}
          isActive={true}
          hailMaryCount={hailMaryCount}
          onPrayHailMary={handlePrayHailMary}
        />
      );
    }
    
    // Glória ao Pai após cada dezena
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
              {currentMysteryIndex < currentMysteries.length - 1 || currentMysterySetIndex < mysterySets.length - 1
                ? 'Próximo Mistério' 
                : 'Concluir Rosário'}
            </Button>
          </div>
        </div>
      );
    }
    
    // Salve-Rainha (oração final)
    if (currentPhase === 'final') {
      return (
        <div className="step-card">
          <h3 className="text-2xl font-semibold text-vatican-dark mb-3">
            Salve-Rainha
          </h3>
          <p className="text-vatican-dark/80 mb-4">
            Conclua o rosário com a Salve-Rainha.
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
              Concluir Rosário
            </Button>
          </div>
        </div>
      );
    }
    
    return null;
  };
  
  // Scroll para o topo quando a página carrega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {!isRosaryCompleted ? (
          <>
            <div className="prayer-card mb-6 text-center">
              <h1 className="rosary-heading">
                Santo Rosário
              </h1>
              <p className="text-lg text-vatican-dark/80 mb-6">
                Guia interativo para a oração do Santo Rosário
              </p>
              
              {currentPhase !== 'welcome' && (
                <div className="bg-vatican-light/50 rounded-lg p-3">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {mysterySets.map((set, index) => (
                      <div 
                        key={set}
                        className={`px-3 py-1 text-xs rounded-full ${
                          index < currentMysterySetIndex 
                            ? 'bg-vatican-gold/80 text-white' 
                            : index === currentMysterySetIndex 
                              ? 'bg-vatican-gold/30 text-vatican-dark font-medium' 
                              : 'bg-vatican-light/70 text-vatican-dark/60'
                        }`}
                      >
                        {getMysteryTitle(set).slice(0, -1)}
                      </div>
                    ))}
                  </div>
                  <p className="text-vatican-dark/80">
                    Atual: <span className="font-medium text-vatican-blue">{getMysteryTitle(currentMysterySet)}</span>
                  </p>
                </div>
              )}
            </div>
            
            {/* Barra de progresso */}
            {currentPhase !== 'welcome' && (
              <RosaryTimeline 
                steps={timelineSteps} 
                currentStepIndex={Math.floor(timelinePosition)}
                totalSteps={allSteps.length} 
                isRosary={true}
              />
            )}
            
            {/* Conteúdo atual */}
            {renderCurrentContent()}
          </>
        ) : (
          <div className="prayer-card text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-vatican-gold/30 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✝</span>
            </div>
            <h2 className="text-3xl font-semibold text-vatican-dark mb-6">
              Santo Rosário Completado!
            </h2>
            <p className="text-lg text-vatican-dark/80 mb-6">
              Parabéns por completar o Santo Rosário! Que as bênçãos de Nossa Senhora estejam com você.
            </p>
            
            <div className="bg-vatican-light/70 rounded-md p-4 border-l-4 border-vatican-gold mb-8">
              <h3 className="text-xl font-medium text-vatican-dark mb-2">Salve-Rainha</h3>
              <p className="text-vatican-dark/90 leading-relaxed">
                {Prayers.salvePrayers}
              </p>
            </div>
            
            <Button 
              onClick={resetRosary}
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

export default RosaryApp; 