import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const IntroductionPage = () => {
  return (
    <div className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
      <div className="text-center mb-6 md:mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-vatican-dark mb-3 md:mb-4">
          Bem-vindo à Oração do Terço
        </h1>
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-vatican-gold flex items-center justify-center text-white text-xl md:text-2xl font-bold">
            ✝
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm shadow-md rounded-lg p-4 md:p-6 mb-5 md:mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-vatican-dark mb-3 md:mb-4">
          A Importância do Terço na Vida Católica
        </h2>
        <div className="space-y-3 md:space-y-4 text-sm md:text-base text-vatican-dark/80">
          <p>
            O Santo Terço é uma das devoções mais poderosas da Igreja Católica. Através dele, meditamos sobre os mistérios da vida, morte e ressurreição de Jesus Cristo na companhia de Maria.
          </p>
          <p>
            Esta oração tem sido recomendada por papas, santos e pela própria Nossa Senhora em diversas aparições, como em Fátima, onde pediu que rezássemos o terço todos os dias pela paz do mundo.
          </p>
          <p>
            Ao rezar o terço, não apenas honramos Maria, mas também somos conduzidos por ela até Jesus, pois, como disse São Luís Maria Grignion de Montfort: <em>"Maria é o caminho mais seguro, mais curto e mais perfeito para ir a Jesus."</em>
          </p>
        </div>
      </div>

      <div className="bg-vatican-light/50 backdrop-blur-sm rounded-lg p-4 md:p-6 mb-5 md:mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-vatican-dark mb-3 md:mb-4">
          Terço ou Rosário?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="bg-white/80 rounded-lg p-4 md:p-5 shadow-sm border border-vatican-gold/30">
            <h3 className="text-lg md:text-xl font-medium text-vatican-dark mb-2 md:mb-3">O Terço</h3>
            <p className="text-sm md:text-base text-vatican-dark/80 mb-3 md:mb-4">
              O Terço é composto por cinco dezenas (uma parte do Rosário), onde meditamos nos mistérios do dia específico, seguindo o calendário da Igreja.
            </p>
            <p className="text-sm md:text-base text-vatican-dark/80 mb-3 md:mb-4">
              É a forma mais comum e diária de oração, levando cerca de 15-20 minutos para ser completado.
            </p>
          </div>
          
          <div className="bg-white/80 rounded-lg p-4 md:p-5 shadow-sm border border-vatican-gold/30">
            <h3 className="text-lg md:text-xl font-medium text-vatican-dark mb-2 md:mb-3">O Rosário Completo</h3>
            <p className="text-sm md:text-base text-vatican-dark/80 mb-3 md:mb-4">
              O Rosário completo inclui os quatro conjuntos de mistérios: Gozosos, Luminosos, Dolorosos e Gloriosos, totalizando 20 mistérios.
            </p>
            <p className="text-sm md:text-base text-vatican-dark/80 mb-3 md:mb-4">
              É uma prática mais extensa, geralmente rezada em ocasiões especiais, retiros ou como parte de novenas.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 mt-5 md:mt-8">
        <Link to="/terco" className="w-full md:w-auto">
          <Button className="w-full md:w-auto prayer-btn-gold text-base md:text-lg py-4 md:py-6 px-6 md:px-8">
            Rezar o Terço
          </Button>
        </Link>
        <Link to="/rosario" className="w-full md:w-auto">
          <Button className="w-full md:w-auto prayer-btn text-base md:text-lg py-4 md:py-6 px-6 md:px-8 bg-vatican-dark hover:bg-vatican-dark/90">
            Rezar o Rosário Completo
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default IntroductionPage; 