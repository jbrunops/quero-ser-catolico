import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrayerStep from '../components/PrayerStep';
import MysteryCard from '../components/MysteryCard';
import { 
  TercoSteps,
  Mysteries, 
  getMysteryOfTheDay, 
  getMysteryTitle,
  Prayers
} from '../utils/prayers';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Terco = () => {
  // Estado para controlar em que parte do terço estamos
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentMysteryIndex, setCurrentMysteryIndex] = useState(0);
  const [hailMaryCount, setHailMaryCount] = useState(0);
  const [showOurFather, setShowOurFather] = useState(false);
  const [showMysteryIntro, setShowMysteryIntro] = useState(false);
  const [showGlory, setShowGlory] = useState(false);
  const [mysteryType, setMysteryType] = useState<string>(getMysteryOfTheDay());
  const [isTercoCompleted, setIsTercoCompleted] = useState(false);
  
  // Obter os mistérios do dia
  const todaysMysteries = Mysteries[mysteryType];
  
  // Função para avançar para o próximo passo
  const nextStep = () => {
    if (currentStepIndex < TercoSteps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      toast.success("Passo concluído!");
    } else {
      // Vamos para os mistérios depois de completar os passos iniciais
      setShowMysteryIntro(true);
      toast.success("Iniciando os mistérios do dia!");
    }
  };
  
  // Função para mostrar o Pai Nosso após a introdução do mistério
  const handleMysteryIntroComplete = () => {
    setShowMysteryIntro(false);
    setShowOurFather(true);
  };
  
  // Função para lidar com a oração do Pai-Nosso antes do mistério
  const handleOurFatherComplete = () => {
    setShowOurFather(false);
    setShowGlory(false);
    setHailMaryCount(0);
    // Mostrar o primeiro/próximo mistério
    if (currentMysteryIndex < todaysMysteries.length) {
      toast.success("Iniciando o " + todaysMysteries[currentMysteryIndex].title);
    }
  };
  
  // Função para lidar com a oração do Glória
  const handleGloriaComplete = () => {
    if (currentMysteryIndex < todaysMysteries.length - 1) {
      setCurrentMysteryIndex(prev => prev + 1);
      setShowMysteryIntro(true);
    } else {
      // Terço completo
      setIsTercoCompleted(true);
      toast.success("Santo Terço completado!", { 
        duration: 5000
      });
    }
  };
  
  // Função para rezar uma Ave-Maria
  const handlePrayHailMary = () => {
    if (hailMaryCount < 10) {
      setHailMaryCount(prev => prev + 1);
    }
    if (hailMaryCount === 9) {
      setShowGlory(true);
    }
  };
  
  // Função para reiniciar o terço
  const resetTerco = () => {
    setCurrentStepIndex(0);
    setCurrentMysteryIndex(0);
    setHailMaryCount(0);
    setShowOurFather(false);
    setShowMysteryIntro(false);
    setShowGlory(false);
    setIsTercoCompleted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast.info("Iniciando um novo terço", { duration: 3000 });
  };
  
  // Obter classe de cores baseada no tipo de mistério
  const getMysteryColorClass = () => {
    switch (mysteryType) {
      case 'joyful':
        return 'bg-blue-50 border-blue-200';
      case 'sorrowful':
        return 'bg-red-50 border-red-200';
      case 'glorious':
        return 'bg-yellow-50 border-yellow-200';
      case 'luminous':
        return 'bg-indigo-50 border-indigo-200';
      default:
        return 'bg-vatican-light/50 border-vatican-gold/30';
    }
  };
  
  // Scroll para o topo quando a página carrega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {!isTercoCompleted ? (
            <>
              <div className="prayer-card mb-10 text-center">
                <h1 className="rosary-heading">
                  Santo Terço
                </h1>
                <p className="text-lg text-vatican-dark/80 mb-6">
                  Guia interativo para a oração do Santo Terço
                </p>
                
                {currentStepIndex < TercoSteps.length && (
                  <div className="bg-vatican-light/50 rounded-lg p-3">
                    <p className="text-vatican-dark/80">
                      Hoje: <span className="font-medium text-vatican-blue">{getMysteryTitle(mysteryType)}</span>
                    </p>
                  </div>
                )}
              </div>
              
              {/* Passos iniciais do terço */}
              {TercoSteps.map((step, index) => (
                <PrayerStep
                  key={step.id}
                  step={step}
                  onComplete={nextStep}
                  isActive={currentStepIndex === index}
                />
              ))}
              
              {/* Introdução ao mistério */}
              {showMysteryIntro && currentStepIndex >= TercoSteps.length - 1 && (
                <div className={`step-card ${getMysteryColorClass()} border-2 animate-fade-in`}>
                  <h3 className="text-2xl font-semibold text-vatican-dark mb-3">
                    {todaysMysteries[currentMysteryIndex].title}
                  </h3>
                  <p className="text-vatican-dark/80 mb-4">
                    Vamos meditar o {todaysMysteries[currentMysteryIndex].title}
                  </p>
                  <div className="bg-white/70 rounded-md p-4 border-l-4 border-vatican-gold mb-6">
                    <p className="text-vatican-dark/90 font-medium leading-relaxed">
                      {todaysMysteries[currentMysteryIndex].description}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleMysteryIntroComplete}
                      className="prayer-btn-gold"
                    >
                      Iniciar Mistério
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Pai-Nosso antes de cada mistério */}
              {showOurFather && currentStepIndex >= TercoSteps.length - 1 && (
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
                      Avançar
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Mistérios */}
              {!showOurFather && !showMysteryIntro && currentStepIndex >= TercoSteps.length - 1 && !showGlory && (
                <MysteryCard
                  mystery={todaysMysteries[currentMysteryIndex]}
                  onComplete={() => setShowGlory(true)}
                  isActive={true}
                  onPrayHailMary={handlePrayHailMary}
                  hailMaryCount={hailMaryCount}
                />
              )}
              
              {/* Glória ao Pai após cada dezena */}
              {showGlory && (
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
              )}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Terco;
